_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/GhH":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("q1tI"),r=n("bZJt"),a=n.n(r),c=n("AKxJ"),i=n("EM0n"),u=n("UIrs"),l=o.createElement,s=function(){var t=Object(c.a)({mapOptions:{streetViewControl:!1,disableDoubleClickZoom:!0,draggable:!1,zoomControl:!1,fullscreenControl:!1,mapTypeControl:!1}}),e=Object(i.a)();return Object(u.a)(t.mapObject,e),l("div",{className:a.a.mapContainer},l("div",{ref:t.domRef,className:a.a.mapElement}))}},"5HI6":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("q1tI"),r=n("iv2T"),a=function(){var t=Object(o.useState)(null),e=t[0],n=t[1];return Object(o.useEffect)((function(){i().then(n)}),[]),null!==e},c="NOT_LOADED",i=function(){return"LOADED"===c?Promise.resolve(google.maps):"NOT_LOADED"===c?c=new Promise((function(t,e){var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=".concat(r.a.GOOGLE_API_KEY,"&callback=initMap&libraries=places"),n.defer=!0,window.initMap=function(){console.log("google maps is loaded and available"),c="LOADED",t(google.maps)},document.head.appendChild(n)})):c}},AKxJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n("rePB"),r=n("fkSh"),a=n("5HI6"),c=n("q1tI"),i=n("/MKj"),u=n("hYYJ"),l=n("V2KL"),s=n("psed");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={handleChangeCenter:!1,handleChangeZoom:!0,mapOptions:{streetViewControl:!1,disableDoubleClickZoom:!0}},m=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d(d({},p),e),o=Object(c.useRef)(!1),f=Object(a.a)(),m=Object(c.useRef)(null),v=Object(i.c)((function(t){return t.quote.location})),O=Object(c.useState)(null),g=O[0],y=O[1],j=Object(u.a)(l.c.setCoordinateCenterZoom),h=Object(u.a)(l.c.setLocationStatus),_=Object(u.a)(l.c.setCoordinateCenter),C=Object(c.useCallback)((function(t){return Object(s.a)((function(){var e=t.getCenter().toJSON(),n=t.getZoom();_({center:e,zoom:n}),h(l.a.COORDINATE_CENTER)}))}),[_]),E=Object(c.useCallback)((function(t){return Object(s.a)((function(){var e=t.getZoom();j(e)}))}),[j]);Object(c.useEffect)((function(){if(f&&null===g&&null!==m.current){var t=new google.maps.Map(m.current,n.mapOptions);return n.handleChangeZoom&&t.addListener("zoom_changed",E(t)),n.handleChangeCenter&&t.addListener("center_changed",C(t)),y(t),function(){t.unbindAll()}}}),[f]);var w=Object(c.useRef)();return Object(c.useEffect)((function(){if(null!==g&&f){if(v.locationStatus!==l.a.NONE||o.current||(g.setCenter({lat:20,lng:20}),g.setZoom(1),o.current=!0),v.locationStatus===l.a.LOCATION_TEXT_CENTER&&w.current!==v.locationText)o.current=!0,new google.maps.places.PlacesService(g).textSearch({query:v.locationText},(function(t){var e=r.a(t);void 0===e&&console.warn("Location lookup result is empty");try{var n,o;if(w.current=v.locationText,void 0!==(null===e||void 0===e?void 0:null===(n=e.geometry)||void 0===n?void 0:n.location))g.setCenter(e.geometry.location),void 0!==(null===e||void 0===e?void 0:null===(o=e.geometry)||void 0===o?void 0:o.viewport)&&g.fitBounds(e.geometry.viewport)}catch(a){console.error("failed centering on location result",t,a)}}));v.locationStatus!==l.a.COORDINATE_CENTER||null===v.coordinate||void 0!==g.getCenter()&&b(g.getCenter().toJSON(),v.coordinate.center)||(o.current=!0,g.setCenter(v.coordinate.center),g.setZoom(v.coordinate.zoom))}}),[g,v.locationStatus,null===(t=v.coordinate)||void 0===t?void 0:t.center,f]),{domRef:m,mapObject:g}},b=function(t,e){return t.lat===e.lat&&t.lng===e.lng}},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("a3WO");function r(t,e){if(t){if("string"===typeof t)return Object(o.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(t,e):void 0}}},C9Cz:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t,e){return function(){return t(e.apply(null,arguments))}}},"H+vm":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote/result",function(){return n("yPD0")}])},HFPn:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("q1tI"),r=o.createElement,a=function(t){var e=t.text;return r("h1",null,null!==e&&void 0!==e?e:"Provide data on the installation")}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("BsWD");function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(u){r=!0,a=u}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},TiuG:function(t,e,n){t.exports={contentContainer:"result_contentContainer__1hFnv",quoteDataGrid:"result_quoteDataGrid__3tLZi",smallerText:"result_smallerText__29KYh",linkContainer:"result_linkContainer__2gIWs",getInfoText:"result_getInfoText__2_h-i"}},YyPD:function(t,e,n){"use strict";var o=n("1z8A"),r=n("OEMQ"),a=Object(o.a)(r.a);e.a=a},a3WO:function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.d(e,"a",(function(){return o}))},af9t:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o="kWp",r=function(t){return.5*t}},bZJt:function(t,e,n){t.exports={mapContainer:"map_mapContainer__2JqSn",mapElement:"map_mapElement__2KDiV",extendedMap:"map_extendedMap__GJI9J"}},fkSh:function(t,e,n){"use strict";var o=n("YQsy"),r=Object(o.a)(0);e.a=r},hYYJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("/MKj"),r=n("q1tI"),a=n("C9Cz"),c=function(t){var e=Object(o.b)(),n=Object(a.a)(e,t);return Object(r.useCallback)(n,[t,e])}},"ho9+":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n("JVDt");function r(t,e){return function(){return e.call(this,t.apply(this,arguments))}}var a=n("YyPD"),c=n("/PtW");function i(t,e){return function(){var n=arguments.length;if(0===n)return e();var o=arguments[n-1];return Object(c.a)(o)||"function"!==typeof o[t]?e.apply(this,arguments):o[t].apply(o,Array.prototype.slice.call(arguments,0,n-1))}}var u=n("SqIO"),l=n("1z8A"),s=Object(l.a)(i("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)}))),f=Object(u.a)(i("tail",s(1,1/0)));function d(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(o.a)(arguments[0].length,Object(a.a)(r,arguments[0],f(arguments)))}},psed:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){var o=arguments,r=function(){e=null,t.apply(null,o)};clearTimeout(e),e=setTimeout(r,n)}}},yPD0:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n("8Kt/"),a=n.n(r),c=n("HFPn"),i=n("X1FW"),u=n("TiuG"),l=n.n(u),s=n("/MKj"),f=o.createElement,d=function(){var t,e=Object(s.c)((function(t){return t})),n=Object(o.useMemo)((function(){var t;return 0===(null===(t=e.quote.layout.coordinates)||void 0===t?void 0:t.length)?"":encodeURI("https://app.glint.no/?source=sunlitsea&wattpeak_sqm=119&location=".concat(e.quote.location.name,"&user_name=").concat(e.quote.contact.name,"&user_email=").concat(e.quote.contact.email,"&coordinates=").concat(e.quote.layout.coordinates.map((function(t){return"".concat(t.lat.toFixed(6),",").concat(t.lng.toFixed(6))})).join(";"),"&click_id=").concat(e.quote.general.clickId))}),[location]);return""===n?null:f("a",{href:n,target:"_blank",style:{textDecoration:"underline"},onClick:(t=e.quote.general.clickId,function(){console.debug("\ud83d\udd26 outbound link to glintsolar recorded with gtag"),gtag&&gtag("event","click",{event_category:"outbound",event_label:"glintsolar.no/location-info",transport_type:"beacon",click_id:t})})},"app.glint.no")},p=n("/GhH"),m=n("af9t"),b=o.createElement;e.default=function(){var t=Object(s.c)((function(t){return t.quote.location.name})),e=Object(s.c)((function(t){return t})),n=Object(o.useMemo)((function(){return function(t){return{name:t.quote.location.name,numberFloats:t.quote.layout.numberRows*t.quote.layout.numberColumns,effect:Object(m.b)(t.quote.layout.numberRows*t.quote.layout.numberColumns),installationTimeInWeeks:"coming soon",totalInstallationCostNOK:"coming soon"}}(e)}),[e]);return b(o.Fragment,null,b(a.a,null,b("title",null,"Smart Quoter - Your Quote")),b(c.a,{text:"Initial quote - ".concat(t)}),b(i.a,{backTo:!0}),b("div",{className:"shadow-lg p-4 rounded"},b("p",{className:"p-4 text-lg text-center mb-3"},"This is a preliminary quote for the project based on the data you provided."),b("div",{className:"".concat(l.a.contentContainer)},b("div",{className:l.a.quoteDataContainer},b("div",{className:l.a.quoteDataGrid},b("p",null,"Location:"),b("p",null,n.name),b("div",null,b("p",null,"Number floats:"),b("p",{className:l.a.smallerText},"Each float produces 500W")),b("p",null,n.numberFloats),b("p",null,"Peak power:"),b("p",null,n.effect," ",m.a),b("p",null,"Total cost of installation:"),b("p",null,n.totalInstallationCostNOK),b("p",null,"Installation time:"),b("p",null,n.installationTimeInWeeks))),b(p.a,null)),b("div",{className:"".concat(l.a.linkContainer)},b("p",{className:"p-4 text-center ".concat(l.a.getInfoText)},"Get more information about your site at"),b(d,null))))}}},[["H+vm",0,2,1,3,5]]]);