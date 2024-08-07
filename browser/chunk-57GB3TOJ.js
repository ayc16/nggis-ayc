import{h as I,k as T,l as X,m as A,n as d,o as i,p as S,q as M,v as O,z as m}from"./chunk-XSMN6VN6.js";import{p as v,r as _}from"./chunk-X3IDZTNG.js";import{a as L}from"./chunk-IQJU4QT3.js";var J=()=>v.getLogger("esri.views.webgl.checkWebGLError");function Q(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}var H=!!L("enable-feature:webgl-debug");function y(){return H}function le(){return H}function b(t){if(y()){let e=t.getError();if(e){let r=Q(t,e),o=new Error().stack;J().error(new _("webgl-error","WebGL error occurred",{message:r,stack:o}))}}}var U;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(U||(U={}));function V(t){switch(t){case I.BYTE:case I.UNSIGNED_BYTE:return 1;case I.SHORT:case I.UNSIGNED_SHORT:return 2;case I.FLOAT:case I.INT:case I.UNSIGNED_INT:return 4}}function ee(t){let e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function fe(t,e,r,o,s=0){let c=t.gl;t.bindBuffer(r);for(let a of o){let u=e.get(a.name);if(u===void 0){console.warn(`There is no location for vertex attribute '${a.name}' defined.`);continue}let l=s*a.stride;if(a.count<=4)c.vertexAttribPointer(u,a.count,a.type,a.normalized,a.stride,a.offset+l),c.enableVertexAttribArray(u),a.divisor>0&&t.gl.vertexAttribDivisor(u,a.divisor);else if(a.count===9)for(let n=0;n<3;n++)c.vertexAttribPointer(u+n,3,a.type,a.normalized,a.stride,a.offset+12*n+l),c.enableVertexAttribArray(u+n),a.divisor>0&&t.gl.vertexAttribDivisor(u+n,a.divisor);else if(a.count===16)for(let n=0;n<4;n++)c.vertexAttribPointer(u+n,4,a.type,a.normalized,a.stride,a.offset+16*n+l),c.enableVertexAttribArray(u+n),a.divisor>0&&t.gl?.vertexAttribDivisor(u+n,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count);if(y()){let n=ee(t),p=V(a.type),h=a.offset,E=Math.round(p/h)!==p/h?`. Offset not a multiple of stride. DataType requires ${p} bytes, but descriptor has an offset of ${h}`:"";n&&console.error(`Unable to bind vertex attribute "${a.name}" with baseInstanceOffset ${l}${E}:`,n,a)}}}function W(t){switch(t){case d.ALPHA:case d.LUMINANCE:case d.RED:case d.RED_INTEGER:case i.R8:case i.R8I:case i.R8UI:case i.R8_SNORM:case M.STENCIL_INDEX8:return 1;case d.LUMINANCE_ALPHA:case d.RG:case d.RG_INTEGER:case i.RGBA4:case i.R16F:case i.R16I:case i.R16UI:case i.RG8:case i.RG8I:case i.RG8UI:case i.RG8_SNORM:case i.RGB565:case i.RGB5_A1:case M.DEPTH_COMPONENT16:return 2;case d.DEPTH_COMPONENT:case d.RGB:case d.RGB_INTEGER:case i.RGB8:case i.RGB8I:case i.RGB8UI:case i.RGB8_SNORM:case i.SRGB8:case M.DEPTH_COMPONENT24:return 3;case d.DEPTH_STENCIL:case d.DEPTH24_STENCIL8:case d.RGBA:case d.RGBA_INTEGER:case i.RGBA8:case i.R32F:case i.R11F_G11F_B10F:case i.RG16F:case i.R32I:case i.R32UI:case i.RG16I:case i.RG16UI:case i.RGBA8I:case i.RGBA8UI:case i.RGBA8_SNORM:case i.SRGB8_ALPHA8:case i.RGB9_E5:case i.RGB10_A2UI:case i.RGB10_A2:case M.DEPTH_STENCIL:case M.DEPTH_COMPONENT32F:case M.DEPTH24_STENCIL8:return 4;case M.DEPTH32F_STENCIL8:return 5;case i.RGB16F:case i.RGB16I:case i.RGB16UI:return 6;case i.RG32F:case i.RG32I:case i.RG32UI:case i.RGBA16F:case i.RGBA16I:case i.RGBA16UI:return 8;case i.RGB32F:case i.RGB32I:case i.RGB32UI:return 12;case i.RGBA32F:case i.RGBA32I:case i.RGBA32UI:return 16;case m.COMPRESSED_RGB_S3TC_DXT1_EXT:case m.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case m.COMPRESSED_RGBA_S3TC_DXT3_EXT:case m.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case m.COMPRESSED_R11_EAC:case m.COMPRESSED_SIGNED_R11_EAC:case m.COMPRESSED_RGB8_ETC2:case m.COMPRESSED_SRGB8_ETC2:case m.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case m.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case m.COMPRESSED_RG11_EAC:case m.COMPRESSED_SIGNED_RG11_EAC:case m.COMPRESSED_RGBA8_ETC2_EAC:case m.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}var w=class{constructor(e=0,r=e){this.width=e,this.height=r,this.target=A.TEXTURE_2D,this.pixelFormat=d.RGBA,this.dataType=S.UNSIGNED_BYTE,this.samplingMode=T.LINEAR,this.wrapMode=X.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}};function z(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:W(t.internalFormat)))}var G=class t extends w{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case i.R16F:case i.R16I:case i.R16UI:case i.R32F:case i.R32I:case i.R32UI:case i.R8_SNORM:case i.R8:case i.R8I:case i.R8UI:this.pixelFormat=d.RED}}static validate(e,r){return new t(e,r)}};var Y=4;var te=class g{constructor(e,r=null,o=null){if(this.type=U.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,o=r;else{let s=G.validate(e,r);if(!s)throw new _("Texture descriptor invalid");this._descriptor=s}this._descriptor.target===A.TEXTURE_CUBE_MAP?this._setDataCubeMap(o):this.setData(o)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return z(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(O.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){let o=this._descriptor;if(o.width!==e||o.height!==r){if(this._wasImmutablyAllocated)throw new _("Immutable textures can't be resized!");o.width=e,o.height=r,this._descriptor.target===A.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=A.TEXTURE_CUBE_MAP_POSITIVE_X;r<=A.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){if(!this._descriptor.context?.gl)return;let o=this._descriptor.context.gl;b(o),this._glName||(this._glName=o.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(O.Texture,this)),e===void 0&&(e=null);let s=this._descriptor,c=r??s.target,a=N(c);e===null&&(s.width=s.width||Y,s.height=s.height||Y,a&&(s.depth=s.depth??1));let u=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),C(s),this._configurePixelStorage(),b(o);let l=this._deriveInternalFormat();if($(e)){let n="width"in e?e.width:e.codedWidth,p="height"in e?e.height:e.codedHeight,h=1;e instanceof HTMLVideoElement&&(n=e.videoWidth,p=e.videoHeight),s.width&&s.height,a&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,l,s.hasMipmap,n,p,h),this._texImage(c,0,l,n,p,h,e),b(o),s.hasMipmap&&this.generateMipmap(),s.width||(s.width=n),s.height||(s.height=p),a&&!s.depth&&(s.depth=h)}else{let{width:n,height:p,depth:h}=s;if(n==null||p==null)throw new _("Width and height must be specified!");if(a&&h==null)throw new _("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,l,s.hasMipmap,n,p,h),F(e)){let E=e.levels,R=j(c,n,p,h),D=Math.min(R-1,E.length-1);o.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,D);let x=l;if(!ie(x))throw new _("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((f,P,B,q)=>{let Z=E[Math.min(f,E.length-1)];this._compressedTexImage(c,f,x,P,B,q,Z)},D)}else this._texImage(c,0,l,n,p,h,e),b(o),s.hasMipmap&&this.generateMipmap()}k(o,this._descriptor),K(o,this._descriptor),re(this._descriptor.context,this._descriptor),b(o),this._descriptor.context.bindTexture(u,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,o,s,c,a,u=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");let l=this._descriptor,n=this._deriveInternalFormat(),{context:p,pixelFormat:h,dataType:E,target:R,isImmutable:D}=l;if(D&&!this._wasImmutablyAllocated)throw new _("Cannot update immutable texture before allocation!");let x=p.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||o<0||s>l.width||c>l.height||r+s>l.width||o+c>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();let{gl:f}=p;u&&f.pixelStorei(f.UNPACK_SKIP_ROWS,u),$(a)?f.texSubImage2D(R,e,r,o,s,c,h,E,a):F(a)?f.compressedTexSubImage2D(R,e,r,o,s,c,n,a.levels[e]):f.texSubImage2D(R,e,r,o,s,c,h,E,a),u&&f.pixelStorei(f.UNPACK_SKIP_ROWS,0),p.bindTexture(x,g.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,o,s,c,a,u,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");let n=this._descriptor,p=this._deriveInternalFormat(),{context:h,pixelFormat:E,dataType:R,isImmutable:D,target:x}=n;if(D&&!this._wasImmutablyAllocated)throw new _("Cannot update immutable texture before allocation!");N(x)||console.warn("Attempting to set 3D texture data on a non-3D texture");let f=h.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);h.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),(r<0||o<0||s<0||c>n.width||a>n.height||u>n.depth||r+c>n.width||o+a>n.height||s+u>n.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();let{gl:P}=h;if(F(l))l=l.levels[e],P.compressedTexSubImage3D(x,e,r,o,s,c,a,u,p,l);else{let B=l;P.texSubImage3D(x,e,r,o,s,c,a,u,E,R,B)}h.bindTexture(f,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){let e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new _("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,C(e)}e.samplingMode===T.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=T.LINEAR_MIPMAP_NEAREST):e.samplingMode===T.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=T.NEAREST_MIPMAP_NEAREST);let r=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,g.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,C(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){let e=this._descriptor,r=e.context.gl;this._samplingModeDirty&&(k(r,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(K(r,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===d.DEPTH_STENCIL&&(this._descriptor.internalFormat=d.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case S.FLOAT:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=i.RGBA32F;case d.RGB:return this._descriptor.internalFormat=i.RGB32F;default:throw new _("Unable to derive format")}case S.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=i.RGBA8;case d.RGB:return this._descriptor.internalFormat=i.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===d.DEPTH_STENCIL?d.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){let e=this._descriptor.context.gl,{unpackAlignment:r,flipped:o,preMultiplyAlpha:s}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s?1:0)}_texStorage(e,r,o,s,c,a){let{gl:u}=this._descriptor.context;if(!se(r))throw new _("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;let l=o?j(e,s,c,a):1;if(N(e)){if(a==null)throw new _("Missing depth dimension for 3D texture upload");u.texStorage3D(e,l,r,s,c,a)}else u.texStorage2D(e,l,r,s,c);this._wasImmutablyAllocated=!0}_texImage(e,r,o,s,c,a,u){let l=this._descriptor.context.gl,n=N(e),{isImmutable:p,pixelFormat:h,dataType:E}=this._descriptor;if(p){if(u!=null){let R=u;if(n){if(a==null)throw new _("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,r,0,0,0,s,c,a,h,E,R)}else l.texSubImage2D(e,r,0,0,s,c,h,E,R)}}else{let R=u;if(n){if(a==null)throw new _("Missing depth dimension for 3D texture upload");l.texImage3D(e,r,o,s,c,a,0,h,E,R)}else l.texImage2D(e,r,o,s,c,0,h,E,R)}}_compressedTexImage(e,r,o,s,c,a,u){let l=this._descriptor.context.gl,n=N(e);if(this._descriptor.isImmutable){if(u!=null)if(n){if(a==null)throw new _("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,r,0,0,0,s,c,a,o,u)}else l.compressedTexSubImage2D(e,r,0,0,s,c,o,u)}else if(n){if(a==null)throw new _("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,r,o,s,c,a,0,u)}else l.compressedTexImage2D(e,r,o,s,c,0,u)}_forEachMipmapLevel(e,r=1/0){let{width:o,height:s,depth:c,hasMipmap:a,target:u}=this._descriptor,l=u===A.TEXTURE_3D;if(o==null||s==null||l&&c==null)throw new _("Missing texture dimensions for mipmap calculation");for(let n=0;e(n,o,s,c),a&&(o!==1||s!==1||l&&c!==1)&&!(n>=r);++n)o=Math.max(1,o>>1),s=Math.max(1,s>>1),l&&(c=Math.max(1,c>>1))}};function C(t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function k(t,e){let r=e.samplingMode,o=e.samplingMode;r===T.LINEAR_MIPMAP_NEAREST||r===T.LINEAR_MIPMAP_LINEAR?(r=T.LINEAR,e.hasMipmap||(o=T.LINEAR)):r!==T.NEAREST_MIPMAP_NEAREST&&r!==T.NEAREST_MIPMAP_LINEAR||(r=T.NEAREST,e.hasMipmap||(o=T.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,o)}function K(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function re(t,e){let r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function se(t){return t in i}function ie(t){return t in m}function F(t){return t!=null&&"type"in t&&t.type==="compressed"}function ae(t){return t!=null&&"byteLength"in t}function $(t){return t!=null&&!F(t)&&!ae(t)}function N(t){return t===A.TEXTURE_3D||t===A.TEXTURE_2D_ARRAY}function j(t,e,r,o=1){let s=Math.max(e,r);return t===A.TEXTURE_3D&&(s=Math.max(s,o)),Math.round(Math.log(s)/Math.LN2)+1}te.TEXTURE_UNIT_FOR_UPDATES=0;export{y as a,le as b,b as c,U as d,V as e,ee as f,fe as g,W as h,w as i,te as j};
