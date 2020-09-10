webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/utils/useGoogleAnalyticsPageReporting.ts":
/*!******************************************************!*\
  !*** ./lib/utils/useGoogleAnalyticsPageReporting.ts ***!
  \******************************************************/
/*! exports provided: useGoogleAnalyticsPageReporting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGoogleAnalyticsPageReporting\", function() { return useGoogleAnalyticsPageReporting; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePrevious */ \"./lib/utils/usePrevious.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\nvar useGoogleAnalyticsPageReporting = function useGoogleAnalyticsPageReporting() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  var pathname = router.pathname;\n  var previousPathname = Object(_usePrevious__WEBPACK_IMPORTED_MODULE_2__[\"usePrevious\"])(router.pathname);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (previousPathname !== pathname) {\n      console.log('🏞', 'report pathname change ', pathname);\n      console.log('🏞');\n    }\n  });\n};\n\n_s(useGoogleAnalyticsPageReporting, \"rCLLM6/IKJn2T/NGpgUiNd1Fim8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"], _usePrevious__WEBPACK_IMPORTED_MODULE_2__[\"usePrevious\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL3VzZUdvb2dsZUFuYWx5dGljc1BhZ2VSZXBvcnRpbmcudHM/ZWMwMSJdLCJuYW1lcyI6WyJ1c2VHb29nbGVBbmFseXRpY3NQYWdlUmVwb3J0aW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJwcmV2aW91c1BhdGhuYW1lIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSwrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLEdBQU07QUFBQTs7QUFDbkQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUF4QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHQyxnRUFBVyxDQUFDSixNQUFNLENBQUNFLFFBQVIsQ0FBcEM7QUFDQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsZ0JBQWdCLEtBQUtELFFBQXpCLEVBQW1DO0FBQ2pDSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLHlCQUFsQixFQUE2Q0wsUUFBN0M7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNEO0FBQ0YsR0FMUSxDQUFUO0FBTUQsQ0FWTTs7R0FBTVIsK0I7VUFDSUUscUQsRUFFVUcsd0QiLCJmaWxlIjoiLi9saWIvdXRpbHMvdXNlR29vZ2xlQW5hbHl0aWNzUGFnZVJlcG9ydGluZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAnLi91c2VQcmV2aW91cyc7XG5cbmV4cG9ydCBjb25zdCB1c2VHb29nbGVBbmFseXRpY3NQYWdlUmVwb3J0aW5nID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWU7XG4gIGNvbnN0IHByZXZpb3VzUGF0aG5hbWUgPSB1c2VQcmV2aW91cyhyb3V0ZXIucGF0aG5hbWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2aW91c1BhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgY29uc29sZS5sb2coJ/Cfj54nLCAncmVwb3J0IHBhdGhuYW1lIGNoYW5nZSAnLCBwYXRobmFtZSk7XG4gICAgICBjb25zb2xlLmxvZygn8J+PnicsIClcbiAgICB9XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils/useGoogleAnalyticsPageReporting.ts\n");

/***/ })

})