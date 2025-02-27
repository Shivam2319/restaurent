import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Home from "./Pages/Home";
import AboutRbmsn from "./Pages/AboutRbmsn"; // Import the About page
import Gallery from "./Pages/Gallery";
import Courses from "./Pages/Courses";
import Facilities from "./Pages/Facilities";
import Admission from "./Pages/Admission";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/rbmsn" element={<AboutRbmsn />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission/>} />
      </Routes>
    
  );
}

export default App;
