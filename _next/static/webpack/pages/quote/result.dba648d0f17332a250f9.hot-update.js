webpackHotUpdate_N_E("pages/quote/result",{

/***/ "./lib/effect/effect.ts":
/*!******************************!*\
  !*** ./lib/effect/effect.ts ***!
  \******************************/
/*! exports provided: EFFECT_UNIT, calculateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EFFECT_UNIT\", function() { return EFFECT_UNIT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateEffect\", function() { return calculateEffect; });\nvar EFFECT_UNIT = 'kWp';\nvar calculateEffect = function calculateEffect(numberFloats) {\n  return numberFloats * 0.5;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2VmZmVjdC9lZmZlY3QudHM/NjlmZiJdLCJuYW1lcyI6WyJFRkZFQ1RfVU5JVCIsImNhbGN1bGF0ZUVmZmVjdCIsIm51bWJlckZsb2F0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHLEtBQXBCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxZQUFEO0FBQUEsU0FBMEJBLFlBQVksR0FBRyxHQUF6QztBQUFBLENBQXhCIiwiZmlsZSI6Ii4vbGliL2VmZmVjdC9lZmZlY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRUZGRUNUX1VOSVQgPSAna1dwJztcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUVmZmVjdCA9IChudW1iZXJGbG9hdHM6IG51bWJlcikgPT4gbnVtYmVyRmxvYXRzICogMC41O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/effect/effect.ts\n");

/***/ }),

