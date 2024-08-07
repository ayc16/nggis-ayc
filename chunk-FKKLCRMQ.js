import{f as Je,g as Ze}from"./chunk-LFPKLGKU.js";import{a as ke,c as Er}from"./chunk-SUFGB5QC.js";import{a as L,c as Mr,d as yr}from"./chunk-PV5OLJIT.js";import{a as S,b as O,c as Xe,d as xe,e as br,g as Tr}from"./chunk-FN7HZGXJ.js";import{a as A,b as o}from"./chunk-GMW3QDVG.js";import{a as pr,i as hr,j as vr}from"./chunk-57GB3TOJ.js";import{a as f}from"./chunk-RHABF3KL.js";import{a as B}from"./chunk-6Z54DTZZ.js";import{a as Ye,b as xr}from"./chunk-KWPZPKEZ.js";import{b as Sr,c as _r}from"./chunk-PTXLSCMJ.js";import{c as He,f as te,g as gr}from"./chunk-ZREXZJBZ.js";import{a as cr,b as mr,l as Dt,n as dr,y as ur}from"./chunk-XSMN6VN6.js";import{a as lr}from"./chunk-I46GU3Q4.js";import{a as c}from"./chunk-H5IJXG2U.js";import{a as ee,c as qe}from"./chunk-BVW6ULEA.js";import{a as ge}from"./chunk-7C6Z24SS.js";import{a as ar,h as ir,i as sr}from"./chunk-GUOR3BIM.js";import{a as nr}from"./chunk-2EA2KAER.js";import{n as fr}from"./chunk-V5AJXD2Y.js";import{b as wt}from"./chunk-J57HR4DB.js";import{a as er,g as tr}from"./chunk-GNCG2SQP.js";import{f as Se}from"./chunk-K5NHJTKR.js";import{a as ze,b as It}from"./chunk-Z5Q76SB7.js";import{b as H}from"./chunk-E5R4OI7X.js";import{b as ve,d as Lt,f as Ne}from"./chunk-6FWNINU2.js";import{A as rr,C as or,E as je,a as p,c as De,e as Fe,l as M,m as Rt,n as At}from"./chunk-ES7AH7WX.js";import{F as g,I as We}from"./chunk-VWEBO6QK.js";import{S as Be,s as $t}from"./chunk-KAAR5ZJN.js";import{a as u}from"./chunk-W3WDPWBE.js";import{w as Qt}from"./chunk-WKT5W7KT.js";import{c as we,f as ae}from"./chunk-MLSR6YE6.js";import{f as Kt}from"./chunk-IQJU4QT3.js";import{h as Xt}from"./chunk-EAH6BNBL.js";var m;function ea(e){return e===m.Shadow||e===m.ShadowHighlight||e===m.ShadowExcludeHighlight}function ta(e){return To(e)||e===m.Normal}function So(e){return e===m.Highlight||e===m.ObjectAndLayerIdColor}function _o(e){return e===m.Color||e===m.Alpha}function bo(e){return _o(e)||So(e)}function To(e){return bo(e)||e===m.LinearDepth}(function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"})(m||(m={}));function $e(e,t){switch(t.normalType){case C.Compressed:e.attributes.add(c.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(o`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case C.Attribute:e.attributes.add(c.NORMAL,"vec3"),e.vertex.code.add(o`vec3 normalModel() {
return normal;
}`);break;case C.ScreenDerivative:e.fragment.code.add(o`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:t.normalType;case C.COUNT:case C.Ground:}}var C;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(C||(C={}));var D;function _e(e,t){switch(t.textureCoordinateType){case D.Default:return e.attributes.add(c.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case D.Compressed:return e.attributes.add(c.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case D.Atlas:return e.attributes.add(c.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(c.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case D.None:return void e.vertex.code.add(o`void forwardTextureCoordinates() {}`);case D.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(D||(D={}));var x=class extends S{constructor(t,r){super(t,"vec3",f.Pass,(a,i,s)=>a.setUniform3fv(t,r(i,s)))}};function Cr(e){e.fragment.code.add(o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Pr(e,t){switch(e.include(_e,t),t.textureCoordinateType){case D.Default:case D.Compressed:return void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case D.Atlas:return e.include(Cr),void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:t.textureCoordinateType;case D.None:case D.COUNT:return}}var P=class extends S{constructor(t,r){super(t,"vec3",f.Draw,(a,i,s,n)=>a.setUniform3fv(t,r(i,s,n)))}};var Qe=class{constructor(t){this._material=t.material,this._techniqueRepository=t.techniqueRep,this._output=t.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(t,r){return this._technique=this._techniqueRepository.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return He.LOADED}};var Or=class extends Qe{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRepository,this._textureId=t.textureId,this._acquire(t.textureId,r=>this._texture=r),this._acquire(t.normalTextureId,r=>this._textureNormal=r),this._acquire(t.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(t.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(t.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=ae(this._texture),this._textureNormal=ae(this._textureNormal),this._textureEmissive=ae(this._textureEmissive),this._textureOcclusion=ae(this._textureOcclusion),this._textureMetallicRoughness=ae(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?He.LOADED:He.LOADING}get textureBindParameters(){return new et(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=ae(this._texture),this._textureId=t,this._acquire(this._textureId,r=>this._texture=r))}_acquire(t,r){if(t==null)return void r(null);let a=this._textureRepository.acquire(t);if(Qt(a))return++this._numLoading,void a.then(i=>{if(this._disposed)return ae(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(a)}},et=class extends A{constructor(t=null,r=null,a=null,i=null,s=null,n,l){super(),this.texture=t,this.textureNormal=r,this.textureEmissive=a,this.textureOcclusion=i,this.textureMetallicRoughness=s,this.scale=n,this.normalTextureTransformMatrix=l}};var h;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(h||(h={}));function Ua(e,t){let r=e.fragment,a=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===h.Normal&&a&&e.include(Pr,t),t.pbrMode!==h.Schematic)if(t.pbrMode!==h.Disabled){if(t.pbrMode===h.Normal){r.code.add(o`vec3 mrr;
vec3 emission;
float occlusion;`);let i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===f.Pass?new O("texMetallicRoughness",s=>s.textureMetallicRoughness):new ke("texMetallicRoughness",s=>s.textureMetallicRoughness)),r.code.add(o`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===f.Pass?new O("texEmission",s=>s.textureEmissive):new ke("texEmission",s=>s.textureEmissive)),r.code.add(o`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===f.Pass?new O("texOcclusion",s=>s.textureOcclusion):new ke("texOcclusion",s=>s.textureOcclusion)),r.code.add(o`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o`float getBakedOcclusion() { return 1.0; }`),i===f.Pass?r.uniforms.add(new x("emissionFactor",s=>s.emissiveFactor),new x("mrrFactors",s=>s.mrrFactors)):r.uniforms.add(new P("emissionFactor",s=>s.emissiveFactor),new P("mrrFactors",s=>s.mrrFactors)),r.code.add(o`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?o`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?o`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?o`applyEmission(${t.hasEmissiveTextureTransform?o`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?o`applyOcclusion(${t.hasOcclusionTextureTransform?o`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(o`float getBakedOcclusion() { return 1.0; }`);else r.code.add(o`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Rr(e){e.attributes.add(c.POSITION,"vec3"),e.vertex.code.add(o`vec3 positionModel() { return position; }`)}function tt({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(o`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}var be=class extends S{constructor(t,r){super(t,"mat3",f.Draw,(a,i,s)=>a.setUniformMatrix3fv(t,r(i,s)))}};var Y=class extends S{constructor(t,r){super(t,"mat3",f.Pass,(a,i,s)=>a.setUniformMatrix3fv(t,r(i,s)))}};var W=class extends S{constructor(t,r){super(t,"mat4",f.Pass,(a,i,s)=>a.setUniformMatrix4fv(t,r(i,s)))}};function ot(e,t){e.include(Rr);let r=e.vertex;r.include(tt,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new x("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new x("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new Y("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new W("transformProjFromView",a=>a.transformProjFromView),new be("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new P("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new P("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)),r.code.add(o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new x("transformWorldFromViewTL",a=>a.transformWorldFromViewTL)),r.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var rt=class extends A{constructor(){super(...arguments),this.transformWorldFromViewTH=p(),this.transformWorldFromViewTL=p(),this.transformViewFromCameraRelativeRS=ge(),this.transformProjFromView=ee()}};function Lr(e,t){switch(t.normalType){case C.Attribute:case C.Compressed:e.include($e,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new be("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Y("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case C.Ground:e.include(ot,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(o`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?o`normalize(vPositionWorldCameraRelative);`:o`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case C.ScreenDerivative:e.vertex.code.add(o`void forwardNormal() {}`);break;default:t.normalType;case C.COUNT:}}var Ar=class extends rt{constructor(){super(...arguments),this.transformNormalViewFromGlobal=ge()}};function Ir(e){e.varyings.add("linearDepth","float")}function Ft(e){e.vertex.uniforms.add(new Xe("nearFar",(t,r)=>r.camera.nearFar))}function Nt(e){e.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Ri(e,t){let{vertex:r}=e;switch(t.output){case m.Color:if(t.receiveShadows)return Ir(e),void r.code.add(o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case m.LinearDepth:case m.Shadow:case m.ShadowHighlight:case m.ShadowExcludeHighlight:return e.include(ot,t),Ir(e),Ft(e),Nt(e),void r.code.add(o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(o`void forwardLinearDepth() {}`)}function Ii(e){e.vertex.code.add(o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function it(e,t){Eo(e,t,new P("slicePlaneOrigin",(r,a)=>Mo(t,r,a)),new P("slicePlaneBasis1",(r,a)=>wr(t,r,a,a.slicePlane?.basis1)),new P("slicePlaneBasis2",(r,a)=>wr(t,r,a,a.slicePlane?.basis2)))}function Eo(e,t,...r){if(!t.hasSlicePlane){let n=o`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(n),void e.fragment.code.add(n)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);let a=o`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=o`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,s=t.hasSliceHighlight?o`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(s)}function Dr(e,t,r){return e.instancedDoublePrecision?M(yo,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Fr(e,t){return e!=null?At(at,t.origin,e):t.origin}function Nr(e,t,r){return e.hasSliceTranslatedView?t!=null?Se(Co,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Mo(e,t,r){if(r.slicePlane==null)return Fe;let a=Dr(e,t,r),i=Fr(a,r.slicePlane),s=Nr(e,a,r);return s!=null?je(at,i,s):i}function wr(e,t,r,a){if(a==null||r.slicePlane==null)return Fe;let i=Dr(e,t,r),s=Fr(i,r.slicePlane),n=Nr(e,i,r);return n!=null?(Rt(Ge,a,s),je(at,s,n),je(Ge,Ge,n),At(Ge,Ge,at)):a}var yo=p(),at=p(),Ge=p(),Co=ee();function st(e){Nt(e),e.vertex.code.add(o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}var nt=class extends S{constructor(t,r){super(t,"mat4",f.Draw,(a,i,s)=>a.setUniformMatrix4fv(t,r(i,s)))}};function Hr(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",Fe):e.uniforms.add(new P("cameraPosition",(r,a)=>M(Gr,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function lt(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new W("proj",(a,i)=>i.camera.projectionMatrix),new nt("view",(a,i)=>Se(zr,i.camera.viewMatrix,a.origin)),new P("localOrigin",a=>a.origin));let r=a=>M(Gr,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new W("proj",(a,i)=>i.camera.projectionMatrix),new W("view",(a,i)=>Se(zr,i.camera.viewMatrix,r(i))),new x("localOrigin",(a,i)=>r(i)))}var zr=ee(),Gr=p();function Ur(e){e.uniforms.add(new W("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}var ct=class extends A{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){let t=this._parameterNames,r={key:this.key};for(let a of t)r[a]=this[a];return r}};function zt(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),e.constValue!=null)Object.defineProperty(t,r,{get:()=>e.constValue});else{let a=t._parameterNames.length-1,i=e.count||2,s=Math.ceil(Math.log2(i)),n=t._parameterBits??[0],l=0;for(;n[l]+s>16;)l++,l>=n.length&&n.push(0);t._parameterBits=n;let v=n[l],d=(1<<s)-1<<v;n[l]+=s,Object.defineProperty(t,r,{get(){return this[a]},set(b){if(this[a]!==b&&(this[a]=b,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+b<<v&d,typeof b!="number"&&typeof b!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof b)}})}}}var dt=class extends ct{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};u([zt()],dt.prototype,"instancedDoublePrecision",void 0),u([zt()],dt.prototype,"hasModelTransformation",void 0);var Vr=ge();function Ts(e,t){let r=t.hasModelTransformation,a=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new W("model",s=>s.modelTransformation??qe)),e.vertex.uniforms.add(new Y("normalLocalOriginFromModel",s=>(fr(Vr,s.modelTransformation??qe),Vr)))),t.instanced&&a&&(e.attributes.add(c.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(c.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(c.INSTANCEMODEL,"mat3"),e.attributes.add(c.INSTANCEMODELNORMAL,"mat3"));let i=e.vertex;a&&(i.include(tt,t),i.uniforms.add(new P("viewOriginHi",(s,n)=>Sr(M(mt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),mt)),new P("viewOriginLo",(s,n)=>_r(M(mt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),mt)))),i.code.add(o`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?o`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(o`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===m.Normal&&(Ur(i),i.code.add(o`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var mt=p();function Br(e){e.vertex.code.add(o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.int(B.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.int(B.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.int(B.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.int(B.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var Te=class extends S{constructor(t,r){super(t,"int",f.Pass,(a,i,s)=>a.setUniform1i(t,r(i,s)))}};function Po(e){return Math.abs(e*e*e)}function Oo(e,t,r){let a=r.parameters;return Ht.scale=Math.min(a.divisor/(t-a.offset),1),Ht.factor=Po(e),Ht}function Ro(e,t){return Lt(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function Wr(e,t,r,a){return Ro(e,Oo(t,r,a))}var ws={curvatureDependent:{min:{curvature:Ne(10),tiltAngle:Ne(12),scaleFallOffFactor:.5},max:{curvature:Ne(70),tiltAngle:Ne(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0};var Ht={scale:0,factor:0,minScaleFactor:0};var ut=ar();function js(e,t,r,a,i,s){if(e.visible)if(e.boundingInfo){lr(e.type===Ye.Mesh);let n=t.tolerance;Yr(e.boundingInfo,r,a,n,i,s)}else{let n=e.attributes.get(c.POSITION),l=n.indices;Jr(r,a,0,l.length/3,l,n,void 0,i,s)}}var Ao=p();function Yr(e,t,r,a,i,s){if(e==null)return;let n=Io(t,r,Ao);if(ir(ut,e.bbMin),sr(ut,e.bbMax),i?.applyToAabb(ut),wo(ut,t,n,a)){let{primitiveIndices:l,position:v}=e,d=l?l.length:v.indices.length/3;if(d>No){let b=e.getChildren();if(b!==void 0){for(let F of b)Yr(F,t,r,a,i,s);return}}Jr(t,r,0,d,v.indices,v,l,i,s)}}var kr=p();function Jr(e,t,r,a,i,s,n,l,v){if(n)return Lo(e,t,r,a,i,s,n,l,v);let{data:d,stride:b}=s,F=e[0],G=e[1],ie=e[2],I=t[0]-F,w=t[1]-G,N=t[2]-ie;for(let y=r,j=3*r;y<a;++y){let E=b*i[j++],T=d[E++],R=d[E++],U=d[E];E=b*i[j++];let k=d[E++],se=d[E++],ne=d[E];E=b*i[j++];let le=d[E++],ce=d[E++],me=d[E];l!=null&&([T,R,U]=l.applyToVertex(T,R,U,y),[k,se,ne]=l.applyToVertex(k,se,ne,y),[le,ce,me]=l.applyToVertex(le,ce,me,y));let oe=k-T,J=se-R,Z=ne-U,X=le-T,K=ce-R,$=me-U,de=w*$-K*N,Re=N*X-$*I,Ae=I*K-X*w,V=oe*de+J*Re+Z*Ae;if(Math.abs(V)<=Number.EPSILON)continue;let z=F-T,ue=G-R,fe=ie-U,q=z*de+ue*Re+fe*Ae;if(V>0){if(q<0||q>V)continue}else if(q>0||q<V)continue;let Q=ue*Z-J*fe,Le=fe*oe-Z*z,Ie=z*J-oe*ue,pe=I*Q+w*Le+N*Ie;if(V>0){if(pe<0||q+pe>V)continue}else if(pe>0||q+pe<V)continue;let he=(X*Q+K*Le+$*Ie)/V;he>=0&&v(he,Zr(oe,J,Z,X,K,$,kr),y,!1)}}function Lo(e,t,r,a,i,s,n,l,v){let{data:d,stride:b}=s,F=e[0],G=e[1],ie=e[2],I=t[0]-F,w=t[1]-G,N=t[2]-ie;for(let y=r;y<a;++y){let j=n[y],E=3*j,T=b*i[E++],R=d[T++],U=d[T++],k=d[T];T=b*i[E++];let se=d[T++],ne=d[T++],le=d[T];T=b*i[E];let ce=d[T++],me=d[T++],oe=d[T];l!=null&&([R,U,k]=l.applyToVertex(R,U,k,y),[se,ne,le]=l.applyToVertex(se,ne,le,y),[ce,me,oe]=l.applyToVertex(ce,me,oe,y));let J=se-R,Z=ne-U,X=le-k,K=ce-R,$=me-U,de=oe-k,Re=w*de-$*N,Ae=N*K-de*I,V=I*$-K*w,z=J*Re+Z*Ae+X*V;if(Math.abs(z)<=Number.EPSILON)continue;let ue=F-R,fe=G-U,q=ie-k,Q=ue*Re+fe*Ae+q*V;if(z>0){if(Q<0||Q>z)continue}else if(Q>0||Q<z)continue;let Le=fe*X-Z*q,Ie=q*J-X*ue,pe=ue*Z-J*fe,he=I*Le+w*Ie+N*pe;if(z>0){if(he<0||Q+he>z)continue}else if(he>0||Q+he<z)continue;let Zt=(K*Le+$*Ie+de*pe)/z;Zt>=0&&v(Zt,Zr(J,Z,X,K,$,de,kr),j,!1)}}var jr=p(),qr=p();function Zr(e,t,r,a,i,s,n){return M(jr,e,t,r),M(qr,a,i,s),or(n,jr,qr),rr(n,n),n}function Io(e,t,r){return M(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function wo(e,t,r,a){return Do(e,t,r,a,1/0)}function Do(e,t,r,a,i){let s=(e[0]-a-t[0])*r[0],n=(e[3]+a-t[0])*r[0],l=Math.min(s,n),v=Math.max(s,n),d=(e[1]-a-t[1])*r[1],b=(e[4]+a-t[1])*r[1];if(v=Math.min(v,Math.max(d,b)),v<0||(l=Math.max(l,Math.min(d,b)),l>v))return!1;let F=(e[2]-a-t[2])*r[2],G=(e[5]+a-t[2])*r[2];return v=Math.min(v,Math.max(F,G)),!(v<0)&&(l=Math.max(l,Math.min(F,G)),!(l>v)&&l<i)}function qs(e,t,r,a,i){let s=(r.screenLength||0)*e.pixelRatio;i!=null&&(s=Wr(s,a,t,i));let n=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return ve(n*t,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Gt(e,t){let r=t?Gt(t):{};for(let a in e){let i=e[a];i?.forEach&&(i=Fo(i)),i==null&&a in r||(r[a]=i)}return r}function Xr(e,t){let r=!1;for(let a in t){let i=t[a];i!==void 0&&(Array.isArray(i)?e[a]===null?(e[a]=i.slice(),r=!0):Kt(e[a],i)&&(r=!0):e[a]!==i&&(r=!0,e[a]=i))}return r}function Fo(e){let t=[];return e.forEach(r=>t.push(r)),t}var Kr={multiply:1,ignore:2,replace:3,tint:4},No=1e3;function $s(e,t){t.hasSymbolColors?(e.include(Br),e.attributes.add(c.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Te("colorMixMode",r=>Kr[r.colorMixMode])),e.vertex.code.add(o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function rn(e,t){t.hasVertexColors?(e.attributes.add(c.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function $r(e){e.vertex.code.add(o`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(o`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Qr(e){e.uniforms.add(new x("screenSizePerspectiveAlignment",t=>zo(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}function zo(e){return M(Ho,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}var Ho=p();function vn(e,t){let r=e.vertex;t.hasVerticalOffset?(Uo(r),t.hasScreenSizePerspective&&(e.include($r),Qr(r),Hr(e.vertex,t)),r.code.add(o`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?o`vec3 worldNormal = normalize(worldPos + localOrigin);`:o`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?o`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(o`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var Go=ze();function Uo(e){e.uniforms.add(new L("verticalOffset",(t,r)=>{let{minWorldLength:a,maxWorldLength:i,screenLength:s}=t.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return H(Go,s*l,n,a,i)}))}var ft=class extends S{constructor(t,r,a){super(t,"vec4",f.Pass,(i,s,n)=>i.setUniform4fv(t,r(s,n)),a)}};var pt=class extends S{constructor(t,r,a){super(t,"float",f.Pass,(i,s,n)=>i.setUniform1fv(t,r(s,n)),a)}};var _=class extends We{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};u([g()],_.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),u([g()],_.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),u([g()],_.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),u([g()],_.prototype,"DECONFLICTOR_SHOW_GRID",void 0),u([g()],_.prototype,"LABELS_SHOW_BORDER",void 0),u([g()],_.prototype,"TEXT_SHOW_BASELINE",void 0),u([g()],_.prototype,"TEXT_SHOW_BORDER",void 0),u([g()],_.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),u([g()],_.prototype,"OVERLAY_SHOW_CENTER",void 0),u([g()],_.prototype,"SHOW_POI",void 0),u([g()],_.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),u([g()],_.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),u([g()],_.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),u([g()],_.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),u([g()],_.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),u([g()],_.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),u([g()],_.prototype,"I3S_TREE_SHOW_TILES",void 0),u([g()],_.prototype,"I3S_SHOW_MODIFICATIONS",void 0),u([g()],_.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),u([g()],_.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),u([g()],_.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),u([g()],_.prototype,"LINE_WIREFRAMES",void 0),_=u([Be("esri.views.3d.support.DebugFlags")],_);var Vo=new _;var eo,to;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(eo||(eo={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(to||(to={}));var el=ee(),tl=p(),rl=ee();var Ee=new Map([[c.POSITION,0],[c.NORMAL,1],[c.NORMALCOMPRESSED,1],[c.UV0,2],[c.COLOR,3],[c.COLORFEATUREATTRIBUTE,3],[c.SIZE,4],[c.TANGENT,4],[c.CENTEROFFSETANDDISTANCE,5],[c.SYMBOLCOLOR,5],[c.FEATUREATTRIBUTE,6],[c.INSTANCEFEATUREATTRIBUTE,6],[c.INSTANCECOLOR,7],[c.OBJECTANDLAYERIDCOLOR,7],[c.INSTANCEOBJECTANDLAYERIDCOLOR,7],[c.INSTANCEMODEL,8],[c.INSTANCEMODELNORMAL,12],[c.INSTANCEMODELORIGINHI,11],[c.INSTANCEMODELORIGINLO,15]]);var ro=class extends xr{constructor(t,r){super(),this.type=Ye.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=Ee,this._pp0=De(0,0,1),this._pp1=De(0,0,0),this._parameters=Gt(t,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(t){return!1}setParameters(t,r=!0){Xr(this._parameters,t)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}shouldRender(t){return this.isVisible()&&this.isVisibleForOutput(t.output)&&(!this.parameters.isDecoration||t.bindParameters.decorations===gr.ON)&&(this.parameters.renderOccluded&t.renderOccludedMask)!=0}isVisibleForOutput(t){return!0}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(t){return this.isVisible()&&this.parameters.renderOccluded===t}intersectDraped(t,r,a,i,s,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(t,r,a,this._pp0,this._pp1,s)}};var Ut;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(Ut||(Ut={}));var ht=8;function vt(e,t){let{vertex:r,attributes:a}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&a.add(c.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new x("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new x("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new x("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new x("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new Y("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new x("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",ht),r.uniforms.add(new pt("vvColorValues",i=>i.vvColor.values,ht),new ft("vvColorColors",i=>i.vvColor.colors,ht)),r.code.add(o`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(o`vec4 vvColor() { return vec4(1.0); }`)}function oo(e){e.fragment.code.add(o`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.float(.001)}) { discard; } }
  `)}function gt(e,t){jo(e,t,new xe("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function jo(e,t,r){let a=e.fragment;switch(t.alphaDiscardMode!==te.Mask&&t.alphaDiscardMode!==te.MaskBlend||a.uniforms.add(r),t.alphaDiscardMode){case te.Blend:return e.include(oo);case te.Opaque:a.code.add(o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case te.Mask:a.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case te.MaskBlend:e.fragment.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function ao(e,t){let r=t.output===m.ObjectAndLayerIdColor,a=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a?e.attributes.add(c.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(o`
     void forwardObjectAndLayerIdColor() {
      ${r?a?o`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o``} }`),e.fragment.code.add(o`
      void outputObjectAndLayerIdColor() {
        ${r?o`fragColor = objectAndLayerIdColorVarying;`:o``} }`)}function xt(e){e.code.add(o`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function io(e,t){switch(t.output){case m.Shadow:case m.ShadowHighlight:case m.ShadowExcludeHighlight:e.fragment.include(xt),e.fragment.code.add(o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case m.LinearDepth:e.fragment.include(br),e.fragment.code.add(o`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var qo=It(1,1,0,1),Yo=It(1,0,1,1);function so(e){e.fragment.uniforms.add(new O("depthTexture",(t,r)=>r.mainDepth)),e.fragment.constants.add("occludedHighlightFlag","vec4",qo).add("unoccludedHighlightFlag","vec4",Yo),e.fragment.code.add(o`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}function _c(e,t){let{vertex:r,fragment:a}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==te.Opaque;switch(t.output){case m.LinearDepth:case m.Shadow:case m.ShadowHighlight:case m.ShadowExcludeHighlight:case m.ObjectAndLayerIdColor:lt(r,t),e.include(st,t),e.include(_e,t),e.include(vt,t),e.include(io,t),e.include(it,t),e.include(ao,t),Ft(e),e.varyings.add("depth","float"),i&&a.uniforms.add(new O("tex",s=>s.texture)),r.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(gt,t),a.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${i?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===m.ObjectAndLayerIdColor?o`outputObjectAndLayerIdColor();`:o`outputDepth(depth);`}
          }
        `);break;case m.Normal:{lt(r,t),e.include(st,t),e.include($e,t),e.include(Lr,t),e.include(_e,t),e.include(vt,t),i&&a.uniforms.add(new O("tex",n=>n.texture)),t.normalType===C.ScreenDerivative&&e.varyings.add("vPositionView","vec3");let s=t.normalType===C.Attribute||t.normalType===C.Compressed;r.code.add(o`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${s?o`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:o`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(it,t),e.include(gt,t),a.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${i?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===C.ScreenDerivative?o`vec3 normal = screenDerivativeNormal(vPositionView);`:o`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case m.Highlight:lt(r,t),e.include(st,t),e.include(_e,t),e.include(vt,t),i&&a.uniforms.add(new O("tex",s=>s.texture)),r.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(it,t),e.include(gt,t),e.include(so,t),a.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${i?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}var Me,no;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(Me||(Me={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(no||(no={}));var Bt={required:[]},Cc={required:[m.LinearDepth]},Pc={required:[m.CompositeColor]},Oc={required:[m.Highlight]},lo={required:[m.Depth,m.Normal]},Vt=class extends We{consumes(){return Bt}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(t){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(t){return!1}},St=class extends Vt{};var ye=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}reload(){return Xt(this,null,function*(){return this._module=yield this._loadModule(),this._module})}};var Ce=class{constructor(t,r,a){this.release=a,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}destroy(){this._program=we(this._program),this._pipeline=this._configuration=null}reload(t){we(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return mr.TRIANGLES}getPipeline(t,r,a){return this._pipeline}initializeConfiguration(t,r){}};var Pe=class{constructor(t,r,a){this._context=t,this._locations=a,this._textures=new Map,this._freeTextureUnits=new $t({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=pr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if(r?.glName==null){let i=this._textures.get(t);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(t)),null}let a=this._textures.get(t);return a==null?(a=this._allocTextureUnit(r),this._textures.set(t,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(t,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((t,r)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(r,t.unit)}),this._fragmentUniforms?.forEach(t=>{t.type!=="sampler2D"&&t.type!=="samplerCube"||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};var Ue=class e extends Ce{initializeProgram(t){return new Pe(t.rctx,e.shader.get().build(),Ee)}initializePipeline(){return Ze({colorWrite:Je})}};Ue.shader=new ye(Er,()=>import("./chunk-4NBIY6KA.js"));var co="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";var Wt=class extends A{constructor(){super(...arguments),this.projScale=1}},_t=class extends Wt{constructor(){super(...arguments),this.intensity=1}},jt=class extends A{},bt=class extends jt{constructor(){super(...arguments),this.blurSize=nr()}};var Ve=class e extends Ce{initializeProgram(t){return new Pe(t.rctx,e.shader.get().build(),Ee)}initializePipeline(){return Ze({colorWrite:Je})}};Ve.shader=new ye(yr,()=>import("./chunk-PAQBV74D.js"));var Tt;(function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(Tt||(Tt={}));var Et;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"})(Et||(Et={}));var Oe=2,Mt=class extends St{constructor(e){super(e),this._context=null,this._passParameters=new _t,this._drawParameters=new bt,this.produces=new Map([[Et.SSAO,()=>this._produces()]])}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return this._enableTime!=null&&this._context!=null&&this._getCameraElevation()<5e5}consumes(){return this._produces()?lo:Bt}initializeRenderContext(e){this._context=e,this.addHandles([er(()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(Tt.SSAO),t=>t?this._enable():this._disable(),tr)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=we(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(this._enableTime!=null||!this._context)return;let e=Uint8Array.from(atob(co),r=>r.charCodeAt(0)),t=new hr;t.wrapMode=Dt.CLAMP_TO_EDGE,t.pixelFormat=dr.RGB,t.wrapMode=Dt.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new vr(this._context.renderContext.rctx,t,e),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ve)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(Ue)),this._enableTime=0,this._context?.requestRender()}renderNode(e,t,r){let a=e.bindParameters,i=r?.get("normals"),s=i?.getTexture(),n=i?.getTexture(ur);if(this._enableTime==null||this._context==null||!s||!n)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=e.time);let l=e.rctx,v=a.camera,d=this.view.qualitySettings.fadeDuration,b=v.relativeElevation,F=ve((5e5-b)/2e5,0,1),G=d>0?Math.min(d,e.time-this._enableTime)/d:1,ie=G*F;this._passParameters.normalTexture=s,this._passParameters.depthTexture=n,this._passParameters.projScale=1/v.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Jo/Mr(v)**6*ie;let I=v.fullViewport[2],w=v.fullViewport[3],N=Math.round(I/Oe),y=Math.round(w/Oe),j=this._context.fbos,E=j.acquire(I,w,"ssao input",Me.RG);l.unbindTexture(E.fbo.colorTexture),l.bindFramebuffer(E.fbo),l.setViewport(0,0,I,w),l.bindTechnique(this._ssaoTechnique,a,this._passParameters,this._drawParameters),l.screen.draw();let T=j.acquire(N,y,"ssao blur",Me.RED);l.unbindTexture(T.fbo.colorTexture),l.bindFramebuffer(T.fbo),this._drawParameters.colorTexture=E.getTexture(),wt(this._drawParameters.blurSize,0,Oe/w),l.bindTechnique(this._blurTechnique,a,this._passParameters,this._drawParameters),l.setViewport(0,0,N,y),l.screen.draw(),E.release();let R=j.acquire(N,y,"ssao",Me.RED);return l.unbindTexture(R.fbo.colorTexture),l.bindFramebuffer(R.fbo),l.setViewport(0,0,I,w),l.setClearColor(1,1,1,0),l.clear(cr.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=T.getTexture(),wt(this._drawParameters.blurSize,Oe/I,0),l.bindTechnique(this._blurTechnique,a,this._passParameters,this._drawParameters),l.setViewport(0,0,N,y),l.screen.draw(),l.setViewport4fv(v.fullViewport),T.release(),G<1&&this._context.requestRender(),R}};u([g({constructOnly:!0})],Mt.prototype,"view",void 0),u([g()],Mt.prototype,"_context",void 0),Mt=u([Be("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Mt);var Jo=.5;function mo(e,t){let r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new O("ssaoTex",(a,i)=>i.ssao?.getTexture())),r.constants.add("blurSizePixelsInverse","float",1/Oe),r.code.add(o`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(o`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Yt(e){e.uniforms.add(new x("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function kt(e){e.uniforms.add(new x("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Jt(e){Yt(e.fragment),kt(e.fragment),e.fragment.code.add(o`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function uo(e){let t=e.fragment.code;t.add(o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(o`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(o`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function yt(e){e.vertex.code.add(o`const float PI = 3.141592653589793;`),e.fragment.code.add(o`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function fo(e,t){let r=e.fragment.code;e.include(yt),t.pbrMode!==h.Normal&&t.pbrMode!==h.Schematic&&t.pbrMode!==h.Simplified&&t.pbrMode!==h.TerrainWithWater||(r.add(o`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(o`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==h.Normal&&t.pbrMode!==h.Schematic||(e.include(uo),r.add(o`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(o`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(o`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(o`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ho(e,t){let r=e.fragment,a=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;a===0?(r.uniforms.add(new x("lightingAmbientSH0",(i,s)=>M(po,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0]))),r.code.add(o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(r.uniforms.add(new L("lightingAmbientSH_R",(i,s)=>H(re,s.lighting.sh.r[0],s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3])),new L("lightingAmbientSH_G",(i,s)=>H(re,s.lighting.sh.g[0],s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3])),new L("lightingAmbientSH_B",(i,s)=>H(re,s.lighting.sh.b[0],s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3]))),r.code.add(o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(r.uniforms.add(new x("lightingAmbientSH0",(i,s)=>M(po,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0])),new L("lightingAmbientSH_R1",(i,s)=>H(re,s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3],s.lighting.sh.r[4])),new L("lightingAmbientSH_G1",(i,s)=>H(re,s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3],s.lighting.sh.g[4])),new L("lightingAmbientSH_B1",(i,s)=>H(re,s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3],s.lighting.sh.b[4])),new L("lightingAmbientSH_R2",(i,s)=>H(re,s.lighting.sh.r[5],s.lighting.sh.r[6],s.lighting.sh.r[7],s.lighting.sh.r[8])),new L("lightingAmbientSH_G2",(i,s)=>H(re,s.lighting.sh.g[5],s.lighting.sh.g[6],s.lighting.sh.g[7],s.lighting.sh.g[8])),new L("lightingAmbientSH_B2",(i,s)=>H(re,s.lighting.sh.b[5],s.lighting.sh.b[6],s.lighting.sh.b[7],s.lighting.sh.b[8]))),r.code.add(o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==h.Normal&&t.pbrMode!==h.Schematic||r.code.add(o`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var po=p(),re=ze();var Ct=class extends S{constructor(t,r){super(t,"bool",f.Pass,(a,i,s)=>a.setUniform1b(t,r(i,s)))}};var Md=p();var vo=.4;var Dd=p();function $o(e){e.constants.add("ambientBoostFactor","float",vo)}function Qo(e){e.uniforms.add(new xe("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function kd(e,t){let r=e.fragment;switch(e.include(mo,t),t.pbrMode!==h.Disabled&&e.include(fo,t),e.include(ho,t),e.include(yt),r.code.add(o`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===h.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),$o(r),Qo(r),Yt(r),r.code.add(o`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?o`normalize(vPosWorld)`:o`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),kt(r),r.code.add(o`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case h.Disabled:case h.WaterOnIntegratedMesh:case h.Water:e.include(Jt),r.code.add(o`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case h.Normal:case h.Schematic:r.code.add(o`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(o`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new Ct("hasFillLights",(a,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(o`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new xe("lightingSpecularStrength",(a,i)=>i.lighting.mainLight.specularStrength),new xe("lightingEnvironmentStrength",(a,i)=>i.lighting.mainLight.environmentStrength)),r.code.add(o`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(o`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==h.Schematic||t.hasColorTexture?o`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:o`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case h.Simplified:case h.TerrainWithWater:e.include(Jt),r.code.add(o`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:t.pbrMode;case h.COUNT:}}function Qd(e,t){if(!t.multipassEnabled)return;e.fragment.include(Tr),e.fragment.uniforms.add(new O("terrainDepthTexture",(a,i)=>i.multipassTerrain.linearDepth?.getTexture()),new Xe("nearFar",(a,i)=>i.camera.nearFar));let r=t.occlusionPass;e.fragment.code.add(o`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?o`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:o`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}var Pt=class extends S{constructor(t,r,a){super(t,"mat4",f.Draw,(i,s,n,l)=>i.setUniformMatrix4fv(t,r(s,n,l)),a)}};var Ot=class extends S{constructor(t,r,a){super(t,"mat4",f.Pass,(i,s,n)=>i.setUniformMatrix4fv(t,r(s,n)),a)}};function vu(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Ot("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),go(e))}function gu(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Pt("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),go(e))}function go(e){let t=e.fragment;t.include(xt),t.uniforms.add(new O("shadowMap",(r,a)=>a.shadowMap.depthTexture),new Te("numCascades",(r,a)=>a.shadowMap.numCascades),new L("cascadeDistances",(r,a)=>a.shadowMap.cascadeDistances)),t.code.add(o`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function xo(e){e.code.add(o`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Mu(e){e.include(xo),e.code.add(o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.int(B.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.int(B.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(B.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.int(B.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(B.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{m as a,ea as b,ta as c,$e as d,C as e,D as f,_e as g,Pr as h,x as i,Or as j,h as k,Ua as l,Ee as m,js as n,qs as o,ro as p,Ut as q,Et as r,Rr as s,Y as t,Lr as u,Ar as v,ye as w,Ce as x,Pe as y,Ri as z,Ii as A,it as B,st as C,Hr as D,lt as E,zt as F,dt as G,Ts as H,$s as I,rn as J,vn as K,vt as L,gt as M,_c as N,mo as O,Yt as P,kt as Q,fo as R,$o as S,Qo as T,kd as U,Qd as V,vu as W,gu as X,Mu as Y};
