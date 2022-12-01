/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/golo) es2022 development */
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

// esm-build-3ce4ab7fe5558678d19623de37d9816e7c9e4237-63479b59/node_modules/highlight.js/lib/languages/golo.js
var require_golo = __commonJS({
  'esm-build-3ce4ab7fe5558678d19623de37d9816e7c9e4237-63479b59/node_modules/highlight.js/lib/languages/golo.js'(
    exports,
    module
  ) {
    function golo(hljs) {
      return {
        name: 'Golo',
        keywords: {
          keyword:
            'println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array',
          literal: 'true false null'
        },
        contains: [
          hljs.HASH_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '@[A-Za-z]+'
          }
        ]
      };
    }
    module.exports = golo;
  }
});

// esm-build-3ce4ab7fe5558678d19623de37d9816e7c9e4237-63479b59/mod.js
var __module = __toESM(require_golo());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
