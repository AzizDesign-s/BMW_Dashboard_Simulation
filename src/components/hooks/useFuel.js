import { useEffect, useState, useRef } from "react";

const useFuel = (isEngineOn) => {
  const [fuelLevel, setFuelLevel] = useState(0);
  const [fuelIndicatorActive, setFuelIndicatorActive] = useState(false);
  const fuelLevelRef = useRef(0);
  const startupDoneRef = useRef(false);
  // Keep ref in sync
  useEffect(() => {
    fuelLevelRef.current = fuelLevel;
  }, [fuelLevel]);

  // Fuel bar fill/empty
  useEffect(() => {
    let interval;
    if (isEngineOn) {
      interval = setInterval(() => {
        setFuelLevel((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 20);
    } else {
      setFuelLevel(0);
    }
    return () => clearInterval(interval);
  }, [isEngineOn]);

  // 5s startup indicator + threshold
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

  return { fuelLevel, fuelIndicatorActive };
};

export default useFuel;
