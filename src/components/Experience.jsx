import React, { useState, useEffect } from "react";
import Taship from "./Taship";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience-section");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Section is in view, trigger animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="experience-section" className="mt-32 w-full">
        <div
          style={{ color: "rgb(179, 40, 108)" }}
          className="sm:w-3/4 w-5/6 mx-auto"
        >
          <h1
            className={`tracking-wide font-semibold text-xl transition-transform duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            WHAT I'VE LEARNT
          </h1>
          <h1
            style={{ fontFamily: "Morganite" }}
            className={`tracking-wider text-8xl transition-transform duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            EXPERIENCES
          </h1>
        </div>
        <Taship />
      </div>
    </>
  );
};

export default Experience;
