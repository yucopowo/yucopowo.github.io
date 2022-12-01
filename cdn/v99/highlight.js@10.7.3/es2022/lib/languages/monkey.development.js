/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/monkey) es2022 development */
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

// esm-build-271757402416d166193bb6e980d38b605498d5dd-dc4f5570/node_modules/highlight.js/lib/languages/monkey.js
var require_monkey = __commonJS({
  'esm-build-271757402416d166193bb6e980d38b605498d5dd-dc4f5570/node_modules/highlight.js/lib/languages/monkey.js'(
    exports,
    module
  ) {
    function monkey(hljs) {
      const NUMBER = {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: '[$][a-fA-F0-9]+'
          },
          hljs.NUMBER_MODE
        ]
      };
      return {
        name: 'Monkey',
        case_insensitive: true,
        keywords: {
          keyword:
            'public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import',
          built_in:
            'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',
          literal: 'true false null and or shl shr mod'
        },
        illegal: /\/\*/,
        contains: [
          hljs.COMMENT('#rem', '#end'),
          hljs.COMMENT("'", '$', {
            relevance: 0
          }),
          {
            className: 'function',
            beginKeywords: 'function method',
            end: '[(=:]|$',
            illegal: /\n/,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '$',
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            className: 'built_in',
            begin: '\\b(self|super)\\b'
          },
          {
            className: 'meta',
            begin: '\\s*#',
            end: '$',
            keywords: {
              'meta-keyword': 'if else elseif endif end then'
            }
          },
          {
            className: 'meta',
            begin: '^\\s*strict\\b'
          },
          {
            beginKeywords: 'alias',
            end: '=',
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          hljs.QUOTE_STRING_MODE,
          NUMBER
        ]
      };
    }
    module.exports = monkey;
  }
});

// esm-build-271757402416d166193bb6e980d38b605498d5dd-dc4f5570/mod.js
var __module = __toESM(require_monkey());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
