import{a as u,b as d}from"./chunk-BRJSO7CG.js";import{d as N}from"./chunk-I7FAWQNR.js";import{a as g}from"./chunk-E2G5DGVE.js";import{a as j}from"./chunk-FVDACA4R.js";import{a as b}from"./chunk-J7M5V2SQ.js";import{L as r,W as m}from"./chunk-AUTL5LCV.js";import{S as c}from"./chunk-KUJG22IX.js";import{a as t}from"./chunk-W3WDPWBE.js";import{b as a,i as h,t as y}from"./chunk-HQMV3KQV.js";import{a as E}from"./chunk-EAH6BNBL.js";var R,v=new b({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),x=new b({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),l=R=class extends m{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){let{where:i,geometry:s,spatialRelationship:o,timeExtent:n,objectIds:f,units:w,distance:U}=this;return new N(E({geometry:a(s),objectIds:a(f),spatialRelationship:o,timeExtent:a(n),where:i,units:w,distance:U},e))}clone(){let{where:e,geometry:i,spatialRelationship:s,timeExtent:o,objectIds:n,units:f,distance:w}=this;return new R({geometry:a(i),objectIds:a(n),spatialRelationship:s,timeExtent:a(o),where:e,units:f,distance:w})}};t([r({type:String,json:{write:!0}})],l.prototype,"where",void 0),t([r({types:j,json:{write:!0}})],l.prototype,"geometry",void 0),t([r({type:v.apiValues,json:{name:"spatialRel",read:{reader:v.read},write:{allowNull:!1,writer:v.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],l.prototype,"spatialRelationship",void 0),t([r({type:Number,json:{write:{overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],l.prototype,"distance",void 0),t([r({type:[Number],json:{write:!0}})],l.prototype,"objectIds",void 0),t([r({type:x.apiValues,json:{read:x.read,write:{writer:x.write,overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],l.prototype,"units",void 0),t([r({type:g,json:{write:!0}})],l.prototype,"timeExtent",void 0),l=R=t([c("esri.layers.support.FeatureFilter")],l);var I=l;var S,L={read:{reader:u},write:{writer:d,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},V={read:{reader:u},write:{writer:d,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},_={name:"showExcludedLabels",default:!0},p=S=class extends m{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,i){let s=super.write(e,i);if(i?.origin){if(s.filter){let o=Object.keys(s.filter);if(o.length>1||o[0]!=="where")return i.messages?.push(new y("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:i.layer,effect:this})),null}if("showExcludedLabels"in s)return i.messages?.push(new y("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:i.layer,effect:this})),null}return s}clone(){return new S({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};t([r({type:I,json:{write:{allowNull:!0,writer(e,i,s,o){let n=e?.write({},o);n&&Object.keys(n).length!==0?h(s,n,i):h(s,null,i)}}}})],p.prototype,"filter",void 0),t([r({json:{read:u,write:{writer:d,allowNull:!0},origins:{"web-map":L,"portal-item":L}}})],p.prototype,"includedEffect",void 0),t([r({json:{read:u,write:{writer:d,allowNull:!0},origins:{"web-map":V,"portal-item":V}}})],p.prototype,"excludedEffect",void 0),t([r({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":_,"portal-item":_}}})],p.prototype,"excludedLabelsVisible",void 0),p=S=t([c("esri.layers.support.FeatureEffect")],p);var re=p;export{I as a,re as b};