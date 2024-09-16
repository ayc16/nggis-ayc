import{b as a}from"./chunk-GMW3QDVG.js";import{a as o}from"./chunk-UVJ5D37D.js";function d(e,t){switch(t.normalType){case r.Compressed:e.attributes.add(o.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(o.NORMAL,"vec3"),e.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:t.normalType;case r.COUNT:case r.Ground:}}var r;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(r||(r={}));export{d as a,r as b};