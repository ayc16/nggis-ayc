import{a as l}from"./chunk-BYHNGOPC.js";import{a as y}from"./chunk-DDZ3KR2Q.js";import{Y as i,aa as u,k as h}from"./chunk-375OYO4P.js";import"./chunk-AUTL5LCV.js";import"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import"./chunk-W3WDPWBE.js";import"./chunk-GISCFF3Z.js";import"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import"./chunk-HQMV3KQV.js";import"./chunk-CRMMDK2Z.js";import{a as s,b as d,h as f}from"./chunk-EAH6BNBL.js";function b(n){let t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function T(n,t){let e={};for(let o of t){let{parentObjectId:a,parentGlobalId:r,attachmentInfos:m}=o;for(let c of m){let{id:I}=c,j=h(i(`${n.path}/${a}/attachments/${I}`)),p=l.fromJSON(c);p.set({url:j,parentObjectId:a,parentGlobalId:r}),e[a]?e[a].push(p):e[a]=[p]}}return e}function g(n,t,e){let o={query:y(s(d(s({},n.query),{f:"json"}),b(t)))};return e&&(o=d(s(s({},e),o),{query:s(s({},e.query),o.query)})),u(n.path+"/queryAttachments",o).then(a=>a.data.attachmentGroups)}function w(n,t,e){return f(this,null,function*(){let{objectIds:o}=t,a=[];for(let r of o)a.push(u(n.path+"/"+r+"/attachments",e));return Promise.all(a).then(r=>o.map((m,c)=>({parentObjectId:m,attachmentInfos:r[c].data.attachmentInfos})))})}export{g as executeAttachmentQuery,w as fetchAttachments,T as processAttachmentQueryResult};
