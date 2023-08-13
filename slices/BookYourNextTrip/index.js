import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BookYourNextTripSlice} BookYourNextTripSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BookYourNextTripSlice>} BookYourNextTripProps
 * @param { BookYourNextTripProps }
 */
const BookYourNextTrip = ({ slice }) => (
  <section id="gps" className="py-10">
    <div className="container mx-auto w-full px-6 py-8 text-gray-900 md:py-16 md:px-14 lg:py-24  lg:px-28">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="mb-4 text-left">
            <h5 className="font-bold ">{slice.primary.subtitle}</h5>
            <h3 className="text-2xl font-bold capitalize text-primary-dark md:text-4xl lg:text-6xl">
              {slice.primary.title}
            </h3>
          </div>
          <div className="mb-5 flex items-start">
            <div className="mr-4 rounded-md bg-secondary-dark p-3">
              <img src="assets/steps/selection.svg" width="22" alt="steps" />
            </div>
            <div className="flex-1">
              <h5 className="text-lg font-bold">{slice.primary.paso1}</h5>
              <p>{slice.primary.texto1}</p>
            </div>
          </div>
          <div className="mb-5 flex items-start">
            <div className="mr-4 rounded-md bg-secondary-dark p-3">
              <img src="assets/steps/water-sport.svg" width="22" alt="steps" />
            </div>
            <div className="flex-1">
              <h5 className="text-lg  font-bold">{slice.primary.paso2}</h5>
              <p>{slice.primary.texto2}</p>
            </div>
          </div>
          <div className="mb-5 flex items-start">
            <div className="mr-4 rounded-md bg-secondary-dark p-3">
              <img src="assets/steps/taxi.svg" width="22" alt="steps" />
            </div>
            <div className="flex-1">
              <h5 className="text-lg  font-bold">{slice.primary.paso3}</h5>
              <p>{slice.primary.texto3}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-center lg:w-1/2">
          <div className="card relative max-w-sm shadow">
            <div className="absolute -top-32 right-0 z-[-1] mr-10 lg:top-[-210px]">
              <img
                src="assets/steps/bg.png"
                style={{ maxWidth: "550px" }}
                alt="shape"
              />
            </div>
            <div className="w-full rounded-2xl bg-white p-3">
              <img
                className="mb-4 mt-2 w-full rounded-2xl"
                src={
                  slice.primary.cardimage.url || "assets/steps/booking-img.jpg"
                }
                alt="booking"
              />
              <div>
                <h5 className="font-medium">{slice.primary.cardtitle}</h5>
                <p className="mb-3 text-xs font-medium">
                  {slice.primary.cardsubtitle}
                </p>
                <div className="icon-group mb-4 flex w-1/2 justify-around">
                  <span className="btn icon-item">
                    <img src="assets/steps/leaf.svg" alt="" />{" "}
                  </span>
                  <span className="btn icon-item">
                    <img src="assets/steps/map.svg" alt="" />
                  </span>
                  <span className="btn icon-item">
                    <img src="assets/steps/send.svg" alt="" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="-mt-1 flex items-center">
                    <span className="text-xs font-medium">RESERVA YA</span>
                  </div>
                  <div className="relative">
                    <div className="btn">
                      <img src="assets/steps/heart.svg" width="20" alt="step" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BookYourNextTrip;
