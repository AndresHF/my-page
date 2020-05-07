webpackHotUpdate("static\\development\\pages\\index.js",{

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mdAndDown && __jsx(_svgComponents_MenuIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "".concat(open && "rotate" || "rotate--reverse"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), open && __jsx("div", {
    className: "menu__wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }
  }, menu));
};

/* harmony default export */ __webpack_exports__["default"] = (CollapsableMenu);

/***/ })

})
//# sourceMappingURL=index.js.2e20b2e4782e5e5ed938.hot-update.js.map