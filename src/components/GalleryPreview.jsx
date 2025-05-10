// responsive Layout
import React from 'react';
import { Image } from 'primereact/image';
import { motion } from 'framer-motion';

const GalleryPreview = () => {
  const images = [
    '/assets/honeyChilliPotato.png',
    '/assets/lahsunPanirTikka.jpg',
    '/assets/panirtikkaa.jpg',
    '/assets/menu/mishroomtikka.png',
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 via-rose-50 to-white">
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-bold text-[#d63447] mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Gallery
      </motion.h2>

      {/* Responsive Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Main Image */}
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-65 object-cover transition-transform duration-500 group-hover:scale-110"
              preview
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* View Text on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-white text-lg font-semibold">View Image</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Now Button */}
      <div className="text-center mt-10">
        <motion.a
          href="/menu"
          className="inline-block bg-[#d63447] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#b52c3c] transition text-lg font-semibold"
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
