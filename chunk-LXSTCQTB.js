import{a as w}from"./chunk-E2G5DGVE.js";import{a as v}from"./chunk-FVDACA4R.js";import{f as c}from"./chunk-SJW4NR3T.js";import{a as l,b as h}from"./chunk-D2RUV6O4.js";import{a as n}from"./chunk-J7M5V2SQ.js";import{L as r,W as p}from"./chunk-AUTL5LCV.js";import{S as s,z as m}from"./chunk-KUJG22IX.js";import{a as t}from"./chunk-W3WDPWBE.js";import{b as y}from"./chunk-HQMV3KQV.js";var a,o=a=class extends p{constructor(i){super(i),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new a({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};t([r({type:[String],json:{write:!0}})],o.prototype,"groupByFields",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"topCount",void 0),t([r({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),o=a=t([s("esri.rest.support.TopFilter")],o);var S=o;var u,f=new n({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),R=new n({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),e=u=class extends p{constructor(i){super(i),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(i,d){d.resultOffset=this.start,d.resultRecordCount=this.num||10}clone(){return new u(y({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};t([r({type:Boolean,json:{write:!0}})],e.prototype,"cacheHint",void 0),t([r({type:Number,json:{write:{overridePolicy:i=>({enabled:i>0})}}})],e.prototype,"distance",void 0),t([r({types:v,json:{read:c,write:!0}})],e.prototype,"geometry",void 0),t([r({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0),t([r({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0),t([r({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),t([r({json:{write:!0}})],e.prototype,"objectIds",void 0),t([r({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0),t([r({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0),t([r({type:h,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"resultType",void 0),t([r({json:{write:!0}})],e.prototype,"returnGeometry",void 0),t([r({type:Boolean,json:{write:{overridePolicy:i=>({enabled:i})}}})],e.prototype,"returnM",void 0),t([r({type:Boolean,json:{write:{overridePolicy:i=>({enabled:i})}}})],e.prototype,"returnZ",void 0),t([r({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),t([l("start"),l("num")],e.prototype,"writeStart",null),t([r({type:String,json:{read:{source:"spatialRel",reader:f.read},write:{target:"spatialRel",writer:f.write}}})],e.prototype,"spatialRelationship",void 0),t([r({type:w,json:{write:!0}})],e.prototype,"timeExtent",void 0),t([r({type:S,json:{write:!0}})],e.prototype,"topFilter",void 0),t([r({type:String,json:{read:R.read,write:{writer:R.write,overridePolicy(i){return{enabled:i!=null&&this.distance!=null&&this.distance>0}}}}})],e.prototype,"units",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"where",void 0),e=u=t([s("esri.rest.support.TopFeaturesQuery")],e),e.from=m(e);var D=e;export{D as a};