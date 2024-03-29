import React from "react";
import { useDispatch } from "react-redux";
import { removeTocart } from "../../store/slices/cartSlice";

const CartTitle = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeTocart(cartItem.id));
  }

  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 mb-4 md:w-full">
      <div className="flex items-center space-x-4">
        <img
          src={cartItem?.image}
          className="h-24 w-24 object-cover rounded-lg"
          alt={cartItem?.title}
        />
        <div>
          <h1 className="text-lg font-bold text-gray-800">{cartItem?.title}</h1>
          <p className="text-gray-600 font-semibold">${cartItem?.price}</p>
        </div>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="bg-red-600 text-white rounded-lg font-semibold px-4 py-2 md:px-6 md:py-3"
      >
        Remove
      </button>
    </div>
  );
};

export default CartTitle;
