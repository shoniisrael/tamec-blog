import React, { useMemo } from "react";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";

/**
 * @typedef {import("@prismicio/client").Content.EstadisticasSlice} EstadisticasSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EstadisticasSlice>} EstadisticasProps
 * @param { EstadisticasProps }
 */

const Estadisticas = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className={"container mx-auto"}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-0 " id="about">
        <div className="relative flex w-full">
          <ScrollAnimationWrapper className="z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg bg-white sm:grid-flow-row sm:grid-cols-2 sm:divide-y-0 sm:divide-x-2 lg:grid-cols-4">
            {slice?.items?.map((item, index) => (
              <motion.div
                className="mx-auto flex w-8/12 items-center justify-start py-4 px-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6"
                key={index}
                custom={{ duration: 1 + index }}
                variants={scrollAnimation}
              >
                <div className="mx-auto flex w-40 sm:w-auto">
                  <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <img
                      src={item.imagen.url}
                      alt={item.imagen.alt}
                      className="h-6 w-6"
                      width={"100"}
                      height={"100"}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold text-black-600">
                      {item.numero_o_texto_principal}
                    </p>
                    <p className="text-lg text-black-500">{item.descripcion}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
