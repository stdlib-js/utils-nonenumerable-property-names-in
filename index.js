// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).nonEnumerablePropertyNamesIn=e()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyNames,e=Object.getOwnPropertyNames;function r(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return o&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;function c(t,e){return null!=t&&f.call(t,e)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var a,p=u()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[l],e=c(t,l);try{t[l]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[l]=r:delete t[l],n}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===p(t)}a=function(){return s(arguments)}();var y=a,b="function"==typeof Object.defineProperty?Object.defineProperty:null;var v,g=Object.defineProperty,d=Object.prototype,j=d.toString,h=d.__defineGetter__,m=d.__defineSetter__,w=d.__lookupGetter__,O=d.__lookupSetter__;v=function(){try{return b({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(w.call(t,e)||O.call(t,e)?(n=t.__proto__,t.__proto__=d,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&h&&h.call(t,e,r.get),i&&m&&m.call(t,e,r.set),t};var _=v;function S(t,e,r){_(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function P(t){return"string"==typeof t}var E=String.prototype.valueOf;var I=u();function T(t){return"object"==typeof t&&(t instanceof String||(I?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object String]"===p(t)))}function A(t){return P(t)||T(t)}function N(t){return"number"==typeof t}S(A,"isPrimitive",P),S(A,"isObject",T);var k=Number,x=k.prototype.toString;var B=u();function V(t){return"object"==typeof t&&(t instanceof k||(B?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===p(t)))}function F(t){return N(t)||V(t)}function L(t){return t!=t}function G(t){return N(t)&&L(t)}function Y(t){return V(t)&&L(t.valueOf())}function C(t){return G(t)||Y(t)}S(F,"isPrimitive",N),S(F,"isObject",V),S(C,"isPrimitive",G),S(C,"isObject",Y);var M=Number.POSITIVE_INFINITY,X=k.NEGATIVE_INFINITY,H=Math.floor;function W(t){return H(t)===t}function D(t){return t<M&&t>X&&W(t)}function R(t){return N(t)&&D(t)}function U(t){return V(t)&&D(t.valueOf())}function q(t){return R(t)||U(t)}S(q,"isPrimitive",R),S(q,"isObject",U);var z=Object.prototype.propertyIsEnumerable;var J,K=!z.call("beep","0");function Q(t,e){var r;return null!=t&&(!(r=z.call(t,e))&&K&&A(t)?!G(e=+e)&&R(e)&&e>=0&&e<t.length:r)}J=Array.isArray?Array.isArray:function(t){return"[object Array]"===p(t)};var Z,$=J;Z=y?s:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=4294967295&&c(t,"callee")&&!Q(t,"callee")};var tt=Z,et=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}var nt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!$(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(rt);S(rt,"isObjectLikeArray",nt);var ot=Q((function(){}),"prototype"),ut=!Q({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=9007199254740991}function ft(t,e,r){var n,o;if(!it(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(C(e)){for(;o<n;o++)if(C(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ct=/./;function lt(t){return"boolean"==typeof t}var at=Boolean.prototype.toString;var pt=u();function st(t){return"object"==typeof t&&(t instanceof Boolean||(pt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===p(t)))}function yt(t){return lt(t)||st(t)}function bt(){return new Function("return this;")()}S(yt,"isPrimitive",lt),S(yt,"isObject",st);var vt="object"==typeof self?self:null,gt="object"==typeof window?window:null,dt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},jt="object"==typeof dt?dt:null;var ht=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return bt()}if(vt)return vt;if(gt)return gt;if(jt)return jt;throw new Error("unexpected error. Unable to resolve global object.")}(),mt=ht.document&&ht.document.childNodes,wt=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var _t=/^\s*function\s*([^(]*)/i;function St(t){var e,r,n,o;if(("Object"===(r=p(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=_t.exec(n.toString()))return e[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}S(Ot,"REGEXP",_t);var Pt="function"==typeof ct||"object"==typeof wt||"function"==typeof mt?function(t){return St(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?St(t).toLowerCase():e};function Et(t){return t.constructor&&t.constructor.prototype===t}var It=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Tt="undefined"==typeof window?void 0:window;var At=function(){var t;if("undefined"===Pt(Tt))return!1;for(t in Tt)try{-1===ft(It,t)&&c(Tt,t)&&null!==Tt[t]&&"object"===Pt(Tt[t])&&Et(Tt[t])}catch(t){return!0}return!1}(),Nt="undefined"!=typeof window;var kt,xt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];kt=n?function(){return 2!==(r(arguments)||"").length}(1,2)?function(t){return tt(t)?r(et.call(t)):r(t)}:r:function(t){var e,r,n,o,u,i,f;if(o=[],tt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!c(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;r=ot&&n}for(u in t)r&&"prototype"===u||!c(t,u)||o.push(String(u));if(ut)for(e=function(t){if(!1===Nt&&!At)return Et(t);try{return Et(t)}catch(t){return!1}}(t),f=0;f<xt.length;f++)i=xt[f],e&&"constructor"===i||!c(t,i)||o.push(String(i));return o};var Bt,Vt=kt;Bt=t?function(t){return e(Object(t))}:function(t){return Vt(Object(t))};var Ft=Bt;var Lt,Gt,Yt=Object.getPrototypeOf;Gt=Object.getPrototypeOf,Lt="function"===Pt(Gt)?Yt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===p(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ct=Lt;function Mt(t){return null==t?null:(t=Object(t),Ct(t))}function Xt(t,e){return!1!==c(t,e)&&!1===Q(t,e)}var Ht=Object;return function(t){var e,r,n,o,u,i;if(null==t)return[];n=Ht(t),e=[],r={};do{for(o=Ft(n),i=0;i<o.length;i++)!1===c(r,u=o[i])&&Xt(n,u)&&e.push(u),r[u]=!0;n=Mt(n)}while(n);return e}}));
//# sourceMappingURL=index.js.map
