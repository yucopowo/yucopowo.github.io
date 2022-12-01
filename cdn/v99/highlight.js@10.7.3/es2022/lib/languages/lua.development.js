/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/lua) es2022 development */
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

// esm-build-7882e9d0b6549df6844fe173b12a0017993ca2e6-23f239b9/node_modules/highlight.js/lib/languages/lua.js
var require_lua = __commonJS({
  'esm-build-7882e9d0b6549df6844fe173b12a0017993ca2e6-23f239b9/node_modules/highlight.js/lib/languages/lua.js'(
    exports,
    module
  ) {
    function lua(hljs) {
      const OPENING_LONG_BRACKET = '\\[=*\\[';
      const CLOSING_LONG_BRACKET = '\\]=*\\]';
      const LONG_BRACKETS = {
        begin: OPENING_LONG_BRACKET,
        end: CLOSING_LONG_BRACKET,
        contains: ['self']
      };
      const COMMENTS = [
        hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
        hljs.COMMENT('--' + OPENING_LONG_BRACKET, CLOSING_LONG_BRACKET, {
          contains: [LONG_BRACKETS],
          relevance: 10
        })
      ];
      return {
        name: 'Lua',
        keywords: {
          $pattern: hljs.UNDERSCORE_IDENT_RE,
          literal: 'true false nil',
          keyword: 'and break do else elseif end for goto if in local not or repeat return then until while',
          built_in:
            '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove'
        },
        contains: COMMENTS.concat([
          {
            className: 'function',
            beginKeywords: 'function',
            end: '\\)',
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
              }),
              {
                className: 'params',
                begin: '\\(',
                endsWithParent: true,
                contains: COMMENTS
              }
            ].concat(COMMENTS)
          },
          hljs.C_NUMBER_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: OPENING_LONG_BRACKET,
            end: CLOSING_LONG_BRACKET,
            contains: [LONG_BRACKETS],
            relevance: 5
          }
        ])
      };
    }
    module.exports = lua;
  }
});

// esm-build-7882e9d0b6549df6844fe173b12a0017993ca2e6-23f239b9/mod.js
var __module = __toESM(require_lua());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
