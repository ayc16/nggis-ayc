import{b as g}from"./chunk-UCXZVNQG.js";import{a as h,b as y}from"./chunk-QJKOK75M.js";import{g as p}from"./chunk-SJW4NR3T.js";import{n as m}from"./chunk-4JWMB5SM.js";import{aa as S}from"./chunk-375OYO4P.js";import{L as i,W as d}from"./chunk-AUTL5LCV.js";import{S as l,z as c}from"./chunk-KUJG22IX.js";import{a as e}from"./chunk-W3WDPWBE.js";import{a as n,b as f,h as u}from"./chunk-EAH6BNBL.js";var o=class extends d{constructor(s){super(s),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){let s=this.geometries.map(a=>a.toJSON()),r=this.geometries[0],t={};return t.outSR=m(this.outSpatialReference),t.inSR=m(r.spatialReference),t.geometries=JSON.stringify({geometryType:p(r),geometries:s}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(t.transformForward=this.transformForward),t}};e([i()],o.prototype,"geometries",void 0),e([i({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),e([i()],o.prototype,"transformation",void 0),e([i()],o.prototype,"transformForward",void 0),o=e([l("esri.rest.support.ProjectParameters")],o);var R=o;var T=c(R);function H(s,r,t){return u(this,null,function*(){r=T(r);let a=y(s),J=n(f(n({},a.query),{f:"json"}),r.toJSON()),O=r.outSpatialReference,j=p(r.geometries[0]),w=h(J,t);return S(a.path+"/project",w).then(({data:{geometries:N}})=>g(N,j,O))})}export{R as a,H as b};