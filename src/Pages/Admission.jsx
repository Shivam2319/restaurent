// import React from "react";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import AnimatedButton from "../components/AnimatedButton";
// import TopHeader from "../components/TopHeader";

// const Admission = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-100 to-white">
//       <TopHeader/>
//       <Navbar />

//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[300px] md:h-[700px] bg-cover bg-center flex items-center justify-center text-white"
//         style={{ backgroundImage: "url('/assets/admissionSteps1.png')" }}
//       >
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Admission Process
//         </motion.h1>
//       </div>

//       <div className="container mx-auto px-6 py-12">
        
//         {/* Admission Steps */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800">📝 How to Apply?</h2>
//           <p className="text-gray-600 mt-2">Follow these steps to enroll at RB Memorial School of Nursing.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "1", title: "Check Eligibility", desc: "Ensure you meet the criteria for ANM or GNM courses." },
//             { step: "2", title: "Fill Application Form", desc: "Download and complete the admission form." },
//             { step: "3", title: "Submit Documents", desc: "Submit required documents with the application fee." },
//             { step: "4", title: "Entrance Exam", desc: "Appear for the entrance test (if applicable)." },
//             { step: "5", title: "Counseling", desc: "Attend counseling and document verification process." },
//             { step: "6", title: "Admission Confirmation", desc: "Pay fees and confirm your admission." },
//           ].map((item, index) => (
//             <motion.div 
//               key={index} 
//               className="bg-white shadow-lg p-6 rounded-lg text-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="text-2xl font-bold text-blue-600">{item.step}</div>
//               <h3 className="text-lg font-semibold text-gray-800 mt-2">{item.title}</h3>
//               <p className="text-gray-600 mt-1">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Eligibility & Required Documents */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          
//           {/* Eligibility Criteria */}
//           <motion.div 
//             className="shadow-lg p-6 rounded-2xl bg-white"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">✅ Eligibility Criteria</h3>
//             <ul className="list-disc pl-6 text-gray-600 mt-2">
//               <li>ANM: 10+2 Passed (Any Stream)</li>
//               <li>GNM: 10+2 Passed (Science/Arts with min. 40%)</li>
//               <li>Age: 17-35 Years</li>
//               <li>Medically Fit</li>
//             </ul>
//           </motion.div>

//           {/* Required Documents */}
//           <motion.div 
//             className="shadow-lg p-6 rounded-2xl bg-white"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">📌 Documents Required</h3>
//             <ul className="list-disc pl-6 text-gray-600 mt-2">
//               <li>10th & 12th Mark Sheets</li>
//               <li>Birth Certificate</li>
//               <li>Medical Fitness Certificate</li>
//               <li>Passport-size Photos</li>
//               <li>Aadhar Card / ID Proof</li>
//             </ul>
//           </motion.div>

//         </div>

//         {/* Download & Apply CTA */}
//         <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-6">
//           <AnimatedButton label="📄 Download Brochure" onClick={() => console.log("Downloading Brochure")} />
//           <AnimatedButton label="📝 Apply Now" onClick={() => console.log("Navigating to Apply Page")} />
//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Admission;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AnimatedButton";
import TopHeader from "../components/TopHeader";

const Admission = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <TopHeader />
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/admissionSteps1.png')" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg w-full max-w-2xl text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admission Process
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 py-12">
        
        {/* Admission Steps */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">📝 How to Apply?</h2>
          <p className="text-gray-600 mt-2">
            Follow these steps to enroll at RB Memorial School of Nursing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Check Eligibility", desc: "Ensure you meet the criteria for ANM or GNM courses." },
            { step: "2", title: "Fill Application Form", desc: "Download and complete the admission form." },
            { step: "3", title: "Submit Documents", desc: "Submit required documents with the application fee." },
            { step: "4", title: "Entrance Exam", desc: "Appear for the entrance test (if applicable)." },
            { step: "5", title: "Counseling", desc: "Attend counseling and document verification process." },
            { step: "6", title: "Admission Confirmation", desc: "Pay fees and confirm your admission." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-2xl font-bold text-blue-600">{item.step}</div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Eligibility & Required Documents */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Eligibility Criteria */}
          <motion.div 
            className="shadow-lg p-6 rounded-2xl bg-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">✅ Eligibility Criteria</h3>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>ANM: 10+2 Passed (Any Stream)</li>
              <li>GNM: 10+2 Passed (Science/Arts with min. 40%)</li>
              <li>Age: 17-35 Years</li>
              <li>Medically Fit</li>
            </ul>
          </motion.div>

          {/* Required Documents */}
          <motion.div 
            className="shadow-lg p-6 rounded-2xl bg-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📌 Documents Required</h3>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>10th & 12th Mark Sheets</li>
              <li>Birth Certificate</li>
              <li>Medical Fitness Certificate</li>
              <li>Passport-size Photos</li>
              <li>Aadhar Card / ID Proof</li>
            </ul>
          </motion.div>

          {/* Additional Information */}
          <motion.div 
            className="shadow-lg p-6 rounded-2xl bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📢 Important Notes</h3>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Admission is based on merit & entrance exam.</li>
              <li>Ensure all documents are valid & updated.</li>
              <li>Application fees are non-refundable.</li>
            </ul>
          </motion.div>

        </div>

        {/* Download & Apply CTA */}
        <div className="flex flex-wrap justify-center items-center mt-12 gap-6">
          <AnimatedButton label="📄 Download Brochure" onClick={() => console.log("Downloading Brochure")} />
          <AnimatedButton label="📝 Apply Now" onClick={() => console.log("Navigating to Apply Page")} />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Admission;
