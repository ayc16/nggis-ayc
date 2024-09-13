import{a as w,b as z,c as I,d as E}from"./chunk-D6E35DYE.js";import{b as D}from"./chunk-KRYMUN3X.js";import{h as $,i as F,k as H,l as A,m as R,n as W}from"./chunk-5HFNOX2L.js";import{a as T,b as S,c as M}from"./chunk-U265OO5T.js";import{b as j}from"./chunk-A2UYTBDN.js";import{a as O}from"./chunk-26IAOMPX.js";import{a as L}from"./chunk-BS6NG5JT.js";import{q as s}from"./chunk-CGB2ZQ7H.js";import{a as k}from"./chunk-T62VBPHF.js";import{a as g,d as e,e as v,g as x,h as y,j as C}from"./chunk-FMFGIQYB.js";import{h as f}from"./chunk-EAH6BNBL.js";var i={button:"button",buttonTextVisible:"button--text-visible",buttonCompact:"button--compact",indicatorText:"indicator-text",iconContainer:"icon-container",slotContainer:"slot-container",slotContainerHidden:"slot-container--hidden",textContainer:"text-container",textContainerVisible:"text-container--visible",indicatorWithIcon:"indicator-with-icon",indicatorWithoutIcon:"indicator-without-icon"},q={tooltip:"tooltip"},G=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-color-brand);--calcite-action-color-transparent-hover:var(--calcite-color-transparent-hover);--calcite-action-color-transparent-press:var(--calcite-color-transparent-press)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-color-foreground-1);fill:var(--calcite-color-text-3);font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.button:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.button:active{background-color:var(--calcite-color-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-color-foreground-3);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([active]) .button:active{background-color:var(--calcite-color-foreground-1)}:host([appearance=transparent][active]) .button,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-action-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-action-color-transparent-press)}:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading][appearance=solid]) .button,:host([loading][appearance=solid]) .button:hover,:host([loading][appearance=solid]) .button:focus{background-color:var(--calcite-color-foreground-1)}:host([loading][appearance=solid]) .button .text-container,:host([loading][appearance=solid]) .button:hover .text-container,:host([loading][appearance=solid]) .button:focus .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-color-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`,J=G,K=y(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=O("mutation",()=>x(this)),this.guid=`calcite-action-${k()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{let o=t.target.assignedElements({flatten:!0}).filter(a=>a?.matches("calcite-tooltip"))[0];o&&(o.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){A(this,this.effectiveLocale)}connectedCallback(){z(this),$(this),R(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){return f(this,null,function*(){T(this),g.isBrowser&&(yield H(this))})}componentDidLoad(){S(this)}disconnectedCallback(){I(this),F(this),W(this),this.mutationObserver?.disconnect()}componentDidRender(){w(this)}setFocus(){return f(this,null,function*(){yield M(this),this.buttonEl?.focus()})}renderTextContainer(){let{text:t,textEnabled:n}=this,o={[i.textContainer]:!0,[i.textContainerVisible]:n};return t?e("div",{class:o,key:"text-container"},t):null}renderIndicatorText(){let{indicator:t,messages:n,indicatorId:o,buttonId:a}=this;return e("div",{"aria-labelledby":a,"aria-live":"polite",class:i.indicatorText,id:o,role:"region"},t?n.indicator:null)}renderIconContainer(){let{loading:t,icon:n,scale:o,el:a,iconFlipRtl:l,indicator:d}=this,u=o==="l"?"l":"m",b=t?e("calcite-loader",{inline:!0,label:this.messages.loading,scale:u}):null,c=n?e("calcite-icon",{class:{[i.indicatorWithIcon]:d},flipRtl:l,icon:n,scale:L(this.scale)}):null,r=b||c,h=r||a.children?.length,p=e("div",{class:{[i.slotContainer]:!0,[i.slotContainerHidden]:t}},e("slot",null));return h?e("div",{"aria-hidden":"true",class:i.iconContainer,key:"icon-container"},r,p):null}render(){let{active:t,compact:n,disabled:o,icon:a,loading:l,textEnabled:d,label:u,text:b,indicator:c,indicatorId:r,buttonId:h,messages:p}=this,m=u||b,_=m?`${m}${c?` (${p.indicator})`:""}`:"",B={[i.button]:!0,[i.buttonTextVisible]:d,[i.buttonCompact]:n};return e(v,{key:"65eaab1b65898e61d89af57f9d16048496eaf035"},e(E,{key:"6b412d3af4e4300d12024a8afec2e80d77d00c01",disabled:o},e("button",{key:"d6553a8c2fa4f4d81519bbfa1723e0992cc24092","aria-busy":s(l),"aria-controls":c?r:null,"aria-disabled":s(o),"aria-label":_,"aria-pressed":s(t),class:B,disabled:o,id:h,ref:U=>this.buttonEl=U},this.renderIconContainer(),this.renderTextContainer(),!a&&c&&e("div",{class:i.indicatorWithoutIcon,key:"indicator-no-icon"})),e("slot",{key:"7b3ff5bf2884b655e5704ae0b68c0ff71c1177d1",name:q.tooltip,onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return J}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function N(){if(typeof customElements>"u")return;["calcite-action","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-action":customElements.get(t)||customElements.define(t,K);break;case"calcite-icon":customElements.get(t)||j();break;case"calcite-loader":customElements.get(t)||D();break}})}N();export{K as a,N as b};