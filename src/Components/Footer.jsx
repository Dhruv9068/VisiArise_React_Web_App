// src/Footer.js

import {  FaLinkedinIn } from 'react-icons/fa'; // Import necessary iconsimport { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Ensure react-icons is installed
import { Link } from 'react-router-dom'; // Import Link for navigation
import { IoMdMail } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { useState } from 'react';


const Footer = () => {
  // const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open the YouTube demo link in a new tab and subscribe
    window.open('https://youtu.be/7UZ7QdJ8d_c?si=hgQKgLG3IFtZ18s3', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        
        {/* Left Section: Logo & Description */}
        <div className="col-span-1 flex flex-col items-start">
          <img src="/file.png" alt="Logo" className="w-20 h-20 mb-4" /> {/* Update the image path as per your logo */}
          <p>VisiARise - Explore your world in augmented reality.</p>
        </div>

        {/* Center Sections: Links */}
        <div className="col-span-2 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul>
              <li><a href="/home" className="hover:text-purple-500">Home</a></li>
              <li><a href="/products" className="hover:text-purple-500">Products</a></li>
              <li><a href="/about" className="hover:text-purple-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-purple-500">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="/privacy" className="hover:text-purple-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-purple-500">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact & Social Icons */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="flex space-x-4 mb-4">
          <a href="https://youtu.be/7UZ7QdJ8d_c?si=hgQKgLG3IFtZ18s3" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
            <IoMdMail className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          </div>
          
         {/* Email Subscription */}
        <form onSubmit={handleSubmit} className="flex">
          {/* <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-l-lg w-full sm:w-auto outline-none"
          /> */}
          <button 
            type="submit" 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            Subscribe
          </button>
        </form>
        </div>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="mt-8 text-center">
        <p>© 2024 VisiARise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
