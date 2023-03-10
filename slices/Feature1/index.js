import React, { useMemo } from "react";
import { PrismicRichText } from "@prismicio/react";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";

/**
 * @typedef {import("@prismicio/client").Content.Feature1Slice} Feature1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Feature1Slice>} Feature1Props
 * @param { Feature1Props }
 */

const Feature1 = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section
      className="container mx-auto mt-8 mb-6 w-full bg-white px-6 sm:my-14 sm:py-14 sm:px-8 lg:px-16"
      id="feature"
    >
      <div className="p y-8 my-12 grid w-full grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        <ScrollAnimationWrapper className="flex w-full justify-end ">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image
              src={slice?.primary?.image?.url || "/assets/feature.jpg"}
              alt={slice?.primary?.image?.alt || "imagen de un viaje"}
              quality={100}
              height={100}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col items-end justify-center lg:w-11/12"
            variants={scrollAnimation}
          >
            <h2 className="text-3xl font-medium leading-relaxed text-black-600 lg:text-4xl">
              {slice.primary.title}
            </h2>
            <div id="texto" className=" my-2 text-black-500">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Feature1;
