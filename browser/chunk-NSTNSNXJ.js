import{F as s}from"./chunk-VWEBO6QK.js";import{S as p}from"./chunk-KAAR5ZJN.js";import{a as r}from"./chunk-W3WDPWBE.js";function a(i){return"portalItem"in i}var u=i=>{let e=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):a(this)?this.portalItem?.apiKey:null}set apiKey(t){t!=null?this._override("apiKey",t):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([s({type:String})],e.prototype,"apiKey",null),e=r([p("esri.layers.mixins.APIKeyMixin")],e),e};export{u as a};
