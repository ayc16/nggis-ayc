import{a as g}from"./chunk-TREMRME7.js";import{b as o}from"./chunk-GMW3QDVG.js";import{c as t}from"./chunk-M2GLXRA2.js";var a=t(1,1,0,1),d=t(1,0,1,1);function u(e){e.fragment.uniforms.add(new g("depthTexture",(i,l)=>l.mainDepth)),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",d),e.fragment.code.add(o`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}export{a,d as b,u as c};
