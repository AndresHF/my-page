(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@loadable/component/dist/loadable.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@loadable/component/dist/loadable.esm.js ***!
  \***************************************************************/
/*! exports provided: default, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lazy, loadableReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadableReady", function() { return loadableReady; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);







/* eslint-disable import/prefer-default-export */
function invariant(condition, message) {
  if (condition) return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = 'Invariant Violation';
  throw error;
}
function warn(message) {
  // eslint-disable-next-line no-console
  console.warn("loadable: " + message);
}

var Context = /*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';
function getRequiredChunkKey(namespace) {
  return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
}

var sharedInternals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRequiredChunkKey: getRequiredChunkKey,
  invariant: invariant,
  Context: Context
});

function resolveConstructor(ctor) {
  if (typeof ctor === 'function') {
    return {
      requireAsync: ctor
    };
  }

  return ctor;
}

var withChunkExtractor = function withChunkExtractor(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Consumer, null, function (extractor) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };
};

var identity = function identity(v) {
  return v;
};

function createLoadable(_ref) {
  var _ref$resolve = _ref.resolve,
      resolve = _ref$resolve === void 0 ? identity : _ref$resolve,
      _render = _ref.render,
      onLoad = _ref.onLoad;

  function loadable(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }

    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};

    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }

      if (ctor.resolve) {
        return ctor.resolve(props);
      }

      return null;
    }

    var InnerLoadable =
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerLoadable, _React$Component);

      InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
          cacheKey: cacheKey,
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };

      function InnerLoadable(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        _this.promise = null;
        invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side

        if (props.__chunkExtractor) {
          // This module has been marked with no SSR
          if (options.ssr === false) {
            return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
          } // We run load function, we assume that it won't fail and that it
          // triggers a synchronous loading of the module


          ctor.requireAsync(props)["catch"](function () {}); // So we can require now the module synchronously

          _this.loadSync();

          props.__chunkExtractor.addChunk(ctor.chunkName(props));

          return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
        } // Client-side with `isReady` method present (SSR probably)
        // If module is already loaded, we use a synchronous loading
        // Only perform this synchronous loading if the component has not
        // been marked with no SSR, else we risk hydration mismatches


        if (options.ssr !== false && ctor.isReady && ctor.isReady(props)) {
          _this.loadSync();
        }

        return _this;
      }

      var _proto = InnerLoadable.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;

        if (this.state.loading) {
          this.loadAsync();
        } else if (!this.state.error) {
          this.triggerOnLoad();
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // Component is reloaded if the cacheKey has changed
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.promise = null;
          this.loadAsync();
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      };

      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;

        if (onLoad) {
          setTimeout(function () {
            onLoad(_this2.state.result, _this2.props);
          });
        }
      };

      _proto.loadSync = function loadSync() {
        if (!this.state.loading) return;

        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, {
            Loadable: Loadable
          });
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          this.state.error = error;
        }
      };

      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props) || JSON.stringify(this.props);
      };

      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      };

      _proto.setCache = function setCache(value) {
        cache[this.getCacheKey()] = value;
      };

      _proto.loadAsync = function loadAsync() {
        var _this3 = this;

        if (!this.promise) {
          var _this$props = this.props,
              __chunkExtractor = _this$props.__chunkExtractor,
              forwardedRef = _this$props.forwardedRef,
              props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["__chunkExtractor", "forwardedRef"]);

          this.promise = ctor.requireAsync(props).then(function (loadedModule) {
            var result = resolve(loadedModule, {
              Loadable: Loadable
            });

            if (options.suspense) {
              _this3.setCache(result);
            }

            _this3.safeSetState({
              result: resolve(loadedModule, {
                Loadable: Loadable
              }),
              loading: false
            }, function () {
              return _this3.triggerOnLoad();
            });
          })["catch"](function (error) {
            _this3.safeSetState({
              error: error,
              loading: false
            });
          });
        }

        return this.promise;
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
            forwardedRef = _this$props2.forwardedRef,
            propFallback = _this$props2.fallback,
            __chunkExtractor = _this$props2.__chunkExtractor,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);

        var _this$state = this.state,
            error = _this$state.error,
            loading = _this$state.loading,
            result = _this$state.result;

        if (options.suspense) {
          var cachedResult = this.getCache();
          if (!cachedResult) throw this.loadAsync();
          return _render({
            loading: false,
            fallback: null,
            result: cachedResult,
            options: options,
            props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
              ref: forwardedRef
            })
          });
        }

        if (error) {
          throw error;
        }

        var fallback = propFallback || options.fallback || null;

        if (loading) {
          return fallback;
        }

        return _render({
          loading: loading,
          fallback: fallback,
          result: result,
          options: options,
          props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
            ref: forwardedRef
          })
        });
      };

      return InnerLoadable;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
    var Loadable = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    }); // In future, preload could use `<link rel="preload">`

    Loadable.preload = function (props) {
      ctor.requireAsync(props);
    };

    Loadable.load = function (props) {
      return ctor.requireAsync(props);
    };

    return Loadable;
  }

  function lazy(ctor, options) {
    return loadable(ctor, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      suspense: true
    }));
  }

  return {
    loadable: loadable,
    lazy: lazy
  };
}

function resolveComponent(loadedModule, _ref) {
  var Loadable = _ref.Loadable;
  // eslint-disable-next-line no-underscore-dangle
  var Component = loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(Loadable, Component, {
    preload: true
  });
  return Component;
}

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable =
/*#__PURE__*/
createLoadable({
  resolve: resolveComponent,
  render: function render(_ref) {
    var Component = _ref.result,
        props = _ref.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
  }
}),
    loadable = _createLoadable.loadable,
    lazy = _createLoadable.lazy;

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable$1 =
/*#__PURE__*/
createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === 'function') {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render(_ref) {
    var result = _ref.result,
        loading = _ref.loading,
        props = _ref.props;

    if (!loading && props.children) {
      return props.children(result);
    }

    return null;
  }
}),
    loadable$1 = _createLoadable$1.loadable,
    lazy$1 = _createLoadable$1.lazy;

/* eslint-disable no-underscore-dangle, camelcase */
var BROWSER = typeof window !== 'undefined';
function loadableReady(done, _temp) {
  if (done === void 0) {
    done = function done() {};
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? '' : _ref$namespace;

  if (!BROWSER) {
    warn('`loadableReady()` must be called in browser only');
    done();
    return Promise.resolve();
  }

  var requiredChunks = null;

  if (BROWSER) {
    var dataElement = document.getElementById(getRequiredChunkKey(namespace));

    if (dataElement) {
      requiredChunks = JSON.parse(dataElement.textContent);
    }
  }

  if (!requiredChunks) {
    warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');
    done();
    return Promise.resolve();
  }

  var resolved = false;
  return new Promise(function (resolve) {
    window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [];
    var loadedChunks = window.__LOADABLE_LOADED_CHUNKS__;
    var originalPush = loadedChunks.push.bind(loadedChunks);

    function checkReadyState() {
      if (requiredChunks.every(function (chunk) {
        return loadedChunks.some(function (_ref2) {
          var chunks = _ref2[0];
          return chunks.indexOf(chunk) > -1;
        });
      })) {
        if (!resolved) {
          resolved = true;
          resolve();
          done();
        }
      }
    }

    loadedChunks.push = function () {
      originalPush.apply(void 0, arguments);
      checkReadyState();
    };

    checkReadyState();
  });
}

/* eslint-disable no-underscore-dangle */
var loadable$2 = loadable;
loadable$2.lib = loadable$1;
var lazy$2 = lazy;
lazy$2.lib = lazy$1;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;

/* harmony default export */ __webpack_exports__["default"] = (loadable$2);



/***/ }),

/***/ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@loadable/component/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************************************/
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

/***/ "./node_modules/@xobotyi/scrollbar-width/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@xobotyi/scrollbar-width/dist/index.esm.js ***!
  \*****************************************************************/
/*! exports provided: scrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarWidth", function() { return e; });
var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var n=o.clientWidth;if(0!==n)return e.__cache=100-n,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};


/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/fast-deep-equal/react.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/react.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/fast-shallow-equal/index.js":
/*!**************************************************!*\
  !*** ./node_modules/fast-shallow-equal/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!**************************************************************************!*\
  !*** ./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "./node_modules/nano-css/addon/cssom.js":
/*!**********************************************!*\
  !*** ./node_modules/nano-css/addon/cssom.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "./node_modules/nano-css/addon/vcssom.js":
/*!***********************************************!*\
  !*** ./node_modules/nano-css/addon/vcssom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "./node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "./node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!*********************************************************!*\
  !*** ./node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "./node_modules/nano-css/addon/vcssom/removeRule.js":
/*!**********************************************************!*\
  !*** ./node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "./node_modules/nano-css/index.js":
/*!****************************************!*\
  !*** ./node_modules/nano-css/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var hash = 5381, i = str.length;

    while (i) hash = (hash * 33) ^ str.charCodeAt(--i);

    return '_' + (hash >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        },
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === "@" && prop !== "@font-face") {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Candre%5Cprojects%5Cmy-page%5Cpages%5Cindex.tsx!./":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Candre%5Cprojects%5Cmy-page%5Cpages%5Cindex.tsx ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-use/esm/createBreakpoint.js":
/*!********************************************************!*\
  !*** ./node_modules/react-use/esm/createBreakpoint.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), screen = _a[0], setScreen = _a[1];
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            window.addEventListener('resize', setSideScreen);
            return function () {
                window.removeEventListener('resize', setSideScreen);
            };
        });
        var sortedBreakpoints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [
            breakpoints,
        ]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createBreakpoint);


/***/ }),

