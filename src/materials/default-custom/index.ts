import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertextShader from "./vert.glsl";
import fragmentShader from "./frag.glsl";
import * as THREE from "three";

const DefaultCustomMaterial = shaderMaterial(
  {
    scale: 1,
    size: 1,
    shift: 0,
    visibility: new THREE.Texture(),
    shape: new THREE.Texture(),
  },
  vertextShader,
  fragmentShader
);

extend({ DefaultCustomMaterial });

/**
 * Material Typings
 * This is used to ensure that typescrript will work properly with the custom material
 */
type DefaultCustomMaterialType = {
  scale: Number;
  size: Number;
  shift: Number;
  visibility: THREE.Texture;
  shape: THREE.Texture;
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      defaultCustomMaterial: DefaultCustomMaterialType;
    }
  }
}

export default DefaultCustomMaterial;
