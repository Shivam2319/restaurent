
// import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { MdPhone } from "react-icons/md";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Left - Logo + About + Social */}
//         <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
//           <img src="/assets/logo-white.png" alt="mirchiFy" className="w-32 mb-4" />
//           <p className="text-sm text-gray-300 mb-4 max-w-sm">
//             mirchiFy is known for creating unforgettable food experiences. We believe that food is therapy and try to put up a smile on your face with our culinary skills.
//           </p>
//           <div className="flex gap-4 text-lg text-gray-300">
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//           </div>
//         </div>

//         {/* Middle Left - Address */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Our Addresses</h4>
//           <p className="text-sm text-gray-300 mb-2">
//             34, Karl Marx Sarani, Khidderpore,<br />
//             Kolkata – 700023
//           </p>
//           <p className="text-sm text-gray-300">
//             9, Kazi Nazrul Islam Avenue<br />
//             Kaikhali Crossing,<br />
//             Kolkata – 700052
//           </p>
//         </div>

//         {/* Middle Right - Business Hours */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Business Hours</h4>
//           {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
//             <p key={day} className="text-sm text-gray-300">
//               {day}: 11:00 AM – 11:00 PM
//             </p>
//           ))}
//         </div>

//         {/* Right - Contact Details */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Contact Details</h4>
//           <div className="mb-3">
//             <h5 className="font-semibold text-white">Khidderpore</h5>
//             <p className="text-sm text-gray-300 flex items-center gap-1">
//               <MdPhone /> +91 8481848484
//             </p>
//             <p className="text-sm text-gray-300 flex items-center gap-1">
//               <MdPhone /> +91 8420533005
//             </p>
//           </div>
//           <div>
//             <h5 className="font-semibold text-white">Kaikhali</h5>
//             <p className="text-sm text-gray-300 flex items-center gap-1">
//               <MdPhone /> +033 4804 9142
//             </p>
//             <p className="text-sm text-gray-300 flex items-center gap-1">
//               <MdPhone /> +91 99039 80011
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom - Google Map */}
//       <div className="w-full">
//         <iframe
//           title="mirchiFy Map"
//           src="https://www.google.com/maps/embed?pb=..."
//           width="100%"
//           height="300"
//           allowFullScreen=""
//           loading="lazy"
//           className="border-none w-full"
//         ></iframe>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white px-6 py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
//         {/* Brand Info */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">MirchiFy</h2>
//           <p className="text-sm text-gray-300 mb-4">
//             MirchiFy is known for creating unforgettable food experiences. We believe food is therapy and try to put a smile on your face with our culinary skills.
//           </p>
//           <div className="flex gap-4 text-xl">
//             <FaInstagram className="hover:text-red-500 cursor-pointer" />
//             <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
//             <FaTwitter className="hover:text-blue-300 cursor-pointer" />
//           </div>
//         </div>

//         {/* Address */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Our Address</h3>
//           <p className="text-sm text-gray-300">
//             Shop Number 88, Assotech Business Cresterra, Plot No 22,<br />
//             Sector 135, Noida, Uttar Pradesh 201304
//           </p>
//         </div>

//         {/* Business Hours */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
//           <ul className="text-sm text-gray-300 space-y-1">
//             <li>Mon - Sun: 11:00 AM – 11:00 PM</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
//           <p className="text-sm text-gray-300 flex items-center gap-2">
//             <FaPhoneAlt /> +91 9935754754
//           </p>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="mt-10">
//         <iframe
//           title="MirchiFy Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.3775534188973!2d77.38256427522483!3d28.51445907572061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce99f7621b2cb%3A0x73ea10f6d135c978!2sAssotech%20Business%20Cresterra!5e0!3m2!1sen!2sin!4v1682000000000!5m2!1sen!2sin"
//           width="100%"
//           height="250"
//           className="rounded-lg border-0 w-full"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>

//       <div className="text-center text-gray-500 mt-6 text-sm">
//         © {new Date().getFullYear()} MirchiFy. All rights reserved.
//       </div>
//     </footer>
//   );
// }


// responsive layout for all devices
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Brand Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">MirchiFy</h2>
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
            <li>Mon - Sun:</li>
            <li>11:00 AM – 11:00 PM</li>
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
        © {new Date().getFullYear()} MirchiFy. All rights reserved.
      </div>
    </footer>
  );
}