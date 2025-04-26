// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "primereact/button";

// function RestaurantIntro() {
//   return (
//     <div
//       className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assets/biryani-bg.jpg')" }} // Replace with your restaurant background image
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/30"></div>

//       {/* Hero Content */}
//       <div className="relative text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Marquee for Specials */}
//           <marquee className="text-xl md:text-2xl font-semibold mb-4 text-yellow-300">
//             🍽️ Chef's Specials Today: Grilled Salmon | Lamb Chops | Vegan Delight – Book Your Table Now! 🍷
//           </marquee>

//           <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
//             Indulge in Culinary Excellence <br /> at <span className="text-yellow-400">Gourmet Garden</span>
//           </h1>

//           <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 drop-shadow-md">
//             Discover a fine dining experience that blends world-class flavors with elegant ambiance. Your table is waiting!
//           </p>

//           {/* CTA Button */}
//           <div className="mt-6">
//             <Button
//               label="Book a Table"
//               className="p-button-lg shadow-lg px-6 py-3 text-lg rounded-lg bg-yellow-500 border-yellow-500 hover:bg-yellow-600"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default RestaurantIntro;
// import React from "react";
// import { Button } from "primereact/button";
// import { motion } from "framer-motion";

// const RestaurantIntro = () => {
//   return (
//     <div
//       className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assets/biryani-bg.jpg')" }} // Replace with your restaurant background image
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/30"></div>

//       {/* Hero Content */}
//       <div className="relative text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Marquee for Specials */}
//           <marquee className="text-xl md:text-2xl font-semibold mb-4 text-green-300">
//             🌿 Today's Specials: Paneer Lababdar | Tandoori Platter | Veg Dum Biryani – 100% Pure Vegetarian Delight! 🥗
//           </marquee>

//           <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
//             Experience Pure Veg Culinary Bliss <br /> at <span className="text-green-400">Gourmet Garden</span>
//           </h1>

//           <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 drop-shadow-md">
//             A fine dining experience for those who seek the best in vegetarian cuisine — authentic, flavorful, and fresh!
//           </p>

//           {/* CTA Button */}
//           <div className="mt-6">
//             <Button
//               label="Book a Table"
//               className="p-button-lg shadow-lg px-6 py-3 text-lg rounded-lg bg-green-500 border-green-500 hover:bg-green-600"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantIntro;


// responsive Layout
import React from "react";
import { Button } from "primereact/button";
import { motion } from "framer-motion";

const RestaurantIntro = () => {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-white bg-cover bg-center bg-fixed">
      {/* Background Image with Fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/assets/lahsunPanirTikka.jpg')",
          backgroundColor: '#2d6a4f' // Fallback color
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Specials Banner */}
          <motion.div 
            className="bg-green-700/90 text-white py-3 px-4 mb-6 rounded-lg inline-block"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm sm:text-base md:text-lg font-medium">
              🌿 Today's Specials: Paneer Lababdar | Tandoori Platter | Veg Dum Biryani
            </p>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-white">Experience Pure Veg</span>
            <span className="block text-green-300 mt-2">Culinary Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-100 mb-8">
            Authentic vegetarian cuisine crafted with fresh, locally-sourced ingredients and traditional recipes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                label="Book a Table"
                className="p-button-lg px-6 py-3 text-white bg-green-600 border-green-600 hover:bg-green-700"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                label="View Menu"
                className="p-button-lg px-6 py-3 text-green-600 bg-transparent border-green-600 hover:bg-white/10"
                outlined
              />
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 text-sm">
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">🌱</span> 100% Vegetarian
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">🥬</span> Farm Fresh Ingredients
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">🧑‍🍳</span> Expert Chefs
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default RestaurantIntro;