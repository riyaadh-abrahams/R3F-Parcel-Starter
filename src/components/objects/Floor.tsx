import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useControls } from "leva";
import { Mesh, TextureLoader } from "three";

/**
 * Textures
 */
import diffuseImage from "textures/coral-fort/diffuse.jpg";
import displacementmage from "textures/coral-fort/displacement.png";
import normalImage from "textures/coral-fort/normal.jpg";
import aoImage from "textures/coral-fort/ao.jpg";

export default function Floor(props: MeshProps) {
  const mesh = useRef<Mesh>();
  const [elapsed, setElapsed] = useState(0);

  const [colorMap, displacementMap, normalMap, aoMap] = useLoader(
    TextureLoader,
    [diffuseImage, displacementmage, normalImage, aoImage]
  );

  const { floorColor } = useControls({
    floorColor: "white",
  });

  useFrame((state, delta) => {
    setElapsed(state.clock.elapsedTime);
  });

  return (
    <mesh {...props} ref={mesh} rotation={[Math.PI / 2, 0, 0]}>
      <boxGeometry args={[5, 5, 0.2, 50, 50, 2]} />
      <meshStandardMaterial
        attach="material"
        color={floorColor}
        map={colorMap}
        normalMap={normalMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}
