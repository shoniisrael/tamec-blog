import React, { useMemo } from "react";
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
    <section id="servicios">
      <div className=" w-full bg-primary-dark py-8 lg:py-24" id="pricing">
        <div className="mx-auto  flex w-full max-w-screen-2xl flex-col justify-center px-6 text-center sm:px-8 lg:px-16">
          <div className="flex w-full flex-col">
            <div>
              <h3 className="text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl">
                {slice.primary.title}
              </h3>
              <p className="mx-auto my-2 w-10/12 text-center leading-normal text-white sm:w-7/12 lg:w-6/12">
                {slice.primary.subtitle}
              </p>
            </div>
            <div className="flex flex-col justify-around space-x-8 px-4 pt-8 sm:flex-row sm:px-0 lg:pt-12">
              {slice?.items?.map((item, i) => (
                <div
                  className="flex flex-1 cursor-pointer justify-center rounded"
                  key={i}
                >
                  <div className="flex w-full max-w-md flex-col items-center justify-center rounded-xl border-2 border-gray-500 bg-white py-4 px-6 lg:px-8 ">
                    <div className="mt-6 p-4 lg:mt-6 lg:p-0">
                      <img
                        src={item.cardimage.url}
                        alt={item.cardimage.alt || "icono"}
                        width={64}
                        height={64}
                      />
                    </div>
                    <h3 className="text-black-600 my-2 text-lg font-medium capitalize sm:my-7 md:py-4 md:text-3xl">
                      <span>{item.cardtitle}</span>
                    </h3>
                    <div
                      id="texto"
                      className="text-black-500 flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left xl:pl-0"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
