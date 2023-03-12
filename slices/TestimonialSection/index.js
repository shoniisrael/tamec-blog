import React from "react";
import { ColorMapping } from "../../utils/ColorMapping";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSectionSlice} TestimonialSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSectionSlice>} TestimonialSectionProps
 * @param { TestimonialSectionProps }
 */
const TestimonialSection = ({ slice }) => {
  let color;
  color = new ColorMapping();
  let backgroundColorCssClass = color.getBgColor(slice.primary.color_de_fondo);

  let textColorCssClass = color.getTextColor(slice.primary.color_de_fondo);
  return (
    <section className={backgroundColorCssClass + " " + textColorCssClass}>
      <div
        className={`container mx-auto w-full px-6 py-8 md:py-16 md:px-14 lg:py-24 lg:px-28 `}
      >
        <div className="mx-auto my-8 text-center">
          <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl">
            {slice.primary.title}
          </h2>
          <div id="texto" className=" my-2 text-center ">
            {slice.primary.subtitle}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
