import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../../store/slices/cartSlice";

const ProductTitle = ({ product }) => {
  const disptach = useDispatch();

  const handleAddTocart = () => {
    disptach(addTocart(product));
  };

  return (
    <div className="group flex flex-col items-center gap-3 p-4 h-[580px] mt-10 ml-5 rounded-xl">
      <div className="h-[300px] hover:h-[350px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover h-full w-full "
        />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-800 font-bold text-lg">
          {product?.title}
        </h1>
        <p>M.R.P : ${product?.price}</p>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <button
          onClick={handleAddTocart}
          className=" text-black border-2 rounded-lg p-3 font-sherif hover:bg-black hover:text-white"
        >
          {" "}
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductTitle;
