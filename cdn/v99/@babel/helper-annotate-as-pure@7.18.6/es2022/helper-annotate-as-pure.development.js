/* esm.sh - esbuild bundle(@babel/helper-annotate-as-pure@7.18.6) es2022 development */
import ___babel_types$ from '/cdn/v99/@babel/types@7.20.5/es2022/types.development.js';
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

// esm-build-da8f2aa344fdee5f5b7c89a28080dd2de3d12309-edbf9e3f/node_modules/@babel/helper-annotate-as-pure/lib/index.js
var require_lib = __commonJS({
  'esm-build-da8f2aa344fdee5f5b7c89a28080dd2de3d12309-edbf9e3f/node_modules/@babel/helper-annotate-as-pure/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = annotateAsPure;
    var _t = ___babel_types$;
    var { addComment } = _t;
    var PURE_ANNOTATION = '#__PURE__';
    var isPureAnnotated = ({ leadingComments }) =>
      !!leadingComments && leadingComments.some(comment => /[@#]__PURE__/.test(comment.value));
    function annotateAsPure(pathOrNode) {
      const node = pathOrNode['node'] || pathOrNode;
      if (isPureAnnotated(node)) {
        return;
      }
      addComment(node, 'leading', PURE_ANNOTATION);
    }
  }
});

// esm-build-da8f2aa344fdee5f5b7c89a28080dd2de3d12309-edbf9e3f/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
