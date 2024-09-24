import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Ensure that you correctly extract cartList from the Redux store
  const cartList = useSelector((state) => state.cart.cartList); // Correctly access cartList here

  return (
    <nav className={`bg-gray-900 p-4 shadow-lg transition-all duration-300 ${isOpen ? 'h-screen' : 'h-18'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={`/logo.png`} alt="Logo" className="h-10 mr-2" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-400 transition duration-300">Home</Link>
          <Link to="/shopping" className="text-white hover:text-purple-400 transition duration-300">Shopping</Link>
          <Link to="/about" className="text-white hover:text-purple-400 transition duration-300">About</Link>
          <Link to="/cart">
        <button className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300">
          Visualize Cart
        </button>
      </Link>
      <Link to="/cart" className="text-white hover:text-purple-400 transition duration-300 relative">
        <i className="fas fa-shopping-cart"></i>
        {cartList.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
            {cartList.length}
          </span>
        )}
      </Link>

        </div>
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="mr-4 text-white hover:text-purple-400 transition duration-300">
            <i className="fas fa-shopping-cart"></i>
          </Link>
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
          <Link to="/" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">Home</Link>
          <Link to="/shopping" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">Shopping</Link>
          <Link to="/about" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">About</Link>
          <Link to="/cart">
            <button className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300 w-3/4 mt-4">
              Visualize Cart
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
