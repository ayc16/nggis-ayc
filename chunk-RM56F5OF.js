import{b as S}from"./chunk-OQUBYVYT.js";import{a as T,b as Re,c as bt,d as Ct}from"./chunk-3K3SLH5Z.js";import{a as St,d as J,h as Ee,o as Le}from"./chunk-VORAPKV5.js";import{a as be}from"./chunk-WKQVOD3E.js";import{a as M,b as Tt,c as Ce}from"./chunk-TOLXLK6N.js";import{a as wt,b as Et,d as xt,f as Pe,g as Te,m as R,n as Pt,o as Y,p as L,r as ee,u as Ne}from"./chunk-CXJNPJ3A.js";import{c as K,e as x,g as y,h as le,j as Oe,l as v,m as xe,n as vt,q as _t,s as V}from"./chunk-QU6JU243.js";import{d as _e,f as we}from"./chunk-GAF32LQP.js";import{b as yt}from"./chunk-S3DH7XZE.js";import{a as gt}from"./chunk-4Y7EKSO4.js";import{w as m}from"./chunk-CDCW33GU.js";import{b as ve,c as mt}from"./chunk-DJEFBPF6.js";import{a as pe}from"./chunk-S2CEVLI5.js";import{a as ft}from"./chunk-47Q3ZDMA.js";import{a as Q}from"./chunk-PDBA6QOJ.js";import{h as De,t as lt}from"./chunk-7G4KK3KW.js";import{d as He,h as ct,i as B,j as W,l as dt,o as ut,q as ht}from"./chunk-2ETHV3H2.js";import{a as O,e as Ye,f as ne,h as se}from"./chunk-4XUOIGFO.js";import{b as Ie}from"./chunk-ALQ3STGG.js";import{a as Se,f as oe}from"./chunk-7HZKOXPR.js";import{B as ae,b as rt,c as nt,d as st,e as ye,m as at,o as ot,v as pt}from"./chunk-OZF6BMOL.js";import{a as F,b as tt}from"./chunk-GJP6PTKT.js";import{a as it}from"./chunk-RSDQHAJX.js";import{b as H}from"./chunk-SF6Z2K5H.js";import{a as Ke}from"./chunk-GBTN5LIS.js";import{ba as et,da as ge}from"./chunk-JDDD6VJ4.js";import{L as u,O as C}from"./chunk-AUTL5LCV.js";import{S as b}from"./chunk-KUJG22IX.js";import{a as d}from"./chunk-W3WDPWBE.js";import{e as Be,k as me,m as Qe,v as Je}from"./chunk-GISCFF3Z.js";import{r as fe}from"./chunk-HQMV3KQV.js";import{i as Xe,q as $e}from"./chunk-CRMMDK2Z.js";import{a as ue,b as he,h as _}from"./chunk-EAH6BNBL.js";var Yt={readOnly:!0,get(){return St(this.view)}};var P=class extends C{set attributeRulesEnabled(t){this._set("attributeRulesEnabled",t),t&&this.loadRules()}get layerView(){return this.view?.allLayerViews?.find(t=>t.layer===this.layer)}get valid(){let{_valid:t,snappingSource:i,layer:e}=this;return!(!i||!e)&&t}get subtypeFilter(){let{layer:t,snappingSource:i}=this;if(!oe(t)||!t.subtypes?.length||!i)return{mode:"not-in-use",filter:null};let e=i.layerSource.sublayerSources.filter(n=>n.enabled&&n.layer.visible&&yt(this.view?.scale,n.layer.effectiveScaleRange.minScale,n.layer.effectiveScaleRange.maxScale)).map(n=>n.layer.subtypeCode);if(!e.length)return{mode:"none-visible",filter:null};if(e.length===t.subtypes.length)return{mode:"all-visible",filter:null};let r=t.fieldsIndex.get(t.subtypeField)?.name??t.subtypeField;return e.length===1?{mode:"in-use",filter:`${r} = ${e.getItemAt(0)}`}:{mode:"in-use",filter:`${r} IN (${e.join(", ")})`}}get floorFilter(){let{view:t,layer:i}=this;return t&&i?gt({view:t,layer:i}):null}constructor(t){super(t),this.layer=null,this.snappingSource=null,this.rulesTable=null,this._valid=null}initialize(){if(!this.snappingSource||!this.layer)return void(this._valid=!1);let{layer:t,snappingSource:i}=this;if("refresh"in t){let e=t;this.addHandles(e.on("refresh",()=>i.refresh()))}this.loadRules(),this.addHandles([O(()=>i.updating,e=>i.layerSource.updating=e,se),O(()=>i.availability,e=>i.layerSource.availability=e,se)])}getFetchCandidatesParameters(t,i,e){if(!this.valid)return[];let{layer:r,layerView:n,floorFilter:s,rulesTable:o,subtypeFilter:a}=this,p=he(ue({distance:e,mode:this.view?.type??"2d",point:t,coordinateHelper:i.coordinateHelper},It()),{filter:n&&"filter"in n?n.filter:null});if(s&&(p.filter=qe(p.filter,s)),a.mode!=="not-in-use"&&a.mode!=="all-visible"){if(a.mode==="none-visible")return[];p.filter?p.filter.where=Ie(p.filter.where,a.mode):p.filter=new pe({where:a.filter})}if(!this.attributeRulesEnabled)return[p];let l=i.feature,c=l?.sourceLayer?.type==="subtype-sublayer"?l.sourceLayer.parent:l?.sourceLayer;if(o&&l&&Ne(this.view?.map)&&(Se(r)||oe(r))&&r.layerId&&(Se(c)||oe(c))&&this.view.map.utilityNetworks?.find(h=>h.isUtilityLayer(c))){if(o.loadStatus!=="loaded")return[];let h=[],f=r.layerId,g=o.getFeatureSQL(c,l)?.[f];if(!g)return[];let E=g.anyVertex,A=g.endVertex;return A&&E&&A===E&&(A=""),A&&h.push(he(ue({},p),{returnEdge:!1,vertexMode:"ends",filter:qe(p.filter,A)})),E&&h.push(he(ue({},p),{returnEdge:!1,vertexMode:"all",filter:qe(p.filter,E)})),h}return[p]}loadRules(){return _(this,null,function*(){this._valid=null;let{layer:t,view:i,attributeRulesEnabled:e}=this;if(e&&t&&i&&Ne(i?.map)&&(Se(t)||oe(t)))try{yield Promise.allSettled(i.map.utilityNetworks?.map(n=>n.load())??[]);let r=i.map.utilityNetworks?.find(n=>n.isUtilityLayer(t));r&&(this.rulesTable=yield r.getRulesTable(),yield this.rulesTable?.load())}catch{return this._valid=!1,void fe.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",t.title)}this._valid=!0})}remove(){this.destroy()}destroy(){this.snappingSource?.destroy()}};function It(){return{returnEdge:!0,vertexMode:"all"}}function qe(t,i){return t==null?new pe({where:i}):t.where?new pe({where:Ie(t.where,i)}):new pe({where:i})}d([u({constructOnly:!0})],P.prototype,"layer",void 0),d([u({constructOnly:!0})],P.prototype,"snappingSource",void 0),d([u({constructOnly:!0})],P.prototype,"view",void 0),d([u({value:!1})],P.prototype,"attributeRulesEnabled",null),d([u()],P.prototype,"layerView",null),d([u()],P.prototype,"rulesTable",void 0),d([u()],P.prototype,"valid",null),d([u()],P.prototype,"subtypeFilter",null),d([u()],P.prototype,"floorFilter",null),d([u()],P.prototype,"_valid",void 0),P=d([b("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],P);var j=class extends M{constructor({targetPoint:i,constraint:e,previousVertex:r,otherVertex:n,otherVertexType:s,isDraped:o,selfSnappingType:a,objectId:p,domain:l}){super(i,e,o,l??v.SELF),this.previousVertex=r,this.otherVertex=n,this.otherVertexType=s,this.selfSnappingType=a??I.None,this.objectId=p??null}get hints(){let i=this.previousVertex,e=this.otherVertexType===G.CENTER?this.otherVertex:this.targetPoint,r=this.otherVertexType===G.CENTER?this.targetPoint:this.otherVertex;return[new V(L.TARGET,e,r,this.isDraped,this.domain),new V(L.REFERENCE,i,e,this.isDraped,this.domain),new Re(this.previousVertex,e,r,this.isDraped,this.domain)]}},G,I;(function(t){t[t.NEXT=0]="NEXT",t[t.CENTER=1]="CENTER"})(G||(G={})),function(t){t[t.None=0]="None",t[t.LastVertex=1]="LastVertex",t[t.FirstVertex=2]="FirstVertex",t[t.ExistingEdge=3]="ExistingEdge"}(I||(I={}));var N=class extends C{get updating(){return this._snappingSources.some(t=>t?.valid==null||t.valid===!0&&t.snappingSource?.updating===!0)||this._updatingHandles.updating}constructor(t){super(t),this.options=null,this._domain=v.FEATURE,this._updatingHandles=new ft,this._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},notes:{module:null,loader:null},scene:{module:null,loader:null}}}initialize(){let t=Ye(()=>this.options?._effectiveFeatureSources,(i,e)=>this._createSourceInfo(i,e));this._snappingSources=t,this.addHandles([Be(t),O(()=>({rulesEnabled:!!this.options?.attributeRulesEnabled,sources:this._snappingSources.filter($e)}),({rulesEnabled:i,sources:e})=>{for(let r of e)r.attributeRulesEnabled=i},ne)])}destroy(){this._set("options",null),this._updatingHandles.destroy()}fetchCandidates(t,i,e,r){return _(this,null,function*(){if(!(i&this._domain&&this.options!=null&&this.options.effectiveFeatureEnabled))return[];let n=[],s=this._computeScreenSizeDistanceParameters(t,e);for(let a of this._snappingSources){if(!a?.valid||!a.snappingSource?.layerSource?.enabled||a.layerView?.suspended)continue;let p=a.getFetchCandidatesParameters(t,e,s);for(let l of p)n.push(a.snappingSource.fetchCandidates(l,r).then(c=>c.filter(h=>!this._candidateIsExcluded(a.snappingSource,h,e.excludeFeature))))}let o=(yield Je(n)).flat();return this._addRightAngleCandidates(o,t,s,e),me(r),Y(t,o),o})}_addRightAngleCandidates(t,i,e,r){let n=r.vertexHandle!=null?r.vertexHandle.rightEdge?.rightVertex?.pos:r.editGeometryOperations!=null&&r.editGeometryOperations.data.type==="polygon"?r.editGeometryOperations.data.components[0]?.getFirstVertex()?.pos:null,s=r.vertexHandle!=null?r.vertexHandle.leftEdge?.leftVertex?.pos:r.editGeometryOperations!=null?r.editGeometryOperations.data.components[0]?.getLastVertex()?.pos:null,{view:o}=this,a=y(n,o,r),p=y(s,o,r),l=t.length;for(let c=0;c<l;c++)this._addRightAngleCandidate(t[c],p,i,e,t),this._addRightAngleCandidate(t[c],a,i,e,t)}_addRightAngleCandidate(t,i,e,r,n){if(i==null||!Dt(t))return;let s=t.constraint.closestTo(i),o=(s[0]-e[0])/r.x,a=(s[1]-e[1])/r.y,{start:p,end:l}=t.constraint;if(o*o+a*a<=1){let c=W(s,p)>W(s,l)?p:l,h=new j({targetPoint:x(s),otherVertex:i,otherVertexType:G.NEXT,previousVertex:c,constraint:new Pe(i,s),objectId:t.objectId,isDraped:t.isDraped,domain:v.FEATURE});n.push(h)}}_computeScreenSizeDistanceParameters(t,i){let e=this.options!=null?this.options.distance*(i.pointer==="touch"?this.options.touchSensitivityMultiplier:1):0;return this.view==null?{x:e,y:e,z:e,distance:e}:this.view.type==="2d"?(e*=this.view.resolution,{x:e,y:e,z:e,distance:e}):this._computeScreenSizeDistanceParameters3D(t,e,this.view,i)}_computeScreenSizeDistanceParameters3D(t,i,e,r){let{spatialReference:n}=r;e.renderCoordsHelper.toRenderCoords(t,n,Rt);let s=e.state.camera.computeScreenPixelSizeAt(Rt),o=s*e.renderCoordsHelper.unitInMeters,a=o/ge(n),p=o/et(n),l=i*a,c=i*p,h=S(t,n,m,e),f=h?ze(h,t,a,0,0,e,r):0,g=h?ze(h,t,0,a,0,e,r):0,E=h?ze(h,t,0,0,p,e,r):0;return{x:f===0?0:l/f,y:g===0?0:l/g,z:E===0?0:c/E,distance:s*i}}_candidateIsExcluded(t,i,e){if(e==null)return!1;let r=this._getCandidateObjectId(i);if(r==null)return!1;let n=t.layerSource.layer;return n.type==="graphics"?e.uid===r:e.sourceLayer===n&&!(!e.attributes||!("objectIdField"in n))&&e.attributes[n.objectIdField]===r}_getCandidateObjectId(t){return t instanceof Tt?t.objectId:null}_createSourceInfo(t,i){return _(this,null,function*(){let e=t.layer;e.loaded||(yield e.load(),me(i));let{view:r}=this,n=yield this._createFeatureSnappingSourceType(t);return me(i),new P(n==null?{}:{snappingSource:n,view:r,layer:e})})}_createFeatureSnappingSourceType(t){return _(this,null,function*(){switch(t.layer.type){case"feature":case"geojson":case"csv":case"oriented-imagery":case"subtype-group":case"wfs":return this._createFeatureSnappingSourceFeatureLayer(t);case"graphics":return this._createFeatureSnappingSourceGraphicsLayer(t);case"map-notes":return this._createFeatureSnappingSourceMapNotesLayer(t);case"scene":case"building-scene":return this._createFeatureSnappingSourceSceneLayer(t)}return null})}_createFeatureSnappingSourceSceneLayer(t){return _(this,null,function*(){let{view:i}=this;return i==null||i.type!=="3d"?null:new(yield this._getSourceModule("scene")).SceneLayerSnappingSource({layerSource:t,view:i})})}_createFeatureSnappingSourceFeatureLayer(t){return _(this,null,function*(){switch(t.layer.source?.type){case"feature-layer":case"oriented-imagery":return new(yield this._getSourceModule("featureService")).FeatureServiceSnappingSource({spatialReference:this.spatialReference,view:this.view,layerSource:t});case"memory":case"csv":case"geojson":case"wfs":return t.layer.geometryType==="mesh"?null:new(yield this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource({layerSource:t,view:this.view})}return null})}_createFeatureSnappingSourceGraphicsLayer(t){return _(this,null,function*(){return new(yield this._getSourceModule("graphics")).GraphicsSnappingSource({getGraphicsLayers:()=>[t.layer],spatialReference:this.spatialReference,view:this.view,layerSource:t})})}_createFeatureSnappingSourceMapNotesLayer(t){return _(this,null,function*(){return new(yield this._getSourceModule("notes")).GraphicsSnappingSource({getGraphicsLayers:()=>t.layer.sublayers?.toArray()??[],spatialReference:this.spatialReference,view:this.view,layerSource:t})})}_getSourceModule(t){return _(this,null,function*(){let i=this._sourceModules[t];if(i.loader==null){let e=this._loadSourceModule(t),r={module:null,loader:e};this._sourceModules[t]=r;let n=yield e,s={module:n,loader:e};return this._sourceModules[t]=s,n}return i.module==null?i.loader:i.module})}_loadSourceModule(t){let i=this._updatingHandles;switch(t){case"featureService":return i.addPromise(import("./chunk-Q5QNGH6R.js"));case"featureCollection":return i.addPromise(import("./chunk-7Y2QPJMK.js"));case"graphics":case"notes":return i.addPromise(import("./chunk-GZAGIWTJ.js"));case"scene":return i.addPromise(import("./chunk-5MDOXD4T.js"))}}get test(){}};function Dt(t){return(t instanceof Ce||t instanceof be)&&!Ht(t)}function Ht({constraint:{start:t,end:i}}){let e=ot(t,i),r=W(t,i);return e<it()||r/e<Nt}function ze(t,i,e,r,n,s,{spatialReference:o}){let a=rt(Ot,i);a[0]+=e,a[1]+=r,a[2]+=n;let p=S(a,o,m,s);return p?Pt(p,t):1/0}d([u({constructOnly:!0})],N.prototype,"spatialReference",void 0),d([u({constructOnly:!0})],N.prototype,"view",void 0),d([u()],N.prototype,"options",void 0),d([u({readOnly:!0})],N.prototype,"updating",null),d([u()],N.prototype,"_snappingSources",void 0),N=d([b("esri.views.interactive.snapping.FeatureSnappingEngine")],N);var Rt=F(),Ot=F(),Nt=1e-4;var D=class{constructor(i,e){this.view=i,this.options=e,this.squaredShortLineThreshold=T.shortLineThreshold*T.shortLineThreshold}snap(i,e){return e.vertexHandle!=null?e.vertexHandle.type!=="vertex"?[]:this.snapExistingVertex(i,e):this.snapNewVertex(i,e)}edgeExceedsShortLineThreshold(i,e){return this.exceedsShortLineThreshold(y(i.leftVertex.pos,this.view,e),y(i.rightVertex.pos,this.view,e),e)}exceedsShortLineThreshold(i,e,{spatialReference:r}){return this.squaredShortLineThreshold===0||R(S(e,r,m,this.view),S(i,r,m,this.view))>this.squaredShortLineThreshold}isVertical(i,e,{spatialReference:r}){let n=ge(r);return B(i,e)*n<T.verticalLineThresholdMeters}squaredProximityThreshold(i){return i==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){let{distance:i,touchSensitivityMultiplier:e}=this.options,r=i*e;return r*r}};var te=class extends M{constructor({lineStart:i,lineEnd:e,targetPoint:r,isDraped:n}){super(r,new Te(i,e),n,v.SELF),this._referenceLineHint=new V(L.REFERENCE_EXTENSION,i,e,n,this.domain)}get hints(){return[this._referenceLineHint,new V(L.TARGET,this._lineEndClosestToTarget(),this.targetPoint,this.isDraped,this.domain)]}_lineEndClosestToTarget(){return this.constraint.closestEndTo(this.targetPoint)}};var Ve=class extends D{snapNewVertex(i,e){let r=e.editGeometryOperations.data.components[0],n=r.edges.length,s=[];if(n<1)return s;let{spatialReference:o}=e,a=S(i,o,m,this.view),{view:p}=this,l=r.edges[n-1],c=l;do{if(this.edgeExceedsShortLineThreshold(c,e)){let h=ee(c,p,e);this._processCandidateProposal(h.left,h.right,i,a,e,s)}c=c.leftVertex.leftEdge}while(c&&c!==l);return s}snapExistingVertex(i,e){let r=[],n=e.vertexHandle,s=n.component;if(s.edges.length<2)return r;let{view:o}=this,{spatialReference:a}=e,p=S(i,a,m,o),l=n.leftEdge,c=n.rightEdge;l&&c&&this.edgeExceedsShortLineThreshold(l,e)&&this.edgeExceedsShortLineThreshold(c,e)&&this._processCandidateProposal(y(l.leftVertex.pos,o,e),y(c.rightVertex.pos,o,e),i,p,e,r);let h=s.edges[0],f=h;do{if(f!==n.leftEdge&&f!==n.rightEdge&&this.edgeExceedsShortLineThreshold(f,e)){let g=ee(f,o,e);this._processCandidateProposal(g.left,g.right,i,p,e,r)}f=f.rightVertex.rightEdge}while(f&&f!==h);return r}_processCandidateProposal(i,e,r,n,s,o){let{spatialReference:a,pointer:p}=s,l=F();qt(l,i,e,r,s);let c=x(l);R(n,S(c,a,m,this.view))<this.squaredProximityThreshold(p)&&o.push(new te({lineStart:i,lineEnd:e,targetPoint:c,isDraped:s.elevationInfo?.mode==="on-the-ground"}))}};function qt(t,i,e,r,n){zt(t,i,e,r,n)||kt(t,r,i,e)}function zt(t,i,e,r,{spatialReference:n}){let s=J(i,e,n,n);if(s==null)return!1;let o=J(e,r,n,n);if(o==null)return!1;let a=Le(e,r,n);if(a==null)return!1;let p=Math.abs(mt.shortestSignedDiff(s,o))>Math.PI/2?ve.normalize(s+Math.PI):s;return Ee(t,e,n,we(a,"meters"),_e(p,"radians","geographic"),"geodesic"),t[2]=r[2],!0}function kt(t,i,e,r){wt(i,{start:e,end:r,type:_t.LINE},t),t[2]=i[2]}var ie=class extends M{constructor({referenceLine:i,lineStart:e,targetPoint:r,isDraped:n}){let s=tt(e),{left:o,right:a}=i;ye(s,st(s,s,a),o),super(r,new Te(e,s),n,v.SELF),this._referenceLines=[{edge:i,fadeLeft:!0,fadeRight:!0}]}get hints(){return[new V(L.TARGET,this.constraint.start,this.targetPoint,this.isDraped,this.domain),new bt(this.constraint.start,this.targetPoint,this.isDraped,this.domain),...this._referenceLines.map(i=>new V(L.REFERENCE,i.edge.left,i.edge.right,this.isDraped,this.domain,i.fadeLeft,i.fadeRight))]}addReferenceLine(i){let e={edge:i,fadeLeft:!0,fadeRight:!0};this._referenceLines.forEach(r=>{ae(i.right,r.edge.left)&&(r.fadeLeft=!1,e.fadeRight=!1),ae(i.right,r.edge.right)&&(r.fadeRight=!1,e.fadeRight=!1),ae(i.left,r.edge.right)&&(r.fadeRight=!1,e.fadeLeft=!1),ae(i.left,r.edge.left)&&(r.fadeLeft=!1,e.fadeLeft=!1)}),this._referenceLines.push(e)}};var Fe=class extends D{snapNewVertex(i,e){let r=e.editGeometryOperations.data.components[0],n=r.edges.length,s=r.vertices.length,o=[];if(n<2)return o;let{view:a}=this,p=S(i,e.spatialReference,m,a),l=y(r.vertices[s-1].pos,a,e),c=y(r.vertices[0].pos,a,e),h=r.edges[n-1],f=h;do{if(this.edgeExceedsShortLineThreshold(f,e)){let g=ee(f,a,e);this._checkEdgeForParallelLines(g,l,i,p,e,o),this._checkEdgeForParallelLines(g,c,i,p,e,o)}f=f.leftVertex.leftEdge}while(f&&f!==h);return o}snapExistingVertex(i,e){let r=[],n=e.vertexHandle,s=n.component;if(s.edges.length<3)return r;let{view:o}=this,a=S(i,e.spatialReference,m,o),p=n.leftEdge,l=n.rightEdge,c=s.vertices[0],h=y(c.pos,o,e),f=s.vertices.length,g=s.vertices[f-1],E=y(g.pos,o,e),A=s.edges[0],k=A;do{if(k!==p&&k!==l&&this.edgeExceedsShortLineThreshold(k,e)){let de=ee(k,o,e);p&&this._checkEdgeForParallelLines(de,y(p.leftVertex.pos,o,e),i,a,e,r),l&&this._checkEdgeForParallelLines(de,y(l.rightVertex.pos,o,e),i,a,e,r),n===c?this._checkEdgeForParallelLines(de,E,i,a,e,r):n===g&&this._checkEdgeForParallelLines(de,h,i,a,e,r)}k=k.rightVertex.rightEdge}while(k&&k!==A);return r}_checkEdgeForParallelLines(i,e,r,n,s,o){let a=i.left,p=i.right;if(xe(Z,e,a,p),W(Z,e)<T.parallelLineThreshold)return;xe(Z,r,a,p,e);let{spatialReference:l,pointer:c}=s,h=x(K(Z[0],Z[1],r[2]));if(R(n,S(h,l,m,this.view))<this.squaredProximityThreshold(c)){if(this.isVertical(h,e,s)||this.isVertical(a,p,s)||jt(i,o))return;o.push(new ie({referenceLine:i,lineStart:e,targetPoint:h,isDraped:s.elevationInfo?.mode==="on-the-ground"}))}}};function jt(t,i){let e=t.left,r=t.right;for(let n of i)if(xe(Z,r,n.constraint.start,n.constraint.end,e),W(Z,r)<T.parallelLineThreshold)return n.addReferenceLine(t),!0;return!1}var Z=Q();var Ae=class extends D{snapNewVertex(i,e){let r=e.editGeometryOperations.data.components[0],n=[];if(r.vertices.length<2)return n;let{view:s}=this,o=S(i,e.spatialReference,m,s),a=r.vertices.at(-1);this._checkForSnappingCandidate(I.LastVertex,n,a.leftEdge,a,a.leftEdge.leftVertex,i,o,e);let p=r.vertices[0];return this._checkForSnappingCandidate(I.FirstVertex,n,p.rightEdge,p,p.rightEdge.rightVertex,i,o,e),n}snapExistingVertex(i,e){let r=[],n=e.vertexHandle;if(n.component.vertices.length<3)return r;let{view:s}=this,o=S(i,e.spatialReference,m,s),a=n.leftEdge,p=n.rightEdge;if(a?.leftVertex.leftEdge){let l=a.leftVertex.leftEdge;this._checkForSnappingCandidate(I.ExistingEdge,r,l,l.rightVertex,l.leftVertex,i,o,e)}if(p?.rightVertex.rightEdge){let l=p.rightVertex.rightEdge;this._checkForSnappingCandidate(I.ExistingEdge,r,l,l.leftVertex,l.rightVertex,i,o,e)}return r}_checkForSnappingCandidate(i,e,r,n,s,o,a,p){if(!this.edgeExceedsShortLineThreshold(r,p))return;let l=this.view,c=y(n.pos,l,p),h=y(s.pos,l,p);Gt(Lt,h,c,o,p),this._checkForSnappingCandidateAlongProjectedRay(i,e,h,c,Lt,o,a,p)}_checkForSnappingCandidateAlongProjectedRay(i,e,r,n,s,o,a,p){let{spatialReference:l,pointer:c}=p,h=He(je,o,n),f=ut(s,h)/dt(s),g=ct(je,n,s,f),E=x(K(g[0],g[1],o[2]));if(R(a,S(E,l,m,this.view))>this.squaredProximityThreshold(c)||this.isVertical(E,n,p)||this.isVertical(n,r,p))return;let A=at(F(),n,s,Math.sign(f));e.push(new j({targetPoint:E,constraint:new Pe(n,A),previousVertex:r,otherVertex:n,otherVertexType:G.CENTER,selfSnappingType:i,isDraped:p.elevationInfo?.mode==="on-the-ground"}))}};function Gt(t,i,e,r,n){Ut(t,i,e,r,n)||Wt(t,i,e)}function Ut(t,i,e,r,{spatialReference:n}){let s=J(i,e,n,n);if(s==null)return!1;let o=J(e,r,n,n);if(o==null)return!1;let a=Math.sign(ve.shortestSignedDiff(s,o))*Math.PI*.5,p=_e(s+a,"radians","geographic"),l=F(),c=Le(e,r,n);return c!=null&&(Ee(l,e,n,we(c,"meters"),p,"geodesic"),ye(t,l,e),!0)}function Wt(t,i,e){let r=He(je,e,i);nt(t,r[1],-r[0],0)}var je=Q(),Lt=F();var re=class extends M{constructor({targetPoint:i,point1:e,point2:r,isDraped:n}){super(i,new xt(pt(F(),e,r,.5),.5*B(e,r)),n,v.SELF),this._p1=e,this._p2=r}get hints(){return[new V(L.REFERENCE,this.targetPoint,this._p1,this.isDraped,this.domain),new V(L.REFERENCE,this.targetPoint,this._p2,this.isDraped,this.domain),new Re(this._p1,this.targetPoint,this._p2,this.isDraped,this.domain)]}};var Me=class extends D{snapNewVertex(i,e){let r=e.editGeometryOperations.data.components[0],n=[],s=r.vertices.length;if(e.editGeometryOperations.data.type!=="polygon"||s<2)return n;let{view:o}=this,a=r.vertices[0],p=r.vertices[s-1],l=y(a.pos,o,e),c=y(p.pos,o,e);return this._processCandidateProposal(l,c,i,e,n),n}snapExistingVertex(i,e){let r=[],n=e.vertexHandle,s=n.component;if(s.edges.length<2||e.editGeometryOperations.data.type==="polyline"&&(n.index===0||n.index===s.vertices.length-1))return r;let{view:o}=this,a=y(n.leftEdge.leftVertex.pos,o,e),p=y(n.rightEdge.rightVertex.pos,o,e);return this._processCandidateProposal(a,p,i,e,r),r}_processCandidateProposal(i,e,r,n,s){if(!this.exceedsShortLineThreshold(i,e,n))return;let o=ht(Vt,i,e,.5),a=.5*B(i,e),p=vt(Vt,r,o,a),l=x(K(p[0],p[1],r[2])),{spatialReference:c,pointer:h}=n,f=S(r,c,m,this.view);if(R(f,S(l,c,m,this.view))<this.squaredProximityThreshold(h)){if(this.isVertical(i,l,n)||this.isVertical(l,e,n))return;s.push(new re({targetPoint:l,point1:i,point2:e,isDraped:n.elevationInfo?.mode==="on-the-ground"}))}}},Vt=Q();var X=class extends C{constructor(t){super(t),this.updating=!1,this._snappers=new H,this._domain=v.SELF}initialize(){this._snappers.push(new Fe(this.view,this.options),new Ve(this.view,this.options),new Ae(this.view,this.options),new Me(this.view,this.options))}set options(t){this._set("options",t);for(let i of this._snappers)i.options=t}fetchCandidates(t,i,e){return _(this,null,function*(){if(!(i&this._domain&&this.options.effectiveSelfEnabled))return[];let r=[];for(let n of this._snappers.items)for(let s of n.snap(t,e))r.push(s);return Y(t,r),r})}};d([u({readOnly:!0})],X.prototype,"updating",void 0),d([u({constructOnly:!0})],X.prototype,"view",void 0),d([u()],X.prototype,"options",null),X=d([b("esri.views.interactive.snapping.SelfSnappingEngine")],X);function Ft(t,i){return[new X({view:t,options:i}),new N({view:t,options:i,spatialReference:t.spatialReference})]}var U=class extends C{constructor(t){super(t),this.layer=null,this.enabled=!0,this.updating=!1,this.availability=1,this.sublayerSources=new H}};d([u({constructOnly:!0})],U.prototype,"layer",void 0),d([u()],U.prototype,"enabled",void 0),d([u()],U.prototype,"updating",void 0),d([u()],U.prototype,"availability",void 0),d([u()],U.prototype,"sublayerSources",void 0),U=d([b("esri.views.interactive.snapping.FeatureSnappingLayerSource")],U);var Ge=U;var w=class extends C{constructor(t){super(t),this.enabled=!1,this.enabledToggled=!1,this.forceDisabled=!1,this.selfEnabled=!0,this.featureEnabled=!0,this.attributeRulesEnabled=!1,this.featureSources=new H,this.distance=T.distance,this.touchSensitivityMultiplier=T.touchSensitivityMultiplier}get effectiveEnabled(){return!this.forceDisabled&&(this.enabledToggled?!this.enabled:this.enabled)}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}get _effectiveFeatureSources(){let t=this.featureSources;t.some(At)&&fe.getLogger(this).warnOnce("Do not configure SubtypeGroupLayer sources in SnappingOptions.featureSources directly. Create a FeatureSnappingLayerSource for each SubtypeSublayer.");let i=t.filter(Xt),e=this._get("_effectiveFeatureSources")?.filter(At)??new H;for(let a of i){let p=e.find(l=>l.layer===a.layer.parent);if(p)p.sublayerSources.includes(a)||p.sublayerSources.add(a);else if(a.layer.parent){let l=new Ge({layer:a.layer.parent});l.sublayerSources.add(a),e.add(l)}}for(let a of e){let p=a.sublayerSources.filter(l=>!i.includes(l));a.sublayerSources.removeMany(p)}e.removeMany(e.filter(a=>a.sublayerSources.length===0));let r=t.filter(Zt),n=this._get("_effectiveFeatureSources")??new H,{added:s,removed:o}=Xe(n.toArray(),[...r,...e]);return n.removeMany(o),n.addMany(s),n}};d([u()],w.prototype,"enabled",void 0),d([u()],w.prototype,"enabledToggled",void 0),d([u()],w.prototype,"forceDisabled",void 0),d([u()],w.prototype,"selfEnabled",void 0),d([u()],w.prototype,"featureEnabled",void 0),d([u()],w.prototype,"attributeRulesEnabled",void 0),d([u({type:H.ofType(Ge)})],w.prototype,"featureSources",void 0),d([u()],w.prototype,"distance",void 0),d([u()],w.prototype,"touchSensitivityMultiplier",void 0),d([u({readOnly:!0})],w.prototype,"effectiveEnabled",null),d([u({readOnly:!0})],w.prototype,"effectiveSelfEnabled",null),d([u({readOnly:!0})],w.prototype,"effectiveFeatureEnabled",null),d([u({readOnly:!0})],w.prototype,"_effectiveFeatureSources",null),w=d([b("esri.views.interactive.snapping.SnappingOptions")],w);var Mt=w;function At(t){return t.layer.type==="subtype-group"}function Zt(t){return t.layer.type!=="subtype-group"}function Xt(t){return t.layer.type==="subtype-sublayer"}var $=class extends M{constructor(i,e,r,n){super(i,new Et(i),n,v.ALL),this.first=e,this.second=r}get hints(){return this.first.targetPoint=this.targetPoint,this.second.targetPoint=this.targetPoint,[...this.first.hints,...this.second.hints,new Ct(this.targetPoint,this.isDraped,this.domain)]}};var q=class extends Ke.EventedMixin(C){constructor(t){super(t),this.options=new Mt,this.snappingEnginesFactory=Ft,this._engines=[],this._currentMainCandidate=null,this._currentOtherActiveCandidates=[],this._currentSnappedType=z.MAIN}initialize(){this.addHandles([O(()=>{let{effectiveFeatureEnabled:t,effectiveSelfEnabled:i,touchSensitivityMultiplier:e,distance:r}=this.options;return{effectiveFeatureEnabled:t,effectiveSelfEnabled:i,touchSensitivityMultiplier:e,distance:r}},()=>{this.doneSnapping(),this.emit("changed")},ne),O(()=>this.options,t=>{for(let i of this._engines)i.options=t},ne),O(()=>({viewReady:this.view.ready,viewSpatialReference:this.view.spatialReference,snappingEnginesFactory:this.snappingEnginesFactory}),({viewReady:t,snappingEnginesFactory:i})=>this._recreateEngines(t,i),se)])}destroy(){this._destroyEngines()}get updating(){return this._engines.some(t=>t.updating)}_recreateEngines(t,i){if(this._destroyEngines(),!t)return;let{view:e,options:r}=this;this._engines=i(e,r)}_destroyEngines(){for(let t of this._engines)t.destroy();this._engines=[]}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){let{distance:t,touchSensitivityMultiplier:i}=this.options,e=t*i;return e*e}snap(t){return Qt(t)?this._snapMultiPoint(t):this._snapSinglePoint(t)}update(t){let{point:i,context:e}=t;this._removeVisualization();let r=this._currentMainCandidate;if(r==null)return i;let n=this._selectUpdateInput(t);if(n==null)return i;let{spatialReference:s}=e,o=De(n,s);if(o==null)return i;let{view:a}=this,{elevationInfo:p,visualizer:l}=e,c=[],h=le(o,a,p),f=r.constraint.closestTo(h);if(!this._arePointsWithinScreenThreshold(h,f,e)||!We(r,e.drawConstraints))return this._resetSnappingState(),i;r.targetPoint=x(f),c.push(...r.hints);for(let g of this._currentOtherActiveCandidates)We(g,e.drawConstraints)&&(g.targetPoint=x(f),c.push(...g.hints));return l!=null&&this.addHandles(l.draw(c,{spatialReference:s,elevationInfo:Jt(e),view:a,selfSnappingZ:e.selfSnappingZ}),Ue),Oe(f,a,i,e)}doneSnapping(){this._removeVisualization(),this._resetSnappingState()}_selectUpdateInput({point:t,scenePoint:i}){switch(this._currentSnappedType){case z.MAIN:return t;case z.SCENE:return i}}_resetSnappingState(){this._currentMainCandidate=null,this._currentOtherActiveCandidates=[],this._currentSnappedType=z.MAIN}_removeVisualization(){this.removeHandles(Ue)}_snapSinglePoint(r){return _(this,arguments,function*({point:t,context:i,signal:e}){let{view:n}=this,{elevationInfo:s}=i,o=le(t,n,s),a=yield this._fetchCandidates(o,v.ALL,i,e);return this._createSnapResult(o,z.MAIN,a,n,t,i,e)})}_snapMultiPoint(n){return _(this,arguments,function*({point:t,scenePoint:i,context:e,signal:r}){let{view:s}=this,{coordinateHelper:o,elevationInfo:a,spatialReference:p}=e;yield lt(i.spatialReference,p);let l=De(i,p),c=le(l,s,a),h=yield this._fetchCandidates(c,v.FEATURE,e,r);if(h.length>0){let E=yield this._fetchCandidates(c,v.SELF,e,r);return this._createSnapResult(c,z.SCENE,[...h,...E],s,l,e,r)}let f=le(t,s,a),g=yield this._fetchCandidates(f,v.SELF,e,r);return this._createSnapResult(f,z.MAIN,g,s,{z:o.hasZ()&&t.hasZ?t.z??0:void 0,m:o.hasM()&&t.hasM?t.m??0:void 0},e,r)})}_fetchCandidates(t,i,e,r){return _(this,null,function*(){return(yield Promise.all(this._engines.map(n=>n.fetchCandidates(t,i,e,r)))).flat()})}_createSnapResult(t,i,e,r,n,s,o){return{get valid(){return!Qe(o)},apply:()=>{let{spatialReference:a}=s,{snappedPoint:p,hints:l}=this._processCandidates(t,i,e,s);return this._removeVisualization(),s.visualizer!=null&&this.addHandles(s.visualizer.draw(l,{spatialReference:a,elevationInfo:m,view:r,selfSnappingZ:s.selfSnappingZ}),Ue),Oe(p,r,n,s)}}}_processCandidates(t,i,e,r){if(e.length<1)return this.doneSnapping(),{snappedPoint:t,hints:[]};this._currentSnappedType!==i&&this._resetSnappingState(),Y(t,e);let n=this._currentMainCandidate;if(n!=null){let s=Bt(n,e);if(s>=0){if(!(e[s]instanceof $))return this._intersectWithOtherCandidates(s,e,t,i,r);if(this._arePointsWithinScreenThreshold(t,n.targetPoint,r))return this._updateSnappingCandidate(n,i,e,r)}}return this._intersectWithOtherCandidates(0,e,t,i,r)}_intersectWithOtherCandidates(t,i,e,r,n){let{coordinateHelper:s}=n,o=i[t],a=[];for(let p=0;p<i.length;++p){if(p===t)continue;let l=i[p],c=o.constraint.intersect(l.constraint);if(c)for(let h of c.closestPoints(o.targetPoint))a.push([new $(x(h),o,l,l.isDraped),this._squaredScreenDistance(e,h,s)])}return a.length>0&&(a.sort((p,l)=>p[1]-l[1]),a[0][1]<this._squaredPointProximityThreshold(n.pointer))?this._updateSnappingCandidate(a[0][0],r,i,n):We(o,n.drawConstraints)?this._updateSnappingCandidate(o,r,i,n):{snappedPoint:e,hints:[]}}_updateSnappingCandidate(t,i,e,r){this.doneSnapping(),this._currentMainCandidate=t,this._currentSnappedType=i;let n=this._currentMainCandidate.targetPoint,s=[];s.push(...t.hints);for(let o of e){if(t instanceof $){if(o.constraint.equals(t.first.constraint)||o.constraint.equals(t.second.constraint))continue}else if(o.constraint.equals(t.constraint))continue;let a=o.constraint.closestTo(n);this._squaredScreenDistance(a,n,r.coordinateHelper)<$t()&&(o.targetPoint=n,this._currentOtherActiveCandidates.push(o),s.push(...o.hints))}return{snappedPoint:n,hints:s}}_squaredPointProximityThreshold(t){return t==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}_arePointsWithinScreenThreshold(t,i,e){return this._squaredScreenDistance(t,i,e.coordinateHelper)<this._squaredPointProximityThreshold(e.pointer)}_squaredScreenDistance(t,i,e){return R(this._toScreen(t,e),this._toScreen(i,e))}_toScreen(t,i){return S(t,i.spatialReference,m,this.view)}get test(){}},z;d([u({constructOnly:!0})],q.prototype,"view",void 0),d([u()],q.prototype,"options",void 0),d([u({readOnly:!0})],q.prototype,"updating",null),d([u()],q.prototype,"snappingEnginesFactory",void 0),d([u()],q.prototype,"_engines",void 0),d([u()],q.prototype,"_squaredMouseProximityThreshold",null),d([u()],q.prototype,"_squaredTouchProximityThreshold",null),q=d([b("esri.views.interactive.snapping.SnappingManager")],q),function(t){t[t.MAIN=0]="MAIN",t[t.SCENE=1]="SCENE"}(z||(z={}));var Ue="visualization-handle";function $t(){return T.satisfiesConstraintScreenThreshold*T.satisfiesConstraintScreenThreshold}function We(t,i){return!i||i.direction==null&&i.distance==null||!(t instanceof be||t instanceof Ce||t instanceof te||t instanceof ie||t instanceof re)&&(!(t instanceof j)||i.direction==null&&t.selfSnappingType===I.LastVertex)}function Bt(t,i){return t instanceof $?Ze(i,t.first)>=0&&Ze(i,t.second)>=0?0:-1:Ze(i,t)}function Ze(t,i){let e=-1;for(let r=0;r<t.length;++r)if(i.constraint.equals(t[r].constraint)){e=r;break}return e}function Qt(t){return t.scenePoint!=null}function Jt({coordinateHelper:t,elevationInfo:i}){return t.hasZ()?m:i}export{Yt as a,N as b,Ge as c,Mt as d,q as e};
