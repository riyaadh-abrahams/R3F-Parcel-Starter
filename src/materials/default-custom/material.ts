import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertextShader from "./vert.glsl";
import fragmentShader from "./frag.glsl";
import * as THREE from "three";

const DefaultCustomMaterial = shaderMaterial(
  { color: new THREE.Color() },
  vertextShader,
  fragmentShader
);

extend({ DefaultCustomMaterial });

/**
 * Material Typings
 * This is used to ensure that typescrript will work properly with the custom material
 */
type DefaultCustomMaterialType = {
  color: THREE.ColorRepresentation;
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      defaultCustomMaterial: DefaultCustomMaterialType;
    }
  }
}

export default DefaultCustomMaterial;
