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

/***/ "./src/components/mine/ListingSug.js":
/*!*******************************************!*\
  !*** ./src/components/mine/ListingSug.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListingSug\": function() { return /* binding */ ListingSug; }\n/* harmony export */ });\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card_Suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/Suggestion */ \"./src/components/mine/card/Suggestion.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_annonce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/annonce */ \"./src/data/annonce.js\");\n/* harmony import */ var _helpers_fonction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/fonction */ \"./src/helpers/fonction.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"D:\\\\ITU_L3\\\\cloud-Rojo\\\\frontoffice\\\\cloud\\\\src\\\\components\\\\mine\\\\ListingSug.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nfunction ListingSug() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      valiny = _useState[0],\n      setValiny = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    (0,_data_annonce__WEBPACK_IMPORTED_MODULE_6__.getAnnonce)().then(function (response) {\n      setValiny(response.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n    className: \"listing-grid-area pt-75 pb-110\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"col-lg-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            className: \"section-title text-center mb-60 wow fadeInUp\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h2\", {\n              children: \"Suggestions\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread(_objectSpread({}, _sliderProps__WEBPACK_IMPORTED_MODULE_2__.ListingSliderOne), {}, {\n        className: \"listing-slider-one wow fadeInDown\",\n        children: valiny.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_card_Suggestion__WEBPACK_IMPORTED_MODULE_4__.Suggestion, {\n            src: item.photo,\n            user: item.user.user,\n            duree: (0,_helpers_fonction__WEBPACK_IMPORTED_MODULE_7__.getDuree)(item.dateheure),\n            model: item.model.nomModel,\n            prix: '20.000.000',\n            contact: '034 12 040 35'\n          }, item.idAnnonce, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 17\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ListingSug, \"fd8qGsitWKpPzamxOkXxG1NiERg=\");\n\n_c = ListingSug;\n\nvar _c;\n\n$RefreshReg$(_c, \"ListingSug\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9taW5lL0xpc3RpbmdTdWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR08sU0FBU1EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUUzQixrQkFBMkJGLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9HLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBTixFQUFBQSxnREFBUyxDQUFFLFlBQU07QUFDZkMsSUFBQUEseURBQVUsR0FBR00sSUFBYixDQUFrQixVQUFDQyxRQUFELEVBQVk7QUFDNUJGLE1BQUFBLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDQyxJQUFWLENBQVQ7QUFDRCxLQUZELFdBRVMsVUFBQUMsS0FBSyxFQUFHO0FBQ2ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsS0FKRDtBQUtELEdBTlEsRUFNUCxFQU5PLENBQVQ7QUFRRSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxnQ0FBbkI7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsOENBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUsOERBQUMsbURBQUQsa0NBQ01iLDBEQUROO0FBRUUsaUJBQVMsRUFBQyxtQ0FGWjtBQUFBLGtCQUlHUSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsOEJBQ1IsOERBQUMsd0RBQUQ7QUFFRSxlQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FGWjtBQUdFLGdCQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxDQUFVQSxJQUhsQjtBQUlFLGlCQUFLLEVBQUViLDJEQUFRLENBQUNXLElBQUksQ0FBQ0csU0FBTixDQUpqQjtBQUtFLGlCQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxRQUxwQjtBQU1FLGdCQUFJLEVBQUUsWUFOUjtBQU9FLG1CQUFPLEVBQUU7QUFQWCxhQUNPTCxJQUFJLENBQUNNLFNBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVg7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOENIOztHQXpEZWhCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9taW5lL0xpc3RpbmdTdWcuanM/MzVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyBMaXN0aW5nU2xpZGVyT25lIH0gZnJvbSBcIi4uLy4uL3NsaWRlclByb3BzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3VnZ2VzdGlvbiB9IGZyb20gXCIuL2NhcmQvU3VnZ2VzdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QW5ub25jZSB9IGZyb20gXCIuLi8uLi9kYXRhL2Fubm9uY2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0RHVyZWUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mb25jdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0aW5nU3VnKCkge1xyXG5cclxuICBjb25zdCBbdmFsaW55LHNldFZhbGlueV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBnZXRBbm5vbmNlKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgIHNldFZhbGlueShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KVxyXG4gIH0sW10pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsaXN0aW5nLWdyaWQtYXJlYSBwdC03NSBwYi0xMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlIHRleHQtY2VudGVyIG1iLTYwIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlN1Z2dlc3Rpb25zPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgey4uLkxpc3RpbmdTbGlkZXJPbmV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Rpbmctc2xpZGVyLW9uZSB3b3cgZmFkZUluRG93blwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWxpbnkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3VnZ2VzdGlvbiBcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkQW5ub25jZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICB1c2VyPXtpdGVtLnVzZXIudXNlcn1cclxuICAgICAgICAgICAgICAgICAgZHVyZWU9e2dldER1cmVlKGl0ZW0uZGF0ZWhldXJlKX1cclxuICAgICAgICAgICAgICAgICAgbW9kZWw9e2l0ZW0ubW9kZWwubm9tTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgIHByaXg9eycyMC4wMDAuMDAwJ31cclxuICAgICAgICAgICAgICAgICAgY29udGFjdD17JzAzNCAxMiAwNDAgMzUnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogPFN1Z2dlc3Rpb25cclxuICAgICAgICAgICAgc3JjPXtcImFzc2V0cy9pbWFnZXMvbGlzdGluZy9tYXZvaXR1cmUyLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgdXNlcj17J0plcmVtaWEnfVxyXG4gICAgICAgICAgICAgICAgZHVyZWU9eyc3am91cnMnfVxyXG4gICAgICAgICAgICAgICAgbW9kZWw9eydDYWJyaW9sZXQnfVxyXG4gICAgICAgICAgICAgICAgcHJpeD17JzIwLjAwMC4wMDAnfVxyXG4gICAgICAgICAgICAgICAgY29udGFjdD17JzAzNCAxMiAwNDAgMzUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U3VnZ2VzdGlvblxyXG4gICAgICAgICAgICBzcmM9e1wiYXNzZXRzL2ltYWdlcy9saXN0aW5nL21hdm9pdHVyZTMuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXsnTGlhbnRzb2EnfVxyXG4gICAgICAgICAgICAgICAgZHVyZWU9eyczam91cnMnfVxyXG4gICAgICAgICAgICAgICAgbW9kZWw9eydQZXVnZW90IDIwOCd9XHJcbiAgICAgICAgICAgICAgICBwcml4PXsnMjAuMDAwLjAwMCd9XHJcbiAgICAgICAgICAgICAgICBjb250YWN0PXsnMDM0IDEyIDA0MCAzNSd9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiU2xpZGVyIiwiTGlzdGluZ1NsaWRlck9uZSIsIkxpbmsiLCJTdWdnZXN0aW9uIiwidXNlRWZmZWN0IiwiZ2V0QW5ub25jZSIsInVzZVN0YXRlIiwiZ2V0RHVyZWUiLCJMaXN0aW5nU3VnIiwidmFsaW55Iiwic2V0VmFsaW55IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJwaG90byIsInVzZXIiLCJkYXRlaGV1cmUiLCJtb2RlbCIsIm5vbU1vZGVsIiwiaWRBbm5vbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mine/ListingSug.js\n");

/***/ }),

