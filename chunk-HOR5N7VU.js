import{a as l}from"./chunk-YZGX7SVW.js";import{a as i}from"./chunk-26IAOMPX.js";import{d as t,e as o,f as r,h as s,j as n}from"./chunk-FMFGIQYB.js";import"./chunk-EAH6BNBL.js";var u=":host{position:relative;display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",h=u,a=s(class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDropdownItemChange=r(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach(e=>e.selectionMode=this.selectionMode)},this.mutationObserver=i("mutation",()=>this.updateItems()),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){let e=this.groupTitle?t("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,p=this.groupPosition>0?t("div",{class:"dropdown-separator",role:"separator"}):null;return t(o,{key:"316d4d5c0cc68f5a34a2e53054ec6b4420e04092","aria-label":this.groupTitle,role:"group"},t("div",{key:"3eaadb9712203a1981d811ada11d91537f91cc03",class:{[l.container]:!0}},p,e,t("slot",{key:"8c0623959ab646c6ce923f388a3eaa6587b777cf"})))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{selectionMode:["handlePropsChange"]}}static get style(){return h}},[17,"calcite-dropdown-group",{groupTitle:[513,"group-title"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalDropdownItemSelect","updateActiveItemOnChange"]],{selectionMode:["handlePropsChange"]}]);function d(){if(typeof customElements>"u")return;["calcite-dropdown-group"].forEach(e=>{switch(e){case"calcite-dropdown-group":customElements.get(e)||customElements.define(e,a);break}})}d();var b=a,v=d;export{b as CalciteDropdownGroup,v as defineCustomElement};