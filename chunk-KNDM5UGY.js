import{a as M}from"./chunk-NOUYXRP4.js";import{e as F,i as _,j as N}from"./chunk-57GB3TOJ.js";import{a as x}from"./chunk-W5OI4BJ2.js";import{h as u,p as f}from"./chunk-XSMN6VN6.js";import{m as g,p as w,r as m}from"./chunk-X3IDZTNG.js";import{a as I,b as S}from"./chunk-EAH6BNBL.js";var l=class e{constructor(t,r,s,i,n,a,o){this.instanceId=t,this.textureKey=r,this.indexStart=s,this.indexCount=i,this.vertexStart=n,this.vertexCount=a,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new e(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,r,s,i,n,a,o,c){t.push(r),t.push(s),t.push(i),t.push(n),t.push(a),t.push(o),t.push(c)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){let r=t.readInt32(),s=t.readInt32(),i=t.readInt32(),n=t.readInt32(),a=t.readInt32(),o=t.readInt32(),c=t.readInt32();return new e(r,s,i,n,a,o,c)}};l.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function p(e,t){if(t!==null){e.push(t.length);for(let r of t)r.serialize(e);return e}e.push(0)}function h(e,t,r){let s=e.readInt32(),i=new Array(s);for(let n=0;n<i.length;n++)i[n]=t.deserialize(e,r);return i}var y=class e{constructor(t,r){this.id=t,this.sortKey=r,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),p(t,this.records),t}static deserialize(t){let r=t.readInt32(),s=t.readF32(),i=new e(r,s);return i.records=h(t,l)??[],i}};y.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+l.byteSizeHint;var R=new Float32Array(1),H=new Uint32Array(R.buffer);function G(e,t){return 65535&e|t<<16}function X(e){let t=e.map(({name:r,count:s,type:i})=>`${r}.${s}.${i}`).join(",");return g(t)}function d(e,t,r,s,i,n,a){if(e.primitiveName===t){for(let o in e)if(o===r){let c=s?.readWithDefault(i,n,e[o]&&a);return e.type==="text"&&(c=c.toString()),void(e[o]=c)}}if("type"in e&&e.type!=null)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(let o of e.symbolLayers)d(o,t,r,s,i,n,a);break;case"CIMHatchFill":e.lineSymbol&&d(e.lineSymbol,t,r,s,i,n,a);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(let o of e.markerGraphics)d(o,t,r,s,i,n,a),d(o.symbol,t,r,s,i,n,a)}}function q(e){let t=e.width;return e.effects!=null?256:Math.max(1.25*t,8)}var U=()=>w.getLogger("esri.views.2d.engine.webgl.Utils");function lt(e){switch(e){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void U().error(new m("webgl-utils",`Unable to handle type ${e}`))}}function pt(e){switch(e){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void U().error(new m("webgl-utils",`Unable to handle type ${e}`))}}function Y(e){let t={};for(let r in e){let s=e[r],i=0;t[r]=s.map(n=>{let a=new x(n.name,n.count,n.type,i,0,n.normalized||!1);return i+=n.count*F(n.type),a}),t[r]?.forEach(n=>n.stride=i)}return t}var v=e=>{let t=new Map;for(let r in e)for(let s of e[r])t.set(s.name,s.location);return t},D=e=>{let t={};for(let r in e){let s=e[r];t[r]=s?.length?s[0].stride:0}return t},T=new Map,ht=(e,t)=>{if(!T.has(e)){let r=Y(t),s={strides:D(r),bufferLayouts:r,attributes:v(t)};T.set(e,s)}return T.get(e)},dt=e=>e.includes("data:image/svg+xml");function Et(e){let t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}function mt(e,t,r){let s=new _(t.width,t.height);return s.dataType=t.dataType,t.depth&&(s.depth=t.depth),t.flipped&&(s.flipped=t.flipped),t.hasMipmap&&(s.hasMipmap=t.hasMipmap),s.internalFormat=t.internalFormat,t.isImmutable&&(s.isImmutable=t.isImmutable),t.isOpaque&&(s.isOpaque=t.isOpaque),t.maxAnisotropy&&(s.maxAnisotropy=t.maxAnisotropy),s.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(s.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(s.samplingMode=t.samplingMode),t.target&&(s.target=t.target),s.uniform=t.uniform,t.unpackAlignment&&(s.unpackAlignment=t.unpackAlignment),t.wrapMode&&(s.wrapMode=t.wrapMode),new N(e,s,r)}function yt(e){return"url"in e&&"urlHash"in e?S(I({},e),{url:""}):e}var A=class e{constructor(t,r,s,i,n,a,o,c,E=[]){this.entityTexel=t,this.anchorX=r,this.anchorY=s,this.directionX=i,this.directionY=n,this.maxScale=a,this.minScale=o,this.referenceBounds=c,this.bounds=E}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),p(t,this.bounds)}static deserialize(t){let r=t.readInt32(),s=t.readF32(),i=t.readF32(),n=t.readF32(),a=t.readF32(),o=t.readF32(),c=t.readF32(),E=t.readF32(),b=t.readF32(),L=t.readF32(),B=h(t,M)??[];return new e(r,s,i,n,a,o,c,{size:E,offsetX:b,offsetY:L},B)}};function Mt(e,t,r,s){let i=r.packPrecisionFactor??1;switch(r.type){case u.BYTE:if(r.count===1)e.setInt8(s+r.offset,t*i);else for(let n=0;n<r.count;n++){let a=n*Int8Array.BYTES_PER_ELEMENT;e.setInt8(s+r.offset+a,t[n]*i)}break;case u.UNSIGNED_BYTE:if(r.count===1)e.setUint8(s+r.offset,t*i);else for(let n=0;n<r.count;n++){let a=n*Uint8Array.BYTES_PER_ELEMENT;e.setUint8(s+r.offset+a,t[n]*i)}break;case u.SHORT:if(r.count===1)e.setInt16(s+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){let a=n*Int16Array.BYTES_PER_ELEMENT;e.setInt16(s+r.offset+a,t[n]*i,!0)}break;case u.UNSIGNED_SHORT:if(r.count===1)e.setUint16(s+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){let a=n*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(s+r.offset+a,t[n]*i,!0)}break;case u.INT:if(r.count===1)e.setInt32(s+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){let a=n*Int32Array.BYTES_PER_ELEMENT;e.setInt32(s+r.offset+a,t[n]*i,!0)}break;case u.UNSIGNED_INT:if(r.count===1)e.setUint32(s+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){let a=n*Uint32Array.BYTES_PER_ELEMENT;e.setUint32(s+r.offset+a,t[n]*i,!0)}break;case u.FLOAT:if(r.count===1)e.setFloat32(s+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){let a=n*Float32Array.BYTES_PER_ELEMENT;e.setFloat32(s+r.offset+a,t[n]*i,!0)}}}function Ft(e,t,r){switch(t.type){case u.BYTE:{if(t.count===1)return e.getInt8(r+t.offset);let s=[];for(let i=0;i<t.count;i++){let n=i*Int8Array.BYTES_PER_ELEMENT;s.push(e.getInt8(r+t.offset+n))}return s}case u.UNSIGNED_BYTE:{if(t.count===1)return e.getUint8(r+t.offset);let s=[];for(let i=0;i<t.count;i++){let n=i*Uint8Array.BYTES_PER_ELEMENT;s.push(e.getUint8(r+t.offset+n))}return s}case u.SHORT:{if(t.count===1)return e.getInt16(r+t.offset,!0);let s=[];for(let i=0;i<t.count;i++){let n=i*Int16Array.BYTES_PER_ELEMENT;s.push(e.getInt16(r+t.offset+n,!0))}return s}case u.UNSIGNED_SHORT:{if(t.count===1)return e.getUint16(r+t.offset,!0);let s=[];for(let i=0;i<t.count;i++){let n=i*Uint16Array.BYTES_PER_ELEMENT;s.push(e.getUint16(r+t.offset+n,!0))}return s}case u.INT:{if(t.count===1)return e.getInt32(r+t.offset,!0);let s=[];for(let i=0;i<t.count;i++){let n=i*Int32Array.BYTES_PER_ELEMENT;s.push(e.getInt32(r+t.offset+n,!0))}return s}case u.UNSIGNED_INT:{if(t.count===1)return e.getUint32(r+t.offset,!0);let s=[];for(let i=0;i<t.count;i++){let n=i*Uint32Array.BYTES_PER_ELEMENT;s.push(e.getUint32(r+t.offset+n,!0))}return s}case u.FLOAT:{if(t.count===1)return e.getFloat32(r+t.offset,!0);let s=[];for(let i=0;i<t.count;i++){let n=i*Float32Array.BYTES_PER_ELEMENT;s.push(e.getFloat32(r+t.offset+n,!0))}return s}}}export{l as a,h as b,y as c,X as d,d as e,q as f,G as g,Mt as h,Ft as i,lt as j,pt as k,ht as l,dt as m,Et as n,mt as o,yt as p,A as q};