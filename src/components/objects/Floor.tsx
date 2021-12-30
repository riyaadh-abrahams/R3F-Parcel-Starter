import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useControls } from "leva";
import { DoubleSide, Mesh, RepeatWrapping } from "three";

/**
 * Textures
 */
import diffuseImage from "textures/coral-fort/diffuse.jpg";
import displacementmage from "textures/coral-fort/displacement.png";
import normalImage from "textures/coral-fort/normal.jpg";
import aoImage from "textures/coral-fort/ao.jpg";
import { useTexture } from "@react-three/drei";

export default function Floor(props: MeshProps) {
  const mesh = useRef<Mesh>();
  const [elapsed, setElapsed] = useState(0);

  const maps = useTexture({
    diffuseMap: diffuseImage,
    displacementMap: displacementmage,
    normalMap: normalImage,
    aoMap: aoImage,
  });

  /**
   * Scale all the maps to 2x2 tiling
   */
  Object.values(maps).forEach((map) => {
    map.wrapS = map.wrapT = RepeatWrapping;
    map.repeat.set(2, 2);
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
        normalMap={maps.normalMap}
        aoMap={maps.aoMap}
        displacementMap={maps.displacementMap}
        displacementScale={0.1}
        side={DoubleSide}
      />
    </mesh>
  );
}
