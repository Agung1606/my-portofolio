import React from 'react'

const SkillCard = ({ urlImg, skillName }) => (
  <div className="p-6 shadow-md shadow-gray-700 rounded-xl hover:scale-105 transition duration-300">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <img
          src={urlImg}
          alt={`${skillName}-icon`}
          width="64px"
          height="64px"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="uppercase font-opensans">{skillName}</h3>
      </div>
    </div>
  </div>
);

export default SkillCard