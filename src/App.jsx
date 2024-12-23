import Navbar from "./components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Crypto from "./pages/Crypto/Crypto"
import Coin from "./pages/Coin/Coin"
import Footer from "./components/Footer/Footer"
import News from "./components/News/News"
import Summarizer from "./components/Summary/Summarizer"
import Stocks from "./components/Stocks/Stocks"


const App = () => {
  return (
    
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/news" element={<News />} />
        <Route path="/summary" element={<Summarizer />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
      <Footer />
    </div>
    
  )
}



export default App