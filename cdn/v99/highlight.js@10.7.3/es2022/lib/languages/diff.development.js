/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/diff) es2022 development */
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

// esm-build-84b8738d5ecded12e719d54535a94c091d591bcb-d1114ee4/node_modules/highlight.js/lib/languages/diff.js
var require_diff = __commonJS({
  'esm-build-84b8738d5ecded12e719d54535a94c091d591bcb-d1114ee4/node_modules/highlight.js/lib/languages/diff.js'(
    exports,
    module
  ) {
    function diff(hljs) {
      return {
        name: 'Diff',
        aliases: ['patch'],
        contains: [
          {
            className: 'meta',
            relevance: 10,
            variants: [
              {
                begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
              },
              {
                begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
              },
              {
                begin: /^--- +\d+,\d+ +----$/
              }
            ]
          },
          {
            className: 'comment',
            variants: [
              {
                begin: /Index: /,
                end: /$/
              },
              {
                begin: /^index/,
                end: /$/
              },
              {
                begin: /={3,}/,
                end: /$/
              },
              {
                begin: /^-{3}/,
                end: /$/
              },
              {
                begin: /^\*{3} /,
                end: /$/
              },
              {
                begin: /^\+{3}/,
                end: /$/
              },
              {
                begin: /^\*{15}$/
              },
              {
                begin: /^diff --git/,
                end: /$/
              }
            ]
          },
          {
            className: 'addition',
            begin: /^\+/,
            end: /$/
          },
          {
            className: 'deletion',
            begin: /^-/,
            end: /$/
          },
          {
            className: 'addition',
            begin: /^!/,
            end: /$/
          }
        ]
      };
    }
    module.exports = diff;
  }
});

// esm-build-84b8738d5ecded12e719d54535a94c091d591bcb-d1114ee4/mod.js
var __module = __toESM(require_diff());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
