/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/taggerscript) es2022 development */
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

// esm-build-529dc773c9a74be3c89f7f4b255a04fa851d93a3-f6aacf9a/node_modules/highlight.js/lib/languages/taggerscript.js
var require_taggerscript = __commonJS({
  'esm-build-529dc773c9a74be3c89f7f4b255a04fa851d93a3-f6aacf9a/node_modules/highlight.js/lib/languages/taggerscript.js'(
    exports,
    module
  ) {
    function taggerscript(hljs) {
      const COMMENT = {
        className: 'comment',
        begin: /\$noop\(/,
        end: /\)/,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            contains: [
              'self',
              {
                begin: /\\./
              }
            ]
          }
        ],
        relevance: 10
      };
      const FUNCTION = {
        className: 'keyword',
        begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
        end: /\(/,
        excludeEnd: true
      };
      const VARIABLE = {
        className: 'variable',
        begin: /%[_a-zA-Z0-9:]*/,
        end: '%'
      };
      const ESCAPE_SEQUENCE = {
        className: 'symbol',
        begin: /\\./
      };
      return {
        name: 'Tagger Script',
        contains: [COMMENT, FUNCTION, VARIABLE, ESCAPE_SEQUENCE]
      };
    }
    module.exports = taggerscript;
  }
});

// esm-build-529dc773c9a74be3c89f7f4b255a04fa851d93a3-f6aacf9a/mod.js
var __module = __toESM(require_taggerscript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
