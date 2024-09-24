import { motion } from 'framer-motion';


// Your existing product data
const products = [
  { id: 1, name: 'Product 1', image: '/Product_img/products1.png', rating: 4.5, price: '$29.99', reviews: '245 Reviews' },
  { id: 2, name: 'Product 2', image: '/Product_img/products2.png', rating: 4.2, price: '$39.99', reviews: '130 Reviews' },
  { id: 3, name: 'Product 3', image: '/Product_img/products3.png', rating: 5.0, price: '$49.99', reviews: '310 Reviews' },
  { id: 4, name: 'Product 4', image: '/Product_img/products4.png', rating: 5.0, price: '$49.99', reviews: '310 Reviews' },
  { id: 5, name: 'Product 5', image: '/Product_img/product5.png', rating: 4.0, price: '$19.99', reviews: '120 Reviews' },
  { id: 6, name: 'Product 6', image: '/Product_img/product6.png', rating: 4.8, price: '$69.99', reviews: '500 Reviews' },
  { id: 7, name: 'Product 7', image: '/Product_img/product7.png', rating: 3.9, price: '$22.99', reviews: '85 Reviews' },
  { id: 8, name: 'Product 8', image: '/Product_img/products8.png', rating: 4.3, price: '$33.99', reviews: '205 Reviews' },
  { id: 9, name: 'Product 9', image: '/Product_img/product9.png', rating: 4.7, price: '$55.99', reviews: '315 Reviews' },
  { id: 10, name: 'Product 10', image: '/Product_img/product10.png', rating: 5.0, price: '$89.99', reviews: '400 Reviews' },
  { id: 11, name: 'Product 11', image: '/Product_img/product11.png', rating: 4.1, price: '$23.99', reviews: '160 Reviews' },
  { id: 12, name: 'Product 12', image: '/Product_img/products12.png', rating: 4.6, price: '$42.99', reviews: '280 Reviews' },
];

const BestDeals = () => {
  return (
    <section className="min-h-screen bg-black p-10">
      <h1 className="text-center mb-16 text-6xl font-bold font-serif text-white">
        Our Best Deals
        
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
    </section>
  );
};

// Adding an Add to Cart function for handling clicks
const handleAddToCart = (product) => {
  alert(`${product.name} has been added to the cart!`);
};

export default BestDeals;
