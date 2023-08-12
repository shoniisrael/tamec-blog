import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const NavItem = ({ children }) => {
  return (
    <li className="py-auto flex h-16 items-center justify-center font-semibold tracking-tight text-gray-800 hover:text-primary">
      {children}
    </li>
  );
};

export const Header = ({ navigation, settings }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="h-16">
      <nav
        id="headerNav"
        className={` z-10 ${
          isScrolled ? "sticky-shadow shadow" : ""
        } fixed top-0 left-0 right-0 border-gray-200 bg-primary-50 px-4
          py-2  transition duration-300 lg:px-6`}
      >
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between">
          <PrismicLink href="/" className="flex h-16 w-48 items-center">
            <Image
              src="/assets/logo.webp"
              width={"192"}
              height={"40"}
              className="mr-3 h-auto w-48"
              alt="Tamec Logo"
            />
          </PrismicLink>
          <div
            className=" h-16 w-full items-center justify-between md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex h-16 flex-col font-medium md:flex-row md:space-x-8">
              <NavItem>
                <PrismicLink href="/">
                  <PrismicText field={navigation.data.homepageLabel} />
                </PrismicLink>
              </NavItem>
              <NavItem>
                <PrismicLink href="/#nosotros">Sobre Nosotros</PrismicLink>
              </NavItem>
              <NavItem>
                <PrismicLink href="/#servicios">Servicios</PrismicLink>
              </NavItem>
              <NavItem>
                <PrismicLink href="/#visas">Visas</PrismicLink>
              </NavItem>
              <NavItem>
                <PrismicLink href="/#gps">Galapagos</PrismicLink>
              </NavItem>
              {navigation.data?.links.map((item) => (
                <NavItem key={prismicH.asText(item.label)}>
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
