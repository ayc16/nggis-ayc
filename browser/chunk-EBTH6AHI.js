import"./chunk-MZ36ATRC.js";import"./chunk-6Z54DTZZ.js";import"./chunk-6SLEAPTS.js";import"./chunk-PYUETFC3.js";import"./chunk-CS6GS2YZ.js";import"./chunk-DRE2I74M.js";import"./chunk-YQNUGDFH.js";import"./chunk-WB63P7CN.js";import"./chunk-SDUXSXKH.js";import"./chunk-H5IJXG2U.js";import{e as J}from"./chunk-CGZE4C6W.js";import"./chunk-CLDJAOGN.js";import"./chunk-YIRBKWRK.js";import"./chunk-IFFYADB3.js";import"./chunk-BVW6ULEA.js";import"./chunk-7C6Z24SS.js";import{a as k,b as j}from"./chunk-T2INZTCD.js";import{e as H,j as Y}from"./chunk-H34WFTDW.js";import"./chunk-XHOTVM3O.js";import"./chunk-MFP2OFDR.js";import"./chunk-UVZRJ2I3.js";import"./chunk-65QIQYGA.js";import"./chunk-NFADXGWT.js";import"./chunk-YTC2EJDQ.js";import"./chunk-ERH7ZNSC.js";import"./chunk-2EA2KAER.js";import"./chunk-V5AJXD2Y.js";import"./chunk-WXS2B4FF.js";import"./chunk-XFK3CDZ5.js";import"./chunk-4XBATNKX.js";import"./chunk-3IJY37BG.js";import"./chunk-F4I5LECK.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-IFPBW5UQ.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-K5NHJTKR.js";import"./chunk-XKXYUJUA.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-Z5Q76SB7.js";import"./chunk-E5R4OI7X.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-DS2JVXBM.js";import"./chunk-RJHITHLB.js";import"./chunk-BENVXA3L.js";import"./chunk-UI76XBLJ.js";import{b as O}from"./chunk-UE2YGKE7.js";import"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import{a as V}from"./chunk-VSVNPPHQ.js";import"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{h as u}from"./chunk-EAH6BNBL.js";var I,z;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(I||(I={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(z||(z={}));function $(){return C||(C=new Promise(e=>import("./chunk-HSD7RPJH.js").then(t=>t.i).then(({default:t})=>{let o=t({locateFile:ie,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),C}function ie(e){return V(`esri/libs/i3s/${e}`)}var C;var G,g,W,q,K;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(G||(G={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(g||(g={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(W||(W={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(q||(q={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(K||(K={}));function Ne(e){return u(this,null,function*(){i=yield b();let t=[e.geometryBuffer];return{result:Q(i,e,t),transferList:t}})}function Ae(e){return u(this,null,function*(){i=yield b();let t=[e.geometryBuffer],{geometryBuffer:o}=e,a=o.byteLength,r=i._malloc(a),d=new Uint8Array(i.HEAPU8.buffer,r,a);d.set(new Uint8Array(o));let c=i.dracoDecompressPointCloudData(r,d.byteLength);if(i._free(r),c.error.length>0)throw new Error(`i3s.wasm: ${c.error}`);let f=c.featureIds?.length>0?c.featureIds.slice():null,s=c.positions.slice();return f&&t.push(f.buffer),t.push(s.buffer),{result:{positions:s,featureIds:f},transferList:t}})}function Le(e){return u(this,null,function*(){yield b(),ae(e);let t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}})}function Ue(e){return u(this,null,function*(){yield b(),oe(e)})}function Oe(e){return u(this,null,function*(){i=yield b(),i.setLegacySchema(e.context,e.jsonSchema)})}function Ce(e){return u(this,null,function*(){let{localMatrix:t,origin:o,positions:a,vertexSpace:r,localMode:d}=e,c=O.fromJSON(e.inSpatialReference),f=O.fromJSON(e.outSpatialReference),s;if(r.type==="georeferenced"&&r.origin==null){let[{projectBuffer:l},{initializeProjection:y}]=yield Promise.all([import("./chunk-3RN4RCRJ.js"),import("./chunk-5FWPGSSQ.js")]);yield y(c,f),s=new Float64Array(a.length),l(a,c,0,s,f,0,s.length/3)}else{let l=r.type==="georeferenced"?k.fromJSON(r):j.fromJSON(r),{project:y}=yield import("./chunk-K4U2PJGT.js");s=J(y({positions:a,transform:t?{localMatrix:t}:void 0,vertexSpace:l,inSpatialReference:c,outSpatialReference:f,localMode:d}))}let R=s.length,[w,E,N]=o;for(let l=0;l<R;l+=3)s[l]-=w,s[l+1]-=E,s[l+2]-=N;return{result:{projected:s,original:a},transferList:[s.buffer,a.buffer]}})}function Fe(o){return u(this,arguments,function*({normalMatrix:e,normals:t}){let a=new Float32Array(t.length);return H(a,t,e),Y(a,a),{result:{transformed:a,original:t},transferList:[a.buffer,t.buffer]}})}function Pe(e){X(e)}var S,i;function oe(e){if(!i)return;let t=e.modifications,o=i._malloc(8*t.length),a=new Float64Array(i.HEAPU8.buffer,o,t.length);for(let r=0;r<t.length;++r)a[r]=t[r];i.setModifications(e.context,o,t.length,e.isGeodetic),i._free(o)}function Q(e,t,o){let{context:a,localOrigin:r,globalTrafo:d,mbs:c,obbData:f,elevationOffset:s,geometryBuffer:R,geometryDescriptor:w,indexToVertexProjector:E,vertexToRenderProjector:N}=t,l=e._malloc(R.byteLength),y=33,A=e._malloc(y*Float64Array.BYTES_PER_ELEMENT),F=new Uint8Array(e.HEAPU8.buffer,l,R.byteLength);F.set(new Uint8Array(R));let h=new Float64Array(e.HEAPU8.buffer,A,y);x(h,r);let v=h.byteOffset+3*h.BYTES_PER_ELEMENT,M=new Float64Array(h.buffer,v);x(M,d),v+=16*h.BYTES_PER_ELEMENT,M=new Float64Array(h.buffer,v),x(M,c),v+=4*h.BYTES_PER_ELEMENT,f&&(M=new Float64Array(h.buffer,v),x(M,f));let P=w,Z={isDraco:!1,isLegacy:!1,color:t.layouts.some(m=>m.some(p=>p.name==="color")),normal:t.needNormals&&t.layouts.some(m=>m.some(p=>p.name==="normalCompressed")),uv0:t.layouts.some(m=>m.some(p=>p.name==="uv0")),uvRegion:t.layouts.some(m=>m.some(p=>p.name==="uvRegion")),featureIndex:P.featureIndex},n=e.process(a,!!t.obbData,l,F.byteLength,P,Z,A,s,E,N,t.normalReferenceFrame);if(e._free(A),e._free(l),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;let L=n.componentOffsets.length>0?n.componentOffsets.slice():null,U=n.featureIds.length>0?n.featureIds.slice():null,ee=n.anchorIds.length>0?Array.from(n.anchorIds):null,te=n.anchors.length>0?Array.from(n.anchors):null,T=n.interleavedVertedData.slice().buffer,_=n.indicesType===I.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),B=n.positions.slice(),D=n.positionIndicesType===I.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),ne={layout:t.layouts[0],interleavedVertexData:T,indices:_,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:B,indices:D}};return U&&o.push(U.buffer),L&&o.push(L.buffer),o.push(T),o.push(_.buffer),o.push(B.buffer),o.push(D.buffer),{componentOffsets:L,featureIds:U,anchorIds:ee,anchors:te,transformedGeometry:ne,obb:n.obb}}function Te(e){return e===0?g.Unmodified:e===1?g.PotentiallyModified:e===2?g.Culled:g.Unknown}function ae(e){if(!i)return;let{context:t,buffer:o}=e,a=i._malloc(o.byteLength),r=o.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(i.HEAPU8.buffer,a,r),c=new Float64Array(o);d.set(c),i.filterOBBs(t,a,r),c.set(d),i._free(a)}function X(e){i&&i.destroy(e)===0&&(i=null)}function x(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}function _e(){return u(this,null,function*(){i||(yield b())})}function b(){return i?Promise.resolve(i):(S||(S=$().then(e=>(i=e,S=null,i))),S)}var Be={transform:(e,t)=>i&&Q(i,e,t),destroy:X};export{Pe as destroyContext,Ae as dracoDecompressPointCloudData,Le as filterObbsForModifications,ae as filterObbsForModificationsSync,_e as initialize,Te as interpretObbModificationResults,Ne as process,Ce as project,Oe as setLegacySchema,Ue as setModifications,oe as setModificationsSync,Be as test,Fe as transformNormals};
