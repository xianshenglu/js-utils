!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){(function(t){t.timeDelta=function(t){if(!(t=Date.parse(t)))return"unknown";var e=(t=(Date.now()-t)/1e3|0)<0?" from now":" ago";return(t=Math.abs(t))<60?"just now"+e:t<120?"a minute"+e:t<3600?(t/60|0)+" minutes"+e:(t=t/3600|0)<2?"an hour"+e:t<24?t+" hours"+e:(t=t/24|0)<2?"a day"+e:t<30?t+" days"+e:t<60?"a month"+e:t<360?(t/30|0)+" months"+e:t<730?"a year"+e:(t/365|0)+" years"+e},t.queryParams=function(t){t.indexOf("?")>=0&&(t=t.split("?")[1]);var e={};return t.split("&").forEach(function(t){t=t.split("="),e[t[0]]=void 0===t[1]||t[1]}),e};var e=t.slice=function(t,e){return Array.prototype.slice.call(t,e)};t.partial=function(t){var n=e(arguments,1);return function(){return t.apply(this,Array.prototype.concat.apply(n,arguments))}}})(e)},function(t,e,n){"use strict";n.r(e);var r=n(0);document.body.innerHTML="you import getPseudorandom, and run getPseudorandom([1,2,3,4,5,6]), then you got"+Object(r.getPseudorandom)([1,2,3,4,5,6])}]);