import './Navbar.css';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { Link} from 'react-router-dom';
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

// const clientId = "241267182164-rg1oc585f6lv08ru5dv07i548lihthae.apps.googleusercontent.com"




const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  // const onSuccess = (res) =>{
  //   console.log("Login Successfull");
  //   console.log(res.profileObj);
  // }

  // const onFailure = (res) => {
  //   console.log("Login Failed");
  //   console.log(res);
  // }


  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <div className="nav-right">
        <select onChange={currencyHandler} aria-label="Select currency">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

       {/* <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          clientId = {clientId}
          buttonText = "Login"
          onSuccess = {onSuccess}
          onFailure = {onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          className="google-button"
        />
        </GoogleOAuthProvider> */}
      </div>
    </div>
  );
};

export default Navbar;
