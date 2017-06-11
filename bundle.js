/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["tram-one"]=t():e["tram-one"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=32)}([function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";function r(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)o.call(n,r)&&(e[r]=n[r])}return e}e.exports=r;var o=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";(function(t){var r,o=void 0!==t?t:"undefined"!=typeof window?window:{},i=n(33);"undefined"!=typeof document?r=document:(r=o["__GLOBAL_DOCUMENT_CACHE@4"])||(r=o["__GLOBAL_DOCUMENT_CACHE@4"]=i),e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return e===h||e===m}function o(e){return w.test(e)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(16),a=1,c=2,f=3,l=4,s=5,p=6,d=7,y=8,h=9,m=10,g=11,v=12,b=13;e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:w("",e)}t||(t={});var w=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=u(e)),function(u){function S(e){var n=[];x===d&&(x=l);for(var o=0;o<e.length;o++){var i=e.charAt(o);x===a&&"<"===i?(E.length&&n.push([a,E]),E="",x=c):">"!==i||r(x)||x===b?x===b&&/-$/.test(E)&&"-"===i?(t.comments&&n.push([y,E.substr(0,E.length-1)],[f]),E="",x=a):x===c&&/^!--$/.test(E)?(t.comments&&n.push([c,E],[s,"comment"],[g]),E=i,x=b):x===a||x===b?E+=i:x===c&&/\s/.test(i)?(n.push([c,E]),E="",x=l):x===c?E+=i:x===l&&/[^\s"'=\/]/.test(i)?(x=s,E=i):x===l&&/\s/.test(i)?(E.length&&n.push([s,E]),n.push([v])):x===s&&/\s/.test(i)?(n.push([s,E]),E="",x=p):x===s&&"="===i?(n.push([s,E],[g]),E="",x=d):x===s?E+=i:x!==p&&x!==l||"="!==i?x!==p&&x!==l||/\s/.test(i)?x===d&&'"'===i?x=m:x===d&&"'"===i?x=h:x===m&&'"'===i?(n.push([y,E],[v]),E="",x=l):x===h&&"'"===i?(n.push([y,E],[v]),E="",x=l):x!==d||/\s/.test(i)?x===y&&/\s/.test(i)?(n.push([y,E],[v]),E="",x=l):x!==y&&x!==h&&x!==m||(E+=i):(x=y,o--):(n.push([v]),/[\w-]/.test(i)?(E+=i,x=s):x=l):(n.push([g]),x=d):(x===c?n.push([c,E]):x===s?n.push([s,E]):x===y&&E.length&&n.push([y,E]),n.push([f]),E="",x=a)}return x===a&&E.length?(n.push([a,E]),E=""):x===y&&E.length?(n.push([y,E]),E=""):x===m&&E.length?(n.push([y,E]),E=""):x===h&&E.length?(n.push([y,E]),E=""):x===s&&(n.push([s,E]),E=""),n}for(var x=a,E="",A=arguments.length,O=[],N=0;N<u.length;N++)if(N<A-1){var C=arguments[N+1],j=S(u[N]),T=x;T===m&&(T=y),T===h&&(T=y),T===d&&(T=y),T===l&&(T=s),j.push([0,T,C]),O.push.apply(O,j)}else O.push.apply(O,S(u[N]));for(var k=[null,{},[]],D=[[k,-1]],N=0;N<O.length;N++){var R=D[D.length-1][0],j=O[N],M=j[0];if(M===c&&/^\//.test(j[1])){var L=D[D.length-1][1];D.length>1&&(D.pop(),D[D.length-1][0][2][L]=e(R[0],R[1],R[2].length?R[2]:void 0))}else if(M===c){var q=[j[1],{},[]];R[2].push(q),D.push([q,R[2].length-1])}else if(M===s||0===M&&j[1]===s){for(var F,P="";N<O.length;N++)if(O[N][0]===s)P=w(P,O[N][1]);else{if(0!==O[N][0]||O[N][1]!==s)break;if("object"!==i(O[N][2])||P)P=w(P,O[N][2]);else for(F in O[N][2])O[N][2].hasOwnProperty(F)&&!R[1][F]&&(R[1][F]=O[N][2][F])}O[N][0]===g&&N++;for(var B=N;N<O.length;N++)if(O[N][0]===y||O[N][0]===s)R[1][P]?R[1][P]=w(R[1][P],O[N][1]):R[1][P]=n(O[N][1]);else{if(0!==O[N][0]||O[N][1]!==y&&O[N][1]!==s){!P.length||R[1][P]||N!==B||O[N][0]!==f&&O[N][0]!==v||(R[1][P]=P.toLowerCase());break}R[1][P]?R[1][P]=w(R[1][P],O[N][2]):R[1][P]=n(O[N][2])}}else if(M===s)R[1][j[1]]=!0;else if(0===M&&j[1]===s)R[1][j[2]]=!0;else if(M===f){if(o(R[0])&&D.length){var L=D[D.length-1][1];D.pop(),D[D.length-1][0][2][L]=e(R[0],R[1],R[2].length?R[2]:void 0)}}else if(0===M&&j[1]===a)void 0===j[2]||null===j[2]?j[2]="":j[2]||(j[2]=w("",j[2])),Array.isArray(j[2][0])?R[2].push.apply(R[2],j[2]):R[2].push(j[2]);else if(M===a)R[2].push(j[1]);else if(M!==g&&M!==v)throw new Error("unhandled: "+M)}if(k[2].length>1&&/^\s*$/.test(k[2][0])&&k[2].shift(),k[2].length>2||2===k[2].length&&/\S/.test(k[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(k[2][0])&&"string"==typeof k[2][0][0]&&Array.isArray(k[2][0][2])&&(k[2][0]=e(k[2][0][0],k[2][0][1],k[2][0][2])),k[2][0]}};var w=(Object.prototype.hasOwnProperty,RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"))},function(e,t,n){"use strict";(function(t){function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}function i(e){return Object.prototype.toString.call(e)}function u(e){return!o(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}function a(e){if(S.isFunction(e)){if(A)return e.name;var t=e.toString(),n=t.match(N);return n&&n[1]}}function c(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function f(e){if(A||!S.isFunction(e))return S.inspect(e);var t=a(e);return"[Function"+(t?": "+t:"")+"]"}function l(e){return c(f(e.actual),128)+" "+e.operator+" "+c(f(e.expected),128)}function s(e,t,n,r,o){throw new O.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function p(e,t){e||s(e,!0,t,"==",O.ok)}function d(e,t,n,a){if(e===t)return!0;if(o(e)&&o(t))return 0===r(e,t);if(S.isDate(e)&&S.isDate(t))return e.getTime()===t.getTime();if(S.isRegExp(e)&&S.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"===(void 0===e?"undefined":w(e))||null!==t&&"object"===(void 0===t?"undefined":w(t))){if(u(e)&&u(t)&&i(e)===i(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;a=a||{actual:[],expected:[]};var c=a.actual.indexOf(e);return-1!==c&&c===a.expected.indexOf(t)||(a.actual.push(e),a.expected.push(t),h(e,t,n,a))}return n?e===t:e==t}function y(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function h(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(S.isPrimitive(e)||S.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=y(e),i=y(t);if(o&&!i||!o&&i)return!1;if(o)return e=E.call(e),t=E.call(t),d(e,t,n);var u,a,c=C(e),f=C(t);if(c.length!==f.length)return!1;for(c.sort(),f.sort(),a=c.length-1;a>=0;a--)if(c[a]!==f[a])return!1;for(a=c.length-1;a>=0;a--)if(u=c[a],!d(e[u],t[u],n,r))return!1;return!0}function m(e,t,n){d(e,t,!0)&&s(e,t,n,"notDeepStrictEqual",m)}function g(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function v(e){var t;try{e()}catch(e){t=e}return t}function b(e,t,n,r){var o;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=v(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&s(o,n,"Missing expected exception"+r);var i="string"==typeof r,u=!e&&S.isError(o),a=!e&&o&&!n;if((u&&i&&g(o,n)||a)&&s(o,n,"Got unwanted exception"+r),e&&o&&n&&!g(o,n)||!e&&o)throw o}var w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=n(26),x=Object.prototype.hasOwnProperty,E=Array.prototype.slice,A=function(){return"foo"===function(){}.name}(),O=e.exports=p,N=/\s*function\s+([^\(\s]*)\s*/;O.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=l(this),this.generatedMessage=!0);var t=e.stackStartFunction||s;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,o=a(t),i=r.indexOf("\n"+o);if(i>=0){var u=r.indexOf("\n",i+1);r=r.substring(u+1)}this.stack=r}}},S.inherits(O.AssertionError,Error),O.fail=s,O.ok=p,O.equal=function(e,t,n){e!=t&&s(e,t,n,"==",O.equal)},O.notEqual=function(e,t,n){e==t&&s(e,t,n,"!=",O.notEqual)},O.deepEqual=function(e,t,n){d(e,t,!1)||s(e,t,n,"deepEqual",O.deepEqual)},O.deepStrictEqual=function(e,t,n){d(e,t,!0)||s(e,t,n,"deepStrictEqual",O.deepStrictEqual)},O.notDeepEqual=function(e,t,n){d(e,t,!1)&&s(e,t,n,"notDeepEqual",O.notDeepEqual)},O.notDeepStrictEqual=m,O.strictEqual=function(e,t,n){e!==t&&s(e,t,n,"===",O.strictEqual)},O.notStrictEqual=function(e,t,n){e===t&&s(e,t,n,"!==",O.notStrictEqual)},O.throws=function(e,t,n){b(!0,e,t,n)},O.doesNotThrow=function(e,t,n){b(!1,e,t,n)},O.ifError=function(e){if(e)throw e};var C=Object.keys||function(e){var t=[];for(var n in e)x.call(e,n)&&t.push(n);return t}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return!0===o(e)&&"[object Object]"===Object.prototype.toString.call(e)}var o=n(17);e.exports=function(e){var t,n;return!1!==r(e)&&("function"==typeof(t=e.constructor)&&(n=t.prototype,!1!==r(n)&&!1!==n.hasOwnProperty("isPrototypeOf")))}},function(e,t,n){"use strict";e.exports=n(14)},function(e,t,n){"use strict";function r(e,t){l[e][0]&&0===l[e][2]&&(l[e][0](t),l[e][2]=1)}function o(e,t){l[e][1]&&1===l[e][2]&&(l[e][1](t),l[e][2]=0)}function i(e,t,n){var r=e.target.getAttribute(p);if(u(e.oldValue,r))return void(l[r]=l[e.oldValue]);l[e.oldValue]&&n(e.oldValue,e.target),l[r]&&t(r,e.target)}function u(e,t){return!(!e||!t)&&l[e][3]===l[t][3]}function a(e,t){for(var n=Object.keys(l),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(p)){var o=e[r].getAttribute(p);n.forEach(function(n){o===n&&t(n,e[r])})}e[r].childNodes.length>0&&a(e[r].childNodes,t)}}var c=n(2),f=n(15),l=Object.create(null),s="onloadid"+(new Date%9e6).toString(36),p="data-"+s,d=0;if(f&&f.MutationObserver){new MutationObserver(function(e){if(!(Object.keys(l).length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==p?(a(e[t].removedNodes,o),a(e[t].addedNodes,r)):i(e[t],r,o)}).observe(c.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[p]})}e.exports=function e(t,n,r,o){return n=n||function(){},r=r||function(){},t.setAttribute(p,"o"+d),l["o"+d]=[n,r,0,o||e.caller],d+=1,t}},function(e,t,n){"use strict";function r(e,t,n){function i(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(Array.isArray(n))i(n);else{if(("number"==typeof n||"boolean"==typeof n||"function"==typeof n||n instanceof Date||n instanceof RegExp)&&(n=n.toString()),"string"==typeof n){if(p.lastChild&&"#text"===p.lastChild.nodeName){p.lastChild.nodeValue+=n;continue}n=o.createTextNode(n)}n&&n.nodeType&&p.appendChild(n)}}}var p;-1!==s.indexOf(e)&&(t.namespace=a);var d=!1;if(t.namespace&&(d=t.namespace,delete t.namespace),d)p=o.createElementNS(d,e);else{if(e===l)return o.createComment(t.comment);p=o.createElement(e)}if(t.onload||t.onunload){var y=t.onload||function(){},h=t.onunload||function(){};u(p,function(){y(p)},function(){h(p)},r.caller.caller.caller),delete t.onload,delete t.onunload}for(var m in t)if(t.hasOwnProperty(m)){var g=m.toLowerCase(),v=t[m];if("classname"===g&&(g="class",m="class"),"htmlFor"===m&&(m="for"),f[g])if("true"===v)v=g;else if("false"===v)continue;"on"===g.slice(0,2)?p[m]=v:d?"xlink:href"===m?p.setAttributeNS(c,m,v):/^xmlns($|:)/i.test(m)||p.setAttributeNS(null,m,v):p.setAttribute(m,v)}return i(n),p}var o=n(2),i=n(3),u=n(7),a="http://www.w3.org/2000/svg",c="http://www.w3.org/1999/xlink",f={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},l="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=i(r,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=r},function(e,t,n){"use strict";e.exports={createStore:n(21),combineReducers:n(20),bindActionCreators:n(19),applyMiddleware:n(18),compose:n(6)}},function(e,t,n){"use strict";function r(e){function t(e,t){e=e.replace(/^[#\/]/,""),r.on(e,t)}function n(e){return i?(e=o(e,a),e===f?c():(f=e,(c=r(e))())):r(e)}e=e||{};var r=u(e.default||"/404"),i=e.curry||!1,c=null,f=null;return n.on=t,n}function o(e,t){return e=t?e.replace(c,""):e.replace(f,""),e.replace(s,"").replace(l,"/")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(27),a=/file:\/\//.test("object"===("undefined"==typeof window?"undefined":i(window))&&window.location&&window.location.origin),c=new RegExp("^(file://|/)(.*.html?/?)?"),f=new RegExp("^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"),l=new RegExp("#"),s=new RegExp("[?].*$");e.exports=r},function(e,t,n){"use strict";var r=n(3);e.exports=function(e,t){var n=function(n,r,o){var i=t[n];return i?i(r,o):e(n,r,o)},o=r(n);return o.h=n,o}},function(e,t,n){"use strict";var r=n(30),o=n(22),i=n(31);e.exports=r,e.exports.update=function(e,t,n){function r(e,t){for(var r=n.events||i,o=0;o<r.length;o++){var u=r[o];t[u]?e[u]=t[u]:e[u]&&(e[u]=void 0)}var a=e.value,c=t.value;"INPUT"===e.nodeName&&"file"!==e.type||"SELECT"===e.nodeName?c||t.hasAttribute("value")?c!==a&&(e.value=c):t.value=e.value:"TEXTAREA"===e.nodeName&&null===t.getAttribute("value")&&(e.value=t.value)}return n||(n={}),!1!==n.events&&(n.onBeforeElUpdated||(n.onBeforeElUpdated=r)),o(e,t,n)}},function(e,t,n){"use strict";function r(e,t){return function(){return t.apply(this,e.concat.apply(e,arguments))}}function o(e,t){return function(){return t.apply(this,[].slice.call(arguments).concat(e))}}function i(e,t,n){return function(){return n.apply(this,e.concat.apply(e,arguments).concat(t))}}function u(e){return r([].slice.call(arguments,1),e)}function a(e){return o([].slice.call(arguments,1),e)}function c(e){return u(u,e)}t=e.exports=r,t.pa=o,t.apa=i,t.partial=u,t.partialRight=a,t.curry=c,t.curryRight=function(e){return u(a,e)}},function(e,t,n){"use strict";(function(t){function r(){return s.call(arguments).reduce(o)}function o(e,t){return l(i,t,e)}function i(e,t){var n=e.apply(this,s.call(arguments,2));return Array.isArray(n)?t.apply(this,n):t.call(this,n)}function u(){return a(s.call(arguments))}function a(e){function t(){var n=s.call(arguments),u=e[i--],a=u.length-1,c=n.length;c<a&&(c=a),n[c]=-1===i?o:t,u.apply(r,n)}function n(){var n=s.call(arguments),u=e[i--],a=u.length-1,c=n.length,f=n[c-1];r=this,"function"==typeof f&&(o=f.bind(r),n.pop(),c--),c<a&&(c=a),n[c]=t,u.apply(r,n)}var r,o,i=e.length-1;return n}function c(){function e(){var e=[].slice.call(arguments);e.push(f),t.apply({},e)}var t=u.apply(null,arguments);return e}function f(){}var l=n(13).partial,s=Array.prototype.slice;void 0===t&&window;r.async=u,r.cc=c,e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var n;n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return function(t,n,r){for(var i in n)i in o&&(n[o[i]]=n[i],delete n[i]);return e(t,n,r)}}e.exports=r;var o={class:"className",for:"htmlFor","http-equiv":"httpEquiv"}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){return null!=e&&"object"===(void 0===e?"undefined":r(e))&&!1===Array.isArray(e)}},function(e,t,n){"use strict";var r=n(6),o=n(1);e.exports=function(){var e=[].slice.call(arguments);return function(t){return function(n,i,u){var a=t(n,i,u),c=[],f={getState:a.getState,dispatch:function(e){return l(e)}};c=e.map(function(e){return e(f)});var l=r.apply(null,c)(a.dispatch);return o(a,{dispatch:l})}}}},function(e,t,n){"use strict";function r(e,t){return function(){t(e.apply(null,arguments))}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e,t){if("function"==typeof e)return r(e,t);if("object"!==(void 0===e?"undefined":o(e))||null===e)throw new Error("actionCreators must be a function or object with functions");for(var n=Object.keys(e),i={},u=0;u<n.length;u++){var a=n[u],c=e[a];"function"==typeof c&&(i[a]=r(c,t))}return i}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e){if(!e||!r(e))throw new Error("reducers argument must be an object with reducer methods");var t=Object.keys(e);return function(n,r){for(var o=!1,i={},u=0;u<t.length;u++){var a=t[u];if("function"!=typeof e[a])throw new Error("reducer "+a+"must be a function");i[a]=e[a](n[a],r),o=o||i[a]!==n[a]}return o?i:n}}},function(e,t,n){"use strict";var r=n(5);e.exports=function e(t,n,o){function i(e){if(!e||!r(e))throw new Error("action parameter is required and must be a plain object");if(!e.type||"string"!=typeof e.type)throw new Error("type property of action is required and must be a string");if(s)throw new Error("modifiers may not emit actions");return s=!0,f=t(f,e),l&&l(f),s=!1,e}function u(e){if(!e||"function"!=typeof e)throw new Error("listener must be a function");l=e}function a(e){if("function"!=typeof e)throw new Error("new reducer must be a function");t=e}function c(){return f}if(!t||"function"!=typeof t)throw new Error("reducer must be a function");if("function"==typeof n&&void 0===o&&(o=n,n=void 0),void 0!==o){if("function"!=typeof o)throw new Error("enhancer must be a function.");return o(e)(t,n)}n=n||{};var f=n,l=null,s=!1;return i({type:"@@minidux/INIT"}),{dispatch:i,subscribe:u,getState:c,replaceReducer:a}}},function(e,t,n){"use strict";function r(e){!s&&y.createRange&&(s=y.createRange(),s.selectNode(y.body));var t;return s&&s.createContextualFragment?t=s.createContextualFragment(e):(t=y.createElement("body"),t.innerHTML=e),t.childNodes[0]}function o(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function i(e,t){return t&&t!==d?y.createElementNS(t,e):y.createElement(e)}function u(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function a(e,t){var n,r,o,i,u,a=t.attributes;for(n=a.length-1;n>=0;--n)r=a[n],o=r.name,i=r.namespaceURI,u=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==u&&e.setAttributeNS(i,o,u)):e.getAttribute(o)!==u&&e.setAttribute(o,u);for(a=e.attributes,n=a.length-1;n>=0;--n)r=a[n],!1!==r.specified&&(o=r.name,i=r.namespaceURI,i?(o=r.localName||o,m(t,i,o)||e.removeAttributeNS(i,o)):m(t,null,o)||e.removeAttribute(o))}function c(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}function f(){}function l(e){return e.id}var s,p,d="http://www.w3.org/1999/xhtml",y="undefined"==typeof document?void 0:document,h=y?y.body||y.createElement("div"):{};p=h.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:h.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};var m=p,g={OPTION:function(e,t){c(e,t,"selected")},INPUT:function(e,t){c(e,t,"checked"),c(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),m(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!m(t,null,"multiple")){for(var n=0,r=t.firstChild;r;){var o=r.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(m(r,null,"selected")){n;break}n++}r=r.nextSibling}e.selectedIndex=n}}},v=1,b=3,w=8,S=function(e){return function(t,n,a){function c(e){x?x.push(e):x=[e]}function s(e,t){if(e.nodeType===v)for(var n=e.firstChild;n;){var r=void 0;t&&(r=E(n))?c(r):(T(n),n.firstChild&&s(n,t)),n=n.nextSibling}}function p(e,t,n){!1!==j(e)&&(t&&t.removeChild(e),T(e),s(e,n))}function d(e){if(e.nodeType===v)for(var t=e.firstChild;t;){var n=E(t);n&&(R[n]=t),d(t),t=t.nextSibling}}function h(e){O(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=E(t);if(r){var i=R[r];i&&o(t,i)&&(t.parentNode.replaceChild(i,t),m(i,t))}h(t),t=n}}function m(r,i,u){var a,f=E(i);if(f&&delete R[f],!n.isSameNode||!n.isSameNode(t)){if(!u){if(!1===N(r,i))return;if(e(r,i),C(r),!1===k(r,i))return}if("TEXTAREA"!==r.nodeName){var l,s,d,S,x=i.firstChild,O=r.firstChild;e:for(;x;){for(d=x.nextSibling,l=E(x);O;){if(s=O.nextSibling,x.isSameNode&&x.isSameNode(O)){x=d,O=s;continue e}a=E(O);var j=O.nodeType,T=void 0;if(j===x.nodeType&&(j===v?(l?l!==a&&((S=R[l])?O.nextSibling===S?T=!1:(r.insertBefore(S,O),s=O.nextSibling,a?c(a):p(O,r,!0),O=S):T=!1):a&&(T=!1),(T=!1!==T&&o(O,x))&&m(O,x)):j!==b&&j!=w||(T=!0,O.nodeValue=x.nodeValue)),T){x=d,O=s;continue e}a?c(a):p(O,r,!0),O=s}if(l&&(S=R[l])&&o(S,x))r.appendChild(S),m(S,x);else{var D=A(x);!1!==D&&(D&&(x=D),x.actualize&&(x=x.actualize(r.ownerDocument||y)),r.appendChild(x),h(x))}x=d,O=s}for(;O;)s=O.nextSibling,(a=E(O))?c(a):p(O,r,!0),O=s}var M=g[r.nodeName];M&&M(r,i)}}if(a||(a={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var S=n;n=y.createElement("html"),n.innerHTML=S}else n=r(n);var x,E=a.getNodeKey||l,A=a.onBeforeNodeAdded||f,O=a.onNodeAdded||f,N=a.onBeforeElUpdated||f,C=a.onElUpdated||f,j=a.onBeforeNodeDiscarded||f,T=a.onNodeDiscarded||f,k=a.onBeforeElChildrenUpdated||f,D=!0===a.childrenOnly,R={};d(t);var M=t,L=M.nodeType,q=n.nodeType;if(!D)if(L===v)q===v?o(t,n)||(T(t),M=u(t,i(n.nodeName,n.namespaceURI))):M=n;else if(L===b||L===w){if(q===L)return M.nodeValue=n.nodeValue,M;M=n}if(M===n)T(t);else if(m(M,n,D),x)for(var F=0,P=x.length;F<P;F++){var B=R[x[F]];B&&p(B,B.parentNode,!1)}return!D&&M!==t&&t.parentNode&&(M.actualize&&(M=M.actualize(t.ownerDocument||y)),t.parentNode.replaceChild(M,t)),M}}(a);e.exports=S},function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(s===setTimeout)return setTimeout(e,0);if((s===r||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){m&&y&&(m=!1,y.length?h=y.concat(h):g=-1,h.length&&c())}function c(){if(!m){var e=i(a);m=!0;for(var t=h.length;t;){for(y=h,h=[];++g<t;)y&&y[g].run();g=-1,t=h.length}y=null,m=!1,u(e)}}function f(e,t){this.fun=e,this.array=t}function l(){}var s,p,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:r}catch(e){s=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var y,h=[],m=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new f(e,t)),1!==h.length||m||i(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t,n){"use strict";(function(e,r){function o(e,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),S(r.showHidden)&&(r.showHidden=!1),S(r.depth)&&(r.depth=2),S(r.colors)&&(r.colors=!1),S(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),c(r,e,r.depth)}function i(e,t){var n=o.styles[t];return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function u(e,t){return e}function a(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function c(e,n,r){if(e.customInspect&&n&&N(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=c(e,o,r)),o}var i=f(e,n);if(i)return i;var u=Object.keys(n),h=a(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),O(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(N(n)){var m=n.name?": "+n.name:"";return e.stylize("[Function"+m+"]","special")}if(x(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(A(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return l(n)}var g="",v=!1,w=["{","}"];if(y(n)&&(v=!0,w=["[","]"]),N(n)){g=" [Function"+(n.name?": "+n.name:"")+"]"}if(x(n)&&(g=" "+RegExp.prototype.toString.call(n)),A(n)&&(g=" "+Date.prototype.toUTCString.call(n)),O(n)&&(g=" "+l(n)),0===u.length&&(!v||0==n.length))return w[0]+g+w[1];if(r<0)return x(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var S;return S=v?s(e,n,r,h,u):u.map(function(t){return p(e,n,r,h,t,v)}),e.seen.pop(),d(S,g,w)}function f(e,t){if(S(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function s(e,t,n,r,o){for(var i=[],u=0,a=t.length;u<a;++u)D(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}function p(e,t,n,r,o,i){var u,a,f;if(f=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},f.get?a=f.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):f.set&&(a=e.stylize("[Setter]","special")),D(r,o)||(u="["+o+"]"),a||(e.seen.indexOf(f.value)<0?(a=m(n)?c(e,f.value,null):c(e,f.value,n-1),a.indexOf("\n")>-1&&(a=i?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),S(u)){if(i&&o.match(/^\d+$/))return a;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+a}function d(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function y(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function m(e){return null===e}function g(e){return null==e}function v(e){return"number"==typeof e}function b(e){return"string"==typeof e}function w(e){return"symbol"===(void 0===e?"undefined":R(e))}function S(e){return void 0===e}function x(e){return E(e)&&"[object RegExp]"===j(e)}function E(e){return"object"===(void 0===e?"undefined":R(e))&&null!==e}function A(e){return E(e)&&"[object Date]"===j(e)}function O(e){return E(e)&&("[object Error]"===j(e)||e instanceof Error)}function N(e){return"function"==typeof e}function C(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"===(void 0===e?"undefined":R(e))||void 0===e}function j(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}function k(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(o(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,i=r.length,u=String(e).replace(M,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<i;a=r[++n])m(a)||!E(a)?u+=" "+a:u+=" "+o(a);return u},t.deprecate=function(n,o){function i(){if(!u){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),u=!0}return n.apply(this,arguments)}if(S(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var u=!1;return i};var L,q={};t.debuglog=function(e){if(S(L)&&(L=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!q[e])if(new RegExp("\\b"+e+"\\b","i").test(L)){var n=r.pid;q[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else q[e]=function(){};return q[e]},t.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=h,t.isNull=m,t.isNullOrUndefined=g,t.isNumber=v,t.isString=b,t.isSymbol=w,t.isUndefined=S,t.isRegExp=x,t.isObject=E,t.isDate=A,t.isError=O,t.isFunction=N,t.isPrimitive=C,t.isBuffer=n(25);var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",k(),t.format.apply(t,arguments))},t.inherits=n(24),t._extend=function(e,t){if(!t||!E(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(t,n(0),n(23))},function(e,t,n){"use strict";function r(e){function t(e,t){if(i.equal(void 0===e?"undefined":o(e),"string"),i.equal(void 0===t?"undefined":o(t),"function"),e=e||"/",t&&t._wayfarer&&t._trie)c.mount(e,t._trie.trie);else{c.create(e).cb=t}return n}function n(e){i.notEqual(e,void 0,"'route' must be defined");for(var t=new Array(arguments.length),n=1;n<t.length;n++)t[n]=arguments[n];var r=c.match(e);if(r&&r.cb)return t[0]=r.params,r.cb.apply(null,t);var o=c.match(a);if(o&&o.cb)return t[0]=o.params,o.cb.apply(null,t);throw new Error("route '"+e+"' did not match")}if(!(this instanceof r))return new r(e);var a=(e||"").replace(/^\//,""),c=u();return n._trie=c,n.emit=n,n.on=t,n._wayfarer=!0,n}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(4),u=n(28);e.exports=r},function(e,t,n){"use strict";function r(){if(!(this instanceof r))return new r;this.trie={nodes:{}}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(29),u=n(4),a=n(1);e.exports=r,r.prototype.create=function(e){u.equal(void 0===e?"undefined":o(e),"string","route should be a string");var t=e.replace(/^\//,"").split("/");return function e(n,r){var o=t[n];if(void 0===o)return r;var i=null;return/^:|^\*/.test(o)?(r.nodes.$$?i=r.nodes.$$:(i={nodes:{}},r.nodes.$$=i),"*"===o[0]&&(r.wildcard=!0),r.name=o.replace(/^:|^\*/,"")):r.nodes[o]?i=r.nodes[o]:(i={nodes:{}},r.nodes[o]=i),e(n+1,i)}(0,this.trie)},r.prototype.match=function(e){u.equal(void 0===e?"undefined":o(e),"string","route should be a string");var t=e.replace(/^\//,"").split("/"),n={},r=function e(r,o){if(void 0!==o){var i=t[r];return void 0===i?o:o.nodes[i]?e(r+1,o.nodes[i]):o.wildcard?(n.wildcard=decodeURIComponent(t.slice(r).join("/")),o.nodes.$$):o.name?(n[o.name]=decodeURIComponent(i),e(r+1,o.nodes.$$)):e(r+1)}}(0,this.trie);if(r)return r=a(r),r.params=n,r},r.prototype.mount=function(e,t){u.equal(void 0===e?"undefined":o(e),"string","route should be a string"),u.equal(void 0===t?"undefined":o(t),"object","trie should be a object");var n=e.replace(/^\//,"").split("/"),r=null,a=null;if(1===n.length)a=n[0],r=this.create(a);else{var c=n.splice(0,n.length-1),f=c.join("/");a=n[0],r=this.create(f)}i(r.nodes,t.nodes),t.name&&(r.name=t.name),r.nodes[""]&&(Object.keys(r.nodes[""]).forEach(function(e){"nodes"!==e&&(r[e]=r.nodes[""][e])}),i(r.nodes,r.nodes[""].nodes),delete r.nodes[""].nodes)}},function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)o.call(n,r)&&(e[r]=n[r])}return e}e.exports=r;var o=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";function r(e,t,n){function i(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(Array.isArray(n))i(n);else{if(("number"==typeof n||"boolean"==typeof n||"function"==typeof n||n instanceof Date||n instanceof RegExp)&&(n=n.toString()),"string"==typeof n){if(p.lastChild&&"#text"===p.lastChild.nodeName){p.lastChild.nodeValue+=n;continue}n=o.createTextNode(n)}n&&n.nodeType&&p.appendChild(n)}}}var p;-1!==s.indexOf(e)&&(t.namespace=a);var d=!1;if(t.namespace&&(d=t.namespace,delete t.namespace),d)p=o.createElementNS(d,e);else{if(e===l)return o.createComment(t.comment);p=o.createElement(e)}if(t.onload||t.onunload){var y=t.onload||function(){},h=t.onunload||function(){};u(p,function(){y(p)},function(){h(p)},r.caller.caller.caller),delete t.onload,delete t.onunload}for(var m in t)if(t.hasOwnProperty(m)){var g=m.toLowerCase(),v=t[m];if("classname"===g&&(g="class",m="class"),"htmlFor"===m&&(m="for"),f[g])if("true"===v)v=g;else if("false"===v)continue;"on"===g.slice(0,2)?p[m]=v:d?"xlink:href"===m?p.setAttributeNS(c,m,v):/^xmlns($|:)/i.test(m)||p.setAttributeNS(null,m,v):p.setAttribute(m,v)}return i(n),p}var o=n(2),i=n(3),u=n(7),a="http://www.w3.org/2000/svg",c="http://www.w3.org/1999/xlink",f={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},l="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=i(r,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=r},function(e,t,n){"use strict";e.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=n(10),a=n(8).createElement,c=n(11),f=n(9),l=n(12).update,s=function(){function e(t){r(this,e),t=t||{};var n=t.defaultRoute||"/404";this.router=u({default:n}),this.reducers={},this.state={},this.store={}}return o(e,[{key:"addReducer",value:function(e,t,n){this.reducers[e]=t,this.state[e]=n}},{key:"addRoute",value:function(e,t){var n=this;this.router.on(e,function(e){return function(r){var o=i(r,{dispatch:n.store.dispatch},e);return t(o)}})}},{key:"start",value:function(e,t){var n=this,r=f.combineReducers(this.reducers);this.store=f.createStore(r,this.state),this.store.subscribe(function(r){n.mount(e,t,r)}),this.mount(e,t,this.store.getState())}},{key:"mount",value:function(e,t,n){var r="string"==typeof e?document.querySelector(e):e;if(!r.firstElementChild){var o=document.createElement("div");r.appendChild(o)}var i=r.firstElementChild,u=t||window.location.href.replace(window.location.origin,"");l(i,this.toNode(u,n))}},{key:"toNode",value:function(e,t){return this.router(e)(t||this.state)}},{key:"toString",value:function(e,t){return this.toNode(e,t).outerHTML}}],[{key:"html",value:function(e){return c(a,e||{})}}]),e}();e.exports=s},function(e,t){}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const row = __webpack_require__(3)
const html = Tram.html({row})

const twoColGrid = `
  display: flex;
  flex-flow: wrap-reverse;
`

const colStyle = `
  flex: 1;
  min-width: 400px;
`

module.exports = (attrs, children) => {
  const realChildren = children.filter(child => (child.toString().trim() !== ''))
  return html`
    <row title=${attrs.title} color=${attrs.color} bg=${attrs.bg} style=${attrs.style}>
      <div style=${twoColGrid}>
        <div style=${colStyle}>
          ${realChildren[0]}
        </div>
        <div style=${colStyle}>
          ${realChildren[1]}
        </div>
      </div>
    </row>
  `
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)
const Highlight = __webpack_require__(7)
const highlightJS = __webpack_require__(8)
const highlight = Highlight([highlightJS])

const html = Tram.html()

const codeStyle = `
  margin: -1em 0px;
  padding: 0 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  const formattedCode = highlight(attrs.code, {lang: 'js'})
  const code = document.createElement('code')
  code.innerHTML = formattedCode

  return html`
    <pre style=${codeStyle}>
      ${code}
    </pre>
  `
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const html = Tram.html()

module.exports = (attrs, children) => {
  const style = `
    color: ${attrs.color};
    background-color: ${attrs.bg};
    width: 100%;
    padding: 1em 0px;
    ${attrs.style}
  `

  const title = (attrs.title && attrs != '') ? html`
    <div>
      <h2 style="text-align: center">
        ${attrs.title}
      </h2>
      <hr />
    </div>
  ` : ''

  return html`
    <div style=${style}>
      ${title}
      <div>
        ${children}
      </div>
    </div>
  `
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)
const app = new Tram({defaultRoute: '/'})

const contact = __webpack_require__(11)
const custom = __webpack_require__(12)
const example = __webpack_require__(13)
const header = __webpack_require__(14)
const install = __webpack_require__(15)
const reducers = __webpack_require__(16)
const routing = __webpack_require__(17)

const html = Tram.html({
  contact, custom, example,
  header, install, reducers,
  routing
})

const bg = {
  p: '#0fb4d4',
  s: '#fdca47',
  row1: '#0084a3',
  row2: '#1f7389',
  foot: '#b7c2c8'
}

const color = {
  p: '#302f3e',
  s: '#322f3e',
  row1: '#e6ebef',
  row2: '#e6ebef',
  foot: '#302d3c',
}

const home = (state) => {
  return html`
    <div>
      <div class="vhs-top">
        <header   color=${color.p} bg=${bg.p}></header>
      </div>
      <div class="vhs-bottom vhs-delay-5">
        <install  color=${color.s} bg=${bg.s}></install>
      </div>
      <div class="vhs-bottom vhs-delay-6">
        <example  color=${color.row1} bg=${bg.row1}></example>
        <routing  color=${color.row2} bg=${bg.row2}></routing>
        <custom   color=${color.row1} bg=${bg.row1}></custom>
        <reducers color=${color.row2} bg=${bg.row2}></reducers>
        <contact  color=${color.foot} bg=${bg.foot}></contact>
      </div>
    </div>
  `
}

app.addRoute('/', home)

app.start('.main')


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const html = Tram.html()

const linkStyle = `
  color: #e6ebef;
`

module.exports = (attrs, children) => {
  const project = attrs.href.split('/').slice(-1)
  return Tram.html()`
    <li>
      <a style=${linkStyle} href=${attrs.href}>
        ${project}
      </a>
    </li>
  `
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function disect_sync (min, max, fn) {
  var array;
  var index;
  var tested = {};

  if(Array.isArray(min) && typeof fn === 'undefined') {
    array = min;
    min = 0;
    predicate = max;
    max = array.length;
    fn = function(index) {
      return predicate(array[index], index);
    }
  }

  function test (i) {
    if(typeof tested[i] === 'undefined') {
      return tested[i] = fn(i);
    }
    else {
      return tested[i];
    }
  }

  while(max > min +1) {
    index = min + Math.floor((max - min) / 2);
    // true if what we're looking for is lower
    // false if what we're looking for is higher
    if(test(index)) {
      max = index;
    }
    else {
      min = index;
    }
  }
  return test(min) ? min : max;
}

function disect_async (min, max, fn, result_callback) {
  var tested = {};
  var index;

  if(Array.isArray(min) && typeof result_callback === 'undefined') {
    array = min;
    min = 0;
    predicate = max;
    max = array.length;
    result_callback = fn;
    fn = function(index, callback) {
      predicate(array[index], index, callback);
    }
  }

  function test (i, cb) {
    if(typeof tested[i] === 'undefined') {
      fn(i, function (res) {
        tested[i] = res;
        cb(res);
      });
    }
    else {
      process.nextTick(cb.bind(this, tested[i]));
    }
  }

  function iterate () {
    if(min+1 >= max) {
      test(min, function (res) {
        if(res) result_callback(min);
        else result_callback(max);
      })
    }
    else {
      index = min + Math.floor((max-min) / 2);
      test(index, function (res) {
        if(res) {
          max = index;
        }
        else {
          min = index;
        }
        iterate();
      })
    }
  }
  process.nextTick(iterate);
}

/**
 * find the first item in the range to validate the predicate
 */
module.exports = function disect(min, max, fn, callback) {
  if (callback || arguments.length === 3 && max.length === 3) {
    disect_async(min, max, fn, callback);
    return;
  }
  else {
    return disect_sync(min, max, fn);
  }

};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var tokenize = __webpack_require__(10)

module.exports = function (rules) {
  var rrules = {}, rmatches = {}
  var matches = rules.map(function (r) { return RegExp(r.match,'i') })
  return function (src, opts) {
    if (typeof opts === 'string') opts = { lang: opts }
    if (!opts) opts = {}
    var ri = getRule(opts.lang)
    if (ri < 0) return esc(src)
    var r = rules[ri]
    if (!rrules[ri]) {
      rrules[ri] = r.rules.map(function f (x) {
        return {
          type: x[0],
          regex: RegExp(x[1]),
          children: x[2] ? x[2].map(g) : null
        }
        function g (x) { return x.map(f) }
      })
    }
    var kw0 = {}, kw1 = {}, kw2 = {}
    ;(r.kw0 || []).forEach(function (key) { kw0[key] = true })
    ;(r.kw1 || []).forEach(function (key) { kw1[key] = true })
    ;(r.kw2 || []).forEach(function (key) { kw2[key] = true })
    var tokens = tokenize(src, rrules[ri])
    return '<span class="' + r.name + '">' + tokens.map(function f (t) {
      var c = xclass(t.type)
      if (t.type === 'identifier') {
        if (kw0[t.source]) c += ' kw0 kw-' + xclass(t.source)
        else if (kw1[t.source]) c += ' kw1 kw-' + xclass(t.source)
        else if (kw2[t.source]) c += ' kw2 kw-' + xclass(t.source)
      }
      return '<span class="' + c + '">'
        + (t.children ? t.children.map(g).join('') : esc(t.source))
        + '</span>'
      function g (x) { return x.map(f).join('') }
    }).join('') + '</span>'
  }
  function getRule (lang) {
    if (rmatches[lang]) return rmatches[lang]
    for (var i = 0; i < matches.length; i++) {
      if (matches[i].test(lang)) return i
    }
    return -1
  }
}

function xclass (s) { return s.replace(/[\s_]+/g,'-') }
function esc (s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
	"name": "js",
	"match": "^(js|javascript)$",
	"kw0": [
		"break",
		"case",
		"continue",
		"import",
		"export",
		"default",
		"do",
		"else",
		"for",
		"goto",
		"if",
		"return",
		"switch",
		"typeof",
		"while",
		"undefined",
		"null",
		"eval",
		"self",
		"window",
		"try",
		"catch",
		"throw",
		"new"
	],
	"kw1": [
		"Array",
		"Boolean",
		"Date",
		"Error",
		"EvalError",
		"Function",
		"Infinity",
		"JSON",
		"Math",
		"NaN",
		"Number",
		"Object",
		"RangeError",
		"ReferenceError",
		"RegExp",
		"String",
		"SyntaxError",
		"TypeError",
		"URIError",
		"ArrayBuffer",
		"Buffer",
		"DataView",
		"Float32Array",
		"Float64Array",
		"Int16Array",
		"Int32Array",
		"Int8Array",
		"Intl",
		"Map",
		"Promise",
		"Proxy",
		"Reflect",
		"Set",
		"Symbol",
		"Uint16Array",
		"Uint32Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"WeakMap",
		"WeakSet"
	],
	"kw2": [
		"function",
		"var"
	],
	"rules": [
		[
			"area comment",
			"^/\\*([^*]|\\*(?!/))*\\*/$"
		],
		[
			"area comment continue",
			"^/\\*([^*]|\\*(?!/))*\\*?$"
		],
		[
			"line comment",
			"^//[^\\n]*$"
		],
		[
			"template string",
			"^(`([^`$]|\\\\`|\\$\\{([^}]|`([^`]|\\\\`)*`)*\\}?|\\$([^{]|$))*`?)$",
			[
				[
					[
						"text",
						"^([^$]|\\\\\\$|\\$[^{])*$"
					],
					[
						"template expr",
						"^\\$\\{([^`}]|\\\\\\}|`([^`$]|\\\\`|\\$[^{]|\\$\\{[^}]*\\}?)*(`|$))*\\}?$"
					]
				]
			]
		],
		[
			"regex",
			"^/([^/]|\\\\/)*/[a-z]*$"
		],
		[
			"double quote",
			"^\"([^\"\\n]|\\\\\")*\"?$"
		],
		[
			"single quote",
			"^'([^'\\n]|\\\\')*'?$"
		],
		[
			"directive",
			"^#(\\S*)$"
		],
		[
			"open paren",
			"^\\($"
		],
		[
			"close paren",
			"^\\)$"
		],
		[
			"open square",
			"^\\[$"
		],
		[
			"close square",
			"^\\]$"
		],
		[
			"open curly",
			"^{$"
		],
		[
			"close curly",
			"^}$"
		],
		[
			"operator",
			"^([-<>~%^&*/+?|.,:;]|<<|>>|\\*\\*|\\|\\||&&|--|\\+\\+|[-+*|&%/]=|[!=](=?=?|>))$"
		],
		[
			"identifier",
			"^([_A-Za-z]\\w*)$"
		],
		[
			"number",
			"^(\\d*\\.?\\d+([eE][-+]?\\d*)?|0x\\d+)$"
		],
		[
			"whitespace",
			"^(\\s+)$"
		],
		[
			"line continue",
			"^\\\\\\n?$"
		],
		[
			"shebang",
			"^(#![^\\n]*)$"
		]
	]
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var disect = __webpack_require__(6)

