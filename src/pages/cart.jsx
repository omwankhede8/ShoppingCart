import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTitle from "../components/cartTitle/CartTitle";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(
      cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0).toFixed(2)
    );
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-6xl mx-auto mt-8 md:mt-0">
          <div className="flex flex-col justify-center items-center md:w-2/3 p-3">
            {cart.map((cartItem, index) => (
              <CartTitle key={index} cartItem={cartItem} />
            ))}
          </div>
          <div className="md:w-1/3">
            <div className="bg-gray-100 rounded-lg p-4">
              <h1 className="font-bold text-lg text-red-800 mb-4">
                Your Cart Summary
              </h1>
              <p className="text-gray-800">
                <span className="font-bold">Total Item:</span> {cart.length}
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Total Amount:</span> ${totalCart}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-gray-800 font-bold text-xl mb-4">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-blue-600 text-white border-2 rounded-lg font-bold py-2 px-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
