import{a as g}from"./chunk-4NF4EJM6.js";import{a as C}from"./chunk-KLXERNY4.js";import{b as B}from"./chunk-RZU6EEB3.js";import{a as A}from"./chunk-V2KSICSA.js";import{b as U,c as R,e as M,f as $,i as J,j as F}from"./chunk-R4TNLPIN.js";import{A as S,O,s as N,t as x,u as v}from"./chunk-CTGIUUCS.js";import{G as j,l as P}from"./chunk-VWEBO6QK.js";import{i as I}from"./chunk-KAAR5ZJN.js";import{r as w}from"./chunk-X3IDZTNG.js";import{a as f,b as y}from"./chunk-EAH6BNBL.js";function re(e){let r=e?.origins??[void 0];return(o,n)=>{let t=T(e,o,n);for(let a of r){let i=j(o,a,n);for(let s in t)i[s]=t[s]}}}function T(e,r,o){if(e?.type==="resource")return z(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{let{read:n,write:t}=F;return{read:n,write:t}}}}function z(e,r,o){let n=I(r,o);return{type:String,read:(t,a,i)=>{let s=R(t,a,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(t,a,i,s){if(!s?.resources)return typeof t=="string"?void(a[i]=U(t,s)):void(a[i]=t.write({},s));let c=q(t),p=U(c,y(f({},s),{verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),J.NO),l=n.type!==String&&(!C(this)||s?.origin&&this.originIdOf(o)>P(s.origin)),u={object:this,propertyName:o,value:t,targetUrl:p,dest:a,targetPropertyName:i,context:s,params:e};s?.portalItem&&p&&!x(p)?l&&e?.contentAddressed?b(u):l?H(u):k(u):s?.portalItem&&(p==null||M(p)!=null||v(p)||l)?b(u):a[i]=p}}}}function b(e){let{targetUrl:r,params:o,value:n,context:t,dest:a,targetPropertyName:i}=e;if(!t.portalItem)return;let s=$(r),c=E(n,r,t);if(o?.contentAddressed&&c.type!=="json")return void t.messages?.push(new w("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c}));let p=o?.contentAddressed&&c.type==="json"?B(c.jsonString):s?.filename??A(),l=N(o?.prefix??s?.prefix,p),u=`${l}.${g(c)}`;if(o?.contentAddressed&&t.resources&&c.type==="json"){let d=t.resources.toKeep.find(({resource:h})=>h.path===u)??t.resources.toAdd.find(({resource:h})=>h.path===u);if(d)return void(a[i]=d.resource.itemRelativeUrl)}let m=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(S(r).then(d=>{m.path=`${l}.${g({type:"blob",blob:d})}`,a[i]=m.itemRelativeUrl}).catch(()=>{}));let K=o?.compress??!1;t.resources&&D(y(f({},e),{resource:m,content:c,compress:K,updates:t.resources.toAdd})),a[i]=m.itemRelativeUrl}function H(e){let{context:r,targetUrl:o,params:n,value:t,dest:a,targetPropertyName:i}=e;if(!r.portalItem)return;let s=r.portalItem.resourceFromPath(o),c=E(t,o,r),p=g(c),l=O(s.path),u=n?.compress??!1;p===l?(r.resources&&D(y(f({},e),{resource:s,content:c,compress:u,updates:r.resources.toUpdate})),a[i]=o):b(e)}function k({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function D({object:e,propertyName:r,updates:o,resource:n,content:t,compress:a}){let i=s=>{G(e,r,s)};o.push({resource:n,content:t,compress:a,finish:i})}function E(e,r,o){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function q(e){return e==null?null:typeof e=="string"?e:e.url}function G(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{re as a};
