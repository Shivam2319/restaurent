// responsive layout for all devices
import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    { 
      label: "Home", 
      icon: "pi pi-home", 
      url: "/",
      command: () => setVisible(false)
    },
    { 
      label: "Menu", 
      icon: "pi pi-book", 
      url: "/menu",
      command: () => setVisible(false)
    },
    // { 
    //   label: "My Orders", 
    //   icon: "pi pi-shopping-cart", 
    //   url: "/my-orders",
    //   command: () => setVisible(false)
    // },
    { 
      label: "About Us", 
      icon: "pi pi-info-circle", 
      url: "/about",
      command: () => setVisible(false)
    },
    { 
      label: "Gallery", 
      icon: "pi pi-images", 
      url: "/gallery",
      command: () => setVisible(false)
    },
    { 
      label: "Reservation", 
      icon: "pi pi-calendar-plus", 
      url: "/reservation",
      command: () => setVisible(false)
    },
    { 
      label: "Contact", 
      icon: "pi pi-envelope", 
      url: "/contact",
      command: () => setVisible(false)
    },
  ];

  const start = (
    <Link to="/" className="flex items-center gap-3 no-underline">
      <img
        src="/assets/mirchify.webp"
        alt="Restaurant Logo"
        className="h-10 w-10 object-contain rounded-full shadow"
      />
      <span className="text-2xl font-bold text-[#d63447] tracking-wide">
        MirchiFY
      </span>
    </Link>
  );

  const end = (
    <div className="md:hidden">
      <Button
        icon="pi pi-bars"
        className="p-button-text text-[#d63447]"
        onClick={() => setVisible(true)}
      />
    </div>
  );

  return (
    <div className="bg-white text-[#1a1a1a] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Menubar
            model={items}
            start={start}
            className="border-none shadow-none bg-transparent py-2"
          />
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center py-3">
          {start}
          {end}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="w-64"
        position="right"
      >
        <div className="flex flex-col space-y-4 mt-4">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.url}
              className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setVisible(false)}
            >
              <i className={`${item.icon} mr-3`} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </Sidebar>
    </div>
  );
};

export default Navbar;