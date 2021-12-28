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
import { OrbitControls, Float, Stage, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PageLoader from "./components/helpers/PageLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const App = () => {
  return (
    <Canvas camera={{ position: [-3.5, 3.5, 3.5] }}>
      <Suspense fallback={<PageLoader />}>
        <OrbitControls makeDefault />
        <Sky
          distance={100000}
          sunPosition={[0, 10, 10]}
          turbidity={300}
          azimuth={100}
        />
        <Stage environment="night" intensity={0.4} adjustCamera={false}>
          <Floor />
          <Float speed={2} rotationIntensity={1} floatIntensity={3}>
            <Astronaut
              rotation={[0.1, 0, 0]}
              scale={0.7}
              position={[0, 0.5, -2]}
            />
          </Float>
          <Box position={[0, 1, 0]} />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default App;
