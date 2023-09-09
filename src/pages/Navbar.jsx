import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "../components";

const navoptions = [
  {
    id: 1,
    page: "Home",
  },
  {
    id: 2,
    page: "About Me",
  },
  {
    id: 3,
    page: "Skills",
  },
  {
    id: 4,
    page: "Projects",
  },
  {
    id: 5,
    page: "Contact",
  },
];

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const mobileNavStyle = isMenuToggled
    ? `fixed left-0 bottom-0 h-full w-[300px] bg-[#1e3a8a] ease-in duration-500`
    : `fixed left-[-100%] bottom-0 h-full w-[300px] ease-in duration-500`;
  return (
    <nav className={`${!isTopOfPage && "bg-red"} z-40 w-full fixed top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h5 className="font-playfair text-3xl font-bold">
          <TypeAnimation
            sequence={["Agung", 2000, "Hello :)", 2000]}
            speed={50}
            repeat={Infinity}
          />
        </h5>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-12 font-opensans text-sm font-semibold">
            {navoptions.map((item) => (
              <Link
                key={item.id}
                page={item.page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2 text-2xl"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <AiOutlineMenu />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && (
          <div className={mobileNavStyle}>
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12 text-2xl">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <CgClose />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {navoptions.map((item) => (
                <Link
                  key={item.id}
                  isDesktop={false}
                  page={item.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
