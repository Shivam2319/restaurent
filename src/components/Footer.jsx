
// responsive layout for all devices
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Brand Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">MIRCHIFY</h2>
          <p className="text-xs sm:text-sm text-gray-300 mb-4">
            MirchiFy is known for creating unforgettable food experiences. We believe food is therapy and try to put a smile on your face with our culinary skills.
          </p>
          <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-red-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Our Address</h3>
          <p className="text-xs sm:text-sm text-gray-300">
            Shop Number 88, Assotech Business Cresterra,<br />
            Plot No 22, Sector 135,<br />
            Noida, Uttar Pradesh 201304
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Business Hours</h3>
          <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
            <li>Monday - Saturday:</li>
            <li>09:00 AM – 11:00 PM</li>
            <li>Sunday - 11:00 AM – 10:00 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Contact Us</h3>
          <a 
            href="tel:+919935754754" 
            className="text-xs sm:text-sm text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
          >
            <FaPhoneAlt /> +91 9935754754
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="mt-8 sm:mt-10">
        <iframe
          title="MirchiFy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.3775534188973!2d77.38256427522483!3d28.51445907572061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce99f7621b2cb%3A0x73ea10f6d135c978!2sAssotech%20Business%20Cresterra!5e0!3m2!1sen!2sin!4v1682000000000!5m2!1sen!2sin"
          width="100%"
          height="200"
          className="rounded-lg border-0 w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center text-gray-500 mt-6 text-xs sm:text-sm">
        © {new Date().getFullYear()} MIRCHIFY. All rights reserved.
      </div>
    </footer>
  );
}