/***/ "./pages/quote/result.tsx":
/*!********************************!*\
  !*** ./pages/quote/result.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/quote/quote-page-heading */ \"./components/quote/quote-page-heading.tsx\");\n/* harmony import */ var _components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quote/quote-mini-navlinks */ \"./components/quote/quote-mini-navlinks.tsx\");\n/* harmony import */ var _result_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result.module.scss */ \"./pages/quote/result.module.scss\");\n/* harmony import */ var _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_result_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_quote_glintSolarLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/quote/glintSolarLink */ \"./components/quote/glintSolarLink.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_quote_location_completeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/quote/location/completeMap */ \"./components/quote/location/completeMap.tsx\");\n/* harmony import */ var _lib_effect_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/effect/effect */ \"./lib/effect/effect.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/result.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\n\n\nvar Result = function Result() {\n  _s();\n\n  var installationName = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.quote.location.name;\n  });\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Smart Quoter - Your Quote\")), __jsx(_components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__[\"QuotePageHeading\"], {\n    text: \"Initial quote - \".concat(installationName),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__[\"QuoteMiniNavlinks\"], {\n    backTo: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"shadow-lg p-4 rounded\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"p-4 text-lg text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"This is a preliminary quote for the project based on the data you provided.\"), __jsx(\"div\", {\n    className: \"\".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contentContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quoteDataContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quoteDataGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, \"Location:\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }, state.quote.location.name), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \"Number floats:\"), __jsx(\"p\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.smallerText,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"Each float produces 500W\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 15\n    }\n  }, state.quote.layout.numberRows * state.quote.layout.numberColumns), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"Peak power\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, Object(_lib_effect_effect__WEBPACK_IMPORTED_MODULE_8__[\"calculateEffect\"])(state.quote.layout.numberRows * state.quote.layout.numberColumns), ' ', _lib_effect_effect__WEBPACK_IMPORTED_MODULE_8__[\"EFFECT_UNIT\"]), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }))), __jsx(_components_quote_location_completeMap__WEBPACK_IMPORTED_MODULE_7__[\"CompleteMap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"\".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.linkContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"p-4 text-center \".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.getInfoText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Get more information about your site at\"), __jsx(_components_quote_glintSolarLink__WEBPACK_IMPORTED_MODULE_5__[\"GlintSolarLink\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Result, \"2dLOt952PYusymKAX+iGw3ata5E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"]];\n});\n\n_c = Result;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\n\nvar _c;\n\n$RefreshReg$(_c, \"Result\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvcmVzdWx0LnRzeD9jOGYwIl0sIm5hbWVzIjpbIlJlc3VsdCIsImluc3RhbGxhdGlvbk5hbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicXVvdGUiLCJsb2NhdGlvbiIsIm5hbWUiLCJzdHlsZXMiLCJjb250ZW50Q29udGFpbmVyIiwicXVvdGVEYXRhQ29udGFpbmVyIiwicXVvdGVEYXRhR3JpZCIsInNtYWxsZXJUZXh0IiwibGF5b3V0IiwibnVtYmVyUm93cyIsIm51bWJlckNvbHVtbnMiLCJjYWxjdWxhdGVFZmZlY3QiLCJFRkZFQ1RfVU5JVCIsImxpbmtDb250YWluZXIiLCJnZXRJbmZvVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsZ0JBQWdCLEdBQUdDLCtEQUFXLENBQ2xDLFVBQUNDLEtBQUQ7QUFBQSxXQUE2QkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLElBQWxEO0FBQUEsR0FEa0MsQ0FBcEM7QUFHQSxNQUFNSCxLQUFLLEdBQUdELCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQTZCQSxLQUE3QjtBQUFBLEdBQUQsQ0FBekI7QUFDQSxTQUNFLDREQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FERixFQUlFLE1BQUMscUZBQUQ7QUFBa0IsUUFBSSw0QkFBcUJGLGdCQUFyQixDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHVGQUFEO0FBQW1CLFVBQU0sRUFBRSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRkFERixFQUtFO0FBQUssYUFBUyxZQUFLTSwwREFBTSxDQUFDQyxnQkFBWixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0Usa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsMERBQU0sQ0FBQ0csYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlQLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFaLENBQXFCQyxJQUF6QixDQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0ksV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGRixDQUpGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixLQUFLLENBQUNDLEtBQU4sQ0FBWVEsTUFBWixDQUFtQkMsVUFBbkIsR0FDQ1YsS0FBSyxDQUFDQyxLQUFOLENBQVlRLE1BQVosQ0FBbUJFLGFBRnZCLENBUkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywwRUFBZSxDQUNkWixLQUFLLENBQUNDLEtBQU4sQ0FBWVEsTUFBWixDQUFtQkMsVUFBbkIsR0FDRVYsS0FBSyxDQUFDQyxLQUFOLENBQVlRLE1BQVosQ0FBbUJFLGFBRlAsQ0FEbEIsRUFJSyxHQUpMLEVBS0dFLDhEQUxILENBZEYsRUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQURGLENBREYsRUE0QkUsTUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBTEYsRUFtQ0U7QUFBSyxhQUFTLFlBQUtULDBEQUFNLENBQUNVLGFBQVosQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLDRCQUFxQlYsMERBQU0sQ0FBQ1csV0FBNUIsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURGLEVBSUUsTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FuQ0YsQ0FQRixDQURGO0FBb0RELENBekREOztHQUFNbEIsTTtVQUNxQkUsdUQsRUFHWEEsdUQ7OztLQUpWRixNO0FBMkRTQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1b3RlL3Jlc3VsdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUXVvdGVQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUtcGFnZS1oZWFkaW5nJztcbmltcG9ydCB7IFF1b3RlTWluaU5hdmxpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS1taW5pLW5hdmxpbmtzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZXN1bHQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgR2xpbnRTb2xhckxpbmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2dsaW50U29sYXJMaW5rJztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29tcGxldGVNYXAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2xvY2F0aW9uL2NvbXBsZXRlTWFwJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZmZlY3QsIEVGRkVDVF9VTklUIH0gZnJvbSAnLi4vLi4vbGliL2VmZmVjdC9lZmZlY3QnO1xuXG5jb25zdCBSZXN1bHQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBpbnN0YWxsYXRpb25OYW1lID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sb2NhdGlvbi5uYW1lXG4gICk7XG4gIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U21hcnQgUXVvdGVyIC0gWW91ciBRdW90ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UXVvdGVQYWdlSGVhZGluZyB0ZXh0PXtgSW5pdGlhbCBxdW90ZSAtICR7aW5zdGFsbGF0aW9uTmFtZX1gfSAvPlxuICAgICAgPFF1b3RlTWluaU5hdmxpbmtzIGJhY2tUbz17dHJ1ZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcC00IHJvdW5kZWRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00IHRleHQtbGcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBUaGlzIGlzIGEgcHJlbGltaW5hcnkgcXVvdGUgZm9yIHRoZSBwcm9qZWN0IGJhc2VkIG9uIHRoZSBkYXRhIHlvdVxuICAgICAgICAgIHByb3ZpZGVkLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudENvbnRhaW5lcn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b3RlRGF0YUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b3RlRGF0YUdyaWR9PlxuICAgICAgICAgICAgICA8cD5Mb2NhdGlvbjo8L3A+XG4gICAgICAgICAgICAgIDxwPntzdGF0ZS5xdW90ZS5sb2NhdGlvbi5uYW1lfTwvcD5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPk51bWJlciBmbG9hdHM6PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsZXJUZXh0fT5FYWNoIGZsb2F0IHByb2R1Y2VzIDUwMFc8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7c3RhdGUucXVvdGUubGF5b3V0Lm51bWJlclJvd3MgKlxuICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUubGF5b3V0Lm51bWJlckNvbHVtbnN9XG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8cD5QZWFrIHBvd2VyPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlRWZmZWN0KFxuICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUubGF5b3V0Lm51bWJlclJvd3MgKlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5sYXlvdXQubnVtYmVyQ29sdW1uc1xuICAgICAgICAgICAgICAgICl9eycgJ31cbiAgICAgICAgICAgICAgICB7RUZGRUNUX1VOSVR9XG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxDb21wbGV0ZU1hcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rQ29udGFpbmVyfWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHAtNCB0ZXh0LWNlbnRlciAke3N0eWxlcy5nZXRJbmZvVGV4dH1gfT5cbiAgICAgICAgICAgIEdldCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgc2l0ZSBhdFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8R2xpbnRTb2xhckxpbmsgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quote/result.tsx\n");

/***/ })

})