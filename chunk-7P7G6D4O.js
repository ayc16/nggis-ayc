import{c as p,d as h,f as y}from"./chunk-7EQBH2NW.js";import{aa as m}from"./chunk-375OYO4P.js";import{k as u}from"./chunk-GISCFF3Z.js";import{g as f}from"./chunk-CRMMDK2Z.js";import{h as o}from"./chunk-EAH6BNBL.js";var i=class{constructor(e,r,t){this.assetName=e,this.assetMimeType=r,this.parts=t}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&f(this.parts,e.parts,(r,t)=>r.equals(t))}isOnService(e){return this.parts.every(r=>r.isOnService(e))}makeHash(){let e="";for(let r of this.parts)e+=r.partHash;return e}toBlob(e){return o(this,null,function*(){let{parts:r}=this;if(r.length===1)return r[0].toBlob(e);let t=yield Promise.all(r.map(n=>n.toBlob(e)));return u(e),new Blob(t)})}},g=class{constructor(e,r){this.partUrl=e,this.partHash=r}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith(`${e.path}/assets/`)}toBlob(e){return o(this,null,function*(){let{data:r}=yield m(this.partUrl,{responseType:"blob"});return u(e),r})}};function x(s){return F(s?.source)}function A(s){return Array.isArray(s)?s.every(e=>e instanceof i):!1}var v=/^(model\/gltf\+json)|(model\/gltf-binary)$/,S=/\.(gltf|glb)/i;function F(s){return s?Array.isArray(s)?s.some(b):b(s):!1}function b(s){if(s instanceof File){let{type:e,name:r}=s;return v.test(e)||S.test(r)}return v.test(s.assetMimeType)||S.test(s.assetName)}function B(s,e){if(!s)return!1;let{source:r}=s;return I(r,e)}function H(s,e){if(s===e)return!0;let{source:r}=s,{source:t}=e;if(r===t)return!0;if(A(r)&&A(t)){if(r.length!==t.length)return!1;let n=(a,l)=>a.assetName<l.assetName?-1:a.assetName>l.assetName?1:0,c=[...r].sort(n),d=[...t].sort(n);for(let a=0;a<c.length;++a)if(!c[a].equals(d[a]))return!1;return!0}return!1}function I(s,e){if(Array.isArray(s)){let r=s;return r.length>0&&r.every(t=>N(t,e))}return N(s,e)}function N(s,e){return s instanceof i&&s.isOnService(e)}function U(s,e){return s instanceof File?y(s,e):p(s.assetMimeType,e)??h(s.assetName,e)}function w(s){return Array.isArray(s)?s:[s]}function D(s){return!!s.original}export{i as a,g as b,x as c,B as d,H as e,U as f,w as g,D as h};
