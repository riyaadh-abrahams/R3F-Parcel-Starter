uniform float time;
uniform vec3 color;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec2 uv = vUv;
  gl_FragColor = vec4(color, 1.0);
}