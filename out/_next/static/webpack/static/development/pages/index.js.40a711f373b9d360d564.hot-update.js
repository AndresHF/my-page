webpackHotUpdate("static\\development\\pages\\index.js",{

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
      this.rainSpeed = isMobile ? getRandomNumber(80, 50) : getRandomNumber(0.2, 0.05);
    }
  }, {
    key: "update",
    value: function update(p5) {
      var _this = this;

      var changeSymbol = Math.random() > 0.98; //for (let i = this.tail.length - 1; i >= 0; i--) {

      var _loop = function _loop(i) {
        var calculatedY = _this.position.y - Y_OFFSET * i - 20;
        if (p5.frameCount % 2 == 0) _this.tail[i].shadeOffset -= getRandomNumber(10, 4);

        if (changeSymbol) {
          setTimeout(function () {
            _this.tail.reverse()[i].shouldGlow = true;
            _this.tail.reverse()[i].symbol = getRandomSymbol();
            _this.tail.reverse()[i].shadeOffset = getRandomNumber(350, 100);
            _this.tail.reverse()[i].changeOffset = Math.random() * 8;
          }, i * _this.rainSpeed); //6000 - i * this.rainSpeed);
        }

        if (_this.tail[i].shouldGlow) {
          p5.strokeWeight(3);
          p5.stroke(255, 100);
          p5.fill(255, 100);
          _this.tail[i].shouldGlow = false;
        } else {
          p5.strokeWeight(0.2);
          p5.stroke(120, 255, 120, _this.tail[i].shadeOffset);
          p5.fill(80, 255, 80, _this.tail[i].shadeOffset);
        }

        if (Math.random() > _this.tail[i].changeOffset) {
          _this.tail[i].symbol = getRandomSymbol();
        }

        p5.text(_this.tail[i].symbol, _this.position.x, calculatedY);
      };

      for (var i = 0; i < this.tail.length; i++) {
        _loop(i);
      }
    }
  }]);

  return Symbol;
}();

/* harmony default export */ __webpack_exports__["default"] = (Symbol);

/***/ })

})
//# sourceMappingURL=index.js.40a711f373b9d360d564.hot-update.js.map