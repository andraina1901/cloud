"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listing-grid",{

/***/ "./src/helpers/axios_helper.js":
/*!*************************************!*\
  !*** ./src/helpers/axios_helper.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAuthToken\": function() { return /* binding */ getAuthToken; },\n/* harmony export */   \"setAuthHeader\": function() { return /* binding */ setAuthHeader; },\n/* harmony export */   \"request\": function() { return /* binding */ request; },\n/* harmony export */   \"upload\": function() { return /* binding */ upload; }\n/* harmony export */ });\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar getAuthToken = function getAuthToken() {\n  return window.localStorage.getItem('auth_token');\n};\nvar setAuthHeader = function setAuthHeader(token) {\n  if (token !== null) {\n    window.localStorage.setItem(\"auth_token\", token);\n  } else {\n    window.localStorage.removeItem(\"auth_token\");\n  }\n}; // https://testupload-production-2380.up.railway.app\n// https://cloud-production-2831.up.railway.app/tomobilina\n// http://172.10.0.33:8080\n\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = 'http://192.168.88.69:8080/tomobilina';\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.post[\"Content-Type\"] = 'application/json';\nfunction request(method, url, data) {\n  var headers = {};\n\n  if (getAuthToken() !== null && getAuthToken() !== \"null\") {\n    headers = {\n      'Authorization': \"Bearer \".concat(getAuthToken())\n    };\n  }\n\n  return (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    method: method,\n    url: url,\n    headers: headers,\n    data: data\n  });\n}\n;\nfunction upload(_x, _x2) {\n  return _upload.apply(this, arguments);\n}\n\nfunction _upload() {\n  _upload = (0,D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, data) {\n    return D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('https://cloud-production-2831.up.railway.app/tomobilina' + url, data).then(function (response) {\n              console.log(response.data);\n              console.log(formData.values);\n            })[\"catch\"](function (error) {\n              console.error('Erreur lors de l\\'envoi de la photo:', error);\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _upload.apply(this, arguments);\n}\n\n;\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9heGlvc19oZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixTQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFlBQTVCLENBQVA7QUFDSCxDQUZNO0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDcEMsTUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJKLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkksT0FBcEIsQ0FBNEIsWUFBNUIsRUFBMENELEtBQTFDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xKLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkssVUFBcEIsQ0FBK0IsWUFBL0I7QUFDRDtBQUNKLENBTk0sRUFPUDtBQUNBO0FBQ0E7O0FBQ0FSLDhEQUFBLEdBQXlCLHNDQUF6QjtBQUNBQSxtRkFBQSxHQUE4QyxrQkFBOUM7QUFFUSxTQUFTYSxPQUFULENBQWtCQyxNQUFsQixFQUEwQkMsR0FBMUIsRUFBK0JDLElBQS9CLEVBQW9DO0FBQ3hDLE1BQUlMLE9BQU8sR0FBRyxFQUFkOztBQUNBLE1BQUlWLFlBQVksT0FBTyxJQUFuQixJQUEyQkEsWUFBWSxPQUFPLE1BQWxELEVBQTBEO0FBQ3REVSxJQUFBQSxPQUFPLEdBQUc7QUFBQyx3Q0FBMkJWLFlBQVksRUFBdkM7QUFBRCxLQUFWO0FBQ0g7O0FBRUQsU0FBT0QsaURBQUssQ0FBQztBQUNYYyxJQUFBQSxNQUFNLEVBQUVBLE1BREc7QUFFWEMsSUFBQUEsR0FBRyxFQUFFQSxHQUZNO0FBR1hKLElBQUFBLE9BQU8sRUFBRUEsT0FIRTtBQUlYSyxJQUFBQSxJQUFJLEVBQUVBO0FBSkssR0FBRCxDQUFaO0FBS0g7QUFBQTtBQUVNLFNBQWVDLE1BQXRCO0FBQUE7QUFBQTs7O21VQUFPLGlCQUF1QkYsR0FBdkIsRUFBNEJDLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTGhCLFlBQUFBLGtEQUFBLENBQVcsNERBQTBEZSxHQUFyRSxFQUEwRUMsSUFBMUUsRUFDS0UsSUFETCxDQUNVLFVBQUFDLFFBQVEsRUFBSTtBQUNoQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0gsSUFBckI7QUFDQUksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVEsQ0FBQ0MsTUFBckI7QUFDRCxhQUpMLFdBS1csVUFBQUMsS0FBSyxFQUFJO0FBQ2RKLGNBQUFBLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLHNDQUFkLEVBQXNEQSxLQUF0RDtBQUNELGFBUEw7O0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFTTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9heGlvc19oZWxwZXIuanM/MWQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRBdXRoVG9rZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aF90b2tlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEF1dGhIZWFkZXIgPSAodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhfdG9rZW5cIiwgdG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoX3Rva2VuXCIpO1xuICAgIH1cbn07XG4vLyBodHRwczovL3Rlc3R1cGxvYWQtcHJvZHVjdGlvbi0yMzgwLnVwLnJhaWx3YXkuYXBwXG4vLyBodHRwczovL2Nsb3VkLXByb2R1Y3Rpb24tMjgzMS51cC5yYWlsd2F5LmFwcC90b21vYmlsaW5hXG4vLyBodHRwOi8vMTcyLjEwLjAuMzM6ODA4MFxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vMTkyLjE2OC44OC42OTo4MDgwL3RvbW9iaWxpbmEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuZXhwb3J0ICBmdW5jdGlvbiByZXF1ZXN0IChtZXRob2QsIHVybCwgZGF0YSl7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBpZiAoZ2V0QXV0aFRva2VuKCkgIT09IG51bGwgJiYgZ2V0QXV0aFRva2VuKCkgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGhlYWRlcnMgPSB7J0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0QXV0aFRva2VuKCl9YH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgZGF0YTogZGF0YX0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZCAodXJsLCBkYXRhKXtcbiAgYXhpb3MucG9zdCgnaHR0cHM6Ly9jbG91ZC1wcm9kdWN0aW9uLTI4MzEudXAucmFpbHdheS5hcHAvdG9tb2JpbGluYScrdXJsLCBkYXRhKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEudmFsdWVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2kgZGUgbGEgcGhvdG86JywgZXJyb3IpO1xuICAgICAgfSk7XG59OyJdLCJuYW1lcyI6WyJheGlvcyIsImdldEF1dGhUb2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRBdXRoSGVhZGVyIiwidG9rZW4iLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJwb3N0IiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ1cGxvYWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZm9ybURhdGEiLCJ2YWx1ZXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/axios_helper.js\n");

/***/ })

});