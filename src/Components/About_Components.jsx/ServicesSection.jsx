import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-20 px-8 md:px-16 relative overflow-hidden">
      {/* Animated Background Letters */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="flex flex-wrap justify-center items-center h-full">
          {['V', 'I', 'S', 'A', 'R', 'I', 'S', 'E', 'H', 'E', 'L', 'L', 'O', 'W', 'O', 'R', 'L', 'D'].map((letter, index) => (
            index > 10 && (
              <motion.div
                key={index}
                className="text-6xl font-bold neon-text"
                style={{
                  color: ['#ff20f0', '#01a7fa', '#ffffff'][index % 3],
                  position: 'absolute',
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                }}
                animate={{
                  x: [0, Math.random() * 10 - 5],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {letter}
              </motion.div>
            )
          ))}
        </div>
      </div>

      {/* Services Circles */}
      <div className="flex justify-center items-center w-full max-w-4xl mb-12 relative z-10">
        {/* Service 1: AR Visualization */}
        <div className="flex flex-col items-center relative group mr-16"> {/* Added margin for spacing */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-full shadow-lg p-8 transition-all duration-300"
            style={{ height: '200px', width: '200px', background: 'linear-gradient(45deg, #01a7fa, #ff20f0)' }}
            whileHover={{ x: -20 }} // Shift left on hover
          >
            <h3 className="text-2xl font-bold mb-2 text-center">AR Visualization</h3>
          </motion.div>

          <motion.div
            className="absolute left-full top-1/2 transform -translate-y-1/2 w-48 bg-white bg-opacity-75 text-black p-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-x-[-50%] z-20" // Show on group hover
          >
            Experience the power of Augmented Reality to visualize products in your space before making a purchase.
          </motion.div>
        </div>

        {/* Service 2: VisEcommerce */}
        <div className="flex flex-col items-center relative group mr-16"> {/* Added margin for spacing */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-full shadow-lg p-8 transition-all duration-300"
            style={{ height: '200px', width: '200px', background: 'linear-gradient(45deg, #3F51B5, #2196F3)' }}
            whileHover={{ x: -20 }} // Shift left on hover
          >
            <h3 className="text-2xl font-bold mb-2 text-center">VisEcommerce</h3>
          </motion.div>

          <motion.div
            className="absolute left-full top-1/2 transform -translate-y-1/2 w-48 bg-white bg-opacity-75 text-black p-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-x-[-50%] z-20" // Show on group hover
          >
            Get comprehensive e-commerce services and visualize products like never before, making online shopping seamless and fun.
          </motion.div>
        </div>
      </div>

      {/* Centered image of the girl */}
      <div className="mb-12">
        <motion.img
          src="/Product_img/ServicesGirl.png" // Replace with the actual image URL
          alt="Services"
          className="w-80 md:w-96" // Increased image size
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <style>{`
        .glow {
          animation: glow 1.5s infinite alternate;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ff20f0, 0 0 10px #ff20f0, 0 0 15px #ff20f0, 0 0 20px #ff20f0, 0 0 30px #ff20f0, 0 0 40px #ff20f0;
          }
          100% {
            box-shadow: 0 0 5px #01a7fa, 0 0 10px #01a7fa, 0 0 15px #01a7fa, 0 0 20px #01a7fa, 0 0 30px #01a7fa, 0 0 40px #01a7fa;
          }
        }

        .neon-text {
          text-shadow: 0 0 5px rgba(255, 32, 240, 0.7), 0 0 10px rgba(255, 32, 240, 0.7), 0 0 15px rgba(255, 32, 240, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
