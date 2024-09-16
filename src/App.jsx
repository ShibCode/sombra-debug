import React, { useEffect } from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Environment, Loader } from "@react-three/drei";
import Lenis from "lenis";
import { Perf } from "r3f-perf";
import Hero from "./sections/Hero";
import SelectedWorks from "./sections/SelectedWorks";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Loader />

      <video
        src="/videos/bg2.mp4"
        className="fixed w-full h-full -z-10 object-cover"
      />

      <div className="wrapper">
        <div className="absolute h-[400vh] top-0 left-0 w-full z-50">
          <div className="w-full h-[100vh] sticky top-0">
            <Canvas>
              <Perf />

              <ambientLight color={"#ff0000"} intensity={1.5} />
              <directionalLight
                color={"#ffddaa"}
                position={[10, 10, 5]}
                intensity={1.5}
                castShadow
              />
              <pointLight
                color={"#aabbff"}
                position={[-10, -10, -10]}
                intensity={1}
              />

              <Environment preset="warehouse" environmentIntensity={0.3} />

              <Experience />
            </Canvas>
          </div>
        </div>

        <div id="step0" className="h-[300vh]">
          <Hero />
        </div>

        <div id="step1" className="h-[100vh]"></div>

        <SelectedWorks />
      </div>
    </>
  );
};

export default App;
