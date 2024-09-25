import { motion } from 'framer-motion';
import { useState } from 'react';

const Visiarise = () => {
  const [hovered, setHovered] = useState(false);
  const [spheres, setSpheres] = useState([]);

  // Generate a sphere and add it to the state
  const generateSphere = () => {
    const newSphere = {
      id: Date.now(),
      style: {
        width: '40px',  // Sphere size
        height: '40px', // Sphere size
        left: `${Math.random() * 100}vw`,  // Random horizontal position
        position: 'absolute',
        top: '0px',  // Start from the top
      },
    };
    setSpheres((prevSpheres) => [...prevSpheres, newSphere]);

    // Remove sphere after animation
    setTimeout(() => {
      setSpheres((prevSpheres) => prevSpheres.filter((sphere) => sphere.id !== newSphere.id));
    }, 2000); // Adjust duration based on your animation duration
  };

  const handleMouseMove = () => {
    if (hovered) {
      generateSphere();
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-gray-900 text-white py-8 px-4 overflow-hidden"
      style={{ height: '75vh' }} // Manually set the height to 85% of the viewport
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)} // For mobile touch
      onTouchEnd={() => setHovered(false)} // For mobile touch
      onMouseMove={handleMouseMove} // Trigger sphere generation on mouse move
    >
      {/* Blue lighting effect from the bottom of the main div */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-blue-500 via-blue-700 to-transparent opacity-80 z-10 mt-0" />

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 md:mt-4 mt-0 z-20"> 
        {/* Mobile view has mt-0, and md screens and above have margin top of 1rem (mt-4) */}
        <span className="text-purple-400">Here You Rise,</span> That's Why we are <span className="text-blue-500">VisiARise</span> !!
      </h2>
      <p className="text-center text-lg md:text-xl mb-6 z-20">
        Experience innovative Augmented Reality solutions for your home makeover projects.
      </p>

      {/* Spheres filling the bottom of the container */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-end z-0">
        {spheres.map((sphere) => (
          <motion.div
            key={sphere.id}
            className={`rounded-full ${Math.random() < 0.5 ? 'bg-purple-500' : Math.random() < 0.5 ? 'bg-blue-500' : 'bg-white'}`}
            style={sphere.style}
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: [0, 300], // Move downwards
              opacity: [1, 0], // Fade out
            }}
            transition={{ duration: 2, ease: 'easeIn' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Visiarise;
