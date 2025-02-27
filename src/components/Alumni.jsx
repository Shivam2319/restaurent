
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const alumniData = [
//   { name: "Aarushi Sharma", hospital: "AIIMS, Delhi", position: "Senior Nurse", image: "/assets/dummypic1.png" },
//   { name: "Priya Verma", hospital: "Apollo Hospitals", position: "Head Nurse", image: "/assets/dummypic1.png" },
//   { name: "Neha Singh", hospital: "Govt. Medical College, Patna", position: "Surgical Nurse", image: "/assets/dummypic1.png" },
//   { name: "Sakshi Raina", hospital: "Medanta Hospital", position: "ICU Nurse", image: "/assets/dummypic1.png" },
//   { name: "Ritika Kapoor", hospital: "Fortis Healthcare", position: "Critical Care Nurse", image: "/assets/dummypic1.png" },
//   { name: "Simran Kaur", hospital: "Max Healthcare", position: "Pediatric Nurse", image: "/assets/dummypic1.png" },
// ];

// const Alumni = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-scroll effect (moves every 2.5 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-12 overflow-hidden relative">
//       <motion.h2
//         className="text-3xl font-bold text-gray-800 text-center mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         🎓 Our <span className="text-blue-600">Successful Alumni</span>
//       </motion.h2>

//       <div className="flex items-center justify-center w-full overflow-hidden">
//         <motion.div
//           className="flex space-x-6"
//           initial={{ x: "100%" }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", duration: 20, repeat: Infinity }}
//         >
//           {[...alumniData, ...alumniData].map((alumni, index) => (
//             <div key={index} className="w-[300px] shadow-lg border border-blue-400 rounded-2xl bg-white p-6 text-center">
//               <img
//                 src={alumni.image}
//                 alt={alumni.name}
//                 className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md mx-auto"
//               />
//               <h3 className="text-lg font-semibold text-gray-800 mt-3">{alumni.name}</h3>
//               <p className="text-gray-600">{alumni.position}</p>
//               <p className="text-blue-500 font-semibold">{alumni.hospital}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Alumni;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Alumni Data
// const alumniData = [
//   { name: "Aarushi Sharma", hospital: "AIIMS, Delhi", position: "Senior Nurse", image: "/assets/dummypic1.png" },
//   { name: "Priya Verma", hospital: "Apollo Hospitals", position: "Head Nurse", image: "/assets/dummypic1.png" },
//   { name: "Neha Singh", hospital: "Govt. Medical College, Patna", position: "Surgical Nurse", image: "/assets/dummypic1.png" },
//   { name: "Sakshi Raina", hospital: "Medanta Hospital", position: "ICU Nurse", image: "/assets/dummypic1.png" },
//   { name: "Ritika Kapoor", hospital: "Fortis Healthcare", position: "Critical Care Nurse", image: "/assets/dummypic1.png" },
//   { name: "Simran Kaur", hospital: "Max Healthcare", position: "Pediatric Nurse", image: "/assets/dummypic1.png" },
// ];

// const Alumni = () => {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 overflow-hidden">
//       {/* Title */}
//       <motion.h2
//         className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         🎓 Our <span className="text-blue-600">Successful Alumni</span>
//       </motion.h2>

//       {/* Scrolling Alumni Cards */}
//       <div className="relative w-full overflow-hidden">
//         <motion.div
//           className="flex space-x-6"
//           initial={{ x: "100%" }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", duration: 25, repeat: Infinity }}
//         >
//           {[...alumniData, ...alumniData].map((alumni, index) => (
//             <div
//               key={index}
//               className="w-[250px] sm:w-[280px] lg:w-[300px] shadow-lg border border-blue-400 rounded-2xl bg-white p-6 text-center flex-shrink-0"
//             >
//               <img
//                 src={alumni.image}
//                 alt={alumni.name}
//                 className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full object-cover border-4 border-blue-500 shadow-md mx-auto"
//               />
//               <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mt-3">{alumni.name}</h3>
//               <p className="text-gray-600 text-sm sm:text-md">{alumni.position}</p>
//               <p className="text-blue-500 font-semibold text-sm sm:text-md">{alumni.hospital}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Alumni;



import React from "react";
import { motion } from "framer-motion";

// Alumni Data
const alumniData = [
  { name: "Aarushi Sharma", hospital: "AIIMS, Delhi", position: "Senior Nurse", image: "/assets/dummypic1.png" },
  { name: "Priya Verma", hospital: "Apollo Hospitals", position: "Head Nurse", image: "/assets/dummypic1.png" },
  { name: "Neha Singh", hospital: "Govt. Medical College, Patna", position: "Surgical Nurse", image: "/assets/dummypic1.png" },
  { name: "Sakshi Raina", hospital: "Medanta Hospital", position: "ICU Nurse", image: "/assets/dummypic1.png" },
  { name: "Ritika Kapoor", hospital: "Fortis Healthcare", position: "Critical Care Nurse", image: "/assets/dummypic1.png" },
  { name: "Simran Kaur", hospital: "Max Healthcare", position: "Pediatric Nurse", image: "/assets/dummypic1.png" },
];

const Alumni = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎓 Our <span className="text-blue-600">Successful Alumni</span>
      </motion.h2>

      {/* Scrolling Alumni Cards */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...alumniData, ...alumniData].map((alumni, index) => (
            <div
              key={index}
              className="w-[220px] sm:w-[250px] lg:w-[280px] shadow-lg border border-blue-400 rounded-2xl bg-white p-6 text-center flex-shrink-0"
            >
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-28 sm:w-32 lg:w-36 h-28 sm:h-32 lg:h-36 rounded-full object-cover border-4 border-blue-500 shadow-md mx-auto"
                loading="lazy"
              />
              <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mt-3">{alumni.name}</h3>
              <p className="text-gray-600 text-sm sm:text-md">{alumni.position}</p>
              <p className="text-blue-500 font-semibold text-sm sm:text-md">{alumni.hospital}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
