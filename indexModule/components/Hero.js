import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
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
    <div
      className="max-w-screen-2xl px-4 md:px-0 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 sm:pt-0 sm:pb-8"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 px-6 sm:px-8 lg:pl-16 lg:pr-0 ">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-orange-300 leading-normal">
                Viajes <strong className="text-teal-600">Únicos</strong><br/>
                Recuerdos <strong className="text-teal-600">Eternos</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                con <strong className="text-teal-600">TAMEC</strong> tu agencia de viajes de confianza.
              </p>
              <ButtonPrimary>Contactar</ButtonPrimary>
              <ButtonOutline>Ver Tours</ButtonOutline>


            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <picture className={"w-full h-full block"}>
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
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-cyan-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
