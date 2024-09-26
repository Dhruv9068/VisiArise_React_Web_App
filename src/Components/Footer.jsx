// src/Footer.js

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Ensure react-icons is installed
import { Link } from 'react-router-dom'; // Import Link for navigation
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center mb-4">
          <img src="/file.png" alt="Web Icon" className="w-20 h-20" /> {/* Replace with your web icon path */}
          <p className="text-white mt-2">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>

        {/* Main Page Links */}
        <div className="flex space-x-6 mb-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/about" className="text-white hover:underline">About Us</Link>
          <Link to="/shopping" className="text-white hover:underline">Shopping</Link>
          <Link to="/cart" className="text-white hover:underline">Cart</Link>
          {/* <Link to="/contact" className="text-white hover:underline">Contact Us</Link> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
            <IoMdMail className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
