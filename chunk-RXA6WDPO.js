import{O as V,v as N}from"./chunk-QRTF6HWT.js";import{e as x}from"./chunk-7E3X25PE.js";import{b as U}from"./chunk-3DDJTCET.js";import{b as m}from"./chunk-KUOODJRB.js";import{c as E,d as g}from"./chunk-A2AOHK3A.js";import{b as h,d as v}from"./chunk-TIXZ4OWB.js";import{a as i}from"./chunk-UVJ5D37D.js";import{e as w}from"./chunk-ZHUHFKYD.js";import{a as y,c as I}from"./chunk-SKXQUOOX.js";import{a as C}from"./chunk-4QS7PGAF.js";import{a as L}from"./chunk-XHOTVM3O.js";import{a as O}from"./chunk-PDBA6QOJ.js";import{e as S,j as P}from"./chunk-KYNKUTEO.js";import{b,z as F}from"./chunk-2ETHV3H2.js";import{f as R}from"./chunk-M2GLXRA2.js";import{a as D}from"./chunk-GJP6PTKT.js";import{I as A}from"./chunk-JDDD6VJ4.js";var j;(function(t){t[t.EnableFastUpdates=0]="EnableFastUpdates",t[t.DisableFastUpdates=1]="DisableFastUpdates",t[t.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"})(j||(j={}));var l={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},M={dash:l.dash,"dash-dot":[...l.dash,...l.dot],dot:l.dot,"long-dash":l["long-dash"],"long-dash-dot":[...l["long-dash"],...l.dot],"long-dash-dot-dot":[...l["long-dash"],...l.dot,...l.dot],none:null,"short-dash":l["short-dash"],"short-dash-dot":[...l["short-dash"],...l["short-dot"]],"short-dash-dot-dot":[...l["short-dash"],...l["short-dot"],...l["short-dot"]],"short-dot":l["short-dot"],solid:null},B=8;function Z(t,o){return t==null?t:{pattern:t.slice(),pixelRatio:o}}function ot(t){return{pattern:[t,t],pixelRatio:2}}function et(t){return t!=null&&t.type==="style"?G(t.style):null}function G(t){return t!=null?Z(M[t],B):null}function yt(t,o,e=null){let r=[],s=o.mapPositions;_(o,r);let u=r[0][1].data,a=r[0][1].indices.length,n=w(a);return H(o,r,n),k(o,r,n),W(o,r,n),Y(o,r,n),J(o,r,n),q(o,r,n),K(o,r,u),new x(t,r,s,U.Line,e)}function _(t,o){let{attributeData:{position:e},removeDuplicateStartEnd:r}=t,s=Q(e)&&r,u=e.length/3-(s?1:0),a=new Array(2*(u-1)),n=s?e.slice(0,-3):e,p=0;for(let c=0;c<u-1;c++)a[p++]=c,a[p++]=c+1;o.push([i.POSITION,new m(n,a,3,s)])}function H(t,o,e){if(t.attributeData.colorFeature!=null)return;let r=t.attributeData.color;o.push([i.COLOR,new m(r??R,e,4)])}function W(t,o,e){t.attributeData.normal&&o.push([i.NORMAL,new m(t.attributeData.normal,e,3)])}function Y(t,o,e){t.attributeData.colorFeature!=null&&o.push([i.COLORFEATUREATTRIBUTE,new m([t.attributeData.colorFeature],e,1,!0)])}function k(t,o,e){t.attributeData.sizeFeature==null&&o.push([i.SIZE,new m([t.attributeData.size??1],e,1,!0)])}function J(t,o,e){t.attributeData.sizeFeature!=null&&o.push([i.SIZEFEATUREATTRIBUTE,new m([t.attributeData.sizeFeature],e,1,!0)])}function q(t,o,e){t.attributeData.opacityFeature!=null&&o.push([i.OPACITYFEATUREATTRIBUTE,new m([t.attributeData.opacityFeature],e,1,!0)])}function K(t,o,e){if(t.overlayInfo==null||t.overlayInfo.renderCoordsHelper.viewingMode!==L.Global||!t.overlayInfo.spatialReference.isGeographic)return;let r=y(e.length),s=A(t.overlayInfo.spatialReference);for(let d=0;d<r.length;d+=3)S(e,d,r,d,s);let u=e.length/3,a=v(u+1),n=X,p=$,c=0,f=0;b(n,r[f++],r[f++]),f++,a[0]=0;for(let d=1;d<u+1;++d)d===u&&(f=0),b(p,r[f++],r[f++]),f++,c+=F(n,p),a[d]=c,[n,p]=[p,n];o.push([i.DISTANCETOSTART,new m(a,o[0][1].indices,1,!0)])}function Q(t){let o=t.length;return t[0]===t[o-3]&&t[1]===t[o-2]&&t[2]===t[o-1]}var X=O(),$=O();function Dt(t,o,e,r){let s=t.type==="polygon"?g.CCW_IS_HOLE:g.NONE,u=t.type==="polygon"?t.rings:t.paths,{position:a,outlines:n}=E(u,!!t.hasZ,s,t.spatialReference),p=y(a.length),c=V(a,t.spatialReference,0,p,0,a,0,a.length/3,o,e,r),f=c!=null;return{lines:f?z(n,a,p):[],projectionSuccess:f,sampledElevation:c}}function Rt(t,o){let e=t.type==="polygon"?g.CCW_IS_HOLE:g.NONE,r=t.type==="polygon"?t.rings:t.paths,{position:s,outlines:u}=E(r,!1,e),a=P(s,t.spatialReference,0,s,o,0,s.length/3);for(let n=2;n<s.length;n+=3)s[n]=N;return{lines:a?z(u,s):[],projectionSuccess:a}}function z(t,o,e=null){let r=new Array;for(let{index:s,count:u}of t){if(u<=1)continue;let a=3*s,n=3*u;r.push({position:I(o,3*s,3*u),mapPositions:e!=null?I(e,a,n):void 0})}return r}function Ct(t,o,e){return!!C(t,o,T,e.spatialReference)&&(e.x=T[0],e.y=T[1],e.z=T[2],!0)}var T=D();var jt=h().vec3f(i.POSITION),zt=h().vec3f(i.POSITION).vec2f(i.UV0),Mt=h().vec3f(i.POSITION).vec4u8(i.COLOR),Bt=h().vec3f(i.POSITION).vec2f(i.UV0).vec4u8(i.OBJECTANDLAYERIDCOLOR);export{j as a,ot as b,et as c,yt as d,Dt as e,Rt as f,jt as g,zt as h,Mt as i,Bt as j,Ct as k};
