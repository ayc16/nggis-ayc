import{a as h}from"./chunk-BCREO4Q5.js";import{e as p}from"./chunk-IQJU4QT3.js";function A(n,e){let i=e[0]-n[0],o=e[1]-n[1];if(n.length>2&&e.length>2){let t=n[2]-e[2];return Math.sqrt(i*i+o*o+t*t)}return Math.sqrt(i*i+o*o)}function x(n,e,i){let o=n[0]+i*(e[0]-n[0]),t=n[1]+i*(e[1]-n[1]);return n.length>2&&e.length>2?[o,t,n[2]+i*(e[2]-n[2])]:[o,t]}function L(n,e,i,o){return M(n,e,i[o],i[o+1])}function M(n,e,i,o){let[t,u]=e,[r,s]=i,[a,l]=o,f=a-r,c=l-s,m=f*f+c*c,y=(t-r)*f+(u-s)*c,g=Math.min(1,Math.max(0,y/m));return n[0]=r+f*g,n[1]=s+c*g,n}function T(n,e,i,o,t,u){let r=i,s=o,a=t-r,l=u-s;if(a!==0||l!==0){let f=((n-r)*a+(e-s)*l)/(a*a+l*l);f>1?(r=t,s=u):f>0&&(r+=a*f,s+=l*f)}return a=n-r,l=e-s,a*a+l*l}function R(n,e){return x(n,e,.5)}function d(n,e=h.X,i=h.Y){let o=0,t=n.length,u=n[0];for(let r=0;r<t-1;r++){let s=n[r+1];o+=(s[e]-u[e])*(s[i]+u[i]),u=s}return o>=0}function P(n){let e=n.length;return e>2&&p(n[0],n[e-1])}function S(n){if("rings"in n&&(z(n),n.rings.length>0&&!d(n.rings[0])))for(let e of n.rings)e.reverse()}function z(n){if("rings"in n)for(let e of n.rings)P(e)||e.push(e[0].slice())}export{A as a,L as b,M as c,T as d,R as e,d as f,S as g,z as h};
