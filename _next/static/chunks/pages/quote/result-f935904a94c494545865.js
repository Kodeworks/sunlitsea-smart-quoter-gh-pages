_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"H+vm":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote/result",function(){return n("yPD0")}])},HFPn:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("q1tI"),a=r.createElement,o=function(t){var e=t.text;return a("h1",null,null!==e&&void 0!==e?e:"Provide data on the installation")}},NXGs:function(t,e,n){t.exports={invisible:"quote-mini-navlinks_invisible__3BVlW",miniNavlinks:"quote-mini-navlinks_miniNavlinks__eMeOi",navlinksContainer:"quote-mini-navlinks_navlinksContainer__1mlcj",listContainer:"quote-mini-navlinks_listContainer__1-sQG",listItem:"quote-mini-navlinks_listItem__3Q4nY",navlink:"quote-mini-navlinks_navlink__fe42i",initiated:"quote-mini-navlinks_initiated__23MQj",currentPath:"quote-mini-navlinks_currentPath__2n46y"}},TiuG:function(t,e,n){t.exports={linkContainer:"result_linkContainer__2gIWs",getInfoText:"result_getInfoText__2_h-i"}},X1FW:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r=n("rePB"),a=n("q1tI"),o=n("nOHt"),i=n("YFqc"),c=n.n(i),u=n("NXGs"),l=n.n(u),s=n("TZyb"),f=n("/MKj"),p=n("GZJ0"),v=a.createElement;function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{backTo:!1},e=Object(o.useRouter)(),n=e.pathname,r=Object(f.c)((function(t){return t.quote})),a=[m(m({},s.a.layoutAndInformation),{},{stage:r.layout.stage}),m(m({},s.a.contactInformation),{},{stage:r.contact.stage}),m(m({},s.a.environmentInformation),{},{stage:r.environment.stage})].map((function(t){return m(m({},t),{},{currentPath:t.route===n,initiated:t.stage===p.a.INITIATED})}));return v("div",{className:"".concat(l.a.miniNavlinks)},v("p",{className:"mb-2 text-lg ".concat(!t.backTo&&l.a.invisible)},"Back to:"),v("nav",{className:"".concat(l.a.navlinksContainer)},v("ul",{className:"".concat(l.a.listContainer)},a.map((function(t){return v("li",{className:"".concat(l.a.listItem," ").concat(t.currentPath?l.a.currentPath:""," ").concat(t.initiated?l.a.initiated:""),key:t.route},v(c.a,{href:t.route,key:t.route},v("a",{className:"".concat(l.a.navlink)},v("span",null,t.title))))})))))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("J4zp"),a=n("284h");e.__esModule=!0,e.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),l=new Map,s=window.IntersectionObserver,f={};var p=function(t,e){var n=o||(s?o=new s((function(t){t.forEach((function(t){if(l.has(t.target)){var e=l.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(t.target),l.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),l.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}l.delete(t)}):function(){}};function v(t,e,n,r){(0,c.isLocalURL)(e)&&(t.prefetch(e,n,r).catch((function(t){0})),f[e+"%"+n]=!0)}var d=function(t){var e=!1!==t.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],d=(0,u.useRouter)(),m=d&&d.pathname||"/",_=i.default.useMemo((function(){var e=(0,c.resolveHref)(m,t.href);return{href:e,as:t.as?(0,c.resolveHref)(m,t.as):e}}),[m,t.href,t.as]),h=_.href,g=_.as;i.default.useEffect((function(){if(e&&s&&o&&o.tagName&&(0,c.isLocalURL)(h)&&!f[h+"%"+g])return p(o,(function(){v(d,h,g)}))}),[e,o,h,g,d]);var b=t.children,y=t.replace,k=t.shallow,O=t.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var w=i.Children.only(b),j={ref:function(t){t&&l(t),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(t):"object"===typeof w.ref&&(w.ref.current=t))},onClick:function(t){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(t),t.defaultPrevented||function(t,e,n,r,a,o,i){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(n))&&(t.preventDefault(),null==i&&(i=r.indexOf("#")<0),e[a?"replace":"push"](n,r,{shallow:o}).then((function(t){t&&i&&(window.scrollTo(0,0),document.body.focus())})))}(t,d,h,g,y,k,O)}};return e&&(j.onMouseEnter=function(t){(0,c.isLocalURL)(h)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(t),v(d,h,g,{priority:!0}))}),!t.passHref&&("a"!==w.type||"href"in w.props)||(j.href=(0,c.addBasePath)(g)),i.default.cloneElement(w,j)};e.default=d},yPD0:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n("8Kt/"),o=n.n(a),i=n("HFPn"),c=n("X1FW"),u=n("TiuG"),l=n.n(u),s=n("/MKj"),f=r.createElement,p=function(){var t=Object(s.c)((function(t){return t.quote.layout})),e=Object(r.useMemo)((function(){var e;return 0===(null===(e=t.coordinates)||void 0===e?void 0:e.length)?"":"https://glintsolar.no/location-info?coordinates=".concat(t.coordinates.map((function(t){return"lat".concat(t.lat.toFixed(6),"lng").concat(t.lng.toFixed(6))})).join(";"))}),[t]);return""===e?null:f("a",{href:e,target:"_blank",style:{textDecoration:"underline"}},"glintsolar.no")},v=r.createElement;e.default=function(){return v(r.Fragment,null,v(o.a,null,v("title",null,"Smart Quoter - Your Quote")),v(i.a,{text:"Initial quote for Middagsbukta"}),v(c.a,{backTo:!0}),v("div",{className:"p-4 rounded shadow-lg"},v("p",{className:"p-4 text-center"},"Resulting quote will be displayed here"),v("div",{className:"".concat(l.a.linkContainer)},v("p",{className:"p-4 text-center ".concat(l.a.getInfoText)},"Get more information about your site at"),v(p,null))))}}},[["H+vm",0,2,1,3]]]);