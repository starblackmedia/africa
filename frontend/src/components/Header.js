// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import your logo image

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <header className="bg-white text-black p-4 shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Search for Desktop */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="text-black md:hidden">
            <FaBars size={24} />
          </button>
          
          {/* Logo */}
          <Link to="/" className="mx-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Search music, artists..."
              className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold text-gray-700">
          <Link to="/discover" className="hover:text-yellow-500 transition duration-300">Discover Music</Link>
          <Link to="/blog" className="hover:text-yellow-500 transition duration-300">Blog</Link>
          <Link to="/events" className="hover:text-yellow-500 transition duration-300">Events</Link>
          <Link to="/crowdfund" className="hover:text-yellow-500 transition duration-300">Crowdfund Creatives</Link>
          <Link to="/spotlight" className="hover:text-yellow-500 transition duration-300">Spotlight</Link>
        </nav>

        {/* Sign Up & Login for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/signup" className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">Sign Up</Link>
          <Link to="/login" className="border border-yellow-500 text-yellow-500 py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">Login</Link>
        </div>

        {/* Right Side for Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Search Icon for Mobile */}
          <button onClick={toggleSearch} className="text-black">
            <FaSearch size={24} />
          </button>

          {/* Profile Icon for Mobile */}
          <Link to="/profile" className="text-black">
            <FaUserCircle size={24} />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t border-black z-10 md:hidden">
            <ul className="flex flex-col p-4 space-y-4">
              <li><Link to="/discover" onClick={toggleMenu}>Discover Music</Link></li>
              <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
              <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
              <li><Link to="/crowdfund" onClick={toggleMenu}>Crowdfund Creatives</Link></li>
              <li><Link to="/spotlight" onClick={toggleMenu}>Spotlight</Link></li>
              <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>
              <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
            </ul>
          </div>
        )}

        {/* Search Bar for Mobile */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 w-full bg-white z-10 md:hidden p-4 border-t border-gray-300">
            <input
              type="text"
              placeholder="Search music, artists..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-gray-500"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
