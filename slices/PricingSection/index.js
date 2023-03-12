import React, { useMemo } from "react";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";
import { PrismicRichText } from "@prismicio/react";
import ButtonOutline from "../../indexModule/components/misc/ButtonOutline.";

/**
 * @typedef {import("@prismicio/client").Content.PricingSectionSlice} PricingSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricingSectionSlice>} PricingSectionProps
 * @param { PricingSectionProps }
 */
const PricingSection = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section>
      <div className=" w-full bg-primary-900 py-8 lg:py-24" id="pricing">
        <div className="mx-auto  flex w-full max-w-screen-2xl flex-col justify-center px-6 text-center sm:px-8 lg:px-16">
          <div className="flex w-full flex-col">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl"
              >
                {slice.primary.title}
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="mx-auto my-2 w-10/12 text-center leading-normal text-white sm:w-7/12 lg:w-6/12"
              >
                {slice.primary.subtitle}
              </motion.p>
            </ScrollAnimationWrapper>
            <div className="flex flex-col justify-around space-x-8 px-4 pt-8 sm:flex-row sm:px-0 lg:pt-12">
              {slice?.items?.map((item, i) => (
                <ScrollAnimationWrapper className="flex flex-1 cursor-pointer justify-center rounded">
                  <motion.div
                    variants={scrollAnimation}
                    custom={{ duration: i }}
                    className="flex w-full max-w-md flex-col items-center justify-center rounded-xl border-2 border-gray-500 bg-white py-4 px-6 lg:px-8 "
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                      <img
                        src={item.cardimage.url}
                        alt={item.cardimage.alt || "icono"}
                        width={64}
                        height={64}
                      />
                    </div>
                    <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                      <span>{item.cardtitle}</span>
                    </p>
                    <div
                      id="texto"
                      className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0"
                    >
                      <PrismicRichText field={item?.cardcontent} />
                    </div>
                    {item?.cardbuttonlink && item?.cardbuttontext ? (
                      <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
                        <ButtonOutline linkButton={item?.cardbuttonlink}>
                          {item?.cardbuttontext}
                        </ButtonOutline>
                      </div>
                    ) : (
                      <></>
                    )}
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
