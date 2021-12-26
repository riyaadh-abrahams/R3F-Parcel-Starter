uniform float time;
uniform vec3 color;
varying vec2 vUv;

#pragma glslify: snoise = require('./lib.glsl')

void main() {
  vec2 uv = vUv;
  gl_FragColor.rgba = vec4(uv + snoise(vec2(sin(uv.x + time), uv.y)), 0.5, 1.0);
}