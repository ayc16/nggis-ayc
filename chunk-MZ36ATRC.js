import{d as E}from"./chunk-6SLEAPTS.js";import{a as x}from"./chunk-PYUETFC3.js";import{a as y}from"./chunk-BVW6ULEA.js";import{a as u}from"./chunk-C6JT6KYF.js";import{b as h}from"./chunk-Z5Q76SB7.js";import{a as r}from"./chunk-ES7AH7WX.js";import{b as m}from"./chunk-UE2YGKE7.js";import{_ as T}from"./chunk-CTGIUUCS.js";import{x as w,z as I}from"./chunk-IQJU4QT3.js";import{a as i,b as c,h as d}from"./chunk-EAH6BNBL.js";function M(e,a,t,f){return{x:e,y:a,z:t,hasZ:t!=null,hasM:!1,spatialReference:f,type:"point"}}var K=M(0,0,0,m.WGS84);var A=1,ee=5-A;var s;(function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"})(s||(s={}));function R(e){return c(i(i({},O),e),{type:"solid"})}var O={color:h(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:s.OPAQUE,hasSlicePlane:!1},he={color:h(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:s.OPAQUE,hasSlicePlane:!1};var st=u();var v;function lt(e,a,t,f,C,P,L,k){return d(this,null,function*(){let p=[];for(let n of a)if(n&&C.includes(n.name)){let o=`${e}/nodes/${t}/attributes/${n.key}/0`;p.push({url:o,storageInfo:n})}let g=yield Promise.allSettled(p.map(n=>T(n.url,{responseType:"array-buffer",query:c(i({},L),{token:P}),signal:k?.signal}).then(o=>E(n.storageInfo,o.data)))),b=[];for(let n of f){let o={};for(let l=0;l<g.length;l++){let S=g[l];if(S.status==="fulfilled"){let N=S.value;o[p[l].storageInfo.name]=W(N,n)}}b.push(o)}return b})}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(v||(v={}));var D=-32768,F=-(2**31);function W(e,a){if(!e)return null;let t=e[a];return w(e)?t===D?null:t:I(e)?t===F?null:t:t!=t?null:t}var ct=R({color:[0,0,0,0],opacity:0});var ut=[r(),r(),r(),r(),r(),r(),r(),r()],ft=u(),pt=u(),dt=new x,mt=r(),ht={data:new Array(72),size:3,exclusive:!0,stride:3},yt=y();export{lt as a};