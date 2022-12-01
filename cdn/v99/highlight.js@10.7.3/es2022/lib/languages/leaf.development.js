/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/leaf) es2022 development */
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

// esm-build-7ff8b29c0e4f28f72da027dbb29552b2fb3dfac9-bb6f4ef2/node_modules/highlight.js/lib/languages/leaf.js
var require_leaf = __commonJS({
  'esm-build-7ff8b29c0e4f28f72da027dbb29552b2fb3dfac9-bb6f4ef2/node_modules/highlight.js/lib/languages/leaf.js'(
    exports,
    module
  ) {
    function leaf(hljs) {
      return {
        name: 'Leaf',
        contains: [
          {
            className: 'function',
            begin: '#+[A-Za-z_0-9]*\\(',
            end: / \{/,
            returnBegin: true,
            excludeEnd: true,
            contains: [
              {
                className: 'keyword',
                begin: '#+'
              },
              {
                className: 'title',
                begin: '[A-Za-z_][A-Za-z_0-9]*'
              },
              {
                className: 'params',
                begin: '\\(',
                end: '\\)',
                endsParent: true,
                contains: [
                  {
                    className: 'string',
                    begin: '"',
                    end: '"'
                  },
                  {
                    className: 'variable',
                    begin: '[A-Za-z_][A-Za-z_0-9]*'
                  }
                ]
              }
            ]
          }
        ]
      };
    }
    module.exports = leaf;
  }
});

// esm-build-7ff8b29c0e4f28f72da027dbb29552b2fb3dfac9-bb6f4ef2/mod.js
var __module = __toESM(require_leaf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
