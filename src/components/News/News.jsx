import { useState, useEffect } from "react";
import axios from "axios";
import "./News.css"; 
import { Typewriter } from 'react-simple-typewriter';
import { MdArrowForward } from 'react-icons/md'

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "pub_59796874e526583a48f8b50cf792512ceb1c0";
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=crypto&country=in&language=en&category=business,education,environment,science,technology`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1>
        Catch Latest news on <br />
        <span style={{ 
          color: '#7927ff', 
          fontWeight: 'bold',
          textShadow: '0 0 12px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)',
          animation: 'glow 1.5s ease-in-out infinite alternate' 
        }}>
          <Typewriter
            words={['Business', 'Education', 'Envivronment', 'Science', 'Technology']}
            loop={5}
            cursor
            cursorStyle="..."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      
      {loading ? (
        <div className="news-loading">
            <div className="loader"></div>
        </div>
      ) : news.length > 0 ? (
        <div className="news-grid">
          {news.map((article, index) => (
            <div key={index} className="news-card">
              <img
                src={article.image_url || "https://via.placeholder.com/300"}
                alt={article.title}
                className="news-image"
              />
              <div className="news-content">
                <h2 className="news-article-title">{article.title}</h2>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  Read More →
                </a>
              </div>
              <div className="news-footer">
                Published on:{" "}
                {new Date(article.pubDate).toLocaleDateString() || "Unknown"}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="news-loading">No news found.</div>
      )}

      {/* Explore More Button */}
      <div className="explore-more-container">
        <a
          href="https://economictimes.indiatimes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-more-button"
        >
          Explore More
          <MdArrowForward className="explore-arrow" />
        </a>
      </div>
    </div>
  );
};

export default News;
