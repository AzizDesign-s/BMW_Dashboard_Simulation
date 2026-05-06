import React, { useEffect, useState } from "react";
import HoodTop from "./shapes/HoodTop";
import WeatherIcon from "./icons/Weather";
import Brand from "../assets/Bmw.png";
import useTime from "./hooks/useTime";
import useTemp from "./hooks/useTemp";

const Header = () => {
  const { time } = useTime("");
  const { temp, city, loading, error } = useTemp();

  const tempDisplay = loading ? "--°C" : error ? "25°C" : `${temp}°C`;

  return (
    <div className="w-full absolute top-0  h-20 overflow-visible flex  flex-col justify-center items-center px-4">
      <HoodTop className="w-full px-4 h-auto absolute" />

      <div className="z-10 px-14 w-full h-full flex justify-between items-center">
        <div className="flex w-fit justify-start items-center gap-1">
          <WeatherIcon />
          <p className="font-helvetica text-sm font-normal text-text-primary">
            {tempDisplay}
          </p>
        </div>
        <img src={Brand} alt="Bmw" className="w-12 h-auto object-cover" />
        <p className="text-text-primary font-helvetica text-sm font-normal uppercase">
          {time}
        </p>
      </div>

      <div className="w-2/4 h-1 bg-blue-header absolute bottom-0  z-10"></div>
    </div>
  );
};

export default Header;
