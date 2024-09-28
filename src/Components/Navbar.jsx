import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useSelector } from 'react-redux';
import { useAuth } from "../contexts/authContext/index";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartList = useSelector((state) => state.cart.cartList);

  const { user } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/" className="text-white hover:text-purple-400 transition duration-300">Home</Link>
      <Link to="/about" className="text-white hover:text-purple-400 transition duration-300">About</Link>
      <Link to="/shopping" className="text-white hover:text-purple-400 transition duration-300">Shopping</Link>
      <Link to="/cart" className="relative flex items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full">
          <i className="fas fa-shopping-cart text-white"></i>
        </div>
        {cartList.length > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white rounded-full text-xs px-1 py-0.5">
            {cartList.length}
          </span>
        )}
      </Link>

      {user ? (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300">
        Login
      </Link>
      <Link to="/signup" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300">
        Sign Up
      </Link>
        </>
      )}

    </ul>
  );

  return (
    <nav className="bg-gray-900 p-4 shadow-lg transition-all duration-300 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        </div>

        <div className="hidden lg:flex space-x-6">
          {navList}
        </div>

        <div className="lg:hidden flex items-center space-x-4 h-10">
          <Link to="/cart" className="relative flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full">
              <i className="fas fa-shopping-cart text-white"></i>
            </div>
            {cartList.length > 0 && (
              <span className=" top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs px-1 py-0.5">
                {cartList.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'} mt-2`}>
  <div className="flex flex-col justify-center items-center space-y-4">
    <Link to="/" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">Home</Link>
    <Link to="/about" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">About</Link>
    <Link to="/shopping" className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300">Shopping</Link>
    <Link to="/cart">
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
        Visualize Cart
      </button>
    </Link>
    {user ? (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300">
        Login
      </Link>
      <Link to="/signup" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300">
        Sign Up
      </Link>
        </>
      )}
  </div>
</div>

    </nav>
  );
};

export default Navbar;

