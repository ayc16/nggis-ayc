import{a as D}from"./chunk-5H3X7WYB.js";import{a as A}from"./chunk-GMW3QDVG.js";import{a as z}from"./chunk-RHABF3KL.js";import{h as ot}from"./chunk-OW7DVBQB.js";import{a as u}from"./chunk-UVJ5D37D.js";import{a as x}from"./chunk-CP4KE5S6.js";import{a as st}from"./chunk-CF52RSJZ.js";import{a as I}from"./chunk-ALWV3RJ2.js";import{a as at}from"./chunk-7C6Z24SS.js";import{a as k,b as $,c as J,g as K,h as Q,i as tt,k as et,l as rt,m as it}from"./chunk-EBWCXIFH.js";import{b as h,d as Z,f as E}from"./chunk-76YVRX2R.js";import{c as j}from"./chunk-OZF6BMOL.js";import{a as X,c as N}from"./chunk-GJP6PTKT.js";import{F as Y,L as l,O as q}from"./chunk-AUTL5LCV.js";import{S as G}from"./chunk-KUJG22IX.js";import{a as n}from"./chunk-W3WDPWBE.js";import{h as w}from"./chunk-CRMMDK2Z.js";var C=class{constructor(){this.id=Y()}};var F;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(F||(F={}));function At(t){return Math.abs(t*t*t)}function nt(t,e,r){let s=r.parameters;return M.scale=Math.min(s.divisor/(e-s.offset),1),M.factor=At(t),M}function lt(t,e){return Z(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function Dt(t,e,r){let s=nt(t,e,r);return s.minScaleFactor=0,lt(1,s)}function wt(t,e,r,s){s.scale=Dt(t,e,r),s.factor=0,s.minScaleFactor=r.minScaleFactor}function Yt(t,e,r=[0,0]){let s=Math.min(Math.max(e.scale,e.minScaleFactor),1);return r[0]=t[0]*s,r[1]=t[1]*s,r}function ct(t,e,r,s){return lt(t,nt(e,r,s))}var Gt={curvatureDependent:{min:{curvature:E(10),tiltAngle:E(12),scaleFallOffFactor:.5},max:{curvature:E(70),tiltAngle:E(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0};var M={scale:0,factor:0,minScaleFactor:0};function kt(t,e,r,s,i){let a=(r.screenLength||0)*t.pixelRatio;i!=null&&(a=ct(a,s,e,i));let p=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return h(p*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function P(t,e){let r=e?P(e):{};for(let s in t){let i=t[s];i?.forEach&&(i=Ct(i)),i==null&&s in r||(r[s]=i)}return r}function ut(t,e){let r=!1;for(let s in e){let i=e[s];i!==void 0&&(Array.isArray(i)?t[s]===null?(t[s]=i.slice(),r=!0):w(t[s],i)&&(r=!0):t[s]!==i&&(r=!0,t[s]=i))}return r}function Ct(t){let e=[];return t.forEach(r=>e.push(r)),e}var $t={multiply:1,ignore:2,replace:3,tint:4};var pt=class{constructor(){this.enabled=!0,this._time=0}get time(){return this._time}advance({deltaTime:e,fixedTime:r}){return r!=null?this._time!==r&&(this._time=r,!0):(this._time=this._time+e,e!==0)}};var ft=new Map([[u.POSITION,0],[u.NORMAL,1],[u.NORMALCOMPRESSED,1],[u.UV0,2],[u.COLOR,3],[u.COLORFEATUREATTRIBUTE,3],[u.SIZE,4],[u.TANGENT,4],[u.CENTEROFFSETANDDISTANCE,5],[u.SYMBOLCOLOR,5],[u.FEATUREATTRIBUTE,6],[u.INSTANCEFEATUREATTRIBUTE,6],[u.INSTANCECOLOR,7],[u.OBJECTANDLAYERIDCOLOR,7],[u.INSTANCEOBJECTANDLAYERIDCOLOR,7],[u.INSTANCEMODEL,8],[u.INSTANCEMODELNORMAL,12],[u.INSTANCEMODELORIGINHI,11],[u.INSTANCEMODELORIGINLO,15]]);var dt=class extends C{constructor(e,r){super(),this.type=F.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=ft,this._pp0=N(0,0,1),this._pp1=N(0,0,0),this._parameters=P(e,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ut(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===ot.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,r,s,i,a,p){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,r,s,this._pp0,this._pp1,a)}};var v;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(v||(v={}));var mt=class extends A{constructor(){super(...arguments),this.renderOccluded=v.Occlude,this.isDecoration=!1}};var ht=class extends D{constructor(e,r,s){super(e,"vec4",z.Pass,(i,a,p)=>i.setUniform4fv(e,r(a,p)),s)}};var St=class extends D{constructor(e,r,s){super(e,"float",z.Pass,(i,a,p)=>i.setUniform1fv(e,r(a,p)),s)}};var o=class extends q{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};n([l()],o.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),n([l()],o.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),n([l()],o.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),n([l()],o.prototype,"DECONFLICTOR_SHOW_GRID",void 0),n([l()],o.prototype,"LABELS_SHOW_BORDER",void 0),n([l()],o.prototype,"TEXT_SHOW_BASELINE",void 0),n([l()],o.prototype,"TEXT_SHOW_BORDER",void 0),n([l()],o.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),n([l()],o.prototype,"OVERLAY_SHOW_CENTER",void 0),n([l()],o.prototype,"SHOW_POI",void 0),n([l()],o.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),n([l()],o.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),n([l()],o.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),n([l()],o.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),n([l()],o.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),n([l()],o.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),n([l()],o.prototype,"I3S_TREE_SHOW_TILES",void 0),n([l()],o.prototype,"I3S_SHOW_MODIFICATIONS",void 0),n([l()],o.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),n([l()],o.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),n([l()],o.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),n([l()],o.prototype,"LINE_WIREFRAMES",void 0),o=n([G("esri.views.3d.support.debugFlags")],o);var Et=new o;var f,vt;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(f||(f={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(vt||(vt={}));var T=class{constructor(e){this.field=e}},U=class extends T{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[f.Undefined,f.Undefined,f.Undefined]}},V=class extends T{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},H=class extends T{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}};var W=class{};function _(t){return t!=null}function S(t){return typeof t=="number"}function L(t){return typeof t=="string"}function Ft(t){return t==null||L(t)}function c(t,e){t&&t.push(e)}function gt(t,e,r,s=I()){let i=t||0,a=e||0,p=r||0;return i!==0&&it(s,s,-i/180*Math.PI),a!==0&&et(s,s,a/180*Math.PI),p!==0&&rt(s,s,p/180*Math.PI),s}function d(t,e,r,s,i){let a=t.minSize,p=t.maxSize;if(t.useSymbolValue){let R=s.symbolSize[r];return e.minSize[r]=R,e.maxSize[r]=R,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=f.DefinedSize,!0}if(_(t.field))return _(t.stops)?t.stops.length===2&&S(t.stops[0].size)&&S(t.stops[1].size)?(_t(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=f.DefinedSize,!0):(c(i,"Could not convert size info: stops only supported with 2 elements"),!1):S(a)&&S(p)&&_(t.minDataValue)&&_(t.maxDataValue)?(_t(a,p,t.minDataValue,t.maxDataValue,e,r),e.type[r]=f.DefinedSize,!0):t.valueUnit==="unknown"?(c(i,"Could not convert size info: proportional size not supported"),!1):x[t.valueUnit]!=null?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/x[t.valueUnit],e.type[r]=f.DefinedSize,!0):(c(i,"Could not convert size info: scale-dependent size not supported"),!1);if(!_(t.field)){if(t.stops?.[0]&&S(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=f.DefinedSize,!0;if(S(a))return e.minSize[r]=a,e.maxSize[r]=a,e.offset[r]=a,e.factor[r]=0,e.type[r]=f.DefinedSize,!0}return c(i,"Could not convert size info: unsupported variant of sizeInfo"),!1}function _t(t,e,r,s,i,a){let p=Math.abs(s-r)>0?(e-t)/(s-r):0;i.minSize[a]=p>0?t:e,i.maxSize[a]=p>0?e:t,i.offset[a]=t-r*p,i.factor[a]=p}function Lt(t,e,r,s){if(t.normalizationField||t.valueRepresentation)return c(s,"Could not convert size info: unsupported property"),null;if(!Ft(t.field))return c(s,"Could not convert size info: field is not a string"),null;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return c(s,"Could not convert size info: multiple fields in use"),null}else e.size.field=t.field}else e.size=new U(t.field);let i;switch(t.axis){case"width":return i=d(t,e.size,0,r,s),i?e:null;case"height":return i=d(t,e.size,2,r,s),i?e:null;case"depth":return i=d(t,e.size,1,r,s),i?e:null;case"width-and-depth":return i=d(t,e.size,0,r,s),i&&d(t,e.size,1,r,s),i?e:null;case null:case void 0:case"all":return i=d(t,e.size,0,r,s),i=i&&d(t,e.size,1,r,s),i=i&&d(t,e.size,2,r,s),i?e:null;default:return c(s,`Could not convert size info: unknown axis "${t.axis}""`),null}}function Nt(t,e,r){for(let i=0;i<3;++i){let a=e.unitInMeters;t.type[i]===f.DefinedSize&&(a*=e.modelSize[i],t.type[i]=f.DefinedScale),t.minSize[i]=t.minSize[i]/a,t.maxSize[i]=t.maxSize[i]/a,t.offset[i]=t.offset[i]/a,t.factor[i]=t.factor[i]/a}let s;if(t.type[0]!==f.Undefined)s=0;else if(t.type[1]!==f.Undefined)s=1;else{if(t.type[2]===f.Undefined)return c(r,"No size axis contains a valid size or scale"),!1;s=2}for(let i=0;i<3;++i)t.type[i]===f.Undefined&&(t.minSize[i]=t.minSize[s],t.maxSize[i]=t.maxSize[s],t.offset[i]=t.offset[s],t.factor[i]=t.factor[s],t.type[i]=t.type[s]);return!0}function Ot(t,e,r){t[4*e]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function xt(t,e,r){if(t.normalizationField)return c(r,"Could not convert color info: unsupported property"),null;if(L(t.field)){if(!t.stops)return c(r,"Could not convert color info: missing stops or colors"),null;{if(t.stops.length>8)return c(r,"Could not convert color info: too many color stops"),null;e.color=new V(t.field);let s=t.stops;for(let i=0;i<8;++i){let a=s[Math.min(i,s.length-1)];e.color.values[i]=a.value,Ot(e.color.colors,i,a.color)}}}else{if(!(t.stops&&t.stops.length>=0))return c(r,"Could not convert color info: no field and no colors/stops"),null;{let s=t.stops&&t.stops.length>=0&&t.stops[0].color;e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)e.color.values[i]=1/0,Ot(e.color.colors,i,s)}}return e}function Mt(t,e,r){if(t.normalizationField)return c(r,"Could not convert opacity info: unsupported property"),null;if(L(t.field)){if(!t.stops)return c(r,"Could not convert opacity info: missing stops or opacities"),null;{if(t.stops.length>8)return c(r,"Could not convert opacity info: too many opacity stops"),null;e.opacity=new H(t.field);let s=t.stops;for(let i=0;i<8;++i){let a=s[Math.min(i,s.length-1)];e.opacity.values[i]=a.value,e.opacity.opacityValues[i]=a.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return c(r,"Could not convert opacity info: no field and no opacities/stops"),null;{let s=t.stops&&t.stops.length>=0?t.stops[0].opacity:0;e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)e.opacity.values[i]=1/0,e.opacity.opacityValues[i]=s}}return e}function b(t,e,r){let s=r===2&&t.rotationType==="arithmetic";e.offset[r]=s?90:0,e.factor[r]=s?-1:1,e.type[r]=1}function Pt(t,e,r){if(!L(t.field))return c(r,"Could not convert rotation info: field is not a string"),null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return c(r,"Could not convert rotation info: multiple fields in use"),null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return b(t,e.rotation,0),e;case"roll":return b(t,e.rotation,1),e;case null:case void 0:case"heading":return b(t,e.rotation,2),e;default:return c(r,`Could not convert rotation info: unknown axis "${t.axis}""`),null}}var Tt=class{constructor(e,r=[1,1,1],s=[1,1,1],i=1,a=[0,0,0],p=[1,1,1],R=[0,0,0]){this.supports=e,this.modelSize=r,this.symbolSize=s,this.unitInMeters=i,this.anchor=a,this.scale=p,this.rotation=R}};function Rt(t,e,r){if(!t)return null;let s=t.reduce((i,a)=>{if(!i)return i;if(a.valueExpression)return c(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(a.type){case"size":return e.supports.size?Lt(a,i,e,r):i;case"color":return e.supports.color?xt(a,i,r):i;case"opacity":return e.supports.opacity?Mt(a,i,r):null;case"rotation":return e.supports.rotation?Pt(a,i,r):i;default:return null}},new W);return!(t.length>0&&s)||s.size||s.color||s.opacity||s.rotation?s?.size&&!Nt(s.size,e,r)?null:s:null}var B=class{constructor(e,r,s){this.visualVariables=e,this.materialParameters=r,this.requiresShaderTransformation=s}};function He(t,e){if(!t||Et.TESTS_DISABLE_FAST_UPDATES)return null;let r=Rt(t.visualVariables,e);return r?new B(r,It(r,e),!!r.size):null}function We(t,e,r){if(!e||!t)return!1;let s=t.visualVariables,i=Rt(e.visualVariables,r);return!!i&&!!(g(s.size,i.size,"size")&&g(s.color,i.color,"color")&&g(s.rotation,i.rotation,"rotation")&&g(s.opacity,i.opacity,"opacity"))&&(t.visualVariables=i,t.materialParameters=It(i,r),t.requiresShaderTransformation=!!i.size,!0)}function g(t,e,r){if(!!t!=!!e||t&&t.field!==e?.field)return!1;if(t&&r==="rotation"){let s=t,i=e;for(let a=0;a<3;a++)if(s.type[a]!==i.type[a]||s.offset[a]!==i.offset[a]||s.factor[a]!==i.factor[a])return!1}return!0}var y=class extends A{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}};function It(t,e){let r=new y(t);return r.vvSize&&(r.vvSymbolAnchor=e.anchor,J(O),gt(e.rotation[2],e.rotation[0],e.rotation[1],O),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||at(),st(r.vvSymbolRotationMatrix,O)),r}function Be(t,e,r){if(!t.vvSize)return r;k(m,r);let s=t.vvSymbolRotationMatrix;$(O,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),K(m,m,O);for(let i=0;i<3;++i){let a=t.vvSize.offset[i]+e[0]*t.vvSize.factor[i];yt[i]=h(a,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return tt(m,m,yt),Q(m,m,t.vvSymbolAnchor),m}function we(t,e,r){if(!e.vvSize)return j(t,1,1,1),t;for(let s=0;s<3;++s){let i=e.vvSize.offset[s]+r[0]*e.vvSize.factor[s];t[s]=h(i,e.vvSize.minSize[s],e.vvSize.maxSize[s])}return t}function Ye(t,e){let r=t==null?0:e.attributes[t];return typeof r=="number"&&isFinite(r)?r:0}var m=I(),yt=X(),O=I();var zt=class extends y{constructor(){super(...arguments),this.renderOccluded=v.Occlude,this.isDecoration=!1}},je=8;export{C as a,F as b,pt as c,ft as d,lt as e,wt as f,Yt as g,kt as h,ut as i,$t as j,dt as k,v as l,mt as m,ht as n,St as o,Et as p,Tt as q,He as r,We as s,Be as t,we as u,Ye as v,zt as w,je as x};
