// src/components/NavBar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from '../temp/logo.jpg';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-amber-500 font-semibold border-b-2 border-amber-500"
      : "text-white hover:text-amber-300 transition duration-200";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-amber-500 font-semibold border-l-4 border-amber-500 pl-4 py-2"
      : "text-gray-800 hover:text-amber-500 transition duration-200 pl-4 py-2";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-cyan-800 px-4 py-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img 
                src={LOGO} 
                alt="BatCraft Repairs Logo" 
                className="rounded-full w-14 h-14 md:w-16 md:h-16 object-cover border-2 border-amber-500"
              />
              {/* <span className="ml-3 text-white text-xl font-bold hidden sm:block">
                BatCraft<span className="text-amber-400">Repairs</span>
              </span> */}
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/shop" className={navLinkClass}>
              Shop New
            </NavLink>
            <NavLink to="/service" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/price" className={navLinkClass}>
              Pricing
            </NavLink>
            <NavLink 
              to="/contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4">
            <NavLink 
              to="/about" 
              className={mobileNavLinkClass}
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/shop" 
              className={mobileNavLinkClass}
              onClick={toggleMenu}
            >
              Shop New
            </NavLink>
            <NavLink 
              to="/service" 
              className={mobileNavLinkClass}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/price" 
              className={mobileNavLinkClass}
              onClick={toggleMenu}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/contact" 
              className="mt-4 mx-4 bg-amber-500 text-white text-center py-2 rounded-lg hover:bg-amber-600 transition duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;