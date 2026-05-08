import React from "react";

const Fuel = ({ isEngineOn = false, level = 0 }) => {
  const fuelHeight = isEngineOn ? level : 0;
  return (
    <div className="inline-flex h-40 w-fit items-end gap-2">
      {/* <div className="w-4 h-full bg-fuel-gradient rounded-[40px_40px_0_0]" /> */}
      <div className="w-4 h-full bg-bluee-nonActiveStroke rounded-[40px_40px_0_0] overflow-hidden relative">
        {/* Fill level - grows from bottom */}
        <div
          className="absolute bottom-0 w-full  bg-fuel-gradient transition-all duration-1000 ease-out"
          style={{ height: `${fuelHeight}%` }}
        />
      </div>
      <div className="w-fit h-full  flex flex-col justify-between items-center">
        <p className="font-helvetica text-text-primary text-base font-normal">
          1
        </p>
        <p className="font-helvetica text-text-secondary text-base font-normal">
          1/2
        </p>
        <p className="font-helvetica text-redd-primary text-base font-normal">
          0
        </p>
      </div>
      <p className="-rotate-90 w-2  text-text-secondary text-xs font-normal font-pirulen">
        fuel
      </p>
    </div>
  );
};

export default Fuel;
