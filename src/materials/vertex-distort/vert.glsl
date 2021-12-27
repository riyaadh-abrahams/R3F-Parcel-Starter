uniform float time;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normal;

  vec3 newPosition = position;
  newPosition.z = sin(newPosition.x * 5.0 + time) * 0.1;
  newPosition.z += sin(newPosition.y * 5.0 + time) * 0.1;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}