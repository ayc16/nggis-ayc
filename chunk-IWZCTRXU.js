import{a}from"./chunk-5C65GV4V.js";import{a as o}from"./chunk-5L33MNIH.js";import{a as i}from"./chunk-TNPL7MIN.js";var g={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=a(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};function b(t,e,r){return{objectId:t,target:e,distance:r,type:"vertex"}}function y(t,e,r,d,n,m=!1){return{objectId:t,target:e,distance:r,type:"edge",start:d,end:n,draped:m}}export{g as a,b,y as c};
