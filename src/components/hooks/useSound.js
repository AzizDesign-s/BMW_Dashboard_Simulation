// src/hooks/useSound.js
import { useEffect, useRef } from "react";

import engineStartSfx from "../../assets/sound/car_start.mp3";
import engineIdleSfx from "../../assets/sound/car_idle.mp3";
import gearChangeSfx from "../../assets/sound/car_gear.mp3";
import accelerationSfx from "../../assets/sound/car_acceleration.mp3";
import brakeSfx from "../../assets/sound/car_brake.mp3";
import signalTickSfx from "../../assets/sound/turn_signal.mp3";
import fuelWarningSfx from "../../assets/sound/low_fuel.mp3";
import oilWarningSfx from "../../assets/sound/low_oil.mp3";

const useSound = () => {
  const engineStartRef = useRef(null);
  const engineIdleRef = useRef(null);
  const gearChangeRef = useRef(null);
  const accelerationRef = useRef(null);
  const brakeRef = useRef(null);
  const signalTickRef = useRef(null);
  const fuelWarningRef = useRef(null);
  const oilWarningRef = useRef(null);

  // Initialize all audio on mount
  useEffect(() => {
    engineStartRef.current = new Audio(engineStartSfx);
    engineIdleRef.current = new Audio(engineIdleSfx);
    gearChangeRef.current = new Audio(gearChangeSfx);
    accelerationRef.current = new Audio(accelerationSfx);
    brakeRef.current = new Audio(brakeSfx);
    signalTickRef.current = new Audio(signalTickSfx);
    fuelWarningRef.current = new Audio(fuelWarningSfx);
    oilWarningRef.current = new Audio(oilWarningSfx);

    // Engine idle loops
    engineIdleRef.current.loop = true;
    engineIdleRef.current.volume = 0.4;

    // Acceleration loops while held
    accelerationRef.current.loop = true;
    accelerationRef.current.volume = 0.6;

    // Signal tick loops while active
    signalTickRef.current.loop = true;
    signalTickRef.current.volume = 0.5;

    // Set volumes
    engineStartRef.current.volume = 0.7;
    gearChangeRef.current.volume = 0.5;
    brakeRef.current.volume = 0.5;
    fuelWarningRef.current.volume = 0.6;
    oilWarningRef.current.volume = 0.6;

    // Cleanup on unmount
    return () => {
      [
        engineStartRef,
        engineIdleRef,
        gearChangeRef,
        accelerationRef,
        brakeRef,
        signalTickRef,
        fuelWarningRef,
        oilWarningRef,
      ].forEach((ref) => {
        if (ref.current) {
          ref.current.pause();
          ref.current = null;
        }
      });
    };
  }, []);

  // Helper — safely play from start
  const play = (ref) => {
    if (!ref.current) return;
    ref.current.currentTime = 0;
    ref.current.play().catch(() => {}); // 👈 catch autoplay policy errors silently
  };

  // Helper — safely stop
  const stop = (ref) => {
    if (!ref.current) return;
    ref.current.pause();
    ref.current.currentTime = 0;
  };

  // ---- Exported sound functions ----

  const playEngineStart = () => {
    play(engineStartRef);
    // Start idle after engine start sound finishes
    engineStartRef.current.onended = () => {
      engineIdleRef.current?.play().catch(() => {});
    };
  };

  const stopEngine = () => {
    stop(engineIdleRef);
    stop(accelerationRef);
  };

  const playGearChange = () => {
    play(gearChangeRef);
  };

  const startAccelerationSound = () => {
    if (!accelerationRef.current) return;
    accelerationRef.current.currentTime = 0;
    accelerationRef.current.play().catch(() => {});
    // Fade idle volume down while accelerating
    if (engineIdleRef.current) engineIdleRef.current.volume = 0.1;
  };

  const stopAccelerationSound = () => {
    stop(accelerationRef);
    // Restore idle volume
    if (engineIdleRef.current) engineIdleRef.current.volume = 0.4;
  };

  const playBrake = () => {
    play(brakeRef);
  };

  const startSignalSound = () => {
    if (!signalTickRef.current) return;
    signalTickRef.current.currentTime = 0;
    signalTickRef.current.play().catch(() => {});
  };

  const stopSignalSound = () => {
    stop(signalTickRef);
  };

  const playFuelWarning = () => {
    play(fuelWarningRef);
  };

  const playOilWarning = () => {
    play(oilWarningRef);
  };

  return {
    playEngineStart,
    stopEngine,
    playGearChange,
    startAccelerationSound,
    stopAccelerationSound,
    playBrake,
    startSignalSound,
    stopSignalSound,
    playFuelWarning,
    playOilWarning,
  };
};

export default useSound;
