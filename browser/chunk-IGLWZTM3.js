function i(f,a,l,c){let r=3*f,b=3*(l-f)-r,g=1-r-b,h=3*a,x=3*(c-a)-h,F=1-h-x;function z(t){return((g*t+b)*t+r)*t}function I(t){return((F*t+x)*t+h)*t}function N(t){return(3*g*t+2*b)*t+r}function O(t,p){let u,s,n,o,m,M;for(n=t,M=0;M<8;M++){if(o=z(n)-t,Math.abs(o)<p)return n;if(m=N(n),Math.abs(m)<1e-6)break;n-=o/m}if(u=0,s=1,n=t,n<u)return u;if(n>s)return s;for(;u<s;){if(o=z(n),Math.abs(o-t)<p)return n;t>o?u=n:s=n,n=.5*(s-u)+u}return n}return function(t,p=1e-6){return I(O(t,p))}}var k=/^cubic-bezier\((.*)\)/,e={};function y(f){let a=e[f]||null;if(!a){let l=k.exec(f);if(l){let c=l[1].split(",").map(r=>parseFloat(r.trim()));c.length!==4||c.some(r=>isNaN(r))||(a=i.apply(i,c))}}return a}e.ease=i(.25,.1,.25,1),e.linear=i(0,0,1,1),e.easeIn=e["ease-in"]=i(.42,0,1,1),e.easeOut=e["ease-out"]=i(0,0,.58,1),e.easeInOut=e["ease-in-out"]=i(.42,0,.58,1);export{i as a,e as b,y as c};
