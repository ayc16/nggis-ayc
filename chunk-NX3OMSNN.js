import{b as i,c as a}from"./chunk-4DZRVMTV.js";import{t as p}from"./chunk-HQMV3KQV.js";import{q as c}from"./chunk-CRMMDK2Z.js";import{a as l,b as u}from"./chunk-EAH6BNBL.js";function f(e){return e==null||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function w(e,r){if(e==null)return null;if(!f(e))return new p("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return y(e,r);case"unique-value":return b(e,r);case"class-breaks":return h(e,r);case"dictionary":case"heatmap":return null}return null}function d(e,r){if(!r)return null;let n;if(n=Array.isArray(r)?r:[r],n.length>0){let o=n.map(t=>t.details.symbol.type||t.details.symbol.declaredClass).filter(t=>!!t);o.sort();let s=[];return o.forEach((t,m)=>{m!==0&&t===o[m-1]||s.push(t)}),new p("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${s.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}function y(e,r){let n=u(l(l({},i),r),{cimFallbackEnabled:!0});return d(e,a(e.symbol,n).error)}function b(e,r){let n=u(l(l({},i),r),{cimFallbackEnabled:!0}),o=e.uniqueValueInfos?.map(t=>a(t.symbol,n).error).filter(c),s=a(e.defaultSymbol,n);return s.error&&o?.unshift(s.error),d(e,o)}function h(e,r){let n=u(l(l({},i),r),{cimFallbackEnabled:!0}),o=e.classBreakInfos.map(t=>a(t.symbol,n).error).filter(c),s=a(e.defaultSymbol,n);return s.error&&o.unshift(s.error),d(e,o)}export{f as a,w as b};