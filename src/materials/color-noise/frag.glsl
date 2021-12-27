uniform float time;
uniform vec3 color;

varying vec2 vUv;
varying vec3 vNormal;

#pragma glslify: snoise = require('./lib.glsl')

void main() {
  vec2 uv = vUv;

  //Controls
  float edgeWidth = 0.00;
  float smoothAmount = 0.005;

  //Calculate Strengths
  float strength = smoothstep(edgeWidth, edgeWidth+smoothAmount, uv.x) + 0.1;
  float strength2 = 1.0-smoothstep(1.0-edgeWidth-smoothAmount, 1.0-edgeWidth, uv.x) + 0.1;
  float strength3 = smoothstep(edgeWidth, edgeWidth+smoothAmount, uv.y) + 0.1;
  float strength4 = 1.0-smoothstep(1.0-edgeWidth-smoothAmount, 1.0-edgeWidth, uv.y) + 0.1;

 //Final Color
  vec3 finalColor = color  - abs(snoise(uv + time));
  finalColor = finalColor * (strength2 * strength * strength3 * strength4);
  gl_FragColor = vec4(finalColor, 1.0);
}