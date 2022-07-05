// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=void 0!==Object.getOwnPropertyNames,r=Object.getOwnPropertyNames;function e(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return o&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function f(t,r){return null!=t&&c.call(t,r)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var a=u()?function(t){var r,e,n;if(null==t)return i.call(t);e=t[l],r=f(t,l);try{t[l]=void 0}catch(r){return i.call(t)}return n=i.call(t),r?t[l]=e:delete t[l],n}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===a(t)}var s=function(){return p(arguments)}(),y="function"==typeof Object.defineProperty?Object.defineProperty:null;var b,v=Object.defineProperty,g=Object.prototype,d=g.toString,j=g.__defineGetter__,h=g.__defineSetter__,m=g.__lookupGetter__,w=g.__lookupSetter__;b=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?v:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===d.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(t,r)||w.call(t,r)?(n=t.__proto__,t.__proto__=g,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&j&&j.call(t,r,e.get),i&&h&&h.call(t,r,e.set),t};var O=b;function _(t,r,e){O(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function S(t){return"string"==typeof t}var P=String.prototype.valueOf;var E=u();function I(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object String]"===a(t)))}function T(t){return S(t)||I(t)}function A(t){return"number"==typeof t}_(T,"isPrimitive",S),_(T,"isObject",I);var N=Number,k=N.prototype.toString;var B=u();function V(t){return"object"==typeof t&&(t instanceof N||(B?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===a(t)))}function x(t){return A(t)||V(t)}function F(t){return t!=t}function L(t){return A(t)&&F(t)}function G(t){return V(t)&&F(t.valueOf())}function Y(t){return L(t)||G(t)}_(x,"isPrimitive",A),_(x,"isObject",V),_(Y,"isPrimitive",L),_(Y,"isObject",G);var C=Number.POSITIVE_INFINITY,M=N.NEGATIVE_INFINITY,X=Math.floor;function H(t){return X(t)===t}function W(t){return t<C&&t>M&&H(t)}function D(t){return A(t)&&W(t)}function R(t){return V(t)&&W(t.valueOf())}function U(t){return D(t)||R(t)}_(U,"isPrimitive",D),_(U,"isObject",R);var q=Object.prototype.propertyIsEnumerable;var z,J=!q.call("beep","0");function K(t,r){var e;return null!=t&&(!(e=q.call(t,r))&&J&&T(t)?!L(r=+r)&&D(r)&&r>=0&&r<t.length:e)}z=Array.isArray?Array.isArray:function(t){return"[object Array]"===a(t)};var Q,Z=z;Q=s?p:function(t){return null!==t&&"object"==typeof t&&!Z(t)&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=4294967295&&f(t,"callee")&&!K(t,"callee")};var $=Q,tt=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}var et=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Z(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rt);_(rt,"isObjectLikeArray",et);var nt=K((function(){}),"prototype"),ot=!K({toString:null},"toString");function ut(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,r,e){var n,o;if(!ut(t)&&!S(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!D(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Y(r)){for(;o<n;o++)if(Y(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ct=/./;function ft(t){return"boolean"==typeof t}var lt=Boolean.prototype.toString;var at=u();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(at?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===a(t)))}function st(t){return ft(t)||pt(t)}function yt(){return new Function("return this;")()}_(st,"isPrimitive",ft),_(st,"isObject",pt);var bt="object"==typeof self?self:null,vt="object"==typeof window?window:null,gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dt="object"==typeof gt?gt:null;var jt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(bt)return bt;if(vt)return vt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=jt.document&&jt.document.childNodes,mt=Int8Array;function wt(){return/^\s*function\s*([^(]*)/i}var Ot=/^\s*function\s*([^(]*)/i;function _t(t){var r,e,n,o;if(("Object"===(e=a(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Ot.exec(n.toString()))return r[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}_(wt,"REGEXP",Ot);var St="function"==typeof ct||"object"==typeof mt||"function"==typeof ht?function(t){return _t(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?_t(t).toLowerCase():r};function Pt(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var Tt=function(){var t;if("undefined"===St(It))return!1;for(t in It)try{-1===it(Et,t)&&f(It,t)&&null!==It[t]&&"object"===St(It[t])&&Pt(It[t])}catch(t){return!0}return!1}(),At="undefined"!=typeof window;var Nt,kt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Nt=n?function(){return 2!==(e(arguments)||"").length}(1,2)?function(t){return $(t)?e(tt.call(t)):e(t)}:e:function(t){var r,e,n,o,u,i,c;if(o=[],$(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!f(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;e=nt&&n}for(u in t)e&&"prototype"===u||!f(t,u)||o.push(String(u));if(ot)for(r=function(t){if(!1===At&&!Tt)return Pt(t);try{return Pt(t)}catch(t){return!1}}(t),c=0;c<kt.length;c++)i=kt[c],r&&"constructor"===i||!f(t,i)||o.push(String(i));return o};var Bt,Vt=Nt;Bt=t?function(t){return r(Object(t))}:function(t){return Vt(Object(t))};var xt=Bt;var Ft,Lt,Gt=Object.getPrototypeOf;Lt=Object.getPrototypeOf,Ft="function"===St(Lt)?Gt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===a(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Yt=Ft;function Ct(t){return null==t?null:(t=Object(t),Yt(t))}function Mt(t,r){return!1!==f(t,r)&&!1===K(t,r)}function Xt(t){var r,e,n,o,u,i;if(null==t)return[];n=Object(t),r=[],e={};do{for(o=xt(n),i=0;i<o.length;i++)!1===f(e,u=o[i])&&Mt(n,u)&&r.push(u),e[u]=!0;n=Ct(n)}while(n);return r}export{Xt as default};
//# sourceMappingURL=mod.js.map
