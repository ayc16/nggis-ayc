import{a as d}from"./chunk-NIYDRLW4.js";import{a as y}from"./chunk-UXJVKRGT.js";import{f as p}from"./chunk-SJW4NR3T.js";import{b as h}from"./chunk-D2RUV6O4.js";import{b as c}from"./chunk-HQMV3KQV.js";import{D as u,E as f}from"./chunk-CRMMDK2Z.js";function G(t){return"declaredClass"in t}function x(t){return"declaredClass"in t}function W(t){return"declaredClass"in t}function j(t,r){return t?W(t)?t:new y({layer:r,sourceLayer:r,visible:t.visible,symbol:c(t.symbol),attributes:c(t.attributes),geometry:A(t.geometry)}):null}function A(t){return t==null?null:G(t)?t:p(C(t))}function C(t){let{wkid:r,wkt:a,wkt2:o,latestWkid:m}=t.spatialReference,i={wkid:r,wkt:a,wkt2:o,latestWkid:m};switch(t.type){case"point":{let{x:n,y:s,z:e,m:l}=t;return{x:n,y:s,z:e,m:l,spatialReference:i}}case"polygon":{let{rings:n,hasZ:s,hasM:e}=t;return{rings:k(n),hasZ:s,hasM:e,spatialReference:i}}case"polyline":{let{paths:n,hasZ:s,hasM:e}=t;return{paths:k(n),hasZ:s,hasM:e,spatialReference:i}}case"extent":{let{xmin:n,xmax:s,ymin:e,ymax:l,zmin:Z,zmax:z,mmin:R,mmax:g,hasZ:b,hasM:v}=t;return{xmin:n,xmax:s,ymin:e,ymax:l,zmin:Z,zmax:z,mmin:R,mmax:g,hasZ:b,hasM:v,spatialReference:i}}case"multipoint":{let{points:n,hasZ:s,hasM:e}=t;return{points:M(n)?w(n):n,hasZ:s,hasM:e,spatialReference:i}}default:return}}function k(t){return H(t)?t.map(r=>w(r)):t}function w(t){return t.map(r=>Array.from(r))}function H(t){for(let r of t)if(r.length!==0)return M(r);return!1}function M(t){return t.length>0&&(u(t[0])||f(t[0]))}function q(t,r){if(!t)return null;let a;if(x(t)){if(r==null)return t.clone();if(x(r))return r.copy(t)}return r!=null?(a=r,a.x=t.x,a.y=t.y,a.spatialReference=t.spatialReference,t.hasZ?(a.z=t.z,a.hasZ=t.hasZ):(a.z=void 0,a.hasZ=!1),t.hasM?(a.m=t.m,a.hasM=!0):(a.m=void 0,a.hasM=!1)):(a=d(t.x,t.y,t.z,t.spatialReference),t.hasM&&(a.m=t.m,a.hasM=!0)),a}function B(t){let{wkid:r,wkt:a,wkt2:o,latestWkid:m}=t,i={wkid:r,wkt:a,wkt2:o,latestWkid:m};return h.fromJSON(i)}export{G as a,j as b,A as c,q as d,B as e};
