webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/UI/Header.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useParticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\UI\\Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Header = function Header(_ref) {
  var route = _ref.route;

  var _useParticles = Object(_hooks_useParticles__WEBPACK_IMPORTED_MODULE_1__["useParticles"])(),
      dispatch = _useParticles.dispatch,
      collision = _useParticles.collision,
      collider = _useParticles.collider;

  return __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
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
      lineNumber: 13,
      columnNumber: 9
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
      lineNumber: 18,
      columnNumber: 9
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
      lineNumber: 23,
      columnNumber: 9
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
      lineNumber: 28,
      columnNumber: 9
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
      lineNumber: 33,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.6154f5bb1499c2af34d1.hot-update.js.map