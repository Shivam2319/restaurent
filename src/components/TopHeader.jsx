import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSignOutAlt,
  faBell, // Notification Icon
  faDownload, // Download Icon
  faPaperPlane, // Mail Icon
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Dialog } from "primereact/dialog"; // PrimeReact modal
import { Button } from "primereact/button";
import axios from "axios"; // For API requests
import { toast } from "react-toastify";

const TopHeader = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // 📩 Download PDF
  const handleDownloadPDF = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/inquiries/", {
        responseType: "blob", // Ensure it's a file
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "inquiries.pdf");
      document.body.appendChild(link);
      link.click();

      toast.success("PDF Downloaded Successfully!");
    } catch (error) {
      toast.error("Failed to download PDF.");
      console.error(error);
    }
  };

  // 📧 Send Email
  const handleSendEmail = async () => {
    try {
      await axios.post(
        "/api/inquiries/send-email",
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      toast.success("Email Sent Successfully!");
    } catch (error) {
      toast.error("Failed to send email.");
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-900 text-white py-2 px-4 flex flex-wrap justify-between items-center text-sm">
      {/* Contact Info */}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-green-400" />
          <span className="hidden sm:inline">+91 9572913495</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
          <span className="hidden sm:inline">+91 9905880422</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
          <span className="hidden sm:inline">
            abc@gmail.com
          </span>
        </div>
      </div>

      {/* Social Media & Login/Logout */}
      <div className="flex items-center space-x-4">
        <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/" aria-label="LinkedIn" className="hover:text-gray-300 transition-all">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        {/* Notifications - Visible only if logged in */}
        {isLoggedIn && (
          <button
            className="relative text-white hover:text-gray-300 transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            <FontAwesomeIcon icon={faBell} size="lg" />
          </button>
        )}

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

      {/* Notification Modal */}
      <Dialog
        visible={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        header="Inquiry Notifications"
        className="w-96"
      >
        <p>You can download or email the inquiry data.</p>
        <div className="flex justify-between mt-4">
          <Button label="Download PDF" icon="pi pi-download" onClick={handleDownloadPDF} />
          <Button label="Send Email" icon="pi pi-send" severity="secondary" onClick={handleSendEmail} />
        </div>
      </Dialog>
    </div>
  );
};

export default TopHeader;




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faUser,
//   faSignOutAlt,
//   faBell,
//   faDownload,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faWhatsapp,
//   faFacebook,
//   faTwitter,
//   faYoutube,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { toast } from "react-toastify";

// const TopHeader = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   // 📩 Download PDF using Fetch API
//   const handleDownloadPDF = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/inquiries/", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to download PDF.");
//       }

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "inquiries.pdf");
//       document.body.appendChild(link);
//       link.click();

//       toast.success("PDF Downloaded Successfully!");
//     } catch (error) {
//       toast.error(error.message || "Failed to download PDF.");
//       console.error(error);
//     }
//   };

//   // 📧 Send Email using Fetch API
//   const handleSendEmail = async () => {
//     try {
//       const response = await fetch("/api/inquiries/email", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send email.");
//       }

//       toast.success("Email Sent Successfully!");
//     } catch (error) {
//       toast.error(error.message || "Failed to send email.");
//       console.error(error);
//     }
//   };

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

//       {/* Social Media & Login/Logout */}
//       <div className="flex items-center space-x-4">
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

//         {/* Notifications - Visible only if logged in */}
//         {isLoggedIn && (
//           <button
//             className="relative text-white hover:text-gray-300 transition-all"
//             onClick={() => setIsModalOpen(true)}
//           >
//             <FontAwesomeIcon icon={faBell} size="lg" />
//           </button>
//         )}

//         {/* Show Login or Logout based on authentication */}
//         {isLoggedIn ? (
//           <button
//             aria-label="User Logout"
//             className="hover:text-gray-300 transition-all flex items-center space-x-1"
//             onClick={handleLogout}
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} />
//             <span className="hidden sm:inline">Logout</span>
//           </button>
//         ) : (
//           <button
//             aria-label="User Login"
//             className="hover:text-gray-300 transition-all flex items-center space-x-1"
//             onClick={() => navigate("/login")}
//           >
//             <FontAwesomeIcon icon={faUser} />
//             <span className="hidden sm:inline">Login</span>
//           </button>
//         )}
//       </div>

//       {/* Notification Modal */}
//       <Dialog
//         visible={isModalOpen}
//         onHide={() => setIsModalOpen(false)}
//         header="Inquiry Notifications"
//         className="w-96"
//       >
//         <p>You can download or email the inquiry data.</p>
//         <div className="flex justify-between mt-4">
//           <Button label="Download PDF" icon="pi pi-download" onClick={handleDownloadPDF} />
//           <Button label="Send Email" icon="pi pi-send" severity="secondary" onClick={handleSendEmail} />
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default TopHeader;
