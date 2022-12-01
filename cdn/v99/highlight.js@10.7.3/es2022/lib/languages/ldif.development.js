/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/ldif) es2022 development */
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

// esm-build-38add08a764d4d845a22bbef291a8e6220636693-8119b5f9/node_modules/highlight.js/lib/languages/ldif.js
var require_ldif = __commonJS({
  'esm-build-38add08a764d4d845a22bbef291a8e6220636693-8119b5f9/node_modules/highlight.js/lib/languages/ldif.js'(
    exports,
    module
  ) {
    function ldif(hljs) {
      return {
        name: 'LDIF',
        contains: [
          {
            className: 'attribute',
            begin: '^dn',
            end: ': ',
            excludeEnd: true,
            starts: {
              end: '$',
              relevance: 0
            },
            relevance: 10
          },
          {
            className: 'attribute',
            begin: '^\\w',
            end: ': ',
            excludeEnd: true,
            starts: {
              end: '$',
              relevance: 0
            }
          },
          {
            className: 'literal',
            begin: '^-',
            end: '$'
          },
          hljs.HASH_COMMENT_MODE
        ]
      };
    }
    module.exports = ldif;
  }
});

// esm-build-38add08a764d4d845a22bbef291a8e6220636693-8119b5f9/mod.js
var __module = __toESM(require_ldif());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
