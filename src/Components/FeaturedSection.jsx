import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes
import otherProducts from "../utils/otherProducts";

// const otherProducts = {
//   watches: [
//     { id: 1, name: 'Watch 1', image: '/Product_img/watch-05.png', price: '$199', rating: 4.5 },
//     { id: 2, name: 'Watch 2', image: '/Product_img/watch-02.jpg', price: '$249', rating: 4.0 },
//     { id: 3, name: 'Watch 3', image: '/Product_img/watch-03.jpg', price: '$299', rating: 4.7 },
//     { id: 4, name: 'Watch 4', image: '/Product_img/watch-04.jpg', price: '$349', rating: 5.0 },
//   ],
//   mobiles: [
//     { id: 1, name: 'Mobile 1', image: '/Product_img/phone1.jpg', price: '$799', rating: 4.8 },
//     { id: 2, name: 'Mobile 2', image: '/Product_img/phone2.png', price: '$899', rating: 4.5 },
//     { id: 3, name: 'Mobile 3', image: '/Product_img/phone3.png', price: '$999', rating: 4.9 },
//     { id: 4, name: 'Mobile 4', image: '/Product_img/phone4.png', price: '$1099', rating: 4.6 },
//   ],
//   laptops: [
//     { id: 1, name: 'Laptop 1', image: '/Product_img/laptop1.jpg', price: '$1199', rating: 4.7 },
//     { id: 2, name: 'Laptop 2', image: '/Product_img/laptop2.jpg', price: '$1299', rating: 4.6 },
//     { id: 3, name: 'Laptop 3', image: '/Product_img/laptop3.jpg', price: '$1399', rating: 4.8 },
//     { id: 4, name: 'Laptop 4', image: '/Product_img/laptop4.jpeg', price: '$1499', rating: 4.9 },
//   ],
// };

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
  let productsForCategory;

  // Hardcoding otherProducts based on type
  if (type === "watches") {
    productsForCategory = otherProducts.watches;
  } else if (type === "mobiles") {
    productsForCategory = otherProducts.mobiles;
  } else if (type === "laptops") {
    productsForCategory = otherProducts.laptops;
  }

  const handleAddToCart = (product) => {
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
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-lg font-semibold text-gray-300">{product.price}</p>
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
  type: PropTypes.oneOf(['watches', 'mobiles', 'laptops']).isRequired, // Validate type
};

export default FeaturedSection;
