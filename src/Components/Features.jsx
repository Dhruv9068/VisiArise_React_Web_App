// src/Features.js

import { motion } from 'framer-motion'; // Make sure to install framer-motion

const featuresData = [
  { icon: '/icon.png', title: 'Try Before You Buy', text: 'Visualize product in their room space before purchasing, builds trust in the product' },
  { icon: '/icon.png', title: 'Product-Specific Visualization', text: "View exact product you've added, enhance personalization" },
  { icon: '/icon.png', title: 'AR Accessibility', text: 'Cross platform AR accessibilities without needing expensive handsets' },
  { icon: '/icon.png', title: 'Product Placement', text: 'Real world experience to view actual products give confidence' },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-gray-900 md:py-16 ">
    

      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        
        {/* Left Column */}
        <div className="flex flex-col items-center md:mr-10 mt-0 md:mt-0">
          {/* Features 1 and 4 on the left */}
          <motion.div
            className="flex items-center mb-6 md:mb-10" // Adjusted margin
            animate={{ y: [0, 10, 0] }} // Move up and down
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img src={featuresData[0].icon} alt={featuresData[0].title} className="w-16 h-16 md:w-20 md:h-20 mr-2" />
            <div className="text-white text-sm md:text-lg">
              <h3 className="font-bold text-lg md:text-2xl">{featuresData[0].title}</h3>
              <p className="text-sm md:text-md">{featuresData[0].text}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center"
            animate={{ y: [0, 10, 0] }} // Move up and down
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img src={featuresData[3].icon} alt={featuresData[3].title} className="w-16 h-16 md:w-20 md:h-20 mr-2" />
            <div className="text-white text-sm md:text-lg">
              <h3 className="font-bold text-lg md:text-2xl">{featuresData[3].title}</h3>
              <p className="text-sm md:text-md">{featuresData[3].text}</p>
            </div>
          </motion.div>
        </div>

        {/* Model in the center */}
        <motion.img
          src="/featuremode.png" // Replace with your model image path
          alt="Model"
          className="w-3/4 md:w-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Right Column */}
        <div className="flex flex-col items-center md:ml-10 mt-0 md:mt-0">
          {/* Features 2 and 3 on the right */}
          <motion.div
            className="flex items-center mb-6 md:mb-10" // Adjusted margin
            animate={{ y: [0, 10, 0] }} // Move up and down
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img src={featuresData[1].icon} alt={featuresData[1].title} className="w-16 h-16 md:w-20 md:h-20 mr-2" />
            <div className="text-white text-sm md:text-lg">
              <h3 className="font-bold text-lg md:text-2xl">{featuresData[1].title}</h3>
              <p className="text-sm md:text-md">{featuresData[1].text}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center"
            animate={{ y: [0, 10, 0] }} // Move up and down
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img src={featuresData[2].icon} alt={featuresData[2].title} className="w-16 h-16 md:w-20 md:h-20 mr-2" />
            <div className="text-white text-sm md:text-lg">
              <h3 className="font-bold text-lg md:text-2xl">{featuresData[2].title}</h3>
              <p className="text-sm md:text-md">{featuresData[2].text}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
