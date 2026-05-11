import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpeedInfo from "./SpeedInfo";
import Fuel from "./Fuel";
import Rpm from "./Rpm";

const Speed = ({
  isEngineOn,
  fuelLevel,
  oilLevel,
  speed,
  isEmpty,
  topUpFuel,
}) => {
  // console.log("fuelLevel received in Speed:", fuelLevel);
  return (
    <div className="w-full h-52  flex justify-between items-center px-4">
      <Fuel isEngineOn={isEngineOn} fuelLevel={fuelLevel} />

      <SpeedInfo speed={speed} isEngineOn={isEngineOn} />
      <Rpm isEngineOn={isEngineOn} level={oilLevel} />
    </div>
  );
};

export default Speed;
