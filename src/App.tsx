import React, { Suspense } from "react";
import { Sky, OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import * as THREE from "three";
import "./materials/color-noise/material";
import { Canvas } from "@react-three/fiber";
import Astronaut from "./components/Astronaut";

const App = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Astronaut position={[0, 0.1, -2]} />
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[5, 5, 0.2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <Box position={[0, 1, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default App;
