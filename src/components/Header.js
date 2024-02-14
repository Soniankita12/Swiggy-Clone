import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign in");
  const OnlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Delivery App" />
      </div>
      <div className="navbar-items">
        <ul>
          <li className="online">{OnlineStatus ? "🟢online" : "🔴offline"} </li>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/groceries" className="link">
              Groceries
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Sign in"
                ? setbtnName("Sign out")
                : setbtnName("Sign in");
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
