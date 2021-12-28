/**
 * 3D Objects
 */
import Box from "objects/Box";
import Floor from "objects/Floor";
import Astronaut from "objects/Astronaut";

/**
 * Materials - These just need to be imported somewhere
 * so that the extend function will run and make the material
 * available globally
 */
import "./materials/color-noise/material";
import "./materials/default-custom/material";

/**
 * Other Imports
 */
import { Suspense } from "react";
import {
  OrbitControls,
  GradientTexture,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PageLoader from "./components/helpers/PageLoader";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
import Revolve from "objects/Revolve";

const App = () => {
  return (
    <Canvas camera={{ position: [-3.5, 3.5, 3.5] }}>
      <Suspense fallback={<PageLoader />}>
        <ScrollControls pages={3}>
          <GradientTexture
            attach="background"
            stops={[0, 1]} // As many stops as you want
            colors={["hotpink", "aquamarine"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
          <EffectComposer multisampling={0}>
            <SMAA />
          </EffectComposer>
          <OrbitControls enableZoom={false} />

          <ambientLight intensity={1.3} />
          <Floor />
          <Revolve>
            <Astronaut
              rotation={[0.4, 0, 0]}
              scale={0.7}
              position={[0, 0.5, 0]}
            />
          </Revolve>
          <Box position={[0, 1, 0]} />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default App;
