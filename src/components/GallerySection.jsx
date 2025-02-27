// import React, { useState } from "react";

// const GallerySection = ({ title, images }) => {
//   const [visibleImages, setVisibleImages] = useState(3);
  
//   const loadMore = () => {
//     setVisibleImages(prev => prev + 3);
//   };

//   return (
//     <div className="my-10">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {images.slice(0, visibleImages).map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={title}
//             className="w-full h-60 object-cover rounded-lg shadow-md"
//           />
//         ))}
//       </div>
//       {visibleImages < images.length && (
//         <div className="text-center mt-4">
//           <button
//             onClick={loadMore}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GallerySection;

import React, { useState } from "react";

const GallerySection = ({ title, images }) => {
  const [visibleImages, setVisibleImages] = useState(3);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 3);
  };

  return (
    <div className="my-10">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {title}
      </h3>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(0, visibleImages).map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`${title} - Image ${index + 1}`}
              loading="lazy"
              className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleImages < images.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
