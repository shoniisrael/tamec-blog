import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.ProductCardWithPriceSlice} ProductCardWithPriceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductCardWithPriceSlice>} ProductCardWithPriceProps
 * @param { ProductCardWithPriceProps }
 */
const ProductCardWithPrice = ({ slice }) => (
  <Bounded
    as="section"
    size={"widest"}
    className={`mx-auto w-full bg-white px-6 pt-12 md:px-14 lg:px-28 `}
  >
    <div className="mx-auto my-8 max-w-lg text-center">
      <span className="title">
        <PrismicRichText field={slice.primary.title} />
      </span>

      <PrismicRichText field={slice.primary.description} />
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {slice?.items?.map((item, i) => (
        <PrismicLink
          key={"destino" + item.principal_text + i}
          field={item.link}
          className="shadow-indigo-100 block max-w-md rounded-lg p-4 shadow-sm"
        >
          <Image
            src={item?.image?.url}
            alt={item?.image?.alt}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-sm text-gray-500">$240,000</dd>
              </div>

              <div>
                <dt className="sr-only">Address</dt>

                <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="text-indigo-700 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Parking</p>

                  <p className="font-medium">2 spaces</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="text-indigo-700 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Bathroom</p>

                  <p className="font-medium">2 rooms</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="text-indigo-700 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Bedroom</p>

                  <p className="font-medium">4 rooms</p>
                </div>
              </div>
            </div>
          </div>
        </PrismicLink>
      ))}
    </div>
  </Bounded>
);

export default ProductCardWithPrice;
