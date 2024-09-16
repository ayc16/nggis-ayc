import{g as S}from"./chunk-QKPKWNQQ.js";import{a as m,b as P,d as b}from"./chunk-UDMTFKLM.js";import{a as u}from"./chunk-L5A2ASNG.js";import{a as g,b as h,c as w}from"./chunk-3OLRRKKD.js";import{a as p}from"./chunk-6EZU2A2D.js";import{a as C}from"./chunk-C2FNHCAJ.js";import{a as s}from"./chunk-DOFADBK3.js";import{a as v}from"./chunk-VVVTRG42.js";import{a as c}from"./chunk-Y6C54FDT.js";import{b as i}from"./chunk-GMW3QDVG.js";import{a as l}from"./chunk-UVJ5D37D.js";import{a as f}from"./chunk-M2GLXRA2.js";function y(o,r){if(!r.screenSizeEnabled)return;let e=o.vertex;g(e,r),e.uniforms.add(new c("perScreenPixelRatio",(a,t)=>t.camera.perScreenPixelRatio),new c("screenSizeScale",a=>a.screenSizeScale)),e.code.add(i`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function N(o){let r=new C,e=o.multipassEnabled&&o.output===s.Color;r.include(S,o),r.include(y,o),r.include(u,o);let{vertex:a,fragment:t}=r;return t.include(b),h(a,o),t.uniforms.add(new p("uColor",d=>d.color)),r.attributes.add(l.POSITION,"vec3"),r.varyings.add("vWorldPosition","vec3"),e&&r.varyings.add("depth","float"),o.screenSizeEnabled&&r.attributes.add(l.OFFSET,"vec3"),o.shadingEnabled&&(w(a),r.attributes.add(l.NORMAL,"vec3"),r.varyings.add("vViewNormal","vec3")),a.code.add(i`
    void main(void) {
      vWorldPosition = ${o.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),o.shadingEnabled&&a.code.add(i`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),a.code.add(i`
    ${e?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),e&&r.include(P,o),t.code.add(i`
    void main() {
      discardBySlice(vWorldPosition);
      ${e?"terrainDepthTest(depth);":""}
    `),o.shadingEnabled?(t.uniforms.add(new v("shadingDirection",d=>d.shadingDirection)),t.uniforms.add(new p("shadedColor",d=>x(d.shadingTint,d.color))),t.code.add(i`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):t.code.add(i`vec4 finalColor = uColor;`),o.transparencyPassType===m.ColorAlpha&&(r.outputs.add("fragColor","vec4",0),r.outputs.add("fragAlpha","float",1)),t.code.add(i`
      ${o.output===s.ObjectAndLayerIdColor?i`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${i.float(.001)}) {
        discard;
      }

      ${o.output===s.Color?i`fragColor = highlightSlice(finalColor, vWorldPosition); ${o.transparencyPassType===m.ColorAlpha?i`
                    fragColor = premultiplyAlpha(fragColor);
                    fragAlpha = fragColor.a;`:""}`:""}
    }
    `),r}function x(o,r){let e=1-o[3],a=o[3]+r[3]*e;return a===0?(n[3]=a,n):(n[0]=(o[0]*o[3]+r[0]*r[3]*e)/a,n[1]=(o[1]*o[3]+r[1]*r[3]*e)/a,n[2]=(o[2]*o[3]+r[2]*r[3]*e)/a,n[3]=r[3],n)}var n=f(),G=Object.freeze(Object.defineProperty({__proto__:null,build:N},Symbol.toStringTag,{value:"Module"}));export{N as a,G as b};
