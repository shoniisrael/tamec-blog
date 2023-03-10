import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param { FaqProps }
 */
const Faq = ({ slice }) => (
  <section className="text-primary-900">
    <div className="container mx-auto flex flex-col justify-center p-4 md:p-8">
      <h2 className="mb-12 text-center text-4xl font-bold leading-none sm:text-5xl">
        {slice?.primary?.title}
      </h2>
      <p className="p-2 text-center text-sm font-medium uppercase tracking-wider">
        {slice?.primary?.description}
      </p>

      <div className="divide-gray-700 flex flex-col divide-y text-tertiary-900 sm:px-8 lg:px-12 xl:px-32">
        {slice?.items?.map((item, i) => (
          <details>
            <summary className="cursor-pointer py-2 outline-none focus:underline">
              <span>{item.pregunta}</span>
            </summary>
            <div className="px-4 pb-4">
              <p>
                <span>{item.respuesta}</span>
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
