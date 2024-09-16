import{c as C,d as k}from"./chunk-SXPOFH4U.js";import{b as s}from"./chunk-XSJRPCD6.js";import{a as b}from"./chunk-WGIVYVB4.js";import{o as M}from"./chunk-UKQRI6U4.js";import{a as z}from"./chunk-UDMTFKLM.js";import{d as R}from"./chunk-3OLRRKKD.js";import{a as g}from"./chunk-AIKSV6LF.js";import{a as x}from"./chunk-DOFADBK3.js";import{a as h}from"./chunk-VVVTRG42.js";import{a as T}from"./chunk-Y6C54FDT.js";import{b as v}from"./chunk-GMW3QDVG.js";import{a as f}from"./chunk-UVJ5D37D.js";import{l as y}from"./chunk-ZAQLF7TN.js";import{a as n}from"./chunk-W3WDPWBE.js";var m,O;(function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"})(m||(m={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(O||(O={}));var i=class extends k{constructor(){super(...arguments),this.output=x.Color,this.transparencyPassType=z.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=m.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=O.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}get draped(){return this.space===m.Draped}};n([s({count:x.COUNT})],i.prototype,"output",void 0),n([s({count:z.COUNT})],i.prototype,"transparencyPassType",void 0),n([s()],i.prototype,"occluder",void 0),n([s()],i.prototype,"hasSlicePlane",void 0),n([s()],i.prototype,"writeDepth",void 0),n([s({count:m.COUNT})],i.prototype,"space",void 0),n([s()],i.prototype,"hideOnShortSegments",void 0),n([s()],i.prototype,"hasCap",void 0),n([s({count:O.COUNT})],i.prototype,"anchor",void 0),n([s()],i.prototype,"hasTip",void 0),n([s()],i.prototype,"vvSize",void 0),n([s()],i.prototype,"vvColor",void 0),n([s()],i.prototype,"vvOpacity",void 0),n([s()],i.prototype,"hasOccludees",void 0),n([s()],i.prototype,"multipassEnabled",void 0),n([s()],i.prototype,"cullAboveGround",void 0),n([s({constValue:!1})],i.prototype,"occlusionPass",void 0),n([s({constValue:!0})],i.prototype,"hasVvInstancing",void 0),n([s({constValue:!0})],i.prototype,"hasSliceTranslatedView",void 0);var P=8;function se(e,r){let t=e.vertex;t.uniforms.add(new T("intrinsicWidth",a=>a.width)),r.vvSize?(e.attributes.add(f.SIZEFEATUREATTRIBUTE,"float"),t.uniforms.add(new h("vvSizeMinSize",a=>a.vvSize.minSize),new h("vvSizeMaxSize",a=>a.vvSize.maxSize),new h("vvSizeOffset",a=>a.vvSize.offset),new h("vvSizeFactor",a=>a.vvSize.factor)),t.code.add(v`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(f.SIZE,"float"),t.code.add(v`float getSize(){
return intrinsicWidth * size;
}`)),r.vvOpacity?(e.attributes.add(f.OPACITYFEATUREATTRIBUTE,"float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new M("vvOpacityValues",a=>a.vvOpacity.values,P),new M("vvOpacityOpacities",a=>a.vvOpacity.opacityValues,P)),t.code.add(v`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.code.add(v`vec4 applyOpacity( vec4 color ){
return color;
}`),r.vvColor?(e.include(b,r),e.attributes.add(f.COLORFEATUREATTRIBUTE,"float"),t.code.add(v`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(f.COLOR,"vec4"),t.code.add(v`vec4 getColor(){
return applyOpacity(color);
}`))}var w=128,A=.5;function ve(e){return e==="cross"||e==="x"}function me(e,r=w,t=r*A,a=0){let o=E(e,r,t,a);return new C(o,{mipmap:!1,wrap:{s:y.CLAMP_TO_EDGE,t:y.CLAMP_TO_EDGE},width:r,height:r,components:4,noUnpackFlip:!0,reloadable:!0})}function E(e,r=w,t=r*A,a=0){switch(e){case"circle":default:return D(r,t);case"square":return G(r,t);case"cross":return _(r,t,a);case"x":return Q(r,t,a);case"kite":return I(r,t);case"triangle":return B(r,t);case"arrow":return H(r,t)}}function D(e,r){let t=e/2-.5;return S(e,F(t,t,r/2))}function G(e,r){return U(e,r,!1)}function I(e,r){return U(e,r,!0)}function _(e,r,t=0){return W(e,r,!1,t)}function Q(e,r,t=0){return W(e,r,!0,t)}function B(e,r){return S(e,L(e/2,r,r/2))}function H(e,r){let t=r,a=r/2,o=e/2,c=.8*t,p=F(o,(e-r)/2-c,Math.sqrt(c*c+a*a)),d=L(o,t,a);return S(e,(u,l)=>Math.max(d(u,l),-p(u,l)))}function U(e,r,t){return t&&(r/=Math.SQRT2),S(e,(a,o)=>{let c=a-.5*e+.25,p=.5*e-o-.75;if(t){let d=(c+p)/Math.SQRT2;p=(p-c)/Math.SQRT2,c=d}return Math.max(Math.abs(c),Math.abs(p))-.5*r})}function W(e,r,t,a=0){r-=a,t&&(r*=Math.SQRT2);let o=.5*r;return S(e,(c,p)=>{let d,u=c-.5*e,l=.5*e-p-1;if(t){let q=(u+l)/Math.SQRT2;l=(l-u)/Math.SQRT2,u=q}return u=Math.abs(u),l=Math.abs(l),d=u>l?u>o?Math.sqrt((u-o)*(u-o)+l*l):l:l>o?Math.sqrt(u*u+(l-o)*(l-o)):u,d-=a/2,d})}function F(e,r,t){return(a,o)=>{let c=a-e,p=o-r;return Math.sqrt(c*c+p*p)-t}}function L(e,r,t){let a=Math.sqrt(r*r+t*t);return(o,c)=>{let p=Math.abs(o-e)-t,d=c-e+r/2+.75,u=(r*p+t*d)/a,l=-d;return Math.max(u,l)}}function S(e,r){let t=new Uint8Array(4*e*e);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=o+e*a,p=r(o,a);p=p/e+.5,g(p,t,4*c)}return t}var V=64,Z=V/2,K=Z/5,N=V/K,Me=.25;function we(e,r){let{vertex:t,constants:a}=e;a.add("markerSizePerLineWidth","float",N),R(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.code.add(v`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),r.space===m.World&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new T("perRenderPixelRatio",(o,c)=>c.camera.perRenderPixelRatio)),t.code.add(v`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}export{m as a,O as b,i as c,se as d,w as e,A as f,ve as g,me as h,V as i,Z as j,Me as k,we as l};
