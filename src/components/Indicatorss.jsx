import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SBtn from "./shapes/SBtn";
import Indicator from "./icons/Indicator";
import OilIndicator from "./icons/OilIndicator";
import Fuel from "./icons/Fuel";
import Key from "./icons/Key";
import Pedal from "./shapes/Pedal";

const Indicatorss = ({
  isEngineOn,
  onEngineToggle,
  fuelIndicatorActive,
  oilIndicatorActive,
  startAccelerate,
  stopAccelerate,
  startBrake,
  stopBrake,
  isAccelerating,
  isBraking,
  topUpFuel,
  topUpOil,
  onSignalSound,
  offSignalSound,
}) => {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  function handleLeft() {
    if (!isEngineOn) return;
    const newState = !leftActive;

    setLeftActive(newState);
    setRightActive(false);
    newState ? onSignalSound() : offSignalSound();
  }
  function handleRight() {
    if (!isEngineOn) return;
    const newState = !rightActive;
    setRightActive(newState);
    setLeftActive(false);
    newState ? onSignalSound() : offSignalSound(); // 👈 play/stop on toggle
  }
  return (
    <div className="w-full h-fit flex flex-col gap-4  z-20  absolute bottom-32">
      <div className="absolute z-10 w-3/4 h-full  px-4 left-1/2 top-0  -translate-x-1/2 flex justify-between items-center">
        {/* Brake pedal */}
        <AnimatePresence>
          {isEngineOn && (
            <motion.button
              key="brake"
              className="flex flex-col items-center bg-transparent border-none outline-none mb-36"
              onPointerDown={startBrake}
              onPointerUp={stopBrake} // 👈 was missing
              onPointerLeave={stopBrake}
              initial={{ opacity: 0, y: 20 }} // 👈 starts invisible below
              animate={{ opacity: 1, y: 0 }} // 👈 slides up into place
              exit={{ opacity: 0, y: 20 }} // 👈 slides back down on exit
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Pedal type="brake" isPressed={isBraking} />
            </motion.button>
          )}
        </AnimatePresence>
        <button
          onClick={onEngineToggle}
          className={` ${isEngineOn ? "bg-rb-active" : "bg-engine-switch"}  border border-solid border-[rgba(77,157,224,0.5)] shadow-switch rounded-full   flex justify-center items-center w-20 h-20 absolute left-1/2 bottom-1/2  -translate-x-1/2`}
        >
          <Key isActive={isEngineOn} />
        </button>

        {/* Gas pedal */}
        <AnimatePresence>
          {isEngineOn && (
            <motion.button
              key="gas"
              className="flex flex-col items-center bg-transparent border-none outline-none mb-36"
              initial={{ opacity: 0, y: 20 }}
              onPointerDown={startAccelerate}
              onPointerUp={stopAccelerate} // 👈 was missing
              onPointerLeave={stopAccelerate}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }} // 👈 slight delay so gas appears after brake
            >
              <Pedal type="gas" isPressed={isAccelerating} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className=" px-4 w-full h-fit flex  justify-between items-center">
        <SBtn
          icon={<OilIndicator isActive={oilIndicatorActive} />}
          isActive={false}
          onClick={topUpOil}
        />
        <SBtn
          icon={<Fuel isActive={fuelIndicatorActive} />}
          isActive={false}
          onClick={topUpFuel}
        />
      </div>
      <div className=" px-9 w-full h-fit flex justify-between items-center z-20">
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
