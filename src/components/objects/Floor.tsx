import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useControls } from "leva";
import { Mesh } from "three";

export default function Floor(props: MeshProps) {
  const mesh = useRef<Mesh>();
  const [elapsed, setElapsed] = useState(0);

  const { floorColor } = useControls({
    floorColor: "hotpink",
  });

  useFrame((state, delta) => {
    setElapsed(state.clock.elapsedTime);
  });

  return (
    <mesh {...props} ref={mesh} rotation={[Math.PI / 2, 0, 0]}>
      <boxGeometry args={[5, 5, 0.2, 50, 50, 2]} />
      <meshStandardMaterial attach="material" color={floorColor} />
    </mesh>
  );
}
