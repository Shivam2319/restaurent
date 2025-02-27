// import React from "react";
// import TopHeader from "../components/TopHeader";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import GallerySection from "../components/GallerySection";

// const Gallery = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-100 to-white">
//       <TopHeader/>
//       <Navbar />
//       <div className="container mx-auto px-6 py-12">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           Our <span className="text-blue-600">Gallery</span>
//         </h2>
        
//         <GallerySection
//           title="🏫 Our Building"
//           images={["/assets/building1.jpeg", "/assets/building2.jpeg", "/assets/building3.jpeg"]}
//         />
//         <GallerySection
//           title="👩‍🎓 Our Students"
//           images={["/assets/student/student1.jpeg", "/assets/student/student2.jpeg", "/assets/student/student4.jpeg"]}
//         />
//         <GallerySection
//           title="🔬 Dedicated Practical Labs"
//           images={["/assets/practicalLabs1.jpeg", "/assets/practicalLabs2.jpeg", "/assets/practicalLabs4.jpeg"]}
//         />
//         <GallerySection
//           title="💻 Dedicated Computer Labs"
//           images={["/assets/computerLabs1.jpeg", "/assets/computerLabs2.jpeg", "/assets/computerLabs3.jpeg"]}
//         />
//         <GallerySection
//           title="🏥 Internship Moments"
//           images={["/assets/student/12.jpeg", "/assets/student/11.jpeg", "/assets/student/10.jpeg"]}
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Gallery;


import React from "react";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      {/* Top Header */}
      <TopHeader />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Page Container */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Gallery Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          Our <span className="text-blue-600">Gallery</span>
        </h2>

        {/* Gallery Sections */}
        <div className="space-y-12">
          <GallerySection
            title="🏫 Our Building"
            images={["/assets/building1.jpeg", "/assets/building2.jpeg", "/assets/building3.jpeg"]}
          />
          <GallerySection
            title="👩‍🎓 Our Students"
            images={["/assets/student/student1.jpeg", "/assets/student/student2.jpeg", "/assets/student/student4.jpeg"]}
          />
          <GallerySection
            title="🔬 Dedicated Practical Labs"
            images={["/assets/practicalLabs1.jpeg", "/assets/practicalLabs2.jpeg", "/assets/practicalLabs4.jpeg"]}
          />
          <GallerySection
            title="💻 Dedicated Computer Labs"
            images={["/assets/computerLabs1.jpeg", "/assets/computerLabs2.jpeg", "/assets/computerLabs3.jpeg"]}
          />
          <GallerySection
            title="🏥 Internship Moments"
            images={["/assets/student/12.jpeg", "/assets/student/11.jpeg", "/assets/student/10.jpeg"]}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
