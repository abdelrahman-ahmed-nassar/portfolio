import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About";
import SectionDivider from "./components/UI/SectionDivider";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";

// Replace react-lottie with lottie-react

import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
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
  );
};

export default App;
