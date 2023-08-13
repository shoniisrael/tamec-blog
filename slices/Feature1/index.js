import React, { useMemo } from "react";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.Feature1Slice} Feature1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Feature1Slice>} Feature1Props
 * @param { Feature1Props }
 */

const Feature1 = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const orderClass = slice?.primary.image_first ? "order-0" : "order-1";
  const position = slice?.primary.image_first ? "ml-auto " : "mr-auto ";
  const imgPosition = slice?.primary.image_first ? "mr-auto " : "ml-auto ";
  return (
    <section
      className="container mx-auto w-full bg-white py-20 px-6   sm:px-8   lg:px-16"
      id={slice?.primary?.uuid}
    >
      <div className="flex w-full flex-col sm:flex-row ">
        <div className={`${orderClass} sm:w-1/2`}>
          <div className={`flex w-full items-start justify-center `}>
            <div className={`${imgPosition} h-full w-full `}>
              <img
                src={slice?.primary?.image?.url || "/assets/feature.jpg"}
                alt={slice?.primary?.image?.alt || "imagen de un viaje"}
                className={`${imgPosition} object-cover `}
                quality={100}
                height={100}
                width={508}
              />
            </div>
          </div>
        </div>
        <div className={` sm:w-1/2`}>
          <div>
            <div
              className={`flex w-full flex-col items-start ${position} px-4  `}
            >
              <h2 className="text-black-600 text-3xl font-medium leading-relaxed lg:text-4xl">
                {slice.primary.title}
              </h2>
              <div id="texto" className=" text-black-500 my-2 text-left">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature1;
