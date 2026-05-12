import React from "react";
import HoodBottom from "./shapes/HoodBottom";
import SBtn from "./shapes/SBtn";
import MBadge from "../assets/Mbadge.png";
const HoodFoot = ({ gear, onGearChange, isEngineOn }) => {
  const gears = ["P", "R", "N", "D"];

  return (
    <div className="w-full fixed bottom-9 h-20  overflow-visible flex  flex-col justify-center items-center ">
      <HoodBottom className="w-full  h-fit absolute " />
      <div className="w-2/4 h-1 bg-blue-header absolute top-0  z-10" />
      <div className="flex justify-center gap-8 w-full items-center  z-10 px-4">
        <img src={MBadge} alt="BMW" className="w-12 h-auto object-cover" />
        <div className="flex justify-center items-center gap-6">
          {gears.map((g, index) => (
            <SBtn
              key={index}
              label={g}
              disabled={!isEngineOn}
              isActive={gear === g}
              onClick={() => onGearChange(g)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoodFoot;
