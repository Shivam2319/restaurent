// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const TopHeader = () => {
//   return (
//     <div className="bg-blue-900 text-white py-2 px-4 flex justify-between items-center text-sm">
//       <div className="flex space-x-4">
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faPhone} className="text-green-400" />
//           <span>+91 7766912140</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
//           <span>+91 7766912140</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
//           <span>rbmemorialschoolofnursing@gmail.com</span>
//         </div>
//       </div>
//       <div className="flex space-x-4">
//         <FontAwesomeIcon icon={faFacebook} className="text-white cursor-pointer" />
//         <FontAwesomeIcon icon={faTwitter} className="text-white cursor-pointer" />
//         <FontAwesomeIcon icon={faYoutube} className="text-white cursor-pointer" />
//         <FontAwesomeIcon icon={faLinkedin} className="text-white cursor-pointer" />
//         <FontAwesomeIcon icon={faUser} className="text-white cursor-pointer" />
//       </div>
//     </div>
//   );
// };

// export default TopHeader;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const TopHeader = () => {
  return (
    <div className="bg-blue-900 text-white py-2 px-4 flex flex-wrap justify-between items-center text-sm">
      {/* Contact Info */}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-green-400" />
          <span className="hidden sm:inline">+91 7766912140</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
          <span className="hidden sm:inline">+91 7766912140</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
          <span className="hidden sm:inline">
            rbmemorialschoolofnursing@gmail.com
          </span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* User Login Button */}
        <button
          aria-label="User Login"
          className="hover:text-gray-300 transition-all"
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
