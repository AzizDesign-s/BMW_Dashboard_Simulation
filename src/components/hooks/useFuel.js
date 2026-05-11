import { useEffect, useState, useRef } from "react";

const useFuel = (isEngineOn, isAcceleratingRef) => {
  const [fuelLevel, setFuelLevel] = useState(0);
  const [fuelIndicatorActive, setFuelIndicatorActive] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const fuelLevelRef = useRef(0);
  const startupDoneRef = useRef(false);
  const isFullRef = useRef(false); // 👈 track if initial fill is done

  // Keep ref in sync
  useEffect(() => {
    fuelLevelRef.current = fuelLevel;
  }, [fuelLevel]);

  // Startup fill — only fills once until full, then stops
  useEffect(() => {
    if (!isEngineOn) {
      setFuelLevel(0);
      setIsEmpty(false);
      isFullRef.current = false; // 👈 reset so next engine start fills again
      return;
    }

    // Fill up on engine start
    const fillInterval = setInterval(() => {
      if (isFullRef.current) {
        clearInterval(fillInterval); // 👈 stop once full
        return;
      }
      setFuelLevel((prev) => {
        if (prev >= 100) {
          isFullRef.current = true; // 👈 mark as full, stop filling
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(fillInterval);
  }, [isEngineOn]);

  // Drain only — separate from fill, never refills
  useEffect(() => {
    if (!isEngineOn) return;

    const drainInterval = setInterval(() => {
      if (!isAcceleratingRef.current) return; // 👈 only drain when accelerating

      setFuelLevel((prev) => {
        const newLevel = parseFloat((prev - 2).toFixed(2));
        if (newLevel <= 0) {
          setIsEmpty(true);
          return 0;
        }
        setIsEmpty(false);
        return newLevel;
      });
    }, 100);

    return () => clearInterval(drainInterval);
  }, [isEngineOn]);

  // 5s startup indicator
  useEffect(() => {
    if (isEngineOn) {
      startupDoneRef.current = false;
      setFuelIndicatorActive(true);
      const timer = setTimeout(() => {
        startupDoneRef.current = true;
        setFuelIndicatorActive(fuelLevelRef.current <= 20);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      startupDoneRef.current = false;
      setFuelIndicatorActive(false);
    }
  }, [isEngineOn]);

  // Live threshold check after startup window
  useEffect(() => {
    if (!isEngineOn || !startupDoneRef.current) return;
    setFuelIndicatorActive(fuelLevel <= 20);
  }, [fuelLevel, isEngineOn]);

  const topUpFuel = () => {
    setFuelLevel(100);
    setIsEmpty(false);
    isFullRef.current = true; // 👈 mark as full so fill interval doesn't restart
    fuelLevelRef.current = 100;
  };

  return { fuelLevel, fuelIndicatorActive, isEmpty, topUpFuel };
};

export default useFuel;