/***/ "./node_modules/react-use/esm/createGlobalState.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/createGlobalState.js ***!
  \*********************************************************/
/*! exports provided: createGlobalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return createGlobalState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");
/* eslint-disable */


function createGlobalState(initialState) {
    var store = {
        state: initialState,
        setState: function (state) {
            store.state = state;
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(store.state), globalState = _a[0], stateSetter = _a[1];
        Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
/* harmony default export */ __webpack_exports__["default"] = (createGlobalState);


/***/ }),

/***/ "./node_modules/react-use/esm/createMemo.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/createMemo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var createMemo = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return fn.apply(void 0, args); }, args);
}; };
/* harmony default export */ __webpack_exports__["default"] = (createMemo);


/***/ }),

/***/ "./node_modules/react-use/esm/createReducer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/createReducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");


function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initializer(initialState));
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ref.current), setState = _a[1];
        var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createReducer);


/***/ }),

/***/ "./node_modules/react-use/esm/createReducerContext.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use/esm/createReducerContext.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createReducerContext = function (reducer, defaultInitialState) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(context.Provider);
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createReducerContext);


/***/ }),

/***/ "./node_modules/react-use/esm/createStateContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/createStateContext.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createStateContext = function (defaultInitialValue) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(context.Provider);
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createStateContext);


/***/ }),

/***/ "./node_modules/react-use/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-use/esm/index.js ***!
  \*********************************************/
