import{g as m}from"./chunk-QKPKWNQQ.js";import{a as s,b as g,d as v}from"./chunk-UDMTFKLM.js";import{a as f}from"./chunk-L5A2ASNG.js";import{b as u}from"./chunk-3OLRRKKD.js";import{a as n}from"./chunk-TREMRME7.js";import{a as c}from"./chunk-C2FNHCAJ.js";import{a as d}from"./chunk-DOFADBK3.js";import{a as l}from"./chunk-Y6C54FDT.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as t}from"./chunk-UVJ5D37D.js";function y(r){let o=new c,{vertex:p,fragment:e}=o;return u(p,r),o.include(m,r),o.attributes.add(t.POSITION,"vec3"),o.attributes.add(t.UV0,"vec2"),r.perspectiveInterpolation&&o.attributes.add(t.PERSPECTIVEDIVIDE,"float"),o.varyings.add("vpos","vec3"),r.multipassEnabled&&o.varyings.add("depth","float"),p.code.add(a`
    void main(void) {
      vpos = position;
      ${r.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${r.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),o.include(f,r),o.include(g,r),e.uniforms.add(new n("tex",i=>i.texture),new l("opacity",i=>i.opacity)),o.varyings.add("vTexCoord","vec2"),r.transparencyPassType===s.ColorAlpha&&(o.outputs.add("fragColor","vec4",0),o.outputs.add("fragAlpha","float",1)),e.include(v),e.code.add(a`
    void main() {
      discardBySlice(vpos);
      ${r.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${a.float(.1)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${r.transparencyPassType===s.ColorAlpha?a`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;`:""}
      ${r.output===d.ObjectAndLayerIdColor?a`
              fragColor = vec4(0,0,0,1);`:""}
    }
    `),o}var $=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{y as a,$ as b};
