_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"8R5X":function(t,n,e){t.exports={instruction:"location-map_instruction__2gsTL"}},NwXK:function(t,n,e){t.exports={container:"location_container__1itV0",locationInputSection:"location_locationInputSection__1Ubba"}},VUUK:function(t,n,e){"use strict";var r=e("L8iz"),a=e("sNsB"),o=Number.isInteger||function(t){return t<<0===t},c=e("YQsy"),u=Object(r.a)((function(t,n){return t.map((function(t){for(var e,r=n,a=0;a<t.length;){if(null==r)return;e=t[a],r=o(e)?Object(c.a)(e,r):r[e],a+=1}return r}))})),i=Object(r.a)((function(t,n){return u([t],n)[0]})),l=Object(r.a)((function(t,n){return i([t],n)})),s=Object(r.a)((function(t,n){return Object(a.a)(l(t),n)}));n.a=s},YR7Z:function(t,n,e){"use strict";var r=e("JVDt"),a=e("SqIO"),o=e("L8iz"),c=e("nr3+");var u=Object(o.a)((function(t,n){return 1===t?Object(a.a)(n):Object(r.a)(t,function t(n,e,a){return function(){for(var o=[],u=0,i=n,l=0;l<e.length||u<arguments.length;){var s;l<e.length&&(!Object(c.a)(e[l])||u>=arguments.length)?s=e[l]:(s=arguments[u],u+=1),o[l]=s,Object(c.a)(s)||(i-=1),l+=1}return i<=0?a.apply(this,o):Object(r.a)(i,t(n,o,a))}}(t,[],n))}));n.a=u},ZMgP:function(t,n,e){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},Zbum:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),a=e("8Kt/"),o=e.n(a),c=e("HFPn"),u=e("V2KL"),i=e("hYYJ"),l=e("NKCw"),s=e("nOHt"),f=e("5bot"),b=e("TZyb"),p=e("xQut"),O=e("85k0"),m=e("5HI6"),j=null,d=e("psed"),g=e("/MKj"),h=e("ho9+"),v=e("sNsB"),y=e("SqIO"),N=Object(y.a)((function(t){return function(){return t}})),E=Object(y.a)((function(t){for(var n={},e=0;e<t.length;)n[t[e][0]]=t[e][1],e+=1;return n})),_=e("VUUK"),w=r.createElement,S=function(t){var n=t.register,e=t.id,a=function(){var t=Object(m.a)();return null!==j?j:t?j=new google.maps.places.AutocompleteService:null}(),o=Object(r.useState)([]),c=o[0],l=o[1],s=Object(i.a)(u.c.updateLocation),f=Object(g.c)((function(t){return t.quote.location.locationStatus})),b=Object(i.a)(u.c.setLocationStatus),p=Object(r.useMemo)((function(){return h.a(v.a((function(t){return[t,function(){return f!==t?b(t):N(null)}]})),E)([u.a.NONE,u.a.LOCATION_TEXT_CENTER,u.a.OVERRIDE_COORD_CENTER])}),[b,f]),O=Object(r.useCallback)(Object(d.a)((function(t){null!==a&&a.getPlacePredictions({input:t},(function(t){l(_.a("description",null!==t&&void 0!==t?t:[]))}))}),300),[a]),y=Object(g.c)((function(t){return t.quote.location.locationText}));return w("div",{className:"flex flex-col relative"},w("input",{type:"text",name:"location",id:e,ref:n({required:!0}),className:"w-full px-1 pt-1 border-b border-black sm:w-72 md:w-80 lg:w-96 focus:outline-none focus:bg-primary-200",onChange:function(t){s(t.target.value),O(t.target.value),f===u.a.LOCATION_TEXT_CENTER&&p.OVERRIDE_COORD_CENTER()},value:y,autoComplete:"off"}),c.length>0&&w("div",{className:"flex flex-col absolute top-100p border-solid border-1 border-black bg-white"},c.map((function(t,n){return w("span",{key:n,className:"cursor-pointer hover:bg-blue-300",onClick:function(){s(t),p.LOCATION_TEXT_CENTER(),l([])}},t)}))))},x=e("NwXK"),C=e.n(x),T=e("8R5X"),I=e.n(T),R=e("bZJt"),L=e.n(R),k=e("AKxJ"),P=r.createElement,A=function(){var t=Object(k.a)({handleChangeZoom:!0,handleChangeCenter:!0}),n=Object(g.c)((function(t){return t.quote.location.locationStatus}));return P("div",{className:L.a.mapContainer},P("div",{ref:t.domRef,className:L.a.mapElement}),n!==u.a.NONE&&P("div",{className:I.a.instruction},P("span",null,"Center the map on the location where you want the installation.")))},Z=r.createElement;n.default=function(){var t=Object(i.a)(u.c.setStageComplete),n=Object(i.a)(f.b.updateStage),e=Object(s.useRouter)(),a=Object(l.a)(),m=a.register,j=a.handleSubmit,d=a.errors,g=Object(r.useCallback)((function(){t(),n(f.a.LAYOUT),e.push(b.a.layoutAndInformation.route)}),[t]);return Z(r.Fragment,null,Z(o.a,null,Z("title",null,"Smart Quoter - Location")),Z(c.a,null),Z("form",{onSubmit:j(g),className:C.a.container,onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()}},Z("div",{className:"flex flex-col align-center ".concat(C.a.locationInputSection)},Z("label",{htmlFor:"location",className:"mb-2 text-lg sm:mb-0"},"Location for installation"),Z(S,{register:m,id:"location"}),d.location&&Z("p",{className:"mt-2 text-alert"},"Location is required")),Z(A,null),Z("div",{className:"mx-auto mt-4 sm:mt-0"},Z(p.a,{type:"submit",label:"Continue",className:"flex flex-no-wrap items-center px-6 shadow-md"},Z(O.a,{className:"inline w-5 ml-4 fill-current"})))))}},ZuG0:function(t,n,e){"use strict";var r=e("SqIO"),a=e("wyUd"),o=Object.prototype.toString,c=function(){return"[object Arguments]"===o.call(arguments)?function(t){return"[object Arguments]"===o.call(t)}:function(t){return Object(a.a)("callee",t)}}(),u=!{toString:null}.propertyIsEnumerable("toString"),i=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],l=function(){return arguments.propertyIsEnumerable("length")}(),s=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},f="function"!==typeof Object.keys||l?Object(r.a)((function(t){if(Object(t)!==t)return[];var n,e,r=[],o=l&&c(t);for(n in t)!Object(a.a)(n,t)||o&&"length"===n||(r[r.length]=n);if(u)for(e=i.length-1;e>=0;)n=i[e],Object(a.a)(n,t)&&!s(r,n)&&(r[r.length]=n),e-=1;return r})):Object(r.a)((function(t){return Object(t)!==t?[]:Object.keys(t)}));n.a=f},gSdd:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("/PtW");function a(t){return null!=t&&"function"===typeof t["@@transducer/step"]}function o(t,n,e){return function(){if(0===arguments.length)return e();var o=Array.prototype.slice.call(arguments,0),c=o.pop();if(!Object(r.a)(c)){for(var u=0;u<t.length;){if("function"===typeof c[t[u]])return c[t[u]].apply(c,o);u+=1}if(a(c)){var i=n.apply(null,o);return i(c)}}return e.apply(this,arguments)}}},lgnb:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote/location",function(){return e("Zbum")}])},sNsB:function(t,n,e){"use strict";var r=e("L8iz"),a=e("gSdd");var o=e("OEMQ"),c=e("ZMgP"),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=c.a.init,t.prototype["@@transducer/result"]=c.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),i=Object(r.a)((function(t,n){return new u(t,n)})),l=e("YR7Z"),s=e("ZuG0"),f=Object(r.a)(Object(a.a)(["fantasy-land/map","map"],i,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Object(l.a)(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return Object(o.a)((function(e,r){return e[r]=t(n[r]),e}),{},Object(s.a)(n));default:return function(t,n){for(var e=0,r=n.length,a=Array(r);e<r;)a[e]=t(n[e]),e+=1;return a}(t,n)}})));n.a=f},wyUd:function(t,n,e){"use strict";function r(t,n){return Object.prototype.hasOwnProperty.call(n,t)}e.d(n,"a",(function(){return r}))}},[["lgnb",0,2,1,3,4]]]);