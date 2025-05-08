// // import React from "react";
// // import Navbar from "../components/Navbar";
// // import TopHeader from "../components/TopHeader";
// // import Footer from "../components/Footer";

// // const MyOrders = () => {
// //   return (
// //     <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
// //       <TopHeader />
// //       <Navbar />

// //       <div className="container mx-auto px-4 py-12">
// //         <h1 className="text-3xl font-bold text-center text-[#d63447] mb-6">
// //           My Orders
// //         </h1>

// //         {/* Placeholder for Orders */}
// //         <div className="bg-white rounded-xl shadow-md p-6 text-center">
// //           <p className="text-gray-600">You have no orders yet. Start exploring our delicious menu!</p>

// //           <a
// //             href="/menu"
// //             className="inline-block mt-6 px-6 py-2 bg-[#d63447] text-white rounded-lg hover:bg-[#b52c3c] transition"
// //           >
// //             Browse Menu →
// //           </a>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default MyOrders;


// import React from "react";
// import Navbar from "../components/Navbar";
// import TopHeader from "../components/TopHeader";
// import Footer from "../components/Footer";
// import { useOrder } from "../context/OrderContext";

// const MyOrders = () => {
//   const { myOrders, removeFromOrder } = useOrder();

//   return (
//     <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
//       <TopHeader />
//       <Navbar />

//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-3xl font-bold text-center text-[#d63447] mb-6">
//           My Orders
//         </h1>

//         {myOrders.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-md p-6 text-center">
//             <p className="text-gray-600">You have no orders yet. Start exploring our delicious menu!</p>
//             <a
//               href="/menu"
//               className="inline-block mt-6 px-6 py-2 bg-[#d63447] text-white rounded-lg hover:bg-[#b52c3c] transition"
//             >
//               Browse Menu →
//             </a>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {myOrders.map((item, idx) => (
//               <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{item.name}</h3>
//                   <p className="text-[#d63447] font-medium">{item.price}</p>
//                   <button
//                     onClick={() => removeFromOrder(item.name)}
//                     className="mt-2 px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default MyOrders;
