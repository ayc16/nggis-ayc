var k=9999999e31,P=2e-7,y={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-34028234663852886e22,34028234663852886e22],f64:[-Number.MAX_VALUE,Number.MAX_VALUE],unknown:void 0,c64:void 0,c128:void 0};function A(t){return y[t]??[-34028234663852886e22,34028234663852886e22]}function E(t,s){return t==null||s==null?"s32":t<0?t>=-128&&s<128?"s8":t>=-32768&&s<32768?"s16":"s32":s<256?"u8":s<65536?"u16":"u32"}function I(t){return(t?.startsWith("s")||t?.startsWith("u"))??!1}function L(t,s,d){if(t.depthCount&&t.depthCount>1)return;let{pixels:f,statistics:h,pixelType:o}=t,g=f[0].length,b=t.bandMasks??[],r=t.mask??new Uint8Array(g).fill(255),M=o==="f32"||o==="f64",p=A(o),c=!1;for(let n=0;n<f.length;n++){let u=typeof s=="number"?s:s[n];if(u==null)continue;let N=h?.[n]?.minValue??p[0],x=h?.[n]?.maxValue??p[1];if(N>u+Number.EPSILON||x<u-Number.EPSILON)continue;let i=b[n]||r.slice(),l=f[n],m=d?.customFloatTolerance;if(M&&m!==0){let e=m;e||(e=Math.abs(u)>=k?P*Math.abs(u):o==="f32"?2**-23:Number.EPSILON);for(let a=0;a<l.length;a++)i[a]&&Math.abs(l[a]-u)<e&&(l[a]=0,i[a]=0,r[a]=0,c=!0)}else for(let e=0;e<l.length;e++)i[e]&&l[e]===u&&(l[e]=0,i[e]=0,r[e]=0,c=!0);b[n]=i}c&&(t.bandMasks=t.bandMasks||t.pixels.length>1?b:null,t.mask=r),c&&"updateStatistics"in t&&t.updateStatistics()}export{A as a,E as b,I as c,L as d};