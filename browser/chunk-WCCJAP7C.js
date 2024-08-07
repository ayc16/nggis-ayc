import{b as $,m as Pt}from"./chunk-TJO74ND6.js";import{b as T}from"./chunk-A3KX3DLS.js";import{a as Z,d as Ft}from"./chunk-VOLKMATP.js";import{l as Vt}from"./chunk-KNDM5UGY.js";import{a as w}from"./chunk-EKKBMKVP.js";import{i as Rt,j as Tt}from"./chunk-57GB3TOJ.js";import{D as lt,E as mt,H as ct}from"./chunk-FT46PIGB.js";import{a as x}from"./chunk-W5OI4BJ2.js";import{b as R,c as _,h,i as q,j as W,l as wt,n as St,r as v}from"./chunk-XSMN6VN6.js";import{a as O}from"./chunk-FOPE5Y6E.js";import{b as N}from"./chunk-37H4LYIE.js";import{a as Ot}from"./chunk-X6FZ7Z76.js";import{c as bt,g as Dt,h as z,i as H,j as nt,k as At,l as Mt}from"./chunk-V5AJXD2Y.js";import{a as k}from"./chunk-GNCG2SQP.js";import{a as V}from"./chunk-AQ74ANSJ.js";import{f as L}from"./chunk-6FWNINU2.js";import{j as xt,t as vt}from"./chunk-UI76XBLJ.js";import{F as g,I as G}from"./chunk-VWEBO6QK.js";import{S as B}from"./chunk-KAAR5ZJN.js";import{a as u}from"./chunk-W3WDPWBE.js";import{h as P,p as gt}from"./chunk-WKT5W7KT.js";import{p as j}from"./chunk-X3IDZTNG.js";import{h as y}from"./chunk-EAH6BNBL.js";function Ut(s){let t=dt(J(s)),e=t,a=!0,r=Math.max(t/2,5),i=Math.round(V(s.maxPathLength)/r)+1,o=10,{density:n}=s;return{smoothing:V(s.smoothing),interpolate:!0,velocityScale:s.flowRepresentation==="flow-from"?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:r,maxTurnAngle:1,collisions:a,lineCollisionWidth:e,lineSpacing:o,density:n}}function dt(s){return s.kind==="constant"?s.value[0]:s.values[s.values.length-1]}function zt(s){let t=s.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function Et(s){return{kind:"constant",value:[.1,.1,.1,1]}}function J(s){if(!s.hasVisualVariables("size"))return{kind:"constant",value:[V(s.trailWidth)]};let t=s.getVisualVariablesForType("size")[0],e=[],a=[],r;if(t.stops){for(let i of t.stops)e.push(i.value),a.push(V(i.size));r=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),a.push(V(t.minSize),V(t.maxSize)),r=2;return{kind:"ramp",stops:e,values:a,count:r}}function It(s){if(!s.hasVisualVariables("color"))return{kind:"constant",value:zt(s.color)};let t=s.getVisualVariablesForType("color")[0],e=[],a=[];for(let r of t.stops)e.push(r.value),Array.prototype.push.apply(a,zt(r.color));return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function Ct(s){if(!s.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};let t=s.getVisualVariablesForType("opacity")[0],e=[],a=[];for(let r of t.stops)e.push(r.value),a.push(r.opacity);return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function pt(s,t,e,a){switch(t){case"int":s.setUniform1iv(e,a);break;case"float":s.setUniform1fv(e,a);break;case"vec2":s.setUniform2fv(e,a);break;case"vec3":s.setUniform3fv(e,a);break;case"vec4":s.setUniform4fv(e,a)}}function S(s,t,e,a){a.kind==="constant"?pt(s,e,`u_${t}`,a.value):(pt(s,"float",`u_${t}_stops`,a.stops),pt(s,e,`u_${t}_values`,a.values),s.setUniform1i(`u_${t}_count`,a.count))}function Wt(s,t){let e=!0;return e=e&&s.collisions===t.collisions,e=e&&s.density===t.density,e=e&&s.interpolate===t.interpolate,e=e&&s.lineCollisionWidth===t.lineCollisionWidth,e=e&&s.lineSpacing===t.lineSpacing,e=e&&s.maxTurnAngle===t.maxTurnAngle,e=e&&s.minSpeedThreshold===t.minSpeedThreshold,e=e&&s.segmentLength===t.segmentLength,e=e&&s.smoothing===t.smoothing,e=e&&s.velocityScale===t.velocityScale,e=e&&s.verticesPerLine===t.verticesPerLine,e}function ht(s,t){return s===t||s!=null&&t!=null&&s.equals(t)}function K(s,t){if(!Wt(s.simulationSettings,t.simulationSettings)||!ht(s.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&s.loadImagery===t.loadImagery,e=e&&s.createFlowMesh===t.createFlowMesh,e=e&&s.color.kind===t.color.kind,e=e&&s.opacity.kind===t.opacity.kind,e=e&&s.size.kind===t.size.kind,e}var Q=class s{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof s)||!ht(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}load(t,e){return y(this,null,function*(){let{extent:a,size:r}=t;P(e);let i=yield this._params.loadImagery(a,r[0],r[1],this._params.timeExtent,e);return new ut(i,{color:this._params.color,opacity:this._params.opacity})})}render(t,e,a){let{context:r}=t,{program:i}=a;r.setFaceCullingEnabled(!1),r.setBlendingEnabled(!0),r.setBlendFunction(_.ONE,_.ONE_MINUS_SRC_ALPHA),r.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),S(i,"color","vec4",this._params.color),S(i,"opacity","float",this._params.opacity),r.bindVAO(a.vertexArray),r.drawArrays(R.TRIANGLE_STRIP,0,4)}},X=new Map;X.set("a_position",0),X.set("a_texcoord",1);var Ht={geometry:[new x("a_position",2,h.UNSIGNED_SHORT,0,8),new x("a_texcoord",2,h.UNSIGNED_SHORT,4,8)]},Zt={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:X},ut=class{constructor(t,e){this._flowData=t,this._values=e}attach(t){let{context:e}=t,{width:a,height:r}=this._flowData,i=w.createVertex(e,v.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,r,0,0,a,r,1,0])),o=new T(e,X,Ht,{geometry:i}),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity");let m=t.painter.materialManager.getProgram(Zt,n),c=1e6,f=-1e6;for(let p=0;p<r;p++)for(let d=0;d<a;d++)if(this._flowData.mask[p*a+d]!==0){let A=this._flowData.data[2*(p*a+d)],M=this._flowData.data[2*(p*a+d)+1],F=Math.sqrt(A*A+M*M);c=Math.min(c,F),f=Math.max(f,F)}let l=new Uint8Array(4*a*r);for(let p=0;p<r;p++)for(let d=0;d<a;d++)if(this._flowData.mask[p*a+d]!==0){let A=this._flowData.data[2*(p*a+d)],M=this._flowData.data[2*(p*a+d)+1],F=(Math.sqrt(A*A+M*M)-c)/(f-c);l[4*(p*a+d)]=255*F,l[4*(p*a+d)+1]=0,l[4*(p*a+d)+2]=0,l[4*(p*a+d)+3]=255}else l[4*(p*a+d)]=0,l[4*(p*a+d)+1]=0,l[4*(p*a+d)+2]=0,l[4*(p*a+d)+3]=0;let D=new Rt;D.internalFormat=St.RGBA,D.wrapMode=wt.CLAMP_TO_EDGE,D.flipped=!0,D.width=a,D.height=r;let C=new Tt(e,D,l);this.vertexArray=o,this.program=m,this.texture=C,this.min=c,this.max=f,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}};var Y=class s{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof s&&K(this._params,t._params)}load(t,e){return y(this,null,function*(){let{extent:a,size:r}=t;P(e);let i=yield this._params.loadImagery(a,r[0],r[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=yield this._params.createFlowMesh("Particles",this._params.simulationSettings,i,e);return new ft(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})})}render(t,e,a){let{context:r}=t,{program:i}=a;r.setFaceCullingEnabled(!1),r.setBlendingEnabled(!0),r.setBlendFunction(_.ONE,_.ONE_MINUS_SRC_ALPHA),r.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),S(i,"color","vec4",this._params.color),S(i,"opacity","float",this._params.opacity),S(i,"size","float",this._params.size),r.bindVAO(a.vertexArray),r.drawElements(R.TRIANGLES,a.indexCount,h.UNSIGNED_INT,0)}},U=new Map;U.set("a_xyts0",0),U.set("a_xyts1",1),U.set("a_typeIdDurationSeed",2),U.set("a_extrudeInfo",3);var $t={geometry:[new x("a_xyts0",4,h.FLOAT,0,64),new x("a_xyts1",4,h.FLOAT,16,64),new x("a_typeIdDurationSeed",4,h.FLOAT,32,64),new x("a_extrudeInfo",4,h.FLOAT,48,64)]},Jt={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:U},ft=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){let{context:e}=t,a=w.createVertex(e,v.STATIC_DRAW,this._vertexData),r=w.createIndex(e,v.STATIC_DRAW,this._indexData),i=new T(e,U,$t,{geometry:a},r),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");let n=t.painter.materialManager.getProgram(Jt,o);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}};var tt=class s{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof s)||this._styles.length!==t._styles.length)return!1;let e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}load(t,e){return y(this,null,function*(){let a=yield Promise.all(this._styles.map(r=>r.load(t,e)));return new _t(a)})}render(t,e,a){for(let r=0;r<this._styles.length;r++)this._styles[r].render(t,e,a.resources[r])}},_t=class{constructor(t){this.resources=t}attach(t){for(let e of this.resources)e.attach(t)}detach(){for(let t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}};var et=class s{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof s&&K(this._params,t._params)}load(t,e){return y(this,null,function*(){let{extent:a,size:r}=t;P(e);let i=yield this._params.loadImagery(a,r[0],r[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=yield this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,e);return new yt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})})}render(t,e,a){let{context:r}=t,{program:i}=a;r.setFaceCullingEnabled(!1),r.setBlendingEnabled(!0),r.setBlendFunction(_.ONE,_.ONE_MINUS_SRC_ALPHA),r.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),S(i,"color","vec4",this._params.color),S(i,"opacity","float",this._params.opacity),S(i,"size","float",this._params.size),r.bindVAO(a.vertexArray),r.drawElements(R.TRIANGLES,a.indexCount,h.UNSIGNED_INT,0)}},E=new Map;E.set("a_positionAndSide",0),E.set("a_timeInfo",1),E.set("a_extrude",2),E.set("a_speed",3);var Kt={geometry:[new x("a_positionAndSide",3,h.FLOAT,0,36),new x("a_timeInfo",3,h.FLOAT,12,36),new x("a_extrude",2,h.FLOAT,24,36),new x("a_speed",1,h.FLOAT,32,36)]},Qt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:E},yt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){let{context:e}=t,a=w.createVertex(e,v.STATIC_DRAW,this._vertexData),r=w.createIndex(e,v.STATIC_DRAW,this._indexData),i=new T(e,E,Kt,{geometry:a},r),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");let n=t.painter.materialManager.getProgram(Qt,o);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}};var Xt=4,Yt=1,te=.5,ee=!0,ae=!0,se=2.3;function kt(s,t){let{flowSpeed:e,trailLength:a}=s,r=Ut(s),i=null,o={opacity:Ct(s),size:J(s)},n=It(s);if(s.background==="none")o.color=n;else{n.kind==="constant"&&(n={kind:"ramp",stops:[0,1],values:[0,0,0,1,n.value[0],n.value[1],n.value[2],n.value[3]],count:2});let f={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:n,opacity:{kind:"constant",value:[1]}};i=new Q(f),o.color=Et()}let m={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:r,timeExtent:t.timeExtent,trailLength:a,flowSpeed:e,featheringSize:Yt,featheringOffset:te,introFade:ee,fadeToZero:ae,decayRate:se,color:o.color,opacity:o.opacity,size:o.size},c=s.trailCap==="butt"||dt(J(s))<=Xt?new et(m):new Y(m);return i!=null?new tt([i,c]):c}var at=class extends ${constructor(){super(...arguments),this._visualState={time:0,dvsMat3:O(),displayViewMat3:O()}}dispose(){}prepareState(t){let{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(q.EQUAL,0,255)}draw(t,e){let{requestRender:a,allowDelayedRender:r}=t,{displayData:i}=e;if(i==null||(i.state.name==="loaded"&&i.attach(t),i.state.name!=="attached"))return;let o=i.state.resources;!r||o.ready||a==null?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.displayViewScreenMat3,this._visualState.displayViewMat3=t.state.displayViewMat3,i.flowStyle.render(t,this._visualState,o),i.flowStyle.animated&&a!=null&&a()):a()}};var st=class extends Pt{constructor(){super(...arguments),this.flowStyle=null}doRender(t){super.doRender(t)}prepareRenderPasses(t){let e=t.registerRenderPass({name:"flow",brushes:[at],target:()=>this.children,drawPhase:Ft.MAP});return[...super.prepareRenderPasses(t),e]}};var rt=class{constructor(t,e,a,r){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=r}load(){return y(this,null,function*(){let t=new AbortController;this.state={name:"loading",abortController:t};let e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=yield this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}})}attach(t){if(this.state.name!=="loaded")return void j.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");let e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}};var it=class extends Z{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){this._displayData!=null&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){let{displayData:e}=this;if(e==null)return;let a=e.extent.xmin,r=e.extent.ymax,i=[0,0];t.toScreen(i,[a,r]);let o=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=L(t.rotation),{displayViewScreenMat3:m}=this.transforms;Mt(m,[-1,1,0]),nt(m,m,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),z(m,m,[i[0],i[1],0]),H(m,m,n),nt(m,m,[o*t.pixelRatio,o*t.pixelRatio,1])}_createTransforms(){return{displayViewScreenMat3:O()}}};var re=1.15,I=class extends G{constructor(s){super(s),this._flowDisplayObject=new it,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(s){let{flowStyle:t}=this.flowContainer;if(t==null)return void this._clear();let{extent:e,rotation:a,resolution:r,pixelRatio:i}=s.state,o=ie(e,a);o.expand(re);let n=[Math.round((o.xmax-o.xmin)/r),Math.round((o.ymax-o.ymin)/r)],m=new rt(t,o,n,i);if(this._loading!=null){if(this._loading.update(m))return;this._loading.detach(),this._loading=null}this._flowDisplayObject.displayData!=null&&this._flowDisplayObject.displayData.update(m)||(m.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},c=>{gt(c)||(j.getLogger(this).error("A resource failed to load.",c),this._loading=null)}),this._loading=m)}_clear(){this._flowDisplayObject.clear(),this._loading!=null&&(this._loading.detach(),this._loading=null)}};u([g()],I.prototype,"_loading",void 0),u([g()],I.prototype,"flowContainer",void 0),u([g()],I.prototype,"updating",null),I=u([B("esri.views.2d.engine.flow.FlowStrategy")],I);var Lt=I;function ie(s,t){let e=new xt({x:(s.xmax+s.xmin)/2,y:(s.ymax+s.ymin)/2,spatialReference:s.spatialReference}),a=s.xmax-s.xmin,r=s.ymax-s.ymin,i=Math.abs(Math.cos(L(t))),o=Math.abs(Math.sin(L(t))),n=i*a+o*r,m=o*a+i*r,c=new vt({xmin:e.x-n/2,ymin:e.y-m/2,xmax:e.x+n/2,ymax:e.y+m/2,spatialReference:s.spatialReference});return c.centerAt(e),c}var b=class extends G{constructor(){super(...arguments),this._loadImagery=(s,t,e,a,r)=>ct(this.layer,s,t,e,a,r),this._createFlowMesh=(s,t,e,a)=>this.layer.createFlowMesh({meshType:s,flowData:e,simulationSettings:t},{signal:a}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=()=>y(this,null,function*(){this._updateVisualization()})}get updating(){return!this.attached||this._strategy.updating}attach(){let{layer:s}=this,t=()=>{this._loadImagery=(e,a,r,i,o)=>ct(s,e,a,r,i,o),this._updateVisualization()};"multidimensionalDefinition"in s?this.addHandles(k(()=>s.multidimensionalDefinition,t)):this.addHandles([k(()=>s.mosaicRule,t),k(()=>s.rasterFunction,t),k(()=>s.definitionExpression,t)]),this.container=new st,this._strategy=new Lt({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles()}update(s){s.stationary?this._strategy.update(s):this.layerView.requestUpdate()}hitTest(s){return new Ot({attributes:{},geometry:s.clone(),layer:this.layer})}moveEnd(){}doRefresh(){return y(this,null,function*(){})}_updateVisualization(){let s=this.layer.renderer;if(s==null||s.type!=="flow")return;let t=kt(s,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};u([g()],b.prototype,"_strategy",void 0),u([g()],b.prototype,"attached",void 0),u([g()],b.prototype,"container",void 0),u([g()],b.prototype,"layer",void 0),u([g()],b.prototype,"layerView",void 0),u([g()],b.prototype,"type",void 0),u([g()],b.prototype,"updating",null),u([g()],b.prototype,"timeExtent",void 0),b=u([B("esri.views.2d.engine.flow.FlowView2D")],b);var Ua=b;var ot=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),Nt=new Float32Array([0,92/255,230/255,1]),oe={beaufort_ft:ot,beaufort_m:ot,beaufort_km:ot,beaufort_mi:ot,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:Nt,single_arrow:Nt,wind_speed:new Float32Array([0,0,0,1])},jt=[0,20],Bt=class extends ${constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(_.ONE,_.ONE_MINUS_SRC_ALPHA,_.ONE,_.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(W.KEEP,W.KEEP,W.REPLACE)}draw(t,e){if(e.source==null||e.source.validPixelCount===0)return;let{context:a,timeline:r}=t;if(r.begin(this.name),a.setStencilFunction(q.EQUAL,e.stencilRef,255),e.updateVectorFieldVAO(t),t.renderPass==="scalar"){let i=e.vaoData.scalar;i&&this._drawScalars(t,e,i.vao,i.elementCount)}else{let i=e.vaoData.magdir;i&&this._drawTriangles(t,e,i.vao,i.elementCount)}r.end(this.name)}_drawTriangles(t,e,a,r){let{context:i,painter:o,requestRender:n,allowDelayedRender:m}=t,{symbolizerParameters:c}=e,f=c.dataRange?["dataRange"]:[];c.rotationType==="geographic"&&f.push("rotationGeographic");let l=o.materialManager.getProgram(this._desc.magdir,f);if(m&&n!=null&&!l.compiled)return void n();i.useProgram(l);let{coordScale:D,opacity:C,transforms:p}=e;l.setUniform2fv("u_coordScale",D),l.setUniform1f("u_opacity",C),l.setUniformMatrix3fv("u_dvsMat3",p.displayViewScreenMat3);let{style:d,dataRange:A,rotation:M,symbolPercentRange:F}=c;l.setUniform4fv("u_colors",oe[d]),l.setUniform2fv("u_dataRange",A||jt),l.setUniform1f("u_rotation",M),l.setUniform2fv("u_symbolPercentRange",F);let qt=this._getSymbolSize(t,e);l.setUniform2fv("u_symbolSize",qt),i.bindVAO(a),i.drawElements(R.TRIANGLES,r,h.UNSIGNED_INT,0)}_drawScalars(t,e,a,r){let{context:i,painter:o,requestRender:n,allowDelayedRender:m}=t,{symbolizerParameters:c}=e,f=[];c.style==="wind_speed"?f.push("innerCircle"):c.dataRange&&f.push("dataRange"),c.rotationType==="geographic"&&f.push("rotationGeographic");let l=o.materialManager.getProgram(this._desc.scalar,f);if(m&&n!=null&&!l.compiled)return void n();i.useProgram(l);let{coordScale:D,opacity:C,transforms:p}=e;l.setUniform2fv("u_coordScale",D),l.setUniform1f("u_opacity",C),l.setUniformMatrix3fv("u_dvsMat3",p.displayViewScreenMat3);let{dataRange:d,symbolPercentRange:A}=c;l.setUniform2fv("u_dataRange",d||jt),l.setUniform2fv("u_symbolPercentRange",A);let M=this._getSymbolSize(t,e);l.setUniform2fv("u_symbolSize",M),i.bindVAO(a),i.drawElements(R.TRIANGLES,r,h.UNSIGNED_INT,0)}_getSymbolSize(t,e){let a=e.key?2**(t.displayLevel-e.key.level):e.resolution/t.state.resolution,{symbolTileSize:r}=e.symbolizerParameters;return[r/(Math.round((e.width-e.offset[0])/r)*r)/a,r/(Math.round((e.height-e.offset[1])/r)*r)/a]}};var Gt=class extends Z{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){this.vaoData!=null&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){this._vaoInvalidated||this.vaoData==null||(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,this.source!=null&&this.vaoData==null){let{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{let a=mt(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,a);this.vaoData={magdir:r}}break;case"simple_scalar":{let a=lt(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,a);this.vaoData={scalar:r}}break;case"wind_speed":{let a=mt(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,a),i=lt(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:r,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{displayViewScreenMat3:O()}}setTransform(t){let e=bt(this.transforms.displayViewScreenMat3),[a,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),i=this.resolution/this.pixelRatio/t.resolution,o=i*this.width,n=i*this.height,m=Math.PI*this.rotation/180;z(e,e,N(a,r)),z(e,e,N(o/2,n/2)),H(e,e,-m),z(e,e,N(-o/2,-n/2)),At(e,e,N(o,n)),Dt(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){let{vertexData:a,indexData:r}=e,i=w.createVertex(t,v.STATIC_DRAW,new Float32Array(a)),o=w.createIndex(t,v.STATIC_DRAW,new Uint32Array(r)),n=Vt("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:h.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:h.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:h.FLOAT,normalized:!1}]});return{vao:new T(t,n.attributes,n.bufferLayouts,{geometry:i},o),elementCount:r.length}}};export{Ua as a,Bt as b,Gt as c};
