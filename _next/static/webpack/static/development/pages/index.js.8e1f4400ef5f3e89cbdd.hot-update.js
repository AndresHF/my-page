webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/UI/hooks/useParticles.tsx":
/*!**************************************************!*\
  !*** ./src/components/UI/hooks/useParticles.tsx ***!
  \**************************************************/
/*! exports provided: INITIAL_ACTIVE_KEY, particlesReducer, ParticlesProvider, useParticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_ACTIVE_KEY", function() { return INITIAL_ACTIVE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particlesReducer", function() { return particlesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesProvider", function() { return ParticlesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParticles", function() { return useParticles; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\UI\\hooks\\useParticles.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_ACTIVE_KEY = "buildingList";
var particlesInitialState = {
  particlesAmount: 6,
  target: undefined,
  collision: true,
  collider: false
};
var particlesReducer = function particlesReducer(state, action) {
  switch (action.type) {
    case "SET_PARTICLES_AMOUNT":
      return _objectSpread({}, state, {
        particlesAmount: action.value
      });

    case "SET_TARGET":
      return _objectSpread({}, state, {
        target: action.value
      });

    case "SET_COLLISION":
      return _objectSpread({}, state, {
        collision: action.value
      });

    default:
      return state;
  }
};
var ParticlesContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  state: particlesInitialState,
  dispatch: function dispatch(action) {}
});
var ParticlesProvider = function ParticlesProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(particlesReducer, particlesInitialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(ParticlesContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children);
};
var useParticles = function useParticles() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ParticlesContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  return _objectSpread({}, state, {
    dispatch: dispatch
  });
};

/***/ })

})
//# sourceMappingURL=index.js.8e1f4400ef5f3e89cbdd.hot-update.js.map