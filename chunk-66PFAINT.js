import{a as f}from"./chunk-TFNTL6MK.js";import{a as U,c as j}from"./chunk-BJQH3R2Y.js";import{b as M,d as W}from"./chunk-SEF6VOKB.js";import{g as P,i as A,j as F,k as z}from"./chunk-XN46SLSO.js";import{f as D,g as N}from"./chunk-QKPKWNQQ.js";import{c as O}from"./chunk-DUZ52FW3.js";import{a as T}from"./chunk-VLBUZRRG.js";import{a as p,b as L,d as I}from"./chunk-UDMTFKLM.js";import{a as m}from"./chunk-L5A2ASNG.js";import{a as b,b as C}from"./chunk-3OLRRKKD.js";import{a as v}from"./chunk-6EZU2A2D.js";import{a as y}from"./chunk-JCJ5KQ5Q.js";import{a as u}from"./chunk-TREMRME7.js";import{a as E}from"./chunk-C2FNHCAJ.js";import{a as i}from"./chunk-DOFADBK3.js";import{a as c}from"./chunk-Y6C54FDT.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as d}from"./chunk-UVJ5D37D.js";import{a as x}from"./chunk-PDBA6QOJ.js";import{b as _}from"./chunk-2ETHV3H2.js";import{a as h}from"./chunk-M2GLXRA2.js";import{b as w}from"./chunk-ZVHU7VE3.js";function g(o){o.fragment.uniforms.add(new u("texWaveNormal",e=>e.waveNormal),new u("texWavePerturbation",e=>e.wavePerturbation),new v("waveParams",e=>w(B,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new y("waveDirection",e=>_(R,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),o.include(U),o.fragment.code.add(a`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}var B=h(),R=x();function V(o){let e=new E,{vertex:r,fragment:t}=e;C(r,o),e.include(N,o),e.attributes.add(d.POSITION,"vec3"),e.attributes.add(d.UV0,"vec2");let s=new v("waterColor",n=>n.color);if(o.output===i.Color&&o.draped)return e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(a`
        void main(void) {
          if (waterColor.a < ${a.float(.001)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.uniforms.add(s),t.code.add(a`void main() {
fragColor = waterColor;
}`),e;switch(o.output===i.Color&&(e.include(f,o),e.include(D,o),e.varyings.add("vuv","vec2"),e.varyings.add("vpos","vec3"),e.varyings.add("vnormal","vec3"),e.varyings.add("vtbnMatrix","mat3"),o.multipassEnabled&&e.varyings.add("depth","float"),r.uniforms.add(s),r.code.add(a`
      void main(void) {
        if (waterColor.a < ${a.float(.001)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${o.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${o.output===i.Color?"forwardLinearDepth();":""}
      }
    `)),e.include(L,o),o.output){case i.Color:e.include(z),e.include(M,{pbrMode:P.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(g),e.include(m,o),e.include(W,o),e.include(j,o),t.uniforms.add(s,new c("timeElapsed",n=>n.timeElapsed),r.uniforms.get("view"),r.uniforms.get("localOrigin")),b(t,o),t.include(I),o.transparencyPassType===p.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),A(t),F(t),t.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${o.multipassEnabled?"terrainDepthTest(depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${o.receiveShadows?a`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${o.transparencyPassType===p.ColorAlpha?a`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `);break;case i.Normal:e.include(f,o),e.include(g,o),e.include(m,o),e.varyings.add("vpos","vec3"),e.varyings.add("vuv","vec2"),r.uniforms.add(s),r.code.add(a`
        void main(void) {
          if (waterColor.a < ${a.float(.001)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.uniforms.add(new c("timeElapsed",n=>n.timeElapsed)),t.code.add(a`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case i.Highlight:e.include(O,o),e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(a`
      void main(void) {
        if (waterColor.a < ${a.float(.001)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),e.include(m,o),t.code.add(a`void main() {
discardBySlice(vpos);
outputHighlight();
}`);break;case i.ObjectAndLayerIdColor:e.include(T,o),e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(a`
      void main(void) {
        if (waterColor.a < ${a.float(.001)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `),e.include(m,o),t.code.add(a`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`)}return e}var De=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}));export{V as a,De as b};
