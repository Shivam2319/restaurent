// import React, { useState, useEffect, useRef } from "react";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { motion, AnimatePresence } from "framer-motion";
// import { OverlayPanel } from "primereact/overlaypanel";

// const InquiryAndNotification = () => {
//   // Form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   // Courses List (Updated)
//   const courses = [
//     { label: "ANM", value: "ANM" },
//     { label: "GNM", value: "GNM" },
//   ];

//   // Notifications (English & Hindi)
//   const allNotifications = {
//     en: [
//       "🚀 Admission Open for GNM Programme",
//       "⏳ Admission Support: 10 AM - 3 PM",
//       "📢 Limited Seats Available - Apply Now",
//       "📅 Last Date for Admission: March 15",
//       "🏥 Practical Training Included in Course",
//       "✅ Scholarship Programs Available",
//       "📜 Govt Approved Nursing Courses",
//       "🎓 100% Placement Assistance Provided",
//       "🏆 Award-Winning Faculty & Infrastructure",
//     ],
//     hi: [
//       "🚀 जीएनएम प्रोग्राम के लिए प्रवेश खुला है",
//       "⏳ प्रवेश सहायता: सुबह 10 बजे से 3 बजे तक",
//       "📢 सीमित सीटें उपलब्ध - अभी आवेदन करें",
//       "📅 प्रवेश की अंतिम तिथि: 15 मार्च",
//       "🏥 पाठ्यक्रम में व्यावहारिक प्रशिक्षण शामिल है",
//       "✅ छात्रवृत्ति कार्यक्रम उपलब्ध",
//       "📜 सरकारी मान्यता प्राप्त नर्सिंग कोर्स",
//       "🎓 100% प्लेसमेंट सहायता प्रदान की जाती है",
//       "🏆 पुरस्कार विजेता संकाय और बुनियादी ढांचा",
//     ],
//   };

//   // Notification state
//   const [language, setLanguage] = useState("en");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide notifications (every 3 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + 1 >= allNotifications[language].length ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [language]);

//   // Get 5 notifications at a time
//   const displayedNotifications = [
//     ...allNotifications[language],
//     ...allNotifications[language],
//   ].slice(currentIndex, currentIndex + 5);

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle Form Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000); // Hide message after 3s
//     setForm({ name: "", email: "", phone: "", course: "", message: "" }); // Reset form
//   };

//   // Language overlay menu
//   const menu = useRef(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
//       {/* Inquiry Form Section */}
//       <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
//           📩 General Enquiry
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Your Name *</label>
//               <InputText name="name" value={form.name} onChange={handleChange} className="w-full" />
//             </div>

//             <div>
//               <label className="text-gray-700 font-medium">Email Address *</label>
//               <InputText name="email" value={form.email} onChange={handleChange} className="w-full" />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Phone Number *</label>
//               <InputText name="phone" value={form.phone} onChange={handleChange} className="w-full" />
//             </div>

//             <div>
//               <label className="text-gray-700 font-medium">Course *</label>
//               <Dropdown name="course" value={form.course} options={courses} onChange={handleChange} placeholder="Choose Course" className="w-full" />
//             </div>
//           </div>

//           <div>
//             <label className="text-gray-700 font-medium">Message</label>
//             <InputTextarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Enter your message..." className="w-full" />
//           </div>

//           <Button label="Send Message" type="submit" className="p-button-lg p-button-primary w-full shadow-md" />

//           {/* Success Message */}
//           {submitted && <p className="text-green-600 text-center mt-2">✅ Your inquiry has been sent!</p>}
//         </form>
//       </Card>

//       {/* Notification Section */}
//       <div className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 to-purple-700">
//         <h3 className="text-xl font-bold text-white">📢 Notifications</h3>

//         {/* Language Dropdown Button */}
//         <Button
//           label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"}
//           className="p-button-secondary p-button-sm mt-2"
//           onClick={(e) => menu.current.toggle(e)}
//         />
//         <OverlayPanel ref={menu}>
//           <Button label="🇬🇧 English" className="p-button-text w-full" onClick={() => setLanguage("en")} />
//           <Button label="🇮🇳 हिंदी" className="p-button-text w-full" onClick={() => setLanguage("hi")} />
//         </OverlayPanel>

//         {/* Sliding Notifications */}
//         <div className="mt-4 space-y-2">
//           <AnimatePresence>
//             {displayedNotifications.map((note, index) => (
//               <motion.p key={index} className="text-white text-sm md:text-lg p-3 bg-white/20 rounded-md shadow-md" {...{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 } }}>
//                 {note}
//               </motion.p>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InquiryAndNotification;

