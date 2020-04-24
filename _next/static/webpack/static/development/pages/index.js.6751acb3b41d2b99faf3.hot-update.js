webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/cards/SkillCard.tsx":
/*!********************************************!*\
  !*** ./src/components/cards/SkillCard.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\cards\\SkillCard.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SkillCard = function SkillCard(_ref) {
  var config = _ref.config;
  var picture = config.picture,
      skills = config.skills;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      flipped = _useState[0],
      setFlipped = _useState[1];

  return __jsx("div", {
    className: "card__skill",
    onClick: function onClick() {
      return setFlipped(!flipped);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card__skill--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "front".concat(flipped && "--flipped" || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: picture,
    className: "card__skill--picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "back",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Back")));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillCard);

/***/ })

})
//# sourceMappingURL=index.js.6751acb3b41d2b99faf3.hot-update.js.map