import React, { Component } from "react";
import { PrismicLink } from '@prismicio/react'
class Button extends Component {
  render() {
    const { link, label } = this.props;
    if (!label) {
      return null;
    }

    return (
    <PrismicLink  field={link}>
        {label}
    </PrismicLink>
    
    );
  }
}

export default Button;
