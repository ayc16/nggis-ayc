import{a as v,c as U}from"./chunk-TEXQFKMJ.js";import{i as F,j as W}from"./chunk-57GB3TOJ.js";import{c as E,s as N}from"./chunk-WD4CT5CX.js";import{i as x,j as M,l as D}from"./chunk-XSMN6VN6.js";import{a as V,c as q}from"./chunk-FOPE5Y6E.js";import{a as H}from"./chunk-T4B3RN6B.js";import{U as P}from"./chunk-BE76S5KT.js";import{a as G}from"./chunk-FIITBHDP.js";import{z as A}from"./chunk-WKT5W7KT.js";import{p as w}from"./chunk-X3IDZTNG.js";import{a as _}from"./chunk-IQJU4QT3.js";import{a as g,b as m}from"./chunk-EAH6BNBL.js";var B=_("mapview-transitions-duration")===0?0:1/_("mapview-transitions-duration"),b=class extends H{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;let i=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=A(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=A(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,i){if(this.fadeTransitionEnabled&&B!==0){let s=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===s)this.computedVisible=this.visible;else{let h=t*B;this.computedOpacity=r>s?Math.max(s,r-h):Math.min(s,r+h),this.computedVisible=this.computedOpacity>0;let a=s===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};var z,K,X,Y,j,k,I,Z,J;(function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT",e[e.LABEL=4]="LABEL"})(z||(z={})),function(e){e[e.NONE=0]="NONE",e[e.MAP=1]="MAP",e[e.LABEL=2]="LABEL",e[e.LABEL_ALPHA=4]="LABEL_ALPHA",e[e.HITTEST=8]="HITTEST",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.CLIP=32]="CLIP",e[e.DEBUG=64]="DEBUG",e[e.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(K||(K={})),function(e){e[e.SIZE=0]="SIZE",e[e.COLOR=1]="COLOR",e[e.OPACITY=2]="OPACITY",e[e.ROTATION=3]="ROTATION"}(X||(X={})),function(e){e[e.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",e[e.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",e[e.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",e[e.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(Y||(Y={})),function(e){e[e.SPRITE=0]="SPRITE",e[e.GLYPH=1]="GLYPH"}(j||(j={})),function(e){e[e.DEFAULT=0]="DEFAULT",e[e.SIMPLE=1]="SIMPLE",e[e.DOT_DENSITY=2]="DOT_DENSITY",e[e.OUTLINE_FILL=3]="OUTLINE_FILL",e[e.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",e[e.HEATMAP=5]="HEATMAP",e[e.PIE_CHART=6]="PIE_CHART"}(k||(k={})),function(e){e[e.All=0]="All",e[e.Highlight=1]="Highlight",e[e.InsideEffect=2]="InsideEffect",e[e.OutsideEffect=3]="OutsideEffect"}(I||(I={})),function(e){e[e.BATCHING=0]="BATCHING",e[e.STRICT_ORDER=1]="STRICT_ORDER",e[e.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(Z||(Z={})),function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT"}(J||(J={}));var Rt=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],yt=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],y=256,u={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0};var T=()=>w.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function ot(e,t){t.fillColor[0]=e.color.r/255,t.fillColor[1]=e.color.g/255,t.fillColor[2]=e.color.b/255,t.fillColor[3]=e.color.a,e.haloColor?(t.outlineColor[0]=e.haloColor.r/255,t.outlineColor[1]=e.haloColor.g/255,t.outlineColor[2]=e.haloColor.b/255,t.outlineColor[3]=e.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=e.fillOpacity,t.outlineColor[3]*=e.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=u.outlineWidth,t.outerHaloWidth=u.outerHaloWidth,t.innerHaloWidth=u.innerHaloWidth,t.outlinePosition=u.outlinePosition}var lt=[0,0,0,0],O=class{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:u.outlinePosition,outlineWidth:u.outlineWidth,innerHaloWidth:u.innerHaloWidth,outerHaloWidth:u.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*y),this._minMaxDistance=[0,0]}setHighlightOptions(t){let i=this._convertedHighlightOptions;ot(t,i);let s=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,r=i.outlinePosition-i.outlineWidth/2,h=i.outlinePosition+i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,l=Math.sqrt(Math.PI/2)*1,o=Math.abs(s)>l?Math.round(10*(Math.abs(s)-l))/10:0,f=Math.abs(a)>l?Math.round(10*(Math.abs(a)-l))/10:0,c;o&&!f?T().error("The outer rim of the highlight is "+o+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!o&&f?T().error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):o&&f&&T().error("The highlight is "+Math.max(o,f)+"px away from the edge of the feature; consider reducing some width values.");let n=[void 0,void 0,void 0,void 0];function R(d,L,p){n[0]=(1-p)*d[0]+p*L[0],n[1]=(1-p)*d[1]+p*L[1],n[2]=(1-p)*d[2]+p*L[2],n[3]=(1-p)*d[3]+p*L[3]}let{_texelData:C}=this;for(let d=0;d<y;++d)c=s+d/(y-1)*(a-s),c<s?(n[0]=0,n[1]=0,n[2]=0,n[3]=0):c<r?R(lt,i.outlineColor,(c-s)/(r-s)):c<h?[n[0],n[1],n[2],n[3]]=i.outlineColor:c<a?R(i.outlineColor,i.fillColor,(c-h)/(a-h)):[n[0],n[1],n[2],n[3]]=i.fillColor,C[4*d]=255*n[0],C[4*d+1]=255*n[1],C[4*d+2]=255*n[2],C[4*d+3]=255*n[3];this._minMaxDistance[0]=s,this._minMaxDistance[1]=a,this._shadeTexChanged=!0}applyHighlightOptions(t,i){if(!this._shadeTex){let s=new F;s.wrapMode=D.CLAMP_TO_EDGE,s.width=y,s.height=1,this._shadeTex=new W(t,s)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,y,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,N),i.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<U.length)-1,activeGradient:this}]}};var S=class{constructor(){this.type="multi";let t={};for(let i in v)t[i]=new O;this.gradients=t}setHighlightOptions(t){for(let i in v){let s=v[i](t);this.gradients[i].setHighlightOptions(s)}}applyHighlightOptions(t,i,s){this.gradients[s].applyHighlightOptions(t,i)}destroy(){for(let t in v)this.gradients[t].destroy()}getReasonsWithGradients(){let t=1,i=[];for(let s in this.gradients){let r=this.gradients[s];i.push({activeReasons:t,activeGradient:r}),t<<=1}return i}};var $={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:e=>e.stencilRef,compare:x.EQUAL,mask:255,op:{fail:M.KEEP,zFail:M.KEEP,zPass:M.REPLACE}}}},at={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},ht=m(g({},$),{color:{write:[!0,!0,!0,!0],blendMode:"delete"}});function dt({pixelRatio:e,state:t,displayLevel:i,requiredLevel:s},r){let h=1/2**(i-r.key.level),a=1/2**(s-r.key.level);return{displayMat3:Array.from(t.displayMat3),displayViewMat3:Array.from(t.displayViewMat3),displayViewScreenMat3:Array.from(r.transforms.displayViewScreenMat3),viewMat3:Array.from(t.viewMat3),tileMat3:Array.from(r.transforms.tileMat3),displayZoomFactor:h,requiredZoomFactor:a,tileOffset:[r.x,r.y],currentScale:t.scale,currentZoom:i,metersPerSRUnit:P(t.spatialReference),rotation:t.rotation,pixelRatio:e}}function tt(e){return e.passOptions?.type==="highlight"}function et(e){return e.passOptions?.type==="hittest"}function ct(e){if(!et(e))return null;let{position:t}=e.passOptions,i=e.pixelRatio,s=_("esri-mobile");return{position:t,distance:_(s?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance")*i,smallSymbolDistance:_(s?"hittest-2d-mobile-tolerance":"hittest-2d-small-symbol-tolerance")*i,smallSymbolSizeThreshold:_("hittest-2d-small-symbol-tolerance-threshold")}}function ut(e){if(!tt(e))return null;let{activeReasons:t,highlightAll:i}=e.passOptions;return{activeReasons:t,highlightAll:i?1:0}}function Nt(e,t,i){let s={};for(let r in i)i[r]instanceof Function?s[r]=i[r](e,t):s[r]=i[r];return s}function Ft(e,t){let{attributeView:i,context:s}=e;return{storage:i.getUniforms(s),view:dt(e,t),hittestRequest:ct(e),highlight:ut(e)}}function Wt(e){return{inside:e.selection===I.InsideEffect,outside:e.selection===I.OutsideEffect}}function it(e){return et(e)?at:tt(e)&&e.passOptions.stepType==="clear"?ht:$}function Ut(e){let{row:t,col:i}=e.key,s=i*512,r=t*512;return{tileOffsetFromLocalOrigin:[s%E,r%E],maxIntsToLocalOrigin:[Math.floor(s/E),Math.floor(r/E)]}}var Yt=new G({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function jt(e){let{bandCount:t,attributeTable:i,colormap:s,pixelType:r}=e.raster.rasterInfo;return t===1&&(i!=null||s!=null||r==="u8"||r==="s8")}function st(e,t){return e?.type==="single"&&t.multiHighlightEnabled&&(e.destroy(),e=null),e?.type!=="multi"||t.multiHighlightEnabled||(e.destroy(),e=null),e||(e=t.multiHighlightEnabled?new S:new O),e.setHighlightOptions(t),e}function kt(e,t,i){let{painter:s,highlightGradient:r}=e,{highlight:h}=s.effects;if(!r)return;let a=e.passOptions,l=r.getReasonsWithGradients();for(let o=0;o<l.length;o++){let f=m(g({},e),{passOptions:{type:"highlight",activeGradient:l[o].activeGradient,activeReasons:l[o].activeReasons,stepType:"burn",highlightAll:t}});if(h.bind(f),i(f),o<l.length-1){let n=0;for(let R=o+1;R<l.length;R++)n|=l[R].activeReasons;i(m(g({},e),{passOptions:{type:"highlight",activeGradient:l[o].activeGradient,activeReasons:n,stepType:"clear",highlightAll:t}}))}let c=m(g({},e),{passOptions:{type:"highlight",activeGradient:l[o].activeGradient,activeReasons:l[o].activeReasons,stepType:"draw",highlightAll:t}});s.setPipelineState(it(e)),s.updatePipelineState(e.context),h.draw(c),h.unbind()}e.passOptions=a}var rt=class extends b{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(i=>i.clips=t)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new q),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient=st(this._highlightGradient,t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,i){super.updateTransitionProperties(t,i),this._effectView&&(this._effectView.transitionStep(t,i),this._effectView.transitioning&&this.requestRender())}doRender(t){let i=this.createRenderParams(t),{painter:s}=i;s.beforeRenderLayer(i,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(i),s.afterRenderLayer(i,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,i=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;let s=t.parent;return s&&s!==this&&s.removeChild(t),i>=this.children.length?this.children.push(t):this.children.splice(i,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(let t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;let i=this.children.splice(t,1)[0];return this._childrenSet.delete(i),this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null,i}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(let i of this.children)i.beforeRender(t)}afterRender(t){super.afterRender(t);for(let i of this.children)i.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:V()}}onAttach(){super.onAttach();let t=this.stage;for(let i of this.children)i.stage=t}onDetach(){super.onDetach();for(let t of this.children)t.stage=null}renderChildren(t){for(let i of this.children)i.processRender(t)}createRenderParams(t){return m(g({},t),{requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient})}};export{b as a,Rt as b,yt as c,K as d,X as e,j as f,I as g,Z as h,J as i,dt as j,tt as k,et as l,Nt as m,Ft as n,Wt as o,it as p,Ut as q,jt as r,kt as s,rt as t};
