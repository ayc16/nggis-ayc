import{a as M,b as p}from"./chunk-JQQZJ7CZ.js";import"./chunk-EMACKK4D.js";import"./chunk-C54ONMNR.js";import{a as R}from"./chunk-OGDKYPWU.js";import"./chunk-TJO74ND6.js";import"./chunk-A3KX3DLS.js";import{b as q,c as b}from"./chunk-VZSQNMU3.js";import"./chunk-VOLKMATP.js";import"./chunk-BYXBJQAS.js";import"./chunk-BSIXRBVK.js";import"./chunk-KNDM5UGY.js";import"./chunk-EKKBMKVP.js";import"./chunk-TEXQFKMJ.js";import"./chunk-NOUYXRP4.js";import"./chunk-57GB3TOJ.js";import"./chunk-BZEC7TCW.js";import"./chunk-WD4CT5CX.js";import"./chunk-UZSTUBKI.js";import"./chunk-UDAVCKBV.js";import"./chunk-7QY3BMVN.js";import"./chunk-BGI2WQLI.js";import"./chunk-Z33JZO3Q.js";import"./chunk-W5OI4BJ2.js";import"./chunk-XSMN6VN6.js";import"./chunk-FOPE5Y6E.js";import"./chunk-XVXRQZ3E.js";import{a as v,b as x}from"./chunk-UPCYQ2JS.js";import{b as V}from"./chunk-26EEXAHQ.js";import"./chunk-OX7MQO37.js";import"./chunk-AC7AQWXQ.js";import{a as f}from"./chunk-HPYQ6UOC.js";import"./chunk-37H4LYIE.js";import"./chunk-X4LAWCTR.js";import"./chunk-ZB2MLS4M.js";import"./chunk-A2WF4NJX.js";import"./chunk-N7KNO35F.js";import"./chunk-MFP2OFDR.js";import"./chunk-ADXKVFX6.js";import"./chunk-DCAB3MR3.js";import"./chunk-GUOR3BIM.js";import"./chunk-2EA2KAER.js";import"./chunk-V5AJXD2Y.js";import"./chunk-J57HR4DB.js";import"./chunk-GNCG2SQP.js";import"./chunk-5JXPUH2D.js";import"./chunk-J4PQZSQE.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-IFPBW5UQ.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-K5NHJTKR.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-G3LLBABP.js";import"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-5HLV7XP5.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import{n as u}from"./chunk-BE76S5KT.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import"./chunk-CTGIUUCS.js";import{F as S}from"./chunk-VWEBO6QK.js";import{S as T}from"./chunk-KAAR5ZJN.js";import{a as n}from"./chunk-W3WDPWBE.js";import{p as c}from"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-VU5W7W6Y.js";import{p as I}from"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{a as w,b as g,h as r}from"./chunk-EAH6BNBL.js";var Q=new Set([102113,102100,3857,3785,900913]),U=[0,0],a=class extends R(M(q(b))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){let e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){let e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new V(e),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new x({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>u(t.tileInfo?.spatialReference,e))??!1}doRefresh(){return r(this,null,function*(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}})}acquireTile(e){let t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(U,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}fetchTile(i){return r(this,arguments,function*(e,t={}){let s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:l,resamplingLevel:m=0}=t;if(!s)return this._fetchImage(e,l);let h=new f(0,0,0,0),d;try{yield s.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:l}),d=yield this._fetchImage(h,l)}catch(o){if(c(o))throw o;if(m<3){let y=this._tileInfoView.getTileParentId(e.id);if(y){let _=new f(y),L=yield this.fetchTile(_,g(w({},t),{resamplingLevel:m+1}));return p(this._tileInfoView,L,_,e)}}throw o}return p(this._tileInfoView,d,h,e)})}canResume(){let e=super.canResume();return e&&this.tileMatrixSet!==null}_enqueueTileFetch(e){return r(this,null,function*(){if(!this._fetchQueue.has(e.key.id)){try{let t=yield this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){c(t)||I.getLogger(this).error(t)}this.requestUpdate()}})}_fetchImage(e,t){return r(this,null,function*(){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})})}_getTileMatrixSetBySpatialReference(e){let t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>u(s.tileInfo?.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>Q.has(s.tileInfo?.spatialReference.wkid??-1))),i}};n([S({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=n([T("esri.views.2d.layers.WMTSLayerView2D")],a);var X=a;export{X as default};