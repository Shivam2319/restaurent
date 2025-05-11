import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUtensils } from "react-icons/fa";

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

    // Format date for WhatsApp message
    const formattedDate = form.date ? form.date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';

    // Create WhatsApp message
    const whatsappNumber = "919905880458";
    let message = `*New Reservation Request*%0A%0A`;
    message += `*Name:* ${form.name}%0A`;
    message += `*Phone:* ${form.phone}%0A`;
    if (form.email) message += `*Email:* ${form.email}%0A`;
    message += `*Date:* ${formattedDate}%0A`;
    message += `*Time:* ${form.time}%0A`;
    message += `*Guests:* ${form.guests}%0A`;
    if (form.specialRequests) message += `*Special Requests:* ${form.specialRequests}%0A`;
    message += `%0A_Please confirm this reservation_`;

    // Open WhatsApp with the reservation details
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    // Show success message
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Your reservation details have been sent via WhatsApp!',
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
  maxDate.setMonth(today.getMonth() + 2);

  return (
    <div className="bg-gradient-to-b from-[#fff8f0] to-[#fff0e0] min-h-screen">
      <TopHeader />
      <Navbar />
      <Toast ref={toast} />

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-10">
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
            {/* Form fields remain the same as your original code */}
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
                  disabledDays={[0]}
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