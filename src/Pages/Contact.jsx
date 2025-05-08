import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    alert("Message submitted!");
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      <TopHeader />
      <Navbar />

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-[#d63447] mb-6">
          Contact Us
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
          <span className="p-float-label">
            <InputText id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full" />
            <label htmlFor="name">Name</label>
          </span>

          <span className="p-float-label">
            <InputText id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full" />
            <label htmlFor="email">Email</label>
          </span>

          <span className="p-float-label">
            <InputTextarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full" />
            <label htmlFor="message">Your Message</label>
          </span>

          <Button label="Send Message" className="w-full bg-[#d63447] border-none" onClick={handleSubmit} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
