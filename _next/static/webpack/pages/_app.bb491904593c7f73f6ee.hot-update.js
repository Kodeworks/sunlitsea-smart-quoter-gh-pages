webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/quote/layout-reducer.ts":
/*!*************************************!*\
  !*** ./lib/quote/layout-reducer.ts ***!
  \*************************************/
/*! exports provided: quoteLayoutActions, quoteLayoutReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quoteLayoutActions\", function() { return quoteLayoutActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quoteLayoutReducer\", function() { return quoteLayoutReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typesafe-actions */ \"./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stage */ \"./lib/stage.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar quoteLayoutActions = {\n  setStageComplete: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])('QUOTE_LAYOUT/SET_STAGE_COMPLETE')(),\n  setStageInitiated: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])('QUOTE_LAYOUT/SET_STAGE_INITIATED')(),\n  updateNumberColumns: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])('QUOTE_LAYOUT/UPDATE_NUMBER_COLUMNS', function (numberColumns) {\n    return parseInt(numberColumns);\n  })(),\n  updateNumberRows: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])('QUOTE_LAYOUT/UPDATE_NUMBER_ROWS', function (numberRows) {\n    return parseInt(numberRows);\n  })(),\n  updateRotation: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])('QUOTE_LAYOUT/UPDATE_ROTATION', function (rotation) {\n    return parseInt(rotation);\n  })(),\n  updateCoordinates: Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])('QUOTE_LAYOUT/UPDATE_COORDINATES', function (coordinates) {\n    return coordinates;\n  })()\n};\nvar quoteLayoutReducer = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__[\"createReducer\"])({\n  stage: _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].NOT_INITIATED,\n  numberColumns: 10,\n  numberRows: 20,\n  rotation: 0,\n  coordinates: []\n}).handleAction(quoteLayoutActions.setStageComplete, function (state) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    stage: _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].COMPLETE\n  });\n}).handleAction(quoteLayoutActions.setStageInitiated, function (state) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    stage: _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].INITIATED\n  });\n}).handleAction(quoteLayoutActions.updateNumberRows, function (state, action) {\n  var _action$payload;\n\n  var stage = state.stage === _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].NOT_INITIATED ? _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].INITIATED : state.stage;\n  return _objectSpread(_objectSpread({}, state), {}, {\n    numberRows: (_action$payload = action.payload) !== null && _action$payload !== void 0 ? _action$payload : 20,\n    stage: stage\n  });\n}).handleAction(quoteLayoutActions.updateNumberColumns, function (state, action) {\n  var _action$payload2;\n\n  var stage = state.stage === _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].NOT_INITIATED ? _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].INITIATED : state.stage;\n  return _objectSpread(_objectSpread({}, state), {}, {\n    numberColumns: (_action$payload2 = action.payload) !== null && _action$payload2 !== void 0 ? _action$payload2 : 10,\n    stage: stage\n  });\n}).handleAction(quoteLayoutActions.updateRotation, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    rotation: action.payload,\n    stage: state.stage === _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].NOT_INITIATED ? _stage__WEBPACK_IMPORTED_MODULE_2__[\"Stage\"].INITIATED : state.stage\n  });\n}).handleAction(quoteLayoutActions.updateCoordinates, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    coordinates: action.payload\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3F1b3RlL2xheW91dC1yZWR1Y2VyLnRzP2VkMjAiXSwibmFtZXMiOlsicXVvdGVMYXlvdXRBY3Rpb25zIiwic2V0U3RhZ2VDb21wbGV0ZSIsImNyZWF0ZUFjdGlvbiIsInNldFN0YWdlSW5pdGlhdGVkIiwidXBkYXRlTnVtYmVyQ29sdW1ucyIsIm51bWJlckNvbHVtbnMiLCJwYXJzZUludCIsInVwZGF0ZU51bWJlclJvd3MiLCJudW1iZXJSb3dzIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInVwZGF0ZUNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJxdW90ZUxheW91dFJlZHVjZXIiLCJjcmVhdGVSZWR1Y2VyIiwic3RhZ2UiLCJTdGFnZSIsIk5PVF9JTklUSUFURUQiLCJoYW5kbGVBY3Rpb24iLCJzdGF0ZSIsIkNPTVBMRVRFIiwiSU5JVElBVEVEIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxrQkFBa0IsR0FBRztBQUNoQ0Msa0JBQWdCLEVBQUVDLHFFQUFZLENBQUMsaUNBQUQsQ0FBWixFQURjO0FBRWhDQyxtQkFBaUIsRUFBRUQscUVBQVksQ0FBQyxrQ0FBRCxDQUFaLEVBRmE7QUFHaENFLHFCQUFtQixFQUFFRixxRUFBWSxDQUMvQixvQ0FEK0IsRUFFL0IsVUFBQ0csYUFBRDtBQUFBLFdBQTJCQyxRQUFRLENBQUNELGFBQUQsQ0FBbkM7QUFBQSxHQUYrQixDQUFaLEVBSFc7QUFPaENFLGtCQUFnQixFQUFFTCxxRUFBWSxDQUM1QixpQ0FENEIsRUFFNUIsVUFBQ00sVUFBRDtBQUFBLFdBQXdCRixRQUFRLENBQUNFLFVBQUQsQ0FBaEM7QUFBQSxHQUY0QixDQUFaLEVBUGM7QUFXaENDLGdCQUFjLEVBQUVQLHFFQUFZLENBQzFCLDhCQUQwQixFQUUxQixVQUFDUSxRQUFEO0FBQUEsV0FBc0JKLFFBQVEsQ0FBQ0ksUUFBRCxDQUE5QjtBQUFBLEdBRjBCLENBQVosRUFYZ0I7QUFlaENDLG1CQUFpQixFQUFFVCxxRUFBWSxDQUM3QixpQ0FENkIsRUFFN0IsVUFBQ1UsV0FBRDtBQUFBLFdBQWlEQSxXQUFqRDtBQUFBLEdBRjZCLENBQVo7QUFmYSxDQUEzQjtBQTZCQSxJQUFNQyxrQkFBa0IsR0FBR0Msc0VBQWEsQ0FHN0M7QUFDQUMsT0FBSyxFQUFFQyw0Q0FBSyxDQUFDQyxhQURiO0FBRUFaLGVBQWEsRUFBRSxFQUZmO0FBR0FHLFlBQVUsRUFBRSxFQUhaO0FBSUFFLFVBQVEsRUFBRSxDQUpWO0FBS0FFLGFBQVcsRUFBRTtBQUxiLENBSDZDLENBQWIsQ0FVL0JNLFlBVitCLENBVWxCbEIsa0JBQWtCLENBQUNDLGdCQVZELEVBVW1CLFVBQUNrQixLQUFEO0FBQUEseUNBQzlDQSxLQUQ4QztBQUVqREosU0FBSyxFQUFFQyw0Q0FBSyxDQUFDSTtBQUZvQztBQUFBLENBVm5CLEVBYy9CRixZQWQrQixDQWNsQmxCLGtCQUFrQixDQUFDRyxpQkFkRCxFQWNvQixVQUFDZ0IsS0FBRDtBQUFBLHlDQUMvQ0EsS0FEK0M7QUFFbERKLFNBQUssRUFBRUMsNENBQUssQ0FBQ0s7QUFGcUM7QUFBQSxDQWRwQixFQWtCL0JILFlBbEIrQixDQWtCbEJsQixrQkFBa0IsQ0FBQ08sZ0JBbEJELEVBa0JtQixVQUFDWSxLQUFELEVBQVFHLE1BQVIsRUFBbUI7QUFBQTs7QUFDcEUsTUFBTVAsS0FBSyxHQUNUSSxLQUFLLENBQUNKLEtBQU4sS0FBZ0JDLDRDQUFLLENBQUNDLGFBQXRCLEdBQXNDRCw0Q0FBSyxDQUFDSyxTQUE1QyxHQUF3REYsS0FBSyxDQUFDSixLQURoRTtBQUVBLHlDQUNLSSxLQURMO0FBRUVYLGNBQVUscUJBQUVjLE1BQU0sQ0FBQ0MsT0FBVCw2REFBb0IsRUFGaEM7QUFHRVIsU0FBSyxFQUFMQTtBQUhGO0FBS0QsQ0ExQitCLEVBMkIvQkcsWUEzQitCLENBMkJsQmxCLGtCQUFrQixDQUFDSSxtQkEzQkQsRUEyQnNCLFVBQUNlLEtBQUQsRUFBUUcsTUFBUixFQUFtQjtBQUFBOztBQUN2RSxNQUFNUCxLQUFLLEdBQ1RJLEtBQUssQ0FBQ0osS0FBTixLQUFnQkMsNENBQUssQ0FBQ0MsYUFBdEIsR0FBc0NELDRDQUFLLENBQUNLLFNBQTVDLEdBQXdERixLQUFLLENBQUNKLEtBRGhFO0FBRUEseUNBQ0tJLEtBREw7QUFFRWQsaUJBQWEsc0JBQUVpQixNQUFNLENBQUNDLE9BQVQsK0RBQW9CLEVBRm5DO0FBR0VSLFNBQUssRUFBTEE7QUFIRjtBQUtELENBbkMrQixFQW9DL0JHLFlBcEMrQixDQW9DbEJsQixrQkFBa0IsQ0FBQ1MsY0FwQ0QsRUFvQ2lCLFVBQUNVLEtBQUQsRUFBUUcsTUFBUjtBQUFBLHlDQUM1Q0gsS0FENEM7QUFFL0NULFlBQVEsRUFBRVksTUFBTSxDQUFDQyxPQUY4QjtBQUcvQ1IsU0FBSyxFQUFFSSxLQUFLLENBQUNKLEtBQU4sS0FBZ0JDLDRDQUFLLENBQUNDLGFBQXRCLEdBQXNDRCw0Q0FBSyxDQUFDSyxTQUE1QyxHQUF3REYsS0FBSyxDQUFDSjtBQUh0QjtBQUFBLENBcENqQixFQXlDL0JHLFlBekMrQixDQXlDbEJsQixrQkFBa0IsQ0FBQ1csaUJBekNELEVBeUNvQixVQUFDUSxLQUFELEVBQVFHLE1BQVI7QUFBQSx5Q0FDL0NILEtBRCtDO0FBRWxEUCxlQUFXLEVBQUVVLE1BQU0sQ0FBQ0M7QUFGOEI7QUFBQSxDQXpDcEIsQ0FBM0IiLCJmaWxlIjoiLi9saWIvcXVvdGUvbGF5b3V0LXJlZHVjZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25UeXBlLCBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tICd0eXBlc2FmZS1hY3Rpb25zJztcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnLi4vc3RhZ2UnO1xuXG5leHBvcnQgY29uc3QgcXVvdGVMYXlvdXRBY3Rpb25zID0ge1xuICBzZXRTdGFnZUNvbXBsZXRlOiBjcmVhdGVBY3Rpb24oJ1FVT1RFX0xBWU9VVC9TRVRfU1RBR0VfQ09NUExFVEUnKSgpLFxuICBzZXRTdGFnZUluaXRpYXRlZDogY3JlYXRlQWN0aW9uKCdRVU9URV9MQVlPVVQvU0VUX1NUQUdFX0lOSVRJQVRFRCcpKCksXG4gIHVwZGF0ZU51bWJlckNvbHVtbnM6IGNyZWF0ZUFjdGlvbihcbiAgICAnUVVPVEVfTEFZT1VUL1VQREFURV9OVU1CRVJfQ09MVU1OUycsXG4gICAgKG51bWJlckNvbHVtbnM6IG51bWJlcikgPT4gcGFyc2VJbnQobnVtYmVyQ29sdW1ucyBhcyBhbnkpXG4gICkoKSxcbiAgdXBkYXRlTnVtYmVyUm93czogY3JlYXRlQWN0aW9uKFxuICAgICdRVU9URV9MQVlPVVQvVVBEQVRFX05VTUJFUl9ST1dTJyxcbiAgICAobnVtYmVyUm93czogbnVtYmVyKSA9PiBwYXJzZUludChudW1iZXJSb3dzIGFzIGFueSlcbiAgKSgpLFxuICB1cGRhdGVSb3RhdGlvbjogY3JlYXRlQWN0aW9uKFxuICAgICdRVU9URV9MQVlPVVQvVVBEQVRFX1JPVEFUSU9OJyxcbiAgICAocm90YXRpb246IG51bWJlcikgPT4gcGFyc2VJbnQocm90YXRpb24gYXMgYW55KVxuICApKCksXG4gIHVwZGF0ZUNvb3JkaW5hdGVzOiBjcmVhdGVBY3Rpb24oXG4gICAgJ1FVT1RFX0xBWU9VVC9VUERBVEVfQ09PUkRJTkFURVMnLFxuICAgIChjb29yZGluYXRlczogeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfVtdKSA9PiBjb29yZGluYXRlc1xuICApKCksXG59O1xuXG5pbnRlcmZhY2UgTGF5b3V0UmVkdWNlckRhdGEge1xuICBudW1iZXJDb2x1bW5zOiBudW1iZXI7XG4gIG51bWJlclJvd3M6IG51bWJlcjtcbiAgcm90YXRpb246IG51bWJlcjtcbiAgc3RhZ2U6IFN0YWdlO1xuICBjb29yZGluYXRlczogeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfVtdO1xufVxuXG5leHBvcnQgY29uc3QgcXVvdGVMYXlvdXRSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcjxcbiAgTGF5b3V0UmVkdWNlckRhdGEsXG4gIEFjdGlvblR5cGU8dHlwZW9mIHF1b3RlTGF5b3V0QWN0aW9ucz5cbj4oe1xuICBzdGFnZTogU3RhZ2UuTk9UX0lOSVRJQVRFRCxcbiAgbnVtYmVyQ29sdW1uczogMTAsXG4gIG51bWJlclJvd3M6IDIwLFxuICByb3RhdGlvbjogMCxcbiAgY29vcmRpbmF0ZXM6IFtdLFxufSlcbiAgLmhhbmRsZUFjdGlvbihxdW90ZUxheW91dEFjdGlvbnMuc2V0U3RhZ2VDb21wbGV0ZSwgKHN0YXRlKSA9PiAoe1xuICAgIC4uLnN0YXRlLFxuICAgIHN0YWdlOiBTdGFnZS5DT01QTEVURSxcbiAgfSkpXG4gIC5oYW5kbGVBY3Rpb24ocXVvdGVMYXlvdXRBY3Rpb25zLnNldFN0YWdlSW5pdGlhdGVkLCAoc3RhdGUpID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgc3RhZ2U6IFN0YWdlLklOSVRJQVRFRCxcbiAgfSkpXG4gIC5oYW5kbGVBY3Rpb24ocXVvdGVMYXlvdXRBY3Rpb25zLnVwZGF0ZU51bWJlclJvd3MsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhZ2UgPVxuICAgICAgc3RhdGUuc3RhZ2UgPT09IFN0YWdlLk5PVF9JTklUSUFURUQgPyBTdGFnZS5JTklUSUFURUQgOiBzdGF0ZS5zdGFnZTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBudW1iZXJSb3dzOiBhY3Rpb24ucGF5bG9hZCA/PyAyMCxcbiAgICAgIHN0YWdlLFxuICAgIH07XG4gIH0pXG4gIC5oYW5kbGVBY3Rpb24ocXVvdGVMYXlvdXRBY3Rpb25zLnVwZGF0ZU51bWJlckNvbHVtbnMsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhZ2UgPVxuICAgICAgc3RhdGUuc3RhZ2UgPT09IFN0YWdlLk5PVF9JTklUSUFURUQgPyBTdGFnZS5JTklUSUFURUQgOiBzdGF0ZS5zdGFnZTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBudW1iZXJDb2x1bW5zOiBhY3Rpb24ucGF5bG9hZCA/PyAxMCxcbiAgICAgIHN0YWdlLFxuICAgIH07XG4gIH0pXG4gIC5oYW5kbGVBY3Rpb24ocXVvdGVMYXlvdXRBY3Rpb25zLnVwZGF0ZVJvdGF0aW9uLCAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAuLi5zdGF0ZSxcbiAgICByb3RhdGlvbjogYWN0aW9uLnBheWxvYWQsXG4gICAgc3RhZ2U6IHN0YXRlLnN0YWdlID09PSBTdGFnZS5OT1RfSU5JVElBVEVEID8gU3RhZ2UuSU5JVElBVEVEIDogc3RhdGUuc3RhZ2UsXG4gIH0pKVxuICAuaGFuZGxlQWN0aW9uKHF1b3RlTGF5b3V0QWN0aW9ucy51cGRhdGVDb29yZGluYXRlcywgKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgY29vcmRpbmF0ZXM6IGFjdGlvbi5wYXlsb2FkLFxuICB9KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/quote/layout-reducer.ts\n");

/***/ })

})