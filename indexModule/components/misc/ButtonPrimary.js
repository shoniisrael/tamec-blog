import React from "react";
import { PrismicLink } from "@prismicio/react";

const ButtonPrimary = ({ children, linkButton }) => {
  if (linkButton === null || children === null) return <> </>;

  return (
    <PrismicLink field={linkButton} className=" button buttonPrimary">
      {children}
    </PrismicLink>
  );
};

export default ButtonPrimary;
