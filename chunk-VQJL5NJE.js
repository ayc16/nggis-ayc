import{f as x,g as k,h as N}from"./chunk-IBDFQNO6.js";import"./chunk-YR3Z5HES.js";import{b as j,d as O}from"./chunk-XHZCQFIM.js";import{c as Q}from"./chunk-NEFCS4QF.js";import"./chunk-VFGTXZIM.js";import{a as P}from"./chunk-N527JBSW.js";import"./chunk-OI242BG4.js";import{a as b}from"./chunk-VIDRMWY3.js";import"./chunk-IWZCTRXU.js";import{d as q,e as I}from"./chunk-P3JJBLOU.js";import"./chunk-5C65GV4V.js";import"./chunk-6BKQ4KSA.js";import{m as S,n as T}from"./chunk-YAIVKHQ7.js";import"./chunk-7QY3BMVN.js";import"./chunk-5L33MNIH.js";import"./chunk-TNPL7MIN.js";import"./chunk-FYZRIMPP.js";import"./chunk-7LMIBQVQ.js";import"./chunk-I6UFDVWV.js";import"./chunk-RI2LAPAP.js";import"./chunk-Y44R6ET5.js";import"./chunk-XPRH3OMS.js";import"./chunk-LSEOQ2KR.js";import"./chunk-OM7Z3UKX.js";import"./chunk-OJB2TSJ7.js";import"./chunk-MCO7DSFO.js";import"./chunk-LUPAMFKK.js";import"./chunk-7JD62GP7.js";import"./chunk-HHJJPMV6.js";import"./chunk-F47ZTJ7Y.js";import"./chunk-YXPGI3LI.js";import{a as E}from"./chunk-LSFTWXAE.js";import"./chunk-OO35HBWJ.js";import"./chunk-R5OKRCI7.js";import"./chunk-2EF3JPLL.js";import"./chunk-FWB3IYJJ.js";import"./chunk-U6WVZEYH.js";import"./chunk-KRMYHUR3.js";import"./chunk-R4NNYEN7.js";import"./chunk-7G4KK3KW.js";import"./chunk-J3ZDC5ZE.js";import"./chunk-KYNKUTEO.js";import"./chunk-QWLQUMDY.js";import"./chunk-4XUOIGFO.js";import"./chunk-5HCLBNUR.js";import"./chunk-JZ3XIQ5W.js";import"./chunk-OMYJOG47.js";import"./chunk-3B4QONMA.js";import"./chunk-3SZQ2UT4.js";import"./chunk-SPDSGGOE.js";import"./chunk-2OKSPLJT.js";import"./chunk-7LEG2VDW.js";import"./chunk-R2HWUZ3L.js";import"./chunk-G24ZJINL.js";import"./chunk-T25YY3N7.js";import"./chunk-ALQ3STGG.js";import"./chunk-EETFV2SL.js";import"./chunk-AM3VOA32.js";import"./chunk-SAOUSUZE.js";import"./chunk-LECQV7I4.js";import"./chunk-7HZKOXPR.js";import"./chunk-DFTBSFIN.js";import"./chunk-4HISZWR4.js";import"./chunk-33BSK37G.js";import"./chunk-TQAPQODA.js";import"./chunk-M2GLXRA2.js";import"./chunk-EBWCXIFH.js";import"./chunk-MRVR6F6G.js";import"./chunk-WXQQZY3K.js";import"./chunk-VPMDQK57.js";import"./chunk-BCREO4Q5.js";import"./chunk-ZVHU7VE3.js";import"./chunk-76YVRX2R.js";import"./chunk-OZF6BMOL.js";import"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import"./chunk-HMKFQDR7.js";import"./chunk-2OT2C2UU.js";import{c as C}from"./chunk-XIMCHX2H.js";import"./chunk-SF6Z2K5H.js";import"./chunk-GBTN5LIS.js";import{e as R}from"./chunk-JOSG37QF.js";import"./chunk-SLMQFZE3.js";import"./chunk-FJDNRF2P.js";import"./chunk-VNB5ZT3P.js";import"./chunk-NDG5FXLR.js";import"./chunk-EJG3F6VR.js";import"./chunk-5ODCEDHC.js";import"./chunk-BENVXA3L.js";import"./chunk-SA4OMQAD.js";import"./chunk-24BLFS5R.js";import{l as F}from"./chunk-JDDD6VJ4.js";import"./chunk-VOYK3LZF.js";import"./chunk-HOJTYTYD.js";import"./chunk-XNEAL2YW.js";import"./chunk-J7M5V2SQ.js";import"./chunk-RQD6EDD6.js";import"./chunk-XPCG2OJX.js";import"./chunk-AUTL5LCV.js";import{M as _}from"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import"./chunk-W3WDPWBE.js";import{k as m,s as f}from"./chunk-GISCFF3Z.js";import"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import"./chunk-VU5W7W6Y.js";import{r as g,t as y}from"./chunk-HQMV3KQV.js";import"./chunk-CRMMDK2Z.js";import{h as n}from"./chunk-EAH6BNBL.js";var M="esri.layers.WFSLayer",G=class{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(r){return n(this,arguments,function*(t,e={}){let{getFeatureUrl:o,getFeatureOutputFormat:u,fields:l,geometryType:s,featureType:i,maxRecordCount:p,maxTotalRecordCount:A,maxPageCount:L,objectIdField:w,customParameters:J}=t,{spatialReference:c,getFeatureSpatialReference:d}=N(o,i,t.spatialReference);try{yield q(d,c)}catch{throw new y("unsupported-projection","Projection not supported",{inSpatialReference:d,outSpatialReference:c})}m(e),this._customParameters=J,this._featureType=i,this._fieldsIndex=E.fromLayerJSON({fields:l,dateFieldsTimeReference:l.some(U=>U.type==="esriFieldTypeDate")?{timeZoneIANA:C}:null}),this._geometryType=s,this._getFeatureUrl=o,this._getFeatureOutputFormat=u,this._getFeatureSpatialReference=d,this._maxRecordCount=p,this._maxTotalRecordCount=A,this._maxPageCount=L,this._objectIdField=w,this._spatialReference=c;let h=yield this._snapshotFeatures(e);if(h.errors.length>0&&(this._supportsPagination=!1,h=yield this._snapshotFeatures(e),h.errors.length>0))throw h.errors[0];return this._queryEngine=new b({fieldsIndex:this._fieldsIndex,geometryType:s,hasM:!1,hasZ:!1,objectIdField:w,spatialReference:c,timeInfo:null,featureStore:new P({geometryType:s,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(h.features),{warnings:v(h),extent:(yield this._queryEngine.fetchRecomputedExtents()).fullExtent}})}applyEdits(){return n(this,null,function*(){throw new y("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})}queryFeatures(){return n(this,arguments,function*(t={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)})}queryFeatureCount(){return n(this,arguments,function*(t={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)})}queryObjectIds(){return n(this,arguments,function*(t={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)})}queryExtent(){return n(this,arguments,function*(t={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)})}querySnapping(r){return n(this,arguments,function*(t,e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)})}refresh(t){return n(this,null,function*(){return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=R(e=>this._snapshotFeatures({signal:e})),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(e.features);for(let r of v(e))g.getLogger(M).warn(new _("wfs-layer:refresh-warning",r.message,r.details));e.errors?.length&&g.getLogger(M).warn(new _("wfs-layer:refresh-error","Refresh completed with errors",{errors:e.errors}))},()=>{this._queryEngine.featureStore.clear()}),yield this._waitSnapshotComplete(),{extent:(yield this._queryEngine.fetchRecomputedExtents()).fullExtent}})}_waitSnapshotComplete(){return n(this,null,function*(){if(this._snapshotTask&&!this._snapshotTask.finished){try{yield this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}})}_snapshotFeatures(t){return n(this,null,function*(){let e=t?.signal,r=this._maxTotalRecordCount,o=this._maxPageCount,u=this._supportsPagination?yield k(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0,l=[],s=[];if(u==null)try{l=yield this._singleQuery(e)}catch(i){f(i)||s.push(i)}else{let i=Math.min(u,r),p=$(this,Math.max(1,Math.min(Math.ceil(i/this._maxRecordCount),o)),e);yield Promise.allSettled(Array.from({length:10}).map(()=>Z(p,l,s)))}return m(e),{features:l,totalRecordCount:u,maxTotalRecordCount:r,maxPageCount:o,errors:s}})}_singleQuery(t){return n(this,null,function*(){let e=yield x(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})})}_pageQuery(t,e){return n(this,null,function*(){let r=t*this._maxRecordCount,o=yield x(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:r,count:this._maxRecordCount,signal:e});return this._processGeoJSON(o,{startIndex:r,signal:e})})}_processGeoJSON(t,e){j(t,this._getFeatureSpatialReference.wkid);let{startIndex:r,signal:o}=e;m(o);let u=O(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!F(this._spatialReference,this._getFeatureSpatialReference))for(let s of u)s.geometry!=null&&(s.geometry=S(I(T(s.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let l=r??1;for(let s of u){let i={};Q(this._fieldsIndex,i,s.attributes,!0),s.attributes=i,i[this._objectIdField]==null&&(s.objectId=i[this._objectIdField]=l++)}return u}};function*$(a,t,e){for(let r=0;r<t;r++)yield a._pageQuery(r,e)}function Z(a,t,e){return n(this,null,function*(){let r=a.next();for(;!r.done;){try{let o=yield r.value;t.push(...o)}catch(o){f(o)||e.push(o)}r=a.next()}})}function v(a){let t=[];return a.totalRecordCount!=null&&(a.features.length<a.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${a.features.length} of ${a.totalRecordCount} in ${a.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:a.features.length,totalRecordCount:a.totalRecordCount}}),a.totalRecordCount>a.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${a.totalRecordCount} features exceeds the maximum allowed of ${a.maxTotalRecordCount}.`,details:{recordCount:a.features.length,totalRecordCount:a.totalRecordCount,maxTotalRecordCount:a.maxTotalRecordCount}})),t}export{G as default};