/**
 * Materials
 *
 * These just need to be imported somewhere so that the extend function will run
 * https://parceljs.org/features/dependency-resolution/#directory-index-files
 *
 */
import "./materials/default-custom";

/**
 * Other Imports
 */
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PageLoader from "./components/helpers/PageLoader";
import Globe from "objects/Globe";

const App = () => {
  return (
    <Canvas camera={{ position: [6, 6, 6] }}>
      <Suspense fallback={<PageLoader />}>
        <color attach="background" args={[0x080808]} />
        <OrbitControls />
        <Globe />
      </Suspense>
    </Canvas>
  );
};

export default App;
