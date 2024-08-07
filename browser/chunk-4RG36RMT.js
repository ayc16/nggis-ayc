import{A as F,B as g,C as R,D as h,E as L,H as B,I as _,J as z,K as W,L as k,M as y,N as j,O as Q,Q as q,R as J,S as Y,T as K,U as X,V as w,W as Z,X as H,Y as C,a as d,d as V,e as p,f as m,g as M,h as U,i as T,k as f,l as O,s as E,t as s,u as A,z as $}from"./chunk-FKKLCRMQ.js";import{a as S}from"./chunk-LFPKLGKU.js";import{a as P}from"./chunk-SUFGB5QC.js";import{a as I}from"./chunk-PV5OLJIT.js";import{b as c,c as D,d as u,i as G}from"./chunk-FN7HZGXJ.js";import{b as r}from"./chunk-GMW3QDVG.js";import{a as N}from"./chunk-RHABF3KL.js";import{a as v}from"./chunk-H5IJXG2U.js";import{c as n}from"./chunk-7C6Z24SS.js";import{d as b}from"./chunk-2EA2KAER.js";function ee(e,o){let a=e.fragment;switch(a.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case l.None:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case l.View:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case l.WindingOrder:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:o.doubleSidedMode;case l.COUNT:}}var l;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(l||(l={}));function oe(e,o){let a=e.fragment;o.hasVertexTangents?(e.attributes.add(v.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),o.doubleSidedMode===l.WindingOrder?a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),o.textureCoordinateType!==m.None&&(e.include(U,o),a.uniforms.add(o.pbrTextureBindType===N.Pass?new c("normalTexture",t=>t.textureNormal):new P("normalTexture",t=>t.textureNormal)),o.hasNormalTextureTransform&&(a.uniforms.add(new D("scale",t=>t.scale??b)),a.uniforms.add(new s("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??n))),a.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),o.hasNormalTextureTransform&&a.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(r`return tangentSpace * rawNormal;
}`))}function re(e,o){o.hasColorTextureTransform?(e.vertex.uniforms.add(new s("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??n)),e.varyings.add("colorUV","vec2"),e.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardColorUV(){}`)}function ae(e,o){o.hasNormalTextureTransform&&o.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??n)),e.varyings.add("normalUV","vec2"),e.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardNormalUV(){}`)}function te(e,o){o.hasEmissionTextureTransform&&o.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??n)),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardEmissiveUV(){}`)}function ie(e,o){o.hasOcclusionTextureTransform&&o.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??n)),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardOcclusionUV(){}`)}function ne(e,o){o.hasMetallicRoughnessTextureTransform&&o.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??n)),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function me(e){let o=new G,{vertex:a,fragment:t,varyings:x}=o;if(L(a,e),o.include(E),x.add("vpos","vec3"),o.include(k,e),o.include(B,e),o.include(W,e),o.include(re,e),e.output===d.Color||e.output===d.Alpha){o.include(ae,e),o.include(te,e),o.include(ie,e),o.include(ne,e),h(a,e),o.include(V,e),o.include(R,e);let i=e.normalType===p.Attribute||e.normalType===p.Compressed;i&&e.offsetBackfaces&&o.include(F),o.include(oe,e),o.include(A,e),e.instancedColor&&o.attributes.add(v.INSTANCECOLOR,"vec4"),x.add("vPositionLocal","vec3"),o.include(M,e),o.include($,e),o.include(_,e),o.include(z,e),a.uniforms.add(new I("externalColor",se=>se.externalColor)),x.add("vcolorExt","vec4"),e.multipassEnabled&&x.add("depth","float"),a.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case d.Alpha:o.include(g,e),o.include(y,e),o.include(w,e),t.uniforms.add(new u("opacity",i=>i.opacity),new u("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&t.uniforms.add(new c("tex",i=>i.texture)),t.include(C),t.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?r`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case d.Color:o.include(g,e),o.include(X,e),o.include(Q,e),o.include(y,e),o.include(e.instancedDoublePrecision?Z:H,e),o.include(w,e),h(t,e),t.uniforms.add(a.uniforms.get("localOrigin"),new T("ambient",i=>i.ambient),new T("diffuse",i=>i.diffuse),new u("opacity",i=>i.opacity),new u("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&t.uniforms.add(new c("tex",i=>i.texture)),o.include(O,e),o.include(J,e),t.include(C),o.include(ee,e),Y(t),K(t),q(t),t.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===p.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===f.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?r`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===f.Normal||e.pbrMode===f.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===S.Color?r`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return o.include(j,e),o}var fo=Object.freeze(Object.defineProperty({__proto__:null,build:me},Symbol.toStringTag,{value:"Module"}));export{l as a,me as b,fo as c};
