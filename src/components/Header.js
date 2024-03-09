import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { TiHome } from "react-icons/ti";
import { GiGrain } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign in");

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
          <li className="px-4 ">
            <Link
              to="/"
              className="font-bold text-xl flex items-center justify-center gap-2 ">
              <TiHome /> Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/groceries"
              className="font-bold text-xl flex items-center justify-center gap-2">
              <GiGrain /> Groceries
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/about"
              className="font-bold text-xl flex items-center justify-center gap-2">
              <IoIosPeople />
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/contact"
              className="font-bold text-xl flex items-center justify-center gap-2">
              <IoCall /> contact Us
            </Link>
          </li>
          <li className="  px-4 ">
            <Link
              to="/cart"
              className=" font-bold text-xl flex items-center justify-center gap-2">
              <FaCartShopping /> Cart ({cartItems.length}items)
            </Link>
          </li>
          <li className="px-4 animate-pulse">
            {OnlineStatus ? "🟢" : "🔴"}{" "}
          </li>
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
