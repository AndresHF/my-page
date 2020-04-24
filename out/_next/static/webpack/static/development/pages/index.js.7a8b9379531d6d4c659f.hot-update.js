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






var switchVelocity = function switchVelocity(particleA, particleB, p5) {
  particleA.velocity = p5.createVector(particleA.velocity.x * -Math.random() * 10 - particleB.velocity.x, particleA.velocity.y * -Math.random() * 10 - particleB.velocity.y);
};

var ParticleSystem = /*#__PURE__*/function () {
  function ParticleSystem(p5, offset) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ParticleSystem);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "particles", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collision", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collider", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "image", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "offset", void 0);

    this.particles = Object(_particle__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(6, 7, p5, offset);
    this.p5 = p5;
    this.collision = true;
    this.image = p5.loadImage("../../../pictures/meFace.png");
    this.offset = offset;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ParticleSystem, [{
    key: "setParticles",
    value: function setParticles(amount) {
      var diff = amount - this.particles.length;

      if (diff > 0) {
        this.particles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.particles), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_particle__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(diff, 7, this.p5, this.offset)));
      } else if (diff < 0) {
        this.particles = this.particles.slice(0, diff);
      }
    }
  }, {
    key: "checkColision",
    value: function checkColision(particleA, particleB, mousePosition) {
      var distance;

      if (mousePosition) {
        var x = mousePosition.x,
            y = mousePosition.y;
        var realParticlePos = this.p5.createVector(particleA.position.x + this.offset.x, particleA.position.y + this.offset.y);
        var mousePos = this.p5.createVector(x, y);
        distance = realParticlePos.dist(mousePos) / 6;
      } else {
        distance = particleA.position.dist(particleB.position) * 2;
      }

      var collided = !particleA.collided && distance <= particleA.dimension.width;

      if (collided) {
        switchVelocity(particleA, particleB, this.p5);
        particleA.collided = !!this.collider;
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var _this$p = this.p5,
          mouseX = _this$p.mouseX,
          mouseY = _this$p.mouseY;
      this.particles.map(function (particle, i) {
        particle.update(mouseX, mouseY);
        var otherParticles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.particles.slice(0, i)), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.particles.slice(i + 1, _this.particles.length)));

        if (_this.collider) {
          _this.checkColision(particle, _this.collider, {
            x: mouseX,
            y: mouseY
          });
        } else {
          if (_this.collision) otherParticles.map(function (other) {
            return _this.checkColision(particle, other);
          });
        }

        particle.draw();
      });

      if (this.collider) {
        this.collider.drawCollider(mouseX, mouseY, this.image);
      }
    }
  }]);

  return ParticleSystem;
}();

/* harmony default export */ __webpack_exports__["default"] = (ParticleSystem);

/***/ })

})
//# sourceMappingURL=index.js.7a8b9379531d6d4c659f.hot-update.js.map