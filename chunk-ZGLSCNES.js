import{a as R,b as me,c as pt}from"./chunk-MYZY3TMU.js";import"./chunk-XJE2IOXJ.js";import{a as lt}from"./chunk-4NF4EJM6.js";import{a as tt}from"./chunk-M7FS7O7K.js";import"./chunk-IGM7PT7Z.js";import{a as $,b as rt}from"./chunk-7C6Z24SS.js";import{a as te}from"./chunk-WDTJILD4.js";import{a as it}from"./chunk-F4H7OIJK.js";import{a as Xe}from"./chunk-6QEGDZGH.js";import"./chunk-ZNEMFYSX.js";import"./chunk-ZB2MLS4M.js";import{a as Ye}from"./chunk-BF4ZL3U3.js";import{a as at}from"./chunk-U3EFYVM2.js";import{a as pe}from"./chunk-NEL2DIHD.js";import"./chunk-6MKTTYAV.js";import{a as mt}from"./chunk-LCWKR6WR.js";import{c as st}from"./chunk-ER5QN5R7.js";import{b as Qe}from"./chunk-N7KNO35F.js";import"./chunk-BNSYK2BT.js";import"./chunk-TUJ6FPE6.js";import"./chunk-B7SBOPIK.js";import"./chunk-PDWLAUMH.js";import"./chunk-65QIQYGA.js";import"./chunk-TLLESPR2.js";import"./chunk-NKZ7R6T6.js";import"./chunk-U6WVZEYH.js";import{a as P,b as ee}from"./chunk-2EA2KAER.js";import{e as nt}from"./chunk-V5AJXD2Y.js";import{b as ot}from"./chunk-WXS2B4FF.js";import{g as Ze,i as M,r as et}from"./chunk-XFK3CDZ5.js";import"./chunk-4XBATNKX.js";import"./chunk-3IJY37BG.js";import{b as E,m as xe,o as G}from"./chunk-J57HR4DB.js";import{a as Ne}from"./chunk-V2KSICSA.js";import{a as Ve}from"./chunk-GNCG2SQP.js";import"./chunk-5JXPUH2D.js";import"./chunk-F4I5LECK.js";import{a as Ge}from"./chunk-J4PQZSQE.js";import"./chunk-Q3WN5PJ6.js";import"./chunk-UMB6LRQI.js";import{d as S}from"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-IFPBW5UQ.js";import"./chunk-ZV7ILGPO.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-K5NHJTKR.js";import{o as K}from"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import{c as $e}from"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import{e as ge,g as Ke}from"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import{c as qe}from"./chunk-RSDQHAJX.js";import"./chunk-NYONONNN.js";import"./chunk-MZFPLWMN.js";import"./chunk-DS2JVXBM.js";import{b as J}from"./chunk-G3LLBABP.js";import{a as Ce}from"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-5TVEQGKJ.js";import"./chunk-U4U366GW.js";import{a as ae}from"./chunk-JTJ3UVF7.js";import{a as Ue,b as ye,e as Je,i as ke}from"./chunk-R4TNLPIN.js";import{a as Ae}from"./chunk-5HLV7XP5.js";import"./chunk-BENVXA3L.js";import{a as L,j as f,p as Fe,t as q}from"./chunk-UI76XBLJ.js";import{a as k,b as le}from"./chunk-UE2YGKE7.js";import{n as De}from"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import{a as ze}from"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import{B as We,_ as Be,s as je,t as Te,u as He,v as he}from"./chunk-CTGIUUCS.js";import{F as s,I as Me,O as Ee,j as U,l as Se}from"./chunk-VWEBO6QK.js";import{S as u}from"./chunk-KAAR5ZJN.js";import{a as i}from"./chunk-W3WDPWBE.js";import{f as Ie,h as Oe,y as Le}from"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-VU5W7W6Y.js";import{p as v,r as O}from"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{a as se,b as be,h as w}from"./chunk-EAH6BNBL.js";var Pe=class extends ot{projectOrWarn(e,t){if(e==null)return e;let{geometry:o,pending:r}=M(e,t);return r?null:r||o?o:(v.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};Pe=i([u("esri.layers.support.GeoreferenceBase")],Pe);var j=Pe;var we=$(),c=P(),oe=class extends Me{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([s()],oe.prototype,"sourcePoint",void 0),i([s({type:f})],oe.prototype,"mapPoint",void 0),oe=i([u("esri.layers.support.ControlPoint")],oe);var _=class extends Ee(j){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){let o=le.fromJSON(t.spatialReference),r=rt(...t.coefficients,1);return e.map(n=>(E(c,n.x,n.y),R(c,c,r),{sourcePoint:n,mapPoint:new f({x:c[0],y:c[1],spatialReference:o})}))}writeControlPoints(e,t,o,r){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(n=>{let a=n.sourcePoint;return{x:a.x,y:a.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{let n=new O("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:r?.layer,georeference:this});r?.messages?r.messages.push(n):v.getLogger(this).error(n.name,n.message)}}get coords(){if(this.controlPoints==null)return null;let e=this._updateTransform(we);if(e==null||!y(this.controlPoints[0]))return null;let t=this.controlPoints[0].mapPoint.spatialReference;return Rt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;let t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;let{width:o,height:r}=this,{rings:[[n,a,l,p]]}=e,m={sourcePoint:S(0,r),mapPoint:new f({x:n[0],y:n[1],spatialReference:t})},d={sourcePoint:S(0,0),mapPoint:new f({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:S(o,0),mapPoint:new f({x:l[0],y:l[1],spatialReference:t})},x={sourcePoint:S(o,r),mapPoint:new f({x:p[0],y:p[1],spatialReference:t})};y(m)&&y(d)&&y(g)&&y(x)&&(ct(we,m,d,g,x),this.controlPoints=this.controlPoints.map(({sourcePoint:I})=>(E(c,I.x,I.y),R(c,c,we),{sourcePoint:I,mapPoint:new f({x:c[0],y:c[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:nt($(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;E(c,e.x,e.y);let t=this.controlPoints[0].mapPoint.spatialReference;return R(c,c,this.transform),new f({x:c[0],y:c[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;let t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=M(e,t).geometry)==null?null:(E(c,e.x,e.y),R(c,c,this.inverseTransform),S(c[0],c[1]))}toSourceNormalized(e){let t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){let{controlPoints:t,width:o,height:r}=this;if(!(t!=null&&o>0&&r>0))return null;let[n,a,l,p]=t;if(!y(n))return null;let m=n.mapPoint.spatialReference,d=this._projectControlPoint(a,m),g=this._projectControlPoint(l,m),x=this._projectControlPoint(p,m);if(!d.valid||!g.valid||!x.valid||!y(d.controlPoint))return null;e==null&&(e=$());let I=null;return I=y(g.controlPoint)&&y(x.controlPoint)?ct(e,n,d.controlPoint,g.controlPoint,x.controlPoint):y(g.controlPoint)?Pt(e,n,d.controlPoint,g.controlPoint):xt(e,n,d.controlPoint),I.every(gt=>gt===0)?null:I}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};let{sourcePoint:o,mapPoint:r}=e,{geometry:n,pending:a}=M(r,t);return a?{valid:!1,controlPoint:null}:a||n?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:n}}:(v.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:r.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return e?.sourcePoint!=null&&e.mapPoint!=null}i([s({type:[oe],json:{write:{allowNull:!1,isRequired:!0}}})],_.prototype,"controlPoints",void 0),i([L("controlPoints")],_.prototype,"readControlPoints",null),i([k("controlPoints")],_.prototype,"writeControlPoints",null),i([s()],_.prototype,"coords",null),i([s({json:{write:!0}})],_.prototype,"height",void 0),i([s({readOnly:!0})],_.prototype,"inverseTransform",null),i([s({readOnly:!0})],_.prototype,"transform",null),i([s({json:{write:!0}})],_.prototype,"width",void 0),_=i([u("esri.layers.support.ControlPointsGeoreference")],_);var T=P(),H=P(),D=P(),V=P(),W=P(),C=P(),F=P(),N=P(),ce=Math.PI/2;function A(e,t,o){E(e,o.sourcePoint.x,o.sourcePoint.y),E(t,o.mapPoint.x,o.mapPoint.y)}function xt(e,t,o){return A(T,W,t),A(H,C,o),G(D,H,T,ce),G(V,T,H,ce),G(F,C,W,-ce),G(N,W,C,-ce),ve(e,T,H,D,V,W,C,F,N)}function Pt(e,t,o,r){return A(T,W,t),A(H,C,o),A(D,F,r),xe(V,T,H,.5),G(V,D,V,Math.PI),xe(N,W,C,.5),G(N,F,N,Math.PI),ve(e,T,H,D,V,W,C,F,N)}function ct(e,t,o,r,n){return A(T,W,t),A(H,C,o),A(D,F,r),A(V,N,n),ve(e,T,H,D,V,W,C,F,N)}var wt=new Array(8).fill(0),vt=new Array(8).fill(0);function ut(e,t,o,r,n){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=r[0],e[5]=r[1],e[6]=n[0],e[7]=n[1],e}function ve(e,t,o,r,n,a,l,p,m){return me(e,ut(wt,t,o,r,n),ut(vt,a,l,p,m))}function Rt(e,t,o,r){let n=ee(0,o),a=ee(0,0),l=ee(t,0),p=ee(t,o);return R(n,n,e),R(a,a,e),R(l,l,e),R(p,p,e),new K({rings:[[n,a,l,p,n]],spatialReference:r})}var re=_;var ne=P(),z=class extends j{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:o,bottomRight:r}=this;if(e==null||t==null||o==null||r==null)return null;let n=e.spatialReference;return t=this.projectOrWarn(t,n),o=this.projectOrWarn(o,n),r=this.projectOrWarn(r,n),t==null||o==null||r==null?null:new K({rings:[[[o.x,o.y],[e.x,e.y],[t.x,t.y],[r.x,r.y],[o.x,o.y]]],spatialReference:n})}set coords(e){let{topLeft:t}=this;if(t==null)return;let o=t.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;let{rings:[[r,n,a,l]]}=e;this.bottomLeft=new f({x:r[0],y:r[1],spatialReference:o}),this.topLeft=new f({x:n[0],y:n[1],spatialReference:o}),this.topRight=new f({x:a[0],y:a[1],spatialReference:o}),this.bottomRight=new f({x:l[0],y:l[1],spatialReference:o})}toSourceNormalized(e){let{topLeft:t,topRight:o,bottomRight:r,bottomLeft:n}=this;if(e==null||t==null||o==null||r==null||n==null)return null;let a=t.spatialReference;e=e.normalize();let l=M(e,a).geometry;if(l==null)return null;E(ne,l.x,l.y);let p=me($(),[t.x,t.y,n.x,n.y,o.x,o.y,r.x,r.y],[0,0,0,1,1,0,1,1]);return R(ne,ne,p),S(ne[0],ne[1])}};i([s()],z.prototype,"coords",null),i([s({type:f})],z.prototype,"bottomLeft",void 0),i([s({type:f})],z.prototype,"bottomRight",void 0),i([s({type:f})],z.prototype,"topLeft",void 0),i([s({type:f})],z.prototype,"topRight",void 0),z=i([u("esri.layers.support.CornersGeoreference")],z);var ft=z;var Q=class extends j{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;let{xmin:e,ymin:t,xmax:o,ymax:r,spatialReference:n}=this.extent,a;if(this.rotation){let{x:l,y:p}=this.extent.center,m=Re(l,p,this.rotation);a=[m(e,t),m(e,r),m(o,r),m(o,t)],a.push(a[0])}else a=[[e,t],[e,r],[o,r],[o,t],[e,t]];return new K({rings:[a],spatialReference:n})}set coords(e){if(e==null||this.extent==null)return;let t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;let{rings:[[o,r,n]],extent:{center:{x:a,y:l}}}=e,p=Ke(Math.PI/2-Math.atan2(r[1]-o[1],r[0]-o[0])),m=Re(a,l,-p),[d,g]=m(o[0],o[1]),[x,I]=m(n[0],n[1]);this.extent=new q({xmin:d,ymin:g,xmax:x,ymax:I,spatialReference:t}),this.rotation=p}toSourceNormalized(e){let{extent:t,rotation:o}=this;if(e==null||t==null)return null;let{xmin:r,ymin:n,xmax:a,ymax:l,center:p,spatialReference:m}=t;e=e.normalize();let d=M(e,m).geometry;if(d==null)return null;let g=d.x,x=d.y;return o&&([g,x]=Re(p.x,p.y,-o)(g,x)),S(ge(g,r,a,0,1),ge(x,l,n,0,1))}};function Re(e,t,o){let r=qe(o),n=Math.cos(r),a=Math.sin(r);return(l,p)=>[n*(l-e)+a*(p-t)+e,n*(p-t)-a*(l-e)+t]}i([s()],Q.prototype,"coords",null),i([s({type:q})],Q.prototype,"extent",void 0),i([s({type:Number})],Q.prototype,"rotation",void 0),Q=i([u("esri.layers.support.ExtentAndRotationGeoreference")],Q);var dt=Q;var _t={key:"type",base:j,typeMap:{"control-points":re,corners:ft,"extent-and-rotation":dt}},bt={key:"type",base:j,typeMap:{"control-points":re}},X=class extends Qe(pe(ae)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return re.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){let{georeference:t,contentWidth:o,contentHeight:r}=this;if(e==null||t==null||o===0||r===0)return null;let n=t.toSourceNormalized(e);return n==null?null:(n.x*=o,n.y*=r,n)}};i([s({types:_t,json:{write:!0,types:bt}})],X.prototype,"georeference",void 0),i([L("georeference")],X.prototype,"readGeoreference",null),i([s({json:{read:!1,write:!1}})],X.prototype,"opacity",void 0),X=i([u("esri.layers.support.MediaElementBase")],X);var Y=X;function St(e){return e?.type==="media"}function ue(e,t){let o=Se(t);return St(e)&&!!e.portalItem&&o!=null&&o>U.PORTAL_ITEM}var b=class extends Y{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){let e=this.image;if(typeof e=="string"){let t=st(e).then(o=>{this._set("content",o)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){let t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new O("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,o){return Ue(t.url,o)}writeImage(e,t,o,r){if(e==null)return;let n=r?.portalItem,a=r?.resources;if(!n||!a)return void(typeof e=="string"&&(t[o]=ye(e,r)));let l=It(e)?e:null;if(l){if(Je(l)==null)return void(t[o]=l);let p=ye(l,be(se({},r),{verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),ke.NO);if(n&&p&&!Te(p))return a.toKeep.push({resource:n.resourceFromPath(p),compress:!1}),void(t[o]=p)}t[o]="<pending>",a.pendingOperations.push(Ot(e).then(p=>{let m=Mt(p,n);t[o]=m.itemRelativeUrl,a.toAdd.push({resource:m,content:{type:"blob",blob:p},compress:!1,finish:d=>{this.image=d.url}})}))}write(e,t){let o=super.write(e,t);return"mediaType"in o&&!o.url&&delete o.mediaType,o}};i([s()],b.prototype,"animationOptions",void 0),i([s({readOnly:!0})],b.prototype,"content",void 0),i([s({readOnly:!0})],b.prototype,"contentWidth",null),i([s({readOnly:!0})],b.prototype,"contentHeight",null),i([s({json:{name:"url",type:String,write:{overridePolicy:(e,t,o)=>({enabled:!ue(o?.layer,o?.origin)})}}})],b.prototype,"image",void 0),i([L("image",["url"])],b.prototype,"readImage",null),i([k("image")],b.prototype,"writeImage",null),i([s({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],b.prototype,"type",void 0),b=i([u("esri.layers.support.ImageElement")],b);var fe=b;function It(e){return typeof e=="string"&&!he(e)&&!He(e)}function Ot(e){return w(this,null,function*(){return typeof e=="string"?he(e)?We(e):(yield Be(e,{responseType:"blob"})).data:new Promise(t=>Lt(e).toBlob(t))})}function Lt(e){if(e instanceof HTMLCanvasElement)return e;let t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,r=document.createElement("canvas"),n=r.getContext("2d");return r.width=t,r.height=o,e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),r}function Mt(e,t){let o=Ne(),r=`${je("media",o)}.${lt({type:"blob",blob:e})}`;return t.resourceFromPath(r)}var B=class extends Y{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){let e=this.video;if(typeof e=="string"){let t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new O("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):v.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{let r=Ie(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(r,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))})}};i([s()],B.prototype,"autoplay",void 0),i([s({readOnly:!0})],B.prototype,"content",void 0),i([s({readOnly:!0})],B.prototype,"contentWidth",null),i([s({readOnly:!0})],B.prototype,"contentHeight",null),i([s()],B.prototype,"video",null),B=i([u("esri.layers.support.VideoElement")],B);var de=B;var Et={key:"type",defaultKeyValue:"image",base:Y,typeMap:{image:fe,video:de}},ht=J.ofType(Et),Z=class extends ae.LoadableMixin(Ae(Ce.EventedAccessor)){constructor(e){super(e),this._index=new tt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(let r of t.removed){let n=this._elementViewsMap.get(r);this._elementViewsMap.delete(r),this._index.delete(n),this.removeHandles(n),n.destroy(),this.notifyChange("fullExtent")}let{spatialReference:o}=this;for(let r of t.added){if(this._elementViewsMap.get(r))continue;let n=new pt({spatialReference:o,element:r});this._elementViewsMap.set(r,n);let a=Ve(()=>n.coords,()=>this._updateIndexForElement(n,!1));this._updateIndexForElement(n,!0),this.addHandles(a,n)}this._elementsIndexes.clear(),this.elements.forEach((r,n)=>this._elementsIndexes.set(r,n)),this.emit("refresh")},this.elements=new ht}load(e){return w(this,null,function*(){if(Oe(e),!this.spatialReference){let t=this.elements.find(o=>o.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:le.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this})}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Ge(e,this._get("elements"),ht))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;let e=this._index.fullBounds;return e==null?null:new q({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):v.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}queryElements(e,t){return w(this,null,function*(){yield this.load(),yield et(e.spatialReference,this.spatialReference,null,t);let o=De(e.spatialReference,this.spatialReference)?e:Ze(e,this.spatialReference);if(!o)return[];let r=o.normalize(),n=[];for(let a of r)this._index.forEachInBounds($e(a),({normalizedCoords:l,element:p})=>{l!=null&&Fe(a,l)&&n.push(p)});return n.sort((a,l)=>this._elementsIndexes.get(a)-this._elementsIndexes.get(l)),n})}_updateIndexForElement(e,t){let o=e.normalizedBounds,r=this._index.has(e),n=o!=null;this._index.delete(e),n&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(r!==n?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([s()],Z.prototype,"elements",null),i([s({readOnly:!0})],Z.prototype,"fullExtent",null),i([s()],Z.prototype,"spatialReference",null),Z=i([u("esri.layers.support.LocalMediaElementSource")],Z);var ie=Z;function _e(e){return typeof e=="object"&&e!=null&&"type"in e}function yt(e){return _e(e)&&e.type==="image"}var h=class extends Xe(Ye(at(it(pe(mt))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=Le((t,o,r)=>w(this,null,function*(){let{save:n,saveAs:a}=yield import("./chunk-PLNNZ27Q.js");switch(t){case te.SAVE:return n(this,o);case te.SAVE_AS:return a(this,r,o)}})),this.source=new ie}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}_doLoad(e){return w(this,null,function*(){yield this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new O("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");let o=this._getSourceOverride(t,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),t=o);let r=_e(t)?new ie({elements:new J([t])}):t;this._set("effectiveSource",r),this.spatialReference&&(r.spatialReference=this.spatialReference),yield r.load(e),this.spatialReference=r.spatialReference})}destroy(){this.effectiveSource?.destroy(),this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):v.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new ie({elements:new J(e)}):e instanceof J?new ie({elements:e}):e:null}readSource(e,t,o){if("itemId"in t&&t.itemId)return;let r=this._createSource(t);return r?.read(t,o),r}writeSource(e,t,o,r){yt(e)?e.write(t,r):r?.messages&&r?.messages?.push(new O("media-layer:unsupported-source","source must be an 'ImageElement'"))}save(e){return w(this,null,function*(){return this._debouncedSaveOperations(te.SAVE,e)})}saveAs(e,t){return w(this,null,function*(){return this._debouncedSaveOperations(te.SAVE_AS,t,e)})}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new fe;case"video":return new de}return null}_getSourceOverride(e,t){if(_e(e)&&this.originIdOf("source")===U.PORTAL_ITEM&&t&&this.originIdOf("georeference")===U.WEB_MAP){let o=e.toJSON(),r=this._createSource(o);return r.read(se({},o),{origin:"portal-item"}),r.read({georeference:t},{origin:"web-map"}),r}return null}};i([s({readOnly:!0})],h.prototype,"effectiveSource",void 0),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!1}}}})],h.prototype,"georeference",void 0),i([L("web-map","georeference")],h.prototype,"readGeoreference",null),i([s({type:String})],h.prototype,"copyright",void 0),i([s({readOnly:!0})],h.prototype,"fullExtent",null),i([s({type:["MediaLayer"]})],h.prototype,"operationalLayerType",void 0),i([s({type:["show","hide"]})],h.prototype,"listMode",void 0),i([s({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,overridePolicy(e,t,o){return{enabled:!0,allowNull:!1,ignoreOrigin:ue(this,o?.origin)&&yt(e)&&!!e.georeference&&e.originIdOf("georeference")>U.PORTAL_ITEM}}}}})],h.prototype,"source",null),i([ze("source")],h.prototype,"castSource",null),i([L("source",["url"])],h.prototype,"readSource",null),i([k("source")],h.prototype,"writeSource",null),i([s()],h.prototype,"spatialReference",void 0),i([s({readOnly:!0})],h.prototype,"type",void 0),h=i([u("esri.layers.MediaLayer")],h);var kn=h;export{kn as default};