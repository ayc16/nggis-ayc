import{a as oe,b as De,c as ze,d as ne}from"./chunk-OTMEXTR3.js";import{a as re,p as Q,q}from"./chunk-M76YZBV5.js";import{b as D,l as te}from"./chunk-2KZICFRS.js";import{b as P}from"./chunk-D2RUV6O4.js";import{a as _e}from"./chunk-HRFJUMCP.js";import{V as Ne,aa as N}from"./chunk-375OYO4P.js";import{L as a,O as I,W as G}from"./chunk-AUTL5LCV.js";import{S as m}from"./chunk-KUJG22IX.js";import{a as i}from"./chunk-W3WDPWBE.js";import{r as U,t as l}from"./chunk-HQMV3KQV.js";import{a as Fe}from"./chunk-CRMMDK2Z.js";import{a as ee,h as u}from"./chunk-EAH6BNBL.js";var z=class extends I{constructor(e){super(e),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};i([a()],z.prototype,"headerKeys",void 0),i([a()],z.prototype,"outSpatialReference",void 0),i([a()],z.prototype,"exceededTransferLimit",void 0),z=i([m("esri.rest.knowledgeGraph.GraphQueryResultHeader")],z);var M=z;var W=class extends I{constructor(e){super(e),this.resultRows=[],this.resultHeader=new M}};i([a()],W.prototype,"resultRows",void 0),i([a()],W.prototype,"resultHeader",void 0),W=i([m("esri.rest.knowledgeGraph.GraphQueryResult")],W);var Te=W;var Y=class extends I{constructor(e){super(e),this.resultRowsStream=new ReadableStream,this.resultHeader=new M}};i([a()],Y.prototype,"resultRowsStream",void 0),i([a()],Y.prototype,"resultHeader",void 0),Y=i([m("esri.rest.knowledgeGraph.GraphQueryStreamingResult")],Y);var ve=Y;var j=class extends G{constructor(e){super(e),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};i([a({type:String,json:{write:!0}})],j.prototype,"name",void 0),i([a({type:Boolean,json:{write:!0}})],j.prototype,"unique",void 0),i([a({type:Boolean,json:{write:!0}})],j.prototype,"ascending",void 0),i([a({type:String,json:{write:!0}})],j.prototype,"description",void 0),i([a({type:[String],json:{write:!0}})],j.prototype,"fieldNames",void 0),j=i([m("esri.rest.knowledgeGraph.FieldIndex")],j);var ie=j;var g=class extends G{constructor(e){super(e),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};i([a({type:String,json:{write:!0}})],g.prototype,"name",void 0),i([a({type:String,json:{write:!0}})],g.prototype,"alias",void 0),i([a({type:String,json:{write:!0}})],g.prototype,"fieldType",void 0),i([a({type:String,json:{write:!0}})],g.prototype,"geometryType",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"hasM",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"hasZ",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"nullable",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"editable",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"required",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"defaultVisibility",void 0),i([a({type:Boolean,json:{write:!0}})],g.prototype,"systemMaintained",void 0),i([a()],g.prototype,"role",void 0),i([a({json:{write:!0}})],g.prototype,"defaultValue",void 0),g=i([m("esri.rest.knowledgeGraph.GraphProperty")],g);var ae=g;var R=class extends G{constructor(e){super(e),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};i([a({type:String,json:{write:!0}})],R.prototype,"name",void 0),i([a({type:String,json:{write:!0}})],R.prototype,"alias",void 0),i([a({type:String,json:{write:!0}})],R.prototype,"role",void 0),i([a({type:Boolean,json:{write:!0}})],R.prototype,"strict",void 0),i([a({type:[ae],json:{write:!0}})],R.prototype,"properties",void 0),i([a({type:[ie],json:{write:!0}})],R.prototype,"fieldIndexes",void 0),R=i([m("esri.rest.knowledgeGraph.GraphObjectType")],R);var H=R;var Ee=class extends H{constructor(e){super(e),this.type="entity"}};Ee=i([m("esri.rest.knowledgeGraph.EntityType")],Ee);var B=Ee;var se=class extends H{constructor(e){super(e),this.endPoints=[],this.type="relationship"}};i([a()],se.prototype,"endPoints",void 0),se=i([m("esri.rest.knowledgeGraph.RelationshipType")],se);var pe=se;var T=class extends G{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null}};i([a({type:Date,json:{type:Number,write:{writer:(e,r)=>{r.timestamp=e?.getTime()}}}})],T.prototype,"timestamp",void 0),i([a({type:P,json:{write:!0}})],T.prototype,"spatialReference",void 0),i([a({type:Boolean,json:{write:!0}})],T.prototype,"strict",void 0),i([a({type:String,json:{write:!0}})],T.prototype,"objectIdField",void 0),i([a({type:String,json:{write:!0}})],T.prototype,"globalIdField",void 0),i([a()],T.prototype,"arcgisManaged",void 0),i([a()],T.prototype,"identifierInfo",void 0),i([a()],T.prototype,"searchIndexes",void 0),i([a({type:[B],json:{write:!0}})],T.prototype,"entityTypes",void 0),i([a({type:[pe],json:{write:!0}})],T.prototype,"relationshipTypes",void 0),i([a({type:[B],json:{write:!0}})],T.prototype,"metaEntityTypes",void 0),T=i([m("esri.rest.knowledgeGraph.DataModel")],T);var de=T;var f=class extends G{constructor(e){super(e),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};i([a({type:[String],json:{write:!0}})],f.prototype,"capabilities",void 0),i([a({type:Boolean,json:{write:!0}})],f.prototype,"supportsSearch",void 0),i([a({type:[String],json:{write:!0}})],f.prototype,"supportedQueryFormats",void 0),i([a({type:Boolean,json:{write:!0}})],f.prototype,"allowGeometryUpdates",void 0),i([a({type:Number,json:{write:!0}})],f.prototype,"searchMaxRecordCount",void 0),i([a({type:Object,json:{write:!0}})],f.prototype,"serviceCapabilities",void 0),i([a({type:Number,json:{write:!0}})],f.prototype,"maxRecordCount",void 0),i([a({type:String,json:{write:!0}})],f.prototype,"description",void 0),i([a({type:String,json:{write:!0}})],f.prototype,"copyrightText",void 0),i([a({type:String,json:{write:!0}})],f.prototype,"units",void 0),i([a({type:P,json:{write:!0}})],f.prototype,"spatialReference",void 0),i([a({type:Number,json:{write:!0}})],f.prototype,"currentVersion",void 0),i([a({type:Object,json:{write:!0}})],f.prototype,"dateFieldsTimeReference",void 0),i([a({type:String,json:{write:!0}})],f.prototype,"serviceItemId",void 0),i([a({type:Boolean,json:{write:!0}})],f.prototype,"supportsDocuments",void 0),i([a({type:Boolean,json:{write:!0}})],f.prototype,"dataEditingNotSupported",void 0),i([a({type:Boolean,json:{write:!0}})],f.prototype,"schemaEditingNotSupported",void 0),i([a({type:Boolean,json:{write:!0}})],f.prototype,"supportsProvenance",void 0),f=i([m("esri.rest.knowledgeGraph.ServiceDefinition")],f);var le=f;var A=class extends G{constructor(e){super(e),this.dataModel=null,this.serviceDefinition=null}};i([a({type:String,json:{write:!0}})],A.prototype,"url",void 0),i([a({type:de,json:{write:!0}})],A.prototype,"dataModel",void 0),i([a({type:le,json:{write:!0}})],A.prototype,"serviceDefinition",void 0),A=i([m("esri.rest.knowledgeGraph.KnowledgeGraph")],A);var Ae=A;var Ce="esri/rest/knowledgeGraph/wasmInterface/",Ge,pt=null;function S(){return u(this,null,function*(){let e=pt??Ge;if(e)return e;let r=Fe("wasm-simd");return Ge=dt(r),Ge})}function dt(e){return u(this,null,function*(){if(e){let{default:t}=yield import("./chunk-WMK52UFU.js").then(o=>o.a);return t({locateFile:o=>_e(Ce+o)})}let{default:r}=yield import("./chunk-4A54OBY4.js").then(t=>t.a);return r({locateFile:t=>_e(Ce+t)})})}var k,Le,ue;(function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"})(k||(k={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(Le||(Le={})),function(e){e[e.exclude=0]="exclude",e[e.include=1]="include"}(ue||(ue={}));function be(e,r){let t=new r.ArrayValue;return t.deleteLater(),e.forEach(o=>{t.add_value(Pe(o,r))}),t}function Ie(e,r){let t=new r.ObjectValue;t.deleteLater();for(let[o,n]of Object.entries(e))t.set_key_value(o,Pe(n,r));return t}function V(e,r){if(e instanceof re)return ut(e,r);if(e instanceof te)return ct(e,r);if(e instanceof q||e instanceof Q)return lt(e,r);throw new l("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function Ue(e,r){r.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function Qe(e,r,t){if(!e.extent)throw new l("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new l("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new l("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);r.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:t.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}function qe(e,r){r.provenance_behavior={value:ue[e]}}function Pe(e,r){if(e==null)return"";if(typeof e!="object"||e instanceof Date)return e;if(e instanceof D)return V(e,r);if(Array.isArray(e)){let t=new r.ArrayValue;return t.deleteLater(),e.forEach(o=>{t.add_value(Pe(o,r))}),t}return Ie(e,r)}function lt(e,r){let t=new r.GeometryValue;t.deleteLater(),t.has_z=e.hasZ,t.has_m=e.hasM;let o=[],n=[],s=[];e instanceof q?(t.geometry_type=r.esriGeometryType.esriGeometryPolyline,s=e.paths):e instanceof Q&&(t.geometry_type=r.esriGeometryType.esriGeometryPolygon,s=e.rings);let p=0,d=0;return s.forEach(y=>{let c=0;y.forEach(h=>{c++,h.forEach(_=>{o[d]=_,d++})}),n[p]=c,p++}),t.coords=new Float64Array(o),t.lengths=new Uint32Array(n),t}function ut(e,r){let t=new r.GeometryValue;t.deleteLater(),t.geometry_type=t.geometry_type=r.esriGeometryType.esriGeometryMultipoint,t.has_z=e.hasZ,t.has_m=e.hasM;let o=[],n=[];n[0]=e.points.length;let s=0;return e.points.forEach(p=>{p.forEach(d=>{o[s]=d,s++})}),t.coords=new Float64Array(o),t.lengths=new Uint32Array(n),t}function ct(e,r){let t=new r.GeometryValue;t.deleteLater(),t.geometry_type=r.esriGeometryType.esriGeometryPoint,t.has_z=e.hasZ,t.has_m=e.hasM;let o=[],n=[];n[0]=1,o[0]=e.x,o[1]=e.y;let s=2;return e.hasZ&&(o[s]=e.z,s++),e.hasM&&(o[s]=e.m,s++),t.coords=new Float64Array(o),t.lengths=new Uint32Array(n),t}function K(e,r){if(!e.typeName)throw new l("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof oe){let t=new r.EntityValue;t.deleteLater(),t.type_name=e.typeName;for(let[o,n]of Object.entries(e.properties))t.set_key_value(o,We(n,r));return e.id&&t.set_id(e.id),t}if(e instanceof ne){let t=new r.RelationshipValue;t.deleteLater(),t.type_name=e.typeName;for(let[o,n]of Object.entries(e.properties))t.set_key_value(o,We(n,r));return e.id&&t.set_id(e.id),e.originId&&e.destinationId&&t.set_related_entity_ids(e.originId,e.destinationId),t}throw new l("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function Ye(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function We(e,r){return e==null?null:typeof e!="object"||e instanceof Date?e:e instanceof D?V(e,r):null}var F=class extends I{constructor(e){super(e),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};i([a()],F.prototype,"name",void 0),i([a()],F.prototype,"supportedCategory",void 0),i([a()],F.prototype,"analyzers",void 0),i([a()],F.prototype,"searchProperties",void 0),F=i([m("esri.rest.knowledgeGraph.SearchIndex")],F);var He=F;var J,Z,$,ce,ye,me,fe;(function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"})(J||(J={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(Z||(Z={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}($||($={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(ce||(ce={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(ye||(ye={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",e[e.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",e[e.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",e[e.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",e[e.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",e[e.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",e[e.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",e[e.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName"}(me||(me={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(fe||(fe={}));function Ve(e){return e.deleteLater(),new de({timestamp:e.timestamp,spatialReference:new P(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:fe[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:e.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:ce[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:vt(e.search_indexes),entityTypes:Be(e.entity_types),relationshipTypes:Tt(e.relationship_types),metaEntityTypes:Be(e.meta_entity_types)})}function yt(e){return e.deleteLater(),new B(Ke(e))}function mt(e){return e.deleteLater(),new ie({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:gt(e.fields)})}function Ke(e){return{name:e.name,alias:e.alias,role:J[e.role.value]?J[e.role.value]:null,strict:e.strict,properties:wt(e.properties),fieldIndexes:_t(e.field_indexes)}}function ft(e){return e.deleteLater(),new ae({alias:e.alias,name:e.name,fieldType:Z[e.field_type.value]?Z[e.field_type.value]:null,geometryType:$[e.geometry_type.value]?$[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:me[e.role.value],defaultValue:e.default_value})}function ht(e){e.deleteLater();let r=Ke(e),t=[];for(let o=0;o<e.end_points.size();o++){let n=e.end_points.get(o);t.push({originEntityType:n.origin_entity_type,destinationEntityType:n.dest_entity_type})}return e.end_points.delete(),new pe(Object.assign({endPoints:t},r))}function Be(e){let r=[];for(let t=0;t<e.size();t++)r.push(yt(e.get(t)));return e.delete(),r}function gt(e){let r=[];for(let t=0;t<e.size();t++)r.push(e.get(t));return e.delete(),r}function wt(e){let r=[];for(let t=0;t<e.size();t++)r.push(ft(e.get(t)));return e.delete(),r}function _t(e){let r=[];for(let t=0;t<e.size();t++)r.push(mt(e.get(t)));return e.delete(),r}function Tt(e){let r=[];for(let t=0;t<e.size();t++)r.push(ht(e.get(t)));return e.delete(),r}function vt(e){let r=[];for(let t=0;t<e.size();t++){let o=new He,n=e.get(0);o.name=n.name,o.supportedCategory=ye[n.supported_category.value];let s=n.analyzers.size();for(let p=0;p<s;p++)o.analyzers.push({name:n.analyzers.get(p).name});n.analyzers.delete();for(let p=0;p<n.search_properties.keys().size();p++){let d=n.search_properties.keys().get(p),y=n.search_properties.get(d),c=[];for(let h=0;h<y.property_names.size();h++)c.push(y.property_names.get(h));o.searchProperties.set(d,{propertyNames:c})}r.push(o)}return e.delete(),r}var v;(function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"})(v||(v={}));function Je(e,r){let t={spatialReference:r},o=Re(e,t),n=e.lengths,s=e.coords,p=n[0];t.points=[];let d=0;for(let y=0;y<p;y++){let c=[];for(let h=0;h<o;h++)c[h]=s[d],d++;t.points.push(c)}return new re(t)}function Ze(e,r){let t={spatialReference:r},o=2;Re(e,t);let n=e.coords;return t.x=n[0],t.y=n[1],e.has_z&&(t.z=n[o],o++),e.has_m&&(t.m=n[o]),new te(t)}function $e(e,r){return new q(et(e,r))}function Xe(e,r){return new Q(et(e,r))}function et(e,r){let t={spatialReference:r},o=Re(e,t),n=e.lengths,s=e.coords,p="";if(e.geometry_type.value===v.ESRI_GEOMETRY_POLYGON)p="rings";else{if(e.geometry_type.value!==v.ESRI_GEOMETRY_POLYLINE)throw new l("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");p="paths"}t[p]=[];let d=0;return n.forEach(y=>{let c=[];for(let h=0;h<y;h++){let _=[];for(let b=0;b<o;b++)_[b]=s[d],d++;c.push(_)}t[p].push(c)}),t}function Re(e,r){let t=2;return e.has_z?(r.hasZ=e.has_z,t++):r.hasZ=!1,e.has_m?(r.hasM=e.has_m,t++):r.hasM=!1,t}var he=()=>U.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),Et={decodedWasmObjToQueryResponseObj:(e,r,t)=>{if(e==null)return null;if(typeof e!="object"||"getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case v.ESRI_GEOMETRY_POINT:return Ze(e,t);case v.ESRI_GEOMETRY_MULTIPOINT:return Je(e,t);case v.ESRI_GEOMETRY_POLYLINE:return $e(e,t);case v.ESRI_GEOMETRY_POLYGON:return Xe(e,t);case v.ESRI_GEOMETRY_ENVELOPE:case v.ESRI_GEOMETRY_MULTI_PATCH:return he().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case v.ESRI_GEOMETRY_NULL:case v.ESRI_GEOMETRY_ANY:default:return he().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return he().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case k.OBJECT:return bt(e,r,t);case k.ENTITY:return tt(e,r,t);case k.RELATIONSHIP:return rt(e,r,t);case k.PATH:return It(e,r,t);case k.ARRAY:return Gt(e,r,t);default:return he().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function Gt(e,r,t){let o=[],n=e.count();for(let s=0;s<n;s++){let p=e.get_value_at(s);o.push(ge(p,r,t))}return o}function ge(e,r,t){return Et.decodedWasmObjToQueryResponseObj(e,r,t)}function tt(e,r,t){let o=e.type_name,n=Se(e,r,t),s=e.get_id();return new oe(Object.assign({typeName:o,id:s},n))}function Se(e,r,t){let o={},n=e.key_count();for(let s=0;s<n;s++)o[e.get_key_at(s)]=ge(e.get_value_at(s),r,t);return{properties:o}}function bt(e,r,t){return new De(Se(e,r,t))}function It(e,r,t){let o=e.entity_count(),n=e.relationship_count(),s=[];for(let p=0;p<o;p++)s.push(tt(e.get_entity_at(p),r,t)),p<n&&s.push(rt(e.get_relationship_at(p),r,t));return new ze({path:s})}function rt(e,r,t){let o=e.type_name,n=Se(e,r,t);return new ne(Object.assign({typeName:o,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},n))}function ot(e){let r=[];for(let o=0;o<e.get_header_keys().size();o++)r.push(e.get_header_keys().get(o));let t=new P(e.get_out_sr());return new M({headerKeys:r,outSpatialReference:t,exceededTransferLimit:e.exceeded_transfer_limit()})}var C=class extends I{constructor(e){super(e),this.hasError=null,this.error=null,this.editResults=[]}};i([a()],C.prototype,"hasError",void 0),i([a()],C.prototype,"error",void 0),i([a()],C.prototype,"editResults",void 0),C=i([m("esri.rest.knowledgeGraph.GraphApplyEditsResult")],C);var nt=C;function it(e){let r=e.has_error(),t=new nt({hasError:r,error:r?{errorCode:e.error.error_code,errorMessage:e.error.error_message}:null}),o=e.get_edit_results_count();for(let n=0;n<o;n++){let s=e.get_edit_results_at(n),p=e.get_edit_results_type_name_at(n),d=[],y=[],c=[],h=s.get_add_results_count(),_=s.get_update_results_count(),b=s.get_delete_results_count();for(let w=0;w<h;w++){let E=s.get_add_result_at(w);d.push({id:E.id,error:{errorCode:E.error.error_code,errorMessage:E.error.error_message}})}for(let w=0;w<_;w++){let E=s.get_update_result_at(w);y.push({id:E.id,error:{errorCode:E.error.error_code,errorMessage:E.error.error_message}})}for(let w=0;w<b;w++){let E=s.get_delete_result_at(w);c.push({id:E.id,error:{errorCode:E.error.error_code,errorMessage:E.error.error_message}})}t.editResults.push({typeName:p,adds:d,updates:y,deletes:c})}return t}var x={fetchKnowledgeGraph:e=>u(void 0,null,function*(){let r=new Ae({url:e}),t=[];return t.push(we(r)),t.push(Pt(r)),yield Promise.all(t),r}),refreshDataModel:e=>u(void 0,null,function*(){e.dataModel=yield st(e)}),refreshServiceDefinition:e=>u(void 0,null,function*(){let r=(yield N(e.url,{query:{f:"json"}})).data;return r.capabilities=r?.capabilities?.split(","),r.supportedQueryFormats=r?.supportedQueryFormats?.split(","),e.serviceDefinition=new le(r),e.serviceDefinition}),executeQueryStreaming:(e,r,t)=>u(void 0,null,function*(){let o="include",n=`${e.url}/graph/query`;yield Oe(e);let s=yield Me(n,t);if(!e.serviceDefinition?.supportsProvenance&&r.provenanceBehavior===o)throw new l("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");s.data.body=yield xt(r,e);let p=yield xe(s.data.url,s.data);if(e.dataModel){let d=yield at(p,e.dataModel);return new ve({resultRowsStream:d.readableStream,resultHeader:d.resultHeader})}throw new l("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}),executeApplyEdits:(e,r,t)=>u(void 0,null,function*(){if(e.serviceDefinition?.dataEditingNotSupported)throw new l("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");let o=`${e.url}/graph/applyEdits`;yield Oe(e);let n=yield Me(o,t);return n.data.body=yield St(r,e),Mt(yield xe(n.data.url,n.data))}),executeQuery:(e,r,t)=>u(void 0,null,function*(){let o=`${e.url}/graph/query`,n=yield N(o,{responseType:"array-buffer",query:ee({f:"pbf",openCypherQuery:r.openCypherQuery},t?.query),signal:t?.signal,timeout:t?.timeout}),s=n.getHeader?.("content-type"),p=n.data;if(s?.includes("application/x-protobuf")){let d=new(yield S()).GraphQueryDecoder;if(d.deleteLater(),e.dataModel){let y=je(d,p,e.dataModel);return new Te({resultRows:y.resultRows,resultHeader:y.resultHeader})}throw new l("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new l("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:s,data:n.data})}),executeSearch:(e,r,t)=>u(void 0,null,function*(){let o=r.typeCategoryFilter,n=`${e.url}/graph/search`,s=yield N(n,{responseType:"array-buffer",query:ee({f:"pbf",searchQuery:`"${r.searchQuery}"`,typeCategoryFilter:o},t?.query),signal:t?.signal,timeout:t?.timeout}),p=s.getHeader?.("content-type"),d=s.data;if(p?.includes("application/x-protobuf")){let y=new(yield S()).GraphQueryDecoder;if(y.deleteLater(),e.dataModel){let c=je(y,d,e.dataModel);return new Te({resultRows:c.resultRows,resultHeader:c.resultHeader})}throw new l("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new l("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:p,data:s.data})}),executeSearchStreaming:(e,r,t)=>u(void 0,null,function*(){let o=`${e.url}/graph/search`;yield Oe(e);let n=yield Me(o,t);n.data.body=yield Ot(r);let s=yield xe(n.data.url,n.data);if(e.dataModel){let p=yield at(s,e.dataModel);return new ve({resultRowsStream:p.readableStream,resultHeader:p.resultHeader})}throw new l("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}),_fetchWrapper:(e,r)=>u(void 0,null,function*(){return fetch(e,r)})};function _i(e,r,t){return u(this,null,function*(){return x.executeApplyEdits(e,r,t)})}function Ti(e,r,t){return u(this,null,function*(){return x.executeQuery(e,r,t)})}function vi(e,r,t){return u(this,null,function*(){return x.executeQueryStreaming(e,r,t)})}function Ei(e,r,t){return u(this,null,function*(){return x.executeSearch(e,r,t)})}function Gi(e,r,t){return u(this,null,function*(){return x.executeSearchStreaming(e,r,t)})}function bi(e){return u(this,null,function*(){return x.fetchKnowledgeGraph(e)})}function we(e){return u(this,null,function*(){return x.refreshDataModel(e)})}function Pt(e){return u(this,null,function*(){return x.refreshServiceDefinition(e)})}function xe(e,r){return u(this,null,function*(){return x._fetchWrapper(e,r)})}function Oe(e){return u(this,null,function*(){Ne?.findCredential(e.url)||(e.dataModel?yield st(e):yield we(e))})}function X(e,r,t){if(e.error_code!==0)throw new l(r,t,{errorCode:e.error_code,errorMessage:e.error_message})}function Rt(e,r,t,o){r==null?t.set_param_key_value(e,""):typeof r!="object"||r instanceof Date?t.set_param_key_value(e,r):r instanceof D?t.set_param_key_value(e,V(r,o)):Array.isArray(r)?t.set_param_key_value(e,be(r,o)):t.set_param_key_value(e,Ie(r,o))}function St(e,r){return u(this,null,function*(){if(r.dataModel||(yield we(r)),!r.dataModel)throw new l("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");let t=yield S(),o=!!e.options?.cascadeDelete,n=new t.GraphApplyEditsEncoder(t.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?Ye(e.options?.inputQuantizationParameters):t.InputQuantizationUtil.WGS84_lossless());n.deleteLater(),n.cascade_delete=o;try{let p;e.entityAdds?.forEach(d=>{p=n.add_entity(K(d,t)),X(p,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),e.relationshipAdds?.forEach(d=>{if(!d.originId||!d.destinationId)throw new l("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");p=n.add_relationship(K(d,t)),X(p,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),e.entityUpdates?.forEach(d=>{if(!d.id)throw new l("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");p=n.update_entity(K(d,t)),X(p,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),e.relationshipUpdates?.forEach(d=>{if(!d.id)throw new l("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");p=n.update_relationship(K(d,t)),X(p,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),e.entityDeletes?.forEach(d=>{if(!d.typeName)throw new l("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");let y=n.make_delete_helper(d.typeName,!0);y.deleteLater(),d.ids?.forEach(c=>{y.delete_by_id(c)})}),e.relationshipDeletes?.forEach(d=>{if(!d.typeName)throw new l("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");let y=n.make_delete_helper(d.typeName,!1);d.ids?.forEach(c=>{y.delete_by_id(c)})}),n.encode()}catch(p){throw new l("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:p})}let s=n.get_encoding_result();return X(s.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(s.get_byte_buffer())})}function xt(e,r){return u(this,null,function*(){let t=yield S(),o=new t.GraphQueryRequestEncoder;if(o.deleteLater(),e.outputSpatialReference?o.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:o.output_spatial_reference=t.SpatialReferenceUtil.WGS84(),o.open_cypher_query=e.openCypherQuery,e.bindParameters)for(let[s,p]of Object.entries(e.bindParameters))Rt(s,p,o,t);if(e.bindGeometryQuantizationParameters)Ue(e.bindGeometryQuantizationParameters,o);else{if(r.dataModel||(yield we(r)),r.dataModel?.spatialReference?.wkid!==4326)throw new l("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");o.input_quantization_parameters=t.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&Qe(e.outputQuantizationParameters,o,t),e.provenanceBehavior&&qe(e.provenanceBehavior,o);try{o.encode()}catch(s){throw new l("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:s})}let n=o.get_encoding_result();if(n.error.error_code!==0)throw new l("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())})}function Ot(e){return u(this,null,function*(){let r=yield S(),t=new r.GraphSearchRequestEncoder;if(t.deleteLater(),t.search_query=e.searchQuery,t.type_category_filter=r.esriNamedTypeCategory[e.typeCategoryFilter],e.returnSearchContext===!0&&(t.return_search_context=e.returnSearchContext),e.start!=null&&e.start>0&&(t.start_index=e.start),e.num!=null&&(t.max_num_results=e.num),e.idsFilter!=null&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{t.set_ids_filter(be(e.idsFilter,r))}catch(n){throw new l("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:n})}e.namedTypesFilter?.forEach(n=>{t.add_named_type_filter(n)});try{t.encode()}catch(n){throw new l("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:n})}let o=t.get_encoding_result();if(o.error.error_code!==0)throw new l("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())})}function Me(e,r){return u(this,null,function*(){return N(e,{responseType:"native-request-init",method:"post",query:ee({f:"pbf"},r?.query),body:"x",headers:{"Content-Type":"application/octet-stream"},signal:r?.signal,timeout:r?.timeout})})}function Mt(e){return u(this,null,function*(){let r=e.headers.get("content-type");if(r?.includes("application/x-protobuf")){let t=yield e.arrayBuffer(),o=new(yield S()).GraphApplyEditsDecoder;return o.deleteLater(),o.decode(new Uint8Array(t)),it(o)}throw new l("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:r,data:e.text()})})}function je(e,r,t,o){e.push_buffer(new Uint8Array(r));let n=[],s,p,d=0;for(;e.next_row();){s&&p||(s=o??ot(e),p=s.outSpatialReference??new P({wkid:4326})),d||(d=e.get_header_keys().size());let y=new Array(d);for(let c=0;c<d;c++){let h=e.get_value(c);y[c]=ge(h,t,p)}n.push(y)}if(e.has_error())throw new l("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return{resultHeader:s,resultRows:n}}function at(e,r){return u(this,null,function*(){let t=e.headers.get("content-type");if(e.headers.get("content-length")&&U.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),t?.includes("application/x-protobuf")){let h,o=e.body?.getReader(),n=new(yield S()).GraphQueryDecoder,s,p,d;n.deleteLater();let y=new Promise((_,b)=>{p=_,d=b}),c=!1;return{readableStream:new ReadableStream({start(_){return u(this,null,function*(){try{return b()}catch(w){o?.releaseLock(),_.error(new l("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:w})),_.close()}function b(){return o?.read().then(({done:w,value:E})=>{try{if(w){let L;if(n.has_error()?L=new l("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:n.error.error_code,errorMessage:n.error.error_message}):c||p(new M),o.releaseLock(),L)throw _.error(L),d(L),L;return void _.close()}let O=je(n,E,r,s),ke=O.resultRows;return ke.length>0&&_.enqueue(ke),!s&&O.resultHeader&&(s=O.resultHeader,p(O.resultHeader),c=!0),b()}catch(O){throw U.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(O),d(O),new l("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:O})}})}})}}),resultHeader:yield y}}throw new l("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})})}function st(e){return u(this,null,function*(){let r=`${e.url}/dataModel/queryDataModel`,t=yield N(r,{responseType:"array-buffer",query:{f:"pbf"}}),o=t.getHeader?.("content-type"),n=t.data;if(o?.includes("application/x-protobuf")){let s=(yield S()).decode_data_model_from_protocol_buffer(new Uint8Array(n));if(!s)throw new l("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return Ve(s)}throw new l("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:o,data:t.data})})}export{S as a,x as b,_i as c,Ti as d,vi as e,Ei as f,Gi as g,bi as h,we as i,Pt as j,xe as k};
