
// responsive Layout
import { Link } from 'react-router-dom';
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
              🌿 Today &apos;s Specials: Paneer Lababdar | Tandoori Platter | Veg Dum Biryani
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
              <Link to="/reservation">
              <Button
                label="Book a Table"
                // link: "/reservation",
                className="p-button-lg px-6 py-3 text-white bg-green-600 border-green-600 hover:bg-green-700"
                
              />
              </Link>
              
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to ="/menu">
              <Button
                label="View Menu"
                className="p-button-lg px-6 py-3 text-green-600 bg-transparent border-green-600 hover:bg-white/10"
                outlined
              />
              </Link>
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