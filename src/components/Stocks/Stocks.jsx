import { useEffect, useState } from 'react';
import './Stocks.css';
import { Typewriter } from 'react-simple-typewriter';

const Stocks = () => {
  const [nseStocks, setNseStocks] = useState([]);
  const [bseStocks, setBseStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStocks = async () => {
    try {
      const nseResponse = await fetch('https://indian-stock-exchange-api2.p.rapidapi.com/NSE_most_active', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '40c5526a22mshadecf3687054b3ep1f00b3jsnb941f35fc819',
          'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com',
        },
      });
      const bseResponse = await fetch('https://indian-stock-exchange-api2.p.rapidapi.com/BSE_most_active', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '40c5526a22mshadecf3687054b3ep1f00b3jsnb941f35fc819',
          'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com',
        },
      });

      const nseData = await nseResponse.json();
      const bseData = await bseResponse.json();

      const formattedNseData = nseData.map((stock) => ({
        company: stock.company,
        price: stock.price,
        net_change: stock.netChange,
        volume: stock.volume,
        high: stock.high,
        low: stock.low,
        percentChange: stock.percent_change
      }));

      const formattedBseData = bseData.map((stock) => ({
        company: stock.company,
        price: stock.price,
        net_change: stock.netChange,
        volume: stock.volume,
        high: stock.high,
        low: stock.low,
        percentChange: stock.percent_change
      }));

      setNseStocks(formattedNseData);
      setBseStocks(formattedBseData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  if (loading) {
    return         <div className="news-loading">
    <div className="loader"></div>
</div>;
  }

  return (
    <div className="stocks-container">
        <h1>
      India's Most Active <br />
      <span style={{ 
        color: '#7927ff', 
        fontWeight: 'bold',
        textShadow: '0 0 12px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)',
          animation: 'glow 1.5s ease-in-out infinite alternate' 
        }}>
        <Typewriter
          words={['NSE Stocks', 'BSE Stocks']}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>

      <div className="table-section">
        <h2>NSE Most Active Stocks</h2>
        <table className="stocks-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Price</th>
              <th>% Change</th>
              <th>High</th>
              <th>Low</th>
              {/* <th>Volume</th> */}
            </tr>
          </thead>
          <tbody>
            {nseStocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.company}</td>
                <td>{stock.price}</td>
                <td
                 style={{
                    textAlign: "center",
                    color: stock.percentChange > 0 ? "green" : "red",
                  }}
                >{stock.percentChange}</td>
                <td>{stock.high}</td>
                <td>{stock.low}</td>
                {/* <td>{stock.volume.toLocaleString()}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-section">
        <h2>BSE Most Active Stocks</h2>
        <table className="stocks-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Price</th>
              <th>% Change</th>
              <th>High</th>
              <th>Low</th>
              {/* <th>Volume</th> */}
            </tr>
          </thead>
          <tbody>
            {bseStocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.company}</td>
                <td>{stock.price}</td>
                <td  style={{
                  color: stock.percentChange > 0 ? "green" : "red"
                }}>{stock.percentChange}</td>
                
                <td>{stock.high}</td>
                <td>{stock.low}</td>
                {/* <td>{stock.volume.toLocaleString()}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stocks;
