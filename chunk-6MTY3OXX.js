import{a as sr,d as Ur}from"./chunk-CGZE4C6W.js";import{a as M,b as j}from"./chunk-CLDJAOGN.js";import{a as I,b as ir,c as Wr}from"./chunk-YIRBKWRK.js";import{a as G}from"./chunk-IFFYADB3.js";import{a as x,c as V}from"./chunk-BVW6ULEA.js";import{a as W}from"./chunk-7C6Z24SS.js";import{b,d as er,e as Br}from"./chunk-C4XQ3IUU.js";import{c as R,e as T,h as Lr,j as tr}from"./chunk-H34WFTDW.js";import{c as h,k as A}from"./chunk-AWOMJTYJ.js";import{a as or,d as nr,n as S,o as ar}from"./chunk-V5AJXD2Y.js";import{q as Ir}from"./chunk-XFK3CDZ5.js";import{l as w}from"./chunk-3IJY37BG.js";import{d as U,e as Or,g as Er,n as Nr,o as _r,q as Vr,r as Gr}from"./chunk-K5NHJTKR.js";import{f as jr,g as rr}from"./chunk-6FWNINU2.js";import{A as X,E as K,F as Q,H as Sr,a as N,b as _,c as Cr,d as Mr,e as J,g as vr,h as wr,i as Rr,k as br}from"./chunk-ES7AH7WX.js";import{c as dr}from"./chunk-UI76XBLJ.js";import{P as Tr,W as xr,t as Ar,x as Pr,z as Fr}from"./chunk-BE76S5KT.js";import{F,Q as hr,c as gr}from"./chunk-VWEBO6QK.js";import{S as yr}from"./chunk-KAAR5ZJN.js";import{a as y}from"./chunk-W3WDPWBE.js";import{p as E}from"./chunk-X3IDZTNG.js";function d(r=lr){return[r[0],r[1],r[2],r[3]]}function B(r,t,e=d()){return br(e,r),e[3]=t,e}function _t(r,t=d()){let e=Nr(L,r);return Zr(t,rr(ir(t,e))),t}function qr(r,t,e=d()){return I(L,r,z(r)),I(zr,t,z(t)),Wr(L,zr,L),Zr(e,rr(ir(e,L)))}function Vt(r,t,e,o=d()){return B(vr,r,q),B(wr,t,Yr),B(Rr,e,Dr),qr(q,Yr,q),qr(q,Dr,o),o}function kr(r){return r[3]}function z(r){return jr(r[3])}function Zr(r,t){return r[3]=t,r}var lr=[0,0,1,0],L=G(),zr=G(),Gt=d(),q=d(),Yr=d(),Dr=d();var cr,u=cr=class extends hr{constructor(r){super(r),this.translation=N(),this.rotationAxis=Mr(lr),this.rotationAngle=0,this.scale=Cr(1,1,1)}get rotation(){return B(this.rotationAxis,this.rotationAngle)}set rotation(r){this.rotationAxis=_(r),this.rotationAngle=kr(r)}get localMatrix(){let r=x();return I($r,this.rotation,z(this.rotation)),_r(r,$r,this.translation,this.scale),r}get localMatrixInverse(){return U(x(),this.localMatrix)}applyLocal(r,t){return K(t,r,this.localMatrix)}applyLocalInverse(r,t){return K(t,r,this.localMatrixInverse)}equals(r){return this===r||r!=null&&Vr(this.localMatrix,r.localMatrix)}clone(){let r={translation:_(this.translation),rotationAxis:_(this.rotationAxis),rotationAngle:this.rotationAngle,scale:_(this.scale)};return new cr(r)}};y([F({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"translation",void 0),y([F({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"rotationAxis",void 0),y([F({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"rotationAngle",void 0),y([F({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"scale",void 0),y([F()],u.prototype,"rotation",null),y([F()],u.prototype,"localMatrix",null),y([F()],u.prototype,"localMatrixInverse",null),u=cr=y([yr("esri.geometry.support.MeshTransform")],u);var $r=G(),pr=u;function fr(r,t){return r.isGeographic||r.isWebMercator&&(t??!0)}function mr(r,t){switch(r.type){case"georeferenced":return t.isGeographic;case"local":return t.isGeographic||t.isWebMercator}}function ne(r,t,e,o){if(o!==void 0){gr(E.getLogger(r),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});let n=t.type==="local";if(!b(t)||o===n)return e.isGeographic||e.isWebMercator&&o;E.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${o}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}return mr(t,e)}var k=()=>E.getLogger("esri.geometry.support.meshUtils.normalProjection");function Hr(r,t,e,o,n){return $(o)?(Z(P.TO_PCPF,h.fromTypedArray(r),A.fromTypedArray(t),A.fromTypedArray(e),o,h.fromTypedArray(n)),n):(k().error("Cannot convert spatial reference to PCPF"),n)}function Jr(r,t,e,o,n){return $(o)?(Z(P.FROM_PCPF,h.fromTypedArray(r),A.fromTypedArray(t),A.fromTypedArray(e),o,h.fromTypedArray(n)),n):(k().error("Cannot convert to spatial reference from PCPF"),n)}function Xr(r,t,e){return w(r,t,0,e,M(t),0,r.length/3),e}function Kr(r,t,e){return w(r,M(e),0,t,e,0,r.length/3),t}function Qr(r,t,e){return S(p,e),T(t,r,p),ar(p)||tr(t,t),t}function rt(r,t,e){if(S(p,e),T(t,r,p,4),ar(p)||tr(t,t,4),r!==t)for(let o=3;o<r.length;o+=4)t[o]=r[o];return t}function tt(r,t,e,o,n){if(!$(o))return k().error("Cannot convert spatial reference to PCPF"),n;Z(P.TO_PCPF,h.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(t),A.fromTypedArray(e),o,h.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function et(r,t,e,o,n){if(!$(o))return k().error("Cannot convert to spatial reference from PCPF"),n;Z(P.FROM_PCPF,h.fromTypedArray(r,16),A.fromTypedArray(t),A.fromTypedArray(e),o,h.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Z(r,t,e,o,n,a){if(!t)return;let l=e.count,c=M(n);if(ot(n))for(let s=0;s<l;s++)o.getVec(s,Y),t.getVec(s,g),j(c,Y,D,c),or(p,D),r===P.FROM_PCPF&&nr(p,p),Q(g,g,p),a.setVec(s,g);else for(let s=0;s<l;s++){o.getVec(s,Y),t.getVec(s,g),j(c,Y,D,c),or(p,D);let i=dr(e.get(s,1)),f=Math.cos(i);r===P.TO_PCPF&&(f=1/f),p[0]*=f,p[1]*=f,p[2]*=f,p[3]*=f,p[4]*=f,p[5]*=f,r===P.FROM_PCPF&&nr(p,p),Q(g,g,p),X(g,g),a.setVec(s,g)}return a}function $(r){return ot(r)||mt(r)}function ot(r){return r.isWGS84||Ar(r)||Pr(r)||Fr(r)}function mt(r){return r.isWebMercator}var P;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(P||(P={}));var Y=N(),g=N(),D=x(),p=W();function at(r,t,e){return fr(t.spatialReference,e?.geographic)?st(r,t,!1,e):yt(r,t,e)}function ut(r,t=V){let{position:e,normal:o,tangent:n}=r;return{position:R(new Float64Array(e.length),e,t),normal:o!=null?Qr(o,new Float32Array(o.length),t):null,tangent:n!=null?rt(n,new Float32Array(n.length),t):null}}function gt(r,t,e,o){let{position:n,normal:a,tangent:l}=r;if(!b(t))return{position:n,normal:a,tangent:l};let c=er(t,o);return at(ut(r,e?.localMatrix),c,{geographic:t.type==="local"})}function Ie(r,t,e){let o=Br(t,e),n=t.spatialReference,a=b(o);if(!a)return{vertexAttributes:at(r,t,e),vertexSpace:o,transform:null};let{position:l,normal:c,tangent:s}=r,i=mr(o,n);switch(o.type){case"georeferenced":return i?{vertexAttributes:st(r,t,a,e),vertexSpace:o,transform:null}:{vertexAttributes:{position:l,normal:c,tangent:s},vertexSpace:o,transform:new pr};case"local":return{vertexAttributes:{position:l,normal:c,tangent:s},vertexSpace:o,transform:new pr}}}function nt(r,t,e){return fr(t.spatialReference,e?.geographic)?Ft(r,t,e):it(r,t,e)}function Le(r,t,e,o,n){if(!b(t))return nt(r,o,n);let{spatialReference:a}=o,l=gt(r,t,e,a);return o.equals(er(t,a))?it(l,o,n):nt(l,o,n)}function Be({positions:r,transform:t,vertexSpace:e,inSpatialReference:o,outSpatialReference:n,outPositions:a,localMode:l}){let c=e.origin??J,s=e.origin!=null?t?.localMatrix??V:V;if(e.type==="georeferenced"){let m=a??sr(r.length);if(Gr(s,V)?Ur(m,r):R(m,r,s),!Sr(c,J)){let[H,pt,ft]=c;for(let O=0;O<m.length;O+=3)m[O]+=H,m[O+1]+=pt,m[O+2]+=ft}return w(m,o,0,m,n,0,m.length/3),m}let i=o,f=M(o);i=n.isWebMercator&&l||!Ir(o,f)?i:f,j(o,c,v,i),Or(v,v,s);let C=a??sr(r.length);return R(C,r,v),w(C,i,0,C,n,0,C.length/3),C}function yt(r,t,e){let o=new Float64Array(r.position.length),n=r.position,a=t.x,l=t.y,c=t.z??0,s=ur(e?e.unit:null,t.spatialReference);for(let i=0;i<n.length;i+=3)o[i]=n[i]*s+a,o[i+1]=n[i+1]*s+l,o[i+2]=n[i+2]*s+c;return{position:o,normal:r.normal,tangent:r.tangent}}function st(r,t,e,o){let n=t.spatialReference,a=lt(t,o,v),l=new Float64Array(r.position.length),c=ht(r.position,a,n,l),s=S(ct,a),i=At(c,l,r.normal,s,n),f=Pt(c,l,r.tangent,s,n);if(e){let{x:C,y:m,z:H}=t;Lr(c,c,[-C,-m,-(H??0)])}return{position:c,normal:i,tangent:f}}function ht(r,t,e,o){R(o,r,t);let n=new Float64Array(r.length);return Kr(o,n,e)}function At(r,t,e,o,n){if(e==null)return null;let a=new Float32Array(e.length);return T(a,e,o),Jr(a,r,t,n,a),a}function Pt(r,t,e,o,n){if(e==null)return null;let a=new Float32Array(e.length);T(a,e,o,4);for(let l=3;l<a.length;l+=4)a[l]=e[l];return et(a,r,t,n,a),a}function it(r,t,e){let o=new Float64Array(r.position.length),n=r.position,a=t.x,l=t.y,c=t.z??0,s=ur(e?e.unit:null,t.spatialReference);for(let i=0;i<n.length;i+=3)o[i]=(n[i]-a)/s,o[i+1]=(n[i+1]-l)/s,o[i+2]=(n[i+2]-c)/s;return{position:o,normal:r.normal,tangent:r.tangent}}function Ft(r,t,e){let o=t.spatialReference;lt(t,e,v);let n=U(Ct,v),a=new Float64Array(r.position.length),l=Tt(r.position,o,n,a),c=S(ct,n);return{position:l,normal:xt(r.normal,r.position,a,o,c),tangent:dt(r.tangent,r.position,a,o,c)}}function lt(r,t,e){j(r.spatialReference,[r.x,r.y,r.z??0],e,M(r.spatialReference));let o=ur(t?t.unit:null,r.spatialReference);return Er(e,e,[o,o,o]),e}function Tt(r,t,e,o){let n=Xr(r,t,o),a=new Float64Array(n.length);return R(a,n,e),a}function xt(r,t,e,o,n){if(r==null)return null;let a=Hr(r,t,e,o,new Float32Array(r.length));return T(a,a,n),a}function dt(r,t,e,o,n){if(r==null)return null;let a=tt(r,t,e,o,new Float32Array(r.length));return T(a,a,n,4),a}function ur(r,t){if(r==null)return 1;let e=xr(t);return 1/Tr(e,"meters",r)}var v=x(),Ct=x(),ct=W();export{d as a,_t as b,Vt as c,z as d,pr as e,ne as f,Hr as g,Jr as h,Xr as i,Kr as j,tt as k,et as l,at as m,ut as n,gt as o,Ie as p,nt as q,Le as r,Be as s,st as t,Ft as u,ur as v};