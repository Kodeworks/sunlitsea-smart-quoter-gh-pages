(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/PtW":function(t,e,n){"use strict";e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},"1z8A":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("SqIO"),c=n("L8iz"),o=n("nr3+");function a(t){return function e(n,a,u){switch(arguments.length){case 0:return e;case 1:return Object(o.a)(n)?e:Object(c.a)((function(e,r){return t(n,e,r)}));case 2:return Object(o.a)(n)&&Object(o.a)(a)?e:Object(o.a)(n)?Object(c.a)((function(e,n){return t(e,a,n)})):Object(o.a)(a)?Object(c.a)((function(e,r){return t(n,e,r)})):Object(r.a)((function(e){return t(n,a,e)}));default:return Object(o.a)(n)&&Object(o.a)(a)&&Object(o.a)(u)?e:Object(o.a)(n)&&Object(o.a)(a)?Object(c.a)((function(e,n){return t(e,n,u)})):Object(o.a)(n)&&Object(o.a)(u)?Object(c.a)((function(e,n){return t(e,a,n)})):Object(o.a)(a)&&Object(o.a)(u)?Object(c.a)((function(e,r){return t(n,e,r)})):Object(o.a)(n)?Object(r.a)((function(e){return t(e,a,u)})):Object(o.a)(a)?Object(r.a)((function(e){return t(n,e,u)})):Object(o.a)(u)?Object(r.a)((function(e){return t(n,a,e)})):t(n,a,u)}}}},"5HI6":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("q1tI"),c=n("iv2T"),o=function(){var t=Object(r.useState)(null),e=t[0],n=t[1];return Object(r.useEffect)((function(){u().then(n)}),[]),null!==e},a="NOT_LOADED",u=function(){return"LOADED"===a?Promise.resolve(google.maps):"NOT_LOADED"===a?a=new Promise((function(t,e){var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=".concat(c.a.GOOGLE_API_KEY,"&callback=initMap&libraries=places"),n.defer=!0,window.initMap=function(){console.log("google maps is loaded and available"),a="LOADED",t(google.maps)},document.head.appendChild(n)})):a}},"85k0":function(t,e,n){"use strict";var r=n("q1tI"),c=n.n(r).a.createElement;e.a=function(t){var e=t.className;return c("svg",{className:"".concat(e),viewBox:"0 0 52 28",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M51.51 11.814v3.595H0v-3.595h51.51zm0 3.595v3.736l-20 7.875v-3.736l20-7.875zM31.51 3.736V0l20 8.078v3.736l-20-8.078z"}))}},AKxJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("rePB"),c=n("fkSh"),o=n("5HI6"),a=n("q1tI"),u=n("/MKj"),i=n("hYYJ"),s=n("V2KL"),l=n("psed");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={handleChangeCenter:!1,handleChangeZoom:!0,mapOptions:{streetViewControl:!1,disableDoubleClickZoom:!0}},b=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=O(O({},p),e),r=Object(a.useRef)(!1),f=Object(o.a)(),b=Object(a.useRef)(null),j=Object(u.c)((function(t){return t.quote.location})),y=Object(a.useState)(null),g=y[0],v=y[1],h=Object(i.a)(s.c.setCoordinateCenterZoom),E=Object(i.a)(s.c.setLocationStatus),m=Object(i.a)(s.c.setCoordinateCenter),T=Object(a.useCallback)((function(t){return Object(l.a)((function(){var e=t.getCenter().toJSON(),n=t.getZoom();m({center:e,zoom:n}),E(s.a.COORDINATE_CENTER)}))}),[m]),C=Object(a.useCallback)((function(t){return Object(l.a)((function(){var e=t.getZoom();h(e)}))}),[h]);Object(a.useEffect)((function(){if(f&&null===g&&null!==b.current){var t=new google.maps.Map(b.current,n.mapOptions);return n.handleChangeZoom&&t.addListener("zoom_changed",C(t)),n.handleChangeCenter&&t.addListener("center_changed",T(t)),v(t),function(){t.unbindAll()}}}),[f]);var A=Object(a.useRef)();return Object(a.useEffect)((function(){if(null!==g&&f){if(j.locationStatus!==s.a.NONE||r.current||(g.setCenter({lat:20,lng:20}),g.setZoom(1),r.current=!0),j.locationStatus===s.a.LOCATION_TEXT_CENTER&&A.current!==j.locationText)r.current=!0,new google.maps.places.PlacesService(g).textSearch({query:j.locationText},(function(t){var e=c.a(t);void 0===e&&console.warn("Location lookup result is empty");try{var n,r;if(A.current=j.locationText,void 0!==(null===e||void 0===e?void 0:null===(n=e.geometry)||void 0===n?void 0:n.location))g.setCenter(e.geometry.location),void 0!==(null===e||void 0===e?void 0:null===(r=e.geometry)||void 0===r?void 0:r.viewport)&&g.fitBounds(e.geometry.viewport)}catch(o){console.error("failed centering on location result",t,o)}}));j.locationStatus!==s.a.COORDINATE_CENTER||null===j.coordinate||void 0!==g.getCenter()&&d(g.getCenter().toJSON(),j.coordinate.center)||(r.current=!0,g.setCenter(j.coordinate.center),g.setZoom(j.coordinate.zoom))}}),[g,j.locationStatus,null===(t=j.coordinate)||void 0===t?void 0:t.center,f]),{domRef:b,mapObject:g}},d=function(t,e){return t.lat===e.lat&&t.lng===e.lng}},C9Cz:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){return function(){return t(e.apply(null,arguments))}}},HFPn:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("q1tI"),c=r.createElement,o=function(t){var e=t.text;return c("h1",null,null!==e&&void 0!==e?e:"Provide data on the installation")}},JI66:function(t,e,n){"use strict";function r(t){return"[object String]"===Object.prototype.toString.call(t)}n.d(e,"a",(function(){return r}))},JVDt:function(t,e,n){"use strict";function r(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,c){return e.apply(this,arguments)};case 5:return function(t,n,r,c,o){return e.apply(this,arguments)};case 6:return function(t,n,r,c,o,a){return e.apply(this,arguments)};case 7:return function(t,n,r,c,o,a,u){return e.apply(this,arguments)};case 8:return function(t,n,r,c,o,a,u,i){return e.apply(this,arguments)};case 9:return function(t,n,r,c,o,a,u,i,s){return e.apply(this,arguments)};case 10:return function(t,n,r,c,o,a,u,i,s,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(e,"a",(function(){return r}))},L8iz:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("SqIO"),c=n("nr3+");function o(t){return function e(n,o){switch(arguments.length){case 0:return e;case 1:return Object(c.a)(n)?e:Object(r.a)((function(e){return t(n,e)}));default:return Object(c.a)(n)&&Object(c.a)(o)?e:Object(c.a)(n)?Object(r.a)((function(e){return t(e,o)})):Object(c.a)(o)?Object(r.a)((function(e){return t(n,e)})):t(n,o)}}}},OEMQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("SqIO"),c=n("/PtW"),o=n("JI66"),a=Object(r.a)((function(t){return!!Object(c.a)(t)||!!t&&("object"===typeof t&&(!Object(o.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),u=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var i=n("JVDt"),s=n("L8iz"),l=Object(s.a)((function(t,e){return Object(i.a)(t.length,(function(){return t.apply(e,arguments)}))}));function f(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function O(t,e,n,r){return t["@@transducer/result"](n[r](l(t["@@transducer/step"],t),e))}var p="undefined"!==typeof Symbol?Symbol.iterator:"@@iterator";function b(t,e,n){if("function"===typeof t&&(t=function(t){return new u(t)}(t)),a(n))return function(t,e,n){for(var r=0,c=n.length;r<c;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"===typeof n["fantasy-land/reduce"])return O(t,e,n,"fantasy-land/reduce");if(null!=n[p])return f(t,e,n[p]());if("function"===typeof n.next)return f(t,e,n);if("function"===typeof n.reduce)return O(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},SqIO:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("nr3+");function c(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},V2KL:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l}));var r,c=n("rePB"),o=n("WExX"),a=n("GZJ0");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.NONE="NONE",t.LOCATION_TEXT_CENTER="LOCATION_TEXT_CENTER",t.COORDINATE_CENTER="COORDINATE_CENTER"}(r||(r={}));var s={updateLocation:Object(o.createAction)("QUOTE_LOCATION/UPDATE",(function(t){return t}))(),setStageComplete:Object(o.createAction)("QUOTE_LOCATION/SET_STAGE_COMPLETE")(),setLocationStatus:Object(o.createAction)("QUOTE_LOCATION/SET_LOCATION_STATUS",(function(t){return t}))(),setStageInitiated:Object(o.createAction)("QUOTE_LOCATION/SET_STAGE_INITIATED")(),setCoordinateCenter:Object(o.createAction)("QUOTE_LOCATION/SET_COORDINATE_CENTER",(function(t){return t}))(),setCoordinateCenterZoom:Object(o.createAction)("QUOTE_LOCATION/SET_COORDINATE_CENTER_ZOOM",(function(t){return t}))()},l=Object(o.createReducer)({locationText:"",stage:a.a.NOT_INITIATED,coordinate:null,locationStatus:r.NONE}).handleAction(s.updateLocation,(function(t,e){return i(i({},t),{},{stage:t.stage===a.a.NOT_INITIATED?a.a.INITIATED:t.stage,locationText:e.payload})})).handleAction(s.setStageComplete,(function(t){return i(i({},t),{},{stage:a.a.COMPLETE})})).handleAction(s.setStageInitiated,(function(t){return i(i({},t),{},{stage:a.a.INITIATED})})).handleAction(s.setLocationStatus,(function(t,e){return i(i({},t),{},{locationStatus:e.payload})})).handleAction(s.setCoordinateCenter,(function(t,e){return i(i({},t),{},{coordinate:e.payload})})).handleAction(s.setCoordinateCenterZoom,(function(t,e){return i(i({},t),{},{coordinate:null===t.coordinate?null:i(i({},t.coordinate),{},{zoom:e.payload})})}))},YQsy:function(t,e,n){"use strict";var r=n("L8iz"),c=n("JI66"),o=Object(r.a)((function(t,e){var n=t<0?e.length+t:t;return Object(c.a)(e)?e.charAt(n):e[n]}));e.a=o},YyPD:function(t,e,n){"use strict";var r=n("1z8A"),c=n("OEMQ"),o=Object(r.a)(c.a);e.a=o},bZJt:function(t,e,n){t.exports={mapContainer:"map_mapContainer__2JqSn",mapElement:"map_mapElement__2KDiV"}},fkSh:function(t,e,n){"use strict";var r=n("YQsy"),c=Object(r.a)(0);e.a=c},hYYJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("/MKj"),c=n("q1tI"),o=n("C9Cz"),a=function(t){var e=Object(r.b)(),n=Object(o.a)(e,t);return Object(c.useCallback)(n,[t,e])}},"ho9+":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("JVDt");function c(t,e){return function(){return e.call(this,t.apply(this,arguments))}}var o=n("YyPD"),a=n("/PtW");function u(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return Object(a.a)(r)||"function"!==typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var i=n("SqIO"),s=n("1z8A"),l=Object(s.a)(u("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)}))),f=Object(i.a)(u("tail",l(1,1/0)));function O(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(r.a)(arguments[0].length,Object(o.a)(c,arguments[0],f(arguments)))}},iv2T:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={basePath:"",GOOGLE_API_KEY:"AIzaSyDos5I40L8JgOfIkfH92VJQwgYxD_2u46Q"}},"nr3+":function(t,e,n){"use strict";function r(t){return null!=t&&"object"===typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",(function(){return r}))},psed:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){var r=arguments,c=function(){e=null,t.apply(null,r)};clearTimeout(e),e=setTimeout(c,n)}}},xQut:function(t,e,n){"use strict";var r=n("q1tI"),c=n.n(r).a.createElement;e.a=function(t){var e=t.type,n=t.label,r=t.className,o=t.children;return c("button",{className:"bg-gray-900 text-gray-50 px-16 py-5 active:scale-101 transform hover:bg-primary-400 active:bg-primary-400 hover:text-gray-900 focus:outline-none focus:bg-primary-200 focus:text-gray-900 border border-transparent active:border-transparent focus:border-gray-900 ".concat(r||""),type:e},n,o)}}}]);