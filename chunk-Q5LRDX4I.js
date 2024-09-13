import{a as S}from"./chunk-G4DWZAI3.js";import{a as u,b as w,c as J,d as P}from"./chunk-F2IF37CD.js";import"./chunk-PPALSVK5.js";import"./chunk-YBNLKD57.js";import"./chunk-A2WF4NJX.js";import{a as I}from"./chunk-PDWLAUMH.js";import"./chunk-TLLESPR2.js";import{a as W}from"./chunk-GNCG2SQP.js";import"./chunk-NYONONNN.js";import"./chunk-MZFPLWMN.js";import"./chunk-DS2JVXBM.js";import"./chunk-G3LLBABP.js";import"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-BENVXA3L.js";import"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import{_ as R}from"./chunk-CTGIUUCS.js";import{F as M,I as v,r as p}from"./chunk-VWEBO6QK.js";import{S as C}from"./chunk-KAAR5ZJN.js";import{a as f}from"./chunk-W3WDPWBE.js";import{p as c}from"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import{p as y}from"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{a as D,b as L}from"./chunk-EAH6BNBL.js";var g=class extends S{constructor(t){super("Lyr3DWorker","process",{process:r=>r.inputs},t,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}};function V(e){return t=>{if(e.immediate)return e.immediate.schedule(t);let r="No immediate scheduler";throw console.error(r),new Error(r)}}var o,a;(function(e){e[e.Lifetime=0]="Lifetime",e[e.Jobs=1]="Jobs",e[e.Renderables=2]="Renderables"})(o||(o={})),function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(a||(a={}));var b=class extends v{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=a.Critical,this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(o.Lifetime),this._debugFlags.add(o.Jobs),this._debugFlags.add(o.Renderables)}_debugLog(e,t,r,i=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){let s=i?`[js] ${r}`:`${r}`;t===a.Critical||t===a.Error?y.getLogger(this).error(s):t===a.Warning&&y.getLogger(this).warn(s),y.getLogger(this).info(s)}}initialize(){this._debugLevel>a.Warning&&(y.getLogger(this).level="info"),this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([W(()=>this.view.state?.contentCamera,()=>this._updateWasmCamera())]),this._pulseTaskHandle=p({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach(t=>{t.abortController.abort()}),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);let e=this._worker;e&&e.destroyWasm().then(()=>{this._worker?.destroy(),this._worker=null}),this._pulseTaskHandle?.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),J)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() called when WASM wasn't loaded!"),0;this._doRemoveLayerView(e);let t=this._layers.size;return t===0&&(this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.setEnabled() called when WASM wasn't loaded!");let r=this._layers.get(e.wasmLayerId);r&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),r.needMemoryUsageUpdate=!0)}setLayerOffset(e,t){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.setLayerOffset() called when WASM wasn't loaded!");this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t)}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.getAttributionText() called when WASM wasn't loaded!"),[])}onRenderableEvicted(e,t,r){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.onRenderableEvicted() called when WASM wasn't loaded!");this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,r)}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;let t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0)}initializeWasm(){return this._lyr3DMain?Promise.resolve():(this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=P().then(e=>{this._lyr3DMain=e,this._lyr3DMainPromise=null;let t=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),r=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),i=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),s=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),h=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),n=this.view.viewingMode==="global",l=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1,d=this.view.heightModelInfo?.heightModel,_=!d||d==="gravity-related-height";return this._lyr3DMain.initialize_lyr3d_wasm(h,t,r,i,s,n,_,l,this._debugLevel)?(this._worker=new g(V(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(o.Lifetime,a.Critical,"Lyr3d Main WASM failed to initialize",!1))}).catch(e=>{this._debugLog(o.Lifetime,a.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)})),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0;this._layers.forEach(s=>{e+=s.layerView.usedMemory}),e/=1048576;let t=this.view.resourceController.memoryController,r=t.usedMemory*t.maxMemory-e,i=t.maxMemory-r+t.additionalCacheMemory;this._lyr3DMain.frame_pulse(i,e,r,t.maxMemory)}}_incrementJobCount(e){e.outstandingJobCount+=1,e.outstandingJobCount===1&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,e.outstandingJobCount===0&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&e.outstandingRenderableCount===1&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&e.outstandingRenderableCount===0&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,r){t.error.length&&this._debugLog(o.Jobs,a.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(r.jobId,r.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,r){if(this._lyr3DMain){let i=t.data.byteLength,s=this._lyr3DMain._malloc(i);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,s,i).set(t.data),this._lyr3DMain.on_job_completed(r.jobId,t.jobDescJson,s,i),this._lyr3DMain._free(s)}this._decrementJobCount(e)}_getRequestPromises(e,t){let r=[];for(let i of e){let s=new URL(i),h=s.searchParams.get("session");h?this._session=h:this._session&&s.searchParams.append("session",this._session),r.push(R(s.toString(),t).then(n=>n.data))}return r}_onNewJob(){let e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);let r=t.abortController.signal,i={responseType:"array-buffer",signal:r,query:L(D({},t.customParameters),{token:t.apiKey})},s={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},h=this._getRequestPromises(e.urls,i);Promise.all(h).then(n=>(s.inputs=n,this._worker.invoke(s,r))).then(n=>n).catch(n=>(c(n)?this._debugLog(o.Jobs,a.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(o.Jobs,a.Error,`job ${e.jobId} failed with error ${n}.`),{status:u.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]})).then(n=>{if(n.status===u.Failed)this._onJobFailed(t,n,e);else if(n.status===u.Succeeded)this._onJobSucceeded(t,n,e);else if(n.status===u.MissingInputs){let l=this._getRequestPromises(n.missingInputUrls,i);Promise.all(l).then(d=>{s.jobDescJson=n.jobDescJson,n.originalInputs?s.inputs=n.originalInputs:s.inputs=[],s.isMissingResourceCase=!0;for(let _ of d)s.inputs.push(_);return this._worker.invoke(s,r)}).then(d=>{d.status===u.Failed?this._onJobFailed(t,d,e):d.status===u.Succeeded&&this._onJobSucceeded(t,d,e)}).catch(d=>{this._decrementJobCount(t),c(d)?this._debugLog(o.Jobs,a.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(o.Jobs,a.Error,`job ${e.jobId} failed with error2 ${d}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)})}})}_onNewRenderable(){let e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){let i=t.data.slice();t.data=i}let r=this._layers.get(e.layerId);r&&(this._incrementRenderableCount(r),r.layerView.createRenderable(e).then(i=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,i.memUsageBytes),this._decrementRenderableCount(r)}).catch(i=>{c(i)||this._debugLog(o.Renderables,a.Error,`createRenderable failed with error ${i}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(r)}))}_freeRenderables(e,t,r){if(r<1)return;let i=this._layers.get(e);if(!i)return;let s=i.layerView,h=[],n=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r);for(let l=0;l<r;++l)h.push(n[l]);for(let l=0;l<r;++l)s.freeRenderable(h[l])}_setRenderableVisibility(e,t,r,i){if(i<1)return;let s=this._layers.get(e);if(!s)return;let h=s.layerView,n=[],l=[],d=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i),_=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,i);for(let m=0;m<i;++m)n.push(d[m]),l.push(_[m]===1);h.setRenderableVisibility(n,l,i)}_onWasmError(e,t,r,i){this._lyr3DMain&&this._debugLog(r,i,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){let t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){let t=e.layer;if(!t.url)return w;let r=this._lyr3DMain.get_next_layer_id(),i=new AbortController;this._layers.set(r,{layerView:e,abortController:i,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey});let s=t.elevationInfo?.offset??0,h=t.elevationInfo?.unit?I(t.elevationInfo?.unit):1;return this._lyr3DMain.add_layer(t.url,r,s*h)?(this._updateWasmCamera(),r):(this._layers.delete(r),w)}_updateWasmCamera(){let e=this.view.state?.contentCamera;if(!e||!this._lyr3DMain)return;let{eye:t,center:r,up:i,near:s,far:h,fovY:n}=e,l=[e.viewport[2],e.viewport[3]],d=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:r,up:i,near:s,far:h,fov:n,aspectRatio:d,viewport:l})}};f([M({constructOnly:!0})],b.prototype,"view",void 0),b=f([C("esri.layers.Lyr3DWasmPerSceneView")],b);var X=b;export{X as default};