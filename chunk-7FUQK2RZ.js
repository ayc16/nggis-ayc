import{a as Ie}from"./chunk-6S2TPC6G.js";import{a as be}from"./chunk-QY47D3GP.js";import{a as Se}from"./chunk-HPYRFOMM.js";import{h as we}from"./chunk-7P7G6D4O.js";import{b as fe,d as ge}from"./chunk-6DKHS5QX.js";import{g as me}from"./chunk-7EQBH2NW.js";import{a as ie}from"./chunk-IDPJW6IE.js";import{a as de}from"./chunk-MKKOKBLZ.js";import{t as T}from"./chunk-KLNZTVX6.js";import{a as ce,b as pe,c as he,d as ye}from"./chunk-4UCDYKMS.js";import{a as le}from"./chunk-UXJVKRGT.js";import{b as oe}from"./chunk-47MSGR2H.js";import{a as ne}from"./chunk-BW3UVZYU.js";import{d as ue}from"./chunk-I7FAWQNR.js";import{a as ee}from"./chunk-E2G5DGVE.js";import{f as te}from"./chunk-OJFSOL62.js";import{r as re,s as ae,u as se}from"./chunk-IISBSAYJ.js";import{b as B}from"./chunk-V2KSICSA.js";import{a as z}from"./chunk-4XUOIGFO.js";import{f as K}from"./chunk-SJW4NR3T.js";import{a as W}from"./chunk-NDG5FXLR.js";import{v as Y}from"./chunk-2KZICFRS.js";import{b as X}from"./chunk-D2RUV6O4.js";import{ca as j,l as Z}from"./chunk-4JWMB5SM.js";import{a as U}from"./chunk-J7M5V2SQ.js";import{R as H,aa as S,t as M}from"./chunk-375OYO4P.js";import{L as v}from"./chunk-AUTL5LCV.js";import{S as $}from"./chunk-KUJG22IX.js";import{a as _}from"./chunk-W3WDPWBE.js";import{B as G,n as Q,x as V}from"./chunk-GISCFF3Z.js";import{i as L,k as C,r as x,t as R}from"./chunk-HQMV3KQV.js";import{a as D,p as P,q as N}from"./chunk-CRMMDK2Z.js";import{a as p,b as h,h as u}from"./chunk-EAH6BNBL.js";function k(t,e,r){return u(this,null,function*(){let{geometry:a}=e,s=p({},e.attributes);if(r!=null&&a?.type==="mesh"){let{transformFieldRoles:i}=r,{origin:n,spatialReference:o,vertexSpace:l}=a,c=a.transform??new Se,d=l.type==="local",w=t.spatialReference,q=w.isGeographic,O=Z(w,o),m=ae(o,w)&&re(o,w);if(!(d&&q&&m||!d&&!q&&O))return null;let y=se(n,o,w);if(y==null)return null;if(s[i.originX]=y.x,s[i.originY]=y.y,s[i.originZ]=y.z??0,c!=null){let{translation:F,scale:f,rotation:b}=c,g=d?1:j(o)/j(w);s[i.translationX]=F[0]*g,s[i.translationY]=F[2]*g,s[i.translationZ]=-F[1]*g,s[i.scaleX]=f[0],s[i.scaleY]=f[2],s[i.scaleZ]=f[1],s[i.rotationX]=b[0],s[i.rotationY]=b[2],s[i.rotationZ]=-b[1],s[i.rotationDeg]=b[3]}return{attributes:s}}return a==null?{attributes:s}:a.type==="mesh"||a.type==="extent"?null:{geometry:a.toJSON(),attributes:s}})}function Re(t,e){return u(this,null,function*(){let r=yield Promise.all((e.addAttachments??[]).map(i=>Ee(t,i))),a=yield Promise.all((e.updateAttachments??[]).map(i=>Ee(t,i))),s=e.deleteAttachments??[];return r.length||a.length||s.length?{adds:r,updates:a,deletes:[...s]}:null})}function Ee(t,e){return u(this,null,function*(){let{feature:r,attachment:a}=e,{globalId:s,name:i,contentType:n,data:o,uploadId:l}=a,c={globalId:s};if(r&&("attributes"in r?c.parentGlobalId=r.attributes?.[t.globalIdField]:r.globalId&&(c.parentGlobalId=r.globalId)),l)c.uploadId=l;else if(o){let d=yield H(o);d&&(c.contentType=d.mediaType,c.data=d.data),o instanceof File&&(c.name=o.name)}return i&&(c.name=i),n&&(c.contentType=n),c})}function qe(t,e,r){if(!e||e.length===0)return[];if(r&&ge(e))return e.map(s=>s.globalId);if(fe(e))return e.map(s=>s.objectId);let a=r?t.globalIdField:t.objectIdField;return a?e.map(s=>s.getAttribute(a)):[]}function Oe(t){let e=t?.assetMaps;if(e){for(let s of e.addResults)s.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`);for(let s of e.updateResults)s.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`)}let r=t?.attachments,a={addFeatureResults:t?.addResults?.map(E)??[],updateFeatureResults:t?.updateResults?.map(E)??[],deleteFeatureResults:t?.deleteResults?.map(E)??[],addAttachmentResults:r?.addResults?r.addResults.map(E):[],updateAttachmentResults:r?.updateResults?r.updateResults.map(E):[],deleteAttachmentResults:r?.deleteResults?r.deleteResults.map(E):[]};return t?.editMoment&&(a.editMoment=t.editMoment),a}function E(t){let e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new R("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function J(t,e){return new le({attributes:t.attributes,geometry:K(h(p({},t.geometry),{spatialReference:e}))})}function Fe(t,e){return{adds:t?.adds?.map(r=>J(r,e))||[],updates:t?.updates?.map(r=>({original:J(r[0],e),current:J(r[1],e)}))||[],deletes:t?.deletes?.map(r=>J(r,e))||[],spatialReference:e}}function Ae(t){let e=t.details.raw,r=+e.code,a=+e.extendedCode;return r===500&&(a===-2147217144||a===-2147467261)}var xe=new U({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),ve=new U({Started:"published",Publishing:"publishing",Stopped:"unavailable"}),A=class extends W{constructor(t){super(t),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=G(()=>u(this,null,function*(){yield this.load();let e=this.sourceJSON.editingInfo?.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{yield this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}let r=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(t){let e=this.layer.sourceJSON,r=this._fetchService(e,p({},t)).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(r),Promise.resolve(this)}initialize(){this.addHandles([z(()=>{let t=this.layer;return t&&"lastEditsEventDate"in t?t.lastEditsEventDate:null},t=>this._handleLastEditsEventChange(t))])}destroy(){this._removeEditInterceptor()}get queryTask(){let{capabilities:t,parsedUrl:e,gdbVersion:r,spatialReference:a,fieldsIndex:s}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,n="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=D("featurelayer-pbf")&&t?.query.supportsFormatPBF&&i==null,l=t?.operations?.supportsQueryAttachments??!1;return new Ie({url:e.path,pbfSupported:o,fieldsIndex:s,infoFor3D:i,dynamicDataSource:n,gdbVersion:r,sourceSpatialReference:a,queryAttachmentsSupported:l})}addAttachment(t,e){return u(this,null,function*(){yield this.load();let{layer:r}=this;yield T(r,"editing");let a=t.attributes[r.objectIdField],s=r.parsedUrl.path+"/"+a+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(e,i.query);try{let o=yield S(s,{body:n});return E(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(a,o)}})}updateAttachment(t,e,r){return u(this,null,function*(){yield this.load();let{layer:a}=this;yield T(a,"editing");let s=t.attributes[a.objectIdField],i=a.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(r,n.query);try{let l=yield S(i,{body:o});return E(l.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(s,l)}})}applyEdits(t,e){return u(this,null,function*(){yield this.load();let{layer:r}=this;yield T(r,"editing");let a="infoFor3D"in r?r.infoFor3D:null,s=a!=null,i=s||(e?.globalIdUsed??!1),n=s?yield this._uploadMeshesAndGetAssetMapEditsJSON(t):null,o=t.addFeatures?.map(I=>k(this.layer,I,a))??[],l=(yield Promise.all(o)).filter(N),c=t.updateFeatures?.map(I=>k(this.layer,I,a))??[],d=(yield Promise.all(c)).filter(N),w=qe(this.layer,t.deleteFeatures,i);de(l,d,r.spatialReference);let q=yield Re(this.layer,t),O=r.capabilities.editing.supportsAsyncApplyEdits&&s,m=e?.gdbVersion||r.gdbVersion,y={gdbVersion:m,rollbackOnFailure:e?.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:e?.returnEditMoment,usePreviousEditMoment:e?.usePreviousEditMoment,async:O};yield he(this.layer.url,m,!0);let F=ye(this.layer.url,m||null);if(yield pe(r.url,m,r.historicMoment))throw new R("feature-layer-source:historic-version","Editing a historic version is not allowed");e?.returnServiceEditsOption?(y.edits=JSON.stringify([{id:r.layerId,adds:l.length?l:null,updates:d.length?d:null,deletes:w.length?w:null,attachments:q,assetMaps:n}]),y.returnServiceEditsOption=xe.toJSON(e?.returnServiceEditsOption),y.returnServiceEditsInSourceSR=e?.returnServiceEditsInSourceSR):(y.adds=l.length?JSON.stringify(l):null,y.updates=d.length?JSON.stringify(d):null,y.deletes=w.length?i?JSON.stringify(w):w.join(","):null,y.attachments=q&&JSON.stringify(q),y.assetMaps=n!=null?JSON.stringify(n):void 0);let f=this._getLayerRequestOptions({method:"post",query:y});F&&(f.authMode="immediate",f.query.returnEditMoment=!0,f.query.sessionId=ce);let b=e?.returnServiceEditsOption?r.url:r.parsedUrl.path,g;try{g=O?yield this._asyncApplyEdits(b+"/applyEdits",f):yield S(b+"/applyEdits",f)}catch(I){if(!Ae(I))throw I;f.authMode="immediate",g=O?yield this._asyncApplyEdits(b+"/applyEdits",f):yield S(b+"/applyEdits",f)}return this._createEditsResult(g)})}deleteAttachments(t,e){return u(this,null,function*(){yield this.load();let{layer:r}=this;yield T(r,"editing");let a=t.attributes[r.objectIdField],s=r.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(yield S(s,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(E)}catch(i){throw this._createAttachmentErrorResult(a,i)}})}fetchRecomputedExtents(t={}){let e=t.signal;return this.load({signal:e}).then(()=>u(this,null,function*(){let r=this._getLayerRequestOptions(h(p({},t),{query:{returnUpdates:!0}})),{layerId:a,url:s}=this.layer,{data:i}=yield S(`${s}/${a}`,r),{id:n,extent:o,fullExtent:l,timeExtent:c}=i,d=o||l;return{id:n,fullExtent:d&&Y.fromJSON(d),timeExtent:c&&ee.fromJSON({start:c[0],end:c[1]})}}))}queryAttachments(r){return u(this,arguments,function*(t,e={}){yield this.load();let a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)})}queryFeatures(t,e){return u(this,null,function*(){yield this.load();let r=yield this.queryTask.execute(t,h(p({},e),{query:this._createRequestQueryOptions(e)}));return t.outStatistics?.length&&r.features.length&&r.features.forEach(a=>{let s=a.attributes;t.outStatistics?.forEach(({outStatisticFieldName:i})=>{if(i){let n=i.toLowerCase();n&&n in s&&i!==n&&(s[i]=s[n],delete s[n])}})}),r})}queryFeaturesJSON(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeJSON(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryObjectIds(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeForIds(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryFeatureCount(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeForCount(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryExtent(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeForExtent(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryRelatedFeatures(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeRelationshipQuery(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryRelatedFeaturesCount(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeRelationshipQueryForCount(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryTopFeatures(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeTopFeaturesQuery(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryTopObjectIds(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeForTopIds(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryTopExtents(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeForTopExtents(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}queryTopCount(t,e){return u(this,null,function*(){return yield this.load(),this.queryTask.executeForTopCount(t,h(p({},e),{query:this._createRequestQueryOptions(e)}))})}fetchPublishingStatus(){return u(this,null,function*(){if(!te(this.layer.url))return"unavailable";let t=M(this.layer.url,"status"),e=yield S(t,{query:{f:"json"}});return ve.fromJSON(e.data.status)})}uploadAssets(t,e){return u(this,null,function*(){let{uploadAssets:r}=yield import("./chunk-EI6QADFV.js");return r(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)})}_handleLastEditsEventChange(t){let e=this.layer;if(t==null||!("capabilities"in e)||!("effectiveCapabilities"in e)||!(!e.capabilities?.operations?.supportsEditing&&e.effectiveCapabilities?.operations?.supportsEditing))return;let r=e.url;r!=null&&("layerId"in e&&M(r,e.layerId.toString()),this._getOrCreateEditInterceptor(r).before=a=>{let s=a.requestOptions.method??"auto";if(s==="auto"||s==="head"){let i=a.requestOptions.query??{};i._ts=t.getTime(),a.requestOptions.query=i}})}_getOrCreateEditInterceptor(t){return this._editInterceptor==null&&(this._editInterceptor={urls:t},C.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(P(C.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}_asyncApplyEdits(t,e){return u(this,null,function*(){let r=(yield S(t,e)).data.statusUrl;for(;;){let a=(yield S(r,{query:{f:"json"},responseType:"json"})).data;switch(a.status){case"Completed":return S(a.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new R("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new R("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}yield V(Te)}})}_createRequestQueryOptions(t){let e=p(h(p({},this.layer.customParameters),{token:this.layer.apiKey}),t?.query);return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}_fetchService(t,e){return u(this,null,function*(){if(!t){let a={};D("featurelayer-advanced-symbols")&&(a.returnAdvancedSymbols=!0),e?.cacheBust&&(a._ts=Date.now());let{data:s}=yield S(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a,signal:e?.signal}));t=s}this.sourceJSON=yield this._patchServiceJSON(t,e?.signal);let r=t.type;if(!this.supportedSourceTypes.has(r))throw new R("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)})}_patchServiceJSON(t,e){return u(this,null,function*(){if(t.type!=="Table"&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){let r=ie(t.geometryType).renderer;L("drawingInfo.renderer",r,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{let{data:r}=yield S(this.layer.url,this._getLayerRequestOptions({signal:e}));r.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(r){Q(r)}return t})}_ensureLatestMetadata(t){return u(this,null,function*(){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,h(p({},t),{cacheBust:!0}))})}_uploadMeshesAndGetAssetMapEditsJSON(t){return u(this,null,function*(){let{addAssetFeatures:e}=t;if(!e?.length||(yield this._areAllAssetsAlreadyMapped(e)))return null;let r=t.addFeatures.filter(i=>i.geometry);if(e.length!==r.length+t.updateFeatures.length)throw new R("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");let a=new Array,s=new Map;for(let i of e){let{geometry:n}=i,{vertexSpace:o}=n;if(oe(o))a.push(n);else{let l=n.anchor,{convertMeshVertexSpace:c}=yield import("./chunk-6JAPKBRK.js"),d=yield c(n,new ne({origin:[l.x,l.y,l.z??0]}));s.set(d,n),i.geometry=d,a.push(d)}}yield this.uploadAssets(a);for(let[i,n]of s)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(e),updates:[],deletes:[]}})}_getAssetMapEditsJSON(t){let e=new Array,r=this.layer.globalIdField,a=this.layer.parsedUrl;for(let s of t){let i=s.geometry,{metadata:n}=i,o=n.getExternalSourcesOnService(a),l=s.getAttribute(r);if(o.length===0){x.getLogger(this).error(`Skipping feature ${l}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}let{source:c}=o.find(we)??o[0];for(let d of c)d.parts.length===1?e.push({globalId:B(),parentGlobalId:l,assetName:d.assetName,assetHash:d.parts[0].partHash,flags:[]}):x.getLogger(this).error(`Skipping asset ${d.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){let e=t.data,{layerId:r}=this.layer,a=[],s=null;if(Array.isArray(e))for(let n of e)a.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===r&&(s={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else s=e;let i=Oe(s);if(a.length>0){i.editedFeatureResults=[];for(let n of a){let{editedFeatures:o}=n,l=o?.spatialReference?new X(o.spatialReference):null;i.editedFeatureResults.push({layerId:n.id,editedFeatures:Fe(o,l)})}}return i}_createAttachmentErrorResult(t,e){let r=e.details.messages?.[0]||e.message,a=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new R("feature-layer-source:attachment-failure",r,{code:a})}}_getFormDataForAttachment(t,e){let r=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(r)for(let a in e){let s=e[a];s!=null&&(r.set?r.set(a,s):r.append(a,s))}return r}_getLayerRequestOptions(t={}){let{layer:e,layer:{parsedUrl:r,gdbVersion:a}}=this;return h(p({},t),{query:p(h(p({gdbVersion:a,layer:"dynamicDataSource"in e&&e.dynamicDataSource?JSON.stringify({source:e.dynamicDataSource}):void 0},r.query),{f:"json"}),this._createRequestQueryOptions(t)),responseType:"json"})}_areAllAssetsAlreadyMapped(t){return u(this,null,function*(){let{layer:e}=this,{globalIdField:r,parsedUrl:a}=e,s="infoFor3D"in e?e.infoFor3D:null;if(s==null||r==null)return!1;let i=me(s);if(i==null)return!1;let n=M(a.path,`../${i.id}`),o=new Array;for(let m of t){if(!(m.geometry.metadata.getExternalSourcesOnService(a).length>0))return!1;o.push(m)}let l=o.map(m=>m.getAttribute(r)).filter(N);if(l.length===0)return!1;let{assetMapFieldRoles:{parentGlobalId:c,assetHash:d}}=s,w=new ue({where:`${c} IN (${l.map(m=>`'${m}'`)})`,outFields:[d,c],returnGeometry:!1}),q=yield be(n,w),{features:O}=q;return O.length!==0&&!o.some(m=>{let y=m.getAttribute(r);if(!y)return!0;let{metadata:F}=m.geometry,f=O.filter(g=>g.getAttribute(c)===y);if(f.length===0)return!0;let b=f.map(g=>g.getAttribute(d));return F.getExternalSourcesOnService(a).flatMap(({source:g})=>g.flatMap(I=>I.parts.map(_e=>_e.partHash))).some(g=>b.every(I=>g!==I))})})}};_([v()],A.prototype,"type",void 0),_([v({constructOnly:!0})],A.prototype,"layer",void 0),_([v({constructOnly:!0})],A.prototype,"supportedSourceTypes",void 0),_([v({readOnly:!0})],A.prototype,"queryTask",null),A=_([$("esri.layers.graphics.sources.FeatureLayerSource")],A);var Te=1e3,Rt=A;export{Rt as a};
