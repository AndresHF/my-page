webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

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
/* harmony import */ var _src_components_common_menu_CollapsableMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/common/menu/CollapsableMenu */ "./src/components/common/menu/CollapsableMenu.tsx");


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
          lineNumber: 22,
          columnNumber: 14
        }
      });

    case "PARTICLES":
      return __jsx(_src_components_sketchs_particles_ParticlesContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
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
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_src_components_UI_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "home",
    background: switchBackground(backgroundState),
    header: __jsx("div", {
      className: "header__container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, backgroundState === "PARTICLES" && __jsx(_src_components_common_menu_CollapsableMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      menu: __jsx(_src_components_sketchs_particles_ParticlesControlPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 38
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }), __jsx(_src_components_sketchs_SketchPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: function onChange(background) {
        return setBackgroundState(background);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/common/menu/CollapsableMenu.tsx":
/*!********************************************************!*\
  !*** ./src/components/common/menu/CollapsableMenu.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./src/hooks/useResponsive.ts");
/* harmony import */ var _svgComponents_MenuIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svgComponents/MenuIcon */ "./src/components/common/svgComponents/MenuIcon.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\common\\menu\\CollapsableMenu.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CollapsableMenu = function CollapsableMenu(_ref) {
  var menu = _ref.menu,
      style = _ref.style;

  var _useResponsive = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__["useResponsive"])(),
      mdAndDown = _useResponsive.mdAndDown;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!mdAndDown),
      open = _useState[0],
      setOpen = _useState[1];

  if (!mdAndDown) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 26
    }
  }, menu);
  return __jsx("div", {
    className: "menu__wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_svgComponents_MenuIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), open && menu);
};

/* harmony default export */ __webpack_exports__["default"] = (CollapsableMenu);

/***/ }),

/***/ "./src/components/common/svgComponents/MenuIcon.tsx":
/*!**********************************************************!*\
  !*** ./src/components/common/svgComponents/MenuIcon.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\common\\svgComponents\\MenuIcon.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var MenuIcon = function MenuIcon(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: "1em",
    viewBox: "0 0 512 512",
    width: "1em"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }), __jsx("path", {
    d: "M464.883 64.267H47.117C21.137 64.267 0 85.403 0 111.416c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 208.867H47.117C21.137 208.867 0 230.003 0 256.016c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 353.467H47.117C21.137 353.467 0 374.604 0 400.616c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuIcon);

/***/ })

})
//# sourceMappingURL=index.js.bc9e92067089e873d114.hot-update.js.map