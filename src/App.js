import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from './components/LineGradient';
import Navbar from "./pages/Navbar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      {/* HOME */}
      <div className="w-5/6 mx-auto min-h-screen md:h-full">
        {isDesktop && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing selectedPage={selectedPage} />
        </motion.div>
      </div>
      <LineGradient />

      {/* ABOUT */}
      <div className="w-5/6 mx-auto min-h-screen">
        <motion.div
          onViewportEnter={() => setSelectedPage('about')}
        >
          <About />
        </motion.div >
      </div>
      <LineGradient />

      {/* MY SKILLS */}
      <div className="w-5/6 mx-auto min-h-screen">
        <motion.div
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <MySkills />
        </motion.div >
      </div>
      <LineGradient />

      {/* PROJECTS */}
      <div className="w-5/6 mx-auto min-h-screen">
          <motion.div
            onViewportEnter={() => setSelectedPage('projects')}
          >
            <Projects />
          </motion.div>
      </div>
      <LineGradient />

      {/* CONTACT */}
      <div className="w-5/6 mx-auto md:h-full">
          <motion.div
            onViewportEnter={() => setSelectedPage('contact')}
          >
            <Contact />
          </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
