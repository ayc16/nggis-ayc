import{a as m}from"./chunk-2622HKWI.js";import{b as L}from"./chunk-NTZFJQ5B.js";import{a as d,b as f,c as v,d as y,e as F,f as w,g as M,h as D,i as P}from"./chunk-OH7RKM56.js";import"./chunk-SDN2KOT5.js";import{a as T}from"./chunk-U4HPUUFA.js";import{a as S}from"./chunk-6HK2OLZA.js";import{a as g}from"./chunk-GK2MPWKO.js";import{a as G}from"./chunk-4AU42ZT7.js";import{b}from"./chunk-UAZOXZEX.js";import{b as I}from"./chunk-OJFSOL62.js";import"./chunk-IISBSAYJ.js";import"./chunk-2TKJWM7A.js";import"./chunk-PRVSRJH5.js";import"./chunk-QWLQUMDY.js";import"./chunk-UIR6P2R4.js";import"./chunk-M76YZBV5.js";import"./chunk-HXQMOXFX.js";import"./chunk-BKKKVIAS.js";import"./chunk-BCREO4Q5.js";import"./chunk-76YVRX2R.js";import"./chunk-OZF6BMOL.js";import"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import"./chunk-SF6Z2K5H.js";import"./chunk-GBTN5LIS.js";import"./chunk-JOSG37QF.js";import"./chunk-SLMQFZE3.js";import"./chunk-BN2F4ATU.js";import{c as x}from"./chunk-DJULDHPW.js";import"./chunk-NDG5FXLR.js";import"./chunk-V477EWXM.js";import"./chunk-5ODCEDHC.js";import"./chunk-2KZICFRS.js";import"./chunk-D2RUV6O4.js";import"./chunk-4JWMB5SM.js";import"./chunk-VOYK3LZF.js";import"./chunk-HOJTYTYD.js";import"./chunk-XNEAL2YW.js";import"./chunk-J7M5V2SQ.js";import"./chunk-HRFJUMCP.js";import"./chunk-375OYO4P.js";import"./chunk-AUTL5LCV.js";import"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import"./chunk-W3WDPWBE.js";import"./chunk-GISCFF3Z.js";import"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import{t as p}from"./chunk-HQMV3KQV.js";import"./chunk-CRMMDK2Z.js";import{h as u}from"./chunk-EAH6BNBL.js";function oe(t,a){return u(this,null,function*(){let r=t.instance.portalItem;if(r?.id)return yield r.load(a),R(t),t.validateItem&&t.validateItem(r),E(t,a)})}function R(t){let a=t.instance.portalItem;if(!a?.type||!t.supportedTypes.includes(a.type))throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:t.supportedTypes.join(", ")})}function E(t,a){return u(this,null,function*(){let r=t.instance,e=r.portalItem;if(!e)return;let{url:o,title:s}=e,n=m(e,"portal-item");if(r.type==="group")return N(r,n,t);o&&r.type!=="media"&&r.read({url:o},n);let l=new d,i=yield A(t,l,a);return i&&r.read(i,n),r.resourceReferences={portalItem:e,paths:n.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:s},n),g(r,n)})}function N(t,a,r){return u(this,null,function*(){let e=t.portalItem;if(!t.sourceIsPortalItem)return;let{title:o,type:s}=e;if(s==="Group Layer"){if(!b(e,"Map"))throw new p("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return j(t)}return t.read({title:o},a),J(t,r)})}function j(t){return u(this,null,function*(){let a=t.portalItem,r=yield a.fetchData("json");if(!r)return;let e=m(a,"web-map");t.read(r,e),yield L(t,r,{context:e}),t.resourceReferences={portalItem:a,paths:e.readResourcePaths??[]}})}function J(t,a){return u(this,null,function*(){let r,{portalItem:e}=t;if(!e)return;let o=e.type,s=a.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":r=s.FeatureLayer;break;case"Stream Service":r=s.StreamLayer;break;case"Scene Service":r=s.SceneLayer;break;default:throw new p("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}let n=new d,[l,i]=yield Promise.all([r(),A(a,n)]),c=()=>l;if(o==="Feature Service"){let C=y(i)?.customParameters;i=e.url?yield v(i,e.url,n):{},c=(yield Q(i,s))||c;let O=yield H(e.url,{customParameters:C,loadContext:n});return yield h(t,c,i,O)}return o==="Scene Service"&&e.url&&(i=yield P(e,i,n)),w(i)>0?yield h(t,c,i):yield $(t,c)})}function $(t,a){return u(this,null,function*(){let{portalItem:r}=t;if(!r?.url)return;let e=yield S(r.url);e&&h(t,a,{layers:e.layers?.map(f),tables:e.tables?.map(f)})})}function h(t,a,r,e){return u(this,null,function*(){let o=r.layers||[],s=r.tables||[];if(t.portalItem?.type==="Feature Collection"?(o.forEach((n,l)=>{n.id=l,n?.layerDefinition?.type==="Table"&&s.push(n)}),o=o.filter(n=>n?.layerDefinition?.type!=="Table")):(o.reverse(),s.reverse()),o.forEach(n=>{let l=e?.(n);if(l||!e){let i=k(t,a(n),r,n,l);t.add(i)}}),s.length){let n=yield G.FeatureLayer();s.forEach(l=>{let i=e?.(l);if(i||!e){let c=k(t,n,r,l,i);t.tables.add(c)}})}})}function k(t,a,r,e,o){let s=t.portalItem,n={portalItem:s.clone(),layerId:e.id};e.url!=null&&(n.url=e.url);let l=new a(n);if("sourceJSON"in l&&(l.sourceJSON=o),l.type!=="subtype-group"&&l.type!=="catalog"&&(l.sublayerTitleMode="service-name"),s.type==="Feature Collection"){let i={origin:"portal-item",portal:s.portal||x.getDefault()};l.read(e,i);let c=r.showLegend;c!=null&&l.read({showLegend:c},i)}return l}function A(t,a,r){return u(this,null,function*(){if(t.supportsData===!1)return;let e=t.instance,o=e.portalItem;if(!o)return;let s=null;try{s=yield o.fetchData("json",r)}catch{}if(q(e)){let n=null,l=yield B(o,s,a);if((s?.layers||s?.tables)&&l>0){if(e.layerId==null){let i=M(e.type),c=i?F(s,i)[0]:y(s);c&&(e.layerId=c.id)}n=K(s,e),n?.layerType==="OrientedImageryLayer"&&e.type==="oriented-imagery"&&e.supportedSourceTypes.add("Feature Layer"),n&&s.showLegend!=null&&(n.showLegend=s.showLegend)}return l>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),n}return s})}function B(t,a,r){return u(this,null,function*(){if(a?.layers&&a?.tables)return w(a);let e=I(t.url);if(!e)return 1;let o=yield r.fetchServiceMetadata(e.url.path,{customParameters:y(a)?.customParameters}).catch(()=>null);return(a?.layers?.length??o?.layers?.length??0)+(a?.tables?.length??o?.tables?.length??0)})}function K(t,a){let{layerId:r}=a,e=t.layers?.find(o=>o.id===r)||t.tables?.find(o=>o.id===r);return e&&z(e,a)?e:null}function q(t){return t.type!=="stream"&&"layerId"in t}function z(t,a){let r="layerType"in t&&t.layerType,{type:e}=a;return!(e==="feature"&&r&&t.layerType!=="ArcGISFeatureLayer"||e==="catalog"&&!r||e==="oriented-imagery"&&!r||e==="subtype-group"&&!r)}function H(t,a){return u(this,null,function*(){let{layersJSON:r}=yield T(t,a);if(!r)return null;let e=[...r.layers,...r.tables];return o=>e.find(s=>s.id===o.id)})}function Q(t,a){return u(this,null,function*(){let{layers:r}=t;if(!r?.length)return;let e=new Set,o=[];for(let{layerType:l}of r){let i=l??"ArcGISFeatureLayer";if(e.has(i))continue;e.add(i);let c=a[D(i)];o.push(c())}let s=yield Promise.all(o),n=new Map;return Array.from(e).forEach((l,i)=>{n.set(l,s[i])}),({layerType:l})=>{let i=l??"ArcGISFeatureLayer";return n.get(i)}})}export{oe as load};
