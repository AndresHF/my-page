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
    p5.textSize(20); //p5.frameRate(100);

    var mobileOffset = window.innerWidth < 500 ? 0 : 20;

    for (var i = 0; i < window.innerWidth / 31; i++) {
      symbols[i] = new _symbol__WEBPACK_IMPORTED_MODULE_3__["default"](p5, mobileOffset === 0, mobileOffset + i * X_OFFSET);
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
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (MatrixRainContainer);

/***/ }),

/***/ "./src/components/sketchs/matrixRain/symbol.ts":
/*!*****************************************************!*\
  !*** ./src/components/sketchs/matrixRain/symbol.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var getRandomSymbol = function getRandomSymbol() {
  return String.fromCharCode(0x30a0 + Math.round(Math.random() * 90));
};

var getRandomNumber = function getRandomNumber(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return Math.floor(Math.random() * max) + min;
};

var Y_OFFSET = 21;

var Symbol = /*#__PURE__*/function () {
  function Symbol(p5, isMobile, positionX) {
    var isHead = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Symbol);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "symbol", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "tail", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "shouldGlow", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "shadeOffset", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rainSpeed", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "changeOffset", void 0);

    this.symbol = getRandomSymbol();
    this.initSymbol(p5, positionX, isMobile);
    this.shadeOffset = 0;

    if (isHead) {
      this.tail = new Array(Math.floor(p5.height / 22));
      this.shadeOffset = getRandomNumber(255, 120);

      for (var i = 0; i < this.tail.length; i++) {
        this.tail[i] = new Symbol(p5, isMobile, positionX, false);
        this.tail[i].changeOffset = Math.random() * 10;
      }
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Symbol, [{
    key: "initSymbol",
    value: function initSymbol(p5, positionX, isMobile) {
      this.position = p5.createVector(positionX, p5.height - Y_OFFSET - 20);
      this.shadeOffset = getRandomNumber(255, 100);
      this.rainSpeed = isMobile ? getRandomNumber(80, 50) : getRandomNumber(50, 20);
    }
  }, {
    key: "update",
    value: function update(p5) {
      var _this = this;

      var changeSymbol = Math.random() > 0.99;

      var _loop = function _loop(i) {
        var calculatedY = _this.position.y - Y_OFFSET * i - 20;
        if (p5.frameCount % 2 == 0) _this.tail[i].shadeOffset -= getRandomNumber(10, 4);

        if (changeSymbol) {
          setTimeout(function () {
            _this.tail[i].shouldGlow = true;
            _this.tail[i].symbol = getRandomSymbol();
            _this.tail[i].shadeOffset = getRandomNumber(350, 100);
            _this.tail[i].changeOffset = Math.random() * 8;
          }, 6000 - i * _this.rainSpeed);
        }

        if (_this.tail[i].shouldGlow) {
          p5.strokeWeight(2);
          p5.stroke(255, 100);
          p5.fill(255, 100);
          _this.tail[i].shouldGlow = false;
        } else {
          p5.strokeWeight(0.2);
          p5.stroke(80, 255, 80, _this.tail[i].shadeOffset);
          p5.fill(80, 255, 80, _this.tail[i].shadeOffset);
        }

        if (Math.random() > _this.tail[i].changeOffset) {
          _this.tail[i].symbol = getRandomSymbol();
        }

        p5.text(_this.tail[i].symbol, _this.position.x, calculatedY);
      };

      for (var i = this.tail.length - 1; i >= 0; i--) {
        _loop(i);
      }
    }
  }]);

  return Symbol;
}();

/* harmony default export */ __webpack_exports__["default"] = (Symbol);

/***/ })

})
//# sourceMappingURL=index.js.e2c05842091921689c20.hot-update.js.map