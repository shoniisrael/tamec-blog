import React, { useMemo } from "react";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.Feature1Slice} Feature1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Feature1Slice>} Feature1Props
 * @param { Feature1Props }
 */

const Feature1 = ({ slice }) => {
  console.log(slice);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const orderClass = slice?.variation === "default" ? "order-0" : "order-1";
  const position = slice?.variation === "default" ? "ml-auto " : "mr-auto ";
  const imgPosition = slice?.variation !== "default" ? "ml-auto " : "mr-auto ";
  return (
    <section
      className="container mx-auto my-8 w-full bg-white px-6 sm:my-14 sm:py-14 sm:px-8 lg:h-96 lg:max-h-96 lg:px-16"
      id="feature"
    >
      <div className="flex w-full flex-col sm:flex-row ">
        <div className={`${orderClass} sm:w-1/2`}>
          <ScrollAnimationWrapper
            className={`flex w-full items-start justify-center `}
          >
            <motion.div
              className={`${imgPosition} h-full w-full lg:max-h-96`}
              variants={scrollAnimation}
            >
              <img
                src={slice?.primary?.image?.url || "/assets/feature.jpg"}
                alt={slice?.primary?.image?.alt || "imagen de un viaje"}
                className={`${imgPosition} object-cover lg:max-h-96`}
                quality={100}
                height={100}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className={` sm:w-1/2`}>
          <ScrollAnimationWrapper>
            <motion.div
              className={`flex w-full flex-col items-start ${position} px-4  `}
              variants={scrollAnimation}
            >
              <h2 className="text-3xl font-medium leading-relaxed text-black-600 lg:text-4xl">
                {slice.primary.title}
              </h2>
              <div id="texto" className=" my-2 text-left text-black-500">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
export default Feature1;
