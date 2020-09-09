webpackHotUpdate_N_E("pages/quote/result",{

/***/ "./pages/quote/result.tsx":
/*!********************************!*\
  !*** ./pages/quote/result.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/quote/quote-page-heading */ \"./components/quote/quote-page-heading.tsx\");\n/* harmony import */ var _components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quote/quote-mini-navlinks */ \"./components/quote/quote-mini-navlinks.tsx\");\n/* harmony import */ var _result_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result.module.scss */ \"./pages/quote/result.module.scss\");\n/* harmony import */ var _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_result_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_quote_glintSolarLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/quote/glintSolarLink */ \"./components/quote/glintSolarLink.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_quote_location_completeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/quote/location/completeMap */ \"./components/quote/location/completeMap.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/result.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\n\nvar Result = function Result() {\n  _s();\n\n  var installationName = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.quote.location.name;\n  });\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"Smart Quoter - Your Quote\")), __jsx(_components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__[\"QuotePageHeading\"], {\n    text: \"Initial quote - \".concat(installationName),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__[\"QuoteMiniNavlinks\"], {\n    backTo: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"shadow-lg p-4 rounded\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"p-4 text-lg text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"This is a preliminary quote for the project based on the data you provided.\"), __jsx(\"div\", {\n    className: \"\".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contentContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quoteDataContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quoteDataGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"Location:\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, state.quote.location.name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, \"Number floats:\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, state.quote.layout.numberRows * state.quote.layout.numberColumns), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }))), __jsx(_components_quote_location_completeMap__WEBPACK_IMPORTED_MODULE_7__[\"CompleteMap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"\".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.linkContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"p-4 text-center \".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.getInfoText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"Get more information about your site at\"), __jsx(_components_quote_glintSolarLink__WEBPACK_IMPORTED_MODULE_5__[\"GlintSolarLink\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Result, \"2dLOt952PYusymKAX+iGw3ata5E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"]];\n});\n\n_c = Result;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\n\nvar _c;\n\n$RefreshReg$(_c, \"Result\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvcmVzdWx0LnRzeD9jOGYwIl0sIm5hbWVzIjpbIlJlc3VsdCIsImluc3RhbGxhdGlvbk5hbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicXVvdGUiLCJsb2NhdGlvbiIsIm5hbWUiLCJzdHlsZXMiLCJjb250ZW50Q29udGFpbmVyIiwicXVvdGVEYXRhQ29udGFpbmVyIiwicXVvdGVEYXRhR3JpZCIsImxheW91dCIsIm51bWJlclJvd3MiLCJudW1iZXJDb2x1bW5zIiwibGlua0NvbnRhaW5lciIsImdldEluZm9UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxnQkFBZ0IsR0FBR0MsK0RBQVcsQ0FDbEMsVUFBQ0MsS0FBRDtBQUFBLFdBQTZCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkMsSUFBbEQ7QUFBQSxHQURrQyxDQUFwQztBQUdBLE1BQU1ILEtBQUssR0FBR0QsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBNkJBLEtBQTdCO0FBQUEsR0FBRCxDQUF6QjtBQUNBLFNBQ0UsNERBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixDQURGLEVBSUUsTUFBQyxxRkFBRDtBQUFrQixRQUFJLDRCQUFxQkYsZ0JBQXJCLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsdUZBQUQ7QUFBbUIsVUFBTSxFQUFFLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU9FO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1GQURGLEVBS0U7QUFBSyxhQUFTLFlBQUtNLDBEQUFNLENBQUNDLGdCQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRiwwREFBTSxDQUFDRyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVAsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLElBQXpCLENBRkYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxLQUFLLENBQUNDLEtBQU4sQ0FBWU8sTUFBWixDQUFtQkMsVUFBbkIsR0FDQ1QsS0FBSyxDQUFDQyxLQUFOLENBQVlPLE1BQVosQ0FBbUJFLGFBRnZCLENBTEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixDQURGLEVBZ0JFLE1BQUMsa0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQUxGLEVBdUJFO0FBQUssYUFBUyxZQUFLTiwwREFBTSxDQUFDTyxhQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyw0QkFBcUJQLDBEQUFNLENBQUNRLFdBQTVCLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FERixFQUlFLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBdkJGLENBUEYsQ0FERjtBQXdDRCxDQTdDRDs7R0FBTWYsTTtVQUNxQkUsdUQsRUFHWEEsdUQ7OztLQUpWRixNO0FBK0NTQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1b3RlL3Jlc3VsdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUXVvdGVQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUtcGFnZS1oZWFkaW5nJztcbmltcG9ydCB7IFF1b3RlTWluaU5hdmxpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS1taW5pLW5hdmxpbmtzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZXN1bHQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgR2xpbnRTb2xhckxpbmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2dsaW50U29sYXJMaW5rJztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29tcGxldGVNYXAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2xvY2F0aW9uL2NvbXBsZXRlTWFwJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJlc3VsdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGluc3RhbGxhdGlvbk5hbWUgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxvY2F0aW9uLm5hbWVcbiAgKTtcbiAgY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TbWFydCBRdW90ZXIgLSBZb3VyIFF1b3RlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxRdW90ZVBhZ2VIZWFkaW5nIHRleHQ9e2BJbml0aWFsIHF1b3RlIC0gJHtpbnN0YWxsYXRpb25OYW1lfWB9IC8+XG4gICAgICA8UXVvdGVNaW5pTmF2bGlua3MgYmFja1RvPXt0cnVlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyBwLTQgcm91bmRlZFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIFRoaXMgaXMgYSBwcmVsaW1pbmFyeSBxdW90ZSBmb3IgdGhlIHByb2plY3QgYmFzZWQgb24gdGhlIGRhdGEgeW91XG4gICAgICAgICAgcHJvdmlkZWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250ZW50Q29udGFpbmVyfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvdGVEYXRhQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvdGVEYXRhR3JpZH0+XG4gICAgICAgICAgICAgIDxwPkxvY2F0aW9uOjwvcD5cbiAgICAgICAgICAgICAgPHA+e3N0YXRlLnF1b3RlLmxvY2F0aW9uLm5hbWV9PC9wPlxuXG4gICAgICAgICAgICAgIDxwPk51bWJlciBmbG9hdHM6PC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7c3RhdGUucXVvdGUubGF5b3V0Lm51bWJlclJvd3MgKlxuICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUubGF5b3V0Lm51bWJlckNvbHVtbnN9XG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxDb21wbGV0ZU1hcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rQ29udGFpbmVyfWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHAtNCB0ZXh0LWNlbnRlciAke3N0eWxlcy5nZXRJbmZvVGV4dH1gfT5cbiAgICAgICAgICAgIEdldCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgc2l0ZSBhdFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8R2xpbnRTb2xhckxpbmsgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quote/result.tsx\n");

/***/ })

})