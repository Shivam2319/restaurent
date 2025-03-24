// import React, { useState, useEffect, useRef } from "react";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { OverlayPanel } from "primereact/overlaypanel";
// import ActionButton from "../components/ActionButton"; // Import ActionButton component

// const API_URL = "http://localhost:5000/api/notifications";

// const InquiryAndNotification = () => {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [notifications, setNotifications] = useState([]);
//   const [newNotification, setNewNotification] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");
//   const menu = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     fetchNotifications();
//   }, [language]);

//   const fetchNotifications = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setNotifications(data.filter((n) => n.language === language));
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const addNotification = async () => {
//     if (newNotification.trim() !== "") {
//       try {
//         const response = await fetch(API_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ message: newNotification, language }),
//         });
//         const newNotif = await response.json();
//         setNotifications([...notifications, newNotif]);
//         setNewNotification("");
//       } catch (error) {
//         console.error("Error adding notification:", error);
//       }
//     }
//   };

//   const saveEditNotification = async (id) => {
//     if (editIndex !== null && editText.trim() !== "") {
//       try {
//         await fetch(`${API_URL}/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ message: editText }),
//         });
//         setNotifications(notifications.map((n) => (n.id === id ? { ...n, message: editText } : n)));
//         setEditIndex(null);
//         setEditText("");
//       } catch (error) {
//         console.error("Error updating notification:", error);
//       }
//     }
//   };

//   const deleteNotification = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       setNotifications(notifications.filter((n) => n.id !== id));
//     } catch (error) {
//       console.error("Error deleting notification:", error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
//       <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
//          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">📩 General Enquiry</h2>
//          <form className="space-y-4" onSubmit={handleSubmit}>
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//              <div>
//                <label className="text-gray-700 font-medium">Your Name *</label>
//                <InputText name="name" value={form.name} onChange={handleChange} className="w-full" />
//              </div>
//              <div>
//                <label className="text-gray-700 font-medium">Email Address *</label>
//                <InputText name="email" value={form.email} onChange={handleChange} className="w-full" />
//              </div>
//            </div>
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//              <div>
//                <label className="text-gray-700 font-medium">Phone Number *</label>
//                <InputText name="phone" value={form.phone} onChange={handleChange} className="w-full" />
//              </div>
//              <div>
//                <label className="text-gray-700 font-medium">Course *</label>
//                <Dropdown name="course" value={form.course} options={courses} onChange={handleChange} placeholder="Choose Course" className="w-full" />
//              </div>
//            </div>
//            <div>
//              <label className="text-gray-700 font-medium">Message</label>
//              <InputTextarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full" />
//            </div>
//            <Button label="Send Message" type="submit" className="p-button-lg p-button-primary w-full shadow-md" />
//            {submitted && <p className="text-green-600 text-center mt-2">✅ Your inquiry has been sent!</p>}
//          </form>
//        </Card>

//       <div className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 to-purple-700">
//         <h3 className="text-xl font-bold text-white">📢 Notifications</h3>
//         <Button label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"} className="p-button-secondary p-button-sm mt-2" onClick={(e) => menu.current.toggle(e)} />
//         <OverlayPanel ref={menu}>
//           <Button label="🇬🇧 English" className="p-button-text w-full" onClick={() => setLanguage("en")} />
//           <Button label="🇮🇳 हिंदी" className="p-button-text w-full" onClick={() => setLanguage("hi")} />
//         </OverlayPanel>

//         <div className="mt-4 space-y-2">
//           {notifications.map((note, index) => (
//             <div key={note.id} className="flex justify-between items-center bg-white/20 text-white p-3 rounded-md shadow-md">
//               {editIndex === index ? (
//                 <InputText value={editText} onChange={(e) => setEditText(e.target.value)} className="text-black" />
//               ) : (
//                 <p>{note.message}</p>
//               )}
//               {isLoggedIn && (
//                 <div className="flex space-x-2">
//                   {editIndex === index ? (
//                     <ActionButton icon="pi pi-check" type="save" onClick={() => saveEditNotification(note.id)} />
//                   ) : (
//                     <ActionButton icon="pi pi-pencil" type="edit" onClick={() => setEditIndex(index)} />
//                   )}
//                   <ActionButton icon="pi pi-trash" type="delete" onClick={() => deleteNotification(note.id)} />
//                 </div>
//               )}
//             </div>
//           ))}
//           {isLoggedIn && (
//             <div className="mt-4">
//               <InputText value={newNotification} onChange={(e) => setNewNotification(e.target.value)} className="w-full mt-2" />
//               <Button label="Add" className="p-button-success mt-2 w-full" onClick={addNotification} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InquiryAndNotification;


// import React, { useState, useEffect, useRef } from "react";
// import { InputText } from "primereact/inputtext";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Dropdown } from "primereact/dropdown";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { OverlayPanel } from "primereact/overlaypanel";
// import ActionButton from "../components/ActionButton"; // Custom button component

// const API_URL = "http://localhost:5000/api/notifications";

// const InquiryAndNotification = () => {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [notifications, setNotifications] = useState([]);
//   const [newNotification, setNewNotification] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");
//   const menu = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     fetchNotifications();
//   }, [language]);

//   const fetchNotifications = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setNotifications(data.filter((n) => n.language === language));
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const addNotification = async () => {
//     if (newNotification.trim() !== "") {
//       try {
//         const response = await fetch(API_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ message: newNotification, language }),
//         });
//         const newNotif = await response.json();
//         setNotifications([...notifications, newNotif]);
//         setNewNotification("");
//       } catch (error) {
//         console.error("Error adding notification:", error);
//       }
//     }
//   };

//   const saveEditNotification = async (id) => {
//     if (editIndex !== null && editText.trim() !== "") {
//       try {
//         await fetch(`${API_URL}/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ message: editText }),
//         });
//         setNotifications(notifications.map((n) => (n.id === id ? { ...n, message: editText } : n)));
//         setEditIndex(null);
//         setEditText("");
//       } catch (error) {
//         console.error("Error updating notification:", error);
//       }
//     }
//   };

//   const deleteNotification = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       setNotifications(notifications.filter((n) => n.id !== id));
//     } catch (error) {
//       console.error("Error deleting notification:", error);
//     }
//   };

//   const courses = [
//     { label: "ANM", value: "ANM" },
//     { label: "GNM", value: "GNM" },
//   ];

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", form);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
      
//       {/* General Inquiry Form */}
//       <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">📩 General Enquiry</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Your Name *</label>
//               <InputText name="name" value={form.name} onChange={handleChange} className="w-full" required />
//             </div>
//             <div>
//               <label className="text-gray-700 font-medium">Email Address *</label>
//               <InputText name="email" value={form.email} onChange={handleChange} className="w-full" required />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-gray-700 font-medium">Phone Number *</label>
//               <InputText name="phone" value={form.phone} onChange={handleChange} className="w-full" required />
//             </div>
//             <div>
//               <label className="text-gray-700 font-medium">Course *</label>
//               <Dropdown name="course" value={form.course} options={courses} onChange={(e) => setForm({ ...form, course: e.value })} placeholder="Choose Course" className="w-full" required />
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
//         <Button label={language === "en" ? "🌍 English" : "🇮🇳 हिंदी"} className="p-button-secondary p-button-sm mt-2" onClick={(e) => menu.current.toggle(e)} />
//         <OverlayPanel ref={menu}>
//           <Button label="🇬🇧 English" className="p-button-text w-full" onClick={() => setLanguage("en")} />
//           <Button label="🇮🇳 हिंदी" className="p-button-text w-full" onClick={() => setLanguage("hi")} />
//         </OverlayPanel>

//         <div className="mt-4 space-y-2">
//           {notifications.map((note, index) => (
//             <div key={note.id} className="flex justify-between items-center bg-white/20 text-white p-3 rounded-md shadow-md">
//               {editIndex === index ? (
//                 <InputText value={editText} onChange={(e) => setEditText(e.target.value)} className="text-black" />
//               ) : (
//                 <p>{note.message}</p>
//               )}
//               {isLoggedIn && (
//                 <div className="flex space-x-2">
//                   <ActionButton icon="pi pi-pencil" type="edit" onClick={() => setEditIndex(index)} />
//                   <ActionButton icon="pi pi-trash" type="delete" onClick={() => deleteNotification(note.id)} />
//                 </div>
//               )}
//             </div>
//           ))}
//           {isLoggedIn && (
//             <div className="mt-4">
//               <InputText value={newNotification} onChange={(e) => setNewNotification(e.target.value)} className="w-full mt-2" />
//               <Button label="Add" className="p-button-success mt-2 w-full" onClick={addNotification} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InquiryAndNotification;




import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { OverlayPanel } from "primereact/overlaypanel";
import { toast } from "react-toastify"; // For notifications
import ActionButton from "../components/ActionButton"; // Custom button component

const API_NOTIFICATIONS = "http://localhost:5000/api/notifications";
const API_INQUIRIES = "http://localhost:5000/api/inquiries/add";

const InquiryAndNotification = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
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

  // Fetch notifications from API
  const fetchNotifications = async () => {
    try {
      const response = await fetch(API_NOTIFICATIONS);
      const data = await response.json();
      setNotifications(data.filter((n) => n.language === language));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Add new notification
  const addNotification = async () => {
    if (newNotification.trim() !== "") {
      try {
        const response = await fetch(API_NOTIFICATIONS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newNotification, language }),
        });
        const newNotif = await response.json();
        setNotifications([...notifications, newNotif]);
        setNewNotification("");
        toast.success("📢 Notification added!");
      } catch (error) {
        toast.error("Error adding notification.");
        console.error("Error adding notification:", error);
      }
    }
  };

  // Edit notification
  const saveEditNotification = async (id) => {
    if (editIndex !== null && editText.trim() !== "") {
      try {
        await fetch(`${API_NOTIFICATIONS}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: editText }),
        });
        setNotifications(notifications.map((n) => (n.id === id ? { ...n, message: editText } : n)));
        setEditIndex(null);
        setEditText("");
        toast.success("✅ Notification updated!");
      } catch (error) {
        toast.error("Error updating notification.");
        console.error("Error updating notification:", error);
      }
    }
  };

  // Delete notification
  const deleteNotification = async (id) => {
    try {
      await fetch(`${API_NOTIFICATIONS}/${id}`, { method: "DELETE" });
      setNotifications(notifications.filter((n) => n.id !== id));
      toast.success("🗑️ Notification deleted!");
    } catch (error) {
      toast.error("Error deleting notification.");
      console.error("Error deleting notification:", error);
    }
  };

  // Inquiry form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_INQUIRIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry.");
      }

      toast.success("✅ Inquiry Submitted Successfully!");
      setForm({ name: "", email: "", phone: "", course: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      toast.error("Error submitting inquiry.");
      console.error("Error submitting inquiry:", error);
    }
  };

  // Dropdown options
  const courses = [
    { label: "ANM", value: "ANM" },
    { label: "GNM", value: "GNM" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10 bg-gradient-to-r from-blue-500 to-purple-600">
      
      {/* Inquiry Form */}
      <Card className="shadow-xl p-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">📩 General Inquiry</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">Your Name *</label>
              <InputText name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full" required />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email Address *</label>
              <InputText name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">Phone Number *</label>
              <InputText name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full" required />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Course *</label>
              <Dropdown name="course" value={form.course} options={courses} onChange={(e) => setForm({ ...form, course: e.value })} placeholder="Choose Course" className="w-full" required />
            </div>
          </div>
          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <InputTextarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full" />
          </div>
          <Button label="Send Message" type="submit" className="p-button-lg p-button-primary w-full shadow-md" />
        </form>
      </Card>

      {/* Notifications Section */}
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
                 <div className="flex space-x-2">
                   <ActionButton icon="pi pi-pencil" type="edit" onClick={() => setEditIndex(index)} />
                   <ActionButton icon="pi pi-trash" type="delete" onClick={() => deleteNotification(note.id)} />
                 </div>
               )}
             </div>
           ))}
           {isLoggedIn && (
             <div className="mt-4">
               <InputText value={newNotification} onChange={(e) => setNewNotification(e.target.value)} className="w-full mt-2" />
               <Button label="Add" className="p-button-success mt-2 w-full" onClick={addNotification} />
             </div>
           )}
         </div>
       </div>
      

    </div>
  );
};

export default InquiryAndNotification;
