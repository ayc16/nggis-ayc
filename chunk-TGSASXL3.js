import{i as n,l as m,m as l}from"./chunk-L57KLCZM.js";import{m as s}from"./chunk-3HJJZGL7.js";import{L as e}from"./chunk-AUTL5LCV.js";import{S as i}from"./chunk-KUJG22IX.js";import{a as t}from"./chunk-W3WDPWBE.js";var a=class extends l(s){constructor(p){super(p),this.type="move-point",this.allFields.forEach(o=>{o.lockable=!1,o.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};t([e()],a.prototype,"allFields",null),a=t([i("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")],a);var r=class extends l(s){constructor(p){super(p),this.type="selected-vertex",this.area=m(),this.totalLength=n(),this.geometryType="polyline",this.allFields.forEach(o=>{o.lockable=!1,o.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.geometryType==="polygon"?this.area:this.totalLength]}};t([e()],r.prototype,"geometryType",void 0),t([e()],r.prototype,"allFields",null),r=t([i("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")],r);export{a,r as b};
