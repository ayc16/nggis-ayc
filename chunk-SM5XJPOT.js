import{a as u}from"./chunk-TFNTL6MK.js";import{a as P}from"./chunk-LCQ5TU4N.js";import{a as N,b as D,c as j,d as E,e as I}from"./chunk-LXNCH6Z7.js";import{d as f}from"./chunk-SEF6VOKB.js";import{j as U}from"./chunk-XN46SLSO.js";import{a as w,e as C,f as x,g as d}from"./chunk-QKPKWNQQ.js";import{c as F}from"./chunk-DUZ52FW3.js";import{a as A}from"./chunk-VLBUZRRG.js";import{n as L,o as v,w as O,x as p}from"./chunk-UKQRI6U4.js";import{a as m,b as T,d as _}from"./chunk-UDMTFKLM.js";import{a as n}from"./chunk-L5A2ASNG.js";import{a as z,b as S,c as V}from"./chunk-3OLRRKKD.js";import{a as b}from"./chunk-JCJ5KQ5Q.js";import{a as R}from"./chunk-C2FNHCAJ.js";import{a as l}from"./chunk-DOFADBK3.js";import{a as s}from"./chunk-VVVTRG42.js";import{a as y}from"./chunk-Y6C54FDT.js";import{b as r}from"./chunk-GMW3QDVG.js";import{a as c}from"./chunk-UVJ5D37D.js";import{c as h}from"./chunk-PDBA6QOJ.js";var g=8;function M(o,a){let t=c.FEATUREVALUE;o.attributes.add(t,"vec4");let e=o.vertex;e.code.add(r`
  bool isCapVertex() {
    return ${t}.w == 1.0;
  }
  `),e.uniforms.add(new b("size",i=>i.size)),a.vvSize?(e.uniforms.add(new s("vvSizeMinSize",i=>i.vvSize.minSize),new s("vvSizeMaxSize",i=>i.vvSize.maxSize),new s("vvSizeOffset",i=>i.vvSize.offset),new s("vvSizeFactor",i=>i.vvSize.factor)),e.code.add(r`
    vec2 getSize() {
      return size * clamp(vvSizeOffset + ${t}.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):e.code.add(r`vec2 getSize(){
return size;
}`),a.vvOpacity?(e.constants.add("vvOpacityNumber","int",g),e.uniforms.add(new v("vvOpacityValues",i=>i.vvOpacity.values,g),new v("vvOpacityOpacities",i=>i.vvOpacity.opacityValues,g)),e.code.add(r`
    vec4 applyOpacity(vec4 color) {
      float value = ${t}.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):e.code.add(r`vec4 applyOpacity(vec4 color){
return color;
}`),a.vvColor?(e.constants.add("vvColorNumber","int",p),e.uniforms.add(new v("vvColorValues",i=>i.vvColor.values,p),new L("vvColorColors",i=>i.vvColor.colors,p)),e.code.add(r`
    vec4 getColor() {
      float value = ${t}.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):e.code.add(r`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),o.include(w),o.attributes.add(c.PROFILERIGHT,"vec4"),o.attributes.add(c.PROFILEUP,"vec4"),o.attributes.add(c.PROFILEVERTEXANDNORMAL,"vec4"),e.code.add(r`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),e.code.add(r`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),e.code.add(r`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`),e.code.add(r`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}var B=class extends O{constructor(){super(...arguments),this.size=h(1,1)}};function $(o){let a=new R,{vertex:t,fragment:e}=a;switch(S(t,o),a.varyings.add("vpos","vec3"),a.include(M,o),o.output!==l.Color&&o.output!==l.ObjectAndLayerIdColor||(a.include(d,o),a.include(f,o),a.include(x,o),a.include(A,o),a.varyings.add("vnormal","vec3"),a.varyings.add("vcolor","vec4"),o.multipassEnabled&&a.varyings.add("depth","float"),t.code.add(r`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${o.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${o.output===l.Color?"forwardLinearDepth();":""}
        forwardObjectAndLayerIdColor();

        vcolor = getColor();
      }
    `)),a.include(T,o),o.output){case l.Color:a.include(n,o),a.include(I,o),a.include(D,o),a.include(f,o),a.include(P,o),z(e,o),j(e),E(e),e.uniforms.add(t.uniforms.get("localOrigin"),new s("ambient",i=>i.ambient),new s("diffuse",i=>i.diffuse),new s("specular",i=>i.specular),new y("opacity",i=>i.opacity)),e.include(_),o.transparencyPassType===m.ColorAlpha&&(a.outputs.add("fragColor","vec4",0),a.outputs.add("fragAlpha","float",1)),U(e),e.code.add(r`
        void main() {
          discardBySlice(vpos);
          ${o.multipassEnabled?"terrainDepthTest(depth);":""}

          shadingParams.viewDirection = normalize(vpos - cameraPosition);
          shadingParams.normalView = vnormal;
          vec3 normal = shadingNormal(shadingParams);
          float ssao = evaluateAmbientOcclusionInverse();

          float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
          ${o.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":o.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
          vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
          float combinedOpacity = vcolor.a * opacity;
          albedo += 0.25 * specular; // don't completely ignore specular for now

          vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
          fragColor = vec4(shadedColor, combinedOpacity);
          fragColor = highlightSlice(fragColor, vpos);
          ${o.transparencyPassType===m.ColorAlpha?r`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
        }
      `);break;case l.Depth:a.include(d,o),t.code.add(r`void main() {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(n,o),e.code.add(r`void main() {
discardBySlice(vpos);
}`);break;case l.Shadow:case l.ShadowHighlight:case l.ShadowExcludeHighlight:case l.ViewshedShadow:a.include(d,o),C(a),a.varyings.add("depth","float"),t.code.add(r`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),a.include(n,o),a.include(N,o),e.code.add(r`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);break;case l.ObjectAndLayerIdColor:a.include(n,o),e.code.add(r`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`);break;case l.Normal:a.include(d,o),a.include(u,o),V(t),a.varyings.add("vnormal","vec3"),t.code.add(r`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(n,o),e.code.add(r`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`);break;case l.Highlight:a.include(d,o),a.include(u,o),a.varyings.add("vnormal","vec3"),t.code.add(r`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(n,o),a.include(F,o),e.code.add(r`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return a}var Co=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"}));export{B as a,$ as b,Co as c};
