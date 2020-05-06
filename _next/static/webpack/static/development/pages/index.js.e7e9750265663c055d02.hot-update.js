webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_UI_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/UI/Layout */ "./src/components/UI/Layout.tsx");
/* harmony import */ var _src_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _src_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_cards_cardCongif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/cards/cardCongif */ "./src/components/cards/cardCongif.ts");
/* harmony import */ var _src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/sketchs/matrixRain/MatrixRainContainer */ "./src/components/sketchs/matrixRain/MatrixRainContainer.tsx");
/* harmony import */ var _src_components_sketchs_particles_ParticlesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/sketchs/particles/ParticlesContainer */ "./src/components/sketchs/particles/ParticlesContainer.tsx");
/* harmony import */ var _src_components_sketchs_SketchPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/sketchs/SketchPicker */ "./src/components/sketchs/SketchPicker.tsx");
/* harmony import */ var _src_components_sketchs_particles_ParticlesControlPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/sketchs/particles/ParticlesControlPanel */ "./src/components/sketchs/particles/ParticlesControlPanel.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var SKILL_CARDS = [_src_components_cards_cardCongif__WEBPACK_IMPORTED_MODULE_4__["REACT_CARD_CONFIG"]];

var switchBackground = function switchBackground(state) {
  switch (state) {
    case "MATRIX":
      return __jsx(_src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 14
        }
      });

    case "PARTICLES":
      return __jsx(_src_components_sketchs_particles_ParticlesContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 14
        }
      });
  }
};

var Home = function Home(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("MATRIX"),
      backgroundState = _useState2[0],
      setBackgroundState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(false);
  }, []);
  if (loading) return null; //<ParticlesContainer />

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_src_components_UI_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "home",
    background: switchBackground(backgroundState),
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, backgroundState === "PARTICLES" && __jsx(_src_components_sketchs_particles_ParticlesControlPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }), __jsx(_src_components_sketchs_SketchPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: function onChange(background) {
        return setBackgroundState(background);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e7e9750265663c055d02.hot-update.js.map