import { useState, useEffect, useRef } from "react";

const useOil = (isEngineOn, speed) => {
  // 👈 accept speed
  const [oilLevel, setOilLevel] = useState(0);
  const [oilIndicatorActive, setOilIndicatorActive] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const oilLevelRef = useRef(0); // 👈 was useState, must be useRef
  const startupDoneRef = useRef(false); // 👈 was useState, must be useRef
  const isFullRef = useRef(false);

  // Keep ref in sync
  useEffect(() => {
    oilLevelRef.current = oilLevel;
  }, [oilLevel]);

  // Startup fill — fills once then stops
  useEffect(() => {
    if (!isEngineOn) {
      setOilLevel(0);
      setIsEmpty(false);
      isFullRef.current = false; // 👈 reset for next engine start
      return;
    }

    const fillInterval = setInterval(() => {
      if (isFullRef.current) {
        clearInterval(fillInterval);
        return;
      }
      setOilLevel((prev) => {
        if (prev >= 100) {
          isFullRef.current = true;
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(fillInterval);
  }, [isEngineOn]);

  // Drain — only when speed is above 100
  useEffect(() => {
    if (!isEngineOn) return;
    if (speed <= 100) return; // 👈 only drain above 100 km/h

    const drainInterval = setInterval(() => {
      setOilLevel((prev) => {
        const newLevel = parseFloat((prev - 0.5).toFixed(2)); // 👈 drain rate
        if (newLevel <= 0) {
          setIsEmpty(true);
          return 0;
        }
        setIsEmpty(false);
        return newLevel;
      });
    }, 100);

    return () => clearInterval(drainInterval); // 👈 stops when speed drops below 100
  }, [isEngineOn, speed > 100]); // 👈 re-runs when crosses 100 threshold

  // 5s startup indicator
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

  // Top up oil
  const topUpOil = () => {
    setOilLevel(100);
    setIsEmpty(false);
    isFullRef.current = true;
    oilLevelRef.current = 100;
  };

  return { oilLevel, oilIndicatorActive, isEmpty, topUpOil };
};

export default useOil;
