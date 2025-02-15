import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Groceries", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Womens Wear", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const switchWebsite = () => {
    window.location.href = "https://example.com"; // Replace with the target website URL
  };

  return (
    <div className="backdrop-blur-md bg-white/10 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <img src={Logo} alt="Logo" className="w-12" />
          <span className="text-primary">Zero-Margin</span>
        </a>
        
        {/* Navigation & Search */}
        <div className="flex items-center gap-6">
          
          <div className="relative hidden sm:flex items-center group">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 sm:w-60 group-hover:w-72 transition-all duration-300 border border-gray-300 bg-transparent rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
            <IoMdSearch className="absolute right-3 text-gray-500 group-hover:text-primary transition-all duration-300" />
          </div>
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-all duration-200 text-white py-2 px-5 rounded-full flex items-center gap-2"
          >
            <FaCartShopping className="text-xl" />
            <span className="hidden sm:inline">Order</span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
