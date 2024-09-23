import{b as L,c as H,d as V,e as B}from"./chunk-RM56F5OF.js";import{a as w}from"./chunk-3K3SLH5Z.js";import{e as _,f as y,g as A}from"./chunk-AUSMAEKP.js";import{g as r}from"./chunk-WVCJLLRA.js";import{a as g,b as $,g as E,h as U}from"./chunk-4XUOIGFO.js";import{b as x}from"./chunk-SF6Z2K5H.js";import{P as O}from"./chunk-JDDD6VJ4.js";import{L as o,O as I}from"./chunk-AUTL5LCV.js";import{S as h}from"./chunk-KUJG22IX.js";import{a as k}from"./chunk-OVHPPCBL.js";import{a as s}from"./chunk-W3WDPWBE.js";import{a as T}from"./chunk-GISCFF3Z.js";import{r as S}from"./chunk-HQMV3KQV.js";import{a as v,b as M}from"./chunk-EAH6BNBL.js";var b="esri-unit-select",C={base:b,label:`${b}__label`,select:`${b}__select`},p=class extends y{constructor(e,t){super(e,t),this._onSelectChange=i=>{this.onChange(i.target.value)}}loadDependencies(){return _({label:()=>import("./chunk-LMCBFGZ4.js"),option:()=>import("./chunk-RIBKPTCI.js"),select:()=>import("./chunk-ESJGJCSN.js")})}render(){let{messages:e,options:t,selectLabel:i,value:m,_onSelectChange:c}=this;return r("div",{class:C.base,key:"units"},r("calcite-label",{class:C.label},i,r("calcite-select",{class:C.select,label:i,onCalciteSelectChange:c},t.map(d=>r("calcite-option",{key:d,selected:d===m,value:d},O(d)?e.systems[d]:e.units[d]?.pluralCapitalized)))))}};s([o()],p.prototype,"options",void 0),s([o()],p.prototype,"onChange",void 0),s([o()],p.prototype,"selectLabel",void 0),s([o()],p.prototype,"value",void 0),s([o(),A("esri/core/t9n/Units")],p.prototype,"messages",void 0),p=s([h("esri.widgets.support.UnitSelect")],p);var n="esri-measurement-widget-content",l={base:n,actions:`${n}__actions`,error:`${n}__error`,hint:`${n}__hint`,hintText:`${n}__hint-text`,panelError:`${n}__panel--error`,settings:`${n}__settings`,measurement:`${n}__measurement`,measurementItem:`${n}__measurement-item`,measurementItemDisabled:`${n}__measurement-item--disabled`,measurementItemTitle:`${n}__measurement-item__title`,measurementItemValue:`${n}__measurement-item__value`},a=class extends y{constructor(e,t){super(e,t)}loadDependencies(){return _({button:()=>import("./chunk-J63POI2Y.js")})}render(){return r("div",{class:l.base},this._renderContent())}_renderContent(){let{supported:e,active:t,state:i}=this;switch(i){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return r("section",{class:l.error,key:"unsupported"},r("p",null,this.messages.unsupported))}_renderHint(){let{messages:e}=this;return r("section",{class:l.hint,key:"hint"},r("p",{class:l.hintText},e.hint))}_renderSettings(){return r("div",{class:l.settings,key:"settings"},r(p,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return r("section",{class:l.measurement,key:"measurement"},this.measurementItems.map(e=>this._renderMeasurementItem(e)))}_renderMeasurementItem({key:e,title:t,value:i}){return r("div",{class:this.classes(l.measurementItem,i==null&&l.measurementItemDisabled),key:e},r("span",{class:l.measurementItemTitle},t),r("span",{"aria-live":"polite",class:l.measurementItemValue},i??this.messages.notApplicable))}_renderActions(){let{messages:e}=this;return r("div",{class:l.actions},r("calcite-button",{class:this.newMeasurementButtonClass,disabled:this.state==="disabled",onclick:this.onNewMeasurementClick},e.newMeasurement))}};s([o()],a.prototype,"active",void 0),s([o()],a.prototype,"measurementItems",void 0),s([o()],a.prototype,"messages",void 0),s([o()],a.prototype,"newMeasurementButtonClass",void 0),s([o()],a.prototype,"onNewMeasurementClick",void 0),s([o()],a.prototype,"onUnitChange",void 0),s([o()],a.prototype,"state",void 0),s([o()],a.prototype,"supported",void 0),s([o()],a.prototype,"unit",void 0),s([o()],a.prototype,"unitOptions",void 0),a=s([h("esri.widgets.support.MeasurementWidgetContent")],a);var u=class extends I{constructor(e){super(e),this.tool=null,this._loggedUnsupportedErrorOnce=!1,e?.visible!=null&&(this.visible=e.visible)}initialize(){this.addHandles(g(()=>({ready:this.view!=null&&this.view.ready,supported:this.supported}),({ready:e,supported:t})=>{!e||t||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)},U))}destroy(){this.removeTool(),this.view=null}get active(){return this.tool!=null&&this.tool.active}get disabled(){return this.view==null||!this.view.ready||!this.supported}get supported(){return this.view==null||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);let t="tools";this.removeHandles(t),e!=null&&this.addHandles(e.tools.on("after-remove",i=>{i.item===this.tool&&this._set("tool",null)}),t)}set visible(e){this._set("visible",e),this.tool!=null&&(this.tool.visible=e)}createTool(e={interactive:!1}){if(this.removeTool(),this.view==null||!this.view.ready||!this.supported)return;let t=this.constructTool();t.created?(this._set("tool",t),this.view.tools.add(t)):e.interactive?(this._set("tool",t),this.view.addAndActivateTool(t),$(()=>t.created,()=>{t.active&&this.view!=null&&(this.view.activeTool=null)},{initial:!0,once:!0})):t.destroy()}removeTool(){let e=this.tool;if(e==null)return;let t=this.view?.tools;t!=null?t.remove(e):e.destroy(),this._set("tool",null)}logError(...e){S.getLogger(this).error(...e)}};s([o({constructOnly:!0})],u.prototype,"tool",void 0),s([o()],u.prototype,"active",null),s([o()],u.prototype,"disabled",null),s([o()],u.prototype,"supported",null),s([o({value:null})],u.prototype,"view",null),s([o({type:Boolean,value:!0})],u.prototype,"visible",null),u=s([h("esri.widgets.support.InteractiveToolViewModel")],u);function D(e,t){let i=new V({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:t?.distance??w.distance,touchSensitivityMultiplier:t?.touchSensitivityMultiplier??w.touchSensitivityMultiplier});return M(v({},g(()=>e.map?.allLayers?.toArray()??[],m=>{i.featureSources=new x(m.map(c=>new H({layer:c})))},E)),{options:i})}var f=new Map;function Ve(e){if(!f.has(e)){let m=D(e,{distance:10}),c=F(e,m.options);f.set(e,{referenceCount:0,snappingManager:c,remove:()=>{m.remove(),c.destroy()}})}let t=f.get(e);t.referenceCount++;let i=T(()=>z(e,t));return v({snappingManager:t.snappingManager},i)}function z(e,t){t.referenceCount--,t.referenceCount>0||k(()=>{t.referenceCount===0&&(t.remove(),f.delete(e))})}function F(e,t){return new B({view:e,options:t,snappingEnginesFactory:(i,m)=>[new L({view:e,spatialReference:e.spatialReference,options:m})]})}export{Ve as a,u as b,a as c};