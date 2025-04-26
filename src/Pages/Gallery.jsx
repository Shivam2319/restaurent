

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Container */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Gallery Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#192f59] mb-8">
          MirchiFy <span className="text-[#d63447]">Gallery</span>
        </h2>

        {/* Gallery Sections */}
        <div className="space-y-12">
          <GallerySection
            title="🍽️ Dishes We Serve"
            images={[
              "/assets/gallery/dish1.jpg",
              "/assets/gallery/dish2.jpg",
              "/assets/gallery/dish3.jpg",
              "/assets/gallery/dish4.jpg",
              "/assets/gallery/dish5.jpg",
            ]}
          />
          <GallerySection
            title="👨‍🍳 Chef in Action"
            images={[
              "/assets/gallery/chef1.jpg",
              "/assets/gallery/chef2.jpg",
              "/assets/gallery/chef3.jpg",
            ]}
          />
          <GallerySection
            title="✨ Restaurant Ambiance"
            images={[
              "/assets/gallery/interior1.jpg",
              "/assets/gallery/interior2.jpg",
              "/assets/gallery/interior3.jpg",
            ]}
          />
          <GallerySection
            title="📸 Happy Moments with Customers"
            images={[
              "/assets/gallery/customer1.jpg",
              "/assets/gallery/customer2.jpg",
              "/assets/gallery/customer3.jpg",
              "/assets/gallery/customer4.jpg",
            ]}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
