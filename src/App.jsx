import { useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineMail,
} from "react-icons/ai";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologie from "./components/Technologie";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  const [active, setActive] = useState("home");
  const handleIconClick = (icon) => {
    setActive(icon);
    console.log(`Navigated to ${icon}`);

    const sectionId = `${icon}-section`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-teal-600 selection:text-neutral-50">
        {/* Background Gradient */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
              bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          ></div>
        </div>

        {/* Sections with IDs for scrolling */}
        <div id="home-section" className="container mx-auto px-8">
          <Navbar />
          <Hero />
        </div>
        <div id="book-section" className="container mx-auto px-8">
          <About />
        </div>
        <div id="bulb-section" className="container mx-auto px-8">
          <Technologie />
          <Experience />
          <Project />
        </div>
        <div id="contact-section" className="container mx-auto px-8">
          <Resume />
          <Contact />
        </div>

        {/* Vertical Navigation Bar */}
        <div className="fixed top-1/2 left-2 -translate-y-1/2 bg-neutral-800 rounded-full p-3 flex flex-col gap-4 shadow-lg">
          <div
            className={`nav-icon ${active === "home" ? "active" : ""}`}
            onClick={() => handleIconClick("home")}
          >
            <AiOutlineHome size={24} />
          </div>
          <div
            className={`nav-icon ${active === "book" ? "active" : ""}`}
            onClick={() => handleIconClick("book")}
          >
            <AiOutlineBook size={24} />
          </div>
          <div
            className={`nav-icon ${active === "bulb" ? "active" : ""}`}
            onClick={() => handleIconClick("bulb")}
          >
            <AiOutlineBulb size={24} />
          </div>
          <div
            className={`nav-icon ${active === "contact" ? "active" : ""}`}
            onClick={() => handleIconClick("contact")}
          >
            <AiOutlineMail size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
