import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-900">
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6 lg:px-0">
        <Link
          to={"/"}
          className="text-white font-bold text-xl sm:text-2xl md:text-3xl"
        >
          Trendify
        </Link>
        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <ul
          className={`lg:flex items-center space-x-6 text-gray-300 font-semibold mt-4 lg:mt-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to={"/"} className="hover:text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/shop"} className="hover:text-white hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="hover:text-white hover:underline">
              Cart
            </Link>
          </li>
          <li>
            <span className="text-gray-400 cursor-not-allowed">Blog</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
