import{a as S}from"./chunk-UXJVKRGT.js";import{c as j}from"./chunk-VOTZUGKK.js";import{a as F}from"./chunk-FVDACA4R.js";import{e as R,f as P}from"./chunk-SJW4NR3T.js";import{a as w}from"./chunk-2KZICFRS.js";import{a as v,b as x}from"./chunk-D2RUV6O4.js";import{a as O}from"./chunk-J7M5V2SQ.js";import{L as d,W as J}from"./chunk-AUTL5LCV.js";import{S as T}from"./chunk-KUJG22IX.js";import{a as h}from"./chunk-W3WDPWBE.js";import{b as z}from"./chunk-HQMV3KQV.js";var G,N=new O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null}),c=G=class extends J{constructor(o){super(o),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(o,a){let n=x.fromJSON(a.spatialReference),e=[];for(let i=0;i<o.length;i++){let r=o[i],s=S.fromJSON(r),u=r.geometry?.spatialReference;s.geometry==null||u||(s.geometry.spatialReference=n);let y=r.aggregateGeometries,t=s.aggregateGeometries;if(y&&t!=null)for(let m in t){let l=t[m],p=y[m],g=p?.spatialReference;l==null||g||(l.spatialReference=n)}e.push(s)}return e}writeGeometryType(o,a,n,e){if(o)return void N.write(o,a,n,e);let{features:i}=this;if(i){for(let r of i)if(r?.geometry!=null)return void N.write(r.geometry.type,a,n,e)}}readQueryGeometry(o,a){if(!o)return null;let n=!!o.spatialReference,e=P(o);return e&&!n&&a.spatialReference&&(e.spatialReference=x.fromJSON(a.spatialReference)),e}writeSpatialReference(o,a){if(o)return void(a.spatialReference=o.toJSON());let{features:n}=this;if(n){for(let e of n)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(a.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new G(this.cloneProperties())}cloneProperties(){return z({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(o){let a=this.write();if(a.features&&Array.isArray(o)&&o.length>0)for(let n=0;n<a.features.length;n++){let e=a.features[n];if(e.geometry){let i=o?.[n];e.geometry=i?.toJSON()||e.geometry}}return a}quantize(o){let{scale:[a,n],translate:[e,i]}=o,r=t=>Math.round((t-e)/a),s=t=>Math.round((i-t)/n),u=this.features,y=this._getQuantizationFunction(this.geometryType,r,s);for(let t=0,m=u.length;t<m;t++)y?.(u[t].geometry)||(u.splice(t,1),t--,m--);return this.transform=o,this}unquantize(){let{geometryType:o,features:a,transform:n}=this;if(!n)return this;let{translate:[e,i],scale:[r,s]}=n,u=p=>p*r+e,y=p=>i-p*s,t=null,m=null;if(this.hasZ&&n?.scale?.[2]!=null){let{translate:[,,p],scale:[,,g]}=n;t=f=>f*g+p}if(this.hasM&&n?.scale?.[3]!=null){let{translate:[,,,p],scale:[,,,g]}=n;m=f=>f==null?f:f*g+p}let l=this._getHydrationFunction(o,u,y,t,m);for(let{geometry:p}of a)p!=null&&l&&l(p);return this.transform=null,this}_quantizePoints(o,a,n){let e,i,r=[];for(let s=0,u=o.length;s<u;s++){let y=o[s];if(s>0){let t=a(y[0]),m=n(y[1]);t===e&&m===i||(r.push([t-e,m-i]),e=t,i=m)}else e=a(y[0]),i=n(y[1]),r.push([e,i])}return r.length>0?r:null}_getQuantizationFunction(o,a,n){return o==="point"?e=>(e.x=a(e.x),e.y=n(e.y),e):o==="polyline"||o==="polygon"?e=>{let i=R(e)?e.rings:e.paths,r=[];for(let s=0,u=i.length;s<u;s++){let y=i[s],t=this._quantizePoints(y,a,n);t&&r.push(t)}return r.length>0?(R(e)?e.rings=r:e.paths=r,e):null}:o==="multipoint"?e=>{let i=this._quantizePoints(e.points,a,n);return i&&i.length>0?(e.points=i,e):null}:o==="extent"?e=>e:null}_getHydrationFunction(o,a,n,e,i){return o==="point"?r=>{r.x=a(r.x),r.y=n(r.y),e&&(r.z=e(r.z))}:o==="polyline"||o==="polygon"?r=>{let s=R(r)?r.rings:r.paths,u,y;for(let t=0,m=s.length;t<m;t++){let l=s[t];for(let p=0,g=l.length;p<g;p++){let f=l[p];p>0?(u+=f[0],y+=f[1]):(u=f[0],y=f[1]),f[0]=a(u),f[1]=n(y)}}if(e&&i)for(let t=0,m=s.length;t<m;t++){let l=s[t];for(let p=0,g=l.length;p<g;p++){let f=l[p];f[2]=e(f[2]),f[3]=i(f[3])}}else if(e)for(let t=0,m=s.length;t<m;t++){let l=s[t];for(let p=0,g=l.length;p<g;p++){let f=l[p];f[2]=e(f[2])}}else if(i)for(let t=0,m=s.length;t<m;t++){let l=s[t];for(let p=0,g=l.length;p<g;p++){let f=l[p];f[2]=i(f[2])}}}:o==="extent"?r=>{r.xmin=a(r.xmin),r.ymin=n(r.ymin),r.xmax=a(r.xmax),r.ymax=n(r.ymax),e&&r.zmax!=null&&r.zmin!=null&&(r.zmax=e(r.zmax),r.zmin=e(r.zmin)),i&&r.mmax!=null&&r.mmin!=null&&(r.mmax=i(r.mmax),r.mmin=i(r.mmin))}:o==="multipoint"?r=>{let s=r.points,u,y;for(let t=0,m=s.length;t<m;t++){let l=s[t];t>0?(u+=l[0],y+=l[1]):(u=l[0],y=l[1]),l[0]=a(u),l[1]=n(y)}if(e&&i)for(let t=0,m=s.length;t<m;t++){let l=s[t];l[2]=e(l[2]),l[3]=i(l[3])}else if(e)for(let t=0,m=s.length;t<m;t++){let l=s[t];l[2]=e(l[2])}else if(i)for(let t=0,m=s.length;t<m;t++){let l=s[t];l[2]=i(l[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:o=>({enabled:o})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[S],json:{write:!0}})],c.prototype,"features",void 0),h([w("features")],c.prototype,"readFeatures",null),h([d({type:[j],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:N.read}}})],c.prototype,"geometryType",void 0),h([v("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:o=>({enabled:o})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:o=>({enabled:o})}}})],c.prototype,"hasZ",void 0),h([d({types:F,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([w("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:x,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([v("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=G=h([T("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;var K=c;export{K as a};