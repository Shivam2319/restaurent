// import React, { useState } from "react";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { motion } from "framer-motion";

// const FacilityCard = ({ title, description, image }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <motion.div
//       className="w-full md:w-[400px] mx-auto"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="shadow-lg rounded-xl overflow-hidden bg-white">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//           <p className="text-gray-600 mt-2">
//             {expanded ? description : `${description.substring(0, 100)}...`}
//           </p>
//           <Button
//             label={expanded ? "Read Less" : "Read More"}
//             className="p-button-text text-blue-600 mt-3"
//             onClick={() => setExpanded(!expanded)}
//           />
//         </div>
//       </Card>
//     </motion.div>
//   );
// };

// export default FacilityCard;
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { motion, AnimatePresence } from "framer-motion";

const FacilityCard = ({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="w-full sm:w-[380px] md:w-[400px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg rounded-xl overflow-hidden bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          
          <AnimatePresence>
            {expanded ? (
              <motion.p
                key="full-text"
                className="text-gray-600 mt-2"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>
            ) : (
              <motion.p
                key="short-text"
                className="text-gray-600 mt-2"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {description.length > 100
                  ? `${description.substring(0, 100)}...`
                  : description}
              </motion.p>
            )}
          </AnimatePresence>

          {description.length > 100 && (
            <Button
              label={expanded ? "Read Less" : "Read More"}
              className="p-button-text text-blue-600 mt-3 transition-all hover:text-blue-800"
              onClick={() => setExpanded(!expanded)}
            />
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default FacilityCard;
