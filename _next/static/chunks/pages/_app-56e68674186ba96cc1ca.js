_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"1Nqh":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=(0,o.default)(e);return{getItem:function(e){return new Promise((function(n,r){n(t.getItem(e))}))},setItem:function(e,n){return new Promise((function(r,o){r(t.setItem(e,n))}))},removeItem:function(e){return new Promise((function(n,r){n(t.removeItem(e))}))}}};var r,o=(r=n("ycJa"))&&r.__esModule?r:{default:r}},"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7SBD":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n("rePB"),o=n("WExX"),a=n("GZJ0");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={setStageComplete:Object(o.createAction)("QUOTE_LAYOUT/SET_STAGE_COMPLETE")(),setStageInitiated:Object(o.createAction)("QUOTE_LAYOUT/SET_STAGE_INITIATED")(),updateNumberColumns:Object(o.createAction)("QUOTE_LAYOUT/UPDATE_NUMBER_COLUMNS",(function(e){return parseInt(e)}))(),updateNumberRows:Object(o.createAction)("QUOTE_LAYOUT/UPDATE_NUMBER_ROWS",(function(e){return parseInt(e)}))(),updateRotation:Object(o.createAction)("QUOTE_LAYOUT/UPDATE_ROTATION",(function(e){return parseInt(e)}))(),updateCoordinates:Object(o.createAction)("QUOTE_LAYOUT/UPDATE_COORDINATES",(function(e){return e}))()},s=Object(o.createReducer)({stage:a.a.NOT_INITIATED,numberColumns:10,numberRows:20,rotation:0,coordinates:[]}).handleAction(u.setStageComplete,(function(e){return c(c({},e),{},{stage:a.a.COMPLETE})})).handleAction(u.setStageInitiated,(function(e){return c(c({},e),{},{stage:a.a.INITIATED})})).handleAction(u.updateNumberRows,(function(e,t){var n,r=e.stage===a.a.NOT_INITIATED?a.a.INITIATED:e.stage;return c(c({},e),{},{numberRows:null!==(n=t.payload)&&void 0!==n?n:20,stage:r})})).handleAction(u.updateNumberColumns,(function(e,t){var n,r=e.stage===a.a.NOT_INITIATED?a.a.INITIATED:e.stage;return c(c({},e),{},{numberColumns:null!==(n=t.payload)&&void 0!==n?n:10,stage:r})})).handleAction(u.updateRotation,(function(e,t){return c(c({},e),{},{rotation:t.payload,stage:e.stage===a.a.NOT_INITIATED?a.a.INITIATED:e.stage})})).handleAction(u.updateCoordinates,(function(e,t){return c(c({},e),{},{coordinates:t.payload})}))},"C+HQ":function(e,t,n){"use strict";var r;t.__esModule=!0,t.default=void 0;var o=(0,((r=n("1Nqh"))&&r.__esModule?r:{default:r}).default)("local");t.default=o},J5il:function(e,t,n){e.exports={warningContainer:"DevelopmentWarning_warningContainer__2OSPs",warningText:"DevelopmentWarning_warningText__3g09G"}},Kdvc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n("rePB"),o=n("WExX"),a=n("GZJ0"),i=n("jZG+");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={setStageComplete:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_COMPLETE")(),setSignificantWaveHeight:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_SIGNIFICANT_WAVE_HEIGHT",(function(e){return e}))(),setWaterDepth:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_WATER_DEPTH",(function(e){return e}))(),setTidalRange:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_TIDAL_RANGE",(function(e){return e}))(),setSaltWater:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_SALT_WATER",(function(e){return e}))(),setWaterSaltContent:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_WATER_SALT_CONTENT",(function(e){return e}))(),setWaterFreezes:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_WATER_FREEZES",(function(e){return e}))(),setRegulatingAuthority:Object(o.createAction)("QUOTE_ENVIRONMENT/SET_REGULATING_AUTHORITY",(function(e){return e}))()},f=Object(o.createReducer)({significantWaveHeight:0,waterDepth:0,tidalRange:0,saltWater:!0,waterSaltContent:null,waterFreezes:null,regulatingAuthority:null,stage:a.a.NOT_INITIATED}).handleAction(s.setStageComplete,(function(e){return u(u({},e),{},{stage:a.a.COMPLETE})})).handleAction(s.setSignificantWaveHeight,(function(e,t){return u(u({},e),{},{significantWaveHeight:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setWaterDepth,(function(e,t){return u(u({},e),{},{waterDepth:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setTidalRange,(function(e,t){return u(u({},e),{},{tidalRange:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setSaltWater,(function(e,t){return u(u({},e),{},{saltWater:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setWaterSaltContent,(function(e,t){return u(u({},e),{},{waterSaltContent:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setWaterFreezes,(function(e,t){return u(u({},e),{},{waterFreezes:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setRegulatingAuthority,(function(e,t){return u(u({},e),{},{regulatingAuthority:t.payload,stage:Object(i.a)(e.stage)})}))},"V+g0":function(e,t,n){},VUUK:function(e,t,n){"use strict";var r=n("L8iz"),o=n("sNsB"),a=Number.isInteger||function(e){return e<<0===e},i=n("YQsy"),c=Object(r.a)((function(e,t){return e.map((function(e){for(var n,r=t,o=0;o<e.length;){if(null==r)return;n=e[o],r=a(n)?Object(i.a)(n,r):r[n],o+=1}return r}))})),u=Object(r.a)((function(e,t){return c([e],t)[0]})),s=Object(r.a)((function(e,t){return u([e],t)})),f=Object(r.a)((function(e,t){return Object(o.a)(s(e),t)}));t.a=f},YFqc:function(e,t,n){e.exports=n("cTJO")},YR7Z:function(e,t,n){"use strict";var r=n("JVDt"),o=n("SqIO"),a=n("L8iz"),i=n("nr3+");var c=Object(a.a)((function(e,t){return 1===e?Object(o.a)(t):Object(r.a)(e,function e(t,n,o){return function(){for(var a=[],c=0,u=t,s=0;s<n.length||c<arguments.length;){var f;s<n.length&&(!Object(i.a)(n[s])||c>=arguments.length)?f=n[s]:(f=arguments[c],c+=1),a[s]=f,Object(i.a)(f)||(u-=1),s+=1}return u<=0?o.apply(this,a):Object(r.a)(u,e(t,a,o))}}(e,[],t))}));t.a=c},ZMgP:function(e,t,n){"use strict";t.a={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},ZuG0:function(e,t,n){"use strict";var r=n("SqIO"),o=n("wyUd"),a=Object.prototype.toString,i=function(){return"[object Arguments]"===a.call(arguments)?function(e){return"[object Arguments]"===a.call(e)}:function(e){return Object(o.a)("callee",e)}}(),c=!{toString:null}.propertyIsEnumerable("toString"),u=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),f=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},l="function"!==typeof Object.keys||s?Object(r.a)((function(e){if(Object(e)!==e)return[];var t,n,r=[],a=s&&i(e);for(t in e)!Object(o.a)(t,e)||a&&"length"===t||(r[r.length]=t);if(c)for(n=u.length-1;n>=0;)t=u[n],Object(o.a)(t,e)&&!f(r,t)&&(r[r.length]=t),n-=1;return r})):Object(r.a)((function(e){return Object(e)!==e?[]:Object.keys(e)}));t.a=l},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),s=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function b(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],d=(0,u.useRouter)(),y=d&&d.pathname||"/",O=i.default.useMemo((function(){var t=(0,c.resolveHref)(y,e.href);return{href:t,as:e.as?(0,c.resolveHref)(y,e.as):t}}),[y,e.href,e.as]),h=O.href,g=O.as;i.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,c.isLocalURL)(h)&&!l[h+"%"+g])return p(a,(function(){b(d,h,g)}))}),[t,a,h,g,d]);var v=e.children,m=e.replace,E=e.shallow,j=e.scroll;"string"===typeof v&&(v=i.default.createElement("a",null,v));var T=i.Children.only(v),_={ref:function(e){e&&s(e),T&&"object"===typeof T&&T.ref&&("function"===typeof T.ref?T.ref(e):"object"===typeof T.ref&&(T.ref.current=e))},onClick:function(e){T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,h,g,m,E,j)}};return t&&(_.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),b(d,h,g,{priority:!0}))}),!e.passHref&&("a"!==T.type||"href"in T.props)||(_.href=(0,c.addBasePath)(g)),i.default.cloneElement(T,_)};t.default=d},cha2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("zPlV"),n("8Kt/")),i=n.n(a),c=n("iv2T"),u=o.a.createElement,s=function(e){var t=e.containerClassName,n=e.svgClassName;return u("div",{className:"".concat(t)},u("svg",{className:"".concat(n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 223 22"},u("path",{d:"M16.993.75h-9.69L0 20.672h3.435L10.52 1.4v19.27h3.254V1.402l7.087 19.27h3.434L16.993.75zM46.757 21.25c-5.279 0-8.135-3.688-8.46-7.303h3.362c.217 2.603 2.314 4.628 5.098 4.628 2.53 0 4.41-1.085 4.41-2.93 0-1.626-1.229-2.494-3.796-3.072l-2.892-.651c-3.905-.94-5.821-2.748-5.821-5.532C38.73 2.992 42.02.75 46.034.75c5.098 0 7.665 2.784 8.026 6.219h-3.362c-.254-2.35-2.242-3.507-4.592-3.507-2.278 0-3.941.976-3.941 2.675 0 1.374 1.012 1.989 3.94 2.676l2.893.687c3.76.867 5.64 2.82 5.64 5.965 0 3.326-3.253 5.785-7.881 5.785zM68.088 21.25c-4.808 0-7.7-2.675-7.7-8.207V1.039h3.253v12.402c0 3.47 1.663 5.134 4.447 5.134S72.5 16.91 72.5 13.44V1.039h3.254v12.004c.036 5.532-2.856 8.207-7.665 8.207zM99.543 20.96h-6.471l-7.05-19.27v19.27h-3.255V1.04h6.472l7.087 19.27V1.04h3.254v19.92h-.037zM118.922 20.96h-11.931V1.04h3.254v17.245h8.677v2.676zM124.129 20.96V1.04h3.254v19.92h-3.254zM133.312 1.04h16.162v2.675h-6.436V20.96h-3.254V3.715h-6.472V1.039zM171.854 21.25c-5.279 0-8.135-3.688-8.461-7.303h3.363c.217 2.603 2.314 4.628 5.098 4.628 2.53 0 4.411-1.085 4.411-2.93 0-1.626-1.23-2.494-3.797-3.072l-2.892-.651c-3.905-.94-5.821-2.748-5.821-5.532.036-3.398 3.326-5.64 7.339-5.64 5.098 0 7.665 2.784 8.027 6.219h-3.363c-.253-2.35-2.241-3.507-4.591-3.507-2.278 0-3.941.976-3.941 2.675 0 1.374 1.012 1.989 3.941 2.676l2.892.687c3.76.867 5.64 2.82 5.64 5.965 0 3.326-3.218 5.785-7.845 5.785zM198.355 20.96H186.28V1.04h11.858v2.675h-8.604V9.39h8.351v2.676h-8.351v6.218h8.821v2.676zM209.491 1.04h6.219l6.544 19.92h-3.326l-1.844-5.603h-8.967l-1.844 5.604h-3.362l6.58-19.922zm-.506 11.605h7.231L212.6 1.69l-3.615 10.955z"})))},f=n("YFqc"),l=n.n(f),p=o.a.createElement,b=function(){return p("header",{className:"fixed inset-x-0 top-0 block bg-white border-b border-gray-300 z-100"},p("nav",{className:"w-full max-w-screen-xl px-6 pt-4 pb-2"},p(l.a,{href:"/"},p("a",{"aria-label":"Main page",className:"inline-block py-1 border-b-4 border-transparent h-9 focus:outline-none focus:border-gray-900 sm:h-10 md:h-11 focus:bg-primary-200"},p(s,{containerClassName:"static inline-block w-auto h-6 text-gray-900 transform sm:h-7 md:h-8 hover:text-primary-600 active:scale-101",svgClassName:"h-6 fill-current sm:h-7 md:h-8"})))))},d=n("J5il"),y=n.n(d),O=r.createElement,h=function(){return O("div",{className:y.a.warningContainer},O("span",{className:y.a.warningText},"This app is currently in development phase. No data is saved outside your browser. We won't be able to reach out to you at this stage."))},g=o.a.createElement,v=function(e){var t=e.children;return g(o.a.Fragment,null,g(i.a,null,g("link",{rel:"icon",href:"".concat(c.a.basePath,"/favicon.png")}),g("title",null,"Smart Quoter"),g("meta",{name:"description",content:"Sunlit Sea's simple service to request a quote for a floating solar facility."}),g("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),g(b,null),g("main",{className:"max-w-screen-xl px-6 mx-auto mt-20",style:{minHeight:"calc(100vh - 130px)"}},t),g(h,null))},m=n("/MKj"),E=n("ANjH"),j=n("5HXA"),T=n("5bot"),_=n("V2KL"),w=n("7SBD"),S=n("Kdvc"),A=n("l8eg"),P=Object(E.combineReducers)({general:T.c,location:_.b,layout:w.b,contact:A.b,environment:S.b}),N=Object(E.combineReducers)({quote:P}),I="persist:",D="persist/FLUSH",R="persist/REHYDRATE",U="persist/PAUSE",C="persist/PERSIST",x="persist/PURGE",M="persist/REGISTER",k=-1;function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t,n,r){r.debug;var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);return e&&"object"===L(e)&&Object.keys(e).forEach((function(r){"_persist"!==r&&t[r]===n[r]&&(o[r]=e[r])})),o}function W(e){var t,n=e.blacklist||null,r=e.whitelist||null,o=e.transforms||[],a=e.throttle||0,i="".concat(void 0!==e.keyPrefix?e.keyPrefix:I).concat(e.key),c=e.storage;t=!1===e.serialize?function(e){return e}:"function"===typeof e.serialize?e.serialize:q;var u=e.writeFailHandler||null,s={},f={},l=[],p=null,b=null;function d(){if(0===l.length)return p&&clearInterval(p),void(p=null);var e=l.shift(),n=o.reduce((function(t,n){return n.in(t,e,s)}),s[e]);if(void 0!==n)try{f[e]=t(n)}catch(r){console.error("redux-persist/createPersistoid: error serializing state",r)}else delete f[e];0===l.length&&(Object.keys(f).forEach((function(e){void 0===s[e]&&delete f[e]})),b=c.setItem(i,t(f)).catch(O))}function y(e){return(!r||-1!==r.indexOf(e)||"_persist"===e)&&(!n||-1===n.indexOf(e))}function O(e){u&&u(e)}return{update:function(e){Object.keys(e).forEach((function(t){y(t)&&s[t]!==e[t]&&-1===l.indexOf(t)&&l.push(t)})),Object.keys(s).forEach((function(t){void 0===e[t]&&y(t)&&-1===l.indexOf(t)&&void 0!==s[t]&&l.push(t)})),null===p&&(p=setInterval(d,a)),s=e},flush:function(){for(;0!==l.length;)d();return b||Promise.resolve()}}}function q(e){return JSON.stringify(e)}function H(e){var t,n=e.transforms||[],r="".concat(void 0!==e.keyPrefix?e.keyPrefix:I).concat(e.key),o=e.storage;e.debug;return t=!1===e.deserialize?function(e){return e}:"function"===typeof e.deserialize?e.deserialize:B,o.getItem(r).then((function(e){if(e)try{var r={},o=t(e);return Object.keys(o).forEach((function(e){r[e]=n.reduceRight((function(t,n){return n.out(t,e,o)}),t(o[e]))})),r}catch(a){throw a}}))}function B(e){return JSON.parse(e)}function G(e){0}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Y=5e3;function K(e,t){var n=void 0!==e.version?e.version:k,r=(e.debug,void 0===e.stateReconciler?Q:e.stateReconciler),o=e.getStoredState||H,a=void 0!==e.timeout?e.timeout:Y,i=null,c=!1,u=!0,s=function(e){return e._persist.rehydrated&&i&&!u&&i.update(e),e};return function(f,l){var p=f||{},b=p._persist,d=X(p,["_persist"]);if(l.type===C){var y=!1,O=function(t,n){y||(l.rehydrate(e.key,t,n),y=!0)};if(a&&setTimeout((function(){!y&&O(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))}),a),u=!1,i||(i=W(e)),b)return J({},t(d,l),{_persist:b});if("function"!==typeof l.rehydrate||"function"!==typeof l.register)throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return l.register(e.key),o(e).then((function(t){(e.migrate||function(e,t){return Promise.resolve(e)})(t,n).then((function(e){O(e)}),(function(e){O(void 0,e)}))}),(function(e){O(void 0,e)})),J({},t(d,l),{_persist:{version:n,rehydrated:!1}})}if(l.type===x)return c=!0,l.result(function(e){var t=e.storage,n="".concat(void 0!==e.keyPrefix?e.keyPrefix:I).concat(e.key);return t.removeItem(n,G)}(e)),J({},t(d,l),{_persist:b});if(l.type===D)return l.result(i&&i.flush()),J({},t(d,l),{_persist:b});if(l.type===U)u=!0;else if(l.type===R){if(c)return J({},d,{_persist:J({},b,{rehydrated:!0})});if(l.key===e.key){var h=t(d,l),g=l.payload,v=J({},!1!==r&&void 0!==g?r(g,f,h,e):h,{_persist:J({},b,{rehydrated:!0})});return s(v)}}if(!b)return t(f,l);var m=t(d,l);return m===d?f:s(J({},m,{_persist:b}))}}function $(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re={registry:[],bootstrapped:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return te({},e,{registry:[].concat($(e.registry),[t.key])});case R:var n=e.registry.indexOf(t.key),r=$(e.registry);return r.splice(n,1),te({},e,{registry:r,bootstrapped:0===r.length});default:return e}};var ae=n("C+HQ"),ie=K({key:"root",storage:n.n(ae).a},N),ce=function(){var e=[E.applyMiddleware.apply(void 0,[])],t=j.composeWithDevTools.apply(void 0,e),n=Object(E.createStore)(ie,void 0,t),r=function(e,t,n){var r=n||!1,o=Object(E.createStore)(oe,re,t&&t.enhancer?t.enhancer:void 0),a=function(e){o.dispatch({type:M,key:e})},i=function(t,n,a){var i={type:R,payload:n,err:a,key:t};e.dispatch(i),o.dispatch(i),r&&c.getState().bootstrapped&&(r(),r=!1)},c=te({},o,{purge:function(){var t=[];return e.dispatch({type:x,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:D,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:U})},persist:function(){e.dispatch({type:C,register:a,rehydrate:i})}});return t&&t.manualPersist||c.persist(),c}(n);return{store:n,persistor:r}}();function ue(e){return(ue="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=function(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?le(e):t}(this,(e=fe(t)).call.apply(e,[this].concat(o))),be(le(n),"state",{bootstrapped:!1}),be(le(n),"_unsubscribe",void 0),be(le(n),"handlePersistorState",(function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally((function(){return n.setState({bootstrapped:!0})})):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"===typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}])&&se(n.prototype,r),o&&se(n,o),t}(r.PureComponent);be(de,"defaultProps",{children:null,loading:null});var ye=n("nOHt"),Oe=n("TZyb"),he=n("VUUK"),ge=n("L8iz"),ve=n("gSdd");var me=n("ZMgP"),Ee=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=me.a.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n;return this.f(t)&&(this.found=!0,e=(n=this.xf["@@transducer/step"](e,t))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),e},e}(),je=Object(ge.a)((function(e,t){return new Ee(e,t)})),Te=Object(ge.a)(Object(ve.a)(["find"],je,(function(e,t){for(var n=0,r=t.length;n<r;){if(e(t[n]))return t[n];n+=1}}))),_e=n("1z8A");function we(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function Se(e,t,n){for(var r=0,o=n.length;r<o;){if(e(t,n[r]))return!0;r+=1}return!1}var Ae=n("wyUd");var Pe="function"===typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t},Ne=n("ZuG0"),Ie=n("SqIO"),De=Object(Ie.a)((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}));function Re(e,t,n,r){var o=we(e);function a(e,t){return Ue(e,t,n.slice(),r.slice())}return!Se((function(e,t){return!Se(a,t,e)}),we(t),o)}function Ue(e,t,n,r){if(Pe(e,t))return!0;var o=De(e);if(o!==De(t))return!1;if(null==e||null==t)return!1;if("function"===typeof e["fantasy-land/equals"]||"function"===typeof t["fantasy-land/equals"])return"function"===typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"===typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"===typeof e.equals||"function"===typeof t.equals)return"function"===typeof e.equals&&e.equals(t)&&"function"===typeof t.equals&&t.equals(e);switch(o){case"Arguments":case"Array":case"Object":if("function"===typeof e.constructor&&"Promise"===function(e){var t=String(e).match(/^function (\w*)/);return null==t?"":t[1]}(e.constructor))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!==typeof t||!Pe(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!Pe(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var a=n.length-1;a>=0;){if(n[a]===e)return r[a]===t;a-=1}switch(o){case"Map":return e.size===t.size&&Re(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&Re(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var i=Object(Ne.a)(e);if(i.length!==Object(Ne.a)(t).length)return!1;var c=n.concat([e]),u=r.concat([t]);for(a=i.length-1;a>=0;){var s=i[a];if(!Object(Ae.a)(s,t)||!Ue(t[s],e[s],c,u))return!1;a-=1}return!0}var Ce=Object(ge.a)((function(e,t){return Ue(e,t,[],[])})),xe=Object(_e.a)((function(e,t,n){return Ce(t,n[e])})),Me=!1,ke=function(e,t){var n=[Oe.a.location,Oe.a.layoutAndInformation,Oe.a.contactInformation,Oe.a.environmentInformation],r=[Oe.a.initial];if(he.a("route",r).includes(t)){var o=Te(xe("stage",e),n);if(void 0!==o&&o.route!==t)return o.route}},Le=function(){var e=Object(ye.useRouter)(),t=e.pathname,n=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}(e.pathname);Object(r.useEffect)((function(){n!==t&&gtag&&(console.debug("\ud83d\udd26 new pageview ",t),gtag("event","page_view",{page_path:t}))}))},ze=r.createElement,Ve=function(e){var t=e.children;return function(){var e=Object(ye.useRouter)(),t=Object(m.c)((function(e){return e.quote.general.stage}));if(!Me){Me=!0;var n=ke(t,e.pathname);void 0!==n&&(e.replace(n),console.log("\ud83c\udfde","restoring stage",n))}}(),Le(),ze(r.Fragment,null,t)},Qe=(n("V+g0"),o.a.createElement);t.default=function(e){var t=e.Component,n=e.pageProps;return Qe(v,null,Qe(de,{persistor:ce.persistor},Qe(m.a,{store:ce.store},Qe(Ve,null,Qe(t,n)))))}},gSdd:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("/PtW");function o(e){return null!=e&&"function"===typeof e["@@transducer/step"]}function a(e,t,n){return function(){if(0===arguments.length)return n();var a=Array.prototype.slice.call(arguments,0),i=a.pop();if(!Object(r.a)(i)){for(var c=0;c<e.length;){if("function"===typeof i[e[c]])return i[e[c]].apply(i,a);c+=1}if(o(i)){var u=t.apply(null,a);return u(i)}}return n.apply(this,arguments)}}},"jZG+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("GZJ0"),o=function(e){return e===r.a.NOT_INITIATED?r.a.INITIATED:e}},l8eg:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n("rePB"),o=n("GZJ0"),a=n("WExX"),i=n("jZG+");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={setStageComplete:Object(a.createAction)("QUOTE_CONTACT/SET_COMPLETE")(),setName:Object(a.createAction)("QUOTE_CONTACT/SET_NAME",(function(e){return e}))(),setEmail:Object(a.createAction)("QUOTE_CONTACT/SET_EMAIL",(function(e){return e}))(),setSendQuoteInEmail:Object(a.createAction)("QUOTE_CONTACT/SET_SEND_QUOTE_EMAIL",(function(e){return e}))(),setIsABusiness:Object(a.createAction)("QUOTE_CONTACT/SET_IS_A_BUSINESS",(function(e){return e}))(),setBusinessName:Object(a.createAction)("QUOTE_CONTACT/SET_BUSINESS_NAME",(function(e){return e}))()},f=Object(a.createReducer)({businessName:"",email:"",isABusiness:!1,name:"",sendQuoteInEmail:!1,stage:o.a.NOT_INITIATED}).handleAction(s.setName,(function(e,t){return u(u({},e),{},{name:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setStageComplete,(function(e,t){return u(u({},e),{},{stage:o.a.COMPLETE})})).handleAction(s.setEmail,(function(e,t){return u(u({},e),{},{email:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setSendQuoteInEmail,(function(e,t){return u(u({},e),{},{sendQuoteInEmail:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setIsABusiness,(function(e,t){return u(u({},e),{},{isABusiness:t.payload,stage:Object(i.a)(e.stage)})})).handleAction(s.setBusinessName,(function(e,t){return u(u({},e),{},{businessName:t.payload,stage:Object(i.a)(e.stage)})}))},sNsB:function(e,t,n){"use strict";var r=n("L8iz"),o=n("gSdd");var a=n("OEMQ"),i=n("ZMgP"),c=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=i.a.init,e.prototype["@@transducer/result"]=i.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),u=Object(r.a)((function(e,t){return new c(e,t)})),s=n("YR7Z"),f=n("ZuG0"),l=Object(r.a)(Object(o.a)(["fantasy-land/map","map"],u,(function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return Object(s.a)(t.length,(function(){return e.call(this,t.apply(this,arguments))}));case"[object Object]":return Object(a.a)((function(n,r){return n[r]=e(t[r]),n}),{},Object(f.a)(t));default:return function(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}(e,t)}})));t.a=l},wyUd:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(t,e)}n.d(t,"a",(function(){return r}))},ycJa:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){}t.__esModule=!0,t.default=function(e){var t="".concat(e,"Storage");return function(e){if("object"!==("undefined"===typeof self?"undefined":r(self))||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch(o){return!1}return!0}(t)?self[t]:a};var a={getItem:o,setItem:o,removeItem:o}},zPlV:function(e,t,n){}},[[0,0,2,1,3]]]);