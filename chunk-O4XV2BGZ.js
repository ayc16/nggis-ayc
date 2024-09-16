import{a as Xt}from"./chunk-IY6MAS3P.js";import{a as Yt}from"./chunk-UJ6V7JUK.js";import{a as R}from"./chunk-VXJKEPDS.js";import{K as ee,g as Zt,k as te}from"./chunk-FOMIQQJB.js";import{a as rt}from"./chunk-TQAPQODA.js";import{g as Ht}from"./chunk-XIMCHX2H.js";import{b as et}from"./chunk-SF6Z2K5H.js";import{a as ot}from"./chunk-2KZICFRS.js";import{a as w}from"./chunk-D2RUV6O4.js";import{a as Qt}from"./chunk-XNEAL2YW.js";import{a as $t,b as Gt}from"./chunk-J7M5V2SQ.js";import{L as o,O as tt,W as a}from"./chunk-AUTL5LCV.js";import{G as qt,H as N,S as i}from"./chunk-KUJG22IX.js";import{a as t}from"./chunk-W3WDPWBE.js";import{z as Wt}from"./chunk-GISCFF3Z.js";import{b as d,r as Vt}from"./chunk-HQMV3KQV.js";import{a as zt,h as Z}from"./chunk-EAH6BNBL.js";var wt,S=wt=class extends a{constructor(e){super(e),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new wt({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};t([o({type:String,json:{write:!0}})],S.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"title",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"expression",void 0),t([o({type:["string","number"],json:{write:!0}})],S.prototype,"returnType",void 0),S=wt=t([i("esri.popup.ExpressionInfo")],S);var oe=S;var It,f=It=class extends Xt(tt){constructor(e){super(e),this.active=!1,this.className=null,this.disabled=!1,this.icon=null,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new It({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};t([o()],f.prototype,"active",void 0),t([o()],f.prototype,"className",void 0),t([o()],f.prototype,"disabled",void 0),t([o()],f.prototype,"icon",void 0),t([o()],f.prototype,"id",void 0),t([o()],f.prototype,"indicator",void 0),t([o()],f.prototype,"title",void 0),t([o()],f.prototype,"type",void 0),t([o()],f.prototype,"visible",void 0),f=It=t([i("esri.support.actions.ActionBase")],f);var A=f;var bt,it=bt=class extends A{constructor(e){super(e),this.image=null,this.type="button"}clone(){return new bt({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};t([o()],it.prototype,"image",void 0),it=bt=t([i("esri.support.actions.ActionButton")],it);var re=it;var st=class extends a{constructor(e){super(e),this.type=null}};t([o({type:["attachments","custom","fields","media","text","expression","relationship"],readOnly:!0,json:{read:!1,write:!0}})],st.prototype,"type",void 0),st=t([i("esri.popup.content.Content")],st);var m=st;var gt,_=gt=class extends m{constructor(e){super(e),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new gt({description:this.description,displayType:this.displayType,title:this.title})}};t([o({type:String,json:{write:!0}})],_.prototype,"description",void 0),t([o({type:["auto","preview","list"],json:{write:!0}})],_.prototype,"displayType",void 0),t([o({type:String,json:{write:!0}})],_.prototype,"title",void 0),t([o({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],_.prototype,"type",void 0),_=gt=t([i("esri.popup.content.AttachmentsContent")],_);var J=_;var Ft,j=Ft=class extends m{constructor(e){super(e),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new Ft({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?d(this.outFields):null})}};t([o()],j.prototype,"creator",void 0),t([o()],j.prototype,"destroyer",void 0),t([o()],j.prototype,"outFields",void 0),t([o({type:["custom"],readOnly:!0})],j.prototype,"type",void 0),j=Ft=t([i("esri.popup.content.CustomContent")],j);var Nt=j;var St,M=St=class extends a{constructor(e){super(e),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new St({title:this.title,expression:this.expression})}};t([o({type:String,json:{write:!0}})],M.prototype,"title",void 0),t([o({type:String,json:{write:!0}})],M.prototype,"expression",void 0),t([o({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"returnType",void 0),M=St=t([i("esri.popup.ElementExpressionInfo")],M);var ie=M;var _t,K=_t=class extends m{constructor(e){super(e),this.expressionInfo=null,this.type="expression"}clone(){return new _t({expressionInfo:this.expressionInfo?.clone()})}};t([o({type:ie,json:{write:!0}})],K.prototype,"expressionInfo",void 0),t([o({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],K.prototype,"type",void 0),K=_t=t([i("esri.popup.content.ExpressionContent")],K);var z=K;var E=class extends R(a){constructor(e){super(e),this.dateFormat=null,this.digitSeparator=!1,this.places=null}};t([rt(Ht)],E.prototype,"dateFormat",void 0),t([o({type:Boolean,json:{write:!0}})],E.prototype,"digitSeparator",void 0),t([o({type:N,json:{write:!0}})],E.prototype,"places",void 0),E=t([i("esri.popup.support.FieldInfoFormat")],E);var se=E;var jt,y=jt=class extends a{constructor(e){super(e),this.fieldName=null,this.format=void 0,this.isEditable=!0,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new jt({fieldName:this.fieldName,format:this.format?.clone(),isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};t([o({type:String,json:{write:!0}})],y.prototype,"fieldName",void 0),t([o({type:se,json:{write:!0}})],y.prototype,"format",void 0),t([o({type:Boolean,json:{write:{alwaysWriteDefaults:!0},default:!0}})],y.prototype,"isEditable",void 0),t([o({type:String,json:{write:!0}})],y.prototype,"label",void 0),t([rt(new $t({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],y.prototype,"stringFieldOption",void 0),t([o({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],y.prototype,"statisticType",void 0),t([o({type:String,json:{write:!0}})],y.prototype,"tooltip",void 0),t([o({type:Boolean,json:{write:!0}})],y.prototype,"visible",void 0),y=jt=t([i("esri.popup.FieldInfo")],y);var pt=y;var Ot,I=Ot=class extends m{constructor(e){super(e),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(e,r){r.fieldInfos=e&&e.map(p=>p.toJSON())}clone(){return new Ot(d({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};t([o({type:Object,json:{write:!0}})],I.prototype,"attributes",void 0),t([o({type:String,json:{write:!0}})],I.prototype,"description",void 0),t([o({type:[pt]})],I.prototype,"fieldInfos",void 0),t([w("fieldInfos")],I.prototype,"writeFieldInfos",null),t([o({type:String,json:{write:!0}})],I.prototype,"title",void 0),t([o({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=Ot=t([i("esri.popup.content.FieldsContent")],I);var B=I;var O=class extends a{constructor(e){super(e),this.altText=null,this.caption="",this.title="",this.type=null}};t([o({type:String,json:{write:!0}})],O.prototype,"altText",void 0),t([o({type:String,json:{write:!0}})],O.prototype,"caption",void 0),t([o({type:String,json:{write:!0}})],O.prototype,"title",void 0),t([o({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=t([i("esri.popup.content.mixins.MediaInfo")],O);var L=O;var Ct,C=Ct=class extends tt{constructor(e){super(e),this.color=null,this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new Ct({color:this.color?.clone(),fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};t([o()],C.prototype,"color",void 0),t([o()],C.prototype,"fieldName",void 0),t([o()],C.prototype,"tooltip",void 0),t([o()],C.prototype,"value",void 0),C=Ct=t([i("esri.popup.content.support.ChartMediaInfoValueSeries")],C);var pe=C;var Tt,b=Tt=class extends a{constructor(e){super(e),this.colors=null,this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new Tt({colors:d(this.colors),fields:d(this.fields),normalizeField:this.normalizeField,series:d(this.series),tooltipField:this.tooltipField})}};t([o({type:[Yt],json:{type:[[N]],write:!0}})],b.prototype,"colors",void 0),t([o({type:[String],json:{write:!0}})],b.prototype,"fields",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"normalizeField",void 0),t([o({type:[pe],json:{read:!1}})],b.prototype,"series",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"tooltipField",void 0),b=Tt=t([i("esri.popup.content.support.ChartMediaInfoValue")],b);var ne=b;var V=class extends L{constructor(e){super(e),this.type=null,this.value=void 0}};t([o({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],V.prototype,"type",void 0),t([o({type:ne,json:{write:!0}})],V.prototype,"value",void 0),V=t([i("esri.popup.content.mixins.ChartMediaInfo")],V);var g=V;var F=Gt()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});var Rt,nt=Rt=class extends g{constructor(e){super(e),this.type="bar-chart"}clone(){return new Rt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};t([o({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:F.write}})],nt.prototype,"type",void 0),nt=Rt=t([i("esri.popup.content.BarChartMediaInfo")],nt);var at=nt;var At,lt=At=class extends g{constructor(e){super(e),this.type="column-chart"}clone(){return new At({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};t([o({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:F.write}})],lt.prototype,"type",void 0),lt=At=t([i("esri.popup.content.ColumnChartMediaInfo")],lt);var mt=lt;var Jt,W=Jt=class extends a{constructor(e){super(e),this.linkURL=null,this.sourceURL=null}clone(){return new Jt({linkURL:this.linkURL,sourceURL:this.sourceURL})}};t([o({type:String,json:{write:!0}})],W.prototype,"linkURL",void 0),t([o({type:String,json:{write:!0}})],W.prototype,"sourceURL",void 0),W=Jt=t([i("esri.popup.content.support.ImageMediaInfoValue")],W);var ae=W;var Mt,k=Mt=class extends L{constructor(e){super(e),this.refreshInterval=0,this.type="image",this.value=void 0}clone(){return new Mt({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?.clone()})}};t([o({type:Number,json:{write:!0}})],k.prototype,"refreshInterval",void 0),t([o({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],k.prototype,"type",void 0),t([o({type:ae,json:{write:!0}})],k.prototype,"value",void 0),k=Mt=t([i("esri.popup.content.ImageMediaInfo")],k);var dt=k;var Et,ct=Et=class extends g{constructor(e){super(e),this.type="line-chart"}clone(){return new Et({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};t([o({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:F.write}})],ct.prototype,"type",void 0),ct=Et=t([i("esri.popup.content.LineChartMediaInfo")],ct);var ft=ct;var Bt,ut=Bt=class extends g{constructor(e){super(e),this.type="pie-chart"}clone(){return new Bt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};t([o({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:F.write}})],ut.prototype,"type",void 0),ut=Bt=t([i("esri.popup.content.PieChartMediaInfo")],ut);var yt=ut;var ht={base:L,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":at,"column-chart":mt,"line-chart":ft,"pie-chart":yt,image:dt}};var Lt,h=Lt=class extends m{constructor(e){super(e),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(e){return e&&e.map(r=>r.type==="image"?dt.fromJSON(r):r.type==="barchart"?at.fromJSON(r):r.type==="columnchart"?mt.fromJSON(r):r.type==="linechart"?ft.fromJSON(r):r.type==="piechart"?yt.fromJSON(r):void 0).filter(Boolean)}writeMediaInfos(e,r){r.mediaInfos=e&&e.map(p=>p.toJSON())}clone(){return new Lt(d({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};t([o()],h.prototype,"activeMediaInfoIndex",void 0),t([o({type:Object,json:{write:!0}})],h.prototype,"attributes",void 0),t([o({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([o({types:[ht]})],h.prototype,"mediaInfos",void 0),t([ot("mediaInfos")],h.prototype,"readMediaInfos",null),t([w("mediaInfos")],h.prototype,"writeMediaInfos",null),t([o({type:String,json:{write:!0}})],h.prototype,"title",void 0),t([o({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=Lt=t([i("esri.popup.content.MediaContent")],h);var D=h;var kt,q=kt=class extends a{constructor(e){super(e),this.field=null,this.order=null}clone(){return new kt({field:this.field,order:this.order})}};t([o({type:String,json:{write:!0}})],q.prototype,"field",void 0),t([o({type:["asc","desc"],json:{write:!0}})],q.prototype,"order",void 0),q=kt=t([i("esri.popup.support.RelatedRecordsInfoFieldOrder")],q);var vt=q;var x=class extends R(m){constructor(e){super(e),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}};t([o({type:String,json:{write:!0}})],x.prototype,"description",void 0),t([o({type:Number,json:{type:N,write:!0}})],x.prototype,"displayCount",void 0),t([o({type:["list"],json:{write:!0}})],x.prototype,"displayType",void 0),t([o({type:[vt],json:{write:!0}})],x.prototype,"orderByFields",void 0),t([o({type:Number,json:{type:N,write:!0}})],x.prototype,"relationshipId",void 0),t([o({type:String,json:{write:!0}})],x.prototype,"title",void 0),t([o({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],x.prototype,"type",void 0),x=t([i("esri.popup.content.RelationshipContent")],x);var U=x;var Dt,$=Dt=class extends m{constructor(e){super(e),this.text=null,this.type="text"}clone(){return new Dt({text:this.text})}};t([o({type:String,json:{write:!0}})],$.prototype,"text",void 0),t([o({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],$.prototype,"type",void 0),$=Dt=t([i("esri.popup.content.TextContent")],$);var P=$;var le={base:null,key:"type",typeMap:{attachment:J,media:D,text:P,expression:z,field:B,relationship:U}};var Ut,G=Ut=class extends a{constructor(e){super(e),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new Ut({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};t([o({type:Boolean,json:{write:!0}})],G.prototype,"returnTopmostRaster",void 0),t([o({type:Boolean,json:{write:!0}})],G.prototype,"showNoDataRecords",void 0),G=Ut=t([i("esri.popup.LayerOptions")],G);var me=G;var Pt,H=Pt=class extends a{constructor(e){super(e),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new Pt({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?d(this.orderByFields):null})}};t([o({type:Boolean,json:{write:!0}})],H.prototype,"showRelatedRecords",void 0),t([o({type:[vt],json:{write:!0}})],H.prototype,"orderByFields",void 0),H=Pt=t([i("esri.popup.RelatedRecordsInfo")],H);var de=H;var Kt,Q=Kt=class extends A{constructor(e){super(e),this.image=null,this.type="toggle",this.value=!1}clone(){return new Kt({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};t([o()],Q.prototype,"image",void 0),t([o()],Q.prototype,"value",void 0),Q=Kt=t([i("esri.support.actions.ActionToggle")],Q);var ce=Q;var X="relationships/",fe="expression/",ue=et.ofType({key:"type",defaultKeyValue:"button",base:A,typeMap:{button:re,toggle:ce}}),ye={base:m,key:"type",typeMap:{media:D,custom:Nt,text:P,attachments:J,fields:B,expression:z,relationship:U}},he=new Set(["attachments","fields","media","text","expression","relationship"]),l=class extends R(a){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(e){return Array.isArray(e)?e.map(r=>qt(ye,r)):typeof e=="string"||typeof e=="function"||e instanceof HTMLElement||Wt(e)?e:(Vt.getLogger(this).error("content error","unsupported content value",{value:e}),null)}readContent(e,r){let{popupElements:p}=r;return Array.isArray(p)&&p.length>0?this._readPopupInfoElements(r.description,r.mediaInfos,p):this._readPopupInfo(r)}writeContent(e,r,p,n){typeof e!="string"?Array.isArray(e)&&(r.popupElements=e.filter(s=>he.has(s.type)).map(s=>s?.toJSON(n)),r.popupElements.forEach(s=>{s.type==="attachments"?this._writeAttachmentContent(r):s.type==="media"?this._writeMediaContent(s,r):s.type==="text"?this._writeTextContent(s,r):s.type==="relationship"&&this._writeRelationshipContent(s,r)})):r.description=e}writeFieldInfos(e,r,p,n){let{content:s}=this,c=Array.isArray(s)?s:null;if(e){let u=c?c.filter(v=>v.type==="fields"):[],T=u.length&&u.every(v=>v.fieldInfos?.length);r.fieldInfos=e.filter(Boolean).map(v=>{let Y=v.toJSON(n);return T&&(Y.visible=!1),Y})}if(c)for(let u of c)u.type==="fields"&&this._writeFieldsContent(u,r)}writeLayerOptions(e,r,p,n){r[p]=!e||e.showNoDataRecords===null&&e.returnTopmostRaster===null?null:e.toJSON(n)}writeTitle(e,r){r.title=e||""}collectRequiredFields(e,r){return Z(this,null,function*(){let p=this.expressionInfos||[];yield this._collectExpressionInfoFields(e,r,[...p,...this._getContentExpressionInfos(this.content,p)]),Zt(e,r,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])})}getRequiredFields(e){return Z(this,null,function*(){let r=new Set;return yield this.collectRequiredFields(r,e),[...r].sort()})}_writeFieldsContent(e,r){if(!Array.isArray(e.fieldInfos)||!e.fieldInfos.length)return;let p=d(e.fieldInfos);Array.isArray(r.fieldInfos)?p.forEach(n=>{let s=r.fieldInfos.find(c=>c.fieldName?.toLowerCase()===n.fieldName?.toLowerCase());s?s.visible=!0:r.fieldInfos.push(n)}):r.fieldInfos=p}_writeAttachmentContent(e){e.showAttachments||(e.showAttachments=!0)}_writeRelationshipContent(e,r){let p=e.orderByFields?.map(s=>this._toFieldOrderJSON(s,e.relationshipId))||[],n=[...r.relatedRecordsInfo?.orderByFields||[],...p];r.relatedRecordsInfo=zt({showRelatedRecords:!0},n?.length&&{orderByFields:n})}_writeTextContent(e,r){!r.description&&e.text&&(r.description=e.text)}_writeMediaContent(e,r){if(!Array.isArray(e.mediaInfos)||!e.mediaInfos.length)return;let p=d(e.mediaInfos);Array.isArray(r.mediaInfos)?r.mediaInfos=[...r.mediaInfos,...p]:r.mediaInfos=p}_readPopupInfoElements(e,r,p){let n={description:!1,mediaInfos:!1};return p.map(s=>s.type==="media"?(s.mediaInfos||!r||n.mediaInfos||(s.mediaInfos=r,n.mediaInfos=!0),D.fromJSON(s)):s.type==="text"?(s.text||!e||n.description||(s.text=e,n.description=!0),P.fromJSON(s)):s.type==="attachments"?J.fromJSON(s):s.type==="fields"?B.fromJSON(s):s.type==="expression"?z.fromJSON(s):s.type==="relationship"?U.fromJSON(s):void 0).filter(Boolean)}_toRelationshipContent(e){let{field:r,order:p}=e;if(!r?.startsWith(X))return null;let n=r.replace(X,"").split("/");if(n.length!==2)return null;let s=parseInt(n[0],10),c=n[1];return typeof s=="number"&&c?U.fromJSON({relationshipId:s,orderByFields:[{field:c,order:p}]}):null}_toFieldOrderJSON(e,r){let{order:p,field:n}=e;return{field:`${X}${r}/${n}`,order:p}}_readPopupInfo({description:e,mediaInfos:r,showAttachments:p,relatedRecordsInfo:n={showRelatedRecords:!1}}){let s=[];e?s.push(new P({text:e})):s.push(new B),Array.isArray(r)&&r.length&&s.push(D.fromJSON({mediaInfos:r})),p&&s.push(J.fromJSON({displayType:"auto"}));let{showRelatedRecords:c,orderByFields:u}=n;return c&&u?.length&&u.forEach(T=>{let v=this._toRelationshipContent(T);v&&s.push(v)}),s.length?s:e}_getContentElementFields(e){let r=e?.type;if(r==="attachments")return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description)];if(r==="custom")return e.outFields||[];if(r==="fields")return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description),...this._getFieldInfoFields(e.fieldInfos??this.fieldInfos)];if(r==="media"){let p=e.mediaInfos||[];return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description),...p.reduce((n,s)=>[...n,...this._getMediaInfoFields(s)],[])]}return r==="text"?this._extractFieldNames(e.text):[]}_getMediaInfoFields(e){let{caption:r,title:p,value:n}=e,s=n||{},{fields:c,normalizeField:u,tooltipField:T,sourceURL:v,linkURL:Y}=s,xt=[...this._extractFieldNames(p),...this._extractFieldNames(r),...this._extractFieldNames(v),...this._extractFieldNames(Y),...c??[]];return u&&xt.push(u),T&&xt.push(T),xt}_getContentExpressionInfos(e,r){return Array.isArray(e)?e.reduce((p,n)=>[...p,...n.type==="expression"&&n.expressionInfo?[n.expressionInfo]:[]],r):[]}_getContentFields(e){return typeof e=="string"?this._extractFieldNames(e):Array.isArray(e)?e.reduce((r,p)=>[...r,...this._getContentElementFields(p)],[]):[]}_collectExpressionInfoFields(e,r,p){return Z(this,null,function*(){p&&(yield Promise.all(p.map(n=>te(e,r,n.expression))))})}_getFieldInfoFields(e){return e?e.filter(({fieldName:r,visible:p})=>!(p!==void 0&&!p||!r||r.startsWith(X)||r.startsWith(fe))).map(r=>r.fieldName):[]}_getActionsFields(e){return e?e.toArray().reduce((r,p)=>[...r,...this._getActionFields(p)],[]):[]}_getActionFields(e){let{className:r,title:p,type:n}=e,s=n==="button"||n==="toggle"?e.image:"";return[...this._extractFieldNames(p),...this._extractFieldNames(r),...this._extractFieldNames(s)]}_getTitleFields(e){return typeof e=="string"?this._extractFieldNames(e):[]}_extractFieldNames(e){return ee(e).filter(r=>!(r.indexOf(X)===0||r.indexOf(fe)===0))}};t([o({type:ue})],l.prototype,"actions",void 0),t([o()],l.prototype,"content",void 0),t([Qt("content")],l.prototype,"castContent",null),t([ot("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],l.prototype,"readContent",null),t([w("content",{popupElements:{type:et.ofType(le)},showAttachments:{type:Boolean},mediaInfos:{type:et.ofType(ht)},description:{type:String},relatedRecordsInfo:{type:de}})],l.prototype,"writeContent",null),t([o({type:[oe],json:{write:!0}})],l.prototype,"expressionInfos",void 0),t([o({type:[pt]})],l.prototype,"fieldInfos",void 0),t([w("fieldInfos")],l.prototype,"writeFieldInfos",null),t([o({type:me})],l.prototype,"layerOptions",void 0),t([w("layerOptions")],l.prototype,"writeLayerOptions",null),t([o({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],l.prototype,"lastEditInfoEnabled",void 0),t([o()],l.prototype,"outFields",void 0),t([o()],l.prototype,"overwriteActions",void 0),t([o()],l.prototype,"returnGeometry",void 0),t([o({json:{type:String}})],l.prototype,"title",void 0),t([w("title")],l.prototype,"writeTitle",null),l=t([i("esri.PopupTemplate")],l);var Nn=l;export{J as a,ie as b,se as c,pt as d,B as e,pe as f,D as g,vt as h,P as i,oe as j,A as k,re as l,ce as m,Nn as n};
