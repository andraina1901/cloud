"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/helpers/fonction.js":
/*!*********************************!*\
  !*** ./src/helpers/fonction.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDuree\": function() { return /* binding */ getDuree; }\n/* harmony export */ });\nfunction getDuree(timestam) {\n  var dateact = new Date();\n  var timestamp = dateact.getTime() - timestam;\n  var minute = timestamp / (1000 * 60);\n  var soratra = \"\";\n\n  if (minute < 60) {\n    return soratra + parseInt(minute) + \" min\";\n  }\n\n  var heure = minute / 60;\n\n  if (heure < 24) {\n    return soratra + parseInt(heure) + \" h\";\n  }\n\n  var jours = heure / 24;\n\n  if (jours < 7) {\n    return soratra + parseInt(jours) + \" j\";\n  }\n\n  var semaine = jours / 7;\n\n  if (jours < 30) {\n    return soratra + parseInt(semaine) + \" sem\";\n  }\n\n  var mois = jours / 30;\n\n  if (jours < 365) {\n    return soratra + parseInt(mois) + \" mois\";\n  }\n\n  var annee = jours / 365;\n  return annee + \" ans\";\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9mb25jdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsUUFBVCxDQUFrQkMsUUFBbEIsRUFBMkI7QUFFOUIsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBaEI7QUFFQSxNQUFNQyxTQUFTLEdBQUlGLE9BQU8sQ0FBQ0csT0FBUixLQUFvQkosUUFBdkM7QUFDQSxNQUFNSyxNQUFNLEdBQUdGLFNBQVMsSUFBRSxPQUFLLEVBQVAsQ0FBeEI7QUFDQSxNQUFNRyxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsTUFBR0QsTUFBTSxHQUFDLEVBQVYsRUFBYTtBQUNULFdBQU9DLE9BQU8sR0FBR0MsUUFBUSxDQUFFRixNQUFGLENBQWxCLEdBQThCLE1BQXJDO0FBQ0g7O0FBQ0QsTUFBTUcsS0FBSyxHQUFHSCxNQUFNLEdBQUMsRUFBckI7O0FBQ0EsTUFBR0csS0FBSyxHQUFDLEVBQVQsRUFBWTtBQUNSLFdBQU9GLE9BQU8sR0FBR0MsUUFBUSxDQUFFQyxLQUFGLENBQWxCLEdBQTZCLElBQXBDO0FBQ0g7O0FBQ0QsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLEdBQUMsRUFBcEI7O0FBQ0EsTUFBR0MsS0FBSyxHQUFDLENBQVQsRUFBVztBQUNQLFdBQU9ILE9BQU8sR0FBR0MsUUFBUSxDQUFFRSxLQUFGLENBQWxCLEdBQTZCLElBQXBDO0FBQ0g7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLEdBQUMsQ0FBdEI7O0FBQ0EsTUFBSUEsS0FBSyxHQUFDLEVBQVYsRUFBYztBQUNWLFdBQU9ILE9BQU8sR0FBR0MsUUFBUSxDQUFFRyxPQUFGLENBQWxCLEdBQStCLE1BQXRDO0FBQ0g7O0FBQ0QsTUFBTUMsSUFBSSxHQUFHRixLQUFLLEdBQUMsRUFBbkI7O0FBQ0EsTUFBSUEsS0FBSyxHQUFDLEdBQVYsRUFBZTtBQUNYLFdBQU9ILE9BQU8sR0FBR0MsUUFBUSxDQUFFSSxJQUFGLENBQWxCLEdBQTJCLE9BQWxDO0FBQ0g7O0FBQ0QsTUFBTUMsS0FBSyxHQUFHSCxLQUFLLEdBQUMsR0FBcEI7QUFDQSxTQUFPRyxLQUFLLEdBQUcsTUFBZjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL2ZvbmN0aW9uLmpzP2NlODEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldER1cmVlKHRpbWVzdGFtKXtcclxuXHJcbiAgICBjb25zdCBkYXRlYWN0ID0gbmV3IERhdGUoKVxyXG5cclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9ICBkYXRlYWN0LmdldFRpbWUoKSAtIHRpbWVzdGFtXHJcbiAgICBjb25zdCBtaW51dGUgPSB0aW1lc3RhbXAvKDEwMDAqNjApXHJcbiAgICBjb25zdCBzb3JhdHJhID0gXCJcIlxyXG4gICAgaWYobWludXRlPDYwKXtcclxuICAgICAgICByZXR1cm4gc29yYXRyYSArIHBhcnNlSW50KCBtaW51dGUpICsgXCIgbWluXCJcclxuICAgIH1cclxuICAgIGNvbnN0IGhldXJlID0gbWludXRlLzYwXHJcbiAgICBpZihoZXVyZTwyNCl7XHJcbiAgICAgICAgcmV0dXJuIHNvcmF0cmEgKyBwYXJzZUludCggaGV1cmUgKSsgXCIgaFwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBqb3VycyA9IGhldXJlLzI0XHJcbiAgICBpZihqb3Vyczw3KXtcclxuICAgICAgICByZXR1cm4gc29yYXRyYSArIHBhcnNlSW50KCBqb3VycyApKyBcIiBqXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbWFpbmUgPSBqb3Vycy83XHJcbiAgICBpZiAoam91cnM8MzApIHtcclxuICAgICAgICByZXR1cm4gc29yYXRyYSArIHBhcnNlSW50KCBzZW1haW5lKSArIFwiIHNlbVwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBtb2lzID0gam91cnMvMzBcclxuICAgIGlmIChqb3VyczwzNjUpIHtcclxuICAgICAgICByZXR1cm4gc29yYXRyYSArIHBhcnNlSW50KCBtb2lzKSsgXCIgbW9pc1wiXHJcbiAgICB9XHJcbiAgICBjb25zdCBhbm5lZSA9IGpvdXJzLzM2NTtcclxuICAgIHJldHVybiBhbm5lZSArIFwiIGFuc1wiXHJcbn0iXSwibmFtZXMiOlsiZ2V0RHVyZWUiLCJ0aW1lc3RhbSIsImRhdGVhY3QiLCJEYXRlIiwidGltZXN0YW1wIiwiZ2V0VGltZSIsIm1pbnV0ZSIsInNvcmF0cmEiLCJwYXJzZUludCIsImhldXJlIiwiam91cnMiLCJzZW1haW5lIiwibW9pcyIsImFubmVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/fonction.js\n");

/***/ })

});