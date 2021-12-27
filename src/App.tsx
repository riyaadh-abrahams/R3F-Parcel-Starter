import React, { Suspense } from "react";
import { Sky, OrbitControls, Float, Stars } from "@react-three/drei";
import Box from "./components/Box";
import Floor from "./components/Floor";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Astronaut from "./components/Astronaut";

//materials
import "./materials/color-noise/material";
import "./materials/vertex-distort/material";

const App = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Sky
          distance={450000}
          sunPosition={[0, 0, 0]}
          inclination={0.2}
          azimuth={0.01}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={1}
          fade
        />
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
