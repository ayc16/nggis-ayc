import{l as X,m as k}from"./chunk-YEH3DBEZ.js";import{d as L}from"./chunk-J7HRHAPS.js";import{c as A}from"./chunk-XAHD7XBV.js";import{n as B}from"./chunk-BBLGBTII.js";import{a as C}from"./chunk-4KGZTO2H.js";import{b as V}from"./chunk-37H4LYIE.js";import{e as W}from"./chunk-NSEXRUGB.js";import{c as S,g as z,h as G,i as j,j as D}from"./chunk-CF52RSJZ.js";import{m as I}from"./chunk-4JWMB5SM.js";var q=class extends k{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=C()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(let r of this.children)r.beforeRender(e)}prepareRenderPasses(e){let r=e.registerRenderPass({name:"overlay",brushes:[X.overlay],target:()=>this.children,drawPhase:L.MAP});return[...super.prepareRenderPasses(e),r]}_updateMatrices(e){let{state:r}=e,{id:s,size:c,pixelRatio:a,resolution:l,rotation:h,viewpoint:u,displayMat3:M}=r;if(this._viewStateId===s)return;let p=Math.PI/180*h,o=a*c[0],n=a*c[1];this._localOrigin=u.targetGeometry.clone();let{x:d,y:_}=this._localOrigin,m=W(d,r.spatialReference);this._localOrigin.x=m,this._localOrigin.y=_;let v=l*o,g=l*n,t=S(this._dvsMat3);z(t,t,M),G(t,t,V(o/2,n/2)),D(t,t,A(o/v,-n/g,1)),j(t,t,-p),this._viewStateId=s}_updateOverlays(e,r){let{state:s}=e,{rotation:c,spatialReference:a,worldScreenWidth:l,size:h,viewpoint:u}=s,M=this._localOrigin,p,o=0,n=I(a);if(n&&a.isWrappable){let d=h[0],_=h[1],m=180/Math.PI*c,v=Math.abs(Math.cos(m)),g=Math.abs(Math.sin(m)),t=Math.round(d*v+_*g),[b,x]=n.valid,i=B(a),{x:P,y:E}=u.targetGeometry,F=[P,E],y=[0,0];s.toScreen(y,F);let f=[0,0],w;w=t>l?.5*l:.5*t;let O=Math.floor((P+.5*i)/i),H=b+O*i,J=x+O*i,R=[y[0]+w,0];s.toMap(f,R),f[0]>J&&(o=i),R[0]=y[0]-w,s.toMap(f,R),f[0]<H&&(o=-i),p={worldWidth:i,xBounds:[b,x]}}for(let d of r)d.updateDrawCoords(M,o,a,p)}};export{q as a};
