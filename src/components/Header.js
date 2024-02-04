import LOGO_URL from "../../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Food Delivery App"
        />
      </div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

