import React from "react";
import { Card } from "primereact/card";
import Alumni from "../components/Alumni"; 
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AnimatedButton";
import Director from "../components/Director";
import TopHeader from "../components/TopHeader";

const AboutRbmsn = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <TopHeader/>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        {/* Page Title */}
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-blue-600">RB Memorial School of Nursing</span>
        </motion.h2>

        {/* About Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Image */}
          <motion.img 
            src="/assets/building2.jpeg" 
            alt="College Building"
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Text Content */}
          <Card className="shadow-lg p-6 rounded-2xl bg-white text-left">
            <p className="text-gray-600 text-lg leading-relaxed">
              Nestled in the heart of <strong>Darbhanga and Laheriasarai</strong>, RB Memorial School of Nursing has been a 
              beacon of excellence since <strong>2007</strong>. With a commitment to top-notch healthcare education, we 
              provide hands-on clinical training at <strong>Darbhanga Medical College & Hospital</strong> and other prestigious institutions.
            </p>
          </Card>
        </motion.div>
        {/* Director Section */}
        <Director/>

        {/* Placement Section Heading */}
        <motion.h2 
          className="text-3xl font-bold text-gray-800 text-center mt-12 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🎯 Career Opportunities & Placements
        </motion.h2>

        {/* Placement & Tie-ups Section */}
        <motion.div 
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Placement Info */}
          <Card className="shadow-lg p-6 rounded-2xl bg-white text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🎓 100% Placement & Hospital Tie-ups</h3>
            <p className="text-gray-600 text-lg">
              What sets us apart is our commitment to student success. We proudly offer <strong>100% placement assistance</strong> 
              with tie-ups in <strong>government hospitals, agencies, and over 100 private hospitals</strong> across India. 
              Our extensive network ensures that our graduates step into the healthcare industry with confidence and numerous opportunities.
            </p>
          </Card>

          {/* Placement Image */}
          <motion.img 
            src="/assets/Building/4.jpeg" 
            alt="Placement Success"
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Location Section Heading */}
        <motion.h2 
          className="text-3xl font-bold text-gray-800 text-center mt-12 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📍 Our Prime Location
        </motion.h2>

        {/* Location Section */}
        <motion.div 
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Location Info */}
          <Card className="shadow-lg p-6 rounded-2xl bg-white text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📍 Location</h3>
            <p className="text-gray-600 text-lg">
              Conveniently located at <strong>R.S. Tank, Laheriasarai, Darbhanga, Bihar</strong>, we are just 
              <strong> 1 km from the railway station</strong> and <strong>1.5 km from the bus stand</strong>, 
              ensuring easy access for students.
            </p>
          </Card>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-60 md:h-72 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4226851062267!2d85.9073724!3d26.117757799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb8f3a062bf0d%3A0x249d2ed0f5ef81d4!2sR.B.Memorial%20School%20Of%20Nursing!5e0!3m2!1sen!2sin!4v1740191763566!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Campus Section */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">🏫 The Campus</h3>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
            Our campus is a sanctuary of learning, designed to foster <strong>peace, discipline, and intellectual growth</strong>. 
            Located on the main road of Darbhanga City, it provides all essential facilities for student success.
          </p>
        </motion.div>

        {/* Animated Button */}
        <div className="flex justify-center mt-10">
          <AnimatedButton label="Explore More" onClick={() => console.log("Navigating...")} />
        </div>
      </div>

      {/* Alumni Section */}
      <div className="mt-12">
        <Alumni />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutRbmsn;
