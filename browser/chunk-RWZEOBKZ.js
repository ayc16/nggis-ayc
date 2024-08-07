import{a as P}from"./chunk-SCUHN3PY.js";import{a as g}from"./chunk-MI3Z3JCN.js";import{a as f}from"./chunk-LCUC2WGG.js";import{a as T}from"./chunk-7R3J7GYS.js";import{b as L,c as O}from"./chunk-FI6XC3PH.js";import{d as b}from"./chunk-ZV7ILGPO.js";import"./chunk-IZZ2BWJH.js";import"./chunk-CGTLZX6D.js";import"./chunk-JTJ3UVF7.js";import"./chunk-R4TNLPIN.js";import"./chunk-5HLV7XP5.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import{H as I,g as h}from"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import{r as w}from"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{a as S,b as v,h as y}from"./chunk-EAH6BNBL.js";var N={FeatureLayer:!0,SceneLayer:!0};function q(r){return y(this,null,function*(){let s=r.properties?.customParameters,e=yield J(r.url,s),t=v(S({},r.properties),{url:r.url});if(e.layers.length+e.tables.length===0)return e.layerId!=null&&(t.layerId=e.layerId),e.sourceJSON!=null&&(t.sourceJSON=e.sourceJSON),new e.Constructor(t);let n=new(yield import("./chunk-CGPUV6FF.js")).default({title:e.parsedUrl.title});return yield C(n,e,t),n})}function F(r,s){return r?r.find(e=>e.id===s):null}function C(r,s,e){return y(this,null,function*(){function t(a,o,u,i){let c=v(S({},e),{layerId:o,sublayerTitleMode:"service-name"});return a!=null&&(c.url=a),u!=null&&(c.sourceJSON=u),i(c)}let n=s.sublayerConstructorProvider;for(let{id:a,serverUrl:o}of s.layers){let u=F(s.sublayerInfos,a),i=(u&&n?.(u))??s.Constructor,c=t(o,a,u,l=>new i(l));r.add(c)}if(s.tables.length){let a=yield d("FeatureLayer");s.tables.forEach(({id:o,serverUrl:u})=>{let i=t(u,o,F(s.tableInfos,o),c=>new a(c));r.tables.add(i)})}})}function J(r,s){return y(this,null,function*(){let e=L(r);if(e==null&&(e=yield k(r,s)),e==null)throw new w("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});let{serverType:t,sublayer:n}=e,a,o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},u=t==="FeatureServer",i=t==="SceneServer",c={parsedUrl:e,Constructor:null,layerId:u||i?n??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":n!=null?a="FeatureLayer":a=(yield V(r,s))?"TileLayer":"MapImageLayer";break;case"ImageServer":{let l=yield f(r,{customParameters:s}),{tileInfo:m,cacheType:p}=l;a=m?m?.format?.toUpperCase()!=="LERC"||p&&p.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{let l=yield f(e.url.path,{customParameters:s});if(a="SceneLayer",l){let m=l?.layers;if(l?.layerType==="Voxel")a="VoxelLayer";else if(m?.length){let p=m[0]?.layerType;p!=null&&b[p]!=null&&(a=b[p])}}break}case"3DTilesServer":throw new w("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(a="FeatureLayer",n!=null){let l=yield f(r,{customParameters:s});c.sourceJSON=l,l.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}break;default:a=o[t]}if(N[a]&&n==null){let l=yield x(r,t,s);if(u&&(c.sublayerInfos=l.layerInfos,c.tableInfos=l.tableInfos),l.layers.length+l.tables.length!==1)c.layers=l.layers,c.tables=l.tables,u&&l.layerInfos?.length&&(c.sublayerConstructorProvider=yield E(l.layerInfos));else if(u||i){let m=l.layerInfos?.[0]??l.tableInfos?.[0];c.layerId=l.layers[0]?.id??l.tables[0]?.id,c.sourceJSON=m,u&&m?.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}}return c.Constructor=yield d(a),c})}function k(r,s){return y(this,null,function*(){let e=yield f(r,{customParameters:s}),t=null,n=null,a=e.type;if(a==="Feature Layer"||a==="Table"?(t="FeatureServer",n=e.id??null):a==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":U(e)?(t="SceneServer",n=e.id):e.hasOwnProperty("layers")&&U(e.layers?.[0])&&(t="SceneServer"),!t)return null;let o=n!=null?O(r):null;return{title:o!=null&&e.name||I(r),serverType:t,sublayer:n,url:{path:o!=null?o.serviceUrl:h(r).path}}})}function U(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}function x(r,s,e){return y(this,null,function*(){let t,n,a=!1;switch(s){case"FeatureServer":{let i=yield P(r,{customParameters:e});a=!!i.layersJSON,t=i.layersJSON||i.serviceJSON;break}case"SceneServer":{let i=yield M(r,e);t=i.serviceInfo,n=i.tableServerUrl;break}default:t=yield f(r,{customParameters:e})}let o=t?.layers,u=t?.tables;return{layers:o?.map(i=>({id:i.id})).reverse()||[],tables:u?.map(i=>({serverUrl:n,id:i.id})).reverse()||[],layerInfos:a?o:[],tableInfos:a?u:[]}})}function M(r,s){return y(this,null,function*(){let e=yield f(r,{customParameters:s});if(!e.layers?.[0])return{serviceInfo:e};try{let{serverUrl:n}=yield g(r),a=yield f(n,{customParameters:s}).catch(()=>null);return a&&(e.tables=a.tables),{serviceInfo:e,tableServerUrl:n}}catch{return{serviceInfo:e}}})}function d(r){return y(this,null,function*(){return(0,T[r])()})}function V(r,s){return y(this,null,function*(){return(yield f(r,{customParameters:s})).tileInfo})}function E(r){return y(this,null,function*(){let s=[],e=[];if(r.forEach(a=>{let{type:o}=a;o==="Oriented Imagery Layer"?(s.push(o),e.push(d("OrientedImageryLayer"))):(s.push(o),e.push(d("FeatureLayer")))}),!e.length)return;let t=yield Promise.all(e),n=new Map;return s.forEach((a,o)=>{n.set(a,t[o])}),a=>n.get(a.type)})}export{q as fromUrl};
