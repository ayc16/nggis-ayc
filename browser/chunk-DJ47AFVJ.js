import{a as u}from"./chunk-6EWOYGD5.js";import{b as d}from"./chunk-YTC2EJDQ.js";import{a as f}from"./chunk-WXS2B4FF.js";import{a as l}from"./chunk-UI76XBLJ.js";import{a as n}from"./chunk-UE2YGKE7.js";import{F as e,Q as a}from"./chunk-VWEBO6QK.js";import{S as m}from"./chunk-KAAR5ZJN.js";import{a as r}from"./chunk-W3WDPWBE.js";var o=class extends f(a){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){let i={};for(let s of Object.keys(t))i[s]=d(t[s]);return i}writeDomains(t,i){let s={};for(let p of Object.keys(t))t[p]&&(s[p]=t[p]?.toJSON());i.domains=s}};r([e({json:{write:!0}})],o.prototype,"id",void 0),r([e({json:{write:!0}})],o.prototype,"name",void 0),r([e({json:{write:!0}})],o.prototype,"domains",void 0),r([l("domains")],o.prototype,"readDomains",null),r([n("domains")],o.prototype,"writeDomains",null),r([e({type:[u],json:{write:!0}})],o.prototype,"templates",void 0),o=r([m("esri.layers.support.FeatureType")],o);var N=o;export{N as a};
