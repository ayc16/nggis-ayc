import{a as K}from"./chunk-YW3L7OMP.js";import{a as R}from"./chunk-V2JYXY4D.js";import{f as F}from"./chunk-CJYUOBHK.js";import{a as E,g as H}from"./chunk-4XUOIGFO.js";import{aa as _,j}from"./chunk-375OYO4P.js";import{L as w,O as k,t as M}from"./chunk-AUTL5LCV.js";import{S as P}from"./chunk-KUJG22IX.js";import{a as y}from"./chunk-W3WDPWBE.js";import{a as L,j as U,m as C,p as I,s as T}from"./chunk-GISCFF3Z.js";import{a as x}from"./chunk-CPDJJRWA.js";import{b as q,t as m}from"./chunk-HQMV3KQV.js";import{G as z,I as S}from"./chunk-CRMMDK2Z.js";import{a as v,b as g,h as $}from"./chunk-EAH6BNBL.js";function N(e,t=!1){return e<=S?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}var b=class e{constructor(t){G(t);let{location:a,data:i}=t;this.location=Object.freeze(q(a));let l=this.location.width,o=this.location.height,n=!0,s=!0,c=Math.ceil(l*o/32),r=N(c),h=0;for(let f=0;f<i.length;f++){let u=f%32;i[f]?(s=!1,r[h]|=1<<u):n=!1,u===31&&++h}s?(this._availability="unavailable",this.byteSize=40):n?(this._availability="available",this.byteSize=40):(this._availability=r,this.byteSize=40+z(r))}getAvailability(t,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;let i=(t-this.location.top)*this.location.width+(a-this.location.left),l=i%32,o=i>>5,n=this._availability;return o<0||o>n.length?"unknown":n[o]&1<<l?"available":"unavailable"}static fromDefinition(t,a){let i=t.service.request||_,{row:l,col:o,width:n,height:s}=t,c={query:{f:"json"}};return a=a?v(v({},c),a):c,i(J(t),a).then(r=>r.data).catch(r=>{if(r?.details?.httpStatus===422)return{location:{top:l,left:o,width:n,height:s},valid:!0,data:new Array(n*s).fill(0)};throw r}).then(r=>{if(r.location&&(r.location.top!==l||r.location.left!==o||r.location.width!==n||r.location.height!==s))throw new m("tilemap:location-mismatch","Tilemap response for different location than requested",{response:r,definition:{top:l,left:o,width:n,height:s}});return e.fromJSON(r)})}static fromJSON(t){return Object.freeze(new e(t))}};function D(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function J(e){let t;if(e.service.tileServers?.length){let i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;let a=e.service.query;return a&&(t=`${t}?${a}`),t}function G(e){if(!e?.location)throw new m("tilemap:missing-location","Location missing from tilemap response");if(e.valid===!1)throw new m("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new m("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new m("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new m("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}var d,p=d=class extends k{constructor(e){super(e),this._pendingTilemapRequests={},this.request=_,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new F(2*K.MEGABYTES),this.addHandles(E(()=>{let{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]},()=>this._initializeTilemapDefinition(),H))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";let i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}fetchAvailability(e,t,a,i){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})):this._fetchTilemap(e,t,a,i).catch(l=>l).then(l=>{if(l instanceof b){let o=l.getAvailability(t,a);if(o==="unavailable")throw new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a});return o}if(T(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,t,a,i,l){i.level=e,i.row=t,i.col=a;let o=this.layer.tileInfo;o.updateTileInfo(i);let n=this.fetchAvailability(e,t,a,l).catch(s=>{if(T(s))throw s;if(o.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw s});return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,l,n),n}_fetchAvailabilityUpsamplePrefetch(e,t,a,i,l,o){return $(this,null,function*(){if(!this._prefetchingEnabled||e==null)return;let n=`prefetch-${e}`;if(this.hasHandles(n))return;let s=new AbortController;o.then(()=>s.abort(),()=>s.abort());let c=!1,r=L(()=>{c||(c=!0,s.abort())});if(this.addHandles(r,n),yield M(10,s.signal).catch(()=>{}),c||(c=!0,this.removeHandles(n)),C(s))return;let h=new R(e,t,a,i),f=g(v({},l),{signal:s.signal}),u=this.layer.tileInfo;for(let B=0;d._prefetches.length<d._maxPrefetch&&u.upsampleTile(h);++B){let A=this.fetchAvailability(h.level,h.row,h.col,f);d._prefetches.push(A);let O=()=>{d._prefetches.removeUnordered(A)};A.then(O,O)}})}_fetchTilemap(e,t,a,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new m("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));let l=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,a,l);if(o)return Promise.resolve(o);let n=i?.signal;return i=g(v({},i),{signal:null}),new Promise((s,c)=>{I(n,()=>c(U()));let r=D(l),h=this._pendingTilemapRequests[r];if(!h){h=b.fromDefinition(l,i).then(u=>(this._tilemapCache.put(r,u,u.byteSize),u));let f=()=>{delete this._pendingTilemapRequests[r]};this._pendingTilemapRequests[r]=h,h.then(f,f)}h.then(s,c)})}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;let{parsedUrl:e,apiKey:t,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:j(g(v(v({},e.query),a),{token:t??e.query?.token})),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;let l=D(i);return this._tilemapCache.get(l)}get test(){}};p._maxPrefetch=4,p._prefetches=new x({initialSize:d._maxPrefetch}),y([w({constructOnly:!0})],p.prototype,"layer",void 0),y([w({constructOnly:!0})],p.prototype,"minLOD",void 0),y([w({constructOnly:!0})],p.prototype,"maxLOD",void 0),y([w({constructOnly:!0})],p.prototype,"request",void 0),y([w({constructOnly:!0})],p.prototype,"size",void 0),p=d=y([P("esri.layers.support.TilemapCache")],p);export{p as a};
