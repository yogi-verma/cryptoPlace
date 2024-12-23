import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import img1 from '../../assets/crypto-img.png';
import img2 from '../../assets/news-img.jpg';
import img3 from '../../assets/stocks-img.jpg';
import img4 from '../../assets/notes-img.jpg';
import { Typewriter } from 'react-simple-typewriter';

import logo1 from '../../assets/bitcoin.png';
import logo2 from '../../assets/img5.png';
import logo3 from '../../assets/robo.png';
import logo4 from '../../assets/news-img2.png';

const Home = () => {
    return (
        <div className="home">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, type: 'spring', stiffness: 50 }}
            >
                <h1>
                    All in one <br />
                    <span
                        style={{
                            color: '#7927ff',
                            fontWeight: 'bold',
                            textShadow: '0 0 12px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)',
                            animation: 'glow 1.5s ease-in-out infinite alternate',
                        }}
                    >
                        <Typewriter
                            words={['Crypto', 'News', 'Stocks', 'Notes']}
                            loop={5}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </motion.div>

            <div className="logo-container">
                <img src={logo1} alt="Crypto" className="logo-class" />
                <img src={logo2} alt="News" className="logo-class" />
                <img src={logo3} alt="Stocks" className="logo-class" />
                <img src={logo4} alt="Notes" className="logo-class" />
            </div>

            <div className="home-container">
                <ul className="card-list">
                    <Link to="/crypto" className="card-link">
                        <motion.li
                            className="card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 50,
                            }}
                        >
                            <img src={img1} alt="Crypto" className="card-image" />
                            <span className="card-text">Crypto</span>
                            <p className="card-description">Explore the latest trends and news in the world of cryptocurrency and blockchain technology.</p>
                        </motion.li>
                    </Link>
                    <Link to="/news" className="card-link">
                        <motion.li
                            className="card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.8,
                                type: 'spring',
                                stiffness: 50,
                            }}
                        >
                            <img src={img2} alt="News" className="card-image" />
                            <span className="card-text">News</span>
                            <p className="card-description">Stay updated with breaking news and global headlines from reliable sources across the world.</p>
                        </motion.li>
                    </Link>
                    <Link to="/summary" className="card-link">
                        <motion.li
                            className="card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2,
                                type: 'spring',
                                stiffness: 50,
                            }}
                        >
                            <img src={img4} alt="AI-Notes" className="card-image" />
                            <span className="card-text">AI-Notes</span>
                            <p className="card-description">Summarize and simplify complex content with AI-powered note-taking solutions tailored to your needs.</p>
                        </motion.li>
                    </Link>
                    <Link to="/stocks" className="card-link">
                        <motion.li
                            className="card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2.2,
                                type: 'spring',
                                stiffness: 50,
                            }}
                        >
                            <img src={img3} alt="Stocks" className="card-image" />
                            <span className="card-text">Stocks</span>
                            <p className="card-description">Get insights and analysis on stock markets to make informed investment decisions effectively.</p>
                        </motion.li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Home;
