webpackHotUpdate_N_E("pages/quote/result",{

/***/ "./components/quote/glintSolarLink.tsx":
/*!*********************************************!*\
  !*** ./components/quote/glintSolarLink.tsx ***!
  \*********************************************/
/*! exports provided: GlintSolarLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlintSolarLink\", function() { return GlintSolarLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/components/quote/glintSolarLink.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\nvar recordOutbound = function recordOutbound(clickId) {\n  return function () {\n    console.debug('🔦 outbound link to glintsolar recorded with gtag');\n\n    if (gtag) {\n      gtag('event', 'click', {\n        event_category: 'outbound',\n        event_label: 'glintsolar.no/location-info',\n        transport_type: 'beacon',\n        click_id: clickId\n      });\n    }\n  };\n};\n\nvar GlintSolarLink = function GlintSolarLink() {\n  _s();\n\n  var location = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.quote.layout;\n  });\n  var clickId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.quote.general.clickId;\n  });\n  var glintSolarLink = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    var _location$coordinates;\n\n    if (((_location$coordinates = location.coordinates) === null || _location$coordinates === void 0 ? void 0 : _location$coordinates.length) === 0) {\n      return '';\n    }\n\n    return \"https://app.glint.no/?coordinates=\".concat(location.coordinates.map(function (coordinate) {\n      return \"lat\".concat(coordinate.lat.toFixed(6), \"lng\").concat(coordinate.lng.toFixed(6));\n    }).join(';'), \"&source=sunlitsea&wattpeak=119&clickId=\").concat(clickId);\n  }, [location]);\n\n  if (glintSolarLink === '') {\n    return null;\n  }\n\n  return __jsx(\"a\", {\n    href: glintSolarLink,\n    target: '_blank',\n    style: {\n      textDecoration: 'underline'\n    },\n    onClick: recordOutbound(clickId),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, \"app.glint.no\");\n};\n\n_s(GlintSolarLink, \"vAOSsF/U6yckBbM9lsPunlUhprg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = GlintSolarLink;\n\nvar _c;\n\n$RefreshReg$(_c, \"GlintSolarLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZS9nbGludFNvbGFyTGluay50c3g/OGI3NCJdLCJuYW1lcyI6WyJyZWNvcmRPdXRib3VuZCIsImNsaWNrSWQiLCJjb25zb2xlIiwiZGVidWciLCJndGFnIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCIsInRyYW5zcG9ydF90eXBlIiwiY2xpY2tfaWQiLCJHbGludFNvbGFyTGluayIsImxvY2F0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInF1b3RlIiwibGF5b3V0IiwiZ2VuZXJhbCIsImdsaW50U29sYXJMaW5rIiwidXNlTWVtbyIsImNvb3JkaW5hdGVzIiwibGVuZ3RoIiwibWFwIiwiY29vcmRpbmF0ZSIsImxhdCIsInRvRml4ZWQiLCJsbmciLCJqb2luIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxPQUFEO0FBQUEsU0FBYSxZQUFNO0FBQ3hDQyxXQUFPLENBQUNDLEtBQVIsQ0FBYyxtREFBZDs7QUFDQSxRQUFJQyxJQUFKLEVBQVU7QUFDUkEsVUFBSSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CO0FBQ3JCQyxzQkFBYyxFQUFFLFVBREs7QUFFckJDLG1CQUFXLEVBQUUsNkJBRlE7QUFHckJDLHNCQUFjLEVBQUUsUUFISztBQUlyQkMsZ0JBQVEsRUFBRVA7QUFKVyxPQUFuQixDQUFKO0FBTUQ7QUFDRixHQVZzQjtBQUFBLENBQXZCOztBQVlPLElBQU1RLGNBQTRCLEdBQUcsU0FBL0JBLGNBQStCLEdBQU07QUFBQTs7QUFDaEQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUE2QkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQXpDO0FBQUEsR0FBRCxDQUE1QjtBQUNBLE1BQU1iLE9BQU8sR0FBR1UsK0RBQVcsQ0FDekIsVUFBQ0MsS0FBRDtBQUFBLFdBQTZCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsT0FBWixDQUFvQmQsT0FBakQ7QUFBQSxHQUR5QixDQUEzQjtBQUdBLE1BQU1lLGNBQWMsR0FBR0MscURBQU8sQ0FBQyxZQUFNO0FBQUE7O0FBQ25DLFFBQUksMEJBQUFQLFFBQVEsQ0FBQ1EsV0FBVCxnRkFBc0JDLE1BQXRCLE1BQWlDLENBQXJDLEVBQXdDO0FBQ3RDLGFBQU8sRUFBUDtBQUNEOztBQUNELHVEQUE0Q1QsUUFBUSxDQUFDUSxXQUFULENBQ3pDRSxHQUR5QyxDQUV4QyxVQUFDQyxVQUFEO0FBQUEsMEJBQ1FBLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlQyxPQUFmLENBQXVCLENBQXZCLENBRFIsZ0JBQ3VDRixVQUFVLENBQUNHLEdBQVgsQ0FBZUQsT0FBZixDQUF1QixDQUF2QixDQUR2QztBQUFBLEtBRndDLEVBS3pDRSxJQUx5QyxDQUtwQyxHQUxvQyxDQUE1QyxvREFLc0R4QixPQUx0RDtBQU1ELEdBVjZCLEVBVTNCLENBQUNTLFFBQUQsQ0FWMkIsQ0FBOUI7O0FBV0EsTUFBSU0sY0FBYyxLQUFLLEVBQXZCLEVBQTJCO0FBQ3pCLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0U7QUFDRSxRQUFJLEVBQUVBLGNBRFI7QUFFRSxVQUFNLEVBQUUsUUFGVjtBQUdFLFNBQUssRUFBRTtBQUFFVSxvQkFBYyxFQUFFO0FBQWxCLEtBSFQ7QUFJRSxXQUFPLEVBQUUxQixjQUFjLENBQUNDLE9BQUQsQ0FKekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERjtBQVVELENBN0JNOztHQUFNUSxjO1VBQ01FLHVELEVBQ0RBLHVEOzs7S0FGTEYsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcXVvdGUvZ2xpbnRTb2xhckxpbmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCByZWNvcmRPdXRib3VuZCA9IChjbGlja0lkKSA9PiAoKSA9PiB7XG4gIGNvbnNvbGUuZGVidWcoJ/CflKYgb3V0Ym91bmQgbGluayB0byBnbGludHNvbGFyIHJlY29yZGVkIHdpdGggZ3RhZycpO1xuICBpZiAoZ3RhZykge1xuICAgIGd0YWcoJ2V2ZW50JywgJ2NsaWNrJywge1xuICAgICAgZXZlbnRfY2F0ZWdvcnk6ICdvdXRib3VuZCcsXG4gICAgICBldmVudF9sYWJlbDogJ2dsaW50c29sYXIubm8vbG9jYXRpb24taW5mbycsXG4gICAgICB0cmFuc3BvcnRfdHlwZTogJ2JlYWNvbicsXG4gICAgICBjbGlja19pZDogY2xpY2tJZCxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEdsaW50U29sYXJMaW5rOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQpO1xuICBjb25zdCBjbGlja0lkID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5nZW5lcmFsLmNsaWNrSWRcbiAgKTtcbiAgY29uc3QgZ2xpbnRTb2xhckxpbmsgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAobG9jYXRpb24uY29vcmRpbmF0ZXM/Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYGh0dHBzOi8vYXBwLmdsaW50Lm5vLz9jb29yZGluYXRlcz0ke2xvY2F0aW9uLmNvb3JkaW5hdGVzXG4gICAgICAubWFwKFxuICAgICAgICAoY29vcmRpbmF0ZSkgPT5cbiAgICAgICAgICBgbGF0JHtjb29yZGluYXRlLmxhdC50b0ZpeGVkKDYpfWxuZyR7Y29vcmRpbmF0ZS5sbmcudG9GaXhlZCg2KX1gXG4gICAgICApXG4gICAgICAuam9pbignOycpfSZzb3VyY2U9c3VubGl0c2VhJndhdHRwZWFrPTExOSZjbGlja0lkPSR7Y2xpY2tJZH1gO1xuICB9LCBbbG9jYXRpb25dKTtcbiAgaWYgKGdsaW50U29sYXJMaW5rID09PSAnJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2dsaW50U29sYXJMaW5rfVxuICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cbiAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fVxuICAgICAgb25DbGljaz17cmVjb3JkT3V0Ym91bmQoY2xpY2tJZCl9XG4gICAgPlxuICAgICAgYXBwLmdsaW50Lm5vXG4gICAgPC9hPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/quote/glintSolarLink.tsx\n");

/***/ })

})