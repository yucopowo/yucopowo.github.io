/* esm.sh - esbuild bundle(@babel/helper-environment-visitor@7.18.9) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
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

// esm-build-4a8cec92592882ce902d2100b66b4323b220609c-fd303e66/node_modules/@babel/helper-environment-visitor/lib/index.js
var require_lib = __commonJS({
  'esm-build-4a8cec92592882ce902d2100b66b4323b220609c-fd303e66/node_modules/@babel/helper-environment-visitor/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    exports.requeueComputedKeyAndDecorators = requeueComputedKeyAndDecorators2;
    exports.skipAllButComputedKey = skipAllButComputedKey2;
    function skipAllButComputedKey2(path) {
      path.skip();
      if (path.node.computed) {
        path.context.maybeQueue(path.get('key'));
      }
    }
    function requeueComputedKeyAndDecorators2(path) {
      const { context, node } = path;
      if (node.computed) {
        context.maybeQueue(path.get('key'));
      }
      if (node.decorators) {
        for (const decorator of path.get('decorators')) {
          context.maybeQueue(decorator);
        }
      }
    }
    var visitor = {
      FunctionParent(path) {
        if (path.isArrowFunctionExpression()) {
          return;
        } else {
          path.skip();
          if (path.isMethod()) {
            requeueComputedKeyAndDecorators2(path);
          }
        }
      },
      Property(path) {
        if (path.isObjectProperty()) {
          return;
        }
        path.skip();
        requeueComputedKeyAndDecorators2(path);
      }
    };
    var _default = visitor;
    exports.default = _default;
  }
});

// esm-build-4a8cec92592882ce902d2100b66b4323b220609c-fd303e66/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { requeueComputedKeyAndDecorators, skipAllButComputedKey } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default, requeueComputedKeyAndDecorators, skipAllButComputedKey };
