import{a as z,b as x,c as M,d as g}from"./chunk-LOEAA5XF.js";import{a as N}from"./chunk-LX5FIKVZ.js";import{a as F}from"./chunk-MFP2OFDR.js";import{a as D}from"./chunk-TLLESPR2.js";import{p as C}from"./chunk-X3IDZTNG.js";var y=()=>C.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),T=new N,S=Math.PI,_=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function U(r,t,a){let e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(c=>c.type==="color"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void y().warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");let i=typeof t=="number",n=i?null:t,l=n?.attributes,o=i?t:null,s=e.field,{ipData:f,hasExpression:v}=e.cache,u=e.cache.compiledFunc;if(!s&&!v){let c=e.stops;return c&&c[0]&&c[0].color}if(typeof o!="number")if(v){if(a?.arcade==null)return void y().error("Use of arcade expressions requires an arcade context");let c={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},d=a.arcade.arcadeUtils,h=d.getViewInfo(c),V=d.createExecContext(n,h,a.timeZone);if(!u){let w=d.createSyntaxTree(e.valueExpression);u=d.createFunction(w),e.cache.compiledFunc=u}o=d.executeFunction(u,V)}else l&&(o=l[s]);let p=e.normalizationField,b=l!=null&&p!=null?parseFloat(l[p]):void 0;if(o!=null&&(!p||i||!isNaN(b)&&b!==0)){isNaN(b)||i||(o/=b);let c=R(o,f);if(c){let d=c[0],h=c[1],V=d===h?e.stops[d].color:F.blendColors(e.stops[d].color,e.stops[h].color,c[2],a?.color);return new F(V)}}}function q(r,t,a){let e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(c=>c.type==="opacity"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void y().warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");let i=typeof t=="number",n=i?null:t,l=n?.attributes,o=i?t:null,s=e.field,{ipData:f,hasExpression:v}=e.cache,u=e.cache.compiledFunc;if(!s&&!v){let c=e.stops;return c&&c[0]&&c[0].opacity}if(typeof o!="number")if(v){if(a?.arcade==null)return void y().error("Use of arcade expressions requires an arcade context");let c={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},d=a.arcade.arcadeUtils,h=d.getViewInfo(c),V=d.createExecContext(n,h,a.timeZone);if(!u){let w=d.createSyntaxTree(e.valueExpression);u=d.createFunction(w),e.cache.compiledFunc=u}o=d.executeFunction(u,V)}else l&&(o=l[s]);let p=e.normalizationField,b=l!=null&&p!=null?parseFloat(l[p]):void 0;if(o!=null&&(!p||i||!isNaN(b)&&b!==0)){isNaN(b)||i||(o/=b);let c=R(o,f);if(c){let d=c[0],h=c[1];if(d===h)return e.stops[d].opacity;{let V=e.stops[d].opacity;return V+(e.stops[h].opacity-V)*c[2]}}}}function I(r,t,a){let e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(b=>b.type==="rotation"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void y().warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");let i=e.axis||"heading",n=i==="heading"&&e.rotationType==="arithmetic"?90:0,l=i==="heading"&&e.rotationType==="arithmetic"?-1:1,o=typeof t=="number"?null:t,s=o?.attributes,f=e.field,{hasExpression:v}=e.cache,u=e.cache.compiledFunc,p=0;if(!f&&!v)return p;if(v){if(a?.arcade==null)return void y().error("Use of arcade expressions requires an arcade context");let b={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},c=a.arcade.arcadeUtils,d=c.getViewInfo(b),h=c.createExecContext(o,d,a.timeZone);if(!u){let V=c.createSyntaxTree(e.valueExpression);u=c.createFunction(V),e.cache.compiledFunc=u}p=c.executeFunction(u,h)}else s&&(p=s[f]||0);return p=typeof p!="number"||isNaN(p)?null:n+l*p,p}function A(r,t,a){let e=typeof t=="number",i=e?null:t,n=i?.attributes,l=e?t:null,{isScaleDriven:o}=r.cache,s=r.cache.compiledFunc;if(o){let v=a?.scale,u=a?.view;l=v==null||u==="3d"?O(r):v}else if(!e)switch(r.inputValueType){case z.Expression:{if(a?.arcade==null)return void y().error("Use of arcade expressions requires an arcade context");let v={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},u=a.arcade.arcadeUtils,p=u.getViewInfo(v),b=u.createExecContext(i,p,a.timeZone);if(!s){let c=u.createSyntaxTree(r.valueExpression);s=u.createFunction(c),r.cache.compiledFunc=s}l=u.executeFunction(s,b);break}case z.Field:n&&(l=n[r.field]);break;case z.Unknown:l=null}if(!g(l))return null;if(e||!r.normalizationField)return l;let f=n?parseFloat(n[r.normalizationField]):null;return g(f)&&f!==0?l/f:null}function O(r){let t=null,a=null,e=r.stops;return e?(t=e[0].value,a=e[e.length-1].value):(t=r.minDataValue||0,a=r.maxDataValue||0),(t+a)/2}function E(r,t,a){let e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(n=>n.type==="size"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void y().warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");let i=j(A(e,t,a),e,t,a,e.cache.ipData);return i==null||isNaN(i)?0:i}function m(r,t,a){return r==null?null:M(r)?E(r,t,a):g(r)?r:null}function k(r,t,a){return g(a)&&r>a?a:g(t)&&r<t?t:r}function Z(r,t,a,e){return r+((m(t.minSize,a,e)||t.minDataValue)??0)}function L(r,t,a){let e=r.stops,i=e?.length&&e[0].size;return i==null&&(i=r.minSize),m(i,t,a)}function P(r,t,a,e){let i=(r-t.minDataValue)/(t.maxDataValue-t.minDataValue),n=m(t.minSize,a,e),l=m(t.maxSize,a,e),o=e?.shape;if(r<=t.minDataValue)return n;if(r>=t.maxDataValue)return l;if(n==null||l==null)return null;if(t.scaleBy==="area"&&o){let s=o==="circle",f=s?S*(n/2)**2:n*n,v=f+i*((s?S*(l/2)**2:l*l)-f);return s?2*Math.sqrt(v/S):Math.sqrt(v)}return n+i*(l-n)}function $(r,t,a,e){let i=e?.shape,n=r/t.minDataValue,l=m(t.minSize,a,e),o=m(t.maxSize,a,e),s=null;return s=i==="circle"?2*Math.sqrt(n*(l/2)**2):i==="square"||i==="diamond"||i==="image"?Math.sqrt(n*l**2):n*l,k(s,l,o)}function B(r,t,a,e,i){let[n,l,o]=R(r,i);if(n===l)return m(t.stops?.[n].size,a,e);{let s=m(t.stops?.[n].size,a,e);return s+(m(t.stops?.[l].size,a,e)-s)*o}}function W(r,t,a,e){let i=(e?.resolution??1)*D[t.valueUnit],n=m(t.minSize,a,e),l=m(t.maxSize,a,e),{valueRepresentation:o}=t,s=null;return s=o==="area"?2*Math.sqrt(r/S)/i:o==="radius"||o==="distance"?2*r/i:r/i,k(s,n,l)}function j(r,t,a,e,i){switch(t.transformationType){case x.Additive:return Z(r,t,a,e);case x.Constant:return L(t,a,e);case x.ClampedLinear:return P(r,t,a,e);case x.Proportional:return $(r,t,a,e);case x.Stops:return B(r,t,a,e,i);case x.RealWorldSize:return W(r,t,a,e);case x.Identity:return r;case x.Unknown:return null}}function ee(r,t,a){let{isScaleDriven:e}=r.cache;if(!(e&&a==="3d"||t))return null;let i={scale:t,view:a},n=m(r.minSize,T,i),l=m(r.maxSize,T,i);if(n!=null||l!=null){if(n>l){let o=l;l=n,n=o}return{minSize:n,maxSize:l}}}function ae(r,t,a){if(!r.visualVariables)return;let e=[],i=[],n=[],l=[],o=[];for(let s of r.visualVariables)switch(s.type){case"color":i.push(s);break;case"opacity":n.push(s);break;case"rotation":o.push(s);break;case"size":l.push(s)}return i.forEach(s=>{let f=U(s,t,a);e.push({variable:s,value:f})}),n.forEach(s=>{let f=q(s,t,a);e.push({variable:s,value:f})}),o.forEach(s=>{let f=I(s,t,a);e.push({variable:s,value:f})}),l.forEach(s=>{let f=E(s,t,a);e.push({variable:s,value:f})}),e.filter(s=>s.value!=null)}function R(r,t){if(!t)return;let a=0,e=t.length-1;return t.some((i,n)=>r<i?(e=n,!0):(a=n,!1)),[a,e,(r-t[a])/(t[e]-t[a])]}function re(r,t,a){let e=["proportional","proportional","proportional"];for(let i of r){let n=i.useSymbolValue?"symbol-value":E(i,t,a);switch(i.axis){case"width":e[0]=n;break;case"depth":e[1]=n;break;case"height":e[2]=n;break;case"width-and-depth":e[0]=n,e[1]=n;break;case"all":case void 0:case null:e[0]=n,e[1]=n,e[2]=n;break;default:i.axis}}return e}export{_ as a,U as b,q as c,I as d,E as e,m as f,j as g,ee as h,ae as i,re as j};