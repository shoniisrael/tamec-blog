import React from "react";
import { PrismicLink } from "@prismicio/react";

const ButtonOutline = ({ children, linkButton }) => {
  if (linkButton === null || children === null) return <> </>;

  return (
    <PrismicLink field={linkButton} className="buttonOutline">
      {children}
    </PrismicLink>
  );
};

export default ButtonOutline;
