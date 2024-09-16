import{a as g}from"./chunk-X7LBHXVA.js";import{a as y}from"./chunk-IWZCTRXU.js";import{c as _}from"./chunk-2KLGWXTA.js";import{u as d}from"./chunk-K3Q25RT2.js";import{a as f,z as l}from"./chunk-TX7DVQYF.js";import{a as n}from"./chunk-BKKKVIAS.js";import{a as m}from"./chunk-GBTN5LIS.js";import{r as i,t as a}from"./chunk-HQMV3KQV.js";import{q as h}from"./chunk-CRMMDK2Z.js";var I=f(),c=class{constructor(e){this.geometryInfo=e,this._boundsStore=new g,this._featuresById=new Map,this._markedIds=new Set,this.events=new m,this.featureAdapter=y}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry!=null&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(this.fullBounds==null)return null;let[t,r,s,o]=this.fullBounds;return{xmin:t,ymin:r,xmax:s,ymax:o,spatialReference:_(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(let t of e)this._add(t);this._emitChanged()}upsertMany(e){let t=e.map(r=>this._upsert(r));return this._emitChanged(),t.filter(h)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){let t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(let t of e){let r=this._featuresById.get(t);r&&this._remove(r)}this._emitChanged()}forEachBounds(e,t){for(let r of e){let s=this._boundsStore.get(r.objectId);s&&t(l(I,s))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,r=>{t(this._featuresById.get(r))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;let t=e.objectId;if(t==null)return void i.getLogger("esri.layers.graphics.data.FeatureStore").error(new a("featurestore:invalid-feature","feature id is missing",{feature:e}));let r=this._featuresById.get(t),s;if(this._markedIds.add(t),r?(e.displayId=r.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):this.onFeatureAdd!=null&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=d(s??n(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),s!=null&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_upsert(e){let t=e?.objectId;if(t==null)return i.getLogger("esri.layers.graphics.data.FeatureStore").error(new a("featurestore:invalid-feature","feature id is missing",{feature:e})),null;let r=this._featuresById.get(t);if(!r)return this._add(e),e;this._markedIds.add(t);let{geometry:s,attributes:o}=e;for(let u in o)r.attributes[u]=o[u];return s&&(r.geometry=s,this._boundsStore.set(t,d(n(),s,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),r}_remove(e){this.onFeatureRemove!=null&&this.onFeatureRemove(e);let t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}};export{c as a};
