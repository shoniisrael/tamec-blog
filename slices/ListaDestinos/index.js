import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { ColorMapping } from "../../utils/ColorMapping";
import { Bounded } from "../../components/Bounded";

let url;
/**
 * @typedef {import("@prismicio/client").Content.ListaDestinosSlice} ListaDestinosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListaDestinosSlice>} ListaDestinosProps
 * @param { ListaDestinosProps }
 */
const ListaDestinos = ({ slice }) => {
  let color;
  color = new ColorMapping();
  let backgroundColorCssClass =
    "bg-" +
    color.getValue(
      slice.primary.color_de_fondo,
      slice.primary.opacidad_de_fondo
    );
  let smallTextColorCssClass =
    "text-" +
    color.getValue(
      slice.primary.color_de_texto,
      slice.primary.opacidad_color_de_texto
    );
  return (
    <Bounded
      as="section"
      size={"widest"}
      className={`${backgroundColorCssClass} mx-auto w-full px-6 pt-12 ${smallTextColorCssClass} md:px-14 lg:px-28 `}
    >
      <div className="mx-auto my-8 max-w-lg text-center">
        <span className="title">
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : (
            <h2 className="text-3xl font-bold sm:text-4xl">
              Template slice, update me!
            </h2>
          )}
        </span>

        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p className="text-gray-300 mt-4">
            start by editing this slice from inside Slice Machine!
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {slice?.items?.map((item, i) => (
          <PrismicLink
            key={"destino" + item.principal_text + i}
            field={item.link_route}
            style={{
              backgroundImage: `url(${item.image.url})`,
              backgroundColor: "rgba(0, 0, 0, 0.25)",
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
    </Bounded>
  );
};

export default ListaDestinos;
