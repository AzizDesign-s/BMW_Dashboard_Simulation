import React from "react";

const SpeedInfo = ({ label = 46 }) => {
  return (
    <div className="w-56 h-56 flex justify-center items-center bg-bluee-nonActiveStroke rounded-full">
      <div className="flex flex-col gap-4 items-center ">
        <h1 className="text-text-primary  text-center font-pirulen text-7xl font-bold">
          {label}
        </h1>
        <p className="font-helvetica text-xl text-center font-normal text-text-secondary">
          Km/h
        </p>
      </div>
    </div>
  );
};

export default SpeedInfo;
