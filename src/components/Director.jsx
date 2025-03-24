// import React from "react";
// import { Card } from "primereact/card";
// import { motion } from "framer-motion";

// const Director = () => {
//   return (
//     <motion.div
//       className="w-full bg-gray-100 py-12"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Founder Section */}
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           🌟 Founder’s Vision
//         </h2>

//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Founder Image */}
//           <motion.img
//             src="/assets/founder.jpeg"
//             alt="Founder"
//             className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />

//           {/* Founder Message */}
//           <Card className="w-full md:w-1/2 shadow-lg p-6 rounded-lg bg-white text-left">
//             <h3 className="text-3xl font-semibold text-gray-800">
//               Late Dr. B.N. Mishra
//             </h3>
//             <p className="text-blue-600 font-medium">
//               Founder, RB Memorial School of Nursing
//             </p>
//             <p className="text-gray-600 mt-4 leading-relaxed">
//               "Education is the most powerful tool for empowerment. At RB
//               Memorial School of Nursing, our mission is to provide young women
//               with the skills, knowledge, and confidence to excel in the field
//               of healthcare. We take pride in fostering an environment where
//               future nurses grow with discipline, dedication, and compassion."
//             </p>
//           </Card>
//         </div>
//       </div>

//       {/* Director Section */}
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-16">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           👨‍🎓 Message from the Director
//         </h2>

//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Director Image */}
//           <motion.img
//             src="/assets/Director.jpeg"
//             alt="Director"
//             className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />

//           {/* Director Message */}
//           <Card className="w-full md:w-1/2 shadow-lg p-6 rounded-lg bg-white text-left">
//             <h3 className="text-3xl font-semibold text-gray-800">
//               Dr. Sanjeev Mishra
//             </h3>
//             <p className="text-blue-600 font-medium">
//               Director, RB Memorial School of Nursing
//             </p>
//             <p className="text-gray-600 mt-4 leading-relaxed">
//               "At RB Memorial School of Nursing, we strive to nurture
//               compassionate, skilled, and dedicated healthcare professionals. As
//               a girls-only institution, we are deeply committed to providing a
//               safe, empowering, and intellectually stimulating environment for
//               our students. We welcome you to be a part of this transformative
//               journey."
//             </p>
//           </Card>
//         </div>
//       </div>

//       {/* Principal Section */}
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-16">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           🎓 Principal’s Message
//         </h2>

//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Principal Image */}
//           <motion.img
//             src="/assets/Principal.jpeg"
//             alt="Principal"
//             className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />

//           {/* Principal Message */}
//           <Card className="w-full md:w-1/2 shadow-lg p-6 rounded-lg bg-white text-left">
//             <h3 className="text-3xl font-semibold text-gray-800">
//               Prof. (Dr.) [Principal Name]
//             </h3>
//             <p className="text-blue-600 font-medium">
//               Principal, RB Memorial School of Nursing
//             </p>
//             <p className="text-gray-600 mt-4 leading-relaxed">
//               We believe in shaping not just skilled nurses but strong,
//               independent women who can lead in healthcare. With world-class
//               facilities, an excellent faculty team, and extensive practical
//               training, we ensure our students become well-equipped to handle
//               the challenges of the nursing profession. At RBMSN, we are
//               committed to excellence in education, discipline, and service.
//             </p>
//           </Card>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Director;
import React from "react";
import { Card } from "primereact/card";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "Late Dr. B.N. Mishra",
    title: "Founder, RB Memorial School of Nursing",
    image: "/assets/founder.jpeg",
    message: `"Education is the most powerful tool for empowerment. At RB Memorial School of Nursing, our mission is to provide young women with the skills, knowledge, and confidence to excel in the field of healthcare. We take pride in fostering an environment where future nurses grow with discipline, dedication, and compassion."`,
    sectionTitle: "🌟 Founder’s Vision",
  },
  {
    name: "Dr. Sanjeev Mishra",
    title: "Director, RB Memorial School of Nursing",
    image: "/assets/Director.jpeg",
    message: `"At RB Memorial School of Nursing, we strive to nurture compassionate, skilled, and dedicated healthcare professionals. As a girls-only institution, we are deeply committed to providing a safe, empowering, and intellectually stimulating environment for our students. We welcome you to be a part of this transformative journey."`,
    sectionTitle: "👨‍🎓 Message from the Director",
  },
  // {
  //   name: "Prof. (Dr.) [Principal Name]",
  //   title: "Principal, RB Memorial School of Nursing",
  //   image: "/assets/Principal.jpeg",
  //   message: `"We believe in shaping not just skilled nurses but strong, independent women who can lead in healthcare. With world-class facilities, an excellent faculty team, and extensive practical training, we ensure our students become well-equipped to handle the challenges of the nursing profession. At RBMSN, we are committed to excellence in education, discipline, and service."`,
  //   sectionTitle: "🎓 Principal’s Message",
  // },
  {
    "name": "R.B. Memorial School of Nursing",
    "title": "Our Mission",
    "image": "/assets/mission.jpeg",
    "message": "The mission of the R.B. Memorial School of Nursing is to provide knowledge and skills to the students regarding social & community service, for the continuous development of an individual as a trained nurse & as a good citizen, capable of functioning effectively in the hospital as well as the community. Recent emphasis of nursing on promotion of health, prevention of illness, restoration of health as well as advances in caring for the ill have opened various new areas of employment and have created added responsibilities for practicing nurses.",
    "sectionTitle": "🌟 Our Mission"
}

];

const Director = () => {
  return (
    <motion.div
      className="w-full bg-gray-100 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {profiles.map((profile, index) => (
        <div key={index} className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            {profile.sectionTitle}
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <motion.img
              src={profile.image}
              alt={profile.name}
              className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Profile Message */}
            <Card className="w-full md:w-1/2 shadow-lg p-6 rounded-lg bg-white text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                {profile.name}
              </h3>
              <p className="text-blue-600 font-medium">{profile.title}</p>
              <p className="text-gray-600 mt-4 leading-relaxed">{profile.message}</p>
            </Card>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Director;
