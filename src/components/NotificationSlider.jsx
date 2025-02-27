
// import React, { useState, useEffect } from "react";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu } from "primereact/menu";

// const InquiryAndNotification = () => {
//   // Form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   // Courses List
//   const courses = [
//     { label: "ANM", value: "ANM" },
//     { label: "B.Sc Nursing", value: "BSc Nursing" },
//     { label: "GNM", value: "GNM" },
//   ];

//   // Notifications in English & Hindi
//   const allNotifications = {
//     en: [
//       "🚀 Admission Open for GNM Programme",
//       "📝 B.Sc Nursing Registration is Live",
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
//       "📝 बी.एस.सी नर्सिंग पंजीकरण जारी है",
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

//   // Language dropdown menu
//   const menu = React.useRef(null);
//   const languageOptions = [
//     { label: "🇬🇧 English", command: () => setLanguage("en") },
//     { label: "🇮🇳 हिंदी", command: () => setLanguage("hi") },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600
// ">
//       {/* Inquiry Form Section */}
//       <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
//           📩 General Enquiry
//         </h2>

//         <form className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Your Name *</label>
//               <InputText name="name" className="w-full" />
//             </div>

//             <div>
//               <label className="text-gray-700 font-medium">Email Address *</label>
//               <InputText name="email" className="w-full" />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Phone Number *</label>
//               <InputText name="phone" className="w-full" />
//             </div>

//             <div>
//               <label className="text-gray-700 font-medium">Course *</label>
//               <Dropdown name="course" options={courses} placeholder="Choose Course" className="w-full" />
//             </div>
//           </div>

//           <div>
//             <label className="text-gray-700 font-medium">Message</label>
//             <InputTextarea name="message" rows={4} placeholder="Enter your message..." className="w-full" />
//           </div>

//           <Button label="Send Message" className="p-button-lg p-button-primary w-full shadow-md" />
//         </form>
//       </Card>

//       {/* Notification Section */}
//       <div className="p-6 rounded-lg shadow-xl" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
//         <h3 className="text-xl font-bold text-white">📢 Notifications</h3>

//         {/* Language Dropdown Button */}
//         <div className="relative mt-2">
//           <Button
//             label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"}
//             className="p-button-secondary p-button-sm"
//             onClick={(e) => menu.current.toggle(e)}
//           />
//           <Menu model={languageOptions} popup ref={menu} />
//         </div>

//         {/* Sliding Notifications */}
//         <div className="mt-4 space-y-2">
//           <AnimatePresence>
//             {displayedNotifications.map((note, index) => (
//               <motion.p
//                 key={index}
//                 className="text-white text-lg font-semibold p-3 bg-white/20 rounded-md shadow-md"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//               >
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


import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayPanel } from "primereact/overlaypanel";

const InquiryAndNotification = () => {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Courses List (Updated)
  const courses = [
    { label: "ANM", value: "ANM" },
    { label: "GNM", value: "GNM" },
  ];

  // Notifications (English & Hindi)
  const allNotifications = {
    en: [
      "🚀 Admission Open for GNM Programme",
      "⏳ Admission Support: 10 AM - 3 PM",
      "📢 Limited Seats Available - Apply Now",
      "📅 Last Date for Admission: March 15",
      "🏥 Practical Training Included in Course",
      "✅ Scholarship Programs Available",
      "📜 Govt Approved Nursing Courses",
      "🎓 100% Placement Assistance Provided",
      "🏆 Award-Winning Faculty & Infrastructure",
    ],
    hi: [
      "🚀 जीएनएम प्रोग्राम के लिए प्रवेश खुला है",
      "⏳ प्रवेश सहायता: सुबह 10 बजे से 3 बजे तक",
      "📢 सीमित सीटें उपलब्ध - अभी आवेदन करें",
      "📅 प्रवेश की अंतिम तिथि: 15 मार्च",
      "🏥 पाठ्यक्रम में व्यावहारिक प्रशिक्षण शामिल है",
      "✅ छात्रवृत्ति कार्यक्रम उपलब्ध",
      "📜 सरकारी मान्यता प्राप्त नर्सिंग कोर्स",
      "🎓 100% प्लेसमेंट सहायता प्रदान की जाती है",
      "🏆 पुरस्कार विजेता संकाय और बुनियादी ढांचा",
    ],
  };

  // Notification state
  const [language, setLanguage] = useState("en");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide notifications (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= allNotifications[language].length ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);

  // Get 5 notifications at a time
  const displayedNotifications = [
    ...allNotifications[language],
    ...allNotifications[language],
  ].slice(currentIndex, currentIndex + 5);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hide message after 3s
    setForm({ name: "", email: "", phone: "", course: "", message: "" }); // Reset form
  };

  // Language overlay menu
  const menu = useRef(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Inquiry Form Section */}
      <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          📩 General Enquiry
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">Your Name *</label>
              <InputText name="name" value={form.name} onChange={handleChange} className="w-full" />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email Address *</label>
              <InputText name="email" value={form.email} onChange={handleChange} className="w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">Phone Number *</label>
              <InputText name="phone" value={form.phone} onChange={handleChange} className="w-full" />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Course *</label>
              <Dropdown name="course" value={form.course} options={courses} onChange={handleChange} placeholder="Choose Course" className="w-full" />
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <InputTextarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Enter your message..." className="w-full" />
          </div>

          <Button label="Send Message" type="submit" className="p-button-lg p-button-primary w-full shadow-md" />

          {/* Success Message */}
          {submitted && <p className="text-green-600 text-center mt-2">✅ Your inquiry has been sent!</p>}
        </form>
      </Card>

      {/* Notification Section */}
      <div className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 to-purple-700">
        <h3 className="text-xl font-bold text-white">📢 Notifications</h3>

        {/* Language Dropdown Button */}
        <Button
          label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"}
          className="p-button-secondary p-button-sm mt-2"
          onClick={(e) => menu.current.toggle(e)}
        />
        <OverlayPanel ref={menu}>
          <Button label="🇬🇧 English" className="p-button-text w-full" onClick={() => setLanguage("en")} />
          <Button label="🇮🇳 हिंदी" className="p-button-text w-full" onClick={() => setLanguage("hi")} />
        </OverlayPanel>

        {/* Sliding Notifications */}
        <div className="mt-4 space-y-2">
          <AnimatePresence>
            {displayedNotifications.map((note, index) => (
              <motion.p key={index} className="text-white text-sm md:text-lg p-3 bg-white/20 rounded-md shadow-md" {...{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 } }}>
                {note}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InquiryAndNotification;
