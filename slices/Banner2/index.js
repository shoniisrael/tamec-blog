import React from "react";
import { PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.Banner2Slice} Banner2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Banner2Slice>} Banner2Props
 * @param { Banner2Props }
 */
const Banner2 = ({ slice }) => (
  <section className={"container mx-auto"}>
    <div className="relative z-20 flex items-center overflow-hidden bg-white ">
      <div className="container relative mx-auto flex px-6 py-16">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="mb-12 h-2 w-20 bg-zinc-800 "></span>
          <h1 className=" flex flex-col text-6xl font-black uppercase leading-none text-zinc-800  sm:text-8xl">
            {slice?.primary?.title}
          </h1>
          <p className="text-gray-700 text-sm  sm:text-base">
            {slice?.primary?.description}
          </p>
          <div className="mt-8 flex">
            {prismicH.isFilled.link(slice?.primary?.link_boton_principal) && (
              <PrismicLink
                field={slice?.primary?.link_boton_principal}
                className="text-md hover:bg-primary-400 mr-4 rounded-lg border-2 border-transparent bg-primary-500 px-4 py-2 uppercase text-white"
              >
                {slice.primary.principal_text}
              </PrismicLink>
            )}
            {prismicH.isFilled.link(slice?.primary?.link_boton_secundario) && (
              <PrismicLink
                field={slice?.primary?.link_boton_secundario}
                className="text-md rounded-lg border-2 border-primary-500 bg-transparent px-4 py-2 uppercase text-primary-500 hover:bg-primary-500 hover:text-white "
              >
                {slice.primary.secondary_text}
              </PrismicLink>
            )}
          </div>
        </div>
        <div className="relative hidden h-full sm:block sm:w-1/3 lg:w-3/5">
          <img
            src={slice.primary.imagen.url}
            alt={slice.primary.imagen.alt}
            className="m-auto max-w-xs object-cover md:max-w-sm"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Banner2;
