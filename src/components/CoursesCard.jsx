
// import React from "react";
// import { motion } from "framer-motion";

// const CourseCard = ({ title, description, duration, eligibility, image }) => {
//   return (
//     <motion.div 
//       className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
//       <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
//       <p className="text-gray-600 mt-2">{description}</p>
//       <p className="text-gray-700 font-medium mt-2">📅 {duration}</p>
//       <p className="text-gray-700 font-medium">🎓 {eligibility}</p>
//     </motion.div>
//   );
// };

// export default CourseCard;
import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ title, description, duration, eligibility, image }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center 
        w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto min-h-[450px] transition-all 
        duration-300 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-3">
        {description}
      </p>
      <p className="text-gray-700 font-medium mt-2">📅 {duration}</p>
      <p className="text-gray-700 font-medium">🎓 {eligibility}</p>
    </motion.div>
  );
};

export default CourseCard;
