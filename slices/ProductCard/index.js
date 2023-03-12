import React from "react";

import { PrismicRichText, PrismicText } from "@prismicio/react";
import Image from "next/image";

const ProductCard = ({ slice }) => (
  <section>
    <div className="h-96 max-w-xs overflow-hidden rounded-lg bg-secondary-500 shadow-lg">
      <div className="relative">
        <Image
          className="h-48 w-full object-cover"
          src="https://picsum.photos/200/300"
          alt={slice.primary.title}
        />
        <div className="bg-gray-200 text-gray-800 absolute top-0 right-0 m-2 rounded-full p-1">
          <h3 className="mb-0 max-h-7 overflow-hidden text-sm font-bold">
            <PrismicText field={slice.primary.title} />
          </h3>
        </div>
      </div>
      <div className="px-4 py-2">
        <h3 className="mb-0 max-h-7 overflow-hidden text-xl font-bold">
          <PrismicText field={slice.primary.title} />
        </h3>
        <br />
        <div className="text-gray-700 max-h-24 overflow-hidden text-base">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </div>
  </section>
);

export default ProductCard;
