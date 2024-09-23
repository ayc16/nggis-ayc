import{a as T}from"./chunk-UGL7UJES.js";import{g as C}from"./chunk-QKPKWNQQ.js";import{c as b}from"./chunk-DUZ52FW3.js";import{a as P}from"./chunk-VLBUZRRG.js";import{a as R}from"./chunk-7G763D5W.js";import{a as v,b as j,d as A}from"./chunk-UDMTFKLM.js";import{a as h}from"./chunk-L5A2ASNG.js";import{a as y,b as w}from"./chunk-3OLRRKKD.js";import{a as x}from"./chunk-6EZU2A2D.js";import{a as V}from"./chunk-C2FNHCAJ.js";import{a as i}from"./chunk-DOFADBK3.js";import{a as u}from"./chunk-Y6C54FDT.js";import{b as o}from"./chunk-GMW3QDVG.js";import{a as d}from"./chunk-UVJ5D37D.js";var t;(function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical",e[e.Cross=2]="Cross",e[e.ForwardDiagonal=3]="ForwardDiagonal",e[e.BackwardDiagonal=4]="BackwardDiagonal",e[e.DiagonalCross=5]="DiagonalCross",e[e.COUNT=6]="COUNT"})(t||(t={}));var g=.70710678118,$=g,O=.08715574274;function z(e){let a=new V,l=e.multipassEnabled&&e.output===i.Color,{vertex:r,fragment:n,attributes:s,varyings:p}=a;w(r,e),a.include(C,e),a.include(T,e),a.include(R,e),a.include(P,e),e.draped?r.uniforms.add(new u("worldToScreenRatio",(m,c)=>1/c.screenToPCSRatio)):s.add(d.BOUNDINGRECT,"mat3"),s.add(d.POSITION,"vec3"),s.add(d.UVMAPSPACE,"vec4"),e.vvColor&&s.add(d.COLORFEATUREATTRIBUTE,"float"),p.add("vColor","vec4"),p.add("vpos","vec3"),p.add("vuv","vec2"),l&&p.add("depth","float"),r.uniforms.add(new x("uColor",m=>m.color));let f=e.style===t.ForwardDiagonal||e.style===t.BackwardDiagonal||e.style===t.DiagonalCross;return f&&r.code.add(o`
      const mat2 rotate45 = mat2(${o.float(g)}, ${o.float(-$)},
                                 ${o.float($)}, ${o.float(g)});
    `),e.draped||(y(r,e),r.uniforms.add(new u("worldToScreenPerDistanceRatio",(m,c)=>1/c.camera.perScreenPixelRatio)),r.code.add(o`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),r.code.add(o`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),r.code.add(o`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${o.float(O)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),r.code.add(o`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${f?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${f?" * rotate45":""};

      ${e.draped?"":o`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${o.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),r.code.add(o`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${l?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${e.hasVertexColors?"vColor *= uColor;":e.vvColor?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),a.include(h,e),n.include(A),e.draped&&n.uniforms.add(new u("texelSize",(m,c)=>1/c.camera.pixelRatio)),e.output===i.Highlight&&a.include(b,e),l&&a.include(j,e),e.output!==i.Highlight&&(n.code.add(o`
      const float lineWidth = ${o.float(e.lineWidth)};
      const float spacing = ${o.float(e.patternSpacing)};
      const float spacingINV = ${o.float(1/e.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||n.code.add(o`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),e.transparencyPassType===v.ColorAlpha&&(a.outputs.add("fragColor","vec4",0),a.outputs.add("fragAlpha","float",1)),n.code.add(o`
    void main() {
      discardBySlice(vpos);
      ${l?"terrainDepthTest(depth);":""}
      vec4 color = vColor;
      color = highlightSlice(color, vpos);

      ${e.output!==i.Highlight?o`color.a *= ${L(e)};`:""}

      ${e.output===i.ObjectAndLayerIdColor?o`color.a = 1.0;`:""}

      if (color.a < ${o.float(.001)}) {
        discard;
      }

      ${e.output===i.Color?o`fragColor = color; ${e.transparencyPassType===v.ColorAlpha?o`
                    fragColor = premultiplyAlpha(fragColor);
                    fragAlpha = fragColor.a;`:""}`:""}
      ${e.output===i.Highlight?o`outputHighlight();`:""}
      ${e.output===i.ObjectAndLayerIdColor?o`outputObjectAndLayerIdColor();`:""}
    }
  `),a}function L(e){function a(l){return e.draped?o`coverage(vuv.${l}, texelSize)`:o`sampleAA(vuv.${l})`}switch(e.style){case t.ForwardDiagonal:case t.Horizontal:return a("y");case t.BackwardDiagonal:case t.Vertical:return a("x");case t.DiagonalCross:case t.Cross:return o`
        1.0 - (1.0 - ${a("x")}) * (1.0 - ${a("y")})
      `;default:return"0.0"}}var Z=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}));export{t as a,z as b,Z as c};
