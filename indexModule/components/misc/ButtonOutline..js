import React from "react";
import { PrismicLink } from "@prismicio/react";

const ButtonOutline = ({ children, linkButton }) => {
  if (linkButton === null) return <> </>;
  return (
    <PrismicLink
      field={linkButton}
      className=" text-md border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:bg-rose-500 block w-full rounded-lg border-2 bg-transparent px-4 py-2 px-12
      py-3 font-bold font-bold uppercase shadow hover:cursor-pointer focus:outline-none focus:ring sm:w-auto md:px-6"
    >
      {" "}
      {children}
    </PrismicLink>
  );
};

export default ButtonOutline;
