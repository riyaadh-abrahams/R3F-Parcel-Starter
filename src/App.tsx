import React, { Suspense } from "react";
import { Sky, OrbitControls, Float, Stars } from "@react-three/drei";
import Box from "./components/objects/Box";
import Floor from "./components/objects/Floor";
import { Canvas } from "@react-three/fiber";
import Astronaut from "./components/objects/Astronaut";
import PageLoader from "./components/helpers/PageLoader";

//materials
import "./materials/color-noise/material";
import "./materials/vertex-distort/material";

const App = () => {
  return (
    <Canvas>
      <Suspense fallback={<PageLoader />}>
        <OrbitControls />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Floor />
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={3} // Up/down float intensity, defaults to 1
        >
          <Astronaut
            rotation={[0.1, 0, 0]}
            scale={0.7}
            position={[0, 0.5, -2]}
          />
        </Float>

        <Box position={[0, 1, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default App;
