import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";

const Testimoni = ({
  listTestimoni = [
    {
      name: "iooooooooooh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezñ,py",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robuideuidert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
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
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="flex flex-col rounded-lg border-2 border-gray-500 p-8 transition-all hover:border-teal-500">
              <div className="flex w-full flex-col items-stretch xl:flex-row xl:items-center">
                <div className="order-2 flex xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="ml-5 flex flex-col text-left">
                    <p className="text-lg capitalize text-black-600">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm capitalize text-black-500">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>

                <div className="order-1 ml-auto flex flex-none items-center xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="ml-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="mt-14 flex w-auto flex-none justify-between">
          <div
            className="bg-white mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-teal-500 text-teal-500 transition-all hover:bg-teal-500 hover:text-white-500"
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
            className="bg-white flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-teal-500 text-teal-500 transition-all hover:bg-teal-500 hover:text-white-500"
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
  );
};

export default Testimoni;
