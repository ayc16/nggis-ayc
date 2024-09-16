import{c as B,g as gn,h as W,l as $,r as yn}from"./chunk-IISBSAYJ.js";import{p as Z}from"./chunk-M76YZBV5.js";import{l as E,v as F}from"./chunk-2KZICFRS.js";import{b as pn}from"./chunk-D2RUV6O4.js";import{aa as z,c as V,d as T,e as v,f as mn,h as xn,m as hn}from"./chunk-4JWMB5SM.js";import{t as un}from"./chunk-HQMV3KQV.js";import{q as fn}from"./chunk-CRMMDK2Z.js";import{a as H,b as Q,h as cn}from"./chunk-EAH6BNBL.js";var sn;function En(n,t,i){return!yn(n,t,i)}function L(n,t,i){let s=En(n,t,i);if(s&&!B())throw new un("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(sn||(sn={}));var dn=(n,t,i,s=0)=>{if(i[0]===1)return[0,0];let r=1,e=-1,o=1,f=-1;for(let m=0;m<n.length;m+=2)isNaN(n[m])||(r=r>n[m]?n[m]:r,e=e>n[m]?e:n[m],o=o>n[m+1]?n[m+1]:o,f=f>n[m+1]?f:n[m+1]);let{cols:l,rows:a}=t,c=(e-r)/l/i[0],M=(f-o)/a/i[1],y=2*s,u=0,x=!1,p=[0,0];for(let m=0;m<l-3;m++){for(let w=0;w<a-3;w++){let h=m*a*2+2*w,g=(n[h]+n[h+4]+n[h+4*a]+n[h+4*a+4])/4,d=(n[h+1]+n[h+5]+n[h+4*a+1]+n[h+4*a+5])/4,R=Math.abs((g-n[h+2*a+2])/c),P=Math.abs((d-n[h+2*a+3])/M);if(R+P>u&&(u=R+P,p=[R,P]),y&&u>y){x=!0;break}}if(x)break}return p},Wn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},Y=32,q=4,nn=q,tn=new Map,en=new Map,D=500;function tt(){return cn(this,null,function*(){B()||(yield gn())})}function zn(n,t,i){return L(n.spatialReference,t),i?$(t,n.spatialReference,n):$(n.spatialReference,t,n)}function Mn(n,t,i,s=null){let r=n.spatialReference;if(r.equals(t))return n;L(r,t,s);let e=i.center,o=new F({xmin:e.x-n.x/2,xmax:e.x+n.x/2,ymin:e.y-n.y/2,ymax:e.y+n.y/2,spatialReference:r}),f=W(o,t,s),l=_(t),a;if(f==null||l!=null&&f.width>=l){let c=z(r)/z(t);a={x:n.x*c,y:n.y*c}}else a={x:f.width,y:f.height};return a}function N(n,t=.01){return z(n)?t/z(n):0}function wn(n,t,i=null,s=!0){let r=n.spatialReference;if(r.equals(t))return n;L(r,t,i);let e=W(n,t,i);return s&&e&&kn([n],[e],r,t),e}function kn(n,t,i,s){let r=J(i,!0),e=J(s,!0),o=N(i,D),f=N(s,D);if(o&&r!=null&&e!=null)for(let l=0;l<n.length;l++){let a=t[l];if(!a)continue;let{x:c}=n[l],{x:M}=a;M>=e[1]-f&&Math.abs(c-r[0])<o?a.x-=e[1]-e[0]:M<=e[0]+f&&Math.abs(c-r[1])<o&&(a.x+=e[1]-e[0])}}function In(n){let{inSR:t,outSR:i,datumTransformation:s,preferPE:r}=n;if(t.equals(i)){let{points:e}=rn(n,null);return e}return t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator?On(n):L(t,i,s)&&r&&(t.isGeographic||I(t)!=null)?Rn(n):Ln(n)}function Ln(n){let{points:t}=rn(n,null),{inSR:i,outSR:s,datumTransformation:r}=n,e=t.map(f=>new E(f[0],f[1],i)),o=W(e,s,r);return r&&kn(e,o,i,s),o.map(f=>f?[f.x,f.y]:[NaN,NaN])}function Rn(n){let{inSR:t,outSR:i,datumTransformation:s}=n,r=I(t),{points:e,mask:o}=rn(n,r);if(!t.isGeographic){let l=t.wkid?v.coordsys(t.wkid):v.fromString(t.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,t.wkt2||t.wkt);V.projToGeog(l,e.length,e)}if(s!=null&&s.steps.length){let l;if(i.isGeographic&&(l=e.map(([c])=>c>179.9955?1:c<-179.9955?-1:0)),s.steps.forEach(c=>{let M=c.wkid?v.geogtran(c.wkid):v.fromString(T.PE_TYPE_GEOGTRAN,c.wkt);mn.geogToGeog(M,e.length,e,null,c.isInverse?T.PE_TRANSFORM_2_TO_1:T.PE_TRANSFORM_1_TO_2)}),l)for(let c=0;c<e.length;c++){let M=l[c],y=e[c][0],u=y>179.9955?1:y<-179.9955?-1:0;M&&u&&M!==u&&(e[c][0]=M>0?y+360:y-360)}}if(!i.isGeographic){let l=I(i,!0),a=l!=null&&l.isEnvelope?[l.bbox[1],l.bbox[3]]:[-90,90];Fn(e,a);let c=i.wkid?v.coordsys(i.wkid):v.fromString(i.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,i.wkt2||i.wkt);V.geogToProj(c,e.length,e)}let f=e;if(o&&e.length!==o.length){f=[];for(let l=0,a=0;l<o.length;l++)o[l]?f.push(e[a++]):f.push([NaN,NaN])}return f}function On(n){let{cols:t,rows:i,xres:s,yres:r,usePixelCenter:e,inSR:o,outSR:f}=n,{xmin:l,ymax:a}=n;e&&(l+=s/2,a-=r/2);let c=[],M=[],y=Math.max(t,i);for(let x=0;x<y;x++){let p=l+s*Math.min(t,x),m=a-r*Math.min(i,x),w=W(new E({x:p,y:m,spatialReference:o}),f);x<=t&&c.push(w.x),x<=i&&M.push(w.y)}let u=[];for(let x=0;x<t;x++)for(let p=0;p<i;p++)u.push([c[x],M[p]]);return u}function I(n,t=!1){let i=n.wkid||n.wkt2||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),tn.has(i)){let o=tn.get(i);return t?o?.gcs:o?.pcs}let s=n.wkid?v.coordsys(n.wkid):v.fromString(n.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,n.wkt2||n.wkt),r=Pn(s,N(n,1e-4)),e=Pn(s,0,!0);return tn.set(i,{pcs:r,gcs:e}),t?e:r}function Pn(n,t=0,i=!1){let s=xn.generate(n),r=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!s||!r?.length)return null;let e=!1,o=r.find(m=>m.getInclusive()===1&&m.getKind()===1);if(!o){if(o=r.find(m=>m.getInclusive()===1&&m.getKind()===0),!o)return null;e=!0}let f=i?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),l=s.isPannableRectangle(),a=o.getCoord();if(e)return{isEnvelope:e,isPannable:l,vertices:a,coef:null,bbox:[a[0][0]-t,a[0][1]-t,a[1][0]+t,a[1][1]+t],poleLocation:f};let c=0,M=[],[y,u]=a[0],[x,p]=a[0];for(let m=0,w=a.length;m<w;m++){c++,c===w&&(c=0);let[h,g]=a[m],[d,R]=a[c];if(R===g)M.push([h,d,g,R,2]);else{let P=(d-h)/(R-g||1e-4),C=h-P*g;g<R?M.push([P,C,g,R,0]):M.push([P,C,R,g,1])}y=y<h?y:h,u=u<g?u:g,x=x>h?x:h,p=p>g?p:g}return{isEnvelope:!1,isPannable:l,vertices:a,coef:M,bbox:[y,u,x,p],poleLocation:f}}function rn(n,t){let i=[],{cols:s,rows:r,xres:e,yres:o,usePixelCenter:f}=n,{xmin:l,ymax:a}=n;if(f&&(l+=e/2,a-=o/2),t==null){for(let u=0;u<s;u++)for(let x=0;x<r;x++)i.push([l+e*u,a-o*x]);return{points:i}}let c=new Uint8Array(s*r);if(t.isEnvelope){let{bbox:[u,x,p,m]}=t;for(let w=0,h=0;w<s;w++){let g=l+e*w,d=t.isPannable||g>=u&&g<=p;for(let R=0;R<r;R++,h++){let P=a-o*R;d&&P>=x&&P<=m&&(i.push([g,P]),c[h]=1)}}return{points:i,mask:c}}let M=t.coef,y=[];for(let u=0;u<r;u++){let x=a-o*u,p=[],m=[];for(let h=0;h<M.length;h++){let[g,d,R,P,C]=M[h];if(x===R&&R===P)p.push(g),p.push(d),m.push(2),m.push(2);else if(x>=R&&x<=P){let O=g*x+d;p.push(O),m.push(C)}}let w=p;if(p.length>2){let h=m[0]===2?0:m[0],g=p[0];w=[];for(let d=1;d<m.length;d++)m[d]===2&&d!==m.length-1||(m[d]!==h&&(w.push(h===0?Math.min(g,p[d-1]):Math.max(g,p[d-1])),h=m[d],g=p[d]),d===m.length-1&&w.push(m[d]===0?Math.min(g,p[d]):Math.max(g,p[d])));w.sort((d,R)=>d-R)}else p[0]>p[1]&&(w=[p[1],p[0]]);y.push(w)}for(let u=0,x=0;u<s;u++){let p=l+e*u;for(let m=0;m<r;m++,x++){let w=a-o*m,h=y[m];if(h.length===2)p>=h[0]&&p<=h[1]&&(i.push([p,w]),c[x]=1);else if(h.length>2){let g=!1;for(let d=0;d<h.length;d+=2)if(p>=h[d]&&p<=h[d+1]){g=!0;break}g&&(i.push([p,w]),c[x]=1)}}}return{points:i,mask:c}}function Fn(n,t){let[i,s]=t;for(let r=0;r<n.length;r++){let e=n[r][1];(e<i||e>s)&&(n[r]=[NaN,NaN])}}function Nn(n,t){let i=_(n[0].spatialReference);if(n.length<2||i==null||(t=t??N(n[0].spatialReference),(n=n.filter(f=>f.width>t)).length===1))return n[0];let{xmin:s,xmax:r,ymin:e,ymax:o}=n[0];for(let f=1;f<n.length;f++){let l=n[f];r=l.xmax+i*f,e=Math.min(e,l.ymin),o=Math.max(o,l.ymax)}return new F({xmin:s,xmax:r,ymin:e,ymax:o,spatialReference:n[0].spatialReference})}function Tn(n,t,i=null,s=!0){let r=n.spatialReference;if(r.equals(t))return n;let e=vn(n),o=_(r,!0),f=_(t);if(e===0||o==null||f==null){let a=Sn(n,t,i,s);if(o==null&&f!=null&&Math.abs(a.width-f)<N(t)&&B()){let c=I(r);if(c!=null&&c.poleLocation===sn.None&&n.width<(c.bbox[2]-c.bbox[0])/2)return An(n,t)||a}return a}let l=n.clone().normalize();if(l.length===1&&n.xmax<o&&n.xmax-o/2>N(r)){let{xmin:a,xmax:c}=n;for(let M=0;M<=e;M++){let y=M===0?a:-o/2,u=M===e?c-o*M:o/2;l[M]=new F({xmin:y,xmax:u,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return Nn(l.map(a=>Sn(a,t,i,s)).filter(fn))}function et(n,t,i){if(n.type==="extent"){let{xmin:s,ymin:r,xmax:e,ymax:o,spatialReference:f}=n;n=new Z({rings:[[[s,o],[e,o],[e,r],[s,r],[s,o]]],spatialReference:f})}return n.spatialReference.equals(t)?n:(L(n.spatialReference,t,i),W(n,t,i))}function An(n,t){let i=_(t);if(i==null)return null;let{xmin:s,ymin:r,xmax:e,ymax:o}=n,f=n.spatialReference,l=new Z({spatialReference:f,rings:[[[s,r],[e,r],[e,o],[s,o],[s,r]]]}),a=W(l,t);if(a.rings.length!==2||!a.rings[0].length||!a.rings[1].length)return null;let{rings:c}=a,M=N(f),y=new F({spatialReference:t});for(let u=0;u<2;u++){s=e=c[u][0][0],r=o=c[u][0][1];for(let x=0;x<c[u].length;x++)s=s>c[u][x][0]?c[u][x][0]:s,e=e<c[u][x][0]?c[u][x][0]:e,r=r>c[u][x][1]?c[u][x][1]:r,o=o<c[u][x][1]?c[u][x][1]:o;if(u===0)y.ymin=r,y.ymax=o,y.xmin=s,y.xmax=e;else if(y.ymin=Math.min(y.ymin,r),y.ymax=Math.max(y.ymax,o),Math.abs(e-i/2)<M)y.xmin=s,y.xmax=y.xmax+i;else{if(!(Math.abs(s+i/2)<M))return null;y.xmax=e+i}}return y}function Sn(n,t,i=null,s=!0,r=!0){let e=n.spatialReference;if(e.equals(t)||!t)return n;L(e,t,i);let o=W(n,t,i);if(r&&t.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;let f=J(e,!0),l=J(t,!0);if(f==null||l==null)return o;let a=N(e,.001),c=N(e,D),M=N(t,.001);if(Math.abs(o.xmin-l[0])<M&&Math.abs(o.xmax-l[1])<M){let y=Math.abs(n.xmin-f[0]),u=Math.abs(f[1]-n.xmax);if(y<a&&u>c){o.xmin=l[0];let x=[];x.push(new E(n.xmax,n.ymin,e)),x.push(new E(n.xmax,(n.ymin+n.ymax)/2,e)),x.push(new E(n.xmax,n.ymax,e));let p=x.map(m=>wn(m,t,i)).filter(m=>!isNaN(m?.x)).map(m=>m.x);o.xmax=Math.max.apply(null,p)}if(u<a&&y>c){o.xmax=l[1];let x=[];x.push(new E(n.xmin,n.ymin,e)),x.push(new E(n.xmin,(n.ymin+n.ymax)/2,e)),x.push(new E(n.xmin,n.ymax,e));let p=x.map(m=>wn(m,t,i)).filter(m=>!isNaN(m?.x)).map(m=>m.x);o.xmin=Math.min.apply(null,p)}}else{let y=N(t,.001);Math.abs(o.xmin-l[0])<y&&(o.xmin=l[0]),Math.abs(o.xmax-l[1])<y&&(o.xmax=l[1])}return o}function _(n,t=!1){if(!n)return null;let i=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*Wn[n.wkid]||null}function J(n,t=!1){if(n.isGeographic)return[-180,180];let i=_(n,t);return i!=null?[-i/2,i/2]:null}function bn(n,t,i,s){let r=(n-t)/i;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function vn(n,t=!1){let i=_(n.spatialReference);if(i==null)return 0;let s=t?0:-(i/2),r=N(n.spatialReference),e=!t&&Math.abs(n.xmax-i/2)<r?i/2:n.xmax,o=!t&&Math.abs(n.xmin+i/2)<r?-i/2:n.xmin;return bn(e,s,i,!0)-bn(o,s,i,!1)}function it(n){let t=n.storageInfo.origin.x,i=_(n.spatialReference,!0);if(i==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};let s=i/2,{nativePixelSize:r,storageInfo:e,extent:o}=n,{maximumPyramidLevel:f,blockWidth:l,pyramidScalingFactor:a}=e,c=r.x,M=[],y=n.transform!=null&&n.transform.type==="gcs-shift",u=t+(y?0:s),x=y?i-t:s-t;for(let p=0;p<=f;p++){let m=(o.xmax-t)/c/l,w=m-Math.floor(m)==0?m:Math.ceil(m),h=x/c/l,g=h-Math.floor(h)==0?h:Math.ceil(h),d=Math.floor(u/c/l),R=Math.round(u/c)%l,P=(l-Math.round(x/c)%l)%l;M.push({resolutionX:c,blockWidth:l,datasetColumnCount:w,worldColumnCountFromOrigin:g,leftMargin:R,rightPadding:P,originColumnOffset:d}),c*=a}return{originX:t,halfWorldWidth:s,pyramidsInfo:M,hasGCSSShiftTransform:y}}function Bn(n){if(!n||n.isGeographic)return n;let t=String(n.wkid||n.wkt2||n.wkt),i;return en.has(t)?i=en.get(t):(i=(n.wkid?v.coordsys(n.wkid):v.fromString(T.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),en.set(t,i)),new pn({wkid:i})}function ot(n){let t=n.isAdaptive&&n.spacing==null,i=n.spacing||[Y,Y],s=on(n),r={cols:s.size[0]+1,rows:s.size[1]+1},e=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2,o=s.outofBoundPointCount===s.offsets.length/2||t&&e?[0,0]:dn(s.offsets,r,i,nn),f=(o[0]+o[1])/2,l=n.projectedExtent.spatialReference,a=n.srcBufferExtent.spatialReference;if(t&&(e||f>nn)&&(En(l,a,n.datumTransformation)&&(l.isGeographic||I(l)),i=[q,q],s=on(Q(H({},n),{spacing:i})),r={cols:s.size[0]+1,rows:s.size[1]+1},o=dn(s.offsets,r,i,nn)),s.error=o,i[0]>1&&(s.coefficients=Gn(s.offsets,r,e)),n.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(a.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:i};else{let c=I(l);if(c!=null&&!c.isEnvelope){let M=Bn(l),y=Tn(n.projectedExtent,M),{offsets:u}=on(Q(H({},n),{srcBufferExtent:y,spacing:i})),x=Gn(u,r,e);s.gcsGrid={offsets:u,coefficients:x,spacing:i}}}return s}function on(n){let{projectedExtent:t,srcBufferExtent:i,pixelSize:s,datumTransformation:r,rasterTransform:e}=n,o=t.spatialReference,f=i.spatialReference,l=L(o,f),{xmin:a,ymin:c,xmax:M,ymax:y}=t,u=_(f),x=u!=null&&(n.hasWrapAround||e?.type==="gcs-shift"),p=n.spacing||[Y,Y],m=p[0]*s.x,w=p[1]*s.y,h=p[0]===1,g=Math.ceil((M-a)/m-.1/p[0])+(h?0:1),d=Math.ceil((y-c)/w-.1/p[1])+(h?0:1),R=In({cols:g,rows:d,xmin:a,ymax:y,xres:m,yres:w,inSR:o,outSR:f,datumTransformation:r,preferPE:p[0]<=q,usePixelCenter:h}),P=[],C,O=0,S=h?-1:NaN,{xmin:G,xmax:k,ymax:X,width:K,height:Cn}=i,_n=N(f,D),jn=u!=null&&G>0&&k>u/2,an=!1;if(l){let j=I(o);an=j!=null&&j.poleLocation>0}for(let j=0;j<g;j++){let U=[];for(let A=0;A<d;A++){let b=R[j*d+A];if(x&&b[0]>k&&b[0]>u/2-_n?b[0]-=u:x&&j===0&&b[0]<0&&jn&&!e&&(b[0]+=u),!b||isNaN(b[0])||isNaN(b[1]))P.push(S),P.push(S),U.push(null),O++;else{if(e){let ln=e.inverseTransform(new E({x:b[0],y:b[1],spatialReference:f}));b=[ln.x,ln.y]}U.push(b),j>0&&x&&C[A]&&b[0]<C[A][0]&&(b[0]+=u,an&&b[0]>k&&b[0]>u&&(b[0]-=u)),P.push((b[0]-G)/K),P.push((X-b[1])/Cn)}}C=U}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:O,spacing:p,size:h?[g,d]:[g-1,d-1]}}function Gn(n,t,i){let{cols:s,rows:r}=t,e=new Float32Array((s-1)*(r-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<s-1;l++){for(let a=0;a<r-1;a++){let c=l*r*2+2*a,M=n[c],y=n[c+1],u=n[c+2],x=n[c+3];c+=2*r;let p=n[c],m=n[c+1],w=n[c+2],h=n[c+3],g=0,d=12*(a*(s-1)+l);for(let R=0;R<3;R++)e[d++]=o[g++]*M+o[g++]*u+o[g++]*w;g=0;for(let R=0;R<3;R++)e[d++]=o[g++]*y+o[g++]*x+o[g++]*h;g=0;for(let R=0;R<3;R++)e[d++]=f[g++]*M+f[g++]*p+f[g++]*w;g=0;for(let R=0;R<3;R++)e[d++]=f[g++]*y+f[g++]*m+f[g++]*h}if(i)for(let a=0;a<e.length;a++)isNaN(e[a])&&(e[a]=-1)}return e}function Yn(n,t){let i=n.clone().normalize();return i.length===1?i[0]:Nn(i,t)}function st(n){let{spatialReference:t}=n,i=hn(t);if(!i)return n;let[s,r]=i.valid,e=r-s,o=0;if(n.xmin<s){let f=s-n.xmin;o=Math.ceil(f/e)}else if(n.xmin>r){let f=n.xmin-r;o=-Math.ceil(f/e)}return new F({spatialReference:n.spatialReference,xmin:n.xmin+o*e,ymin:n.ymin,xmax:n.xmax+o*e,ymax:n.ymax})}function rt(n,t,i){let{storageInfo:s,pixelSize:r}=t,e=0,o=!1,{pyramidResolutions:f}=s,l=s.tileInfo.format?.toLowerCase()==="mixed"?Math.max(1,Math.min(3,s.tileInfo.dpi/96)):1,a=(n.x+n.y)/2/l;if(f!=null&&f.length){let x=f[f.length-1],p=(x.x+x.y)/2,m=(r.x+r.y)/2;if(a<=m)e=0;else if(a>=p)e=f.length,o=a/p>8;else{let h,g=m;for(let d=1;d<=f.length;d++){if(h=(f[d-1].x+f[d-1].y)/2,a<=h){a===h?e=d:i==="down"?(e=d-1,o=a/g>8):e=i==="up"||a-g>h-a||a/g>2?d:d-1;break}g=h}}let w=e===0?r:f[e-1];return o&&Math.min(w.x,w.y)*z(t.spatialReference)>19567&&(o=!1),{pyramidLevel:e,pyramidResolution:new E({x:w.x,y:w.y,spatialReference:t.spatialReference}),excessiveReading:o}}let c=Math.log(n.x/r.x)/Math.LN2,M=Math.log(n.y/r.y)/Math.LN2,y=t.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(c,M)):i==="up"?Math.ceil(Math.max(c,M)):Math.round((c+M)/2),e<0?e=0:e>y&&(o=e>y+3,e=y);let u=2**e;return{pyramidLevel:e,pyramidResolution:new E({x:u*t.nativePixelSize.x,y:u*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function qn(n,t){let{pixelSize:i,extent:s}=n,r=zn(s,t,!1);return Tn(Yn(s,(i.x+i.y)/16),t,r)}function at(n,t,i){let s=i?.tileSize??512,r=i?.alignGlobalDatasetWithAGOL??!0,e=!!i?.limitToSrcResolution,{extent:o,spatialReference:f,pixelSize:l}=n,a=Mn(new E({x:l.x,y:l.y,spatialReference:f}),t,o);if(a==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};let c=(a.x+a.y)/2,M=z(t),y=c*M*96*39.37,u=t.isGeographic?256/s*2958287637958547e-7:256/s*591657527591555e-6,x=n.dataType==="vector-magdir"||n.dataType==="vector-uv",p=qn(n,t),m=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(u/2/y)/Math.LN2));if(!x&&r&&(t.isGeographic||t.isWebMercator)){let S=_(t);if(x=vn(p)>0||S!=null&&p.width>S/4,!x&&S!=null){let G=-1;if(m<3)G=2**m*c*s;else if(n.storageInfo){let{maximumPyramidLevel:X=0,pyramidScalingFactor:K=2}=n.storageInfo;G=K**X*c*s}let k=Math.ceil(S/G);x=k===1||k===2&&S/2-p.xmax<G}}let w,h=y,g=1.001,d=Math.min(2,Math.max(1.414,n.storageInfo?.pyramidScalingFactor||2));if(x){h=u;let S=t.isGeographic?1341104507446289e-21:.29858214164761665,G=S*(96*M*39.37),k=t.isGeographic?4326:3857;w=Mn(new E({x:S,y:S,spatialReference:{wkid:k}}),f,p),w.x*=h/G,w.y*=h/G}else{w={x:l.x,y:l.y};let S=0;for(;h<u*(g/2)&&S<m;)S++,h*=d,w.x*=d,w.y*=d;Math.max(h,u)/Math.min(h,u)<=g&&(h=u)}let R=[h],P=[{x:w.x,y:w.y}],C=70.5310735,O=Math.min(C,y)/g;for(;h>=O;)h/=d,w.x/=d,w.y/=d,R.push(h),P.push({x:w.x,y:w.y});if(e){let S=.001*l.x,G=P.findIndex(k=>k.x>=l.x-S&&k.x<=l.x+S);G>-1?(P.length=G+1,R.length=G+1):(G=P.findIndex(k=>k.x<=l.x+S),G>0&&(P.length=G,R.length=G))}return{projectedPixelSize:a,scales:R,srcResolutions:P,isCustomTilingScheme:!x}}export{En as a,tt as b,zn as c,Mn as d,wn as e,Tn as f,et as g,_ as h,vn as i,it as j,ot as k,st as l,rt as m,qn as n,at as o};