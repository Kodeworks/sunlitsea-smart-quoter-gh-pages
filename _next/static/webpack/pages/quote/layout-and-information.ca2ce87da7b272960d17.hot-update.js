webpackHotUpdate_N_E("pages/quote/layout-and-information",{

/***/ "./components/SliderNumberInput.module.scss":
false,

/***/ "./components/SliderNumberInput.tsx":
false,

/***/ "./components/quote/location/layout-map.tsx":
false,

/***/ "./components/quote/location/map.module.scss":
false,

/***/ "./components/quote/location/useDrawInstallationCoordinates.ts":
false,

/***/ "./components/quote/location/useInstallationCoordinates.ts":
false,

/***/ "./components/quote/location/useMap.ts":
false,

/***/ "./lib/defs.ts":
false,

/***/ "./lib/googlemaps/google-maps.ts":
false,

/***/ "./lib/quote/layout-reducer.ts":
/*!*************************************!*\
  !*** ./lib/quote/layout-reducer.ts ***!
  \*************************************/
/*! exports provided: quoteLayoutActions, quoteLayoutReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quoteLayoutActions\", function() { return quoteLayoutActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quoteLayoutReducer\", function() { return quoteLayoutReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils_initiatedStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/initiatedStage */ \"./lib/utils/initiatedStage.ts\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typesafe-actions */ \"./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stage */ \"./lib/stage.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar quoteLayoutActions = {\n  setStageComplete: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__[\"createAction\"])('QUOTE_LAYOUT/SET_STAGE_COMPLETE')(),\n  setStageInitiated: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__[\"createAction\"])('QUOTE_LAYOUT/SET_STAGE_INITIATED')(),\n  updateSelectedArea: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__[\"createAction\"])('QUOTE_LAYOUT/UPDATE_SELECTED_AREA', function (newSelectedArea) {\n    return newSelectedArea;\n  })()\n};\nvar quoteLayoutReducer = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__[\"createReducer\"])({\n  stage: _stage__WEBPACK_IMPORTED_MODULE_3__[\"Stage\"].NOT_INITIATED,\n  installationSize: null,\n  peakProduction: null,\n  selectedArea: null\n}).handleAction(quoteLayoutActions.setStageComplete, function (state) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    stage: _stage__WEBPACK_IMPORTED_MODULE_3__[\"Stage\"].COMPLETE\n  });\n}).handleAction(quoteLayoutActions.setStageInitiated, function (state) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    stage: _stage__WEBPACK_IMPORTED_MODULE_3__[\"Stage\"].INITIATED\n  });\n}).handleAction(quoteLayoutActions.updateSelectedArea, function (state, action) {\n  if (isNaN(action.payload)) {\n    return _objectSpread(_objectSpread({}, state), {}, {\n      selectedArea: null,\n      installationSize: null,\n      peakProduction: null,\n      stage: Object(_utils_initiatedStage__WEBPACK_IMPORTED_MODULE_1__[\"initiatedStage\"])(state.stage)\n    });\n  }\n\n  return _objectSpread(_objectSpread({}, state), {}, {\n    selectedArea: action.payload,\n    installationSize: installationSizeFromSelectedArea(action.payload),\n    peakProduction: peakProductionFromInstallationSize(installationSizeFromSelectedArea(action.payload)),\n    stage: Object(_utils_initiatedStage__WEBPACK_IMPORTED_MODULE_1__[\"initiatedStage\"])(state.stage)\n  });\n});\n\nvar installationSizeFromSelectedArea = function installationSizeFromSelectedArea(selectedArea) {\n  return Math.pow(Math.floor(selectedArea / 2), 2);\n};\n/**\n * KWp\n */\n\n\nvar peakProductionFromInstallationSize = function peakProductionFromInstallationSize(installationSize) {\n  return Math.floor(installationSize) * 0.5;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3F1b3RlL2xheW91dC1yZWR1Y2VyLnRzP2VkMjAiXSwibmFtZXMiOlsicXVvdGVMYXlvdXRBY3Rpb25zIiwic2V0U3RhZ2VDb21wbGV0ZSIsImNyZWF0ZUFjdGlvbiIsInNldFN0YWdlSW5pdGlhdGVkIiwidXBkYXRlU2VsZWN0ZWRBcmVhIiwibmV3U2VsZWN0ZWRBcmVhIiwicXVvdGVMYXlvdXRSZWR1Y2VyIiwiY3JlYXRlUmVkdWNlciIsInN0YWdlIiwiU3RhZ2UiLCJOT1RfSU5JVElBVEVEIiwiaW5zdGFsbGF0aW9uU2l6ZSIsInBlYWtQcm9kdWN0aW9uIiwic2VsZWN0ZWRBcmVhIiwiaGFuZGxlQWN0aW9uIiwic3RhdGUiLCJDT01QTEVURSIsIklOSVRJQVRFRCIsImFjdGlvbiIsImlzTmFOIiwicGF5bG9hZCIsImluaXRpYXRlZFN0YWdlIiwiaW5zdGFsbGF0aW9uU2l6ZUZyb21TZWxlY3RlZEFyZWEiLCJwZWFrUHJvZHVjdGlvbkZyb21JbnN0YWxsYXRpb25TaXplIiwiTWF0aCIsInBvdyIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHO0FBQ2hDQyxrQkFBZ0IsRUFBRUMscUVBQVksQ0FBQyxpQ0FBRCxDQUFaLEVBRGM7QUFFaENDLG1CQUFpQixFQUFFRCxxRUFBWSxDQUFDLGtDQUFELENBQVosRUFGYTtBQUdoQ0Usb0JBQWtCLEVBQUVGLHFFQUFZLENBQzlCLG1DQUQ4QixFQUU5QixVQUFDRyxlQUFEO0FBQUEsV0FBNkJBLGVBQTdCO0FBQUEsR0FGOEIsQ0FBWjtBQUhZLENBQTNCO0FBbUJBLElBQU1DLGtCQUFrQixHQUFHQyxzRUFBYSxDQUc3QztBQUNBQyxPQUFLLEVBQUVDLDRDQUFLLENBQUNDLGFBRGI7QUFFQUMsa0JBQWdCLEVBQUUsSUFGbEI7QUFHQUMsZ0JBQWMsRUFBRSxJQUhoQjtBQUlBQyxjQUFZLEVBQUU7QUFKZCxDQUg2QyxDQUFiLENBUy9CQyxZQVQrQixDQVNsQmQsa0JBQWtCLENBQUNDLGdCQVRELEVBU21CLFVBQUNjLEtBQUQ7QUFBQSx5Q0FDOUNBLEtBRDhDO0FBRWpEUCxTQUFLLEVBQUVDLDRDQUFLLENBQUNPO0FBRm9DO0FBQUEsQ0FUbkIsRUFhL0JGLFlBYitCLENBYWxCZCxrQkFBa0IsQ0FBQ0csaUJBYkQsRUFhb0IsVUFBQ1ksS0FBRDtBQUFBLHlDQUMvQ0EsS0FEK0M7QUFFbERQLFNBQUssRUFBRUMsNENBQUssQ0FBQ1E7QUFGcUM7QUFBQSxDQWJwQixFQWlCL0JILFlBakIrQixDQWlCbEJkLGtCQUFrQixDQUFDSSxrQkFqQkQsRUFpQnFCLFVBQUNXLEtBQUQsRUFBUUcsTUFBUixFQUFtQjtBQUN0RSxNQUFJQyxLQUFLLENBQUNELE1BQU0sQ0FBQ0UsT0FBUixDQUFULEVBQTJCO0FBQ3pCLDJDQUNLTCxLQURMO0FBRUVGLGtCQUFZLEVBQUUsSUFGaEI7QUFHRUYsc0JBQWdCLEVBQUUsSUFIcEI7QUFJRUMsb0JBQWMsRUFBRSxJQUpsQjtBQUtFSixXQUFLLEVBQUVhLDRFQUFjLENBQUNOLEtBQUssQ0FBQ1AsS0FBUDtBQUx2QjtBQU9EOztBQUNELHlDQUNLTyxLQURMO0FBRUVGLGdCQUFZLEVBQUVLLE1BQU0sQ0FBQ0UsT0FGdkI7QUFHRVQsb0JBQWdCLEVBQUVXLGdDQUFnQyxDQUFDSixNQUFNLENBQUNFLE9BQVIsQ0FIcEQ7QUFJRVIsa0JBQWMsRUFBRVcsa0NBQWtDLENBQ2hERCxnQ0FBZ0MsQ0FBQ0osTUFBTSxDQUFDRSxPQUFSLENBRGdCLENBSnBEO0FBT0VaLFNBQUssRUFBRWEsNEVBQWMsQ0FBQ04sS0FBSyxDQUFDUCxLQUFQO0FBUHZCO0FBU0QsQ0FwQytCLENBQTNCOztBQXNDUCxJQUFNYyxnQ0FBZ0MsR0FBRyxTQUFuQ0EsZ0NBQW1DLENBQUNULFlBQUQsRUFBMEI7QUFDakUsU0FBT1csSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsS0FBTCxDQUFXYixZQUFZLEdBQUcsQ0FBMUIsQ0FBVCxFQUF1QyxDQUF2QyxDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7OztBQUdBLElBQU1VLGtDQUFrQyxHQUFHLFNBQXJDQSxrQ0FBcUMsQ0FBQ1osZ0JBQUQsRUFBOEI7QUFDdkUsU0FBT2EsSUFBSSxDQUFDRSxLQUFMLENBQVdmLGdCQUFYLElBQStCLEdBQXRDO0FBQ0QsQ0FGRCIsImZpbGUiOiIuL2xpYi9xdW90ZS9sYXlvdXQtcmVkdWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYXRlZFN0YWdlIH0gZnJvbSAnLi8uLi91dGlscy9pbml0aWF0ZWRTdGFnZSc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tICd0eXBlc2FmZS1hY3Rpb25zJztcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnLi4vc3RhZ2UnO1xuXG5leHBvcnQgY29uc3QgcXVvdGVMYXlvdXRBY3Rpb25zID0ge1xuICBzZXRTdGFnZUNvbXBsZXRlOiBjcmVhdGVBY3Rpb24oJ1FVT1RFX0xBWU9VVC9TRVRfU1RBR0VfQ09NUExFVEUnKSgpLFxuICBzZXRTdGFnZUluaXRpYXRlZDogY3JlYXRlQWN0aW9uKCdRVU9URV9MQVlPVVQvU0VUX1NUQUdFX0lOSVRJQVRFRCcpKCksXG4gIHVwZGF0ZVNlbGVjdGVkQXJlYTogY3JlYXRlQWN0aW9uKFxuICAgICdRVU9URV9MQVlPVVQvVVBEQVRFX1NFTEVDVEVEX0FSRUEnLFxuICAgIChuZXdTZWxlY3RlZEFyZWE6IG51bWJlcikgPT4gbmV3U2VsZWN0ZWRBcmVhXG4gICkoKSxcbn07XG5cbmludGVyZmFjZSBMYXlvdXRSZWR1Y2VyRGF0YSB7XG4gIHBlYWtQcm9kdWN0aW9uOiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICogTGVuZ3RoIG9mIHNlbGVjdGVkIGFyZWEgaW4gbWV0ZXJzXG4gICAqL1xuICBzZWxlY3RlZEFyZWE6IG51bWJlciB8IG51bGw7XG4gIGluc3RhbGxhdGlvblNpemU6IG51bWJlciB8IG51bGw7XG4gIHN0YWdlOiBTdGFnZTtcbn1cblxuZXhwb3J0IGNvbnN0IHF1b3RlTGF5b3V0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI8XG4gIExheW91dFJlZHVjZXJEYXRhLFxuICBBY3Rpb25UeXBlPHR5cGVvZiBxdW90ZUxheW91dEFjdGlvbnM+XG4+KHtcbiAgc3RhZ2U6IFN0YWdlLk5PVF9JTklUSUFURUQsXG4gIGluc3RhbGxhdGlvblNpemU6IG51bGwsXG4gIHBlYWtQcm9kdWN0aW9uOiBudWxsLFxuICBzZWxlY3RlZEFyZWE6IG51bGwsXG59KVxuICAuaGFuZGxlQWN0aW9uKHF1b3RlTGF5b3V0QWN0aW9ucy5zZXRTdGFnZUNvbXBsZXRlLCAoc3RhdGUpID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgc3RhZ2U6IFN0YWdlLkNPTVBMRVRFLFxuICB9KSlcbiAgLmhhbmRsZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMuc2V0U3RhZ2VJbml0aWF0ZWQsIChzdGF0ZSkgPT4gKHtcbiAgICAuLi5zdGF0ZSxcbiAgICBzdGFnZTogU3RhZ2UuSU5JVElBVEVELFxuICB9KSlcbiAgLmhhbmRsZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMudXBkYXRlU2VsZWN0ZWRBcmVhLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChpc05hTihhY3Rpb24ucGF5bG9hZCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZEFyZWE6IG51bGwsXG4gICAgICAgIGluc3RhbGxhdGlvblNpemU6IG51bGwsXG4gICAgICAgIHBlYWtQcm9kdWN0aW9uOiBudWxsLFxuICAgICAgICBzdGFnZTogaW5pdGlhdGVkU3RhZ2Uoc3RhdGUuc3RhZ2UpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2VsZWN0ZWRBcmVhOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIGluc3RhbGxhdGlvblNpemU6IGluc3RhbGxhdGlvblNpemVGcm9tU2VsZWN0ZWRBcmVhKGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgIHBlYWtQcm9kdWN0aW9uOiBwZWFrUHJvZHVjdGlvbkZyb21JbnN0YWxsYXRpb25TaXplKFxuICAgICAgICBpbnN0YWxsYXRpb25TaXplRnJvbVNlbGVjdGVkQXJlYShhY3Rpb24ucGF5bG9hZClcbiAgICAgICksXG4gICAgICBzdGFnZTogaW5pdGlhdGVkU3RhZ2Uoc3RhdGUuc3RhZ2UpLFxuICAgIH07XG4gIH0pO1xuXG5jb25zdCBpbnN0YWxsYXRpb25TaXplRnJvbVNlbGVjdGVkQXJlYSA9IChzZWxlY3RlZEFyZWE6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5wb3coTWF0aC5mbG9vcihzZWxlY3RlZEFyZWEgLyAyKSwgMik7XG59O1xuXG4vKipcbiAqIEtXcFxuICovXG5jb25zdCBwZWFrUHJvZHVjdGlvbkZyb21JbnN0YWxsYXRpb25TaXplID0gKGluc3RhbGxhdGlvblNpemU6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihpbnN0YWxsYXRpb25TaXplKSAqIDAuNTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/quote/layout-reducer.ts\n");

/***/ }),

