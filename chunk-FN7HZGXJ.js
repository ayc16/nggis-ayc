import{b as c}from"./chunk-GMW3QDVG.js";import{a as o}from"./chunk-RHABF3KL.js";import{a as g}from"./chunk-I46GU3Q4.js";import{a as x}from"./chunk-H5IJXG2U.js";import{p as b,r as $}from"./chunk-X3IDZTNG.js";var u=class{constructor(e,n,t,a,s=null){if(this.name=e,this.type=n,this.arraySize=s,this.bind={[o.Pass]:null,[o.Draw]:null},a)switch(t){case o.Pass:this.bind[o.Pass]=a;break;case o.Draw:this.bind[o.Draw]=a}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}};var A=class extends u{constructor(e,n){super(e,"sampler2D",o.Pass,(t,a,s)=>t.bindTexture(e,n(a,s)))}};var y=class extends u{constructor(e,n){super(e,"vec2",o.Pass,(t,a,s)=>t.setUniform2fv(e,n(a,s)))}};var w=class extends u{constructor(e,n){super(e,"float",o.Pass,(t,a,s)=>t.setUniform1f(e,n(a,s)))}};function H(r,e=!0){r.attributes.add(x.POSITION,"vec2"),e&&r.varyings.add("uv","vec2"),r.vertex.code.add(c`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?c`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function D(r){r.code.add(c`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function ee(r){r.include(D),r.code.add(c`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function te(r){r.code.add(c`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}var I=()=>b.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),f=class{constructor(){this._includedModules=new Map}include(e,n){if(this._includedModules.has(e)){let t=this._includedModules.get(e);if(t!==n){I().error("Shader module included multiple times with different configuration.");let a=new Set;for(let s of Object.keys(t))t[s]!==e[s]&&a.add(s);for(let s of Object.keys(e))t[s]!==e[s]&&a.add(s);a.forEach(s=>console.error(`  ${s}: current ${t[s]} new ${e[s]}`))}}else this._includedModules.set(e,n),e(this.builder,n)}},E=class extends f{constructor(){super(...arguments),this.vertex=new p,this.fragment=new p,this.attributes=new _,this.varyings=new F,this.extensions=new d,this.constants=new v,this.outputs=new h}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){let n=this.extensions.generateSource(e),t=this.attributes.generateSource(e),a=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,i=s.uniforms.generateSource(),l=s.code.generateSource(),m=e==="vertex"?P:O,R=this.constants.generateSource().concat(s.constants.generateSource()),L=this.outputs.generateSource(e);return`#version 300 es
${n.join(`
`)}

${m}

${R.join(`
`)}

${i.join(`
`)}

${t.join(`
`)}

${a.join(`
`)}

${L.join(`
`)}

${l.join(`
`)}`}generateBindPass(e){let n=new Map;this.vertex.uniforms.entries.forEach(s=>{let i=s.bind[o.Pass];i&&n.set(s.name,i)}),this.fragment.uniforms.entries.forEach(s=>{let i=s.bind[o.Pass];i&&n.set(s.name,i)});let t=Array.from(n.values()),a=t.length;return(s,i)=>{for(let l=0;l<a;++l)t[l](e,s,i)}}generateBindDraw(e){let n=new Map;this.vertex.uniforms.entries.forEach(s=>{let i=s.bind[o.Draw];i&&n.set(s.name,i)}),this.fragment.uniforms.entries.forEach(s=>{let i=s.bind[o.Draw];i&&n.set(s.name,i)});let t=Array.from(n.values()),a=t.length;return(s,i,l)=>{for(let m=0;m<a;++m)t[m](e,s,i,l)}}},T=class{constructor(){this._entries=new Map}add(...e){for(let n of e)this._add(n)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new $(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else I().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},S=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},p=class extends f{constructor(){super(...arguments),this.uniforms=new T,this.code=new S,this.constants=new v}get builder(){return this}},_=class{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}},F=class{constructor(){this._entries=new Map}add(e,n){this._entries.has(e)&&g(this._entries.get(e)===n),this._entries.set(e,n)}generateSource(e){let n=new Array;return this._entries.forEach((t,a)=>n.push(e==="vertex"?`out ${t} ${a};`:`in ${t} ${a};`)),n}},d=class r{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){let n=e==="vertex"?r.ALLOWLIST_VERTEX:r.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>n.includes(t)).map(t=>`#extension ${t} : enable`)}};d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];var h=class r{constructor(){this._entries=new Map}add(e,n,t=0){let a=this._entries.get(t);a?g(a.name===e&&a.type===n,`Fragment shader output location ${t} occupied`):this._entries.set(t,{name:e,type:n})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:r.DEFAULT_NAME,type:r.DEFAULT_TYPE});let n=new Array;return this._entries.forEach((t,a)=>n.push(`layout(location = ${a}) out ${t.type} ${t.name};`)),n}};h.DEFAULT_TYPE="vec4",h.DEFAULT_NAME="fragColor";var v=class r{constructor(){this._entries=new Set}add(e,n,t){let a="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":a=r._numberToFloatStr(t);break;case"int":a=r._numberToIntStr(t);break;case"bool":a=t.toString();break;case"vec2":a=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case"vec3":a=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case"vec4":a=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case"ivec2":a=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"ivec3":a=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"ivec4":a=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${n}(${Array.prototype.map.call(t,s=>r._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}},O=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,P=`precision highp float;
precision highp sampler2D;`;export{u as a,A as b,y as c,w as d,D as e,H as f,ee as g,te as h,E as i};
