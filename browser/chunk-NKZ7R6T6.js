import{e as a}from"./chunk-QBQKFGOZ.js";import{p as n}from"./chunk-F7PIPM6E.js";import{b as t}from"./chunk-UE2YGKE7.js";var u={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new n({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:t.WebMercator}),minus180Line:new n({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:t.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n({paths:[[[180,-180],[180,180]]],spatialReference:t.WGS84}),minus180Line:new n({paths:[[[-180,-180],[-180,180]]],spatialReference:t.WGS84})}};function l(e,r){return Math.ceil((e-r)/(2*r))}function h(e,r){let s=f(e);for(let o of s)for(let i of o)i[0]+=r;return e}function f(e){return a(e)?e.rings:e.paths}export{u as a,l as b,h as c,f as d};
