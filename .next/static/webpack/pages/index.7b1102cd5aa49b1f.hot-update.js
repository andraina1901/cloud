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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListingSug\": function() { return /* binding */ ListingSug; }\n/* harmony export */ });\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card_Suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/Suggestion */ \"./src/components/mine/card/Suggestion.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_annonce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/annonce */ \"./src/data/annonce.js\");\n/* harmony import */ var _helpers_fonction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/fonction */ \"./src/helpers/fonction.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"D:\\\\ITU_L3\\\\cloud-Rojo\\\\frontoffice\\\\cloud\\\\src\\\\components\\\\mine\\\\ListingSug.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nfunction ListingSug() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      valiny = _useState[0],\n      setValiny = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    (0,_data_annonce__WEBPACK_IMPORTED_MODULE_6__.getAnnonce)().then(function (response) {\n      setValiny(response.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n    className: \"listing-grid-area pt-75 pb-110\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"col-lg-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            className: \"section-title text-center mb-60 wow fadeInUp\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h2\", {\n              children: \"Suggestions\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread(_objectSpread({}, _sliderProps__WEBPACK_IMPORTED_MODULE_2__.ListingSliderOne), {}, {\n        className: \"listing-slider-one wow fadeInDown\",\n        children: valiny.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_card_Suggestion__WEBPACK_IMPORTED_MODULE_4__.Suggestion, {\n            src: item.photo,\n            user: item.user.user,\n            duree: (0,_helpers_fonction__WEBPACK_IMPORTED_MODULE_7__.getDuree)(item.dateheure),\n            model: item.titre,\n            prix: item.prix,\n            contact: item.user.email\n          }, item.idAnnonce, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 17\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ListingSug, \"fd8qGsitWKpPzamxOkXxG1NiERg=\");\n\n_c = ListingSug;\n\nvar _c;\n\n$RefreshReg$(_c, \"ListingSug\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9taW5lL0xpc3RpbmdTdWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR08sU0FBU1EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUUzQixrQkFBMkJGLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9HLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBTixFQUFBQSxnREFBUyxDQUFFLFlBQU07QUFDZkMsSUFBQUEseURBQVUsR0FBR00sSUFBYixDQUFrQixVQUFDQyxRQUFELEVBQVk7QUFDNUJGLE1BQUFBLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDQyxJQUFWLENBQVQ7QUFDRCxLQUZELFdBRVMsVUFBQUMsS0FBSyxFQUFHO0FBQ2ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsS0FKRDtBQUtELEdBTlEsRUFNUCxFQU5PLENBQVQ7QUFRRSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxnQ0FBbkI7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsOENBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUsOERBQUMsbURBQUQsa0NBQ01iLDBEQUROO0FBRUUsaUJBQVMsRUFBQyxtQ0FGWjtBQUFBLGtCQUlHUSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsOEJBQ1IsOERBQUMsd0RBQUQ7QUFFRSxlQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FGWjtBQUdFLGdCQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxDQUFVQSxJQUhsQjtBQUlFLGlCQUFLLEVBQUViLDJEQUFRLENBQUNXLElBQUksQ0FBQ0csU0FBTixDQUpqQjtBQUtFLGlCQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FMZDtBQU1FLGdCQUFJLEVBQUVKLElBQUksQ0FBQ0ssSUFOYjtBQU9FLG1CQUFPLEVBQUVMLElBQUksQ0FBQ0UsSUFBTCxDQUFVSTtBQVByQixhQUNPTixJQUFJLENBQUNPLFNBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVg7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOEJIOztHQXpDZWpCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9taW5lL0xpc3RpbmdTdWcuanM/MzVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyBMaXN0aW5nU2xpZGVyT25lIH0gZnJvbSBcIi4uLy4uL3NsaWRlclByb3BzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3VnZ2VzdGlvbiB9IGZyb20gXCIuL2NhcmQvU3VnZ2VzdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QW5ub25jZSB9IGZyb20gXCIuLi8uLi9kYXRhL2Fubm9uY2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0RHVyZWUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mb25jdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0aW5nU3VnKCkge1xyXG5cclxuICBjb25zdCBbdmFsaW55LHNldFZhbGlueV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBnZXRBbm5vbmNlKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgIHNldFZhbGlueShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KVxyXG4gIH0sW10pO1xyXG4gIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxpc3RpbmctZ3JpZC1hcmVhIHB0LTc1IHBiLTExMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgdGV4dC1jZW50ZXIgbWItNjAgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+U3VnZ2VzdGlvbnM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICB7Li4uTGlzdGluZ1NsaWRlck9uZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdGluZy1zbGlkZXItb25lIHdvdyBmYWRlSW5Eb3duXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbGlueS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxTdWdnZXN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWRBbm5vbmNlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgIHVzZXI9e2l0ZW0udXNlci51c2VyfVxyXG4gICAgICAgICAgICAgICAgICBkdXJlZT17Z2V0RHVyZWUoaXRlbS5kYXRlaGV1cmUpfVxyXG4gICAgICAgICAgICAgICAgICBtb2RlbD17aXRlbS50aXRyZX1cclxuICAgICAgICAgICAgICAgICAgcHJpeD17aXRlbS5wcml4fVxyXG4gICAgICAgICAgICAgICAgICBjb250YWN0PXtpdGVtLnVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSkgfSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJTbGlkZXIiLCJMaXN0aW5nU2xpZGVyT25lIiwiTGluayIsIlN1Z2dlc3Rpb24iLCJ1c2VFZmZlY3QiLCJnZXRBbm5vbmNlIiwidXNlU3RhdGUiLCJnZXREdXJlZSIsIkxpc3RpbmdTdWciLCJ2YWxpbnkiLCJzZXRWYWxpbnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsInBob3RvIiwidXNlciIsImRhdGVoZXVyZSIsInRpdHJlIiwicHJpeCIsImVtYWlsIiwiaWRBbm5vbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mine/ListingSug.js\n");

/***/ })

});