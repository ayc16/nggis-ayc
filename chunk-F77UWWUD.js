import{b as w}from"./chunk-ZK263UMU.js";import{a as u}from"./chunk-MKR7D3TU.js";import"./chunk-63CLAPA5.js";import"./chunk-CX34C47X.js";import"./chunk-GJBALZEB.js";import"./chunk-B7IX6UFG.js";import"./chunk-ZAQLF7TN.js";import"./chunk-S3DH7XZE.js";import"./chunk-4KGZTO2H.js";import"./chunk-2774JW3N.js";import"./chunk-E3472BDJ.js";import"./chunk-AATZFFI5.js";import"./chunk-IY6MAS3P.js";import"./chunk-UJ6V7JUK.js";import"./chunk-47Q3ZDMA.js";import{a as y,f as o}from"./chunk-4XUOIGFO.js";import"./chunk-7LEG2VDW.js";import{a as p,b as V}from"./chunk-G24ZJINL.js";import"./chunk-AM3VOA32.js";import"./chunk-SAOUSUZE.js";import"./chunk-LECQV7I4.js";import"./chunk-4HISZWR4.js";import"./chunk-33BSK37G.js";import"./chunk-EBWCXIFH.js";import"./chunk-MRVR6F6G.js";import"./chunk-WXQQZY3K.js";import"./chunk-VPMDQK57.js";import"./chunk-BCREO4Q5.js";import"./chunk-76YVRX2R.js";import"./chunk-OZF6BMOL.js";import"./chunk-GJP6PTKT.js";import"./chunk-RSDQHAJX.js";import{b as d}from"./chunk-SF6Z2K5H.js";import"./chunk-GBTN5LIS.js";import"./chunk-JOSG37QF.js";import"./chunk-SLMQFZE3.js";import"./chunk-5ODCEDHC.js";import"./chunk-SA4OMQAD.js";import"./chunk-24BLFS5R.js";import"./chunk-JDDD6VJ4.js";import"./chunk-VOYK3LZF.js";import"./chunk-XNEAL2YW.js";import"./chunk-J7M5V2SQ.js";import"./chunk-RQD6EDD6.js";import"./chunk-XPCG2OJX.js";import{L as t}from"./chunk-AUTL5LCV.js";import{S as l}from"./chunk-KUJG22IX.js";import"./chunk-OVHPPCBL.js";import{a as s}from"./chunk-W3WDPWBE.js";import"./chunk-GISCFF3Z.js";import"./chunk-MLSR6YE6.js";import"./chunk-SNFOAZZQ.js";import"./chunk-CPDJJRWA.js";import"./chunk-VU5W7W6Y.js";import"./chunk-HQMV3KQV.js";import"./chunk-CRMMDK2Z.js";import"./chunk-EAH6BNBL.js";var r=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new d}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",p(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){let i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(a=>y(()=>a.visible,n=>this._applyVisibility(()=>{n!==this.visible&&(a.visible=this.visible)},()=>this._applyExclusiveVisibility(n?a:null)),o)).toArray(),"grouplayerview:visible");let e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};s([t({readOnly:!0})],r.prototype,"creatingLayerViews",null),s([t({cast:V})],r.prototype,"layerViews",null),s([t({readOnly:!0})],r.prototype,"updatingProgress",null),s([t()],r.prototype,"view",void 0),r=s([l("esri.views.layers.GroupLayerView")],r);var v=r;var h=class extends w(v){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};h=s([l("esri.views.2d.layers.GroupLayerView2D")],h);var R=h;export{R as default};