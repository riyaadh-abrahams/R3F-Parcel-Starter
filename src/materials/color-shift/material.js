import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertextShader from "./vert.glsl";
import fragmentShader from "./frag.glsl";
import * as THREE from "three";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color() },
  vertextShader,
  fragmentShader
);

extend({ ColorShiftMaterial });
export default ColorShiftMaterial;
