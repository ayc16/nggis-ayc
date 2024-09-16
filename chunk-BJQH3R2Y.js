import{i as oo,j as eo,m as to}from"./chunk-XN46SLSO.js";import{a as N}from"./chunk-WICM2VEE.js";import{a as X}from"./chunk-UTDAYTD2.js";import{a as Y}from"./chunk-JCJ5KQ5Q.js";import{a as M}from"./chunk-TREMRME7.js";import{a as f}from"./chunk-ZN6YLP6I.js";import{a as b}from"./chunk-VVVTRG42.js";import{a as c}from"./chunk-Y6C54FDT.js";import{a as $}from"./chunk-5H3X7WYB.js";import{b as n}from"./chunk-GMW3QDVG.js";import{a as J}from"./chunk-RHABF3KL.js";import{a as q,c as j}from"./chunk-56SRKZHP.js";import{a as Q}from"./chunk-MCO7DSFO.js";import{a as K,d as O}from"./chunk-ALWV3RJ2.js";import{a as m}from"./chunk-TQAPQODA.js";import{j as _}from"./chunk-EBWCXIFH.js";import{b as I}from"./chunk-76YVRX2R.js";import{a as E,b as R,e as V,l as W,s as B}from"./chunk-OZF6BMOL.js";import{a as S,c as Z}from"./chunk-GJP6PTKT.js";import{a as C}from"./chunk-VOYK3LZF.js";import{L as d,W as p}from"./chunk-AUTL5LCV.js";import{S as l}from"./chunk-KUJG22IX.js";import{a as s}from"./chunk-W3WDPWBE.js";function Po(o){o.fragment.code.add(n`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function ro(o){o.fragment.code.add(n`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function ao(o){o.fragment.code.add(n`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}function io(o,t){let e=o.fragment;e.include(X),e.uniforms.add(new Y("nearFar",(r,a)=>a.camera.nearFar)),e.uniforms.add(new M("depthMap",(r,a)=>a.depth?.attachment)),e.uniforms.add(new f("proj",(r,a)=>a.camera.projectionMatrix)),e.uniforms.add(new c("invResolutionHeight",(r,a)=>1/a.camera.height)),e.uniforms.add(new f("reprojectionMatrix",(r,a)=>a.ssr.reprojectionMatrix)),e.code.add(n`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}var u,y;function no(o){return o!=null&&!o.running}(function(o){o[o.RENDERING=0]="RENDERING",o[o.FADING=1]="FADING",o[o.FINISHED=2]="FINISHED"})(u||(u={})),function(o){o[o.RG=0]="RG",o[o.BA=1]="BA"}(y||(y={}));var z,D=z=class extends p{constructor(o){super(o),this.type="cloudy",this.cloudCover=.5}clone(){return new z({cloudCover:this.cloudCover})}};s([m({cloudy:"cloudy"})],D.prototype,"type",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],D.prototype,"cloudCover",void 0),D=z=s([l("esri.views.3d.environment.CloudyWeather")],D);var so=D;var L,x=L=class extends p{constructor(o){super(o),this.type="foggy",this.fogStrength=.5}clone(){return new L({fogStrength:this.fogStrength})}};s([m({foggy:"foggy"})],x.prototype,"type",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],x.prototype,"fogStrength",void 0),x=L=s([l("esri.views.3d.environment.FoggyWeather")],x);var co=x;var G,g=G=class extends p{constructor(o){super(o),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new G({cloudCover:this.cloudCover,precipitation:this.precipitation})}};s([m({rainy:"rainy"})],g.prototype,"type",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],g.prototype,"cloudCover",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],g.prototype,"precipitation",void 0),g=G=s([l("esri.views.3d.environment.RainyWeather")],g);var lo=g;var H,h=H=class extends p{constructor(o){super(o),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new H({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};s([m({snowy:"snowy"})],h.prototype,"type",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],h.prototype,"cloudCover",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],h.prototype,"precipitation",void 0),s([d({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],h.prototype,"snowCover",void 0),h=H=s([l("esri.views.3d.environment.SnowyWeather")],h);var po=h;var k,P=k=class extends p{constructor(o){super(o),this.type="sunny",this.cloudCover=.5}clone(){return new k({cloudCover:this.cloudCover})}};s([m({sunny:"sunny"})],P.prototype,"type",void 0),s([d({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],P.prototype,"cloudCover",void 0),P=k=s([l("esri.views.3d.environment.SunnyWeather")],P);var U=P;var vo={key:"type",base:U,typeMap:{sunny:U,cloudy:so,rainy:lo,snowy:po,foggy:co}},Le=Object.keys(vo.typeMap);var v=1e4,mo=1e5;var uo=class{constructor(){this.readChannels=y.RG,this.renderingStage=u.FINISHED,this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=S(),this.parallax=new A,this.parallaxNew=new A,this.pointOnGround=S(),this.fadeMode=i.HIDE,this.fadeFactor=0,this.opacity=0}updateParallax(t){let e=this.parallax,r=E(t.eye);if(e.radiusCurvatureCorrectionFactor=.84*Math.sqrt(Math.max(r*r-C.radius*C.radius,0))/r,j(fo,e.anchorPointClouds,w),_(e.transform,O,w[3],w),this.fadeMode===i.CROSS_FADE){let a=this.parallaxNew;j(fo,a.anchorPointClouds,w),_(a.transform,O,w[3],w)}}updateFading(t,e,r,a){this.isFading&&this._advanceFading(r,a),this._evaluateFading(t,e,r)}_evaluateFading(t,e,r){let a=t.relativeElevation,F=this._calculateDistanceToAnchorPoint(t);if((a>1.7*v||a<-v||F>Fo)&&this.opacity>0)this._setFade(i.HIDE,r);else if(!this.isFading){if((a>v||a<-.35*v||F>wo)&&this.opacity>0)this._setFade(i.FADE_OUT,r);else if(a<=v&&a>=-.35*v&&e===Q.IDLE&&no(this.data)){if(this.opacity===0)return void this._setFade(i.FADE_IN,r);(F>go||this.renderingStage===u.FADING)&&this._setFade(i.CROSS_FADE,r)}}}_advanceFading(t,e){this._switchReadChannels(),this._updateAnchorPoint(),this._advanceFadingFactorAndOpacity(t,e)}_advanceFadingFactorAndOpacity(t,e){if(this.fadeFactor<1)return this.fadeFactor=e?I((t-this.startTime)/(yo*e),0,1):1,this.fadeMode===i.FADE_OUT&&(this.opacity=1-this.fadeFactor),this.fadeMode===i.FADE_IN&&(this.opacity=this.fadeFactor),void(this.fadeMode===i.CROSS_FADE&&(this.opacity=1));this.fadeFactor=0,this.fadeMode===i.FADE_OUT&&(this.opacity=0),this.fadeMode===i.FADE_IN&&(this.opacity=1),this.fadeMode===i.CROSS_FADE&&(this.opacity=1),this.fadeMode=i.NONE}_switchReadChannels(){let t=this.fadeMode===i.CROSS_FADE&&this.fadeFactor===1,e=this.fadeMode===i.FADE_IN&&this.fadeFactor===0;this.renderingStage===u.FADING&&(t||e)&&(this.readChannels=1-this.readChannels,this.renderingStage=u.FINISHED)}_calculateDistanceToAnchorPoint(t){return B(this.pointOnGround,t.eye),W(this.pointOnGround,this.pointOnGround,C.radius),E(V(Co,this.parallax.anchorPointClouds,this.pointOnGround))}_updateAnchorPoint(){this.fadeMode===i.CROSS_FADE&&(this.fadeFactor===0&&R(this.parallaxNew.anchorPointClouds,this.pointOnGround),this.fadeFactor===1&&R(this.parallax.anchorPointClouds,this.parallaxNew.anchorPointClouds)),this.fadeMode===i.FADE_IN&&this.fadeFactor===0&&R(this.parallax.anchorPointClouds,this.pointOnGround)}_setFade(t,e){switch(t){case i.HIDE:this.opacity=0;break;case i.FADE_OUT:this.opacity=1;break;case i.FADE_IN:this.opacity=0;break;case i.CROSS_FADE:this.opacity=1}this.fadeMode=t,this.fadeFactor=0,this.startTime=e}get isFading(){return this.fadeMode===i.FADE_OUT||this.fadeMode===i.FADE_IN||this.fadeMode===i.CROSS_FADE}},i;(function(o){o[o.NONE=0]="NONE",o[o.HIDE=1]="HIDE",o[o.FADE_OUT=2]="FADE_OUT",o[o.FADE_IN=3]="FADE_IN",o[o.CROSS_FADE=4]="CROSS_FADE"})(i||(i={}));var A=class{constructor(){this.anchorPointClouds=S(),this.radiusCurvatureCorrectionFactor=0,this.transform=K()}},fo=Z(0,0,1),w=q(),Co=S(),yo=1.25,go=34e3,wo=64e3,Fo=2e5;var T=class extends ${constructor(t,e){super(t,"samplerCube",J.Pass,(r,a,F)=>r.bindTexture(t,e(a,F)))}};function ho(o){let t=o.fragment;t.uniforms.add(new f("rotationMatrixClouds",(e,r)=>r.cloudsFade.parallax.transform),new f("rotationMatrixCloudsCrossFade",(e,r)=>r.cloudsFade.parallaxNew.transform),new b("anchorPosition",(e,r)=>r.cloudsFade.parallax.anchorPointClouds),new b("anchorPositionCrossFade",(e,r)=>r.cloudsFade.parallaxNew.anchorPointClouds),new c("cloudsHeight",()=>mo),new c("radiusCurvatureCorrectionFactor",(e,r)=>r.cloudsFade.parallax.radiusCurvatureCorrectionFactor),new c("totalFadeInOut",(e,r)=>1-r.cloudsFade.opacity),new c("crossFadeAnchorFactor",(e,r)=>I(r.cloudsFade.fadeFactor,0,1)),new T("cubeMap",(e,r)=>r.cloudsFade.data?.cubeMap?.colorTexture??null),new N("crossFade",(e,r)=>r.cloudsFade.fadeMode===i.CROSS_FADE),new N("readChannelsRG",(e,r)=>r.cloudsFade.readChannels===y.RG),new N("fadeTextureChannels",(e,r)=>r.cloudsFade.renderingStage===u.FADING)),t.constants.add("planetRadius","float",C.radius),t.code.add(n`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),t.code.add(n`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),t.code.add(n`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),oo(t),eo(t),t.code.add(n`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),t.code.add(n`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = texture(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),t.code.add(n`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),t.code.add(n`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),t.code.add(n`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}function xt(o,t){o.include(to,t),o.include(ao),o.include(ro),t.hasCloudsReflections&&o.include(ho,t),t.hasScreenSpaceReflections&&o.include(io,t);let e=o.fragment;e.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),e.code.add(n`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),e.uniforms.add(new c("lightingSpecularStrength",(r,a)=>a.lighting.mainLight.specularStrength),new c("lightingEnvironmentStrength",(r,a)=>a.lighting.mainLight.environmentStrength)),e.code.add(n`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.hasCloudsReflections&&e.code.add(n`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),t.hasScreenSpaceReflections?(e.uniforms.add(new f("view",(r,a)=>a.camera.viewMatrix),new M("lastFrameColorTexture",(r,a)=>a.ssr.lastFrameColor?.getTexture()),new c("fadeFactorSSR",(r,a)=>a.ssr.fadeFactor)),e.code.add(n`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`)):e.code.add(n`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.hasCloudsReflections?t.hasScreenSpaceReflections?e.code.add(n`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):e.code.add(n`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):e.code.add(n`return waterRenderedColor;
}`)}export{Po as a,uo as b,xt as c};