// import React, { useState, useEffect, useRef } from "react";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { motion, AnimatePresence } from "framer-motion";
// import { OverlayPanel } from "primereact/overlaypanel";
// import { Dialog } from "primereact/dialog";

// const InquiryAndNotification = () => {
//   // Form state
//   const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Courses List
//   const courses = [
//     { label: "ANM", value: "ANM" },
//     { label: "GNM", value: "GNM" },
//   ];

//   // Notifications State
//   const [language, setLanguage] = useState("en");
//   const [notifications, setNotifications] = useState({
//     en: [
//       "🚀 Admission Open for GNM Programme",
//       "⏳ Admission Support: 10 AM - 3 PM",
//       "📢 Limited Seats Available - Apply Now",
//     ],
//     hi: [
//       "🚀 जीएनएम प्रोग्राम के लिए प्रवेश खुला है",
//       "⏳ प्रवेश सहायता: सुबह 10 बजे से 3 बजे तक",
//       "📢 सीमित सीटें उपलब्ध - अभी आवेदन करें",
//     ],
//   });

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [newNotification, setNewNotification] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");
//   const menu = useRef(null);

//   // Check login status
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   // Auto-slide notifications
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev + 1 >= notifications[language].length ? 0 : prev + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [language, notifications]);

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle Form Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//     setForm({ name: "", email: "", phone: "", course: "", message: "" });
//   };

//   // Handle Add Notification
//   const addNotification = () => {
//     if (newNotification.trim() !== "") {
//       setNotifications((prev) => ({
//         ...prev,
//         [language]: [...prev[language], newNotification],
//       }));
//       setNewNotification("");
//     }
//   };

//   // Handle Edit Notification
//   const editNotification = (index) => {
//     setEditIndex(index);
//     setEditText(notifications[language][index]);
//   };

//   const saveEditNotification = () => {
//     if (editIndex !== null && editText.trim() !== "") {
//       setNotifications((prev) => {
//         const updatedNotifications = [...prev[language]];
//         updatedNotifications[editIndex] = editText;
//         return { ...prev, [language]: updatedNotifications };
//       });
//       setEditIndex(null);
//       setEditText("");
//     }
//   };

//   // Handle Delete Notification
//   const deleteNotification = (index) => {
//     setNotifications((prev) => {
//       const updatedNotifications = prev[language].filter((_, i) => i !== index);
//       return { ...prev, [language]: updatedNotifications };
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
//       {/* Inquiry Form Section */}
//       <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">📩 General Enquiry</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Your Name *</label>
//               <InputText name="name" value={form.name} onChange={handleChange} className="w-full" />
//             </div>
//             <div>
//               <label className="text-gray-700 font-medium">Email Address *</label>
//               <InputText name="email" value={form.email} onChange={handleChange} className="w-full" />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Phone Number *</label>
//               <InputText name="phone" value={form.phone} onChange={handleChange} className="w-full" />
//             </div>
//             <div>
//               <label className="text-gray-700 font-medium">Course *</label>
//               <Dropdown name="course" value={form.course} options={courses} onChange={handleChange} placeholder="Choose Course" className="w-full" />
//             </div>
//           </div>
//           <div>
//             <label className="text-gray-700 font-medium">Message</label>
//             <InputTextarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full" />
//           </div>
//           <Button label="Send Message" type="submit" className="p-button-lg p-button-primary w-full shadow-md" />
//           {submitted && <p className="text-green-600 text-center mt-2">✅ Your inquiry has been sent!</p>}
//         </form>
//       </Card>

//       {/* Notifications Section */}
//       <div className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 to-purple-700">
//         <h3 className="text-xl font-bold text-white">📢 Notifications</h3>

//         {/* Language Selector */}
//         <Button label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"} className="p-button-secondary p-button-sm mt-2" onClick={(e) => menu.current.toggle(e)} />
//         <OverlayPanel ref={menu}>
//           <Button label="🇬🇧 English" className="p-button-text w-full" onClick={() => setLanguage("en")} />
//           <Button label="🇮🇳 हिंदी" className="p-button-text w-full" onClick={() => setLanguage("hi")} />
//         </OverlayPanel>

//         {/* Notifications List */}
//         <div className="mt-4 space-y-2">
//           {notifications[language].map((note, index) => (
//             <div key={index} className="flex justify-between items-center bg-white/20 text-white p-3 rounded-md shadow-md">
//               {editIndex === index ? (
//                 <InputText value={editText} onChange={(e) => setEditText(e.target.value)} />
//               ) : (
//                 <p>{note}</p>
//               )}
//               {isLoggedIn && (
//                 <>
//                   {editIndex === index ? <Button label="Save" onClick={saveEditNotification} /> : <Button label="✏️" onClick={() => editNotification(index)} />}
//                   <Button label="❌" onClick={() => deleteNotification(index)} />
//                 </>
//               )}
//             </div>
//           ))}
//           {isLoggedIn && <InputText value={newNotification} onChange={(e) => setNewNotification(e.target.value)} />}
//           {isLoggedIn && <Button label="Add" onClick={addNotification} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InquiryAndNotification;

