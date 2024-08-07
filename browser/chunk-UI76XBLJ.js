import{a as ft,b as d}from"./chunk-UE2YGKE7.js";import{a as T,n as k,o as q,r as Q,u as U}from"./chunk-BE76S5KT.js";import{a as pt}from"./chunk-D2ITYHSM.js";import{F as u,G as ut,Q as xt}from"./chunk-VWEBO6QK.js";import{S as L,x as ct}from"./chunk-KAAR5ZJN.js";import{a as l}from"./chunk-W3WDPWBE.js";import{b as X,k as lt,p as J}from"./chunk-X3IDZTNG.js";function $(t,e,i){let s,n;return e===void 0||Array.isArray(e)?(n=t,i=e,s=[void 0]):(n=e,s=Array.isArray(t)?t:[t]),(r,a)=>{let h=r.constructor.prototype;s.forEach(o=>{let m=ut(r,o,n);m.read&&typeof m.read=="object"||(m.read={}),m.read.reader=h[a],i&&(m.read.source=(m.read.source||[]).concat(i))})}}var w=class extends xt{constructor(...t){super(...t),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=d.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(t,e){if(t instanceof d)return t;if(t!=null){let i=new d;return i.read(t,e),i}return t}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(t){return this.cache[t]}setCacheValue(t,e){this.cache[t]=e}};l([u()],w.prototype,"type",void 0),l([u({readOnly:!0})],w.prototype,"cache",null),l([u({readOnly:!0})],w.prototype,"extent",null),l([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],w.prototype,"hasM",void 0),l([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],w.prototype,"hasZ",void 0),l([u({type:d,json:{write:!0},value:d.WGS84})],w.prototype,"spatialReference",void 0),l([$("spatialReference")],w.prototype,"readSpatialReference",null),w=l([L("esri.geometry.Geometry")],w);var tt=w;var Ct=57.29577951308232,Zt=.017453292519943;function yt(t){return t*Ct}function dt(t){return t*Zt}function ie(t){return Math.PI/2-2*Math.atan(Math.exp(-t/T.radius))}function at(t){return t.wkid!=null||t.wkt!=null}var st=[0,0];function et(t,e,i,s,n){let r=t,a=n;if(a.spatialReference=i,"x"in r&&"x"in a)[a.x,a.y]=e(r.x,r.y,st,s);else if("xmin"in r&&"xmin"in a)[a.xmin,a.ymin]=e(r.xmin,r.ymin,st,s),[a.xmax,a.ymax]=e(r.xmax,r.ymax,st,s);else if("paths"in r&&"paths"in a||"rings"in r&&"rings"in a){let h="paths"in r?r.paths:r.rings,o=[],m;for(let c=0;c<h.length;c++){let x=h[c];m=[],o.push(m);for(let p=0;p<x.length;p++)m.push(e(x[p][0],x[p][1],[0,0],s)),x[p].length>2&&m[p].push(x[p][2]),x[p].length>3&&m[p].push(x[p][3])}"paths"in a?a.paths=o:a.rings=o}else if("points"in r&&"points"in a){let h=r.points,o=[];for(let m=0;m<h.length;m++)o[m]=e(h[m][0],h[m][1],[0,0],s),h[m].length>2&&o[m].push(h[m][2]),h[m].length>3&&o[m].push(h[m][3]);a.points=o}return n}function D(t,e){let i=t&&(at(t)?t:t.spatialReference),s=e&&(at(e)?e:e.spatialReference);return!(t&&"type"in t&&t.type==="mesh"||e&&"type"in e&&e.type==="mesh"||!i||!s)&&(!!k(s,i)||U(s)&&Q(i)||U(i)&&Q(s))}function re(t,e){if(t==null)return null;let i=t.spatialReference,s=e&&(at(e)?e:e.spatialReference);return D(i,s)?k(i,s)?X(t):U(s)?et(t,N,d.WebMercator,!1,X(t)):Q(s)?et(t,E,d.WGS84,!1,X(t)):null:null}function N(t,e,i=[0,0]){e>89.99999?e=89.99999:e<-89.99999&&(e=-89.99999);let s=dt(e);return i[0]=dt(t)*T.radius,i[1]=T.halfSemiMajorAxis*Math.log((1+Math.sin(s))/(1-Math.sin(s))),i}function E(t,e,i=[0,0],s=!1){let n=yt(t/T.radius);return i[0]=s?n:n-360*Math.floor((n+180)/360),i[1]=yt(Math.PI/2-2*Math.atan(Math.exp(-e/T.radius))),i}function it(t,e=!1,i=X(t)){return et(t,N,d.WebMercator,e,i)}function B(t,e=!1,i=X(t)){return et(t,E,d.WGS84,e,i)}function gt(t,e){let i=t.x-e.x,s=t.y-e.y,n=t.hasZ&&e.hasZ?t.z-e.z:0;return Math.sqrt(i*i+s*s+n*n)}var rt,Y=[0,0];function zt(t){return t&&(t.declaredClass==="esri.geometry.SpatialReference"||t.wkid!=null)}var g=rt=class extends tt{static copy(t,e){e._set("x",t._get("x")),e._set("y",t._get("y")),e._set("z",t._get("z")),e._set("m",t._get("m"));let i=t._get("spatialReference");e._set("spatialReference",Object.isFrozen(i)?i:i.clone())}constructor(...t){super(...t),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}normalizeCtorArgs(t,e,i,s,n){let r;if(Array.isArray(t))r=t,n=e,t=r[0],e=r[1],i=r[2],s=r[3];else if(t&&typeof t=="object"){if(r=t,t=r.x!=null?r.x:r.longitude,e=r.y!=null?r.y:r.latitude,i=r.z,s=r.m,(n=r.spatialReference)&&n.declaredClass!=="esri.geometry.SpatialReference"&&(n=new d(n)),r.longitude!=null||r.latitude!=null){if(r.longitude==null)J.getLogger(this).warn(".longitude=","Latitude was defined without longitude");else if(r.latitude==null)J.getLogger(this).warn(".latitude=","Longitude was defined without latitude");else if(!r.declaredClass&&n&&n.isWebMercator){let h=N(r.longitude,r.latitude,Y);t=h[0],e=h[1]}}}else zt(i)?(n=i,i=null):zt(s)&&(n=s,s=null);let a={x:t,y:e};return a.x==null&&a.y!=null?J.getLogger(this).warn(".y=","Y coordinate was defined without an X coordinate"):a.y==null&&a.x!=null&&J.getLogger(this).warn(".x=","X coordinate was defined without a Y coordinate"),n!=null&&(a.spatialReference=n),i!=null&&(a.z=i),s!=null&&(a.m=s),a}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return this.m!==void 0}set hasM(t){t!==(this._get("m")!==void 0)&&(this._set("m",t?0:void 0),this._set("hasM",t))}get hasZ(){return this.z!==void 0}set hasZ(t){t!==(this._get("z")!==void 0)&&(this._set("z",t?0:void 0),this._set("hasZ",t))}get latitude(){let{spatialReference:t,x:e,y:i}=this;if(t){if(t.isWebMercator)return E(e,i,Y)[1];if(t.isGeographic)return i}return null}set latitude(t){let{spatialReference:e,x:i}=this;t!=null&&e&&(e.isWebMercator?this._set("y",N(i,t,Y)[1]):e.isGeographic&&this._set("y",t),this._set("latitude",t))}get longitude(){let{x:t,y:e,spatialReference:i}=this;if(i){if(i.isWebMercator)return E(t,e,Y)[0];if(i.isGeographic)return t}return null}set longitude(t){let{y:e,spatialReference:i}=this;t!=null&&i&&(i.isWebMercator?this._set("x",N(t,e,Y)[0]):i.isGeographic&&this._set("x",t),this._set("longitude",t))}writeX(t,e,i){e[i]=isNaN(t)?"NaN":t}readX(t){return typeof t=="string"?NaN:t}clone(){let t=new rt;return t.x=this.x,t.y=this.y,t.z=this.z,t.m=this.m,t.spatialReference=this.spatialReference,t}copy(t){return rt.copy(t,this),this}equals(t){if(t==null)return!1;let{x:e,y:i,z:s,m:n,spatialReference:r}=this,{z:a,m:h}=t,{x:o,y:m,spatialReference:c}=t;if(!r.equals(c))if(r.isWebMercator&&c.isWGS84)[o,m]=N(o,m),c=r;else{if(!r.isWGS84||!c.isWebMercator)return!1;[o,m]=E(o,m),c=r}return e===o&&i===m&&s===a&&n===h&&r.wkid===c.wkid}offset(t,e,i){return this.x+=t,this.y+=e,i!=null&&(this.z=(this.z??0)+i),this}normalize(){if(!this.spatialReference)return this;let t=q(this.spatialReference);if(!t)return this;let e=this.x,[i,s]=t.valid,n=2*s,r;return e>s?(r=Math.ceil(Math.abs(e-s)/n),e-=r*n):e<i&&(r=Math.ceil(Math.abs(e-i)/n),e+=r*n),this._set("x",e),this}distance(t){return gt(this,t)}toArray(){let t=this.hasZ,e=this.hasM;return t&&e?[this.x,this.y,this.z,this.m]:t?[this.x,this.y,this.z]:e?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(t){return this.write({},t)}};l([u({readOnly:!0})],g.prototype,"cache",null),l([u({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],g.prototype,"hasM",null),l([u({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],g.prototype,"hasZ",null),l([u({type:Number})],g.prototype,"latitude",null),l([u({type:Number})],g.prototype,"longitude",null),l([u({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),pt(t=>isNaN(t)?t:ct(t))],g.prototype,"x",void 0),l([ft("x")],g.prototype,"writeX",null),l([$("x")],g.prototype,"readX",null),l([u({type:Number,json:{write:!0}})],g.prototype,"y",void 0),l([u({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],g.prototype,"z",void 0),l([u({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],g.prototype,"m",void 0),g=rt=l([L("esri.geometry.Point")],g),g.prototype.toJSON.isDefaultToJSON=!0;var Mt=g;var ot=[0,0];function nt(t,e){return e!=null&&z(t,e.x,e.y,e.z)}function Re(t,e){if(!e.points||e.points.length)return!1;for(let i of e.points)if(!S(t,i))return!1;return!0}function bt(t,e){let{xmin:i,ymin:s,zmin:n,xmax:r,ymax:a,zmax:h}=e;return t.hasZ&&e.hasZ?z(t,i,s,n)&&z(t,i,a,n)&&z(t,r,a,n)&&z(t,r,s,n)&&z(t,i,s,h)&&z(t,i,a,h)&&z(t,r,a,h)&&z(t,r,s,h):z(t,i,s)&&z(t,i,a)&&z(t,r,a)&&z(t,r,s)}function S(t,e){return z(t,e[0],e[1])}function Rt(t,e){return z(t,e[0],e[1],e[2])}function z(t,e,i,s){return e>=t.xmin&&e<=t.xmax&&i>=t.ymin&&i<=t.ymax&&(s==null||!t.hasZ||s>=t.zmin&&s<=t.zmax)}function ve(t,e){return ot[1]=e.y,ot[0]=e.x,Nt(t,ot)}function Nt(t,e){return mt(t.rings,e)}function mt(t,e){if(!t)return!1;if(St(t))return wt(!1,t,e);let i=!1;for(let s=0,n=t.length;s<n;s++)i=wt(i,t[s],e);return i}function St(t){return!Array.isArray(t[0][0])}function wt(t,e,i){let[s,n]=i,r=t,a=0;for(let h=0,o=e.length;h<o;h++){a++,a===o&&(a=0);let[m,c]=e[h],[x,p]=e[a];(c<n&&p>=n||p<n&&c>=n)&&m+(n-c)/(p-c)*(x-m)<s&&(r=!r)}return r}function jt(t,e){return nt(t,e)}function Wt(t,e){let i=t.hasZ&&e.hasZ,s,n,r;if(t.xmin<=e.xmin){if(s=e.xmin,t.xmax<s)return!1}else if(s=t.xmin,e.xmax<s)return!1;if(t.ymin<=e.ymin){if(n=e.ymin,t.ymax<n)return!1}else if(n=t.ymin,e.ymax<n)return!1;if(i&&e.hasZ){if(t.zmin<=e.zmin){if(r=e.zmin,t.zmax<r)return!1}else if(r=t.zmin,e.zmax<r)return!1}return!0}function Gt(t,e){let{points:i,hasZ:s}=e,n=s?Rt:S;for(let r of i)if(n(t,r))return!0;return!1}var j=[0,0],W=[0,0],G=[0,0],I=[0,0],It=[j,W,G,I],vt=[[G,j],[j,W],[W,I],[I,G]];function Ot(t,e){return At(t,e.rings)}function At(t,e){j[0]=t.xmin,j[1]=t.ymax,W[0]=t.xmax,W[1]=t.ymax,G[0]=t.xmin,G[1]=t.ymin,I[0]=t.xmax,I[1]=t.ymin;for(let i of It)if(mt(e,i))return!0;for(let i of e){if(!i.length)continue;let s=i[0];if(S(t,s))return!0;for(let n=1;n<i.length;n++){let r=i[n];if(S(t,r)||Pt(s,r,vt))return!0;s=r}}return!1}function Xt(t,e){j[0]=t.xmin,j[1]=t.ymax,W[0]=t.xmax,W[1]=t.ymax,G[0]=t.xmin,G[1]=t.ymin,I[0]=t.xmax,I[1]=t.ymin;let i=e.paths;for(let s of i){if(!i.length)continue;let n=s[0];if(S(t,n))return!0;for(let r=1;r<s.length;r++){let a=s[r];if(S(t,a)||Pt(n,a,vt))return!0;n=a}}return!1}var y=[0,0];function Ce(t){for(let e=0;e<t.length;e++){let i=t[e];for(let n=0;n<i.length-1;n++){let r=i[n],a=i[n+1];for(let h=e+1;h<t.length;h++)for(let o=0;o<t[h].length-1;o++){let m=t[h][o],c=t[h][o+1];if(ht(r,a,m,c,y)&&!(y[0]===r[0]&&y[1]===r[1]||y[0]===m[0]&&y[1]===m[1]||y[0]===a[0]&&y[1]===a[1]||y[0]===c[0]&&y[1]===c[1]))return!0}}let s=i.length;if(!(s<=4))for(let n=0;n<s-3;n++){let r=s-1;n===0&&(r=s-2);let a=i[n],h=i[n+1];for(let o=n+2;o<r;o++){let m=i[o],c=i[o+1];if(ht(a,h,m,c,y)&&!(y[0]===a[0]&&y[1]===a[1]||y[0]===m[0]&&y[1]===m[1]||y[0]===h[0]&&y[1]===h[1]||y[0]===c[0]&&y[1]===c[1]))return!0}}}return!1}function Pt(t,e,i){for(let s=0;s<i.length;s++)if(ht(t,e,i[s][0],i[s][1]))return!0;return!1}function ht(t,e,i,s,n){let[r,a]=t,[h,o]=e,[m,c]=i,[x,p]=s,b=x-m,R=r-m,v=h-r,P=p-c,F=a-c,O=o-a,Z=P*v-b*O;if(Z===0)return!1;let _=(b*F-P*R)/Z,A=(v*F-O*R)/Z;return _>=0&&_<=1&&A>=0&&A<=1&&(n&&(n[0]=r+_*(h-r),n[1]=a+_*(o-a)),!0)}function _t(t){switch(t){case"esriGeometryEnvelope":case"extent":return Wt;case"esriGeometryMultipoint":case"multipoint":return Gt;case"esriGeometryPoint":case"point":return jt;case"esriGeometryPolygon":case"polygon":return Ot;case"esriGeometryPolyline":case"polyline":return Xt}}var M;function Lt(t){return t&&(t.declaredClass==="esri.geometry.SpatialReference"||t.wkid!=null)}function C(t,e,i){return e==null?i:i==null?e:t(e,i)}var f=M=class extends tt{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,e,i,s,n){return Lt(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:typeof t=="object"?(t.spatialReference=t.spatialReference==null?d.WGS84:t.spatialReference,t):{xmin:t,ymin:e,xmax:i,ymax:s,spatialReference:n??d.WGS84}}static fromBounds(t,e){return new M({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:e})}static fromPoint(t){return new M({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){let t=new Mt({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return this.mmin!=null&&this.mmax!=null}get hasZ(){return this.zmin!=null&&this.zmax!=null}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){let e=this.center;return t.z!=null&&this.hasZ?this.offset(t.x-e.x,t.y-e.y,t.z-e.z):this.offset(t.x-e.x,t.y-e.y)}clone(){let t=new M;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,this.zmin!=null&&(t.zmin=this.zmin,t.zmax=this.zmax),this.mmin!=null&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1;let e=this.spatialReference,i=t.spatialReference;return e&&i&&!e.equals(i)&&D(e,i)&&(t=e.isWebMercator?it(t):B(t,!0)),t.type==="point"?nt(this,t):t.type==="extent"&&bt(this,t)}equals(t){if(this===t)return!0;if(t==null)return!1;let e=this.spatialReference,i=t.spatialReference;return e&&i&&!e.equals(i)&&D(e,i)&&(t=e.isWebMercator?it(t):B(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){let e=.5*(1-t),i=this.width*e,s=this.height*e;if(this.xmin+=i,this.ymin+=s,this.xmax-=i,this.ymax-=s,this.hasZ){let n=(this.zmax-this.zmin)*e;this.zmin+=n,this.zmax-=n}if(this.hasM){let n=(this.mmax-this.mmin)*e;this.mmin+=n,this.mmax-=n}return this}intersects(t){if(t==null)return!1;t.type==="mesh"&&(t=t.extent);let e=this.spatialReference,i=t.spatialReference;return e&&i&&!k(e,i)&&D(e,i)&&(t=e.isWebMercator?it(t):B(t,!0)),_t(t.type)(this,t)}normalize(){let t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,e,i){return this.xmin+=t,this.ymin+=e,this.xmax+=t,this.ymax+=e,i!=null&&(this.zmin+=i,this.zmax+=i),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=C(Math.min,this.zmin,t.zmin),this.zmax=C(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=C(Math.min,this.mmin,t.mmin),this.mmax=C(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:t!=null&&this.intersects(t)?(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=C(Math.max,this.zmin,t.zmin),this.zmax=C(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=C(Math.max,this.mmin,t.mmin),this.mmax=C(Math.min,this.mmax,t.mmax)),this):null}toJSON(t){return this.write({},t)}_shiftCM(t=q(this.spatialReference)){if(!t||!this.spatialReference)return this;let e=this.spatialReference,i=this._getCM(t);if(i){let s=e.isWebMercator?B(i):i;this.xmin-=i.x,this.xmax-=i.x,e.isWebMercator||(s.x=this._normalizeX(s.x,t).x),this.spatialReference=new d(lt((e.isWGS84?t.altTemplate:null)??t.wkTemplate,{Central_Meridian:s.x}))}return this}_getCM(t){let e=null,[i,s]=t.valid,n=this.xmin,r=this.xmax;return n>=i&&n<=s&&r>=i&&r<=s||(e=this.center),e}_normalize(t,e,i){let s=this.spatialReference;if(!s)return this;let n=i??q(s);if(n==null)return this;let r=this._getParts(n).map(o=>o.extent);if(r.length<2)return r[0]||this;if(r.length>2)return t?this._shiftCM(n):this.set({xmin:n.valid[0],xmax:n.valid[1]});if(t)return this._shiftCM(n);if(e)return r;let a=!0,h=!0;return r.forEach(o=>{o.hasZ||(a=!1),o.hasM||(h=!1)}),{rings:r.map(o=>{let m=[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]];if(a){let c=(o.zmax-o.zmin)/2;for(let x=0;x<m.length;x++)m[x].push(c)}if(h){let c=(o.mmax-o.mmin)/2;for(let x=0;x<m.length;x++)m[x].push(c)}return m}),hasZ:a,hasM:h,spatialReference:s}}_getParts(t){let e=this.cache._parts;if(!e){e=[];let{ymin:n,ymax:r,spatialReference:a}=this,h=this.width,o=this.xmin,m=this.xmax,c;t=t||q(a);let[x,p]=t.valid;c=this._normalizeX(this.xmin,t);let b=c.x,R=c.frameId;c=this._normalizeX(this.xmax,t);let v=c.x,P=c.frameId,F=b===v&&h>0;if(h>2*p){let O=new M(o<m?b:v,n,p,r,a),Z=new M(x,n,o<m?v:b,r,a),_=new M(0,n,p,r,a),A=new M(x,n,0,r,a),V=[],H=[];O.contains(_)&&V.push(R),O.contains(A)&&H.push(R),Z.contains(_)&&V.push(P),Z.contains(A)&&H.push(P);for(let K=R+1;K<P;K++)V.push(K),H.push(K);e.push({extent:O,frameIds:[R]},{extent:Z,frameIds:[P]},{extent:_,frameIds:V},{extent:A,frameIds:H})}else b>v||F?e.push({extent:new M(b,n,p,r,a),frameIds:[R]},{extent:new M(x,n,v,r,a),frameIds:[P]}):e.push({extent:new M(b,n,v,r,a),frameIds:[R]});this.cache._parts=e}let i=this.hasZ,s=this.hasM;if(i||s){let n={};i&&(n.zmin=this.zmin,n.zmax=this.zmax),s&&(n.mmin=this.mmin,n.mmax=this.mmax);for(let r=0;r<e.length;r++)e[r].extent.set(n)}return e}_normalizeX(t,e){let[i,s]=e.valid,n=2*s,r,a=0;return t>s?(r=Math.ceil(Math.abs(t-s)/n),t-=r*n,a=r):t<i&&(r=Math.ceil(Math.abs(t-i)/n),t+=r*n,a=-r),{x:t,frameId:a}}};l([u({readOnly:!0})],f.prototype,"cache",null),l([u({readOnly:!0})],f.prototype,"center",null),l([u({readOnly:!0})],f.prototype,"extent",null),l([u({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasM",null),l([u({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasZ",null),l([u({readOnly:!0})],f.prototype,"height",null),l([u({readOnly:!0})],f.prototype,"width",null),l([u({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],f.prototype,"xmin",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"ymin",void 0),l([u({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"mmin",void 0),l([u({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"zmin",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"xmax",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"ymax",void 0),l([u({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"mmax",void 0),l([u({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"zmax",void 0),f=M=l([L("esri.geometry.Extent")],f),f.prototype.toJSON.isDefaultToJSON=!0;var ke=f;export{$ as a,tt as b,ie as c,D as d,re as e,N as f,E as g,it as h,B as i,Mt as j,nt as k,Re as l,ve as m,mt as n,Wt as o,Ot as p,Ce as q,ht as r,_t as s,ke as t};
