webpackHotUpdate_N_E("pages/quote/layout-and-information",{

/***/ "./components/quote/location/layout-map.tsx":
/*!**************************************************!*\
  !*** ./components/quote/location/layout-map.tsx ***!
  \**************************************************/
/*! exports provided: LayoutMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutMap\", function() { return LayoutMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.module.scss */ \"./components/quote/location/map.module.scss\");\n/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useMap */ \"./components/quote/location/useMap.ts\");\n/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! geolib */ \"./node_modules/geolib/es/index.js\");\n/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(geolib__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/components/quote/location/layout-map.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"];\n\n\n\n\n\n\n\nvar LayoutMap = function LayoutMap() {\n  _s();\n\n  var _location$overrideCoo;\n\n  var map = Object(_useMap__WEBPACK_IMPORTED_MODULE_5__[\"useMap\"])({\n    mapOptions: {\n      streetViewControl: false,\n      disableDoubleClickZoom: true,\n      draggable: true\n    },\n    handleChangeCenter: true\n  });\n  var location = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.quote.location;\n  });\n  var layout = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.quote.layout;\n  });\n  var installationHeight = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n    return installationSideLength(layout.numberRows);\n  }, [layout.numberRows]);\n  var installationWidth = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n    return installationSideLength(layout.numberColumns);\n  }, [layout.numberColumns]);\n  var installationOrientation = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.quote.layout.rotation;\n  }); // @ts-ignore\n\n  var installationCoordinates = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n    if (location.overrideCoordinates === null || layout.numberColumns === null) {\n      return null;\n    }\n\n    var center = location.overrideCoordinates.center;\n    var directions = [180, 90, 0].map(function (direction) {\n      return (direction + installationOrientation) % 360;\n    });\n    var lengths = [installationHeight, installationWidth, installationHeight];\n    var startPoint = longToShortForm(geolib__WEBPACK_IMPORTED_MODULE_6__[\"computeDestinationPoint\"](geolib__WEBPACK_IMPORTED_MODULE_6__[\"computeDestinationPoint\"](shortToLongForm(center), installationWidth / 2, (270 + installationOrientation) % 360), installationHeight / 2, installationOrientation % 360));\n    return ramda__WEBPACK_IMPORTED_MODULE_3__[\"pipe\"]( // @ts-ignore\n    ramda__WEBPACK_IMPORTED_MODULE_3__[\"apply\"](ramda__WEBPACK_IMPORTED_MODULE_3__[\"zip\"]), ramda__WEBPACK_IMPORTED_MODULE_3__[\"reduce\"](function (vertices, _ref) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n          direction = _ref2[0],\n          length = _ref2[1];\n\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vertices), [longToShortForm(geolib__WEBPACK_IMPORTED_MODULE_6__[\"computeDestinationPoint\"](ramda__WEBPACK_IMPORTED_MODULE_3__[\"head\"](ramda__WEBPACK_IMPORTED_MODULE_3__[\"reverse\"](vertices)), length, direction))]);\n    }, [startPoint]) // @ts-ignore\n    )([directions, lengths]);\n  }, [(_location$overrideCoo = location.overrideCoordinates) === null || _location$overrideCoo === void 0 ? void 0 : _location$overrideCoo.center, installationHeight, installationWidth, installationOrientation]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (map.mapObject === null || !installationCoordinates) {\n      return;\n    }\n\n    var rectangleObject = new google.maps.Polygon({\n      strokeColor: '#ff9c5d',\n      strokeOpacity: 0.8,\n      strokeWeight: 2,\n      fillColor: '#ff9c5d',\n      fillOpacity: 0.35,\n      map: map.mapObject,\n      paths: installationCoordinates,\n      draggable: false\n    });\n    return function () {\n      return rectangleObject.setMap(null);\n    };\n  }, [map.mapObject, installationCoordinates]);\n  return __jsx(\"div\", {\n    className: _map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mapContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: map.domRef,\n    className: _map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mapElement,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(LayoutMap, \"j82m5YMHKk4gp5op+re+Jygx2AM=\", false, function () {\n  return [_useMap__WEBPACK_IMPORTED_MODULE_5__[\"useMap\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = LayoutMap;\n\nvar shortToLongForm = function shortToLongForm(_ref3) {\n  var lat = _ref3.lat,\n      lng = _ref3.lng;\n  return {\n    latitude: lat,\n    longitude: lng\n  };\n};\n\nvar longToShortForm = function longToShortForm(_ref4) {\n  var latitude = _ref4.latitude,\n      longitude = _ref4.longitude;\n  return {\n    lat: latitude,\n    lng: longitude\n  };\n}; // Installation consists of panels each 2m in length with 0.15m gap between each\n\n\nvar installationSideLength = function installationSideLength(numberUnits) {\n  return numberUnits * 2 + (numberUnits - 1) * 0.15;\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"LayoutMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZS9sb2NhdGlvbi9sYXlvdXQtbWFwLnRzeD81MzI4Il0sIm5hbWVzIjpbIkxheW91dE1hcCIsIm1hcCIsInVzZU1hcCIsIm1hcE9wdGlvbnMiLCJzdHJlZXRWaWV3Q29udHJvbCIsImRpc2FibGVEb3VibGVDbGlja1pvb20iLCJkcmFnZ2FibGUiLCJoYW5kbGVDaGFuZ2VDZW50ZXIiLCJsb2NhdGlvbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJxdW90ZSIsImxheW91dCIsImluc3RhbGxhdGlvbkhlaWdodCIsInVzZU1lbW8iLCJpbnN0YWxsYXRpb25TaWRlTGVuZ3RoIiwibnVtYmVyUm93cyIsImluc3RhbGxhdGlvbldpZHRoIiwibnVtYmVyQ29sdW1ucyIsImluc3RhbGxhdGlvbk9yaWVudGF0aW9uIiwicm90YXRpb24iLCJpbnN0YWxsYXRpb25Db29yZGluYXRlcyIsIm92ZXJyaWRlQ29vcmRpbmF0ZXMiLCJjZW50ZXIiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uIiwibGVuZ3RocyIsInN0YXJ0UG9pbnQiLCJsb25nVG9TaG9ydEZvcm0iLCJnZW9saWIiLCJzaG9ydFRvTG9uZ0Zvcm0iLCJSIiwidmVydGljZXMiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJtYXBPYmplY3QiLCJyZWN0YW5nbGVPYmplY3QiLCJnb29nbGUiLCJtYXBzIiwiUG9seWdvbiIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwicGF0aHMiLCJzZXRNYXAiLCJtYXBTdHlsZXMiLCJtYXBDb250YWluZXIiLCJkb21SZWYiLCJtYXBFbGVtZW50IiwibGF0IiwibG5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJudW1iZXJVbml0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFILFNBQUdBLEdBQUg7QUFBQSxNQUFRQyxHQUFSLFNBQVFBLEdBQVI7QUFBQSxTQUFpRDtBQUN2RUMsWUFBUSxFQUFFRixHQUQ2RDtBQUV2RUcsYUFBUyxFQUFFRjtBQUY0RCxHQUFqRDtBQUFBLENBQXhCOztBQUtBLElBQU14QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFDdEJ5QixRQURzQixTQUN0QkEsUUFEc0I7QUFBQSxNQUV0QkMsU0FGc0IsU0FFdEJBLFNBRnNCO0FBQUEsU0FNakI7QUFDTEgsT0FBRyxFQUFFRSxRQURBO0FBRUxELE9BQUcsRUFBRUU7QUFGQSxHQU5pQjtBQUFBLENBQXhCLEMsQ0FXQTs7O0FBQ0EsSUFBTXZDLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ3dDLFdBQUQsRUFBeUI7QUFDdEQsU0FBT0EsV0FBVyxHQUFHLENBQWQsR0FBa0IsQ0FBQ0EsV0FBVyxHQUFHLENBQWYsSUFBb0IsSUFBN0M7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9xdW90ZS9sb2NhdGlvbi9sYXlvdXQtbWFwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXBTdHlsZXMgZnJvbSAnLi9tYXAubW9kdWxlLnNjc3MnO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNYXAgfSBmcm9tICcuL3VzZU1hcCc7XG5pbXBvcnQgKiBhcyBnZW9saWIgZnJvbSAnZ2VvbGliJztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0TWFwOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IG1hcCA9IHVzZU1hcCh7XG4gICAgbWFwT3B0aW9uczoge1xuICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIGhhbmRsZUNoYW5nZUNlbnRlcjogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgbG9jYXRpb24gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxvY2F0aW9uXG4gICk7XG4gIGNvbnN0IGxheW91dCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU21hcnRRdW90ZXJTdGF0ZSkgPT4gc3RhdGUucXVvdGUubGF5b3V0KTtcblxuICBjb25zdCBpbnN0YWxsYXRpb25IZWlnaHQgPSB1c2VNZW1vKFxuICAgICgpID0+IGluc3RhbGxhdGlvblNpZGVMZW5ndGgobGF5b3V0Lm51bWJlclJvd3MpLFxuICAgIFtsYXlvdXQubnVtYmVyUm93c11cbiAgKTtcbiAgY29uc3QgaW5zdGFsbGF0aW9uV2lkdGggPSB1c2VNZW1vKFxuICAgICgpID0+IGluc3RhbGxhdGlvblNpZGVMZW5ndGgobGF5b3V0Lm51bWJlckNvbHVtbnMpLFxuICAgIFtsYXlvdXQubnVtYmVyQ29sdW1uc11cbiAgKTtcbiAgY29uc3QgaW5zdGFsbGF0aW9uT3JpZW50YXRpb24gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxheW91dC5yb3RhdGlvblxuICApO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgaW5zdGFsbGF0aW9uQ29vcmRpbmF0ZXM6IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxbXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxvY2F0aW9uLm92ZXJyaWRlQ29vcmRpbmF0ZXMgPT09IG51bGwgfHxcbiAgICAgIGxheW91dC5udW1iZXJDb2x1bW5zID09PSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY2VudGVyID0gbG9jYXRpb24ub3ZlcnJpZGVDb29yZGluYXRlcy5jZW50ZXI7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsxODAsIDkwLCAwXS5tYXAoKGRpcmVjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIChkaXJlY3Rpb24gKyBpbnN0YWxsYXRpb25PcmllbnRhdGlvbikgJSAzNjA7XG4gICAgfSk7XG4gICAgY29uc3QgbGVuZ3RocyA9IFtpbnN0YWxsYXRpb25IZWlnaHQsIGluc3RhbGxhdGlvbldpZHRoLCBpbnN0YWxsYXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBsb25nVG9TaG9ydEZvcm0oXG4gICAgICBnZW9saWIuY29tcHV0ZURlc3RpbmF0aW9uUG9pbnQoXG4gICAgICAgIGdlb2xpYi5jb21wdXRlRGVzdGluYXRpb25Qb2ludChcbiAgICAgICAgICBzaG9ydFRvTG9uZ0Zvcm0oY2VudGVyKSxcbiAgICAgICAgICBpbnN0YWxsYXRpb25XaWR0aCAvIDIsXG4gICAgICAgICAgKDI3MCArIGluc3RhbGxhdGlvbk9yaWVudGF0aW9uKSAlIDM2MFxuICAgICAgICApLFxuICAgICAgICBpbnN0YWxsYXRpb25IZWlnaHQgLyAyLFxuICAgICAgICBpbnN0YWxsYXRpb25PcmllbnRhdGlvbiAlIDM2MFxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIFIucGlwZShcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIFIuYXBwbHkoUi56aXApLFxuICAgICAgUi5yZWR1Y2UoXG4gICAgICAgICh2ZXJ0aWNlczogZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbFtdLCBbZGlyZWN0aW9uLCBsZW5ndGhdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnZlcnRpY2VzLFxuICAgICAgICAgICAgbG9uZ1RvU2hvcnRGb3JtKFxuICAgICAgICAgICAgICBnZW9saWIuY29tcHV0ZURlc3RpbmF0aW9uUG9pbnQoXG4gICAgICAgICAgICAgICAgUi5oZWFkKFIucmV2ZXJzZSh2ZXJ0aWNlcykpIGFzIGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWwsXG4gICAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF07XG4gICAgICAgIH0sXG4gICAgICAgIFtzdGFydFBvaW50XVxuICAgICAgKVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICkoW2RpcmVjdGlvbnMsIGxlbmd0aHNdKTtcbiAgfSwgW1xuICAgIGxvY2F0aW9uLm92ZXJyaWRlQ29vcmRpbmF0ZXM/LmNlbnRlcixcbiAgICBpbnN0YWxsYXRpb25IZWlnaHQsXG4gICAgaW5zdGFsbGF0aW9uV2lkdGgsXG4gICAgaW5zdGFsbGF0aW9uT3JpZW50YXRpb24sXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1hcC5tYXBPYmplY3QgPT09IG51bGwgfHwgIWluc3RhbGxhdGlvbkNvb3JkaW5hdGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZU9iamVjdCA9IG5ldyBnb29nbGUubWFwcy5Qb2x5Z29uKHtcbiAgICAgIHN0cm9rZUNvbG9yOiAnI2ZmOWM1ZCcsXG4gICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICBzdHJva2VXZWlnaHQ6IDIsXG4gICAgICBmaWxsQ29sb3I6ICcjZmY5YzVkJyxcbiAgICAgIGZpbGxPcGFjaXR5OiAwLjM1LFxuICAgICAgbWFwOiBtYXAubWFwT2JqZWN0LFxuICAgICAgcGF0aHM6IGluc3RhbGxhdGlvbkNvb3JkaW5hdGVzLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gcmVjdGFuZ2xlT2JqZWN0LnNldE1hcChudWxsKTtcbiAgfSwgW21hcC5tYXBPYmplY3QsIGluc3RhbGxhdGlvbkNvb3JkaW5hdGVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFwU3R5bGVzLm1hcENvbnRhaW5lcn0+XG4gICAgICA8ZGl2IHJlZj17bWFwLmRvbVJlZn0gY2xhc3NOYW1lPXttYXBTdHlsZXMubWFwRWxlbWVudH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHNob3J0VG9Mb25nRm9ybSA9ICh7IGxhdCwgbG5nIH06IHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH0pID0+ICh7XG4gIGxhdGl0dWRlOiBsYXQsXG4gIGxvbmdpdHVkZTogbG5nLFxufSk7XG5cbmNvbnN0IGxvbmdUb1Nob3J0Rm9ybSA9ICh7XG4gIGxhdGl0dWRlLFxuICBsb25naXR1ZGUsXG59OiB7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xufSkgPT4gKHtcbiAgbGF0OiBsYXRpdHVkZSxcbiAgbG5nOiBsb25naXR1ZGUsXG59KTtcblxuLy8gSW5zdGFsbGF0aW9uIGNvbnNpc3RzIG9mIHBhbmVscyBlYWNoIDJtIGluIGxlbmd0aCB3aXRoIDAuMTVtIGdhcCBiZXR3ZWVuIGVhY2hcbmNvbnN0IGluc3RhbGxhdGlvblNpZGVMZW5ndGggPSAobnVtYmVyVW5pdHM6IG51bWJlcikgPT4ge1xuICByZXR1cm4gbnVtYmVyVW5pdHMgKiAyICsgKG51bWJlclVuaXRzIC0gMSkgKiAwLjE1O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/quote/location/layout-map.tsx\n");

/***/ })

})