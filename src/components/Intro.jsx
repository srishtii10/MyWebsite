import React, { useState, useEffect } from "react";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility to true after a small delay to trigger the animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay ensures the animation is noticeable

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      <div id="intro-section" className="mt-32 w-full">
        <div
          style={{ color: "rgb(179, 40, 108)" }}
          className="sm:w-3/4 w-5/6 mx-auto"
        >
          <h1
            className={`tracking-wide font-semibold text-xl transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            INTRODUCTION
          </h1>
          <h1
            style={{ fontFamily: "Morganite" }}
            className={`tracking-wider text-8xl transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            ABOUT ME
          </h1>
          <div className="sm:flex mb-10">
            <div className="w-full h-full">
              <h1 className="font-bold text-3xl mt-3 mb-2 leading-7 text-center">
                Hello there, I'm glad that you're here!
              </h1>
              <p
                style={{ color: "rgb(190 70 130)" }}
                className="sm:w-[55%] w-[90%] text-lg text-center leading-7 font-semibold mx-auto mt-4"
              >
                My name is Srishti and I'm a computer science graduate with a
                strong foundation in software development, data structures, and
                algorithms. Passionate about leveraging coding skills to solve
                real-world problems and continuously learning emerging
                technologies.
              </p>
              <p
                style={{ color: "rgb(190 70 130)" }}
                className="sm:w-[55%] w-[90%] text-lg text-center leading-7 font-semibold mx-auto mt-4"
              >
                Besides this, I have a keen interest in Astrology and Cricket. I
                am a Cricket Maniac!
              </p>
            </div>

            <div className="sm:w-[34%] bg-blue-300 sm:h-72 mx-auto w-[65%] mt-3 h-45 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://github.com/deepanshuxharry/images/blob/main/file.png?raw=true"
                alt=""
              />
            </div>
          </div>

          {/* <div className="mx-auto w-3/5 text-start font-bold text-xl">
            <h1>
              You can view my RESUME{" "}
              <a
                className="underline"
                href="https://drive.google.com/file/d/132Ck-OGZVCNJvIKZmTbRx8edblT-9mxY/view?usp=sharing"
                target="_blank"
              >
                here
              </a>
              .
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Intro;
