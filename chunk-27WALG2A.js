import{a as f}from"./chunk-C4HIHYDS.js";import"./chunk-DYIKRVEE.js";import{a as Q,b as X,c as Y,d as Z}from"./chunk-UTK4CSJ2.js";import{b as $,c as w}from"./chunk-V7O3NG7Q.js";import"./chunk-IFGSJE4X.js";import"./chunk-M4LRWBXK.js";import"./chunk-FQTXYWH5.js";import"./chunk-KLXERNY4.js";import"./chunk-VW4QBD5O.js";import"./chunk-I5QYI3PT.js";import{r as ee,t as te,u as I}from"./chunk-CDCW33GU.js";import"./chunk-RZU6EEB3.js";import"./chunk-HSRIUK76.js";import{a as C}from"./chunk-4S7NY4TS.js";import{a as W}from"./chunk-AN6X7B73.js";import{a as k}from"./chunk-H5BQFJQG.js";import{a as F}from"./chunk-ZPGECEOH.js";import{a as G}from"./chunk-YNG4NJVY.js";import{a as B}from"./chunk-3FOGM572.js";import{g as H}from"./chunk-4ANB723A.js";import{a as V}from"./chunk-IGVG5UOD.js";import{a as oe}from"./chunk-GT3C7LC6.js";import"./chunk-QCG2T55M.js";import"./chunk-IY6MAS3P.js";import"./chunk-UWZJQ7YC.js";import"./chunk-3NCGJLJJ.js";import"./chunk-7LLNOPTV.js";import"./chunk-XRRPDCIR.js";import"./chunk-D6QUKPEY.js";import"./chunk-VIAVLHRB.js";import"./chunk-LSEOQ2KR.js";import{r as q,y as z}from"./chunk-7G4KK3KW.js";import"./chunk-J3ZDC5ZE.js";import"./chunk-KYNKUTEO.js";import"./chunk-QWLQUMDY.js";import"./chunk-V2KSICSA.js";import{c as J,f as D}from"./chunk-4XUOIGFO.js";import"./chunk-R2HWUZ3L.js";import"./chunk-T25YY3N7.js";import"./chunk-ALQ3STGG.js";import"./chunk-EETFV2SL.js";import"./chunk-LECQV7I4.js";import"./chunk-7HZKOXPR.js";import"./chunk-4HISZWR4.js";import"./chunk-33BSK37G.js";import"./chunk-TQAPQODA.js";import{p as S}from"./chunk-MRVR6F6G.js";import"./chunk-WXQQZY3K.js";import"./chunk-VPMDQK57.js";import"./chunk-BCREO4Q5.js";import"./chunk-76YVRX2R.js";import"./chunk-OZF6BMOL.js";import"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import"./chunk-HMKFQDR7.js";import"./chunk-2OT2C2UU.js";import"./chunk-XIMCHX2H.js";import{b as P}from"./chunk-SF6Z2K5H.js";import"./chunk-GBTN5LIS.js";import"./chunk-JOSG37QF.js";import"./chunk-SLMQFZE3.js";import"./chunk-FJDNRF2P.js";import"./chunk-VNB5ZT3P.js";import"./chunk-NDG5FXLR.js";import{a as U}from"./chunk-EJG3F6VR.js";import"./chunk-5ODCEDHC.js";import"./chunk-BENVXA3L.js";import{a as K}from"./chunk-SA4OMQAD.js";import{a as E}from"./chunk-24BLFS5R.js";import"./chunk-JDDD6VJ4.js";import"./chunk-VOYK3LZF.js";import"./chunk-HOJTYTYD.js";import"./chunk-XNEAL2YW.js";import"./chunk-J7M5V2SQ.js";import"./chunk-RQD6EDD6.js";import{aa as j,h as A}from"./chunk-XPCG2OJX.js";import{L as r,U as N,W as R}from"./chunk-AUTL5LCV.js";import{M as L,S as m}from"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import{a as t}from"./chunk-W3WDPWBE.js";import{n as b}from"./chunk-GISCFF3Z.js";import"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import{b as M,r as v,t as h}from"./chunk-HQMV3KQV.js";import"./chunk-CRMMDK2Z.js";import{a as p,b as y,h as n}from"./chunk-EAH6BNBL.js";var O,l=O=class extends R{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,o,s,a){if(a.layer?.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!q(e.spatialReference,a.layer.spatialReference))return void(a?.messages&&a.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));let d=new S;z(e,d,a.layer.spatialReference),o[s]=d.toJSON(a)}else o[s]=e.toJSON(a);delete o[s].spatialReference}clone(){return new O({geometry:M(this.geometry),type:this.type})}};t([r({type:S}),f()],l.prototype,"geometry",void 0),t([E(["web-scene","portal-item"],"geometry")],l.prototype,"writeGeometry",null),t([r({type:["clip","mask","replace"],nonNullable:!0}),f()],l.prototype,"type",void 0),l=O=t([m("esri.layers.support.SceneModification")],l);var u=l;var c,g=c=class extends N(P.ofType(u)){constructor(e){super(e),this.url=null}clone(){return new c({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(o=>o.toJSON(e)).filter(o=>!!o.geometry)}static fromJSON(e,o){let s=new c;for(let a of e)s.add(u.fromJSON(a,o));return s}static fromUrl(e,o,s){return n(this,null,function*(){let a={url:A(e),origin:"service"},d=yield j(e,{responseType:"json",signal:s?.signal}),re=o.toJSON(),_=[];for(let x of d.data)_.push(u.fromJSON(y(p({},x),{geometry:y(p({},x.geometry),{spatialReference:re})}),a));return new c({url:e,items:_})})}};t([r({type:String})],g.prototype,"url",void 0),g=c=t([m("esri.layers.support.SceneModifications")],g);var T=g;var i=class extends $(W(B(F(G(V(k(C(oe)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(J(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,D))}normalizeCtorArgs(e,o){return typeof e=="string"?p({url:e},o):e}readModifications(e,o,s){this._modificationsSource={url:U(e,s),context:s}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){return n(this,null,function*(){return this.addResolvingPromise(this._doLoad(e)),this})}_doLoad(e){return n(this,null,function*(){let o=e?.signal;try{yield this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(s){b(s)}if(yield this._fetchService(o),this._modificationsSource!=null){let s=yield T.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",s,this._modificationsSource.context.origin),this._modificationsSource=null}yield this._fetchIndexAndUpdateExtent(this.nodePages,o)})}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}saveAs(e,o){return n(this,null,function*(){return this._debouncedSaveOperations(w.SAVE_AS,y(p({},o),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)})}save(){return n(this,null,function*(){let e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)})}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new h("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new h("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new h("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){let e=this.elevationInfo,o="Integrated mesh layers";I(v.getLogger(this),ee(o,"absolute-height",e)),I(v.getLogger(this),te(o,e))}};t([r({type:String,readOnly:!0})],i.prototype,"geometryType",void 0),t([r({type:["show","hide"]})],i.prototype,"listMode",void 0),t([r({type:["IntegratedMeshLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([r({type:Q,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[X],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[Y],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[Z],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({type:T}),f({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],i.prototype,"modifications",void 0),t([K(["web-scene","portal-item"],"modifications")],i.prototype,"readModifications",null),t([r(H)],i.prototype,"elevationInfo",null),t([r({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),i=t([m("esri.layers.IntegratedMeshLayer")],i);var it=i;export{it as default};