/* esm.sh - esbuild bundle(@babel/plugin-transform-react-pure-annotations@7.18.6) es2022 development */
import ___babel_core$ from '/cdn/v99/@babel/core@7.20.5/es2022/core.development.js';
import * as ___babel_helper_annotate_as_pure$ from '/cdn/v99/@babel/helper-annotate-as-pure@7.18.6/es2022/helper-annotate-as-pure.development.js';
import ___babel_helper_plugin_utils$ from '/cdn/v99/@babel/helper-plugin-utils@7.20.2/es2022/helper-plugin-utils.development.js';
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

// esm-build-8fbb7fc30b5230d164290613fc2809259376e69d-d51d1242/node_modules/@babel/plugin-transform-react-pure-annotations/lib/index.js
var require_lib = __commonJS({
  'esm-build-8fbb7fc30b5230d164290613fc2809259376e69d-d51d1242/node_modules/@babel/plugin-transform-react-pure-annotations/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _helperPluginUtils = ___babel_helper_plugin_utils$;
    var _helperAnnotateAsPure = ___babel_helper_annotate_as_pure$;
    var _core = ___babel_core$;
    var PURE_CALLS = [
      [
        'react',
        /* @__PURE__ */ new Set([
          'cloneElement',
          'createContext',
          'createElement',
          'createFactory',
          'createRef',
          'forwardRef',
          'isValidElement',
          'memo',
          'lazy'
        ])
      ],
      ['react-dom', /* @__PURE__ */ new Set(['createPortal'])]
    ];
    var _default = (0, _helperPluginUtils.declare)(api => {
      api.assertVersion(7);
      return {
        name: 'transform-react-pure-annotations',
        visitor: {
          CallExpression(path) {
            if (isReactCall(path)) {
              (0, _helperAnnotateAsPure.default)(path);
            }
          }
        }
      };
    });
    exports.default = _default;
    function isReactCall(path) {
      const calleePath = path.get('callee');
      if (!calleePath.isMemberExpression()) {
        for (const [module2, methods] of PURE_CALLS) {
          for (const method of methods) {
            if (calleePath.referencesImport(module2, method)) {
              return true;
            }
          }
        }
        return false;
      }
      const object = calleePath.get('object');
      const callee = calleePath.node;
      if (!callee.computed && _core.types.isIdentifier(callee.property)) {
        const propertyName = callee.property.name;
        for (const [module2, methods] of PURE_CALLS) {
          if (object.referencesImport(module2, 'default') || object.referencesImport(module2, '*')) {
            return methods.has(propertyName);
          }
        }
      }
      return false;
    }
  }
});

// esm-build-8fbb7fc30b5230d164290613fc2809259376e69d-d51d1242/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
