webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./particle */ "./src/components/sketchs/background/particle.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\background\\AnimatedBackground.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var AnimatedBackground = function AnimatedBackground(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var particleSystem;

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_4__["useParticles"])(),
      particlesAmount = _useParticles.particlesAmount,
      collision = _useParticles.collision,
      collider = _useParticles.collider;

  var setup = function setup(p5, canvasParentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(canvasParentRef);
    p5.strokeWeight(0.5);
    particleSystem = new _particleSystem__WEBPACK_IMPORTED_MODULE_3__["default"](p5);
    particleSystem.setParticles(particlesAmount);
    particleSystem.collision = collision;
    p5.pointLight(255, 255, 255, p5.width / 2, p5.height / 2, 1000);
    if (collider) particleSystem.collider = new _particle__WEBPACK_IMPORTED_MODULE_5__["default"]({
      width: 40,
      height: 40
    }, p5);
    console.log("CALLING SETUP");
  };

  var draw = function draw(p5) {
    p5.background(255, 100, 255, 0);
    p5.clear();
    p5.noStroke();
    particleSystem.update(); //console.log(p5.mouseX, p5.mouseY);
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (AnimatedBackground);

/***/ })

})
//# sourceMappingURL=index.js.b7247de025492577f383.hot-update.js.map