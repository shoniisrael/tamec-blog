import React, { useMemo } from "react";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";
import { ColorMapping } from "../../utils/ColorMapping";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param { CallToActionProps }
 */
const CallToAction = ({ slice }) => {
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
        <div
          className="container my-16 mx-auto flex w-full flex-col"
          id="testimoni"
        >
          <ScrollAnimationWrapper className="relative my-16 h-52 w-full">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute z-10  flex w-full flex-col items-center justify-between rounded-xl bg-primary-900 py-8 px-6 sm:flex-row sm:py-14 sm:px-12 lg:px-16">
                <div className="mb-6 flex w-10/12 flex-col text-left sm:mb-0 sm:w-7/12 lg:w-5/12">
                  <h5 className="text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
                    ¡Haz tus sueños realidad y planifica tu próximo viaje con
                    Tamec hoy mismo!
                  </h5>
                  <p className={"text-black-900"}>
                    Reserva tus vuelos, tramita tus visas y compra tus tours con
                    nosotros.
                  </p>
                </div>
                <button className="active:text-rose-500 block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary-500 shadow hover:text-primary-700 focus:outline-none focus:ring sm:w-auto">
                  Contactar
                </button>
              </div>
              <div
                className="roudned-lg absolute top-0 left-0 right-0 mx-auto mt-8 h-60 w-11/12 bg-black-600 opacity-5 sm:h-56"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
