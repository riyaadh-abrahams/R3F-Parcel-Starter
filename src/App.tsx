import { Suspense } from "react";
import { OrbitControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PageLoader from "./components/helpers/PageLoader";

/**
 * 3D Objects
 */
import Box from "objects/Box";
import Floor from "objects/Floor";
import Astronaut from "objects/Astronaut";

/**
 * Materials
 */
import "./materials/color-noise/material";
import "./materials/vertex-distort/material";
import { useControls } from "leva";
import { Vector3 } from "three";

const App = () => {
  const { cameraPos } = useControls({
    cameraPos: {
      value: [0, 0, 0],
    },
  });

  return (
    <Canvas camera={{ position: [-3.5, 3.5, 3.5] }}>
      <Suspense fallback={<PageLoader />}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Floor />
        <Float speed={1} rotationIntensity={1} floatIntensity={3}>
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
