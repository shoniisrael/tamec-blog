import React, { useMemo } from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline.";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = ({
  listUser = [
    {
      name: "Clientes Satisfechos",
      number: "+2000",
      icon: "assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Destinos Turísticos",
      number: "+300",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
    {
      name: "Atención Personalizada",
      number: "24/7",
      icon: "/assets/Icon/gridicons_location.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-0" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-1 sm:py-0"
          variants={scrollAnimation}
        >
          <div className=" row-start-2 flex flex-col items-start justify-center px-6 sm:row-start-1 sm:px-8 lg:pl-16 lg:pr-0 ">
            <h1 className="text-orange-300 text-3xl font-medium leading-normal lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Viajes <strong className="text-teal-600">Únicos</strong>
              <br />
              Recuerdos <strong className="text-teal-600">Eternos</strong>
            </h1>
            <p className="mt-4 mb-6 text-black-500">
              con <strong className="text-teal-600">TAMEC</strong> tu agencia de
              viajes de confianza.
            </p>
            <ButtonPrimary>Contactar</ButtonPrimary>
            <ButtonOutline>Ver Tours</ButtonOutline>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <picture className={"block h-full w-full"}>
                <LazyLoadImage
                  alt="turista en el festival de globos de Turquia"
                  effect="opacity"
                  src="/assets/hero/2.webp"
                  height="100%"
                  width="100%"
                />
              </picture>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative flex w-full">
        <ScrollAnimationWrapper className="bg-white z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg sm:grid-flow-row sm:grid-cols-3 sm:divide-y-0 sm:divide-x-2">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="mx-auto flex w-8/12 items-center justify-start py-4 px-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="mx-auto flex w-40 sm:w-auto">
                <div className="bg-cyan-100 mr-6 flex h-12 w-12 items-center justify-center rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black-600">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero;
