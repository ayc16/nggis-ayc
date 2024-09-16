import{a as c}from"./chunk-RHABF3KL.js";import{a as f}from"./chunk-NDZXQR2V.js";import{r as b,t as T}from"./chunk-HQMV3KQV.js";var E=()=>b.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),l=class{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}},v=class extends l{constructor(){super(...arguments),this.vertex=new d,this.fragment=new d,this.attributes=new p,this.varyings=new $,this.extensions=new h,this.constants=new g,this.outputs=new m}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){let n=this.extensions.generateSource(e),t=this.attributes.generateSource(e),s=this.varyings.generateSource(e),i=e==="vertex"?this.vertex:this.fragment,a=i.uniforms.generateSource(),o=i.code.generateSource(),u=e==="vertex"?F:A,w=this.constants.generateSource().concat(i.constants.generateSource()),y=this.outputs.generateSource(e);return`#version 300 es
${n.join(`
`)}

${u}

${w.join(`
`)}

${a.join(`
`)}

${t.join(`
`)}

${s.join(`
`)}

${y.join(`
`)}

${o.join(`
`)}`}generateBindPass(e){let n=new Map;this.vertex.uniforms.entries.forEach(i=>{let a=i.bind[c.Pass];a&&n.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{let a=i.bind[c.Pass];a&&n.set(i.name,a)});let t=Array.from(n.values()),s=t.length;return(i,a)=>{for(let o=0;o<s;++o)t[o](e,i,a)}}generateBindDraw(e){let n=new Map;this.vertex.uniforms.entries.forEach(i=>{let a=i.bind[c.Draw];a&&n.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{let a=i.bind[c.Draw];a&&n.set(i.name,a)});let t=Array.from(n.values()),s=t.length;return(i,a,o)=>{for(let u=0;u<s;++u)t[u](e,i,a,o)}}},_=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new T(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else E().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},S=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},d=class extends l{constructor(){super(...arguments),this.uniforms=new _(this),this.code=new S(this),this.constants=new g}get builder(){return this}},p=class{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}},$=class{constructor(){this._entries=new Map}add(e,n){this._entries.has(e)&&f(this._entries.get(e)===n),this._entries.set(e,n)}generateSource(e){let n=new Array;return this._entries.forEach((t,s)=>n.push(e==="vertex"?`out ${t} ${s};`:`in ${t} ${s};`)),n}},h=class r{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){let n=e==="vertex"?r.ALLOWLIST_VERTEX:r.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>n.includes(t)).map(t=>`#extension ${t} : enable`)}};h.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h.ALLOWLIST_VERTEX=[];var m=class r{constructor(){this._entries=new Map}add(e,n,t=0){let s=this._entries.get(t);s?f(s.name===e&&s.type===n,`Fragment shader output location ${t} occupied`):this._entries.set(t,{name:e,type:n})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:r.DEFAULT_NAME,type:r.DEFAULT_TYPE});let n=new Array;return this._entries.forEach((t,s)=>n.push(`layout(location = ${s}) out ${t.type} ${t.name};`)),n}};m.DEFAULT_TYPE="vec4",m.DEFAULT_NAME="fragColor";var g=class r{constructor(){this._entries=new Set}add(e,n,t){let s="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":s=r._numberToFloatStr(t);break;case"int":s=r._numberToIntStr(t);break;case"bool":s=t.toString();break;case"vec2":s=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case"vec3":s=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case"vec4":s=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case"ivec2":s=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"ivec3":s=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"ivec4":s=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${n}(${Array.prototype.map.call(t,i=>r._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${s};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}},A=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,F=`precision highp float;
precision highp sampler2D;`;export{v as a};
