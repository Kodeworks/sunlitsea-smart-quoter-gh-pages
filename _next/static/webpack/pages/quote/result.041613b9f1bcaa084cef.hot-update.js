webpackHotUpdate_N_E("pages/quote/result",{

/***/ "./components/quote/glintSolarLink.tsx":
/*!*********************************************!*\
  !*** ./components/quote/glintSolarLink.tsx ***!
  \*********************************************/
/*! exports provided: GlintSolarLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlintSolarLink\", function() { return GlintSolarLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/components/quote/glintSolarLink.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\nvar GlintSolarLink = function GlintSolarLink() {\n  _s();\n\n  var location = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.quote.layout;\n  });\n  var glintSolarLink = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    if (location.coordinates.length < 1) {\n      return '';\n    }\n\n    return \"https://glintsolar.no/location-info?coordinates=\".concat(location.coordinates.map(function (coordinate) {\n      return \"lat=\".concat(coordinate.lat.toFixed(6), \"lng=\").concat(coordinate.lng.toFixed(6));\n    }).join(';'));\n  }, [location]);\n  return __jsx(\"a\", {\n    href: glintSolarLink,\n    target: '_blank',\n    \"aria-disabled\": glintSolarLink === '' ? 'true' : 'false',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, \"glintsolar.no\");\n};\n\n_s(GlintSolarLink, \"ah7npJhGHx6PAmlTA4VyIXyV3y8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = GlintSolarLink;\n\nvar _c;\n\n$RefreshReg$(_c, \"GlintSolarLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZS9nbGludFNvbGFyTGluay50c3g/OGI3NCJdLCJuYW1lcyI6WyJHbGludFNvbGFyTGluayIsImxvY2F0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInF1b3RlIiwibGF5b3V0IiwiZ2xpbnRTb2xhckxpbmsiLCJ1c2VNZW1vIiwiY29vcmRpbmF0ZXMiLCJsZW5ndGgiLCJtYXAiLCJjb29yZGluYXRlIiwibGF0IiwidG9GaXhlZCIsImxuZyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHTyxJQUFNQSxjQUE0QixHQUFHLFNBQS9CQSxjQUErQixHQUFNO0FBQUE7O0FBQ2hELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBNkJBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUF6QztBQUFBLEdBQUQsQ0FBNUI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLHFEQUFPLENBQUMsWUFBTTtBQUNuQyxRQUFJTixRQUFRLENBQUNPLFdBQVQsQ0FBcUJDLE1BQXJCLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DLGFBQU8sRUFBUDtBQUNEOztBQUNELHFFQUEwRFIsUUFBUSxDQUFDTyxXQUFULENBQ3ZERSxHQUR1RCxDQUV0RCxVQUFDQyxVQUFEO0FBQUEsMkJBQ1NBLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlQyxPQUFmLENBQXVCLENBQXZCLENBRFQsaUJBQ3lDRixVQUFVLENBQUNHLEdBQVgsQ0FBZUQsT0FBZixDQUF1QixDQUF2QixDQUR6QztBQUFBLEtBRnNELEVBS3ZERSxJQUx1RCxDQUtsRCxHQUxrRCxDQUExRDtBQU1ELEdBVjZCLEVBVTNCLENBQUNkLFFBQUQsQ0FWMkIsQ0FBOUI7QUFXQSxTQUNFO0FBQ0UsUUFBSSxFQUFFSyxjQURSO0FBRUUsVUFBTSxFQUFFLFFBRlY7QUFHRSxxQkFBZUEsY0FBYyxLQUFLLEVBQW5CLEdBQXdCLE1BQXhCLEdBQWlDLE9BSGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFTRCxDQXRCTTs7R0FBTU4sYztVQUNNRSx1RDs7O0tBRE5GLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1b3RlL2dsaW50U29sYXJMaW5rLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTbWFydFF1b3RlclN0YXRlIH0gZnJvbSAnLi4vLi4vbGliL3Jvb3QtcmVkdWNlcic7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnO1xuXG5leHBvcnQgY29uc3QgR2xpbnRTb2xhckxpbms6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxheW91dCk7XG4gIGNvbnN0IGdsaW50U29sYXJMaW5rID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGxvY2F0aW9uLmNvb3JkaW5hdGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGBodHRwczovL2dsaW50c29sYXIubm8vbG9jYXRpb24taW5mbz9jb29yZGluYXRlcz0ke2xvY2F0aW9uLmNvb3JkaW5hdGVzXG4gICAgICAubWFwKFxuICAgICAgICAoY29vcmRpbmF0ZSkgPT5cbiAgICAgICAgICBgbGF0PSR7Y29vcmRpbmF0ZS5sYXQudG9GaXhlZCg2KX1sbmc9JHtjb29yZGluYXRlLmxuZy50b0ZpeGVkKDYpfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCc7Jyl9YDtcbiAgfSwgW2xvY2F0aW9uXSk7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2dsaW50U29sYXJMaW5rfVxuICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2dsaW50U29sYXJMaW5rID09PSAnJyA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgPlxuICAgICAgZ2xpbnRzb2xhci5ub1xuICAgIDwvYT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/quote/glintSolarLink.tsx\n");

/***/ })

})