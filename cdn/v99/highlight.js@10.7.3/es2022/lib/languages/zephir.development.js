/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/zephir) es2022 development */
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

// esm-build-4c04b5585a7220d112c1c4a18423d548334dba4d-5efa09a4/node_modules/highlight.js/lib/languages/zephir.js
var require_zephir = __commonJS({
  'esm-build-4c04b5585a7220d112c1c4a18423d548334dba4d-5efa09a4/node_modules/highlight.js/lib/languages/zephir.js'(
    exports,
    module
  ) {
    function zephir(hljs) {
      const STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null
          }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          })
        ]
      };
      const TITLE_MODE = hljs.UNDERSCORE_TITLE_MODE;
      const NUMBER = {
        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
      };
      const KEYWORDS =
        'namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined';
      return {
        name: 'Zephir',
        aliases: ['zep'],
        keywords: KEYWORDS,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.COMMENT(/\/\*/, /\*\//, {
            contains: [
              {
                className: 'doctag',
                begin: /@[A-Za-z]+/
              }
            ]
          }),
          {
            className: 'string',
            begin: /<<<['"]?\w+['"]?$/,
            end: /^\w+;/,
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
          },
          {
            className: 'function',
            beginKeywords: 'function fn',
            end: /[;{]/,
            excludeEnd: true,
            illegal: /\$|\[|%/,
            contains: [
              TITLE_MODE,
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                contains: ['self', hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER]
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /\{/,
            excludeEnd: true,
            illegal: /[:($"]/,
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              TITLE_MODE
            ]
          },
          {
            beginKeywords: 'namespace',
            end: /;/,
            illegal: /[.']/,
            contains: [TITLE_MODE]
          },
          {
            beginKeywords: 'use',
            end: /;/,
            contains: [TITLE_MODE]
          },
          {
            begin: /=>/
          },
          STRING,
          NUMBER
        ]
      };
    }
    module.exports = zephir;
  }
});

// esm-build-4c04b5585a7220d112c1c4a18423d548334dba4d-5efa09a4/mod.js
var __module = __toESM(require_zephir());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
