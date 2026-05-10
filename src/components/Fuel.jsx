import React from "react";
import { motion } from "framer-motion";

const Fuel = ({ isEngineOn = false, fuelLevel }) => {
  const fuelHeight = isEngineOn ? fuelLevel : 0;
  const isLow = fuelLevel < 20;
  return (
    <div className="inline-flex h-40 w-fit items-end gap-2">
      {/* <div className="w-4 h-full bg-fuel-gradient rounded-[40px_40px_0_0]" /> */}
      <div className="w-4 h-full bg-bluee-nonActiveStroke rounded-[40px_40px_0_0] overflow-hidden relative">
        {/* Fill level - grows from bottom */}
        <motion.div
          className="absolute bottom-0 w-full  bg-fuel-gradient transition-all duration-1000 ease-out"
          initial={{ height: "0%" }}
          animate={{ height: `${fuelHeight}%` }}
          transition={{
            duration: fuelHeight === 0 ? 0.5 : 0.15, // 👈 fast on drain, smooth on fill
            ease: "linear", // 👈 linear so each drop is visible immediately
          }}
          style={{
            borderRadius: fuelHeight > 90 ? "40px 40px 0 0" : "0",
          }}
        />

        {/* Low warning flash */}
        {isLow && isEngineOn && (
          <motion.div
            className="absolute inset-0 bg-red-500 opacity-20"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 0.8, repeat: Infinity }} // 👈 pulse when low
          />
        )}
      </div>
      <div className="w-fit h-full  flex flex-col justify-between items-center">
        <p className="font-helvetica text-text-primary text-base font-normal">
          1
        </p>
        <p className="font-helvetica text-text-secondary text-base font-normal">
          1/2
        </p>
        <motion.p
          className="font-helvetica text-base font-normal"
          animate={{ color: isLow && isEngineOn ? "#FF4444" : "" }}
          transition={{ duration: 0.3 }}
        >
          0
        </motion.p>
      </div>
      <p className="-rotate-90 w-2  text-text-secondary text-xs font-normal font-pirulen">
        fuel
      </p>
    </div>
  );
};

export default Fuel;
