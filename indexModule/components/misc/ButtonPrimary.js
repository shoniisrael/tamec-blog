import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "text-md hover:bg-cyan-300 bg-primary-500 text-white mr-4 rounded-lg border-2 border-transparent px-4 py-2 font-bold uppercase md:px-6"
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
