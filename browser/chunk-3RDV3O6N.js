import{a as t}from"./chunk-WKT5W7KT.js";var s,e,i=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function c(){return i??globalThis.navigator?.language??"en"}function r(){return e===void 0&&(e=c()),e}function f(n=r()){return/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n)?.[1].toLowerCase()}var o=[];function h(n){return o.push(n),t(()=>o.splice(o.indexOf(n),1))}var l=[];function d(n){return l.push(n),t(()=>o.splice(l.indexOf(n),1))}function u(){let n=s??c();e!==n&&(e=n,[...l].forEach(a=>{a.call(null,n)}),[...o].forEach(a=>{a.call(null,n)}))}globalThis.addEventListener?.("languagechange",u);export{r as a,f as b,h as c,d};
