import React from "react";
import { motion } from "framer-motion";

const Rpm = ({ isEngineOn = false, level = 0 }) => {
  const fillHeight = isEngineOn ? level : 0;
  const isLow = level < 20;
  return (
    <div className="inline-flex  h-40 w-fit items-end gap-2">
      <p className="-rotate-90 w-2  text-text-secondary text-xs font-normal font-pirulen">
        Oil
      </p>
      <div className="w-fit h-full  flex flex-col justify-between items-center">
        <p className="font-helvetica  text-text-secondary text-base font-normal">
          8
        </p>
        <p className="font-helvetica text-text-primary text-base font-normal">
          4
        </p>
        <motion.p
          className="font-helvetica text-base font-normal"
          animate={{ color: isLow && isEngineOn ? "#FF4444" : "#FFFFFF" }}
          transition={{ duration: 0.3 }}
        >
          0
        </motion.p>
      </div>
      {/* <div className="w-4 h-full bg-fuel-gradient rounded-[40px_40px_0_0]" /> */}
      <div className="w-4 h-full bg-bluee-nonActiveStroke rounded-[40px_40px_0_0] overflow-hidden relative">
        {/* Fill level - grows from bottom */}
        <motion.div
          className="absolute bottom-0 w-full bg-rpm-gradient"
          initial={{ height: "0%" }}
          animate={{ height: `${fillHeight}%` }}
          transition={{ duration: 1, ease: "easeOut" }} // 👈 smooth fill
          style={{
            borderRadius: fillHeight > 90 ? "40px 40px 0 0" : "0",
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
    </div>
  );
};

export default Rpm;
