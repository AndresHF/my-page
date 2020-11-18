webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./src/components/sketchs/particles/ParticlesControlPanel.tsx":
/*!********************************************************************!*\
  !*** ./src/components/sketchs/particles/ParticlesControlPanel.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./src/hooks/useResponsive.ts");
/* harmony import */ var _typography_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../typography/Text */ "./src/components/typography/Text.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\particles\\ParticlesControlPanel.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var getMaxAmount = function getMaxAmount(responsiveBreakpoint) {
  return responsiveBreakpoint && 20 || 80;
};

var ParticlesControlPanel = function ParticlesControlPanel(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_2__["useParticles"])(),
      dispatch = _useParticles.dispatch,
      collision = _useParticles.collision,
      collider = _useParticles.collider,
      particlesAmount = _useParticles.particlesAmount;

  var _useResponsive = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useResponsive"])(),
      mdAndDown = _useResponsive.mdAndDown;

  var maxAmount = getMaxAmount(mdAndDown);
  return __jsx("div", {
    className: "controlPanel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLIDER",
        value: !collider
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "".concat(collider ? "Remove " : "Use", " collider")), __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLISION",
        value: !collision
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "".concat(collision ? "Disable " : "Enable", " collision")), __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 0
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Remove particles"), __jsx(_typography_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 6
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Reset"), __jsx("input", {
    type: "number",
    max: 100,
    placeholder: "N. particles (".concat(maxAmount, ")"),
    value: particlesAmount,
    onChange: function onChange(e) {
      var val = parseInt(e.target.value);

      if (!isNaN(val)) {
        dispatch({
          type: "SET_PARTICLES_AMOUNT",
          value: val > maxAmount ? maxAmount : val
        });
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesControlPanel);

/***/ }),

/***/ "./src/components/typography/Text.tsx":
/*!********************************************!*\
  !*** ./src/components/typography/Text.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\typography\\Text.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Text = function Text(_ref) {
  var bold = _ref.bold,
      bolder = _ref.bolder,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["bold", "bolder", "style", "className", "children"]);

  var aditionalClassname = bold && "__bold" || bolder && "__bolder" || "";
  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "paragraph".concat(aditionalClassname, " ").concat(className),
    style: _objectSpread({}, style)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.d2809414ebc563bd852e.hot-update.js.map