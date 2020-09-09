webpackHotUpdate_N_E("pages/quote/result",{

/***/ "./pages/quote/result.tsx":
/*!********************************!*\
  !*** ./pages/quote/result.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/quote/quote-page-heading */ \"./components/quote/quote-page-heading.tsx\");\n/* harmony import */ var _components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quote/quote-mini-navlinks */ \"./components/quote/quote-mini-navlinks.tsx\");\n/* harmony import */ var _result_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result.module.scss */ \"./pages/quote/result.module.scss\");\n/* harmony import */ var _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_result_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_quote_glintSolarLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/quote/glintSolarLink */ \"./components/quote/glintSolarLink.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_quote_location_completeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/quote/location/completeMap */ \"./components/quote/location/completeMap.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/result.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\n\nvar Result = function Result() {\n  _s();\n\n  var installationName = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.quote.location.name;\n  });\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Smart Quoter - Your Quote\")), __jsx(_components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__[\"QuotePageHeading\"], {\n    text: \"Initial quote - \".concat(installationName),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__[\"QuoteMiniNavlinks\"], {\n    backTo: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"shadow-lg p-4 rounded\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"p-4 text-lg text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"This is a preliminary quote for the project based on the data you provided.\"), __jsx(\"div\", {\n    className: \"\".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contentContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quoteDataContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quoteDataGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"Location:\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, state.quote.location.name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }, \"Number of floats\"))), __jsx(_components_quote_location_completeMap__WEBPACK_IMPORTED_MODULE_7__[\"CompleteMap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"\".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.linkContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"p-4 text-center \".concat(_result_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.getInfoText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \"Get more information about your site at\"), __jsx(_components_quote_glintSolarLink__WEBPACK_IMPORTED_MODULE_5__[\"GlintSolarLink\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Result, \"2dLOt952PYusymKAX+iGw3ata5E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"]];\n});\n\n_c = Result;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\n\nvar _c;\n\n$RefreshReg$(_c, \"Result\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvcmVzdWx0LnRzeD9jOGYwIl0sIm5hbWVzIjpbIlJlc3VsdCIsImluc3RhbGxhdGlvbk5hbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicXVvdGUiLCJsb2NhdGlvbiIsIm5hbWUiLCJzdHlsZXMiLCJjb250ZW50Q29udGFpbmVyIiwicXVvdGVEYXRhQ29udGFpbmVyIiwicXVvdGVEYXRhR3JpZCIsImxpbmtDb250YWluZXIiLCJnZXRJbmZvVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsZ0JBQWdCLEdBQUdDLCtEQUFXLENBQ2xDLFVBQUNDLEtBQUQ7QUFBQSxXQUE2QkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLElBQWxEO0FBQUEsR0FEa0MsQ0FBcEM7QUFHQSxNQUFNSCxLQUFLLEdBQUdELCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQTZCQSxLQUE3QjtBQUFBLEdBQUQsQ0FBekI7QUFDQSxTQUNFLDREQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FERixFQUlFLE1BQUMscUZBQUQ7QUFBa0IsUUFBSSw0QkFBcUJGLGdCQUFyQixDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHVGQUFEO0FBQW1CLFVBQU0sRUFBRSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRkFERixFQUtFO0FBQUssYUFBUyxZQUFLTSwwREFBTSxDQUFDQyxnQkFBWixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0Usa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsMERBQU0sQ0FBQ0csYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlQLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFaLENBQXFCQyxJQUF6QixDQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixDQURGLENBREYsRUFVRSxNQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQUxGLEVBaUJFO0FBQUssYUFBUyxZQUFLQywwREFBTSxDQUFDSSxhQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyw0QkFBcUJKLDBEQUFNLENBQUNLLFdBQTVCLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FERixFQUlFLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBakJGLENBUEYsQ0FERjtBQWtDRCxDQXZDRDs7R0FBTVosTTtVQUNxQkUsdUQsRUFHWEEsdUQ7OztLQUpWRixNO0FBeUNTQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1b3RlL3Jlc3VsdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUXVvdGVQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUtcGFnZS1oZWFkaW5nJztcbmltcG9ydCB7IFF1b3RlTWluaU5hdmxpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS1taW5pLW5hdmxpbmtzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZXN1bHQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgR2xpbnRTb2xhckxpbmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2dsaW50U29sYXJMaW5rJztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29tcGxldGVNYXAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2xvY2F0aW9uL2NvbXBsZXRlTWFwJztcblxuY29uc3QgUmVzdWx0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgaW5zdGFsbGF0aW9uTmFtZSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogU21hcnRRdW90ZXJTdGF0ZSkgPT4gc3RhdGUucXVvdGUubG9jYXRpb24ubmFtZVxuICApO1xuICBjb25zdCBzdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU21hcnRRdW90ZXJTdGF0ZSkgPT4gc3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNtYXJ0IFF1b3RlciAtIFlvdXIgUXVvdGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFF1b3RlUGFnZUhlYWRpbmcgdGV4dD17YEluaXRpYWwgcXVvdGUgLSAke2luc3RhbGxhdGlvbk5hbWV9YH0gLz5cbiAgICAgIDxRdW90ZU1pbmlOYXZsaW5rcyBiYWNrVG89e3RydWV9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHAtNCByb3VuZGVkXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCB0ZXh0LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVGhpcyBpcyBhIHByZWxpbWluYXJ5IHF1b3RlIGZvciB0aGUgcHJvamVjdCBiYXNlZCBvbiB0aGUgZGF0YSB5b3VcbiAgICAgICAgICBwcm92aWRlZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZURhdGFDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZURhdGFHcmlkfT5cbiAgICAgICAgICAgICAgPHA+TG9jYXRpb246PC9wPlxuICAgICAgICAgICAgICA8cD57c3RhdGUucXVvdGUubG9jYXRpb24ubmFtZX08L3A+XG5cbiAgICAgICAgICAgICAgPHA+TnVtYmVyIG9mIGZsb2F0czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPENvbXBsZXRlTWFwIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmtDb250YWluZXJ9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgcC00IHRleHQtY2VudGVyICR7c3R5bGVzLmdldEluZm9UZXh0fWB9PlxuICAgICAgICAgICAgR2V0IG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBzaXRlIGF0XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxHbGludFNvbGFyTGluayAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quote/result.tsx\n");

/***/ })

})