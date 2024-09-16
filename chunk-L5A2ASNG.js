import{a as d}from"./chunk-VYC75ESO.js";import{b as r}from"./chunk-GMW3QDVG.js";import{a as g}from"./chunk-ALWV3RJ2.js";import{h as H}from"./chunk-EBWCXIFH.js";import{c as u,d as m,e as p,w as f}from"./chunk-OZF6BMOL.js";import{a as n,e as _}from"./chunk-GJP6PTKT.js";function E(s,a){B(s,a,new d("slicePlaneOrigin",(e,i)=>v(a,e,i)),new d("slicePlaneBasis1",(e,i)=>h(a,e,i,i.slicePlane?.basis1)),new d("slicePlaneBasis2",(e,i)=>h(a,e,i,i.slicePlane?.basis2)))}function B(s,a,...e){if(!a.hasSlicePlane){let o=r`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return a.hasSliceInVertexProgram&&s.vertex.code.add(o),void s.fragment.code.add(o)}a.hasSliceInVertexProgram&&s.vertex.uniforms.add(...e),s.fragment.uniforms.add(...e);let i=r`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=r`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=a.hasSliceHighlight?r`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:r`#define highlightSlice(_color_, _pos_) (_color_)`;a.hasSliceInVertexProgram&&s.vertex.code.add(i),s.fragment.code.add(i),s.fragment.code.add(c)}function I(s,a,e){return s.instancedDoublePrecision?u(L,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):a.slicePlaneLocalOrigin}function S(s,a){return s!=null?p(P,a.origin,s):a.origin}function b(s,a,e){return s.hasSliceTranslatedView?a!=null?H(w,e.camera.viewMatrix,a):e.camera.viewMatrix:null}function v(s,a,e){if(e.slicePlane==null)return _;let i=I(s,a,e),l=S(i,e.slicePlane),c=b(s,i,e);return c!=null?f(P,l,c):l}function h(s,a,e,i){if(i==null||e.slicePlane==null)return _;let l=I(s,a,e),c=S(l,e.slicePlane),o=b(s,l,e);return o!=null?(m(t,i,c),f(P,c,o),f(t,t,o),p(t,t,P)):i}var L=n(),P=n(),t=n(),w=g();export{E as a};
