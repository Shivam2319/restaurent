

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
              "/assets/menu/soup.jpg",
    "/assets/menu/blueBerryMojito.jpg",
    "/assets/menu/MintMojito.jpeg",
    "/assets/menu/Lemon-Coriander-Soup-1.webp",
    "/assets/menu/VegManchow.jpg",
    "/assets/menu/Caesar Salad.jpeg",
    "/assets/menu/chilliMushroom.jpeg",
    "/assets/menu/VegBiryani.jpeg",
    "/assets/menu/mirchifySplpasta.jpeg",
    "/assets/menu/mishroomtikka.jpeg",
    "/assets/menu/panirtikkaa.jpeg",
    "/assets/menu/rajmaChawal.jpeg",
            ]}
          />
          <GallerySection
            title="👨‍🍳 Chef in Action"
            images={[
              "/assets/menu/soup.jpg",
    "/assets/menu/lassi.webp",
    "/assets/menu/MintMojito.jpg",
    "/assets/menu/Lemon-Coriander-Soup-1.webp",
    "/assets/menu/VegManchow.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
            ]}
          />
          <GallerySection
            title="✨ Restaurant Ambiance"
            images={[
              "/assets/menu/soup.jpg",
    "/assets/menu/lassi.webp",
    "/assets/menu/MintMojito.jpg",
    "/assets/menu/Lemon-Coriander-Soup-1.webp",
    "/assets/menu/VegManchow.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
    "/assets/menu/soup.jpg",
            ]}
          />
          <GallerySection
            title="📸 Happy Moments with Customers"
            images={[
              "/assets/menu/soup.jpg",
    "/assets/menu/lass.webp",
    "/assets/menu/MintMojit.jpg",
    "/assets/menu/Lemon-Coriander-Sou-1.webp",
    "/assets/menu/VegManchow1.jpg",
    "/assets/menu/soup1.jpg",
    "/assets/menu/soup1.jpg",
    "/assets/menu/soup1.jpg",
    "/assets/menu/soup1.jpg",
    "/assets/menu/soup1.jpg",
    "/assets/menu/soup1.jpg",
    "/assets/menu/soup1.jpg",
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
