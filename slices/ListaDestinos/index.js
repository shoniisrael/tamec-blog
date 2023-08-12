import React from "react";
import { PrismicLink } from "@prismicio/react";
import { ColorMapping } from "../../utils/ColorMapping";

let url;
/**
 * @typedef {import("@prismicio/client").Content.ListaDestinosSlice} ListaDestinosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListaDestinosSlice>} ListaDestinosProps
 * @param { ListaDestinosProps }
 */
const ListaDestinos = ({ slice }) => {
  let color;
  color = new ColorMapping();
  let backgroundColorCssClass = color.getBgColor(slice.primary.color_de_fondo);

  let textColorCssClass = color.getTextColor(slice.primary.color_de_fondo);
  return (
    <section
      className={backgroundColorCssClass + " " + textColorCssClass}
      id="visas"
    >
      <div
        className={`container mx-auto w-full px-6 py-8 md:py-16 md:px-14 lg:py-24 lg:px-28 `}
      >
        <div className="mx-auto my-8 text-center">
          <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl">
            {slice.primary.title}
          </h2>
          <div id="texto" className=" my-2 text-center ">
            {slice.primary.description}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {slice?.items?.map((item, i) => (
            <PrismicLink
              key={"destino" + item.principal_text + i}
              field={item.link_route}
              style={{
                backgroundImage: `url(${item.image.url})`,
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                backgroundBlendMode: "multiply",
              }}
              className="hover:bg-indigo-500 relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-all hover:-translate-y-1 hover:scale-105"
            >
              <div className="bg-black/25 absolute inset-0"></div>
              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <p className="text-xl font-bold sm:text-2xl">
                    {item.principal_text}
                  </p>

                  <p className="text-sm">{item.smalltext}</p>
                </div>
              </div>
            </PrismicLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListaDestinos;
