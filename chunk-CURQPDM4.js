import{a as d}from"./chunk-LTJDZ7OM.js";import{a as p}from"./chunk-UTDAYTD2.js";import{a as r}from"./chunk-TREMRME7.js";import{a as n}from"./chunk-VVVTRG42.js";import{a}from"./chunk-Y6C54FDT.js";import{b as t}from"./chunk-GMW3QDVG.js";function w(i,s){let e=i.fragment;e.include(p),i.include(d),e.uniforms.add(new a("globalAlpha",o=>o.globalAlpha),new n("glowColor",o=>o.glowColor),new a("glowWidth",(o,l)=>o.glowWidth*l.camera.pixelRatio),new a("glowFalloff",o=>o.glowFalloff),new n("innerColor",o=>o.innerColor),new a("innerWidth",(o,l)=>o.innerWidth*l.camera.pixelRatio),new r("depthMap",(o,l)=>l.depth?.attachment),new r("normalMap",o=>o.normals),new r("frameColor",(o,l)=>l.mainColor)),e.code.add(t`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),e.code.add(t`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),e.code.add(t`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),e.code.add(t`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),s.contrastControlEnabled?(e.uniforms.add(new a("globalAlphaContrastBoost",o=>o.globalAlphaContrastBoost!=null?o.globalAlphaContrastBoost:1)),e.code.add(t`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):e.code.add(t`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}export{w as a};
