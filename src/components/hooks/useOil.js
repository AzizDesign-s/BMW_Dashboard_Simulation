import { useState, useEffect, useRef } from "react";

const useOil = (isEngineOn) => {
  const [oilLevel, setOilLevel] = useState(0);
  const [oilIndicatorActive, setOilIndicatorActive] = useState(false);
  const oilLevelRef = useState(0);
  const startupDoneRef = useState(false);

  // Keep ref in sync

  useEffect(() => {
    oilLevelRef.current = oilLevel;
  }, [oilLevel]);

  // Oil bar fill/empty

  useEffect(() => {
    let interval;
    if (isEngineOn) {
      interval = setInterval(() => {
        setOilLevel((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 30);
    } else {
      setOilLevel(0);
    }
    return () => clearInterval(interval);
  }, [isEngineOn]);

  // 5s startup indicator + threshold

  useEffect(() => {
    if (isEngineOn) {
      startupDoneRef.current = false;
      setOilIndicatorActive(true);

      const timer = setTimeout(() => {
        startupDoneRef.current = true;
        setOilIndicatorActive(oilLevelRef.current < 20);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      startupDoneRef.current = false;
      setOilIndicatorActive(false);
    }
  }, [isEngineOn]);

  // Live threshold check after startup window

  useEffect(() => {
    if (!isEngineOn || !startupDoneRef.current) return;
    setOilIndicatorActive(oilLevel < 20);
  }, [oilLevel, isEngineOn]);
  return { oilLevel, oilIndicatorActive };
};

export default useOil;
