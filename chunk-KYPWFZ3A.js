import{a as r}from"./chunk-JLQZQQTG.js";import{a as t}from"./chunk-DKS57BVI.js";function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function d(e){return t.extendedSpatialReferenceInfo(e)}function g(e,n){return t.clip(r,i(e),e,n)}function h(e,n){return t.cut(r,i(e),e,n)}function m(e,n){return t.contains(r,i(e),e,n)}function w(e,n){return t.crosses(r,i(e),e,n)}function R(e,n,a){return t.distance(r,i(e),e,n,a)}function x(e,n){return t.equals(r,i(e),e,n)}function y(e,n){return t.intersects(r,i(e),e,n)}function S(e,n){return t.touches(r,i(e),e,n)}function A(e,n){return t.within(r,i(e),e,n)}function D(e,n){return t.disjoint(r,i(e),e,n)}function L(e,n){return t.overlaps(r,i(e),e,n)}function T(e,n,a){return t.relate(r,i(e),e,n,a)}function V(e){return t.isSimple(r,i(e),e)}function v(e){return t.simplify(r,i(e),e)}function z(e,n=!1){return t.convexHull(r,i(e),e,n)}function H(e,n){return t.difference(r,i(e),e,n)}function I(e,n){return t.symmetricDifference(r,i(e),e,n)}function J(e,n){return t.intersect(r,i(e),e,n)}function N(e,n=null){return t.union(r,i(e),e,n)}function O(e,n,a,s,u,o){return t.offset(r,i(e),e,n,a,s,u,o)}function b(e,n,a,s=!1){return t.buffer(r,i(e),e,n,a,s)}function j(e,n,a,s,u,o){return t.geodesicBuffer(r,i(e),e,n,a,s,u,o)}function q(e,n,a=!0){return t.nearestCoordinate(r,i(e),e,n,a)}function B(e,n){return t.nearestVertex(r,i(e),e,n)}function C(e,n,a,s){return t.nearestVertices(r,i(e),e,n,a,s)}function f(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function E(e,n,a){if(e==null)throw new c;let s=e.spatialReference;if((a=a??f(e))==null)throw new c;let u=e.constructor.fromJSON(t.rotate(e,n,a));return u.spatialReference=s,u}function P(e,n){if(e==null)throw new c;let a=e.spatialReference;if((n=n??f(e))==null)throw new c;let s=e.constructor.fromJSON(t.flipHorizontal(e,n));return s.spatialReference=a,s}function G(e,n){if(e==null)throw new c;let a=e.spatialReference;if((n=n??f(e))==null)throw new c;let s=e.constructor.fromJSON(t.flipVertical(e,n));return s.spatialReference=a,s}function k(e,n,a,s){return t.generalize(r,i(e),e,n,a,s)}function K(e,n,a){return t.densify(r,i(e),e,n,a)}function M(e,n,a,s=0){return t.geodesicDensify(r,i(e),e,n,a,s)}function Q(e,n){return t.planarArea(r,i(e),e,n)}function U(e,n){return t.planarLength(r,i(e),e,n)}function W(e,n,a){return t.geodesicArea(r,i(e),e,n,a)}function X(e,n,a){return t.geodesicLength(r,i(e),e,n,a)}function Y(e,n){return t.intersectLinesToPoints(r,i(e),e,n)}function Z(e,n){t.changeDefaultSpatialReferenceTolerance(e,n)}function _(e){t.clearDefaultSpatialReferenceTolerance(e)}var c=class extends Error{constructor(){super("Illegal Argument Exception")}};export{d as a,g as b,h as c,m as d,w as e,R as f,x as g,y as h,S as i,A as j,D as k,L as l,T as m,V as n,v as o,z as p,H as q,I as r,J as s,N as t,O as u,b as v,j as w,q as x,B as y,C as z,E as A,P as B,G as C,k as D,K as E,M as F,Q as G,U as H,W as I,X as J,Y as K,Z as L,_ as M};