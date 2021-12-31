import { useRef, useState, useLayoutEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import * as THREE from "three";
import earthImage from "textures/earthspec1k.jpg";
import diskImage from "textures/circle.png";

function GlobePoints() {
  var ref = useRef();
  var colors = [];
  var color = new THREE.Color();
  var q = 0x0000ff * 0.25;

  /**
   * you should use useLayoutEffect if you want to run some modifications on your component before it renders
   * In case case, we want to prepare and add the color attributes
   */
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

export default function Globe(props) {
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
    <group props={props}>
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
      <mesh scale={4.9}>
        <sphereGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </group>
  );
}
