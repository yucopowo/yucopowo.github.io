/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/csp) es2022 development */
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

// esm-build-9a8e0bfae8f830a120f9072b47c842700c04de4e-c830d3eb/node_modules/highlight.js/lib/languages/csp.js
var require_csp = __commonJS({
  'esm-build-9a8e0bfae8f830a120f9072b47c842700c04de4e-c830d3eb/node_modules/highlight.js/lib/languages/csp.js'(
    exports,
    module
  ) {
    function csp(hljs) {
      return {
        name: 'CSP',
        case_insensitive: false,
        keywords: {
          $pattern: '[a-zA-Z][a-zA-Z0-9_-]*',
          keyword:
            'base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src'
        },
        contains: [
          {
            className: 'string',
            begin: "'",
            end: "'"
          },
          {
            className: 'attribute',
            begin: '^Content',
            end: ':',
            excludeEnd: true
          }
        ]
      };
    }
    module.exports = csp;
  }
});

// esm-build-9a8e0bfae8f830a120f9072b47c842700c04de4e-c830d3eb/mod.js
var __module = __toESM(require_csp());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
