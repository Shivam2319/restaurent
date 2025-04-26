import React from "react";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";

const MyOrders = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      <TopHeader />
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-[#d63447] mb-6">
          My Orders
        </h1>

        {/* Placeholder for Orders */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-gray-600">You have no orders yet. Start exploring our delicious menu!</p>

          <a
            href="/menu"
            className="inline-block mt-6 px-6 py-2 bg-[#d63447] text-white rounded-lg hover:bg-[#b52c3c] transition"
          >
            Browse Menu →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrders;
