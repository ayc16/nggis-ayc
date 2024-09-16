import{c as H}from"./chunk-V2KSICSA.js";import{a as L}from"./chunk-GBTN5LIS.js";import{aa as _}from"./chunk-375OYO4P.js";import{L as U}from"./chunk-AUTL5LCV.js";import{S as A}from"./chunk-KUJG22IX.js";import{a as y}from"./chunk-W3WDPWBE.js";import{C as S}from"./chunk-GISCFF3Z.js";import{b as u}from"./chunk-HQMV3KQV.js";import{h as g}from"./chunk-EAH6BNBL.js";var C=H(),I=new Map,k=new Map;function G(e,n,o){return g(this,null,function*(){if(!e||!o)return!1;if(!n)return!0;let i=new URL(e).host,s=I.get(i);if(!s){let t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");s=(yield _(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return s===n})}function P(e,n,o=!1){return g(this,null,function*(){if(!e||!n)return!0;let i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),s=k.get(i)?.entries();if(s){for(let[t,a]of s)if(a.name===n){let d=!a.stack?.hasForwardEdits();if(!d&&o){let[{deleteForwardEdits:m},{default:h}]=yield Promise.all([import("./chunk-ATRAI256.js"),import("./chunk-SGC7AUEX.js")]),c=yield m(i,t,new h({sessionId:C,moment:a.moment}));return c.success&&a.stack?.clearForwardEdits(),c.success}return d}}return!0})}function R(e,n){if(!e)return!1;let o=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=k.get(o)?.entries();if(i){for(let[s,t]of i)if(t.name===n)return t.lockType==="edit"}return!1}var v=new L.EventEmitter;function N(e){return v.on("apply-edits",new WeakRef(e))}function W(e){return v.on("update-moment",new WeakRef(e))}function ie(e,n,o=null,i=!1){let s=S();return i=n==null||i,v.emit("apply-edits",{serviceUrl:e,layerId:n,gdbVersion:o,mayReceiveServiceEdits:i,result:s.promise}),s}var x=Symbol();function re(e){return e!=null&&typeof e=="object"&&x in e}function p(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function M(e,n,o){let i=new URL(e).host,s=I.get(i),t=a=>!a||a===s;return t(n)&&t(o)||n===o}var ne=e=>{var n;let o=class extends e{constructor(...i){super(...i),this[n]=!0,this._applyEditsHandler=s=>{let{serviceUrl:t,layerId:a,gdbVersion:d,mayReceiveServiceEdits:m,result:h}=s,c=t===this.url,f=a!=null&&this.layerId!=null&&a===this.layerId,B=p(this),D=p(this)&&M(t,d,this.gdbVersion);if(!c||B&&!D||!f&&!m)return;let T=h.then(r=>{if(this.lastEditsEventDate=new Date,f&&(r.addedFeatures.length||r.updatedFeatures.length||r.deletedFeatures.length||r.addedAttachments.length||r.updatedAttachments.length||r.deletedAttachments.length))return this.emit("edits",u(r)),r;let E=r.editedFeatures?.find(({layerId:b})=>b===this.layerId);if(E){let{adds:b,updates:V,deletes:w}=E.editedFeatures,j={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:b?b.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],deletedFeatures:w?w.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],updatedFeatures:V?V.map(({current:{attributes:l}})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],editedFeatures:u(r.editedFeatures),exceededTransferLimit:!1,historicMoment:u(r.historicMoment)};return this.emit("edits",j),j}let F={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:u(r.editedFeatures),exceededTransferLimit:!1,historicMoment:u(r.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,d,F.historicMoment)&&this.emit("edits",F),F}).then(r=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,d,r.historicMoment)&&(this.historicMoment=r.historicMoment),r));this.emit("apply-edits",{result:T})},this._updateMomentHandler=s=>{let{serviceUrl:t,gdbVersion:a,moment:d}=s,m=t===this.url,h=p(this),c=p(this)&&M(t,a,this.gdbVersion),f=p(this)&&!M(t,this.gdbVersion,null);m&&h&&c&&f&&"historicMoment"in this&&this.historicMoment!==d&&(this.historicMoment=d)},this.when().then(()=>{this.addHandles(N(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(W(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,s,t){return"historicMoment"in this&&this.historicMoment!==t&&R(i,s)}};return n=x,y([U()],o.prototype,"lastEditsEventDate",void 0),o=y([A("esri.layers.mixins.EditBusLayer")],o),o};export{C as a,G as b,P as c,R as d,ie as e,re as f,ne as g};
