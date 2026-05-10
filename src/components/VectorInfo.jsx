import React from "react";
import { motion } from "framer-motion";
import car from "../assets/Car.png";

const VectorInfo = ({ speed = 80 }) => {
  const isOverSpeed = speed > 80;
  return (
    <div className="w-full h-96  absolute top-0 z-10 ">
      {/* Speed badge */}
      <motion.div
        className="absolute left-1/2 top-0  -translate-x-1/2 z-20 w-20 h-20 rounded-full border border-solid flex items-center justify-center bg-transparent mt-4 "
        animate={
          isOverSpeed
            ? {
                borderColor: ["#FF0000", "#FF000000", "#FF0000"], // 👈 border blinks
                boxShadow: [
                  "0 0 10px rgba(255,0,0,0.8)",
                  "0 0 0px rgba(255,0,0,0)",
                  "0 0 10px rgba(255,0,0,0.8)",
                ],
              }
            : {
                borderColor: "#EF4444", // 👈 normal red border
                boxShadow: "none",
              }
        }
        transition={{
          duration: 0.5,
          repeat: isOverSpeed ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="text-white text-3xl font-bold font-helvetica"
          animate={{ color: isOverSpeed ? "#FF0000" : "#FFFFFF" }} // 👈 number turns red too
          transition={{ duration: 0.3 }}
        >
          {speed}
        </motion.span>
      </motion.div>

      <div className="absolute w-full h-full inset-0 ">
        <img
          src={car}
          alt="BMW"
          className="object-cover w-40 h-auto absolute left-1/2 top-24  -translate-x-1/2 z-20"
        />
        <div className="w-20 h-20 bg-bluee-primary blur-3xl z-10 absolute left-1/2 top-36  -translate-x-1/2" />
        <div
          className="w-[278px] h-[58px] bg-bluee-darkBlueBg z-10 absolute left-1/2 top-16  -translate-x-1/2 blur-lg
         rounded-full"
        />

        <div
          className="w-full h-28 bg-bluee-darkBlueBg z-10 absolute left-1/2 top-96  -translate-x-1/2 blur-lg
         rounded-full"
        />
        <svg
          className="left-1/2 top-24  -translate-x-1/2 absolute"
          xmlns="http://www.w3.org/2000/svg"
          width="274"
          height="361"
          viewBox="0 0 274 361"
          fill="none"
        >
          <path
            d="M215.481 0.0795898L273.481 360.08M206.482 0.0876395L258.482 360.088M197.483 0.0943914L244.483 360.094M188.484 0.101179L230.484 360.101M170.485 0.113478L203.485 360.113M161.486 0.121725L188.486 360.122M152.487 0.134151L170.487 360.134M58.4937 0.0795898L0.493652 360.08M67.4924 0.0876395L15.4924 360.088M76.4915 0.0943914L29.4915 360.094M85.4907 0.101179L43.4907 360.101M103.489 0.113478L70.4894 360.113M112.489 0.121725L85.4887 360.122M121.488 0.134151L103.488 360.134"
            stroke="#3267D9"
            stroke-opacity="0.4"
          />
        </svg>
        <svg
          className="left-1/2 top-24  -translate-x-1/2 absolute"
          xmlns="http://www.w3.org/2000/svg"
          width="162"
          height="361"
          viewBox="0 0 162 361"
          fill="none"
        >
          <path
            d="M123.492 0.0524902L161.492 360.052M38.4971 0.0524902L0.49707 360.052"
            stroke="#E22718"
            stroke-opacity="0.6"
          />
        </svg>
        <svg
          className="left-1/2 top-24  -translate-x-1/2 absolute"
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="362"
          viewBox="0 0 38 362"
          fill="none"
        >
          <path d="M13 0H25L38 362H0L13 0Z" fill="#3267D9" fill-opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default VectorInfo;
