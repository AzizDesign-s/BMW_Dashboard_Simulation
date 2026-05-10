// src/hooks/useSpeedSweep.js
import { useState, useEffect } from "react";

const useSpeedSweep = (isEngineOn, speed = 0) => {
  const [displaySpeed, setDisplaySpeed] = useState(0);
  const [isSweeping, setIsSweeping] = useState(false);

  useEffect(() => {
    if (!isEngineOn) {
      setDisplaySpeed(0);
      setIsSweeping(false);
      return;
    }

    setIsSweeping(true);

    let current = 0;
    let direction = 1;
    let sweepDone = false;

    const interval = setInterval(() => {
      current += direction * 2;

      if (current >= 220 && !sweepDone) {
        direction = -1;
        sweepDone = true;
      }

      if (current <= 0 && sweepDone) {
        current = 0;
        setIsSweeping(false);
        clearInterval(interval);
      }

      setDisplaySpeed(Math.max(0, Math.min(220, current)));
    }, 16);

    return () => clearInterval(interval);
  }, [isEngineOn]);

  return {
    displaySpeed: isSweeping ? Math.round(displaySpeed) : speed, // 👈 sweep value or real speed
    isSweeping,
  };
};

export default useSpeedSweep;
