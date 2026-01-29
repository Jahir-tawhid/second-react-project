import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navigation data array to keep the code DRY (Don't Repeat Yourself)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  // Helper functions
  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-green-800 text-white py-4 md:py-6 sticky top-0 z-50 shadow-md">
      <div className="w-full flex justify-between items-center px-6">
        {/* Logo Container */}
        <h2 className="text-xl font-bold">Simple React</h2>

        {/* Mobile menu toggle icon */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? "text-red-600 font-bold"
                    : "hover:text-green-600"
                } transition-colors duration-300`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <Link to="/login" className="hidden md:block">
          <button className="bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-600 transition-colors">
            LogIn
          </button>
        </Link>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden w-full bg-green-900 absolute top-full left-0 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible h-auto" : "opacity-0 invisible h-0"
          }`}
        >
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={`${
                    isActive(link.path)
                      ? "text-orange-400 font-bold"
                      : "text-white"
                  } hover:text-green-600 text-lg`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="bg-white text-black px-8 py-2 rounded font-medium mt-2">
                  LogIn
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
