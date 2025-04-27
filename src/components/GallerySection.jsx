// // responsive layout
// import React, { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import { motion } from "framer-motion";

// const GallerySection = () => {
//   const [visibleImages, setVisibleImages] = useState(6);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   const images = [
//     "/assets/menu/soup.jpg",
//     "/assets/menu/lassi.webp",
//     "/assets/menu/MintMojito.jpg",
//     "/assets/menu/Lemon-Coriander-Soup-1.webp",
//     "/assets/menu/VegManchow.jpg",
//     "/assets/menu/soup.jpg",
//     "/assets/menu/soup.jpg",
//     "/assets/menu/soup.jpg",
//     "/assets/menu/soup.jpg",
//     "/assets/menu/soup.jpg",
//     "/assets/menu/soup.jpg",
//     "/assets/menu/soup.jpg",
    
    
//   ];

//   const loadMore = () => {
//     setVisibleImages((prev) => prev + 3);
//   };

//   const slides = images.map((img) => ({
//     src: img,
//   }));

//   return (
//     <motion.div
//       className="my-12 px-4 sm:px-6 lg:px-8"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Section Title */}
//       <motion.h3
//         className="text-2xl sm:text-3xl font-bold text-[#d63447] mb-8 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Our Gallery
//       </motion.h3>

//       {/* Responsive Image Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.slice(0, visibleImages).map((img, index) => (
//           <motion.div
//             key={index}
//             className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl cursor-pointer"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             onClick={() => {
//               setLightboxIndex(index);
//               setLightboxOpen(true);
//             }}
//           >
//             {/* Image */}
//             <img
//               src={img}
//               alt={`Gallery Image ${index + 1}`}
//               loading="lazy"
//               className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//             {/* Optional View Text */}
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//               <span className="text-white text-lg font-semibold">View</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {visibleImages < images.length && (
//         <motion.div
//           className="text-center mt-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.button
//             onClick={loadMore}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-2 bg-[#d63447] text-white rounded-lg hover:bg-[#b52c3c] transition-all font-medium"
//           >
//             Load More
//           </motion.button>
//         </motion.div>
//       )}

//       {/* Lightbox Viewer */}
//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={lightboxIndex}
//         slides={slides}
//       />
//     </motion.div>
//   );
// };

// export default GallerySection;


import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

const GallerySection = ({ title, images }) => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 3);
  };

  const slides = images.map((img) => ({
    src: img,
  }));

  return (
    <motion.div
      className="my-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dynamic Section Title */}
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-[#d63447] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>

      {/* Responsive Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.slice(0, visibleImages).map((img, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              loading="lazy"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleImages < images.length && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#d63447] text-white rounded-lg hover:bg-[#b52c3c] transition-all font-medium"
          >
            Load More
          </motion.button>
        </motion.div>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </motion.div>
  );
};

export default GallerySection;