/*! exports provided: createMemo, createReducerContext, createReducer, createStateContext, useAsync, useAsyncFn, useAsyncRetry, useAudio, useBattery, useBeforeUnload, useBoolean, useClickAway, useCookie, useCopyToClipboard, useCounter, useCss, useCustomCompareEffect, useDebounce, useDeepCompareEffect, useDefault, useDrop, useDropArea, useEffectOnce, useEnsuredForwardedRef, ensuredForwardRef, useEvent, useError, useFavicon, useFullscreen, useGeolocation, useGetSet, useGetSetState, useHarmonicIntervalFn, useHover, useHoverDirty, useIdle, useIntersection, useInterval, useIsomorphicLayoutEffect, useKey, createBreakpoint, useKeyPress, useKeyPressEvent, useLifecycles, useList, useLocalStorage, useLocation, useLockBodyScroll, useLogger, useLongPress, useMap, useMedia, useMediaDevices, useMediatedState, useMethods, useMotion, useMount, useMountedState, useMouse, useMouseHovered, useNetwork, useNumber, useObservable, useOrientation, usePageLeave, usePermission, usePrevious, usePreviousDistinct, usePromise, useQueue, useRaf, useRafLoop, useRafState, useSearchParam, useScroll, useScrolling, useSessionStorage, useSetState, useShallowCompareEffect, useSize, useSlider, useSpeech, useStartTyping, useStateWithHistory, useStateList, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useTitle, useToggle, useTween, useUnmount, useUnmountPromise, useUpdate, useUpdateEffect, useUpsert, useVibrate, useVideo, useStateValidator, useScrollbarWidth, useMultiStateValidator, useWindowScroll, useWindowSize, useMeasure, useRendersCount, useFirstMountState, useSet, createGlobalState, useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMemo */ "./node_modules/react-use/esm/createMemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemo", function() { return _createMemo__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createReducerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReducerContext */ "./node_modules/react-use/esm/createReducerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducerContext", function() { return _createReducerContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReducer */ "./node_modules/react-use/esm/createReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _createReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStateContext */ "./node_modules/react-use/esm/createStateContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateContext", function() { return _createStateContext__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useAsync */ "./node_modules/react-use/esm/useAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useAsyncFn */ "./node_modules/react-use/esm/useAsyncFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncFn", function() { return _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useAsyncRetry */ "./node_modules/react-use/esm/useAsyncRetry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncRetry", function() { return _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useAudio */ "./node_modules/react-use/esm/useAudio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAudio", function() { return _useAudio__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useBattery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useBattery */ "./node_modules/react-use/esm/useBattery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBattery", function() { return _useBattery__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useBeforeUnload */ "./node_modules/react-use/esm/useBeforeUnload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBeforeUnload", function() { return _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useBoolean */ "./node_modules/react-use/esm/useBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useClickAway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useClickAway */ "./node_modules/react-use/esm/useClickAway.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickAway", function() { return _useClickAway__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useCookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useCookie */ "./node_modules/react-use/esm/useCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCookie", function() { return _useCookie__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useCopyToClipboard */ "./node_modules/react-use/esm/useCopyToClipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useCounter */ "./node_modules/react-use/esm/useCounter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _useCounter__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useCss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useCss */ "./node_modules/react-use/esm/useCss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCss", function() { return _useCss__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useCustomCompareEffect */ "./node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomCompareEffect", function() { return _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useDebounce */ "./node_modules/react-use/esm/useDebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useDeepCompareEffect */ "./node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeepCompareEffect", function() { return _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _useDefault__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useDefault */ "./node_modules/react-use/esm/useDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDefault", function() { return _useDefault__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _useDrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useDrop */ "./node_modules/react-use/esm/useDrop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return _useDrop__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _useDropArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./useDropArea */ "./node_modules/react-use/esm/useDropArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDropArea", function() { return _useDropArea__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectOnce", function() { return _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useEnsuredForwardedRef */ "./node_modules/react-use/esm/useEnsuredForwardedRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEnsuredForwardedRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["ensuredForwardRef"]; });

/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useEvent */ "./node_modules/react-use/esm/useEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEvent", function() { return _useEvent__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _useError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useError */ "./node_modules/react-use/esm/useError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useError", function() { return _useError__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _useFavicon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useFavicon */ "./node_modules/react-use/esm/useFavicon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFavicon", function() { return _useFavicon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _useFullscreen__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useFullscreen */ "./node_modules/react-use/esm/useFullscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFullscreen", function() { return _useFullscreen__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useGeolocation */ "./node_modules/react-use/esm/useGeolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return _useGeolocation__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useGetSet */ "./node_modules/react-use/esm/useGetSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSet", function() { return _useGetSet__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _useGetSetState__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./useGetSetState */ "./node_modules/react-use/esm/useGetSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSetState", function() { return _useGetSetState__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useHarmonicIntervalFn */ "./node_modules/react-use/esm/useHarmonicIntervalFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHarmonicIntervalFn", function() { return _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./useHover */ "./node_modules/react-use/esm/useHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useHoverDirty */ "./node_modules/react-use/esm/useHoverDirty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHoverDirty", function() { return _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _useIdle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useIdle */ "./node_modules/react-use/esm/useIdle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIdle", function() { return _useIdle__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _useIntersection__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useIntersection */ "./node_modules/react-use/esm/useIntersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntersection", function() { return _useIntersection__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./useInterval */ "./node_modules/react-use/esm/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./useKey */ "./node_modules/react-use/esm/useKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKey", function() { return _useKey__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _createBreakpoint__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./createBreakpoint */ "./node_modules/react-use/esm/createBreakpoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakpoint", function() { return _createBreakpoint__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./useKeyPress */ "./node_modules/react-use/esm/useKeyPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPress", function() { return _useKeyPress__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./useKeyPressEvent */ "./node_modules/react-use/esm/useKeyPressEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPressEvent", function() { return _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./useLifecycles */ "./node_modules/react-use/esm/useLifecycles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLifecycles", function() { return _useLifecycles__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./useList */ "./node_modules/react-use/esm/useList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useList", function() { return _useList__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./useLocalStorage */ "./node_modules/react-use/esm/useLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _useLocation__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./useLocation */ "./node_modules/react-use/esm/useLocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return _useLocation__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./useLockBodyScroll */ "./node_modules/react-use/esm/useLockBodyScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLockBodyScroll", function() { return _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _useLogger__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./useLogger */ "./node_modules/react-use/esm/useLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLogger", function() { return _useLogger__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _useLongPress__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./useLongPress */ "./node_modules/react-use/esm/useLongPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLongPress", function() { return _useLongPress__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./useMap */ "./node_modules/react-use/esm/useMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return _useMap__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./useMedia */ "./node_modules/react-use/esm/useMedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _useMedia__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _useMediaDevices__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./useMediaDevices */ "./node_modules/react-use/esm/useMediaDevices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaDevices", function() { return _useMediaDevices__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _useMediatedState__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./useMediatedState */ "./node_modules/react-use/esm/useMediatedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return _useMediatedState__WEBPACK_IMPORTED_MODULE_52__["useMediatedState"]; });

/* harmony import */ var _useMethods__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./useMethods */ "./node_modules/react-use/esm/useMethods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMethods", function() { return _useMethods__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _useMotion__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./useMotion */ "./node_modules/react-use/esm/useMotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMotion", function() { return _useMotion__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./useMount */ "./node_modules/react-use/esm/useMount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMount", function() { return _useMount__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMountedState", function() { return _useMountedState__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./useMouse */ "./node_modules/react-use/esm/useMouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouse", function() { return _useMouse__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _useMouseHovered__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./useMouseHovered */ "./node_modules/react-use/esm/useMouseHovered.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseHovered", function() { return _useMouseHovered__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./useNetwork */ "./node_modules/react-use/esm/useNetwork.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNetwork", function() { return _useNetwork__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _useNumber__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./useNumber */ "./node_modules/react-use/esm/useNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNumber", function() { return _useNumber__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _useObservable__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./useObservable */ "./node_modules/react-use/esm/useObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return _useObservable__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _useOrientation__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./useOrientation */ "./node_modules/react-use/esm/useOrientation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOrientation", function() { return _useOrientation__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _usePageLeave__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./usePageLeave */ "./node_modules/react-use/esm/usePageLeave.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageLeave", function() { return _usePageLeave__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _usePermission__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./usePermission */ "./node_modules/react-use/esm/usePermission.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePermission", function() { return _usePermission__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/react-use/esm/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./usePreviousDistinct */ "./node_modules/react-use/esm/usePreviousDistinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePreviousDistinct", function() { return _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _usePromise__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./usePromise */ "./node_modules/react-use/esm/usePromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePromise", function() { return _usePromise__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _useQueue__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./useQueue */ "./node_modules/react-use/esm/useQueue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueue", function() { return _useQueue__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./useRaf */ "./node_modules/react-use/esm/useRaf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRaf", function() { return _useRaf__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _useRafLoop__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./useRafLoop */ "./node_modules/react-use/esm/useRafLoop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafLoop", function() { return _useRafLoop__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafState", function() { return _useRafState__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _useSearchParam__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./useSearchParam */ "./node_modules/react-use/esm/useSearchParam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchParam", function() { return _useSearchParam__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./useScroll */ "./node_modules/react-use/esm/useScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return _useScroll__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _useScrolling__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./useScrolling */ "./node_modules/react-use/esm/useScrolling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrolling", function() { return _useScrolling__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _useSessionStorage__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./useSessionStorage */ "./node_modules/react-use/esm/useSessionStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSessionStorage", function() { return _useSessionStorage__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetState", function() { return _useSetState__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./useShallowCompareEffect */ "./node_modules/react-use/esm/useShallowCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShallowCompareEffect", function() { return _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./useSize */ "./node_modules/react-use/esm/useSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return _useSize__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _useSlider__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./useSlider */ "./node_modules/react-use/esm/useSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlider", function() { return _useSlider__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _useSpeech__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./useSpeech */ "./node_modules/react-use/esm/useSpeech.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpeech", function() { return _useSpeech__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _useStartTyping__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./useStartTyping */ "./node_modules/react-use/esm/useStartTyping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStartTyping", function() { return _useStartTyping__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _useStateWithHistory__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./useStateWithHistory */ "./node_modules/react-use/esm/useStateWithHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return _useStateWithHistory__WEBPACK_IMPORTED_MODULE_82__["useStateWithHistory"]; });

/* harmony import */ var _useStateList__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./useStateList */ "./node_modules/react-use/esm/useStateList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateList", function() { return _useStateList__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _useThrottle__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./useThrottle */ "./node_modules/react-use/esm/useThrottle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottle", function() { return _useThrottle__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./useThrottleFn */ "./node_modules/react-use/esm/useThrottleFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottleFn", function() { return _useThrottleFn__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./useTimeout */ "./node_modules/react-use/esm/useTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./useTimeoutFn */ "./node_modules/react-use/esm/useTimeoutFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeoutFn", function() { return _useTimeoutFn__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _useTitle__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./useTitle */ "./node_modules/react-use/esm/useTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitle", function() { return _useTitle__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./useToggle */ "./node_modules/react-use/esm/useToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _useToggle__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _useTween__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./useTween */ "./node_modules/react-use/esm/useTween.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTween", function() { return _useTween__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return _useUnmount__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _useUnmountPromise__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./useUnmountPromise */ "./node_modules/react-use/esm/useUnmountPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmountPromise", function() { return _useUnmountPromise__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdate", function() { return _useUpdate__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return _useUpdateEffect__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _useUpsert__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./useUpsert */ "./node_modules/react-use/esm/useUpsert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpsert", function() { return _useUpsert__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _useVibrate__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./useVibrate */ "./node_modules/react-use/esm/useVibrate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVibrate", function() { return _useVibrate__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _useVideo__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./useVideo */ "./node_modules/react-use/esm/useVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVideo", function() { return _useVideo__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _useStateValidator__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./useStateValidator */ "./node_modules/react-use/esm/useStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateValidator", function() { return _useStateValidator__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./useScrollbarWidth */ "./node_modules/react-use/esm/useScrollbarWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_99__["useScrollbarWidth"]; });

/* harmony import */ var _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./useMultiStateValidator */ "./node_modules/react-use/esm/useMultiStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_100__["useMultiStateValidator"]; });

/* harmony import */ var _useWindowScroll__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./useWindowScroll */ "./node_modules/react-use/esm/useWindowScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowScroll", function() { return _useWindowScroll__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./useWindowSize */ "./node_modules/react-use/esm/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _useMeasure__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./useMeasure */ "./node_modules/react-use/esm/useMeasure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMeasure", function() { return _useMeasure__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _useRendersCount__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./useRendersCount */ "./node_modules/react-use/esm/useRendersCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return _useRendersCount__WEBPACK_IMPORTED_MODULE_104__["useRendersCount"]; });

/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return _useFirstMountState__WEBPACK_IMPORTED_MODULE_105__["useFirstMountState"]; });

/* harmony import */ var _useSet__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./useSet */ "./node_modules/react-use/esm/useSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSet", function() { return _useSet__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./createGlobalState */ "./node_modules/react-use/esm/createGlobalState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return _createGlobalState__WEBPACK_IMPORTED_MODULE_107__["createGlobalState"]; });

/* harmony import */ var _useHash__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./useHash */ "./node_modules/react-use/esm/useHash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return _useHash__WEBPACK_IMPORTED_MODULE_108__["useHash"]; });









































// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';









































// not exported because of peer dependency
// export { default as useSpring } from './useSpring';






























/***/ }),

/***/ "./node_modules/react-use/esm/useAsync.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useAsync.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsyncFn */ "./node_modules/react-use/esm/useAsyncFn.js");


function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback();
    }, [callback]);
    return state;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useAsyncFn.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useAsyncFn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsyncFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* eslint-disable */


function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], set = _a[1];
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set({ loading: true });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useAsyncRetry.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useAsyncRetry.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsync */ "./node_modules/react-use/esm/useAsync.js");

/* eslint-disable */


var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), attempt = _a[0], setAttempt = _a[1];
    var state = Object(_useAsync__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [stateLoading]));
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { retry: retry });
};
/* harmony default export */ __webpack_exports__["default"] = (useAsyncRetry);


/***/ }),

/***/ "./node_modules/react-use/esm/useAudio.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useAudio.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createHTMLMediaHook */ "./node_modules/react-use/esm/util/createHTMLMediaHook.js");

var useAudio = Object(_util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('audio');
/* harmony default export */ __webpack_exports__["default"] = (useAudio);


/***/ }),

/***/ "./node_modules/react-use/esm/useBattery.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useBattery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"], useEffect = react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
var nav = typeof navigator === 'object' ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDeepEqual"])(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingchange', handleChange);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingtimechange', handleChange);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'dischargingtimechange', handleChange);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingchange', handleChange);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingtimechange', handleChange);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'dischargingtimechange', handleChange);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
/* harmony default export */ __webpack_exports__["default"] = (isBatteryApiSupported ? useBattery : useBatteryMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useBeforeUnload.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useBeforeUnload.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!enabled) {
            return;
        }
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, [enabled, handler]);
};
/* harmony default export */ __webpack_exports__["default"] = (useBeforeUnload);


/***/ }),

/***/ "./node_modules/react-use/esm/useBoolean.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useBoolean.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useToggle */ "./node_modules/react-use/esm/useToggle.js");

/* harmony default export */ __webpack_exports__["default"] = (_useToggle__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-use/esm/useClickAway.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useClickAway.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onClickAway);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
/* harmony default export */ __webpack_exports__["default"] = (useClickAway);


/***/ }),

/***/ "./node_modules/react-use/esm/useCookie.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useCookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var useCookie = function (cookieName) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newValue, options) {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
/* harmony default export */ __webpack_exports__["default"] = (useCookie);


/***/ }),

/***/ "./node_modules/react-use/esm/useCopyToClipboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/useCopyToClipboard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");
/* eslint-disable */




var useCopyToClipboard = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
        try {
            if (true) {
                if (typeof value !== 'string') {
                    console.error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                }
            }
            var noUserInteraction = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default()(value);
            if (!isMounted()) {
                return;
            }
            setState({
                value: value,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            if (!isMounted()) {
                return;
            }
            setState({
                value: undefined,
                error: error,
                noUserInteraction: true,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
/* harmony default export */ __webpack_exports__["default"] = (useCopyToClipboard);


/***/ }),

/***/ "./node_modules/react-use/esm/useCounter.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useCounter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGetSet */ "./node_modules/react-use/esm/useGetSet.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");
/* eslint-disable */



function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialValue);
    typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = Object(_useGetSet__WEBPACK_IMPORTED_MODULE_1__["default"])(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useCss.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useCss.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nano-css */ "./node_modules/nano-css/index.js");
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nano-css/addon/cssom */ "./node_modules/nano-css/addon/cssom.js");
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nano-css/addon/vcssom */ "./node_modules/nano-css/addon/vcssom.js");
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "./node_modules/nano-css/addon/vcssom/cssToTree.js");
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var nano = Object(nano_css__WEBPACK_IMPORTED_MODULE_0__["create"])();
Object(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__["addon"])(nano);
Object(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__["addon"])(nano);
var counter = 0;
var useCss = function (css) {
    var className = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return new nano.VSheet(); }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useLayoutEffect"])(function () {
        var tree = {};
        Object(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__["cssToTree"])(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
/* harmony default export */ __webpack_exports__["default"] = (useCss);


/***/ }),

/***/ "./node_modules/react-use/esm/useCustomCompareEffect.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-use/esm/useCustomCompareEffect.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, ref.current);
};
/* harmony default export */ __webpack_exports__["default"] = (useCustomCompareEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useDebounce.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useDebounce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeoutFn */ "./node_modules/react-use/esm/useTimeoutFn.js");


function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(reset, deps);
    return [isReady, cancel];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useDeepCompareEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use/esm/useDeepCompareEffect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCustomCompareEffect */ "./node_modules/react-use/esm/useCustomCompareEffect.js");


var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effect, deps, _util__WEBPACK_IMPORTED_MODULE_0__["isDeepEqual"]);
};
/* harmony default export */ __webpack_exports__["default"] = (useDeepCompareEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useDefault.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useDefault.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useDefault = function (defaultValue, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
/* harmony default export */ __webpack_exports__["default"] = (useDefault);


/***/ }),

/***/ "./node_modules/react-use/esm/useDrop.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useDrop.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");

/* eslint-disable */


var useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"], useMemo = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"], useCallback = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"], useEffect = react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = useCallback(setOverRaw, []);
    var process = useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        document.addEventListener('dragover', onDragOver);
        document.addEventListener('dragenter', onDragEnter);
        document.addEventListener('dragleave', onDragLeave);
        document.addEventListener('dragexit', onDragExit);
        document.addEventListener('drop', onDrop);
        if (onText) {
            document.addEventListener('paste', onPaste);
        }
        return function () {
            document.removeEventListener('dragover', onDragOver);
            document.removeEventListener('dragenter', onDragEnter);
            document.removeEventListener('dragleave', onDragLeave);
            document.removeEventListener('dragexit', onDragExit);
            document.removeEventListener('drop', onDrop);
            document.removeEventListener('paste', onPaste);
        };
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([process], args));
    return { over: over };
};
/* harmony default export */ __webpack_exports__["default"] = (useDrop);


