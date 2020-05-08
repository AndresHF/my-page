webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/matrixRain/MatrixRainContainer.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/sketchs/matrixRain/MatrixRainContainer.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol */ "./src/components/sketchs/matrixRain/symbol.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\matrixRain\\MatrixRainContainer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var X_OFFSET = 30;

var MatrixRainContainer = function MatrixRainContainer(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var symbols = [];

  var setup = function setup(p5, canvasParentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight + 50).parent(canvasParentRef);
    p5.strokeWeight(2);
    p5.textSize(20);
    p5.frameRate(15);
    var mobileOffset = window.innerWidth < 500 ? 0 : 20;

    for (var i = 0; i < window.innerWidth / 31; i++) {
      symbols[i] = new _symbol__WEBPACK_IMPORTED_MODULE_3__["default"](p5, mobileOffset + i * X_OFFSET);
    }
  };

  var draw = function draw(p5) {
    p5.clear();
    p5.background(0, 0, 0);
    symbols.forEach(function (s) {
      s.update(p5);
    });
  };

  if (false) {}
  var Sketch = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7));
  });
  return __jsx("div", {
    className: "sketch__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (MatrixRainContainer);

/***/ })

})
//# sourceMappingURL=index.js.1a027c750f2378f05044.hot-update.js.map