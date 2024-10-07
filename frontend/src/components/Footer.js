// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
          </ul>
        </div>

        {/* Communities Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Communities</h3>
          <ul>
            <li className="mb-2">
              <Link to="/for-artists" className="hover:text-gray-400">For Artists</Link>
            </li>
            <li className="mb-2">
              <Link to="/for-fans" className="hover:text-gray-400">For Fans</Link>
            </li>
            <li className="mb-2">
              <Link to="/for-influencers" className="hover:text-gray-400">For Influencers</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/support" className="hover:text-gray-400">Support</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:text-gray-400">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link to="/plans" className="hover:text-gray-400">Our Plan</Link>
            </li>
            <li className="mb-2">
              <Link to="/freemium" className="hover:text-gray-400">Freemium</Link>
            </li>
            <li className="mb-2">
              <Link to="/premium" className="hover:text-gray-400">Premium</Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Africa 2 The World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
