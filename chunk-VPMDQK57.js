import{v as h}from"./chunk-SA4OMQAD.js";function m(a=g){return[a[0],a[1],a[2],a[3]]}function M(a,i){return a!==i&&(a[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=i[3]),a}function w(a,i,t,e,s=m()){return s[0]=a,s[1]=i,s[2]=t,s[3]=e,s}function I(a,i=m()){return i[0]=a.xmin,i[1]=a.ymin,i[2]=a.xmax,i[3]=a.ymax,i}function q(a,i){return new h({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:i})}function v(a,i){i[0]<a[0]&&(a[0]=i[0]),i[0]>a[2]&&(a[2]=i[0]),i[1]<a[1]&&(a[1]=i[1]),i[1]>a[3]&&(a[3]=i[1])}function z(a,i,t){if(i!=null)if("length"in i)f(i)?(t[0]=Math.min(a[0],i[0]),t[1]=Math.min(a[1],i[1]),t[2]=Math.max(a[2],i[2]),t[3]=Math.max(a[3],i[3])):i.length!==2&&i.length!==3||(t[0]=Math.min(a[0],i[0]),t[1]=Math.min(a[1],i[1]),t[2]=Math.max(a[2],i[0]),t[3]=Math.max(a[3],i[1]));else switch(i.type){case"extent":t[0]=Math.min(a[0],i.xmin),t[1]=Math.min(a[1],i.ymin),t[2]=Math.max(a[2],i.xmax),t[3]=Math.max(a[3],i.ymax);break;case"point":t[0]=Math.min(a[0],i.x),t[1]=Math.min(a[1],i.y),t[2]=Math.max(a[2],i.x),t[3]=Math.max(a[3],i.y)}else M(t,a)}function A(a,i,t=a){let e=i.length,s=a[0],o=a[1],u=a[2],c=a[3];for(let r=0;r<e;r++){let n=i[r];s=Math.min(s,n[0]),o=Math.min(o,n[1]),u=Math.max(u,n[0]),c=Math.max(c,n[1])}return t[0]=s,t[1]=o,t[2]=u,t[3]=c,t}function E(a){for(let i=0;i<4;i++)if(!isFinite(a[i]))return!1;return!0}function l(a){return a==null||a[0]>=a[2]?0:a[2]-a[0]}function y(a){return a==null||a[1]>=a[3]?0:a[3]-a[1]}function W(a){return l(a)*y(a)}function j(a,i=[0,0]){return i[0]=(a[0]+a[2])/2,i[1]=(a[1]+a[3])/2,i}function k(a,i){return p(a,i.x,i.y)}function p(a,i,t){return i>=a[0]&&t>=a[1]&&i<=a[2]&&t<=a[3]}function N(a,i){return Math.max(i[0],a[0])<=Math.min(i[2],a[2])&&Math.max(i[1],a[1])<=Math.min(i[3],a[3])}function R(a,i){return i[0]>=a[0]&&i[2]<=a[2]&&i[1]>=a[1]&&i[3]<=a[3]}function S(a,i,t,e=a){return e[0]=a[0]+i,e[1]=a[1]+t,e[2]=a[2]+i,e[3]=a[3]+t,e}function X(a,i,t=a){return t[0]=a[0]-i,t[1]=a[1]-i,t[2]=a[2]+i,t[3]=a[3]+i,t}function Y(a){return a?M(a,x):m(x)}function f(a){return a!=null&&a.length===4}function B(a,i){return f(a)&&f(i)?a[0]===i[0]&&a[1]===i[1]&&a[2]===i[2]&&a[3]===i[3]:a===i}var C=[-1/0,-1/0,1/0,1/0],x=[1/0,1/0,-1/0,-1/0],g=[0,0,0,0],D=[0,0,1,1];export{m as a,M as b,w as c,I as d,q as e,v as f,z as g,A as h,E as i,l as j,y as k,W as l,j as m,k as n,p as o,N as p,R as q,S as r,X as s,Y as t,B as u,x as v};