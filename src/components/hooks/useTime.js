import React, { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "AM" : "PM";

      hours = hours % 12 || 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      setTime(hours + ":" + minutes + " " + ampm);
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);
  return { time };
};

export default useTime;
