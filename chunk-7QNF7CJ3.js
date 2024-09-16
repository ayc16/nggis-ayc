import{a as S}from"./chunk-LXNCH6Z7.js";import{a as w}from"./chunk-LCBWJNVO.js";import{b as p}from"./chunk-XN46SLSO.js";import{e as b,g as f}from"./chunk-QKPKWNQQ.js";import{a as h}from"./chunk-JRJHFO7J.js";import{c as j}from"./chunk-DUZ52FW3.js";import{a as T}from"./chunk-VLBUZRRG.js";import{a as g}from"./chunk-WGIVYVB4.js";import{j as y}from"./chunk-UKQRI6U4.js";import{d as D}from"./chunk-UDMTFKLM.js";import{a as u}from"./chunk-L5A2ASNG.js";import{b as v}from"./chunk-3OLRRKKD.js";import{a as m}from"./chunk-TREMRME7.js";import{a as n,d as O}from"./chunk-LIKXTYW2.js";import{a as M,b as c}from"./chunk-ELGDZDOQ.js";import{a as i}from"./chunk-DOFADBK3.js";import{a as A}from"./chunk-Y6C54FDT.js";import{b as e}from"./chunk-GMW3QDVG.js";import{g as d}from"./chunk-OW7DVBQB.js";import{a as C}from"./chunk-UVJ5D37D.js";function B(o){o.vertex.code.add(e`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function H(o,r){r.hasSymbolColors?(o.include(O),o.attributes.add(C.SYMBOLCOLOR,"vec4"),o.varyings.add("colorMixMode","mediump float"),o.vertex.code.add(e`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(o.fragment.uniforms.add(new h("colorMixMode",a=>y[a.colorMixMode])),o.vertex.code.add(e`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function V(o){o.fragment.code.add(e`
    #define discardOrAdjustAlpha(color) { if (color.a < ${e.float(.001)}) { discard; } }
  `)}function x(o,r){$(o,r,new A("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function $(o,r,a){let t=o.fragment;switch(r.alphaDiscardMode!==d.Mask&&r.alphaDiscardMode!==d.MaskBlend||t.uniforms.add(a),r.alphaDiscardMode){case d.Blend:return o.include(V);case d.Opaque:t.code.add(e`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case d.Mask:t.code.add(e`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case d.MaskBlend:o.fragment.code.add(e`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function yo(o,r){let{vertex:a,fragment:t}=o,l=r.hasColorTexture&&r.alphaDiscardMode!==d.Opaque;switch(r.output){case i.Depth:v(a,r),o.include(f,r),o.include(u,r),o.include(p,r),l&&t.uniforms.add(new m("tex",s=>s.texture)),a.code.add(e`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),o.include(x,r),t.code.add(e`
          void main(void) {
            discardBySlice(vpos);
            ${l?e`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?e`colorUV`:e`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case i.Shadow:case i.ShadowHighlight:case i.ShadowExcludeHighlight:case i.ViewshedShadow:case i.ObjectAndLayerIdColor:v(a,r),o.include(f,r),o.include(p,r),o.include(g,r),o.include(S,r),o.include(u,r),o.include(T,r),b(o),o.varyings.add("depth","float"),l&&t.uniforms.add(new m("tex",s=>s.texture)),a.code.add(e`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),o.include(x,r),t.code.add(e`
          void main(void) {
            discardBySlice(vpos);
            ${l?e`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?e`colorUV`:e`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${r.output===i.ObjectAndLayerIdColor?e`outputObjectAndLayerIdColor();`:e`outputDepth(depth);`}
          }
        `);break;case i.Normal:{v(a,r),o.include(f,r),o.include(M,r),o.include(w,r),o.include(p,r),o.include(g,r),l&&t.uniforms.add(new m("tex",P=>P.texture)),r.normalType===c.ScreenDerivative&&o.varyings.add("vPositionView","vec3");let s=r.normalType===c.Attribute||r.normalType===c.Compressed;a.code.add(e`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${s?e`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:e`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),o.include(u,r),o.include(x,r),t.code.add(e`
          void main() {
            discardBySlice(vpos);
            ${l?e`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?e`colorUV`:e`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${r.normalType===c.ScreenDerivative?e`vec3 normal = screenDerivativeNormal(vPositionView);`:e`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case i.Highlight:v(a,r),o.include(f,r),o.include(p,r),o.include(g,r),l&&t.uniforms.add(new m("tex",s=>s.texture)),a.code.add(e`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),o.include(u,r),o.include(x,r),o.include(j,r),t.code.add(e`
          void main() {
            discardBySlice(vpos);
            ${l?e`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?e`colorUV`:e`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function So(o){o.include(D),o.code.add(e`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${e.int(n.Multiply)}) {
        return allMixed;
      }
      if (mode == ${e.int(n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${e.int(n.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${e.int(n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${e.int(n.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{B as a,H as b,x as c,yo as d,So as e};
