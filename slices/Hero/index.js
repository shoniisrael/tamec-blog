import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "../../indexModule/components/misc/ButtonPrimary";
import ButtonOutline from "../../indexModule/components/misc/ButtonOutline.";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className={"container mx-auto"}>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-1 sm:py-0 "
          custom={{ duration: 1 }}
          variants={scrollAnimation}
        >
          <div className=" row-start-2 flex flex-col items-start justify-center px-6 sm:row-start-1 sm:px-8 lg:py-40 lg:pl-16 lg:pr-0 ">
            <h1 className="text-orange-300 text-3xl font-black leading-normal lg:text-6xl xl:text-7xl 2xl:text-7xl">
              Viajes <strong className="text-primary-600">Únicos</strong>
              <br />
              Recuerdos <strong className="text-primary-600">Eternos</strong>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              con <strong className="text-primary-600 font-black">TAMEC</strong>{" "}
              tu agencia de viajes de confianza.
            </p>
            <div
              className={
                " flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:mt-8"
              }
            >
              <ButtonPrimary linkButton={slice.primary.link_boton_1}>
                {slice.primary.texto_boton_1}
              </ButtonPrimary>
              <ButtonOutline linkButton={slice.primary.link_boton_2}>
                {slice.primary.texto_boton_2}
              </ButtonOutline>
            </div>
          </div>
          <div className="h-full w-full">
            <motion.div
              className="h-full w-full"
              variants={scrollAnimation}
              custom={{ duration: 1 }}
            >
              <picture className={"block h-full w-full"}>
                <LazyLoadImage
                  alt={
                    slice?.primary?.imagen?.alt
                      ? slice?.primary?.imagen?.alt
                      : "turista en el festival de globos de Turquia"
                  }
                  effect="opacity"
                  src={
                    slice?.primary?.imagen?.url
                      ? slice?.primary?.imagen?.url
                      : "/assets/hero/2.webp"
                  }
                  wrapperClassName={"object-cover h-full w-full"}
                  height="100%"
                  width="100%"
                />
              </picture>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Hero;
