function O(e,n,t){_(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function _(e,n,t,f=3,l=f){if(e.length/f!==Math.ceil(n.length/l))return e;let r=e.length/f,o=t[0],i=t[1],u=t[2],a=t[4],s=t[5],y=t[6],p=t[8],m=t[9],M=t[10],h=t[12],B=t[13],S=t[14],d=0,c=0;for(let g=0;g<r;g++){let b=n[d],w=n[d+1],V=n[d+2];e[c]=o*b+a*w+p*V+h,e[c+1]=i*b+s*w+m*V+B,e[c+2]=u*b+y*w+M*V+S,d+=l,c+=f}return e}function q(e,n,t){z(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function z(e,n,t,f=3,l=f){if(e.length/f!==Math.ceil(n.length/l))return;let r=e.length/f,o=t[0],i=t[1],u=t[2],a=t[3],s=t[4],y=t[5],p=t[6],m=t[7],M=t[8],h=0,B=0;for(let S=0;S<r;S++){let d=n[h],c=n[h+1],g=n[h+2];e[B]=o*d+a*c+p*g,e[B+1]=i*d+s*c+m*g,e[B+2]=u*d+y*c+M*g,h+=l,B+=f}}function x(e,n,t){j(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function j(e,n,t,f=3,l=f){let r=Math.min(e.length/f,n.length/l),o=0,i=0;for(let u=0;u<r;u++)e[i]=t*n[o],e[i+1]=t*n[o+1],e[i+2]=t*n[o+2],o+=l,i+=f;return e}function P(e,n,t,f=3,l=f){let r=e.length/f;if(r!==Math.ceil(n.length/l))return e;let o=0,i=0;for(let u=0;u<r;u++)e[i]=n[o]+t[0],e[i+1]=n[o+1]+t[1],e[i+2]=n[o+2]+t[2],o+=l,i+=f;return e}function R(e,n){v(e.typedBuffer,n.typedBuffer,e.typedBufferStride,n.typedBufferStride)}function v(e,n,t=3,f=t){let l=Math.min(e.length/t,n.length/f),r=0,o=0;for(let i=0;i<l;i++){let u=n[r],a=n[r+1],s=n[r+2],y=u*u+a*a+s*s;if(y>0){let p=1/Math.sqrt(y);e[o]=p*u,e[o+1]=p*a,e[o+2]=p*s}r+=f,o+=t}}function T(e,n,t){let f=Math.min(e.count,n.count),l=e.typedBuffer,r=e.typedBufferStride,o=n.typedBuffer,i=n.typedBufferStride,u=0,a=0;for(let s=0;s<f;s++)l[a]=o[u]>>t,l[a+1]=o[u+1]>>t,l[a+2]=o[u+2]>>t,u+=i,a+=r}var C=Object.freeze(Object.defineProperty({__proto__:null,normalize:v,normalizeView:R,scale:j,scaleView:x,shiftRight:T,transformMat3:z,transformMat3View:q,transformMat4:_,transformMat4View:O,translate:P},Symbol.toStringTag,{value:"Module"}));export{O as a,_ as b,q as c,z as d,x as e,j as f,P as g,R as h,v as i};