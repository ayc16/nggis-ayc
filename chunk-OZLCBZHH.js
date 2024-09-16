import{b as i}from"./chunk-GMW3QDVG.js";import{a as t}from"./chunk-UVJ5D37D.js";function s(e,o=!0){e.attributes.add(t.POSITION,"vec2"),o&&e.varyings.add("uv","vec2"),e.vertex.code.add(i`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${o?i`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}export{s as a};
