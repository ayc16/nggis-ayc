import{b as $}from"./chunk-UBMORCKY.js";import{b as M}from"./chunk-FKIHG4NK.js";import{b as z}from"./chunk-4S7K5A3I.js";import{a as W}from"./chunk-ZLKXQ3X4.js";import{a as A}from"./chunk-DTDFZYW6.js";import{a as V,b as K}from"./chunk-XURBKGOF.js";import{b as k,c as Z}from"./chunk-XSGDUFLB.js";import{b as U}from"./chunk-64QAVEVQ.js";import{a as H}from"./chunk-KQ3PALPO.js";import{a as Q}from"./chunk-H5BQFJQG.js";import{a as B}from"./chunk-ZPGECEOH.js";import{a as T}from"./chunk-IK3IRLTV.js";import{c as P}from"./chunk-SFX6QP6J.js";import{a as q}from"./chunk-YNG4NJVY.js";import{a as le}from"./chunk-3FOGM572.js";import{b as ee,c as te,d as re,e as oe,f as ie,g as se,i as ne,l as ae}from"./chunk-4ANB723A.js";import{a as R}from"./chunk-IGVG5UOD.js";import{a as pe}from"./chunk-GT3C7LC6.js";import{b as X}from"./chunk-LNUI6KC7.js";import{a as C}from"./chunk-TMYZ2I35.js";import{n as G}from"./chunk-QL456MD5.js";import{d as u}from"./chunk-XF4ZC6Y7.js";import{c as L}from"./chunk-OM7Z3UKX.js";import{d as D}from"./chunk-A66ZXMJV.js";import{d as I,e as Y}from"./chunk-T25YY3N7.js";import{a as b}from"./chunk-4HISZWR4.js";import{p as j}from"./chunk-MRVR6F6G.js";import{d as N}from"./chunk-XIMCHX2H.js";import{a as _}from"./chunk-NDG5FXLR.js";import{v as g}from"./chunk-SA4OMQAD.js";import{b as E}from"./chunk-24BLFS5R.js";import{h as S}from"./chunk-XPCG2OJX.js";import{L as o}from"./chunk-AUTL5LCV.js";import{S as f}from"./chunk-KUJG22IX.js";import{a as r}from"./chunk-W3WDPWBE.js";import{B as J,n as w}from"./chunk-GISCFF3Z.js";import{r as O,t as F}from"./chunk-HQMV3KQV.js";import{a as x}from"./chunk-CRMMDK2Z.js";import{a as v,h as p}from"./chunk-EAH6BNBL.js";var l=class extends _{constructor(){super(...arguments),this.type="geojson",this.refresh=J(e=>p(this,null,function*(){yield this.load();let{extent:t,timeExtent:s}=yield this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){let t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>C.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:g.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new F("geojson-layer-source:edit-failure","Memory source not loaded");let t=this.layer.objectIdField,s=[],n=[],c=[];if(e.addFeatures)for(let a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(let a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(let a of e.updateFeatures)c.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:c,deletes:n}).then(({extent:a,timeExtent:d,featureEditResults:h})=>(this.sourceJSON.extent=a,d&&(this.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),this._createEditsResult(h)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){let t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new F("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){let{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){let{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}_startWorker(e){return p(this,null,function*(){this._connection=yield X("GeoJSONSourceWorker",{strategy:x("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});let{fields:t,spatialReference:s,hasZ:n,geometryType:c,objectIdField:a,url:d,timeInfo:h,customParameters:de}=this.layer,me=this.layer.originOf("spatialReference")==="defaults",ce={url:d,customParameters:de,fields:t&&t.map(y=>y.toJSON()),geometryType:b.toJSON(c),hasZ:n,objectIdField:a,timeInfo:h?h.toJSON():null,spatialReference:me?null:s&&s.toJSON()},m=yield this._connection.invoke("load",ce,{signal:e});for(let y of m.warnings)O.getLogger(this.layer).warn("#load()",`$${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});m.featureErrors.length&&O.getLogger(this.layer).warn("#load()",`Encountered ${m.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:m.featureErrors}),this.sourceJSON=m.layerDefinition,this.capabilities=D(this.sourceJSON.hasZ,!0)})}};r([o()],l.prototype,"capabilities",void 0),r([o()],l.prototype,"type",void 0),r([o({constructOnly:!0})],l.prototype,"layer",void 0),r([o()],l.prototype,"sourceJSON",void 0),l=r([f("esri.layers.graphics.sources.GeoJSONSource")],l);var ue=W(),i=class extends M(Q($(z(P(U(q(T(le(B(R(pe))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new l({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){this.source?.destroy()}load(e){let t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(w).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),I(this.renderer,this.fieldsIndex),Y(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?S(this.url):null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);let t=S(e);this._set("url",t.path),t.query&&(this.customParameters=v(v({},this.customParameters),t.query))}applyEdits(e,t){return p(this,null,function*(){let{applyEdits:s}=yield import("./chunk-HPTA475U.js");yield this.load();let n=yield s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n})}on(e,t){return super.on(e,t)}createPopupTemplate(e){return H(this,e)}createQuery(){let e=new u,t=this.capabilities?.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";let{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(u.from(e)||this.createQuery(),t)).then(s=>{if(s?.features)for(let n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(u.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(u.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(u.from(e)||this.createQuery(),t))}hasDataChanged(){return p(this,null,function*(){try{let{dataChanged:e,updates:t}=yield this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1})}};r([o({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),r([o({type:String})],i.prototype,"copyright",void 0),r([o({readOnly:!0})],i.prototype,"createQueryVersion",null),r([o(N("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),r([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([o({type:String})],i.prototype,"displayField",void 0),r([o({type:Boolean})],i.prototype,"editingEnabled",void 0),r([o(se)],i.prototype,"elevationInfo",void 0),r([o({type:[L],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),r([o(ue.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([o({type:g,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),r([o({type:["point","polygon","polyline","multipoint"],json:{read:{reader:b.read}}})],i.prototype,"geometryType",void 0),r([o({type:Boolean})],i.prototype,"hasZ",void 0),r([o(ae)],i.prototype,"id",void 0),r([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([o(re)],i.prototype,"labelsVisible",void 0),r([o({type:[V],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K},write:!0}})],i.prototype,"labelingInfo",void 0),r([o(ie)],i.prototype,"legendEnabled",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([o(ne)],i.prototype,"opacity",void 0),r([o({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),r([o(ue.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"parsedUrl",null),r([o(te)],i.prototype,"popupEnabled",void 0),r([o({type:G,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({types:k,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:Z}}}})],i.prototype,"renderer",null),r([o(ee)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],i.prototype,"source",void 0),r([o({type:E})],i.prototype,"spatialReference",void 0),r([o({type:[A]})],i.prototype,"templates",void 0),r([o()],i.prototype,"title",void 0),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([o(oe)],i.prototype,"url",null),i=r([f("esri.layers.GeoJSONLayer")],i);var xt=i;export{xt as a};