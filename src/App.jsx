
// this works on localhost
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; 
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

// import Home from "./Pages/Home";
// import About from "./Pages/About"; 
// import MenuPage from "./Pages/MenuPage"; 
// import Gallery from "./Pages/Gallery";
// import MyOrders from "./Pages/MyOrders";

// import Login from "./Pages/Login";  // Import Login page
// import Signup from "./Pages/Signup"; // Import Signup page

// function App() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/my-orders" element={<MyOrders />} />
//         <Route path="/menu" element={<MenuPage />} />
        
//         <Route path="/gallery" element={<Gallery />} />
        
//         <Route path="/login" element={<Login />} />   {/* Login Page Route */}
//         <Route path="/signup" element={<Signup />} /> {/* Signup Page Route */}
//       </Routes>
    
//   );
// }

// export default App;


// for testing purpose on netlify

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Page Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import MenuPage from "./Pages/MenuPage";
import Gallery from "./Pages/Gallery";
// import MyOrders from "./Pages/MyOrders";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";

// Layout Components
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    // Removed the <Router> wrapper since it's in main.jsx
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      
      <main className="flex-grow">
        <Routes>
        
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         {/* <Route path="/my-orders" element={<MyOrders />} /> */}
         <Route path="/reservation" element={<Reservation />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/menu" element={<MenuPage />} />      
         <Route path="/gallery" element={<Gallery />} />      
         <Route path="/login" element={<Login />} />   {/* Login Page Route */}
         <Route path="/signup" element={<Signup />} /> {/* Signup Page Route */}
       
          
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
