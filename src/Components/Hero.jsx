const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Video element */}
      <video
        className="absolute top-0 left-0 w-full h-full transition-all duration-300"
        autoPlay
        loop
        muted
        playsInline
        src="/VisiArise_herovid.mp4"
      />
      
      {/* Overlay content if needed */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Add overlay content here if needed */}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-purple-500 via-purple-800 to-transparent opacity-80 z-10 mt-0" />

      <style>{`
        video {
          object-fit: cover; /* Ensures the video covers the full container by default */
        }

        @media (max-width: 640px) {
          .relative {
            height: 50vh; /* Makes the container full height of the screen */
          }

          video {
            object-fit: contain; /* Ensures the entire video is visible on smaller screens */
            width: 100%; /* Ensures video takes up the full width */
            height: 100%; /* Forces video to fill the container's height */
            object-position: top; /* Aligns the video to the top */
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
