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
    <section className={"relative  mx-auto "}>
      <div className="wave absolute top-0 right-0 h-full">
        <img
          src="/assets/wave.svg"
          alt="Wave SVG"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" container z-10   flex flex-col-reverse py-6 sm:flex-row  ">
        <div className="row-start-2 flex w-full flex-col  items-start px-2 sm:row-start-1 sm:w-full sm:justify-center md:w-2/3 md:px-8 lg:w-full lg:py-40 lg:pl-16 lg:pr-0 ">
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
              " flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-y-0 md:space-x-4 lg:mt-8"
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
        <div className="sm:1/3 h-full w-auto md:w-auto">
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
                wrapperClassName={"object-cover h-auto w-full"}
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
