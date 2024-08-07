import{a as be,b as Ee,c as Ce,d as Fe,e as $e,f as Oe,g as je,h as Se}from"./chunk-5JXPUH2D.js";import{a as ye,c as Ae,d as we,e as xe}from"./chunk-SAOUSUZE.js";import{r as E}from"./chunk-X3IDZTNG.js";var qe,ze,ke={exports:{}};ze=function(){function n(o,g){function d(){this.constructor=o}d.prototype=g.prototype,o.prototype=new d}function c(o,g,d,r){var v=Error.call(this,o);return Object.setPrototypeOf&&Object.setPrototypeOf(v,c.prototype),v.expected=g,v.found=d,v.location=r,v.name="SyntaxError",v}function l(o,g,d){return d=d||" ",o.length>g?o:(g-=o.length,o+(d+=d.repeat(g)).slice(0,g))}function C(o,g){var d,r={},v=(g=g!==void 0?g:{}).grammarSource,O={start:ve},I=ve,M="none",N=")",h=",",y="(",j="%",w="px",W="cm",X="mm",Y="in",Z="pt",ee="pc",re="deg",te="rad",ne="grad",ae="turn",Me="#",Ne=".",Pe="e",ue=/^[ \t\n\r]/,oe=/^[a-z\-]/,ce=/^[0-9a-fA-F]/,ie=/^[+\-]/,R=/^[0-9]/,Be=z("none"),Te=x("none",!1),De=x(")",!1),fe=x(",",!1),He=z("whitespace"),se=B([" ","	",`
`,"\r"],!1,!1),Ue=z("function"),Ge=x("(",!1),_e=z("identifier"),le=B([["a","z"],"-"],!1,!1),Je=z("percentage"),Ke=x("%",!1),Le=z("length"),Qe=x("px",!1),Ve=x("cm",!1),We=x("mm",!1),Xe=x("in",!1),Ye=x("pt",!1),Ze=x("pc",!1),er=z("angle"),rr=x("deg",!1),tr=x("rad",!1),nr=x("grad",!1),ar=x("turn",!1),ur=z("number"),or=z("color"),cr=x("#",!1),pe=B([["0","9"],["a","f"],["A","F"]],!1,!1),he=B(["+","-"],!1,!1),k=B([["0","9"]],!1,!1),ir=x(".",!1),fr=x("e",!1),sr=function(){return[]},lr=function(e,a){return{type:"function",name:e,parameters:a||[]}},pr=function(e,a){return a.length>0?Jr(e,a,3):[e]},hr=function(e){return{type:"quantity",value:e.value,unit:e.unit}},mr=function(e){return{type:"color",colorType:e.type,value:e.value}},gr=function(e){return e},vr=function(){return H()},dr=function(e){return{value:e,unit:"%"}},yr=function(e){return{value:e,unit:"px"}},Ar=function(e){return{value:e,unit:"cm"}},wr=function(e){return{value:e,unit:"mm"}},xr=function(e){return{value:e,unit:"in"}},br=function(e){return{value:e,unit:"pt"}},Er=function(e){return{value:e,unit:"pc"}},Cr=function(e){return{value:e,unit:"deg"}},Fr=function(e){return{value:e,unit:"rad"}},$r=function(e){return{value:e,unit:"grad"}},Or=function(e){return{value:e,unit:"turn"}},jr=function(e){return{value:e,unit:null}},Sr=function(){return{type:"hex",value:H()}},qr=function(e){return{type:"function",value:e}},zr=function(){return{type:"named",value:H()}},Rr=function(){return parseFloat(H())},t=0,m=0,D=[{line:1,column:1}],q=0,_=[],i=0;if("startRule"in g){if(!(g.startRule in O))throw new Error(`Can't start parsing from rule "`+g.startRule+'".');I=O[g.startRule]}function H(){return o.substring(m,t)}function x(e,a){return{type:"literal",text:e,ignoreCase:a}}function B(e,a,u){return{type:"class",parts:e,inverted:a,ignoreCase:u}}function kr(){return{type:"end"}}function z(e){return{type:"other",description:e}}function me(e){var a,u=D[e];if(u)return u;for(a=e-1;!D[a];)a--;for(u={line:(u=D[a]).line,column:u.column};a<e;)o.charCodeAt(a)===10?(u.line++,u.column=1):u.column++,a++;return D[e]=u,u}function ge(e,a,u){var s=me(e),A=me(a),p={source:v,start:{offset:e,line:s.line,column:s.column},end:{offset:a,line:A.line,column:A.column}};return u&&v&&typeof v.offset=="function"&&(p.start=v.offset(p.start),p.end=v.offset(p.end)),p}function f(e){t<q||(t>q&&(q=t,_=[]),_.push(e))}function Ir(e,a,u){return new c(c.buildMessage(e,a),e,a,u)}function ve(){var e;return(e=Mr())===r&&(e=Nr()),e}function Mr(){var e,a;return i++,e=t,b(),o.substr(t,4)===M?(a=M,t+=4):(a=r,i===0&&f(Te)),a!==r?(b(),m=e,e=sr()):(t=e,e=r),i--,e===r&&i===0&&f(Be),e}function Nr(){var e,a;if(e=[],(a=J())!==r)for(;a!==r;)e.push(a),a=J();else e=r;return e}function J(){var e,a,u,s;return e=t,b(),(a=Br())!==r?(b(),(u=Pr())===r&&(u=null),b(),o.charCodeAt(t)===41?(s=N,t++):(s=r,i===0&&f(De)),s!==r?(b(),m=e,e=lr(a,u)):(t=e,e=r)):(t=e,e=r),e}function Pr(){var e,a,u,s,A,p,$,U;if(e=t,(a=K())!==r){for(u=[],s=t,A=b(),o.charCodeAt(t)===44?(p=h,t++):(p=r,i===0&&f(fe)),p===r&&(p=null),$=b(),(U=K())!==r?s=A=[A,p,$,U]:(t=s,s=r);s!==r;)u.push(s),s=t,A=b(),o.charCodeAt(t)===44?(p=h,t++):(p=r,i===0&&f(fe)),p===r&&(p=null),$=b(),(U=K())!==r?s=A=[A,p,$,U]:(t=s,s=r);m=e,e=pr(a,u)}else t=e,e=r;return e}function K(){var e,a;return e=t,(a=Tr())===r&&(a=Dr())===r&&(a=Hr())===r&&(a=Ur()),a!==r&&(m=e,a=hr(a)),(e=a)===r&&(e=t,(a=Gr())!==r&&(m=e,a=mr(a)),e=a),e}function b(){var e,a;for(i++,e=[],ue.test(o.charAt(t))?(a=o.charAt(t),t++):(a=r,i===0&&f(se));a!==r;)e.push(a),ue.test(o.charAt(t))?(a=o.charAt(t),t++):(a=r,i===0&&f(se));return i--,a=r,i===0&&f(He),e}function Br(){var e,a,u;return i++,e=t,(a=de())!==r?(o.charCodeAt(t)===40?(u=y,t++):(u=r,i===0&&f(Ge)),u!==r?(m=e,e=gr(a)):(t=e,e=r)):(t=e,e=r),i--,e===r&&(a=r,i===0&&f(Ue)),e}function de(){var e,a,u;if(i++,e=t,a=[],oe.test(o.charAt(t))?(u=o.charAt(t),t++):(u=r,i===0&&f(le)),u!==r)for(;u!==r;)a.push(u),oe.test(o.charAt(t))?(u=o.charAt(t),t++):(u=r,i===0&&f(le));else a=r;return a!==r&&(m=e,a=vr()),i--,(e=a)===r&&(a=r,i===0&&f(_e)),e}function Tr(){var e,a,u;return i++,e=t,b(),(a=F())!==r?(o.charCodeAt(t)===37?(u=j,t++):(u=r,i===0&&f(Ke)),u!==r?(m=e,e=dr(a)):(t=e,e=r)):(t=e,e=r),i--,e===r&&i===0&&f(Je),e}function Dr(){var e,a,u;return i++,e=t,b(),(a=F())!==r?(o.substr(t,2)===w?(u=w,t+=2):(u=r,i===0&&f(Qe)),u!==r?(m=e,e=yr(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(a=F())!==r?(o.substr(t,2)===W?(u=W,t+=2):(u=r,i===0&&f(Ve)),u!==r?(m=e,e=Ar(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(a=F())!==r?(o.substr(t,2)===X?(u=X,t+=2):(u=r,i===0&&f(We)),u!==r?(m=e,e=wr(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(a=F())!==r?(o.substr(t,2)===Y?(u=Y,t+=2):(u=r,i===0&&f(Xe)),u!==r?(m=e,e=xr(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(a=F())!==r?(o.substr(t,2)===Z?(u=Z,t+=2):(u=r,i===0&&f(Ye)),u!==r?(m=e,e=br(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(a=F())!==r?(o.substr(t,2)===ee?(u=ee,t+=2):(u=r,i===0&&f(Ze)),u!==r?(m=e,e=Er(a)):(t=e,e=r)):(t=e,e=r)))))),i--,e===r&&i===0&&f(Le),e}function Hr(){var e,a,u;return i++,e=t,(a=F())!==r?(o.substr(t,3)===re?(u=re,t+=3):(u=r,i===0&&f(rr)),u!==r?(m=e,e=Cr(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,(a=F())!==r?(o.substr(t,3)===te?(u=te,t+=3):(u=r,i===0&&f(tr)),u!==r?(m=e,e=Fr(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,(a=F())!==r?(o.substr(t,4)===ne?(u=ne,t+=4):(u=r,i===0&&f(nr)),u!==r?(m=e,e=$r(a)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,(a=F())!==r?(o.substr(t,4)===ae?(u=ae,t+=4):(u=r,i===0&&f(ar)),u!==r?(m=e,e=Or(a)):(t=e,e=r)):(t=e,e=r)))),i--,e===r&&(a=r,i===0&&f(er)),e}function Ur(){var e,a;return i++,e=t,b(),(a=F())!==r?(m=e,e=jr(a)):(t=e,e=r),i--,e===r&&i===0&&f(ur),e}function Gr(){var e,a,u,s;if(i++,e=t,o.charCodeAt(t)===35?(a=Me,t++):(a=r,i===0&&f(cr)),a!==r){if(u=[],ce.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(pe)),s!==r)for(;s!==r;)u.push(s),ce.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(pe));else u=r;u!==r?(m=e,e=Sr()):(t=e,e=r)}else t=e,e=r;return e===r&&(e=t,(a=J())!==r&&(m=e,a=qr(a)),(e=a)===r&&(e=t,(a=de())!==r&&(m=e,a=zr()),e=a)),i--,e===r&&(a=r,i===0&&f(or)),e}function F(){var e,a,u,s,A,p,$;for(e=t,ie.test(o.charAt(t))?(o.charAt(t),t++):i===0&&f(he),a=t,u=[],R.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(k));s!==r;)u.push(s),R.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(k));if(o.charCodeAt(t)===46?(s=Ne,t++):(s=r,i===0&&f(ir)),s!==r){if(A=[],R.test(o.charAt(t))?(p=o.charAt(t),t++):(p=r,i===0&&f(k)),p!==r)for(;p!==r;)A.push(p),R.test(o.charAt(t))?(p=o.charAt(t),t++):(p=r,i===0&&f(k));else A=r;A!==r?a=u=[u,s,A]:(t=a,a=r)}else t=a,a=r;if(a===r)if(a=[],R.test(o.charAt(t))?(u=o.charAt(t),t++):(u=r,i===0&&f(k)),u!==r)for(;u!==r;)a.push(u),R.test(o.charAt(t))?(u=o.charAt(t),t++):(u=r,i===0&&f(k));else a=r;if(a!==r){if(u=t,o.charCodeAt(t)===101?(s=Pe,t++):(s=r,i===0&&f(fr)),s!==r){if(ie.test(o.charAt(t))?(A=o.charAt(t),t++):(A=r,i===0&&f(he)),A===r&&(A=null),p=[],R.test(o.charAt(t))?($=o.charAt(t),t++):($=r,i===0&&f(k)),$!==r)for(;$!==r;)p.push($),R.test(o.charAt(t))?($=o.charAt(t),t++):($=r,i===0&&f(k));else p=r;p!==r?u=s=[s,A,p]:(t=u,u=r)}else t=u,u=r;u===r&&(u=null),m=e,e=Rr()}else t=e,e=r;return e}function _r(e,a){return e.map(function(u){return u[a]})}function Jr(e,a,u){return[e].concat(_r(a,u))}if((d=I())!==r&&t===o.length)return d;throw d!==r&&t<o.length&&f(kr()),Ir(_,q<o.length?o.charAt(q):null,q<o.length?ge(q,q+1):ge(q,q))}return n(c,Error),c.prototype.format=function(o){var g="Error: "+this.message;if(this.location){var d,r=null;for(d=0;d<o.length;d++)if(o[d].source===this.location.source){r=o[d].text.split(/\r\n|\n|\r/g);break}var v=this.location.start,O=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(v):v,I=this.location.source+":"+O.line+":"+O.column;if(r){var M=this.location.end,N=l("",O.line.toString().length," "),h=r[v.line-1],y=(v.line===M.line?M.column:h.length+1)-v.column||1;g+=`
 --> `+I+`
`+N+` |
`+O.line+" | "+h+`
`+N+" | "+l("",v.column-1," ")+l("",y,"^")}else g+=`
 at `+I}return g},c.buildMessage=function(o,g){var d={literal:function(h){return'"'+v(h.text)+'"'},class:function(h){var y=h.parts.map(function(j){return Array.isArray(j)?O(j[0])+"-"+O(j[1]):O(j)});return"["+(h.inverted?"^":"")+y.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(h){return h.description}};function r(h){return h.charCodeAt(0).toString(16).toUpperCase()}function v(h){return h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(y){return"\\x0"+r(y)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(y){return"\\x"+r(y)})}function O(h){return h.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(y){return"\\x0"+r(y)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(y){return"\\x"+r(y)})}function I(h){return d[h.type](h)}function M(h){var y,j,w=h.map(I);if(w.sort(),w.length>0){for(y=1,j=1;y<w.length;y++)w[y-1]!==w[y]&&(w[j]=w[y],j++);w.length=j}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1]}}function N(h){return h?'"'+v(h)+'"':"end of input"}return"Expected "+M(o)+" but "+N(g)+" found."},{SyntaxError:c,parse:C}},(qe=ke).exports&&(qe.exports=ze());var Kr=ke.exports;function vt(n){if(!n||n.length===0)return null;if(typeof n=="string"){let l=Re(n);return l&&l.length!==0?l:null}let c=n.map(l=>{if(!Number.isFinite(l.scale)||l.scale<=0)throw new E("effect:invalid-scale","scale must be finite and greater than 0",{stop:l});return{scale:l.scale,effects:Re(l.value)}});c.sort((l,C)=>C.effects.length-l.effects.length);for(let l=0;l<c.length-1;l++){if(!je(c[l].effects,c[l+1].effects))throw new E("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:c[l].effects,b:c[l+1].effects});Se(c[l].effects,c[l+1].effects)}return c.sort((l,C)=>C.scale-l.scale),c}function Re(n){let c;if(!n)return[];try{c=Kr.parse(n)}catch(l){throw new E("effect:invalid-syntax","Invalid effect syntax",{value:n,error:l})}return c.map(l=>Lr(l))}function Lr(n){try{switch(n.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return Qr(n);case"opacity":return Vr(n);case"hue-rotate":return Wr(n);case"blur":return Xr(n);case"drop-shadow":return Yr(n);case"bloom":return Zr(n)}}catch(c){throw c.details.filter=n,c}throw new E("effect:unknown-effect",`Effect '${n.name}' is not supported`,{effect:n})}function Qr(n){let c=1;return P(n.parameters,1),n.parameters.length===1&&(c=S(n.parameters[0])),new Ce(n.name,c)}function Vr(n){let c=1;return P(n.parameters,1),n.parameters.length===1&&(c=S(n.parameters[0])),new Oe(c)}function Wr(n){let c=0;return P(n.parameters,1),n.parameters.length===1&&(c=ut(n.parameters[0])),new $e(c)}function Xr(n){let c=0;return P(n.parameters,1),n.parameters.length===1&&(c=V(n.parameters[0]),T(c,n.parameters[0])),new Ee(c)}function Yr(n){let c=[],l=null;for(let C of n.parameters)if(C.type==="color"){if(c.length&&Object.freeze(c),l)throw new E("effect:type-error","Accepts only one color",{});l=ot(C)}else{let o=V(C);if(Object.isFrozen(c))throw new E("effect:type-error","<length> parameters not consecutive",{lengths:c});c.push(o),c.length===3&&T(o,C)}if(c.length<2||c.length>3)throw new E("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${c.length}}`,{lengths:c});return new Fe(c[0],c[1],c[2]||0,l||Ie("black"))}function Zr(n){let c=1,l=0,C=0;return P(n.parameters,3),n.parameters[0]&&(c=S(n.parameters[0])),n.parameters[1]&&(l=V(n.parameters[1]),T(l,n.parameters[1])),n.parameters[2]&&(C=S(n.parameters[2])),new be(c,l,C)}function P(n,c){if(n.length>c)throw new E("effect:type-error",`Function supports up to ${c} parameters, Actual: ${n.length}`,{parameters:n})}function G(n){if(n.type==="color")return"<color>";if(n.unit){if(n.unit in Q)return"<length>";if(n.unit in L)return"<angle>";if(n.unit==="%")return"<percentage>"}return"<double>"}function T(n,c){if(n<0)throw new E("effect:type-error",`Negative values are not allowed, Actual: ${n}`,{term:c})}function et(n){if(n.type!=="quantity"||n.unit!==null)throw new E("effect:type-error",`Expected <double>, Actual: ${G(n)}`,{term:n})}function rt(n){if(n.type!=="quantity"||n.unit!==null&&n.unit!=="%")throw new E("effect:type-error",`Expected <double> or <percentage>, Actual: ${G(n)}`,{term:n})}var L={deg:1,grad:.9,rad:180/Math.PI,turn:360};function tt(n){if(n.type!=="quantity"||!(n.value===0&&n.unit===null||n.unit&&L[n.unit]!=null))throw new E("effect:type-error",`Expected <angle>, Actual: ${G(n)}`,{term:n})}var Q={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function nt(n){if(n.type!=="quantity"||!(n.value===0&&n.unit===null||n.unit&&Q[n.unit]!=null))throw new E("effect:type-error",`Expected <length>, Actual: ${G(n)}`,{term:n})}function S(n){rt(n);let c=n.value;return T(c,n),n.unit==="%"?.01*c:c}function at(n){return et(n),T(n.value,n),n.value}function ut(n){return tt(n),n.value*L[n.unit]||0}function V(n){return nt(n),n.value*Q[n.unit]||0}function ot(n){switch(n.colorType){case"hex":return xe(n.value);case"named":return Ie(n.value);case"function":return ft(n.value)}}function Ie(n){if(!ye(n))throw new E("effect:unknown-color",`color '${n}' isn't valid`,{namedColor:n});return Ae(n)}var ct=/^rgba?/i,it=/^hsla?/i;function ft(n){if(P(n.parameters,4),ct.test(n.name))return[S(n.parameters[0]),S(n.parameters[1]),S(n.parameters[2]),n.parameters[3]?S(n.parameters[3]):1];if(it.test(n.name))return we(at(n.parameters[0]),S(n.parameters[1]),S(n.parameters[2]),n.parameters[3]?S(n.parameters[3]):1);throw new E("effect:syntax-error",`Invalid color function '${n.name}'`,{colorFunction:n})}export{vt as a};
