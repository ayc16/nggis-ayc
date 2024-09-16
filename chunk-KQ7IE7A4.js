import{a as v}from"./chunk-UGL7UJES.js";import{g as c}from"./chunk-QKPKWNQQ.js";import{c as h}from"./chunk-DUZ52FW3.js";import{a as g}from"./chunk-VLBUZRRG.js";import{a as y}from"./chunk-WGIVYVB4.js";import{a as d,b as A,d as O}from"./chunk-UDMTFKLM.js";import{a as m}from"./chunk-L5A2ASNG.js";import{b as C}from"./chunk-3OLRRKKD.js";import{a as f}from"./chunk-6EZU2A2D.js";import{a as b}from"./chunk-C2FNHCAJ.js";import{a}from"./chunk-DOFADBK3.js";import{b as t}from"./chunk-GMW3QDVG.js";import{a as s}from"./chunk-UVJ5D37D.js";function w(o){let r=new b,{vertex:l,fragment:p,attributes:n,varyings:i}=r;C(l,o),r.include(c,o),r.include(v,o),r.include(y,o),r.include(g,o),n.add(s.POSITION,"vec3"),o.vvColor&&n.add(s.COLORFEATUREATTRIBUTE,"float"),i.add("vColor","vec4"),i.add("vpos","vec3");let e=o.multipassEnabled&&o.output===a.Color;e&&i.add("depth","float"),l.uniforms.add(new f("eColor",T=>T.color)),l.code.add(t`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${o.hasVertexColors?"vColor *= eColor;":o.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${e?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),r.include(m,o),e&&r.include(A,o),p.include(O);let u=o.output===a.Highlight;return u&&r.include(h,o),o.transparencyPassType===d.ColorAlpha&&(r.outputs.add("fragColor","vec4",0),r.outputs.add("fragAlpha","float",1)),p.code.add(t`
  void main() {
    discardBySlice(vpos);
    ${e?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${o.output===a.ObjectAndLayerIdColor?t`fColor.a = 1.0;`:""}

    if (fColor.a < ${t.float(.001)}) {
      discard;
    }

    ${o.output===a.Color?t`fragColor = highlightSlice(fColor, vpos); ${o.transparencyPassType===d.ColorAlpha?t`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}`:""}
    ${u?t`outputHighlight();`:""};
    ${o.output===a.ObjectAndLayerIdColor?t`outputObjectAndLayerIdColor();`:""}
  }
  `),r}var N=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{w as a,N as b};
