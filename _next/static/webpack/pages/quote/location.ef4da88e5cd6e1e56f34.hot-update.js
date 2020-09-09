webpackHotUpdate_N_E("pages/quote/location",{

/***/ "./components/quote/location/location-map.tsx":
/*!****************************************************!*\
  !*** ./components/quote/location/location-map.tsx ***!
  \****************************************************/
/*! exports provided: LocationMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocationMap\", function() { return LocationMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _location_map_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-map.module.scss */ \"./components/quote/location/location-map.module.scss\");\n/* harmony import */ var _location_map_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_location_map_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.module.scss */ \"./components/quote/location/map.module.scss\");\n/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _lib_quote_location_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/quote/location-reducer */ \"./lib/quote/location-reducer.ts\");\n/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useMap */ \"./components/quote/location/useMap.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/components/quote/location/location-map.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\nvar LocationMap = function LocationMap() {\n  _s();\n\n  var map = Object(_useMap__WEBPACK_IMPORTED_MODULE_5__[\"useMap\"])({\n    handleChangeZoom: true,\n    handleChangeCenter: true\n  });\n  var locationStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.quote.location.locationStatus;\n  });\n  var previousMap = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('🏞', map === previousMap.current); // @ts-ignore\n\n    previousMap.current = map;\n  }, [map]);\n  return __jsx(\"div\", {\n    className: \"\".concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mapContainer, \" \").concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.extendedMap),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: map.domRef,\n    className: \"\".concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.extendedMap, \" \").concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mapElement),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), locationStatus !== _lib_quote_location_reducer__WEBPACK_IMPORTED_MODULE_4__[\"LocationStatus\"].NONE && __jsx(\"div\", {\n    className: _location_map_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.instruction,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Center the map on the location where you want the installation.\")));\n};\n\n_s(LocationMap, \"ouVuSSopur4oMGG4xEpbrdDZpqA=\", false, function () {\n  return [_useMap__WEBPACK_IMPORTED_MODULE_5__[\"useMap\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = LocationMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"LocationMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZS9sb2NhdGlvbi9sb2NhdGlvbi1tYXAudHN4PzUxNDYiXSwibmFtZXMiOlsiTG9jYXRpb25NYXAiLCJtYXAiLCJ1c2VNYXAiLCJoYW5kbGVDaGFuZ2Vab29tIiwiaGFuZGxlQ2hhbmdlQ2VudGVyIiwibG9jYXRpb25TdGF0dXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicXVvdGUiLCJsb2NhdGlvbiIsInByZXZpb3VzTWFwIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJtYXBTdHlsZXMiLCJtYXBDb250YWluZXIiLCJleHRlbmRlZE1hcCIsImRvbVJlZiIsIm1hcEVsZW1lbnQiLCJMb2NhdGlvblN0YXR1cyIsIk5PTkUiLCJzdHlsZXMiLCJpbnN0cnVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBeUIsR0FBRyxTQUE1QkEsV0FBNEIsR0FBTTtBQUFBOztBQUM3QyxNQUFNQyxHQUFHLEdBQUdDLHNEQUFNLENBQUM7QUFBRUMsb0JBQWdCLEVBQUUsSUFBcEI7QUFBMEJDLHNCQUFrQixFQUFFO0FBQTlDLEdBQUQsQ0FBbEI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLCtEQUFXLENBQ2hDLFVBQUNDLEtBQUQ7QUFBQSxXQUE2QkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJKLGNBQWxEO0FBQUEsR0FEZ0MsQ0FBbEM7QUFJQSxNQUFNSyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQmIsR0FBRyxLQUFLUyxXQUFXLENBQUNLLE9BQXRDLEVBRGMsQ0FFZDs7QUFDQUwsZUFBVyxDQUFDSyxPQUFaLEdBQXNCZCxHQUF0QjtBQUNELEdBSlEsRUFJTixDQUFDQSxHQUFELENBSk0sQ0FBVDtBQU1BLFNBQ0U7QUFBSyxhQUFTLFlBQUtlLHVEQUFTLENBQUNDLFlBQWYsY0FBK0JELHVEQUFTLENBQUNFLFdBQXpDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFakIsR0FBRyxDQUFDa0IsTUFEWDtBQUVFLGFBQVMsWUFBS0gsdURBQVMsQ0FBQ0UsV0FBZixjQUE4QkYsdURBQVMsQ0FBQ0ksVUFBeEMsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLR2YsY0FBYyxLQUFLZ0IsMEVBQWMsQ0FBQ0MsSUFBbEMsSUFDQztBQUFLLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBREYsQ0FOSixDQURGO0FBZUQsQ0E1Qk07O0dBQU14QixXO1VBQ0NFLDhDLEVBQ1dJLHVEOzs7S0FGWk4sVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcXVvdGUvbG9jYXRpb24vbG9jYXRpb24tbWFwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2NhdGlvbi1tYXAubW9kdWxlLnNjc3MnO1xuaW1wb3J0IG1hcFN0eWxlcyBmcm9tICcuL21hcC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IExvY2F0aW9uU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vbGliL3F1b3RlL2xvY2F0aW9uLXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlTWFwIH0gZnJvbSAnLi91c2VNYXAnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBMb2NhdGlvbk1hcDogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBtYXAgPSB1c2VNYXAoeyBoYW5kbGVDaGFuZ2Vab29tOiB0cnVlLCBoYW5kbGVDaGFuZ2VDZW50ZXI6IHRydWUgfSk7XG4gIGNvbnN0IGxvY2F0aW9uU3RhdHVzID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sb2NhdGlvbi5sb2NhdGlvblN0YXR1c1xuICApO1xuXG4gIGNvbnN0IHByZXZpb3VzTWFwID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn4+eJywgbWFwID09PSBwcmV2aW91c01hcC5jdXJyZW50KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJldmlvdXNNYXAuY3VycmVudCA9IG1hcDtcbiAgfSwgW21hcF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWFwU3R5bGVzLm1hcENvbnRhaW5lcn0gJHttYXBTdHlsZXMuZXh0ZW5kZWRNYXB9YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17bWFwLmRvbVJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHttYXBTdHlsZXMuZXh0ZW5kZWRNYXB9ICR7bWFwU3R5bGVzLm1hcEVsZW1lbnR9YH1cbiAgICAgIC8+XG4gICAgICB7bG9jYXRpb25TdGF0dXMgIT09IExvY2F0aW9uU3RhdHVzLk5PTkUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluc3RydWN0aW9ufT5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIENlbnRlciB0aGUgbWFwIG9uIHRoZSBsb2NhdGlvbiB3aGVyZSB5b3Ugd2FudCB0aGUgaW5zdGFsbGF0aW9uLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/quote/location/location-map.tsx\n");

/***/ })

})