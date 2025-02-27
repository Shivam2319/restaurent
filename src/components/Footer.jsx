// import React from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1a1a2e] text-white py-12 mt-12">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
//         {/* About Section */}
//         <div>
//           <h2 className="text-2xl font-bold">RB Memorial School of Nursing</h2>
//           <p className="mt-3 text-gray-400">
//             Shaping the future of healthcare through excellence in education and training.
//           </p>
//           <div className="flex mt-4 space-x-4">
//             <a href="#" className="hover:text-gray-300 text-xl"><FaFacebook /></a>
//             <a href="#" className="hover:text-gray-300 text-xl"><FaInstagram /></a>
//             <a href="#" className="hover:text-gray-300 text-xl"><FaLinkedin /></a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold">Quick Links</h3>
//           <ul className="mt-3 space-y-2">
//             <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
//             <li><a href="/courses" className="hover:text-gray-300">Courses</a></li>
//             <li><a href="/admission" className="hover:text-gray-300">Admission</a></li>
//             <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Google Map Embed */}
//         <div>
//           <h3 className="text-xl font-semibold">Our Location</h3>
//           <div className="mt-3 rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               title="Google Map"
//               className="w-full h-40 md:h-48 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4226851062267!2d85.9073724!3d26.117757799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb8f3a062bf0d%3A0x249d2ed0f5ef81d4!2sR.B.Memorial%20School%20Of%20Nursing!5e0!3m2!1sen!2sin!4v1740191763566!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-8 border-t border-gray-600 text-center pt-4 text-sm text-gray-400">
//         © {new Date().getFullYear()} RB Memorial School of Nursing. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold">RB Memorial School of Nursing</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Shaping the future of healthcare through excellence in education and training.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-gray-300 text-xl transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="hover:text-gray-300 text-xl transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-gray-300 text-xl transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["About Us", "Courses", "Admission", "Contact Us"].map((link, index) => (
              <li key={index}>
                <a href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-gray-300 transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Google Map Embed */}
        <div>
          <h3 className="text-xl font-semibold">Our Location</h3>
          <div className="mt-3 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-40 md:h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4226851062267!2d85.9073724!3d26.117757799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb8f3a062bf0d%3A0x249d2ed0f5ef81d4!2sR.B.Memorial%20School%20Of%20Nursing!5e0!3m2!1sen!2sin!4v1740191763566!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-600 text-center pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} RB Memorial School of Nursing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