/***/ }),

/***/ "./node_modules/react-use/esm/useDropArea.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useDropArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* eslint-disable */


var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), over = _a[0], setOver = _a[1];
    var process = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
/* harmony default export */ __webpack_exports__["default"] = (useDropArea);


/***/ }),

/***/ "./node_modules/react-use/esm/useEffectOnce.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useEffectOnce.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEffectOnce = function (effect) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useEffectOnce);


/***/ }),

/***/ "./node_modules/react-use/esm/useEnsuredForwardedRef.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-use/esm/useEnsuredForwardedRef.js ***!
  \**************************************************************/
/*! exports provided: default, ensuredForwardRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEnsuredForwardedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return ensuredForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(forwardedRef && forwardedRef.current);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
function ensuredForwardRef(Component) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}


/***/ }),

/***/ "./node_modules/react-use/esm/useError.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useError.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useError = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _a[0], setError = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
/* harmony default export */ __webpack_exports__["default"] = (useError);


/***/ }),

/***/ "./node_modules/react-use/esm/useEvent.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useEvent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var defaultTarget = _util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            target.addEventListener(name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                target.removeEventListener(name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
/* harmony default export */ __webpack_exports__["default"] = (useEvent);


/***/ }),

/***/ "./node_modules/react-use/esm/useFavicon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useFavicon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useFavicon = function (href) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
/* harmony default export */ __webpack_exports__["default"] = (useFavicon);


/***/ }),

/***/ "./node_modules/react-use/esm/useFirstMountState.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/useFirstMountState.js ***!
  \**********************************************************/
/*! exports provided: useFirstMountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return useFirstMountState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFirstMountState() {
    var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useFullscreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useFullscreen.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */


var noop = function () { };
var useFullscreen = function (ref, on, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? noop : _a;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(on), isFullscreen = _b[0], setIsFullscreen = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        if (!on) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            onClose();
        };
        var onChange = function () {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                var isScreenfullFullscreen = screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
            try {
                screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            video.current.addEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                try {
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.off('change', onChange);
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [on, video, ref]);
    return isFullscreen;
};
/* harmony default export */ __webpack_exports__["default"] = (useFullscreen);


/***/ }),

/***/ "./node_modules/react-use/esm/useGeolocation.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useGeolocation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable */

var useGeolocation = function (options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { loading: false, error: error })); });
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useGeolocation);


/***/ }),

/***/ "./node_modules/react-use/esm/useGetSet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useGetSet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");
/* eslint-disable */



function useGetSet(initialState) {
    var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialState));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return [
        // get
        function () { return state.current; },
        // set
        function (newState) {
            state.current = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, state.current);
            update();
        },
    ]; }, []);
}


/***/ }),

/***/ "./node_modules/react-use/esm/useGetSetState.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useGetSetState.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");

/* eslint-disable */


var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialState));
    var get = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return state.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
/* harmony default export */ __webpack_exports__["default"] = (useGetSetState);


/***/ }),

/***/ "./node_modules/react-use/esm/useHarmonicIntervalFn.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-use/esm/useHarmonicIntervalFn.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! set-harmonic-interval */ "./node_modules/set-harmonic-interval/lib/index.esm.js");


var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        latestCallback.current = fn;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["setHarmonicInterval"])(function () { return latestCallback.current(); }, delay);
            return function () { return Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["clearHarmonicInterval"])(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useHarmonicIntervalFn);


/***/ }),

/***/ "./node_modules/react-use/esm/useHash.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useHash.js ***!
  \***********************************************/
/*! exports provided: useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return useHash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLifecycles */ "./node_modules/react-use/esm/useLifecycles.js");


/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setHash(window.location.hash);
    }, []);
    Object(_useLifecycles__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        window.addEventListener('hashchange', onHashChange);
    }, function () {
        window.removeEventListener('hashchange', onHashChange);
    });
    var _setHash = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};


/***/ }),

/***/ "./node_modules/react-use/esm/useHover.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useHover.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"];
var noop = function () { };
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useHover);


/***/ }),

/***/ "./node_modules/react-use/esm/useHoverDirty.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useHoverDirty.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver);
            ref.current.addEventListener('mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                current.removeEventListener('mouseover', onMouseOver);
                current.removeEventListener('mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
/* harmony default export */ __webpack_exports__["default"] = (useHoverDirty);


/***/ }),

/***/ "./node_modules/react-use/esm/useIdle.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useIdle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/dist/index.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */



var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, events[i], onEvent);
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, events[i], onEvent);
            }
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useIdle);


/***/ }),

/***/ "./node_modules/react-use/esm/useIntersection.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useIntersection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var useIntersection = function (ref, options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
/* harmony default export */ __webpack_exports__["default"] = (useIntersection);


/***/ }),

/***/ "./node_modules/react-use/esm/useInterval.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useInterval.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useInterval = function (callback, delay) {
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = callback;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useInterval);


/***/ }),

/***/ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-use/esm/useIsomorphicLayoutEffect.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useKey.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useKey.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEvent */ "./node_modules/react-use/esm/useEvent.js");
/* eslint-disable */


var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    Object(_useEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(event, useMemoHandler, target, options);
};
/* harmony default export */ __webpack_exports__["default"] = (useKey);


/***/ }),

/***/ "./node_modules/react-use/esm/useKeyPress.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useKeyPress.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKey */ "./node_modules/react-use/esm/useKey.js");


var useKeyPress = function (keyFilter) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([false, null]), state = _a[0], set = _a[1];
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPress);


/***/ }),

/***/ "./node_modules/react-use/esm/useKeyPressEvent.js":
/*!********************************************************!*\
  !*** ./node_modules/react-use/esm/useKeyPressEvent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useKeyPress */ "./node_modules/react-use/esm/useKeyPress.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");


var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = _useKeyPress__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPressEvent);


/***/ }),

/***/ "./node_modules/react-use/esm/useLifecycles.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useLifecycles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var useLifecycles = function (mount, unmount) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useLifecycles);


/***/ }),

/***/ "./node_modules/react-use/esm/useList.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");
/* eslint-disable */



function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var a = {
            set: function (newList) {
                list.current = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
/* harmony default export */ __webpack_exports__["default"] = (useList);


/***/ }),

/***/ "./node_modules/react-use/esm/useLocalStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useLocalStorage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var useLocalStorage = function (key, initialValue, options) {
    if (!_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
        return [initialValue, function () { }];
    }
    // Use provided serializer/deserializer or the default ones
    var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
    var deserializer = options ? (options.raw ? String : options.deserializer) : JSON.parse;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        try {
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        try {
            localStorage.setItem(key, serializer(state));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [state]);
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);


/***/ }),

/***/ "./node_modules/react-use/esm/useLocation.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useLocation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var patchHistoryMethod = function (method) {
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var state = history.state, length = history.length;
    var hash = location.hash, host = location.host, hostname = location.hostname, href = location.href, origin = location.origin, pathname = location.pathname, port = location.port, protocol = location.protocol, search = location.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(buildState('load')), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'popstate', onPopstate);
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'pushstate', onPushstate);
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'replacestate', onReplacestate);
        return function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'popstate', onPopstate);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'pushstate', onPushstate);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
/* harmony default export */ __webpack_exports__["default"] = (_util__WEBPACK_IMPORTED_MODULE_1__["isClient"] && hasEventConstructor ? useLocationBrowser : useLocationServer);


/***/ }),

/***/ "./node_modules/react-use/esm/useLockBodyScroll.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useLockBodyScroll.js ***!
  \*********************************************************/
