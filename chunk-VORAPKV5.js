import{a as T,c as k,e as D,f as O,g as w,h as b}from"./chunk-7SVLZCA4.js";import{b as f,d as l,i as z}from"./chunk-GAF32LQP.js";import{a as N,d as P}from"./chunk-DJEFBPF6.js";import{J as S}from"./chunk-DYVXH2D6.js";import{a as p}from"./chunk-4QS7PGAF.js";import{a as C,h as F}from"./chunk-PDBA6QOJ.js";import{u as q}from"./chunk-2ETHV3H2.js";import{B as L,b as j,c as y}from"./chunk-OZF6BMOL.js";import{a}from"./chunk-GJP6PTKT.js";import{c as Z}from"./chunk-VNB5ZT3P.js";import{R,l as v,la as U,o as x,t as B}from"./chunk-JDDD6VJ4.js";var o;function K(e,t){if(e==null||t==null)return;let r=I(e,t);return r!=null?l(r,"radians","geographic"):void 0}(function(e){e.Absolute="absolute",e.Relative="relative",e.RelativeBilateral="relative-bilateral"})(o||(o={}));var I=(()=>{let e=a(),t=a();return(r,n)=>(y(e,r.x,r.y,r.z??0),y(t,n.x,n.y,n.z??0),Q(e,t,r.spatialReference,n.spatialReference))})(),Q=(()=>{let e=C(),t=a(),r=a();return(n,i,m,g)=>{if(L(n,i))return;let s=b(m),u=b(g);if(s&&u&&v(s,u)&&p(n,m,t,s)&&p(i,g,r,u)){let{azimuth:d}=w($,t,r,s);return d!=null?R(d,"degrees","radians"):void 0}e[0]=i[0]-n[0],e[1]=i[1]-n[1];let c=q(F,e);return e[0]<0&&(c=ee-c),c}})();function ye(e,t,r,n=o.Absolute){if(t&&r)switch(n){case o.Absolute:return K(t,r);case o.Relative:return Y(W(e,t,r),o.Relative);case o.RelativeBilateral:return Y(W(e,t,r),o.RelativeBilateral)}}function W(e,t,r){if(!e||!t||!r)return;let n=I(e,t),i=I(t,r);return n!=null&&i!=null?l(i-n,"radians","geographic"):void 0}function Y(e,t){if(e!=null)switch(t){case o.Absolute:return X(e);case o.Relative:{let r=A(e),n=_.normalize(r,0,!0);return n===-180&&(n=180),l(n,"degrees","geographic")}case o.RelativeBilateral:{let r=A(e),n=Math.abs(_.normalize(r,0,!0));return l(n,"degrees","geographic")}}}function X(e){let t=A(e),r=te.normalize(t,0,!0);return l(r,"degrees","geographic")}var ze=(()=>{let e=a();return(t,r,n,i,m,g="geodesic")=>{j(e,r);let s=A(m);if(g==="geodesic"){let h=b(n);if(h&&p(e,n,e,h))return O(t,e,s,i,h),t[2]=r[2],!!p(t,h,t,n)}let u=z(s,"geographic","arithmetic"),c=R(u,"degrees","radians"),d=r[0]+i*Math.cos(c),H=r[1]+i*Math.sin(c),J=r[2];return y(t,d,H,J),!0}})();function A(e){if(e!=null)return z(E(e),e.rotationType,"geographic")}function De(e){if(e!=null)return z(E(e),e.rotationType,"arithmetic")}function E(e){return R(e.value,e.unit,"degrees")}var $=new D,ee=2*Math.PI,te=P,_=new N(-180,180);function Ge(e){return x(e)&&T(e)||B(e)}function V(e,t,r,...n){return x(e)&&T(e)?t.apply(void 0,n):B(e)?r.apply(void 0,n):null}function Ue(e){let{spatialReference:t}=e;return V(t,oe,ae,e)}function je(e,t){if(!v(e.spatialReference,t.spatialReference))return null;let{spatialReference:r}=e;return G[0]=e.x,G[1]=e.y,G[2]=e.hasZ?e.z:0,M[0]=t.x,M[1]=t.y,M[2]=t.hasZ?t.z:0,re(G,M,r)}function re(e,t,r){return V(r,ne,ie,e,t,r)}function ne(e,t,r){return f(w(ce,e,t,r).distance,"meters")}function ie(e,t,r){return f(S(se(e,t,r),"meters"),"meters")}function oe(e){return f(k([e],"meters")[0],"meters")}function ae(e){return f(S(e,"meters"),"meters")}function se(e,t,r){return{type:"polyline",spatialReference:r,paths:[[[...e],[...t]]]}}var ce=new D,G=a(),M=a();function Fe(e){let t="metric";if(e==null)return t;let r=e.map,n=(r&&"portalItem"in r?r.portalItem?.portal:null)??Z.getDefault();switch(n.user?.units??n.units){case t:return t;case"english":return"imperial"}return U(e.spatialReference)??t}export{Fe as a,o as b,K as c,Q as d,ye as e,Y as f,X as g,ze as h,A as i,De as j,Ge as k,V as l,Ue as m,je as n,re as o};