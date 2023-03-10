import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "./Heading";
import Image from "next/image";

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <PrismicLink href="/" tabIndex="-1">
          <div className="bg-slate-300 relative h-40 w-40 overflow-hidden rounded-full">
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                fill={true}
                className="object-cover"
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-2 text-center">
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className="text-slate-500 font-sans text-2xl italic leading-normal tracking-tight">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="text-slate-800 font-semibold tracking-tight">{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = false,
  navigation,
  settings,
}) => {
  return (
    <header>
      <nav className="border-gray-200 dark:bg-gray-800 bg-zinc-50 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between">
          <PrismicLink href="/" className="flex items-center">
            <Image
              src="/assets/logo.webp"
              width={"100"}
              height={"100"}
              className="mr-3 h-6 sm:h-9"
              alt="Tamec Logo"
            />
          </PrismicLink>
          <div
            className=" w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8">
              <NavItem>
                <PrismicLink href="/">
                  <PrismicText field={navigation.data.homepageLabel} />
                </PrismicLink>
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
