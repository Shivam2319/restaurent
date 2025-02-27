// import React from "react";
// import { motion } from "framer-motion";
// import CourseCard from "../components/CoursesCard";
// import AnimatedButton from "../components/AnimatedButton";
// import TopHeader from "../components/TopHeader";
// import Navbar from "../components/Navbar";
// import Alumni from "../components/Alumni";

// const Courses = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-100 to-white">
//       <TopHeader/>
//       <Navbar/>
//       {/* Hero Section */}
//       <div className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
//         style={{ backgroundImage: "url('/assets/student/hero.png')" }}>
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Nursing Courses
//         </motion.h1>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         {/* Course Offerings */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-10"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <CourseCard 
//             title="Auxiliary Nursing Midwifery (ANM)" 
//             description="A two-year diploma course focused on fundamental nursing skills, maternal care, and public health." 
//             duration="2 Years" 
//             eligibility="10+2 Passed (Any Stream)"
//             image="/assets/anm.jpg"
//           />

//           <CourseCard 
//             title="General Nursing & Midwifery (GNM)" 
//             description="A three-year diploma program offering in-depth training in clinical nursing, midwifery, and community healthcare." 
//             duration="3 Years" 
//             eligibility="10+2 Passed (Science/Arts with 40% Min)"
//             image="/assets/anm.jpg"
//           />
//         </motion.div>

//         {/* Course Details Section */}
//         <div className="mt-12">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">📘 Course Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Syllabus & Fee Structure */}
//             <motion.div 
//               className="shadow-lg p-6 rounded-2xl bg-white"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">📑 Syllabus & Fee Structure</h3>
//               <p className="text-gray-600">Get detailed information about the syllabus and fee structure for ANM & GNM courses.</p>
//               <div className="flex space-x-4 mt-4">
//                 <a href="/downloads/ANM_Syllabus.pdf" className="text-blue-600 font-medium underline">Download ANM Syllabus</a>
//                 <a href="/downloads/GNM_Syllabus.pdf" className="text-blue-600 font-medium underline">Download GNM Syllabus</a>
//               </div>
//               <div className="flex space-x-4 mt-2">
//                 <a href="/downloads/Fee_Structure.pdf" className="text-blue-600 font-medium underline">Download Fee Structure</a>
//               </div>
//             </motion.div>

//             {/* Career Prospects */}
//             <motion.div 
//               className="shadow-lg p-6 rounded-2xl bg-white"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">🎯 Career Prospects</h3>
//               <p className="text-gray-600">Graduates from our programs can secure jobs in:</p>
//               <ul className="list-disc pl-6 text-gray-600 mt-2">
//                 <li>Government & Private Hospitals</li>
//                 <li>Community Health Centers</li>
//                 <li>NGOs & Public Health Organizations</li>
//                 <li>Teaching & Research Institutes</li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="flex justify-center mt-12">
//           <AnimatedButton label="Apply Now" onClick={() => console.log("Navigating to Apply Page")} />
//         </div>
//         <Alumni/>
//       </div>
//     </div>
//   );
// };

// export default Courses;


import React from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/CoursesCard";
import AnimatedButton from "../components/AnimatedButton";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Alumni from "../components/Alumni";

const Courses = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <TopHeader />
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/student/hero.png')" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg w-full max-w-2xl text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Nursing Courses
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 py-12">
        
        {/* Course Offerings */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CourseCard 
            title="Auxiliary Nursing Midwifery (ANM)" 
            description="A two-year diploma course focused on fundamental nursing skills, maternal care, and public health." 
            duration="2 Years" 
            eligibility="10+2 Passed (Any Stream)"
            image="/assets/anm.jpg"
          />

          <CourseCard 
            title="General Nursing & Midwifery (GNM)" 
            description="A three-year diploma program offering in-depth training in clinical nursing, midwifery, and community healthcare." 
            duration="3 Years" 
            eligibility="10+2 Passed (Science/Arts with 40% Min)"
            image="/assets/anm.jpg"
          />
        </motion.div>

        {/* Course Details Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">📘 Course Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Syllabus & Fee Structure */}
            <motion.div 
              className="shadow-lg p-6 rounded-2xl bg-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📑 Syllabus & Fee Structure</h3>
              <p className="text-gray-600">Get detailed information about the syllabus and fee structure for ANM & GNM courses.</p>
              <div className="flex flex-col space-y-2 mt-4">
                <a href="/downloads/ANM_Syllabus.pdf" className="text-blue-600 font-medium underline">Download ANM Syllabus</a>
                <a href="/downloads/GNM_Syllabus.pdf" className="text-blue-600 font-medium underline">Download GNM Syllabus</a>
                <a href="/downloads/Fee_Structure.pdf" className="text-blue-600 font-medium underline">Download Fee Structure</a>
              </div>
            </motion.div>

            {/* Career Prospects */}
            <motion.div 
              className="shadow-lg p-6 rounded-2xl bg-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🎯 Career Prospects</h3>
              <p className="text-gray-600">Graduates from our programs can secure jobs in:</p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>Government & Private Hospitals</li>
                <li>Community Health Centers</li>
                <li>NGOs & Public Health Organizations</li>
                <li>Teaching & Research Institutes</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-wrap justify-center mt-12">
          <AnimatedButton label="Apply Now" onClick={() => console.log("Navigating to Apply Page")} />
        </div>

        <Alumni />
      </div>
    </div>
  );
};

export default Courses;
