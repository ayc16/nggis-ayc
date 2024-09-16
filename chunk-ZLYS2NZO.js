import{a as c}from"./chunk-UGL7UJES.js";import{g as n}from"./chunk-QKPKWNQQ.js";import{c as u}from"./chunk-DUZ52FW3.js";import{a as d}from"./chunk-L5A2ASNG.js";import{b as p}from"./chunk-3OLRRKKD.js";import{a as f}from"./chunk-6EZU2A2D.js";import{a as g}from"./chunk-C2FNHCAJ.js";import{a as i}from"./chunk-DOFADBK3.js";import{a as m}from"./chunk-Y6C54FDT.js";import{b as t}from"./chunk-GMW3QDVG.js";import{a as s}from"./chunk-UVJ5D37D.js";function C(o){let r=new g,{vertex:l,fragment:a}=r;return r.include(n,o),r.include(c,o),p(l,o),r.attributes.add(s.POSITION,"vec3"),r.varyings.add("vpos","vec3"),l.code.add(t`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);
}`),o.output===i.Highlight&&r.include(u,o),r.include(d,o),a.uniforms.add(new m("alphaCoverage",(e,h)=>Math.min(1,e.width*h.camera.pixelRatio))),o.hasVertexColors||a.uniforms.add(new f("constantColor",e=>e.color)),a.code.add(t`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${o.hasVertexColors?"vColor":"constantColor"};

    ${o.output===i.ObjectAndLayerIdColor?t`color.a = 1.0;`:""}

    if (color.a < ${t.float(.001)}) {
      discard;
    }

    ${o.output===i.Color?t`fragColor = highlightSlice(color, vpos);`:""}
    ${o.output===i.Highlight?t`outputHighlight();`:""}
  }
  `),r}var A=Object.freeze(Object.defineProperty({__proto__:null,build:C},Symbol.toStringTag,{value:"Module"}));export{C as a,A as b};