// import React, { useState, useEffect, useRef } from "react";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { OverlayPanel } from "primereact/overlaypanel";

// const InquiryAndNotification = () => {
//   // Inquiry Form State
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Course Options
//   const courses = [
//     { label: "ANM", value: "ANM" },
//     { label: "GNM", value: "GNM" },
//   ];

//   // Notifications State
//   const [language, setLanguage] = useState("en");
//   const [notifications, setNotifications] = useState({
//     en: [
//       "🚀 Admission Open for GNM Programme",
//       "⏳ Admission Support: 10 AM - 3 PM",
//       "📢 Limited Seats Available - Apply Now",
//     ],
//     hi: [
//       "🚀 जीएनएम प्रोग्राम के लिए प्रवेश खुला है",
//       "⏳ प्रवेश सहायता: सुबह 10 बजे से 3 बजे तक",
//       "📢 सीमित सीटें उपलब्ध - अभी आवेदन करें",
//     ],
//   });

//   const [newNotification, setNewNotification] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");
//   const menu = useRef(null);

//   // Check login status
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   // Handle Inquiry Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//     setForm({ name: "", email: "", phone: "", course: "", message: "" });
//   };

//   // Add Notification
//   const addNotification = () => {
//     if (newNotification.trim() !== "") {
//       setNotifications((prev) => ({
//         ...prev,
//         [language]: [...prev[language], newNotification],
//       }));
//       setNewNotification("");
//     }
//   };

//   // Edit Notification
//   const editNotification = (index) => {
//     setEditIndex(index);
//     setEditText(notifications[language][index]);
//   };

//   const saveEditNotification = () => {
//     if (editIndex !== null && editText.trim() !== "") {
//       setNotifications((prev) => {
//         const updatedNotifications = [...prev[language]];
//         updatedNotifications[editIndex] = editText;
//         return { ...prev, [language]: updatedNotifications };
//       });
//       setEditIndex(null);
//       setEditText("");
//     }
//   };

//   // Delete Notification
//   const deleteNotification = (index) => {
//     setNotifications((prev) => {
//       const updatedNotifications = prev[language].filter((_, i) => i !== index);
//       return { ...prev, [language]: updatedNotifications };
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
//       {/* Inquiry Form Section */}
//       <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
//           📩 General Enquiry
//         </h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Your Name *</label>
//               <InputText
//                 name="name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-medium">
//                 Email Address *
//               </label>
//               <InputText
//                 name="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">
//                 Phone Number *
//               </label>
//               <InputText
//                 name="phone"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-medium">Course *</label>
//               <Dropdown
//                 name="course"
//                 value={form.course}
//                 options={courses}
//                 onChange={(e) => setForm({ ...form, course: e.value })}
//                 placeholder="Choose Course"
//                 className="w-full"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="text-gray-700 font-medium">Message</label>
//             <InputTextarea
//               name="message"
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               rows={4}
//               className="w-full"
//             />
//           </div>
//           <Button
//             label="Send Message"
//             type="submit"
//             className="p-button-lg p-button-primary w-full shadow-md"
//           />
//           {submitted && (
//             <p className="text-green-600 text-center mt-2">
//               ✅ Your inquiry has been sent!
//             </p>
//           )}
//         </form>
//       </Card>

//       {/* Notifications Section */}
//       <div className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 to-purple-700">
//         <h3 className="text-xl font-bold text-white">📢 Notifications</h3>

//         {/* Language Selector */}
//         <Button
//           label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"}
//           className="p-button-secondary p-button-sm mt-2"
//           onClick={(e) => menu.current.toggle(e)}
//         />
//         <OverlayPanel ref={menu}>
//           <Button
//             label="🇬🇧 English"
//             className="p-button-text w-full"
//             onClick={() => setLanguage("en")}
//           />
//           <Button
//             label="🇮🇳 हिंदी"
//             className="p-button-text w-full"
//             onClick={() => setLanguage("hi")}
//           />
//         </OverlayPanel>

