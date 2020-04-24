webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sketchs/background/utils.ts":
/*!****************************************************!*\
  !*** ./src/components/sketchs/background/utils.ts ***!
  \****************************************************/
/*! exports provided: switchVelocity, ACC_RATE, checkPos, getParticles, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchVelocity", function() { return switchVelocity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACC_RATE", function() { return ACC_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPos", function() { return checkPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticles", function() { return getParticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ "./src/components/sketchs/background/particle.ts");

var switchVelocity = function switchVelocity(particleA, particleB, p5) {
  particleA.velocity = p5.createVector(particleA.velocity.x * particleB.velocity.x * -1, //* -Math.random() * 30
  particleA.velocity.y * particleB.velocity.y * -1 //* -Math.random() * 30
  );
};
var ACC_RATE = 0.1;
var checkPos = function checkPos(pos, mouse, acceleration) {
  if (pos <= mouse) return acceleration + ACC_RATE;
  if (pos >= mouse) return acceleration - ACC_RATE;
  return 0;
};
var getParticles = function getParticles(particlesAmount, radius, p5, offset) {
  var particles = new Array(particlesAmount);

  for (var i = 0; i < particlesAmount; i++) {
    particles[i] = new _particle__WEBPACK_IMPORTED_MODULE_0__["default"]({
      width: radius,
      height: radius
    }, p5, offset, colors[i % colors.length]);
  }

  return particles;
};
var colors = ["red", "green", "blue", "purple", "orange", "pink", "brown", "cyan"];

/***/ })

})
//# sourceMappingURL=index.js.eb729cd7ab55fb2897d4.hot-update.js.map