import{a as i,b as c,c as w,d as x,f as b,h as v,i as T}from"./chunk-FN7HZGXJ.js";import{b as n}from"./chunk-GMW3QDVG.js";import{a as l}from"./chunk-RHABF3KL.js";import{w as d}from"./chunk-ES7AH7WX.js";var m=class extends i{constructor(e,a){super(e,"sampler2D",l.Draw,(f,r,t)=>f.bindTexture(e,a(r,t)))}};var p=class extends i{constructor(e,a){super(e,"vec2",l.Draw,(f,r,t,s)=>f.setUniform2fv(e,a(r,t,s)))}};var u=4;function h(){let o=new T,e=o.fragment;o.include(b);let a=(u+1)/2,f=1/(2*a*a);return e.include(v),e.uniforms.add(new c("depthMap",r=>r.depthTexture),new m("tex",r=>r.colorTexture),new p("blurSize",r=>r.blurSize),new x("projScale",(r,t)=>{let s=d(t.camera.eye,t.camera.center);return s>5e4?Math.max(0,r.projScale-(s-5e4)):r.projScale}),new w("nearFar",(r,t)=>t.camera.nearFar)),e.code.add(n`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${n.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),o.outputs.add("fragBlur","float"),e.code.add(n`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${n.int(u)}; r <= ${n.int(u)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),o}var k=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));export{m as a,h as b,k as c};
