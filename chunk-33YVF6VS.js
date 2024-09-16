import{a as d,b as N,d as T,i as f,j as A,k as M,l as j}from"./chunk-B5ZLUQHV.js";import{a as v,b as k,d as L}from"./chunk-UDMTFKLM.js";import{a as P}from"./chunk-L5A2ASNG.js";import{b as x,c as z,d as w}from"./chunk-3OLRRKKD.js";import{a as m}from"./chunk-6EZU2A2D.js";import{a as y}from"./chunk-JCJ5KQ5Q.js";import{a as g}from"./chunk-TREMRME7.js";import{a as b}from"./chunk-C2FNHCAJ.js";import{a as c}from"./chunk-DOFADBK3.js";import{a as S}from"./chunk-ZN6YLP6I.js";import{a as h}from"./chunk-CI3GTVLF.js";import{a as u}from"./chunk-Y6C54FDT.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as l}from"./chunk-UVJ5D37D.js";function O(e){let r=new b,p=e.multipassEnabled&&e.output===c.Color,i=e.space===d.World;r.include(T,e),r.include(j,e);let{vertex:o,fragment:s}=r;return s.include(h),x(o,e),r.attributes.add(l.POSITION,"vec3"),r.attributes.add(l.PREVPOSITION,"vec3"),r.attributes.add(l.UV0,"vec2"),r.varyings.add("vColor","vec4"),r.varyings.add("vpos","vec3"),r.varyings.add("vUV","vec2"),r.varyings.add("vSize","float"),p&&r.varyings.add("depth","float"),e.hasTip&&r.varyings.add("vLineWidth","float"),o.uniforms.add(new y("nearFar",(t,n)=>n.camera.nearFar),new m("viewport",(t,n)=>n.camera.fullViewport)),o.code.add(a`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),o.code.add(a`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),i?(r.attributes.add(l.NORMAL,"vec3"),z(o),o.constants.add("tiltThreshold","float",.7),o.code.add(a`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):o.code.add(a`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),o.code.add(a`
      #define vecN ${i?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${i?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===N.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===d.Screen&&(o.uniforms.add(new S("inverseProjectionMatrix",(t,n)=>n.camera.inverseProjectionMatrix)),o.code.add(a`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),o.code.add(a`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),o.uniforms.add(new u("perScreenPixelRatio",(t,n)=>n.camera.perScreenPixelRatio)),o.code.add(a`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?`
                if(prev.z > posLeft.z) {
                  vec2 diff = posLeft.xy - posRight.xy;
                  planeOrigin.xy += perpendicular(diff) / 2.0;
                }
              `:""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),w(o),o.code.add(a`void main(void) {
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
float lineWidth = getLineWidth();
float screenMarkerSize = getScreenMarkerSize();
vec4 pos  = view * vec4(position, 1.0);
vec4 prev = view * vec4(prevPosition, 1.0);
clip(pos, prev);`),i?(e.hideOnShortSegments&&o.code.add(a`if (areWorldMarkersHidden(pos, prev)) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
return;
}`),o.code.add(a`pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
vec4 displacedPosScreen = projectAndScale(pos);`)):(o.code.add(a`vec4 posScreen = projectAndScale(pos);
vec4 prevScreen = projectAndScale(prev);
vec4 displacedPosScreen = posScreen;
displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);`),e.space===d.Screen&&o.code.add(a`vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));
vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);
pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`)),o.code.add(a`
        ${p?"depth = pos.z;":""}

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        ${i?"":"vUV *= displacedPosScreen.w;"}

        ${e.hasTip?"vLineWidth = lineWidth;":""}

        vSize = screenMarkerSize;
        vColor = getColor();

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `),p&&r.include(k,e),r.include(P,e),s.uniforms.add(new m("intrinsicColor",t=>t.color),new g("tex",t=>t.markerTexture)),s.include(L),r.constants.add("texelSize","float",1/f),s.code.add(a`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&(r.constants.add("relativeMarkerSize","float",A/f),r.constants.add("relativeTipLineWidth","float",M),s.code.add(a`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${i?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),e.transparencyPassType===v.ColorAlpha&&(r.outputs.add("fragColor","vec4",0),r.outputs.add("fragAlpha","float",1)),r.constants.add("symbolAlphaCutoff","float",.001),s.code.add(a`
  void main() {
    discardBySlice(vpos);
    ${p?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    ${i?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}

    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}

    ${e.output===c.ObjectAndLayerIdColor?a`finalColor.a = 1.0;`:""}

    if (finalColor.a < symbolAlphaCutoff) {
      discard;
    }

    ${e.output===c.Color?a`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===c.Color&&e.transparencyPassType===v.ColorAlpha?a`
            fragColor = premultiplyAlpha(fragColor);
            fragAlpha = fragColor.a;`:""}
    ${e.output===c.Highlight?a`fragColor = vec4(1.0);`:""}
  }
  `),r}var ee=Object.freeze(Object.defineProperty({__proto__:null,build:O},Symbol.toStringTag,{value:"Module"}));export{O as a,ee as b};
