import{j as i}from"./chunk-6FWNINU2.js";import{N as r,U as o}from"./chunk-BE76S5KT.js";var c=96;function g(e,t){let n=t||e.extent,a=e.width,u=o(n?.spatialReference);return n&&a?n.width/a*u*r*c:0}function p(e,t){return e/(o(t)*r*c)}function R(e,t,n){return s(e,t)&&l(e,n)}function s(e,t){return t===0||i(e,t)||e<t}function l(e,t){return t===0||i(e,t)||e>t}export{g as a,p as b,R as c};
