import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';

const Link = ({page, selectedPage, setSelectedPage, isDesktop=true }) => {
    const lowerCasePage = page.toLowerCase();
    const desktopStyle = `border-b border-yellow`;
    return(
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? `text-yellow ${isDesktop && desktopStyle}` : ""} text-lg  hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(!lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBg = isTopOfPage ? "" : "bg-red";
    return (
        <nav className={`${navbarBg} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h5 className="font-playfair text-3xl font-bold">
                    AS
                </h5>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-12 font-opensans text-sm font-semibold">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
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
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-[#1e3a8a] w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12 text-2xl">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <CgClose />
                            </button>
                        </div>
                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link
                                isDesktop={false} 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                isDesktop={false}   
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                isDesktop={false} 
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                isDesktop={false} 
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                isDesktop={false} 
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>  
        </nav>
    )
}

export default Navbar