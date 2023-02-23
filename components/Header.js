import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <PrismicLink href="/" tabIndex="-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
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
              <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
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
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = false,
  navigation,
  settings,
}) => {
  return (
    // <Bounded as="header">
    //   <div className="grid grid-cols-1 justify-items-center gap-20">
    //     <nav>
    //       <ul className="flex flex-wrap justify-center gap-10">
    //         <NavItem>
    //           <PrismicLink href="/">
    //             <PrismicText field={navigation.data.homepageLabel} />
    //           </PrismicLink>
    //         </NavItem>
    //         {navigation.data?.links.map((item) => (
    //           <NavItem key={prismicH.asText(item.label)}>
    //             <PrismicLink field={item.link}>
    //               <PrismicText field={item.label} />
    //             </PrismicLink>
    //           </NavItem>
    //         ))}
    //       </ul>
    //     </nav>
    //     {withProfile && (
    //       <Profile
    //         name={settings.data.name}
    //         description={settings.data.description}
    //         profilePicture={settings.data.profilePicture}
    //       />
    //     )}
    //     {withDivider && <HorizontalDivider />}
    //   </div>
    // </Bounded>
    <header>
      <nav className="bg-zinc-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <PrismicLink href="/" className="flex items-center">
            <img src="/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Tamec Logo" />
          </PrismicLink>

          {/*<div className="flex items-center lg:order-2">*/}
          {/*  <a href="#"*/}
          {/*     className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log*/}
          {/*    in</a>*/}
          {/*  <a href="#"*/}
          {/*     className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get*/}
          {/*    started</a>*/}
          {/*  <button data-collapse-toggle="mobile-menu-2" type="button"*/}
          {/*          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
          {/*          aria-controls="mobile-menu-2" aria-expanded="false">*/}
          {/*    <span className="sr-only">Open main menu</span>*/}
          {/*    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
          {/*      <path fill-rule="evenodd"*/}
          {/*            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
          {/*            clip-rule="evenodd"></path>*/}
          {/*    </svg>*/}
          {/*    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
          {/*         xmlns="http://www.w3.org/2000/svg">*/}
          {/*      <path fill-rule="evenodd"*/}
          {/*            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
          {/*            clip-rule="evenodd"></path>*/}
          {/*    </svg>*/}
          {/*  </button>*/}
          {/*</div>*/}
          <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">

            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
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
