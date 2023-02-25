import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-2xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Escoge el servicio según tus necesidades
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Personaliza tu experiencia y elige el servicio que mejor se ajuste a tus necesidades y presupuesto
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center cursor-pointer bg-white-500">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center bg-white-500 border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/avion.png"
                    width={64}
                    height={64}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Vuelos Aéreos
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Amplia red de destinos nacionales e internacionales
                  </li>
                  <li className="relative check custom-list my-2">
                    Seguridad y Confiabilidad
                  </li>
                  <li className="relative check custom-list my-2">
                    Nos ajustamos a tus necesidades
                  </li>
                  <li className="relative check custom-list my-2">
                    Tarifas competitivas y accesibles.
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Ver mas</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center bg-white-500 cursor-pointer">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center bg-white-500 border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/visa.png"
                  width={64}
                  height={64}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Tramite de visados
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
               Ayuda en la obtención de turnos y llenado de documentación
                </li>
                <li className="relative check custom-list my-2">
                  Experiencia y conocimiento especializado.
                </li>
                <li className="relative check custom-list my-2">
                  Atención personalizada y cercana.
                </li>
                <li className="relative check custom-list my-2">
                  Asesoramiento y acompañamiento en todo momento.
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">

                <ButtonOutline>Ver mas</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center bg-white-500 cursor-pointer">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center bg-white-500 border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/tour.png"
                  width={64}
                  height={64}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Programas y Tours
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Destinos paradisíacos y atractivos.
                </li>
                <li className="relative check custom-list my-2">
                  Variedad de opciones de alojamiento.
                </li>
                <li className="relative check custom-list my-2">
                  Itinerarios flexibles y adaptados.
                </li>
                <li className="relative check custom-list my-2">
                  Precios competitivos y accesibles.
                </li>
                <li className="relative check custom-list my-2">
                  Reservas y pagos fáciles.
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">

                <ButtonOutline>Ver mas</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        {/*<div className="flex flex-col w-full my-16">*/}
        {/*  <ScrollAnimationWrapper>*/}
        {/*    <motion.h3*/}
        {/*      variants={scrollAnimation}*/}
        {/*      className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-6/12 mx-auto">*/}
        {/*      Tantas opciones, tantos destinos*/}
        {/*    </motion.h3>*/}
        {/*    <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>*/}
        {/*      Explora las innumerables posibilidades turísticas*/}
        {/*    </motion.p>*/}
        {/*  </ScrollAnimationWrapper>*/}
        {/*  <ScrollAnimationWrapper>*/}
        {/*    <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>*/}
        {/*      /!* <Netflix className="h-18 w-auto" /> *!/*/}
        {/*      <img*/}
        {/*        src="/assets/Icon/amazon.png"*/}
        {/*        className="h-14 w-auto mt-4 lg:mt-2"*/}
        {/*        alt=""*/}
        {/*      />*/}
        {/*      <img*/}
        {/*        src="/assets/Icon/netflix.png"*/}
        {/*        className="h-14 w-auto mt-2 lg:mt-0"*/}
        {/*        alt=""*/}
        {/*      />*/}
        {/*      <img*/}
        {/*        src="/assets/Icon/reddit.png"*/}
        {/*        className="h-12 w-auto mt-2 lg:mt-0"*/}
        {/*        alt=""*/}
        {/*      />*/}
        {/*      <img*/}
        {/*        src="/assets/Icon/discord.png"*/}
        {/*        className="h-14 w-auto mt-2 lg:mt-0"*/}
        {/*        alt=""*/}
        {/*      />*/}
        {/*      <img*/}
        {/*        src="/assets/Icon/spotify.png"*/}
        {/*        className="h-12 w-auto mt-2 lg:mt-0"*/}
        {/*        alt=""*/}
        {/*      />*/}
        {/*    </motion.div>*/}
        {/*  </ScrollAnimationWrapper>*/}
        {/*</div>*/}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              No te preocupes si nunca has viajado antes
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            > ¡Tamec te guiará en cada paso!
              Escucha lo que algunos de nuestros clientes han dicho:
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        ¡Haz tus sueños realidad y planifica tu próximo viaje con Tamec hoy mismo!

                  </h5>
                  <p>Reserva tus vuelos, tramita tus visas y compra tus tours con nosotros.</p>
                </div>
                <ButtonPrimary>Me interesa</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
