import{a as n}from"./chunk-DOFADBK3.js";import{b as o}from"./chunk-GMW3QDVG.js";import{a as d}from"./chunk-UVJ5D37D.js";function y(r,t){let e=t.output===n.ObjectAndLayerIdColor,a=t.objectAndLayerIdColorInstanced;e&&(r.varyings.add("objectAndLayerIdColorVarying","vec4"),a?r.attributes.add(d.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):r.attributes.add(d.OBJECTANDLAYERIDCOLOR,"vec4")),r.vertex.code.add(o`
     void forwardObjectAndLayerIdColor() {
      ${e?a?o`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o``} }`),r.fragment.code.add(o`
      void outputObjectAndLayerIdColor() {
        ${e?o`fragColor = objectAndLayerIdColorVarying;`:o``} }`)}export{y as a};