//         {/* Notifications List */}
//         <div className="mt-4 space-y-2">
//           {notifications[language].map((note, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center bg-white/20 text-white p-3 rounded-md shadow-md"
//             >
//               {editIndex === index ? (
//                 <InputText
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                   className="text-black"
//                 />
//               ) : (
//                 <p>{note}</p>
//               )}
//               {isLoggedIn && (
//                 <>
//                 {editIndex === index ? (
//                   <Button 
//                     icon="pi pi-check" 
//                     className="p-button-success p-button-sm" 
//                     onClick={saveEditNotification} 
//                   />
//                 ) : (
//                   <Button 
//                     icon="pi pi-pencil" 
//                     className="p-button-sm p-button-outlined p-button-secondary bg-white text-gray-700 border-gray-300 hover:bg-purple-600 hover:text-white" 
//                     onClick={() => editNotification(index)} 
//                   />
//                 )}
//                 {/* <Button label="Warning" severity="warning" raised /> */}
//                 <Button 
//                 severity="warning" raised
//                   icon="pi pi-trash" 
//                   className="p-button-sm p-button-outlined p-button-danger bg-white text-gray-700 border-gray-300 hover:bg-purple-600 hover:text-white" 
//                   onClick={() => deleteNotification(index)} 
//                 />
//               </>
              
//               )}
//             </div>
//           ))}
//           {isLoggedIn && (
//             <InputText
//               value={newNotification}
//               onChange={(e) => setNewNotification(e.target.value)}
//               className="w-full mt-2"
//             />
//           )}
//           {isLoggedIn && (
//             <Button
//               label="Add"
//               className="p-button-success mt-2 w-full"
//               onClick={addNotification}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InquiryAndNotification;



import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { OverlayPanel } from "primereact/overlaypanel";

const API_URL = "http://localhost:5000/api/notifications";

const InquiryAndNotification = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const menu = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    fetchNotifications();
  }, [language]);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setNotifications(data.filter((n) => n.language === language));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const addNotification = async () => {
    if (newNotification.trim() !== "") {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newNotification, language }),
        });
        const newNotif = await response.json();
        setNotifications([...notifications, newNotif]);
        setNewNotification("");
      } catch (error) {
        console.error("Error adding notification:", error);
      }
    }
  };

  const saveEditNotification = async (id) => {
    if (editIndex !== null && editText.trim() !== "") {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: editText }),
        });
        setNotifications(notifications.map((n) => (n.id === id ? { ...n, message: editText } : n)));
        setEditIndex(null);
        setEditText("");
      } catch (error) {
        console.error("Error updating notification:", error);
      }
    }
  };

  const deleteNotification = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setNotifications(notifications.filter((n) => n.id !== id));
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
      <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">📩 General Enquiry</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Button label="Send Message" type="submit" className="p-button-lg p-button-primary w-full shadow-md" />
          {submitted && <p className="text-green-600 text-center mt-2">✅ Your inquiry has been sent!</p>}
        </form>
      </Card>
      <div className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 to-purple-700">
        <h3 className="text-xl font-bold text-white">📢 Notifications</h3>
        <Button label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"} className="p-button-secondary p-button-sm mt-2" onClick={(e) => menu.current.toggle(e)} />
        <OverlayPanel ref={menu}>
          <Button label="🇬🇧 English" className="p-button-text w-full" onClick={() => setLanguage("en")} />
          <Button label="🇮🇳 हिंदी" className="p-button-text w-full" onClick={() => setLanguage("hi")} />
        </OverlayPanel>
        <div className="mt-4 space-y-2">
          {notifications.map((note, index) => (
            <div key={note.id} className="flex justify-between items-center bg-white/20 text-white p-3 rounded-md shadow-md">
              {editIndex === index ? (
                <InputText value={editText} onChange={(e) => setEditText(e.target.value)} className="text-black" />
              ) : (
                <p>{note.message}</p>
              )}
              {isLoggedIn && (
                <>
                  {editIndex === index ? (
                    <Button icon="pi pi-check" className="p-button-success p-button-sm" onClick={() => saveEditNotification(note.id)} />
                  ) : (
                    <Button icon="pi pi-pencil" className="p-button-sm p-button-outlined p-button-secondary" onClick={() => setEditIndex(index)} />
                  )}
                  <Button icon="pi pi-trash" className="p-button-sm p-button-outlined p-button-danger" onClick={() => deleteNotification(note.id)} />
                </>
              )}
            </div>
          ))}
          {isLoggedIn && <InputText value={newNotification} onChange={(e) => setNewNotification(e.target.value)} className="w-full mt-2" />}
          {isLoggedIn && <Button label="Add" className="p-button-success mt-2 w-full" onClick={addNotification} />}
        </div>
      </div>
    </div>
  );
};

export default InquiryAndNotification;