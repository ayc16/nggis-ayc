import{a as C}from"./chunk-65QIQYGA.js";import{b as M}from"./chunk-NFADXGWT.js";import{a as O}from"./chunk-WXS2B4FF.js";import{a as T}from"./chunk-IFPBW5UQ.js";import{f as P}from"./chunk-QBQKFGOZ.js";import{a as S}from"./chunk-XKXYUJUA.js";import{j as R,t as F}from"./chunk-UI76XBLJ.js";import{a as l,b as w}from"./chunk-UE2YGKE7.js";import{a as b}from"./chunk-D2ITYHSM.js";import{a as p}from"./chunk-FIITBHDP.js";import{F as e,Q as a}from"./chunk-VWEBO6QK.js";import{S as n,z as x}from"./chunk-KAAR5ZJN.js";import{a as t}from"./chunk-W3WDPWBE.js";import{b as u}from"./chunk-X3IDZTNG.js";var m=class extends O(a){constructor(r){super(r),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};t([e({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.onFields!=null&&this.onFields.length>0}}}}})],m.prototype,"onFields",void 0),t([e({type:String,json:{write:!0}})],m.prototype,"operator",void 0),t([e({type:String,json:{write:!0}})],m.prototype,"searchTerm",void 0),t([e({type:String,json:{write:!0}})],m.prototype,"searchType",void 0),m=t([n("esri.rest.support.FullTextSearch")],m);var N=m;var g,D=new p({upperLeft:"upper-left",lowerLeft:"lower-left"}),c=g=class extends a{constructor(r){super(r),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new g(u({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};t([e({type:F,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],c.prototype,"extent",void 0),t([e({type:["view","edit"],json:{write:!0}})],c.prototype,"mode",void 0),t([e({type:String,json:{read:D.read,write:D.write}})],c.prototype,"originPosition",void 0),t([e({type:Number,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],c.prototype,"tolerance",void 0),c=g=t([n("esri.rest.support.QuantizationParameters")],c);var V=c;var _=new p({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});var j,E=new p({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"}),s=j=class extends a{constructor(r){super(r),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(r,o){this.statisticType!=="percentile-continuous"&&this.statisticType!=="percentile-discrete"||(o.statisticParameters=u(r))}clone(){return new j({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:u(this.statisticParameters)})}};t([e({type:Number,json:{write:!0}})],s.prototype,"maxPointCount",void 0),t([e({type:Number,json:{write:!0}})],s.prototype,"maxRecordCount",void 0),t([e({type:Number,json:{write:!0}})],s.prototype,"maxVertexCount",void 0),t([e({type:String,json:{write:!0}})],s.prototype,"onStatisticField",void 0),t([e({type:String,json:{write:!0}})],s.prototype,"outStatisticFieldName",void 0),t([e({type:String,json:{read:{source:"statisticType",reader:E.read},write:{target:"statisticType",writer:E.write}}})],s.prototype,"statisticType",void 0),t([e({type:Object})],s.prototype,"statisticParameters",void 0),t([l("statisticParameters")],s.prototype,"writeStatisticParameters",null),s=j=t([n("esri.rest.support.StatisticDefinition")],s);var B=s;var f,A=new p({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),i=f=class extends a{static from(r){return x(f,r)}constructor(r){super(r),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(r){return typeof r=="number"||typeof r=="object"?r:null}writeHistoricMoment(r,o){o.historicMoment=r&&r.getTime()}writeParameterValues(r,o){if(r){let y={};for(let h in r){let d=r[h];Array.isArray(d)?y[h]=d.map(v=>v instanceof Date?v.getTime():v):d instanceof Date?y[h]=d.getTime():y[h]=d}o.parameterValues=y}}writeStart(r,o){o.resultOffset=this.start,o.resultRecordCount=this.num||10,o.where="1=1"}writeWhere(r,o){o.where=r||"1=1"}clone(){return new f(u({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment!=null?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};i.MAX_MAX_RECORD_COUNT_FACTOR=5,t([e({json:{write:!0}})],i.prototype,"aggregateIds",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"cacheHint",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"compactGeometryEnabled",void 0),t([e({json:{write:!0}})],i.prototype,"datumTransformation",void 0),t([b("datumTransformation")],i.prototype,"castDatumTransformation",null),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"defaultSpatialReferenceEnabled",void 0),t([e({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],i.prototype,"distance",void 0),t([e({type:M,json:{write:!0}})],i.prototype,"dynamicDataSource",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"formatOf3DObjects",void 0),t([e({type:[N],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.fullText!=null&&this.fullText.length>0}}}}})],i.prototype,"fullText",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"gdbVersion",void 0),t([e({types:T,json:{read:P,write:!0}})],i.prototype,"geometry",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"geometryPrecision",void 0),t([e({type:[String],json:{write:!0}})],i.prototype,"groupByFieldsForStatistics",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"having",void 0),t([e({type:Date})],i.prototype,"historicMoment",void 0),t([l("historicMoment")],i.prototype,"writeHistoricMoment",null),t([e({type:Number,json:{write:!0}})],i.prototype,"maxAllowableOffset",void 0),t([e({type:Number,cast:r=>r<1?1:r>i.MAX_MAX_RECORD_COUNT_FACTOR?i.MAX_MAX_RECORD_COUNT_FACTOR:r,json:{write:{overridePolicy:r=>({enabled:r>1})}}})],i.prototype,"maxRecordCountFactor",void 0),t([e({type:["xyFootprint"],json:{write:!0}})],i.prototype,"multipatchOption",void 0),t([e({type:Number,json:{read:{source:"resultRecordCount"}}})],i.prototype,"num",void 0),t([e({json:{write:!0}})],i.prototype,"objectIds",void 0),t([e({type:[String],json:{write:!0}})],i.prototype,"orderByFields",void 0),t([e({type:[String],json:{write:!0}})],i.prototype,"outFields",void 0),t([e({type:w,json:{name:"outSR",write:!0}})],i.prototype,"outSpatialReference",void 0),t([e({type:[B],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],i.prototype,"outStatistics",void 0),t([e({json:{write:!0}})],i.prototype,"parameterValues",void 0),t([l("parameterValues")],i.prototype,"writeParameterValues",null),t([e({type:R,json:{write:!0}})],i.prototype,"pixelSize",void 0),t([e({type:V,json:{write:!0}})],i.prototype,"quantizationParameters",void 0),t([e({type:[Object],json:{write:!0}})],i.prototype,"rangeValues",void 0),t([e({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:this.spatialRelationship==="relation"}}}}})],i.prototype,"relationParameter",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"resultType",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnCentroid",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnDistinctValues",void 0),t([e({type:Boolean,json:{default:!0,write:!0}})],i.prototype,"returnExceededLimitFeatures",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"returnGeometry",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnQueryGeometry",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnM",void 0),t([e({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],i.prototype,"returnZ",void 0),t([e({type:w,json:{write:!0}})],i.prototype,"sourceSpatialReference",void 0),t([S(_,{ignoreUnknown:!1,name:"spatialRel"})],i.prototype,"spatialRelationship",void 0),t([e({type:Number,json:{read:{source:"resultOffset"}}})],i.prototype,"start",void 0),t([l("start"),l("num")],i.prototype,"writeStart",null),t([e({type:String,json:{write:!0}})],i.prototype,"sqlFormat",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"text",void 0),t([e({type:C,json:{write:!0}})],i.prototype,"timeExtent",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"timeReferenceUnknownClient",void 0),t([S(A,{ignoreUnknown:!1}),e({json:{write:{overridePolicy(r){return{enabled:!!r&&this.distance!=null&&this.distance>0}}}}})],i.prototype,"units",void 0),t([e({type:String,json:{write:{overridePolicy(r){return{enabled:r!=null||this.start!=null&&this.start>0}}}}})],i.prototype,"where",void 0),t([l("where")],i.prototype,"writeWhere",null),i=f=t([n("esri.rest.support.Query")],i);var Gt=i;export{V as a,_ as b,B as c,Gt as d};