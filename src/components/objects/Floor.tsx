import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useControls } from "leva";
import { DoubleSide, Mesh, RepeatWrapping } from "three";

/**
 * Textures
 */
import diffuseImage from "textures/mars/DiffuseMap.jpg";
import displacementmage from "textures/mars/DisplacementMap.jpg";
import { useTexture } from "@react-three/drei";

export default function Floor(props: MeshProps) {
  const mesh = useRef<Mesh>();
  const [elapsed, setElapsed] = useState(0);

  const maps = useTexture({
    diffuseMap: diffuseImage,
    displacementMap: displacementmage,
  });

  /**
   * Scale all the maps to 2x2 tiling
   */
  Object.values(maps).forEach((map) => {
    map.wrapS = map.wrapT = RepeatWrapping;
    map.repeat.set(4, 4);
  });

  const { floorColor } = useControls({
    floorColor: "white",
  });

  useFrame((state, delta) => {
    setElapsed(state.clock.elapsedTime);
  });

  return (
    <mesh {...props} ref={mesh} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[7, 7, 500, 500]} />
      <meshStandardMaterial
        attach="material"
        color={floorColor}
        map={maps.diffuseMap}
        displacementMap={maps.displacementMap}
        displacementScale={-0.2}
        side={DoubleSide}
      />
    </mesh>
  );
}
