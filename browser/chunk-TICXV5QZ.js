import{a as C}from"./chunk-EMACKK4D.js";import{Na as z}from"./chunk-RI4EXXSR.js";import{j as L,k as c}from"./chunk-KNDM5UGY.js";import{d as P}from"./chunk-EKKBMKVP.js";import{i as w,j as D}from"./chunk-57GB3TOJ.js";import{k as M,l as F,m as k,n as I,o as B,p as R,q as O,v as u}from"./chunk-WD4CT5CX.js";import{k as T,l as y}from"./chunk-XSMN6VN6.js";import{z as U}from"./chunk-WKT5W7KT.js";import{p as E,r as V}from"./chunk-X3IDZTNG.js";import{a as l}from"./chunk-IQJU4QT3.js";import{h as v}from"./chunk-EAH6BNBL.js";var G=()=>E.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),x=class{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;let{buffer:s,pixelType:r,textureOnly:a}=t,n=c(r);this.blockIndex=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new n(s)),this._resetRange()}destroy(){this._texture?.dispose();for(let t in this._fbos){let e=this._fbos[t];e&&(t==="0"&&e.detachColorTexture(),e.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){let t=new w;return t.wrapMode=y.CLAMP_TO_EDGE,t.samplingMode=T.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){let s=z(t),r=this.data,a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(this.data==null)return null;let i=z(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){let i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new P(t,i)}return this._fbos[e]}get hasDirty(){let t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{let i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;l("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:s,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();let r=this.data.buffer,a=this.getTexture(t),n=4,h=(i-i%this.size)/this.size,o=(s-s%this.size)/this.size,d=h,p=this.size,_=o,g=h*this.size*n,m=(p+_*this.size)*n-g,A=c(this.pixelType),q=new A(r,g*A.BYTES_PER_ELEMENT,m),j=this.size,S=_-d+1;if(S>this.size)return void G().error(new V("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d,j,S,q)}catch{}}update(t){let{data:e,start:i,end:s}=t;if(e!=null&&this.data!=null){let r=this.data,a=i*this.texelSize;for(let n=0;n<e.length;n++){let h=1<<n%this.texelSize;t.layout&h&&(r[a+n]=e[n])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){let i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));let s=c(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){let e=new D(t,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){let i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(t),h=L(r),o=new(c(r))(new ArrayBuffer(i*s*h*this.texelSize)),d=t.getBoundFramebufferObject(),{x:p,y:_,width:g,height:m}=t.getViewport();t.bindFramebuffer(n),n.readPixels(0,0,i,s,a,r,o),e.updateData(0,0,0,2*i,s/2,o),t.setViewport(p,_,g,m),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}},f=class{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");let e=t.blockDescriptors;if(this.size=t.blockSize,l("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),this._data==null)this._data=e.map((i,s)=>i!=null?new x(i,this.size,s):null);else for(let i=0;i<this._data.length;i++){let s=this._data[i],r=e[i];r!=null&&(s==null?this._data[i]=new x(r,this.size,i):s.resize(r,this.size))}}destroy(){for(let t of this._data??[])t?.destroy();this._defaultTexture?.dispose();for(let{resolver:t}of this._pendingAttributeUpdates)t.reject("AttributeStore destroyed");this._pendingAttributeUpdates=[]}isEmpty(){return this._data==null}getBlock(t){return this._data==null?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,u.VV,0,0)}getData(t,e,i,s){if(!this._data)return 0;let r=this._data[e];if(r==null)return 0;let a=r.getData(t,i);return a??s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){return v(this,null,function*(){let e=U();e.promise=e.promise.catch(i=>{l("esri-2d-update-debug")&&console.error("AttributeStoreView.requestUpdate rejected",i)}),this._version=t.version,this._pendingAttributeUpdates.push({inner:t,resolver:e}),l("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;let t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(let{inner:e,resolver:i}of t){let{blockData:s,initArgs:r,sendUpdateEpoch:a,version:n}=e;l("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${a}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=a,r!=null&&this._initialize(r);let h=this._data;for(let o=0;o<s.length;o++){let d=s[o],p=h[o];p!=null&&d!=null&&(l("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${o}] AttributeStoreView.update`,{block:d}),p.update(d))}i.resolve()}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,u.FilterFlags),unit:M},animation:{texture:this._getTexture(t,u.Animation),unit:F},gpgpu:{texture:this._getTexture(t,u.GPGPU),unit:O},visualVariableData:{texture:this._getTexture(t,u.VV),unit:k},dataDriven0:{texture:this._getTexture(t,u.DD0),unit:I},dataDriven1:{texture:this._getTexture(t,u.DD1),unit:B},dataDriven2:{texture:this._getTexture(t,u.DD2),unit:R},size:this.size}}_getTexture(t,e){let i=this._data?.[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(this._defaultTexture==null){let e=new w;e.wrapMode=y.CLAMP_TO_EDGE,e.samplingMode=T.NEAREST,e.width=1,e.height=1,this._defaultTexture=new D(t,e,new Uint8Array(4))}return this._defaultTexture}};var N=class extends C{constructor(t){super(t),this._statisticsByLevel=new Map,this.attributeView=new f}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(t){t.context.capabilities.enable("textureFloat"),super.doRender(t)}createRenderParams(t){let e=super.createRenderParams(t);return e.attributeView=this.attributeView,e.instanceStore=this._instanceStore,e.statisticsByLevel=this._statisticsByLevel,e}};var $=class{constructor(t,e,i,s,r){this._instanceId=t,this.techniqueRef=e,this._meshWriterName=i,this._input=s,this.optionalAttributes=r}get instanceId(){return this._instanceId}createMeshInfo(t){return{id:this._instanceId,meshWriterName:this._meshWriterName,options:t,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}};export{N as a,$ as b};
