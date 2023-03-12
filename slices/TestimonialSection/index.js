import React, { useMemo } from "react";
import { ColorMapping } from "../../utils/ColorMapping";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";

import { motion } from "framer-motion";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";
import Testimoni from "../../indexModule/components/Testimoni";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSectionSlice} TestimonialSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSectionSlice>} TestimonialSectionProps
 * @param { TestimonialSectionProps }
 */
const TestimonialSection = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

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
        <div
          className="container my-16 mx-auto flex w-full flex-col"
          id="testimoni"
        >
          <ScrollAnimationWrapper className="flex w-full flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
