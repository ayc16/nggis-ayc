import{c as P}from"./chunk-3OLRRKKD.js";import{b as z,c as L}from"./chunk-PTXLSCMJ.js";import{a as b}from"./chunk-S26YVN25.js";import{a as T,m as I}from"./chunk-DOFADBK3.js";import{a as _}from"./chunk-VYC75ESO.js";import{a as D}from"./chunk-ZN6YLP6I.js";import{a as v,b as l}from"./chunk-GMW3QDVG.js";import{a as c}from"./chunk-UVJ5D37D.js";import{o as O}from"./chunk-CF52RSJZ.js";import{d as h}from"./chunk-ALWV3RJ2.js";import{a as w}from"./chunk-7C6Z24SS.js";import{c as g}from"./chunk-OZF6BMOL.js";import{a as N}from"./chunk-GJP6PTKT.js";import{a as f}from"./chunk-W3WDPWBE.js";var d=class extends v{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){let r=this._parameterNames,t={key:this.key};for(let e of r)t[e]=this[e];return t}};function y(o={}){return(r,t)=>{if(r._parameterNames=r._parameterNames??[],r._parameterNames.push(t),o.constValue!=null)Object.defineProperty(r,t,{get:()=>o.constValue});else{let e=r._parameterNames.length-1,n=o.count||2,i=Math.ceil(Math.log2(n)),a=r._parameterBits??[0],s=0;for(;a[s]+i>16;)s++,s>=a.length&&a.push(0);r._parameterBits=a;let x=a[s],M=(1<<i)-1<<x;a[s]+=i,Object.defineProperty(r,t,{get(){return this[e]},set(m){if(this[e]!==m&&(this[e]=m,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~M|+m<<x&M,typeof m!="number"&&typeof m!="boolean"))throw new Error("Configuration value for "+t+" must be boolean or number, got "+typeof m)}})}}}var u=class extends d{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};f([y()],u.prototype,"instancedDoublePrecision",void 0),f([y()],u.prototype,"hasModelTransformation",void 0);var S=w();function Q(o,r){let t=r.hasModelTransformation,e=r.instancedDoublePrecision;t&&(o.vertex.uniforms.add(new D("model",i=>i.modelTransformation??h)),o.vertex.uniforms.add(new I("normalLocalOriginFromModel",i=>(O(S,i.modelTransformation??h),S)))),r.instanced&&e&&(o.attributes.add(c.INSTANCEMODELORIGINHI,"vec3"),o.attributes.add(c.INSTANCEMODELORIGINLO,"vec3"),o.attributes.add(c.INSTANCEMODEL,"mat3"),o.attributes.add(c.INSTANCEMODELNORMAL,"mat3"));let n=o.vertex;e&&(n.include(b,r),n.uniforms.add(new _("viewOriginHi",(i,a)=>z(g(p,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]),p)),new _("viewOriginLo",(i,a)=>L(g(p,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]),p)))),n.code.add(l`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?e?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":e?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${e?l`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(l`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?e?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":e?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),r.output===T.Normal&&(P(n),n.code.add(l`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?e?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":e?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),r.hasVertexTangents&&n.code.add(l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?e?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":e?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var p=N();export{d as a,y as b,u as c,Q as d};
