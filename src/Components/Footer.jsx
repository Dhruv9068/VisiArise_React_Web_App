// src/Footer.js


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Web Icon */}
        <div className="flex items-center ml-20">
          <img src="/file.png" alt="Web Icon" className="w-20 h-20" /> {/* Replace with your web icon path */}
          
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 mr-20">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