/***/ "./lib/quote/location-reducer.ts":
false,

/***/ "./lib/utils/inputValueUpdaterReact.ts":
/*!*********************************************!*\
  !*** ./lib/utils/inputValueUpdaterReact.ts ***!
  \*********************************************/
/*! exports provided: inputValueUpdaterReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputValueUpdaterReact\", function() { return inputValueUpdaterReact; });\nvar inputValueUpdaterReact = function inputValueUpdaterReact(updateFunction) {\n  return function (e) {\n    return updateFunction(e.target.value);\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2lucHV0VmFsdWVVcGRhdGVyUmVhY3QudHM/ODNjMCJdLCJuYW1lcyI6WyJpbnB1dFZhbHVlVXBkYXRlclJlYWN0IiwidXBkYXRlRnVuY3Rpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUlDLGNBQUo7QUFBQSxTQUF1QixVQUFDQyxDQUFEO0FBQUEsV0FFdkRELGNBQWMsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FGeUM7QUFBQSxHQUF2QjtBQUFBLENBQS9CIiwiZmlsZSI6Ii4vbGliL3V0aWxzL2lucHV0VmFsdWVVcGRhdGVyUmVhY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5wdXRWYWx1ZVVwZGF0ZXJSZWFjdCA9IDxUPih1cGRhdGVGdW5jdGlvbikgPT4gKGU6IHtcbiAgdGFyZ2V0OiB7IHZhbHVlOiBUIH07XG59KSA9PiB1cGRhdGVGdW5jdGlvbihlLnRhcmdldC52YWx1ZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/utils/inputValueUpdaterReact.ts\n");

/***/ }),

