import{a as j,b as h}from"./chunk-LHY2TOIB.js";import{b as v,c as N,d as F,e as D,f as P}from"./chunk-Y3NWBZAI.js";import{f as d}from"./chunk-4DZRVMTV.js";import{A as T,k as S,l as g}from"./chunk-JJANIEGN.js";import{c as U}from"./chunk-DJULDHPW.js";import{a as c}from"./chunk-V477EWXM.js";import{H as b,h as u}from"./chunk-375OYO4P.js";import{t as p}from"./chunk-HQMV3KQV.js";function K(t,e,l,r){let o=t.name;return o==null?Promise.reject(new p("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&t.styleName==="Esri2DPointSymbolsStyle"?R(o,e,r):v(t,e,r).then(a=>M(a,o,e,l,F,r))}function J(t,e){return e.items.find(l=>l.name===t)}function M(t,e,l,r,o,a){let n=l?.portal!=null?l.portal:U.getDefault(),w={portal:n,url:u(t.baseUrl),origin:"portal-item"},s=J(e,t.data);if(!s){let f=`The symbol name '${e}' could not be found`;return Promise.reject(new p("symbolstyleutils:symbol-name-not-found",f,{symbolName:e}))}let i=c(o(s,r),w),y=s.thumbnail?.href??null,O=s.thumbnail?.imageData;j()&&(i=h(i)??"",y=h(y));let I={portal:n,url:u(b(i)),origin:"portal-item"};return D(i,a).then(f=>{let A=r==="cimRef"?N(f.data):f.data,m=d(A,I);if(m&&T(m)){if(y){let E=c(y,w);m.thumbnail=new g({url:E})}else O&&(m.thumbnail=new g({url:`data:image/png;base64,${O}`}));t.styleUrl?m.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(m.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return m})}function R(t,e,l){let r=P.replaceAll(/\{SymbolName\}/gi,t),o=e.portal!=null?e.portal:U.getDefault();return D(r,l).then(a=>{let n=N(a.data);return d(n,{portal:o,url:u(b(r)),origin:"portal-item"})})}export{K as a,J as b,M as c};
