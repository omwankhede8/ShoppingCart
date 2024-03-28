import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900">
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"} className="ml-5">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            Trendify
          </h1>
        </Link>
        <ul className="flex items-center space-x-6 text-gray-300 font-semibold mr-5">
          <Link to={"/"} className="hover:text-white">
            <li className="cursor-pointer hover:underline hover:bg-orange-300 font-bold border-2 border-transparent rounded-lg py-1 px-2">
              Home
            </li>
          </Link>
          <Link to={"/shop"} className="hover:text-white">
            <li className="cursor-pointer hover:underline hover:bg-orange-300 font-bold border-2 border-transparent rounded-lg py-1 px-2">
              Shop
            </li>
          </Link>
          <Link to={"/about"} className="hover:text-white">
            <li className="cursor-pointer hover:underline hover:bg-orange-300 font-bold border-2 border-transparent rounded-lg py-1 px-2">
              About
            </li>
          </Link>
          <Link to={"/cart"} className="hover:text-white">
            <li className="cursor-pointer hover:underline hover:bg-orange-300 font-bold border-2 border-transparent rounded-lg py-1 px-2">
              Cart
            </li>
          </Link>
          <li className="cursor-not-allowed hover:text-white">
            <span className="font-bold border-2 border-transparent rounded-lg py-1 px-2 opacity-50">
              Blog
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
