import { useState } from "react";
import Header from "./components/Header";
import Model from "./components/Model";
import glassesData from "./dataGlasses.json";
import GlassesDetail from "./components/GlassesDetail";
import GlassesList from "./components/GlassesList";

function App() {
  const [currentGlasses, setCurrentGlasses] = useState(glassesData[0]);

  const handleSetGlasses = (glasses) => {
    setCurrentGlasses(glasses);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <img src="/background.jpg" alt="background" className="absolute top-0 left-0 w-full h-full object-cover blur-xs -z-50" />
      <Header />
      <div className="wrapper pt-8 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 justify-items-center">
        <GlassesDetail item={currentGlasses} />
        <Model item={currentGlasses} />
      </div>
      <div className="wrapper py-8 sm:py-16">
        <GlassesList data={glassesData} handleSetGlasses={handleSetGlasses}/>
      </div>
    </div>
  );
}

export default App;
