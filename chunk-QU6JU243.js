import{m as H,n as O,o as V,w as A}from"./chunk-CDCW33GU.js";import{a as v,b as D}from"./chunk-NIYDRLW4.js";import{a as g}from"./chunk-PDBA6QOJ.js";import{c as F,d as l,g as M,h as d,k as j,l as y,o as S}from"./chunk-2ETHV3H2.js";import{B as P,n as C}from"./chunk-OZF6BMOL.js";import{c as I}from"./chunk-GJP6PTKT.js";var h;function W(t,n,e){return x(t,n,e)}function x(t=0,n=0,e=0){return I(t,n,e)}function X(t,n,e){return I(t,n,e)}function J(t){let[n,e,a]=t;return t.length>3?[n,e,a,t[3]]:[n,e,a]}function K(t){return t[3]=((t.length>3?t[3]:void 0)??h.NONE)|h.TARGET,t}function Q(t){return!!(((t.length>3?t[3]:void 0)??h.NONE)&h.TARGET)}function $(t,n,{coordinateHelper:e,elevationInfo:a},r){return t?k(e.vectorToDehydratedPoint(t,Y),n,a,r):null}function k(t,n,e,a=x()){return a[0]=t.x,a[1]=t.y,a[2]=t.z??0,n==null||(n.type==="2d"?a[2]=0:a[2]=H(n,t,e,A)??0),a}function _(t,n,e){return e?(D(e,t[0],t[1],t[2],n),e):v(t[0],t[1],t[2],n)}function tt(t,n,{z:e,m:a},r,o){let{spatialReference:i,elevationInfo:c}=r,s;e==null&&a==null?s=void 0:n==null||n.type==="2d"?s=e??void 0:s=O(n,t,i,A,c)??0;let[f,u]=t;return o?D(o,f,u,s,i):o=v(f,u,s,i),a!=null&&(o.m=a,o.hasM=!0),o}function nt(t,n,e,a,r=x()){let[o,i]=t;return r[0]=o,r[1]=i,t.length>3&&(r[3]=t[3]??h.NONE),e?.type!=="3d"?(r[2]=n.value,r):(r[2]=V(e,o,i,n.value,a,n.elevationInfo,A)??0,r)}(function(t){t[t.NONE=0]="NONE",t[t.TARGET=1]="TARGET"})(h||(h={}));var Y=v(0,0,0,null);var N;(function(t){t[t.FEATURE=1]="FEATURE",t[t.SELF=2]="SELF",t[t.ALL=3]="ALL"})(N||(N={}));function b(t,n){return t[0]*n[1]-t[1]*n[0]}function z(t,n,e){let a=S(e,n)/y(e);return M(t,e,a)}function lt(t,n,e,a,r=e){return l(m,a,e),l(T,n,r),z(E,T,m),F(t,r,E)}function pt(t,n,e,a){l(m,n,e);let r=a/j(m);return d(t,e,m,r)}function dt(t,n){let e=t.start,a=t.end,r=n.start,o=n.end,i=l(m,a,e),c=l(q,o,r),s=b(i,c);if(Math.abs(s)<=U)return[];let f=l(T,e,r),u=b(c,f)/s,L=b(i,f)/s;if(u>=0){if(L>=0||n.type===p.LINE)return[d(E,e,i,u)]}else if(t.type===p.LINE&&(L>=0||n.type===p.LINE))return[d(E,e,i,u)];return[]}function ht(t,n,e){let a=[],r=l(m,t.end,t.start),o=l(q,t.start,n),i=y(r),c=2*S(r,o),s=c*c-4*i*(y(o)-e*e);if(s===0){let f=-c/(2*i);(t.type===p.LINE||f>=0)&&a.push(d(E,t.start,r,f))}else if(s>0){let f=Math.sqrt(s),u=(-c+f)/(2*i);(t.type===p.LINE||u>=0)&&a.push(d(E,t.start,r,u));let L=(-c-f)/(2*i);(t.type===p.LINE||L>=0)&&a.push(d(T,t.start,r,L))}return a}var p;(function(t){t[t.RAY=0]="RAY",t[t.LINE=1]="LINE"})(p||(p={}));var U=1e-6,m=g(),q=g(),T=g(),E=g();var R=class{constructor(n,e){this.isDraped=n,this.domain=e}};var G=class t extends R{constructor(n,e,a,r,o=N.ALL,i=!0,c=!0){super(r,o),this.type=n,this.lineStart=e,this.lineEnd=a,this.fadeLeft=i,this.fadeRight=c}equals(n){return n instanceof t&&this.type===n.type&&P(this.lineStart,n.lineStart)&&P(this.lineEnd,n.lineEnd)&&this.fadeLeft===n.fadeLeft&&this.fadeRight===n.fadeRight}get length(){return C(this.lineStart,this.lineEnd)}};export{W as a,x as b,X as c,J as d,K as e,Q as f,$ as g,k as h,_ as i,tt as j,nt as k,N as l,lt as m,pt as n,dt as o,ht as p,p as q,R as r,G as s};