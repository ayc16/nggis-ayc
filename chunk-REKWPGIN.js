import{b as c}from"./chunk-3OLRRKKD.js";import{a as i}from"./chunk-6EZU2A2D.js";import{a as n}from"./chunk-C2FNHCAJ.js";import{a as l}from"./chunk-Y6C54FDT.js";import{b as d}from"./chunk-GMW3QDVG.js";import{a as o}from"./chunk-UVJ5D37D.js";function u(s){let a=new n,{vertex:e,fragment:t,attributes:g,varyings:v}=a;return c(e,s),g.add(o.POSITION,"vec3"),g.add(o.UV0,"vec2"),v.add("vUV","vec2"),e.code.add(d`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),t.uniforms.add(new i("backgroundColor",r=>r.backgroundColor),new i("gridColor",r=>r.gridColor),new l("gridWidth",r=>r.gridWidth)),t.code.add(d`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),a}var C=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));export{u as a,C as b};
