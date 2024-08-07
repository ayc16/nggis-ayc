import{a as w}from"./chunk-3RDV3O6N.js";import{l as x}from"./chunk-X3IDZTNG.js";import{a as S}from"./chunk-EAH6BNBL.js";var b={ar:[".",","],bg:[",","\xA0"],bs:[",","."],ca:[",","."],cs:[",","\xA0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xA0"],fi:[",","\xA0"],fr:[",","\u202F"],"fr-ch":[",","\u202F"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xA0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xA0"],lv:[",","\xA0"],mk:[",","."],nb:[",","\xA0"],nl:[",","."],pl:[",","\xA0"],pt:[",","."],"pt-pt":[",","\xA0"],ro:[",","."],ru:[",","\xA0"],sk:[",","\xA0"],sl:[",","."],sr:[",","."],sv:[",","\xA0"],th:[".",","],tr:[",","."],uk:[",","\xA0"],vi:[",","."],zh:[".",","]};function E(e=w()){let r=(e=e.toLowerCase())in b;if(!r){let o=e.split("-");o.length>1&&o[0]in b&&(e=o[0],r=!0),r||(e="en")}let[t,n,s="#,##0.###"]=b[e];return{decimal:t,group:n,pattern:s}}function R(e,r){let t=E((r=S({},r)).locale);r.customs=t;let n=r.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:z(e,n,r)}var v=/[#0,]*[#0](?:\.0*#*)?/;function z(e,r,t){let n=(t=t||{}).customs.group,s=t.customs.decimal,o=r.split(";"),l=o[0];if((r=o[e<0?1:0]||"-"+l).includes("%"))e*=100;else if(r.includes("\u2030"))e*=1e3;else{if(r.includes("\xA4"))throw new Error("currency notation not supported");if(r.includes("E"))throw new Error("exponential notation not supported")}let d=v,u=l.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+r);return t.fractional===!1&&(t.places=0),r.replace(d,O(e,u[0],{decimal:s,group:n,places:t.places,round:t.round}))}function O(e,r,t){(t=t||{}).places===!0&&(t.places=0),t.places===1/0&&(t.places=6);let n=r.split("."),s=typeof t.places=="string"&&t.places.indexOf(","),o=t.places;s?o=t.places.substring(s+1):+o>=0||(o=(n[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(o))));let l=String(Math.abs(e)).split("."),d=l[1]||"";if(n[1]||t.places){s&&(t.places=t.places.substring(0,s));let c=t.places!==void 0?t.places:n[1]&&n[1].lastIndexOf("0")+1;+c>d.length&&(l[1]=d.padEnd(Number(c),"0")),+o<d.length&&(l[1]=d.substr(0,Number(o)))}else l[1]&&l.pop();let u=n[0].replace(",",""),g=u.indexOf("0");g!==-1&&(g=u.length-g,g>l[0].length&&(l[0]=l[0].padStart(g,"0")),u.includes("#")||(l[0]=l[0].substr(l[0].length-g)));let p,i,a=n[0].lastIndexOf(",");if(a!==-1){p=n[0].length-a-1;let c=n[0].substr(0,a);a=c.lastIndexOf(","),a!==-1&&(i=c.length-a-1)}let f=[];for(let c=l[0];c;){let m=c.length-p;f.push(m>0?c.substr(m):c),c=m>0?c.slice(0,m):"",i&&(p=i,i=void 0)}return l[0]=f.reverse().join(t.group||","),l.join(t.decimal||".")}function y(e){let r=E((e=e||{}).locale),t=e.pattern||r.pattern,n=r.group,s=r.decimal,o=1;if(t.includes("%"))o/=100;else if(t.includes("\u2030"))o/=1e3;else if(t.includes("\xA4"))throw new Error("currency notation not supported");let l=t.split(";");return l.length===1&&l.push("-"+l[0]),{regexp:h(l,u=>(u="(?:"+x(u,".")+")").replace(v,g=>{let p={signed:!1,separator:e.strict?n:[n,""],fractional:e.fractional,decimal:s,exponent:!1},i=g.split("."),a=e.places;i.length===1&&o!==1&&(i[1]="###"),i.length===1||a===0?p.fractional=!1:(a===void 0&&(a=e.pattern?i[1].lastIndexOf("0")+1:1/0),a&&e.fractional==null&&(p.fractional=!0),!e.places&&+a<i[1].length&&(a+=","+i[1].length),p.places=a);let f=i[0].split(",");return f.length>1&&(p.groupSize=f.pop().length,f.length>1&&(p.groupSize2=f.pop().length)),"("+I(p)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:n,decimal:s,factor:o}}function C(e,r){let t=y(r),n=new RegExp("^"+t.regexp+"$").exec(e);if(!n)return NaN;let s=n[1];if(!n[1]){if(!n[2])return NaN;s=n[2],t.factor*=-1}return s=s.replaceAll(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(s)*t.factor}function I(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);let r=N(e),t=h(e.fractional,s=>{let o="";return s&&e.places!==0&&(o="\\"+e.decimal,e.places===1/0?o="(?:"+o+"\\d+)?":o+="\\d{"+e.places+"}"),o},!0),n=r+t;return t&&(n="(?:(?:"+n+")|(?:"+t+"))"),n+h(e.exponent,s=>s?"([eE]"+N({signed:e.eSigned})+")":"")}function N(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,r=>r?"[-+]":"",!0)+h(e.separator,r=>{if(!r)return"(?:\\d+)";(r=x(r))===" "?r="\\s":r==="\xA0"&&(r="\\s\\xa0");let t=e.groupSize,n=e.groupSize2;if(n){let s="(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+r+"]\\d{"+n+"})*["+r+"]\\d{"+t+"})";return t-n>0?"(?:"+s+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":s}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+r+"]\\d{"+t+"})*)"},!0)}var h=(e,r,t)=>{if(!(e instanceof Array))return r(e);let n=[];for(let s=0;s<e.length;s++)n.push(r(e[s]));return j(n.join("|"),!!t)},j=(e,r)=>"("+(r?"?:":"")+e+")";export{R as a,y as b,C as c};
