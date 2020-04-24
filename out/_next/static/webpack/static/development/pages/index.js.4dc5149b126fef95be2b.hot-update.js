webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

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
/* harmony import */ var _UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\background\\AnimatedBackground.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var AnimatedBackground = function AnimatedBackground(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      particleSystem = _useState[0],
      setParticleSystem = _useState[1];

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_3__["useParticles"])(),
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
    p5.strokeWeight(0.5); //setParticleSystem(new ParticleSystem(p5));
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (AnimatedBackground);

/***/ }),

/***/ "./src/components/sketchs/background/particle.ts":
false,

/***/ "./src/components/sketchs/background/particleSystem.ts":
false

})
//# sourceMappingURL=index.js.4dc5149b126fef95be2b.hot-update.js.map