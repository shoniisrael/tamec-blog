import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ColorMapping } from "../../utils/ColorMapping";
import ButtonPrimary from "../../indexModule/components/misc/ButtonPrimary";
import ButtonOutline from "../../indexModule/components/misc/ButtonOutline.";

const ImageTextAndButton = ({ slice }) => {
  let color;
  color = new ColorMapping();
  let backgroundColorCssClass = color.getBgColor(slice.primary.color);

  let textColorCssClass = color.getTextColor(slice.primary.color);

  return (
    <section className={backgroundColorCssClass + " " + textColorCssClass}>
      <div
        className={
          "container mx-auto w-full p-6 py-8  sm:py-14 sm:px-8 lg:py-20  lg:px-16"
        }
      >
        <div className="my-8 flex w-full flex-col items-center justify-center rounded-xl pl-4 md:flex-row md:items-start md:pl-12 ">
          <div className="flex-1 px-6 pb-10 md:w-1/2">
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
            <span className={` pb-4 text-xs uppercase md:text-sm`}>
              <PrismicRichText field={slice.primary.small_title} />
            </span>
            <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl">
              {slice.primary.title}
            </h2>

            <div
              className={
                " flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:mt-8"
              }
            >
              <ButtonPrimary linkButton={slice.primary.button_link}>
                {slice.primary.button_label}
              </ButtonPrimary>
              <ButtonOutline linkButton={slice.primary.link_boton_secundario}>
                {slice.primary.texto_boton_secundario}
              </ButtonOutline>
            </div>
          </div>
          <div className="ml-auto self-end md:w-1/2 md:w-1/2 md:justify-self-end lg:w-auto ">
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
      </div>
    </section>
  );
};

export default ImageTextAndButton;