/*! exports provided: getClosestBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestBody", function() { return getClosestBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
/* harmony default export */ __webpack_exports__["default"] = (!doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        elementRef = elementRef || Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(doc.body);
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            var bodyInfo = bodies.get(body);
            if (locked) {
                if (!bodyInfo) {
                    bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                    if (isIosDevice) {
                        if (!documentListenerAdded) {
                            document.addEventListener('touchmove', preventDefault, { passive: false });
                            documentListenerAdded = true;
                        }
                    }
                    else {
                        body.style.overflow = 'hidden';
                    }
                }
                else {
                    bodies.set(body, { counter: bodyInfo.counter + 1, initialOverflow: bodyInfo.initialOverflow });
                }
            }
            else {
                if (bodyInfo) {
                    if (bodyInfo.counter === 1) {
                        bodies.delete(body);
                        if (isIosDevice) {
                            body.ontouchmove = null;
                            if (documentListenerAdded) {
                                document.removeEventListener('touchmove', preventDefault);
                                documentListenerAdded = false;
                            }
                        }
                        else {
                            body.style.overflow = bodyInfo.initialOverflow;
                        }
                    }
                    else {
                        bodies.set(body, { counter: bodyInfo.counter - 1, initialOverflow: bodyInfo.initialOverflow });
                    }
                }
            }
        }, [locked, elementRef.current]);
    });


/***/ }),

/***/ "./node_modules/react-use/esm/useLogger.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useLogger.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");



var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " updated"], rest));
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useLogger);


/***/ }),

/***/ "./node_modules/react-use/esm/useLongPress.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useLongPress.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var isTouchEvent = function (event) {
    return 'touches' in event;
};
var preventDefault = function (event) {
    if (!isTouchEvent(event))
        return;
    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var target = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            event.target.addEventListener('touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, []);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useLongPress);


/***/ }),

/***/ "./node_modules/react-use/esm/useMap.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useMap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable */

var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialMap), map = _a[0], set = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ get: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useMap);


/***/ }),

/***/ "./node_modules/react-use/esm/useMeasure.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useMeasure.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");


var useMeasure = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }), rect = _a[0], set = _a[1];
    var observer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](function (entries) {
            var entry = entries[0];
            if (entry) {
                set(entry.contentRect);
            }
        });
    })[0];
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
        observer.disconnect();
        if (node) {
            observer.observe(node);
        }
    }, [observer]);
    return [ref, rect];
};
/* harmony default export */ __webpack_exports__["default"] = (useMeasure);


/***/ }),

/***/ "./node_modules/react-use/esm/useMedia.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMedia.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMedia);


/***/ }),

/***/ "./node_modules/react-use/esm/useMediaDevices.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useMediaDevices.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var noop = function () { };
var useMediaDevices = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({ deviceId: deviceId, groupId: groupId, kind: kind, label: label });
                        }),
                    });
                }
            })
                .catch(noop);
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
/* harmony default export */ __webpack_exports__["default"] = (typeof navigator === 'object' && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useMediatedState.js":
/*!********************************************************!*\
  !*** ./node_modules/react-use/esm/useMediatedState.js ***!
  \********************************************************/
/*! exports provided: useMediatedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return useMediatedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

function useMediatedState(mediator, initialState) {
    var mediatorFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(mediator);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useMethods.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useMethods.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useMethods = function (createMethods, initialState) {
    var reducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
/* harmony default export */ __webpack_exports__["default"] = (useMethods);


/***/ }),

/***/ "./node_modules/react-use/esm/useMotion.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useMotion.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'devicemotion', handler);
        return function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMotion);


/***/ }),

/***/ "./node_modules/react-use/esm/useMount.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMount.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useMount);


/***/ }),

/***/ "./node_modules/react-use/esm/useMountedState.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useMountedState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMountedState() {
    var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var get = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return mountedRef.current; }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useMouse.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* eslint-disable */


var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouse);


/***/ }),

/***/ "./node_modules/react-use/esm/useMouseHovered.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useMouseHovered.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useHoverDirty */ "./node_modules/react-use/esm/useHoverDirty.js");
/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMouse */ "./node_modules/react-use/esm/useMouse.js");


var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = Object(_useHoverDirty__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, whenHovered);
    var state = Object(_useMouse__WEBPACK_IMPORTED_MODULE_1__["default"])(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouseHovered);


/***/ }),

/***/ "./node_modules/react-use/esm/useMultiStateValidator.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-use/esm/useMultiStateValidator.js ***!
  \**************************************************************/
/*! exports provided: useMultiStateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return useMultiStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var statesInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useNetwork.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useNetwork.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");

/* eslint-disable */


var getConnection = function () {
    if (typeof navigator !== 'object') {
        return null;
    }
    var nav = navigator;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};
var getConnectionState = function () {
    var connection = getConnection();
    if (!connection) {
        return {};
    }
    var downlink = connection.downlink, downlinkMax = connection.downlinkMax, effectiveType = connection.effectiveType, type = connection.type, rtt = connection.rtt;
    return {
        downlink: downlink,
        downlinkMax: downlinkMax,
        effectiveType: effectiveType,
        type: type,
        rtt: rtt,
    };
};
var useNetwork = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var localState = state;
        var localSetState = function (patch) {
            localState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, localState), patch);
            setState(localState);
        };
        var connection = getConnection();
        var onOnline = function () {
            localSetState({
                online: true,
                since: new Date(),
            });
        };
        var onOffline = function () {
            localSetState({
                online: false,
                since: new Date(),
            });
        };
        var onConnectionChange = function () {
            localSetState(getConnectionState());
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'online', onOnline);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'offline', onOffline);
        if (connection) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(connection, 'change', onConnectionChange);
            localSetState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { online: navigator.onLine, since: undefined }), getConnectionState()));
        }
        return function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'online', onOnline);
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'offline', onOffline);
            if (connection) {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(connection, 'change', onConnectionChange);
            }
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useNetwork);


/***/ }),

/***/ "./node_modules/react-use/esm/useNumber.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useNumber.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCounter */ "./node_modules/react-use/esm/useCounter.js");

/* harmony default export */ __webpack_exports__["default"] = (_useCounter__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-use/esm/useObservable.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useObservable.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], update = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ __webpack_exports__["default"] = (useObservable);


/***/ }),

/***/ "./node_modules/react-use/esm/useOrientation.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useOrientation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useOrientation);


/***/ }),

/***/ "./node_modules/react-use/esm/usePageLeave.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/usePageLeave.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        document.addEventListener('mouseout', handler);
        return function () {
            document.removeEventListener('mouseout', handler);
        };
    }, args);
};
/* harmony default export */ __webpack_exports__["default"] = (usePageLeave);


/***/ }),

/***/ "./node_modules/react-use/esm/usePermission.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/usePermission.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var noop = function () { };
var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(permissionStatus, 'change', onChange);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(noop);
        return function () {
            mounted = false;
            permissionStatus && Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (usePermission);


/***/ }),

/***/ "./node_modules/react-use/esm/usePrevious.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/usePrevious.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var usePrevious = function (state) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = state;
    });
    return ref.current;
};
/* harmony default export */ __webpack_exports__["default"] = (usePrevious);


/***/ }),

/***/ "./node_modules/react-use/esm/usePreviousDistinct.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-use/esm/usePreviousDistinct.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePreviousDistinct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");


var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var curRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/usePromise.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/usePromise.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* eslint-disable */


var usePromise = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (usePromise);


/***/ }),

/***/ "./node_modules/react-use/esm/useQueue.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useQueue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useQueue);


/***/ }),

/***/ "./node_modules/react-use/esm/useRaf.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useRaf.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), elapsed = _a[0], set = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
/* harmony default export */ __webpack_exports__["default"] = (useRaf);


/***/ }),

/***/ "./node_modules/react-use/esm/useRafLoop.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useRafLoop.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRafLoop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var rafActivity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var rafCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    rafCallback.current = callback;
    var step = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return [
        function () {
            if (rafActivity.current) {
                rafActivity.current = false;
                raf.current && cancelAnimationFrame(raf.current);
            }
        },
        function () {
            if (!rafActivity.current) {
                rafActivity.current = true;
                raf.current = requestAnimationFrame(step);
            }
        },
        function () { return rafActivity.current; } // isActive
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ]; }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useRafState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useRafState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");


var useRafState = function (initialState) {
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    var setRafState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ __webpack_exports__["default"] = (useRafState);


/***/ }),

/***/ "./node_modules/react-use/esm/useRendersCount.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useRendersCount.js ***!
  \*******************************************************/
/*! exports provided: useRendersCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return useRendersCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRendersCount() {
    return ++Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0).current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useScroll.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useScroll.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* eslint-disable */


var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            ref.current.addEventListener('scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener('scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useScroll);


/***/ }),

/***/ "./node_modules/react-use/esm/useScrollbarWidth.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useScrollbarWidth.js ***!
  \*********************************************************/
/*! exports provided: useScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return useScrollbarWidth; });
/* harmony import */ var _xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xobotyi/scrollbar-width */ "./node_modules/@xobotyi/scrollbar-width/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */


function useScrollbarWidth() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useScrolling.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useScrolling.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var useScrolling = function (ref) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), scrolling = _a[0], setScrolling = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            ref.current.addEventListener('scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    ref.current.removeEventListener('scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
/* harmony default export */ __webpack_exports__["default"] = (useScrolling);


/***/ }),

/***/ "./node_modules/react-use/esm/useSearchParam.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useSearchParam.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        window.addEventListener('popstate', onChange);
        window.addEventListener('pushstate', onChange);
        window.addEventListener('replacestate', onChange);
        return function () {
            window.removeEventListener('popstate', onChange);
            window.removeEventListener('pushstate', onChange);
            window.removeEventListener('replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
/* harmony default export */ __webpack_exports__["default"] = (typeof window === 'object' ? useSearchParam : useSearchParamServer);


/***/ }),

/***/ "./node_modules/react-use/esm/useSessionStorage.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useSessionStorage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */


var useSessionStorage = function (key, initialValue, raw) {
    if (!_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
        return [initialValue, function () { }];
    }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);


/***/ }),

/***/ "./node_modules/react-use/esm/useSet.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useSet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable */

var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item])); }); };
        var remove = function (item) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); }); };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ has: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useSet);


/***/ }),

