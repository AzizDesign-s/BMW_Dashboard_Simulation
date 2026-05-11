import { useState, useEffect, useRef } from "react";

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

  return (
    <div className="bg-blue-main-bg w-full h-screen pt-40  ">
      <div className="w-full h-auto fixed bottom-0 z-0">
        <VectorInfo speed={speed} />
        <BgShape className={"w-full h-full"} />
      </div>

      <Header />
      <HoodFoot gear={gear} onGearChange={setGear} isEngineOn={isEngineOn} />
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
        onEngineToggle={() => setIsEngineOn((prev) => !prev)}
        startAccelerate={startAccelerate}
        stopAccelerate={stopAccelerate}
        startBrake={startBrake}
        stopBrake={stopBrake}
        isAccelerating={isAccelerating}
        isBraking={isBraking}
        topUpFuel={topUpFuel}
        topUpOil={topUpOil}
      />

      {/* Static One----- */}
      <Footer />
    </div>
  );
};

export default App;
