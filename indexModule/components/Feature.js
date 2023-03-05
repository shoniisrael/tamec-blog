import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Reserva y compra de vuelos aéreos en todo el mundo.",
  "Trámites de todo tipo de visas.",
  "Programas y Tours",
  "Viaja fácil y sin complicaciones.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto mt-8 mb-6 max-w-screen-2xl px-6 sm:my-14 sm:py-14 sm:px-8 lg:px-16"
      id="feature"
    >
      <div className="p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image
              src="/assets/feature.jpg"
              alt="foto de turistas en méxico"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col items-end justify-center lg:w-11/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl font-medium leading-relaxed text-black-600 lg:text-4xl">
              ¿Te apasiona viajar y descubrir nuevos lugares?
            </h3>
            <p className="my-2 text-black-500">
              Entonces, estás en el lugar correcto. En Tamec, estamos
              comprometidos en hacer que tus viajes sean únicos y que tus
              recuerdos sean eternos. Queremos que te olvides del estrés de la
              organización y que simplemente disfrutes del viaje.
            </p>
            <ul className="ml-8 list-inside self-start text-black-500">
              {features.map((feature, index) => (
                <motion.li
                  className="circle-check custom-list relative cursor-pointer"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
