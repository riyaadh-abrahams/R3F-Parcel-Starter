import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useControls } from "leva";
import { Mesh } from "three";

export default function Box(props: MeshProps) {
  const { color } = useControls({
    color: "#FCA6D6",
  });

  const mesh = useRef<Mesh>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotateX(delta);
    }
    setElapsed(state.clock.elapsedTime);
  });

  useEffect(() => {
    console.log(mesh.current);
  }, []);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <colorShiftMaterial
        attach="material"
        color={hovered ? "#e2fca7" : color}
        time={elapsed}
      />
    </mesh>
  );
}
