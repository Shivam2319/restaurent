// responsive Layout
import React from "react";
import { Card } from "primereact/card";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Page Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-[#d63447] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-[#192f59]">MirchiFy</span>
        </motion.h2>

        {/* Intro Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/assets/mirchifybg.webp"
            alt="MirchiFy Interior"
            className="rounded-2xl shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <Card className="shadow-lg p-4 sm:p-6 rounded-2xl bg-white">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Welcome to <strong>MirchiFy</strong> – where flavor meets tradition.
              Located in the heart of Noida, we specialize in delivering
              delicious, authentic vegetarian cuisine with a modern twist. From
              street-style chaats to gourmet pastas, our menu is curated with love
              for every kind of foodie.
            </p>
          </Card>
        </motion.div>

        {/* Owner Message */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-lg p-4 sm:p-6 rounded-2xl bg-white order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              👨‍🍳 A Message from Our Founder
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              "At MirchiFy, we believe food is not just to satisfy hunger but to
              bring joy. Each dish we serve is crafted with care, using fresh
              ingredients and traditional recipes. Our passion is to create
              memories for our guests with every meal."
            </p>
            <p className="text-gray-600 mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
              — The MirchiFy Team
            </p>
          </Card>
          <motion.img
            src="/assets/chef-owner.jpg"
            alt="Founder"
            className="rounded-2xl shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Recognition */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#d63447] mb-4 sm:mb-6">
            🏆 Awards & Recognition
          </h3>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto">
            Proudly featured among the top vegetarian cafés in Noida. Loved by foodies and recognized by local food bloggers for quality, cleanliness, and taste.
          </p>
        </motion.div>

        {/* Location */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mt-16 sm:mt-20 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📍 Our Location
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-lg p-4 sm:p-6 rounded-2xl bg-white">
            <p className="text-gray-700 text-base sm:text-lg">
              Visit us at <strong>Shop Number 88, Assotech Business Cresterra, Plot No 22, Sector 135, Noida, Uttar Pradesh 201304</strong>. We're open 7 days a week from <strong>11:00 AM to 11:00 PM</strong>. Dine in or order online for quick delivery!
            </p>
            <p className="mt-3 sm:mt-4 text-sm text-gray-500">📞 +91 9935754754</p>
          </Card>
          <iframe
            title="Google Map"
            className="w-full h-64 sm:h-72 rounded-2xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.3775534188973!2d77.38256427522483!3d28.51445907572061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce99f7621b2cb%3A0x73ea10f6d135c978!2sAssotech%20Business%20Cresterra!5e0!3m2!1sen!2sin!4v1682000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Restaurant Vibes */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#192f59] mb-4 sm:mb-6">
            🍽️ Feel the Vibe
          </h3>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-3xl mx-auto">
            Whether it's a quick lunch or a family dinner, MirchiFy offers a cozy, vibrant space for all. Enjoy delicious food, warm lighting, and a relaxed vibe with friends and family.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default About;