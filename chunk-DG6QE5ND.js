import{a as i}from"./chunk-CQB46QYN.js";import{a as p,b as c,c as g,d as u,e as h,f as L}from"./chunk-IOCFWX7T.js";import"./chunk-ZRUFSF4E.js";import"./chunk-LAXYP2KV.js";import"./chunk-TIXZ4OWB.js";import"./chunk-NDZXQR2V.js";import"./chunk-W5OI4BJ2.js";import"./chunk-UVJ5D37D.js";import"./chunk-2NH7HOKA.js";import"./chunk-ZAQLF7TN.js";import"./chunk-JFY2XMDP.js";import"./chunk-ZHUHFKYD.js";import"./chunk-I3DWOIS7.js";import"./chunk-PDBA6QOJ.js";import"./chunk-2ETHV3H2.js";import"./chunk-M2GLXRA2.js";import"./chunk-ZVHU7VE3.js";import"./chunk-76YVRX2R.js";import"./chunk-OZF6BMOL.js";import"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import"./chunk-CPDJJRWA.js";import"./chunk-CRMMDK2Z.js";import{h as o}from"./chunk-EAH6BNBL.js";var m=class{extract(e){return o(this,null,function*(){let t=d(e),s=g(t),a=[t.data.buffer];return{result:y(s,a),transferList:a}})}extractComponentsEdgeLocations(e){return o(this,null,function*(){let t=d(e),s=u(t.data,t.skipDeduplicate,t.indices,t.indicesLength),a=c(s,I),r=[];return{result:i(a.regular.instancesData,r),transferList:r}})}extractEdgeLocations(e){return o(this,null,function*(){let t=d(e),s=u(t.data,t.skipDeduplicate,t.indices,t.indicesLength),a=c(s,x),r=[];return{result:i(a.regular.instancesData,r),transferList:r}})}};function d(n){return{data:p.createView(n.dataBuffer),indices:n.indicesType==="Uint32Array"?new Uint32Array(n.indices):n.indicesType==="Uint16Array"?new Uint16Array(n.indices):n.indices,indicesLength:n.indicesLength,writerSettings:n.writerSettings,skipDeduplicate:n.skipDeduplicate}}function y(n,e){return e.push(n.regular.lodInfo.lengths.buffer),e.push(n.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:i(n.regular.instancesData,e),lodInfo:{lengths:n.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:i(n.silhouette.instancesData,e),lodInfo:{lengths:n.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:n.averageEdgeLength}}var l=class{allocate(e){return h.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,s){e.position0.setVec(t,s.position0),e.position1.setVec(t,s.position1)}},f=class{allocate(e){return L.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,s){e.position0.setVec(t,s.position0),e.position1.setVec(t,s.position1),e.componentIndex.set(t,s.componentIndex)}},x=new l,I=new f;export{m as default};
