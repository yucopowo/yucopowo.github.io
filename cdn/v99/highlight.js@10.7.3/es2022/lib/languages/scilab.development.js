/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/scilab) es2022 development */
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

// esm-build-49375d04517633bde98857de5273866a0bfb8cc7-cb868074/node_modules/highlight.js/lib/languages/scilab.js
var require_scilab = __commonJS({
  'esm-build-49375d04517633bde98857de5273866a0bfb8cc7-cb868074/node_modules/highlight.js/lib/languages/scilab.js'(
    exports,
    module
  ) {
    function scilab(hljs) {
      const COMMON_CONTAINS = [
        hljs.C_NUMBER_MODE,
        {
          className: 'string',
          begin: `'|"`,
          end: `'|"`,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            {
              begin: "''"
            }
          ]
        }
      ];
      return {
        name: 'Scilab',
        aliases: ['sci'],
        keywords: {
          $pattern: /%?\w+/,
          keyword:
            'abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while',
          literal: '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
          built_in:
            'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix'
        },
        illegal: '("|#|/\\*|\\s+/\\w+)',
        contains: [
          {
            className: 'function',
            beginKeywords: 'function',
            end: '$',
            contains: [
              hljs.UNDERSCORE_TITLE_MODE,
              {
                className: 'params',
                begin: '\\(',
                end: '\\)'
              }
            ]
          },
          {
            begin: "[a-zA-Z_][a-zA-Z_0-9]*[\\.']+",
            relevance: 0
          },
          {
            begin: '\\[',
            end: "\\][\\.']*",
            relevance: 0,
            contains: COMMON_CONTAINS
          },
          hljs.COMMENT('//', '$')
        ].concat(COMMON_CONTAINS)
      };
    }
    module.exports = scilab;
  }
});

// esm-build-49375d04517633bde98857de5273866a0bfb8cc7-cb868074/mod.js
var __module = __toESM(require_scilab());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