/***/ "./node_modules/react-use/esm/useSetState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useSetState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], set = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSetState);


/***/ }),

/***/ "./node_modules/react-use/esm/useShallowCompareEffect.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-use/esm/useShallowCompareEffect.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-shallow-equal */ "./node_modules/fast-shallow-equal/index.js");
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCustomCompareEffect */ "./node_modules/react-use/esm/useCustomCompareEffect.js");


var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return Object(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__["equal"])(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effect, deps, shallowEqualDepsList);
};
/* harmony default export */ __webpack_exports__["default"] = (useShallowCompareEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useSize.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");

/* eslint-disable */


var useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"], useEffect = react__WEBPACK_IMPORTED_MODULE_1__["useEffect"], useRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"];
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!_util__WEBPACK_IMPORTED_MODULE_2__["isClient"]) {
        return [typeof element === 'function' ? element({ width: width, height: height }) : element, { width: width, height: height }];
    }
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        windowToListenOn.addEventListener('resize', setSize);
        DRAF(setSize);
    };
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                iframe.removeEventListener('load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            iframe.addEventListener('load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                window.removeEventListener('resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(react__WEBPACK_IMPORTED_MODULE_1__, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([element,
        { style: style }], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(element.props.children))));
    return [sized, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useSize);


/***/ }),

/***/ "./node_modules/react-use/esm/useSlider.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useSlider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");
/* eslint-disable */




var noop = function () { };
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var isSliding = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || noop)(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mousemove', onMouseMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mouseup', stopScrubbing_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchmove', onTouchMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mousemove', onMouseMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mouseup', stopScrubbing_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchmove', onTouchMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || noop)(value);
                    }
                });
            };
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mousedown', onMouseDown_1);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'mousedown', onMouseDown_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSlider);


/***/ }),

/***/ "./node_modules/react-use/esm/useSpeech.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useSpeech.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMount */ "./node_modules/react-use/esm/useMount.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");



var voices = typeof window === 'object' && typeof window.speechSynthesis === 'object' ? window.speechSynthesis.getVoices() : [];
var useSpeech = function (text, opts) {
    if (opts === void 0) { opts = {}; }
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_2__["default"])({
        isPlaying: false,
        lang: opts.lang || 'default',
        voice: opts.voice || voices[0],
        rate: opts.rate || 1,
        pitch: opts.pitch || 1,
        volume: opts.volume || 1,
    }), state = _a[0], setState = _a[1];
    var uterranceRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(_useMount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var utterance = new SpeechSynthesisUtterance(text);
        opts.lang && (utterance.lang = opts.lang);
        opts.voice && (utterance.voice = opts.voice);
        utterance.rate = opts.rate || 1;
        utterance.pitch = opts.pitch || 1;
        utterance.volume = opts.volume || 1;
        utterance.onstart = function () { return setState({ isPlaying: true }); };
        utterance.onresume = function () { return setState({ isPlaying: true }); };
        utterance.onend = function () { return setState({ isPlaying: false }); };
        utterance.onpause = function () { return setState({ isPlaying: false }); };
        uterranceRef.current = utterance;
        window.speechSynthesis.speak(uterranceRef.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSpeech);


/***/ }),

/***/ "./node_modules/react-use/esm/useStartTyping.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useStartTyping.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        document.addEventListener('keydown', keydown);
        return function () {
            document.removeEventListener('keydown', keydown);
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useStartTyping);


/***/ }),

/***/ "./node_modules/react-use/esm/useStateList.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useStateList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");

/* eslint-disable */




function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    // If new state list is shorter that before - switch to the last element
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ state: stateSet[index.current], currentIndex: index.current }, actions);
}


/***/ }),

/***/ "./node_modules/react-use/esm/useStateValidator.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useStateValidator.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var stateInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, [state]);
    return [validity, validate];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useStateWithHistory.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-use/esm/useStateWithHistory.js ***!
  \***********************************************************/
/*! exports provided: useStateWithHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return useStateWithHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");
/* eslint-disable */



function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], innerSetState = _a[1];
    var history = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        innerSetState(function (currentState) {
            newState = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useThrottle.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useThrottle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");
/* eslint-disable */


var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var hasNextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottle);


/***/ }),

/***/ "./node_modules/react-use/esm/useThrottleFn.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useThrottleFn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");
/* eslint-disable */


var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextArgs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottleFn);


/***/ }),

/***/ "./node_modules/react-use/esm/useTimeout.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTimeoutFn */ "./node_modules/react-use/esm/useTimeoutFn.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");


function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__["default"])(update, ms);
}


/***/ }),

/***/ "./node_modules/react-use/esm/useTimeoutFn.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeoutFn.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeoutFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    var isReady = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return ready.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useTitle.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useTitle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(document.title);
    document.title = title;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
/* harmony default export */ __webpack_exports__["default"] = (typeof document !== 'undefined' ? useTitle : function (_title) { });


/***/ }),

/***/ "./node_modules/react-use/esm/useToggle.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useToggle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var toggleReducer = function (state, nextValue) { return (typeof nextValue === 'boolean' ? nextValue : !state); };
var useToggle = function (initialValue) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(toggleReducer, initialValue);
};
/* harmony default export */ __webpack_exports__["default"] = (useToggle);


/***/ }),

/***/ "./node_modules/react-use/esm/useTween.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useTween.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-easing */ "./node_modules/ts-easing/lib/index.js");
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRaf */ "./node_modules/react-use/esm/useRaf.js");


var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"][easingName];
    var t = Object(_useRaf__WEBPACK_IMPORTED_MODULE_1__["default"])(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"]).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
/* harmony default export */ __webpack_exports__["default"] = (useTween);


/***/ }),

/***/ "./node_modules/react-use/esm/useUnmount.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmount.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");


var useUnmount = function (fn) {
    var fnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmount);


/***/ }),

/***/ "./node_modules/react-use/esm/useUnmountPromise.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmountPromise.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useUnmountPromise = function () {
    var refUnmounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmountPromise);


/***/ }),

/***/ "./node_modules/react-use/esm/useUpdate.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useUpdate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var incrementParameter = function (num) { return ++num % 1000000; };
var useUpdate = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), setState = _a[1];
    // useCallback with empty deps as we only want to define updateCb once
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return setState(incrementParameter); }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useUpdate);


/***/ }),

/***/ "./node_modules/react-use/esm/useUpdateEffect.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useUpdateEffect.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");
/* eslint-disable */


var useUpdateEffect = function (effect, deps) {
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useUpsert.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useUpsert.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpsert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useList */ "./node_modules/react-use/esm/useList.js");


/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = Object(_useList__WEBPACK_IMPORTED_MODULE_1__["default"])(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useVibrate.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useVibrate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

var isVibrationApiSupported = typeof navigator === 'object' && 'vibrate' in navigator;
var useVibrateMock = function () { };
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
/* harmony default export */ __webpack_exports__["default"] = (isVibrationApiSupported ? useVibrate : useVibrateMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useVideo.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useVideo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createHTMLMediaHook */ "./node_modules/react-use/esm/util/createHTMLMediaHook.js");

var useVideo = Object(_util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('video');
/* harmony default export */ __webpack_exports__["default"] = (useVideo);


/***/ }),

/***/ "./node_modules/react-use/esm/useWindowScroll.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowScroll.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* eslint-disable */



var useWindowScroll = function () {
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_2__["default"])({
        x: _util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window.pageXOffset : 0,
        y: _util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window.pageYOffset : 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            setState({
                x: window.pageXOffset,
                y: window.pageYOffset,
            });
        };
        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowScroll);


/***/ }),

/***/ "./node_modules/react-use/esm/useWindowSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* eslint-disable */



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        width: _util__WEBPACK_IMPORTED_MODULE_2__["isClient"] ? window.innerWidth : initialWidth,
        height: _util__WEBPACK_IMPORTED_MODULE_2__["isClient"] ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_util__WEBPACK_IMPORTED_MODULE_2__["isClient"]) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener('resize', handler_1);
            return function () {
                window.removeEventListener('resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);


/***/ }),

/***/ "./node_modules/react-use/esm/util.js":
/*!********************************************!*\
  !*** ./node_modules/react-use/esm/util.js ***!
  \********************************************/
/*! exports provided: isClient, on, off, isDeepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeepEqual", function() { return isDeepEqual; });
var isClient = typeof window === 'object';
var on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
var off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
var isDeepEqual = __webpack_require__(/*! fast-deep-equal/react */ "./node_modules/fast-deep-equal/react.js");


/***/ }),

/***/ "./node_modules/react-use/esm/util/createHTMLMediaHook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-use/esm/util/createHTMLMediaHook.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useSetState */ "./node_modules/react-use/esm/useSetState.js");
/* harmony import */ var _parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseTimeRanges */ "./node_modules/react-use/esm/util/parseTimeRanges.js");

/* eslint-disable */




var createHTMLMediaHook = function (tag) {
    var hook = function (elOrProps) {
        var element;
        var props;
        if (react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_2__["default"])({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
        }), state = _a[0], setState = _a[1];
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPause = function () { return setState({ paused: true }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: Object(_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: Object(_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(el.buffered) });
        };
        if (element) {
            element = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            var el = ref.current;
            if (!el) {
                if (true) {
                    if (tag === 'audio') {
                        console.error('useAudio() ref to <audio> element is empty at mount. ' +
                            'It seem you have not rendered the audio element, which it ' +
                            'returns as the first argument const [audio] = useAudio(...).');
                    }
                    else if (tag === 'video') {
                        console.error('useVideo() ref to <video> element is empty at mount. ' +
                            'It seem you have not rendered the video element, which it ' +
                            'returns as the first argument const [video] = useVideo(...).');
                    }
                }
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
    return hook;
};
/* harmony default export */ __webpack_exports__["default"] = (createHTMLMediaHook);


/***/ }),

/***/ "./node_modules/react-use/esm/util/parseTimeRanges.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use/esm/util/parseTimeRanges.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var parseTimeRanges = function (ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
};
/* harmony default export */ __webpack_exports__["default"] = (parseTimeRanges);


/***/ }),

