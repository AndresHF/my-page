webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./src/components/sketchs/background/AnimatedBackground.tsx":
/*!******************************************************************!*\
  !*** ./src/components/sketchs/background/AnimatedBackground.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _particleSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particleSystem */ "./src/components/sketchs/background/particleSystem.ts");
/* harmony import */ var _UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\background\\AnimatedBackground.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var AnimatedBackground = function AnimatedBackground(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var particleSystem;

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_4__["useParticles"])(),
      particlesAmount = _useParticles.particlesAmount;

  console.log("THIE AMOUNT", particlesAmount);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("THE JANDER KNA", particleSystem, particlesAmount);

    if (particleSystem) {
      console.log("JANDEr");
      particleSystem.setParticles(particlesAmount);
    }
  }, [particlesAmount]);

  var setup = function setup(p5, canvasParentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.strokeWeight(0.5);
    particleSystem = new _particleSystem__WEBPACK_IMPORTED_MODULE_3__["default"](p5);
    console.log("CALLING SETUP");
  };

  var draw = function draw(p5) {
    p5.background(255, 100, 255, 0);
    p5.clear();
    p5.noStroke();
    particleSystem.update();
  };

  if (false) {}
  var Sketch = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7));
  });
  return __jsx("div", {
    className: "sketchContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (AnimatedBackground);

/***/ }),

/***/ "./src/components/sketchs/background/particle.ts":
/*!*******************************************************!*\
  !*** ./src/components/sketchs/background/particle.ts ***!
  \*******************************************************/
/*! exports provided: getParticles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticles", function() { return getParticles; });
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

var getParticles = function getParticles(particlesAmount, radius, p5) {
  var particles = new Array(particlesAmount);

  for (var i = 0; i < particlesAmount; i++) {
    particles[i] = new Particle({
      width: radius,
      height: radius
    }, p5);
  }

  return particles;
};
var colors = ["red", "green", "blue", "purple", "orange"];

var Particle = /*#__PURE__*/function () {
  function Particle(dimension, p5) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Particle);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "dimension", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "acceleration", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "velocity", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "tail", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "color", void 0);

    this.dimension = dimension;
    this.p5 = p5;
    this.acceleration = this.p5.createVector();
    this.velocity = this.p5.createVector();
    this.position = this.p5.createVector(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    this.tail = [];
    this.color = colors[Math.floor(Math.random() * colors.length)] || "black";
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Particle, [{
    key: "update",
    value: function update(mouseX, mouseY) {
      var _this$position = this.position,
          x = _this$position.x,
          y = _this$position.y;
      this.acceleration = this.p5.createVector(checkPos(x, mouseX, this.acceleration.x), checkPos(y, mouseY, this.acceleration.y));
      this.acceleration.limit(0.09);
      this.velocity.add(this.acceleration);
      this.velocity.limit(3);
      this.position.add(this.velocity);
      if (this.tail.length > 5) this.tail = this.tail.slice(0, -1);else this.tail = [this.position.copy()].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.tail));
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

/***/ }),

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
  function ParticleSystem(p5) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ParticleSystem);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "particles", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    this.particles = Object(_particle__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(6, 7, p5);
    this.p5 = p5;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ParticleSystem, [{
    key: "setParticles",
    value: function setParticles(amount) {
      var diff = this.particles.length - amount;
      console.log("DOIIING THIS");

      if (diff > 0) {
        this.particles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.particles), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_particle__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(diff, 7, this.p5)));
      } else if (diff < 0) {
        console.log("DIFFF", diff);
        this.particles = this.particles.slice(diff);
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
        otherParticles.map(function (other) {
          return _this.checkColision(particle, other);
        });
        particle.draw();
      });
    }
  }]);

  return ParticleSystem;
}();

/* harmony default export */ __webpack_exports__["default"] = (ParticleSystem);

/***/ })

})
//# sourceMappingURL=index.js.2a779cf76def9202fa5e.hot-update.js.map