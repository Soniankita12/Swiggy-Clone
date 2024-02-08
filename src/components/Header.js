import { useState } from "react";
import LOGO_URL from "../../utils/constants";
const Header = () => {
  const [btnName, setbtnName] = useState("Sign in");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Delivery App" />
      </div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{(btnName==="Sign in")?setbtnName("Sign out"):setbtnName("Sign in")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
