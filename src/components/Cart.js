import { TrashIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import RestaurantItemList from "./RestaurantItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Cart
      </h2>
      <span className="my-2 hidden sm:block">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleClearCart}
        >
          <TrashIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Clear
        </button>
      </span>{" "}
      {cartItems.length === 0 ? (
        <h1>Cart Empty ! </h1>
      ) : (
        <RestaurantItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
