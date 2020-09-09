webpackHotUpdate_N_E("pages/quote/location",{

/***/ "./components/quote/location/useMap.ts":
/*!*********************************************!*\
  !*** ./components/quote/location/useMap.ts ***!
  \*********************************************/
/*! exports provided: useMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMap\", function() { return useMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_quote_location_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/quote/location-reducer */ \"./lib/quote/location-reducer.ts\");\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar defaultUseMapOptions = {\n  handleChangeCenter: false,\n  handleChangeZoom: true,\n  mapOptions: {\n    streetViewControl: false,\n    disableDoubleClickZoom: true\n  }\n};\nvar useMap = function useMap() {\n  _s();\n\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var completeOptions = _objectSpread(_objectSpread({}, defaultUseMapOptions), options);\n\n  var justOnce = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(false); // const mapsReady: boolean = useGoogleMapsReady();\n\n  var mapsReady = false;\n  var mapDomRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null); // const location = useSelector(\n  //   (state: SmartQuoterState) => state.quote.location\n  // );\n  // const location = {\n  // const coordinate = useSelector(\n  //   (state: SmartQuoterState) => state.quote.location.coordinate\n  // );\n  // const locationStatus = useSelector(\n  //   (state: SmartQuoterState) => state.quote.location.locationStatus\n  // );\n  // const locationText = useSelector(\n  //   (state: SmartQuoterState) => state.quote.location.locationText\n  // );\n  // };\n\n  var location = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])( // () => ({ coordinate, locationStatus, locationText }),\n  function () {\n    return {\n      coordinate: {\n        lat: 1,\n        lng: 1\n      },\n      locationStatus: _lib_quote_location_reducer__WEBPACK_IMPORTED_MODULE_2__[\"LocationStatus\"].NONE,\n      locationText: 'Oslo'\n    };\n  }, []);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      mapObject = _useState[0],\n      setMapObject = _useState[1]; // const updateZoom = useAction(locationReducerActions.setCoordinateCenterZoom);\n  //\n  // const setLocationStatus = useAction(locationReducerActions.setLocationStatus);\n  // const updateCenter = useAction(locationReducerActions.setCoordinateCenter);\n  // const mapCenterChangeHandlerCreator = useCallback(\n  //   (map: google.maps.Map) =>\n  //     debounce(() => {\n  //       const center = map.getCenter().toJSON();\n  //       const zoom = map.getZoom();\n  //       updateCenter({\n  //         center,\n  //         zoom,\n  //       });\n  //       setLocationStatus(LocationStatus.COORDINATE_CENTER);\n  //     }),\n  //   [updateCenter]\n  // );\n  // const mapZoomChangeHandlerCreator = useCallback(\n  //   (map: google.maps.Map) =>\n  //     debounce(() => {\n  //       const zoom = map.getZoom();\n  //       updateZoom(zoom);\n  //     }),\n  //   [updateZoom]\n  // );\n  // useEffect(\n  //   /**\n  //    * Map object initialization\n  //    */\n  //   () => {\n  //     if (!mapsReady || !(mapObject === null) || mapDomRef.current === null) {\n  //       return;\n  //     }\n  //     const map = new google.maps.Map<HTMLDivElement>(\n  //       mapDomRef.current,\n  //       completeOptions.mapOptions\n  //     );\n  //     if (completeOptions.handleChangeZoom) {\n  //       map.addListener('zoom_changed', mapZoomChangeHandlerCreator(map));\n  //     }\n  //     if (completeOptions.handleChangeCenter) {\n  //       map.addListener('center_changed', mapCenterChangeHandlerCreator(map));\n  //     }\n  //     setMapObject(map);\n  //     return () => {\n  //       map.unbindAll();\n  //     };\n  //   },\n  //   [mapsReady]\n  // );\n  //\n  // const currentMapCenter = useRef<string>();\n  // useEffect(\n  //   /**\n  //    * Center-the-map effect\n  //    */\n  //   () => {\n  //     if (mapObject === null || !mapsReady) {\n  //       return;\n  //     }\n  //     if (\n  //       location.locationStatus === LocationStatus.NONE &&\n  //       !justOnce.current\n  //     ) {\n  //       mapObject.setCenter({ lat: 20, lng: 20 });\n  //       mapObject.setZoom(1);\n  //       justOnce.current = true;\n  //     }\n  //     // Center on default location\n  //     if (\n  //       location.locationStatus === LocationStatus.LOCATION_TEXT_CENTER &&\n  //       currentMapCenter.current !== location.locationText\n  //     ) {\n  //       justOnce.current = true;\n  //       const placesDetails = new google.maps.places.PlacesService(mapObject);\n  //       placesDetails.textSearch(\n  //         { query: location.locationText },\n  //         (results) => {\n  //           const place = R.head(results);\n  //           if (place === undefined) {\n  //             console.warn('Location lookup result is empty');\n  //           }\n  //           try {\n  //             currentMapCenter.current = location.locationText;\n  //             if (place?.geometry?.location !== undefined) {\n  //               mapObject.setCenter(place.geometry.location);\n  //               if (place?.geometry?.viewport !== undefined) {\n  //                 mapObject.fitBounds(place.geometry.viewport);\n  //               }\n  //             }\n  //           } catch (e) {\n  //             console.error('failed centering on location result', results, e);\n  //           }\n  //         }\n  //       );\n  //     }\n  //     // Center on override location\n  //     if (\n  //       location.locationStatus === LocationStatus.COORDINATE_CENTER &&\n  //       location.coordinate !== null &&\n  //       (mapObject.getCenter() === undefined ||\n  //         !locationComparator(\n  //           mapObject.getCenter().toJSON(),\n  //           location.coordinate.center\n  //         ))\n  //     ) {\n  //       justOnce.current = true;\n  //       mapObject.setCenter(location.coordinate.center);\n  //       mapObject.setZoom(location.coordinate.zoom);\n  //     }\n  //   },\n  //   [mapObject, location.locationStatus, location.coordinate?.center, mapsReady]\n  // );\n\n\n  console.log('🏞', 'do i run this');\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      domRef: mapDomRef,\n      mapObject: mapObject\n    };\n  }, [mapDomRef, mapObject]);\n};\n\n_s(useMap, \"L23cb+JQNcdXQpIUNtIYffihcb8=\");\n\nvar locationComparator = function locationComparator(a, b) {\n  return a.lat === b.lat && a.lng === b.lng;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZS9sb2NhdGlvbi91c2VNYXAudHM/MDBhYyJdLCJuYW1lcyI6WyJkZWZhdWx0VXNlTWFwT3B0aW9ucyIsImhhbmRsZUNoYW5nZUNlbnRlciIsImhhbmRsZUNoYW5nZVpvb20iLCJtYXBPcHRpb25zIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJkaXNhYmxlRG91YmxlQ2xpY2tab29tIiwidXNlTWFwIiwib3B0aW9ucyIsImNvbXBsZXRlT3B0aW9ucyIsImp1c3RPbmNlIiwidXNlUmVmIiwibWFwc1JlYWR5IiwibWFwRG9tUmVmIiwibG9jYXRpb24iLCJ1c2VNZW1vIiwiY29vcmRpbmF0ZSIsImxhdCIsImxuZyIsImxvY2F0aW9uU3RhdHVzIiwiTG9jYXRpb25TdGF0dXMiLCJOT05FIiwibG9jYXRpb25UZXh0IiwidXNlU3RhdGUiLCJtYXBPYmplY3QiLCJzZXRNYXBPYmplY3QiLCJjb25zb2xlIiwibG9nIiwiZG9tUmVmIiwibG9jYXRpb25Db21wYXJhdG9yIiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFJQTtBQVlBLElBQU1BLG9CQUFtQyxHQUFHO0FBQzFDQyxvQkFBa0IsRUFBRSxLQURzQjtBQUUxQ0Msa0JBQWdCLEVBQUUsSUFGd0I7QUFHMUNDLFlBQVUsRUFBRTtBQUNWQyxxQkFBaUIsRUFBRSxLQURUO0FBRVZDLDBCQUFzQixFQUFFO0FBRmQ7QUFIOEIsQ0FBNUM7QUFTTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUEwQztBQUFBOztBQUFBLE1BQXpDQyxPQUF5Qyx1RUFBUCxFQUFPOztBQUM5RCxNQUFNQyxlQUFlLG1DQUNoQlIsb0JBRGdCLEdBRWhCTyxPQUZnQixDQUFyQjs7QUFLQSxNQUFNRSxRQUFRLEdBQUdDLG9EQUFNLENBQUMsS0FBRCxDQUF2QixDQU44RCxDQVE5RDs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsS0FBbEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLG9EQUFNLENBQWlCLElBQWpCLENBQXhCLENBVjhELENBVzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHQyxxREFBTyxFQUN0QjtBQUNBO0FBQUEsV0FBTztBQUFFQyxnQkFBVSxFQUFFO0FBQUNDLFdBQUcsRUFBRSxDQUFOO0FBQVNDLFdBQUcsRUFBRTtBQUFkLE9BQWQ7QUFBZ0NDLG9CQUFjLEVBQUVDLDBFQUFjLENBQUNDLElBQS9EO0FBQXNFQyxrQkFBWSxFQUFFO0FBQXBGLEtBQVA7QUFBQSxHQUZzQixFQUd0QixFQUhzQixDQUF4Qjs7QUF6QjhELGtCQThCNUJDLHNEQUFRLENBQXlCLElBQXpCLENBOUJvQjtBQUFBLE1BOEJ2REMsU0E5QnVEO0FBQUEsTUE4QjVDQyxZQTlCNEMsaUJBK0I5RDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQixlQUFsQjtBQUVBLFNBQU9aLHFEQUFPLENBQ1o7QUFBQSxXQUFPO0FBQ0xhLFlBQU0sRUFBRWYsU0FESDtBQUVMVyxlQUFTLEVBQVRBO0FBRkssS0FBUDtBQUFBLEdBRFksRUFLWixDQUFDWCxTQUFELEVBQVlXLFNBQVosQ0FMWSxDQUFkO0FBT0QsQ0EzSk07O0dBQU1qQixNOztBQTZKYixJQUFNc0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUN6QkMsQ0FEeUIsRUFFekJDLENBRnlCO0FBQUEsU0FHdEJELENBQUMsQ0FBQ2IsR0FBRixLQUFVYyxDQUFDLENBQUNkLEdBQVosSUFBbUJhLENBQUMsQ0FBQ1osR0FBRixLQUFVYSxDQUFDLENBQUNiLEdBSFQ7QUFBQSxDQUEzQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcXVvdGUvbG9jYXRpb24vdXNlTWFwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5pbXBvcnQgeyB1c2VHb29nbGVNYXBzUmVhZHkgfSBmcm9tICcuLi8uLi8uLi9saWIvZ29vZ2xlbWFwcy9nb29nbGUtbWFwcyc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9saWIvdXRpbHMvdXNlQWN0aW9uJztcbmltcG9ydCB7IFNtYXJ0UXVvdGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9saWIvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7XG4gIGxvY2F0aW9uUmVkdWNlckFjdGlvbnMsXG4gIExvY2F0aW9uU3RhdHVzLFxufSBmcm9tICcuLi8uLi8uLi9saWIvcXVvdGUvbG9jYXRpb24tcmVkdWNlcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uLy4uLy4uL2xpYi91dGlscy9kZWJvdW5jZSc7XG5cbmludGVyZmFjZSBVc2VNYXBPcHRpb25zIHtcbiAgaGFuZGxlQ2hhbmdlQ2VudGVyOiBib29sZWFuO1xuICBoYW5kbGVDaGFuZ2Vab29tOiBib29sZWFuO1xuICBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zO1xufVxuXG5jb25zdCBkZWZhdWx0VXNlTWFwT3B0aW9uczogVXNlTWFwT3B0aW9ucyA9IHtcbiAgaGFuZGxlQ2hhbmdlQ2VudGVyOiBmYWxzZSxcbiAgaGFuZGxlQ2hhbmdlWm9vbTogdHJ1ZSxcbiAgbWFwT3B0aW9uczoge1xuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZU1hcCA9IChvcHRpb25zOiBQYXJ0aWFsPFVzZU1hcE9wdGlvbnM+ID0ge30pID0+IHtcbiAgY29uc3QgY29tcGxldGVPcHRpb25zID0ge1xuICAgIC4uLmRlZmF1bHRVc2VNYXBPcHRpb25zLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgY29uc3QganVzdE9uY2UgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IG1hcHNSZWFkeTogYm9vbGVhbiA9IHVzZUdvb2dsZU1hcHNSZWFkeSgpO1xuICBjb25zdCBtYXBzUmVhZHkgPSBmYWxzZTtcbiAgY29uc3QgbWFwRG9tUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgLy8gY29uc3QgbG9jYXRpb24gPSB1c2VTZWxlY3RvcihcbiAgLy8gICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxvY2F0aW9uXG4gIC8vICk7XG4gIC8vIGNvbnN0IGxvY2F0aW9uID0ge1xuICAvLyBjb25zdCBjb29yZGluYXRlID0gdXNlU2VsZWN0b3IoXG4gIC8vICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sb2NhdGlvbi5jb29yZGluYXRlXG4gIC8vICk7XG4gIC8vIGNvbnN0IGxvY2F0aW9uU3RhdHVzID0gdXNlU2VsZWN0b3IoXG4gIC8vICAgKHN0YXRlOiBTbWFydFF1b3RlclN0YXRlKSA9PiBzdGF0ZS5xdW90ZS5sb2NhdGlvbi5sb2NhdGlvblN0YXR1c1xuICAvLyApO1xuICAvLyBjb25zdCBsb2NhdGlvblRleHQgPSB1c2VTZWxlY3RvcihcbiAgLy8gICAoc3RhdGU6IFNtYXJ0UXVvdGVyU3RhdGUpID0+IHN0YXRlLnF1b3RlLmxvY2F0aW9uLmxvY2F0aW9uVGV4dFxuICAvLyApO1xuICAvLyB9O1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZU1lbW8oXG4gICAgLy8gKCkgPT4gKHsgY29vcmRpbmF0ZSwgbG9jYXRpb25TdGF0dXMsIGxvY2F0aW9uVGV4dCB9KSxcbiAgICAoKSA9PiAoeyBjb29yZGluYXRlOiB7bGF0OiAxLCBsbmc6IDF9LCBsb2NhdGlvblN0YXR1czogTG9jYXRpb25TdGF0dXMuTk9ORSAsIGxvY2F0aW9uVGV4dDogJ09zbG8nIH0pLFxuICAgIFtdXG4gICk7XG4gIGNvbnN0IFttYXBPYmplY3QsIHNldE1hcE9iamVjdF0gPSB1c2VTdGF0ZTxnb29nbGUubWFwcy5NYXAgfCBudWxsPihudWxsKTtcbiAgLy8gY29uc3QgdXBkYXRlWm9vbSA9IHVzZUFjdGlvbihsb2NhdGlvblJlZHVjZXJBY3Rpb25zLnNldENvb3JkaW5hdGVDZW50ZXJab29tKTtcbiAgLy9cbiAgLy8gY29uc3Qgc2V0TG9jYXRpb25TdGF0dXMgPSB1c2VBY3Rpb24obG9jYXRpb25SZWR1Y2VyQWN0aW9ucy5zZXRMb2NhdGlvblN0YXR1cyk7XG4gIC8vIGNvbnN0IHVwZGF0ZUNlbnRlciA9IHVzZUFjdGlvbihsb2NhdGlvblJlZHVjZXJBY3Rpb25zLnNldENvb3JkaW5hdGVDZW50ZXIpO1xuXG4gIC8vIGNvbnN0IG1hcENlbnRlckNoYW5nZUhhbmRsZXJDcmVhdG9yID0gdXNlQ2FsbGJhY2soXG4gIC8vICAgKG1hcDogZ29vZ2xlLm1hcHMuTWFwKSA9PlxuICAvLyAgICAgZGVib3VuY2UoKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBjZW50ZXIgPSBtYXAuZ2V0Q2VudGVyKCkudG9KU09OKCk7XG4gIC8vICAgICAgIGNvbnN0IHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xuICAvLyAgICAgICB1cGRhdGVDZW50ZXIoe1xuICAvLyAgICAgICAgIGNlbnRlcixcbiAgLy8gICAgICAgICB6b29tLFxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgICAgc2V0TG9jYXRpb25TdGF0dXMoTG9jYXRpb25TdGF0dXMuQ09PUkRJTkFURV9DRU5URVIpO1xuICAvLyAgICAgfSksXG4gIC8vICAgW3VwZGF0ZUNlbnRlcl1cbiAgLy8gKTtcbiAgLy8gY29uc3QgbWFwWm9vbUNoYW5nZUhhbmRsZXJDcmVhdG9yID0gdXNlQ2FsbGJhY2soXG4gIC8vICAgKG1hcDogZ29vZ2xlLm1hcHMuTWFwKSA9PlxuICAvLyAgICAgZGVib3VuY2UoKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcbiAgLy8gICAgICAgdXBkYXRlWm9vbSh6b29tKTtcbiAgLy8gICAgIH0pLFxuICAvLyAgIFt1cGRhdGVab29tXVxuICAvLyApO1xuXG4gIC8vIHVzZUVmZmVjdChcbiAgLy8gICAvKipcbiAgLy8gICAgKiBNYXAgb2JqZWN0IGluaXRpYWxpemF0aW9uXG4gIC8vICAgICovXG4gIC8vICAgKCkgPT4ge1xuICAvLyAgICAgaWYgKCFtYXBzUmVhZHkgfHwgIShtYXBPYmplY3QgPT09IG51bGwpIHx8IG1hcERvbVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gIC8vICAgICAgIHJldHVybjtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXA8SFRNTERpdkVsZW1lbnQ+KFxuICAvLyAgICAgICBtYXBEb21SZWYuY3VycmVudCxcbiAgLy8gICAgICAgY29tcGxldGVPcHRpb25zLm1hcE9wdGlvbnNcbiAgLy8gICAgICk7XG4gIC8vICAgICBpZiAoY29tcGxldGVPcHRpb25zLmhhbmRsZUNoYW5nZVpvb20pIHtcbiAgLy8gICAgICAgbWFwLmFkZExpc3RlbmVyKCd6b29tX2NoYW5nZWQnLCBtYXBab29tQ2hhbmdlSGFuZGxlckNyZWF0b3IobWFwKSk7XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoY29tcGxldGVPcHRpb25zLmhhbmRsZUNoYW5nZUNlbnRlcikge1xuICAvLyAgICAgICBtYXAuYWRkTGlzdGVuZXIoJ2NlbnRlcl9jaGFuZ2VkJywgbWFwQ2VudGVyQ2hhbmdlSGFuZGxlckNyZWF0b3IobWFwKSk7XG4gIC8vICAgICB9XG4gIC8vICAgICBzZXRNYXBPYmplY3QobWFwKTtcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICAgIG1hcC51bmJpbmRBbGwoKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfSxcbiAgLy8gICBbbWFwc1JlYWR5XVxuICAvLyApO1xuICAvL1xuICAvLyBjb25zdCBjdXJyZW50TWFwQ2VudGVyID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgLy8gdXNlRWZmZWN0KFxuICAvLyAgIC8qKlxuICAvLyAgICAqIENlbnRlci10aGUtbWFwIGVmZmVjdFxuICAvLyAgICAqL1xuICAvLyAgICgpID0+IHtcbiAgLy8gICAgIGlmIChtYXBPYmplY3QgPT09IG51bGwgfHwgIW1hcHNSZWFkeSkge1xuICAvLyAgICAgICByZXR1cm47XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoXG4gIC8vICAgICAgIGxvY2F0aW9uLmxvY2F0aW9uU3RhdHVzID09PSBMb2NhdGlvblN0YXR1cy5OT05FICYmXG4gIC8vICAgICAgICFqdXN0T25jZS5jdXJyZW50XG4gIC8vICAgICApIHtcbiAgLy8gICAgICAgbWFwT2JqZWN0LnNldENlbnRlcih7IGxhdDogMjAsIGxuZzogMjAgfSk7XG4gIC8vICAgICAgIG1hcE9iamVjdC5zZXRab29tKDEpO1xuICAvLyAgICAgICBqdXN0T25jZS5jdXJyZW50ID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIC8vIENlbnRlciBvbiBkZWZhdWx0IGxvY2F0aW9uXG4gIC8vICAgICBpZiAoXG4gIC8vICAgICAgIGxvY2F0aW9uLmxvY2F0aW9uU3RhdHVzID09PSBMb2NhdGlvblN0YXR1cy5MT0NBVElPTl9URVhUX0NFTlRFUiAmJlxuICAvLyAgICAgICBjdXJyZW50TWFwQ2VudGVyLmN1cnJlbnQgIT09IGxvY2F0aW9uLmxvY2F0aW9uVGV4dFxuICAvLyAgICAgKSB7XG4gIC8vICAgICAgIGp1c3RPbmNlLmN1cnJlbnQgPSB0cnVlO1xuICAvLyAgICAgICBjb25zdCBwbGFjZXNEZXRhaWxzID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKG1hcE9iamVjdCk7XG4gIC8vICAgICAgIHBsYWNlc0RldGFpbHMudGV4dFNlYXJjaChcbiAgLy8gICAgICAgICB7IHF1ZXJ5OiBsb2NhdGlvbi5sb2NhdGlvblRleHQgfSxcbiAgLy8gICAgICAgICAocmVzdWx0cykgPT4ge1xuICAvLyAgICAgICAgICAgY29uc3QgcGxhY2UgPSBSLmhlYWQocmVzdWx0cyk7XG4gIC8vICAgICAgICAgICBpZiAocGxhY2UgPT09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0xvY2F0aW9uIGxvb2t1cCByZXN1bHQgaXMgZW1wdHknKTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgIHRyeSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRNYXBDZW50ZXIuY3VycmVudCA9IGxvY2F0aW9uLmxvY2F0aW9uVGV4dDtcbiAgLy8gICAgICAgICAgICAgaWYgKHBsYWNlPy5nZW9tZXRyeT8ubG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICAgICAgICAgIG1hcE9iamVjdC5zZXRDZW50ZXIocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xuICAvLyAgICAgICAgICAgICAgIGlmIChwbGFjZT8uZ2VvbWV0cnk/LnZpZXdwb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgICAgICAgICAgIG1hcE9iamVjdC5maXRCb3VuZHMocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpO1xuICAvLyAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgY2VudGVyaW5nIG9uIGxvY2F0aW9uIHJlc3VsdCcsIHJlc3VsdHMsIGUpO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIC8vIENlbnRlciBvbiBvdmVycmlkZSBsb2NhdGlvblxuICAvLyAgICAgaWYgKFxuICAvLyAgICAgICBsb2NhdGlvbi5sb2NhdGlvblN0YXR1cyA9PT0gTG9jYXRpb25TdGF0dXMuQ09PUkRJTkFURV9DRU5URVIgJiZcbiAgLy8gICAgICAgbG9jYXRpb24uY29vcmRpbmF0ZSAhPT0gbnVsbCAmJlxuICAvLyAgICAgICAobWFwT2JqZWN0LmdldENlbnRlcigpID09PSB1bmRlZmluZWQgfHxcbiAgLy8gICAgICAgICAhbG9jYXRpb25Db21wYXJhdG9yKFxuICAvLyAgICAgICAgICAgbWFwT2JqZWN0LmdldENlbnRlcigpLnRvSlNPTigpLFxuICAvLyAgICAgICAgICAgbG9jYXRpb24uY29vcmRpbmF0ZS5jZW50ZXJcbiAgLy8gICAgICAgICApKVxuICAvLyAgICAgKSB7XG4gIC8vICAgICAgIGp1c3RPbmNlLmN1cnJlbnQgPSB0cnVlO1xuICAvLyAgICAgICBtYXBPYmplY3Quc2V0Q2VudGVyKGxvY2F0aW9uLmNvb3JkaW5hdGUuY2VudGVyKTtcbiAgLy8gICAgICAgbWFwT2JqZWN0LnNldFpvb20obG9jYXRpb24uY29vcmRpbmF0ZS56b29tKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9LFxuICAvLyAgIFttYXBPYmplY3QsIGxvY2F0aW9uLmxvY2F0aW9uU3RhdHVzLCBsb2NhdGlvbi5jb29yZGluYXRlPy5jZW50ZXIsIG1hcHNSZWFkeV1cbiAgLy8gKTtcbiAgY29uc29sZS5sb2coJ/Cfj54nLCAnZG8gaSBydW4gdGhpcycpO1xuXG4gIHJldHVybiB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBkb21SZWY6IG1hcERvbVJlZixcbiAgICAgIG1hcE9iamVjdCxcbiAgICB9KSxcbiAgICBbbWFwRG9tUmVmLCBtYXBPYmplY3RdXG4gICk7XG59O1xuXG5jb25zdCBsb2NhdGlvbkNvbXBhcmF0b3IgPSAoXG4gIGE6IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWwsXG4gIGI6IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxcbikgPT4gYS5sYXQgPT09IGIubGF0ICYmIGEubG5nID09PSBiLmxuZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/quote/location/useMap.ts\n");

/***/ })

})