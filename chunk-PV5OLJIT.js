import{a as d,b as s,c,d as f,f as v,h as x,i as h}from"./chunk-FN7HZGXJ.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as p}from"./chunk-RHABF3KL.js";import{a as i}from"./chunk-2EA2KAER.js";import{b as n}from"./chunk-J57HR4DB.js";import{a as u}from"./chunk-Z5Q76SB7.js";import{b as m}from"./chunk-E5R4OI7X.js";var l=class extends d{constructor(e,t){super(e,"vec4",p.Pass,(o,w,b)=>o.setUniform4fv(e,t(w,b)))}};function S(r){r.fragment.uniforms.add(new l("projInfo",(e,t)=>A(t.camera))),r.fragment.uniforms.add(new c("zScale",(e,t)=>T(t.camera))),r.fragment.code.add(a`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function A(r){let e=r.projectionMatrix;return e[11]===0?m(g,2/(r.fullWidth*e[0]),2/(r.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):m(g,-2/(r.fullWidth*e[0]),-2/(r.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}var g=u();function T(r){return r.projectionMatrix[11]===0?n(P,0,1):n(P,1,0)}var P=i();var y=16;function j(){let r=new h,e=r.fragment;return r.include(v),r.include(S),e.include(x),e.uniforms.add(new f("radius",(t,o)=>z(o.camera))),e.code.add(a`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(a`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new c("nearFar",(t,o)=>o.camera.nearFar),new s("normalMap",t=>t.normalTexture),new s("depthMap",t=>t.depthTexture),new f("projScale",t=>t.projScale),new s("rnm",t=>t.noiseTexture),new c("rnmScale",(t,o)=>n(F,o.camera.fullWidth/t.noiseTexture.descriptor.width,o.camera.fullHeight/t.noiseTexture.descriptor.height)),new f("intensity",t=>t.intensity),new c("screenSize",(t,o)=>n(F,o.camera.fullWidth,o.camera.fullHeight))),r.outputs.add("fragOcclusion","float"),e.code.add(a`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${a.int(y)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${a.int(y)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),r}function z(r){return Math.max(10,20*r.computeScreenPixelSizeAtDist(Math.abs(4*r.relativeElevation)))}var F=i(),K=Object.freeze(Object.defineProperty({__proto__:null,build:j,getRadius:z},Symbol.toStringTag,{value:"Module"}));export{l as a,j as b,z as c,K as d};
