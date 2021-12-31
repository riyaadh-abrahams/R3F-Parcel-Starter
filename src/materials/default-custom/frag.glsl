uniform sampler2D visibility;
uniform float shift;
uniform sampler2D shape;

varying vec2 vUv;
varying vec3 vColor;

void main() {

    vec2 uv = vUv;
    uv.x += shift;
    vec4 v = texture2D(visibility, uv);
    if (length(v.rgb) > 1.0) discard;

    gl_FragColor = vec4( vColor, 1.0 );
    vec4 shapeData = texture2D( shape, gl_PointCoord );
    if (shapeData.a < 0.5) discard;
    gl_FragColor = gl_FragColor * shapeData;

        
}