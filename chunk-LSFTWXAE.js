import{a as M}from"./chunk-5HCLBNUR.js";import{B as z,C as h,D as c,c as S,u as O,w as b,y as D}from"./chunk-T25YY3N7.js";import{b as o,c as u,e as f}from"./chunk-XIMCHX2H.js";import{b as w,c as N}from"./chunk-BENVXA3L.js";import{V as Z}from"./chunk-AUTL5LCV.js";import{t as _}from"./chunk-KUJG22IX.js";import{r as g,t as T}from"./chunk-HQMV3KQV.js";function J(s){return"timeZone"in s}function $(s){return"timeZone"in s}function k(s){return"dateFieldsTimeZone"in s}var A=new Map,B=class s{static fromJSON(e){return new s(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new s(e.fields??[],q(e))}static fromLayerJSON(e){return new s(e.fields??[],q(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;let n=[];for(let i of this.fields){let r=i?.name,m=I(r);if(r&&m){let l=a(r);this._fieldsMap.set(r,i),this._fieldsMap.set(l,i),this._normalizedFieldsMap.set(m,i),n.push(`${l}:${i.type}:${this._timeZoneByFieldName?.get(r)}`),D(i)?(this.dateFields.push(i),this._dateFieldsSet.add(i)):b(i)&&(this._numericFieldsSet.add(i),this.numericFields.push(i)),h(i)||c(i)||(i.editable=i.editable==null||!!i.editable,i.nullable=i.nullable==null||!!i.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(let e of this.fields)h(e)||c(e)||e.nullable||O(e)!==void 0||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return this.get(e)!=null}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(a(e))??this._normalizedFieldsMap.get(I(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){let t=this.get(e&&typeof e!="string"?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):t.type==="date"||t.type==="esriFieldTypeDate"?(g.getLogger("esri.layers.support.FieldsIndex").error(new T("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u):R.has(t.type)?o:null:null}getLuxonTimeZone(e){let t=this.getTimeZone(e);return t?t===o?M.instance:t===u?N.utcInstance:_(A,t,()=>w.create(t)):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return z(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map(e=>Z(e)?e.toJSON():e),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}};function a(s){return s.trim().toLowerCase()}function I(s){return S(s)?.toLowerCase()??""}var R=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function q(s){let e=new Map;if(!s.fields)return e;let t=s.datesInUnknownTimezone===!0,{timeInfo:n,editFieldsInfo:i}=s,r=(n?"startField"in n?n.startField:n.startTimeField:"")??"",m=(n?"endField"in n?n.endField:n.endTimeField:"")??"",l=k(s)?s.dateFieldsTimeZone??null:s.dateFieldsTimeReference?f(s.dateFieldsTimeReference):null,p=i?J(i)?i.timeZone??l:i.dateFieldsTimeReference?f(i.dateFieldsTimeReference):l??u:null,y=n?$(n)?n.timeZone??l:n.timeReference?f(n.timeReference):l:null,L=new Map([[a(i?.creationDateField??""),p],[a(i?.editDateField??""),p],[a(r),y],[a(m),y]]);for(let{name:d,type:F}of s.fields)if(R.has(F))e.set(d,o);else if(F!=="date"&&F!=="esriFieldTypeDate")e.set(d,null);else if(t)e.set(d,o);else{let x=L.get(a(d??""))??l;e.set(d,x)}return e}export{B as a};