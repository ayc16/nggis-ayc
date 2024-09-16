import{a as P}from"./chunk-JCJ5KQ5Q.js";import{a as w}from"./chunk-NQ4QDYDP.js";import{a as p}from"./chunk-S26YVN25.js";import{a as i,m as F}from"./chunk-DOFADBK3.js";import{a as l}from"./chunk-VYC75ESO.js";import{a as u}from"./chunk-ZN6YLP6I.js";import{a as n}from"./chunk-VVVTRG42.js";import{a as d,b as o}from"./chunk-GMW3QDVG.js";import{a as v}from"./chunk-UVJ5D37D.js";import{a as c}from"./chunk-ALWV3RJ2.js";import{a as m}from"./chunk-7C6Z24SS.js";import{a as s}from"./chunk-GJP6PTKT.js";function h(r){r.attributes.add(v.POSITION,"vec3"),r.vertex.code.add(o`vec3 positionModel() { return position; }`)}function L(r,t){r.include(h);let a=r.vertex;a.include(p,t),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),a.uniforms.add(new n("transformWorldFromViewTH",e=>e.transformWorldFromViewTH),new n("transformWorldFromViewTL",e=>e.transformWorldFromViewTL),new F("transformViewFromCameraRelativeRS",e=>e.transformViewFromCameraRelativeRS),new u("transformProjFromView",e=>e.transformProjFromView),new w("transformWorldFromModelRS",e=>e.transformWorldFromModelRS),new l("transformWorldFromModelTH",e=>e.transformWorldFromModelTH),new l("transformWorldFromModelTL",e=>e.transformWorldFromModelTL)),a.code.add(o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),a.code.add(o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new n("transformWorldFromViewTL",e=>e.transformWorldFromViewTL)),a.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var W=class extends d{constructor(){super(...arguments),this.transformWorldFromViewTH=s(),this.transformWorldFromViewTL=s(),this.transformViewFromCameraRelativeRS=m(),this.transformProjFromView=c()}},V=class extends d{constructor(){super(...arguments),this.transformWorldFromModelRS=m(),this.transformWorldFromModelTH=s(),this.transformWorldFromModelTL=s()}};function R(r){r.varyings.add("linearDepth","float")}function T(r){r.vertex.uniforms.add(new P("nearFar",(t,a)=>a.camera.nearFar))}function f(r){r.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function $(r,t){let{vertex:a}=r;switch(t.output){case i.Color:if(t.receiveShadows)return R(r),void a.code.add(o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.Shadow:case i.ShadowHighlight:case i.ShadowExcludeHighlight:case i.ViewshedShadow:return r.include(L,t),R(r),T(r),f(r),void a.code.add(o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}a.code.add(o`void forwardLinearDepth() {}`)}function J(r){f(r),r.vertex.code.add(o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),r.vertex.code.add(o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}export{h as a,L as b,W as c,V as d,T as e,$ as f,J as g};
