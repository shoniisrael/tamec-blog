import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Clientes Satisfechos",
      number: "+2000",
      icon: "assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Destinos Turísticos",
      number: "+300",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
    {
      name: "Atención Personalizada",
      number: "24/7",
      icon: "/assets/Icon/gridicons_location.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-0 " id="about">
      <div className="relative flex w-full">
        <ScrollAnimationWrapper className="bg-white z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg sm:grid-flow-row sm:grid-cols-3 sm:divide-y-0 sm:divide-x-2">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="mx-auto flex w-8/12 items-center justify-start py-4 px-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="mx-auto flex w-40 sm:w-auto">
                <div className="bg-cyan-100 mr-6 flex h-12 w-12 items-center justify-center rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black-600">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero;
