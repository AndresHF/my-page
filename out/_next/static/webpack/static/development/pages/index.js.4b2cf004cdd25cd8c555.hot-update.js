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
      var _this = this;

      var isHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (isHead) {
        this.position.add(this.velocity);
        var changeSymbol = Math.random() > 0.95;

        if (changeSymbol) {
          this.symbol = getRandomSymbol();
        }

        if (this.position.y > p5.height + this.tail.length * Y_OFFSET) {
          this.initSymbol(p5, this.position.x);
        }

        var _loop = function _loop(i) {
          //this.tail[i].update(p5, false);
          var calculatedY = _this.position.y - Y_OFFSET * i - 20;
          var alpha = 255 - 8 * i;

          if (changeSymbol) {
            setTimeout(function () {
              _this.tail[i].symbol = getRandomSymbol();
            }, 50 * i);
            p5.fill(80, 255, 80, alpha);
          } else {
            if (i < 2) {
              p5.fill(120, 255, 120, alpha * 3);
            } else {
              p5.fill(80, 255, 80, alpha);
            }
          }

          p5.text(_this.tail[i].symbol, _this.position.x, calculatedY);
        };

        for (var i = 0; i < this.tail.length; i++) {
          _loop(i);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(p5) {
      p5.fill(180, 255, 180);
      p5.text(this.symbol, this.position.x, this.position.y);

      if (this.tail) {//   for (let i = 0; i < this.tail.length; i++) {
        //     //this.tail[i].update(p5, false);
        //     const calculatedY = this.position.y - Y_OFFSET * i - 20;
        //     const alpha = 255 - 8 * i;
        //     if (i < 2) {
        //       p5.fill(120, 255, 120, alpha * 3);
        //     } else {
        //       p5.fill(80, 255, 80, alpha);
        //     }
        //     p5.text(this.tail[i].symbol, this.position.x, calculatedY);
        //   }
      }
    }
  }]);

  return Symbol;
}();

/* harmony default export */ __webpack_exports__["default"] = (Symbol);

/***/ })

})
//# sourceMappingURL=index.js.4b2cf004cdd25cd8c555.hot-update.js.map