import{a as C,b as O,c as F,d as N,e as U}from"./chunk-JT7Q7RMM.js";import{b as $,c as R,d as _,e as z}from"./chunk-6ZLU3GYX.js";import{c as k,d as G}from"./chunk-SEF6VOKB.js";import{b as u,g as t,h,i as D,j as B,l as V}from"./chunk-XN46SLSO.js";import{a as L}from"./chunk-UGL7UJES.js";import{a as x,f as b,g as y}from"./chunk-QKPKWNQQ.js";import{d as A}from"./chunk-XSJRPCD6.js";import{d as S}from"./chunk-JR27VNVT.js";import{a as E}from"./chunk-7G763D5W.js";import{a as m,b as j}from"./chunk-UDMTFKLM.js";import{a as w}from"./chunk-L5A2ASNG.js";import{a as p,b as P}from"./chunk-3OLRRKKD.js";import{a as M}from"./chunk-6EZU2A2D.js";import{a as g}from"./chunk-TREMRME7.js";import{a as T}from"./chunk-C2FNHCAJ.js";import{a as v}from"./chunk-ELGDZDOQ.js";import{a as s}from"./chunk-DOFADBK3.js";import{a as d}from"./chunk-VVVTRG42.js";import{a as c}from"./chunk-Y6C54FDT.js";import{b as r}from"./chunk-GMW3QDVG.js";import{a as f}from"./chunk-UVJ5D37D.js";function q(o){let a=new T,{vertex:l,fragment:i,varyings:n}=a;return P(l,o),a.include(x),n.add("vpos","vec3"),a.include(E,o),a.include(A,o),a.include(S,o),o.output===s.Color&&(p(a.vertex,o),a.include(v,o),a.include(y,o),o.offsetBackfaces&&a.include(C),o.instancedColor&&a.attributes.add(f.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),o.multipassEnabled&&n.add("depth","float"),a.include(u,o),a.include(b,o),a.include(O,o),a.include(L,o),l.uniforms.add(new M("externalColor",e=>e.externalColor)),n.add("vcolorExt","vec4"),l.code.add(r`
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
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${o.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${o.multipassEnabled?r`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),o.output===s.Color&&(a.include(w,o),a.include(z,o),a.include($,o),a.include(F,o),a.include(o.instancedDoublePrecision?k:G,o),a.include(j,o),p(a.fragment,o),D(i),R(i),_(i),i.uniforms.add(l.uniforms.get("localOrigin"),l.uniforms.get("view"),new d("ambient",e=>e.ambient),new d("diffuse",e=>e.diffuse),new c("opacity",e=>e.opacity),new c("layerOpacity",e=>e.layerOpacity)),o.hasColorTexture&&i.uniforms.add(new g("tex",e=>e.texture)),a.include(h,o),a.include(V,o),i.include(U),o.transparencyPassType===m.ColorAlpha&&(a.outputs.add("fragColor","vec4",0),a.outputs.add("fragAlpha","float",1)),B(i),i.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${o.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${o.hasColorTexture?r`
                vec4 texColor = texture(tex, ${o.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${o.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${o.pbrMode===t.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${o.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":o.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${o.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${o.snowCover?r`albedo = mix(albedo, vec3(1), 0.9);`:r``}
        ${r`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${o.pbrMode===t.Normal||o.pbrMode===t.Schematic?o.spherical?r`vec3 normalGround = normalize(vpos + localOrigin);`:r`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r``}
        ${o.pbrMode===t.Normal||o.pbrMode===t.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${o.snowCover?r`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${o.transparencyPassType===m.ColorAlpha?r`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),a.include(N,o),a}var Lo=Object.freeze(Object.defineProperty({__proto__:null,build:q},Symbol.toStringTag,{value:"Module"}));export{q as a,Lo as b};
