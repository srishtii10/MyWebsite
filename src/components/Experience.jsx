import React, { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";

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
        <>
          <ExperienceCard
            location="Bengaluru (Hybrid)"
            duration="Jan 2025 - Present"
            title="Full Stack Developer Intern"
            company="CAST Software"
            points={[
              "Took complete ownership of developing and delivering major frontend features, including the Pathfinder module - a complex functionality that visualizes paths between nodes on the application graph.",
              "Designed and implemented the UI as per product specifications, enabling users to select source and target nodes through modals and dynamically visualize paths based on selected modes (shortest path or all paths).",
              "Managed complex state interactions using Redux and Redux-Saga, leveraging generator and watcher functions to handle asynchronous API calls and real-time UI updates.",
              "Implemented multiple dialog boxes to handle API failures, timeouts, and dynamic path adjustments, ensuring a seamless user experience.",
              "Improved app performance by 20% by optimizing OGMA-based features and removing redundant logic.",
              "Built and maintained scalable frontend features using React and Redux, enhancing responsiveness and maintainability.",
              "Took ownership of Cypress API testing, developing and executing automated backend validation suites for critical workflows.",
              "Reduced frontend bugs by 30% and increased overall test coverage by 25% through comprehensive unit and integration tests using React Testing Library and Enzyme.",
              "Collaborated closely with backend developers, QA, and designers to ensure smooth sprint execution, timely delivery, and adherence to design goals.",
              "Tech Stack: React, Redux, Redux-Saga, JavaScript, OGMA, Cypress, Enzyme, React Testing Library, Jira, GitLab.",
            ]}
            skills={[
              "ReactJS",
              "Redux",
              "Redux-Saga",
              "Ogma",
              "Cypress",
              "JIRA",
              "JavaScript",
              "Performance Optimization",
            ]}
          />

          <ExperienceCard
            location="Remote"
            duration="Jan 2024 - April 2024"
            title="Teaching Assistant"
            company="Coding Ninjas"
            description="Mentored over 280+ students, enhancing their understanding of Java programming and Data Structures & Algorithms. Assisted them in identifying and fixing bugs in their code, fostering their problem-solving skills and coding proficiency. This experience improved my communication skills by effectively explaining complex concepts to students."
            skills={["Java", "DSA", "Mentorship", "Communication"]}
          />
        </>
      </div>
    </>
  );
};

export default Experience;
