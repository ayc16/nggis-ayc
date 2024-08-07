import{a as S,b as k}from"./chunk-BZEC7TCW.js";import{y as mt}from"./chunk-WD4CT5CX.js";import{a as gt}from"./chunk-VSVNPPHQ.js";import{a as Tt}from"./chunk-IQJU4QT3.js";import{h as dt}from"./chunk-EAH6BNBL.js";var Rt=128e3,ft=null,Vt=null;function At(){return dt(this,null,function*(){return ft||(ft=kt()),ft})}function kt(){return dt(this,null,function*(){Vt=yield(Tt("esri-csp-restrictions")?yield import("./chunk-INVEUGFY.js").then(i=>i.l):yield import("./chunk-QBPZNAZB.js").then(i=>i.l)).default({locateFile:i=>gt(`esri/core/libs/libtess/${i}`)})})}function Ot(r,i){let x=Math.max(r.length,Rt);return Vt.triangulate(r,i,x)}function Et(r,i){return r.x===i.x&&r.y===i.y}function Lt(r){if(!r)return;let i=r.length;if(i<=1)return;let x=0;for(let f=1;f<i;f++)Et(r[f],r[x])||++x===f||(r[x]=r[f]);r.length=x+1}function L(r,i){return r.x=i.y,r.y=-i.x,r}function E(r,i){return r.x=-i.y,r.y=i.x,r}function Nt(r,i){return r.x=i.x,r.y=i.y,r}function vt(r,i){return r.x=-i.x,r.y=-i.y,r}function wt(r){return Math.sqrt(r.x*r.x+r.y*r.y)}function Bt(r,i){return r.x*i.y-r.y*i.x}function pt(r,i){return r.x*i.x+r.y*i.y}function et(r,i,x,f){return r.x=i.x*x+i.y*f,r.y=i.x*f-i.y*x,r}var bt=class{constructor(i,x,f){this._writeVertex=i,this._writeTriangle=x,this._canUseThinTessellation=f,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,x,f=this._canUseThinTessellation){Lt(i),f&&x.halfWidth<mt&&!x.offset?this._tessellateThin(i,x):this._tessellate(i,x)}_tessellateThin(i,x){if(i.length<2)return;let f=x.wrapDistance||65535,p=x.initialDistance||0,W=!1,F=i[0].x,H=i[0].y,B=i.length;for(let j=1;j<B;++j){W&&(W=!1,p=0);let X=i[j].x,Q=i[j].y,b=X-F,v=Q-H,T=Math.sqrt(b*b+v*v);if(b/=T,v/=T,p+T>f){W=!0;let t=(f-p)/T;T=f-p,X=(1-t)*F+t*X,Q=(1-t)*H+t*Q,--j}let o=this._writeVertex(F,H,0,0,b,v,v,-b,0,-1,p),y=this._writeVertex(F,H,0,0,b,v,-v,b,0,1,p);p+=T;let J=this._writeVertex(X,Q,0,0,b,v,v,-b,0,-1,p),e=this._writeVertex(X,Q,0,0,b,v,-v,b,0,1,p);this._writeTriangle(o,y,J),this._writeTriangle(y,J,e),F=X,H=Q}}_tessellate(i,x){let f=i[0],p=i[i.length-1],W=Et(f,p),F=W?3:2;if(i.length<F)return;let H=x.pixelCoordRatio,B=x.capType!=null?x.capType:S.BUTT,j=x.joinType!=null?x.joinType:k.MITER,X=x.miterLimit!=null?Math.min(x.miterLimit,4):2,Q=x.roundLimit!=null?Math.min(x.roundLimit,1.05):1.05,b=x.halfWidth!=null?x.halfWidth:2,v=!!x.textured,T,o,y,J=null,e=this._prevNormal,t=this._nextNormal,K=-1,q=-1,n=this._joinNormal,_,c,xt=this._textureNormalLeft,st=this._textureNormalRight,w=this._textureNormal,u=-1,l=-1,_t=x.wrapDistance||65535,h=x.initialDistance||0,Ut=this._writeVertex,Mt=this._writeTriangle,d=(U,nt,$,m,D,A)=>{let O=Ut(o,y,_,c,$,m,U,nt,D,A,h);return u>=0&&l>=0&&O>=0&&Mt(u,l,O),u=l,l=O,O};W&&(T=i[i.length-2],t.x=p.x-T.x,t.y=p.y-T.y,q=wt(t),t.x/=q,t.y/=q);let Y=!1;for(let U=0;U<i.length;++U){if(Y&&(Y=!1,h=0),T&&(e.x=-t.x,e.y=-t.y,K=q,h+K>_t&&(Y=!0)),Y){let s=(_t-h)/K;K=_t-h,T={x:(1-s)*T.x+s*i[U].x,y:(1-s)*T.y+s*i[U].y},--U}else T=i[U];o=T.x,y=T.y;let nt=U<=0&&!Y,$=U===i.length-1;if(nt||(h+=K),J=$?W?i[1]:null:i[U+1],J?(t.x=J.x-o,t.y=J.y-y,q=wt(t),t.x/=q,t.y/=q):(t.x=void 0,t.y=void 0),!W){if(nt){E(n,t),_=n.x,c=n.y,B===S.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===S.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==S.ROUND&&B!==S.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if($){L(n,e),_=n.x,c=n.y,B!==S.ROUND&&B!==S.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===S.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===S.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let m,D,A=-Bt(e,t);if(Math.abs(A)<.01)pt(e,t)>0?(n.x=e.x,n.y=e.y,A=1,m=Number.MAX_VALUE,D=!0):(E(n,t),A=1,m=1,D=!1);else{n.x=(e.x+t.x)/A,n.y=(e.y+t.y)/A,m=wt(n);let s=(m-1)*b*H;D=m>4||s>K&&s>q}_=n.x,c=n.y;let O=j;switch(j){case k.BEVEL:m<1.05&&(O=k.MITER);break;case k.ROUND:m<Q&&(O=k.MITER);break;case k.MITER:m>X&&(O=k.BEVEL)}switch(O){case k.MITER:if(d(n.x,n.y,-e.x,-e.y,0,-1),d(-n.x,-n.y,-e.x,-e.y,0,1),$)break;if(v){let s=Y?0:h;u=this._writeVertex(o,y,_,c,t.x,t.y,n.x,n.y,0,-1,s),l=this._writeVertex(o,y,_,c,t.x,t.y,-n.x,-n.y,0,1,s)}break;case k.BEVEL:{let s=A<0,g,V,C,M;if(s){let a=u;u=l,l=a,g=xt,V=st}else g=st,V=xt;if(D)C=s?E(this._innerPrev,e):L(this._innerPrev,e),M=s?L(this._innerNext,t):E(this._innerNext,t);else{let a=s?vt(this._inner,n):Nt(this._inner,n);C=a,M=a}let R=s?L(this._bevelStart,e):E(this._bevelStart,e);d(C.x,C.y,-e.x,-e.y,g.x,g.y);let yt=d(R.x,R.y,-e.x,-e.y,V.x,V.y);if($)break;let I=s?E(this._bevelEnd,t):L(this._bevelEnd,t);if(D){let a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,I.x,I.y,V.x,V.y,h),this._writeTriangle(yt,a,l)}else{if(v){let a=this._bevelMiddle;a.x=(R.x+I.x)/2,a.y=(R.y+I.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,h)}else{let a=u;u=l,l=a}d(I.x,I.y,t.x,t.y,V.x,V.y)}if(s){let a=u;u=l,l=a}break}case k.ROUND:{let s=A<0,g,V;if(s){let N=u;u=l,l=N,g=xt,V=st}else g=st,V=xt;let C=s?vt(this._inner,n):Nt(this._inner,n),M,R;D?(M=s?E(this._innerPrev,e):L(this._innerPrev,e),R=s?L(this._innerNext,t):E(this._innerNext,t)):(M=C,R=C);let yt=s?L(this._roundStart,e):E(this._roundStart,e),I=s?E(this._roundEnd,t):L(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,V.x,V.y);if($)break;let z=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);D||this._writeTriangle(u,l,z);let P=vt(this._outer,C),G=this._writeVertex(o,y,_,c,t.x,t.y,I.x,I.y,V.x,V.y,h),Z,tt,lt=m>2;if(lt){let N;m!==Number.MAX_VALUE?(P.x/=m,P.y/=m,N=pt(e,P),N=(m*(N*N-1)+1)/N):N=-1,Z=s?L(this._startBreak,e):E(this._startBreak,e),Z.x+=e.x*N,Z.y+=e.y*N,tt=s?E(this._endBreak,t):L(this._endBreak,t),tt.x+=t.x*N,tt.y+=t.y*N}et(w,P,-e.x,-e.y);let ht=this._writeVertex(o,y,_,c,-e.x,-e.y,P.x,P.y,w.x,w.y,h);et(w,P,t.x,t.y);let ct=v?this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,w.x,w.y,h):ht,ut=z,at=v?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,h):z,it=-1,rt=-1;if(lt&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,h),et(w,tt,t.x,t.y),rt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,h)),v?lt?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,ht),this._writeTriangle(at,ct,rt),this._writeTriangle(at,rt,G)):(this._writeTriangle(ut,ot,ht),this._writeTriangle(at,ct,G)):lt?(this._writeTriangle(z,ot,it),this._writeTriangle(z,it,rt),this._writeTriangle(z,rt,G)):(this._writeTriangle(z,ot,ht),this._writeTriangle(z,ct,G)),D?(u=this._writeVertex(o,y,_,c,t.x,t.y,R.x,R.y,g.x,g.y,h),l=G):(u=v?this._writeVertex(o,y,_,c,t.x,t.y,R.x,R.y,g.x,g.y,h):a,this._writeTriangle(u,at,G),l=G),s){let N=u;u=l,l=N}break}}}}};export{At as a,Ot as b,bt as c};
