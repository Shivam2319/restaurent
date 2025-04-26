import React from 'react';
import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/RestaurantIntro';
import ChefSpecials from '../components/ChefSpecials';
// import RestaurantIntro from '../components/RestaurantIntro';
import Testimonials from '../components/Testimonials';
import GalleryPreview from '../components/GalleryPreview';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-orange-50 to-white min-h-screen">
      {/* Top Header */}
      <TopHeader />
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroSection />

      {/* Intro/About Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* <RestaurantIntro /> */}

        {/* Chef's Specials / Highlighted Dishes */}
        <ChefSpecials />

        {/* Testimonials */}
        <Testimonials />

        {/* Gallery Preview */}
        <GalleryPreview />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
