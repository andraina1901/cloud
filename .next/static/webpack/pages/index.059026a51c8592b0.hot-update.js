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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListingSug\": function() { return /* binding */ ListingSug; }\n/* harmony export */ });\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card_Suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/Suggestion */ \"./src/components/mine/card/Suggestion.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_annonce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/annonce */ \"./src/data/annonce.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"D:\\\\ITU_L3\\\\cloud-Rojo\\\\frontoffice\\\\cloud\\\\src\\\\components\\\\mine\\\\ListingSug.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction ListingSug() {\n  _s();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    (0,_data_annonce__WEBPACK_IMPORTED_MODULE_6__.getAnnonce)().then(function (response) {\n      setCards(response.rows.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"section\", {\n    className: \"listing-grid-area pt-75 pb-110\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"col-lg-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"section-title text-center mb-60 wow fadeInUp\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n              children: \"Suggestions\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread(_objectSpread({}, _sliderProps__WEBPACK_IMPORTED_MODULE_2__.ListingSliderOne), {}, {\n        className: \"listing-slider-one wow fadeInDown\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_card_Suggestion__WEBPACK_IMPORTED_MODULE_4__.Suggestion, {\n          src: \"assets/images/listing/mavoiture.jpg\",\n          user: 'Tommy Leo',\n          duree: '2mois',\n          model: 'Peugeot 208',\n          prix: '20.000.000',\n          contact: '034 12 040 35'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_card_Suggestion__WEBPACK_IMPORTED_MODULE_4__.Suggestion, {\n          src: \"assets/images/listing/mavoiture2.jpg\",\n          user: 'Jeremia',\n          duree: '7jours',\n          model: 'Cabriolet',\n          prix: '20.000.000',\n          contact: '034 12 040 35'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_card_Suggestion__WEBPACK_IMPORTED_MODULE_4__.Suggestion, {\n          src: \"assets/images/listing/mavoiture3.jpg\",\n          user: 'Liantsoa',\n          duree: '3jours',\n          model: 'Peugeot 208',\n          prix: '20.000.000',\n          contact: '034 12 040 35'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ListingSug, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = ListingSug;\n\nvar _c;\n\n$RefreshReg$(_c, \"ListingSug\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9taW5lL0xpc3RpbmdTdWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdPLFNBQVNNLFVBQVQsR0FBc0I7QUFBQTs7QUFFM0JGLEVBQUFBLGdEQUFTLENBQUUsWUFBTTtBQUNmQyxJQUFBQSx5REFBVSxHQUFHRSxJQUFiLENBQWtCLFVBQUNDLFFBQUQsRUFBWTtBQUM1QkMsTUFBQUEsUUFBUSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsSUFBZixDQUFSO0FBQ0QsS0FGRCxXQUVTLFVBQUFDLEtBQUssRUFBRztBQUNmQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBSkQ7QUFLRCxHQU5RLEVBTVAsRUFOTyxDQUFUO0FBT0Usc0JBQ0k7QUFBUyxhQUFTLEVBQUMsZ0NBQW5CO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDhDQUFmO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFLDhEQUFDLG1EQUFELGtDQUNNWCwwREFETjtBQUVFLGlCQUFTLEVBQUMsbUNBRlo7QUFBQSxnQ0FJRSw4REFBQyx3REFBRDtBQUNFLGFBQUcsRUFBRSxxQ0FEUDtBQUVJLGNBQUksRUFBRSxXQUZWO0FBR0ksZUFBSyxFQUFFLE9BSFg7QUFJSSxlQUFLLEVBQUUsYUFKWDtBQUtJLGNBQUksRUFBRSxZQUxWO0FBTUksaUJBQU8sRUFBRTtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFZRSw4REFBQyx3REFBRDtBQUNBLGFBQUcsRUFBRSxzQ0FETDtBQUVJLGNBQUksRUFBRSxTQUZWO0FBR0ksZUFBSyxFQUFFLFFBSFg7QUFJSSxlQUFLLEVBQUUsV0FKWDtBQUtJLGNBQUksRUFBRSxZQUxWO0FBTUksaUJBQU8sRUFBRTtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsZUFvQkUsOERBQUMsd0RBQUQ7QUFDQSxhQUFHLEVBQUUsc0NBREw7QUFFSSxjQUFJLEVBQUUsVUFGVjtBQUdJLGVBQUssRUFBRSxRQUhYO0FBSUksZUFBSyxFQUFFLGFBSlg7QUFLSSxjQUFJLEVBQUUsWUFMVjtBQU1JLGlCQUFPLEVBQUU7QUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0g7O0dBbkRlSzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWluZS9MaXN0aW5nU3VnLmpzPzM1Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgTGlzdGluZ1NsaWRlck9uZSB9IGZyb20gXCIuLi8uLi9zbGlkZXJQcm9wc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFN1Z2dlc3Rpb24gfSBmcm9tIFwiLi9jYXJkL1N1Z2dlc3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEFubm9uY2UgfSBmcm9tIFwiLi4vLi4vZGF0YS9hbm5vbmNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3RpbmdTdWcoKSB7XHJcblxyXG4gIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgZ2V0QW5ub25jZSgpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICBzZXRDYXJkcyhyZXNwb25zZS5yb3dzLmRhdGEpO1xyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pXHJcbiAgfSxbXSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGlzdGluZy1ncmlkLWFyZWEgcHQtNzUgcGItMTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZSB0ZXh0LWNlbnRlciBtYi02MCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5TdWdnZXN0aW9uczwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgIHsuLi5MaXN0aW5nU2xpZGVyT25lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0aW5nLXNsaWRlci1vbmUgd293IGZhZGVJbkRvd25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3VnZ2VzdGlvbiBcclxuICAgICAgICAgICAgICBzcmM9e1wiYXNzZXRzL2ltYWdlcy9saXN0aW5nL21hdm9pdHVyZS5qcGdcIn1cclxuICAgICAgICAgICAgICAgIHVzZXI9eydUb21teSBMZW8nfVxyXG4gICAgICAgICAgICAgICAgZHVyZWU9eycybW9pcyd9XHJcbiAgICAgICAgICAgICAgICBtb2RlbD17J1BldWdlb3QgMjA4J31cclxuICAgICAgICAgICAgICAgIHByaXg9eycyMC4wMDAuMDAwJ31cclxuICAgICAgICAgICAgICAgIGNvbnRhY3Q9eycwMzQgMTIgMDQwIDM1J31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFN1Z2dlc3Rpb25cclxuICAgICAgICAgICAgc3JjPXtcImFzc2V0cy9pbWFnZXMvbGlzdGluZy9tYXZvaXR1cmUyLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgdXNlcj17J0plcmVtaWEnfVxyXG4gICAgICAgICAgICAgICAgZHVyZWU9eyc3am91cnMnfVxyXG4gICAgICAgICAgICAgICAgbW9kZWw9eydDYWJyaW9sZXQnfVxyXG4gICAgICAgICAgICAgICAgcHJpeD17JzIwLjAwMC4wMDAnfVxyXG4gICAgICAgICAgICAgICAgY29udGFjdD17JzAzNCAxMiAwNDAgMzUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U3VnZ2VzdGlvblxyXG4gICAgICAgICAgICBzcmM9e1wiYXNzZXRzL2ltYWdlcy9saXN0aW5nL21hdm9pdHVyZTMuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXsnTGlhbnRzb2EnfVxyXG4gICAgICAgICAgICAgICAgZHVyZWU9eyczam91cnMnfVxyXG4gICAgICAgICAgICAgICAgbW9kZWw9eydQZXVnZW90IDIwOCd9XHJcbiAgICAgICAgICAgICAgICBwcml4PXsnMjAuMDAwLjAwMCd9XHJcbiAgICAgICAgICAgICAgICBjb250YWN0PXsnMDM0IDEyIDA0MCAzNSd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJTbGlkZXIiLCJMaXN0aW5nU2xpZGVyT25lIiwiTGluayIsIlN1Z2dlc3Rpb24iLCJ1c2VFZmZlY3QiLCJnZXRBbm5vbmNlIiwiTGlzdGluZ1N1ZyIsInRoZW4iLCJyZXNwb25zZSIsInNldENhcmRzIiwicm93cyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/mine/ListingSug.js\n");

/***/ }),

/***/ "./src/data/annonce.js":
/*!*****************************!*\
  !*** ./src/data/annonce.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAnnonce\": function() { return /* binding */ getAnnonce; }\n/* harmony export */ });\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getAnnonce() {\n  return _getAnnonce.apply(this, arguments);\n}\n\nfunction _getAnnonce() {\n  _getAnnonce = (0,D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var result, valiny;\n    return D_ITU_L3_cloud_Rojo_frontoffice_cloud_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return request(\"GET\", \"/marques\", {});\n\n          case 3:\n            result = _context.sent;\n            valiny = result.data;\n            console.log(\"Formatted Data:\", valiny);\n            return _context.abrupt(\"return\", valiny);\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"API Error:\", _context.t0);\n            throw _context.t0;\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n  return _getAnnonce.apply(this, arguments);\n}\n\n;\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9hbm5vbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLFNBQWVBLFVBQXRCO0FBQUE7QUFBQTs7O3VVQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFb0JDLE9BQU8sQ0FBQyxLQUFELEVBQVEsVUFBUixFQUFvQixFQUFwQixDQUYzQjs7QUFBQTtBQUVLQyxZQUFBQSxNQUZMO0FBR0tDLFlBQUFBLE1BSEwsR0FHY0QsTUFBTSxDQUFDRSxJQUhyQjtBQUlEQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkgsTUFBL0I7QUFKQyw2Q0FLTUEsTUFMTjs7QUFBQTtBQUFBO0FBQUE7QUFPREUsWUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWMsWUFBZDtBQVBDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBVUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvYW5ub25jZS5qcz83YzE1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbm5vbmNlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChcIkdFVFwiLCBcIi9tYXJxdWVzXCIsIHt9KTtcclxuICAgICAgY29uc3QgdmFsaW55ID0gcmVzdWx0LmRhdGFcclxuICAgICAgY29uc29sZS5sb2coXCJGb3JtYXR0ZWQgRGF0YTpcIiwgdmFsaW55KTtcclxuICAgICAgcmV0dXJuIHZhbGlueTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7IFxyXG4gICAgfVxyXG4gIH07Il0sIm5hbWVzIjpbImdldEFubm9uY2UiLCJyZXF1ZXN0IiwicmVzdWx0IiwidmFsaW55IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/annonce.js\n");

/***/ })

});