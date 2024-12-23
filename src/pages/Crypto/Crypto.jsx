import './Crypto.css';
import { useContext, useState, useEffect } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  // List of finance quotes
  const quotes = [
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "Price is what you pay. Value is what you get. - Warren Buffett",
    "Investing should be more like watching paint dry or watching grass grow. - Paul Samuelson",
    "Do not be embarrassed by your failures, learn from them and start again. - Richard Branson",
    "Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1. - Warren Buffett",
    "Know what you own, and know why you own it. - Peter Lynch",
    "Do not be in too big a hurry to get wealth. - John D. Rockefeller",
    "The big money is not in the buying and selling, but in the waiting. - Charlie Munger",
    "It's not how much money you make, but how much money you keep. - Robert Kiyosaki"
  ];

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === '') setDisplayCoin(allCoin);
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    
    <div className="home">
       <div className="scroll-container">
          <div className="scroll-text">
              !! Invest wisely, not recklessly—make informed decisions for a secure future. Take control of your financial journey with smart strategies. !!
          </div>
        </div>

      <div className="hero">
      <h1>
      India's Largest <br />
      <span style={{ 
        color: '#7927ff', 
        fontWeight: 'bold',
        textShadow: '0 0 12px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)',
          animation: 'glow 1.5s ease-in-out infinite alternate' 
        }}>
        <Typewriter
          words={['Crypto MarketHub', 'NFT Hub', 'DeFi Space', 'Next-Gen Crypto', 'Trading Hub']}
          loop={5} // Number of loops; `0` loops forever
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Search Crypto..."
            onChange={inputHandler}
            required
            value={input}
            list="coinlist"
          />
          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option value={item.name} key={index} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hrs Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 15).map((coin, index) => {
          return (
            <Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
              <p>{coin.market_cap_rank}</p>
              <div>
                <img src={coin.image} alt="" />
                <p>{coin.name + "-" + coin.symbol}</p>
              </div>
              <p>{currency.symbol}{coin.current_price.toLocaleString()}</p>
              <p
                style={{
                  textAlign: "center",
                  color: coin.price_change_percentage_24h > 0 ? "green" : "red"
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="market-cap">{currency.symbol}{coin.market_cap.toLocaleString()}</p>
            </Link>
          );
        })}
      </div>

      {/* Quote Carousel */}
      <div className="quote-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
        >
          {quotes.map((quote, index) => (
            <div key={index}>
              <p className="quote">{quote}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
