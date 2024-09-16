import{a as n}from"./chunk-JCJ5KQ5Q.js";import{b as t}from"./chunk-GMW3QDVG.js";import{a as o}from"./chunk-PDBA6QOJ.js";import{b as a}from"./chunk-2ETHV3H2.js";function v(e){e.uniforms.add(new n("zProjectionMap",(r,p)=>d(p.camera))),e.code.add(t`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(t`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(t`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function d(e){let r=e.projectionMatrix;return a(c,r[14],r[10])}var c=o();export{v as a};
