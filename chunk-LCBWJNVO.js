import{b as n,c,d as v}from"./chunk-QKPKWNQQ.js";import{a as t,b as o}from"./chunk-ELGDZDOQ.js";import{a as i}from"./chunk-NQ4QDYDP.js";import{m as d}from"./chunk-DOFADBK3.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as s}from"./chunk-7C6Z24SS.js";import{a as l}from"./chunk-M2GLXRA2.js";function M(r,e){switch(e.normalType){case o.Attribute:case o.Compressed:r.include(t,e),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add(new i("transformNormalGlobalFromModel",m=>m.transformNormalGlobalFromModel),new d("transformNormalViewFromGlobal",m=>m.transformNormalViewFromGlobal)),r.vertex.code.add(a`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case o.Ground:r.include(n,e),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(a`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?a`normalize(vPositionWorldCameraRelative);`:a`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case o.ScreenDerivative:r.vertex.code.add(a`void forwardNormal() {}`);break;default:e.normalType;case o.COUNT:}}var N=class extends c{constructor(){super(...arguments),this.transformNormalViewFromGlobal=s()}},f=class extends v{constructor(){super(...arguments),this.transformNormalGlobalFromModel=s(),this.toMapSpace=l()}};export{M as a,N as b,f as c};
