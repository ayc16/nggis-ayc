import{f as h}from"./chunk-XC2IQIZC.js";import{a as r}from"./chunk-MFP2OFDR.js";import{h as p}from"./chunk-EAH6BNBL.js";var g=new r([64,64,64]);function f(l,t){let o=[],e=l.length-1;return l.length===5?o.push(0,2,4):o.push(0,e),l.map((n,a)=>o.includes(a)?h(n,a,e,t):null)}function y(l,t,o){return p(this,null,function*(){let e=!1,n=[],a=[];if(l.stops){let c=l.stops;n=c.map(s=>s.value),e=c.some(s=>!!s.label),e&&(a=c.map(s=>s.label))}let m=n[0],u=n[n.length-1];if(m==null&&u==null)return null;let i=e?null:f(n,o);return(yield Promise.all(n.map((c,s)=>p(this,null,function*(){return{value:c,color:l.type==="opacity"?yield v(c,l,t):(yield import("./chunk-MODFJR45.js")).getColor(l,c),label:e?a[s]:i?.[s]??""}})))).reverse()})}function v(l,t,o){return p(this,null,function*(){let e=new r(o??g),n=(yield import("./chunk-MODFJR45.js")).getOpacity(t,l);return n!=null&&(e.a=n),e})}function x(l){let t=!1,o=[],e=[];o=l.map(u=>u.value),t=l.some(u=>!!u.label),t&&(e=l.map(u=>u.label??""));let n=o[0],a=o[o.length-1];if(n==null&&a==null)return null;let m=t?null:f(o);return o.map((u,i)=>({value:u,color:w(u,l),label:t?e[i]:m?.[i]??""})).reverse()}function w(l,t){let{startIndex:o,endIndex:e,weight:n}=b(l,t);if(o===e)return t[o].color;let a=r.blendColors(t[o].color,t[e].color,n);return new r(a)}function b(l,t){let o=0,e=t.length-1;return t.some((n,a)=>l<n.value?(e=a,!0):(o=a,!1)),{startIndex:o,endIndex:e,weight:(l-t[o].value)/(t[e].value-t[o].value)}}function S(l,t){let o=[];if(l&&l.type==="multipart")l.colorRamps.reverse().forEach((e,n)=>{n===0?o.push({value:t.max,color:new r(e.toColor),label:"high"}):o.push({value:null,color:new r(e.toColor),label:""}),n===l.colorRamps.length-1?o.push({value:t.min,color:new r(e.fromColor),label:"low"}):o.push({value:null,color:new r(e.fromColor),label:""})});else{let e,n;l&&l.type==="algorithmic"?(e=l.fromColor,n=l.toColor):(e=[0,0,0,1],n=[255,255,255,1]),o=[{value:t.max,color:new r(n),label:"high"},{value:t.min,color:new r(e),label:"low"}]}return o}export{y as a,x as b,w as c,S as d};
