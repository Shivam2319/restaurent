
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card } from "primereact/card";
// import { motion } from "framer-motion";
// import AnimatedButton from "./AnimatedButton"; // Import the animated button component

// const AboutHome = () => {
//   const navigate = useNavigate();

//   return (
//     <motion.div 
//       className="container mx-auto px-6 py-12 text-center"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-4xl font-bold text-gray-800 mb-6">
//         Welcome to <span className="text-blue-600">RB Memorial School of Nursing</span>
//       </h2>

//       <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//         Nurturing compassionate healthcare professionals since <strong>2007</strong>. With world-class <strong>infrastructure, expert faculty, and hands-on training</strong>, we shape the future of nursing.
//       </p>

//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         {/* Left Section - Image */}
//         <motion.img 
//           src="/assets/aboutHome.jpg" 
//           alt="Nursing Students"
//           className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         />

//         {/* Right Section - About Info */}
//         <Card className="shadow-lg p-6 rounded-2xl bg-white text-left">
//           <p className="text-gray-600 text-lg leading-relaxed">
//             At <strong>RB Memorial School of Nursing</strong>, we provide a <strong>dynamic learning environment</strong> focused on <strong>academic excellence and practical training</strong>.
//             Our programs, approved by the <strong>Indian Nursing Council & Government of Bihar</strong>, are designed to prepare students for <strong>global healthcare challenges</strong>.
//           </p>
//           <ul className="list-disc list-inside text-gray-600 mt-4">
//             <li>✅ State-of-the-art labs & clinical training</li>
//             <li>✅ Highly experienced faculty</li>
//             <li>✅ Tie-ups with renowned hospitals</li>
//             <li>✅ 100% job placement assistance</li>
//           </ul>
//         </Card>
//       </motion.div>

//       {/* Learn More Button with Animation */}
//       <motion.div 
//         className="mt-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <AnimatedButton 
//           label="Learn More"
//           onClick={() => navigate("/about")}
//           className="mt-4"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutHome;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const AboutHome = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">RB Memorial School of Nursing</span>
      </h2>

      {/* Subtext */}
      <p className="text-md sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Nurturing compassionate healthcare professionals since <strong>2007</strong>.
        With world-class <strong>infrastructure, expert faculty, and hands-on training</strong>, we shape the future of nursing.
      </p>

      {/* Responsive Grid Layout */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left Section - Image */}
        <motion.img
          src="/assets/aboutHome.jpg"
          alt="Nursing Students"
          className="rounded-2xl shadow-lg w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Right Section - About Info */}
        <Card className="shadow-lg p-6 sm:p-8 lg:p-10 rounded-2xl bg-white text-left">
          <p className="text-gray-600 text-md sm:text-lg lg:text-xl leading-relaxed">
            At <strong>RB Memorial School of Nursing</strong>, we provide a 
            <strong> dynamic learning environment</strong> focused on 
            <strong> academic excellence and practical training</strong>.
            Our programs, approved by the <strong>Indian Nursing Council & Government of Bihar</strong>, 
            prepare students for <strong>global healthcare challenges</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 text-sm sm:text-md lg:text-lg">
            <li>✅ State-of-the-art labs & clinical training</li>
            <li>✅ Highly experienced faculty</li>
            <li>✅ Tie-ups with renowned hospitals</li>
            <li>✅ 100% job placement assistance</li>
          </ul>
        </Card>
      </motion.div>

      {/* Learn More Button */}
      <motion.div
        className="mt-8 lg:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <AnimatedButton
          label="Learn More"
          onClick={() => navigate("/about")}
          className="mt-4"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutHome;
