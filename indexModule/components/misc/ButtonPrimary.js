import React from "react";
import { PrismicLink } from "@prismicio/react";

const ButtonPrimary = ({ children, linkButton }) => {
  if (linkButton === null) return <> </>;

  return (
    <PrismicLink
      field={linkButton}
      className={
        "text-md text-white mr-4 rounded-lg border-2 border-transparent px-4 py-2 font-bold uppercase hover:cursor-pointer md:px-6" +
        "active:bg-rose-500 bg-primary-500 hover:bg-primary-700 block w-full px-12 py-3 font-bold shadow focus:outline-none focus:ring sm:w-auto"
      }
    >
      {children}
    </PrismicLink>
  );
};

export default ButtonPrimary;
