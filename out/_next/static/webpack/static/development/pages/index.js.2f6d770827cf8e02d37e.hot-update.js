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

var Y_OFFSET = 20;

var checkMouseHover = function checkMouseHover(itemX, itemY, mouseX, mouseY) {
  return mouseX >= itemX && mouseX <= itemX + 30 && mouseY >= itemY && mouseY <= itemY + 30;
};

var Symbol = /*#__PURE__*/function () {
  function Symbol(p5) {
    var isHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Symbol);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "velocity", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "symbol", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "randomChange", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "tail", void 0);

    this.initSymbol(p5, isHead);

    if (isHead) {
      this.tail = new Array(getRandomNumber(25));

      for (var i = 0; i < this.tail.length; i++) {
        this.tail[i] = new Symbol(p5, false);
      }
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Symbol, [{
    key: "initSymbol",
    value: function initSymbol(p5, isHead) {
      this.symbol = getRandomSymbol();
      this.randomChange = 0;
      this.position = p5.createVector(Math.random() * p5.width, -100);
      this.velocity = p5.createVector(0, Math.random() * 2 + 1);
    }
  }, {
    key: "update",
    value: function update(p5) {
      var isHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (isHead) {
        this.position.add(this.velocity);
        this.randomChange = Math.random();

        if (this.randomChange > 0.995) {
          this.symbol = getRandomSymbol();
          this.tail.forEach(function (e, i) {
            return setTimeout(function () {
              e.symbol = getRandomSymbol();
            }, 75 * i);
          });
        }

        if (this.position.y > p5.height + this.tail.length * Y_OFFSET * this.velocity.y / 2) {
          this.initSymbol(p5, true);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(p5) {
      p5.textSize(Math.round(this.velocity.y * 10));
      p5.fill(0, 150, 0);
      p5.text(this.symbol, this.position.x, this.position.y);

      if (this.tail) {
        for (var i = 0; i < this.tail.length; i++) {
          var calculatedY = this.position.y - Y_OFFSET * this.velocity.y / 2 * i;

          if (checkMouseHover(this.position.x, calculatedY, p5.mouseX, p5.mouseY) || this.randomChange > 0.995) {
            p5.fill(0, 200, 0);
          } else {
            p5.fill(0, 150, 0, 255 - 220 / this.tail.length * i);
          }

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
//# sourceMappingURL=index.js.2f6d770827cf8e02d37e.hot-update.js.map