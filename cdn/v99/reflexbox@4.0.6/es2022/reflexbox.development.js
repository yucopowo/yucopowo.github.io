/* esm.sh - esbuild bundle(reflexbox@4.0.6) es2022 development */
import ___styled_system_should_forward_prop$$ from '/cdn/v99/@styled-system/should-forward-prop@5.1.5/es2022/should-forward-prop.development.js';
import * as ___styled_system_should_forward_prop$$$ from '/cdn/v99/@styled-system/should-forward-prop@5.1.5/es2022/should-forward-prop.development.js';
const ___styled_system_should_forward_prop$ = Object.assign(
  {
    default: ___styled_system_should_forward_prop$$
  },
  ___styled_system_should_forward_prop$$$
);
import ___styled_system_css$$ from '/cdn/v99/@styled-system/css@5.1.5/es2022/css.development.js';
import * as ___styled_system_css$$$ from '/cdn/v99/@styled-system/css@5.1.5/es2022/css.development.js';
const ___styled_system_css$ = Object.assign(
  {
    default: ___styled_system_css$$
  },
  ___styled_system_css$$$
);
import * as __styled_system$ from '/cdn/v99/styled-system@5.1.5/es2022/styled-system.development.js';
import ___emotion_styled$$ from '/cdn/v99/@emotion/styled@10.3.0/es2022/styled.development.js';
import * as ___emotion_styled$$$ from '/cdn/v99/@emotion/styled@10.3.0/es2022/styled.development.js';
const ___emotion_styled$ = Object.assign(
  {
    default: ___emotion_styled$$
  },
  ___emotion_styled$$$
);
import __react$ from '/cdn/stable/react@16.14.0/es2022/react.development.js';
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

// esm-build-e2b48f1513c9ccac8f9d9b8dec2d26dba026527d-10289a39/node_modules/reflexbox/dist/index.js
var require_dist = __commonJS({
  'esm-build-e2b48f1513c9ccac8f9d9b8dec2d26dba026527d-10289a39/node_modules/reflexbox/dist/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.Flex = exports.Box = void 0;
    var _react = _interopRequireDefault(__react$);
    var _styled = _interopRequireDefault(___emotion_styled$);
    var _styledSystem = __styled_system$;
    var _css = _interopRequireWildcard(___styled_system_css$);
    var _shouldForwardProp = _interopRequireDefault(___styled_system_should_forward_prop$);
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      if (obj != null) {
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj['default'] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj
          };
    }
    var sx = function sx2(props) {
      return (0, _css['default'])(props.sx)(props.theme);
    };
    var base = function base2(props) {
      return (0, _css['default'])(props.__css)(props.theme);
    };
    var variant = function variant2(_ref) {
      var theme = _ref.theme,
        variant3 = _ref.variant,
        _ref$tx = _ref.tx,
        tx = _ref$tx === void 0 ? 'variants' : _ref$tx;
      return (0, _css['default'])((0, _css.get)(theme, tx + '.' + variant3, (0, _css.get)(theme, variant3)))(theme);
    };
    var Box2 = (0, _styled['default'])('div', {
      shouldForwardProp: _shouldForwardProp['default']
    })(
      {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0
      },
      base,
      variant,
      sx,
      function(props) {
        return props.css;
      },
      (0, _styledSystem.compose)(
        _styledSystem.space,
        _styledSystem.layout,
        _styledSystem.typography,
        _styledSystem.color,
        _styledSystem.flexbox
      )
    );
    exports.Box = Box2;
    var Flex2 = (0, _styled['default'])(Box2)({
      display: 'flex'
    });
    exports.Flex = Flex2;
  }
});

// esm-build-e2b48f1513c9ccac8f9d9b8dec2d26dba026527d-10289a39/mod.js
var __module = __toESM(require_dist());
var __esModule = true;
var { Flex, Box } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { Box, Flex, __esModule, mod_default as default };
