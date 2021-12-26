import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

export default function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useFrame((state, delta) => {
    mesh.current.rotation.z += delta;
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
        color={hovered ? "lime" : "orange"}
        time={elapsed}
      />
    </mesh>
  );
}
