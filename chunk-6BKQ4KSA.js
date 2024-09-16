import{a as A}from"./chunk-U6WVZEYH.js";import{a as _}from"./chunk-CPDJJRWA.js";import{k as y,l as F}from"./chunk-CRMMDK2Z.js";var D=class{constructor(t=9,i){this._compareMinX=q,this._compareMinY=v,this._toBBox=n=>n,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&(typeof i=="function"?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),d.prune(),E.prune(),m.prune(),w.prune()}all(t){O(this._data,t)}search(t,i){let n=this._data,h=this._toBBox;if(B(t,n))for(d.clear();n;){for(let s=0,a=n.children.length;s<a;s++){let r=n.children[s],o=n.leaf?h(r):r;B(t,o)&&(n.leaf?i(r):S(t,o)?O(r,i):d.push(r))}n=d.pop()}}collides(t){let i=this._data,n=this._toBBox;if(!B(t,i))return!1;for(d.clear();i;){for(let h=0,s=i.children.length;h<s;h++){let a=i.children[h],r=i.leaf?n(a):a;if(B(t,r)){if(i.leaf||S(t,r))return!0;d.push(a)}}i=d.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,h=t.length;n<h;n++)this.insert(t[n]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){let n=this._data;this._data=i,i=n}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new x([]),this}remove(t){if(!t)return this;let i,n=this._data,h=null,s=0,a=!1,r=this._toBBox(t);for(m.clear(),w.clear();n||m.length>0;){if(n||(n=m.pop(),h=m.data[m.length-1],s=w.pop()??0,a=!0),n.leaf&&(i=F(n.children,t,n.children.length,n.indexHint),i!==-1))return n.children.splice(i,1),m.push(n),this._condense(m),this;a||n.leaf||!S(n,r)?h?(s++,n=h.children[s],a=!1):n=null:(m.push(n),w.push(s),s=0,h=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,h){let s=n-i+1,a=this._maxEntries;if(s<=a){let l=new x(t.slice(i,n+1));return f(l,this._toBBox),l}h||(h=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(h-1)));let r=new M([]);r.height=h;let o=Math.ceil(s/a),c=o*Math.ceil(Math.sqrt(a));I(t,i,n,c,this._compareMinX);for(let l=i;l<=n;l+=c){let u=Math.min(l+c-1,n);I(t,l,u,o,this._compareMinY);for(let X=l;X<=u;X+=o){let J=Math.min(X+o-1,u);r.children.push(this._build(t,X,J,h-1))}}return f(r,this._toBBox),r}_insert(t,i,n){let h=this._toBBox,s=n?t:h(t);m.clear();let a=N(s,this._data,i,m);for(a.children.push(t),g(a,s);i>=0&&m.data[i].children.length>this._maxEntries;)this._split(m,i),i--;P(s,m,i)}_split(t,i){let n=t.data[i],h=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,h);let a=this._chooseSplitIndex(n,s,h);if(!a)return;let r=n.children.splice(a,n.children.length-a),o=n.leaf?new x(r):new M(r);o.height=n.height,f(n,this._toBBox),f(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this._data=new M([t,i]),this._data.height=t.height+1,f(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let h,s,a;h=s=1/0;for(let r=i;r<=n-i;r++){let o=p(t,0,r,this._toBBox),c=p(t,r,n,this._toBBox),l=k(o,c),u=H(o)+H(c);l<h?(h=l,a=r,s=u<s?u:s):l===h&&u<s&&(s=u,a=r)}return a}_chooseSplitAxis(t,i,n){let h=t.leaf?this._compareMinX:q,s=t.leaf?this._compareMinY:v;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,s)&&t.children.sort(h)}_allDistMargin(t,i,n,h){t.children.sort(h);let s=this._toBBox,a=p(t,0,i,s),r=p(t,n-i,n,s),o=Y(a)+Y(r);for(let c=i;c<n-i;c++){let l=t.children[c];g(a,t.leaf?s(l):l),o+=Y(a)}for(let c=n-i-1;c>=i;c--){let l=t.children[c];g(r,t.leaf?s(l):l),o+=Y(r)}return o}_condense(t){for(let i=t.length-1;i>=0;i--){let n=t.data[i];if(n.children.length===0)if(i>0){let h=t.data[i-1],s=h.children;s.splice(F(s,n,s.length,h.indexHint),1)}else this.clear();else f(n,this._toBBox)}}_initFormat(t){let i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};function N(e,t,i,n){for(;n.push(t),t.leaf!==!0&&n.length-1!==i;){let h,s=1/0,a=1/0;for(let r=0,o=t.children.length;r<o;r++){let c=t.children[r],l=H(c),u=j(e,c)-l;u<a?(a=u,s=l<s?l:s,h=c):u===a&&l<s&&(s=l,h=c)}t=h||t.children[0]}return t}function O(e,t){let i=e;for(E.clear();i;){if(i.leaf===!0)for(let n of i.children)t(n);else E.pushArray(i.children);i=E.pop()??null}}function P(e,t,i){for(let n=i;n>=0;n--)g(t.data[n],e)}function f(e,t){p(e,0,e.children.length,t,e)}function p(e,t,i,n,h){h||(h=new x([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=t;a<i;a++)s=e.children[a],g(h,e.leaf?n(s):s);return h}function g(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function q(e,t){return e.minX-t.minX}function v(e,t){return e.minY-t.minY}function H(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function Y(e){return e.maxX-e.minX+(e.maxY-e.minY)}function j(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function k(e,t){let i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),h=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,h-i)*Math.max(0,s-n)}function S(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function B(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function I(e,t,i,n,h){let s=[t,i];for(;s.length;){let a=s.pop(),r=s.pop();if(a-r<=n)continue;let o=r+Math.ceil((a-r)/n/2)*n;A(e,o,r,a,h),s.push(r,o,o,a)}}var d=new _,E=new _,m=new _,w=new _({deallocator:void 0}),R=class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}},b=class extends R{constructor(){super(...arguments),this.height=1,this.indexHint=new y}},x=class extends b{constructor(t){super(),this.children=t,this.leaf=!0}},M=class extends b{constructor(t){super(),this.children=t,this.leaf=!1}};export{D as a};
