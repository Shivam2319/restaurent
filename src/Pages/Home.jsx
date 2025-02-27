// import React from 'react';
// import TopHeader from '../components/TopHeader';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import HomePageCards from '../components/HomePageCards';
// import Alumni from '../components/Alumni';
// import AboutHome from '../components/AboutHome';
// import NotificationSlider from '../components/NotificationSlider';
// import Footer from '../components/Footer';

// function Home() {
//   return (
//     <>
//     <TopHeader/>
//     <Navbar/>
//     <HeroSection/>
//     <HomePageCards/>
//     <Alumni/>
//     <AboutHome/>
//     <NotificationSlider/>
//     <Footer/>
//     </>
    

//   )
// }

// export default Home


import React from 'react';
import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HomePageCards from '../components/HomePageCards';
import Alumni from '../components/Alumni';
import AboutHome from '../components/AboutHome';
import NotificationSlider from '../components/NotificationSlider';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      {/* Top Header */}
      <TopHeader />

      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageCards />
        <Alumni />
        <AboutHome />
      {/* Notification Slider (Placed higher for better UX) */}
      <div className="mt-4">
        <NotificationSlider />
      </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
