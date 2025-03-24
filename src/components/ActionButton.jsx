import React from "react";
import { Button } from "primereact/button";

const ActionButton = ({ icon, onClick, type }) => {
  const buttonStyles = {
    edit: "bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md transition-all duration-300",
    delete: "bg-red-500 text-white hover:bg-red-600 border-none shadow-md transition-all duration-300",
    save: "bg-green-500 text-white hover:bg-green-600 border-none shadow-md transition-all duration-300",
  };

  return (
    <Button 
      icon={icon} 
      className={`p-button p-button-rounded ${buttonStyles[type]} p-2 mx-1`} 
      onClick={onClick} 
    />
  );
};

export default ActionButton;