/***/ "./src/helpers/fonction.js":
/*!*********************************!*\
  !*** ./src/helpers/fonction.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDuree\": function() { return /* binding */ getDuree; }\n/* harmony export */ });\nfunction getDuree(timestamp) {\n  var minute = timestamp / (1000 * 60);\n  var soratra = \" \";\n\n  if (minute < 60) {\n    return soratra + minute + \" min\";\n  }\n\n  var heure = minute / 60;\n\n  if (heure < 24) {\n    return soratra + heure + \"h\";\n  }\n\n  var jours = heure / 24;\n\n  if (jours < 7) {\n    return soratra + jours + \"j\";\n  }\n\n  var semaine = jours / 7;\n\n  if (semaine < 4) {\n    return soratra + semaine + \"sem\";\n  }\n\n  var mois = jours / 7;\n\n  if (semaine < 3) {\n    return soratra + semaine + \"sem\";\n  }\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9mb25jdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNEI7QUFDL0IsTUFBTUMsTUFBTSxHQUFHRCxTQUFTLElBQUUsT0FBSyxFQUFQLENBQXhCO0FBQ0EsTUFBTUUsT0FBTyxHQUFHLEdBQWhCOztBQUNBLE1BQUdELE1BQU0sR0FBQyxFQUFWLEVBQWE7QUFDVCxXQUFPQyxPQUFPLEdBQUdELE1BQVYsR0FBbUIsTUFBMUI7QUFDSDs7QUFDRCxNQUFNRSxLQUFLLEdBQUdGLE1BQU0sR0FBQyxFQUFyQjs7QUFDQSxNQUFHRSxLQUFLLEdBQUMsRUFBVCxFQUFZO0FBQ1IsV0FBT0QsT0FBTyxHQUFHQyxLQUFWLEdBQWtCLEdBQXpCO0FBQ0g7O0FBQ0QsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLEdBQUMsRUFBcEI7O0FBQ0EsTUFBR0MsS0FBSyxHQUFDLENBQVQsRUFBVztBQUNQLFdBQU9GLE9BQU8sR0FBR0UsS0FBVixHQUFrQixHQUF6QjtBQUNIOztBQUNELE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxHQUFDLENBQXRCOztBQUNBLE1BQUlDLE9BQU8sR0FBQyxDQUFaLEVBQWU7QUFDWCxXQUFPSCxPQUFPLEdBQUdHLE9BQVYsR0FBb0IsS0FBM0I7QUFDSDs7QUFDRCxNQUFNQyxJQUFJLEdBQUdGLEtBQUssR0FBQyxDQUFuQjs7QUFDQSxNQUFJQyxPQUFPLEdBQUMsQ0FBWixFQUFlO0FBQ1gsV0FBT0gsT0FBTyxHQUFHRyxPQUFWLEdBQW9CLEtBQTNCO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9mb25jdGlvbi5qcz9jZTgxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXREdXJlZSh0aW1lc3RhbXApe1xyXG4gICAgY29uc3QgbWludXRlID0gdGltZXN0YW1wLygxMDAwKjYwKVxyXG4gICAgY29uc3Qgc29yYXRyYSA9IFwiIFwiXHJcbiAgICBpZihtaW51dGU8NjApe1xyXG4gICAgICAgIHJldHVybiBzb3JhdHJhICsgbWludXRlICsgXCIgbWluXCJcclxuICAgIH1cclxuICAgIGNvbnN0IGhldXJlID0gbWludXRlLzYwXHJcbiAgICBpZihoZXVyZTwyNCl7XHJcbiAgICAgICAgcmV0dXJuIHNvcmF0cmEgKyBoZXVyZSArIFwiaFwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBqb3VycyA9IGhldXJlLzI0XHJcbiAgICBpZihqb3Vyczw3KXtcclxuICAgICAgICByZXR1cm4gc29yYXRyYSArIGpvdXJzICsgXCJqXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbWFpbmUgPSBqb3Vycy83XHJcbiAgICBpZiAoc2VtYWluZTw0KSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcmF0cmEgKyBzZW1haW5lICsgXCJzZW1cIlxyXG4gICAgfVxyXG4gICAgY29uc3QgbW9pcyA9IGpvdXJzLzdcclxuICAgIGlmIChzZW1haW5lPDMpIHtcclxuICAgICAgICByZXR1cm4gc29yYXRyYSArIHNlbWFpbmUgKyBcInNlbVwiXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0RHVyZWUiLCJ0aW1lc3RhbXAiLCJtaW51dGUiLCJzb3JhdHJhIiwiaGV1cmUiLCJqb3VycyIsInNlbWFpbmUiLCJtb2lzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/fonction.js\n");

/***/ })

});