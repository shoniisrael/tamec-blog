import React, { useMemo, useState } from "react";
import { ColorMapping } from "../../utils/ColorMapping";
import ScrollAnimationWrapper from "../../indexModule/components/Layout/ScrollAnimationWrapper";

import { motion } from "framer-motion";
import getScrollAnimation from "../../indexModule/utils/getScrollAnimation";
import Slider from "react-slick";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSectionSlice} TestimonialSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSectionSlice>} TestimonialSectionProps
 * @param { TestimonialSectionProps }
 */
const TestimonialSection = ({ slice }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  let color;
  color = new ColorMapping();
  let backgroundColorCssClass = color.getBgColor(slice.primary.color_de_fondo);
  let textColorCssClass = color.getTextColor(slice.primary.color_de_fondo);

  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <div className="">
          <span className="mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all "></span>
        </div>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-64  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section className={backgroundColorCssClass + " " + textColorCssClass}>
      <div
        className={`container mx-auto w-full px-6 py-8 md:py-16 md:px-14 lg:py-24 lg:px-28 `}
      >
        <div className="mx-auto my-8 text-center">
          <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl">
            {slice?.primary?.title}
          </h2>
          <div id="texto" className=" my-2 text-center ">
            {slice?.primary?.subtitle || ""}
          </div>
        </div>
        <div
          className="container my-12 mx-auto flex w-full flex-col"
          id="testimoni"
        >
          <ScrollAnimationWrapper className="flex w-full flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <>
                <Slider
                  arrows={false}
                  {...settings}
                  ref={setSliderRef}
                  className="flex w-full items-stretch justify-items-stretch"
                >
                  {slice?.items?.map((item, index) => (
                    <div
                      className="flex h-60 w-full max-w-sm items-stretch px-3"
                      key={index}
                    >
                      <div className="flex h-60 flex-col rounded-lg border-2 border-zinc-300 bg-zinc-100 p-8 text-black-600 transition-all hover:border-teal-500">
                        <div className="flex w-full flex-col items-stretch xl:flex-row xl:items-center">
                          <div className="order-2 flex xl:order-1">
                            <img
                              src={item.foto.url}
                              alt={item.foto.alt || "testimonio"}
                              width={"100"}
                              height={"100"}
                            />
                            <div className="ml-5 flex flex-col text-left">
                              <p className="text-lg capitalize text-black-600">
                                {item.nombre || "Desconocido"}
                              </p>
                              <p className="text-sm capitalize text-black-500">
                                {item.subtitulo || "Desconocido"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 text-left">
                          <PrismicRichText field={item.testimonio} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="flex w-full items-center justify-end">
                  <div className="mt-14 flex w-auto flex-none justify-between">
                    <div
                      className="mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-teal-500 bg-white text-teal-500 transition-all hover:bg-teal-500 hover:text-white"
                      onClick={sliderRef?.slickPrev}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-teal-500 bg-white text-teal-500 transition-all hover:bg-teal-500 hover:text-white"
                      onClick={sliderRef?.slickNext}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
