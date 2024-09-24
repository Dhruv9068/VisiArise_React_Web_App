import { motion } from 'framer-motion';

const OurMotiveSection = () => {
  const motives = [
    "Enhance user experience through immersive technology.",
    "Empower customers to visualize products in their real-world settings.",
    "Reduce purchase uncertainty and increase satisfaction.",
    "Foster creativity in home decor and design.",
    "Support sustainable shopping practices with better decision-making."
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Left Side Text Content */}
      <div className="flex-1 p-8 z-10 px-40">
        <h2 className="text-5xl font-bold mb-4 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
          Our Motive
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          {motives.map((motive, index) => (
            <motion.li
              key={index}
              className="hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.1, color: '#1e88e5' }} // Scale and color change on hover
            >
              {motive}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center items-center p-8 z-10">
        <motion.img
          src="/Product_img/GirlWithARGlasses.png" // Replace with the actual image URL
          alt="Our Motive Visualization"
          className="max-w-lg rounded-lg" // Image size
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Background Interactive Effect */}
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
    </div>
  );
};

export default OurMotiveSection;
