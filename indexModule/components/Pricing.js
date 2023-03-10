import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div>
      <div className=" bg-primary-300 w-full py-14" id="pricing">
        <div className="mx-auto  flex w-full max-w-screen-2xl flex-col justify-center px-6 text-center sm:px-8 lg:px-16">
          <div className="flex w-full flex-col">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl font-medium leading-relaxed text-black-600 sm:text-3xl lg:text-4xl"
              >
                Escoge el servicio según tus necesidades
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="mx-auto my-2 w-10/12 text-center leading-normal sm:w-7/12 lg:w-6/12"
              >
                Personaliza tu experiencia y elige el servicio que mejor se
                ajuste a tus necesidades y presupuesto
              </motion.p>
            </ScrollAnimationWrapper>
            <div className="grid grid-flow-row grid-cols-1 gap-4 py-8 px-6 sm:grid-flow-col sm:grid-cols-3 sm:px-0 lg:gap-12 lg:py-12 lg:px-6">
              <ScrollAnimationWrapper className="flex cursor-pointer justify-center rounded">
                <motion.div
                  variants={scrollAnimation}
                  className="bg-white flex flex-col items-center justify-center rounded-xl border-2 border-gray-500 py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                    <Image
                      src="/assets/avion.png"
                      width={64}
                      height={64}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                    Vuelos Aéreos
                  </p>
                  <ul className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0">
                    <li className="check custom-list relative my-2">
                      Amplia red de destinos nacionales e internacionales
                    </li>
                    <li className="check custom-list relative my-2">
                      Seguridad y Confiabilidad
                    </li>
                    <li className="check custom-list relative my-2">
                      Nos ajustamos a tus necesidades
                    </li>
                    <li className="check custom-list relative my-2">
                      Tarifas competitivas y accesibles.
                    </li>
                  </ul>
                  <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
                    <ButtonOutline>Ver mas</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="flex cursor-pointer justify-center rounded">
                <motion.div
                  variants={scrollAnimation}
                  className="bg-white flex flex-col items-center justify-center rounded-xl border-2 border-gray-500 py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                    <Image
                      src="/assets/visa.png"
                      width={64}
                      height={64}
                      alt="Standard Plan"
                    />
                  </div>
                  <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                    Tramite de visados
                  </p>
                  <ul className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0">
                    <li className="check custom-list relative my-2">
                      Ayuda en la obtención de turnos y llenado de documentación
                    </li>
                    <li className="check custom-list relative my-2">
                      Experiencia y conocimiento especializado.
                    </li>
                    <li className="check custom-list relative my-2">
                      Atención personalizada y cercana.
                    </li>
                    <li className="check custom-list relative my-2">
                      Asesoramiento y acompañamiento en todo momento.
                    </li>
                  </ul>
                  <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
                    <ButtonOutline>Ver mas</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="flex cursor-pointer justify-center rounded">
                <motion.div
                  variants={scrollAnimation}
                  className="bg-white flex flex-col items-center justify-center rounded-xl border-2 border-gray-500 py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                    <Image
                      src="/assets/tour.png"
                      width={64}
                      height={64}
                      alt="Premium Plan"
                    />
                  </div>
                  <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                    Programas y Tours
                  </p>
                  <ul className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0">
                    <li className="check custom-list relative my-2">
                      Destinos paradisíacos y atractivos.
                    </li>
                    <li className="check custom-list relative my-2">
                      Variedad de opciones de alojamiento.
                    </li>
                    <li className="check custom-list relative my-2">
                      Itinerarios flexibles y adaptados.
                    </li>
                    <li className="check custom-list relative my-2">
                      Precios competitivos y accesibles.
                    </li>
                    <li className="check custom-list relative my-2">
                      Reservas y pagos fáciles.
                    </li>
                  </ul>
                  <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
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
        </div>
      </div>
      <div
        className="container my-16 mx-auto flex w-full flex-col"
        id="testimoni"
      >
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="sm: mx-auto w-9/12 text-2xl font-medium leading-normal text-black-600 sm:text-3xl lg:w-4/12 lg:text-4xl"
          >
            No te preocupes si nunca has viajado antes
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="mx-auto mb-2 mt-4 w-10/12 leading-normal sm:w-7/12 lg:w-6/12"
          >
            {" "}
            ¡Tamec te guiará en cada paso! Escucha lo que algunos de nuestros
            clientes han dicho:
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <Testimoni />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="relative my-16 h-52 w-full">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="bg-primary-900 absolute  z-10 flex w-full flex-col items-center justify-between rounded-xl py-8 px-6 sm:flex-row sm:py-14 sm:px-12 lg:px-16">
              <div className="mb-6 flex w-10/12 flex-col text-left sm:mb-0 sm:w-7/12 lg:w-5/12">
                <h5 className="text-white text-xl font-medium leading-relaxed sm:text-2xl lg:text-3xl">
                  ¡Haz tus sueños realidad y planifica tu próximo viaje con
                  Tamec hoy mismo!
                </h5>
                <p className={"text-black-900"}>
                  Reserva tus vuelos, tramita tus visas y compra tus tours con
                  nosotros.
                </p>
              </div>
              <button className="active:text-rose-500 bg-white text-primary-500 hover:text-primary-700 block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto">
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
  );
};

export default Pricing;
