import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="text-md border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg border-2 bg-transparent px-4 py-2 font-bold uppercase md:px-6 ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
