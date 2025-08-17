import React from "react";

const ContactCard = ({ position = "bottom" }) => {
  
  // position can be "bottom" or "right"

  const positionClasses =
    position === "right"
      ?  "absolute top-1/2 left-full ml-2 transform -translate-y-1/2"
      : "absolute top-full left-1/2 transform -translate-x-1/2 mt-2";

  return (
    <div
      className={`${positionClasses} w-80 bg-white border border-gray-200 shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50`}
    >
      <div className="text-sm text-gray-800 space-y-1">
        <div className="flex gap-1">
          <strong>Name:</strong> <span>Karthik Chilumula</span>
        </div>
        <div className="flex gap-1">
          <strong>Email:</strong> <span>karthikbunny2005@gmail.com</span>
        </div>
        <div className="flex gap-1">
          <strong>Phone:</strong> <span>+91 9440931842</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
