import{a as h}from"./chunk-Z72HW5OL.js";import{b as d}from"./chunk-OJFSOL62.js";import{t as r}from"./chunk-HQMV3KQV.js";function H(e,a,c){let i=M(e),s=a,u=w(i,s,c);if(i){let n=h.deriveUnitFromSR(i,e.spatialReference).heightUnit;if(!c&&n!==i.heightUnit){let o=new r("layerview:unmatched-height-unit",`The vertical units of the layer must match the horizontal units (${n})`,{horizontalUnit:n});return new r("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:i,error:o})}}if(!v(e)||u===t.Unsupported)return new r("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:i});switch(u){case t.Units:{let n=i?.heightUnit||"unknown",o=s?.heightUnit||"unknown",l=new r("layerview:incompatible-height-unit",`The vertical units of the layer (${n}) must match the vertical units of the scene (${o})`,{layerUnit:n,sceneUnit:o});return new r("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:i,sceneHeightModelInfo:s,error:l})}case t.HeightModel:{let n=i?.heightModel||"unknown",o=s?.heightModel||"unknown",l=new r("layerview:incompatible-height-model",`The height model of the layer (${n}) must match the height model of the scene (${o})`,{layerHeightModel:n,sceneHeightModel:o});return new r("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:i,sceneHeightModelInfo:s,error:l})}case t.CRS:{let n=i?.vertCRS||"unknown",o=s?.vertCRS||"unknown",l=new r("layerview:incompatible-vertical-datum",`The vertical datum of the layer (${n}) must match the vertical datum of the scene (${o})`,{layerDatum:n,sceneDatum:o});return new r("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:i,sceneHeightModelInfo:s,error:l})}}return null}function w(e,a,c){if(!g(e)||!g(a))return t.Unsupported;if(e==null||a==null)return t.Ok;if(!c&&e.heightUnit!==a.heightUnit)return t.Units;if(e.heightModel!==a.heightModel)return t.HeightModel;switch(e.heightModel){case"gravity-related-height":return t.Ok;case"ellipsoidal":return e.vertCRS===a.vertCRS?t.Ok:t.CRS;default:return t.Unsupported}}var t;function g(e){return e==null||e.heightModel!=null&&e.heightUnit!=null}function v(e){return"heightModelInfo"in e&&e.heightModelInfo!=null||e.spatialReference!=null||!m(e)}function M(e){if(e.type==="integrated-mesh-3dtiles")return null;let a=e.url?d(e.url):void 0;return!(e.spatialReference?.vcsWkid==null&&a!=null&&a.serverType==="ImageServer")&&f(e)&&e.heightModelInfo?e.heightModelInfo:m(e)?h.deriveUnitFromSR(b,e.spatialReference):null}function f(e){return"heightModelInfo"in e}function p(e){if(e.type==="unknown"||!("capabilities"in e))return!1;switch(e.type){case"catalog":case"catalog-footprint":case"csv":case"feature":case"geojson":case"subtype-group":case"ogc-feature":case"oriented-imagery":case"wfs":case"knowledge-graph-sublayer":return!0;default:return!1}}function m(e){return p(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):y(e)}function S(e){return e.layers!=null||y(e)||p(e)||f(e)}function y(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"integrated-mesh-3dtiles":case"point-cloud":case"scene":case"voxel":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"catalog":case"catalog-footprint":case"catalog-dynamic-group":case"csv":case"dimension":case"geojson":case"feature":case"subtype-group":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-image":case"map-notes":case"media":case"ogc-feature":case"open-street-map":case"oriented-imagery":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"video":case"wcs":case"web-tile":case"wfs":case"wms":case"wmts":case null:return!1}return!1}(function(e){e[e.Ok=0]="Ok",e[e.Units=1]="Units",e[e.HeightModel=2]="HeightModel",e[e.CRS=3]="CRS",e[e.Unsupported=4]="Unsupported"})(t||(t={}));var b=new h({heightModel:"gravity-related-height"});export{H as a,M as b,S as c};
