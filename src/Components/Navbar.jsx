// src/Navbar.js
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-gray-900 p-4 shadow-lg transition-all duration-300 ${isOpen ? 'h-screen' : 'h-18'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={`/logo.png`} alt="Logo" className="h-10 mr-2" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-purple-400 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-purple-400 transition duration-300">Shopping</a>
          <a href="#" className="text-white hover:text-purple-400 transition duration-300">About</a>
          <button className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300">
            Visualize Cart
          </button>
          <a href="#" className="text-white hover:text-purple-400 transition duration-300">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <a href="#" className="mr-4 text-white hover:text-purple-400 transition duration-300">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white focus:outline-none transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>
      </div>
      <div className={`absolute top-16 left-0 right-0 bg-gray-800 transform transition-transform duration-300 ${isOpen ? 'h-screen' : 'h-0 overflow-hidden'}`}>
        <div className={`flex flex-col justify-center items-center transition-transform duration-300`}>
          <a href="#" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">Home</a>
          <a href="#" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">Shopping</a>
          <a href="#" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">About</a>
          <button className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300 w-3/4 mt-4">
            Visualize Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
