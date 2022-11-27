/* esm.sh - esbuild bundle(react-in-viewport@1.0.0-alpha.28) es2022 development */
import __react_jsx_runtime$ from '/cdn/stable/react@18.2.0/es2022/jsx-runtime.development.js';
import __hoist_non_react_statics$ from '/cdn/v99/hoist-non-react-statics@3.3.2/es2022/hoist-non-react-statics.development.js';
import __react_dom$ from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
import __react$ from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/lib/constants.js
var require_constants = __commonJS({
  'esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/lib/constants.js'(
    exports
  ) {
    'use strict';

    exports.__esModule = true;
    exports.noop = exports.defaultProps = exports.defaultOptions = exports.defaultConfig = void 0;
    var defaultOptions = {};
    exports.defaultOptions = defaultOptions;
    var defaultConfig = {
      disconnectOnLeave: false
    };
    exports.defaultConfig = defaultConfig;
    var noop = () => {};
    exports.noop = noop;
    var defaultProps = {
      onEnterViewport: noop,
      onLeaveViewport: noop
    };
    exports.defaultProps = defaultProps;
  }
});

// esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/lib/useInViewport.js
var require_useInViewport = __commonJS({
  'esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/lib/useInViewport.js'(
    exports
  ) {
    'use strict';

    exports.__esModule = true;
    exports.default = void 0;
    var _react = __react$;
    var _reactDom = __react_dom$;
    var _constants = require_constants();
    var useInViewport2 = function useInViewport3(target, options, config, props) {
      if (options === void 0) {
        options = _constants.defaultOptions;
      }
      if (config === void 0) {
        config = _constants.defaultConfig;
      }
      if (props === void 0) {
        props = _constants.defaultProps;
      }
      var { onEnterViewport, onLeaveViewport } = props;
      var [, forceUpdate] = (0, _react.useState)();
      var observer = (0, _react.useRef)();
      var inViewportRef = (0, _react.useRef)(false);
      var intersected = (0, _react.useRef)(false);
      var enterCountRef = (0, _react.useRef)(0);
      var leaveCountRef = (0, _react.useRef)(0);
      function startObserver(_ref) {
        var { observerRef } = _ref;
        var targetRef = target.current;
        if (targetRef) {
          var node = (0, _reactDom.findDOMNode)(targetRef);
          if (node) {
            observerRef == null ? void 0 : observerRef.observe(node);
          }
        }
      }
      function stopObserver(_ref2) {
        var { observerRef } = _ref2;
        var targetRef = target.current;
        if (targetRef) {
          var node = (0, _reactDom.findDOMNode)(targetRef);
          if (node) {
            observerRef == null ? void 0 : observerRef.unobserve(node);
          }
        }
        observerRef == null ? void 0 : observerRef.disconnect();
        observer.current = null;
      }
      function handleIntersection(entries) {
        var entry = entries[0] || {};
        var { isIntersecting, intersectionRatio } = entry;
        var isInViewport = typeof isIntersecting !== 'undefined' ? isIntersecting : intersectionRatio > 0;
        if (!intersected.current && isInViewport) {
          intersected.current = true;
          onEnterViewport == null ? void 0 : onEnterViewport();
          enterCountRef.current += 1;
          inViewportRef.current = isInViewport;
          forceUpdate(isInViewport);
          return;
        }
        if (intersected.current && !isInViewport) {
          intersected.current = false;
          onLeaveViewport == null ? void 0 : onLeaveViewport();
          if (config.disconnectOnLeave && observer.current) {
            observer.current.disconnect();
          }
          leaveCountRef.current += 1;
          inViewportRef.current = isInViewport;
          forceUpdate(isInViewport);
        }
      }
      function initIntersectionObserver(_ref3) {
        var { observerRef } = _ref3;
        if (!observerRef) {
          observer.current = new IntersectionObserver(handleIntersection, options);
          return observer.current;
        }
        return observerRef;
      }
      (0, _react.useEffect)(() => {
        var observerRef = observer.current;
        observerRef = initIntersectionObserver({
          observerRef
        });
        startObserver({
          observerRef
        });
        return () => {
          stopObserver({
            observerRef
          });
        };
      }, [target.current, options, config, onEnterViewport, onLeaveViewport]);
      return {
        inViewport: inViewportRef.current,
        enterCount: enterCountRef.current,
        leaveCount: leaveCountRef.current
      };
    };
    var _default = useInViewport2;
    exports.default = _default;
  }
});

// esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/lib/handleViewport.js
var require_handleViewport = __commonJS({
  'esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/lib/handleViewport.js'(
    exports
  ) {
    'use strict';

    exports.__esModule = true;
    exports.default = void 0;
    var _react = __react$;
    var _hoistNonReactStatics = _interopRequireDefault(__hoist_non_react_statics$);
    var _useInViewport = _interopRequireDefault(require_useInViewport());
    var _constants = require_constants();
    var _jsxRuntime = __react_jsx_runtime$;
    var _excluded = ['onEnterViewport', 'onLeaveViewport'];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj
          };
    }
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
    function _extends() {
      _extends =
        Object.assign ||
        function(target) {
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
    var isFunctionalComponent = Component => {
      return typeof Component === 'function' && !(Component.prototype && Component.prototype.render);
    };
    var isReactComponent = Component => {
      return Component.prototype && Component.prototype.isReactComponent;
    };
    function handleViewport2(TargetComponent, options, config) {
      if (options === void 0) {
        options = _constants.defaultOptions;
      }
      if (config === void 0) {
        config = _constants.defaultConfig;
      }
      var ForwardedRefComponent = /* @__PURE__ */ (0, _react.forwardRef)((props, ref) => {
        var refProps = _extends(
          {
            forwardedRef: ref
          },
          isReactComponent(TargetComponent) && !isFunctionalComponent(TargetComponent)
            ? {
                ref
              }
            : {}
        );
        return /* @__PURE__ */ (0, _jsxRuntime.jsx)(TargetComponent, _extends({}, props, refProps));
      });
      function InViewport(_ref) {
        var { onEnterViewport = _constants.noop, onLeaveViewport = _constants.noop } = _ref,
          restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
        var node = (0, _react.useRef)();
        var { inViewport, enterCount, leaveCount } = (0, _useInViewport.default)(node, options, config, {
          onEnterViewport,
          onLeaveViewport
        });
        var injectedProps = {
          inViewport,
          enterCount,
          leaveCount
        };
        return /* @__PURE__ */ (0, _jsxRuntime.jsx)(
          ForwardedRefComponent,
          _extends({}, restProps, injectedProps, {
            ref: node
          })
        );
      }
      var name = TargetComponent.displayName || TargetComponent.name || 'Component';
      InViewport.displayName = 'handleViewport(' + name + ')';
      return (0, _hoistNonReactStatics.default)(InViewport, ForwardedRefComponent);
    }
    var _default = handleViewport2;
    exports.default = _default;
  }
});

// esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/index.js
var require_es = __commonJS({
  'esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/node_modules/react-in-viewport/dist/es/index.js'(
    exports
  ) {
    'use strict';

    exports.__esModule = true;
    exports.useInViewport = exports.handleViewport = exports.default = exports.customProps = void 0;
    var _handleViewport = _interopRequireDefault(require_handleViewport());
    exports.handleViewport = _handleViewport.default;
    var _useInViewport = _interopRequireDefault(require_useInViewport());
    exports.useInViewport = _useInViewport.default;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj
          };
    }
    var customProps2 = ['inViewport', 'enterCount', 'leaveCount'];
    exports.customProps = customProps2;
    var _default = _handleViewport.default;
    exports.default = _default;
  }
});

// esm-build-8b9302a21f8520fb75ce2462962378455d67a9a0-88d360c5/mod.js
var __module = __toESM(require_es());
var __esModule = true;
var { useInViewport, handleViewport, customProps } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, customProps, mod_default as default, handleViewport, useInViewport };
