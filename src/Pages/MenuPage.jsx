
import React, { useState } from "react";
import { motion } from "framer-motion";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ... (keep your existing fullMenu and categories data)
const fullMenu = {
      "Soups / Drinks": [
        { name: "Hot and Sour", price: "₹149", img: "/assets/menu/soup.jpg" },
        { name: "Veg Manchow", price: "₹149", img: "/assets/menu/VegManchow.jpg" },
        { name: "Lemon Coriander", price: "₹149", img: "/assets/menu/Lemon-Coriander-Soup-1.webp" },
        { name: "Butter Milk / Lassi", price: "₹49 / ₹75", img: "/assets/menu/lassi.jpg" },
        { name: "Mint Mojito", price: "₹49", img: "/assets/menu/mojito.jpg" },
        { name: "Lemon Water / Soda", price: "₹30 / ₹50", img: "/assets/menu/lemon-soda.jpg" },
      ],
      Appetizers: [
        { name: "Paneer Tikka", price: "₹199", img: "/assets/menu/panirtikkaa.jpg" },
        { name: "Achari Paneer Tikka", price: "₹219", img: "/assets/menu/achari-paneer.jpg" },
        { name: "Lehsuni Paneer Tikka", price: "₹239", img: "/assets/menu/lehsuni-paneer.jpg" },
        { name: "Mushroom Tikka", price: "₹199", img: "/assets/menu/mushroom.jpg" },
        { name: "Malai Soya Chaap", price: "₹169", img: "/assets/menu/soya-chaap.jpg" },
        { name: "Achari Soya Chaap", price: "₹169", img: "/assets/menu/achari-chaap.jpg" },
        { name: "Honey Chilli Potato", price: "₹149", img: "/assets/menu/honey-chilli.jpg" },
        { name: "Chilli Potato", price: "₹149", img: "/assets/menu/chilli-potato.jpg" },
        { name: "French Fries", price: "₹149", img: "/assets/menu/fries.jpg" },
        { name: "Chilli Paneer (Dry)", price: "₹229", img: "/assets/menu/chilli-paneer-dry.jpg" },
        { name: "Veg Manchurian (Dry)", price: "₹199", img: "/assets/menu/manchurian-dry.jpg" },
      ],
      // Add remaining categories similarly...
      "Noodles & Pastas": [
        { name: "Hakka Noodles", price: "₹249", img: "/assets/menu/hakka.jpg" },
        { name: "Chilli Garlic Noodles", price: "₹249", img: "/assets/menu/chilli-garlic.jpg" },
        { name: "Mirchify Spl Noodles", price: "₹249", img: "/assets/menu/spl-noodles.jpg" },
        { name: "White Sauce Pasta", price: "₹249", img: "/assets/menu/white-pasta.jpg" },
        { name: "Tangy Tomato Pasta", price: "₹249", img: "/assets/menu/red-pasta.jpg" },
        { name: "Mirchify Spl Pasta", price: "₹249", img: "/assets/menu/spl-pasta.jpg" },
      ],
      "Salad Bowls": [
        { name: "Onion Salad", price: "₹49", img: "/assets/menu/onion-salad.jpg" },
        { name: "Green Salad", price: "₹99", img: "/assets/menu/green-salad.jpg" },
        { name: "Grilled Veggies Paneer Salad", price: "₹299", img: "/assets/menu/grilled-paneer.jpg" },
        { name: "Healthified Mexican Bean Salad", price: "₹299", img: "/assets/menu/mexican-bean.jpg" },
        { name: "Veg Caesar Salad", price: "₹299", img: "/assets/menu/caesar.jpg" },
        { name: "Italian Veg Salad", price: "₹299", img: "/assets/menu/italian.jpg" },
        { name: "Spiced Herb Paneer Ranch Salad", price: "₹299", img: "/assets/menu/herb-paneer.jpg" },
        { name: "Masala Sprout Salad", price: "₹199", img: "/assets/menu/sprout.jpg" },
      ],
      "Main Course": [
        { name: "Dal Tadka", price: "₹189", img: "/assets/menu/dal-tadka.jpg" },
        { name: "Dal Makhni", price: "₹229", img: "/assets/menu/dal-makhni.jpg" },
        { name: "Rajma Masala", price: "₹229", img: "/assets/menu/rajma.jpg" },
        { name: "Pindi Chana Masala", price: "₹229", img: "/assets/menu/chana.jpg" },
        { name: "Jeera Aloo", price: "₹179", img: "/assets/menu/jeera-aloo.jpg" },
        { name: "Mix Veg", price: "₹189", img: "/assets/menu/mix-veg.jpg" },
        { name: "Matar Mushroom", price: "₹269", img: "/assets/menu/mushroom-matar.jpg" },
        { name: "Paneer Butter Masala", price: "₹279", img: "/assets/menu/pbm.jpg" },
        { name: "Paneer Lababdar", price: "₹279", img: "/assets/menu/lababdar.jpg" },
        { name: "Chilli Paneer (Gravy)", price: "₹249", img: "/assets/menu/chilli-paneer.jpg" },
        { name: "Kadhai Paneer", price: "₹279", img: "/assets/menu/kadhai-paneer.jpg" },
        { name: "Shahi Paneer", price: "₹279", img: "/assets/menu/shahi-paneer.jpg" },
        { name: "Veg Manchurian (Gravy)", price: "₹229", img: "/assets/menu/manchurian.jpg" },
      ],
      Breads: [
        { name: "Tandoori Roti", price: "₹29", img: "/assets/menu/roti.jpg" },
        { name: "Naan - Butter / Plain", price: "₹45 / ₹39", img: "/assets/menu/naan.jpg" },
        { name: "Butter Garlic Naan", price: "₹59", img: "/assets/menu/garlic-naan.jpg" },
        { name: "Garlic Lachha Paratha", price: "₹75", img: "/assets/menu/garlic-lachha.jpg" },
        { name: "Lachha Paratha", price: "₹65", img: "/assets/menu/lachha.jpg" },
      ],
      Parathas: [
        { name: "Aloo Paratha", price: "₹120", img: "/assets/menu/aloo.jpg" },
        { name: "Aloo Pyaz Paratha", price: "₹140", img: "/assets/menu/aloo-pyaz.jpg" },
        { name: "Paneer Paratha", price: "₹175", img: "/assets/menu/paneer-paratha.jpg" },
        { name: "Gobhi Paratha", price: "₹159", img: "/assets/menu/gobhi.jpg" },
        { name: "Sattu Paratha", price: "₹149", img: "/assets/menu/sattu.jpg" },
      ],
      "Rice & Biryani": [
        { name: "Plain Rice", price: "₹99", img: "/assets/menu/plain-rice.jpg" },
        { name: "Jeera Rice", price: "₹99", img: "/assets/menu/jeera-rice.jpg" },
        { name: "Vegetable Fried Rice", price: "₹99", img: "/assets/menu/veg-fried.jpg" },
        { name: "Lemon Rice", price: "₹119", img: "/assets/menu/lemon.jpg" },
        { name: "Matar Pulao", price: "₹119", img: "/assets/menu/pulao.jpg" },
        { name: "Curd Rice", price: "₹99", img: "/assets/menu/curd.jpg" },
        { name: "Veg Biryani", price: "₹199", img: "/assets/menu/biryani.jpg" },
        { name: "Paneer Biryani", price: "₹249", img: "/assets/menu/paneer-biryani.jpg" },
        { name: "Veg Paneer Fried Rice", price: "₹279", img: "/assets/menu/paneer-fried.jpg" },
      ],
      Raita: [
        { name: "Boondi Raita", price: "₹75", img: "/assets/menu/boondi.jpg" },
        { name: "Mix Raita", price: "₹65", img: "/assets/menu/mix.jpg" },
        { name: "Cucumber Raita", price: "₹65", img: "/assets/menu/cucumber.jpg" },
        { name: "Pineapple Raita", price: "₹85", img: "/assets/menu/pineapple.jpg" },
      ],
      "On-the-Go Menu": [
        { name: "Spl. Combo Meal", price: "₹199", img: "/assets/menu/combo.jpg" },
        { name: "Dal Rice", price: "₹149", img: "/assets/menu/dal-rice.jpg" },
        { name: "Chole Rice", price: "₹149", img: "/assets/menu/chole-rice.jpg" },
        { name: "Rajma Rice", price: "₹149", img: "/assets/menu/rajma-rice.jpg" },
        { name: "Makhni Rice", price: "₹149", img: "/assets/menu/makhni-rice.jpg" },
        { name: "Seasonal Veg + 2 Rotis", price: "₹149", img: "/assets/menu/veg-roti.jpg" },
        { name: "Seasonal Veg + 2 Parathas", price: "₹159", img: "/assets/menu/veg-paratha.jpg" },
        { name: "Noodles Manchurian", price: "₹199", img: "/assets/menu/noodle-manchurian.jpg" },
      ]
    };
    const categories = ["All", ...Object.keys(fullMenu)];
    export default function MenuPage() {
        const [visibleCount, setVisibleCount] = useState({});
        const [activeFilter, setActiveFilter] = useState("All");
        const [myOrders, setMyOrders] = useState([]);
      
        const handleAddMore = (category) => {
          setVisibleCount((prev) => ({
            ...prev,
            [category]: (prev[category] || 6) + 3,
          }));
        };
      
        const handleAddToOrder = (item) => {
          if (!myOrders.find((order) => order.name === item.name)) {
            setMyOrders([...myOrders, item]);
          }
        };
      
        const renderItems = (category, items) => {
          const visible = visibleCount[category] || (window.innerWidth < 640 ? 3 : 6);
          return (
            <div className="mb-10 sm:mb-14" key={category}>
              <h2 className="text-xl sm:text-2xl font-bold text-[#192f59] mb-4 sm:mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {items.slice(0, visible).map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-40 sm:h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-[#d63447] font-medium sm:font-semibold mt-1">
                        {item.price}
                      </p>
                      <button
                        onClick={() => handleAddToOrder(item)}
                        className={`mt-2 w-full text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 rounded-md transition ${
                          myOrders.some((order) => order.name === item.name)
                            ? "bg-gray-400 text-white"
                            : "bg-[#d63447] text-white hover:bg-[#b52c3c]"
                        }`}
                      >
                        {myOrders.some((order) => order.name === item.name) ? "Added ✓" : "Add to Order"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              {visible < items.length && (
                <div className="text-center mt-4 sm:mt-6">
                  <button
                    onClick={() => handleAddMore(category)}
                    className="px-4 py-2 bg-[#d63447] text-white rounded-md sm:rounded-lg hover:bg-[#b52c3c] transition text-sm sm:text-base"
                  >
                    Load More (+3)
                  </button>
                </div>
              )}
            </div>
          );
        };
      
        return (
          <div className="bg-gradient-to-br from-[#fff9f5] via-[#fff0e8] to-[#ffe8e0] min-h-screen">
            <TopHeader />
            <Navbar />
      
            <main className="container mx-auto px-3 xs:px-4 sm:px-6 py-6 sm:py-10">
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#d63447] mb-4 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Discover Our Menu
              </motion.h1>
      
              <motion.div 
                className="flex justify-center mb-8 sm:mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d63447] focus:border-[#d63447] text-sm sm:text-base w-full max-w-xs"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </motion.div>
      
              <div className="mb-10 sm:mb-14">
                {activeFilter === "All"
                  ? Object.entries(fullMenu).map(([category, items]) =>
                      renderItems(category, items)
                    )
                  : renderItems(activeFilter, fullMenu[activeFilter])}
              </div>
      
              <motion.div 
                className="text-center mb-6 sm:mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/my-orders"
                  className="inline-block bg-[#192f59] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#101f40] transition text-sm sm:text-base"
                >
                  {myOrders.length > 0 
                    ? `View Order (${myOrders.length}) →` 
                    : "Order / View Combos →"}
                </a>
              </motion.div>
            </main>
      
            <Footer />
          </div>
        );
      }