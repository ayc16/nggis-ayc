import{b as I}from"./chunk-6FWNINU2.js";var O=t=>t.includes("Brush"),S=class{constructor(){this._names=new Map}begin(e){this._names.has(e)||(this._names.set(e,!1),O(e)&&this.record("Esri.FirstDraw"),performance.mark(`Esri.${e}.Start`))}end(e){this._names.has(e)&&!this._names.get(e)&&(this._names.set(e,!0),performance.mark(`Esri.${e}.End`))}record(e){this._names.has(e)||(this._names.set(e,!0),performance.mark(`Esri.${e}`))}};function at(t,e,a){let{ctx:i,canvas:n}=B(t,a),o=i.getImageData(0,0,t.width,t.height),x=T(n,e);return H(n),{dataUrl:x,data:o}}function nt(t,e){let{ctx:a,canvas:i}=B(t,e),n=a.getImageData(0,0,t.width,t.height);return H(i),n}function B(t,e){let a=Q();e.premultipliedAlpha&&G(t),a.width=t.width,a.height=t.height;let i=a.getContext("2d",{willReadFrequently:!0});return i.putImageData(t,0,0),e.flipY&&z(i),{ctx:i,canvas:a}}function H(t){t.width=0,t.height=0}function Q(){return D==null&&(D=document.createElement("canvas")),D}var D=null;function T(t,e){let a=J[e.format],i=e.quality/100;return t.toDataURL(a,i)}function ht(t,e){let a=Y(t),i=N[a];return{format:a,quality:I(e??i,0,100)}}function ot(t,e){return e/Math.max(t[0],t[1])}function rt(t,e,a,i=0,n=0,o=t.width-i,x=t.height-n,U=!1){let{data:l}=t,{width:y,height:b,data:u}=e,f=o/y,c=x/b,A=Math.ceil(f/2),C=Math.ceil(c/2),F=t.width;for(let r=0;r<b;r++)for(let g=0;g<y;g++){let m=4*(g+(U?b-r-1:r)*y),w=0,j=0,q=0,k=0,v=0,R=0,W=(r+.5)*c;for(let M=Math.floor(r*c);M<(r+1)*c;M++){let _=Math.abs(W-(M+.5))/C,$=(g+.5)*f,L=_*_;for(let p=Math.floor(g*f);p<(g+1)*f;p++){let E=Math.abs($-(p+.5))/A,s=Math.sqrt(L+E*E);if(s>=1)continue;let h=2*s*s*s-3*s*s+1,d=4*(i+p+(n+M)*F);R+=h*l[d+3],j+=h,!a&&l[d+3]<255&&(h=h*l[d+3]/255),q+=h*l[d],k+=h*l[d+1],v+=h*l[d+2],w+=h}}u[m]=q/w,u[m+1]=k/w,u[m+2]=v/w,u[m+3]=R/j}return e}function Y(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return K}}function z(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore()}function G(t){let e=t.data,a=e.length;for(let i=0;i<a;i+=4){let n=e[i+3];if(n!==255&&n>0){let o=255/n;e[i]=e[i]*o,e[i+1]=e[i+1]*o,e[i+2]=e[i+2]*o}}}var J={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},P=98,K="png",N={png:100,jpg:P,jpeg:P};export{S as a,at as b,nt as c,ht as d,ot as e,rt as f};