/***/ "./node_modules/react-use/esm/util/resolveHookState.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-use/esm/util/resolveHookState.js ***!
  \*************************************************************/
/*! exports provided: resolveHookState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHookState", function() { return resolveHookState; });
function resolveHookState(newState, currentState) {
    if (typeof newState === 'function') {
        return newState(currentState);
    }
    return newState;
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.0.2 - 2020-02-13
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element) {
			return this.isFullscreen ? this.exit() : this.request(element);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "./node_modules/set-harmonic-interval/lib/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/set-harmonic-interval/lib/index.esm.js ***!
  \*************************************************************/
/*! exports provided: clearHarmonicInterval, setHarmonicInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHarmonicInterval", function() { return clearHarmonicInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHarmonicInterval", function() { return setHarmonicInterval; });
var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};




/***/ }),

/***/ "./node_modules/throttle-debounce/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/throttle-debounce/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./node_modules/ts-easing/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ts-easing/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_UI_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/UI/Layout */ "./src/components/UI/Layout.tsx");
/* harmony import */ var _src_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _src_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_cards_cardCongif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/cards/cardCongif */ "./src/components/cards/cardCongif.ts");
/* harmony import */ var _src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/sketchs/matrixRain/MatrixRainContainer */ "./src/components/sketchs/matrixRain/MatrixRainContainer.tsx");
/* harmony import */ var _src_components_sketchs_particles_ParticlesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/sketchs/particles/ParticlesContainer */ "./src/components/sketchs/particles/ParticlesContainer.tsx");
/* harmony import */ var _src_components_sketchs_SketchPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/sketchs/SketchPicker */ "./src/components/sketchs/SketchPicker.tsx");
/* harmony import */ var _src_components_sketchs_particles_ParticlesControlPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/sketchs/particles/ParticlesControlPanel */ "./src/components/sketchs/particles/ParticlesControlPanel.tsx");
/* harmony import */ var _src_components_common_menu_CollapsableMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/common/menu/CollapsableMenu */ "./src/components/common/menu/CollapsableMenu.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var SKILL_CARDS = [_src_components_cards_cardCongif__WEBPACK_IMPORTED_MODULE_4__["REACT_CARD_CONFIG"]];

var switchBackground = function switchBackground(state) {
  switch (state) {
    case "MATRIX":
      return __jsx(_src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 14
        }
      });

    case "PARTICLES":
      return __jsx(_src_components_sketchs_particles_ParticlesContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_src_components_sketchs_matrixRain_MatrixRainContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 14
        }
      });
  }
};

var Home = function Home(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("MATRIX"),
      backgroundState = _useState2[0],
      setBackgroundState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(false);
  }, []);
  if (loading) return null; //<ParticlesContainer />

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_src_components_UI_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "home",
    background: switchBackground(backgroundState),
    header: __jsx("div", {
      className: "header__container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, backgroundState === "PARTICLES" && __jsx(_src_components_common_menu_CollapsableMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      menu: __jsx(_src_components_sketchs_particles_ParticlesControlPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 38
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }), __jsx(_src_components_sketchs_SketchPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: function onChange(background) {
        return setBackgroundState(background);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/UI/Footer.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\UI\\Footer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children && children || __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Default Footer"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/UI/Header.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\UI\\Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Header = function Header(_ref) {
  var route = _ref.route,
      style = _ref.style,
      children = _ref.children;
  return __jsx("header", {
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, children && children || __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 34
    }
  }, "Default Header"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/UI/Layout.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/UI/Footer.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/UI/Header.tsx");
/* harmony import */ var _hooks_useParticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\UI\\Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(_ref) {
  var title = _ref.title,
      background = _ref.background,
      header = _ref.header,
      disableHeader = _ref.disableHeader,
      children = _ref.children;
  return __jsx(_hooks_useParticles__WEBPACK_IMPORTED_MODULE_4__["ParticlesProvider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, title), __jsx("link", {
    rel: "icon",
    href: "".concat("", "/icons/codeNinja.ico"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), !disableHeader && header ? __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "home",
    style: {
      backgroundColor: "transparent"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, header) : __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, background, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, children)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

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

    case "SET_COLLIDER":
      return _objectSpread({}, state, {
        collider: action.value
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
      lineNumber: 53,
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

/***/ }),

/***/ "./src/components/cards/cardCongif.ts":
/*!********************************************!*\
  !*** ./src/components/cards/cardCongif.ts ***!
  \********************************************/
/*! exports provided: REACT_CARD_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_CARD_CONFIG", function() { return REACT_CARD_CONFIG; });
var REACT_CARD_CONFIG = {
  picture: "/pictures/react.png",
  skills: ["bla", "ble", "bli"]
};

/***/ }),

/***/ "./src/components/common/menu/CollapsableMenu.tsx":
/*!********************************************************!*\
  !*** ./src/components/common/menu/CollapsableMenu.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./src/hooks/useResponsive.ts");
/* harmony import */ var _svgComponents_MenuIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svgComponents/MenuIcon */ "./src/components/common/svgComponents/MenuIcon.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\common\\menu\\CollapsableMenu.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CollapsableMenu = function CollapsableMenu(_ref) {
  var menu = _ref.menu,
      style = _ref.style;

  var _useResponsive = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__["useResponsive"])(),
      mdAndDown = _useResponsive.mdAndDown;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!mdAndDown),
      open = _useState[0],
      setOpen = _useState[1];

  if (!mdAndDown) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 26
    }
  }, menu);
  return __jsx("div", {
    style: {
      position: "relative",
      width: "80vw",
      marginLeft: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, mdAndDown && __jsx(_svgComponents_MenuIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "".concat(open ? "rotate" : "rotate--reverse"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "menu__wrapper fade".concat(open ? "In" : "Out", "__left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, menu));
};

/* harmony default export */ __webpack_exports__["default"] = (CollapsableMenu);

/***/ }),

/***/ "./src/components/common/svgComponents/MenuIcon.tsx":
/*!**********************************************************!*\
  !*** ./src/components/common/svgComponents/MenuIcon.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\common\\svgComponents\\MenuIcon.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var MenuIcon = function MenuIcon(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: "2em",
    viewBox: "0 0 512 512",
    width: "2em"
  }, props, {
    style: {
      zIndex: 100,
      position: "absolute",
      top: 0,
      left: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }), __jsx("path", {
    d: "M464.883 64.267H47.117C21.137 64.267 0 85.403 0 111.416c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 208.867H47.117C21.137 208.867 0 230.003 0 256.016c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 353.467H47.117C21.137 353.467 0 374.604 0 400.616c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuIcon);

/***/ }),

/***/ "./src/components/sketchs/SketchPicker.tsx":
/*!*************************************************!*\
  !*** ./src/components/sketchs/SketchPicker.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/strings */ "./src/utils/strings.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\SketchPicker.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SKETCHES = ["MATRIX", "PARTICLES"];

var SketchPicker = function SketchPicker(_ref) {
  var _onChange = _ref.onChange;
  return __jsx("div", {
    className: "sketch__picker--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("select", {
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    className: "sketch__picker",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, SKETCHES.map(function (sketch) {
    return __jsx("option", {
      key: sketch,
      value: sketch,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, Object(_utils_strings__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(sketch));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SketchPicker);

/***/ }),

/***/ "./src/components/sketchs/matrixRain/MatrixRainContainer.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/sketchs/matrixRain/MatrixRainContainer.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol */ "./src/components/sketchs/matrixRain/symbol.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\matrixRain\\MatrixRainContainer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var X_OFFSET = 30;

var MatrixRainContainer = function MatrixRainContainer(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var symbols = [];

  var setup = function setup(p5, canvasParentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight + 50).parent(canvasParentRef);
    p5.strokeWeight(2);
    p5.textSize(20);
    var mobileOffset = window.innerWidth < 500 ? 0 : 20;

    for (var i = 0; i < window.innerWidth / 31; i++) {
      symbols[i] = new _symbol__WEBPACK_IMPORTED_MODULE_3__["default"](p5, mobileOffset + i * X_OFFSET);
    }
  };

  var draw = function draw(p5) {
    p5.clear();
    p5.background(0, 0, 0);
    symbols.forEach(function (s) {
      s.update(p5);
    });
  };

  if (false) {}
  var Sketch = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7));
  });
  return __jsx("div", {
    className: "sketch__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (MatrixRainContainer);

/***/ }),

/***/ "./src/components/sketchs/matrixRain/symbol.ts":
/*!*****************************************************!*\
  !*** ./src/components/sketchs/matrixRain/symbol.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var getRandomSymbol = function getRandomSymbol() {
  return String.fromCharCode(0x30a0 + Math.round(Math.random() * 90));
};

var getRandomNumber = function getRandomNumber(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return Math.floor(Math.random() * max) + min;
};

var Y_OFFSET = 21;

var Symbol = /*#__PURE__*/function () {
  function Symbol(p5, positionX) {
    var isHead = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Symbol);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "symbol", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "tail", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "shouldGlow", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "shadeOffset", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rainSpeed", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "changeOffset", void 0);

    this.symbol = getRandomSymbol();
    this.initSymbol(p5, positionX);
    this.shadeOffset = 0;

    if (isHead) {
      this.tail = new Array(Math.floor(p5.height / 22));
      this.shadeOffset = getRandomNumber(255, 120);

      for (var i = 0; i < this.tail.length; i++) {
        this.tail[i] = new Symbol(p5, positionX, false);
        this.tail[i].changeOffset = Math.random() * 10;
      }
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Symbol, [{
    key: "initSymbol",
    value: function initSymbol(p5, positionX) {
      this.position = p5.createVector(positionX, p5.height - Y_OFFSET - 20);
      this.shadeOffset = getRandomNumber(255, 100);
      this.rainSpeed = getRandomNumber(50, 20);
    }
  }, {
    key: "update",
    value: function update(p5) {
      var _this = this;

      var changeSymbol = Math.random() > 0.99;

      var _loop = function _loop(i) {
        var calculatedY = _this.position.y - Y_OFFSET * i - 20;
        if (p5.frameCount % 2 == 0) _this.tail[i].shadeOffset -= getRandomNumber(10, 4);

        if (changeSymbol) {
          setTimeout(function () {
            _this.tail[i].shouldGlow = true;
            _this.tail[i].symbol = getRandomSymbol();
            _this.tail[i].shadeOffset = getRandomNumber(350, 100);
            _this.tail[i].changeOffset = Math.random() * 8;
          }, 6000 - i * _this.rainSpeed);
        }

        if (_this.tail[i].shouldGlow) {
          p5.strokeWeight(2);
          p5.stroke(255, 80);
          p5.fill(255, 80);
          _this.tail[i].shouldGlow = false;
        } else {
          p5.strokeWeight(0.2);
          p5.stroke(80, 255, 80, _this.tail[i].shadeOffset);
          p5.fill(80, 255, 80, _this.tail[i].shadeOffset);
        }

        if (Math.random() > _this.tail[i].changeOffset) {
          _this.tail[i].symbol = getRandomSymbol();
        }

        p5.text(_this.tail[i].symbol, _this.position.x, calculatedY);
      };

      for (var i = this.tail.length - 1; i >= 0; i--) {
        _loop(i);
      }
    }
  }]);

  return Symbol;
}();

/* harmony default export */ __webpack_exports__["default"] = (Symbol);

/***/ }),

