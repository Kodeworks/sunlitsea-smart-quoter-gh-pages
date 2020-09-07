webpackHotUpdate_N_E("pages/quote/layout-and-information",{

/***/ "./pages/quote/layout-and-information.tsx":
/*!************************************************!*\
  !*** ./pages/quote/layout-and-information.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quote/quote-page-heading */ \"./components/quote/quote-page-heading.tsx\");\n/* harmony import */ var _components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/quote/quote-mini-navlinks */ \"./components/quote/quote-mini-navlinks.tsx\");\n/* harmony import */ var _components_quote_current_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/quote/current-location */ \"./components/quote/current-location.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/utils/useAction */ \"./lib/utils/useAction.ts\");\n/* harmony import */ var _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/quote/layout-reducer */ \"./lib/quote/layout-reducer.ts\");\n/* harmony import */ var _lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils/useDebounceUpdateRedux */ \"./lib/utils/useDebounceUpdateRedux.ts\");\n/* harmony import */ var _layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout-and-information.module.scss */ \"./pages/quote/layout-and-information.module.scss\");\n/* harmony import */ var _layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/page-utils.module.scss */ \"./styles/page-utils.module.scss\");\n/* harmony import */ var _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/quote/quote-general-reducer */ \"./lib/quote/quote-general-reducer.ts\");\n/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/routes */ \"./lib/routes.ts\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_Icons_right_arrow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Icons/right-arrow */ \"./components/Icons/right-arrow.tsx\");\n/* harmony import */ var _components_quote_location_layout_map__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/quote/location/layout-map */ \"./components/quote/location/layout-map.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_SliderNumberInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/SliderNumberInput */ \"./components/SliderNumberInput.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/layout-and-information.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LayoutAndInformation = function LayoutAndInformation() {\n  _s();\n\n  var _errors$numberColumns, _errors$numberColumns2, _errors$numberColumns3, _errors$rotation, _errors$rotation2, _errors$rotation3;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"])({\n    mode: 'onChange'\n  }),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__[\"useRouter\"])();\n  var setLayoutStageComplete = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].setStageComplete);\n  var updateQuoteStage = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"])(_lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_13__[\"quoteGeneralActions\"].updateStage);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setLayoutStageComplete();\n    updateQuoteStage(_lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_13__[\"QuoteStage\"].CONTACT_INFORMATION);\n    router.push(_lib_routes__WEBPACK_IMPORTED_MODULE_14__[\"smartQuoterRoutes\"].contactInformation.route);\n  }, []);\n\n  var _useDebounceUpdateRed = Object(_lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"])(function (state) {\n    return state.quote.layout.numberRows;\n  }, _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].updateNumberRows, {\n    eTargetValueAdjustment: true\n  }),\n      _useDebounceUpdateRed2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDebounceUpdateRed, 2),\n      numberRows = _useDebounceUpdateRed2[0],\n      updateNumberRows = _useDebounceUpdateRed2[1];\n\n  var updateNumberRowsDirect = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].updateNumberRows);\n  var nuro = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__[\"useSelector\"])(function (state) {\n    return state.quote.layout.numberRows;\n  });\n\n  var _useDebounceUpdateRed3 = Object(_lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"])(function (state) {\n    return state.quote.layout.numberColumns;\n  }, _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].updateNumberColumns, {\n    eTargetValueAdjustment: true\n  }),\n      _useDebounceUpdateRed4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDebounceUpdateRed3, 2),\n      numberColumns = _useDebounceUpdateRed4[0],\n      updateNumberColumns = _useDebounceUpdateRed4[1];\n\n  var _useDebounceUpdateRed5 = Object(_lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"])(function (state) {\n    return state.quote.layout.rotation;\n  }, _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].updateRotation, {\n    eTargetValueAdjustment: true\n  }),\n      _useDebounceUpdateRed6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDebounceUpdateRed5, 2),\n      rotation = _useDebounceUpdateRed6[0],\n      updateRotation = _useDebounceUpdateRed6[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"Smart Quoter - Layout\")), __jsx(_components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_3__[\"QuotePageHeading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_4__[\"QuoteMiniNavlinks\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_current_location__WEBPACK_IMPORTED_MODULE_5__[\"CurrentLocation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }), __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"p-4 rounded shadow-lg sm:grid sm:grid-cols-2 sm:gap-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col sm:col-span-1 align-center \".concat(_layout_and_information_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.formGrid),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: 'numberColumns',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Number columns\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    type: 'number',\n    name: 'numberColumns',\n    id: 'numberColumns',\n    ref: register({\n      required: true,\n      min: 10,\n      max: 150\n    }),\n    defaultValue: numberColumns,\n    onChange: updateNumberColumns,\n    className: \"text-input-field\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 15\n    }\n  }), ((_errors$numberColumns = errors.numberColumns) === null || _errors$numberColumns === void 0 ? void 0 : _errors$numberColumns.type) === 'required' && __jsx(\"p\", {\n    className: _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, \"This input is required\"), ((_errors$numberColumns2 = errors.numberColumns) === null || _errors$numberColumns2 === void 0 ? void 0 : _errors$numberColumns2.type) && ((_errors$numberColumns3 = errors.numberColumns) === null || _errors$numberColumns3 === void 0 ? void 0 : _errors$numberColumns3.type) !== 'validate' && __jsx(\"p\", {\n    className: _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 19\n    }\n  }, \"Must be a number between 10 and 150\")), __jsx(\"label\", {\n    htmlFor: 'numberRows',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"Number rows\"), __jsx(_components_SliderNumberInput__WEBPACK_IMPORTED_MODULE_19__[\"SliderNumberInput\"], {\n    htmlName: 'numberRows',\n    value: nuro,\n    updateValue: updateNumberRowsDirect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: 'rotation',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, \"Rotation\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    type: 'number',\n    name: 'rotation',\n    id: 'rotation',\n    ref: register({\n      required: true,\n      min: 0,\n      max: 360\n    }),\n    defaultValue: rotation,\n    onChange: updateRotation,\n    className: \"text-input-field\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 15\n    }\n  }), ((_errors$rotation = errors.rotation) === null || _errors$rotation === void 0 ? void 0 : _errors$rotation.type) === 'required' && __jsx(\"p\", {\n    className: _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 17\n    }\n  }, \"This input is required\"), ((_errors$rotation2 = errors.rotation) === null || _errors$rotation2 === void 0 ? void 0 : _errors$rotation2.type) && ((_errors$rotation3 = errors.rotation) === null || _errors$rotation3 === void 0 ? void 0 : _errors$rotation3.type) !== 'validate' && __jsx(\"p\", {\n    className: _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 19\n    }\n  }, \"Must be a number between 0 and 360\")), __jsx(\"p\", {\n    className: \"pb-0 form-paragraph mt-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, \"Installation size: \", numberColumns * numberRows, \" solar panels (\", numberRows, \"x\", numberColumns, \")\"), __jsx(\"p\", {\n    className: \"pb-0 form-paragraph\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, \"Optimal effect: \", numberColumns * numberRows * 0.5, \" kWp\")), __jsx(_components_quote_location_layout_map__WEBPACK_IMPORTED_MODULE_17__[\"LayoutMap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"flex items-center justify-center mt-4 sm:col-span-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    type: \"submit\",\n    label: \"Continue\",\n    className: \"flex flex-no-wrap items-center px-6 shadow-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Icons_right_arrow__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    className: \"inline w-5 ml-4 fill-current\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(LayoutAndInformation, \"0SqOEf+2wjH0hmOqmDjdpE+2ECM=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"], next_router__WEBPACK_IMPORTED_MODULE_12__[\"useRouter\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"], _lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"], react_redux__WEBPACK_IMPORTED_MODULE_18__[\"useSelector\"], _lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"], _lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"]];\n});\n\n_c = LayoutAndInformation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutAndInformation);\n\nvar _c;\n\n$RefreshReg$(_c, \"LayoutAndInformation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvbGF5b3V0LWFuZC1pbmZvcm1hdGlvbi50c3g/MTBlYyJdLCJuYW1lcyI6WyJMYXlvdXRBbmRJbmZvcm1hdGlvbiIsInVzZUZvcm0iLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRMYXlvdXRTdGFnZUNvbXBsZXRlIiwidXNlQWN0aW9uIiwicXVvdGVMYXlvdXRBY3Rpb25zIiwic2V0U3RhZ2VDb21wbGV0ZSIsInVwZGF0ZVF1b3RlU3RhZ2UiLCJxdW90ZUdlbmVyYWxBY3Rpb25zIiwidXBkYXRlU3RhZ2UiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiUXVvdGVTdGFnZSIsIkNPTlRBQ1RfSU5GT1JNQVRJT04iLCJwdXNoIiwic21hcnRRdW90ZXJSb3V0ZXMiLCJjb250YWN0SW5mb3JtYXRpb24iLCJyb3V0ZSIsInVzZURlYm91bmNlVXBkYXRlUmVkdXgiLCJzdGF0ZSIsInF1b3RlIiwibGF5b3V0IiwibnVtYmVyUm93cyIsInVwZGF0ZU51bWJlclJvd3MiLCJlVGFyZ2V0VmFsdWVBZGp1c3RtZW50IiwidXBkYXRlTnVtYmVyUm93c0RpcmVjdCIsIm51cm8iLCJ1c2VTZWxlY3RvciIsIm51bWJlckNvbHVtbnMiLCJ1cGRhdGVOdW1iZXJDb2x1bW5zIiwicm90YXRpb24iLCJ1cGRhdGVSb3RhdGlvbiIsInN0eWxlcyIsImZvcm1HcmlkIiwicmVxdWlyZWQiLCJtaW4iLCJtYXgiLCJ0eXBlIiwidXRpbFN0eWxlcyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLG9CQUE4QixHQUFHLFNBQWpDQSxvQkFBaUMsR0FBTTtBQUFBOztBQUFBOztBQUFBLGlCQUNBQywrREFBTyxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsQ0FEUDtBQUFBLE1BQ25DQyxRQURtQyxZQUNuQ0EsUUFEbUM7QUFBQSxNQUN6QkMsWUFEeUIsWUFDekJBLFlBRHlCO0FBQUEsTUFDWEMsTUFEVyxZQUNYQSxNQURXOztBQUUzQyxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUdDLHNFQUFTLENBQUNDLDRFQUFrQixDQUFDQyxnQkFBcEIsQ0FBeEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0gsc0VBQVMsQ0FBQ0kscUZBQW1CLENBQUNDLFdBQXJCLENBQWxDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDakNSLDBCQUFzQjtBQUN0Qkksb0JBQWdCLENBQUNLLDRFQUFVLENBQUNDLG1CQUFaLENBQWhCO0FBQ0FaLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZQyw4REFBaUIsQ0FBQ0Msa0JBQWxCLENBQXFDQyxLQUFqRDtBQUNELEdBSjJCLEVBSXpCLEVBSnlCLENBQTVCOztBQU4yQyw4QkFZSkMsZ0dBQXNCLENBQzNELFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsVUFBOUI7QUFBQSxHQUQyRCxFQUUzRGpCLDRFQUFrQixDQUFDa0IsZ0JBRndDLEVBRzNEO0FBQUVDLDBCQUFzQixFQUFFO0FBQTFCLEdBSDJELENBWmxCO0FBQUE7QUFBQSxNQVlwQ0YsVUFab0M7QUFBQSxNQVl4QkMsZ0JBWndCOztBQWlCM0MsTUFBTUUsc0JBQXNCLEdBQUdyQixzRUFBUyxDQUFDQyw0RUFBa0IsQ0FBQ2tCLGdCQUFwQixDQUF4QztBQUNBLE1BQU1HLElBQUksR0FBR0MsZ0VBQVcsQ0FDdEIsVUFBQ1IsS0FBRDtBQUFBLFdBQTZCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsVUFBaEQ7QUFBQSxHQURzQixDQUF4Qjs7QUFsQjJDLCtCQXFCRUosZ0dBQXNCLENBQ2pFLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQk8sYUFBOUI7QUFBQSxHQURpRSxFQUVqRXZCLDRFQUFrQixDQUFDd0IsbUJBRjhDLEVBR2pFO0FBQUVMLDBCQUFzQixFQUFFO0FBQTFCLEdBSGlFLENBckJ4QjtBQUFBO0FBQUEsTUFxQnBDSSxhQXJCb0M7QUFBQSxNQXFCckJDLG1CQXJCcUI7O0FBQUEsK0JBMEJSWCxnR0FBc0IsQ0FDdkQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CUyxRQUE5QjtBQUFBLEdBRHVELEVBRXZEekIsNEVBQWtCLENBQUMwQixjQUZvQyxFQUd2RDtBQUFFUCwwQkFBc0IsRUFBRTtBQUExQixHQUh1RCxDQTFCZDtBQUFBO0FBQUEsTUEwQnBDTSxRQTFCb0M7QUFBQSxNQTBCMUJDLGNBMUIwQjs7QUFnQzNDLFNBQ0UsNERBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQURGLEVBSUUsTUFBQyxxRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsa0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxZQUFRLEVBQUVoQyxZQUFZLENBQUNXLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMscURBQThDc0IsMkVBQU0sQ0FBQ0MsUUFBckQsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFDRSxXQUFPLEVBQUUsZUFEWDtBQUVFLGFBQVMsRUFBQyw0QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFFLFFBRFI7QUFFRSxRQUFJLEVBQUUsZUFGUjtBQUdFLE1BQUUsRUFBRSxlQUhOO0FBSUUsT0FBRyxFQUFFbkMsUUFBUSxDQUFDO0FBQ1pvQyxjQUFRLEVBQUUsSUFERTtBQUVaQyxTQUFHLEVBQUUsRUFGTztBQUdaQyxTQUFHLEVBQUU7QUFITyxLQUFELENBSmY7QUFTRSxnQkFBWSxFQUFFUixhQVRoQjtBQVVFLFlBQVEsRUFBRUMsbUJBVlo7QUFXRSxhQUFTLEVBQUMsa0JBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0csMEJBQUE3QixNQUFNLENBQUM0QixhQUFQLGdGQUFzQlMsSUFBdEIsTUFBK0IsVUFBL0IsSUFDQztBQUFHLGFBQVMsRUFBRUMsc0VBQVUsQ0FBQ0MsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFmSixFQWlCRywyQkFBQXZDLE1BQU0sQ0FBQzRCLGFBQVAsa0ZBQXNCUyxJQUF0QixLQUNDLDJCQUFBckMsTUFBTSxDQUFDNEIsYUFBUCxrRkFBc0JTLElBQXRCLE1BQStCLFVBRGhDLElBRUc7QUFBRyxhQUFTLEVBQUVDLHNFQUFVLENBQUNDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBbkJOLENBVEYsRUFrQ0U7QUFDRSxXQUFPLEVBQUUsWUFEWDtBQUVFLGFBQVMsRUFBQyw0QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxDRixFQXdDRSxNQUFDLGdGQUFEO0FBQ0UsWUFBUSxFQUFFLFlBRFo7QUFFRSxTQUFLLEVBQUViLElBRlQ7QUFHRSxlQUFXLEVBQUVELHNCQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q0YsRUErQ0U7QUFBTyxXQUFPLEVBQUUsVUFBaEI7QUFBNEIsYUFBUyxFQUFDLDRCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9DRixFQWtERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUUsUUFEUjtBQUVFLFFBQUksRUFBRSxVQUZSO0FBR0UsTUFBRSxFQUFFLFVBSE47QUFJRSxPQUFHLEVBQUUzQixRQUFRLENBQUM7QUFDWm9DLGNBQVEsRUFBRSxJQURFO0FBRVpDLFNBQUcsRUFBRSxDQUZPO0FBR1pDLFNBQUcsRUFBRTtBQUhPLEtBQUQsQ0FKZjtBQVNFLGdCQUFZLEVBQUVOLFFBVGhCO0FBVUUsWUFBUSxFQUFFQyxjQVZaO0FBV0UsYUFBUyxFQUFDLGtCQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWNHLHFCQUFBL0IsTUFBTSxDQUFDOEIsUUFBUCxzRUFBaUJPLElBQWpCLE1BQTBCLFVBQTFCLElBQ0M7QUFBRyxhQUFTLEVBQUVDLHNFQUFVLENBQUNDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBZkosRUFpQkcsc0JBQUF2QyxNQUFNLENBQUM4QixRQUFQLHdFQUFpQk8sSUFBakIsS0FDQyxzQkFBQXJDLE1BQU0sQ0FBQzhCLFFBQVAsd0VBQWlCTyxJQUFqQixNQUEwQixVQUQzQixJQUVHO0FBQUcsYUFBUyxFQUFFQyxzRUFBVSxDQUFDQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQW5CTixDQWxERixFQTBFRTtBQUFHLGFBQVMsRUFBQywwQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNzQlgsYUFBYSxHQUFHTixVQUR0QyxxQkFFR0EsVUFGSCxPQUVnQk0sYUFGaEIsTUExRUYsRUE4RUU7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDbUJBLGFBQWEsR0FBR04sVUFBaEIsR0FBNkIsR0FEaEQsU0E5RUYsQ0FERixFQW9GRSxNQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwRkYsQ0FERixFQXVGRTtBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxhQUFTLEVBQUMsK0NBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsc0VBQUQ7QUFBWSxhQUFTLEVBQUMsOEJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBdkZGLENBUEYsQ0FERjtBQTJHRCxDQTNJRDs7R0FBTTNCLG9CO1VBQ3VDQyx1RCxFQUM1Qk0sc0QsRUFFZ0JFLDhELEVBQ05BLDhELEVBT2NjLHdGLEVBS1JkLDhELEVBQ2xCdUIsd0QsRUFHZ0NULHdGLEVBS1ZBLHdGOzs7S0ExQi9CdkIsb0I7QUE2SVNBLG1GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVvdGUvbGF5b3V0LWFuZC1pbmZvcm1hdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUXVvdGVQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUtcGFnZS1oZWFkaW5nJztcbmltcG9ydCB7IFF1b3RlTWluaU5hdmxpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS1taW5pLW5hdmxpbmtzJztcbmltcG9ydCB7IEN1cnJlbnRMb2NhdGlvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvY3VycmVudC1sb2NhdGlvbic7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzL3VzZUFjdGlvbic7XG5pbXBvcnQgeyBxdW90ZUxheW91dEFjdGlvbnMgfSBmcm9tICcuLi8uLi9saWIvcXVvdGUvbGF5b3V0LXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlRGVib3VuY2VVcGRhdGVSZWR1eCB9IGZyb20gJy4uLy4uL2xpYi91dGlscy91c2VEZWJvdW5jZVVwZGF0ZVJlZHV4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQtYW5kLWluZm9ybWF0aW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlLXV0aWxzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7XG4gIHF1b3RlR2VuZXJhbEFjdGlvbnMsXG4gIFF1b3RlU3RhZ2UsXG59IGZyb20gJy4uLy4uL2xpYi9xdW90ZS9xdW90ZS1nZW5lcmFsLXJlZHVjZXInO1xuaW1wb3J0IHsgc21hcnRRdW90ZXJSb3V0ZXMgfSBmcm9tICcuLi8uLi9saWIvcm91dGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29ucy9yaWdodC1hcnJvdyc7XG5pbXBvcnQgeyBMYXlvdXRNYXAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1b3RlL2xvY2F0aW9uL2xheW91dC1tYXAnO1xuaW1wb3J0IHsgU21hcnRRdW90ZXJTdGF0ZSB9IGZyb20gJy4uLy4uL2xpYi9yb290LXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTbGlkZXJOdW1iZXJJbnB1dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2xpZGVyTnVtYmVySW5wdXQnO1xuXG5jb25zdCBMYXlvdXRBbmRJbmZvcm1hdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKHsgbW9kZTogJ29uQ2hhbmdlJyB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2V0TGF5b3V0U3RhZ2VDb21wbGV0ZSA9IHVzZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMuc2V0U3RhZ2VDb21wbGV0ZSk7XG4gIGNvbnN0IHVwZGF0ZVF1b3RlU3RhZ2UgPSB1c2VBY3Rpb24ocXVvdGVHZW5lcmFsQWN0aW9ucy51cGRhdGVTdGFnZSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldExheW91dFN0YWdlQ29tcGxldGUoKTtcbiAgICB1cGRhdGVRdW90ZVN0YWdlKFF1b3RlU3RhZ2UuQ09OVEFDVF9JTkZPUk1BVElPTik7XG4gICAgcm91dGVyLnB1c2goc21hcnRRdW90ZXJSb3V0ZXMuY29udGFjdEluZm9ybWF0aW9uLnJvdXRlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtudW1iZXJSb3dzLCB1cGRhdGVOdW1iZXJSb3dzXSA9IHVzZURlYm91bmNlVXBkYXRlUmVkdXgoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQubnVtYmVyUm93cyBhcyBudW1iZXIsXG4gICAgcXVvdGVMYXlvdXRBY3Rpb25zLnVwZGF0ZU51bWJlclJvd3MsXG4gICAgeyBlVGFyZ2V0VmFsdWVBZGp1c3RtZW50OiB0cnVlIH1cbiAgKTtcbiAgY29uc3QgdXBkYXRlTnVtYmVyUm93c0RpcmVjdCA9IHVzZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMudXBkYXRlTnVtYmVyUm93cyk7XG4gIGNvbnN0IG51cm8gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxheW91dC5udW1iZXJSb3dzXG4gICk7XG4gIGNvbnN0IFtudW1iZXJDb2x1bW5zLCB1cGRhdGVOdW1iZXJDb2x1bW5zXSA9IHVzZURlYm91bmNlVXBkYXRlUmVkdXgoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQubnVtYmVyQ29sdW1ucyBhcyBudW1iZXIsXG4gICAgcXVvdGVMYXlvdXRBY3Rpb25zLnVwZGF0ZU51bWJlckNvbHVtbnMsXG4gICAgeyBlVGFyZ2V0VmFsdWVBZGp1c3RtZW50OiB0cnVlIH1cbiAgKTtcbiAgY29uc3QgW3JvdGF0aW9uLCB1cGRhdGVSb3RhdGlvbl0gPSB1c2VEZWJvdW5jZVVwZGF0ZVJlZHV4KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucXVvdGUubGF5b3V0LnJvdGF0aW9uIGFzIG51bWJlcixcbiAgICBxdW90ZUxheW91dEFjdGlvbnMudXBkYXRlUm90YXRpb24sXG4gICAgeyBlVGFyZ2V0VmFsdWVBZGp1c3RtZW50OiB0cnVlIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNtYXJ0IFF1b3RlciAtIExheW91dDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UXVvdGVQYWdlSGVhZGluZyAvPlxuICAgICAgPFF1b3RlTWluaU5hdmxpbmtzIC8+XG4gICAgICA8Q3VycmVudExvY2F0aW9uIC8+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgc2hhZG93LWxnIHNtOmdyaWQgc206Z3JpZC1jb2xzLTIgc206Z2FwLTJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHNtOmNvbC1zcGFuLTEgYWxpZ24tY2VudGVyICR7c3R5bGVzLmZvcm1HcmlkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9eydudW1iZXJDb2x1bW5zJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LWxnIGxlYWRpbmctdGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOdW1iZXIgY29sdW1uc1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9eydudW1iZXInfVxuICAgICAgICAgICAgICAgIG5hbWU9eydudW1iZXJDb2x1bW5zJ31cbiAgICAgICAgICAgICAgICBpZD17J251bWJlckNvbHVtbnMnfVxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgICAgICAgbWF4OiAxNTAsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtudW1iZXJDb2x1bW5zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVOdW1iZXJDb2x1bW5zIGFzIGFueX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5udW1iZXJDb2x1bW5zPy50eXBlID09PSAncmVxdWlyZWQnICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZXJyb3J9PlRoaXMgaW5wdXQgaXMgcmVxdWlyZWQ8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtlcnJvcnMubnVtYmVyQ29sdW1ucz8udHlwZSAmJlxuICAgICAgICAgICAgICAgIGVycm9ycy5udW1iZXJDb2x1bW5zPy50eXBlICE9PSAndmFsaWRhdGUnICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5lcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgIE11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAxMCBhbmQgMTUwXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj17J251bWJlclJvd3MnfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0yIHRleHQtbGcgbGVhZGluZy10aWdodFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE51bWJlciByb3dzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPFNsaWRlck51bWJlcklucHV0XG4gICAgICAgICAgICAgIGh0bWxOYW1lPXsnbnVtYmVyUm93cyd9XG4gICAgICAgICAgICAgIHZhbHVlPXtudXJvfVxuICAgICAgICAgICAgICB1cGRhdGVWYWx1ZT17dXBkYXRlTnVtYmVyUm93c0RpcmVjdH1cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eydyb3RhdGlvbid9IGNsYXNzTmFtZT1cIm15LTIgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgIFJvdGF0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT17J251bWJlcid9XG4gICAgICAgICAgICAgICAgbmFtZT17J3JvdGF0aW9uJ31cbiAgICAgICAgICAgICAgICBpZD17J3JvdGF0aW9uJ31cbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgbWF4OiAzNjAsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyb3RhdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlUm90YXRpb24gYXMgYW55fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLnJvdGF0aW9uPy50eXBlID09PSAncmVxdWlyZWQnICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZXJyb3J9PlRoaXMgaW5wdXQgaXMgcmVxdWlyZWQ8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtlcnJvcnMucm90YXRpb24/LnR5cGUgJiZcbiAgICAgICAgICAgICAgICBlcnJvcnMucm90YXRpb24/LnR5cGUgIT09ICd2YWxpZGF0ZScgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmVycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgTXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDM2MFxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTAgZm9ybS1wYXJhZ3JhcGggbXQtNVwiPlxuICAgICAgICAgICAgICBJbnN0YWxsYXRpb24gc2l6ZToge251bWJlckNvbHVtbnMgKiBudW1iZXJSb3dzfSBzb2xhciBwYW5lbHMgKFxuICAgICAgICAgICAgICB7bnVtYmVyUm93c314e251bWJlckNvbHVtbnN9KVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItMCBmb3JtLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICBPcHRpbWFsIGVmZmVjdDoge251bWJlckNvbHVtbnMgKiBudW1iZXJSb3dzICogMC41fSBrV3BcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMYXlvdXRNYXAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNCBzbTpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBsYWJlbD1cIkNvbnRpbnVlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1uby13cmFwIGl0ZW1zLWNlbnRlciBweC02IHNoYWRvdy1tZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJpZ2h0QXJyb3cgY2xhc3NOYW1lPVwiaW5saW5lIHctNSBtbC00IGZpbGwtY3VycmVudFwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0QW5kSW5mb3JtYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quote/layout-and-information.tsx\n");

/***/ })

})