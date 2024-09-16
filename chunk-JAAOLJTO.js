import{a as r}from"./chunk-UTDAYTD2.js";import{a as o}from"./chunk-TREMRME7.js";import{b as t}from"./chunk-GMW3QDVG.js";function n(e){e.include(r),e.uniforms.add(new o("geometryDepthTexture",(p,s)=>s.multipassGeometry.depth?.attachment)),e.code.add(t`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`)}var m=class{};export{n as a,m as b};
