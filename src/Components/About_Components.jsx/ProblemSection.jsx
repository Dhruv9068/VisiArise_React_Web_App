import { motion } from 'framer-motion';

const ProblemSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-0 relative">
      {/* Left Side Text Content */}
      <div className="flex-1 p-8 z-10">
        <h2 className="text-5xl font-bold mb-4 text-center md:text-left">
          <span className="text-purple-400" style={{ textShadow: '0 0 5px rgba(156, 39, 176, 0.5)' }}>
            Problem
          </span>
          <span className="text-blue-400" style={{ textShadow: '0 0 5px rgba(30, 136, 229, 0.5)' }}>
            Statement
          </span>
        </h2>
        <p className="text-lg leading-relaxed">
  In today’s fast-paced digital world, customers often find it challenging to visualize products in their homes, leading to uncertainty and dissatisfaction—especially with furniture and decor. Our mission is to bridge this gap with an immersive Augmented Reality experience that allows users to interact with 3D models in their own spaces. This interactive journey empowers shoppers to confidently assess size, style, and fit, transforming their purchasing experience into a personalized adventure.
</p>

      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center items-center p-8 z-10">
        <motion.img
          src="/Product_img/ProblemGirl.png" // Replace with the actual image URL
          alt="Problem Visualization"
          className="max-w-lg rounded-lg" // Increased image size
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* CSS for neon text animation */}
      <style>{`
        @keyframes neon {
          0% { text-shadow: 0 0 5px rgba(156, 39, 176, 0.5), 0 0 10px rgba(156, 39, 176, 0.5), 0 0 15px rgba(156, 39, 176, 0.5); }
          50% { text-shadow: 0 0 10px rgba(30, 136, 229, 0.5), 0 0 20px rgba(30, 136, 229, 0.5), 0 0 30px rgba(30, 136, 229, 0.5); }
          100% { text-shadow: 0 0 5px rgba(156, 39, 176, 0.5), 0 0 10px rgba(156, 39, 176, 0.5), 0 0 15px rgba(156, 39, 176, 0.5); }
        }

        h2 {
          animation: neon 1.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default ProblemSection;
