/* esm.sh - esbuild bundle(unist-util-visit-parents@3.1.1) es2022 development */
import __unist_util_is_convert$ from '/cdn/v99/unist-util-is@4.1.0/es2022/convert.development.js';
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

// esm-build-9ff244d7bc41f1bd2ed3cdb80f03ea15b4199132-0a991e55/node_modules/unist-util-visit-parents/color.browser.js
var require_color_browser = __commonJS({
  'esm-build-9ff244d7bc41f1bd2ed3cdb80f03ea15b4199132-0a991e55/node_modules/unist-util-visit-parents/color.browser.js'(
    exports,
    module
  ) {
    module.exports = identity;
    function identity(d) {
      return d;
    }
  }
});

// esm-build-9ff244d7bc41f1bd2ed3cdb80f03ea15b4199132-0a991e55/node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents = __commonJS({
  'esm-build-9ff244d7bc41f1bd2ed3cdb80f03ea15b4199132-0a991e55/node_modules/unist-util-visit-parents/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = visitParents;
    var convert = __unist_util_is_convert$;
    var color = require_color_browser();
    var CONTINUE = true;
    var SKIP = 'skip';
    var EXIT = false;
    visitParents.CONTINUE = CONTINUE;
    visitParents.SKIP = SKIP;
    visitParents.EXIT = EXIT;
    function visitParents(tree, test, visitor, reverse) {
      var step;
      var is;
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert(test);
      step = reverse ? -1 : 1;
      factory(tree, null, [])();
      function factory(node, index, parents) {
        var value = typeof node === 'object' && node !== null ? node : {};
        var name;
        if (typeof value.type === 'string') {
          name =
            typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : void 0;
          visit.displayName = 'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')';
        }
        return visit;
        function visit() {
          var grandparents = parents.concat(node);
          var result = [];
          var subresult;
          var offset;
          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));
            if (result[0] === EXIT) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP) {
            offset = (reverse ? node.children.length : -1) + step;
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    }
    function toResult(value) {
      if (value !== null && typeof value === 'object' && 'length' in value) {
        return value;
      }
      if (typeof value === 'number') {
        return [CONTINUE, value];
      }
      return [value];
    }
  }
});

// esm-build-9ff244d7bc41f1bd2ed3cdb80f03ea15b4199132-0a991e55/mod.js
var __module = __toESM(require_unist_util_visit_parents());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
