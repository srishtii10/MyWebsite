import React, { useState, useEffect } from "react";
import Capsule from "./Capsule";

const Skills = () => {
  const arr = [
    "JAVA",
    "DSA",
    "Problem Solving",
    "JavaScript",
    "NodeJS",
    "MongoDB",
    "ReactJS",
    "NextJS",
    "MySQL",
    "CSS",
    "HTML",
    "ExpressJS",
    "Tailwind",
    "Bootstrap",
    "C/C++",
  ];
  const [skills, setSkills] = useState(arr);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-section");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Trigger animation when in view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="skills-section" className="mt-32 w-full">
        <div
          style={{ color: "rgb(179, 40, 108)" }}
          className="sm:w-3/4 w-5/6 mx-auto"
        >
          <h1
            className={`tracking-wide font-semibold text-lg transition-transform duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            WHAT I DO
          </h1>
          <h1
            style={{ fontFamily: "Morganite" }}
            className={`tracking-wider text-8xl transition-transform duration-1000 ease-out delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            SKILLS
          </h1>
        </div>

        <div className="p-2 w-3/4 mx-auto flex flex-wrap gap-2 justify-center">
          {skills.map((item, index) => (
            <Capsule skill={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