module.exports = function tokenize (src, rules) {
  var len = src.length
  var tokens = []
  for (var i = 0, j = 0; i < len; i=j) {
    j = disect(i, len, fn)
    if (j === 0 || i === j) throw new Error('could not tokenize')
    var s = src.slice(i,j)
    var rule = getRule(s)
    if (!rule) throw new Error('no match')
    var token = { type: rule.type, source: s }
    if (rule.children) {
      var m = rule.regex.exec(s)
      token.children = []
      for (var k = 1; m && k < m.length && k-1 < rule.children.length; k++) {
        token.children.push(tokenize(m[k], rule.children[k-1]))
      }
    }
    tokens.push(token)
  }
  return tokens

  function fn (ix) {
    return getRule(src.slice(i, ix+1)) === null
  }
  function getRule (str) {
    for (var i = 0; i < rules.length; i++) {
      if (rules[i].regex.test(str)) return rules[i]
    }
    return null
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const twoColRow = __webpack_require__(1)

const html = Tram.html({
  tcr: twoColRow
})

const hStyle = `
  margin: 0px;
`

const tramStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

const jesseStyle = `
  text-align: right;
  padding: 1em;
  padding-right: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title='' color=${attrs.color} bg=${attrs.bg}>
      <div style=${tramStyle}>
        <h3 style=${hStyle}>Tram-One</h3>
        <div>
          <a href="https://github.com/JRJurman/tram-one">
            Repository on Github
          </a>
        </div>
        <div>
          <a href="https://github.com/JRJurman/tram-one-website">
            Repository for the Website
          </a>
        </div>
      </div>
      <div style=${jesseStyle}>
        <h3 style=${hStyle}>Jesse Jurman</h3>
        <div><a href="https://github.com/JRJurman">Github</a></div>
        <div><a href="http://jrjurman.com/">Website</a>,
        <a href="https://twitter.com/jrjurman">Twitter</a></div>
      </div>
    </tcr>
  `
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const stylizedCode = __webpack_require__(2)
const twoColRow = __webpack_require__(1)

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  /* todo.js */
  const html = Tram.html()
  const todo = (attrs, children) => {
    return html\`
      <div>
        <input  type='checkbox'
                checked=\${attrs.checked} />
        <span>
          \${children}
        </span>
      </div>
    \`
  }

  /* index.js */
  const todo = require('./todo')
  const html = Tram.html({
    'todo': todo,
  })

  const todoList = (state) => {
    return html\`
      <div>
        <todo> Add Docs </todo>
        <todo> Write Tests </todo>
        <todo checked> Read PRs </todo>
      </div>
    \`
  }
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="Custom Elements" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One supports custom elements, which are passed into
        the html function, as a mapping of the tag you will use it
        as, and the component it should render.
        <br><br>

        It's always obvious where your custom elements
        have been registered from, and can be any syntax
        that makes sense for you (capitalized, kebab, whatever!)
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const stylizedCode = __webpack_require__(2)
const twoColRow = __webpack_require__(1)
const listItemProject = __webpack_require__(5)

const html = Tram.html({
  'tcr': twoColRow,
  lip: listItemProject,
  'style-code': stylizedCode
})

const example = `
  const Tram = require('tram-one')
  const app = new Tram()

  const html = Tram.html()
  const page = () => {
    return html\`
      <div>
        <h1> Fun Times on Tram-One! </h1>
        <h2> With Custom Elements </h2>
        <h2> Routing </h2>
        <h2> and Redux State Management </h2>
        <h1> Batteries Included! </h1>
      </div>
    \`
  }

  app.addRoute('/', page)
  app.start('.main')
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="The Batteries" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One is a collection of excellent packages.
        <br>
        Here are the different package that make Tram-One possible...
        <br><br>
        For Rendering:
        <ul style='margin-top: 0px'>
          <lip href="https://github.com/substack/hyperx"></lip>
          <lip href="https://github.com/shama/bel"></lip>
          <lip href="https://github.com/aaaristo/rbel"></lip>
        </ul>
        For Routing
        <ul style='margin-top: 0px'>
          <lip href="https://github.com/yoshuawuyts/nanorouter"></lip>
        </ul>
        For State Management
        <ul style='margin-top: 0px'>
          <lip href="https://github.com/maxogden/yo-yo"></lip>
          <lip href="https://github.com/freeman-lab/minidux">minidux</lip>
          <lip href="https://github.com/Raynos/xtend"></lip>
        </ul>
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const row = __webpack_require__(3)
const html = Tram.html({
  row
})

const headerStyle = `
  font-size: 2.8em;
  padding: 0em 0.75em;
  margin: 0px;
`
const imageStyle = `
  vertical-align: top;
  height: 46px;
`

const summaryStyle = `
  padding: 1.5em;
  font-size: 1.6em;
`

module.exports = (attrs, children) => {
  return html`
    <row color=${attrs.color} bg=${attrs.bg}>
      <h1 style=${headerStyle}>
        Tram-One
        <img class="vhs-right vhs-delay-6 vhs-duration-6" src="./tram-car-128.png" style=${imageStyle} />
      </h1>
      <h1 style=${headerStyle}>
        Batteries Included View Framework
      </h1>
      <div style=${summaryStyle}>
        Tram-One is a view framework for developers who want
        to jump straight into building on the web. At its core,
        Tram-One is a collection of a few packages that gives you
        the tools to start working right away.
        <br><br>
        That is to say... <b>Batteries Included!</b>
      </div>
    </row>
  `
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const row = __webpack_require__(3)
const html = Tram.html({
  row
})

const installStyle = `
  font-size: 1.5em;
  text-align: center;
  font-family: monospace;
`

module.exports = (attrs, children) => {
  return html`
    <row color=${attrs.color} bg=${attrs.bg}>
      <div style=${installStyle}>
        npm install tram-one
      </div>
    </row>
  `
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const stylizedCode = __webpack_require__(2)
const twoColRow = __webpack_require__(1)

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  const commentReducer = (state, action) => {
    switch(action.type) {
      case('LIKE'):
        return state.likes + 1
      default:
        return state
    }
  }

  const comment = (state) => {
    onLike = () => {
      state.dispatch({type: 'LIKE'})
    }
    return html\`
      <div>
        <h2> My Neat Post </h2>
        Likes: \${state.comment.likes}
        <button onclick=\${onLike}>Like</button>
      </div>
    \`
  }

  app.addReducer('comment', commentReducer, 0)
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="State Management" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One follows the Flux architecture model with minidux,
        an API compliant tiny version of redux. If you're familiar
        with redux, you'll feel right at home.
        <br><br>

        Flux follows a single flow architecture model. Views dispatch
        actions, which in turn will update the store, which triggers
        a re-render.
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const Tram = __webpack_require__(0)

const stylizedCode = __webpack_require__(2)
const twoColRow = __webpack_require__(1)

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  const cats = (state) => {
    const page = state.page ? state.page : 1
    return html\`
      <div>
        Here is the Page \${page} of cats!
      </div>
    \`
  }

  const dogs = (state) => {
    const page = state.page ? state.page : 1
    return html\`
      <div>
        Here is the Page \${page} of dogs!
      </div>
    \`
  }

  const unknown = (state) => {
    return html\`
      <div>No Animals Here...</div>
    \`
  }

  app.addRoute('/cats/:page', cats)
  app.addRoute('/dogs/:page', dogs)
  app.addRoute('/404', unknown)
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="Routing" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One supports routing, having different components
        render based on which route a user is on.
        <br><br>

        By default, a route that doesn't match is sent to whatever
        components lives on /404. You can handle the route from there.
        <br><br>

        You can handle dynamic routes as well, as path parameters.
        These are passed into the state object, and can be read when
        the view updates.
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);