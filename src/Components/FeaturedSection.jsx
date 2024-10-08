import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import otherProducts from '../utils/otherProducts'; // Import otherProducts
import { addToCart } from '../cartSlice';

import { useDispatch } from 'react-redux';
const FeaturedSection = () => {
  return (
    <section className="min-h-screen bg-black p-10">
      <h1 className="text-center mb-16 text-6xl font-bold font-serif text-white">
        Our Featured Category
      </h1>

      {/* Watches */}
      <h2 className=" mb-16 text-4xl font-bold">
        <span
          className="ml-2 text-white"
          style={{
            textShadow: `0 0 10px rgba(254, 255, 255, 0.8), 
                        0 0 20px rgba(255, 255, 255, 0.8), 
                        0 0 30px #08e4f8, 
                        0 0 40px #ffffff`,
          }}
        >
          ______Watches
        </span>
      </h2>
      <Category type="watches" />

      {/* Mobiles */}
      <h2 className=" mb-16 text-4xl font-bold">
        <span
          className="ml-2 text-white"
          style={{
            textShadow: `0 0 10px rgba(254, 255, 255, 0.8), 
                        0 0 20px rgba(255, 255, 255, 0.8), 
                        0 0 30px #08e4f8, 
                        0 0 40px #ffffff`,
          }}
        >
          ______Mobiles
        </span>
      </h2>
      <Category type="mobiles" />

      {/* Laptops */}
      <h2 className=" mb-16 text-4xl font-bold">
        <span
          className="ml-2 text-white"
          style={{
            textShadow: `0 0 10px rgba(254, 255, 255, 0.8), 
                        0 0 20px rgba(255, 255, 255, 0.8), 
                        0 0 30px #08e4f8, 
                        0 0 40px #ffffff`,
          }}
        >
          ______Laptops
        </span>
      </h2>
      <Category type="laptops" />
    </section>
  );
};

// Category component with prop validation
const Category = ({ type }) => {
  // Filter products based on type
  const productsForCategory = otherProducts.filter(product => {
    if (type === "watches") return product.id >= 81 && product.id <= 84; // Watches IDs
    if (type === "mobiles") return product.id >= 91 && product.id <= 94; // Mobiles IDs
    if (type === "laptops") return product.id >= 71 && product.id <= 74; // Laptops IDs
    return [];
  });
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, num: 1 }));
    alert(`${product.name} has been added to the cart!`);
  };
  
  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsForCategory.map((product) => (
          <motion.div
            key={product.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-lg font-semibold text-gray-300">{`$${product.price}`}</p>
            {/* Rating Section */}
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${index < Math.round(product.rating) ? 'text-purple-400' : 'text-white'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 2 8.19 7.63 1 8.24l5.46 4.73L5.82 20z" />
                </svg>
              ))}
              <span className="ml-2 text-white">{product.rating}</span>
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-purple-700 transition"
              style={{
                boxShadow: '0 0 5px rgba(0, 140, 255, 0.8), 0 0 10px rgba(0, 140, 255, 0.8)',
              }}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Add prop types for the Category component
Category.propTypes = {
  type: PropTypes.oneOf(['watches', 'mobiles', 'laptops']).isRequired,
};

export default FeaturedSection;
