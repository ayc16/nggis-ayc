import{a as Z}from"./chunk-V2JYXY4D.js";import{g as M,r as C}from"./chunk-XFK3CDZ5.js";import"./chunk-4XBATNKX.js";import"./chunk-3IJY37BG.js";import"./chunk-IFPBW5UQ.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import{a as q,p as oe}from"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import{a as I,c as ae,d as j,j as le,l as G}from"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import{c as ne}from"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import{e as se,j as _}from"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import{U as w}from"./chunk-BE76S5KT.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import{a as ie,k as P,o as A}from"./chunk-WKT5W7KT.js";import{a as O}from"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import{p as te,r as y}from"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{a as v,b as $,h as p}from"./chunk-EAH6BNBL.js";var U=()=>te.getLogger("esri.layers.support.ElevationSampler"),S=class{queryElevation(e){return pe(e.clone(),this)}on(){return ie()}projectIfRequired(e,t){return re(e,t)}},N=class extends S{get spatialReference(){return this.extent.spatialReference}constructor(e,t,i){super(),this.tile=e,this.noDataValue=i;let n=e.tile.extent;this.extent=j(n,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=n;let s=w(t.spatialReference),a=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:a,max:a}}contains(e){let t=this.projectIfRequired(e,this.spatialReference);return t!=null&&this.containsAt(t.x,t.y)}containsAt(e,t){return le(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){let i=this.extent,n=`${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;return U().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${n})`),this.noDataValue}return this.tile.sample(e,t)??this.noDataValue}},R=class extends S{get spatialReference(){return this.extent.spatialReference}constructor(e,t,i){let n;super(),typeof t=="number"?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map(a=>new N(a,n,this.noDataValue)):e;let s=this.samplers[0];if(s){this.extent=s.extent.clone();let{min:a,max:o}=s.demResolution;this.demResolution={min:a,max:o};for(let l=1;l<this.samplers.length;l++){let r=this.samplers[l];this.extent.union(r.extent),this.demResolution.min=Math.min(this.demResolution.min,r.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,r.demResolution.max)}}else this.extent=j(I(),n.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){let i,n=!1;for(let s of this.samplers)if(s.containsAt(e,t)&&(n=!0,i=s.elevationAt(e,t),i!==s.noDataValue))return i;return i??(n||U().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue)}};function pe(c,e){let t=re(c,e.spatialReference);if(!t)return null;switch(c.type){case"point":me(c,t,e);break;case"polyline":fe(c,t,e);break;case"multipoint":de(c,t,e)}return c}function re(c,e){if(c==null)return null;let t=c.spatialReference;if(t.equals(e))return c;let i=se(c,e);return i||U().error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),i}function me(c,e,t){c.z=t.elevationAt(e.x,e.y)}function fe(c,e,t){x.spatialReference=e.spatialReference;let i=c.hasM&&!c.hasZ;for(let n=0;n<c.paths.length;n++){let s=c.paths[n],a=e.paths[n];for(let o=0;o<s.length;o++){let l=s[o],r=a[o];x.x=r[0],x.y=r[1],i&&(l[3]=l[2]),l[2]=t.elevationAt(x.x,x.y)}}c.hasZ=!0}function de(c,e,t){x.spatialReference=e.spatialReference;let i=c.hasM&&!c.hasZ;for(let n=0;n<c.points.length;n++){let s=c.points[n],a=e.points[n];x.x=a[0],x.y=a[1],i&&(s[3]=s[2]),s[2]=t.elevationAt(x.x,x.y)}c.hasZ=!0}var x=new _;var F=class{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}};var E=class{constructor(e,t=null){if(this.tile=e,t!=null&&e!=null){let i=e.extent;this._samplerData=new F(t,i)}}get zmin(){return this._samplerData!=null?this._samplerData.data.minValue:0}get zmax(){return this._samplerData!=null?this._samplerData.data.maxValue:0}get hasNoDataValues(){return!!this._samplerData?.data.hasNoDataValues}sample(e,t){if(this._samplerData==null)return;let{safeWidth:i,data:n,dx:s,dy:a,y1:o,x0:l}=this._samplerData,{width:r,values:u,noDataValue:f}=n,m=ce(a*(o-t),0,i),h=ce(s*(e-l),0,i),T=Math.floor(m),H=Math.floor(h),b=T*r+H,K=b+r,k=u[b],L=u[K],X=u[b+1],Y=u[K+1];if(k!==f&&L!==f&&X!==f&&Y!==f){let J=h-H,ee=k+(X-k)*J;return ee+(L+(Y-L)*J-ee)*(m-T)}}};function ce(c,e,t){return c<e?e:c>t?t:c}var ue=class{queryAll(e,t,i){return p(this,null,function*(){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(r=>r.visible):e.slice()).length)throw new y("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");let n=g.fromGeometry(t),s=!1;i&&i.returnSampleInfo||(s=!0);let a=$(v(v({},z),i),{returnSampleInfo:!0}),o=yield this.query(e[e.length-1],n,a),l=yield this._queryAllContinue(e,o,a);return l.geometry=l.geometry.export(),s&&delete l.sampleInfo,l})}query(e,t,i){return p(this,null,function*(){if(!e)throw new y("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof g)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new y("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");let n=v(v({},z),i),s=new W(e,t.spatialReference,n),a=n.signal;return yield e.load({signal:a}),yield this._createGeometryDescriptor(s,t,a),yield this._selectTiles(s,a),yield this._populateElevationTiles(s,a),this._sampleGeometryWithElevation(s),this._createQueryResult(s,a)})}createSampler(e,t,i){return p(this,null,function*(){if(!e)throw new y("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new y("elevation-query:invalid-extent","Invalid or undefined extent");let n=v(v({},z),i);return this._createSampler(e,t,n)})}createSamplerAll(e,t,i){return p(this,null,function*(){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(a=>a.visible):e.slice()).length)throw new y("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new y("elevation-query:invalid-extent","Invalid or undefined extent");let n=$(v(v({},z),i),{returnSampleInfo:!0}),s=yield this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,s,n)})}_createSampler(e,t,i,n){return p(this,null,function*(){let s=i.signal;yield e.load({signal:s});let a=t.spatialReference,o=e.tileInfo.spatialReference;a.equals(o)||(yield C([{source:a,dest:o}],{signal:s}),t=M(t,o));let l=new Q(e,t,i,n);return yield this._selectTiles(l,s),yield this._populateElevationTiles(l,s),new R(l.elevationTiles,l.layer.tileInfo,l.options.noDataValue)})}_createSamplerAllContinue(e,t,i,n){return p(this,null,function*(){if(e.pop(),!e.length)return i;let s=i.samplers.filter(r=>!r.tile.hasNoDataValues).map(r=>ae(r.extent)),a=yield this._createSampler(e[e.length-1],t,n,s);if(a.samplers.length===0)return i;let o=i.samplers.concat(a.samplers),l=new R(o,n.noDataValue);return this._createSamplerAllContinue(e,t,l,n)})}_queryAllContinue(e,t,i){return p(this,null,function*(){let n=e.pop(),s=t.geometry.coordinates,a=t.sampleInfo;O(a);let o=[],l=[];for(let m=0;m<s.length;m++){let h=a[m];h.demResolution>=0?h.source||(h.source=n):e.length&&(o.push(s[m]),l.push(m))}if(!e.length||o.length===0)return t;let r=t.geometry.clone(o),u=yield this.query(e[e.length-1],r,i),f=u.sampleInfo;if(!f)throw new Error("no sampleInfo");return l.forEach((m,h)=>{s[m].z=u.geometry.coordinates[h].z,a[m].demResolution=f[h].demResolution}),this._queryAllContinue(e,t,i)})}_createQueryResult(e,t){return p(this,null,function*(){let i=yield e.geometry.project(e.outSpatialReference,t);O(i);let n={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(s=>{s.tile=null,s.elevationTile=null}),n})}_createGeometryDescriptor(e,t,i){return p(this,null,function*(){let n,s=e.layer.tileInfo.spatialReference;if(t instanceof g?n=yield t.project(s,i):(yield C([{source:t.spatialReference,dest:s}],{signal:i}),n=M(t,s)),!n)throw new y("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=g.fromGeometry(n)})}_selectTiles(e,t){return p(this,null,function*(){e.type==="geometry"&&this._preselectOutsideLayerExtent(e);let i=e.options.demResolution;if(typeof i=="number")this._selectTilesClosestResolution(e,i);else if(i==="finest-contiguous")yield this._selectTilesFinestContiguous(e,t);else{if(i!=="auto")throw new y("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);yield this._selectTilesAuto(e,t)}})}_preselectOutsideLayerExtent(e){if(e.layer.fullExtent==null)return;let t=new E(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;let i=e.layer.fullExtent;e.geometry.coordinates.forEach(n=>{let s=n.x,a=n.y;(s<i.xmin||s>i.xmax||a<i.ymin||a>i.ymax)&&(n.elevationTile=t)})}_selectTilesClosestResolution(e,t){let i=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){let{tileInfo:i,tilemapCache:n}=e.layer,s=t/w(i.spatialReference),a=D(i,n),o=a[0],l=0;for(let r=1;r<a.length;r++){let u=a[r];Math.abs(u.resolution-s)<Math.abs(o.resolution-s)&&(o=u,l=r)}return l}_selectTilesFinestContiguous(e,t){return p(this,null,function*(){let{tileInfo:i,tilemapCache:n}=e.layer,s=he(i,n,e.options.minDemResolution);yield this._selectTilesFinestContiguousAt(e,s,t)})}_selectTilesFinestContiguousAt(e,t,i){return p(this,null,function*(){let n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;let s=n.tilemapCache,a=e.getTilesToFetch();try{if(s&&!B(s))yield A(Promise.all(a.map(o=>s.fetchAvailability(o.level,o.row,o.col,{signal:i}))),i);else if(yield this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new y("elevation-query:has-unavailable-tiles")}catch(o){P(o),yield this._selectTilesFinestContiguousAt(e,t-1,i)}})}_populateElevationTiles(e,t){return p(this,null,function*(){let i=e.getTilesToFetch(),n={},s=e.options.cache,a=e.options.noDataValue,o=i.map(l=>p(this,null,function*(){if(l.id==null)return;let r=`${e.layer.uid}:${l.id}:${a}`,u=s!=null?s.get(r):null,f=u??(yield e.layer.fetchTile(l.level,l.row,l.col,{noDataValue:a,signal:t}));s?.put(r,f),n[l.id]=new E(l,f)}));yield A(Promise.allSettled(o),t),e.populateElevationTiles(n)})}_selectTilesAuto(e,t){return p(this,null,function*(){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);let i=e.layer.tilemapCache;if(!i||B(i))return this._selectTilesAutoPrefetchUpsample(e,t);let n=e.getTilesToFetch(),s={},a=n.map(o=>p(this,null,function*(){let l=new Z(null,0,0,0,I()),r=yield ne(i.fetchAvailabilityUpsample(o.level,o.row,o.col,l,{signal:t}));r.ok!==!1?o.id!=null&&(s[o.id]=l):P(r.error)}));yield A(Promise.all(a),t),e.remapTiles(s)})}_reduceTilesForMaximumRequests(e){let t=e.layer.tileInfo,i=0,n={},s=l=>{l.id!=null&&(l.id in n?n[l.id]++:(n[l.id]=1,i++))},a=l=>{if(l.id==null)return;let r=n[l.id];r===1?(delete n[l.id],i--):n[l.id]=r-1};e.forEachTileToFetch(s,a);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch(l=>{i<=e.options.maximumAutoTileRequests||(a(l),t.upsampleTile(l)&&(o=!0),s(l))},a),o););}_selectTilesAutoFinest(e){let{tileInfo:t,tilemapCache:i}=e.layer,n=he(t,i,e.options.minDemResolution);e.selectTilesAtLOD(n,e.options.maximumAutoTileRequests)}_selectTilesAutoPrefetchUpsample(e,t){return p(this,null,function*(){let i=e.layer.tileInfo;yield this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch((s,a)=>{i.upsampleTile(s)?n=!0:a()}),n&&(yield this._selectTilesAutoPrefetchUpsample(e,t))})}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{let i=t.elevationTile,n=e.options.noDataValue;if(i){let s=i.sample(t.x,t.y);s!=null?n=s:t.elevationTile=null}t.z=n})}_extractSampleInfo(e){let t=e.layer.tileInfo,i=w(t.spatialReference);return e.geometry.coordinates.map(n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}})}},g=class c{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){let t=new c;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(i=>i.clone()),t._exporter=this._exporter,t}project(e,t){return p(this,null,function*(){if(this.spatialReference.equals(e))return this.clone();yield C([{source:this.spatialReference,dest:e}],{signal:t});let i=new q({spatialReference:this.spatialReference,points:this.coordinates.map(o=>[o.x,o.y])}),n=M(i,e);if(!n)return null;let s=this.coordinates.map((o,l)=>{let r=o.clone(),u=n.points[l];return r.x=u[0],r.y=u[1],r}),a=this.clone(s);return a.spatialReference=e,a})}static fromGeometry(e){let t=new c;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof c)t.coordinates=e.coordinates.map(i=>i.clone()),t._exporter=(i,n)=>{let s=e.clone(i);return s.spatialReference=n,s};else switch(e.type){case"point":{let i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[new d(i.x,i.y,i.z,i.m)]:n?[new d(i.x,i.y,i.z)]:s?[new d(i.x,i.y,null,i.m)]:[new d(i.x,i.y)],t._exporter=(a,o)=>e.hasM?new _(a[0].x,a[0].y,a[0].z,a[0].m,o):new _(a[0].x,a[0].y,a[0].z,o);break}case"multipoint":{let i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map(a=>new d(a[0],a[1],a[2],a[3])):n?i.points.map(a=>new d(a[0],a[1],a[2])):s?i.points.map(a=>new d(a[0],a[1],null,a[2])):i.points.map(a=>new d(a[0],a[1])),t._exporter=(a,o)=>e.hasM?new q({points:a.map(l=>[l.x,l.y,l.z,l.m]),hasZ:!0,hasM:!0,spatialReference:o}):new q(a.map(l=>[l.x,l.y,l.z]),o);break}case"polyline":{let i=e,n=[],s=[],{hasZ:a,hasM:o}=e,l=0;for(let r of i.paths)if(s.push([l,l+r.length]),l+=r.length,a&&o)for(let u of r)n.push(new d(u[0],u[1],u[2],u[3]));else if(a)for(let u of r)n.push(new d(u[0],u[1],u[2]));else if(o)for(let u of r)n.push(new d(u[0],u[1],null,u[2]));else for(let u of r)n.push(new d(u[0],u[1]));t.coordinates=n,t._exporter=(r,u)=>{let f=e.hasM?r.map(h=>[h.x,h.y,h.z,h.m]):r.map(h=>[h.x,h.y,h.z]),m=s.map(h=>f.slice(h[0],h[1]));return new oe({paths:m,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}},d=class c{constructor(e,t,i=null,n=null,s=null,a=null){this.x=e,this.y=t,this.z=i,this.m=n,this.tile=s,this.elevationTile=a}clone(){return new c(this.x,this.y,this.z,this.m)}},V=class{constructor(e,t){this.layer=e,this.options=t}},W=class extends V{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{let{tileInfo:t,tilemapCache:i}=this.layer,n=D(t,i)[e].level;this.geometry.coordinates.forEach(s=>s.tile=t.tileAt(n,s.x,s.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(let e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(let t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(let t of this.geometry.coordinates){let i=t.tile?.id;t.tile=i?e[i]:null}}getTilesToFetch(){let e={},t=[];for(let i of this.geometry.coordinates){let n=i.tile;if(!n)continue;let s=i.tile?.id;i.elevationTile||!s||e[s]||(e[s]=n,t.push(n))}return t}forEachTileToFetch(e){for(let t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}},Q=class extends V{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){let i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){let{tileInfo:t,tilemapCache:i}=this.layer,n=D(t,i);if(!e)return n.length-1;let s=this.extent;if(s==null)return-1;for(let a=n.length-1;a>=0;a--){let o=n[a],l=o.resolution*t.size[0],r=o.resolution*t.size[1];if(Math.ceil(s.width/l)*Math.ceil(s.height/r)<=e)return a}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(let t of this._candidateTiles){let i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){let i=this._candidateTiles;this._candidateTiles=[],i.forEach(n=>{if(this._fetchedCandidates.has(n))return void(t&&t(n));let s=!1;e(n,()=>s=!0),s?t&&t(n):this._candidateTiles.push(n)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){let i={},n=[];for(let a of e){let o=a.id;o&&!i[o]?(i[o]=a,n.push(a)):t&&t(a)}let s=n.sort((a,o)=>a.level-o.level);return s.filter((a,o)=>{for(let l=0;l<o;l++){let r=s[l].extent;if(r&&a.extent&&G(r,a.extent))return t&&t(a),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;let t=this.extent;if(t==null)return;let{tileInfo:i,tilemapCache:n}=this.layer,s=D(i,n)[e],a=i.tileAt(s.level,t.xmin,t.ymin),o=a.extent;if(o==null)return;let l=s.resolution*i.size[0],r=s.resolution*i.size[1],u=Math.ceil((t.xmax-o[0])/l),f=Math.ceil((t.ymax-o[1])/r);for(let m=0;m<f;m++)for(let h=0;h<u;h++){let T=new Z(null,a.level,a.row-m,a.col+h);i.updateTileInfo(T),this._tileIsMasked(T)||this._candidateTiles.push(T)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&G(t,e.extent))}};function he(c,e,t=0){let i=D(c,e),n=i.length-1;if(t>0){let s=t/w(c.spatialReference),a=i.findIndex(o=>o.resolution<s);a===0?n=0:a>0&&(n=a-1)}return n}var z={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function D(c,e){let t=c.lods;if(B(e)){let{effectiveMinLOD:i,effectiveMaxLOD:n}=e;return t.filter(s=>s.level>=i&&s.level<=n)}return t}function B(c){return c?.tileInfo!=null}export{ue as ElevationQuery,g as GeometryDescriptor,he as getFinestLodIndex};
