import React from "react";
import { motion } from "framer-motion";
import FacilityCard from "../components/FacilityCard";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Alumni from "../components/Alumni";

const facilities = [
  {
    title: "Nursing Foundation Lab",
    description:
      "A fully equipped lab for students to practice basic nursing procedures, patient care, and clinical skills.",
    image: "/assets/FoundationLab1.jpeg",
  },
  {
    title: "Obstetrics and Gynecological Nursing Laboratory",
    description:
      "A dedicated lab to train students in maternity and gynecological care, including delivery simulations.",
    image: "/assets/FoundationLab3.jpeg",
  },
  {
    title: "MCH Laboratory",
    description:
      "The Maternal and Child Health (MCH) Lab provides hands-on training in prenatal, neonatal, and child healthcare.",
    image: "/assets/FoundationLab2.jpeg",
  },
  {
    title: "Advanced Skill Laboratory",
    description:
      "An advanced training lab featuring high-tech mannequins and simulation tools for complex nursing skills.",
    image: "/assets/facilities/advanced-skill-lab.jpg",
  },
  {
    title: "Nutrition Laboratory",
    description:
      "Equipped with modern kitchen facilities to teach students the principles of dietetics and patient nutrition.",
    image: "/assets/facilities/nutrition-lab.jpg",
  },
  {
    title: "Community Health Nursing Lab",
    description:
      "Designed to provide real-world training in community-based healthcare, disease prevention, and wellness education.",
    image: "/assets/facilities/community-health-lab.jpg",
  },
  {
    title: "Anatomy Lab",
    description:
      "A well-furnished lab with anatomical models and specimens to help students understand human body structure.",
    image: "/assets/facilities/anatomy-lab.jpg",
  },
  {
    title: "Paediatric Lab",
    description:
      "Specialized training space for pediatric nursing, including neonatal care and child health management.",
    image: "/assets/facilities/paediatric-lab.jpg",
  },
  {
    title: "Simulation Lab",
    description:
      "A high-tech simulation lab offering real-life clinical scenarios for skill enhancement and critical thinking.",
    image: "/assets/facilities/simulation-lab.jpg",
  },
  {
    title: "Library",
    description:
      "A comprehensive library with medical books, research papers, and journals to support student learning.",
    image: "/assets/facilities/library.jpg",
  },
  {
    title: "Hostel & Accommodation",
    description:
      "Comfortable and safe hostel facilities with modern amenities and 24/7 security for students.",
    image: "/assets/facilities/hostel.jpg",
  },
  {
    title: "Cafeteria",
    description:
      "A clean and hygienic cafeteria offering nutritious meals for students and staff.",
    image: "/assets/facilities/cafeteria.jpg",
  },
];

const Facilities = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
        {/* topheader */}
        <TopHeader/>
        {/* navbar */}
        <Navbar/>
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/heroFacilities.png')" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Campus Facilities & Labs
        </motion.h1>
      </div>

      {/* Facilities Section */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </motion.div>
      </div>
      <Alumni/>
      <Footer/>
    </div>
  );
};

export default Facilities;
