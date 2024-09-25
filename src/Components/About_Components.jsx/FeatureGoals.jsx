import { motion } from 'framer-motion';

const FutureGoalsSection = () => {
  const goals = [
    
    "Broadening Product Range Collaborate with diverse brands to offer wider range of products",
    "Enhancing User Engagement using interactive & gamification elements",
    "Develop a user-friendly mobile application for AR experiences.",
    "Integrating User Feedback Actively to refine our platform, ensure evolving needs & preferences",
    "Establishing Industry Leadership Aim to set new industry standards for AR in e-commerce"
   
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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

      {/* Goals Content */}
      <div className="z-10">
        <h2 className="text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
          Our Future Goals
        </h2>
        <div className="flex flex-col items-start space-y-4">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="text-lg"
              initial={{ y: 100, opacity: 0 }} // Start from below
              animate={{ y: 0, opacity: 1 }} // Slide in
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              {goal}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureGoalsSection;
