import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice'; // Assuming you have a Redux cart slice
import products from '../utils/products'; // Adjust the path to your actual data

const BestDeals = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, num: 1 }));
    
  };

  const handleProductClick = (productId) => {
    // Navigate to the product detail page with the productId
    // Use 'useNavigate' instead of 'useHistory'
    window.location.href = `/product/${productId}`; // Replace with 'useNavigate()' if using React Router v6
  };

  return (
    <section className="min-h-screen bg-black p-10">
      <h1 className="text-center mb-16 text-6xl font-bold font-serif text-white">
        Our Best Deals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => handleProductClick(product.id)} // Add onClick to navigate
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-lg font-semibold text-gray-300">${product.price}</p>
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
              <span className="ml-2 text-white">{product.reviews}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent click from bubbling up to the card
                handleAddToCart(product);
              }}
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
    </section>
  );
};

export default BestDeals;
