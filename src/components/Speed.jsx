import React from "react";
import SpeedInfo from "./SpeedInfo";
import Fuel from "./Fuel";
import Rpm from "./Rpm";

const Speed = () => {
  return (
    <div className="w-full h-52  flex justify-between items-center px-4">
      <Fuel />
      <SpeedInfo label={50} />
      <Rpm />
    </div>
  );
};

export default Speed;
