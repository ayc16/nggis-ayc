import{a as st}from"./chunk-4XBATNKX.js";import{f as tt,g as nt,k as et,l as _}from"./chunk-3IJY37BG.js";import{a as U,o as Y,p as $}from"./chunk-F7PIPM6E.js";import{a as Z}from"./chunk-ES7AH7WX.js";import{a as X}from"./chunk-RJHITHLB.js";import{j as N,t as Q}from"./chunk-UI76XBLJ.js";import{b as G}from"./chunk-UE2YGKE7.js";import{B as g,L as O,M as w,d as D,e as H,k as J,n as I}from"./chunk-BE76S5KT.js";import{m as W}from"./chunk-KAAR5ZJN.js";import{A as b,h as q}from"./chunk-WKT5W7KT.js";import{r as V}from"./chunk-X3IDZTNG.js";import{h as C}from"./chunk-EAH6BNBL.js";function K(e,n,t,s,i,r){return L[0]=e,L[1]=n,L[2]=t,_(L,s,0,i,r,0,1)}var L=Z();var z=0,j=class e{static fromGE(n){let t=new e;return t._wkt=n.wkt,t._wkid=n.wkid,t._isInverse=n.isInverse,t}constructor(n){this.uid=z++,n?(this._wkt=n.wkt!=null?n.wkt:null,this._wkid=n.wkid!=null?n.wkid:-1,this._isInverse=n.isInverse!=null&&n.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(n){this._wkt=n,this.uid=z++}get wkid(){return this._wkid}set wkid(n){this._wkid=n,this.uid=z++}get isInverse(){return this._isInverse}set isInverse(n){this._isInverse=n,this.uid=z++}getInverse(){let n=new e;return n._wkt=this.wkt,n._wkid=this._wkid,n._isInverse=!this.isInverse,n}};var y=class e{static cacheKey(n,t){return[n.wkid?.toString()??"-1",n.wkt?.toString()??"",n.wkt2?.toString()??"",t.wkid?.toString()??"-1",t.wkt?.toString()??"",t.wkt2?.toString()??""].join()}static fromGE(n){let t=new e,s="";for(let i of n.steps){let r=j.fromGE(i);t.steps.push(r),s+=r.uid.toString()+","}return t._cachedProjection={},t._gtlistentry=null,t._chain=s,t}constructor(n){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,n?.steps)for(let t of n.steps)t instanceof j?this.steps.push(t):this.steps.push(new j({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}getInverse(){let n=new e;n.steps=[];for(let t=this.steps.length-1;t>=0;t--){let s=this.steps[t];n.steps.push(s.getInverse())}return n}getGTListEntry(){let n="";for(let t of this.steps)n+=t.uid.toString()+",";return n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n),this._gtlistentry}assignCachedGe(n,t,s){this._cachedProjection[e.cacheKey(n,t)]=s}getCachedGeTransformation(n,t){let s="";for(let r of this.steps)s+=r.uid.toString()+",";s!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=s);let i=this._cachedProjection[e.cacheKey(n,t)];return i===void 0?null:i}};var m=null,d=null,x=null,M={},F=new X;function A(){return!!m&&D()}function ft(){return!!A()||(W(F),E(),!1)}function Bt(e,n){return!e||!n||v(e,n)||ft()}function Ft(e,n){return!v(e,n)&&!A()}function E(e){return x==null&&(x=Promise.all([H(),import("./chunk-I5OYDN7W.js").then(n=>n.g),import("./chunk-UVCIBW67.js")])),x.then(([,n,{hydratedAdapter:t}])=>{q(e),d=t,m=n.default,m._enableProjection(J),F.notify()})}function pt(e,n,t=null,s=null){return Array.isArray(e)?e.length===0?[]:it(d,e,e[0].spatialReference,n,t,s):it(d,[e],e.spatialReference,n,t,s)[0]}function it(e,n,t,s,i=null,r=null){if(t==null||s==null)return n;if(v(t,s,i))return n.map(o=>B(o,t,s));if(i==null&&O(t))return n.map(o=>B(o,t,G.WGS84)).map(o=>T(o,s));if(i==null&&O(s))return n.map(o=>T(o,G.WGS84)).map(o=>B(o,G.WGS84,s));if(i==null){let o=y.cacheKey(t,s);M[o]!==void 0?i=M[o]:((i=mt(t,s,void 0))==null&&(i=new y),M[o]=i)}if(m==null||e==null)throw new R;return r!=null?m._project(e,n,t,s,i,r):m._project(e,n,t,s,i)}function Vt(e,n){let t=ht([e],n);return t.pending!=null?{pending:t.pending,geometry:null}:t.geometries!=null?{pending:null,geometry:t.geometries[0]}:{pending:null,geometry:null}}function ht(e,n){if(!A()){for(let t of e)if(t!=null&&!I(t.spatialReference,n)&&g(t.spatialReference)&&g(n)&&!v(t.spatialReference,n))return W(F),{pending:E(),geometries:null}}return{pending:null,geometries:e.map(t=>t==null?null:I(t.spatialReference,n)?t:g(t.spatialReference)&&g(n)?T(t,n):null)}}function mt(e,n,t=null){if(e==null||n==null)return null;if(m==null||d==null)throw new R;let s=m._getTransformation(d,e,n,t,t?.spatialReference);return s!==null?y.fromGE(s):null}function qt(e,n,t=null){if(m==null||d==null)throw new R;let s=m._getTransformationBySuitability(d,e,n,t,t?.spatialReference);if(s!==null){let i=[];for(let r of s)i.push(y.fromGE(r));return i}return[]}var R=class extends V{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}};function Xt(){m=null,d=null,x=null,M={}}var Dt={get loadPromise(){return x}};function T(e,n){try{let t=pt(e,n);if(t==null)return null;"xmin"in e&&"xmin"in t&&(t.zmin=e.zmin,t.zmax=e.zmax);let s=st(t.type,e.spatialReference,n);return s?.(t),t}catch(t){if(!(t instanceof R))throw t;return null}}function Ht(e,n,t){return C(this,null,function*(){let s=e.spatialReference;return s!=null&&n!=null&&(yield dt(s,n,null,t)),T(e,n)})}function v(e,n,t){return!t&&(!!I(e,n)||g(e)&&g(n)&&!!nt(e,n,et))}function dt(e,n,t,s){return C(this,null,function*(){if(A())return b(s);if(Array.isArray(e)){for(let{source:i,dest:r,geographicTransformation:o}of e)if(i&&r&&!v(i,r,o))return E(s)}else if(e&&n&&!v(e,n,t))return E(s);return b(s)})}function B(e,n,t){return e?"x"in e?rt(e,n,new N,t,0):"xmin"in e?ut(e,n,new Q,t,0):"rings"in e?lt(e,n,new Y,t,0):"paths"in e?at(e,n,new $,t,0):"points"in e?ot(e,n,new U,t,0):null:null}function Jt(e,n,t=n.spatialReference,s=0){return t!=null&&e.spatialReference!=null&&rt(e,e.spatialReference,n,t,s)!=null}function rt(e,n,t,s,i){u[0]=e.x,u[1]=e.y;let r=e.z;return u[2]=r!==void 0?r:i,_(u,n,0,u,s,0,1)?(t.x=u[0],t.y=u[1],t.spatialReference=s,r!==void 0||w(s)?(t.z=u[2],t.hasZ=!0):(t.z=void 0,t.hasZ=!1),e.m===void 0?(t.m=void 0,t.hasM=!1):(t.m=e.m,t.hasM=!0),t):null}function Nt(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&ot(e,e.spatialReference,n,t,s)!=null}function ot(e,n,t,s,i){let{points:r,hasZ:o,hasM:a}=e,l=[],p=r.length,h=[];for(let c of r)h.push(c[0],c[1],o?c[2]:i);if(!_(h,n,0,h,s,0,p))return null;let f=o||w(s);for(let c=0;c<p;++c){let k=3*c,P=h[k],S=h[k+1];f&&a?l.push([P,S,h[k+2],r[c][3]]):f?l.push([P,S,h[k+2]]):a?l.push([P,S,r[c][2]]):l.push([P,S])}return t.points=l,t.spatialReference=s,t.hasZ=o,t.hasM=a,t}function Qt(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&at(e,e.spatialReference,n,t,s)!=null}function at(e,n,t,s,i){let{paths:r,hasZ:o,hasM:a}=e,l=[];if(!ct(r,o??!1,a??!1,n,l,s,i))return null;let p=o||w(s);return t.paths=l,t.spatialReference=s,t.hasZ=p,t.hasM=a,t}function Ut(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&lt(e,e.spatialReference,n,t,s)!=null}function lt(e,n,t,s,i){let{rings:r,hasZ:o,hasM:a}=e,l=[];if(!ct(r,o??!1,a??!1,n,l,s,i))return null;let p=o||w(s);return t.rings=l,t.spatialReference=s,t.hasZ=p,t.hasM=a,t}function Yt(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&ut(e,e.spatialReference,n,t,s)!=null}function ut(e,n,t,s,i){let{xmin:r,ymin:o,xmax:a,ymax:l,hasZ:p,hasM:h}=e,f=p?e.zmin:i;if(!K(r,o,f,n,u,s))return null;let c=p||w(s);t.xmin=u[0],t.ymin=u[1],c&&(t.zmin=u[2]);let k=p?e.zmax:i;return K(a,l,k,n,u,s)?(t.xmax=u[0],t.ymax=u[1],c&&(t.zmax=u[2]),h&&(t.mmin=e.mmin,t.mmax=e.mmax),t.spatialReference=s,t):null}function ct(e,n,t,s,i,r,o=0){let a=new Array;for(let h of e)for(let f of h)a.push(f[0],f[1],n?f[2]:o);if(!_(a,s,0,a,r,0,a.length/3))return!1;let l=0;i.length=0;let p=n||w(r);for(let h of e){let f=new Array;for(let c of h)p&&t?f.push([a[l++],a[l++],a[l++],c[3]]):p?f.push([a[l++],a[l++],a[l++]]):t?(f.push([a[l++],a[l++],c[2]]),l++):(f.push([a[l++],a[l++]]),l++);i.push(f)}return!0}function $t(e){return e!=null&&tt(e)!=null}var u=Z();export{y as a,A as b,ft as c,Bt as d,Ft as e,E as f,pt as g,it as h,Vt as i,ht as j,mt as k,qt as l,Xt as m,Dt as n,T as o,Ht as p,v as q,dt as r,B as s,Jt as t,Nt as u,Qt as v,Ut as w,Yt as x,$t as y};
