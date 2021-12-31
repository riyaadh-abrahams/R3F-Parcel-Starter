/**
 * Materials
 *
 * These just need to be imported somewhere so that the extend function will run
 * https://parceljs.org/features/dependency-resolution/#directory-index-files
 *
 */
import "./materials/color-noise";
import "./materials/default-custom";

/**
 * Other Imports
 */
import { Suspense } from "react";
import {
  OrbitControls,
  GradientTexture,
  ScrollControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PageLoader from "./components/helpers/PageLoader";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
import Globe from "objects/Globe";

const App = () => {
  return (
    <Canvas camera={{ position: [3.5, 3.5, -3.5] }}>
      <Suspense fallback={<PageLoader />}>
        <color attach="background" args={["black"]} />
        <ScrollControls pages={3}>
          <EffectComposer multisampling={0}>
            <SMAA />
          </EffectComposer>
          <OrbitControls />

          <Globe />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default App;
