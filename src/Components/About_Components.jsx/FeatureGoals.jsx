import { motion } from 'framer-motion';
import React from 'react';

const FutureGoalsSection = () => {
  const goals = [
    "Broadening Product Categories",
    "Boost User Engagement",
    "Launch AR Mobile App",
    "Incorporate User Feedback",
    "Lead AR E-Commerce"
];


return (
  <div className="relative flex flex-col items-center justify-center bg-gray-900 text-white py-20 overflow-hidden">
    {/* Background Bubbles Animation */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-full"
          style={{
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
            background: ['#9c27b0', '#ffffff', '#1e88e5'][index % 3], // Neon Purple, White, Blue
            position: 'absolute',
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            filter: 'blur(15px)',
            opacity: Math.random(),
          }}
          animate={{
            scale: [1, 1.1, 1], // Bubble effect
            y: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>

    {/* Stairs with Animation - From Up to Down */}
    <div className="z-10 w-full flex flex-col items-start px-10 space-y-8">
      <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-blue-400">
        Our Future Goals
      </h2>

      {goals.map((goal, index) => (
        <motion.div
          key={index}
          className="relative text-lg px-10 py-4 border-2 rounded-lg"
          style={{
            width: '80%',
            marginLeft: `${index * 30}px`,
            background: 'transparent', // Transparent background for the stairs
            borderColor: 'white', // White border
            color: 'transparent', // To use gradient for text content
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            textFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, rgba(156,39,176,1) 0%, rgba(255,255,255,1) 50%, rgba(30,136,229,1) 100%)', // Gradient applied to text
            fontWeight: 'bold', // Set the font weight to bold
            fontSize: '1.25rem', // Increase font size for better visibility
          }}
          initial={{ opacity: 0, y: -150 }} // Starts from above
          animate={{ opacity: 1, y: 0 }} // Moves down to correct position
          transition={{
            duration: 0.8, // Animation speed
            delay: index * 0.2, // Staggered for each stair step
            ease: "easeOut",
          }}
        >
          <span>{goal}</span>
        </motion.div>
      ))}
    </div>
  </div>
);
};

export default FutureGoalsSection;