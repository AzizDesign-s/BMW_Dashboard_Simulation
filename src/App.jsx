import { useState, useEffect } from "react";
import useFuel from "./components/hooks/useFuel";
import useOil from "./components/hooks/useOil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HoodFoot from "./components/HoodFoot";
import Indicatorss from "./components/Indicatorss";
import BgShape from "./components/shapes/BgShape";
import Speed from "./components/Speed";
import VectorInfo from "./components/VectorInfo";

const App = () => {
  const [isEngineOn, setIsEngineOn] = useState(false);
  const { fuelLevel, fuelIndicatorActive } = useFuel(isEngineOn);
  const { oilLevel, oilIndicatorActive } = useOil(isEngineOn);

  return (
    <div className="bg-blue-main-bg w-full h-screen pt-40  ">
      <div className="w-full h-auto fixed bottom-0 z-0">
        <VectorInfo />
        <BgShape className={"w-full h-full"} />
      </div>

      <Header />
      <HoodFoot />
      <Speed
        isEngineOn={isEngineOn}
        fuelLevel={fuelLevel}
        oilLevel={oilLevel}
      />
      <Indicatorss
        isEngineOn={isEngineOn}
        fuelIndicatorActive={fuelIndicatorActive}
        oilIndicatorActive={oilIndicatorActive}
        onEngineToggle={() => setIsEngineOn((prev) => !prev)}
      />

      {/* Static One----- */}
      <Footer />
    </div>
  );
};

export default App;
