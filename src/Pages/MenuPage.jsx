import React, { useState } from "react";
import { motion } from "framer-motion";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Dialog } from "@headlessui/react";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";


const fullMenu = {
        "Soups / Drinks": [
          { name: "Hot and Sour", price: "₹149", img: "/assets/menu/soup.jpg" },
          { name: "Veg Manchow", price: "₹149", img: "/assets/menu/manchowSoup.jpeg" },
          { name: "Lemon Coriander", price: "₹149", img: "/assets/menu/Lemon-Coriander-Soup-1.webp" },
          { name: "Butter Milk ", price: "₹49", img: "/assets/menu/butterMilk.webp" },
          { name: "Lassi", price: "₹75", img: "/assets/menu/lassi.webp" },
          { name: "Mint Mojito", price: "₹49", img: "/assets/menu/MintMojito.jpeg" },
          { name: "Blue Berry Mojito", price: "₹49", img: "/assets/menu/blueBerryMojito.jpg" },
          // { name: "Lemon Water", price: "₹30", img: "/assets/menu/LemonWater.webp" },
          { name: "Lemon Soda", price: "₹50", img: "/assets/menu/LemonWater.webp" }
        ],
        Appetizers: [
          { name: "Paneer Tikka", price: "₹199", img: "/assets/menu/panirtikkaa.jpg" },
          { name: "Achari Paneer Tikka", price: "₹219", img: "/assets/menu/achariPanir.webp" },
          { name: "Lehsuni Paneer Tikka", price: "₹239", img: "/assets/menu/Lehsuni Paneer Tikka.jpg" },
          { name: "Mushroom Tikka", price: "₹199", img: "/assets/menu/mishroomtikka.png" },
          { name: "Malai Soya Chaap", price: "₹169", img: "/assets/menu/malaiSoyaChap.jpeg" },
          { name: "Achari Soya Chaap", price: "₹169", img: "/assets/menu/Achari Soya Chaap.jpg" },
          { name: "Honey Chilli Potato", price: "₹149", img: "/assets/menu/honeyChilliPotato.png" },
          { name: "Chilli Potato", price: "₹149", img: "/assets/menu/honeyChilliPotato.png" },
          { name: "French Fries", price: "₹149", img: "/assets/menu/French Fries.jpg" },
          { name: "Chilli Paneer (Dry)", price: "₹229", img: "/assets/menu/Chilli Paneer (Dry).jpg" },
          { name: "Veg Manchurian (Dry)", price: "₹199", img: "/assets/menu/Veg Manchurian (Dry).jpg" },
        ],
        // Add remaining categories similarly...
        "Noodles & Pastas": [
          { name: "Hakka Noodles", price: "₹249", img: "/assets/menu/Hakka Noodles.jpg" },
          { name: "Chilli Garlic Noodles", price: "₹249", img: "/assets/menu/Chilli Garlic Noodles.jpg" },
          { name: "Mirchify Spl Pasta", price: "₹249", img: "/assets/menu/mirchifySplpasta.jpeg" },
          { name: "White Sauce Pasta", price: "₹249", img: "/assets/menu/White Sauce Pasta.jpg" },
          { name: "Tangy Tomato Pasta", price: "₹249", img: "/assets/menu/Tangy Tomato Pasta.webp" },
          { name: "Mirchify Spl Noodles", price: "₹249", img: "/assets/menu/special Noodles.jpg" },
        ],
        "Salad Bowls": [
          { name: "Onion Salad", price: "₹49", img: "/assets/menu/Onion Salad.jpg" },
          { name: "Green Salad", price: "₹99", img: "/assets/menu/greenSalad.jpeg" },
          { name: "Grilled Veggies Paneer Salad", price: "₹299", img: "/assets/menu/Grilled Veggies Paneer Salad.jpg" },
          { name: "Healthified Mexican Bean Salad", price: "₹299", img: "/assets/menu/Healthified Mexican Bean Salad.jpg" },
          { name: "Veg Caesar Salad", price: "₹299", img: "/assets/menu/VegCaesarSalad.jpeg" },
          { name: "Italian Veg Salad", price: "₹299", img: "/assets/menu/italianvegSalad.jpeg" },
          { name: "Spiced Herb Paneer Ranch Salad", price: "₹299", img: "/assets/menu/Spiced Herb Paneer Ranch Salad.jpg" },
          { name: "Masala Sprout Salad", price: "₹199", img: "/assets/menu/Masala Sprout Salad.jpg" },
        ],
        "Special Combo Meal": [
          { name: "Dal Rice", price: "₹149", img: "/assets/menu/dalMakhniChawal.jpeg" },
          { name: "Chole Rice", price: "₹149", img: "/assets/menu/choleChawal.jpeg" },
          { name: "Rajma Rice", price: "₹149", img: "/assets/menu/rajmaChawal.jpeg" },
          { name: "Seasonal Veg + 2 Rotis", price: "₹149", img: "/assets/menu/Seasonal Veg + 2 Rotis.jpg" },
          { name: "Seasonal Veg + 2 Parathas", price: "₹159", img: "/assets/menu/Seasonal Veg + 2 Rotis.jpg" },
          { name: "Noodles Manchurian", price: "₹199", img: "/assets/menu/manchowSoup.jpeg" },
          
        ],
        "Main Course": [
          { name: "Dal Tadka", price: "₹189", img: "/assets/menu/Dal Tadka.jpg" },
          { name: "Dal Makhni", price: "₹229", img: "/assets/menu/Dal Makhni.webp" },
          { name: "Rajma Masala", price: "₹229", img: "/assets/menu/Rajma Masala.jpg" },
          { name: "Pindi Chana Masala", price: "₹229", img: "/assets/menu/Pindi Chana Masala.jpg" },
          { name: "Jeera Aloo", price: "₹179", img: "/assets/menu/Jeera Aloo.jpg" },
          { name: "Mix Veg", price: "₹189", img: "/assets/menu/Mix Veg.jpg" },
          { name: "Matar Mushroom", price: "₹269", img: "/assets/menu/Matar Mushroom.jpg" },
          { name: "Paneer Butter Masala", price: "₹279", img: "/assets/menu/Paneer Butter Masala.jpg" },
          { name: "Paneer Lababdar", price: "₹279", img: "/assets/menu/Paneer Lababdar.jpg" },
          { name: "Chilli Paneer (Gravy)", price: "₹249", img: "/assets/menu/Chilli Paneer (Gravy).jpg" },
          { name: "Kadhai Paneer", price: "₹279", img: "/assets/menu/Kadhai Paneer.jpg" },
          { name: "Shahi Paneer", price: "₹279", img: "/assets/menu/Shahi Paneer.jpg" },
          { name: "Veg Manchurian (Gravy)", price: "₹229", img: "/assets/menu/Veg Manchurian (Gravy).webp" },
        ],
        Breads: [
          { name: "Tandoori Roti", price: "₹29", img: "/assets/menu/Tandoori Roti.webp" },
          { name: "Naan Butter", price: "₹45", img: "/assets/menu/Naan Butter.jpg" },
          { name: "Butter Garlic Naan", price: "₹59", img: "/assets/menu/Butter Garlic Naan.jpg" },
          { name: "Garlic Lachha Paratha", price: "₹75", img: "/assets/menu/Garlic Lachha Paratha.jpg" },
          { name: "Lachha Paratha", price: "₹65", img: "/assets/menu/Lachha Paratha.jpg" },
        ],
        Parathas: [
          { name: "Aloo Paratha", price: "₹120", img: "/assets/menu/Aloo Paratha.jpg" },
          { name: "Aloo Pyaz Paratha", price: "₹140", img: "/assets/menu/Aloo Pyaz Paratha.jpg" },
          { name: "Paneer Paratha", price: "₹175", img: "/assets/menu/Paneer Paratha.jpg" },
          { name: "Gobhi Paratha", price: "₹159", img: "/assets/menu/Gobhi Paratha.webp" },
          { name: "Sattu Paratha", price: "₹149", img: "/assets/menu/Sattu Paratha.jpg" },
        ],
        "Rice & Biryani": [
          { name: "Plain Rice", price: "₹99", img: "/assets/menu/Plain Rice.jpg" },
          { name: "Jeera Rice", price: "₹99", img: "/assets/menu/Jeera Rice.webp" },
          { name: "Vegetable Fried Rice", price: "₹99", img: "/assets/menu/Vegetable Fried Rice.webp" },
          { name: "Lemon Rice", price: "₹119", img: "/assets/menu/Lemon Rice.jpg" },
          { name: "Matar Pulao", price: "₹119", img: "/assets/menu/Matar Pulao.jpg" },
          { name: "Curd Rice", price: "₹99", img: "/assets/menu/Curd Rice.jpg" },
          { name: "Veg Biryani", price: "₹199", img: "/assets/menu/Veg Biryani.jpg" },
          { name: "Paneer Biryani", price: "₹249", img: "/assets/menu/Paneer Biryani.jpg" },
          { name: "Veg Paneer Fried Rice", price: "₹279", img: "/assets/menu/Veg Paneer Fried Rice.jpg" },
        ],
        Raita: [
          { name: "Boondi Raita", price: "₹75", img: "/assets/menu/Boondi Raita.jpg" },
          { name: "Mix Raita", price: "₹65", img: "/assets/menu/Mix Raita.jpg" },
          { name: "Cucumber Raita", price: "₹65", img: "/assets/menu/Cucumber Raita.jpg" },
          { name: "Pineapple Raita", price: "₹85", img: "/assets/menu/Pineapple Raita.jpg" },
        ],
        "On-the-Go Menu": [
          // { name: "Spl. Combo Meal", price: "₹199", img: "/assets/menu/combo.jpg" },
          { name: "Dal Rice", price: "₹149", img: "/assets/menu/dalMakhniChawal.jpeg" },
          { name: "Chole Rice", price: "₹149", img: "/assets/menu/choleChawal.jpeg" },
          { name: "Rajma Rice", price: "₹149", img: "/assets/menu/rajmaChawal.jpeg" },
          { name: "Dal Rice", price: "₹149", img: "/assets/menu/dalMakhniChawal.jpeg" },
          { name: "Seasonal Veg + 2 Rotis", price: "₹149", img: "/assets/menu/Seasonal Veg + 2 Rotis.jpg" },
          { name: "Seasonal Veg + 2 Parathas", price: "₹159", img: "/assets/menu/Seasonal Veg + 2 Rotis.jpg" },
          { name: "Noodles Manchurian", price: "₹199", img: "/assets/menu/vegManchurianDry.jpeg" },
        ]
      };


