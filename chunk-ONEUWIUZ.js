import{c as r}from"./chunk-4PRWEF7B.js";import{a as o,b as c,c as d,d as l}from"./chunk-D6E35DYE.js";import{d as e,e as i,f as a,h as n,j as s}from"./chunk-FMFGIQYB.js";import"./chunk-EAH6BNBL.js";var h={container:"container",heading:"heading"},b=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}",g=b,f=n(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=a(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}connectedCallback(){c(this)}componentDidRender(){o(this)}disconnectedCallback(){d(this)}render(){let{disabled:t,heading:p}=this;return e(i,{key:"72b362e6538638b434eaac9f4295059ab7407d2c"},e(l,{key:"b6a3ad744cfdce9fd2e87b4e66e1ae570998231c",disabled:t},e("tr",{key:"3abe960e3c55dc41c0ee098feb658127795a7204",class:h.container},e("td",{key:"02a7a0797bee8da0ba6f45d8fd45b2285c7710ac",class:h.heading,colSpan:r},p)),e("slot",{key:"ed7a1afcaadd1b9071900f5ab6b032aca3a1deb7",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return g}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function u(){if(typeof customElements>"u")return;["calcite-list-item-group"].forEach(t=>{switch(t){case"calcite-list-item-group":customElements.get(t)||customElements.define(t,f);break}})}u();var k=f,v=u;export{k as CalciteListItemGroup,v as defineCustomElement};