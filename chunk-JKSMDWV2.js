import{a as u}from"./chunk-F4H7OIJK.js";import{a as d}from"./chunk-NEL2DIHD.js";import{a as y}from"./chunk-LCWKR6WR.js";import"./chunk-N7KNO35F.js";import"./chunk-TUJ6FPE6.js";import"./chunk-XFK3CDZ5.js";import"./chunk-4XBATNKX.js";import"./chunk-3IJY37BG.js";import"./chunk-IFPBW5UQ.js";import"./chunk-ZV7ILGPO.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-5TVEQGKJ.js";import"./chunk-U4U366GW.js";import"./chunk-JTJ3UVF7.js";import"./chunk-R4TNLPIN.js";import"./chunk-5HLV7XP5.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import"./chunk-CTGIUUCS.js";import{F as s,q as l}from"./chunk-VWEBO6QK.js";import{S as a}from"./chunk-KAAR5ZJN.js";import{a as t}from"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import{r as n}from"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import"./chunk-EAH6BNBL.js";var o=class extends u(d(y)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,i)=>{l(()=>{let r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type),p="Unsupported layer type";r&&(p+=" "+r),i(new n("layer:unsupported-layer-type",p,{layerType:r}))})}))}read(e,i){let r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,i)}write(e,i){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};t([s({readOnly:!0})],o.prototype,"resourceInfo",void 0),t([s({type:["show","hide"]})],o.prototype,"listMode",void 0),t([s({type:Boolean,readOnly:!1})],o.prototype,"persistenceEnabled",void 0),t([s({json:{read:!1},readOnly:!0,value:"unsupported"})],o.prototype,"type",void 0),o=t([a("esri.layers.UnsupportedLayer")],o);var M=o;export{M as default};