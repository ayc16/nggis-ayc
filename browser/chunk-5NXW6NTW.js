import{a as j}from"./chunk-DDZ3KR2Q.js";import{a as F}from"./chunk-FXKKVZVX.js";import{a as f}from"./chunk-KBOF5WGE.js";import"./chunk-X6FZ7Z76.js";import"./chunk-5RW6D2ZS.js";import"./chunk-N7KNO35F.js";import"./chunk-53X2B37Z.js";import"./chunk-6UOVQ25A.js";import"./chunk-BNSYK2BT.js";import"./chunk-DHY7QZ2H.js";import"./chunk-MFP2OFDR.js";import"./chunk-NFADXGWT.js";import"./chunk-YTC2EJDQ.js";import{b as y}from"./chunk-DR5D3NPO.js";import"./chunk-ERH7ZNSC.js";import"./chunk-GUOR3BIM.js";import"./chunk-WXS2B4FF.js";import"./chunk-GNCG2SQP.js";import"./chunk-J4PQZSQE.js";import"./chunk-KYP6LPQU.js";import"./chunk-UMB6LRQI.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-IFPBW5UQ.js";import"./chunk-RHHHYJSZ.js";import"./chunk-QBQKFGOZ.js";import"./chunk-XKXYUJUA.js";import"./chunk-F7PIPM6E.js";import"./chunk-FR6Q4MSQ.js";import"./chunk-C6JT6KYF.js";import"./chunk-BCREO4Q5.js";import"./chunk-6FWNINU2.js";import"./chunk-ES7AH7WX.js";import"./chunk-RSDQHAJX.js";import"./chunk-NYONONNN.js";import"./chunk-MZFPLWMN.js";import"./chunk-DS2JVXBM.js";import"./chunk-G3LLBABP.js";import"./chunk-T4B3RN6B.js";import"./chunk-MXADXAOS.js";import"./chunk-RJHITHLB.js";import"./chunk-CGTLZX6D.js";import"./chunk-JTJ3UVF7.js";import"./chunk-R4TNLPIN.js";import"./chunk-5HLV7XP5.js";import"./chunk-BENVXA3L.js";import"./chunk-UI76XBLJ.js";import"./chunk-UE2YGKE7.js";import{p as h}from"./chunk-BE76S5KT.js";import"./chunk-3RDV3O6N.js";import"./chunk-D2ITYHSM.js";import"./chunk-FIITBHDP.js";import"./chunk-VSVNPPHQ.js";import{_ as R}from"./chunk-CTGIUUCS.js";import"./chunk-VWEBO6QK.js";import"./chunk-KAAR5ZJN.js";import"./chunk-W3WDPWBE.js";import"./chunk-WKT5W7KT.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-X3IDZTNG.js";import"./chunk-IQJU4QT3.js";import{a as s,b as l,h as c}from"./chunk-EAH6BNBL.js";function I(o,t){let e=o.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!t?.returnCountOnly?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=h(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}function S(o,t,e){return c(this,null,function*(){let r=yield x(o,t,e),a=r.data,u=a.geometryType,n=a.spatialReference,i={};for(let d of a.relatedRecordGroups){let m={fields:void 0,objectIdFieldName:void 0,geometryType:u,spatialReference:n,hasZ:!!a.hasZ,hasM:!!a.hasM,features:d.relatedRecords};if(d.objectId!=null)i[d.objectId]=m;else for(let p of Object.keys(d))p!=="relatedRecords"&&(i[d[p]]=m)}return l(s({},r),{data:i})})}function b(o,t,e){return c(this,null,function*(){let r=yield x(o,t,e,{returnCountOnly:!0}),a=r.data,u={};for(let n of a.relatedRecordGroups)n.objectId!=null&&(u[n.objectId]=n.count);return l(s({},r),{data:u})})}function x(a,u){return c(this,arguments,function*(o,t,e={},r){let n=j(s(s(l(s({},o.query),{f:"json"}),r),I(t,r)));return R(o.path+"/queryRelatedRecords",l(s({},e),{query:s(s({},e.query),n)}))})}function J(o,t,e){return c(this,null,function*(){t=f.from(t);let r=y(o);return S(r,t,e).then(a=>{let u=a.data,n={};return Object.keys(u).forEach(i=>n[i]=F.fromJSON(u[i])),n})})}function k(o,t,e){return c(this,null,function*(){t=f.from(t);let r=y(o);return b(r,t,s({},e)).then(a=>a.data)})}export{J as executeRelationshipQuery,k as executeRelationshipQueryForCount};
