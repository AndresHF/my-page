webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/background/particle.ts":
/*!*******************************************************!*\
  !*** ./src/components/sketchs/background/particle.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/sketchs/background/utils.ts");






var Particle = /*#__PURE__*/function () {
  function Particle(dimension, p5, offset, color, velocity) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Particle);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "dimension", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "acceleration", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "velocity", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "tail", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "color", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "accLimit", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "velLimit", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "offset", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collided", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collidedCount", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "smallCollision", void 0);

    this.dimension = dimension;
    this.p5 = p5;
    this.acceleration = this.p5.createVector();
    this.velocity = velocity ? velocity : this.p5.createVector();
    this.position = this.p5.createVector(Math.random() * window.innerWidth - window.innerWidth / 2, Math.random() * window.innerHeight - window.innerHeight / 2);
    this.accLimit = Math.random() * 2;
    this.velLimit = 3.5;
    this.tail = [];
    this.color = color;
    this.offset = offset;
    this.collided = false;
    this.smallCollision = false;
    this.collidedCount = 0;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Particle, [{
    key: "update",
    value: function update(mouseX, mouseY) {
      var _this$position = this.position,
          x = _this$position.x,
          y = _this$position.y;
      this.acceleration = this.p5.createVector(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["checkPos"])(x, mouseX - this.offset.x, this.acceleration.x), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["checkPos"])(y, mouseY - this.offset.y, this.acceleration.y));
      this.acceleration.limit(this.accLimit);
      this.acceleration.setMag(this.collided || this.smallCollision ? 0.8 : 0.2);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.collided ? 10 : this.smallCollision ? 5 : this.velLimit); //3.5);

      this.position.add(this.velocity);
      if (this.tail.length > 4) this.tail = this.tail.slice(0, -1);else this.tail = [this.position.copy()].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.tail));
      (this.collided || this.smallCollision) && this.collidedCount++;

      if (this.collidedCount >= (this.smallCollision ? 80 : 80)) {
        this.collided = false;
        this.smallCollision = false;
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
//# sourceMappingURL=index.js.f5e1b74f3c0b5c2cd273.hot-update.js.map