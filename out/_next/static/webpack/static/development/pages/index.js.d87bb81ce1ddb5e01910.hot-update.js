webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/SketchPicker.tsx":
/*!*************************************************!*\
  !*** ./src/components/sketchs/SketchPicker.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/strings */ "./src/utils/strings.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\SketchPicker.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SKETCHES = ["Choose your background", "MATRIX", "PARTICLES"];

var SketchPicker = function SketchPicker(_ref) {
  var _onChange = _ref.onChange;
  return __jsx("div", {
    className: "sketch__picker--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("select", {
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    className: "sketch__picker",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, SKETCHES.map(function (sketch) {
    return __jsx("option", {
      key: sketch,
      value: sketch,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, Object(_utils_strings__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(sketch));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SketchPicker);

/***/ })

})
//# sourceMappingURL=index.js.d87bb81ce1ddb5e01910.hot-update.js.map