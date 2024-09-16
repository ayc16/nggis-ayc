import{a as G}from"./chunk-CURQPDM4.js";import{a as P}from"./chunk-6EZU2A2D.js";import{a as R}from"./chunk-OZLCBZHH.js";import{a as u}from"./chunk-JCJ5KQ5Q.js";import{a as j}from"./chunk-C2FNHCAJ.js";import{g as I}from"./chunk-RBP2Z7C6.js";import{a as f}from"./chunk-VVVTRG42.js";import{a as p}from"./chunk-Y6C54FDT.js";import{b as o}from"./chunk-GMW3QDVG.js";import{g as T}from"./chunk-H3VY6XFU.js";import{l as E,p as z}from"./chunk-SJTQM4NH.js";import{a as y}from"./chunk-PDBA6QOJ.js";import{b as O}from"./chunk-2ETHV3H2.js";import{a as V}from"./chunk-M2GLXRA2.js";import{k as S}from"./chunk-ZVHU7VE3.js";import{f as v}from"./chunk-76YVRX2R.js";import{a as w,b as x,d as C,e as A,n as b,s as g,u as L,w as d}from"./chunk-OZF6BMOL.js";import{a as m}from"./chunk-GJP6PTKT.js";var H=v(6);function _(e){let r=new j;r.include(R),r.include(G,e);let i=r.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new p("maxPixelDistance",(t,n)=>e.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),i.code.add(o`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){let t=(a,s,W)=>d(a,s.heightManifoldTarget,W.camera.viewMatrix),n=(a,s)=>d(a,[0,0,0],s.camera.viewMatrix);i.uniforms.add(new P("heightManifoldOrigin",(a,s)=>(t(c,a,s),n(h,s),A(h,h,c),g(l,h),l[3]=w(h),l)),new f("globalOrigin",(a,s)=>n(c,s)),new p("cosSphericalAngleThreshold",(a,s)=>1-Math.max(2,b(s.camera.eye,a.heightManifoldTarget)*s.camera.perRenderPixelRatio)/w(a.heightManifoldTarget))),i.code.add(o`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(o`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new p("maxPixelDistance",(t,n)=>2*n.camera.computeScreenPixelSizeAt(t.pointDistanceTarget))),i.code.add(o`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new p("perScreenPixelRatio",(t,n)=>n.camera.perScreenPixelRatio)),i.code.add(o`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(o`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(o`void main() {
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){i.uniforms.add(new u("angleCutoff",n=>D(n)),new P("heightPlane",(n,a)=>U(n.heightManifoldTarget,n.renderCoordsHelper.worldUpAtPosition(n.heightManifoldTarget,c),a.camera.viewMatrix)));let t=e.spherical?o`normalize(globalOrigin - pos)`:o`heightPlane.xyz`;i.code.add(o`
    {
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;

      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));

      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(i.uniforms.add(new u("angleCutoff",t=>D(t)),new P("pointDistanceSphere",(t,n)=>N(t,n))),i.code.add(o`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new u("angleCutoff",t=>D(t)),new P("lineVerticalPlane",(t,n)=>B(t,n)),new f("lineVerticalStart",(t,n)=>$(t,n)),new f("lineVerticalEnd",(t,n)=>k(t,n))),i.code.add(o`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new u("angleCutoff",t=>D(t)),new f("intersectsLineStart",(t,n)=>d(c,t.lineStartWorld,n.camera.viewMatrix)),new f("intersectsLineEnd",(t,n)=>d(c,t.lineEndWorld,n.camera.viewMatrix)),new f("intersectsLineDirection",(t,n)=>(x(l,t.intersectsLineSegment.vector),l[3]=0,g(c,S(l,l,n.camera.viewMatrix)))),new p("intersectsLineRadius",t=>t.intersectsLineRadius)),i.code.add(o`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(o`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),r}function D(e){return O(q,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-v(2))))}function N(e,r){return d(M,e.pointDistanceOrigin,r.camera.viewMatrix),M[3]=b(e.pointDistanceOrigin,e.pointDistanceTarget),M}function B(e,r){let i=I(e.lineVerticalPlaneSegment,.5,c),t=e.renderCoordsHelper.worldUpAtPosition(i,J),n=g(h,e.lineVerticalPlaneSegment.vector),a=L(c,t,n);return g(a,a),U(e.lineVerticalPlaneSegment.origin,a,r.camera.viewMatrix)}function $(e,r){let i=x(c,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),d(i,i,r.camera.viewMatrix)}function k(e,r){let i=C(c,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),d(i,i,r.camera.viewMatrix)}function U(e,r,i){return d(F,e,i),x(l,r),l[3]=0,S(l,l,i),z(F,l,K)}var q=y(),c=m(),l=V(),J=m(),h=m(),F=m(),K=E(),M=T(),ge=Object.freeze(Object.defineProperty({__proto__:null,build:_,defaultAngleCutoff:H},Symbol.toStringTag,{value:"Module"}));export{H as a,_ as b,ge as c};
