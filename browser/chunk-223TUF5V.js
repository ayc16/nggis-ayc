import{b as g}from"./chunk-OGOKP66I.js";var u;(function(r){r[r.moveTo=1]="moveTo",r[r.lineTo=2]="lineTo",r[r.close=7]="close"})(u||(u={}));var p=class{constructor(e,t,i=0){this.values={},this._geometry=void 0,this._pbfGeometry=null,this.featureIndex=i;let s=t.keys,c=t.values,a=e.asUnsafe();for(;a.next();)switch(a.tag()){case 1:this.id=a.getUInt64();break;case 2:{let l=a.getMessage().asUnsafe(),n=this.values;for(;!l.empty();){let o=l.getUInt32(),h=l.getUInt32();n[s[o]]=c[h]}l.release();break}case 3:this.type=a.getUInt32();break;case 4:this._pbfGeometry=a.getMessage();break;default:a.skip()}}getGeometry(e){if(this._geometry!==void 0)return this._geometry;if(!this._pbfGeometry)return null;let t=this._pbfGeometry.asUnsafe(),i,s;this._pbfGeometry=null,e?e.reset(this.type):i=[];let c,a=u.moveTo,l=0,n=0,o=0;for(;!t.empty();){if(l===0){let h=t.getUInt32();a=7&h,l=h>>3}switch(l--,a){case u.moveTo:n+=t.getSInt32(),o+=t.getSInt32(),e?e.moveTo(n,o):i&&(s&&i.push(s),s=[],s.push(new g(n,o)));break;case u.lineTo:n+=t.getSInt32(),o+=t.getSInt32(),e?e.lineTo(n,o):s&&s.push(new g(n,o));break;case u.close:e?e.close():s&&!s[0].equals(n,o)&&s.push(s[0].clone());break;default:throw t.release(),new Error("Invalid path operation")}}return e?c=e.result():i&&(s&&i.push(s),c=i),t.release(),this._geometry=c,c}};var f=class r{constructor(e){this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=e.clone();let t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(r._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null}};export{p as a,f as b};
