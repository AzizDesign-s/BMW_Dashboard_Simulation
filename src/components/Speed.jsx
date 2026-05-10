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
  return (
    <div className="w-full h-52  flex justify-between items-center px-4">
      <Fuel isEngineOn={isEngineOn} fuelLevel={fuelLevel} />
      {/* Top up button — only show when engine is on */}
      {isEngineOn && (
        <motion.button
          onClick={topUpFuel}
          className={`font-pirulen text-xs tracking-widest px-3 py-1 rounded-full border transition-colors ${
            isEmpty
              ? "border-red-500 text-red-400 animate-pulse" // 👈 pulse red when empty
              : "border-bmw-accent text-bmw-accent"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {isEmpty ? "⚠ REFUEL" : "REFUEL"}
        </motion.button>
      )}
      <SpeedInfo speed={speed} isEngineOn={isEngineOn} />
      <Rpm isEngineOn={isEngineOn} level={oilLevel} />
    </div>
  );
};

export default Speed;
