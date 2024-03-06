import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign in");

  const { loggedInUser } = useContext(UserContext);
  console.log("user");
  const OnlineStatus = useOnlineStatus();

  //selector h react hook -subscribing our store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" flex justify-between bg-pink-100 shadow-lg m-2 sticky top-0 z-10">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Food Delivery App" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">{OnlineStatus ? "🟢online" : "🔴offline"} </li>
          <li className="px-4">
            <Link to="/" className="font-bold text-xl">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/groceries" className="font-bold text-xl">
              Groceries
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="font-bold text-xl">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="font-bold text-xl">
              contact Us
            </Link>
          </li>
          <li className=" flex px-4 font-bold text-xl">
            <Link to="/cart">
              <FaCartShopping /> Cart ({cartItems.length}items)
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Sign in"
                ? setbtnName("Sign out")
                : setbtnName("Sign in");
            }}>
            {btnName}
            {loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
