import{b as M}from"./chunk-AM3VOA32.js";import{b as g}from"./chunk-SAOUSUZE.js";import{b as i,d as c}from"./chunk-EBWCXIFH.js";function h(){let r=new Float32Array(16);return r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function D(r){let t=new Float32Array(16);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function H(r,t,s,e,n,I,J,R,Y,v,V,X,k,F,T,A){let a=new Float32Array(16);return a[0]=r,a[1]=t,a[2]=s,a[3]=e,a[4]=n,a[5]=I,a[6]=J,a[7]=R,a[8]=Y,a[9]=v,a[10]=V,a[11]=X,a[12]=k,a[13]=F,a[14]=T,a[15]=A,a}function P(r,t){return new Float32Array(r,t,16)}var j=h(),z=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:j,clone:D,create:h,createView:P,fromValues:H},Symbol.toStringTag,{value:"Module"}));var x=(r,t)=>{let s=i(r,t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1);return c(s,s)},b=(r,t)=>{let s=i(r,t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1);return c(s,s)},w=(r,t)=>{let s=1-t,e=i(r,.2126+.7874*s,.7152-.7152*s,.0722-.0722*s,0,.2126-.2126*s,.7152+.2848*s,.0722-.0722*s,0,.2126-.2126*s,.7152-.7152*s,.0722+.9278*s,0,0,0,0,1);return c(e,e)},_=(r,t)=>{let s=Math.sin(t*Math.PI/180),e=Math.cos(t*Math.PI/180),n=i(r,.213+.787*e-.213*s,.715-.715*e-.715*s,.072-.072*e+.928*s,0,.213-.213*e+.143*s,.715+.285*e+.14*s,.072-.072*e-.283*s,0,.213-.213*e-.787*s,.715-.715*e+.715*s,.072+.928*e+.072*s,0,0,0,0,1);return c(n,n)},E=(r,t)=>{let s=1-2*t,e=i(r,s,0,0,t,0,s,0,t,0,0,s,t,0,0,0,1);return c(e,e)},N=(r,t)=>{let s=i(r,.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1);return c(s,s)},O=(r,t)=>{let s=1-t,e=i(r,.393+.607*s,.769-.769*s,.189-.189*s,0,.349-.349*s,.686+.314*s,.168-.168*s,0,.272-.272*s,.534-.534*s,.131+.869*s,0,0,0,0,1);return c(e,e)};var f=class r{constructor(t,s,e){this.strength=t,this.radius=s,this.threshold=e,this.type="bloom"}interpolate(t,s,e){this.strength=o(t.strength,s.strength,e),this.radius=o(t.radius,s.radius,e),this.threshold=o(t.threshold,s.threshold,e)}clone(){return new r(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:u(this.radius),strength:this.strength,threshold:this.threshold}}},p=class r{constructor(t){this.radius=t,this.type="blur"}interpolate(t,s,e){this.radius=Math.round(o(t.radius,s.radius,e))}clone(){return new r(this.radius)}toJSON(){return{type:"blur",radius:u(this.radius)}}},l=class r{constructor(t,s){this.type=t,this.amount=s,this.type!=="invert"&&this.type!=="grayscale"&&this.type!=="sepia"||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,s,e){this.amount=o(t.amount,s.amount,e),this._updateMatrix()}clone(){return new r(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){let t=this._colorMatrix||h();switch(this.type){case"brightness":this._colorMatrix=x(t,this.amount);break;case"contrast":this._colorMatrix=b(t,this.amount);break;case"grayscale":this._colorMatrix=w(t,this.amount);break;case"invert":this._colorMatrix=E(t,this.amount);break;case"saturate":this._colorMatrix=N(t,this.amount);break;case"sepia":this._colorMatrix=O(t,this.amount)}}},d=class r{constructor(t,s,e,n){this.offsetX=t,this.offsetY=s,this.blurRadius=e,this.color=n,this.type="drop-shadow"}interpolate(t,s,e){this.offsetX=o(t.offsetX,s.offsetX,e),this.offsetY=o(t.offsetY,s.offsetY,e),this.blurRadius=o(t.blurRadius,s.blurRadius,e),this.color[0]=Math.round(o(t.color[0],s.color[0],e)),this.color[1]=Math.round(o(t.color[1],s.color[1],e)),this.color[2]=Math.round(o(t.color[2],s.color[2],e)),this.color[3]=o(t.color[3],s.color[3],e)}clone(){return new r(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){let t=[...this.color];return t[3]*=255,{type:"drop-shadow",xoffset:u(this.offsetX),yoffset:u(this.offsetY),blurRadius:u(this.blurRadius),color:t}}},m=class r{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,s,e){this.angle=o(t.angle,s.angle,e),this._updateMatrix()}clone(){return new r(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){let t=this._colorMatrix||h();this._colorMatrix=_(t,this.angle)}},y=class r{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,s,e){this.amount=o(t.amount,s.amount,e)}clone(){return new r(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}};function o(r,t,s){return r+(t-r)*s}function u(r){return Math.round(1e3*M(r))/1e3}function S(r){switch(r.type){case"grayscale":case"sepia":case"invert":return new l(r.type,0);case"saturate":case"brightness":case"contrast":return new l(r.type,1);case"opacity":return new y(1);case"hue-rotate":return new m(0);case"blur":return new p(0);case"drop-shadow":return new d(0,0,0,[...g("transparent")]);case"bloom":return new f(0,0,1)}}function Z(r,t){let s=r.length>t.length?r:t;return(r.length>t.length?t:r).every((e,n)=>e.type===s[n].type)}function $(r,t){let s=r.length>t.length?r:t,e=r.length>t.length?t:r;for(let n=e.length;n<s.length;n++)e.push(S(s[n]))}function tt(r){let t=r[0];return!!t&&"type"in t}export{f as a,p as b,l as c,d,m as e,y as f,Z as g,$ as h,tt as i};
