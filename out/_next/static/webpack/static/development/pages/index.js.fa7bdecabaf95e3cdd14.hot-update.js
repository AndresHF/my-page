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


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\particles\\ParticlesControlPanel.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ParticlesControlPanel = function ParticlesControlPanel(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_2__["useParticles"])(),
      dispatch = _useParticles.dispatch,
      collision = _useParticles.collision,
      collider = _useParticles.collider;

  return __jsx("div", {
    className: "controlPanel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLIDER",
        value: !collider
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "".concat(collider ? "Remove " : "Use", " collider")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLISION",
        value: !collision
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "".concat(collision ? "Disable " : "Enable", " collision")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 0
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Remove particles"), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 6
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Reset"), __jsx("input", {
    type: "number",
    max: 100,
    placeholder: "N. particles (80)",
    onChange: function onChange(e) {
      var val = parseInt(e.target.value);

      if (!isNaN(val)) {
        dispatch({
          type: "SET_PARTICLES_AMOUNT",
          value: val > 80 ? 80 : val
        });
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesControlPanel);

/***/ })

})
//# sourceMappingURL=index.js.fa7bdecabaf95e3cdd14.hot-update.js.map