import{a as w}from"./chunk-CURQPDM4.js";import{a as m}from"./chunk-JCJ5KQ5Q.js";import{a as x}from"./chunk-C2FNHCAJ.js";import{a as n}from"./chunk-ZN6YLP6I.js";import{a as r}from"./chunk-Y6C54FDT.js";import{b as i}from"./chunk-GMW3QDVG.js";import{a}from"./chunk-UVJ5D37D.js";import{a as v}from"./chunk-PDBA6QOJ.js";import{a as p}from"./chunk-ALWV3RJ2.js";import{b as c}from"./chunk-2ETHV3H2.js";import{h as d}from"./chunk-EBWCXIFH.js";function P(f){let e=new x;e.include(w,f);let{vertex:s,fragment:l}=e;return s.uniforms.add(new n("modelView",(t,{camera:o})=>d(g,o.viewMatrix,t.origin)),new n("proj",(t,{camera:o})=>o.projectionMatrix),new r("glowWidth",(t,{camera:o})=>t.glowWidth*o.pixelRatio),new m("pixelToNDC",(t,{camera:o})=>c(u,2/o.fullViewport[2],2/o.fullViewport[3]))),e.attributes.add(a.START,"vec3"),e.attributes.add(a.END,"vec3"),e.attributes.add(a.UP,"vec3"),e.attributes.add(a.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewPlane","vec4"),s.code.add(i`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),l.uniforms.add(new r("perScreenPixelRatio",(t,o)=>o.camera.perScreenPixelRatio)),l.code.add(i`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewPlane.xyz))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),e}var u=v(),g=p(),N=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));export{P as a,N as b};
