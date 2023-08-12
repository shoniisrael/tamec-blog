import React from "react";
import ButtonPrimary from "../../indexModule/components/misc/ButtonPrimary";
import ButtonOutline from "../../indexModule/components/misc/ButtonOutline.";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  return (
    <section className={"relative  mx-auto"}>
      <div className="wave absolute top-0 right-0 h-full">
        <img
          src="/assets/wave.svg"
          alt="Wave SVG"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" container  z-10 grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-1 sm:py-0 ">
        <div className=" row-start-2 flex flex-col items-start justify-center px-6 sm:row-start-1 sm:px-8 lg:py-40 lg:pl-16 lg:pr-0 ">
          <h1 className="text-3xl font-black leading-normal lg:text-6xl xl:text-7xl 2xl:text-7xl">
            Viajes Únicos
            <br />
            Recuerdos Eternos
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            En Tamec, estamos comprometidos con nuestro trabajo. Queremos que te
            olvides del estrés de la organización y que simplemente disfrutes de
            tu viaje.
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
          <div className="h-full w-full">
            <picture className={"block h-full w-full"}>
              <LazyLoadImage
                alt={
                  slice?.primary?.imagen?.alt
                    ? slice?.primary?.imagen?.alt
                    : "imagen representativa de turismo, tiene un collage con las principales atracciones turisticas del mundo, entre las cuales la estatua de la libertad, la torre eiffel, piramides, y una maleta de viaje de color celeste"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
