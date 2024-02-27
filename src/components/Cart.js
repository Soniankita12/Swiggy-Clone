import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

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
        <h1>your cart is Empty please add</h1>
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
