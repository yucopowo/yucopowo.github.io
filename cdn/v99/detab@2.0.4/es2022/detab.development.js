/* esm.sh - esbuild bundle(detab@2.0.4) es2022 development */
import __repeat_string$ from '/cdn/v99/repeat-string@1.6.1/es2022/repeat-string.development.js';
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

// esm-build-8144198879fba14e8521484d5fd1383954b59d1f-744ca7d2/node_modules/detab/index.js
var require_detab = __commonJS({
  'esm-build-8144198879fba14e8521484d5fd1383954b59d1f-744ca7d2/node_modules/detab/index.js'(exports, module) {
    'use strict';

    module.exports = detab;
    var repeat = __repeat_string$;
    var search = /[\t\n\r]/g;
    function detab(value, size) {
      var tabSize = size || 4;
      var result = [];
      var start = 0;
      var index = 0;
      var column = -1;
      var add;
      var match;
      var end;
      if (typeof value !== 'string') {
        throw new Error('detab expected string');
      }
      while (index < value.length) {
        search.lastIndex = index;
        match = search.exec(value);
        end = match ? match.index : value.length;
        if (value.charCodeAt(end) === 9) {
          add = tabSize - ((column + end - index + 1) % tabSize);
          result.push(value.slice(start, end), repeat(' ', add));
          column += end - index + add;
          start = end + 1;
        } else {
          column = -1;
        }
        index = end + 1;
      }
      result.push(value.slice(start));
      return result.join('');
    }
  }
});

// esm-build-8144198879fba14e8521484d5fd1383954b59d1f-744ca7d2/mod.js
var __module = __toESM(require_detab());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
