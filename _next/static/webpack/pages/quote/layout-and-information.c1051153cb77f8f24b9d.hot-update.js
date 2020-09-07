webpackHotUpdate_N_E("pages/quote/layout-and-information",{

/***/ "./pages/quote/layout-and-information.tsx":
/*!************************************************!*\
  !*** ./pages/quote/layout-and-information.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/quote/quote-page-heading */ \"./components/quote/quote-page-heading.tsx\");\n/* harmony import */ var _components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quote/quote-mini-navlinks */ \"./components/quote/quote-mini-navlinks.tsx\");\n/* harmony import */ var _components_quote_current_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/quote/current-location */ \"./components/quote/current-location.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/utils/useAction */ \"./lib/utils/useAction.ts\");\n/* harmony import */ var _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/quote/layout-reducer */ \"./lib/quote/layout-reducer.ts\");\n/* harmony import */ var _layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout-and-information.module.scss */ \"./pages/quote/layout-and-information.module.scss\");\n/* harmony import */ var _layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/quote/quote-general-reducer */ \"./lib/quote/quote-general-reducer.ts\");\n/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/routes */ \"./lib/routes.ts\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_Icons_right_arrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Icons/right-arrow */ \"./components/Icons/right-arrow.tsx\");\n/* harmony import */ var _components_quote_location_layout_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/quote/location/layout-map */ \"./components/quote/location/layout-map.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_SliderNumberInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/SliderNumberInput */ \"./components/SliderNumberInput.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/layout-and-information.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LayoutAndInformation = function LayoutAndInformation() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])({\n    mode: 'onChange'\n  }),\n      handleSubmit = _useForm.handleSubmit;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var setLayoutStageComplete = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_7__[\"quoteLayoutActions\"].setStageComplete);\n  var updateQuoteStage = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"])(_lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_10__[\"quoteGeneralActions\"].updateStage);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setLayoutStageComplete();\n    updateQuoteStage(_lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_10__[\"QuoteStage\"].CONTACT_INFORMATION);\n    router.push(_lib_routes__WEBPACK_IMPORTED_MODULE_11__[\"smartQuoterRoutes\"].contactInformation.route);\n  }, []);\n  var updateNumberRows = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_7__[\"quoteLayoutActions\"].updateNumberRows);\n  var numberRows = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__[\"useSelector\"])(function (state) {\n    return state.quote.layout.numberRows;\n  });\n  var numberColumns = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__[\"useSelector\"])(function (state) {\n    return state.quote.layout.numberColumns;\n  });\n  var updateNumberColumns = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_7__[\"quoteLayoutActions\"].updateNumberColumns);\n  var updateRotation = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_7__[\"quoteLayoutActions\"].updateRotation);\n  var rotation = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__[\"useSelector\"])(function (state) {\n    return state.quote.layout.rotation;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"Smart Quoter - Layout\")), __jsx(_components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_2__[\"QuotePageHeading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_3__[\"QuoteMiniNavlinks\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_current_location__WEBPACK_IMPORTED_MODULE_4__[\"CurrentLocation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }), __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"p-4 rounded shadow-lg sm:grid sm:grid-cols-2 sm:gap-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col sm:col-span-1 align-center \".concat(_layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.formGrid),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: 'numberColumns',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Number columns\"), __jsx(_components_SliderNumberInput__WEBPACK_IMPORTED_MODULE_16__[\"SliderNumberInput\"], {\n    htmlName: 'numberColumns',\n    value: numberColumns,\n    updateValue: updateNumberColumns,\n    min: 10,\n    max: 150,\n    step: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: 'numberRows',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Number rows\"), __jsx(_components_SliderNumberInput__WEBPACK_IMPORTED_MODULE_16__[\"SliderNumberInput\"], {\n    htmlName: 'numberRows',\n    value: numberRows,\n    updateValue: updateNumberRows,\n    min: 20,\n    max: 160,\n    step: 20,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: 'rotation',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, \"Rotation\"), __jsx(_components_SliderNumberInput__WEBPACK_IMPORTED_MODULE_16__[\"SliderNumberInput\"], {\n    htmlName: 'rotation',\n    value: rotation,\n    updateValue: updateRotation,\n    min: 0,\n    max: 360,\n    step: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    className: \"pb-0 form-paragraph mt-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, \"Installation size: \", numberColumns * numberRows, \" solar panels (\", numberRows, \"x\", numberColumns, \")\"), __jsx(\"p\", {\n    className: \"pb-0 form-paragraph\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"Optimal effect: \", numberColumns * numberRows * 0.5, \" kWp\")), __jsx(_components_quote_location_layout_map__WEBPACK_IMPORTED_MODULE_14__[\"LayoutMap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"flex items-center justify-center mt-4 sm:col-span-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    type: \"submit\",\n    label: \"Continue\",\n    className: \"flex flex-no-wrap items-center px-6 shadow-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Icons_right_arrow__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    className: \"inline w-5 ml-4 fill-current\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(LayoutAndInformation, \"PsQI9C5bB+FYZIaCHmGbIQ9ccAI=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"], next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"], react_redux__WEBPACK_IMPORTED_MODULE_15__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_15__[\"useSelector\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_6__[\"useAction\"], react_redux__WEBPACK_IMPORTED_MODULE_15__[\"useSelector\"]];\n});\n\n_c = LayoutAndInformation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutAndInformation);\n\nvar _c;\n\n$RefreshReg$(_c, \"LayoutAndInformation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvbGF5b3V0LWFuZC1pbmZvcm1hdGlvbi50c3g/MTBlYyJdLCJuYW1lcyI6WyJMYXlvdXRBbmRJbmZvcm1hdGlvbiIsInVzZUZvcm0iLCJtb2RlIiwiaGFuZGxlU3VibWl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwic2V0TGF5b3V0U3RhZ2VDb21wbGV0ZSIsInVzZUFjdGlvbiIsInF1b3RlTGF5b3V0QWN0aW9ucyIsInNldFN0YWdlQ29tcGxldGUiLCJ1cGRhdGVRdW90ZVN0YWdlIiwicXVvdGVHZW5lcmFsQWN0aW9ucyIsInVwZGF0ZVN0YWdlIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsIlF1b3RlU3RhZ2UiLCJDT05UQUNUX0lORk9STUFUSU9OIiwicHVzaCIsInNtYXJ0UXVvdGVyUm91dGVzIiwiY29udGFjdEluZm9ybWF0aW9uIiwicm91dGUiLCJ1cGRhdGVOdW1iZXJSb3dzIiwibnVtYmVyUm93cyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJxdW90ZSIsImxheW91dCIsIm51bWJlckNvbHVtbnMiLCJ1cGRhdGVOdW1iZXJDb2x1bW5zIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInN0eWxlcyIsImZvcm1HcmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQThCLEdBQUcsU0FBakNBLG9CQUFpQyxHQUFNO0FBQUE7O0FBQUEsaUJBQ2xCQywrREFBTyxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsQ0FEVztBQUFBLE1BQ25DQyxZQURtQyxZQUNuQ0EsWUFEbUM7O0FBRTNDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxzQkFBc0IsR0FB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eEdEOztHQUFNdEIsb0I7VUFDcUJDLHVELEVBQ1ZJLHFELEVBRWdCRSw4RCxFQUNOQSw4RCxFQU9BQSw4RCxFQUNOZ0Isd0QsRUFHR0Esd0QsRUFHTWhCLDhELEVBQ0xBLDhELEVBQ05nQix3RDs7O0tBckJidkIsb0I7QUEwR1NBLG1GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVvdGUvbGF5b3V0LWFuZC1pbmZvcm1hdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUXVvdGVQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUtcGFnZS1oZWFkaW5nJztcbmltcG9ydCB7IFF1b3RlTWluaU5hdmxpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS1taW5pLW5hdmxpbmtzJztcbmltcG9ydCB7IEN1cnJlbnRMb2NhdGlvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvY3VycmVudC1sb2NhdGlvbic7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzL3VzZUFjdGlvbic7XG5pbXBvcnQgeyBxdW90ZUxheW91dEFjdGlvbnMgfSBmcm9tICcuLi8uLi9saWIvcXVvdGUvbGF5b3V0LXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlRGVib3VuY2VVcGRhdGVSZWR1eCB9IGZyb20gJy4uLy4uL2xpYi91dGlscy91c2VEZWJvdW5jZVVwZGF0ZVJlZHV4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQtYW5kLWluZm9ybWF0aW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlLXV0aWxzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7XG4gIHF1b3RlR2VuZXJhbEFjdGlvbnMsXG4gIFF1b3RlU3RhZ2UsXG59IGZyb20gJy4uLy4uL2xpYi9xdW90ZS9xdW90ZS1nZW5lcmFsLXJlZHVjZXInO1xuaW1wb3J0IHsgc21hcnRRdW90ZXJSb3V0ZXMgfSBmcm9tICcuLi8uLi9saWIvcm91dGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29ucy9yaWdodC1hcnJvdyc7XG5pbXBvcnQgeyBMYXlvdXRNYXAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2xvY2F0aW9uL2xheW91dC1tYXAnO1xuaW1wb3J0IHsgU21hcnRRdW90ZXJTdGF0ZSB9IGZyb20gJy4uLy4uL2xpYi9yb290LXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTbGlkZXJOdW1iZXJJbnB1dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2xpZGVyTnVtYmVySW5wdXQnO1xuXG5jb25zdCBMYXlvdXRBbmRJbmZvcm1hdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHsgbW9kZTogJ29uQ2hhbmdlJyB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2V0TGF5b3V0U3RhZ2VDb21wbGV0ZSA9IHVzZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMuc2V0U3RhZ2VDb21wbGV0ZSk7XG4gIGNvbnN0IHVwZGF0ZVF1b3RlU3RhZ2UgPSB1c2VBY3Rpb24ocXVvdGVHZW5lcmFsQWN0aW9ucy51cGRhdGVTdGFnZSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldExheW91dFN0YWdlQ29tcGxldGUoKTtcbiAgICB1cGRhdGVRdW90ZVN0YWdlKFF1b3RlU3RhZ2UuQ09OVEFDVF9JTkZPUk1BVElPTik7XG4gICAgcm91dGVyLnB1c2goc21hcnRRdW90ZXJSb3V0ZXMuY29udGFjdEluZm9ybWF0aW9uLnJvdXRlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZU51bWJlclJvd3MgPSB1c2VBY3Rpb24ocXVvdGVMYXlvdXRBY3Rpb25zLnVwZGF0ZU51bWJlclJvd3MpO1xuICBjb25zdCBudW1iZXJSb3dzID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQubnVtYmVyUm93c1xuICApO1xuICBjb25zdCBudW1iZXJDb2x1bW5zID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQubnVtYmVyQ29sdW1ucyBhcyBudW1iZXJcbiAgKTtcbiAgY29uc3QgdXBkYXRlTnVtYmVyQ29sdW1ucyA9IHVzZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMudXBkYXRlTnVtYmVyQ29sdW1ucyk7XG4gIGNvbnN0IHVwZGF0ZVJvdGF0aW9uID0gdXNlQWN0aW9uKHF1b3RlTGF5b3V0QWN0aW9ucy51cGRhdGVSb3RhdGlvbik7XG4gIGNvbnN0IHJvdGF0aW9uID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQucm90YXRpb24gYXMgbnVtYmVyXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TbWFydCBRdW90ZXIgLSBMYXlvdXQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFF1b3RlUGFnZUhlYWRpbmcgLz5cbiAgICAgIDxRdW90ZU1pbmlOYXZsaW5rcyAvPlxuICAgICAgPEN1cnJlbnRMb2NhdGlvbiAvPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkIHNoYWRvdy1sZyBzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOmdhcC0yXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBzbTpjb2wtc3Bhbi0xIGFsaWduLWNlbnRlciAke3N0eWxlcy5mb3JtR3JpZH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPXsnbnVtYmVyQ29sdW1ucyd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTIgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTnVtYmVyIGNvbHVtbnNcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxTbGlkZXJOdW1iZXJJbnB1dFxuICAgICAgICAgICAgICBodG1sTmFtZT17J251bWJlckNvbHVtbnMnfVxuICAgICAgICAgICAgICB2YWx1ZT17bnVtYmVyQ29sdW1uc31cbiAgICAgICAgICAgICAgdXBkYXRlVmFsdWU9e3VwZGF0ZU51bWJlckNvbHVtbnN9XG4gICAgICAgICAgICAgIG1pbj17MTB9XG4gICAgICAgICAgICAgIG1heD17MTUwfVxuICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9eydudW1iZXJSb3dzJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LWxnIGxlYWRpbmctdGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOdW1iZXIgcm93c1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxTbGlkZXJOdW1iZXJJbnB1dFxuICAgICAgICAgICAgICBodG1sTmFtZT17J251bWJlclJvd3MnfVxuICAgICAgICAgICAgICB2YWx1ZT17bnVtYmVyUm93c31cbiAgICAgICAgICAgICAgdXBkYXRlVmFsdWU9e3VwZGF0ZU51bWJlclJvd3N9XG4gICAgICAgICAgICAgIG1pbj17MjB9XG4gICAgICAgICAgICAgIG1heD17MTYwfVxuICAgICAgICAgICAgICBzdGVwPXsyMH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsncm90YXRpb24nfSBjbGFzc05hbWU9XCJteS0yIHRleHQtbGcgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICBSb3RhdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxTbGlkZXJOdW1iZXJJbnB1dFxuICAgICAgICAgICAgICBodG1sTmFtZT17J3JvdGF0aW9uJ31cbiAgICAgICAgICAgICAgdmFsdWU9e3JvdGF0aW9ufVxuICAgICAgICAgICAgICB1cGRhdGVWYWx1ZT17dXBkYXRlUm90YXRpb259XG4gICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgbWF4PXszNjB9XG4gICAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi0wIGZvcm0tcGFyYWdyYXBoIG10LTVcIj5cbiAgICAgICAgICAgICAgSW5zdGFsbGF0aW9uIHNpemU6IHtudW1iZXJDb2x1bW5zICogbnVtYmVyUm93c30gc29sYXIgcGFuZWxzIChcbiAgICAgICAgICAgICAge251bWJlclJvd3N9eHtudW1iZXJDb2x1bW5zfSlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTAgZm9ybS1wYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgT3B0aW1hbCBlZmZlY3Q6IHtudW1iZXJDb2x1bW5zICogbnVtYmVyUm93cyAqIDAuNX0ga1dwXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGF5b3V0TWFwIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTQgc206Y29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJDb250aW51ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm8td3JhcCBpdGVtcy1jZW50ZXIgcHgtNiBzaGFkb3ctbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSaWdodEFycm93IGNsYXNzTmFtZT1cImlubGluZSB3LTUgbWwtNCBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEFuZEluZm9ybWF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quote/layout-and-information.tsx\n");

/***/ })

})