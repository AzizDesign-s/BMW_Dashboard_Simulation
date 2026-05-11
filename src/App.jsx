import { useState, useEffect, useRef } from "react";
import useSound from "./components/hooks/useSound.js";
import useFuel from "./components/hooks/useFuel";
import useOil from "./components/hooks/useOil";
import useSpeed from "./components/hooks/useSpeed.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HoodFoot from "./components/HoodFoot";
import Indicatorss from "./components/Indicatorss";
import BgShape from "./components/shapes/BgShape";
import Speed from "./components/Speed";
import VectorInfo from "./components/VectorInfo";

const App = () => {
  const isAcceleratingRef = useRef(false);
  const [isEngineOn, setIsEngineOn] = useState(false);
  const [gear, setGear] = useState("P");
  const [isFuelEmpty, setIsFuelEmpty] = useState(false);
  const sound = useSound();
  const {
    speed,
    isAccelerating,
    isBraking,
    startAccelerate,
    stopAccelerate,
    startBrake,
    stopBrake,
  } = useSpeed(isEngineOn, gear, isFuelEmpty);

  const { fuelLevel, fuelIndicatorActive, isEmpty, topUpFuel } = useFuel(
    isEngineOn,
    isAcceleratingRef,
  );

  const {
    oilLevel,
    oilIndicatorActive,
    isEmpty: isOilEmpty,
    topUpOil,
  } = useOil(isEngineOn, speed);

  // Engine on/off sound
  useEffect(() => {
    if (isEngineOn) {
      sound.playEngineStart(); // 👈 start sound + idle
    } else {
      sound.stopEngine(); // 👈 stop idle
    }
  }, [isEngineOn]);

  // Acceleration sound
  useEffect(() => {
    if (isAccelerating) {
      sound.startAccelerationSound();
    } else {
      sound.stopAccelerationSound();
    }
  }, [isAccelerating]);

  // Brake sound
  useEffect(() => {
    if (isBraking) sound.playBrake();
  }, [isBraking]);

  // Fuel warning sound
  useEffect(() => {
    if (fuelIndicatorActive && isEngineOn) {
      sound.playFuelWarning();
    }
  }, [fuelIndicatorActive]);

  // Oil warning sound
  useEffect(() => {
    if (oilIndicatorActive && isEngineOn) {
      sound.playOilWarning();
    }
  }, [oilIndicatorActive]);

  // Sync isEmpty from useFuel back to App state
  useEffect(() => {
    setIsFuelEmpty(isEmpty); // 👈 keeps useSpeed in sync
  }, [isEmpty]);

  // keep ref in sync
  useEffect(() => {
    isAcceleratingRef.current = isAccelerating;
  }, [isAccelerating]);

  // Reset gear to P when engine turns off
  useEffect(() => {
    if (!isEngineOn) setGear("P");
  }, [isEngineOn]);

  // Engine toggle with sound
  const handleEngineToggle = () => {
    setIsEngineOn((prev) => !prev);
  };

  // Gear change with sound
  const handleGearChange = (g) => {
    sound.playGearChange(); // 👈 play on every gear change
    setGear(g);
  };

  return (
    <div className="bg-blue-main-bg w-full h-screen pt-40  ">
      <div className="w-full h-auto fixed bottom-0 z-0">
        <VectorInfo speed={speed} />
        <BgShape className={"w-full h-full"} />
      </div>

      <Header />
      <HoodFoot
        gear={gear}
        onGearChange={handleGearChange}
        isEngineOn={isEngineOn}
      />
      <Speed
        isEngineOn={isEngineOn}
        fuelLevel={fuelLevel}
        oilLevel={oilLevel}
        speed={speed}
        isEmpty={isEmpty}
      />
      <Indicatorss
        isEngineOn={isEngineOn}
        fuelIndicatorActive={fuelIndicatorActive}
        oilIndicatorActive={oilIndicatorActive}
        onEngineToggle={handleEngineToggle}
        startAccelerate={startAccelerate}
        stopAccelerate={stopAccelerate}
        startBrake={startBrake}
        stopBrake={stopBrake}
        isAccelerating={isAccelerating}
        isBraking={isBraking}
        topUpFuel={topUpFuel}
        topUpOil={topUpOil}
        onSignalSound={sound.startSignalSound} // 👈 pass signal sound
        offSignalSound={sound.stopSignalSound}
      />

      {/* Static One----- */}
      <Footer />
    </div>
  );
};

export default App;
