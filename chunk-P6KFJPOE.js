import{a as p}from"./chunk-PPZ64WFD.js";import{p as a}from"./chunk-REV6BOW7.js";import"./chunk-ZNEMFYSX.js";import"./chunk-ZB2MLS4M.js";import"./chunk-JIFV566L.js";import"./chunk-TALIOOAA.js";import"./chunk-6UOVQ25A.js";import"./chunk-BNSYK2BT.js";import"./chunk-DHY7QZ2H.js";import"./chunk-MFP2OFDR.js";import"./chunk-YC7IXNOA.js";import"./chunk-GUOR3BIM.js";import"./chunk-WXS2B4FF.js";import"./chunk-GNCG2SQP.js";import"./chunk-5JXPUH2D.js";import"./chunk-J4PQZSQE.js";import"./chunk-Q3WN5PJ6.js";import"./chunk-UMB6LRQI.js";import{a as l}from"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-IFPBW5UQ.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-K5NHJTKR.js";import"./chunk-XKXYUJUA.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-NYONONNN.js";import"./chunk-MZFPLWMN.js";import"./chunk-DS2JVXBM.js";import"./chunk-G3LLBABP.js";import"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-U4U366GW.js";import"./chunk-JTJ3UVF7.js";import"./chunk-R4TNLPIN.js";import"./chunk-5HLV7XP5.js";import"./chunk-BENVXA3L.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import{_ as s}from"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-VU5W7W6Y.js";import"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import"./chunk-EAH6BNBL.js";function S(e,i,n){let o=e.thumbnail&&e.thumbnail.url;return o?s(o,{responseType:"image"}).then(t=>{let m=u(t.data,n);return n?.node?(n.node.appendChild(m),n.node):m}):a(e).then(t=>t?i(t,n):null)}function u(e,i){let n=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,o=Math.max(e.width,e.height),t=i?.maxSize!=null?l(i.maxSize):p.maxSize;n&&(t=Math.min(o,t));let m=typeof i?.size=="number"?i?.size:null,h=Math.min(t,m!=null?l(m):o);if(h!==o){let r=e.width!==0&&e.height!==0?e.width/e.height:1;r>=1?(e.width=h,e.height=h/r):(e.width=h*r,e.height=h)}return e}export{S as previewWebStyleSymbol};