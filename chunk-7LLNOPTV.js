import{c as E}from"./chunk-XRRPDCIR.js";import{k as v}from"./chunk-T25YY3N7.js";import{a as c}from"./chunk-SA4OMQAD.js";import{a as y}from"./chunk-24BLFS5R.js";import{a as x,b as h}from"./chunk-J7M5V2SQ.js";import{L as s,W as p}from"./chunk-AUTL5LCV.js";import{S as n}from"./chunk-KUJG22IX.js";import{a as t}from"./chunk-W3WDPWBE.js";import{g as d}from"./chunk-MLSR6YE6.js";import{h as m}from"./chunk-EAH6BNBL.js";var a,i=a=class extends p{constructor(e){super(e)}collectRequiredFields(e,r){return m(this,null,function*(){return v(e,r,this.expression)})}clone(){return new a({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};t([s({type:String,json:{write:!0}})],i.prototype,"expression",void 0),t([s({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=a=t([n("esri.symbols.support.FeatureExpressionInfo")],i);var f=i;var l,u=h()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),w=new x({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"}),o=l=class extends p{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return e??(r.featureExpression&&r.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,r,I,g){r[I]=e.write({},g),e.expression==="0"&&(r.featureExpression={value:0})}get mode(){let{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):e!=null||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&d(this.featureExpressionInfo,e.featureExpressionInfo)}};t([s({type:f,json:{write:!0}})],o.prototype,"featureExpressionInfo",void 0),t([c("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],o.prototype,"readFeatureExpressionInfo",null),t([y("featureExpressionInfo",{featureExpressionInfo:{type:f},"featureExpression.value":{type:[0]}})],o.prototype,"writeFeatureExpressionInfo",null),t([s({type:u.apiValues,nonNullable:!0,json:{type:u.jsonValues,read:u.read,write:{writer:u.write,isRequired:!0}}})],o.prototype,"mode",null),t([s({type:Number,json:{write:!0}})],o.prototype,"offset",void 0),t([s({type:E,json:{type:String,read:w.read,write:w.write}})],o.prototype,"unit",null),o=l=t([n("esri.symbols.support.ElevationInfo")],o);var P=o;export{P as a};