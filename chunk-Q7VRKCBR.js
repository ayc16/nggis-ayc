import{h as I}from"./chunk-UAZOXZEX.js";import{m as R}from"./chunk-UIR6P2R4.js";import{c as O}from"./chunk-JOSG37QF.js";import{a as f}from"./chunk-BN2F4ATU.js";import{b as D,c as v}from"./chunk-DJULDHPW.js";import{a as A}from"./chunk-2KZICFRS.js";import{a as k}from"./chunk-D2RUV6O4.js";import{V as c,aa as T,m as S,n as M,s as y}from"./chunk-375OYO4P.js";import{L as u}from"./chunk-AUTL5LCV.js";import{S as L}from"./chunk-KUJG22IX.js";import{a as l}from"./chunk-W3WDPWBE.js";import{k as $,n as p,s as F}from"./chunk-GISCFF3Z.js";import{b as H}from"./chunk-MLSR6YE6.js";import{k as E,r as _,t as b}from"./chunk-HQMV3KQV.js";import{a as w,b as U,h as o}from"./chunk-EAH6BNBL.js";var lt=x=>{let a=class extends x{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=H(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,t,e){if(t.itemId)return new f({id:t.itemId,portal:e?.portal})}writePortalItem(r,t){r?.id&&(t.itemId=r.id)}loadFromPortal(r,t){return o(this,null,function*(){if(this.portalItem?.id)try{let{load:e}=yield import("./chunk-57UICHSY.js");return $(t),yield e({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},t)}catch(e){throw F(e)||_.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${e}`),e}})}finishLoadEditablePortalLayer(r){return o(this,null,function*(){this._set("userHasEditingPrivileges",yield this._fetchUserHasEditingPrivileges(r).catch(t=>(p(t),!0)))})}setUserPrivileges(r,t){return o(this,null,function*(){if(!E.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{let{features:{edit:e,fullEdit:s},content:{updateItem:i}}=yield this._fetchUserPrivileges(r,t);this._set("userHasEditingPrivileges",e),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(e){p(e)}})}_fetchUserPrivileges(r,t){return o(this,null,function*(){let e=this.portalItem;if(!r||!e||!e.loaded||e.sourceUrl)return this._fetchFallbackUserPrivileges(t);let s=r===e.id;if(s&&e.portal.user)return I(e);let i,m;if(s)i=e.portal.url;else try{i=yield R(this.url,t)}catch(n){p(n)}if(!i||!S(i,e.portal.url))return this._fetchFallbackUserPrivileges(t);try{let n=t!=null?t.signal:null;m=yield c?.getCredential(`${i}/sharing`,{prompt:!1,signal:n})}catch(n){p(n)}let h=!0,d=!1,P=!1;if(!m)return{features:{edit:h,fullEdit:d},content:{updateItem:P}};try{if(s?yield e.reload():(e=new f({id:r,portal:{url:i}}),yield e.load(t)),e.portal.user)return I(e)}catch(n){p(n)}return{features:{edit:h,fullEdit:d},content:{updateItem:P}}})}_fetchFallbackUserPrivileges(r){return o(this,null,function*(){let t=!0;try{t=yield this._fetchUserHasEditingPrivileges(r)}catch(e){p(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}})}_fetchUserHasEditingPrivileges(r){return o(this,null,function*(){let t=this.url?c?.findCredential(this.url):null;if(!t)return!0;let e=g.credential===t?g.user:yield this._fetchEditingUser(r);return g.credential=t,g.user=e,e?.privileges==null||e.privileges.includes("features:user:edit")})}_fetchEditingUser(r){return o(this,null,function*(){let t=this.portalItem?.portal?.user;if(t)return t;let e=c?.findServerInfo(this.url??"");if(!e?.owningSystemUrl)return null;let s=`${e.owningSystemUrl}/sharing/rest`,i=v.getDefault();if(i&&i.loaded&&y(i.restUrl)===y(s))return i.user;let m=`${s}/community/self`,h=r!=null?r.signal:null,d=yield O(T(m,{authMode:"no-prompt",query:{f:"json"},signal:h}));return d.ok?D.fromJSON(d.value.data):null})}read(r,t){t&&(t.layer=this),super.read(r,t)}write(r,t){let e=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||v.getDefault());return e&&s&&!M(s.restUrl,e.restUrl)?(t.messages&&t.messages.push(new b("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,U(w({},t),{layer:this}))}};return l([u({type:f})],a.prototype,"portalItem",null),l([A("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),l([k("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),l([u({clonable:!1})],a.prototype,"resourceReferences",void 0),l([u({type:Boolean,readOnly:!0})],a.prototype,"userHasEditingPrivileges",void 0),l([u({type:Boolean,readOnly:!0})],a.prototype,"userHasFullEditingPrivileges",void 0),l([u({type:Boolean,readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",void 0),a=l([L("esri.layers.mixins.PortalLayer")],a),a},g={credential:null,user:null};export{lt as a};
