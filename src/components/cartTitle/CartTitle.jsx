import React from "react";
import { useDispatch } from "react-redux";
import { removeTocart } from "../../store/slices/cartSlice";

const CartTitle = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeTocart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center p-5 justify-between border-2 border-gray-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.tile}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-orange-600 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTitle;
