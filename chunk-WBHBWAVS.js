import{a as t}from"./chunk-UJ6V7JUK.js";var e={main:new t([255,127,0]),selected:new t([255,255,255]),outline:new t([0,0,0,.5]),selectedOutline:new t([255,255,255]),hoverOutline:new t([255,255,255]),secondary:new t([255,255,255]),secondaryOutline:new t([100,100,100]),transparent:new t([0,0,0,0])};function r(s,o){Object.assign(s,o)}var n=class{constructor(o){this.size=8,this.hoverSize=10,this.color=e.main,this.hoverColor=e.main,this.outlineColor=e.outline,this.hoverOutlineColor=e.hoverOutline,r(this,o)}},i=class{constructor(o){this.color=e.secondary,this.hoverColor=e.main,r(this,o)}},l=class{constructor(o){this.color=e.transparent,this.hoverColor=e.transparent,this.outlineColor=e.main,this.hoverOutlineColor=e.main,this.stagedColor=e.transparent,this.stagedOutlineColor=e.secondary,r(this,o)}},c=class{constructor(o){this.vertex=new n,this.midpoint=new n({color:e.secondary,outlineColor:e.secondaryOutline,size:6}),this.selected=new n({color:e.selected,hoverColor:e.selected,hoverOutlineColor:e.hoverOutline}),r(this,o)}},h=class{constructor(o){this.center=new n({color:e.secondaryOutline}),this.fill=new l,this.line=new i,this.vertex=new n({color:e.selected,outlineColor:e.main,hoverColor:e.selected,hoverOutlineColor:e.secondaryOutline}),r(this,o)}},a=class{constructor(o){this.reshapeGraphics=new c,this.transformGraphics=new h,r(this,o)}},d=new a;export{d as a};