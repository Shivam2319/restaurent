
// import React from "react";
// import { FaUserNurse } from "react-icons/fa"; // Nursing Icon

// const HomePageCards = () => {
//   const courses = [
//     { 
//       id: "01",
//       title: "ANM (Auxiliary Nursing & Midwifery)",
//       image: "/assets/anm.jpg",
//       link: "/courses/anm",
//       description: "ANM is a two-year diploma course focusing on maternal care, midwifery, and community healthcare. It prepares students for primary-level nursing roles.",
//       icon: <FaUserNurse className="text-green-500 text-xl inline-block" />
//     },
//     { 
//       id: "02",
//       title: "GNM (General Nursing & Midwifery)",
//       image: "/assets/anm.jpg",
//       link: "/courses/gnm",
//       description: "GNM is a three-year diploma program designed to train students in clinical nursing, patient care, and community health services.",
//       icon: <FaUserNurse className="text-green-500 text-xl inline-block" />
//     }
//   ];

//   return (
//     <div className="py-12 bg-gray-100">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-[#192f59]">Our Courses</h2>
//         <p className="text-gray-600 mt-2">Explore our nursing programs designed for your future.</p>
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {courses.map((course, index) => (
//             <div key={index} className="relative bg-[#192f59] text-white rounded-xl overflow-hidden shadow-lg group flex flex-col">
//               {/* Background Image */}
//               <div className="relative h-64 w-full">
//                 <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#192f59]"></div>
//               </div>

//               {/* Course Number */}
//               <div className="absolute top-4 left-4 text-white text-2xl font-bold">{course.id}</div>

//               {/* Course Info */}
//               <div className="p-6 flex-1 flex flex-col">
//                 <h3 className="text-lg font-semibold flex items-center gap-2">
//                   {course.icon} {course.title}
//                 </h3>
//                 <p className="text-sm text-gray-300 mt-2 flex-grow">{course.description}</p>
//               </div>

//               {/* Find Out More Button - Aligned Equally */}
//               <div className="px-6 pb-6">
//                 <a href={course.link} className="text-white text-sm font-semibold flex items-center gap-2 hover:underline transition-transform duration-300 ease-in-out hover:scale-105">
//                   Find out more →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageCards;
import React from "react";
import { FaUserNurse } from "react-icons/fa"; // Nursing Icon

const HomePageCards = () => {
  const courses = [
    { 
      id: "01",
      title: "ANM (Auxiliary Nursing & Midwifery)",
      image: "/assets/anm.jpg",
      link: "/courses/anm",
      description: "ANM is a two-year diploma course focusing on maternal care, midwifery, and community healthcare. It prepares students for primary-level nursing roles.",
      icon: <FaUserNurse className="text-green-400 text-2xl" />
    },
    { 
      id: "02",
      title: "GNM (General Nursing & Midwifery)",
      image: "/assets/gnm.jpg", // Corrected image path
      link: "/courses/gnm",
      description: "GNM is a three-year diploma program designed to train students in clinical nursing, patient care, and community health services.",
      icon: <FaUserNurse className="text-green-400 text-2xl" />
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#192f59]">Our Courses</h2>
        <p className="text-gray-600 mt-2">Explore our nursing programs designed for your future.</p>
      </div>

      {/* Course Cards */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="relative bg-[#192f59] text-white rounded-xl overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div className="relative h-64 w-full">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Course Number */}
              <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 text-white text-lg font-bold rounded-lg shadow-md">
                {course.id}
              </div>

              {/* Course Info */}
              <div className="p-6 flex flex-col">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {course.icon} {course.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2 flex-grow">{course.description}</p>
              </div>

              {/* Find Out More Button */}
              <div className="px-6 pb-6">
                <a 
                  href={course.link} 
                  className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all hover:bg-blue-600"
                >
                  Find out more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCards;
