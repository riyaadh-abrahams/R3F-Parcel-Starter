import React, { Suspense } from "react";
import { VRCanvas, DefaultXRControllers, Interactive } from "@react-three/xr";
import { Sky, OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import * as THREE from "three";
import "./materials/color-shift/material";

export function App() {
  return (
    <VRCanvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <DefaultXRControllers />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[5, 5, 0.2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <Box position={[0, 1, 0]} />
      </Suspense>
    </VRCanvas>
  );
}
