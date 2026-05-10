import { useEffect, useState, useRef } from "react";

const useFuel = (isEngineOn, isAcceleratingRef) => {
  const [fuelLevel, setFuelLevel] = useState(0);
  const [fuelIndicatorActive, setFuelIndicatorActive] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); // 👈 track empty state
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
      setIsEmpty(false);
    }
    return () => clearInterval(interval);
  }, [isEngineOn]);

  useEffect(() => {
    if (!isEngineOn) return;

    const drainInterval = setInterval(() => {
      if (!isAcceleratingRef.current) return; // 👈 read ref directly, no stale closure
      console.log("draining fuel..."); // 👈 add this temporarily
      setFuelLevel((prev) => {
        const newLevel = parseFloat((prev - 5).toFixed(2));
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

  // Top up fuel function
  const topUpFuel = () => {
    setFuelLevel(100); // 👈 fill to 100
    setIsEmpty(false); // 👈 clear empty state
    fuelLevelRef.current = 100;
  };

  return { fuelLevel, fuelIndicatorActive, isEmpty, topUpFuel };
};

export default useFuel;
