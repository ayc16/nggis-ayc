function l(e){return e&&typeof e.highlight=="function"}function n(e,a,c){return e==null||e>=c&&(a===0||e<=a)}function u(e,a){if(a&&e){let{minScale:c,maxScale:t}=e;if(i(c,t))return n(a,c,t)}return!0}function i(e,a){return e!=null&&e>0||a!=null&&a>0}function r(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function o(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}export{l as a,n as b,u as c,r as d,o as e};
