import{a as L,b as F}from"./chunk-EAH6BNBL.js";var G={color:[128,128,128,1],outlinecolor:[0,0,0,1],backgroundcolor:[128,128,128,1],borderlinecolor:[0,0,0,1],tintcolor:[255,255,255,1]},S={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMSolidFill:{enable:!0,colorlocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:"Loop",repeatdelay:0}};function q(e){return typeof e=="function"}function Q(e,t,r,o){return q(e)?e(t,r,o):e}function Z(e){return[e.r,e.g,e.b,e.a]}var H=` /-,
`;function E(e){let t=e.length;for(;t--;)if(!H.includes(e.charAt(t)))return!1;return!0}function _(e,t){let r=[],o=0,n=-1;do if(n=e.indexOf("[",o),n>=o){if(n>o){let a=e.substr(o,n-o);r.push([a,null,E(a)])}if(o=n+1,n=e.indexOf("]",o),n>=o){if(n>o){let a=t[e.substr(o,n-o)];a&&r.push([null,a,!1])}o=n+1}}while(n!==-1);if(o<e.length-1){let a=e.substr(o);r.push([a,null,E(a)])}return r}function ee(e,t,r,o){let n="",a=null;for(let M of t){let[i,l,y]=M;if(i)y?a=i:(a&&(n+=a,a=null),n+=i);else{let f=l;r!=null&&(f=Y(l,r));let c=e.attributes[f];c&&(a&&(n+=a,a=null),n+=c)}}return W(n,o)}function W(e,t){switch(typeof e!="string"&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function te(e,t,r,o,n,a,M=!0){let i=t/n,l=r/a,y=Math.ceil(i/2),f=Math.ceil(l/2);for(let c=0;c<a;c++)for(let m=0;m<n;m++){let C=4*(m+(M?a-c-1:c)*n),s=0,p=0,g=0,I=0,h=0,P=0,w=0,R=(c+.5)*l;for(let b=Math.floor(c*l);b<(c+1)*l;b++){let x=Math.abs(R-(b+.5))/f,B=(m+.5)*i,j=x*x;for(let k=Math.floor(m*i);k<(m+1)*i;k++){let u=Math.abs(B-(k+.5))/y,d=Math.sqrt(j+u*u);d>=-1&&d<=1&&(s=2*d*d*d-3*d*d+1,s>0&&(u=4*(k+b*t),w+=s*e[u+3],g+=s,e[u+3]<255&&(s=s*e[u+3]/250),I+=s*e[u],h+=s*e[u+1],P+=s*e[u+2],p+=s))}}o[C]=I/p,o[C+1]=h/p,o[C+2]=P/p,o[C+3]=w/g}}function J(e){return e?[e[0],e[1],e[2],e[3]/255]:[0,0,0,0]}function re(e){return e.data?.symbol??null}function oe(e){return e.type==="CIMVectorMarker"||e.type==="CIMPictureMarker"||e.type==="CIMBarChartMarker"||e.type==="CIMCharacterMarker"||e.type==="CIMPieChartMarker"||e.type==="CIMStackedBarChartMarker"}function ne(e){return e.type==="CIMGradientStroke"||e.type==="CIMPictureStroke"||e.type==="CIMSolidStroke"}function ae(e){return e!=null&&(e.type==="CIMGradientFill"||e.type==="CIMHatchFill"||e.type==="CIMPictureFill"||e.type==="CIMSolidFill"||e.type==="CIMWaterFill")}function U(e){return e!=null&&(e.type==="CIMMarkerPlacementAlongLineRandomSize"||e.type==="CIMMarkerPlacementAlongLineSameSize"||e.type==="CIMMarkerPlacementAlongLineVariableSize"||e.type==="CIMMarkerPlacementAtExtremities"||e.type==="CIMMarkerPlacementAtMeasuredUnits"||e.type==="CIMMarkerPlacementAtRatioPositions"||e.type==="CIMMarkerPlacementOnLine"||e.type==="CIMMarkerPlacementOnVertices")}var ie=(e,t=0)=>e==null||isNaN(e)?t:e,le=(e,t)=>e??t,se=e=>e.tintColor?J(e.tintColor):[255,255,255,1],ce=e=>{if(!e)return!1;for(let t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function ue(){return import("./chunk-PM74IUJK.js")}function fe(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function me(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function Me(e){let t="normal",r="normal";if(e){let o=e.toLowerCase();o.includes("italic")?t="italic":o.includes("oblique")&&(t="oblique"),o.includes("bold")?r="bold":o.includes("light")&&(r="lighter")}return{style:t,weight:r}}function ye(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function T(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(let t of e.symbolLayers){let r=T(t);if(r!=null)return r}break;case"CIMTextSymbol":return T(e.symbol);case"CIMSolidFill":return e.color}return null}function A(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{let t=e.symbolLayers;if(t)for(let r of t){let o=A(r);if(o!=null)return o}break}case"CIMTextSymbol":return A(e.symbol);case"CIMSolidStroke":return e.color}}function V(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(let t of e.symbolLayers){let r=V(t);if(r!==void 0)return r}break;case"CIMTextSymbol":return V(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function Ce(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function de(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function pe(e){return(e?Object.keys(e):[]).map(t=>({name:t,alias:t,type:typeof e[t]=="string"?"esriFieldTypeString":"esriFieldTypeDouble"}))}var Ie=e=>e.includes("data:image/svg+xml");function ge(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function D(e){return e&&e.charAt(0).toLowerCase()+e.substring(1)}function he(e,t,r,o,n,a){let{infos:M}=a,i=1,l=0,y=0,f=0;for(let{offsetX:C,offsetY:s,rotation:p,size:g,frameHeight:I,rotateClockWise:h}of M)y=N(C,s,l,i,y),f=v(C,s,l,i,f),I&&(i*=g/I),l=O(p,h,l);let c=N(o,n,l,i,y),m=v(o,n,l,i,f);return{size:e*i,rotation:O(t,r,l),offsetX:c,offsetY:m}}function X(e){if(e==null)return!1;if(Array.isArray(e))return e.every(t=>X(t));switch(typeof e){case"string":return!!e;case"number":return!isNaN(e)}}function be(e,t){if(t==="color"||t==="outlinecolor"||t==="backgroundcolor"||t==="borderlinecolor"||t==="tintcolor")return[...G[t]];let r=S[e];if(!r)throw new Error(`InternalError: default value for type ${e}.`);return r[t]}function ke(e){return e?.dashTemplate&&typeof e.dashTemplate=="string"&&(e.dashTemplate=e.dashTemplate.split(" ").map(Number)),e}function z(e){if(e==null)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=e.symbolLayers;if(!t)return"Normal";for(let r of t)if(r.type==="CIMVectorMarker")return z(r)}break;case"CIMVectorMarker":{let t=e.markerGraphics;if(!t)return"Normal";for(let r of t)if(r.symbol)return z(r.symbol)}}return"Normal"}function Se(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers){for(let r of e.symbolLayers)if(r)switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{let o=r.size??S.CIMVectorMarker.size;o>t&&(t=o);break}}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers){for(let r of e.symbolLayers)if(r)switch(r.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{let o=r.width;o!=null&&o>t&&(t=o);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(r.markerPlacement&&U(r.markerPlacement)){let o=r.size??S.CIMVectorMarker.size;o>t&&(t=o)}break;case"CIMPictureFill":{let o=r.height;o!=null&&o>t&&(t=o)}}}return t}}}function Y(e,t){if(t!==null){let r=t.get(e);return r?r.name:e}return e}function Pe(e){return e.map(t=>F(L({},t),{propertyName:D(t.propertyName)}))}function we(e){let t={};for(let r in e){let o=e[r];t[D(r)]=o}return t}function v(e,t,r,o,n){let a=r*Math.PI/180;if(a){let M=Math.cos(a);return(Math.sin(a)*e+M*t)*o+n}return t*o+n}function N(e,t,r,o,n){let a=r*Math.PI/180;return a?(Math.cos(a)*e-Math.sin(a)*t)*o+n:e*o+n}function O(e,t,r){return t?r-e:r+e}export{S as a,Q as b,Z as c,_ as d,ee as e,te as f,J as g,re as h,oe as i,ne as j,ae as k,U as l,ie as m,le as n,se as o,ce as p,ue as q,fe as r,me as s,Me as t,ye as u,T as v,A as w,V as x,Ce as y,de as z,pe as A,Ie as B,ge as C,D,he as E,X as F,be as G,ke as H,z as I,Se as J,Y as K,Pe as L,we as M};