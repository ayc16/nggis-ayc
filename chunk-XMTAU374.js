import{a as _e}from"./chunk-6S2TPC6G.js";import{c as Me}from"./chunk-X7ZCOG35.js";import{a as je}from"./chunk-7JGBMAQ4.js";import{a as xe}from"./chunk-ITQMD4YG.js";import{a as Te}from"./chunk-O7F4RFE3.js";import{a as Le}from"./chunk-UZW3KXUC.js";import{a as Fe}from"./chunk-X5QA6TFZ.js";import{a as Oe,c as De}from"./chunk-Q63RILEF.js";import{b as Ie,c as we}from"./chunk-SBPPDDZ3.js";import{a as Pe}from"./chunk-XUNM6EI4.js";import{c as Ce,l as qe}from"./chunk-UOPCQUXQ.js";import{a as ye}from"./chunk-IGVG5UOD.js";import{y as Ee}from"./chunk-KLNZTVX6.js";import{a as ve}from"./chunk-SVWANQOF.js";import{a as Se}from"./chunk-NJ5QXHI6.js";import{n as be}from"./chunk-O4XV2BGZ.js";import{a as ue}from"./chunk-IY6MAS3P.js";import{A as ge}from"./chunk-JJANIEGN.js";import{c as Y}from"./chunk-UAZOXZEX.js";import{d as me}from"./chunk-I7FAWQNR.js";import{a as k,b as X}from"./chunk-4X6XTGI2.js";import{b as z}from"./chunk-OJFSOL62.js";import{c as ce}from"./chunk-VOTZUGKK.js";import{a as fe}from"./chunk-GFBD2RSG.js";import{b as he}from"./chunk-QJKOK75M.js";import{a as H,f as W}from"./chunk-4XUOIGFO.js";import{d as Ae}from"./chunk-FOMIQQJB.js";import{b as de}from"./chunk-ORM3VHG6.js";import{a as N}from"./chunk-4HISZWR4.js";import{b as _}from"./chunk-SF6Z2K5H.js";import{a as pe}from"./chunk-NDG5FXLR.js";import{a as g,v as V}from"./chunk-2KZICFRS.js";import{a as D,b as R}from"./chunk-D2RUV6O4.js";import{a as ne}from"./chunk-XNEAL2YW.js";import{aa as A,j as le,t as G}from"./chunk-375OYO4P.js";import{L as l,k as y,m as x,n as ie}from"./chunk-AUTL5LCV.js";import{H as M,S as F,b as O,t as se,x as ae,y as K,z as oe}from"./chunk-KUJG22IX.js";import{a}from"./chunk-W3WDPWBE.js";import{k as $}from"./chunk-GISCFF3Z.js";import{b as P,r as L,t as c}from"./chunk-HQMV3KQV.js";import{a as te}from"./chunk-CRMMDK2Z.js";import{a as h,b,h as m}from"./chunk-EAH6BNBL.js";var or=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(t,i){let s=i.capabilities&&i.capabilities.split(",").map(Ve=>Ve.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};let n=this.type,p=n!=="tile"&&!!i.supportsDynamicLayers,u=s.includes("query"),f=s.includes("map"),w=!!i.exportTilesAllowed,v=s.includes("tilemap"),T=s.includes("data"),E=n!=="tile"&&(!i.tileInfo||p),C=n!=="tile"&&(!i.tileInfo||p),d=n!=="tile",S=i.cimVersion&&Se.parse(i.cimVersion),q=S?.since(1,4)??!1,j=S?.since(2,0)??!1;return{operations:{supportsExportMap:f,supportsExportTiles:w,supportsIdentify:u,supportsQuery:T,supportsTileMap:v},exportMap:f?{supportsArcadeExpressionForLabeling:q,supportsSublayersChanges:d,supportsDynamicLayers:p,supportsSublayerVisibility:E,supportsSublayerDefinitionExpression:C,supportsCIMSymbols:j}:null,exportTiles:w?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}fetchRelatedService(t){return m(this,null,function*(){let i=this.portalItem;if(!i||!Y(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},t).then(n=>n.find(p=>p.type==="Feature Service")??null,()=>null));let s=yield this._relatedFeatureServicePromise;return $(t),s?{itemId:s.id,url:s.url}:null})}fetchSublayerInfo(t,i){return m(this,null,function*(){let{source:s}=t;if(this?.portalItem&&this.type==="tile"&&s?.type==="map-layer"&&Y(this.portalItem)&&t.originIdOf("url")<y.SERVICE){let u=yield this.fetchRelatedService(i);u&&(t.url=G(u.url,s.mapLayerId.toString()),t.layerItemId=u.itemId)}let{url:n}=t,p;if(s.type==="data-layer")p=(yield A(n,h({responseType:"json",query:b(h({f:"json"},this.customParameters),{token:this.apiKey})},i))).data;else if(n&&t.originIdOf("url")>y.SERVICE)try{let u=yield this._fetchAllLayersAndTablesFromService(n),f=z(n)?.sublayer??s.mapLayerId;p=u.get(f)}catch{}else{let u=t.id;s?.type==="map-layer"&&(u=s.mapLayerId);try{p=(yield this.fetchAllLayersAndTables(i)).get(u)}catch{}}return p})}fetchAllLayersAndTables(t){return m(this,null,function*(){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,t)})}_fetchAllLayersAndTablesFromService(t,i){return m(this,null,function*(){yield this.load(i),this._allLayersAndTablesMap||=new Map;let s=z(t),n=se(this._allLayersAndTablesMap,s?.url.path,()=>A(G(s?.url.path,"/layers"),{responseType:"json",query:b(h({f:"json"},this.customParameters),{token:this.apiKey})}).then(u=>{let f=new Map,{layers:w,tables:v}=u.data,T=[...w??[],...v??[]];for(let E of T)f.set(E.id,E);return{result:f}},u=>({error:u}))),p=yield n;if($(i),"result"in p)return p.result;throw p.error})}};return a([l({readOnly:!0})],r.prototype,"capabilities",void 0),a([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),a([l({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),a([l({type:V})],r.prototype,"fullExtent",void 0),a([l(qe)],r.prototype,"id",void 0),a([l({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),a([l(Ce)],r.prototype,"popupEnabled",void 0),a([l({type:R})],r.prototype,"spatialReference",void 0),a([l({readOnly:!0})],r.prototype,"version",void 0),a([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=a([F("esri.layers.mixins.ArcGISMapService")],r),r};var U;function Z(e){return e?.type==="esriSMS"}function ee(e,r,t){let i=this.originIdOf(r)>=x(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&t.layer?.type==="map-image"&&(t.writeSublayerStructure||i)}}function re(e,r,t){return{enabled:!!t&&t.layer?.type==="tile"&&(t.origin&&this.originIdOf(r)>=x(t.origin)||this._isOverridden(r))}}function I(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function Q(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=x(t.origin))}}var Ne=0,ke=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]),o=U=class extends ye(ue(pe)){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}load(e){return m(this,null,function*(){return this.addResolvingPromise(m(this,null,function*(){let{layer:r,url:t}=this;if(!r&&!t)throw new c("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=r?yield r.fetchSublayerInfo(this,e):(yield A(t,h({responseType:"json",query:{f:"json"}},e))).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:r,url:he(t)}))})),this})}readCapabilities(e,r){r=r.layerDefinition||r;let{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:s,supportsOrderBy:n,supportsPagination:p},data:{supportsAttachment:u},queryRelated:f}=Te(r,this.url);return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:u},query:{supportsFormatPBF:s,supportsOrderBy:n,supportsPagination:p},queryRelated:f}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){let{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readMaxScaleRange(e,r){return{minScale:(r=r.layerDefinition||r).minScale??0,maxScale:r.maxScale??0}}get fieldsIndex(){return new fe(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){for(let t of r.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??Ne++}set id(e){this._get("id")!==e&&(this.layer?.capabilities?.exportMap?.supportsDynamicLayers!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(e,r){return r.type==="Table"}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers?.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition?.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition?.maxScale||0}readObjectIdFieldFromService(e,r){return(r=r.layerDefinition||r).objectIdField?r.objectIdField:r.fields?.find(i=>i.type==="esriFieldTypeOID")?.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){let{layerDefinition:t}=r;return 1-.01*(t?.transparency??t?.drawingInfo?.transparency??0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=ae(this.parent.id):r.parentLayerId=-1}get queryTask(){if(!this.layer)return null;let{capabilities:e,fieldsIndex:r,layer:t,url:i}=this,{spatialReference:s}=t,n="gdbVersion"in t?t.gdbVersion:void 0,p=te("featurelayer-pbf")&&e?.query.supportsFormatPBF;return new _e({fieldsIndex:r,gdbVersion:n,pbfSupported:p,queryAttachmentsSupported:e?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:s,url:i})}set renderer(e){if(Ae(e,this.fieldsIndex),e){for(let r of e.getSymbols())if(ge(r)){L.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new k({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return oe(_.ofType(U),e)}writeSublayers(e,r,t){this.sublayers?.length&&(r[t]=this.sublayers.map(i=>i.id).toArray().reverse())}readTitle(e,r){return r.layerDefinition?.name??r.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();let i=r.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){let e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,r?.type==="map-layer")return`${e.path}/${r.mapLayerId}`;let t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${le(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){let{store:e}=O(this),r=new U;return O(r).store=e.clone(ke),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return Pe(this,e)}createQuery(){return new me({returnGeometry:!0,where:this.definitionExpression||"1=1"})}createFeatureLayer(){return m(this,null,function*(){if(this.hasOwnProperty("sublayers"))return null;let e=(yield import("./chunk-UQM4IUVL.js")).default,{layer:r,url:t}=this,i;if(t&&this.originIdOf("url")>y.SERVICE)i=new e({url:t});else{if(!r?.parsedUrl)throw new c("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{let s=r.parsedUrl;i=new e({url:s.path}),s&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return r?.refreshInterval!=null&&(i.refreshInterval=r.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=P(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(i.labelingInfo=P(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(i.popupTemplate=P(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(i.renderer=P(this.renderer)),this.source?.type==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(i.title=this.title),r?.type==="map-image"&&r.originIdOf("customParameters")>y.DEFAULTS&&(i.customParameters=r.customParameters),r?.type==="tile"&&r.originIdOf("customParameters")>y.DEFAULTS&&(i.customParameters=r.customParameters),i})}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){return Ee(this.types,this.typeIdField,e)}getFieldDomain(e,r){let t=r?.feature,i=this.getFeatureType(t);if(i){let s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}queryAttachments(e,r){return m(this,null,function*(){yield this.load(),e=ve.from(e);let t=this.capabilities;if(!t?.data?.supportsAttachment)throw new c("queryAttachments:not-supported","this layer doesn't support attachments");let{attachmentTypes:i,objectIds:s,globalIds:n,num:p,size:u,start:f,where:w}=e;if(!t?.operations?.supportsQueryAttachments&&(i?.length>0||n?.length>0||u?.length>0||p||f||w))throw new c("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s?.length||n?.length||w))throw new c("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,r)})}queryFeatureCount(){return m(this,arguments,function*(e=this.createQuery(),r){if(yield this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryFeatureCount:not-supported","this layer has no url.");let t=this.layer?.apiKey;return yield this.queryTask.executeForCount(e,b(h({},r),{query:b(h({},this.layer?.customParameters),{token:t})}))})}queryFeatures(){return m(this,arguments,function*(e=this.createQuery(),r){if(yield this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryFeatures:not-supported","this layer has no url.");let t=yield this.queryTask.execute(e,b(h({},r),{query:b(h({},this.layer?.customParameters),{token:this.layer?.apiKey})}));if(t?.features)for(let i of t.features)i.sourceLayer=this;return t})}queryObjectIds(){return m(this,arguments,function*(e=this.createQuery(),r){if(yield this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryObjectIds:not-supported","this layer has no url.");let t=this.layer?.apiKey;return yield this.queryTask.executeForIds(e,b(h({},r),{query:b(h({},this.layer?.customParameters),{token:t})}))})}queryRelatedFeatures(e,r){return m(this,null,function*(){if(yield this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryRelatedFeatures:not-supported","this layer has no url.");let t=this.layer?.apiKey;return yield this.queryTask.executeRelationshipQuery(e,b(h({},r),{query:b(h({},this.layer?.customParameters),{token:t})}))})}queryRelatedFeaturesCount(e,r){return m(this,null,function*(){if(yield this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new c("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new c("queryRelatedFeaturesCount:not-supported","this layer has no url.");let t=this.layer?.apiKey;return yield this.queryTask.executeRelationshipQueryForCount(e,b(h({},r),{query:b(h({},this.layer?.customParameters),{token:t})}))})}toExportImageJSON(e){let r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=de(e,this.definitionExpression);t!=null&&(r.definitionExpression=t);let i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((n,p)=>(n[p]=this.originIdOf(p),n),{});if(Object.keys(i).some(n=>i[n]>y.SERVICE)){let n=r.drawingInfo={};if(i.renderer>y.SERVICE&&(n.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(n.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE)if(this.labelingInfo){!this.loaded&&this.labelingInfo?.some(u=>!u.labelPlacement)&&L.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let p=this.labelingInfo;this.geometryType!=null&&(p=De(this.labelingInfo,N.toJSON(this.geometryType))),n.showLabels=!0,n.labelingInfo=p.filter(u=>u.labelPlacement).map(u=>u.toJSON({origin:"service",layer:this.layer}))}else n.showLabels=!1;i.opacity>y.SERVICE&&(n.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(n.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||r.style!=="esriSMSX"&&r.style!=="esriSMSCross"||(r.outline?.color?r.color=r.outline.color:r.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){let t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(let i of t)Z(i.symbol)&&r(i.symbol);"symbol"in e&&Z(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&Z(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){let t=this.layer,i=this._get(e),s,n;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",n="supportsModification"}let p=O(this).getDefaultOrigin();if(p!=="service"){if(s&&this.layer?.capabilities?.exportMap?.[s]===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(n&&this.capabilities?.exportMap[n]===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${n}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,r),p!=="service"&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this.removeAllHandles()),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this.addHandles([e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),e.on("before-changes",t=>{(this.layer?.capabilities?.exportMap?.supportsSublayersChanges??1)||(L.getLogger(this).error(new c("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(e,r){let{layer:t,declaredClass:i}=this;L.getLogger(i).error(new c("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t?.id}'`,{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){return this.fieldsIndex.get(e)?.domain??null}};o.test={isMapImageLayerOverridePolicy:e=>e===I||e===ee,isTileImageLayerOverridePolicy:e=>e===re},a([l({readOnly:!0})],o.prototype,"capabilities",void 0),a([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([l()],o.prototype,"defaultPopupTemplate",null),a([l({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:ee}}})],o.prototype,"definitionExpression",null),a([l({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([g("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([l({type:[ce],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([l({readOnly:!0})],o.prototype,"fieldsIndex",null),a([l({type:Le,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:ee},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([l({type:V,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([l({type:N.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:N.read}}}}})],o.prototype,"geometryType",void 0),a([l({type:String})],o.prototype,"globalIdField",void 0),a([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([l({type:M,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([l({readOnly:!0})],o.prototype,"isTable",void 0),a([g("service","isTable",["type"])],o.prototype,"readIsTable",null),a([l({value:null,type:[Oe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:I}}})],o.prototype,"labelingInfo",null),a([D("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([l({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:I}}})],o.prototype,"labelsVisible",null),a([l({value:null})],o.prototype,"layer",null),a([l({type:String,json:{write:{overridePolicy:re}}})],o.prototype,"layerItemId",void 0),a([l({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:Q}}})],o.prototype,"legendEnabled",void 0),a([l({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([l({type:Number,value:0,json:{write:{overridePolicy:I}}})],o.prototype,"minScale",null),a([g("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([l({type:Number,value:0,json:{write:{overridePolicy:I}}})],o.prototype,"maxScale",null),a([g("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([l()],o.prototype,"objectIdField",void 0),a([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([l({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:I}}})],o.prototype,"opacity",null),a([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([D("opacity")],o.prototype,"writeOpacity",null),a([l({json:{type:M,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:I}}})],o.prototype,"parent",void 0),a([D("parent")],o.prototype,"writeParent",null),a([l({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:Q,writer(e,r,t){r[t]=!e}}}})],o.prototype,"popupEnabled",void 0),a([l({type:be,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:Q}}})],o.prototype,"popupTemplate",void 0),a([l({readOnly:!0})],o.prototype,"queryTask",null),a([l({type:[xe],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([l({types:Ie,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:I},origins:{"web-scene":{types:we,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:I}}}}})],o.prototype,"renderer",null),a([l({types:{key:"type",base:null,typeMap:{"data-layer":X,"map-layer":k}},cast(e){if(e){if("mapLayerId"in e)return K(k,e);if("dataSource"in e)return K(X,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:I}}})],o.prototype,"source",null),a([l()],o.prototype,"sourceJSON",void 0),a([l({type:R,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([l({value:null,json:{type:[M],write:{target:"subLayerIds",allowNull:!0,overridePolicy:I}}})],o.prototype,"sublayers",null),a([ne("sublayers")],o.prototype,"castSublayers",null),a([D("sublayers")],o.prototype,"writeSublayers",null),a([l({type:String,json:{name:"name",write:{overridePolicy:Q}}})],o.prototype,"title",void 0),a([g("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([l({type:String})],o.prototype,"typeIdField",void 0),a([l({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([g("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([l({type:[Fe],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([l({type:String,json:{name:"layerUrl",write:{overridePolicy:re}}})],o.prototype,"url",null),a([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:I}}})],o.prototype,"visible",null),a([D("visible")],o.prototype,"writeVisible",null),o=U=a([F("esri.layers.support.Sublayer")],o);var B=o;function Qe(e,r){let t=[],i={};return e&&e.forEach(s=>{let n=new B;if(n.read(s,r),i[n.id]=n,s.parentLayerId!=null&&s.parentLayerId!==-1){let p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(n)}else t.unshift(n)}),t}var J=_.ofType(B);function Re(e,r){e&&e.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&Re(t.sublayers,r)})}var Tt=e=>{let r=class extends e{constructor(...t){super(...t),this.allSublayers=new je({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.subtables=null,this.addHandles([H(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),W),H(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),W)])}destroy(){this.allSublayers.destroy()}readSublayers(t,i){if(!i||!t)return;let{sublayersSourceJSON:s}=this,n=x(i.origin);if(n<y.SERVICE||(s[n]={context:i,visibleLayers:t.visibleLayers||s[n].visibleLayers,layers:t.layers||s[n].layers},n>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);let{sublayers:p,origin:u}=this.createSublayersForOrigin("web-document"),f=O(this);f.setDefaultOrigin(u),this._set("sublayers",new J(p)),f.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){let i=x(t==="web-document"?"web-map":t),s=y.SERVICE,n=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,u=null,f=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d<=i);for(let d of f){let S=this.sublayersSourceJSON[d];Me(S.layers)&&(s=d,n=S.layers,p=S.context,S.visibleLayers&&(u={visibleLayers:S.visibleLayers,context:S.context}))}let w=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d>s&&d<=i),v=null;for(let d of w){let{layers:S,visibleLayers:q,context:j}=this.sublayersSourceJSON[d];S&&(v={layers:S,context:j}),q&&(u={visibleLayers:q,context:j})}let T=Qe(n,p),E=new Map,C=new Set;if(v)for(let d of v.layers)E.set(d.id,d);if(u?.visibleLayers)for(let d of u.visibleLayers)C.add(d);return Re(T,d=>{v&&d.read(E.get(d.id),v.context),u&&d.read({defaultVisibility:C.has(d.id)},u.context)}),{origin:ie(s),sublayers:new J({items:T})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(t.on("before-changes",s=>{L.getLogger("esri.layers.TileLayer").error(new c("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([l({readOnly:!0})],r.prototype,"allSublayers",void 0),a([l({readOnly:!0,type:_.ofType(B)})],r.prototype,"serviceSublayers",void 0),a([l({value:null,type:J,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),a([l({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),a([l({type:J,json:{read:{source:"tables"}}})],r.prototype,"subtables",void 0),r=a([F("esri.layers.mixins.SublayersOwner")],r),r};export{or as a,B as b,Tt as c};
