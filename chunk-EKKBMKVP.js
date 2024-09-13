import{a as se,b as L,c as O,d as F,h as ae,j as C}from"./chunk-57GB3TOJ.js";import{e as u,h as y,m as A,n as G,p as oe,q as S,r as M,s as T,t as U,v as m,w as x,y as $}from"./chunk-XSMN6VN6.js";import{c as V}from"./chunk-MLSR6YE6.js";import{b as B}from"./chunk-VU5W7W6Y.js";import{p as v}from"./chunk-X3IDZTNG.js";import{A as ne,h as re,y as ie}from"./chunk-IQJU4QT3.js";import{h as P}from"./chunk-EAH6BNBL.js";var R=()=>v.getLogger("esri.views.webgl.BufferObject");var k=class i{static createIndex(e,r,t){return new i(e,u.ELEMENT_ARRAY_BUFFER,r,t)}static createVertex(e,r,t){return new i(e,u.ARRAY_BUFFER,r,t)}static createUniform(e,r,t){return new i(e,u.UNIFORM_BUFFER,r,t)}static createPixelPack(e,r=M.STREAM_READ,t){let n=new i(e,u.PIXEL_PACK_BUFFER,r);return t&&n.setSize(t),n}static createPixelUnpack(e,r=M.STREAM_DRAW,t){return new i(e,u.PIXEL_UNPACK_BUFFER,r,t)}static createTransformFeedback(e,r=M.STATIC_DRAW,t){let n=new i(e,u.TRANSFORM_FEEDBACK_BUFFER,r);return n.setSize(t),n}constructor(e,r,t,n){this._context=e,this.bufferType=r,this.usage=t,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(m.BufferObject,this),this._glName=this._context.gl.createBuffer(),O(this._context.gl),n&&this.setData(n)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===u.ELEMENT_ARRAY_BUFFER?this._indexType===y.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===u.ELEMENT_ARRAY_BUFFER||this.bufferType===u.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(m.BufferObject,this),this._context=null):this._glName&&R().warn("Leaked WebGL buffer object")}setSize(e,r=null){if(e<=0&&R().error("Buffer size needs to be positive!"),this.bufferType===u.ELEMENT_ARRAY_BUFFER&&r!=null)switch(this._indexType=r,r){case y.UNSIGNED_SHORT:e*=2;break;case y.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let r=e.byteLength;this.bufferType===u.ELEMENT_ARRAY_BUFFER&&(ie(e)&&(r/=2,this._indexType=y.UNSIGNED_SHORT),ne(e)&&(r/=4,this._indexType=y.UNSIGNED_INT)),this._setBufferData(r,e)}_setBufferData(e,r=null){this._size=e;let t=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);let n=this._context.gl;r!=null?n.bufferData(this.bufferType,r,this.usage):n.bufferData(this.bufferType,e,this.usage),O(n),this._isVAOAware&&this._context.bindVAO(t)}setSubData(e,r,t,n){if(!e)return;(r<0||r*e.BYTES_PER_ELEMENT>=this.usedMemory)&&R().error("offset is out of range!"),t>=n&&R().error("end must be bigger than start!"),(r+(n-t))*e.BYTES_PER_ELEMENT>this.usedMemory&&R().error("An attempt to write beyond the end of the buffer!");let o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);let{gl:s}=this._context;s.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,e,t,n-t),O(s),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,r=0,t,n){if(t<0||n<0)return void R().error("Problem getting subdata: offset and length were less than zero!");let o=je(e)?e.BYTES_PER_ELEMENT:1;if(o*((t??0)+(n??0))>e.byteLength)return void R().error("Problem getting subdata: offset and length exceeded destination size!");r+o*(n??0)>this.usedMemory&&R().warn("Potential problem getting subdata: requested data exceeds buffer size!");let s=this._context.gl;this.bufferType===u.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,u.TRANSFORM_FEEDBACK_BUFFER),s.getBufferSubData(u.TRANSFORM_FEEDBACK_BUFFER,r,e,t,n),this._context.unbindBuffer(u.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,u.COPY_READ_BUFFER),s.getBufferSubData(u.COPY_READ_BUFFER,r,e,t,n),this._context.unbindBuffer(u.COPY_READ_BUFFER))}getSubDataAsync(e,r=0,t,n){return P(this,null,function*(){yield this._context.clientWaitAsync(),this.getSubData(e,r,t,n)})}};function je(i){return re(i)}var he=class{constructor(e,r,t=r){this.internalFormat=e,this.width=r,this.height=t,this.multisampled=!1,this.samples=1}};function ce(i){return i.width<=0||i.height<=0||i.internalFormat==null?0:i.width*i.height*ae(i.internalFormat)}var I=class{constructor(e,r){this._context=e,this._descriptor=r,this.type=F.RenderBuffer,this._context.instanceCounter.increment(m.Renderbuffer,this);let t=this._context.gl;this.glName=t.createRenderbuffer(),this._context.bindRenderbuffer(this);let{width:n,height:o,internalFormat:s,multisampled:h}=r;h?t.renderbufferStorageMultisample(t.RENDERBUFFER,this.samples,s,n,o):t.renderbufferStorage(t.RENDERBUFFER,s,n,o)}get descriptor(){return this._descriptor}get samples(){let e=this._descriptor.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}get usedMemory(){return ce(this._descriptor)}resize(e,r){let t=this._descriptor;if(t.width===e&&t.height===r)return;t.width=e,t.height=r;let n=this._context.gl;this._context.bindRenderbuffer(this),t.multisampled?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,t.internalFormat,t.width,t.height):n.renderbufferStorage(n.RENDERBUFFER,t.internalFormat,t.width,t.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(m.Renderbuffer,this),this._context=null)}};var ze=()=>v.getLogger("esri.views.webgl.FramebufferObject"),Y=class i{constructor(e,r,t=null){this._context=e,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,e.instanceCounter.increment(m.FramebufferObject,this);let n=z(r)?r:new C(this._context,r);if(this._colorAttachments.set(x.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(x.COLOR_ATTACHMENT0),t!=null)if(Xe(t))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=z(t)?t:new C(this._context,t),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{let o=He(t)?t:new I(this._context,t);this._depthStencilBuffer=o,this._validateRenderBufferDescriptor(o.descriptor)}}dispose(){if(this._colorAttachments.size===0&&!this._glName)return;let e=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((r,t)=>this.detachColorTexture(t)?.dispose()),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(m.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(x.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._colorAttachments.get(x.COLOR_ATTACHMENT0)?.descriptor?.width??0}get height(){return this._colorAttachments.get(x.COLOR_ATTACHMENT0)?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce((e,[r,t])=>e+t.usedMemory,this.depthStencil?.usedMemory??0)}getColorTexture(e){let r=this._colorAttachments.get(e);return r&&z(r)?r:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(e,r=x.COLOR_ATTACHMENT0){if(!e)return;this._validateColorAttachmentPoint(r);let t=e.descriptor;this._validateTextureDescriptor(t),this.detachColorTexture(r)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e)}detachColorTexture(e=x.COLOR_ATTACHMENT0){let r=this._colorAttachments.get(e);if(r){if(this._initialized){let t=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e),this._context.bindFramebuffer(t)}return this._colorAttachments.delete(e),r}}setColorTextureTarget(e,r=x.COLOR_ATTACHMENT0){let t=this._colorAttachments.get(r);t&&this._framebufferTexture2D(t.glName,r,e)}attachDepthStencil(e){if(e)switch(e.type){case F.Texture:return this._attachDepthStencilTexture(e);case F.RenderBuffer:return this._attachDepthStencilBuffer(e)}}_attachDepthStencilTexture(e){if(e==null)return;let r=e.descriptor;r.pixelFormat!==G.DEPTH_STENCIL&&r.pixelFormat!==G.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==oe.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,$)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=e}detachDepthStencilTexture(){let e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,$)),this._depthStencilTexture=null,e}_attachDepthStencilBuffer(e){if(e==null)return;let r=e.descriptor;if(this._validateRenderBufferDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);let t=this._context.gl,n=this._getGLAttachmentPoint(r);t.framebufferRenderbuffer(U.FRAMEBUFFER,n,t.RENDERBUFFER,e.glName)}this._depthStencilBuffer=e}detachDepthStencilBuffer(){let e=this._depthStencilBuffer;if(e&&this._initialized){this._context.bindFramebuffer(this);let r=this._context.gl,t=this._getGLAttachmentPoint(e.descriptor);r.framebufferRenderbuffer(U.FRAMEBUFFER,t,r.RENDERBUFFER,null)}return this._depthStencilBuffer=null,e}copyToTexture(e,r,t,n,o,s,h){(e<0||r<0||o<0||s<0)&&console.error("Offsets cannot be negative!"),(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");let c=h.descriptor;h.descriptor.target!==A.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(c?.width==null||c?.height==null||e+t>this.width||r+n>this.height||o+t>c.width||s+n>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");let a=this._context,l=a.bindTexture(h,C.TEXTURE_UNIT_FOR_UPDATES);a.setActiveTexture(C.TEXTURE_UNIT_FOR_UPDATES),a.bindFramebuffer(this),a.gl.copyTexSubImage2D(A.TEXTURE_2D,0,o,s,e,r,t,n),a.bindTexture(l,C.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,t,n,o,s,h){(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,t,n,o,s,h)}readPixelsAsync(e,r,t,n,o,s,h){return P(this,null,function*(){let{gl:c}=this._context,a=k.createPixelPack(this._context,M.STREAM_READ,h.byteLength);this._context.bindBuffer(a),this._context.bindFramebuffer(this),c.readPixels(e,r,t,n,o,s,0),this._context.unbindBuffer(u.PIXEL_PACK_BUFFER),yield a.getSubDataAsync(h),a.dispose()})}resize(e,r){if(this.width===e&&this.height===r)return;let t={width:e,height:r};j(t,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(n=>n.resize(t.width,t.height)),this._depthStencilTexture?.resize(t.width,t.height),this._initialized&&(j(t,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(t.width,t.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(e=U.FRAMEBUFFER){let r=this._context.gl;if(this._initialized)return void r.bindFramebuffer(e,this.glName);this._glName&&r.deleteFramebuffer(this._glName);let t=r.createFramebuffer();if(r.bindFramebuffer(e,t),this._colorAttachments.forEach((n,o)=>this._framebufferTexture2D(n.glName,o,le(n),e)),this._depthStencilBuffer){let n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);r.framebufferRenderbuffer(e,n,r.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,r.DEPTH_STENCIL_ATTACHMENT,le(this._depthStencilTexture),e);se()&&r.checkFramebufferStatus(e)!==r.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=t,this._initialized=!0}_framebufferTexture2D(e,r=x.COLOR_ATTACHMENT0,t=A.TEXTURE_2D,n=U.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(n,r,t,e,o)}_disposeDepthStencilAttachments(){let e=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);let r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(U.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthStencilBuffer=V(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=V(this._depthStencilTexture))}_validateTextureDescriptor(e){e.target!==A.TEXTURE_2D&&e.target!==A.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),j(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}_validateRenderBufferDescriptor(e){j(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}_validateBufferDimensions(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(e){switch(e.internalFormat){case S.DEPTH_COMPONENT16:case S.DEPTH_COMPONENT24:case S.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case S.DEPTH24_STENCIL8:case S.DEPTH32F_STENCIL8:case S.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case S.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(i._MAX_COLOR_ATTACHMENTS===-1){let{gl:t}=this._context;i._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}let r=e-x.COLOR_ATTACHMENT0;r+1>i._MAX_COLOR_ATTACHMENTS&&v.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${i._MAX_COLOR_ATTACHMENTS} color attachments`)}};function z(i){return i!=null&&"type"in i&&i.type===F.Texture}function He(i){return i!=null&&"type"in i&&i.type===F.RenderBuffer}function Xe(i){return z(i)||i!=null&&"pixelFormat"in i}function j(i,e){let r=Math.max(i.width,i.height);if(r>e){ze().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${e}`);let t=e/r;return i.width=Math.round(i.width*t),i.height=Math.round(i.height*t),!1}return!0}function le(i){return i.descriptor.target===A.TEXTURE_CUBE_MAP?A.TEXTURE_CUBE_MAP_POSITIVE_X:A.TEXTURE_2D}Y._MAX_COLOR_ATTACHMENTS=-1;var fe,_e={exports:{}};(fe=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])!==void 0&&(_e.exports=fe);var me=B(_e.exports),ue,de={exports:{}};ue=de,function(i){var e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];e!==void 0&&(ue.exports=e)}();var K=B(de.exports),ge={exports:{}};(function(i){(function(e){var r=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]}();r!==void 0&&(i.exports=r)})()})(ge);var pe=B(ge.exports);var Te=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var W={enableCache:!1};var E=999,xe=9999,q=0,Q=1,Ee=2,be=3,Ae=4,H=5,Ve=6,Ge=7,$e=8,Se=9,Ye=10,Re=11,Ke=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function We(){var i,e,r,t=0,n=0,o=E,s=[],h=[],c=1,a=0,l=0,f=!1,p=!1,d="";return function(_){return h=[],_!==null?Ue(_.replace?_.replace(/\r\n/g,`
`):_):Ce()};function g(_){_.length&&h.push({type:Ke[o],data:_,position:l,line:c,column:a})}function Ue(_){var D;for(t=0,r=(d+=_).length;i=d[t],t<r;){switch(D=t,o){case q:t=Pe();break;case Q:t=Ne();break;case Ee:t=ee();break;case be:t=Be();break;case Ae:t=Oe();break;case Re:t=Le();break;case H:t=ke();break;case xe:t=Ie();break;case Se:t=ve();break;case E:t=we()}D!==t&&(d[D]===`
`?(a=0,++c):++a)}return n+=t,d=d.slice(t),h}function Ce(_){return s.length&&g(s.join("")),o=Ye,g("(eof)"),h}function we(){return s=s.length?[]:s,e==="/"&&i==="*"?(l=n+t-1,o=q,e=i,t+1):e==="/"&&i==="/"?(l=n+t-1,o=Q,e=i,t+1):i==="#"?(o=Ee,l=n+t,t):/\s/.test(i)?(o=Se,l=n+t,t):(f=/\d/.test(i),p=/[^\w_]/.test(i),l=n+t,o=f?Ae:p?be:xe,t)}function ve(){return/[^\s]/g.test(i)?(g(s.join("")),o=E,t):(s.push(i),e=i,t+1)}function ee(){return i!=="\r"&&i!==`
`||e==="\\"?(s.push(i),e=i,t+1):(g(s.join("")),o=E,t)}function Ne(){return ee()}function Pe(){return i==="/"&&e==="*"?(s.push(i),g(s.join("")),o=E,t+1):(s.push(i),e=i,t+1)}function Be(){if(e==="."&&/\d/.test(i))return o=H,t;if(e==="/"&&i==="*")return o=q,t;if(e==="/"&&i==="/")return o=Q,t;if(i==="."&&s.length){for(;X(s););return o=H,t}if(i===";"||i===")"||i==="("){if(s.length)for(;X(s););return g(i),o=E,t+1}var _=s.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||_){for(;X(s););return o=E,t}return s.push(i),e=i,t+1}function X(_){for(var D,w,te=0;;){if(D=K.indexOf(_.slice(0,_.length+te).join("")),w=K[D],D===-1){if(te--+_.length>0)continue;w=_.slice(0,1).join("")}return g(w),l+=w.length,(s=s.slice(w.length)).length}}function Le(){return/[^a-fA-F0-9]/.test(i)?(g(s.join("")),o=E,t):(s.push(i),e=i,t+1)}function Oe(){return i==="."||/[eE]/.test(i)?(s.push(i),o=H,e=i,t+1):i==="x"&&s.length===1&&s[0]==="0"?(o=Re,s.push(i),e=i,t+1):/[^\d]/.test(i)?(g(s.join("")),o=E,t):(s.push(i),e=i,t+1)}function ke(){return i==="f"&&(s.push(i),e=i,t+=1),/[eE]/.test(i)||i==="-"&&/[eE]/.test(e)?(s.push(i),e=i,t+1):/[^\d]/.test(i)?(g(s.join("")),o=E,t):(s.push(i),e=i,t+1)}function Ie(){if(/[^\d\w_]/.test(i)){var _=s.join("");return o=me.indexOf(_)>-1?$e:pe.indexOf(_)>-1?Ge:Ve,g(s.join("")),o=E,t}return s.push(i),e=i,t+1}}function qe(i){var e=We(),r=[];return r=(r=r.concat(e(i))).concat(e(null))}function Qe(i){return qe(i)}function Ze(i){return i.map(e=>e.type!=="eof"?e.data:"").join("")}var Z=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function Je(i,e="100",r="300 es"){let t=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(let n of i)if(n.type==="preprocessor"){let o=t.exec(n.data);if(o){let s=o[1].replaceAll(/\s\s+/g," ");if(s===r)return s;if(s===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+s)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function et(i,e){for(let r=e-1;r>=0;r--){let t=i[r];if(t.type!=="whitespace"&&t.type!=="block-comment"){if(t.type!=="keyword")break;if(t.data==="attribute"||t.data==="in")return!0}}return!1}function N(i,e,r,t){t=t||r;for(let n of i)if(n.type==="ident"&&n.data===r)return t in e?e[t]++:e[t]=0,N(i,e,t+"_"+e[t],t);return r}function De(i,e,r="afterVersion"){function t(c,a){for(let l=a;l<c.length;l++){let f=c[l];if(f.type==="operator"&&f.data===";")return l}return null}function n(c){let a=-1,l=0,f=-1;for(let p=0;p<c.length;p++){let d=c[p];if(d.type==="preprocessor"&&(/\#(if|ifdef|ifndef)\s+.+/.test(d.data)?++l:/\#endif\s*.*/.test(d.data)&&--l),r!=="afterVersion"&&r!=="afterPrecision"||d.type==="preprocessor"&&d.data.startsWith("#version")&&(f=Math.max(f,p)),r==="afterPrecision"&&d.type==="keyword"&&d.data==="precision"){let g=t(c,p);if(g===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,g)}a<f&&l===0&&(a=p)}return a+1}let o={data:`
`,type:"whitespace"},s=c=>c<i.length&&/[^\r\n]$/.test(i[c].data),h=n(i);s(h-1)&&i.splice(h++,0,o);for(let c of e)i.splice(h++,0,c);s(h-1)&&s(h)&&i.splice(h,0,o)}function tt(i,e,r,t="lowp"){De(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:t},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function rt(i,e,r,t,n="lowp"){De(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:t.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function it(i,e){let r,t,n=-1;for(let o=e;o<i.length;o++){let s=i[o];if(s.type==="operator"&&(s.data==="["&&(r=o),s.data==="]")){t=o;break}s.type==="integer"&&(n=parseInt(s.data,10))}return r&&t&&i.splice(r,t-r+1),n}function J(i,e){if(i.startsWith("#version 300"))return i;let r=nt(i);if(r!=null)return r;let t=Qe(i);if(Je(t,"100","300 es")==="300 es")return i;let n=null,o=null,s={},h={};for(let c=0;c<t.length;++c){let a=t[c];switch(a.type){case"keyword":e===T.VERTEX_SHADER&&a.data==="attribute"?a.data="in":a.data==="varying"&&(a.data=e===T.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===T.FRAGMENT_SHADER&&a.data==="gl_FragColor"&&(n||(n=N(t,s,"fragColor"),tt(t,n,"vec4")),a.data=n),e===T.FRAGMENT_SHADER&&a.data==="gl_FragData"){let l=it(t,c+1),f=N(t,s,"fragData");rt(t,f,"vec4",l,"mediump"),a.data=f}else e===T.FRAGMENT_SHADER&&a.data==="gl_FragDepthEXT"&&(o||(o=N(t,s,"gl_FragDepth")),a.data=o);break;case"ident":if(Te.includes(a.data)){if(e===T.VERTEX_SHADER&&et(t,c))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in h||(h[a.data]=N(t,s,a.data)),a.data=h[a.data]}}}for(let c=t.length-1;c>=0;--c){let a=t[c];if(a.type==="preprocessor"){let l=a.data.match(/\#extension\s+(.*)\:/);if(l&&l[1]&&Z.has(l[1].trim())){let d=t[c+1];t.splice(c,d&&d.type==="whitespace"?2:1)}let f=a.data.match(/\#ifdef\s+(.*)/);f&&f[1]&&Z.has(f[1].trim())&&(a.data="#if 1");let p=a.data.match(/\#ifndef\s+(.*)/);p&&p[1]&&Z.has(p[1].trim())&&(a.data="#if 0")}}return ot(i,Ze(t))}var Fe=new Map;function nt(i){return W.enableCache?Fe.get(i):null}function ot(i,e){return W.enableCache&&Fe.set(i,e),e}var st=4294967295,ye=class{constructor(e,r,t,n,o=new Map,s=[]){this._context=e,this._locations=n,this._uniformBlockBindings=o,this._transformFeedbackVaryings=s,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),r=J(r,T.VERTEX_SHADER),t=J(t,T.FRAGMENT_SHADER),this._vShader=Me(this._context,T.VERTEX_SHADER,r),this._fShader=Me(this._context,T.FRAGMENT_SHADER,t),ct.enabled&&(this._linesOfCode=r.match(/\n/g).length+t.match(/\n/g).length+2,this._context.instanceCounter.increment(m.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(m.Shader,this),L()&&(this.vertexShader=r,this.fragmentShader=t),this.usedMemory=r.length+t.length;let h=this._context.gl,c=h.createProgram();h.attachShader(c,this._vShader),h.attachShader(c,this._fShader),this._locations.forEach((a,l)=>h.bindAttribLocation(c,a,l)),this._transformFeedbackVaryings?.length&&h.transformFeedbackVaryings(c,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(c),L()&&!h.getProgramParameter(c,h.LINK_STATUS)&&console.error(`Could not link shader
validated: ${h.getProgramParameter(c,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(c)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(let[a,l]of this._uniformBlockBindings){let f=h.getUniformBlockIndex(c,a);f<st&&h.uniformBlockBinding(c,f,l)}this._glName=c,this._context.instanceCounter.increment(m.Program,this)}get glName(){return this._glName}get hasGLName(){return this._glName!=null}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;let e=this._context.gl.getExtension("KHR_parallel_shader_compile");return e==null||this.glName==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;let e=this._context.gl,r=this._context.instanceCounter;this._nameToUniformLocation.forEach(t=>t&&r.decrement(m.Uniform,t)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(r.decrement(m.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),e.deleteShader(this._vShader),this._vShader=null,r.decrement(m.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,r.decrement(m.Program,this))}ref(){++this._refCount}_getUniformLocation(e){let r=this._nameToUniformLocation.get(e);if(r!==void 0)return r;if(this.glName){let t=this._context.gl.getUniformLocation(this.glName,e);return this._nameToUniformLocation.set(e,t),t&&this._context.instanceCounter.increment(m.Uniform,t),t}return null}hasUniform(e){return this._getUniformLocation(e)!=null}setUniform1i(e,r){let t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1i(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1iv(e,r){b(this._nameToUniform1v,e,r)&&this._context.gl.uniform1iv(this._getUniformLocation(e),r)}setUniform2iv(e,r){b(this._nameToUniform2,e,r)&&this._context.gl.uniform2iv(this._getUniformLocation(e),r)}setUniform3iv(e,r){b(this._nameToUniform3,e,r)&&this._context.gl.uniform3iv(this._getUniformLocation(e),r)}setUniform4iv(e,r){b(this._nameToUniform4,e,r)&&this._context.gl.uniform4iv(this._getUniformLocation(e),r)}setUniform1f(e,r){let t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1f(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1fv(e,r){b(this._nameToUniform1v,e,r)&&this._context.gl.uniform1fv(this._getUniformLocation(e),r)}setUniform2f(e,r,t){let n=this._nameToUniform2.get(e);n===void 0?(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),this._nameToUniform2.set(e,[r,t])):r===n[0]&&t===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),n[0]=r,n[1]=t)}setUniform2fv(e,r){b(this._nameToUniform2,e,r)&&this._context.gl.uniform2fv(this._getUniformLocation(e),r)}setUniform3f(e,r,t,n){let o=this._nameToUniform3.get(e);o===void 0?(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),this._nameToUniform3.set(e,[r,t,n])):r===o[0]&&t===o[1]&&n===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),o[0]=r,o[1]=t,o[2]=n)}setUniform3fv(e,r){let t=this._getUniformLocation(e);t!=null&&b(this._nameToUniform3,e,r)&&this._context.gl.uniform3fv(t,r)}setUniform4f(e,r,t,n,o){let s=this._nameToUniform4.get(e);s===void 0?(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,o),this._nameToUniform4.set(e,[r,t,n,o])):s!==void 0&&r===s[0]&&t===s[1]&&n===s[2]&&o===s[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,o),s[0]=r,s[1]=t,s[2]=n,s[3]=o)}setUniform4fv(e,r){let t=this._getUniformLocation(e);t!=null&&b(this._nameToUniform4,e,r)&&this._context.gl.uniform4fv(t,r)}setUniformMatrix3fv(e,r,t=!1){let n=this._getUniformLocation(e);n!=null&&b(this._nameToUniformMatrix3,e,r)&&this._context.gl.uniformMatrix3fv(n,t,r)}setUniformMatrix4fv(e,r,t=!1){let n=this._getUniformLocation(e);n!=null&&b(this._nameToUniformMatrix4,e,r)&&this._context.gl.uniformMatrix4fv(n,t,r)}stop(){}};function Me(i,e,r){let t=i.gl,n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),L()&&!t.getShaderParameter(n,t.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===T.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(t.getShaderInfoLog(n)),console.error(at(r))),n}function at(i){let e=2;return i.replaceAll(`
`,()=>`
`+ht(e++)+":")}function ht(i){return i>=1e3?i.toString():("  "+i).slice(-3)}function b(i,e,r){let t=i.get(e);if(!t)return i.set(e,Array.from(r)),!0;let n=r.length;if(t.length!==n)return i.set(e,Array.from(r)),!0;for(let o=0;o<n;++o){let s=r[o];if(t[o]!==s){for(t[o]=s;o<n;++o)t[o]=r[o];return!0}}return!1}var ct={enabled:!1};export{k as a,he as b,I as c,Y as d,ye as e};