import{A as w,B as O,C as A,D as k,E as S,g as h,w as m,x as y,y as d,z as b}from"./chunk-CRMMDK2Z.js";function J(e,r){let t;if(r)for(t in e)e.hasOwnProperty(t)&&(e[t]===void 0?delete e[t]:e[t]instanceof Object&&J(e[t],!0));else for(t in e)e.hasOwnProperty(t)&&e[t]===void 0&&delete e[t];return e}function l(e){if(!e||typeof e!="object"||typeof e=="function")return e;let r=M(e);if(r!=null)return r;if(v(e))return e.clone();if(P(e))return e.map(l);if(T(e))return e.clone();let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=l(e[n]);return t}function _(e){if(!e||typeof e!="object"||typeof e=="function"||"HTMLElement"in globalThis&&e instanceof HTMLElement)return e;let r=M(e);if(r!=null)return r;if(P(e)){let t=!0,n=e.map(o=>{let i=_(o);return o!=null&&i==null&&(t=!1),i});return t?n:null}if(v(e))return e.clone();if(e instanceof File||e instanceof Blob)return e;if(!T(e)){let t=new(Object.getPrototypeOf(e)).constructor;for(let n of Object.getOwnPropertyNames(e)){let o=e[n],i=_(o);if(o!=null&&i==null)return null;t[n]=i}return t}return null}function v(e){return typeof e.clone=="function"}function P(e){return typeof e.map=="function"&&typeof e.forEach=="function"}function T(e){return typeof e.notifyChange=="function"&&typeof e.watch=="function"}function j(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function M(e){if(m(e)||y(e)||d(e)||b(e)||w(e)||O(e)||A(e)||k(e)||S(e))return e.slice();if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer)return e.slice(0,e.byteLength);if(e instanceof Map){let r=new Map;for(let[t,n]of e)r.set(t,l(n));return r}if(e instanceof Set){let r=new Set;for(let t of e)r.add(l(t));return r}return null}function G(e,r){return e===r||typeof e=="number"&&isNaN(e)&&typeof r=="number"&&isNaN(r)||typeof e?.getTime=="function"&&typeof r?.getTime=="function"&&e.getTime()===r.getTime()||!1}function K(e,r){return e===r||(e==null||typeof e=="string"?e===r:typeof e=="number"?e===r||typeof r=="number"&&isNaN(e)&&isNaN(r):e instanceof Date?r instanceof Date&&e.getTime()===r.getTime():Array.isArray(e)?Array.isArray(r)&&h(e,r):e instanceof Set?r instanceof Set&&W(e,r):e instanceof Map?r instanceof Map&&$(e,r):!!j(e)&&j(r)&&R(e,r))}function R(e,r){if(e===null||r===null)return!1;let t=Object.keys(e);if(r===null||Object.keys(r).length!==t.length)return!1;for(let n of t)if(e[n]!==r[n]||!Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}function W(e,r){if(e.size!==r.size)return!1;for(let t of e)if(!r.has(t))return!1;return!0}function $(e,r){if(e.size!==r.size)return!1;for(let[t,n]of e){let o=r.get(t);if(o!==n||o===void 0&&!r.has(t))return!1}return!0}function N(e,r,t=!1){return D(e,r,t)}function u(e,r){if(r!=null)return r[e]||x(e.split("."),!1,r)}function Y(e,r,t){let n=e.split("."),o=n.pop(),i=x(n,!0,t);i&&o&&(i[o]=r)}function C(e,r){if(e==null&&r==null)return!1;if(e==null||r==null)return!0;if(typeof e=="object"){if(Array.isArray(e)){let t=r;if(e.length!==t.length)return!0;for(let n=0;n<e.length;n++)if(C(e[n],t[n]))return!0;return!1}if(Object.keys(e).length!==Object.keys(r).length)return!0;for(let t in e)if(C(e[t],r[t]))return!0;return!1}return e!==r}function x(e,r,t){let n=t;for(let o of e){if(n==null)return;if(!(o in n)){if(!r)return;n[o]={}}n=n[o]}return n}function D(e,r,t){return r?Object.keys(r).reduce((n,o)=>{let i=n[o],s=r[o];return i===s?n:i===void 0?(n[o]=l(s),n):(Array.isArray(s)||Array.isArray(n)?(i=i?Array.isArray(i)?n[o]=i.concat():n[o]=[i]:n[o]=[],s&&(Array.isArray(s)||(s=[s]),t?s.forEach(g=>{i.includes(g)||i.push(g)}):n[o]=s.concat())):s&&typeof s=="object"?n[o]=D(i,s,t):n.hasOwnProperty(o)&&!r.hasOwnProperty(o)||(n[o]=s),n)},e||{}):e}var a={apiKey:void 0,applicationName:"",applicationUrl:globalThis.location?.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",userPrivilegesApplied:!0,portalUrl:"https://www.arcgis.com",respectPrefersReducedMotion:!0,routeServiceUrl:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{crossOriginNoCorsDomains:null,httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],internalInterceptors:[],maxUrlLength:2e3,priority:"high",proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(globalThis.esriConfig&&(N(a,globalThis.esriConfig,!0),delete a.has),!a.assetsPath){{let e="4.30";a.assetsPath=`https://js.arcgis.com/${e}/@arcgis/core/assets`}a.defaultAssetsPath=a.assetsPath}var H=/\{([^}]+)\}/g;function U(e){return e??""}function oe(e,r){return r?e.replaceAll(H,typeof r=="object"?(t,n)=>U(u(n,r)):(t,n)=>U(r(n))):e}function ie(e,r){return e.replaceAll(/([.$?*|{}()[\]\\/+\-^])/g,t=>r?.includes(t)?t:`\\${t}`)}function E(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return r}var L;function se(e){return L??=new DOMParser,L.parseFromString(e||"","text/html").body.innerText||""}function ae(e,r){return new RegExp(`{${r}}`,"ig").test(e)}function le(e,...r){let t=e[0];for(let n=0;n<r.length;++n)t+=r[n]+e[n+1];return t}var I={info:0,warn:1,error:2,none:3},c=class e{constructor(r){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},r.level!=null&&(this.level=r.level),r.writer!=null&&(this.writer=r.writer),this._module=r.module,e._loggers.set(this.module,this);let t=this.module.lastIndexOf(".");t!==-1&&(this._parent=e.getLogger(this.module.slice(0,t)))}get module(){return this._module}get parent(){return this._parent}error(...r){this._log("error","always",...r)}warn(...r){this._log("warn","always",...r)}info(...r){this._log("info","always",...r)}errorOnce(...r){this._log("error","once",...r)}warnOnce(...r){this._log("warn","once",...r)}infoOnce(...r){this._log("info","once",...r)}errorOncePerTick(...r){this._log("error","oncePerTick",...r)}warnOncePerTick(...r){this._log("warn","oncePerTick",...r)}infoOncePerTick(...r){this._log("info","oncePerTick",...r)}get test(){}static get test(){}static getLogger(r){return r=typeof r!="string"?r.declaredClass:r,e._loggers.get(r)||new e({module:r})}_log(r,t,...n){if(this._matchLevel(r)){if(t!=="always"&&!e._throttlingDisabled){let o=z(n),i=this._loggedMessages[r].get(o);if(t==="once"&&i!=null||t==="oncePerTick"&&i&&i>=e._tickCounter)return;this._loggedMessages[r].set(o,e._tickCounter),e._scheduleTickCounterIncrement()}for(let o of a.log.interceptors)if(o(r,this.module,...n))return;this._inheritedWriter()(r,this.module,...n)}}_parentWithMember(r,t){let n=this;for(;n!=null;){let o=n[r];if(o!=null)return o;n=n.parent}return t}_inheritedWriter(){return this._parentWithMember("writer",q)}_matchLevel(r){let t=a.log.level||"warn";return I[this._parentWithMember("level",t)]<=I[r]}static _scheduleTickCounterIncrement(){e._tickCounterScheduled||(e._tickCounterScheduled=!0,Promise.resolve().then(()=>{e._tickCounter++,e._tickCounterScheduled=!1}))}};function q(e,r,...t){console[e](`[${r}]`,...t)}function z(...e){return E(JSON.stringify(e,(t,n)=>typeof n!="object"||Array.isArray(n)?n:"[Object]"))}c._loggers=new Map,c._tickCounter=0,c._tickCounterScheduled=!1,c._throttlingDisabled=!1;function F(e,r){return e.replaceAll(/\$\{([^\s:}]*)(?::([^\s:}]+))?\}/g,(t,n)=>n===""?"$":(u(n,r)??"").toString())}var f=class{constructor(r,t,n=void 0){this.name=r,this.details=n,this.message=(t&&F(t,n))??""}toString(){return"["+this.name+"]: "+this.message}};var p=class e extends f{constructor(r,t,n){super(r,t,n)}toJSON(){if(this.details!=null)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,(r,t)=>{if(t&&typeof t=="object"&&typeof t.toJSON=="function")return t;try{return l(t)}catch{return"[object]"}}))}}catch(r){throw c.getLogger("esri.core.Error").error(r),r}return{name:this.name,message:this.message,details:this.details}}static fromJSON(r){return new e(r.name,r.message,r.details)}};p.prototype.type="error";export{J as a,l as b,_ as c,v as d,G as e,K as f,N as g,u as h,Y as i,C as j,a as k,oe as l,ie as m,E as n,se as o,ae as p,le as q,c as r,f as s,p as t};
