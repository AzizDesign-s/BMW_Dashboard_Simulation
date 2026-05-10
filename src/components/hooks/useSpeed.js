// src/hooks/useSpeed.js
import { useState, useEffect, useRef } from "react";

const useSpeed = (isEngineOn, gear, isFuelEmpty) => {
  const [speed, setSpeed] = useState(0);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [isBraking, setIsBraking] = useState(false);

  const isAcceleratingRef = useRef(false);
  const isBrakingRef = useRef(false);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null); // 👈 track last frame time
  const speedRef = useRef(0); // 👈 track speed in ref for accurate delta calc

  const MAX_SPEED = gear === "R" ? 40 : 220;
  const canAccelerate = gear === "D" || gear === "R";
  const isNeutral = gear === "N";
  const isPark = gear === "P";

  useEffect(() => {
    if (!isEngineOn) {
      setSpeed(0);
      speedRef.current = 0;
      lastTimeRef.current = null;
      cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const loop = (timestamp) => {
      // Calculate delta time in seconds
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = (timestamp - lastTimeRef.current) / 1000; // 👈 convert ms to seconds
      lastTimeRef.current = timestamp;

      let current = speedRef.current;

      if (isPark) {
        current = 0;
      } else if (isNeutral) {
        if (isBrakingRef.current) {
          current = Math.max(0, current - 40 * delta); // 👈 40 km/h per second brake
        } else {
          current = Math.max(0, current - 15 * delta); // 👈 15 km/h per second coast
        }
      } else if (isAcceleratingRef.current && canAccelerate && !isFuelEmpty) {
        // 👈 block if empty
        const topSpeed = MAX_SPEED;
        const accelerationRate =
          gear === "R" ? 15 : 30 * (1 - (current / topSpeed) * 0.7);
        current = Math.min(topSpeed, current + accelerationRate * delta);
      } else if (isBrakingRef.current) {
        current = Math.max(0, current - 60 * delta); // 👈 60 km/h per second hard brake
      } else {
        // Engine braking / natural deceleration
        current = Math.max(0, current - 20 * delta); // 👈 20 km/h per second coast
      }

      speedRef.current = current;
      setSpeed(Math.round(current));

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
    };
  }, [isEngineOn, gear, canAccelerate, isNeutral, isPark, MAX_SPEED]);

  // Reset on P or engine off
  useEffect(() => {
    if (isPark || !isEngineOn) {
      speedRef.current = 0;
      setSpeed(0);
    }
  }, [gear, isEngineOn]);

  const startAccelerate = () => {
    if (!isEngineOn || !canAccelerate || isFuelEmpty) return; // 👈 block if empty
    isAcceleratingRef.current = true;
    setIsAccelerating(true);
  };

  const stopAccelerate = () => {
    isAcceleratingRef.current = false;
    setIsAccelerating(false);
  };

  const startBrake = () => {
    isBrakingRef.current = true;
    setIsBraking(true);
    isAcceleratingRef.current = false;
    setIsAccelerating(false);
  };

  const stopBrake = () => {
    isBrakingRef.current = false;
    setIsBraking(false);
  };

  return {
    speed: Math.round(speedRef.current),
    isAccelerating,
    isBraking,
    startAccelerate,
    stopAccelerate,
    startBrake,
    stopBrake,
  };
};

export default useSpeed;
