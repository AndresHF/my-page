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
  function Symbol(p5, positionX) {
    var isHead = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Symbol);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "velocity", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "symbol", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "tail", void 0);

    this.symbol = getRandomSymbol();
    this.initSymbol(p5, positionX);

    if (isHead) {
      this.velocity = p5.createVector(0, Math.random() * 4 + 4);
      this.tail = new Array(getRandomNumber(p5.width / 100) + 5);

      for (var i = 0; i < this.tail.length; i++) {
        this.tail[i] = new Symbol(p5, positionX, false);
      }
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Symbol, [{
    key: "initSymbol",
    value: function initSymbol(p5, positionX) {
      this.position = p5.createVector(positionX, -Math.random() * 500);
    }
  }, {
    key: "update",
    value: function update(p5) {
      var isHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // if (Math.random() > 0.95) {
      //   this.symbol = getRandomSymbol();
      // }
      if (isHead) {
        if (Math.random() > 0.95) {
          this.symbol = getRandomSymbol();
        }

        this.position.add(this.velocity);

        if (this.position.y > p5.height + this.tail.length * Y_OFFSET) {
          this.initSymbol(p5, this.position.x);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(p5) {
      p5.fill(180, 255, 180);
      p5.text(this.symbol, this.position.x, this.position.y);

      if (this.tail) {
        for (var i = 0; i < this.tail.length; i++) {
          var calculatedY = this.position.y - Y_OFFSET * i - 20;
          var alpha = 255 - 5 * i;

          if (Math.random() > 0.95) {
            this.tail[i].symbol = getRandomSymbol();
            p5.fill(180, 255, 180);
          } else {
            if (i < 2) {
              p5.fill(120, 255, 120, alpha * 3);
            } else {
              p5.fill(80, 255, 80, alpha);
            }
          }

          this.tail[i].update(p5, false);
          p5.text(this.tail[i].symbol, this.position.x, calculatedY);
        }
      }
    }
  }]);

  return Symbol;
}();

/* harmony default export */ __webpack_exports__["default"] = (Symbol);

/***/ })

})
//# sourceMappingURL=index.js.7b2633dc5ce7a34ae2fb.hot-update.js.map