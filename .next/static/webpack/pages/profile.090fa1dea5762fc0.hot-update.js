"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/helpers/axios_helper.js":
/*!*************************************!*\
  !*** ./src/helpers/axios_helper.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAuthToken\": function() { return /* binding */ getAuthToken; },\n/* harmony export */   \"setAuthHeader\": function() { return /* binding */ setAuthHeader; },\n/* harmony export */   \"request\": function() { return /* binding */ request; },\n/* harmony export */   \"upload\": function() { return /* binding */ upload; }\n/* harmony export */ });\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar getAuthToken = function getAuthToken() {\n  return window.localStorage.getItem('auth_token');\n};\nvar setAuthHeader = function setAuthHeader(token) {\n  if (token !== null) {\n    window.localStorage.setItem(\"auth_token\", token);\n  } else {\n    window.localStorage.removeItem(\"auth_token\");\n  }\n};\nvar a = \"https://cloud-production-2831.up.railway.app/tomobilina\"; // http://172.10.0.33:8080\n\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = a;\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.post[\"Content-Type\"] = 'application/json';\nfunction request(method, url, data) {\n  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'application/json';\n  var headers = {};\n\n  if (getAuthToken() !== null && getAuthToken() !== \"null\") {\n    headers = {\n      'Authorization': \"Bearer \".concat(getAuthToken()),\n      'content-type': content\n    };\n  }\n\n  return (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    method: method,\n    url: url,\n    headers: headers,\n    data: data\n  });\n}\n;\nfunction upload(_x, _x2) {\n  return _upload.apply(this, arguments);\n}\n\nfunction _upload() {\n  _upload = (0,D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, data) {\n    return D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('https://cloud-production-2831.up.railway.app/tomobilina' + url, data).then(function (response) {\n              console.log(response.data);\n              console.log(formData.values);\n            })[\"catch\"](function (error) {\n              console.error('Erreur lors de l\\'envoi de la photo:', error);\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _upload.apply(this, arguments);\n}\n\n;\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9heGlvc19oZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixTQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFlBQTVCLENBQVA7QUFDSCxDQUZNO0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDcEMsTUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJKLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkksT0FBcEIsQ0FBNEIsWUFBNUIsRUFBMENELEtBQTFDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xKLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkssVUFBcEIsQ0FBK0IsWUFBL0I7QUFDRDtBQUNKLENBTk07QUFPUCxJQUFNQyxDQUFDLEdBQUcseURBQVYsRUFDQTs7QUFDQVQsOERBQUEsR0FBeUJTLENBQXpCO0FBQ0FULG1GQUFBLEdBQThDLGtCQUE5QztBQUVRLFNBQVNjLE9BQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxHQUExQixFQUErQkMsSUFBL0IsRUFBK0Q7QUFBQSxNQUEzQkMsT0FBMkIsdUVBQW5CLGtCQUFtQjtBQUNuRSxNQUFJTixPQUFPLEdBQUcsRUFBZDs7QUFDQSxNQUFJWCxZQUFZLE9BQU8sSUFBbkIsSUFBMkJBLFlBQVksT0FBTyxNQUFsRCxFQUEwRDtBQUN0RFcsSUFBQUEsT0FBTyxHQUFHO0FBQUMsd0NBQTJCWCxZQUFZLEVBQXZDLENBQUQ7QUFBNkMsc0JBQWVpQjtBQUE1RCxLQUFWO0FBQ0g7O0FBRUQsU0FBT2xCLGlEQUFLLENBQUM7QUFDWGUsSUFBQUEsTUFBTSxFQUFFQSxNQURHO0FBRVhDLElBQUFBLEdBQUcsRUFBRUEsR0FGTTtBQUdYSixJQUFBQSxPQUFPLEVBQUVBLE9BSEU7QUFJWEssSUFBQUEsSUFBSSxFQUFFQTtBQUpLLEdBQUQsQ0FBWjtBQUtIO0FBQUE7QUFFTSxTQUFlRSxNQUF0QjtBQUFBO0FBQUE7OzttVUFBTyxpQkFBdUJILEdBQXZCLEVBQTRCQyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xqQixZQUFBQSxrREFBQSxDQUFXLDREQUEwRGdCLEdBQXJFLEVBQTBFQyxJQUExRSxFQUNLRyxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDSixJQUFyQjtBQUNBSyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUSxDQUFDQyxNQUFyQjtBQUNELGFBSkwsV0FLVyxVQUFBQyxLQUFLLEVBQUk7QUFDZEosY0FBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWMsc0NBQWQsRUFBc0RBLEtBQXREO0FBQ0QsYUFQTDs7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL2F4aW9zX2hlbHBlci5qcz8xZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZXhwb3J0IGNvbnN0IGdldEF1dGhUb2tlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoX3Rva2VuJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QXV0aEhlYWRlciA9ICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aF90b2tlblwiLCB0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfdG9rZW5cIik7XG4gICAgfVxufTtcbmNvbnN0IGEgPSBcImh0dHBzOi8vY2xvdWQtcHJvZHVjdGlvbi0yODMxLnVwLnJhaWx3YXkuYXBwL3RvbW9iaWxpbmFcIlxuLy8gaHR0cDovLzE3Mi4xMC4wLjMzOjgwODBcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBhO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuZXhwb3J0ICBmdW5jdGlvbiByZXF1ZXN0IChtZXRob2QsIHVybCwgZGF0YSxjb250ZW50PSdhcHBsaWNhdGlvbi9qc29uJyl7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBpZiAoZ2V0QXV0aFRva2VuKCkgIT09IG51bGwgJiYgZ2V0QXV0aFRva2VuKCkgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGhlYWRlcnMgPSB7J0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0QXV0aFRva2VuKCl9YCwnY29udGVudC10eXBlJzpjb250ZW50fTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICBkYXRhOiBkYXRhfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkICh1cmwsIGRhdGEpe1xuICBheGlvcy5wb3N0KCdodHRwczovL2Nsb3VkLXByb2R1Y3Rpb24tMjgzMS51cC5yYWlsd2F5LmFwcC90b21vYmlsaW5hJyt1cmwsIGRhdGEpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS52YWx1ZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaSBkZSBsYSBwaG90bzonLCBlcnJvcik7XG4gICAgICB9KTtcbn07XG5cbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldEF1dGhUb2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRBdXRoSGVhZGVyIiwidG9rZW4iLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImEiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwicG9zdCIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29udGVudCIsInVwbG9hZCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsInZhbHVlcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/axios_helper.js\n");

/***/ })

});