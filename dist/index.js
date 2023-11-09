"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var s=v(function(b,u){
var p=require('@stdlib/utils-property-names/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),c=require('@stdlib/assert-is-nonenumerable-property/dist'),f=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/object-ctor/dist');function h(t){var r,n,e,o,a,i;if(t==null)return[];e=q(t),r=[],n={};do{for(o=p(e),i=0;i<o.length;i++)a=o[i],f(n,a)===!1&&c(e,a)&&r.push(a),n[a]=!0;e=m(e)}while(e);return r}u.exports=h
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
