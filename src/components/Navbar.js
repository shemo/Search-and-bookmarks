import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/bloowatch-logo.png";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl text-[#1d659a] font-semibold">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
          Search & Bookmark
        </NavLink>
        <NavLink to="/bookmarked" className="text-gray-600 hover:text-gray-800">
          Bookmarked Repositories
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