const categories = ["All", ...Object.keys(fullMenu)];

export default function MenuPage() {
  const [visibleCount, setVisibleCount] = useState({});
  const [activeFilter, setActiveFilter] = useState("All");
  const [myOrders, setMyOrders] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAddToOrder = (item) => {
    setMyOrders(prevOrders => {
      const existingItemIndex = prevOrders.findIndex(order => order.name === item.name);
      
      if (existingItemIndex >= 0) {
        const updatedOrders = [...prevOrders];
        updatedOrders[existingItemIndex] = {
          ...updatedOrders[existingItemIndex],
          quantity: updatedOrders[existingItemIndex].quantity + 1
        };
        return updatedOrders;
      } else {
        return [...prevOrders, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveItem = (itemName) => {
    setMyOrders(prevOrders => {
      const existingItemIndex = prevOrders.findIndex(order => order.name === itemName);
      
      if (existingItemIndex >= 0) {
        if (prevOrders[existingItemIndex].quantity > 1) {
          const updatedOrders = [...prevOrders];
          updatedOrders[existingItemIndex] = {
            ...updatedOrders[existingItemIndex],
            quantity: updatedOrders[existingItemIndex].quantity - 1
          };
          return updatedOrders;
        } else {
          return prevOrders.filter(order => order.name !== itemName);
        }
      }
      return prevOrders;
    });
  };

  const handleAddMore = (category) => {
    setVisibleCount((prev) => {
      const currentVisible = prev[category] || 8;
      const totalItems = fullMenu[category].length;
      
      // Calculate how many more we can show (either 3 more or whatever remains)
      const itemsToAdd = Math.min(3, totalItems - currentVisible);
      
      return {
        ...prev,
        [category]: currentVisible + itemsToAdd
      };
    });
  };

  const sendWhatsAppOrder = () => {
    const phoneNumber = "919935754754"; // WhatsApp number with country code (no + or 0)
    
    // Format order message
    let message = "🍽️ *NEW ORDER* 🍽️%0A%0A";
    message += "*Order Details:*%0A%0A";
    
    // Add each item with quantity and price
    myOrders.forEach(item => {
      message += `➡️ ${item.name}%0A`;
      message += `   Quantity: ${item.quantity}%0A`;
      message += `   Price: ${item.price}%0A%0A`;
    });
    
    // Calculate total
    const total = myOrders.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
      return sum + (price * item.quantity);
    }, 0);
    
    message += `*TOTAL: ₹${total}*%0A%0A`;
    message += "Please confirm this order. Thank you!";
    
    // Open WhatsApp with the order details
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const renderItems = (category, items) => {
    const visible = visibleCount[category] || 4;
    return (
      <div className="mb-12" key={category}>
        <h2 className="text-2xl font-bold text-[#192f59] mb-4">{category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.slice(0, visible).map((item, idx) => {
            const existingItem = myOrders.find(order => order.name === item.name);
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-[#d63447] font-medium">{item.price}</p>
                  <button
                    onClick={() => handleAddToOrder(item)}
                    className="mt-2 w-full bg-[#d63447] text-white px-4 py-2 rounded-md hover:bg-[#b52c3c] transition"
                  >
                    {existingItem ? `Add More (${existingItem.quantity})` : "Add to Order"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        {items.length > visible && (
          <div className="text-center mt-6">
            <button
              onClick={() => handleAddMore(category)}
              className="px-5 py-2 bg-[#d63447] text-white rounded-lg hover:bg-[#b52c3c] transition"
            >
              Load More
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
      <marquee behavior="" direction="">Free Delivery for all orders above ₹499</marquee>

      <main className="container mx-auto px-4 py-10">
        <motion.h1
          className="text-4xl font-bold text-center text-[#d63447] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Discover Our Menu
        </motion.h1>

        <div className="flex justify-center mb-8">
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-[#d63447] focus:border-[#d63447]"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {activeFilter === "All"
          ? Object.entries(fullMenu).map(([category, items]) =>
              renderItems(category, items)
            )
          : renderItems(activeFilter, fullMenu[activeFilter])}
      </main>

      <Dialog open={drawerOpen} onClose={() => setDrawerOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white p-6 overflow-y-auto shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#192f59]">
              🛒 My Order ({myOrders.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>
            <button 
              onClick={() => setDrawerOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {myOrders.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {myOrders.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 border-b pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-[#d63447]">{item.price} × {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleRemoveItem(item.name)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => handleAddToOrder(item)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <div className="flex justify-between font-bold text-lg border-t pt-3">
                  <span>Total:</span>
                  <span>₹{myOrders.reduce((total, item) => {
                    const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
                    return total + (price * item.quantity);
                  }, 0)}</span>
                </div>
                
                <button
                  onClick={sendWhatsAppOrder}
                  className="block mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send Order via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </Dialog>

      {myOrders.length > 0 && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed bottom-6 right-6 bg-[#d63447] text-white p-4 rounded-full shadow-lg hover:bg-[#b52c3c] transition flex items-center"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="ml-2 bg-white text-[#d63447] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {myOrders.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        </button>
      )}

      <Footer />
    </div>
  );
}