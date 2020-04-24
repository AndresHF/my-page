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
      dispatch = _useParticles.dispatch;

  return __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 0
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
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
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Reset"), __jsx("input", {
    type: "number",
    max: 100,
    onChange: function onChange(e) {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: parseInt(e.target.value)
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.9342fe9ba78441ec06af.hot-update.js.map