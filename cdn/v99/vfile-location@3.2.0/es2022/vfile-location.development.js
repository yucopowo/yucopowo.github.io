/* esm.sh - esbuild bundle(vfile-location@3.2.0) es2022 development */
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

// esm-build-747e139e3426fea18a81df9f52d5ca534061ea86-074503da/node_modules/vfile-location/index.js
var require_vfile_location = __commonJS({
  'esm-build-747e139e3426fea18a81df9f52d5ca534061ea86-074503da/node_modules/vfile-location/index.js'(exports, module) {
    'use strict';

    module.exports = factory;
    function factory(file) {
      var value = String(file);
      var indices = [];
      var search = /\r?\n|\r/g;
      while (search.exec(value)) {
        indices.push(search.lastIndex);
      }
      indices.push(value.length + 1);
      return {
        toPoint: offsetToPoint,
        toPosition: offsetToPoint,
        toOffset: pointToOffset
      };
      function offsetToPoint(offset) {
        var index = -1;
        if (offset > -1 && offset < indices[indices.length - 1]) {
          while (++index < indices.length) {
            if (indices[index] > offset) {
              return {
                line: index + 1,
                column: offset - (indices[index - 1] || 0) + 1,
                offset
              };
            }
          }
        }
        return {};
      }
      function pointToOffset(point) {
        var line = point && point.line;
        var column = point && point.column;
        var offset;
        if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
          offset = (indices[line - 2] || 0) + column - 1 || 0;
        }
        return offset > -1 && offset < indices[indices.length - 1] ? offset : -1;
      }
    }
  }
});

// esm-build-747e139e3426fea18a81df9f52d5ca534061ea86-074503da/mod.js
var __module = __toESM(require_vfile_location());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
