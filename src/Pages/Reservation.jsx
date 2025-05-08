// import React, { useState } from "react";
// import { InputText } from "primereact/inputtext";
// import { Calendar } from "primereact/calendar";
// import { Dropdown } from "primereact/dropdown";
// import { Button } from "primereact/button";
// import TopHeader from "../components/TopHeader";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Reservation = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     date: null,
//     time: "",
//     guests: null,
//   });

//   const times = ["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
//   const guests = [1, 2, 3, 4, 5, 6, 7, 8];

//   const handleSubmit = () => {
//     alert("Reservation submitted!");
//   };

//   return (
//     <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
//       <TopHeader />
//       <Navbar />

//       <div className="container mx-auto px-4 py-12 max-w-2xl">
//         <h2 className="text-3xl font-bold text-center text-[#d63447] mb-6">
//           Reserve a Table
//         </h2>

//         <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
//           <span className="p-float-label">
//             <InputText id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full" />
//             <label htmlFor="name">Full Name</label>
//           </span>

//           <span className="p-float-label">
//             <InputText id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full" />
//             <label htmlFor="phone">Phone Number</label>
//           </span>

//           <span className="p-float-label">
//             <Calendar id="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.value })} showIcon className="w-full" />
//             <label htmlFor="date">Reservation Date</label>
//           </span>

//           <Dropdown value={form.time} options={times} onChange={(e) => setForm({ ...form, time: e.value })} placeholder="Select Time" className="w-full" />

//           <Dropdown value={form.guests} options={guests} onChange={(e) => setForm({ ...form, guests: e.value })} placeholder="Number of Guests" className="w-full" />

//           <Button label="Book Reservation" className="w-full bg-[#d63447] border-none" onClick={handleSubmit} />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Reservation;

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { GiDinner } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa"; // from FontAwesome


const Reservation = () => {
  const toast = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    guests: 2,
    specialRequests: ""
  });

  const times = [
    "11:00 AM", "11:30 AM", 
    "12:00 PM", "12:30 PM", 
    "1:00 PM", "1:30 PM", 
    "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", 
    "8:00 PM", "8:30 PM"
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all required fields',
        life: 3000
      });
      return;
    }

    // Here you would typically send data to your backend
    console.log("Reservation submitted:", form);
    
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Your table has been reserved! We will confirm shortly.',
      life: 5000
    });

    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      date: null,
      time: "",
      guests: 2,
      specialRequests: ""
    });
  };

  const today = new Date();
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 2); // Allow booking up to 2 months in advance

  return (
    <div className="bg-gradient-to-b from-[#fff8f0] to-[#fff0e0] min-h-screen">
      <TopHeader />
      <Navbar />
      <Toast ref={toast} />

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-10">
          {/* <GiDinner className="text-5xl text-[#d63447] mx-auto mb-4" /> */}
          <FaUtensils className="text-5xl text-[#d63447] mx-auto mb-4" />

          <h2 className="text-3xl font-bold text-[#192f59] mb-2">
            Reserve Your Table
          </h2>
          <p className="text-gray-600">
            Book your dining experience at MirchiFy
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <span className="p-float-label">
                <InputText 
                  id="name" 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  className="w-full" 
                  required 
                />
                <label htmlFor="name">Full Name *</label>
              </span>

              <span className="p-float-label">
                <InputText 
                  id="phone" 
                  value={form.phone} 
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                  className="w-full" 
                  required 
                />
                <label htmlFor="phone">Phone Number *</label>
              </span>

              <span className="p-float-label">
                <InputText 
                  id="email" 
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                  className="w-full" 
                  type="email"
                />
                <label htmlFor="email">Email Address</label>
              </span>

              <span className="p-float-label">
                <Calendar 
                  id="date" 
                  value={form.date} 
                  onChange={(e) => setForm({ ...form, date: e.value })} 
                  showIcon 
                  className="w-full" 
                  minDate={minDate}
                  maxDate={maxDate}
                  required
                  disabledDays={[0]} // Disable Sundays (example)
                />
                <label htmlFor="date">Reservation Date *</label>
              </span>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time *
                </label>
                <Dropdown 
                  value={form.time} 
                  options={times} 
                  onChange={(e) => setForm({ ...form, time: e.value })} 
                  placeholder="Select Time" 
                  className="w-full" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <Dropdown 
                  value={form.guests} 
                  options={guestOptions} 
                  onChange={(e) => setForm({ ...form, guests: e.value })} 
                  className="w-full" 
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests
              </label>
              <InputText 
                value={form.specialRequests} 
                onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} 
                className="w-full" 
                placeholder="Dietary restrictions, celebrations, etc."
              />
            </div>

            <Button 
              label="Book Table" 
              className="w-full mt-8 bg-[#d63447] hover:bg-[#b52c3c] border-none py-3 text-lg" 
              type="submit"
              icon="pi pi-check"
            />
          </form>
        </div>

        <div className="mt-10 bg-[#f8f4e8] p-6 rounded-xl border border-[#e8d8b5]">
          <h3 className="text-xl font-semibold text-[#192f59] mb-3">
            Reservation Policy
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Please arrive 10 minutes before your reservation</li>
            <li>Large groups (8+) must call 24 hours in advance</li>
            <li>Special requests subject to availability</li>
            <li>Cancellations require 2 hours notice</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservation;