import{a as i}from"./chunk-W5OI4BJ2.js";import{h as t}from"./chunk-ZAQLF7TN.js";function E(r,o=0){let s=r.stride;return Array.from(r.fields.keys()).map(n=>{let e=r.fields.get(n),u=e.constructor.ElementCount,f=p(e.constructor.ElementType),c=e.offset,m=e.optional?.glNormalized??!1;return new i(n,u,f,c,s,m,o)})}function p(r){let o=a[r];if(o)return o;throw new Error("BufferType not supported in WebGL")}var a={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{E as a};