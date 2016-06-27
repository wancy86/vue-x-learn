!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxXImg=t():e.vuxXImg=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(5)},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=r(s),i=o(7),c=r(i),l=o(2),a=r(l);t["default"]={mixins:[a["default"]],compiled:function(){(0,c["default"])()&&this.src&&this.webpSrc&&(this.src=this.webpSrc)},ready:function(){var e=this,t="vux-ximg-"+this.uuid;this.$el.setAttribute("id",t),this.$el.setAttribute("data-src",this.src),this.blazy=new n["default"]({scroller:this.scroller,selector:"#"+t,offset:e.offset,errorClass:e.errorClass,successClass:e.successClass,success:function(t){e.$emit("on-success",e.src,t)},error:function(t,o){e.$emit("on-error",e.src,t,o)}})},props:{src:String,webpSrc:String,defaultSrc:{type:String,"default":"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,defaut:100},"class":String,scroller:Object},beforeDestroy:function(){this.blazy&&this.blazy.destroy()}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(e,t){},function(e,t){e.exports="<img :src=defaultSrc class=vux-x-img :class=class />"},function(e,t,o){var r,s;o(3),r=o(1),s=o(4),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;!function(n,i){r=i,s="function"==typeof r?r.call(t,o,t,e):r,!(void 0!==s&&(e.exports=s))}(this,function(){"use strict";function e(e){var o=e._util;if(o.elements=u(e.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,e.options.container&&A(e.options.container,function(e){d(e,"scroll",o.validateT)}),d(window,"resize",o.saveViewportOffsetT),d(window,"resize",o.validateT),d(window,"scroll",o.validateT),e.options.scroller)){var r=e.options.scroller._xscroll,s=r.userConfig.useOriginScroll?"scroll":"scrollend";r.on("afterrender",o.validateT,e),r.on(s,o.validateT,e)}t(e)}function t(e){for(var t=e._util,r=0;r<t.count;r++){var s=t.elements[r];(o(s)||l(s,e.options.successClass))&&(e.load(s),t.elements.splice(r,1),t.count--,r--)}0===t.count&&e.destroy()}function o(e){var t=e.getBoundingClientRect();return t.right>=m.left&&t.bottom>=m.top&&t.left<=m.right&&t.top<=m.bottom}function r(e,t,o){if(!l(e,o.successClass)&&(t||o.loadInvisible||e.offsetWidth>0&&e.offsetHeight>0)){var r=e.getAttribute(g)||e.getAttribute(o.src);if(r){var u=r.split(o.separator),f=u[h&&u.length>1?1:0],v=c(e,"img");if(v||void 0===e.src){var m=new Image,y=function(){o.error&&o.error(e,"invalid"),a(e,o.errorClass),p(m,"error",y),p(m,"load",x)},x=function(){if(v){n(e,f),i(e,w,o.srcset);var t=e.parentNode;t&&c(t,"picture")&&A(t.getElementsByTagName("source"),function(e){i(e,w,o.srcset)}),o.scroller&&o.scroller.reset()}else e.style.backgroundImage='url("'+f+'")';s(e,o),p(m,"load",x),p(m,"error",y)};d(m,"error",y),d(m,"load",x),n(m,f)}else n(e,f),s(e,o)}else c(e,"video")?(A(e.getElementsByTagName("source"),function(e){i(e,b,o.src)}),e.load(),s(e,o)):(o.error&&o.error(e,"missing"),a(e,o.errorClass))}}function s(e,t){a(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),A(t.breakpoints,function(t){e.removeAttribute(t.src)})}function n(e,t){e[b]=t}function i(e,t,o){var r=e.getAttribute(o);r&&(e[t]=r,e.removeAttribute(o))}function c(e,t){return e.nodeName.toLowerCase()===t}function l(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function a(e,t){l(e,t)||(e.className+=" "+t)}function u(e){for(var t=[],o=document.querySelectorAll(e),r=o.length;r--;t.unshift(o[r]));return t}function f(e){m.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,m.right=(window.innerWidth||document.documentElement.clientWidth)+e}function d(e,t,o){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,o):e.addEventListener(t,o,!1)}function p(e,t,o){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,o):e.removeEventListener(t,o,!1)}function A(e,t){if(e&&t)for(var o=e.length,r=0;o>r&&t(e[r],r)!==!1;r++);}function v(e,t,o){var r=0;return function(){var s=+new Date;t>s-r||(r=s,e.apply(o,arguments))}}var g,m,h,b="src",w="srcset";return function(o){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(e,t,o,r,n){for(n=document.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),o=e.length;o--;){for(s.addRule(e[o],"k:v"),r=n.length;r--;)n[r].currentStyle.k&&t.push(n[r]);s.removeRule(0)}return t}}var n=this,i=n._util={};i.elements=[],i.destroyed=!0,n.options=o||{},n.options.error=n.options.error||!1,n.options.offset=n.options.offset||100,n.options.success=n.options.success||!1,n.options.selector=n.options.selector||".b-lazy",n.options.separator=n.options.separator||"|",n.options.container=n.options.container?document.querySelectorAll(n.options.container):!1,n.options.errorClass=n.options.errorClass||"b-error",n.options.breakpoints=n.options.breakpoints||!1,n.options.loadInvisible=n.options.loadInvisible||!1,n.options.successClass=n.options.successClass||"b-loaded",n.options.validateDelay=n.options.validateDelay||25,n.options.saveViewportOffsetDelay=n.options.saveViewportOffsetDelay||50,n.options.srcset=n.options.srcset||"data-srcset",n.options.src=g=n.options.src||"data-src",h=window.devicePixelRatio>1,m={},m.top=0-n.options.offset,m.left=0-n.options.offset,n.revalidate=function(){e(this)},n.load=function(e,t){var o=this.options;void 0===e.length?r(e,t,o):A(e,function(e){r(e,t,o)})},n.destroy=function(){var e=this,t=e._util;e.options.container&&A(e.options.container,function(e){p(e,"scroll",t.validateT)}),p(window,"scroll",t.validateT),p(window,"resize",t.validateT),p(window,"resize",t.saveViewportOffsetT),e.scroller&&e.scroller._xscroll&&e.scroller._xscroll.off("scroll scrollend afterrender",t.validateT,e.scroller._xscroll),t.count=0,t.elements.length=0,t.destroyed=!0},i.validateT=v(function(){t(n)},n.options.validateDelay,n),i.saveViewportOffsetT=v(function(){f(n.options.offset)},n.options.saveViewportOffsetDelay,n),f(n.options.offset),A(n.options.breakpoints,function(e){return e.width>=window.screen.width?(g=e.src,!1):void 0}),setTimeout(function(){e(n)})}})},function(e,t){function o(){if(window.localStorage&&"object"==typeof localStorage&&(!localStorage.getItem(r)||"available"!==localStorage.getItem(r)&&"disable"!==localStorage.getItem(r))){var e=document.createElement("img");e.onload=function(){try{localStorage.setItem(r,"available")}catch(e){}},e.onerror=function(){try{localStorage.setItem(r,"disable")}catch(e){}},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="}}var r="can_use_webp";o(),e.exports=function(){return!!window.localStorage&&"available"===window.localStorage.getItem(r)}}])});