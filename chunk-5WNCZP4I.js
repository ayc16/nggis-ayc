import{m as x,o as h,p as m}from"./chunk-2KZICFRS.js";var a=t=>parseFloat(t)/100;function l(t,n,o){let e=typeof t.left=="string"?a(t.left)*n:t.left,i=typeof t.right=="string"?a(t.right)*n:t.right,r=typeof t.top=="string"?a(t.top)*o:t.top,s=typeof t.bottom=="string"?a(t.bottom)*o:t.bottom,p=r;return{xmin:e,xmax:Math.max(n-i,e),ymin:p,ymax:Math.max(o-s,r)}}function C(t,n,o,e){switch(n.type){case"rect":{let{width:i,height:r}=t,{xmin:s,xmax:p,ymin:c,ymax:f}=l(n,i,r),{x:y,y:g}=o;return y>s&&y<p&&g>c&&g<f}case"path":return n.path.length===0||!Array.isArray(n.path[0][0])||m(n.path,[o.x,o.y]);case"geometry":return n.geometry==null||(n.geometry.type==="polygon"?h(n.geometry,e):x(n.geometry,e))}}export{l as a,C as b};