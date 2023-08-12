import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.EstadisticasSlice} EstadisticasSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EstadisticasSlice>} EstadisticasProps
 * @param { EstadisticasProps }
 */

const Estadisticas = ({ slice }) => {
  return (
    <section className={"container mx-auto"} id="section1">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-0 " id="about">
        <div className="relative flex w-full">
          <div className=" grid w-full grid-flow-row grid-cols-1 grid-cols-1 divide-y-2 divide-gray-100 rounded-lg bg-white sm:grid-cols-2  sm:divide-y-0 sm:divide-x-2 lg:grid-cols-4">
            {slice?.items?.map((item, index) => (
              <div
                className="mx-auto flex w-full items-center justify-start py-4 px-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6"
                key={index}
              >
                <div className="mx-auto flex w-full sm:w-auto">
                  <div className="bg-pri mr-6 flex h-12 w-10 items-center justify-center rounded-full sm:w-12">
                    <img
                      src={item.imagen.url}
                      alt={item.imagen.alt}
                      className="h-9 w-9"
                      width={"100"}
                      height={"100"}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-3xl font-bold text-primary-dark">
                      {item.numero_o_texto_principal}
                    </p>
                    <p className="text-black-500 text-lg">{item.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
