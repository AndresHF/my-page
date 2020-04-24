webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/background/particle.ts":
/*!*******************************************************!*\
  !*** ./src/components/sketchs/background/particle.ts ***!
  \*******************************************************/
/*! exports provided: getParticles, colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticles", function() { return getParticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var ACC_RATE = 0.1;

var checkPos = function checkPos(pos, mouse, acceleration) {
  if (pos <= mouse) return acceleration + ACC_RATE;
  if (pos >= mouse) return acceleration - ACC_RATE;
  return 0;
};

var getParticles = function getParticles(particlesAmount, radius, p5, offset) {
  var particles = new Array(particlesAmount);

  for (var i = 0; i < particlesAmount; i++) {
    particles[i] = new Particle({
      width: radius,
      height: radius
    }, p5, offset, colors[i % colors.length]);
  }

  return particles;
};
var colors = ["red", "green", "blue", "purple", "orange", "pink", "brown", "cyan"];

var Particle = /*#__PURE__*/function () {
  function Particle(dimension, p5, offset, color) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Particle);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "dimension", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "acceleration", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "velocity", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "tail", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "color", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "accLimit", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "offset", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collided", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collidedCount", void 0);

    this.dimension = dimension;
    this.p5 = p5;
    this.acceleration = this.p5.createVector();
    this.velocity = this.p5.createVector();
    this.position = this.p5.createVector(Math.random() * window.innerWidth - window.innerWidth / 2, Math.random() * window.innerHeight - window.innerHeight / 2);
    this.accLimit = Math.random() / 10;
    this.tail = [];
    this.color = color;
    this.offset = offset;
    this.collided = false;
    this.collidedCount = 0;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Particle, [{
    key: "update",
    value: function update(mouseX, mouseY) {
      var _this$position = this.position,
          x = _this$position.x,
          y = _this$position.y;
      this.acceleration = this.p5.createVector(checkPos(x, mouseX - this.offset.x, this.acceleration.x), checkPos(y, mouseY - this.offset.y, this.acceleration.y));
      this.acceleration.limit(this.accLimit);
      this.acceleration.setMag(this.collided ? 10 : 0.08);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.collided ? 5 : 3);
      this.position.add(this.velocity);
      if (this.tail.length > 5) this.tail = this.tail.slice(0, -1);else this.tail = [this.position.copy()].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.tail));
      this.collided && this.collidedCount++;

      if (this.collidedCount >= 80) {
        this.collided = false;
        this.collidedCount = 0;
      }
    }
  }, {
    key: "drawCollider",
    value: function drawCollider(mouseX, mouseY, image) {
      var millis = this.p5.millis();
      this.p5.pointLight(255, 255, 255, 0, 0, 10000);
      this.p5.texture(image);
      this.p5.push();
      this.p5.translate(mouseX - this.offset.x, mouseY - this.offset.y, 0);
      this.p5.rotateY(millis / 1000);
      this.p5.sphere(40, 24, 24);
      this.p5.pop();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$dimension = this.dimension,
          width = _this$dimension.width,
          height = _this$dimension.height;
      this.p5.fill(this.color);
      this.p5.ellipse(this.position.x, this.position.y, width, height);

      for (var i = 0; i < this.tail.length; i++) {
        this.p5.ellipse(this.tail[i].x, this.tail[i].y, width - i, height - i);
      }
    }
  }]);

  return Particle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ })

})
//# sourceMappingURL=index.js.163a130293df922a033a.hot-update.js.map