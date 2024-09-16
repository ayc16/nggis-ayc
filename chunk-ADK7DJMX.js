import{a as D}from"./chunk-4DVWX6EY.js";import"./chunk-MVDBB2SU.js";import{a as w}from"./chunk-YN33VNKY.js";import{b as y}from"./chunk-CQB46QYN.js";import{c as V}from"./chunk-IOCFWX7T.js";import"./chunk-ZRUFSF4E.js";import"./chunk-LAXYP2KV.js";import"./chunk-TIXZ4OWB.js";import"./chunk-NDZXQR2V.js";import"./chunk-W5OI4BJ2.js";import"./chunk-UVJ5D37D.js";import"./chunk-2NH7HOKA.js";import"./chunk-ZAQLF7TN.js";import"./chunk-JFY2XMDP.js";import"./chunk-ZHUHFKYD.js";import"./chunk-I3DWOIS7.js";import{c as R}from"./chunk-AUUWEG54.js";import"./chunk-BY64D2AL.js";import{e as L}from"./chunk-GLDWQ77T.js";import"./chunk-R4SFVOZO.js";import"./chunk-BKLTKOZS.js";import"./chunk-YKUB35EI.js";import"./chunk-ZJHI7U3R.js";import"./chunk-VIK3ZB6O.js";import"./chunk-NIYDRLW4.js";import{l as P}from"./chunk-H3VY6XFU.js";import"./chunk-LNYBTIG7.js";import"./chunk-YFH7K2PU.js";import"./chunk-HGQCMOZX.js";import"./chunk-3JBDNTAW.js";import"./chunk-SJTQM4NH.js";import"./chunk-IFFYADB3.js";import{a as W}from"./chunk-47Q3ZDMA.js";import"./chunk-L6VKPRBR.js";import"./chunk-I7FAWQNR.js";import"./chunk-E2G5DGVE.js";import"./chunk-CP4KE5S6.js";import"./chunk-4X6XTGI2.js";import"./chunk-VXJKEPDS.js";import"./chunk-VOTZUGKK.js";import"./chunk-7JD62GP7.js";import"./chunk-KRMYHUR3.js";import"./chunk-PDBA6QOJ.js";import"./chunk-ALWV3RJ2.js";import"./chunk-7C6Z24SS.js";import"./chunk-QWLQUMDY.js";import"./chunk-2ETHV3H2.js";import"./chunk-4XUOIGFO.js";import"./chunk-R2HWUZ3L.js";import"./chunk-ORM3VHG6.js";import"./chunk-FVDACA4R.js";import"./chunk-4HISZWR4.js";import"./chunk-SJW4NR3T.js";import"./chunk-TQAPQODA.js";import"./chunk-M2GLXRA2.js";import"./chunk-EBWCXIFH.js";import"./chunk-M76YZBV5.js";import"./chunk-HXQMOXFX.js";import"./chunk-BKKKVIAS.js";import"./chunk-BCREO4Q5.js";import"./chunk-ZVHU7VE3.js";import"./chunk-76YVRX2R.js";import"./chunk-OZF6BMOL.js";import{a as b}from"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import"./chunk-W47PGZ3Y.js";import"./chunk-2OT2C2UU.js";import"./chunk-XIMCHX2H.js";import"./chunk-SF6Z2K5H.js";import"./chunk-GBTN5LIS.js";import"./chunk-JOSG37QF.js";import"./chunk-SLMQFZE3.js";import"./chunk-BENVXA3L.js";import"./chunk-2KZICFRS.js";import"./chunk-D2RUV6O4.js";import"./chunk-4JWMB5SM.js";import"./chunk-VOYK3LZF.js";import"./chunk-HOJTYTYD.js";import"./chunk-XNEAL2YW.js";import"./chunk-J7M5V2SQ.js";import"./chunk-HRFJUMCP.js";import"./chunk-375OYO4P.js";import{L as s,O as u}from"./chunk-AUTL5LCV.js";import{S as l}from"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import{a as o}from"./chunk-W3WDPWBE.js";import{e as k,k as A,m as O}from"./chunk-GISCFF3Z.js";import{d as x,e as I}from"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import"./chunk-HQMV3KQV.js";import{C as E,F as v,q as C}from"./chunk-CRMMDK2Z.js";import{h as i}from"./chunk-EAH6BNBL.js";var S=class extends w{constructor(t){super("EdgeProcessingWorker","extract",{extract:r=>[r.dataBuffer],extractComponentsEdgeLocations:r=>[r.dataBuffer],extractEdgeLocations:r=>[r.dataBuffer]},t)}process(t,r,a){return i(this,null,function*(){return a?V(t):j(yield this.invoke(new f(t),r))})}extractEdgeLocations(t,r){return i(this,null,function*(){let a=yield this.invokeMethod("extractEdgeLocations",new f(t),r);return y(a)})}extractComponentsEdgeLocations(t,r){return i(this,null,function*(){let a=yield this.invokeMethod("extractComponentsEdgeLocations",new f(t),r);return y(a)})}};function j(e){return{regular:{instancesData:y(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:y(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}var f=class{constructor(t){this.dataBuffer=t.data.buffer,this.writerSettings=t.writerSettings,this.skipDeduplicate=t.skipDeduplicate,this.indices=v(t.indices)?t.indices:t.indices.buffer,this.indicesType=v(t.indices)?"Array":E(t.indices)?"Uint32Array":"Uint16Array",this.indicesLength=t.indicesLength}};var c=class extends u{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new H(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}fetchCandidates(e,t){return i(this,null,function*(){let r=e.coordinateHelper,{point:a}=e,n=z;this.renderCoordsHelper.toRenderCoords(a,r.spatialReference,n);let g=e.distance,p=typeof g=="number"?g:g.distance,m=yield this._workerHandle.invoke({bounds:P(n[0],n[1],n[2],p),returnEdge:e.returnEdge,returnVertex:e.vertexMode!=="none"},t);return m.candidates.sort((_,M)=>_.distance-M.distance),m.candidates.map(_=>this._convertCandidate(r,_))})}add(e,t){return i(this,null,function*(){this._ids.add(e.id),yield this._workerHandle.invokeMethod("add",e,t)})}remove(e,t){return i(this,null,function*(){this._ids.delete(e.id),yield this._workerHandle.invokeMethod("remove",e,t)})}_convertCandidate(e,t){switch(t.type){case"edge":return new R({objectId:t.objectId,targetPoint:L(this._convertRenderCoordinate(e,t.target)),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new D({objectId:t.objectId,targetPoint:L(this._convertRenderCoordinate(e,t.target)),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){let r=b();return this.renderCoordsHelper.fromRenderCoords(t,r,e),r}_fetchAllEdgeLocations(e,t){return i(this,null,function*(){let r=[],a=[];for(let{id:n,uid:g}of e.components)this._ids.has(n)&&r.push(i(this,null,function*(){let p=yield this.fetchEdgeLocations(n,t.signal),m=p.locations.buffer;return a.push(m),{id:n,uid:g,objectIds:p.objectIds,locations:m,origin:p.origin,type:p.type}}));return{result:{components:(yield Promise.all(r)).filter(({id:n})=>this._ids.has(n))},transferList:a}})}};o([s({constructOnly:!0})],c.prototype,"renderCoordsHelper",void 0),o([s({constructOnly:!0})],c.prototype,"fetchEdgeLocations",void 0),o([s({constructOnly:!0})],c.prototype,"schedule",void 0),o([s({readOnly:!0})],c.prototype,"availability",void 0),c=o([l("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],c);var H=class extends w{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}},z=b();var d=class extends u{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new W,this._abortController=new AbortController}destroy(){this._tracker=x(this._tracker),this._abortController=I(this._abortController),this._updatingHandles.destroy()}initialize(){let{view:e}=this,t=e.resourceController;this._edgeWorker=new S(B(t)),this._workerHandle=new c({renderCoordsHelper:this.view.renderCoordsHelper,schedule:B(t),fetchEdgeLocations:(r,a)=>i(this,null,function*(){if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,a)})}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([k(this._workerHandle),k(this._edgeWorker)])}fetchCandidates(e,t){return i(this,null,function*(){return this._workerHandle.fetchCandidates(e,t)})}refresh(){}_setupLayerView(){return i(this,null,function*(){if(this.destroyed)return;let e=this._abortController?.signal,t=yield this.getLayerView();t==null||O(e)||(this._tracker=t.trackSnappingSources({add:(r,a)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:r,bounds:a},e))},remove:r=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:r},e))}}))})}};function B(e){return t=>e.immediate.schedule(t)}o([s({constructOnly:!0})],d.prototype,"getLayerView",void 0),o([s({constructOnly:!0})],d.prototype,"view",void 0),o([s({readOnly:!0})],d.prototype,"updating",null),o([s({readOnly:!0})],d.prototype,"availability",void 0),d=o([l("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],d);var h=class extends u{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){let{view:e}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}fetchCandidates(e,t){return i(this,null,function*(){let r=yield Promise.all(this._i3sSources.map(a=>a.fetchCandidates(e,t)));return A(t),r.flat()})}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>r.type==="building-component"?new d({getLayerView:()=>i(this,null,function*(){return(yield e.whenLayerView(t)).whenSublayerView(r)}),view:e}):null).filter(C)}_getSceneLayerI3SSource(e,t){return new d({getLayerView:()=>i(this,null,function*(){let r=yield e.whenLayerView(t);return r.type==="scene-layer-graphics-3d"?void 0:r}),view:e})}};o([s({constructOnly:!0})],h.prototype,"layerSource",void 0),o([s({constructOnly:!0})],h.prototype,"view",void 0),o([s({readOnly:!0})],h.prototype,"updating",null),o([s({readOnly:!0})],h.prototype,"availability",void 0),h=o([l("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],h);export{h as SceneLayerSnappingSource};
