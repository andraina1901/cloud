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

/***/ "./src/components/mine/card/Suggestion.js":
/*!************************************************!*\
  !*** ./src/components/mine/card/Suggestion.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Suggestion\": function() { return /* binding */ Suggestion; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\ITU_L3\\\\cloud-Rojo\\\\frontoffice\\\\cloud\\\\src\\\\components\\\\mine\\\\card\\\\Suggestion.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Suggestion(_ref) {\n  _s();\n\n  var user = _ref.user,\n      duree = _ref.duree,\n      model = _ref.model,\n      prix = _ref.prix,\n      contact = _ref.contact;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('gray'),\n      headerColor = _useState[0],\n      setHeaderColor = _useState[1]; // État local pour la couleur du header\n\n\n  var handleClick = function handleClick() {\n    setHeaderColor('red');\n    console.log(\"okkkkkkkkk\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"listing-item listing-grid-item-two\",\n    style: {\n      cursor: 'pointer'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: \"product-details\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"listing-thumbnail\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"assets/images/listing/mavoiture.jpg\",\n          alt: \"Listing Image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"featured-btn\",\n          children: [\"il y a 2\", duree]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"ratings ratings-two\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            className: \"star\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n              className: \"ti-user\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            className: \"star\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            className: \"star\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            className: \"star\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n                href: \"#\",\n                children: user\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"listing-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n          children: model\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: [\"Prix: \", prix]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"phone-meta\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n          className: \"ti-tablet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n          href: \"tel:+982653652-05\",\n          children: contact\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"listing-meta\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n                className: \"ti-shopping-cart\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 21\n              }, this), \"Ajouter\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n                className: \"ti-heart\",\n                onClick: handleClick,\n                style: {\n                  color: headerColor,\n                  backgroundColor: headerColor\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 19\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n                href: \"#\",\n                children: \"Favoris\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Suggestion, \"9dFlLiqJY4nyUELkvmjdfCUfd/M=\");\n\n_c = Suggestion;\n\nvar _c;\n\n$RefreshReg$(_c, \"Suggestion\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9taW5lL2NhcmQvU3VnZ2VzdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHTyxTQUFTRSxVQUFULE9BQW9EO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsTUFBVEMsT0FBUyxRQUFUQSxPQUFTOztBQUV2RCxrQkFBc0NOLCtDQUFRLENBQUMsTUFBRCxDQUE5QztBQUFBLE1BQU9PLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEIsZ0JBRnVELENBRUM7OztBQUV4RCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRCxJQUFBQSxjQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDSCxHQUhEOztBQUlBLHNCQUVJO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQW9ELFNBQUssRUFBRTtBQUFDQyxNQUFBQSxNQUFNLEVBQUM7QUFBUixLQUEzRDtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxtQkFBVjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNFO0FBRUUsYUFBRyxFQUFDLHFDQUZOO0FBR0UsYUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBLGlDQUF3Q1QsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBUUU7QUFBSSxtQkFBUyxFQUFDLHFCQUFkO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLE1BQWQ7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUkscUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBSSxxQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FO0FBQUEsbUNBQ0U7QUFBQSxxQ0FDRTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFBLDBCQUFhRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBeUJBO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLE9BQWQ7QUFBQSwrQkFFSTtBQUFBLG9CQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLDZCQUFVQyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBTSxpQkFBUyxFQUFDLFlBQWhCO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsY0FBSSxFQUFDLG1CQUFSO0FBQUEsb0JBQTZCQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDSTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBd0IsdUJBQU8sRUFBRUcsV0FBakM7QUFBOEMscUJBQUssRUFBRTtBQUFDSSxrQkFBQUEsS0FBSyxFQUFFTixXQUFSO0FBQXFCTyxrQkFBQUEsZUFBZSxFQUFDUDtBQUFyQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBRyxvQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBeURIOztHQWpFZU47O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21pbmUvY2FyZC9TdWdnZXN0aW9uLmpzPzBjNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWdnZXN0aW9uKHt1c2VyLGR1cmVlLG1vZGVsLHByaXgsY29udGFjdH0pe1xyXG4gICBcclxuICAgIGNvbnN0IFtoZWFkZXJDb2xvciwgc2V0SGVhZGVyQ29sb3JdID0gdXNlU3RhdGUoJ2dyYXknKTsgLy8gw4l0YXQgbG9jYWwgcG91ciBsYSBjb3VsZXVyIGR1IGhlYWRlclxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhlYWRlckNvbG9yKCdyZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9ra2tra2tra2tcIilcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctaXRlbSBsaXN0aW5nLWdyaWQtaXRlbS10d29cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cclxuICAgICAgICA8TGluayBocmVmPXtgcHJvZHVjdC1kZXRhaWxzYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9saXN0aW5nL21hdm9pdHVyZS5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJMaXN0aW5nIEltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZWQtYnRuXCI+aWwgeSBhIDJ7ZHVyZWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJhdGluZ3MgcmF0aW5ncy10d29cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3RhclwiPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXJcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnt1c2VyfTwvYT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2xpc3RpbmctZGV0YWlscy0xXCI+ICovfVxyXG4gICAgICAgICAgICAgIDxhPnttb2RlbH08L2E+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxwPlByaXg6IHtwcml4fTwvcD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBob25lLW1ldGFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktdGFibGV0XCI+PC9pPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOis5ODI2NTM2NTItMDVcIj57Y29udGFjdH08L2E+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctbWV0YVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktc2hvcHBpbmctY2FydFwiPjwvaT5Bam91dGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1oZWFydFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17e2NvbG9yOiBoZWFkZXJDb2xvciwgYmFja2dyb3VuZENvbG9yOmhlYWRlckNvbG9yfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZhdm9yaXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIlN1Z2dlc3Rpb24iLCJ1c2VyIiwiZHVyZWUiLCJtb2RlbCIsInByaXgiLCJjb250YWN0IiwiaGVhZGVyQ29sb3IiLCJzZXRIZWFkZXJDb2xvciIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImN1cnNvciIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mine/card/Suggestion.js\n");

/***/ })

});