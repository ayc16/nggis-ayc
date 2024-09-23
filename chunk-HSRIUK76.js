import{a as s}from"./chunk-SA4OMQAD.js";import{a as f}from"./chunk-24BLFS5R.js";import{aa as v,ca as S}from"./chunk-JDDD6VJ4.js";import{b as c}from"./chunk-J7M5V2SQ.js";import{L as l,W as y}from"./chunk-AUTL5LCV.js";import{M as d,S as m}from"./chunk-KUJG22IX.js";import{a as o}from"./chunk-W3WDPWBE.js";import{m as u}from"./chunk-CRMMDK2Z.js";import{a as p}from"./chunk-EAH6BNBL.js";var n,h=c()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),R=h.jsonValues.slice();u(R,"orthometric");var a=c()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"}),i=n=class extends y{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return h.write(e,t,r)}readHeightModel(e,t,r){return h.read(e)||(r?.messages&&r.messages.push(U(e,{context:r})),null)}readHeightUnit(e,t,r){return a.read(e)||(r?.messages&&r.messages.push(w(e,{context:r})),null)}readHeightUnitService(e,t,r){return v(e)||a.read(e)||(r?.messages&&r.messages.push(w(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new n({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){let r=S(t);return new n({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t=p({origin:"web-scene"},t),super.write(e,t)}static fromJSON(e){if(!e)return null;let t=new n;return t.read(e,{origin:"web-scene"}),t}};function w(e,t){return new d("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function U(e,t){return new d("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}o([l({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:R,default:"ellipsoidal"}}}})],i.prototype,"heightModel",void 0),o([f("web-scene","heightModel")],i.prototype,"writeHeightModel",null),o([s(["web-scene","service"],"heightModel")],i.prototype,"readHeightModel",null),o([l({type:a.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:a.jsonValues,write:a.write}}}})],i.prototype,"heightUnit",void 0),o([s("web-scene","heightUnit")],i.prototype,"readHeightUnit",null),o([s("service","heightUnit")],i.prototype,"readHeightUnitService",null),o([l({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],i.prototype,"vertCRS",void 0),o([s("service","vertCRS",["vertCRS","ellipsoid","geoid"])],i.prototype,"readVertCRS",null),i=n=o([m("esri.geometry.HeightModelInfo")],i);var _=i;export{_ as a};
