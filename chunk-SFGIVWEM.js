import{a as l}from"./chunk-OZLCBZHH.js";import{a as m}from"./chunk-TREMRME7.js";import{a as u}from"./chunk-C2FNHCAJ.js";import{a as n}from"./chunk-VVVTRG42.js";import{a as s,b as a}from"./chunk-GMW3QDVG.js";import{c as t}from"./chunk-GJP6PTKT.js";var o=class extends s{constructor(){super(...arguments),this.color=t(1,1,1)}};function i(){let r=new u;return r.include(l),r.fragment.uniforms.add(new m("tex",e=>e.texture),new n("uColor",e=>e.color)),r.fragment.code.add(a`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);
}`),r}var P=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:o,build:i},Symbol.toStringTag,{value:"Module"}));export{o as a,i as b,P as c};
