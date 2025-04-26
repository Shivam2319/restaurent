// import React from "react";
// import { Carousel } from "primereact/carousel";
// import { Rating } from "primereact/rating";

// const testimonials = [
//   {
//     name: "Sandeep Farma",
//     text: "Quality food with best ambience and a good taste of Mughals food. Best place for family dinner and lunch.",
//     image: "/assets/avatars/sandeep.jpg",
//     rating: 5,
//   },
//   {
//     name: "Aaquib Nasim",
//     text: "The best biryani. Excellent taste.",
//     image: "/assets/avatars/aaquib.jpg",
//     rating: 5,
//   },
//   {
//     name: "Arindam Goswami",
//     text: "We've been there last year during puja. Their biryani is like mouthwatering. Perfect in quality and quantity.",
//     image: "/assets/avatars/arindam.jpg",
//     rating: 5,
//   },
//   {
//     name: "Priya Mehta",
//     text: "Loved their kebabs and ambiance! Truly royal feel.",
//     image: "/assets/avatars/priya.jpg",
//     rating: 4,
//   },
//   {
//     name: "Rajeev Sharma",
//     text: "Affordable and delicious! Worth every penny.",
//     image: "/assets/avatars/rajeev.jpg",
//     rating: 5,
//   },
//   {
//     name: "Fatima Noor",
//     text: "Perfect for small celebrations. Cozy and delicious!",
//     image: "/assets/avatars/fatima.jpg",
//     rating: 4,
//   },
// ];

// const TestimonialSection = () => {
//   const responsiveOptions = [
//     {
//       breakpoint: '1024px',
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: '768px',
//       numVisible: 1,
//       numScroll: 1,
//     },
//   ];

//   const testimonialTemplate = (item) => (
//     <div className="p-4">
//       <div className="bg-white rounded-xl text-gray-800 shadow-lg border border-yellow-300 p-6 transition-transform hover:scale-105 duration-300 h-full flex flex-col justify-between">
//         <div className="flex justify-center mb-3">
//           <Rating value={item.rating} readOnly cancel={false} stars={5} className="text-yellow-500" />
//         </div>
//         <p className="italic text-sm text-gray-600 mb-4">“{item.text}”</p>
//         <div className="flex flex-col items-center">
//           <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border-2 border-yellow-500 mb-2" />
//           <p className="font-semibold">{item.name}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className="relative py-20 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/assets/biryani-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-70"></div>

//       <div className="relative z-10 text-center text-white mb-12">
//         <h4 className="text-lg tracking-wide mb-2">People Talk</h4>
//         <h2 className="text-4xl font-bold">Our Testimonial</h2>
//         <div className="mt-2 w-20 h-1 mx-auto bg-yellow-500 rounded"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4">
//         <Carousel
//           value={testimonials}
//           itemTemplate={testimonialTemplate}
//           numVisible={3}
//           numScroll={1}
//           responsiveOptions={responsiveOptions}
//           autoplayInterval={4000}
//           circular
//           showIndicators
//         />
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;


// responsive layout
import React from "react";
import { Carousel } from "primereact/carousel";
import { Rating } from "primereact/rating";

const testimonials = [
  {
    name: "Sandeep Farma",
    text: "Quality food with best ambience and a good taste of Mughals food. Best place for family dinner and lunch.",
    image: "/assets/avatars/sandeep.jpg",
    rating: 5,
  },
  {
    name: "Aaquib Nasim",
    text: "The best biryani. Excellent taste.",
    image: "/assets/avatars/aaquib.jpg",
    rating: 5,
  },
  {
    name: "Arindam Goswami",
    text: "We've been there last year during puja. Their biryani is like mouthwatering. Perfect in quality and quantity.",
    image: "/assets/avatars/arindam.jpg",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    text: "Loved their kebabs and ambiance! Truly royal feel.",
    image: "/assets/avatars/priya.jpg",
    rating: 4,
  },
  {
    name: "Rajeev Sharma",
    text: "Affordable and delicious! Worth every penny.",
    image: "/assets/avatars/rajeev.jpg",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    text: "Perfect for small celebrations. Cozy and delicious!",
    image: "/assets/avatars/fatima.jpg",
    rating: 4,
  },
];

const TestimonialSection = () => {
  const responsiveOptions = [
    {
      breakpoint: '1280px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '640px',
      numVisible: 1,
      numScroll: 1,
    }
  ];

  const testimonialTemplate = (item) => (
    <div className="h-full p-2">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl text-gray-800 shadow-lg border border-yellow-300 p-6 h-full flex flex-col">
        <div className="flex justify-center mb-4">
          <Rating 
            value={item.rating} 
            readOnly 
            cancel={false} 
            stars={5} 
            className="text-yellow-500 [&>.p-rating-icon]:text-sm sm:[&>.p-rating-icon]:text-base"
          />
        </div>
        <p className="italic text-gray-700 mb-6 text-sm sm:text-base flex-grow">"{item.text}"</p>
        <div className="flex flex-col items-center mt-auto">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-500 mb-2 object-cover" 
          />
          <p className="font-semibold text-sm sm:text-base text-gray-800">{item.name}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/panirtikkaa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center text-white mb-10 sm:mb-14">
          <h4 className="text-sm sm:text-base tracking-wide mb-2">People Talk</h4>
          <h2 className="text-2xl sm:text-4xl font-bold">Our Testimonials</h2>
          <div className="mt-2 w-16 sm:w-20 h-1 mx-auto bg-yellow-500 rounded"></div>
        </div>

        {/* Carousel */}
        <div className="px-2 sm:px-4">
          <Carousel
            value={testimonials}
            itemTemplate={testimonialTemplate}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            autoplayInterval={4000}
            circular
            showIndicators
            containerClassName="p-1"
            contentClassName="py-4"
            itemClassName="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;