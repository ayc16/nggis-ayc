import{a as j,c as oe,d as E,e as re,f as I,g as T}from"./chunk-R4SFVOZO.js";import{b as N,d as v,i as z}from"./chunk-O73QQ7Z7.js";import{a as $,d as ee}from"./chunk-DJEFBPF6.js";import{J as U}from"./chunk-KYPWFZ3A.js";import{a as B}from"./chunk-32VQE3PR.js";import{a as Q,h as X}from"./chunk-PDBA6QOJ.js";import{u as K}from"./chunk-2ETHV3H2.js";import{B as H,b as Y,c as k}from"./chunk-OZF6BMOL.js";import{a as m}from"./chunk-GJP6PTKT.js";import{c as te}from"./chunk-DJULDHPW.js";import{O as D,ia as W,l as S,o as L,t as _}from"./chunk-4JWMB5SM.js";import{L as i,O as c}from"./chunk-AUTL5LCV.js";import{S as p}from"./chunk-KUJG22IX.js";import{a as r}from"./chunk-W3WDPWBE.js";var A=class extends c{constructor(e){super(e),this.enabled=!1}};r([i({type:Boolean,nonNullable:!0})],A.prototype,"enabled",void 0),A=r([p("esri.views.interactive.sketch.SketchLabelOptions")],A);var q=A;var h=class extends c{constructor(e){super(e),this.mode="absolute-height"}toJSON(){return{mode:this.mode}}};r([i({type:String,nonNullable:!0})],h.prototype,"mode",void 0),h=r([p("esri.views.interactive.sketch.SketchTooltipElevationOptions")],h);var n=class extends c{constructor(e){super(e),this.area=!0,this.coordinates=!0,this.direction=!0,this.distance=!0,this.elevation=!0,this.header=!0,this.helpMessage=!1,this.orientation=!0,this.radius=!0,this.rotation=!0,this.scale=!0,this.size=!0,this.totalLength=!0}};r([i({type:Boolean,nonNullable:!0})],n.prototype,"area",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"coordinates",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"direction",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"distance",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"elevation",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"header",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"helpMessage",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"orientation",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"radius",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"rotation",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"scale",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"size",void 0),r([i({type:Boolean,nonNullable:!0})],n.prototype,"totalLength",void 0),n=r([p("esri.views.interactive.sketch.SketchTooltipVisibleElements")],n);var C=n;var l=class extends c{constructor(e){super(e),this.enabled=!1,this.forceEnabled=!1,this.helpMessage=null,this.helpMessageIcon=null,this.inputEnabled=!0,this.elevation=new h,this.visibleElements=new C,this.visualVariables=null,this.xyMode="auto"}get effectiveEnabled(){return this.forceEnabled||this.enabled}};r([i({type:Boolean,nonNullable:!0})],l.prototype,"enabled",void 0),r([i()],l.prototype,"forceEnabled",void 0),r([i()],l.prototype,"effectiveEnabled",null),r([i()],l.prototype,"helpMessage",void 0),r([i()],l.prototype,"helpMessageIcon",void 0),r([i({type:Boolean,nonNullable:!0})],l.prototype,"inputEnabled",void 0),r([i({type:h,nonNullable:!0})],l.prototype,"elevation",void 0),r([i({type:C,nonNullable:!0})],l.prototype,"visibleElements",void 0),r([i()],l.prototype,"visualVariables",void 0),r([i()],l.prototype,"xyMode",void 0),l=r([p("esri.views.interactive.sketch.SketchTooltipOptions")],l);var F=l;var a;function ce(e,t){if(e==null||t==null)return;let o=P(e,t);return o!=null?v(o,"radians","geographic"):void 0}(function(e){e.Absolute="absolute",e.Relative="relative",e.RelativeBilateral="relative-bilateral"})(a||(a={}));var P=(()=>{let e=m(),t=m();return(o,s)=>(k(e,o.x,o.y,o.z??0),k(t,s.x,s.y,s.z??0),ue(e,t,o.spatialReference,s.spatialReference))})(),ue=(()=>{let e=Q(),t=m(),o=m();return(s,u,M,R)=>{if(H(s,u))return;let d=T(M),b=T(R);if(d&&b&&S(d,b)&&B(s,M,t,d)&&B(u,R,o,b)){let{azimuth:x}=I(de,t,o,d);return x!=null?D(x,"degrees","radians"):void 0}e[0]=u[0]-s[0],e[1]=u[1]-s[1];let f=K(X,e);return e[0]<0&&(f=fe-f),f}})();function yt(e,t,o,s=a.Absolute){if(t&&o)switch(s){case a.Absolute:return ce(t,o);case a.Relative:return se(ie(e,t,o),a.Relative);case a.RelativeBilateral:return se(ie(e,t,o),a.RelativeBilateral)}}function ie(e,t,o){if(!e||!t||!o)return;let s=P(e,t),u=P(t,o);return s!=null&&u!=null?v(u-s,"radians","geographic"):void 0}function se(e,t){if(e!=null)switch(t){case a.Absolute:return me(e);case a.Relative:{let o=G(e),s=ne.normalize(o,0,!0);return s===-180&&(s=180),v(s,"degrees","geographic")}case a.RelativeBilateral:{let o=G(e),s=Math.abs(ne.normalize(o,0,!0));return v(s,"degrees","geographic")}}}function me(e){let t=G(e),o=ve.normalize(t,0,!0);return v(o,"degrees","geographic")}var gt=(()=>{let e=m();return(t,o,s,u,M,R="geodesic")=>{Y(e,o);let d=G(M);if(R==="geodesic"){let w=T(s);if(w&&B(e,s,e,w))return re(t,e,d,u,w),t[2]=o[2],!!B(t,w,t,s)}let b=z(d,"geographic","arithmetic"),f=D(b,"degrees","radians"),x=o[0]+u*Math.cos(f),le=o[1]+u*Math.sin(f),pe=o[2];return k(t,x,le,pe),!0}})();function G(e){if(e!=null)return z(ae(e),e.rotationType,"geographic")}function bt(e){if(e!=null)return z(ae(e),e.rotationType,"arithmetic")}function ae(e){return D(e.value,e.unit,"degrees")}var de=new E,fe=2*Math.PI,ve=ee,ne=new $(-180,180);var y=class extends c{constructor(e){super(e),this.directionMode="relative",this.relativeDirectionIsBilateral=!1}get effectiveDirectionMode(){switch(this.directionMode){case"relative":return this.relativeDirectionIsBilateral?a.RelativeBilateral:a.Relative;case"absolute":return a.Absolute}}};r([i({type:String,nonNullable:!0})],y.prototype,"directionMode",void 0),r([i({type:Boolean,nonNullable:!0})],y.prototype,"relativeDirectionIsBilateral",void 0),r([i()],y.prototype,"effectiveDirectionMode",null),y=r([p("esri.views.interactive.sketch.SketchValueOptions")],y);var Z=y;var g=class extends c{constructor(e){super(e),this.labels=new q,this.tooltips=new F,this.values=new Z}};r([i({nonNullable:!0,type:q})],g.prototype,"labels",void 0),r([i({nonNullable:!0,type:F})],g.prototype,"tooltips",void 0),r([i({nonNullable:!0,type:Z})],g.prototype,"values",void 0),g=r([p("esri.views.interactive.sketch.SketchOptions")],g);var qt=g;function Jt(e){return L(e)&&j(e)||_(e)}function J(e,t,o,...s){return L(e)&&j(e)?t.apply(void 0,s):_(e)?o.apply(void 0,s):null}function eo(e){let{spatialReference:t}=e;return J(t,be,Be,e)}function to(e,t){if(!S(e.spatialReference,t.spatialReference))return null;let{spatialReference:o}=e;return V[0]=e.x,V[1]=e.y,V[2]=e.hasZ?e.z:0,O[0]=t.x,O[1]=t.y,O[2]=t.hasZ?t.z:0,he(V,O,o)}function he(e,t,o){return J(o,ye,ge,e,t,o)}function ye(e,t,o){return N(I(Me,e,t,o).distance,"meters")}function ge(e,t,o){return N(U(Ne(e,t,o),"meters"),"meters")}function be(e){return N(oe([e],"meters")[0],"meters")}function Be(e){return N(U(e,"meters"),"meters")}function Ne(e,t,o){return{type:"polyline",spatialReference:o,paths:[[[...e],[...t]]]}}var Me=new E,V=m(),O=m();function so(e){let t="metric";if(e==null)return t;let o=e.map,s=(o&&"portalItem"in o?o.portalItem?.portal:null)??te.getDefault();switch(s.user?.units??s.units){case t:return t;case"english":return"imperial"}return W(e.spatialReference)??t}var ao={absolute:"absolute-direction",relative:"relative-direction"};export{so as a,a as b,ce as c,ue as d,yt as e,se as f,me as g,gt as h,G as i,bt as j,Z as k,q as l,F as m,qt as n,Jt as o,J as p,eo as q,to as r,he as s,ao as t};
