import React from 'react';
import { Image } from 'primereact/image';
import { motion } from 'framer-motion';

const GalleryPreview = () => {
  const images = [
    '/assets/honeyChilliPotato.png',
    '/assets/lahsunPanirTikka.jpg',
    '/assets/panirtikkaa.jpg',
    '/assets/menu/mishroomtikka.png',
    '/assets/menu/Matar Pulao.jpg',
    '/assets/menu/Veg Biryani.jpg',
    // Add more images as needed
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 via-rose-50 to-white">
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-bold text-[#d63447] mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Gallery
      </motion.h2>

      {/* Improved Gallery Grid with Consistent Heights */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image Container with Fixed Height */}
            <div className="h-64 w-full overflow-hidden">
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                preview
              />
            </div>

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium bg-black/70 px-4 py-2 rounded-full">
                View Full Image
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Now Button */}
      <div className="text-center mt-14">
        <motion.a
          href="/menu"
          className="inline-block bg-[#d63447] hover:bg-[#b52c3c] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now →
        </motion.a>
      </div>
    </div>
  );
};

export default GalleryPreview;