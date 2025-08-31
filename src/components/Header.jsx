import { useState } from "react";
import {NavLink} from "react-router-dom"
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold text-gray-800">Foodie</h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <NavLink
            to="/"
            // className="hover:text-orange-500 transition duration-200"
            className={({isActive})=> isActive ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500 transition duration-200"}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=> isActive ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500 transition duration-200"}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
        className={({isActive})=> isActive ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500 transition duration-200"}
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
        className={({isActive})=> isActive ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500 transition duration-200"}
          >
            Cart
          </NavLink>
          <NavLink
            to="/profile"
            className={({isActive})=> isActive ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500 transition duration-200"}
          >
            Profile
          </NavLink>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md"
          onClick={()=>setIsLoggedIn(!isLoggedIn)} >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
