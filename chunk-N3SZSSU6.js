import{a as H}from"./chunk-3JBDNTAW.js";import{S as R,T,W as x}from"./chunk-XPCG2OJX.js";import{C as L,a as I,c as J,h as j,j as _,k as A,m as W,p as C,s as b,z as y}from"./chunk-GISCFF3Z.js";import{d as f}from"./chunk-MLSR6YE6.js";import{t as E}from"./chunk-HQMV3KQV.js";import{a as P}from"./chunk-CRMMDK2Z.js";import{h as N}from"./chunk-EAH6BNBL.js";var O="worker:port-closed",c;(function(t){t[t.HANDSHAKE=0]="HANDSHAKE",t[t.OPEN=1]="OPEN",t[t.OPENED=2]="OPENED",t[t.RESPONSE=3]="RESPONSE",t[t.INVOKE=4]="INVOKE",t[t.ABORT=5]="ABORT",t[t.CLOSE=6]="CLOSE",t[t.OPEN_PORT=7]="OPEN_PORT",t[t.ON=8]="ON"})(c||(c={}));var q=0;function B(){return q++}function X(t){return t&&typeof t=="object"&&("result"in t||"transferList"in t)}function k(t){return t?typeof t=="string"?JSON.stringify({name:"message",message:t}):t.toJSON?JSON.stringify(t):JSON.stringify({name:t.name,message:t.message,details:t.details||{stack:t.stack}}):null}function M(t,e,o,s){if(e.type===c.OPEN_PORT)return void t.postMessage(e,[e.port]);if(e.type!==c.INVOKE&&e.type!==c.RESPONSE)return void t.postMessage(e);let r;if(X(o)?(r=Q(o.transferList),e.data=o.result):(r=Q(s),e.data=o),r){if(P("ff")){for(let n of r)if("byteLength"in n&&n.byteLength>267386880){let i="Worker call with large ArrayBuffer would crash Firefox";switch(e.type){case c.INVOKE:throw i;case c.RESPONSE:return void M(t,{type:c.RESPONSE,jobId:e.jobId,error:k(i)})}}}t.postMessage(e,r)}else t.postMessage(e)}function S(t){if(!t)return null;let e=t.data;return e?typeof e=="string"?JSON.parse(e):e:null}function Q(t){if(!t?.length)return null;if(P("esri-workers-arraybuffer-transfer"))return t;let e=t.filter(o=>!Y(o));return e.length?e:null}function Y(t){return t instanceof ArrayBuffer||t?.constructor?.name==="ArrayBuffer"}function re(t){return N(this,null,function*(){try{return yield t}catch(e){let o=e?.name===O;if(!(b(e)||o))throw e;return}})}var D=new FinalizationRegistry(t=>{t.close()});function ae(t,e){D.register(t,e,e)}function V(t){D.unregister(t)}function v(t,e){return new Proxy({},{get:(o,s,r)=>(...n)=>{let i,a,l=n[n.length-1];return Z(l)&&(i=l.signal,a=l.transferList,n.pop()),t.apply(e?`${e}.${s.toString()}`:s.toString(),n,{transferList:a,signal:i})}})}function Z(t){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&("signal"in t||"transferList"in t||Object.keys(t).length===0)}var K={statsWorker:()=>import("./chunk-CAJ4FLGH.js"),geometryEngineWorker:()=>import("./chunk-ZNEZ4CK7.js"),CSVSourceWorker:()=>import("./chunk-FYDKMUQJ.js"),EdgeProcessingWorker:()=>import("./chunk-DG6QE5ND.js"),ElevationSamplerWorker:()=>import("./chunk-L56OAOY2.js"),FeatureServiceSnappingSourceWorker:()=>import("./chunk-L6FAMQDW.js"),GeoJSONSourceWorker:()=>import("./chunk-NGZB2AWJ.js"),LercWorker:()=>import("./chunk-UWBFWL32.js"),MemorySourceWorker:()=>import("./chunk-45F7F6W3.js"),PBFDecoderWorker:()=>import("./chunk-ZRCYKIEH.js"),FeaturePipelineWorker:()=>import("./chunk-AMDWNLRO.js"),PointCloudWorker:()=>import("./chunk-XN67HI5N.js"),RasterWorker:()=>import("./chunk-ID3RYZMH.js"),SceneLayerSnappingSourceWorker:()=>import("./chunk-X6HBJ5T4.js"),SceneLayerWorker:()=>import("./chunk-GESWKYCW.js"),WFSSourceWorker:()=>import("./chunk-VQJL5NJE.js"),WorkerTileHandler:()=>import("./chunk-T3WRNUQ4.js"),Lyr3DWorker:()=>import("./chunk-KPMBPJPZ.js")};var{CLOSE:$,ABORT:F,INVOKE:z,RESPONSE:g,OPEN_PORT:U,ON:ee}=c,te=2,w=class{constructor(e){this._invoke=e,this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._timer=null,this._process=this._process.bind(this)}push(e){e.type===c.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),this._timer===null&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(let e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}},u=class t{static connect(e,o){let s=new MessageChannel,r;r=typeof e=="function"?new e:"default"in e&&typeof e.default=="function"?new e.default:e;let n=new t(s.port1,{channel:s,client:r,schedule:o});return typeof r=="object"&&"remoteClient"in r&&(r.remoteClient=n),t.clients.set(n,r),s.port2}static loadWorker(e){let o=K[e];return o?o():Promise.resolve(null)}constructor(e,o,s){this._port=e,this._jobQueue=s,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new w(r=>this._onInvokeMessage(r)),this._client=o.client,this._onMessage=this._onMessage.bind(this),this._channel=o.channel,this._schedule=o.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:$}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,o,s){return this.apply(e,[o],s)}apply(e,o,s){let r=s?.signal,n=s?.transferList;if(!this._port)return Promise.reject(new E(O,`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:o}));let i=B();return new Promise((a,l)=>{if(W(r))return this._processWork(),void l(_());let p=C(r,()=>{let h=this._outJobs.get(i);h&&(this._outJobs.delete(i),this._processWork(),f(h.abortHandle),this._post({type:F,jobId:i}),l(_()))}),m={resolve:a,reject:l,abortHandle:p,debugInfo:e};this._outJobs.set(i,m),this._post({type:z,jobId:i,methodName:e,abortable:r!=null},o,n)})}createInvokeProxy(e){return v(this,e)}on(e,o){let s=new MessageChannel;function r(n){o(n.data)}return this._port.postMessage({type:c.ON,eventType:e,port:s.port2},[s.port2]),s.port1.addEventListener("message",r),s.port1.start(),I(()=>{s.port1.postMessage({type:c.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",r)})}jobAdded(){this._processWork()}openPort(){let e=new MessageChannel;return this._post({type:U,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=te)return;let e=this._jobQueue?.pop();if(!e)return;let{methodName:o,data:s,invokeOptions:r,resolver:n}=e;this.apply(o,s,r).then(i=>n.resolve(i)).catch(i=>n.reject(i))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(e=>{f(e.abortHandle),e.reject(_(`Worker closing, aborting job calling '${e.debugInfo}'`))}),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){this._schedule!=null?this._schedule(()=>this._processMessage(e,!0)):this._processMessage(e,!1)}_processMessage(e,o){let s=S(e);if(s)switch(s.type){case g:this._onResponseMessage(s);break;case z:o?this._onInvokeMessage(s):this._invokeQueue.push(s);break;case F:this._onAbortMessage(s);break;case $:this._onCloseMessage();break;case U:this._onOpenPortMessage(s);break;case ee:this._onOnMessage(s)}}_onAbortMessage(e){let o=this._inJobs,s=e.jobId,r=o.get(s);this._invokeQueue.push(e),r&&(r.controller&&r.controller.abort(),o.delete(s))}_onCloseMessage(){let e=this._client;this._close(),e&&"destroy"in e&&t.clients.get(this)===e&&e.destroy(),t.clients.delete(this),e?.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){let{methodName:o,jobId:s,data:r=[],abortable:n}=e,i=n?new AbortController:null,a=this._inJobs,l,p=this._client,m=p[o];try{if(!m&&o&&o.includes(".")){let h=o.split(".");for(let d=0;d<h.length-1;d++)p=p[h[d]],m=p[h[d+1]]}if(typeof m!="function")throw new TypeError(`${o} is not a function`);r.push({client:this,signal:i?i.signal:null}),l=m.apply(p,r)}catch(h){return void this._post({type:g,jobId:s,error:k(h)})}y(l)?(a.set(s,{controller:i,promise:l}),l.then(h=>{a.has(s)&&(a.delete(s),this._post({type:g,jobId:s},h))},h=>{a.has(s)&&(a.delete(s),b(h)||this._post({type:g,jobId:s,error:k(h||{message:`Error encountered at method ${o}`})}))})):this._post({type:g,jobId:s},l)}_onOpenPortMessage(e){new t(e.port,{client:this._client})}_onOnMessage(e){let{port:o}=e,s=this._client.on(e.eventType,n=>{o.postMessage(n)}),r=j(e.port,"message",n=>{S(n)?.type===c.CLOSE&&(r.remove(),s.remove(),o.close())})}_onResponseMessage(e){let{jobId:o,error:s,data:r}=e,n=this._outJobs;if(!n.has(o))return;let i=n.get(o);n.delete(o),this._processWork(),f(i.abortHandle),s?i.reject(E.fromJSON(JSON.parse(s))):i.resolve(r)}_post(e,o,s){return M(this._port,e,o,s)}};u.kernelInfo={buildDate:R,fullVersion:x,revision:T},u.clients=new Map;var G=class{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new H}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,o){return new Promise((s,r)=>{let n=!0,i=a=>{A(o.signal),n&&(n=!1,a())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let a=0;a<e.length;++a){let l=e[a];y(l)?this._clientPromises[a]=l.then(p=>(this._clients[a]=new u(p,o,this._ongoingJobsQueue),i(s),this._clients[a]),()=>(i(r),null)):(this._clients[a]=new u(l,o,this._ongoingJobsQueue),this._clientPromises[a]=Promise.resolve(this._clients[a]),i(s))}})}broadcast(e,o,s){let r=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){let i=this._clientPromises[n];r[n]=i.then(a=>a?.invoke(e,o,s))}return r}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject(_(`Worker closing, aborting job calling '${e.methodName}'`));for(let o of this._clientPromises)o.then(s=>s?.close());this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,V(this)}invoke(e,o,s){return this.apply(e,[o],s)}apply(e,o,s){let r=L();this._ongoingJobsQueue.push({methodName:e,data:o,invokeOptions:s,resolver:r});for(let n=0;n<this._clientPromises.length;n++){let i=this._clients[n];i?i.jobAdded():this._clientPromises[n].then(a=>a?.jobAdded())}return r.promise}createInvokeProxy(e){return v(this,e)}on(e,o){return Promise.all(this._clientPromises).then(()=>J(this._clients.map(s=>s.on(e,o))))}openPorts(){return new Promise(e=>{let o=new Array(this._clientPromises.length),s=o.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then(n=>{n&&(o[r]=n.openPort()),--s==0&&e(o)})})}get test(){}};export{ae as a,c as b,B as c,k as d,M as e,S as f,re as g,u as h,G as i};