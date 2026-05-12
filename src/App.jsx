import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
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
import Intro from "./components/Intro.jsx";

const App = () => {
  const isAcceleratingRef = useRef(false);
  const [isEngineOn, setIsEngineOn] = useState(false);
  const [gear, setGear] = useState("P");
  const [isFuelEmpty, setIsFuelEmpty] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
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

  const scale = Math.min(window.innerWidth / 390, window.innerHeight / 844);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-bluee-darkBlueBg">
      {/* Scale wrapper */}
      <div
        style={{
          width: 390,
          height: 844,
          transform: `scale(${scale})`, // 👈 scales entire app
          transformOrigin: "center center", // 👈 scales from center
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Intro screen */}
        <AnimatePresence>
          {showIntro && (
            <Intro onComplete={() => setShowIntro(false)} /> // 👈 hide when done
          )}
        </AnimatePresence>
        <div className="w-full bg-blue-main-bg  h-screen pt-40  ">
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
      </div>
    </div>
  );
};

export default App;
