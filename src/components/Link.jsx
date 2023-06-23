import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage, isDesktop = true }) => {
  const lowerCasePage = page.toLowerCase();
  const desktopStyle = `border-b border-yellow`;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? `text-yellow ${isDesktop && desktopStyle}`
          : "text-white"
      } text-lg hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(!lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
