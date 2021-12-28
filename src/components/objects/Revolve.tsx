import { useScroll, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ReactNode, useRef } from "react";
import { Group, Vector3 } from "three";

type RevolveProps = {
  children?: ReactNode;
};
const Revolve = ({ children }: RevolveProps) => {
  const ref = useRef<Group>();
  const scroll = useScroll();
  const radius = 3;
  const speed = 5;

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(Math.PI * 2 * scroll.offset) * radius;
      ref.current.position.z = Math.cos(Math.PI * 2 * scroll.offset) * radius;
      ref.current.position.y = Math.sin(scroll.offset * 10) * 0.3;
      ref.current.lookAt(new Vector3(0));
    }
  });
  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={1} floatIntensity={3}>
        {children}
      </Float>
    </group>
  );
};

export default Revolve;
