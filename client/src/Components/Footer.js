// Footer.js

import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center flex-wrap md:flex-no-wrap" style={{ background: 'none' }}>
        {/* First Column: MNNIT Blogs Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">MNNITBlogs</p> {/* Adjust the font size as needed */}
        </div>

        {/* Second Column: Links */}
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <a href="/terms" className="text-lg md:text-xl hover:text-gray-500">Terms of Service</a>
          <a href="/privacy" className="text-lg md:text-xl hover:text-gray-500">Privacy Policy</a>
          <a href="/about" className="text-lg md:text-xl hover:text-gray-500">About Us</a>
        </div>

        {/* Third Column: Social Media Links (Aligned Horizontally) */}
        <div className="flex items-center space-x-4">
          <a href="https://twitter.com/mnnitblogs" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={32} /> {/* Adjust the size as needed */}
          </a>
          <a href="https://facebook.com/mnnitblogs" target="_blank" rel="noopener noreferrer">
            <RiFacebookBoxFill size={32} /> {/* Adjust the size as needed */}
          </a>
          <a href="https://linkedin.com/company/mnnitblogs" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} /> {/* Adjust the size as needed */}
          </a>
        </div>
      </div>

      {/* Copyright Statement */}
      <div className="text-center mt-4 text-sm">
        &copy; 2024 MNNIT Blogs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
