import{b as I}from"./chunk-ER5QN5R7.js";import{a as f}from"./chunk-MFP2OFDR.js";import{a as _}from"./chunk-WXS2B4FF.js";import{b as T,d as j}from"./chunk-R4TNLPIN.js";import{a as C}from"./chunk-UI76XBLJ.js";import{a as M}from"./chunk-UE2YGKE7.js";import{F as o,Q as h}from"./chunk-VWEBO6QK.js";import{S as u,z as b}from"./chunk-KAAR5ZJN.js";import{a as r}from"./chunk-W3WDPWBE.js";import{a as v,b as D}from"./chunk-EAH6BNBL.js";var d,y=new WeakMap,L=0,l=d=class extends h{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,s,i){if(e instanceof HTMLImageElement){let m={type:"image-element",src:T(e.src,i),crossOrigin:e.crossOrigin};t[s]=m}else if(e instanceof HTMLCanvasElement){let m=e.getContext("2d").getImageData(0,0,e.width,e.height),N={type:"canvas-element",imageData:this._encodeImageData(m)};t[s]=N}else if(e instanceof HTMLVideoElement){let m={type:"video-element",src:T(e.src,i),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[s]=m}else if(e instanceof ImageData){let m={type:"image-data",imageData:this._encodeImageData(e)};t[s]=m}}readData(e){switch(e.type){case"image-element":{let t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{let t=this._decodeImageData(e.imageData),s=document.createElement("canvas");return s.width=t.width,s.height=t.height,s.getContext("2d").putImageData(t,0,0),s}case"image-data":return this._decodeImageData(e.imageData);case"video-element":{let t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){let e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return this._imageDataContainsTransparent(e);if(t){let s=t.substr(t.length-4,4).toLowerCase(),i=t.substr(0,15).toLocaleLowerCase();if(s===".png"||i==="data:image/png;")return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){let e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(s="")=>`d:${s},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(y.has(this.data)||y.set(this.data,++L),t(y.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){let t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){let e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new d(e)}cloneWithDeduplication(e){let t=e.get(this);if(t)return t;let s=this.clone();return e.set(this,s),s}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(e){let t="";for(let s=0;s<e.data.length;s++)t+=String.fromCharCode(e.data[s]);return{data:btoa(t),width:e.width,height:e.height}}_decodeImageData(e){let t=atob(e.data),s=new Uint8ClampedArray(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return I(s,e.width,e.height)}_imageDataContainsTransparent(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}static from(e){return typeof e=="string"?new d({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new d({data:e}):b(d,e)}};r([o({type:String,json:{write:j}})],l.prototype,"url",null),r([o({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),o()],l.prototype,"data",null),r([M("data")],l.prototype,"writeData",null),r([C("data")],l.prototype,"readData",null),r([o({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],l.prototype,"transparent",null),r([o({json:{write:!0}})],l.prototype,"wrap",void 0),r([o({readOnly:!0})],l.prototype,"contentHash",null),l=d=r([u("esri.geometry.support.MeshTexture")],l);var p=l;var g=class extends _(h){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};r([o({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"offset",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),r([o({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),g=r([u("esri.geometry.support.MeshTextureTransform")],g);var c=g;var x,n=x=class extends h{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){let s=e!=null?e.get(this):null;if(s)return s;let i=new x(this.clonePropertiesWithDeduplication(t));return e?.set(this,i),i}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};r([o({type:f,json:{write:!0}})],n.prototype,"color",void 0),r([o({type:p,json:{write:!0}})],n.prototype,"colorTexture",void 0),r([o({type:c,json:{write:!0}})],n.prototype,"colorTextureTransform",void 0),r([o({type:p,json:{write:!0}})],n.prototype,"normalTexture",void 0),r([o({type:c,json:{write:!0}})],n.prototype,"normalTextureTransform",void 0),r([o({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaMode",void 0),r([o({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaCutoff",void 0),r([o({nonNullable:!0,json:{write:!0}})],n.prototype,"doubleSided",void 0),n=x=r([u("esri.geometry.support.MeshMaterial")],n);var W=n;var w,a=w=class extends W{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){let s=e!=null?e.get(this):null;if(s)return s;let i=new w(this.clonePropertiesWithDeduplication(t));return e?.set(this,i),i}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return D(v({},super.clonePropertiesWithDeduplication(e)),{emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()})}};r([o({type:f,json:{write:!0}})],a.prototype,"emissiveColor",void 0),r([o({type:p,json:{write:!0}})],a.prototype,"emissiveTexture",void 0),r([o({type:c,json:{write:!0}})],a.prototype,"emissiveTextureTransform",void 0),r([o({type:p,json:{write:!0}})],a.prototype,"occlusionTexture",void 0),r([o({type:c,json:{write:!0}})],a.prototype,"occlusionTextureTransform",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],a.prototype,"metallic",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],a.prototype,"roughness",void 0),r([o({type:p,json:{write:!0}})],a.prototype,"metallicRoughnessTexture",void 0),r([o({type:c,json:{write:!0}})],a.prototype,"metallicRoughnessTextureTransform",void 0),a=w=r([u("esri.geometry.support.MeshMaterialMetallicRoughness")],a);var be=a;export{p as a,c as b,W as c,be as d};
