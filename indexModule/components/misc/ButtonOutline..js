import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-500 text-teal-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-500 hover:text-white transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
