webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/particles/ParticlesControlPanel.tsx":
/*!********************************************************************!*\
  !*** ./src/components/sketchs/particles/ParticlesControlPanel.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./src/hooks/useResponsive.ts");
/* harmony import */ var _typography_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../typography/Text */ "./src/components/typography/Text.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\particles\\ParticlesControlPanel.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var getMaxAmount = function getMaxAmount(responsiveBreakpoint) {
  return responsiveBreakpoint && 20 || 80;
};

var textStyles = {
  color: "#b97318",
  cursor: "pointer",
  marginRight: "2rem",
  marginTop: "2rem"
};

var ParticlesControlPanel = function ParticlesControlPanel(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_2__["useParticles"])(),
      dispatch = _useParticles.dispatch,
      collision = _useParticles.collision,
      collider = _useParticles.collider,
      particlesAmount = _useParticles.particlesAmount;

  var _useResponsive = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useResponsive"])(),
      mdAndDown = _useResponsive.mdAndDown;

  var maxAmount = getMaxAmount(mdAndDown);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(3),
      val = _useState[0],
      setVal = _useState[1];

  return __jsx("div", {
    className: "controlPanel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: textStyles,
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLIDER",
        value: !collider
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "".concat(collider ? "Remove " : "Use", " collider")), __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: textStyles,
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLISION",
        value: !collision
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "".concat(collision ? "Disable " : "Enable", " collision")), __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: textStyles,
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 0
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Remove particles"), __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: textStyles,
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 6
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Reset"), __jsx("input", {
    type: "number",
    max: 100,
    placeholder: "N. particles (".concat(maxAmount, ")"),
    value: val,
    onChange: function onChange(e) {
      e.preventDefault();
      var val = parseInt(e.target.value);

      if (!isNaN(val)) {
        setVal(val); // dispatch({
        //   type: "SET_PARTICLES_AMOUNT",
        //   value: val > maxAmount ? maxAmount : val,
        // });
      }
    },
    onBlur: function onBlur(e) {
      e.preventDefault();

      if (!isNaN(val)) {
        dispatch({
          type: "SET_PARTICLES_AMOUNT",
          value: val > maxAmount ? maxAmount : val
        });
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesControlPanel);

/***/ })

})
//# sourceMappingURL=index.js.5f7caa52684da7380b15.hot-update.js.map