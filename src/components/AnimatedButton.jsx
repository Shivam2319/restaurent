// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Button } from "primereact/button";

// // const AnimatedButton = ({ label, onClick, className }) => {
// //   return (
// //     <motion.div
// //       initial={{ x: -100, opacity: 0 }}  // Start position (off-screen)
// //       animate={{ x: 0, opacity: 1 }}    // End position (on-screen)
// //       transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
// //     >
// //       <Button 
// //         label={label} 
// //         className={`p-button-lg p-button-primary shadow-md px-6 py-3 text-lg rounded-xl ${className}`} 
// //         onClick={onClick} 
// //       />
// //     </motion.div>
// //   );
// // };

// // export default AnimatedButton;


// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "primereact/button";

// const AnimatedButton = ({ label, onClick, className }) => {
//   return (
//     <motion.div
//       initial={{ x: -100, opacity: 0 }}  // Start off-screen
//       animate={{ x: 0, opacity: 1 }}    // Animate into view
//       transition={{ duration: 0.6, ease: "easeOut" }} // Smooth motion
//     >
//       <Button 
//         label={label} 
//         className={`p-button-lg p-button-primary shadow-md 
//           px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 
//           text-base sm:text-lg md:text-xl rounded-xl transition-all 
//           duration-300 ease-in-out transform hover:scale-105 ${className}`}
//         onClick={onClick} 
//       />
//     </motion.div>
//   );
// };

// export default AnimatedButton;


import React from "react"; 
import { motion } from "framer-motion";
import { Button } from "primereact/button";

const AnimatedButton = React.memo(({ label, onClick, className }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}  // Smoother initial position
      animate={{ x: 0, opacity: 1 }}    // Enter animation
      transition={{ duration: 0.5, ease: "easeInOut" }} // Balanced ease
      whileHover={{ scale: 1.05 }}  // Subtle hover effect
    >
      <Button 
        label={label} 
        aria-label={label}  // Accessibility improvement
        role="button"
        className={`p-button-lg p-button-primary shadow-md 
          px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 
          text-base sm:text-lg md:text-xl rounded-xl transition-all 
          duration-300 ease-in-out transform hover:scale-105 ${className}`}
        onClick={onClick} 
      />
    </motion.div>
  );
});

export default AnimatedButton;
