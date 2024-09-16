import{a as J,d as H,l as G}from"./chunk-B5ZLUQHV.js";import{d as B}from"./chunk-SXPOFH4U.js";import{a as M}from"./chunk-IHA7ZQ4Q.js";import{b as n}from"./chunk-XSJRPCD6.js";import{a as V}from"./chunk-VLBUZRRG.js";import{a as S,b as $,d as k}from"./chunk-UDMTFKLM.js";import{a as W}from"./chunk-L5A2ASNG.js";import{a as I,b as N,d as C}from"./chunk-3OLRRKKD.js";import{a as x}from"./chunk-6EZU2A2D.js";import{a as j}from"./chunk-JCJ5KQ5Q.js";import{a as _}from"./chunk-TREMRME7.js";import{a as U}from"./chunk-C2FNHCAJ.js";import{a as c}from"./chunk-DOFADBK3.js";import{a as z}from"./chunk-ZN6YLP6I.js";import{a as O}from"./chunk-CI3GTVLF.js";import{a as f}from"./chunk-Y6C54FDT.js";import{b as t}from"./chunk-GMW3QDVG.js";import{a as g}from"./chunk-UVJ5D37D.js";import{a as E,e as F}from"./chunk-M2GLXRA2.js";import{b as w}from"./chunk-ZVHU7VE3.js";import{a}from"./chunk-W3WDPWBE.js";function q(e){return e.pattern.map(i=>Math.round(i*e.pixelRatio))}function K(e){if(e==null)return 1;let i=q(e);return Math.floor(i.reduce((d,s)=>d+s))}function Q(e){return q(e).reduce((i,d)=>Math.max(i,d))}function X(e){return e==null?F:e.length===4?e:w(ee,e[0],e[1],e[2],1)}var ee=E();function Z(e,i){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),i.stippleEnabled?te(e,i):oe(e)}function te(e,i){let d=!(i.draped&&i.stipplePreferContinuous),{vertex:s,fragment:u}=e;u.include(O),i.draped||(I(s,i),s.uniforms.add(new f("worldToScreenPerDistanceRatio",(o,l)=>1/l.camera.perScreenPixelRatio)),s.code.add(t`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),s.code.add(t`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${re};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),s.code.add(t`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),s.code.add(t`
    if (segmentLengthPseudoScreen >= ${d?"patternLength":"1e4"}) {
  `),C(s),s.code.add(t`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),u.uniforms.add(new _("stipplePatternTexture",o=>o.stippleTexture),new f("stipplePatternSDFNormalizer",o=>ie(o.stipplePattern)),new f("stipplePatternPixelSizeInv",o=>1/L(o))),u.code.add(t`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),i.stippleOffColorEnabled?(u.uniforms.add(new x("stippleOffColor",o=>X(o.stippleOffColor))),u.code.add(t`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):u.code.add(t`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function oe(e){e.fragment.code.add(t`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function ie(e){return e?(Math.floor(.5*(Q(e)-1))+.5)/e.pixelRatio:1}function L(e){let i=e.stipplePattern;return i?K(e.stipplePattern)/i.pixelRatio:1}var re=t.float(.4);var v;(function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"})(v||(v={}));var r=class extends B{constructor(){super(...arguments),this.output=c.Color,this.capType=v.BUTT,this.transparencyPassType=S.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}};a([n({count:c.COUNT})],r.prototype,"output",void 0),a([n({count:v.COUNT})],r.prototype,"capType",void 0),a([n({count:S.COUNT})],r.prototype,"transparencyPassType",void 0),a([n()],r.prototype,"occluder",void 0),a([n()],r.prototype,"hasSlicePlane",void 0),a([n()],r.prototype,"hasPolygonOffset",void 0),a([n()],r.prototype,"writeDepth",void 0),a([n()],r.prototype,"draped",void 0),a([n()],r.prototype,"stippleEnabled",void 0),a([n()],r.prototype,"stippleOffColorEnabled",void 0),a([n()],r.prototype,"stipplePreferContinuous",void 0),a([n()],r.prototype,"roundJoins",void 0),a([n()],r.prototype,"applyMarkerOffset",void 0),a([n()],r.prototype,"vvSize",void 0),a([n()],r.prototype,"vvColor",void 0),a([n()],r.prototype,"vvOpacity",void 0),a([n()],r.prototype,"falloffEnabled",void 0),a([n()],r.prototype,"innerColorEnabled",void 0),a([n()],r.prototype,"hasOccludees",void 0),a([n()],r.prototype,"multipassEnabled",void 0),a([n()],r.prototype,"cullAboveGround",void 0),a([n()],r.prototype,"wireframe",void 0),a([n()],r.prototype,"objectAndLayerIdColorInstanced",void 0),a([n({constValue:!1})],r.prototype,"occlusionPass",void 0),a([n({constValue:!0})],r.prototype,"hasVvInstancing",void 0),a([n({constValue:!0})],r.prototype,"hasSliceTranslatedView",void 0);var y=1;function ae(e){let i=new U,{attributes:d,varyings:s,constants:u,vertex:o,fragment:l}=i;i.include(M),i.include(H,e),i.include(Z,e);let b=e.applyMarkerOffset&&!e.draped;b&&(o.uniforms.add(new f("markerScale",p=>p.markerScale)),i.include(G,{space:J.World,draped:!1})),i.include(V,e),N(o,e),o.uniforms.add(new z("inverseProjectionMatrix",(p,m)=>m.camera.inverseProjectionMatrix),new j("nearFar",(p,m)=>m.camera.nearFar),new f("miterLimit",p=>p.join!=="miter"?0:p.miterLimit),new x("viewport",(p,m)=>m.camera.fullViewport)),o.constants.add("LARGE_HALF_FLOAT","float",65500),d.add(g.POSITION,"vec3"),d.add(g.PREVPOSITION,"vec3"),d.add(g.NEXTPOSITION,"vec3"),d.add(g.SUBDIVISIONFACTOR,"float"),d.add(g.UV0,"vec2"),s.add("vColor","vec4"),s.add("vpos","vec3"),s.add("vLineDistance","float"),s.add("vLineWidth","float");let D=e.multipassEnabled&&e.output===c.Color;D&&s.add("depth","float");let R=e.stippleEnabled;R&&s.add("vLineSizeInv","float"),u.add("aaWidth","float",e.stippleEnabled?0:1);let h=e.capType===v.ROUND,T=e.stippleEnabled&&h,A=e.falloffEnabled||T;A&&s.add("vLineDistanceNorm","float"),h&&(s.add("vSegmentSDF","float"),s.add("vReverseSegmentSDF","float")),o.code.add(t`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),o.code.add(t`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),o.code.add(t`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${D?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),C(o),o.code.add(t`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${R?t`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),b&&o.code.add(t`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),o.code.add(t`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(e.stippleEnabled||h)&&o.code.add(t`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${h?t`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),o.code.add(t`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?o.code.add(t`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?t`min(1.0, subdivisionFactor * ${t.float((y+2)/(y+1))})`:t`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):o.code.add(t`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);let Y=e.capType!==v.BUTT;return o.code.add(t`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${Y?t`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),o.code.add(t`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${A?t`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),h&&o.code.add(t`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?o.uniforms.add(new f("worldToScreenRatio",(p,m)=>1/m.screenToPCSRatio)):o.code.add(t`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),o.code.add(t`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?o.code.add(t`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):o.code.add(t`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),o.uniforms.add(new f("stipplePatternPixelSize",p=>L(p))),o.code.add(t`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),o.code.add(t`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),D&&i.include($,e),i.include(W,e),l.include(k),l.code.add(t`
  void main() {
    discardBySlice(vpos);
    ${D?"terrainDepthTest(depth);":""}
  `),e.wireframe?l.code.add(t`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(h&&l.code.add(t`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${t.float(.001)}) {
          discard;
        }
      `),T?l.code.add(t`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${t.float(.001)}, stippleCoverage);
      `):l.code.add(t`float stippleAlpha = getStippleAlpha();`),e.output!==c.ObjectAndLayerIdColor&&l.code.add(t`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`),l.uniforms.add(new x("intrinsicColor",p=>p.color)),l.code.add(t`vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(l.uniforms.add(new x("innerColor",p=>p.innerColor??p.color),new f("innerWidth",(p,m)=>p.innerWidth*m.camera.pixelRatio)),l.code.add(t`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),l.code.add(t`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(l.uniforms.add(new f("falloff",p=>p.falloff)),l.code.add(t`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),e.stippleEnabled||l.code.add(t`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),e.transparencyPassType===S.ColorAlpha&&(i.outputs.add("fragColor","vec4",0),i.outputs.add("fragAlpha","float",1)),l.code.add(t`
    ${e.output===c.ObjectAndLayerIdColor?t`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${t.float(.001)}) {
      discard;
    }

    ${e.output===c.Color?t`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===c.Color&&e.transparencyPassType===S.ColorAlpha?t`
            fragColor = premultiplyAlpha(fragColor);
            fragAlpha = fragColor.a;`:""}
    ${e.output===c.Highlight?t`fragColor = vec4(1.0);`:""}
    ${e.output===c.ObjectAndLayerIdColor?t`outputObjectAndLayerIdColor();`:""}
  }
  `),i}var nt=Object.freeze(Object.defineProperty({__proto__:null,build:ae,ribbonlineNumRoundJoinSubdivisions:y},Symbol.toStringTag,{value:"Module"}));export{v as a,r as b,y as c,ae as d,nt as e};