/***/ "./lib/utils/useDebounceUpdateRedux.ts":
/*!*********************************************!*\
  !*** ./lib/utils/useDebounceUpdateRedux.ts ***!
  \*********************************************/
/*! exports provided: useDebounceUpdateRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDebounceUpdateRedux\", function() { return useDebounceUpdateRedux; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ \"./lib/utils/debounce.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wrapDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapDispatch */ \"./lib/utils/wrapDispatch.ts\");\n/* harmony import */ var _inputValueUpdaterReact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputValueUpdaterReact */ \"./lib/utils/inputValueUpdaterReact.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useDebounceUpdateRedux = function useDebounceUpdateRedux(selector, updateAC) {\n  _s();\n\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n    eTargetValueAdjustment: false\n  };\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useDispatch\"])();\n  var location = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"])(selector);\n  /**\n   * Immediate basic update function\n   */\n\n  var _updateReduxValue = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(Object(_wrapDispatch__WEBPACK_IMPORTED_MODULE_3__[\"wrapDispatch\"])(dispatch, updateAC), [dispatch]);\n  /**\n   * Debounced update function\n   */\n\n\n  var updateReduxValue = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(Object(_debounce__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(_updateReduxValue, 500), [_updateReduxValue]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(location),\n      localValue = _useState[0],\n      _updateLocalValue = _useState[1];\n\n  var updateLocalValue = function updateLocalValue(newVal) {\n    _updateLocalValue(newVal);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    return updateReduxValue(localValue);\n  }, [localValue]);\n\n  if (options.eTargetValueAdjustment) {\n    return [localValue, Object(_inputValueUpdaterReact__WEBPACK_IMPORTED_MODULE_4__[\"inputValueUpdaterReact\"])(updateLocalValue)];\n  } else {\n    return [localValue, updateLocalValue];\n  }\n};\n\n_s(useDebounceUpdateRedux, \"H9mJSZH5C63EGAgZiPW6B3ocRrk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL3VzZURlYm91bmNlVXBkYXRlUmVkdXgudHM/ZTgzYyJdLCJuYW1lcyI6WyJ1c2VEZWJvdW5jZVVwZGF0ZVJlZHV4Iiwic2VsZWN0b3IiLCJ1cGRhdGVBQyIsIm9wdGlvbnMiLCJlVGFyZ2V0VmFsdWVBZGp1c3RtZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxvY2F0aW9uIiwidXNlU2VsZWN0b3IiLCJfdXBkYXRlUmVkdXhWYWx1ZSIsInVzZUNhbGxiYWNrIiwid3JhcERpc3BhdGNoIiwidXBkYXRlUmVkdXhWYWx1ZSIsImRlYm91bmNlIiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwiX3VwZGF0ZUxvY2FsVmFsdWUiLCJ1cGRhdGVMb2NhbFZhbHVlIiwibmV3VmFsIiwidXNlRWZmZWN0IiwiaW5wdXRWYWx1ZVVwZGF0ZXJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFZTyxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQ3BDQyxRQURvQyxFQUVwQ0MsUUFGb0MsRUFNakM7QUFBQTs7QUFBQSxNQUhIQyxPQUdHLHVFQUg0QztBQUM3Q0MsMEJBQXNCLEVBQUU7QUFEcUIsR0FHNUM7QUFDSCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDUCxRQUFELENBQTVCO0FBQ0E7Ozs7QUFHQSxNQUFNUSxpQkFBaUIsR0FBR0MseURBQVcsQ0FBQ0Msa0VBQVksQ0FBQ04sUUFBRCxFQUFXSCxRQUFYLENBQWIsRUFBbUMsQ0FDdEVHLFFBRHNFLENBQW5DLENBQXJDO0FBR0E7Ozs7O0FBR0EsTUFBTU8sZ0JBQXFCLEdBQUdGLHlEQUFXLENBQUNHLDBEQUFRLENBQUNKLGlCQUFELEVBQW9CLEdBQXBCLENBQVQsRUFBbUMsQ0FDMUVBLGlCQUQwRSxDQUFuQyxDQUF6Qzs7QUFaRyxrQkFlcUNLLHNEQUFRLENBQUNQLFFBQUQsQ0FmN0M7QUFBQSxNQWVJUSxVQWZKO0FBQUEsTUFlZ0JDLGlCQWZoQjs7QUFnQkgsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxNQUFELEVBQVk7QUFDbkNGLHFCQUFpQixDQUFDRSxNQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFHQUMseURBQVMsQ0FBQztBQUFBLFdBQU1QLGdCQUFnQixDQUFDRyxVQUFELENBQXRCO0FBQUEsR0FBRCxFQUFxQyxDQUFDQSxVQUFELENBQXJDLENBQVQ7O0FBQ0EsTUFBSVosT0FBTyxDQUFDQyxzQkFBWixFQUFvQztBQUNsQyxXQUFPLENBQUNXLFVBQUQsRUFBYUssc0ZBQXNCLENBQUNILGdCQUFELENBQW5DLENBQVA7QUFJRCxHQUxELE1BS087QUFDTCxXQUFPLENBQUNGLFVBQUQsRUFBYUUsZ0JBQWIsQ0FBUDtBQUNEO0FBQ0YsQ0FsQ007O0dBQU1qQixzQjtVQU9NTSx1RCxFQUNBRSx1RCIsImZpbGUiOiIuL2xpYi91dGlscy91c2VEZWJvdW5jZVVwZGF0ZVJlZHV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU21hcnRRdW90ZXJTdGF0ZSB9IGZyb20gJy4uL3Jvb3QtcmVkdWNlcic7XG5pbXBvcnQgeyB3cmFwRGlzcGF0Y2ggfSBmcm9tICcuL3dyYXBEaXNwYXRjaCc7XG5pbXBvcnQgeyBpbnB1dFZhbHVlVXBkYXRlclJlYWN0IH0gZnJvbSAnLi9pbnB1dFZhbHVlVXBkYXRlclJlYWN0JztcblxuaW50ZXJmYWNlIERlYm91bmNlVXBkYXRlUmVkdXhPcHRpb25zIHtcbiAgLyoqXG4gICAqIFJldHVybiBtZXRob2QgdGhhdCB1c2VzIGUgPT4gZS50YXJnZXQudmFsdWVcbiAgICogaW5zdGVhZCBvZiBub3JtYWwgdmFsdWUgPT4gdmFsdWVcbiAgICpcbiAgICogdXNlZnVsIGZvciBuYXRpdmUgcmVhY3QgaW5wdXRzXG4gICAqL1xuICBlVGFyZ2V0VmFsdWVBZGp1c3RtZW50OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgdXNlRGVib3VuY2VVcGRhdGVSZWR1eCA9IDxUPihcbiAgc2VsZWN0b3I6IChzdGF0ZTogU21hcnRRdW90ZXJTdGF0ZSkgPT4gVCxcbiAgdXBkYXRlQUM6IChuZXdWYWx1ZTogVCkgPT4gYW55LFxuICBvcHRpb25zOiBQYXJ0aWFsPERlYm91bmNlVXBkYXRlUmVkdXhPcHRpb25zPiA9IHtcbiAgICBlVGFyZ2V0VmFsdWVBZGp1c3RtZW50OiBmYWxzZSxcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VTZWxlY3RvcihzZWxlY3Rvcik7XG4gIC8qKlxuICAgKiBJbW1lZGlhdGUgYmFzaWMgdXBkYXRlIGZ1bmN0aW9uXG4gICAqL1xuICBjb25zdCBfdXBkYXRlUmVkdXhWYWx1ZSA9IHVzZUNhbGxiYWNrKHdyYXBEaXNwYXRjaChkaXNwYXRjaCwgdXBkYXRlQUMpLCBbXG4gICAgZGlzcGF0Y2gsXG4gIF0pO1xuICAvKipcbiAgICogRGVib3VuY2VkIHVwZGF0ZSBmdW5jdGlvblxuICAgKi9cbiAgY29uc3QgdXBkYXRlUmVkdXhWYWx1ZTogYW55ID0gdXNlQ2FsbGJhY2soZGVib3VuY2UoX3VwZGF0ZVJlZHV4VmFsdWUsIDUwMCksIFtcbiAgICBfdXBkYXRlUmVkdXhWYWx1ZSxcbiAgXSk7XG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBfdXBkYXRlTG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZShsb2NhdGlvbik7XG4gIGNvbnN0IHVwZGF0ZUxvY2FsVmFsdWUgPSAobmV3VmFsKSA9PiB7XG4gICAgX3VwZGF0ZUxvY2FsVmFsdWUobmV3VmFsKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHVwZGF0ZVJlZHV4VmFsdWUobG9jYWxWYWx1ZSksIFtsb2NhbFZhbHVlXSk7XG4gIGlmIChvcHRpb25zLmVUYXJnZXRWYWx1ZUFkanVzdG1lbnQpIHtcbiAgICByZXR1cm4gW2xvY2FsVmFsdWUsIGlucHV0VmFsdWVVcGRhdGVyUmVhY3QodXBkYXRlTG9jYWxWYWx1ZSldIGFzIFtcbiAgICAgIFQsXG4gICAgICAoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFQgfSB9KSA9PiB2b2lkXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2xvY2FsVmFsdWUsIHVwZGF0ZUxvY2FsVmFsdWVdIGFzIFtULCAobmV3VmFsdWU6IFQpID0+IHZvaWRdO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utils/useDebounceUpdateRedux.ts\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/SliderNumberInput.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/quote/location/map.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/quote/layout-and-information.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/quote/layout.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/quote/layout.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"div.layout_formGrid__2RJwx {\\n  flex: 1 1 400px;\\n}\\n\\ndiv.layout_mapContainer__3KkH8 {\\n  flex: 1 1 400px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/layout.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAA;AACF;;AAEA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACF\",\"file\":\"layout.module.scss\",\"sourcesContent\":[\"div.formGrid {\\n  flex: 1 1 400px;\\n}\\n\\ndiv.mapContainer {\\n  flex: 1 1 400px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"formGrid\": \"layout_formGrid__2RJwx\",\n\t\"mapContainer\": \"layout_mapContainer__3KkH8\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvbGF5b3V0Lm1vZHVsZS5zY3NzPzY4ODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUywrQkFBK0Isb0JBQW9CLEdBQUcsb0NBQW9DLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLE9BQU8sK0hBQStILFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsbUVBQW1FLG9CQUFvQixHQUFHLHNCQUFzQixvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxLQUFLO0FBQ3JtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3BhZ2VzL3F1b3RlL2xheW91dC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5sYXlvdXRfZm9ybUdyaWRfXzJSSnd4IHtcXG4gIGZsZXg6IDEgMSA0MDBweDtcXG59XFxuXFxuZGl2LmxheW91dF9tYXBDb250YWluZXJfXzNLa0g4IHtcXG4gIGZsZXg6IDEgMSA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qaC9naXQva29kZXdvcmtzLWlpb3Qvc21hcnQtcXVvdGVyL3BhZ2VzL3F1b3RlL2xheW91dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGXCIsXCJmaWxlXCI6XCJsYXlvdXQubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LmZvcm1HcmlkIHtcXG4gIGZsZXg6IDEgMSA0MDBweDtcXG59XFxuXFxuZGl2Lm1hcENvbnRhaW5lciB7XFxuICBmbGV4OiAxIDEgNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJmb3JtR3JpZFwiOiBcImxheW91dF9mb3JtR3JpZF9fMlJKd3hcIixcblx0XCJtYXBDb250YWluZXJcIjogXCJsYXlvdXRfbWFwQ29udGFpbmVyX18zS2tIOFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/quote/layout.module.scss\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/page-utils.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/page-utils.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"/**\\n * Utils to be used in other scss files\\n */\\n\\n.page-utils_leftGap__2L9WF {\\n  margin-left: 6px;\\n}\\n\\na.page-utils_link__1HWsO {\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n\\n.page-utils_horizontalFlexContainer__1xkFU {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n.page-utils_horizontalFlexContainer__1xkFU > :not(:first-child) {\\n  margin-left: 6px;\\n}\\n\\np.page-utils_error__1aTTJ {\\n  color: #B0004A;\\n}\\n\\n.page-utils_textLg__ybiYk {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/jh/git/kodeworks-iiot/smart-quoter/styles/_utils.scss\",\"/Users/jh/git/kodeworks-iiot/smart-quoter/styles/page-utils.module.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAAA;;ACEA;EACE,gBAAA;AAEF;;AACA;EACE,0BAAA;EACA,eAAA;AAEF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;AAEF;;AADE;EACE,gBAAA;AAGJ;;AACA;EACE,cDjBU;ACmBZ;;AACA;EACE,mBAAA;EACA,oBAAA;AAEF\",\"file\":\"page-utils.module.scss\",\"sourcesContent\":[\"/**\\n * Utils to be used in other scss files\\n */\\n\\n$redBright: #B0004A;\\n$primary50: #fff7c6; // background and text on dark background\\n$primary100: #fff1a3; // background and text on dark background\\n$primary200: #ffe775; // DEFAULT background and text on dark background\\n$primaryMain: #ffe775;\\n$primaryContrastText: #101010;\\n$primary300: #ffd46f;\\n$primary400: #ffc269;\\n$primary500: #ffaf63;\\n$primary600: #ff9c5d;\\n$primary700: #ff8a57;\\n$primary800: #ff7751;\\n$primary900: #FF624;\\n\\n$black50: #F5F5F5;\\n$black100: #EDEDED;\\n$black200: #E1E1E1;\\n$black300: #CECECE;\\n$black400: #B8B8B8;\\n$black500: #929292;\\n$black600: #737373;\\n$black700: #595959;\\n$black800: #3C3C3C;\\n$black900: #101010; // DEFAULT\\n$blackMain: #101010;\\n$blackLight: #F5F5F;\\n\\n$blue50: #EBEFFF; // background and text on dark background\\n$blue100: #E1E7FA; // background and text on dark background\\n$blue200: #CBD3F0; // background and text on dark background, DEFAULT LIGHT\\n$blue300: #B4BCE8;\\n$blue400: #979FD9;\\n$blue500: #737CC7;\\n$blue600: #5A62BA; // DEFAULT DARKER\\n$blue700: #4B5494; // text\\n$blue800: #3D446B; // text\\n$blue900: #2F354F; // text DEFAULT DARKEST\\n$blueMain: #2F354F;\\n$blueContrastText: #F5F5F5;\\n$blueDark: #2F354F;\\n$blueLight: #CBD3F0;\\n\",\"@import \\\"utils\\\";\\n\\n.leftGap {\\n  margin-left: 6px;\\n}\\n\\na.link {\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n\\n.horizontalFlexContainer {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  > :not(:first-child) {\\n    margin-left: 6px;\\n  }\\n}\\n\\np.error {\\n  color: $redBright;\\n}\\n\\n.textLg {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"leftGap\": \"page-utils_leftGap__2L9WF\",\n\t\"link\": \"page-utils_link__1HWsO\",\n\t\"horizontalFlexContainer\": \"page-utils_horizontalFlexContainer__1xkFU\",\n\t\"error\": \"page-utils_error__1aTTJ\",\n\t\"textLg\": \"page-utils_textLg__ybiYk\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3BhZ2UtdXRpbHMubW9kdWxlLnNjc3M/OGRkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG9GQUFvRixxQkFBcUIsR0FBRyw4QkFBOEIsK0JBQStCLG9CQUFvQixHQUFHLGdEQUFnRCxrQkFBa0Isd0JBQXdCLHdCQUF3QixHQUFHLHFFQUFxRSxxQkFBcUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsK0JBQStCLHdCQUF3Qix5QkFBeUIsR0FBRyxPQUFPLDhMQUE4TCxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLGtJQUFrSSxzQkFBc0IsaUVBQWlFLGlFQUFpRSwwRUFBMEUsZ0NBQWdDLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHNCQUFzQixzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsaUNBQWlDLHNCQUFzQixxQkFBcUIsOERBQThELDhEQUE4RCw2RUFBNkUsb0JBQW9CLG9CQUFvQixvQkFBb0Isc0NBQXNDLDRCQUE0Qiw0QkFBNEIsNkNBQTZDLDZCQUE2QixxQkFBcUIsc0JBQXNCLHVCQUF1QixjQUFjLHFCQUFxQixHQUFHLFlBQVksK0JBQStCLG9CQUFvQixHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLEtBQUssR0FBRyxhQUFhLHNCQUFzQixHQUFHLGFBQWEsd0JBQXdCLHlCQUF5QixHQUFHLEtBQUs7QUFDcGtGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL3BhZ2UtdXRpbHMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBVdGlscyB0byBiZSB1c2VkIGluIG90aGVyIHNjc3MgZmlsZXNcXG4gKi9cXG5cXG4ucGFnZS11dGlsc19sZWZ0R2FwX18yTDlXRiB7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG5hLnBhZ2UtdXRpbHNfbGlua19fMUhXc08ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlLXV0aWxzX2hvcml6b250YWxGbGV4Q29udGFpbmVyX18xeGtGVSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlLXV0aWxzX2hvcml6b250YWxGbGV4Q29udGFpbmVyX18xeGtGVSA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG5wLnBhZ2UtdXRpbHNfZXJyb3JfXzFhVFRKIHtcXG4gIGNvbG9yOiAjQjAwMDRBO1xcbn1cXG5cXG4ucGFnZS11dGlsc190ZXh0TGdfX3liaVlrIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2poL2dpdC9rb2Rld29ya3MtaWlvdC9zbWFydC1xdW90ZXIvc3R5bGVzL191dGlscy5zY3NzXCIsXCIvVXNlcnMvamgvZ2l0L2tvZGV3b3Jrcy1paW90L3NtYXJ0LXF1b3Rlci9zdHlsZXMvcGFnZS11dGlscy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFBQTs7QUNFQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBREU7RUFDRSxnQkFBQTtBQUdKOztBQUNBO0VBQ0UsY0RqQlU7QUNtQlo7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBRUZcIixcImZpbGVcIjpcInBhZ2UtdXRpbHMubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogVXRpbHMgdG8gYmUgdXNlZCBpbiBvdGhlciBzY3NzIGZpbGVzXFxuICovXFxuXFxuJHJlZEJyaWdodDogI0IwMDA0QTtcXG4kcHJpbWFyeTUwOiAjZmZmN2M2OyAvLyBiYWNrZ3JvdW5kIGFuZCB0ZXh0IG9uIGRhcmsgYmFja2dyb3VuZFxcbiRwcmltYXJ5MTAwOiAjZmZmMWEzOyAvLyBiYWNrZ3JvdW5kIGFuZCB0ZXh0IG9uIGRhcmsgYmFja2dyb3VuZFxcbiRwcmltYXJ5MjAwOiAjZmZlNzc1OyAvLyBERUZBVUxUIGJhY2tncm91bmQgYW5kIHRleHQgb24gZGFyayBiYWNrZ3JvdW5kXFxuJHByaW1hcnlNYWluOiAjZmZlNzc1O1xcbiRwcmltYXJ5Q29udHJhc3RUZXh0OiAjMTAxMDEwO1xcbiRwcmltYXJ5MzAwOiAjZmZkNDZmO1xcbiRwcmltYXJ5NDAwOiAjZmZjMjY5O1xcbiRwcmltYXJ5NTAwOiAjZmZhZjYzO1xcbiRwcmltYXJ5NjAwOiAjZmY5YzVkO1xcbiRwcmltYXJ5NzAwOiAjZmY4YTU3O1xcbiRwcmltYXJ5ODAwOiAjZmY3NzUxO1xcbiRwcmltYXJ5OTAwOiAjRkY2MjQ7XFxuXFxuJGJsYWNrNTA6ICNGNUY1RjU7XFxuJGJsYWNrMTAwOiAjRURFREVEO1xcbiRibGFjazIwMDogI0UxRTFFMTtcXG4kYmxhY2szMDA6ICNDRUNFQ0U7XFxuJGJsYWNrNDAwOiAjQjhCOEI4O1xcbiRibGFjazUwMDogIzkyOTI5MjtcXG4kYmxhY2s2MDA6ICM3MzczNzM7XFxuJGJsYWNrNzAwOiAjNTk1OTU5O1xcbiRibGFjazgwMDogIzNDM0MzQztcXG4kYmxhY2s5MDA6ICMxMDEwMTA7IC8vIERFRkFVTFRcXG4kYmxhY2tNYWluOiAjMTAxMDEwO1xcbiRibGFja0xpZ2h0OiAjRjVGNUY7XFxuXFxuJGJsdWU1MDogI0VCRUZGRjsgLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBvbiBkYXJrIGJhY2tncm91bmRcXG4kYmx1ZTEwMDogI0UxRTdGQTsgLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBvbiBkYXJrIGJhY2tncm91bmRcXG4kYmx1ZTIwMDogI0NCRDNGMDsgLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBvbiBkYXJrIGJhY2tncm91bmQsIERFRkFVTFQgTElHSFRcXG4kYmx1ZTMwMDogI0I0QkNFODtcXG4kYmx1ZTQwMDogIzk3OUZEOTtcXG4kYmx1ZTUwMDogIzczN0NDNztcXG4kYmx1ZTYwMDogIzVBNjJCQTsgLy8gREVGQVVMVCBEQVJLRVJcXG4kYmx1ZTcwMDogIzRCNTQ5NDsgLy8gdGV4dFxcbiRibHVlODAwOiAjM0Q0NDZCOyAvLyB0ZXh0XFxuJGJsdWU5MDA6ICMyRjM1NEY7IC8vIHRleHQgREVGQVVMVCBEQVJLRVNUXFxuJGJsdWVNYWluOiAjMkYzNTRGO1xcbiRibHVlQ29udHJhc3RUZXh0OiAjRjVGNUY1O1xcbiRibHVlRGFyazogIzJGMzU0RjtcXG4kYmx1ZUxpZ2h0OiAjQ0JEM0YwO1xcblwiLFwiQGltcG9ydCBcXFwidXRpbHNcXFwiO1xcblxcbi5sZWZ0R2FwIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbmEubGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvcml6b250YWxGbGV4Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gIH1cXG59XFxuXFxucC5lcnJvciB7XFxuICBjb2xvcjogJHJlZEJyaWdodDtcXG59XFxuXFxuLnRleHRMZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImxlZnRHYXBcIjogXCJwYWdlLXV0aWxzX2xlZnRHYXBfXzJMOVdGXCIsXG5cdFwibGlua1wiOiBcInBhZ2UtdXRpbHNfbGlua19fMUhXc09cIixcblx0XCJob3Jpem9udGFsRmxleENvbnRhaW5lclwiOiBcInBhZ2UtdXRpbHNfaG9yaXpvbnRhbEZsZXhDb250YWluZXJfXzF4a0ZVXCIsXG5cdFwiZXJyb3JcIjogXCJwYWdlLXV0aWxzX2Vycm9yX18xYVRUSlwiLFxuXHRcInRleHRMZ1wiOiBcInBhZ2UtdXRpbHNfdGV4dExnX195YmlZa1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/page-utils.module.scss\n");

/***/ }),

/***/ "./node_modules/dom-align/dist-web/index.js":
false,

/***/ "./node_modules/geolib/es/computeDestinationPoint.js":
false,

/***/ "./node_modules/geolib/es/constants.js":
false,

/***/ "./node_modules/geolib/es/convertArea.js":
false,

/***/ "./node_modules/geolib/es/convertDistance.js":
false,

/***/ "./node_modules/geolib/es/convertSpeed.js":
false,

/***/ "./node_modules/geolib/es/decimalToSexagesimal.js":
false,

/***/ "./node_modules/geolib/es/findNearest.js":
false,

/***/ "./node_modules/geolib/es/getAreaOfPolygon.js":
false,

/***/ "./node_modules/geolib/es/getBounds.js":
false,

/***/ "./node_modules/geolib/es/getBoundsOfDistance.js":
false,

/***/ "./node_modules/geolib/es/getCenter.js":
false,

/***/ "./node_modules/geolib/es/getCenterOfBounds.js":
false,

/***/ "./node_modules/geolib/es/getCompassDirection.js":
false,

/***/ "./node_modules/geolib/es/getCoordinateKey.js":
false,

/***/ "./node_modules/geolib/es/getCoordinateKeys.js":
false,

/***/ "./node_modules/geolib/es/getDistance.js":
false,

/***/ "./node_modules/geolib/es/getDistanceFromLine.js":
false,

/***/ "./node_modules/geolib/es/getGreatCircleBearing.js":
false,

/***/ "./node_modules/geolib/es/getLatitude.js":
false,

/***/ "./node_modules/geolib/es/getLongitude.js":
false,

/***/ "./node_modules/geolib/es/getPathLength.js":
false,

/***/ "./node_modules/geolib/es/getPreciseDistance.js":
false,

/***/ "./node_modules/geolib/es/getRhumbLineBearing.js":
false,

/***/ "./node_modules/geolib/es/getRoughCompassDirection.js":
false,

/***/ "./node_modules/geolib/es/getSpeed.js":
false,

/***/ "./node_modules/geolib/es/index.js":
false,

/***/ "./node_modules/geolib/es/isDecimal.js":
false,

/***/ "./node_modules/geolib/es/isPointInLine.js":
false,

/***/ "./node_modules/geolib/es/isPointInPolygon.js":
false,

/***/ "./node_modules/geolib/es/isPointNearLine.js":
false,

/***/ "./node_modules/geolib/es/isPointWithinRadius.js":
false,

/***/ "./node_modules/geolib/es/isSexagesimal.js":
false,

/***/ "./node_modules/geolib/es/isValidCoordinate.js":
false,

/***/ "./node_modules/geolib/es/isValidLatitude.js":
false,

/***/ "./node_modules/geolib/es/isValidLongitude.js":
false,

/***/ "./node_modules/geolib/es/orderByDistance.js":
false,

/***/ "./node_modules/geolib/es/robustAcos.js":
false,

/***/ "./node_modules/geolib/es/sexagesimalToDecimal.js":
false,

/***/ "./node_modules/geolib/es/toDecimal.js":
false,

/***/ "./node_modules/geolib/es/toDeg.js":
false,

/***/ "./node_modules/geolib/es/toRad.js":
false,

/***/ "./node_modules/geolib/es/wktToPolygon.js":
false,

/***/ "./node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/raf/index.js":
false,

/***/ "./node_modules/rc-align/es/Align.js":
false,

/***/ "./node_modules/rc-align/es/hooks/useBuffer.js":
false,

/***/ "./node_modules/rc-align/es/index.js":
false,

/***/ "./node_modules/rc-align/es/util.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/rc-align/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/rc-motion/es/CSSMotion.js":
false,

/***/ "./node_modules/rc-motion/es/CSSMotionList.js":
false,

/***/ "./node_modules/rc-motion/es/index.js":
false,

/***/ "./node_modules/rc-motion/es/interface.js":
false,

/***/ "./node_modules/rc-motion/es/util/diff.js":
false,

/***/ "./node_modules/rc-motion/es/util/motion.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/createSuper.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/rc-motion/node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/rc-slider/es/Handle.js":
false,

/***/ "./node_modules/rc-slider/es/Range.js":
false,

/***/ "./node_modules/rc-slider/es/Slider.js":
false,

/***/ "./node_modules/rc-slider/es/common/Marks.js":
false,

/***/ "./node_modules/rc-slider/es/common/Steps.js":
false,

/***/ "./node_modules/rc-slider/es/common/Track.js":
false,

/***/ "./node_modules/rc-slider/es/common/createSlider.js":
false,

/***/ "./node_modules/rc-slider/es/createSliderWithTooltip.js":
false,

/***/ "./node_modules/rc-slider/es/index.js":
false,

/***/ "./node_modules/rc-slider/es/utils.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/get.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/superPropBase.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/rc-slider/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/rc-tooltip/es/Content.js":
false,

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
false,

/***/ "./node_modules/rc-tooltip/es/index.js":
false,

/***/ "./node_modules/rc-tooltip/es/placements.js":
false,

/***/ "./node_modules/rc-trigger/es/Popup.js":
false,

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
false,

/***/ "./node_modules/rc-trigger/es/context.js":
false,

/***/ "./node_modules/rc-trigger/es/index.js":
false,

/***/ "./node_modules/rc-trigger/es/utils/alignUtil.js":
false,

/***/ "./node_modules/rc-trigger/es/utils/legacyUtil.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/createSuper.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/rc-trigger/node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
false,

/***/ "./node_modules/rc-util/es/Dom/contains.js":
false,

/***/ "./node_modules/rc-util/es/Dom/findDOMNode.js":
false,

/***/ "./node_modules/rc-util/es/KeyCode.js":
false,

/***/ "./node_modules/rc-util/es/Portal.js":
false,

/***/ "./node_modules/rc-util/es/ref.js":
false,

/***/ "./node_modules/rc-util/es/warning.js":
false,

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./pages/quote/layout-and-information.module.scss":
false,

/***/ "./pages/quote/layout-and-information.tsx":
/*!************************************************!*\
  !*** ./pages/quote/layout-and-information.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quote/quote-page-heading */ \"./components/quote/quote-page-heading.tsx\");\n/* harmony import */ var _components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/quote/quote-mini-navlinks */ \"./components/quote/quote-mini-navlinks.tsx\");\n/* harmony import */ var _components_quote_current_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/quote/current-location */ \"./components/quote/current-location.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/utils/useAction */ \"./lib/utils/useAction.ts\");\n/* harmony import */ var _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/quote/layout-reducer */ \"./lib/quote/layout-reducer.ts\");\n/* harmony import */ var _lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils/useDebounceUpdateRedux */ \"./lib/utils/useDebounceUpdateRedux.ts\");\n/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout.module.scss */ \"./pages/quote/layout.module.scss\");\n/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n/* harmony import */ var _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/page-utils.module.scss */ \"./styles/page-utils.module.scss\");\n/* harmony import */ var _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/quote/quote-general-reducer */ \"./lib/quote/quote-general-reducer.ts\");\n/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../lib/routes */ \"./lib/routes.ts\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_Icons_right_arrow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Icons/right-arrow */ \"./components/Icons/right-arrow.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jh/git/kodeworks-iiot/smart-quoter/pages/quote/layout-and-information.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LayoutAndInformation = function LayoutAndInformation() {\n  _s();\n\n  var _errors$length, _errors$length2;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__[\"useRouter\"])();\n  var setLayoutStageComplete = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"])(_lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].setStageComplete);\n  var updateQuoteStage = Object(_lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"])(_lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_15__[\"quoteGeneralActions\"].updateStage);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setLayoutStageComplete();\n    updateQuoteStage(_lib_quote_quote_general_reducer__WEBPACK_IMPORTED_MODULE_15__[\"QuoteStage\"].CONTACT_INFORMATION);\n    router.push(_lib_routes__WEBPACK_IMPORTED_MODULE_16__[\"smartQuoterRoutes\"].contactInformation.route);\n  }, []);\n\n  var _useDebounceUpdateRed = Object(_lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"])(function (state) {\n    return state.quote.layout.selectedArea;\n  }, _lib_quote_layout_reducer__WEBPACK_IMPORTED_MODULE_8__[\"quoteLayoutActions\"].updateSelectedArea, {\n    eTargetValueAdjustment: true\n  }),\n      _useDebounceUpdateRed2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDebounceUpdateRed, 2),\n      selectedArea = _useDebounceUpdateRed2[0],\n      updateSelectedArea = _useDebounceUpdateRed2[1];\n\n  var peakProduction = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useSelector\"])(function (state) {\n    return state.quote.layout.peakProduction;\n  });\n  var installationSize = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useSelector\"])(function (state) {\n    return state.quote.layout.installationSize;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"Smart Quoter - Layout\")), __jsx(_components_quote_quote_page_heading__WEBPACK_IMPORTED_MODULE_3__[\"QuotePageHeading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_quote_mini_navlinks__WEBPACK_IMPORTED_MODULE_4__[\"QuoteMiniNavlinks\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), __jsx(_components_quote_current_location__WEBPACK_IMPORTED_MODULE_5__[\"CurrentLocation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"p-4 rounded shadow-lg sm:grid sm:grid-cols-2 sm:gap-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col sm:col-span-1 align-center \".concat(_layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.formGrid),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: 'length',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Side length of square area\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    type: 'text',\n    name: 'length',\n    id: 'length',\n    ref: register({\n      required: true,\n      validate: ramda__WEBPACK_IMPORTED_MODULE_12__[\"complement\"](isNaN)\n    }),\n    defaultValue: selectedArea,\n    onChange: updateSelectedArea,\n    className: \"text-input-field\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }), ((_errors$length = errors.length) === null || _errors$length === void 0 ? void 0 : _errors$length.type) === 'required' && __jsx(\"p\", {\n    className: _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, \"This input is required\"), ((_errors$length2 = errors.length) === null || _errors$length2 === void 0 ? void 0 : _errors$length2.type) === 'validate' && __jsx(\"p\", {\n    className: _styles_page_utils_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"Length must be a number\")), __jsx(\"label\", {\n    htmlFor: 'peakProduction',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Peak production (KWp)\"), __jsx(\"input\", {\n    type: 'text',\n    id: 'peakProduction',\n    disabled: true,\n    value: peakProduction !== null && peakProduction !== void 0 ? peakProduction : '-',\n    className: \"text-input-field\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: 'installationSize',\n    className: \"my-2 text-lg leading-tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, \"Installation size (number floats)\"), __jsx(\"input\", {\n    type: 'text',\n    id: 'installationSize',\n    disabled: true,\n    value: installationSize !== null && installationSize !== void 0 ? installationSize : '-',\n    className: \"text-input-field\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"sm:col-span-1 \".concat(_layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.mapContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, '<map>')), __jsx(\"div\", {\n    className: \"flex items-center justify-center mt-4 sm:col-span-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    type: \"submit\",\n    label: \"Continue\",\n    className: \"flex flex-no-wrap items-center px-6 shadow-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Icons_right_arrow__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n    className: \"inline w-5 ml-4 fill-current\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(LayoutAndInformation, \"jHsFFEn1VNPsFNvYStu3rXBitHc=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"], next_router__WEBPACK_IMPORTED_MODULE_14__[\"useRouter\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"], _lib_utils_useAction__WEBPACK_IMPORTED_MODULE_7__[\"useAction\"], _lib_utils_useDebounceUpdateRedux__WEBPACK_IMPORTED_MODULE_9__[\"useDebounceUpdateRedux\"], react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useSelector\"]];\n});\n\n_c = LayoutAndInformation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutAndInformation);\n\nvar _c;\n\n$RefreshReg$(_c, \"LayoutAndInformation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvbGF5b3V0LWFuZC1pbmZvcm1hdGlvbi50c3g/MTBlYyJdLCJuYW1lcyI6WyJMYXlvdXRBbmRJbmZvcm1hdGlvbiIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInJvdXRlciIsInVzZVJvdXRlciIsInNldExheW91dFN0YWdlQ29tcGxldGUiLCJ1c2VBY3Rpb24iLCJxdW90ZUxheW91dEFjdGlvbnMiLCJzZXRTdGFnZUNvbXBsZXRlIiwidXBkYXRlUXVvdGVTdGFnZSIsInF1b3RlR2VuZXJhbEFjdGlvbnMiLCJ1cGRhdGVTdGFnZSIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJRdW90ZVN0YWdlIiwiQ09OVEFDVF9JTkZPUk1BVElPTiIsInB1c2giLCJzbWFydFF1b3RlclJvdXRlcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsInJvdXRlIiwidXNlRGVib3VuY2VVcGRhdGVSZWR1eCIsInN0YXRlIiwicXVvdGUiLCJsYXlvdXQiLCJzZWxlY3RlZEFyZWEiLCJ1cGRhdGVTZWxlY3RlZEFyZWEiLCJlVGFyZ2V0VmFsdWVBZGp1c3RtZW50IiwicGVha1Byb2R1Y3Rpb24iLCJ1c2VTZWxlY3RvciIsImluc3RhbGxhdGlvblNpemUiLCJzdHlsZXMiLCJmb3JtR3JpZCIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJSIiwiaXNOYU4iLCJsZW5ndGgiLCJ0eXBlIiwidXRpbFN0eWxlcyIsImVycm9yIiwibWFwQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUE4QixHQUFHLFNBQWpDQSxvQkFBaUMsR0FBTTtBQUFBOztBQUFBOztBQUFBLGlCQUNBQywrREFBTyxFQURQO0FBQUEsTUFDbkNDLFFBRG1DLFlBQ25DQSxRQURtQztBQUFBLE1BQ3pCQyxZQUR5QixZQUN6QkEsWUFEeUI7QUFBQSxNQUNYQyxNQURXLFlBQ1hBLE1BRFc7O0FBRTNDLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBR0Msc0VBQVMsQ0FBQ0MsNEVBQWtCLENBQUNDLGdCQUFwQixDQUF4QztBQUNBLE1BQU1DLGdCQUFnQixHQUFHSCxzRUFBUyxDQUFDSSxxRkFBbUIsQ0FBQ0MsV0FBckIsQ0FBbEM7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNqQ1IsMEJBQXNCO0FBQ3RCSSxvQkFBZ0IsQ0FBQ0ssNEVBQVUsQ0FBQ0MsbUJBQVosQ0FBaEI7QUFDQVosVUFBTSxDQUFDYSxJQUFQLENBQVlDLDhEQUFpQixDQUFDQyxrQkFBbEIsQ0FBcUNDLEtBQWpEO0FBQ0QsR0FKMkIsRUFJekIsRUFKeUIsQ0FBNUI7O0FBTjJDLDhCQVlBQyxnR0FBc0IsQ0FDL0QsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxZQUE5QjtBQUFBLEdBRCtELEVBRS9EakIsNEVBQWtCLENBQUNrQixrQkFGNEMsRUFHL0Q7QUFBRUMsMEJBQXNCLEVBQUU7QUFBMUIsR0FIK0QsQ0FadEI7QUFBQTtBQUFBLE1BWXBDRixZQVpvQztBQUFBLE1BWXRCQyxrQkFac0I7O0FBaUIzQyxNQUFNRSxjQUFjLEdBQUdDLGdFQUFXLENBQ2hDLFVBQUNQLEtBQUQ7QUFBQSxXQUE2QkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJJLGNBQWhEO0FBQUEsR0FEZ0MsQ0FBbEM7QUFHQSxNQUFNRSxnQkFBZ0IsR0FBR0QsZ0VBQVcsQ0FDbEMsVUFBQ1AsS0FBRDtBQUFBLFdBQTZCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQk0sZ0JBQWhEO0FBQUEsR0FEa0MsQ0FBcEM7QUFJQSxTQUNFLDREQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FERixFQUlFLE1BQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyx1RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sWUFBUSxFQUFFNUIsWUFBWSxDQUFDVyxRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLHFEQUE4Q2tCLDJEQUFNLENBQUNDLFFBQXJELENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQU8sV0FBTyxFQUFFLFFBQWhCO0FBQTBCLGFBQVMsRUFBQyw0QkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBRSxNQURSO0FBRUUsUUFBSSxFQUFFLFFBRlI7QUFHRSxNQUFFLEVBQUUsUUFITjtBQUlFLE9BQUcsRUFBRS9CLFFBQVEsQ0FBQztBQUNaZ0MsY0FBUSxFQUFFLElBREU7QUFFWkMsY0FBUSxFQUFFQyxpREFBQSxDQUFhQyxLQUFiO0FBRkUsS0FBRCxDQUpmO0FBUUUsZ0JBQVksRUFBRVgsWUFSaEI7QUFTRSxZQUFRLEVBQUVDLGtCQVRaO0FBVUUsYUFBUyxFQUFDLGtCQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWFHLG1CQUFBdkIsTUFBTSxDQUFDa0MsTUFBUCxrRUFBZUMsSUFBZixNQUF3QixVQUF4QixJQUNDO0FBQUcsYUFBUyxFQUFFQyxzRUFBVSxDQUFDQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWRKLEVBZ0JHLG9CQUFBckMsTUFBTSxDQUFDa0MsTUFBUCxvRUFBZUMsSUFBZixNQUF3QixVQUF4QixJQUNDO0FBQUcsYUFBUyxFQUFFQyxzRUFBVSxDQUFDQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWpCSixDQU5GLEVBMkJFO0FBQ0UsV0FBTyxFQUFFLGdCQURYO0FBRUUsYUFBUyxFQUFDLDRCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBM0JGLEVBaUNFO0FBQ0UsUUFBSSxFQUFFLE1BRFI7QUFFRSxNQUFFLEVBQUUsZ0JBRk47QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLFNBQUssRUFBRVosY0FBRixhQUFFQSxjQUFGLGNBQUVBLGNBQUYsR0FBb0IsR0FKM0I7QUFLRSxhQUFTLEVBQUMsa0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixFQXlDRTtBQUNFLFdBQU8sRUFBRSxrQkFEWDtBQUVFLGFBQVMsRUFBQyw0QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQXpDRixFQStDRTtBQUNFLFFBQUksRUFBRSxNQURSO0FBRUUsTUFBRSxFQUFFLGtCQUZOO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxTQUFLLEVBQUVFLGdCQUFGLGFBQUVBLGdCQUFGLGNBQUVBLGdCQUFGLEdBQXNCLEdBSjdCO0FBS0UsYUFBUyxFQUFDLGtCQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsQ0FERixFQXdERTtBQUFLLGFBQVMsMEJBQW1CQywyREFBTSxDQUFDVSxZQUExQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxPQURILENBeERGLENBREYsRUE2REU7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsYUFBUyxFQUFDLCtDQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHNFQUFEO0FBQVksYUFBUyxFQUFDLDhCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQTdERixDQVBGLENBREY7QUFpRkQsQ0F6R0Q7O0dBQU0xQyxvQjtVQUN1Q0MsdUQsRUFDNUJLLHNELEVBRWdCRSw4RCxFQUNOQSw4RCxFQU9rQmMsd0YsRUFLcEJRLHdELEVBR0VBLHdEOzs7S0FwQnJCOUIsb0I7QUEyR1NBLG1GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVvdGUvbGF5b3V0LWFuZC1pbmZvcm1hdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUXVvdGVQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUtcGFnZS1oZWFkaW5nJztcbmltcG9ydCB7IFF1b3RlTWluaU5hdmxpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS1taW5pLW5hdmxpbmtzJztcbmltcG9ydCB7IEN1cnJlbnRMb2NhdGlvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVvdGUvY3VycmVudC1sb2NhdGlvbic7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzL3VzZUFjdGlvbic7XG5pbXBvcnQgeyBxdW90ZUxheW91dEFjdGlvbnMgfSBmcm9tICcuLi8uLi9saWIvcXVvdGUvbGF5b3V0LXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlRGVib3VuY2VVcGRhdGVSZWR1eCB9IGZyb20gJy4uLy4uL2xpYi91dGlscy91c2VEZWJvdW5jZVVwZGF0ZVJlZHV4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTbWFydFF1b3RlclN0YXRlIH0gZnJvbSAnLi4vLi4vbGliL3Jvb3QtcmVkdWNlcic7XG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlLXV0aWxzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7XG4gIHF1b3RlR2VuZXJhbEFjdGlvbnMsXG4gIFF1b3RlU3RhZ2UsXG59IGZyb20gJy4uLy4uL2xpYi9xdW90ZS9xdW90ZS1nZW5lcmFsLXJlZHVjZXInO1xuaW1wb3J0IHsgc21hcnRRdW90ZXJSb3V0ZXMgfSBmcm9tICcuLi8uLi9saWIvcm91dGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29ucy9yaWdodC1hcnJvdyc7XG5cbmNvbnN0IExheW91dEFuZEluZm9ybWF0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2V0TGF5b3V0U3RhZ2VDb21wbGV0ZSA9IHVzZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMuc2V0U3RhZ2VDb21wbGV0ZSk7XG4gIGNvbnN0IHVwZGF0ZVF1b3RlU3RhZ2UgPSB1c2VBY3Rpb24ocXVvdGVHZW5lcmFsQWN0aW9ucy51cGRhdGVTdGFnZSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldExheW91dFN0YWdlQ29tcGxldGUoKTtcbiAgICB1cGRhdGVRdW90ZVN0YWdlKFF1b3RlU3RhZ2UuQ09OVEFDVF9JTkZPUk1BVElPTik7XG4gICAgcm91dGVyLnB1c2goc21hcnRRdW90ZXJSb3V0ZXMuY29udGFjdEluZm9ybWF0aW9uLnJvdXRlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzZWxlY3RlZEFyZWEsIHVwZGF0ZVNlbGVjdGVkQXJlYV0gPSB1c2VEZWJvdW5jZVVwZGF0ZVJlZHV4KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucXVvdGUubGF5b3V0LnNlbGVjdGVkQXJlYSxcbiAgICBxdW90ZUxheW91dEFjdGlvbnMudXBkYXRlU2VsZWN0ZWRBcmVhLFxuICAgIHsgZVRhcmdldFZhbHVlQWRqdXN0bWVudDogdHJ1ZSB9XG4gICk7XG4gIGNvbnN0IHBlYWtQcm9kdWN0aW9uID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sYXlvdXQucGVha1Byb2R1Y3Rpb25cbiAgKTtcbiAgY29uc3QgaW5zdGFsbGF0aW9uU2l6ZSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogU21hcnRRdW90ZXJTdGF0ZSkgPT4gc3RhdGUucXVvdGUubGF5b3V0Lmluc3RhbGxhdGlvblNpemVcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNtYXJ0IFF1b3RlciAtIExheW91dDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UXVvdGVQYWdlSGVhZGluZyAvPlxuICAgICAgPFF1b3RlTWluaU5hdmxpbmtzIC8+XG4gICAgICA8Q3VycmVudExvY2F0aW9uIC8+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgc2hhZG93LWxnIHNtOmdyaWQgc206Z3JpZC1jb2xzLTIgc206Z2FwLTJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHNtOmNvbC1zcGFuLTEgYWxpZ24tY2VudGVyICR7c3R5bGVzLmZvcm1HcmlkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eydsZW5ndGgnfSBjbGFzc05hbWU9XCJteS0yIHRleHQtbGcgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICBTaWRlIGxlbmd0aCBvZiBzcXVhcmUgYXJlYVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgICAgICBuYW1lPXsnbGVuZ3RoJ31cbiAgICAgICAgICAgICAgICBpZD17J2xlbmd0aCd9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBSLmNvbXBsZW1lbnQoaXNOYU4pLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VsZWN0ZWRBcmVhfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWxlY3RlZEFyZWEgYXMgYW55fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmxlbmd0aD8udHlwZSA9PT0gJ3JlcXVpcmVkJyAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmVycm9yfT5UaGlzIGlucHV0IGlzIHJlcXVpcmVkPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZXJyb3JzLmxlbmd0aD8udHlwZSA9PT0gJ3ZhbGlkYXRlJyAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmVycm9yfT5MZW5ndGggbXVzdCBiZSBhIG51bWJlcjwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj17J3BlYWtQcm9kdWN0aW9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LWxnIGxlYWRpbmctdGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQZWFrIHByb2R1Y3Rpb24gKEtXcClcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICAgICAgICBpZD17J3BlYWtQcm9kdWN0aW9uJ31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtwZWFrUHJvZHVjdGlvbiA/PyAnLSd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9eydpbnN0YWxsYXRpb25TaXplJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LWxnIGxlYWRpbmctdGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBJbnN0YWxsYXRpb24gc2l6ZSAobnVtYmVyIGZsb2F0cylcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICAgICAgICBpZD17J2luc3RhbGxhdGlvblNpemUnfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2luc3RhbGxhdGlvblNpemUgPz8gJy0nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzbTpjb2wtc3Bhbi0xICR7c3R5bGVzLm1hcENvbnRhaW5lcn1gfT5cbiAgICAgICAgICAgIHsnPG1hcD4nfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC00IHNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiQ29udGludWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXAgaXRlbXMtY2VudGVyIHB4LTYgc2hhZG93LW1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UmlnaHRBcnJvdyBjbGFzc05hbWU9XCJpbmxpbmUgdy01IG1sLTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRBbmRJbmZvcm1hdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quote/layout-and-information.tsx\n");

/***/ }),

/***/ "./pages/quote/layout.module.scss":
/*!****************************************!*\
  !*** ./pages/quote/layout.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./layout.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/quote/layout.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement);};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./layout.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/quote/layout.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./layout.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/quote/layout.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVvdGUvbGF5b3V0Lm1vZHVsZS5zY3NzP2JhNDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw2ZUFBa1M7O0FBRXBVOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDZlQUFrUztBQUN4UztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDZlQUFrUzs7QUFFNVQ7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsImZpbGUiOiIuL3BhZ2VzL3F1b3RlL2xheW91dC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2xheW91dC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2xheW91dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2xheW91dC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quote/layout.module.scss\n");

/***/ })

})