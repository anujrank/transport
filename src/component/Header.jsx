import React, { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20 lg:fixed overflow-hidden top-0 left-0 right-0 z-50 bg-white lg:px-40">
          
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
              Transport
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-medium">
              <li
                className="cursor-pointer hover:text-blue-600 transition duration-300"
                onClick={() => navigate("/")}
              >
                <span className="cursor-pointer">Home</span>
              </li>

              <li
                className="cursor-pointer hover:text-blue-600 transition duration-300"
                onClick={() => navigate("/about")}
              >
                <span className="cursor-pointer">About</span>
              </li>

              <li
                className="cursor-pointer hover:text-blue-600 transition duration-300"
                onClick={() => navigate("/services")}
              >
                <span className="cursor-pointer">Services</span>
              </li>

              <li
                className="cursor-pointer hover:text-blue-600 transition duration-300"
                onClick={() => navigate("/contact")}
              >
                <span className="cursor-pointer">Contact</span>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl cursor-pointer"
          >
            {menuOpen ? <IoCloseSharp /> : <IoMenuOutline />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 border-t pt-4 font-medium">
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleNavigation("/")}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleNavigation("/about")}
            >
              About
            </li>

            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleNavigation("/services")}
            >
              Services
            </li>

            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;