/* esm.sh - esbuild bundle(hast-util-parse-selector@2.2.5) es2022 development */
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

// esm-build-6dbcb6e4081acd119ef124c312d347c7d02ab7a2-caba3223/node_modules/hast-util-parse-selector/index.js
var require_hast_util_parse_selector = __commonJS({
  'esm-build-6dbcb6e4081acd119ef124c312d347c7d02ab7a2-caba3223/node_modules/hast-util-parse-selector/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = parse;
    var search = /[#.]/g;
    function parse(selector, defaultTagName) {
      var value = selector || '';
      var name = defaultTagName || 'div';
      var props = {};
      var start = 0;
      var subvalue;
      var previous;
      var match;
      while (start < value.length) {
        search.lastIndex = start;
        match = search.exec(value);
        subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
          if (!previous) {
            name = subvalue;
          } else if (previous === '#') {
            props.id = subvalue;
          } else if (props.className) {
            props.className.push(subvalue);
          } else {
            props.className = [subvalue];
          }
          start += subvalue.length;
        }
        if (match) {
          previous = match[0];
          start++;
        }
      }
      return {
        type: 'element',
        tagName: name,
        properties: props,
        children: []
      };
    }
  }
});

// esm-build-6dbcb6e4081acd119ef124c312d347c7d02ab7a2-caba3223/mod.js
var __module = __toESM(require_hast_util_parse_selector());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
