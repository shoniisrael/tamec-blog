import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      <figure className="grid grid-cols-1 gap-4">
        {prismicH.isFilled.image(image) && (
          <picture className={"flex justify-center"}>
            <LazyLoadImage
              alt={image.alt}
              effect="opacity"
              src={image.url}
              height="384px"
            />
          </picture>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center font-sans italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;
