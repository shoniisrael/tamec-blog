import React from "react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param { HeroSectionProps }
 */
const HeroSection = ({ slice }) => {
  return (
    <section
      style={{
        backgroundImage: slice?.primary?.imagen_de_fondo?.url
          ? `url(${slice?.primary?.imagen_de_fondo?.url})`
          : "none",
      }}
      className="relative bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-transparent"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{slice?.primary?.titulo}</span>
            <strong className="block font-extrabold text-primary-dark">
              <span>{slice?.primary?.titulo_principal}</span>
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            <span>{slice?.primary?.parrafo}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <PrismicLink
              field={slice?.primary?.link_boton_azul}
              className="active:bg-rose-500 block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-dark focus:outline-none focus:ring sm:w-auto"
            >
              <span>{slice?.primary?.texto_boton_azul}</span>
            </PrismicLink>

            <PrismicLink
              field={slice?.primary?.link_boton_blanco}
              className="active:text-rose-500 block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary-dark focus:outline-none focus:ring sm:w-auto"
            >
              <span>{slice?.primary?.texto_boton_blanco}</span>
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
