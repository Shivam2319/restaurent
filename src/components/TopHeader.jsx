// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faWhatsapp,
//   faFacebook,
//   faTwitter,
//   faYoutube,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// const TopHeader = () => {
//   return (
//     <div className="bg-blue-900 text-white py-2 px-4 flex flex-wrap justify-between items-center text-sm">
//       {/* Contact Info */}
//       <div className="flex flex-wrap gap-x-6 gap-y-2">
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faPhone} className="text-green-400" />
//           <span className="hidden sm:inline">+91 7766912140</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
//           <span className="hidden sm:inline">+91 7766912140</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
//           <span className="hidden sm:inline">
//             rbmemorialschoolofnursing@gmail.com
//           </span>
//         </div>
//       </div>

//       {/* Social Media Links */}
//       <div className="flex space-x-4">
//         <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300 transition-all">
//           <FontAwesomeIcon icon={faFacebook} />
//         </a>
//         <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300 transition-all">
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//         <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-300 transition-all">
//           <FontAwesomeIcon icon={faYoutube} />
//         </a>
//         <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300 transition-all">
//           <FontAwesomeIcon icon={faLinkedin} />
//         </a>

//         {/* User Login Button */}
//         <button
//           aria-label="User Login"
//           className="hover:text-gray-300 transition-all"
//         >
//           <FontAwesomeIcon icon={faUser} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopHeader;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSignOutAlt, // Logout icon
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const TopHeader = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token existence to boolean
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

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

      {/* Social Media & Login/Logout Button */}
      <div className="flex items-center space-x-4">
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

        {/* Show Login or Logout based on authentication */}
        {isLoggedIn ? (
          <button
            aria-label="User Logout"
            className="hover:text-gray-300 transition-all flex items-center space-x-1"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        ) : (
          <button
            aria-label="User Login"
            className="hover:text-gray-300 transition-all flex items-center space-x-1"
            onClick={() => navigate("/login")}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="hidden sm:inline">Login</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
