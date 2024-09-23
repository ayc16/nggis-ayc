import{d as v}from"./chunk-PY7J7JLU.js";import{a as T}from"./chunk-KEHUQDYM.js";import{g,l as R}from"./chunk-DER7DWMI.js";import{d as h}from"./chunk-63CLAPA5.js";import{a as p}from"./chunk-4KGZTO2H.js";import{a as w}from"./chunk-VPMDQK57.js";import{S as b}from"./chunk-KUJG22IX.js";import{a as u}from"./chunk-W3WDPWBE.js";var l=class extends g{constructor(e,i,r,s,a,n,o=null){super(e,i,r,s,a,n),this.bitmap=new v(o),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:p(),tileMat3:p()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}};var m=class extends T{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){let i=this._tileInfoView.getTileBounds(w(),e),r=this._tileInfoView.getTileResolution(e.level),[s,a]=this._tileInfoView.tileInfo.size;return new l(e,r,i[0],i[3],s,a)}prepareRenderPasses(e){let i=e.registerRenderPass({name:"bitmap (tile)",brushes:[R.bitmap],target:()=>this.children.map(r=>r.bitmap),drawPhase:h.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===h.MAP&&super.doRender(e)}};var N=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new m(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return e=u([b("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function C(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function D(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function Z(t,e,i,r){if(i.level===r.level)return e;let s=t.tileInfo.size,a=t.getTileResolution(i.level),n=t.getTileResolution(r.level),o=t.getLODInfoAt(r.level),y=o.getXForColumn(r.col),I=o.getYForRow(r.row);o=t.getLODInfoAt(i.level);let V=o.getXForColumn(i.col),M=o.getYForRow(i.row),d=C(e)/s[0],c=D(e)/s[1],B=Math.round(d*((y-V)/a)),_=Math.round(c*(-(I-M)/a)),L=Math.round(d*s[0]*(n/a)),x=Math.round(c*s[1]*(n/a)),f=P(s);return f.getContext("2d").drawImage(e,B,_,L,x,0,0,s[0],s[1]),f}function P(t){let e=document.createElement("canvas");return[e.width,e.height]=t,e}export{N as a,Z as b,P as c};