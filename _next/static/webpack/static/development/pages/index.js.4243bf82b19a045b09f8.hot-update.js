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
  return String.fromCharCode(0x30A0 + Math.round(Math.random() * 96));
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "lastSymbol", void 0);

    this.initSymbol(p5, positionX);

    if (isHead) {
      this.tail = new Array(getRandomNumber(p5.width / 80));

      for (var i = 0; i < this.tail.length; i++) {
        this.tail[i] = new Symbol(p5, positionX, false);
      }

      console.log(this.tail.length);
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Symbol, [{
    key: "initSymbol",
    value: function initSymbol(p5, positionX) {
      this.symbol = getRandomSymbol();
      this.position = p5.createVector(positionX, -Math.random() * 500);
      this.velocity = p5.createVector(0, Math.random() * 4 + 4);
    }
  }, {
    key: "update",
    value: function update(p5) {
      var isHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (Math.random() > 0.9) {
        this.symbol = getRandomSymbol(); // this.tail.forEach((e, i) => setTimeout(() => {
        //     e.symbol = getRandomSymbol();
        // }, 75 * i))
      }

      if (isHead) {
        this.position.add(this.velocity);

        if (this.position.y > p5.height + this.tail.length * Y_OFFSET) {
          this.initSymbol(p5, this.position.x);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(p5) {
      p5.fill(200);
      p5.text(this.symbol, this.position.x, this.position.y);

      if (this.tail) {
        for (var i = 0; i < this.tail.length; i++) {
          this.tail[i].update(p5, false);
          var calculatedY = this.position.y - Y_OFFSET * i + 20;
          var alpha = 255 - 220 / this.tail.length * i; //const alphaOffset = this.tail[i].lastSymbol !== this.tail[i].symbol ? alpha + 100: alpha;

          p5.fill(0, 200, 0, alpha);
          this.tail[i].lastSymbol = this.tail[i].symbol;
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
//# sourceMappingURL=index.js.4243bf82b19a045b09f8.hot-update.js.map