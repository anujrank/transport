import React, { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto sm:px-12 md:px-5">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="cursor-pointer" onClick={() => navigate("/")}>
              <img
                src="/logo.png"
                alt="Logo"
                className="h-48 w-auto object-contain"
              />
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-semibold text-sm tracking-wide uppercase">
              
              <li
                className={`cursor-pointer transition-colors duration-200 hover:text-amber-500 hover:underline underline-offset-4 ${
                  location.pathname === "/"
                    ? "text-amber-500 underline"
                    : "text-slate-600"
                }`}
                onClick={() => navigate("/")}
              >
                <span>Home</span>
              </li>

              <li
                className={`cursor-pointer transition-colors duration-200 hover:text-amber-500 hover:underline underline-offset-4 ${
                  location.pathname === "/about"
                    ? "text-amber-500 underline"
                    : "text-slate-600"
                }`}
                onClick={() => navigate("/about")}
              >
                <span>About</span>
              </li>

              <li
                className={`cursor-pointer transition-colors duration-200 hover:text-amber-500 hover:underline underline-offset-4 ${
                  location.pathname === "/service"
                    ? "text-amber-500 underline"
                    : "text-slate-600"
                }`}
                onClick={() => navigate("/service")}
              >
                <span>Services</span>
              </li>

              <li
                className={`cursor-pointer transition-colors duration-200 hover:text-amber-500 hover:underline underline-offset-4 ${
                  location.pathname === "/contact"
                    ? "text-amber-500 underline"
                    : "text-slate-600"
                }`}
                onClick={() => navigate("/contact")}
              >
                <span>Contact</span>
              </li>

            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-slate-700 cursor-pointer p-1 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoCloseSharp /> : <IoMenuOutline />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 border-t border-slate-100 pt-4 pl-7 font-semibold text-sm tracking-wide uppercase">
            
            <li
              className={`cursor-pointer py-1 transition-colors ${
                location.pathname === "/"
                  ? "text-amber-500 font-bold"
                  : "text-slate-600 hover:text-blue-600"
              }`}
              onClick={() => handleNavigation("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-1 transition-colors ${
                location.pathname === "/about"
                  ? "text-amber-500 font-bold"
                  : "text-slate-600 hover:text-blue-600"
              }`}
              onClick={() => handleNavigation("/about")}
            >
              About
            </li>

            <li
              className={`cursor-pointer py-1 transition-colors ${
                location.pathname === "/service"
                  ? "text-amber-500 font-bold"
                  : "text-slate-600 hover:text-blue-600"
              }`}
              onClick={() => handleNavigation("/service")}
            >
              Services
            </li>

            <li
              className={`cursor-pointer py-1 transition-colors ${
                location.pathname === "/contact"
                  ? "text-amber-500 font-bold"
                  : "text-slate-600 hover:text-blue-600"
              }`}
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