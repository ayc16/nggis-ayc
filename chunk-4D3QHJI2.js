function u(){let t=new Float32Array(6);return t[0]=1,t[3]=1,t}function f(t){let n=new Float32Array(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function i(t,n,o,r,c,a){let e=new Float32Array(6);return e[0]=t,e[1]=n,e[2]=o,e[3]=r,e[4]=c,e[5]=a,e}function m(t,n){return new Float32Array(t,n,6)}function l(t,n,o,r){let c=n[r],a=n[r+1];t[r]=o[0]*c+o[2]*a+o[4],t[r+1]=o[1]*c+o[3]*a+o[5]}function y(t,n,o,r=0,c=0,a=2){let e=c||n.length/a;for(let s=r;s<e;s++)l(t,n,o,s*a)}var w=Object.freeze(Object.defineProperty({__proto__:null,clone:f,create:u,createView:m,fromValues:i,transform:l,transformMany:y},Symbol.toStringTag,{value:"Module"}));export{u as a,y as b};
