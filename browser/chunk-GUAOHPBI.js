import{a as Z,c as ee,d as F,f as te,h as re,i as oe,k as ne,l as ae,n as B,o as se,p as fe,q as ue}from"./chunk-NKHO2WSC.js";import{b as le}from"./chunk-IEHQFX5N.js";import{a as X,b as Y}from"./chunk-3MLEE2XK.js";import{a as W,b as H,d as J}from"./chunk-GEV3XR4C.js";import"./chunk-ZREXZJBZ.js";import{a as q}from"./chunk-2NH7HOKA.js";import{l as w}from"./chunk-XSMN6VN6.js";import"./chunk-TCQOV56D.js";import{p as Q}from"./chunk-6MTY3OXX.js";import"./chunk-CGZE4C6W.js";import"./chunk-CLDJAOGN.js";import"./chunk-YIRBKWRK.js";import"./chunk-IFFYADB3.js";import"./chunk-BVW6ULEA.js";import{a as _}from"./chunk-7C6Z24SS.js";import"./chunk-C4XQ3IUU.js";import"./chunk-T2INZTCD.js";import{b as U,d as k,f as R,i as K}from"./chunk-H34WFTDW.js";import{b as z,c as M,d as S,k as D,o as A,p as E,s as G,t as N}from"./chunk-AWOMJTYJ.js";import"./chunk-2F3ICBUH.js";import"./chunk-ER5QN5R7.js";import{a as $}from"./chunk-MFP2OFDR.js";import"./chunk-I3S324BU.js";import{n as O}from"./chunk-V5AJXD2Y.js";import"./chunk-WXS2B4FF.js";import"./chunk-XFK3CDZ5.js";import"./chunk-4XBATNKX.js";import"./chunk-3IJY37BG.js";import"./chunk-J57HR4DB.js";import"./chunk-SAOUSUZE.js";import"./chunk-K5NHJTKR.js";import"./chunk-XKXYUJUA.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import{b as j}from"./chunk-Z5Q76SB7.js";import"./chunk-E5R4OI7X.js";import{g as L,m as C}from"./chunk-6FWNINU2.js";import{c as P}from"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-R4TNLPIN.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import"./chunk-BE76S5KT.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import{_ as I}from"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import{u as V}from"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{h}from"./chunk-EAH6BNBL.js";function ce(e,t,r){let u=e.typedBuffer,n=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,l=r?r.count:t.count,a=(r?.dstIndex??0)*n,m=(r?.srcIndex??0)*i;for(let f=0;f<l;++f){for(let o=0;o<9;++o)u[a+o]=s[m+o];a+=n,m+=i}}var me=Object.freeze(Object.defineProperty({__proto__:null,copy:ce},Symbol.toStringTag,{value:"Module"}));function pe(e,t,r){let u=e.typedBuffer,n=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,l=r?r.count:t.count,a=(r?.dstIndex??0)*n,m=(r?.srcIndex??0)*i;for(let f=0;f<l;++f){for(let o=0;o<16;++o)u[a+o]=s[m+o];a+=n,m+=i}}var de=Object.freeze(Object.defineProperty({__proto__:null,copy:pe},Symbol.toStringTag,{value:"Module"}));function d(e,t){return new e(new ArrayBuffer(t*e.ElementCount*q(e.ElementType)))}function dt(e,t,r){return h(this,null,function*(){let u=new se(ge(r)),n=(yield fe(u,t,r,!0)).model,s=n.lods.shift(),i=new Map,l=new Map;n.textures.forEach((y,b)=>i.set(b,ve(y))),n.materials.forEach((y,b)=>l.set(b,we(y,i)));let a=ye(s);for(let y of a.parts)Be(a,y,l);let{position:m,normal:f,tangent:o,color:c,texCoord0:p}=a.vertexAttributes,g={position:m.typedBuffer,normal:f!=null?f.typedBuffer:null,tangent:o!=null?o.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:c!=null?c.typedBuffer:null},T=Q(g,e,r);return{transform:T.transform,vertexSpace:T.vertexSpace,components:a.components,spatialReference:e.spatialReference,vertexAttributes:new X({position:T.vertexAttributes.position,normal:T.vertexAttributes.normal,tangent:T.vertexAttributes.tangent,color:g.color,uv:g.uv})}})}function ge(e){let t=e?.resolveFile;return t?{busy:!1,request:(r,u,n)=>h(this,null,function*(){let s=t?.(r)??r;return(yield I(s,{responseType:u==="image"?"image":u==="binary"?"array-buffer":"json",signal:n!=null?n.signal:null})).data})}:null}function v(e,t){if(e==null)return"-";let r=e.typedBuffer;return`${V(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function Te(e){return e!=null?e.toString():"-"}function ye(e){let t=0,r={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,n=new Map,s=[];for(let i of e.parts){let{attributes:{position:l,normal:a,color:m,tangent:f,texCoord0:o}}=i,c=`
      ${v(l,u)}/
      ${v(a,u)}/
      ${v(m,u)}/
      ${v(f,u)}/
      ${v(o,u)}/
      ${Te(i.transform)}
    `,p=!1,g=V(n,c,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),a&&(r.normal=!0),m&&(r.color=!0),f&&(r.tangent=!0),o&&(r.texCoord0=!0),s.push({gltf:i,writeVertices:p,region:g})}return{vertexAttributes:{position:d(D,t),normal:r.normal?d(M,t):null,tangent:r.tangent?d(S,t):null,color:r.color?d(E,t):null,texCoord0:r.texCoord0?d(z,t):null},parts:s,components:[]}}function ve(e){return new W({data:(le(e.data),e.data),wrap:Ve(e.parameters.wrap)})}function we(e,t){let r=new $(Ce(e.color,e.opacity)),u=e.emissiveFactor?new $(Me(e.emissiveFactor)):null,n=s=>s?new H({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:L(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new J({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:u,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:he(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function Be(e,t,r){t.writeVertices&&be(e,t);let{indices:u,attributes:n,primitiveType:s,material:i}=t.gltf,l=ue(u||n.position.count,s),a=t.region.start;if(a){let m=new Uint32Array(l);for(let f=0;f<l.length;f++)m[f]+=a;l=m}e.components.push(new Y({name:t.gltf.name,faces:l,material:r.get(i),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function be(e,t){let{position:r,normal:u,tangent:n,color:s,texCoord0:i}=e.vertexAttributes,l=t.region.start,{attributes:a,transform:m}=t.gltf,f=a.position.count;if(U(r.slice(l,f),a.position,m),a.normal!=null&&u!=null){let o=O(_(),m),c=u.slice(l,f);k(c,a.normal,o),C(o)&&K(c,c)}else u!=null&&ne(u,0,0,1,{dstIndex:l,count:f});if(a.tangent!=null&&n!=null){let o=O(_(),m),c=n.slice(l,f);Z(c,a.tangent,o),C(o)&&ee(c,c)}else n!=null&&B(n,0,0,1,1,{dstIndex:l,count:f});if(a.texCoord0!=null&&i!=null?te(i.slice(l,f),a.texCoord0):i!=null&&re(i,0,0,{dstIndex:l,count:f}),a.color!=null&&s!=null){let o=a.color,c=s.slice(l,f);if(o.elementCount===4)o instanceof S?F(c,o,255):o instanceof E?ae(c,o):o instanceof N&&F(c,o,1/256);else{B(c,255,255,255,255);let p=A.fromTypedArray(c.typedBuffer,c.typedBufferStride);o instanceof M?R(p,o,255):o instanceof A?oe(p,o):o instanceof G&&R(p,o,1/256)}}else s!=null&&B(s.slice(l,f),255,255,255,255)}function he(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ve(e){return{horizontal:ie(e.s),vertical:ie(e.t)}}function ie(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function x(e){return e**(1/2.1)*255}function Ce(e,t){return j(x(e[0]),x(e[1]),x(e[2]),t)}function Me(e){return P(x(e[0]),x(e[1]),x(e[2]))}export{dt as loadGLTFMesh};
