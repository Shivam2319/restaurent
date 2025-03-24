// import React from "react";

// function HeroSection() {
//   return (
//     <div className="relative w-full h-screen flex items-center justify-center text-white">
//       {/* Background Video */}
//       <video 
//         className="absolute top-0 left-0 w-full h-full object-cover" 
//         autoPlay 
//         loop 
//         muted
//       >
//         <source src="/assets/herovideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#192f59] to-white opacity-50"></div>

//       {/* Hero Content */}
//       <div className="relative text-center px-6">
//         <h1 className="text-5xl font-bold mb-4">Experience a world-class education that shapes the future.</h1>
//         <p className="text-xl max-w-2xl mx-auto">
//         Welcome to R.B Memorial School of Nursing.
//         Discover our courses and embark on your journey to success.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";

function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background photo */}
      <img 
  className="absolute top-0 left-0 w-full h-full object-cover"
  src="/assets/heroImg.jpg" 
  alt="Hero Section"
/>


      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Hero Content */}
      <motion.div 
        className="relative text-center px-6"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Experience a World-Class Education <br /> that Shapes the Future.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-blue-300">R.B Memorial School of Nursing.</span>  
          Discover our courses and embark on your journey to success.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Button 
            label="Apply Now" 
            className="p-button-lg p-button-primary shadow-lg px-6 py-3 text-lg rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
