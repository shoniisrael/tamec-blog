import React from 'react'

import { PrismicRichText, PrismicText } from "@prismicio/react";
const ProductCard = ({ slice }) => (
  <section>
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg h-96">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src="https://picsum.photos/200/300"
          alt={slice.primary.title}
        />
        <div className="absolute top-0 right-0 m-2 p-1 bg-gray-200 rounded-full text-gray-800">
          <h3 className="font-bold text-sm mb-0 overflow-hidden max-h-7">
            <PrismicText field={slice.primary.title} />
          </h3>
        </div>
      </div>
      <div className="px-4 py-2">
        <h3 className="font-bold text-xl mb-0 overflow-hidden max-h-7">
          <PrismicText field={slice.primary.title} />
        </h3>
         <br/>
        <p className="text-gray-700 text-base overflow-hidden max-h-24">
        <PrismicRichText   field={slice.primary.description}/>

        </p>
      </div>
    </div>

  </section>
)

export default ProductCard
