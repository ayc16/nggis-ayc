function a(){return new Float32Array(4)}function N(t){let n=new Float32Array(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function e(t,n,l,_){let r=new Float32Array(4);return r[0]=t,r[1]=n,r[2]=l,r[3]=_,r}function T(t,n){return new Float32Array(t,n,4)}function o(){return a()}function u(){return e(1,1,1,1)}function s(){return e(1,0,0,0)}function i(){return e(0,1,0,0)}function c(){return e(0,0,1,0)}function f(){return e(0,0,0,1)}var I=o(),U=u(),w=s(),y=i(),O=c(),S=f(),Z=Object.freeze(Object.defineProperty({__proto__:null,ONES:U,UNIT_W:S,UNIT_X:w,UNIT_Y:y,UNIT_Z:O,ZEROS:I,clone:N,create:a,createView:T,fromValues:e,ones:u,unitW:f,unitX:s,unitY:i,unitZ:c,zeros:o},Symbol.toStringTag,{value:"Module"}));export{N as a,e as b};
