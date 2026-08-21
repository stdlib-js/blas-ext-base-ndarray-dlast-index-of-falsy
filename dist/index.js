"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=n(function(g,t){
var s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),v=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/ndarray-base-clip-index/dist'),x=require('@stdlib/blas-ext-base-dlast-index-of-falsy/dist').ndarray;function c(i){var r,e,a;return a=i[0],r=s(i[1]),e=v(a,0),r=l(r,e),r>=e&&(r=e-1),x(r+1,f(a),d(a,0),q(a))}t.exports=c
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
