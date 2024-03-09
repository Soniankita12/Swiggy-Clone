import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItem} />
      </div>

      {cartItem.length === 0 ? (
        <div className=" m-20 p-20 ">
          <h1 className="font-bold text-5xl text-green-500 animate-bounce">
            your cart is Empty please add
          </h1>
          <button className="border border-inherit bg-green-500 w-40 m-2 p-2 rounded-lg">
            <Link
              to="/"
              className=" flex items-center justify-center gap-2 ">
                 Go to Home
            </Link>
          </button>
        </div>
      ) : (
        <button
          onClick={handleClearcart}
          className="p-2 m-2 border border-inherit rounded-xl bg-green-500">
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
