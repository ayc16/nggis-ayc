import{a as T}from"./chunk-IHA7ZQ4Q.js";import{a as x}from"./chunk-TREMRME7.js";import{a as g}from"./chunk-VYC75ESO.js";import{a as d}from"./chunk-VVVTRG42.js";import{a as h}from"./chunk-CETY2ZOK.js";import{a as _,b as o}from"./chunk-GMW3QDVG.js";import{a as m}from"./chunk-RHABF3KL.js";import{d as f}from"./chunk-OW7DVBQB.js";import{a as c}from"./chunk-UVJ5D37D.js";import{z as R}from"./chunk-GISCFF3Z.js";import{f as u}from"./chunk-MLSR6YE6.js";var s;function N(e,t){switch(t.textureCoordinateType){case s.Default:return e.attributes.add(c.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case s.Compressed:return e.attributes.add(c.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case s.Atlas:return e.attributes.add(c.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(c.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case s.None:return void e.vertex.code.add(o`void forwardTextureCoordinates() {}`);case s.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(s||(s={}));function y(e){e.fragment.code.add(o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function b(e,t){switch(e.include(N,t),t.textureCoordinateType){case s.Default:case s.Compressed:return void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case s.Atlas:return e.include(y),void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:t.textureCoordinateType;case s.None:case s.COUNT:return}}var p=class{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(t,r){return this._technique=this._techniques.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return f.LOADED}};var C=class extends p{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this._textureId=t.textureId,this._acquire(t.textureId,r=>this._texture=r),this._acquire(t.normalTextureId,r=>this._textureNormal=r),this._acquire(t.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(t.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(t.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=u(this._texture),this._textureNormal=u(this._textureNormal),this._textureEmissive=u(this._textureEmissive),this._textureOcclusion=u(this._textureOcclusion),this._textureMetallicRoughness=u(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?f.LOADED:f.LOADING}get textureBindParameters(){return new v(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=u(this._texture),this._textureId=t,this._acquire(this._textureId,r=>this._texture=r))}_acquire(t,r){if(t==null)return void r(null);let l=this._textures.acquire(t);if(R(l))return++this._numLoading,void l.then(n=>{if(this._disposed)return u(n),void r(null);r(n)}).finally(()=>--this._numLoading);r(l)}},v=class extends _{constructor(t=null,r=null,l=null,n=null,a=null,M,L){super(),this.texture=t,this.textureNormal=r,this.textureEmissive=l,this.textureOcclusion=n,this.textureMetallicRoughness=a,this.scale=M,this.normalTextureTransformMatrix=L}};var i;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(i||(i={}));function se(e,t){let r=e.fragment,l=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&l&&e.include(b,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(o`vec3 mrr;
vec3 emission;
float occlusion;`);let n=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(n===m.Pass?new x("texMetallicRoughness",a=>a.textureMetallicRoughness):new h("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(o`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(n===m.Pass?new x("texEmission",a=>a.textureEmissive):new h("texEmission",a=>a.textureEmissive)),r.code.add(o`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(n===m.Pass?new x("texOcclusion",a=>a.textureOcclusion):new h("texOcclusion",a=>a.textureOcclusion)),r.code.add(o`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o`float getBakedOcclusion() { return 1.0; }`),n===m.Pass?r.uniforms.add(new d("emissionFactor",a=>a.emissiveFactor),new d("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new g("emissionFactor",a=>a.emissiveFactor),new g("mrrFactors",a=>a.mrrFactors)),r.code.add(o`
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
float getBakedOcclusion() { return 1.0; }`)}function w(e){e.uniforms.add(new d("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function H(e){e.uniforms.add(new d("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function le(e){w(e.fragment),H(e.fragment),e.fragment.code.add(o`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function S(e){let t=e.fragment.code;t.add(o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}function ve(e,t){let r=e.fragment.code;e.include(T),t.pbrMode!==i.Normal&&t.pbrMode!==i.Schematic&&t.pbrMode!==i.Simplified&&t.pbrMode!==i.TerrainWithWater||(r.add(o`float normalDistribution(float NdotH, float roughness)
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
}`)),t.pbrMode!==i.Normal&&t.pbrMode!==i.Schematic||(e.include(S),r.add(o`struct PBRShadingInfo
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
}`))}function ge(e,t){let r=e.fragment.code;e.include(T),r.add(o`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(o`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(o`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(o`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(o`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}export{s as a,N as b,b as c,p as d,C as e,v as f,i as g,se as h,w as i,H as j,le as k,ve as l,ge as m};
