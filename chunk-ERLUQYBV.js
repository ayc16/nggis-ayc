import{b}from"./chunk-B6VNGUER.js";import{c as z}from"./chunk-BRJSO7CG.js";import{A as m,d as E,z as p}from"./chunk-JJANIEGN.js";import{a as u}from"./chunk-UJ6V7JUK.js";import{f as j}from"./chunk-CJYUOBHK.js";import{a as f,b as C}from"./chunk-AM3VOA32.js";import{f as L}from"./chunk-GJP6PTKT.js";import{a as k}from"./chunk-JOSG37QF.js";import{a as S}from"./chunk-HRFJUMCP.js";import{aa as x}from"./chunk-375OYO4P.js";import{h as c}from"./chunk-EAH6BNBL.js";var O="picture-fill",M="simple-fill",I="simple-line",R="simple-marker",T="text",A="cim",v=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),w=new j(1e3);function nt(t){let o=t.style,r=null;if(t)switch(t.type){case R:o!=="cross"&&o!=="x"&&(r=t.color);break;case M:o&&o!=="solid"?o!=="none"&&(r={type:"pattern",x:0,y:0,src:S(`esri/symbols/patterns/${o}.png`),width:5,height:5}):r=t.color;break;case O:r={type:"pattern",src:t.url,width:f(t.width)*t.xscale,height:f(t.height)*t.yscale,x:f(t.xoffset),y:f(t.yoffset)};break;case T:r=t.color;break;case A:r=b(t)}return r}function lt(t,o){let r=t+"-"+o;return w.get(r)!==void 0?Promise.resolve(w.get(r)):x(t,{responseType:"image"}).then(e=>{let n=e.data,l=n.naturalWidth,i=n.naturalHeight,a=document.createElement("canvas");a.width=l,a.height=i;let s=a.getContext("2d");s.fillStyle=o,s.fillRect(0,0,l,i),s.globalCompositeOperation="destination-in",s.drawImage(n,0,0);let y=a.toDataURL();return w.put(r,y),y})}function g(t){if(!t)return null;let o=null;switch(t.type){case M:case O:case R:o=g(t.outline);break;case I:{let r=f(t.width);t.style!=null&&t.style!=="none"&&r!==0&&(o={color:t.color,style:U(t.style),width:r,cap:t.cap,join:t.join==="miter"?f(t.miterLimit):t.join},o.dashArray=N(o).join(",")||"none");break}default:o=null}return o}function N(t){if(!t?.style)return[];let{dashArray:o,style:r,width:e}=t;if(typeof o=="string"&&o!=="none")return o.split(",").map(i=>Number(i));let n=e??0,l=v.has(r)?v.get(r).map(i=>i*n):[];if(t.cap!=="butt")for(let[i,a]of l.entries())l[i]=i%2==1?a+n:Math.max(a-n,1);return l}var U=(()=>{let t={};return o=>{if(t[o])return t[o];let r=o.replaceAll("-","");return t[o]=r,r}})(),it=new u([128,128,128]);var H=new u("white");function J(t){let o=t.symbolLayers?.at(-1);if(o&&"outline"in o)return o?.outline?.size}function wt(t){if(!t)return 0;if(m(t)){let o=J(t);return o??0}return C(g(t)?.width)}function gt(t){if(t==null||!("symbolLayers"in t)||t.symbolLayers==null)return!1;switch(t.type){case"point-3d":return t.symbolLayers.some(o=>o.type==="object");case"line-3d":return t.symbolLayers.some(o=>o.type==="path");case"polygon-3d":return t.symbolLayers.some(o=>o.type==="object"||o.type==="extrude");default:return!1}}function St(t){return t.resource?.href??""}function kt(t,o){if(!t)return null;let r=null;return m(t)?r=W(t):p(t)&&(r=t.type==="cim"?b(t):t.color?new u(t.color):null),r?d(r,o):null}function W(t){let o=t.symbolLayers;if(!o)return null;let r=null;return o.forEach(e=>{e.type==="object"&&e.resource?.href||(r=e.type==="water"?e.color:e.material?e.material.color:null)}),r?new u(r):null}function d(t,o){if(o==null||t==null)return t;let r=t.toRgba();return r[3]=r[3]*o,new u(r)}function P(t,o,r){let e=t.symbolLayers;if(!e)return;let n=l=>d(o=o??l??(r!=null?H:null),r);e.forEach(l=>{if(l.type!=="object"||!l.resource?.href||o)if(l.type==="water")l.color=n(l.color);else{let i=l.material!=null?l.material.color:null,a=n(i);l.material==null?l.material=new E({color:a}):l.material.color=a,r!=null&&"outline"in l&&l.outline?.color!=null&&(l.outline.color=d(l.outline.color,r))}})}function V(t,o,r){(o=o??t.color)&&(t.color=d(o,r)),r!=null&&"outline"in t&&t.outline?.color&&(t.outline.color=d(t.outline.color,r))}function xt(t,o,r){t&&(o||r!=null)&&(o&&(o=new u(o)),m(t)?P(t,o,r):p(t)&&V(t,o,r))}function $(t,o){return c(this,null,function*(){let r=t.symbolLayers;r&&(yield k(r,e=>c(this,null,function*(){return q(e,o)})))})}function q(t,o){return c(this,null,function*(){switch(t.type){case"extrude":G(t,o);break;case"icon":case"line":case"text":B(t,o);break;case"path":Q(t,o);break;case"object":yield K(t,o)}})}function B(t,o){let r=D(o);r!=null&&(t.size=r)}function D(t){for(let o of t)if(typeof o=="number")return o;return null}function G(t,o){t.size=typeof o[2]=="number"?o[2]:0}function K(t,o){return c(this,null,function*(){let{resourceSize:r,symbolSize:e}=yield X(t),n=F(o,r,e);t.width=h(o[0],e[0],r[0],n),t.depth=h(o[1],e[1],r[1],n),t.height=h(o[2],e[2],r[2],n)})}function Q(t,o){let r=F(o,L,[t.width,void 0,t.height]);t.width=h(o[0],t.width,1,r),t.height=h(o[2],t.height,1,r)}function F(t,o,r){for(let e=0;e<3;e++){let n=t[e];switch(n){case"symbol-value":{let l=r[e];return l!=null?l/o[e]:1}case"proportional":break;default:if(n&&o[e])return n/o[e]}}return 1}function X(t){return c(this,null,function*(){let{computeObjectLayerResourceSize:o}=yield import("./chunk-DN4WGTST.js"),r=yield o(t,10),{width:e,height:n,depth:l}=t,i=[e,l,n],a=1;for(let s=0;s<3;s++){let y=i[s];if(y!=null){a=y/r[s];break}}for(let s=0;s<3;s++)i[s]==null&&(i[s]=r[s]*a);return{resourceSize:r,symbolSize:i}})}function h(t,o,r,e){switch(t){case"proportional":return r*e;case"symbol-value":return o??r;default:return t}}function Y(t,o){let r=D(o);if(r!=null)switch(t.type){case"simple-marker":t.size=r;break;case"picture-marker":{let e=t.width/t.height;e>1?(t.width=r,t.height=r*e):(t.width=r*e,t.height=r);break}case"simple-line":t.width=r;break;case"text":t.font.size=r}}function Lt(t,o){return c(this,null,function*(){if(t&&o)return m(t)?$(t,o):void(p(t)&&Y(t,o))})}function Ct(t,o,r){if(t&&o!=null)if(m(t)){let e=t.symbolLayers;e&&e.forEach(n=>{if(n&&n.type==="object")switch(r){case"tilt":n.tilt=(n.tilt??0)+o;break;case"roll":n.roll=(n.roll??0)+o;break;default:n.heading=(n.heading??0)+o}})}else p(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=o))}function zt(t){if(!t)return null;let o=t.effects.filter(r=>r.type!=="bloom").map(r=>r.toJSON());return z(o)}function jt(t){return t!=null&&t.type==="polygon-3d"&&t.symbolLayers.some(o=>o.type==="extrude")}function Et(t,o){return c(this,null,function*(){return(yield t.fetchSymbol(o))||t.fetchCIMSymbol(o)})}export{nt as a,lt as b,g as c,N as d,U as e,it as f,wt as g,gt as h,St as i,kt as j,xt as k,Lt as l,Ct as m,zt as n,jt as o,Et as p};
