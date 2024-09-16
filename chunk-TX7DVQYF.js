import{a as p}from"./chunk-BKKKVIAS.js";import{v as I}from"./chunk-2KZICFRS.js";function n(a=E){return[a[0],a[1],a[2],a[3],a[4],a[5]]}function V(a,i,e,t,u,s,m=n()){return m[0]=a,m[1]=i,m[2]=e,m[3]=t,m[4]=u,m[5]=s,m}function z(a,i){let e=isFinite(a[2])||isFinite(a[5]);return new I(e?{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],zmin:a[2],zmax:a[5],spatialReference:i}:{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],spatialReference:i})}function A(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[2]=Math.min(a[2],i[2]),a[3]=Math.max(a[3],i[3]),a[4]=Math.max(a[4],i[4]),a[5]=Math.max(a[5],i[5])}function R(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[3]=Math.max(a[3],i[2]),a[4]=Math.max(a[4],i[3])}function W(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[2]=Math.min(a[2],i[2]),a[3]=Math.max(a[3],i[0]),a[4]=Math.max(a[4],i[1]),a[5]=Math.max(a[5],i[2])}function P(a,i,e=0,t=i.length/3){let u=a[0],s=a[1],m=a[2],r=a[3],h=a[4],c=a[5];for(let o=0;o<t;o++)u=Math.min(u,i[e+3*o]),s=Math.min(s,i[e+3*o+1]),m=Math.min(m,i[e+3*o+2]),r=Math.max(r,i[e+3*o]),h=Math.max(h,i[e+3*o+1]),c=Math.max(c,i[e+3*o+2]);a[0]=u,a[1]=s,a[2]=m,a[3]=r,a[4]=h,a[5]=c}function b(a,i,e){let t=i.length,u=a[0],s=a[1],m=a[2],r=a[3],h=a[4],c=a[5];if(e)for(let o=0;o<t;o++){let f=i[o];u=Math.min(u,f[0]),s=Math.min(s,f[1]),m=Math.min(m,f[2]),r=Math.max(r,f[0]),h=Math.max(h,f[1]),c=Math.max(c,f[2])}else for(let o=0;o<t;o++){let f=i[o];u=Math.min(u,f[0]),s=Math.min(s,f[1]),r=Math.max(r,f[0]),h=Math.max(h,f[1])}a[0]=u,a[1]=s,a[2]=m,a[3]=r,a[4]=h,a[5]=c}function Y(a){for(let i=0;i<6;i++)if(!isFinite(a[i]))return!1;return!0}function M(a){return a[0]>=a[3]?0:a[3]-a[0]}function x(a){return a[1]>=a[4]?0:a[4]-a[1]}function l(a){return a[2]>=a[5]?0:a[5]-a[2]}function _(a){let i=M(a),e=l(a),t=x(a);return Math.sqrt(i*i+e*e+t*t)}function w(a,i=[0,0,0]){return i[0]=a[0]+M(a)/2,i[1]=a[1]+x(a)/2,i[2]=a[2]+l(a)/2,i}function B(a,i=[0,0,0]){return i[0]=M(a),i[1]=x(a),i[2]=l(a),i}function O(a,i){return i[0]>=a[0]&&i[1]>=a[1]&&i[2]>=a[2]&&i[0]<=a[3]&&i[1]<=a[4]&&i[2]<=a[5]}function d(a,i){return Math.max(i[0],a[0])<=Math.min(i[3],a[3])&&Math.max(i[1],a[1])<=Math.min(i[4],a[4])&&Math.max(i[2],a[2])<=Math.min(i[5],a[5])}function q(a,i){return i==null||d(a,i)}function v(a,i,e,t,u=a){return u[0]=a[0]+i,u[1]=a[1]+e,u[2]=a[2]+t,u[3]=a[3]+i,u[4]=a[4]+e,u[5]=a[5]+t,u}function G(a,i,e=a){let t=a[0]+M(a)/2,u=a[1]+x(a)/2,s=a[2]+l(a)/2;return e[0]=t+(a[0]-t)*i,e[1]=u+(a[1]-u)*i,e[2]=s+(a[2]-s)*i,e[3]=t+(a[3]-t)*i,e[4]=u+(a[4]-u)*i,e[5]=s+(a[5]-s)*i,e}function S(a,i){return i[0]=a[0],i[1]=a[1],i[2]=a[2],i}function Z(a,i,e=a){return e[0]=i[0],e[1]=i[1],e[2]=i[2],e!==a&&(e[3]=a[3],e[4]=a[4],e[5]=a[5]),e}function C(a,i,e=a){return e[3]=i[0],e[4]=i[1],e[5]=i[2],e!==a&&(e[0]=a[0],e[1]=a[1],e[2]=a[2]),a}function y(a,i){return a[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=i[3],a[4]=i[4],a[5]=i[5],a}function D(a){return a?y(a,g):n(g)}function j(a,i){return i||(i=p()),i[0]=a[0],i[1]=a[1],i[2]=a[3],i[3]=a[4],i}function k(a,i){return a[0]=i[0],a[1]=i[1],a[2]=Number.NEGATIVE_INFINITY,a[3]=i[2],a[4]=i[3],a[5]=Number.POSITIVE_INFINITY,a}function H(a,i,e,t,u){return a[0]=i,a[1]=e,a[2]=Number.NEGATIVE_INFINITY,a[3]=t,a[4]=u,a[5]=Number.POSITIVE_INFINITY,a}function N(a){return a.length===6}function J(a){return M(a)===0&&x(a)===0&&l(a)===0}function K(a,i,e){if(a==null||i==null)return a===i;if(!N(a)||!N(i))return!1;if(e){for(let t=0;t<a.length;t++)if(!e(a[t],i[t]))return!1}else for(let t=0;t<a.length;t++)if(a[t]!==i[t])return!1;return!0}var L=[-1/0,-1/0,-1/0,1/0,1/0,1/0],g=[1/0,1/0,1/0,-1/0,-1/0,-1/0],E=[0,0,0,0,0,0],Q=n();export{n as a,V as b,z as c,A as d,R as e,W as f,P as g,b as h,Y as i,M as j,x as k,l,_ as m,w as n,B as o,O as p,q,v as r,G as s,S as t,Z as u,C as v,y as w,D as x,j as y,k as z,H as A,N as B,J as C,K as D,g as E,E as F};
