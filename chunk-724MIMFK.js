import{c as E,d as f,e as L}from"./chunk-UJUCAWBP.js";import{a as y,b as w,c as O}from"./chunk-JR27VNVT.js";import{a as F,b as $}from"./chunk-DUZ52FW3.js";import{a as D}from"./chunk-VLBUZRRG.js";import{a as T}from"./chunk-7G763D5W.js";import{a as u,b as H,d as U}from"./chunk-UDMTFKLM.js";import{a as A}from"./chunk-L5A2ASNG.js";import{d as j}from"./chunk-3OLRRKKD.js";import{a as n}from"./chunk-6EZU2A2D.js";import{a as g}from"./chunk-JCJ5KQ5Q.js";import{a as z}from"./chunk-TREMRME7.js";import{a as B}from"./chunk-C2FNHCAJ.js";import{a as c}from"./chunk-DOFADBK3.js";import{a as h}from"./chunk-CI3GTVLF.js";import{a as S}from"./chunk-Y6C54FDT.js";import{b as i}from"./chunk-GMW3QDVG.js";import{a as s}from"./chunk-UVJ5D37D.js";import{a as b}from"./chunk-PDBA6QOJ.js";import{a as P,b as p}from"./chunk-2ETHV3H2.js";import{e as C}from"./chunk-M2GLXRA2.js";function V(e,o){let{vertex:t,fragment:a}=e;t.include(f),o.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(i`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${o.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.include(H,o),a.code.add(i`
  void main() {
    fragColor = vec4(1);
    ${o.multipassEnabled?i`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function G(e){let o=new B,t=e.signedDistanceFieldEnabled;if(o.include(E,e),o.include(A,e),e.occlusionPass)return o.include(V,e),o;let{vertex:a,fragment:l}=o;o.include(y),l.include(h),l.include(U),o.include(T,e),o.include(D,e),o.include(L),o.varyings.add("vcolor","vec4"),o.varyings.add("vtc","vec2"),o.varyings.add("vsize","vec2"),o.varyings.add("voccluded","float"),a.uniforms.add(new n("viewport",(r,d)=>d.camera.fullViewport),new g("screenOffset",(r,d)=>p(k,2*r.screenOffset[0]*d.camera.pixelRatio,2*r.screenOffset[1]*d.camera.pixelRatio)),new g("anchorPosition",r=>_(r)),new n("materialColor",r=>r.color)),j(a),t&&(a.uniforms.add(new n("outlineColor",r=>r.outlineColor)),l.uniforms.add(new n("outlineColor",r=>I(r)?r.outlineColor:C),new S("outlineSize",r=>I(r)?r.outlineSize:0))),e.pixelSnappingEnabled&&a.include(f),e.hasScreenSizePerspective&&(w(a),O(a)),e.debugDrawLabelBorder&&o.varyings.add("debugBorderCoords","vec4"),o.attributes.add(s.UV0,"vec2"),o.attributes.add(s.COLOR,"vec4"),o.attributes.add(s.SIZE,"vec2"),o.attributes.add(s.FEATUREATTRIBUTE,"vec4"),a.code.add(i`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?i`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:i`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);let q=i`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,M=e.pixelSnappingEnabled?t?i`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:i`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:i`posProj += quadOffset;`;a.code.add(i`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${q}
    ${e.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${e.output===c.ObjectAndLayerIdColor?i`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${i.float(.001)};
    ${t?`alphaDiscard = alphaDiscard && outlineColor.a < ${i.float(.001)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${M}
      gl_Position = posProj;
    }

    vtc = uv;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?i`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),l.uniforms.add(new z("tex",r=>r.texture));let m=e.debugDrawLabelBorder?i`(isBorder > 0.0 ? 0.0 : ${i.float(.1)})`:i.float(.1),v=i`
    ${e.debugDrawLabelBorder?i`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${e.sampleSignedDistanceFieldTexelCenter?i`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:i`
      vec2 samplePos = vtc;
      `}

    ${t?i`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${m} ||
          fillPixelColor.a + outlinePixelColor.a < ${i.float(.001)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${m}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:i`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${m}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?i`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(e.output){case c.Color:e.transparencyPassType===u.ColorAlpha&&(o.outputs.add("fragColor","vec4",0),o.outputs.add("fragAlpha","float",1)),l.code.add(i`
        void main() {
          ${v}
          ${e.transparencyPassType===u.FrontFace?"fragColor.rgb /= fragColor.a;":""}
          ${e.transparencyPassType===u.ColorAlpha?"fragAlpha = fragColor.a;":""}
        }`);break;case c.ObjectAndLayerIdColor:l.code.add(i`
        void main() {
          ${v}
          outputObjectAndLayerIdColor();
        }`);break;case c.Highlight:l.constants.add("occludedHighlightFlag","vec4",F),l.constants.add("unoccludedHighlightFlag","vec4",$),l.code.add(i`
        void main() {
          ${v}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return o}function I(e){return e.outlineColor[3]>0&&e.outlineSize>0}function _(e,o=k){return e.textureIsSignedDistanceField?Z(e.anchorPosition,e.distanceFieldBoundingBox,o):P(o,e.anchorPosition),o}function Z(e,o,t){o!=null?p(t,e[0]*(o[2]-o[0])+o[0],e[1]*(o[3]-o[1])+o[1]):p(t,0,0)}var k=b(),Se=Object.freeze(Object.defineProperty({__proto__:null,build:G,calculateAnchorPosForRendering:_},Symbol.toStringTag,{value:"Module"}));export{G as a,_ as b,Se as c};
