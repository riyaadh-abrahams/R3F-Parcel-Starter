import { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  SphereBufferGeometryProps,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { Points, Sphere } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import earthImage from "textures/earthspec1k.jpg";
import diskImage from "textures/circle.png";

function GlobePoints() {
  var ref = useRef<SphereBufferGeometryProps>();
  var colors = new Array<number>();
  var color = new THREE.Color();
  var q = 0x0000ff * 0.25;

  useLayoutEffect(() => {
    if (ref.current?.attributes && ref.current?.setAttribute) {
      for (let i = 0; i < ref.current.attributes.position.count; i++) {
        color.set(Math.random() * q + q * 3);
        color.toArray(colors, i * 3);
      }

      ref.current.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(colors), 3)
      );
    }
  }, []);

  return <sphereBufferGeometry ref={ref} args={[5, 120, 60]} />;
}

export default function Globe() {
  const [texture, disk] = useLoader(THREE.TextureLoader, [
    earthImage,
    diskImage,
  ]);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  const [shift, setShift] = useState(0);

  const ref = useRef();

  useFrame((state, delta) => {
    setShift(state.clock.elapsedTime * 0.02);
  });

  return (
    <group>
      <points ref={ref}>
        <GlobePoints />
        <defaultCustomMaterial
          vertexColors={true}
          shape={disk}
          visibility={texture}
          shift={shift}
          size={0.125}
          scale={window.innerHeight / 2}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
