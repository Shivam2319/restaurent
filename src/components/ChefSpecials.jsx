// import React from "react";
// import { GiChefToque } from "react-icons/gi"; // Chef icon

// const ChefSpecials = () => {
//   const specials = [
//     {
//       id: "01",
//       title: "Grilled Salmon with Lemon Butter",
//       image: "/assets/MUGALI.jpg",
//       link: "/menu/salmon",
//       description:
//         "Fresh Atlantic salmon grilled to perfection and served with a zesty lemon butter sauce. A delightful treat for seafood lovers.",
//       icon: <GiChefToque className="text-yellow-400 text-2xl" />,
//     },
//     {
//       id: "02",
//       title: "Herb-Crusted Lamb Chops",
//       image: "/assets/MUGALI.jpg",
//       link: "/menu/lamb",
//       description:
//         "Tender lamb chops encrusted with herbs and spices, grilled and paired with roasted garlic mashed potatoes.",
//       icon: <GiChefToque className="text-yellow-400 text-2xl" />,
//     },
//     {
//       id: "03",
//       title: "Vegan Buddha Bowl",
//       image: "/assets/MUGALI.jpg",
//       link: "/menu/buddha-bowl",
//       description:
//         "A nourishing bowl of quinoa, chickpeas, roasted veggies, avocado, and tahini dressing — healthy and delicious.",
//       icon: <GiChefToque className="text-yellow-400 text-2xl" />,
//     }
//   ];

//   return (
//     <div className="py-12 bg-gray-50">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-[#000]">Chef's Specials</h2>
//         <p className="text-gray-600 mt-2">Our diverse menu offers a variety of cuisines and dishes to ensure every food lover enjoys an unforgettable dining experience with us.</p>
//       </div>

//       {/* Specials Cards */}
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {specials.map((dish) => (
//             <div
//               key={dish.id}
//               className="relative bg-[#8B0000] text-white rounded-xl overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-105"
//             >
//               {/* Background Image */}
//               <div className="relative h-64 w-full">
//                 <img src={dish.image} alt={dish.title} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-black/40"></div>
//               </div>

//               {/* Dish Number */}
//               <div className="absolute top-4 left-4 bg-yellow-500 px-3 py-1 text-white text-lg font-bold rounded-lg shadow-md">
//                 {dish.id}
//               </div>

//               {/* Dish Info */}
//               <div className="p-6 flex flex-col">
//                 <h3 className="text-lg font-semibold flex items-center gap-2">
//                   {dish.icon} {dish.title}
//                 </h3>
//                 <p className="text-sm text-gray-300 mt-2 flex-grow">{dish.description}</p>
//               </div>

//               {/* Order Now Button */}
//               <div className="px-6 pb-6">
//                 <a
//                   href={dish.link}
//                   className="inline-block px-4 py-2 bg-yellow-400 text-black text-sm font-semibold rounded-lg transition-all hover:bg-yellow-500"
//                 >
//                   Order Now →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChefSpecials;


// responsive layout
import React from "react";
import { GiChefToque } from "react-icons/gi"; // Chef icon

const ChefSpecials = () => {
  const specials = [
    {
        id: "01",
        title: "Paneer Tikka",
        image: "/assets/panirtikkaa.jpg",
        link: "/menu/paneer-tikka",
        description:
          "Succulent cubes of paneer marinated in spiced yogurt and grilled to perfection in the tandoor. Served with mint chutney and onion rings.",
        icon: <GiChefToque className="text-yellow-400 text-xl md:text-2xl" />,
      },
      {
        id: "02",
        title: "Honey Chilli Potato",
        image: "/assets/honeyChilliPotato.png",
        link: "/menu/honey-chilli-potato",
        description:
          "Crispy fried potatoes tossed in a sweet, spicy and tangy sauce with honey glaze. A perfect balance of flavors with sesame seed garnish.",
        icon: <GiChefToque className="text-yellow-400 text-xl md:text-2xl" />,
      },
      {
        id: "03",
        title: "Mushroom Tikka",
        image: "/assets/mushroomTikka.jpg",
        link: "/menu/mushroom-tikka",
        description:
          "Juicy mushrooms marinated in aromatic spices and grilled in clay oven. Served with charred bell peppers and tangy dip.",
        icon: <GiChefToque className="text-yellow-400 text-xl md:text-2xl" />,
      },
      {
        id: "04",
        title: "Vegetable Dum Biryani",
        image: "/assets/MUGALI.jpg",
        link: "/menu/veg-biryani",
        description:
          "Fragrant basmati rice cooked with assorted vegetables, saffron and whole spices using the traditional dum pukht method.",
        icon: <GiChefToque className="text-yellow-400 text-xl md:text-2xl" />,
      },
      {
        id: "05",
        title: "Lahsun Paneer Tikka",
        image: "/assets/lahsunPanirTikka.jpg",
        link: "/menu/paneer-butter-masala",
        description:
          "Soft paneer cubes in rich, creamy tomato gravy with butter and cream. Best enjoyed with garlic naan or steamed rice.",
        icon: <GiChefToque className="text-yellow-400 text-xl md:text-2xl" />,
      },
      {
        id: "06",
        title: "Vegetable Kebab Platter",
        image: "/assets/MUGALI.jpg",
        link: "/menu/veg-kebab-platter",
        description:
          "Assortment of our signature vegetarian kebabs including paneer, mushroom and vegetable seekh. Served with three dipping sauces.",
        icon: <GiChefToque className="text-yellow-400 text-xl md:text-2xl" />,
      }
  ];

  return (
    <div className="py-8 md:py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000]">Chef's Specials</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Our diverse menu offers a variety of cuisines and dishes to ensure every food lover enjoys an unforgettable dining experience with us.
        </p>
      </div>

      {/* Specials Cards */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specials.map((dish) => (
            <div
              key={dish.id}
              className="relative bg-[#8B0000] text-white rounded-xl overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Dish Number */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-yellow-500 px-2 py-1 sm:px-3 text-white text-sm sm:text-lg font-bold rounded-lg shadow-md">
                {dish.id}
              </div>

              {/* Dish Info */}
              <div className="p-4 sm:p-6 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  {dish.icon} {dish.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 flex-grow">
                  {dish.description}
                </p>
              </div>

              {/* Order Now Button */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <a
                  href={dish.link}
                  className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-yellow-400 text-black text-xs sm:text-sm font-semibold rounded-lg transition-all hover:bg-yellow-500"
                >
                  Order Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefSpecials;