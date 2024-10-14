import { useEffect } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    // Set embedded chatbot config
    window.embeddedChatbotConfig = {
      chatbotId: "JnqlXrUnlSBJY_ngfMW-8",
      domain: "www.chatbase.co",
    };

    // Load the chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "JnqlXrUnlSBJY_ngfMW-8");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;

    document.body.appendChild(script);
  }, []); // Run once on component mount

  return (
    <div className="relative min-h-screen">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* New Background Gradient */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          ></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
        </div>
      </div>
    </div>
  );
};

export default App;
