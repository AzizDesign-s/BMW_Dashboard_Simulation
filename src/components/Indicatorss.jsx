import React, { useState } from "react";
import SBtn from "./shapes/SBtn";
import Indicator from "./icons/Indicator";
import OilIndicator from "./icons/OilIndicator";
import Fuel from "./icons/Fuel";
import Key from "./icons/Key";

const Indicatorss = ({ isEngineOn, onEngineToggle, fuelIndicatorActive }) => {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  function handleLeft() {
    if (isEngineOn) {
      setLeftActive((prev) => !prev);
    }

    setRightActive(false);
  }
  function handleRight() {
    if (isEngineOn) {
      setRightActive((prev) => !prev);
    }

    setLeftActive(false);
  }
  return (
    <div className="w-full h-fit flex flex-col gap-4  z-20 px-4 absolute bottom-32">
      <button
        onClick={onEngineToggle}
        className={` ${isEngineOn ? "bg-rb-active" : "bg-engine-switch"}  border border-solid border-[rgba(77,157,224,0.5)] shadow-switch rounded-full absolute left-1/2 bottom-1/2  -translate-x-1/2  flex justify-center items-center w-20 h-20`}
      >
        <Key isActive={isEngineOn} />
      </button>
      <div className=" px-4 w-full h-fit flex justify-between items-center">
        <SBtn icon={<OilIndicator isActive={isEngineOn} />} isActive={false} />
        <SBtn icon={<Fuel isActive={fuelIndicatorActive} />} isActive={false} />
      </div>
      <div className=" px-9 w-full h-fit flex justify-between items-center">
        <SBtn
          icon={
            <Indicator
              direction="left"
              color={leftActive ? "#28BA28" : "#121233"}
              stroke={leftActive ? "" : "#1A1A43"}
              isActive={leftActive}
            />
          }
          onClick={handleLeft}
        />
        <SBtn
          icon={
            <Indicator
              direction="right"
              color={rightActive ? "#28BA28" : "#121233"}
              stroke={rightActive ? "" : "#1A1A43"}
              isActive={rightActive}
            />
          }
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default Indicatorss;
