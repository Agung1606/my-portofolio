import React from "react";

const ProjectCard = ({ title, backgroundImg, projectUrl, codeUrl }) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full
                shadow-md shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
    >
      <img
        className="rounded-xl max-h-64 group-hover:opacity-10"
        src={backgroundImg}
        alt={`${title}-img`}
      />
      <div className="hidden w-1/2 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font-playfair font-semibold text-2xl xs:text-4xl xs:tracking-wider text-center mb-3">
          {title}
        </h3>
        <div className="flex justify-center items-center gap-x-3">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="w-1/2 text-center font-playfair rounded-lg bg-deep-blue font-bold text-sm xs:p-1 xs:text-lg cursor-pointer hover:bg-red"
            >
              Visit
            </a>
          )}
          <a
            target="_blank"
            rel="noreferrer"
            href={codeUrl}
            className="w-1/2 text-center font-playfair rounded-lg bg-deep-blue font-bold text-sm  xs:p-1 xs:text-lg cursor-pointer hover:bg-red"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
