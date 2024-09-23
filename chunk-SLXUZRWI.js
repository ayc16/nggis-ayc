import{a as V,b as N}from"./chunk-LCQ5TU4N.js";import{a as D,b as B,c as W,d as j,e as eo}from"./chunk-JT7Q7RMM.js";import{b as Q,c as Y,d as K,e as X}from"./chunk-6ZLU3GYX.js";import{c as H,d as oo}from"./chunk-SEF6VOKB.js";import{a as A}from"./chunk-LCBWJNVO.js";import{a as l,b as M,c as U,g as x,h as P,j as q,l as J}from"./chunk-XN46SLSO.js";import{a as I}from"./chunk-UGL7UJES.js";import{a as S,f as E,g as L}from"./chunk-QKPKWNQQ.js";import{d as F}from"./chunk-XSJRPCD6.js";import{d as z}from"./chunk-JR27VNVT.js";import{a as G}from"./chunk-7G763D5W.js";import{a as T,b as Z}from"./chunk-UDMTFKLM.js";import{a as $}from"./chunk-L5A2ASNG.js";import{a as g,b as R}from"./chunk-3OLRRKKD.js";import{a as _}from"./chunk-6EZU2A2D.js";import{a as O}from"./chunk-JCJ5KQ5Q.js";import{a as u}from"./chunk-TREMRME7.js";import{a as k}from"./chunk-C2FNHCAJ.js";import{a as b,b as c}from"./chunk-ELGDZDOQ.js";import{a as w,m as s}from"./chunk-DOFADBK3.js";import{a as f}from"./chunk-VVVTRG42.js";import{a as C}from"./chunk-CETY2ZOK.js";import{a as p}from"./chunk-Y6C54FDT.js";import{b as r}from"./chunk-GMW3QDVG.js";import{a as y}from"./chunk-RHABF3KL.js";import{a as d}from"./chunk-UVJ5D37D.js";import{f as h}from"./chunk-PDBA6QOJ.js";import{c as n}from"./chunk-7C6Z24SS.js";function ro(o,e){let a=o.fragment;e.hasVertexTangents?(o.attributes.add(d.TANGENT,"vec4"),o.varyings.add("vTangent","vec4"),e.doubleSidedMode===N.WindingOrder?a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
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
}`),e.textureCoordinateType!==l.None&&(o.include(U,e),a.uniforms.add(e.pbrTextureBindType===y.Pass?new u("normalTexture",t=>t.textureNormal):new C("normalTexture",t=>t.textureNormal)),e.hasNormalTextureTransform&&(a.uniforms.add(new O("scale",t=>t.scale??h)),a.uniforms.add(new s("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??n))),a.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&a.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(r`return tangentSpace * rawNormal;
}`))}function ao(o,e){e.hasColorTextureTransform?(o.vertex.uniforms.add(new s("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??n)),o.varyings.add("colorUV","vec2"),o.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardColorUV(){}`)}function to(o,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==l.None?(o.vertex.uniforms.add(new s("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??n)),o.varyings.add("normalUV","vec2"),o.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardNormalUV(){}`)}function io(o,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==l.None?(o.vertex.uniforms.add(new s("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??n)),o.varyings.add("emissiveUV","vec2"),o.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardEmissiveUV(){}`)}function no(o,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==l.None?(o.vertex.uniforms.add(new s("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??n)),o.varyings.add("occlusionUV","vec2"),o.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardOcclusionUV(){}`)}function so(o,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==l.None?(o.vertex.uniforms.add(new s("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??n)),o.varyings.add("metallicRoughnessUV","vec2"),o.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function mo(o){let e=new k,{vertex:a,fragment:t,varyings:m}=e;if(R(a,o),e.include(S),m.add("vpos","vec3"),e.include(G,o),e.include(F,o),e.include(z,o),e.include(ao,o),o.output===w.Color){e.include(to,o),e.include(io,o),e.include(no,o),e.include(so,o),g(a,o),e.include(b,o),e.include(L,o);let v=o.normalType===c.Attribute||o.normalType===c.Compressed;v&&o.offsetBackfaces&&e.include(D),e.include(ro,o),e.include(A,o),o.instancedColor&&e.attributes.add(d.INSTANCECOLOR,"vec4"),m.add("vPositionLocal","vec3"),e.include(M,o),e.include(E,o),e.include(B,o),e.include(I,o),a.uniforms.add(new _("externalColor",i=>i.externalColor)),m.add("vcolorExt","vec4"),o.multipassEnabled&&m.add("depth","float"),a.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${o.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${v?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${o.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${v&&o.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${o.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),e.include($,o),e.include(X,o),e.include(Q,o),e.include(W,o),e.include(o.instancedDoublePrecision?H:oo,o),e.include(Z,o),g(t,o),t.uniforms.add(a.uniforms.get("localOrigin"),new f("ambient",i=>i.ambient),new f("diffuse",i=>i.diffuse),new p("opacity",i=>i.opacity),new p("layerOpacity",i=>i.layerOpacity)),o.hasColorTexture&&t.uniforms.add(new u("tex",i=>i.texture)),e.include(P,o),e.include(J,o),t.include(eo),e.include(V,o),Y(t),K(t),q(t),o.transparencyPassType===T.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),t.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${o.multipassEnabled?"terrainDepthTest(depth);":""}
        ${o.hasColorTexture?r`
                vec4 texColor = texture(tex, ${o.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${o.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${o.normalType===c.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${o.pbrMode===x.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${o.receiveShadows?"readShadowMap(vpos, linearDepth)":o.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${o.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${o.hasNormalTexture?r`
                mat3 tangentSpace = ${o.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${o.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${o.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${o.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${o.pbrMode===x.Normal||o.pbrMode===x.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${o.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${o.transparencyPassType===T.ColorAlpha?r`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return e.include(j,o),e}var ue=Object.freeze(Object.defineProperty({__proto__:null,build:mo},Symbol.toStringTag,{value:"Module"}));export{mo as a,ue as b};
