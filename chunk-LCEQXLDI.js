import{c as l}from"./chunk-MXADXAOS.js";import{M as i}from"./chunk-KAAR5ZJN.js";import{h as a}from"./chunk-WKT5W7KT.js";import{h as s}from"./chunk-EAH6BNBL.js";function u(r,e,m){return s(this,null,function*(){let o=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(o&&o.type==="unique-value"&&o.styleOrigin){let t=yield l(o.populateFromStyle());if(a(m),t.ok===!1){let n=t.error;e?.messages&&e.messages.push(new i("renderer:style-reference",`Failed to create unique value renderer from style reference: ${n.message}`,{error:n,context:e})),r.clear("renderer",e?.origin)}}})}export{u as a};