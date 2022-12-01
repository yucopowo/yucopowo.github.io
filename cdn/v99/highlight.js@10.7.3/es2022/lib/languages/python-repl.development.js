/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/python-repl) es2022 development */
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

// esm-build-edc5bae84e5b5e88399c044b53c893304486e1e8-0a571e1d/node_modules/highlight.js/lib/languages/python-repl.js
var require_python_repl = __commonJS({
  'esm-build-edc5bae84e5b5e88399c044b53c893304486e1e8-0a571e1d/node_modules/highlight.js/lib/languages/python-repl.js'(
    exports,
    module
  ) {
    function pythonRepl(hljs) {
      return {
        aliases: ['pycon'],
        contains: [
          {
            className: 'meta',
            starts: {
              end: / |$/,
              starts: {
                end: '$',
                subLanguage: 'python'
              }
            },
            variants: [
              {
                begin: /^>>>(?=[ ]|$)/
              },
              {
                begin: /^\.\.\.(?=[ ]|$)/
              }
            ]
          }
        ]
      };
    }
    module.exports = pythonRepl;
  }
});

// esm-build-edc5bae84e5b5e88399c044b53c893304486e1e8-0a571e1d/mod.js
var __module = __toESM(require_python_repl());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
