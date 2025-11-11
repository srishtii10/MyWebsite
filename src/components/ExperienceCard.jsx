import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ExperienceCard = ({
  location,
  duration,
  title,
  company,
  description,
  points,
  skills,
}) => {
  return (
    <div className="w-full">
      <div className="w-3/4 flex mx-auto m-4">
        {/* Left side */}
        <div
          style={{ color: "rgb(186, 40, 118)" }}
          className="h-full text-right p-1 py-4 sm:p-4 font-semibold sm:w-[30%] w-[20%]"
        >
          <h1 className="sm:text-lg text-md">
            <i>{location}</i>
          </h1>
          <h1 className="sm:text-xl text-lg">
            <i>{duration}</i>
          </h1>
        </div>

        {/* Right side */}
        <div
          style={{ color: "rgb(186, 40, 118)" }}
          className="h-full sm:w-[65%] w-[80%] py-4 sm:px-7 px-4"
        >
          <h1 className="font-bold text-2xl">
            {title} - {company}
          </h1>

          {/* Description or bullet points */}
          {points && points.length > 0 ? (
            <ul className="list-disc pl-6 mt-4 space-y-2 text-md font-semibold">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-md font-semibold whitespace-pre-line">
              {description}
            </p>
          )}

          {/* Skills */}
          <div className="flex flex-wrap gap-x-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-xl mt-4 flex flex-wrap">
                <div className="flex mr-1 pt-1">
                  <FaCircleCheck />
                </div>
                <div className="text-xl font-semibold">
                  <h1>
                    <i>{skill}</i>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