/***/ "./src/components/sketchs/particles/ParticlesContainer.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/sketchs/particles/ParticlesContainer.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/hooks/useParticles */ "./src/components/UI/hooks/useParticles.tsx");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particle */ "./src/components/sketchs/particles/particle.ts");
/* harmony import */ var _particleSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./particleSystem */ "./src/components/sketchs/particles/particleSystem.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./src/hooks/useResponsive.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\projects\\my-page\\src\\components\\sketchs\\particles\\ParticlesContainer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ParticlesContainer = function ParticlesContainer(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var particleSystem;

  var _useParticles = Object(_UI_hooks_useParticles__WEBPACK_IMPORTED_MODULE_3__["useParticles"])(),
      particlesAmount = _useParticles.particlesAmount,
      collision = _useParticles.collision,
      collider = _useParticles.collider;

  var _useResponsive = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useResponsive"])(),
      mdAndDown = _useResponsive.mdAndDown;

  var setup = function setup(p5, canvasParentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(canvasParentRef);
    p5.strokeWeight(0.5);
    particleSystem = new _particleSystem__WEBPACK_IMPORTED_MODULE_5__["default"](p5, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
    particleSystem.setParticles(particlesAmount);
    particleSystem.collision = collision;
    p5.pointLight(255, 255, 255, p5.width / 2, p5.height / 2, 1000);
    if (collider) particleSystem.collider = new _particle__WEBPACK_IMPORTED_MODULE_4__["default"]({
      width: 40,
      height: 40
    }, p5, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }, "black");
  };

  var draw = function draw(p5) {
    p5.background(255, 100, 255, 0);
    p5.clear();
    p5.noStroke();
    particleSystem.update();

    if (mdAndDown) {
      p5.fill(50, 50, 50, 100);
      p5.ellipse(p5.mouseX - p5.width / 2, p5.mouseY - p5.height / 2, 20, 20);
    }
  };

  if (false) {}
  var Sketch = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7));
  });
  return __jsx("div", {
    className: "sketch__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(Sketch, {
    setup: setup,
    draw: draw,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesContainer);

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
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLIDER",
        value: !collider
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "".concat(collider ? "Remove " : "Use", " collider")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_COLLISION",
        value: !collision
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "".concat(collision ? "Disable " : "Enable", " collision")), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 0
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Remove particles"), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: "SET_PARTICLES_AMOUNT",
        value: 6
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesControlPanel);

/***/ }),

/***/ "./src/components/sketchs/particles/particle.ts":
/*!******************************************************!*\
  !*** ./src/components/sketchs/particles/particle.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/sketchs/particles/utils.ts");






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
      this.acceleration.setMag(this.collided ? -2 : this.smallCollision ? -0.01 : 0.2);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.collided ? 10 : this.smallCollision ? 5 : this.velLimit);
      this.position.add(this.velocity);
      if (this.tail.length > 4) this.tail = this.tail.slice(0, -1);else this.tail = [this.position.copy()].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.tail));
      (this.collided || this.smallCollision) && this.collidedCount++;

      if (this.collidedCount >= (this.smallCollision ? 15 : 80)) {
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

/***/ }),

/***/ "./src/components/sketchs/particles/particleSystem.ts":
/*!************************************************************!*\
  !*** ./src/components/sketchs/particles/particleSystem.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/sketchs/particles/utils.ts");






var ParticleSystem = /*#__PURE__*/function () {
  function ParticleSystem(p5, offset) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ParticleSystem);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "particles", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collision", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "p5", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "collider", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "image", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "offset", void 0);

    this.particles = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(6, 7, p5, offset);
    this.p5 = p5;
    this.collision = true;
    this.image = p5.loadImage("".concat("", "/pictures/meFace.png")); //p5.loadImage(`pictures/meFace.png`);

    this.offset = offset;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ParticleSystem, [{
    key: "setParticles",
    value: function setParticles(amount) {
      var diff = amount - this.particles.length;

      if (diff > 0) {
        this.particles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.particles), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getParticles"])(diff, 7, this.p5, this.offset)));
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
        distance = particleA.position.dist(particleB.position);
      }

      var collided = !particleA.collided && distance <= particleA.dimension.width;

      if (collided) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["switchVelocity"])(particleA, particleB, this.p5);
        !this.collider && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["switchVelocity"])(particleB, particleA, this.p5);
        particleA.collided = !!this.collider;
        particleA.smallCollision = !this.collider;
        particleB.smallCollision = !this.collider;
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
          !!_this.collision && otherParticles.map(function (other) {
            return _this.checkColision(particle, other);
          });
        }

        particle.draw();
      });
      !!this.collider && this.collider.drawCollider(mouseX, mouseY, this.image);
    }
  }]);

  return ParticleSystem;
}();

/* harmony default export */ __webpack_exports__["default"] = (ParticleSystem);

/***/ }),

/***/ "./src/components/sketchs/particles/utils.ts":
/*!***************************************************!*\
  !*** ./src/components/sketchs/particles/utils.ts ***!
  \***************************************************/
/*! exports provided: switchVelocity, ACC_RATE, checkPos, getParticles, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchVelocity", function() { return switchVelocity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACC_RATE", function() { return ACC_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPos", function() { return checkPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticles", function() { return getParticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ "./src/components/sketchs/particles/particle.ts");

var switchVelocity = function switchVelocity(particleA, particleB, p5) {
  particleA.velocity = p5.createVector(particleA.velocity.x * -Math.random() * 30 - particleB.velocity.x, particleA.velocity.y * -Math.random() * 30 - particleB.velocity.y);
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
var colors = ["red", "green", "blue", "purple", "orange", "goldenrod", "limegreen", "teal", "pink", "brown", "indigo", "cyan", "crismon", "darkred", "darkorange", "gold", "darkgreen", "paleturquoise", "darkcyan", "mediumblue", "mediumorchid", "lightslategray", "sienna"];

/***/ }),

/***/ "./src/hooks/useResponsive.ts":
/*!************************************!*\
  !*** ./src/hooks/useResponsive.ts ***!
  \************************************/
/*! exports provided: useResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResponsive", function() { return useResponsive; });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");

var useResponsive = function useResponsive() {
  var _useWindowSize = Object(react_use__WEBPACK_IMPORTED_MODULE_0__["useWindowSize"])(),
      width = _useWindowSize.width;

  return {
    xs: width < 600,
    xsOnly: width < 600,
    sm: width >= 600,
    smOnly: width >= 600 && width < 768,
    smAndDown: width < 768,
    smAndUp: width >= 600,
    md: width >= 768,
    mdOnly: width >= 768 && width < 992,
    mdAndDown: width < 992,
    mdAndUp: width >= 768,
    lg: width >= 992,
    lgOnly: width >= 992 && width < 1200,
    lgAndDown: width < 1200,
    lgAndUp: width >= 992,
    xl: width >= 1200,
    xlOnly: width >= 1200 && width < 1600,
    xlAndDown: width < 1600,
    xlAndUp: width >= 1200,
    xxl: width >= 1600
  };
};

/***/ }),

/***/ "./src/utils/strings.ts":
/*!******************************!*\
  !*** ./src/utils/strings.ts ***!
  \******************************/
/*! exports provided: capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
var capitalize = function capitalize(str) {
  if (!str) return "";
  return "".concat(str.slice(0, 1).toUpperCase()).concat(str.slice(1).toLowerCase());
};

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Candre%5Cprojects%5Cmy-page%5Cpages%5Cindex.tsx ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Candre%5Cprojects%5Cmy-page%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Candre%5Cprojects%5Cmy-page%5Cpages%5Cindex.tsx!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map