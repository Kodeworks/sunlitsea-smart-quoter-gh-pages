webpackHotUpdate_N_E("pages/quote/location",{

/***/ "./components/quote/location/location-map.tsx":
/*!****************************************************!*\
  !*** ./components/quote/location/location-map.tsx ***!
  \****************************************************/
/*! exports provided: LocationMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocationMap\", function() { return LocationMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _location_map_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-map.module.scss */ \"./components/quote/location/location-map.module.scss\");\n/* harmony import */ var _location_map_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_location_map_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.module.scss */ \"./components/quote/location/map.module.scss\");\n/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _lib_quote_location_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/quote/location-reducer */ \"./lib/quote/location-reducer.ts\");\n/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useMap */ \"./components/quote/location/useMap.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/components/quote/location/location-map.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\nvar LocationMap = function LocationMap() {\n  _s();\n\n  var map = Object(_useMap__WEBPACK_IMPORTED_MODULE_5__[\"useMap\"])({\n    handleChangeZoom: true,\n    handleChangeCenter: true\n  });\n  var locationStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.quote.location.locationStatus;\n  });\n  var previousMap = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('🏞', map.domRef === previousMap.current.domRef); // @ts-ignore\n\n    previousMap.current = map;\n  }, [map]);\n  return __jsx(\"div\", {\n    className: \"\".concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mapContainer, \" \").concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.extendedMap),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: map.domRef,\n    className: \"\".concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.extendedMap, \" \").concat(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mapElement),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), locationStatus !== _lib_quote_location_reducer__WEBPACK_IMPORTED_MODULE_4__[\"LocationStatus\"].NONE && __jsx(\"div\", {\n    className: _location_map_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.instruction,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Center the map on the location where you want the installation.\")));\n};\n\n_s(LocationMap, \"ouVuSSopur4oMGG4xEpbrdDZpqA=\", false, function () {\n  return [_useMap__WEBPACK_IMPORTED_MODULE_5__[\"useMap\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = LocationMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"LocationMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZS9sb2NhdGlvbi9sb2NhdGlvbi1tYXAudHN4PzUxNDYiXSwibmFtZXMiOlsiTG9jYXRpb25NYXAiLCJtYXAiLCJ1c2VNYXAiLCJoYW5kbGVDaGFuZ2Vab29tIiwiaGFuZGxlQ2hhbmdlQ2VudGVyIiwibG9jYXRpb25TdGF0dXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicXVvdGUiLCJsb2NhdGlvbiIsInByZXZpb3VzTWFwIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRvbVJlZiIsImN1cnJlbnQiLCJtYXBTdHlsZXMiLCJtYXBDb250YWluZXIiLCJleHRlbmRlZE1hcCIsIm1hcEVsZW1lbnQiLCJMb2NhdGlvblN0YXR1cyIsIk5PTkUiLCJzdHlsZXMiLCJpbnN0cnVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBeUIsR0FBRyxTQUE1QkEsV0FBNEIsR0FBTTtBQUFBOztBQUM3QyxNQUFNQyxHQUFHLEdBQUdDLHNEQUFNLENBQUM7QUFBRUMsb0JBQWdCLEVBQUUsSUFBcEI7QUFBMEJDLHNCQUFrQixFQUFFO0FBQTlDLEdBQUQsQ0FBbEI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLCtEQUFXLENBQ2hDLFVBQUNDLEtBQUQ7QUFBQSxXQUE2QkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJKLGNBQWxEO0FBQUEsR0FEZ0MsQ0FBbEM7QUFJQSxNQUFNSyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQmIsR0FBRyxDQUFDYyxNQUFKLEtBQWVMLFdBQVcsQ0FBQ00sT0FBWixDQUFvQkQsTUFBckQsRUFEYyxDQUVkOztBQUNBTCxlQUFXLENBQUNNLE9BQVosR0FBc0JmLEdBQXRCO0FBQ0QsR0FKUSxFQUlOLENBQUNBLEdBQUQsQ0FKTSxDQUFUO0FBTUEsU0FDRTtBQUFLLGFBQVMsWUFBS2dCLHVEQUFTLENBQUNDLFlBQWYsY0FBK0JELHVEQUFTLENBQUNFLFdBQXpDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFbEIsR0FBRyxDQUFDYyxNQURYO0FBRUUsYUFBUyxZQUFLRSx1REFBUyxDQUFDRSxXQUFmLGNBQThCRix1REFBUyxDQUFDRyxVQUF4QyxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtHZixjQUFjLEtBQUtnQiwwRUFBYyxDQUFDQyxJQUFsQyxJQUNDO0FBQUssYUFBUyxFQUFFQyxnRUFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFERixDQU5KLENBREY7QUFlRCxDQTVCTTs7R0FBTXhCLFc7VUFDQ0UsOEMsRUFDV0ksdUQ7OztLQUZaTixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9xdW90ZS9sb2NhdGlvbi9sb2NhdGlvbi1tYXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvY2F0aW9uLW1hcC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgbWFwU3R5bGVzIGZyb20gJy4vbWFwLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU21hcnRRdW90ZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9yb290LXJlZHVjZXInO1xuaW1wb3J0IHsgTG9jYXRpb25TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9saWIvcXVvdGUvbG9jYXRpb24tcmVkdWNlcic7XG5pbXBvcnQgeyB1c2VNYXAgfSBmcm9tICcuL3VzZU1hcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IExvY2F0aW9uTWFwOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IG1hcCA9IHVzZU1hcCh7IGhhbmRsZUNoYW5nZVpvb206IHRydWUsIGhhbmRsZUNoYW5nZUNlbnRlcjogdHJ1ZSB9KTtcbiAgY29uc3QgbG9jYXRpb25TdGF0dXMgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxvY2F0aW9uLmxvY2F0aW9uU3RhdHVzXG4gICk7XG5cbiAgY29uc3QgcHJldmlvdXNNYXAgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ/Cfj54nLCBtYXAuZG9tUmVmID09PSBwcmV2aW91c01hcC5jdXJyZW50LmRvbVJlZik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByZXZpb3VzTWFwLmN1cnJlbnQgPSBtYXA7XG4gIH0sIFttYXBdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake21hcFN0eWxlcy5tYXBDb250YWluZXJ9ICR7bWFwU3R5bGVzLmV4dGVuZGVkTWFwfWB9PlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e21hcC5kb21SZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7bWFwU3R5bGVzLmV4dGVuZGVkTWFwfSAke21hcFN0eWxlcy5tYXBFbGVtZW50fWB9XG4gICAgICAvPlxuICAgICAge2xvY2F0aW9uU3RhdHVzICE9PSBMb2NhdGlvblN0YXR1cy5OT05FICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnN0cnVjdGlvbn0+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBDZW50ZXIgdGhlIG1hcCBvbiB0aGUgbG9jYXRpb24gd2hlcmUgeW91IHdhbnQgdGhlIGluc3RhbGxhdGlvbi5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/quote/location/location-map.tsx\n");

/***/ })

})