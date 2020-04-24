webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/background/particleSystem.ts":
/*!*************************************************************!*\
  !*** ./src/components/sketchs/background/particleSystem.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particle */ "./src/components/sketchs/background/particle.ts");






var ParticleSystem = /*#__PURE__*/function () {
  function ParticleSystem(p5, offset) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ParticleSystem);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "particles", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collision", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collider", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "image", void 0);

    this.particles = Object(_particle__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(6, 7, p5);
    this.p5 = p5;
    this.collision = true;
    this.image = p5.loadImage("../../../pictures/react.png");
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ParticleSystem, [{
    key: "setParticles",
    value: function setParticles(amount) {
      var diff = amount - this.particles.length;

      if (diff > 0) {
        this.particles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.particles), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_particle__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(diff, 7, this.p5)));
      } else if (diff < 0) {
        this.particles = this.particles.slice(0, diff);
      }
    }
  }, {
    key: "checkColision",
    value: function checkColision(particleA, particleB) {
      var distance = particleA.position.dist(particleB.position) * 2;
      var collided = distance <= particleA.dimension.width;

      if (collided) {
        particleA.velocity = this.p5.createVector(particleA.velocity.x * -Math.random() * 10 - particleB.velocity.x, particleA.velocity.y * -Math.random() * 10 - particleB.velocity.y);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      this.particles.map(function (particle, i) {
        particle.update(_this.p5.mouseX, _this.p5.mouseY);
        var otherParticles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.particles.slice(0, i)), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.particles.slice(i + 1, _this.particles.length)));
        if (_this.collision) otherParticles.map(function (other) {
          return _this.checkColision(particle, other);
        });
        particle.draw();
      });

      if (this.collider) {
        this.collider.drawCollider(this.p5.mouseX, this.p5.mouseY, this.image);
      }
    }
  }]);

  return ParticleSystem;
}();

/* harmony default export */ __webpack_exports__["default"] = (ParticleSystem);

/***/ })

})
//# sourceMappingURL=index.js.dbc5eaf5068555ce451d.hot-update.js.map