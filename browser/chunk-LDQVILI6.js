import{a as q}from"./chunk-JKXW4XLP.js";import{n as j,p as E,t as C}from"./chunk-V2ACH6PW.js";import"./chunk-NOUYXRP4.js";import"./chunk-CXKNFANK.js";import"./chunk-HX3FHHCG.js";import"./chunk-ZOOQQO74.js";import"./chunk-OGOKP66I.js";import"./chunk-BZEC7TCW.js";import"./chunk-WD4CT5CX.js";import"./chunk-Z33JZO3Q.js";import{i as k}from"./chunk-4EPSQXU6.js";import{a as G}from"./chunk-PPZ64WFD.js";import"./chunk-BZNA47H5.js";import"./chunk-AC7AQWXQ.js";import"./chunk-37H4LYIE.js";import{a as D}from"./chunk-TBR6RMWR.js";import"./chunk-ZNEMFYSX.js";import"./chunk-ZB2MLS4M.js";import"./chunk-JIO2NKRP.js";import{B as _}from"./chunk-JIFV566L.js";import"./chunk-VAIXCJGK.js";import"./chunk-ER5QN5R7.js";import"./chunk-53X2B37Z.js";import"./chunk-6UOVQ25A.js";import"./chunk-BNSYK2BT.js";import"./chunk-DHY7QZ2H.js";import"./chunk-MFP2OFDR.js";import"./chunk-2UDQ3IWX.js";import"./chunk-YC7IXNOA.js";import"./chunk-GUOR3BIM.js";import"./chunk-WXS2B4FF.js";import"./chunk-J57HR4DB.js";import"./chunk-Q7HARYVW.js";import"./chunk-3NRQ53KE.js";import"./chunk-GNCG2SQP.js";import"./chunk-5JXPUH2D.js";import"./chunk-J4PQZSQE.js";import"./chunk-KYP6LPQU.js";import"./chunk-UMB6LRQI.js";import{a as H,b as z}from"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-IFPBW5UQ.js";import"./chunk-6ZT4EXDX.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-K5NHJTKR.js";import"./chunk-XKXYUJUA.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-Z5Q76SB7.js";import"./chunk-E5R4OI7X.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-NYONONNN.js";import"./chunk-MZFPLWMN.js";import"./chunk-DS2JVXBM.js";import"./chunk-G3LLBABP.js";import"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-CGTLZX6D.js";import"./chunk-JTJ3UVF7.js";import"./chunk-R4TNLPIN.js";import"./chunk-5HLV7XP5.js";import"./chunk-BENVXA3L.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-VU5W7W6Y.js";import"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{h as P}from"./chunk-EAH6BNBL.js";var $=96/72,F=class{constructor(a){this._spatialReference=a,this._imageDataCanvas=null,this._cimResourceManager=new q}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}rasterizeCIMSymbolAsync(a,m,r,n,t,i,l,y,b){return P(this,null,function*(){if(!a)return null;let{data:f}=a;if(!f||f.type!=="CIMSymbolReference"||!f.symbol)return null;let{symbol:I}=f;i||(i=_(I));let c=yield D.resolveSymbolOverrides(f,m,this._spatialReference,t,i,l,y),u=this._cimResourceManager,g=[];C.fetchResources(c,u,g),C.fetchFonts(c,u,g),g.length>0&&(yield Promise.all(g));let{width:o,height:s}=r,S=V(i,o,s,n),e=C.getEnvelope(c,S,u);if(!e)return null;let h=1,v=0,x=0;switch(I.type){case"CIMPointSymbol":case"CIMTextSymbol":{let d=1;e.width>o&&(d=o/e.width);let M=1;e.height>s&&(M=s/e.height),n==="preview"&&(e.width<o&&(d=o/e.width),e.height<s&&(M=s/e.height)),h=Math.min(d,M),v=e.x+e.width/2,x=e.y+e.height/2}break;case"CIMLineSymbol":{(b||e.height>s)&&(h=s/e.height),x=e.y+e.height/2;let d=e.x*h+o/2,M=(e.x+e.width)*h+o/2,{paths:R}=S;R[0][0][0]-=d/h,R[0][2][0]-=(M-o)/h}break;case"CIMPolygonSymbol":{v=e.x+e.width/2,x=e.y+e.height/2;let d=e.x*h+o/2,M=(e.x+e.width)*h+o/2,R=e.y*h+s/2,T=(e.y+e.height)*h+s/2,{rings:w}=S;d<0&&(w[0][0][0]-=d,w[0][3][0]-=d,w[0][4][0]-=d),R<0&&(w[0][0][1]+=R,w[0][1][1]+=R,w[0][4][1]+=R),M>o&&(w[0][1][0]-=M-o,w[0][2][0]-=M-o),T>s&&(w[0][2][1]+=T-s,w[0][3][1]+=T-s)}}let W={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(W,o,s,v,x,h,i,1,S)})}rasterize(a,m,r,n,t,i,l,y=0,b=null){let{data:f}=a;if(!f||f.type!=="CIMSymbolReference"||!f.symbol)return null;let{symbol:I}=f,c=this._canvas,u=(window.devicePixelRatio||1)*$;c.width=m*u,c.height=r*u,l||(l=_(I)),b||(b=V(l,m,r,"legend")),c.width+=2*y,c.height+=2*y;let g=c.getContext("2d",{willReadFrequently:!0}),o=j.createIdentity();return o.translate(-n,-t),o.scale(i*u,-i*u),o.translate(m*u/2+y,r*u/2+y),g.clearRect(0,0,c.width,c.height),new E(g,this._cimResourceManager,o,!0).drawSymbol(I,b),g.getImageData(0,0,c.width,c.height)}};function V(p,a,m,r){let t=-a/2+1,i=a/2-1,l=m/2-1,y=-m/2+1;switch(p){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[t,0],[0,0],[i,0]]]};default:return r==="legend"?{rings:[[[t,l],[i,0],[i,y],[t,y],[t,l]]]}:{rings:[[[t,l],[i,l],[i,y],[t,y],[t,l]]]}}}var O=new F(null),L=z(G.size),A=z(G.maxSize),U=z(G.lineWidth),B=1;function J(p,a,m){return P(this,null,function*(){let r=a?.size,n=r!=null&&typeof r=="object"&&"width"in r?r.width:r,t=r!=null&&typeof r=="object"&&"height"in r?r.height:r;if(n==null||t==null)if(m==="esriGeometryPolygon")n=L,t=L;else{let i=yield K(p,a,m);i&&(n=i.width,t=i.height),m==="esriGeometryPolyline"&&(n=U),n=n!=null&&isFinite(n)?Math.min(n,A):L,t=t!=null&&isFinite(t)?Math.max(Math.min(t,A),B):L}return a.style==="legend"&&m==="esriGeometryPolyline"&&(n=U),{width:n,height:t}})}function K(p,a,m){return P(this,null,function*(){let{feature:r,fieldMap:n,viewParams:t}=a.cimOptions||a,i=yield D.resolveSymbolOverrides(p.data,r,null,n,m,null,t);if(!i)return null;(p=p.clone()).data={type:"CIMSymbolReference",symbol:i},p.data.primitiveOverrides=void 0;let l=[];return C.fetchResources(i,O.resourceManager,l),C.fetchFonts(i,O.resourceManager,l),l.length>0&&(yield Promise.all(l)),C.getEnvelope(i,null,O.resourceManager)})}function he(m){return P(this,arguments,function*(p,a={}){let{node:r,opacity:n,symbolConfig:t}=a,i=t!=null&&typeof t=="object"&&"isSquareFill"in t&&t.isSquareFill,l=a.cimOptions||a,y=l.geometryType||_(p?.data?.symbol),b=yield J(p,a,y),{feature:f,fieldMap:I}=l,c=i||y!=="esriGeometryPolygon"?"preview":"legend",u=yield O.rasterizeCIMSymbolAsync(p,f,b,c,I,y,null,l.viewParams,l.allowScalingUp);if(!u)return null;let{width:g,height:o}=u,s=document.createElement("canvas");s.width=g,s.height=o,s.getContext("2d").putImageData(u,0,0);let S=H(b.width),e=H(b.height),h=new Image(S,e);h.src=s.toDataURL(),h.ariaLabel=a.ariaLabel??null,h.alt=a.ariaLabel??"",n!=null&&(h.style.opacity=`${n}`);let v=h;if(a.effectView!=null){let x={shape:{type:"image",x:0,y:0,width:S,height:e,src:h.src},fill:null,stroke:null,offset:[0,0]};v=k([[x]],[S,e],{effectView:a.effectView,ariaLabel:a.ariaLabel})}return r&&v&&r.appendChild(v),v})}export{he as previewCIMSymbol};
