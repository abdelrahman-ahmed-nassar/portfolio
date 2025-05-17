import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../../components/Hero/Hero.tsx";
import About from "../About/About";
import SectionDivider from "../UI/SectionDivider";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";

import Transition from "react-transition-group/Transition";

// Replace react-lottie with lottie-react
import Lottie from "lottie-react";

import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import reactAnimation from "../../108680-atoms-lottie-animation.json";

const Preloader = () => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 1000);
  }, []);

  return (
    <>
      <Transition in={!completed} timeout={200} mountOnEnter unmountOnEnter>
        {function (state) {
          return (
            <div
              className="preLoad-container"
              style={{
                transition: "all 0.2s ease-out",
                opacity: state === "exiting" || state === "exited" ? 0 : 1,
                pointerEvents:
                  state === "exiting" || state === "exited"
                    ? "none"
                    : "initial",
              }}
            >
              {/* Replace the old Lottie component with the new implementation */}
              <Lottie
                animationData={reactAnimation}
                style={{ height: 150, width: 150 }}
                loop={true}
                autoplay={true}
              />
            </div>
          );
        }}
      </Transition>

      {completed && (
        <>
          <main>
            <Navbar />
            <div className="nav-replacer"></div>
            <Hero />
            <SectionDivider idName="about" />
            <About />
            <SectionDivider idName="services" />
            <Services />
            <SectionDivider idName="skills" />
            <Skills />
            <SectionDivider idName="projects" />
            <Projects />
            <SectionDivider idName="contact" />
            <Contact />
          </main>
          <div style={{ position: "relative", marginTop: "60vh" }}>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Preloader;
