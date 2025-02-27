import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    { label: "Home", icon: "pi pi-home", url: "/" },
    { label: "About", icon: "pi pi-info-circle", url: "/about/rbmsn" },
    { label: "Courses", icon: "pi pi-book", url: "/courses" },
    { label: "Facilities", icon: "pi pi-building", url: "/facilities" },
    { label: "Admission", icon: "pi pi-user-plus", url: "/admission" },
    { label: "Gallery", icon: "pi pi-images", url: "/gallery" },
    { label: "Forms", icon: "pi pi-file", url: "/forms" },
    { label: "Contact", icon: "pi pi-envelope", url: "/contact" },
  ];

  return (
    <div className="bg-white text-[#192f59] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Left Side - Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/assets/logo.jpg" alt="RBMSN Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-[#192f59]">R.B Memorial School of Nursing</span>
          </Link>

          {/* Desktop Menu - Hidden on Small Screens */}
          <div className="hidden md:block">
            <Menubar model={items} className="border-none shadow-none" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              icon="pi pi-bars"
              className="p-button-text text-[#192f59]"
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <Menubar model={items} className="border-none shadow-none" />
      </Sidebar>
    </div>
  );
};

export default Navbar;
