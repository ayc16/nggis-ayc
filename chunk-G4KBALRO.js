import{a as ge,b as j,c as Te,d as Ae}from"./chunk-PHGJSYPS.js";import{b as P}from"./chunk-4HCGCIRX.js";import"./chunk-OW7DVBQB.js";import{d as _e}from"./chunk-LZH2JLXD.js";import{b as he}from"./chunk-JEPZMH6T.js";import{h as l,l as x}from"./chunk-ZAQLF7TN.js";import"./chunk-IWRMM3EV.js";import"./chunk-OB5UG54O.js";import"./chunk-SKXQUOOX.js";import"./chunk-Z6XPPWSB.js";import"./chunk-RKJVW4XE.js";import"./chunk-OIAELKUC.js";import"./chunk-I3DWOIS7.js";import"./chunk-LJK37ZQL.js";import{f as pe,h as de}from"./chunk-NYOCZ43I.js";import{a as ue,b as le,c as me}from"./chunk-IFFYADB3.js";import"./chunk-UJ6V7JUK.js";import"./chunk-2M366ZBT.js";import"./chunk-47MSGR2H.js";import"./chunk-BW3UVZYU.js";import"./chunk-VXJKEPDS.js";import"./chunk-CF52RSJZ.js";import"./chunk-ALWV3RJ2.js";import"./chunk-7C6Z24SS.js";import"./chunk-IISBSAYJ.js";import"./chunk-2TKJWM7A.js";import"./chunk-PRVSRJH5.js";import"./chunk-QWLQUMDY.js";import"./chunk-2ETHV3H2.js";import"./chunk-SAOUSUZE.js";import"./chunk-TQAPQODA.js";import"./chunk-EBWCXIFH.js";import"./chunk-M76YZBV5.js";import"./chunk-HXQMOXFX.js";import"./chunk-BKKKVIAS.js";import"./chunk-BCREO4Q5.js";import"./chunk-ZVHU7VE3.js";import{f as fe}from"./chunk-76YVRX2R.js";import{B as X,c as O,e as Z,s as oe,u as ce}from"./chunk-OZF6BMOL.js";import{a as M,b as B,e as ae,f as D}from"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import"./chunk-SLMQFZE3.js";import"./chunk-V477EWXM.js";import"./chunk-2KZICFRS.js";import"./chunk-D2RUV6O4.js";import"./chunk-4JWMB5SM.js";import"./chunk-VOYK3LZF.js";import"./chunk-XNEAL2YW.js";import"./chunk-J7M5V2SQ.js";import"./chunk-HRFJUMCP.js";import"./chunk-375OYO4P.js";import"./chunk-AUTL5LCV.js";import{t as ne}from"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import"./chunk-W3WDPWBE.js";import{k as ie}from"./chunk-GISCFF3Z.js";import"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import{r as re}from"./chunk-HQMV3KQV.js";import{p as se}from"./chunk-CRMMDK2Z.js";import{a as G,h as N}from"./chunk-EAH6BNBL.js";var U;(function(r){r[r.JSON=1313821514]="JSON",r[r.BIN=5130562]="BIN"})(U||(U={}));var R=class r{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=r.HEADER_SIZE,this._length+=r.CHUNK_HEADER_SIZE;let s=Me(e);if(this._length+=we(s.byteLength,4),t&&(this._length+=r.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();let i=this._writeChunk(s,12,U.JSON,32);t&&this._writeChunk(t,i,U.BIN)}_writeHeader(){this._outView.setUint32(0,r.MAGIC,!0),this._outView.setUint32(4,r.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,i=0){let n=we(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),Ne(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this._outView.setUint8(t,i),t++;return t}};function Ne(r,e,t,s,i){new Uint8Array(r,t,i).set(new Uint8Array(e,s,i),0)}function Me(r){return new TextEncoder().encode(r).buffer}function we(r,e){return e*Math.ceil(r/e)}R.HEADER_SIZE=12,R.CHUNK_HEADER_SIZE=8,R.MAGIC=1179937895,R.VERSION=2;var E,b,y,_,$,S,q;(function(r){r[r.External=0]="External",r[r.DataURI=1]="DataURI",r[r.GLB=2]="GLB"})(E||(E={})),function(r){r[r.External=0]="External",r[r.DataURI=1]="DataURI",r[r.GLB=2]="GLB"}(b||(b={})),function(r){r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(y||(y={})),function(r){r.SCALAR="SCALAR",r.VEC2="VEC2",r.VEC3="VEC3",r.VEC4="VEC4",r.MAT2="MAT2",r.MAT3="MAT3",r.MAT4="MAT4"}(_||(_={})),function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"}($||($={})),function(r){r.OPAQUE="OPAQUE",r.MASK="MASK",r.BLEND="BLEND"}(S||(S={})),function(r){r[r.NoColor=0]="NoColor",r[r.FaceColor=1]="FaceColor",r[r.VertexColor=2]="VertexColor"}(q||(q={}));var v=class{constructor(e,t,s,i,n){this._buffer=e,this._componentType=s,this._dataType=i,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};let o=this._getElementSize();o>=4&&n!==y.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){let t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){let s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]=typeof i!="number"?e:Math.min(i,e);let n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case l.BYTE:return new Int8Array(e,t);case l.FLOAT:return new Float32Array(e,t);case l.SHORT:return new Int16Array(e,t);case l.UNSIGNED_BYTE:return new Uint8Array(e,t);case l.UNSIGNED_INT:return new Uint32Array(e,t);case l.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(t=>{let s=new Uint8Array(t);for(let i=0;i<s.length;++i)this._data.push(s[i]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;let t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");let e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);let i={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case l.UNSIGNED_BYTE:case l.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}finalize(){return N(this,null,function*(){let e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),yield Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case l.BYTE:case l.UNSIGNED_BYTE:return 1;case l.SHORT:case l.UNSIGNED_SHORT:return 2;case l.UNSIGNED_INT:case l.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case _.SCALAR:return 1;case _.VEC2:return 2;case _.VEC3:return 3;case _.VEC4:case _.MAT2:return 4;case _.MAT3:return 9;case _.MAT4:return 16}}};var L=class{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;let t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");let i=new v(this,this._gltf,e,t,s);return this._bufferViews.push(i),i}getByteOffset(e){let t=0;for(let s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){let t=[];for(let s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");let e=this._getTotalSize(),t=new ArrayBuffer(e),s=0;for(let i of this._bufferViews)i.writeOutToBuffer(t,s),s+=i.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;let e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(let t of this._bufferViews)e+=t.byteSize;return e}};function be(r,e){if(r.components)for(let t of r.components)t.faces&&t.shading==="smooth"&&Se(t,e)}function Se(r,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));let t=r.faces,{position:s,normal:i}=e,n=t.length/3;for(let o=0;o<n;++o){let a=3*t[3*o],c=3*t[3*o+1],f=3*t[3*o+2],u=O(Ie,s[a],s[a+1],s[a+2]),g=O(Be,s[c],s[c+1],s[c+2]),m=O(Oe,s[f],s[f+1],s[f+2]),T=Z(g,g,u),p=Z(m,m,u),d=ce(T,T,p);i[a]+=d[0],i[a+1]+=d[1],i[a+2]+=d[2],i[c]+=d[0],i[c+1]+=d[1],i[c+2]+=d[2],i[f]+=d[0],i[f+1]+=d[1],i[f+2]+=d[2]}for(let o=0;o<i.length;o+=3)O(I,i[o],i[o+1],i[o+2]),oe(I,I),i[o]=I[0],i[o+1]=I[1],i[o+2]=I[2]}var Ie=M(),Be=M(),Oe=M(),I=M();var Q=()=>re.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf"),k=class{constructor(e,t){this.options=t,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:t.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;let t=this.gltf.extras,s=t.output.buffer===E.GLB||t.output.image===b.GLB;s&&(t.binChunkBuffer=new L(this.gltf)),e.forEachScene(i=>{this._addScene(i)}),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);let t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(s))}),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);let t={};e.name&&(t.name=e.name);let s=e.translation;X(s,ae)||(t.translation=B(s));let i=e.rotation;de(i,me)||(t.rotation=le(i));let n=e.scale;X(n,D)||(t.scale=B(n));let o=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){let a=this._createMeshes(e.mesh),c=[o];if(a.length===1)this._addMesh(t,a[0]);else for(let f of a){let u={};this._addMesh(u,f),c.push(this.gltf.nodes.length),this.gltf.nodes.push(u)}return c}return e.forEachNode(a=>{t.children||(t.children=[]),t.children.push(...this._addNodes(a))}),[o]}_addMesh(e,t){this.gltf.meshes??=[];let s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(e){let t=this.gltf.extras,s=t.output.buffer===E.GLB,i;i=s?t.binChunkBuffer:new L(this.gltf);let n=this.options.origin,o=e.vertexSpace.clone();o.origin=[n.x,n.y,n.z??0];let a=he({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},o,{targetUnit:"meters"});if(!a)return[];be(e,a),Le(a);let{position:c,normal:f,tangent:u}=a,{uv:g,color:m}=e.vertexAttributes,T=i.addBufferView(l.FLOAT,_.VEC3,y.ARRAY_BUFFER),p,d,A,w;f&&(p=i.addBufferView(l.FLOAT,_.VEC3,y.ARRAY_BUFFER)),g&&(d=i.addBufferView(l.FLOAT,_.VEC2,y.ARRAY_BUFFER)),u&&(A=i.addBufferView(l.FLOAT,_.VEC4,y.ARRAY_BUFFER)),m&&(w=i.addBufferView(l.UNSIGNED_BYTE,_.VEC4,y.ARRAY_BUFFER)),T.startAccessor("POSITION"),p&&p.startAccessor("NORMAL"),d&&d.startAccessor("TEXCOORD_0"),A&&A.startAccessor("TANGENT"),w&&w.startAccessor("COLOR_0");let ye=a.position.length/3;for(let h=0;h<ye;++h)T.push(c[3*h]),T.push(c[3*h+1]),T.push(c[3*h+2]),p&&f!=null&&(p.push(f[3*h]),p.push(f[3*h+1]),p.push(f[3*h+2])),d&&g!=null&&(d.push(g[2*h]),d.push(g[2*h+1])),A&&u!=null&&(A.push(u[4*h]),A.push(u[4*h+1]),A.push(u[4*h+2]),A.push(u[4*h+3])),w&&m!=null&&(w.push(m[4*h]),w.push(m[4*h+1]),w.push(m[4*h+2]),w.push(m[4*h+3]));let Re=T.endAccessor(),te=this._addAccessor(T.index,Re),Y,H,W,J,z;if(p){let h=p.endAccessor();Y=this._addAccessor(p.index,h)}if(d){let h=d.endAccessor();H=this._addAccessor(d.index,h)}if(A){let h=A.endAccessor();W=this._addAccessor(A.index,h)}if(w){let h=w.endAccessor();J=this._addAccessor(w.index,h)}let K=[];return e.components&&e.components.length>0&&e.components[0].faces?(z=i.addBufferView(l.UNSIGNED_INT,_.SCALAR,y.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(z,e.components,K,te,Y,H,W,J)):this._addMeshVertexNonIndexed(e.components,K,te,Y,H,W,J),T.finalize(),p&&p.finalize(),d&&d.finalize(),A&&A.finalize(),z&&z.finalize(),w&&w.finalize(),s||i.finalize(),K}_addMaterial(e){if(e===null)return;let t=this._materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);let s={};switch(e.alphaMode){case"mask":s.alphaMode=S.MASK;break;case"auto":case"blend":s.alphaMode=S.BLEND}e.alphaCutoff!==.5&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};let i=a=>a**2.1,n=a=>{let c=a.toRgba();return c[0]=i(c[0]/255),c[1]=i(c[1]/255),c[2]=i(c[2]/255),c};if(e.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),e.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),e.normalTexture!=null&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof _e){if(e.emissiveTexture!=null&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),e.emissiveColor!=null){let a=n(e.emissiveColor);s.emissiveFactor=[a[0],a[1],a[2]]}e.occlusionTexture!=null&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),e.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,Q().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");let o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),o}_createTextureInfo(e,t){let s={index:this._addTexture(e)};return t&&(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:fe(t.rotation)}),s}_addTexture(e){let t=this.gltf.textures??[];return this.gltf.textures=t,ne(this._textureMap,e,()=>{let s={sampler:this._addSampler(e),source:this._addImage(e)},i=t.length;return t.push(s),i})}_addImage(e){let t=this._imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);let s={};if(e.url)s.uri=e.url;else{let n=e.data;s.extras=n;for(let a=0;a<this.gltf.images.length;++a)if(n===this.gltf.images[a].extras)return a;let o=this.gltf.extras;switch(o.output.image){case b.GLB:{let a=o.binChunkBuffer.addBufferView(l.UNSIGNED_BYTE,_.SCALAR);if(P(n))n.data!=null&&a.writeOutToBuffer(n.data,0);else{let c=j(n,this.options.signal).then(({data:f,type:u})=>(s.mimeType=u,f));o.promises.push(a.writeAsync(c).then(()=>{a.finalize()}))}s.bufferView=a.index;break}case b.DataURI:if(P(n)){Q().warnOnce("Image export for basis compressed textures not available.");break}s.uri=ge(n);break;default:if(P(n)){Q().warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(j(n,this.options.signal).then(({data:a,type:c})=>{s.uri=a,s.mimeType=c}))}}let i=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=x.REPEAT,s=x.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=x.CLAMP_TO_EDGE,s=x.CLAMP_TO_EDGE;break;case"mirror":t=x.MIRRORED_REPEAT,s=x.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=x.CLAMP_TO_EDGE;break;case"mirror":s=x.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=x.CLAMP_TO_EDGE;break;case"mirror":t=x.MIRRORED_REPEAT}}let i={wrapS:t,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[o]))return o;let n=this.gltf.samplers.length;return this.gltf.samplers.push(i),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);let s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);let i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,n,o,a,c){let f=new Map;for(let u of t){e.startAccessor("INDICES");for(let p=0;p<u.faces.length;++p)e.push(u.faces[p]);let g=e.endAccessor(),m={attributes:{POSITION:i},indices:this._addAccessor(e.index,g),material:this._addMaterial(u.material)};n&&u.shading!=="flat"&&(m.attributes.NORMAL=n),o&&(m.attributes.TEXCOORD_0=o),a&&u.shading!=="flat"&&(m.attributes.TANGENT=a),c&&(m.attributes.COLOR_0=c);let T=f.get(u.name);if(T)T.primitives.push(m);else{let p={name:u.name,primitives:[m]};f.set(u.name,p),s.push(p)}}}_addMeshVertexNonIndexed(e,t,s,i,n,o,a){let c={primitives:[]};t.push(c);let f={attributes:{POSITION:s}};i&&(f.attributes.NORMAL=i),n&&(f.attributes.TEXCOORD_0=n),o&&(f.attributes.TANGENT=o),a&&(f.attributes.COLOR_0=a),e&&(f.material=this._addMaterial(e[0].material)),c.primitives.push(f)}};function Le({position:r,normal:e,tangent:t}){ee(r,3),ee(e,3),ee(t,4)}function ee(r,e){if(r!=null)for(let t=1,s=2;t<r.length;t+=e,s+=e){let i=r[t],n=r[s];r[t]=n,r[s]=-i}}var C=class{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){se(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}};var V=class{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}};var F=class{constructor(e){this.mesh=e,this.name="",this.translation=M(),this.rotation=ue(),this.scale=B(D),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){pe(this.rotation,e[0],e[1],e[2])}};var Ce="model.gltf",xe="model.glb";function Ve(r,e){return N(this,null,function*(){let t=new k(r,e).gltf,s=t.extras.promises,i=1,n=1,o=null;yield Promise.allSettled(s),ie(e.signal);let a=e.jsonSpacing??4,c=new Map,f=JSON.stringify(t,(u,g)=>{if(u!=="extras"){if(g instanceof ArrayBuffer){if(Ae(g))switch(e.output?.image){case b.DataURI:case b.GLB:break;case b.External:default:{let m=`img${n}.png`;return n++,c.set(m,g),m}}switch(e.output?.buffer){case E.DataURI:return Te(g);case E.GLB:if(o)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(o=g);case E.External:default:{let m=`data${i}.bin`;return i++,c.set(m,g),m}}}return g}},a);return e.output?.buffer===E.GLB||e.output?.image===b.GLB?c.set(xe,new R(f,o).buffer):c.set(Ce,f),c})}function Ee(r,e){return N(this,null,function*(){let t=(yield Ve(r,G({output:{buffer:E.GLB,image:b.GLB},jsonSpacing:0},e))).get(xe);if(!(t&&t instanceof ArrayBuffer))throw new Error("failed to export to glb");return t})}function Bt(r,e){return N(this,null,function*(){let t=new C,s=new V;return t.addScene(s),s.addNode(new F(r)),yield Ee(t,G({origin:r.origin},e))})}export{Bt as toBinaryGLTF};
