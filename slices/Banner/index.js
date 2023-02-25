import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Button from "../../components/button";
import { Bounded } from "../../components/Bounded";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = ({ slice }) => (
  <Bounded as="section" size={"widest"} className={"bg-primary-500 w-full pt-12 px-6 md:px-14 lg:px-28 mx-auto"}>
    <div
      className="max-h-96 flex flex-col items-center justify-center pl-4 md:pl-12 my-8 rounded-xl md:flex-row md:items-start">
      <div className="flex-1 px-6 pb-10">
        {slice.primary.header_image && (
          <picture>
            <LazyLoadImage
              alt={slice.primary.header_image.alt}
              effect="opacity"
              src={slice.primary.header_image.url}
              wrapperClassName={"h-16"}
            />
          </picture>
        )}
        <span className="pb-4 text-xs uppercase md:text-sm">
            <PrismicRichText field={slice.primary.small_title} />
          </span>
        <span className="pb-8 text-lg font-semibold md:text-2xl lg:text-3xl text-primary-dark">
            <PrismicRichText field={slice.primary.title} />
          </span>
        <Button link={slice.primary.button_link} label={slice.primary.button_label} />
      </div>
      <div className="self-end lg:max-w-sm xl:max-w-lg md:w-1/2 lg:w-auto ml-auto md:justify-self-end">

        <picture>
          <LazyLoadImage
            alt={slice.primary.image.alt}
            effect="opacity"
            src={slice.primary.image.url}
            height="384px"
          />
        </picture>
      </div>
    </div>
  </Bounded>
);

export default Banner;
