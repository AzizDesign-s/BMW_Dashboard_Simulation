import Footer from "./components/Footer";
import Header from "./components/Header";
import HoodFoot from "./components/HoodFoot";
import Indicatorss from "./components/Indicatorss";
import BgShape from "./components/shapes/BgShape";
import Speed from "./components/Speed";

const App = () => {
  return (
    <div className="bg-blue-main-bg w-full h-screen pt-40  ">
      <BgShape className={"w-full h-auto fixed bottom-0 z-0"} />
      <Header />
      <HoodFoot />
      <Speed />
      <Indicatorss />

      {/* Static One----- */}
      <Footer />
    </div>
  );
};

export default App;
