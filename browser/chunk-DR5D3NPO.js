import{g as p}from"./chunk-CTGIUUCS.js";import{b as u}from"./chunk-X3IDZTNG.js";import{a as s,b as a}from"./chunk-EAH6BNBL.js";function S(n,e){return e?a(s({},e),{query:s(s({},n??{}),e.query)}):{query:n}}function q(n){return typeof n=="string"?p(n):u(n)}function c(n,e,f){let r={};for(let i in n){if(i==="declaredClass")continue;let o=n[i];if(o!=null&&typeof o!="function")if(Array.isArray(o))r[i]=o.map(t=>c({item:t},e,f).item);else if(typeof o=="object")if(o.toJSON){let t=o.toJSON(f?.[i]);r[i]=e?t:JSON.stringify(t)}else r[i]=e?o:JSON.stringify(o);else r[i]=o}return r}export{S as a,q as b,c};
