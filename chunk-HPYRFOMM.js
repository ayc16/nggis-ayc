import{b as g,f as y,g as b,h as N}from"./chunk-56SRKZHP.js";import{a as f}from"./chunk-NYOCZ43I.js";import{a as A}from"./chunk-IFFYADB3.js";import{a as i}from"./chunk-ALWV3RJ2.js";import{B as x,f as c,v as h}from"./chunk-EBWCXIFH.js";import{a as p,b as s,c as m,d as u}from"./chunk-GJP6PTKT.js";import{L as a,W as l}from"./chunk-AUTL5LCV.js";import{S as n}from"./chunk-KUJG22IX.js";import{a as r}from"./chunk-W3WDPWBE.js";var e,o=e=class extends l{constructor(t){super(t),this.translation=p(),this.rotationAxis=u(N),this.rotationAngle=0,this.scale=m(1,1,1)}get rotation(){return g(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=s(t),this.rotationAngle=y(t)}get localMatrix(){let t=i();return f(d,this.rotation,b(this.rotation)),h(t,d,this.translation,this.scale),t}get localMatrixInverse(){return c(i(),this.localMatrix)}equals(t){return this===t||t!=null&&x(this.localMatrix,t.localMatrix)}clone(){let t={translation:s(this.translation),rotationAxis:s(this.rotationAxis),rotationAngle:this.rotationAngle,scale:s(this.scale)};return new e(t)}};r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"translation",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAxis",void 0),r([a({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAngle",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"scale",void 0),r([a()],o.prototype,"rotation",null),r([a()],o.prototype,"localMatrix",null),r([a()],o.prototype,"localMatrixInverse",null),o=e=r([n("esri.geometry.support.MeshTransform")],o);var d=A(),k=o;export{k as a};