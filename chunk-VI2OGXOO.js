import{a as u}from"./chunk-JAAOLJTO.js";import{c as h,d as b,e as z}from"./chunk-UJUCAWBP.js";import{c as m}from"./chunk-JR27VNVT.js";import{a as S}from"./chunk-L5A2ASNG.js";import{a as d}from"./chunk-6EZU2A2D.js";import{a as l}from"./chunk-JCJ5KQ5Q.js";import{a as v}from"./chunk-C2FNHCAJ.js";import{a as s}from"./chunk-Y6C54FDT.js";import{b as o}from"./chunk-GMW3QDVG.js";import{a as g}from"./chunk-UVJ5D37D.js";import{a as f}from"./chunk-PDBA6QOJ.js";import{b as c}from"./chunk-2ETHV3H2.js";import{e as p}from"./chunk-M2GLXRA2.js";function A(e){let t=new v,{vertex:a,fragment:n}=t;return a.include(b),t.include(h,e),t.include(S,e),t.attributes.add(g.UV0,"vec2"),a.uniforms.add(new d("viewport",(i,r)=>r.camera.fullViewport),new s("lineSize",(i,r)=>i.size>0?Math.max(1,i.size)*r.camera.pixelRatio:0),new l("pixelToNDC",(i,r)=>c(x,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3])),new s("borderSize",(i,r)=>i.borderColor!=null?r.camera.pixelRatio:0),new l("screenOffset",(i,r)=>c(x,i.horizontalScreenOffset*r.camera.pixelRatio,0))),t.varyings.add("coverageSampling","vec4"),t.varyings.add("lineSizes","vec2"),e.multipassEnabled&&t.varyings.add("depth","float"),e.occlusionTestEnabled&&t.include(z),e.hasScreenSizePerspective&&m(a),a.code.add(o`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${e.occlusionTestEnabled?o`
      if (!testHUDVisibility(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${e.hasScreenSizePerspective?o`
      vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:o`vec2 screenOffsetScaled = screenOffset;`}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
      // correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${e.multipassEnabled?"depth = posView.z;":""}

      applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${e.depthHudEnabled?e.depthHudAlignStartEnabled?o`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:o`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${e.hasScreenSizePerspective?o`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:o`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `),n.uniforms.add(new d("uColor",i=>w(i.color)),new d("borderColor",i=>w(i.borderColor))),e.multipassEnabled&&(n.include(u,e),n.uniforms.add(new l("inverseViewport",(i,r)=>r.inverseViewport))),n.code.add(o`
    void main() {
      ${e.multipassEnabled?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line blends on top of the
      // border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${e.depthHudEnabled?o`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:o`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      fragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),t}function w(e){return e??p}var x=f(),R=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}));export{A as a,R as b};
