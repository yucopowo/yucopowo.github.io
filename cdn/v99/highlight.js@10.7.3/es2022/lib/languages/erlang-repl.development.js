/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/erlang-repl) es2022 development */
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

// esm-build-77225339a420087e29c8c91fc1274220b485cd02-263d3a39/node_modules/highlight.js/lib/languages/erlang-repl.js
var require_erlang_repl = __commonJS({
  'esm-build-77225339a420087e29c8c91fc1274220b485cd02-263d3a39/node_modules/highlight.js/lib/languages/erlang-repl.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function erlangRepl(hljs) {
      return {
        name: 'Erlang REPL',
        keywords: {
          built_in: 'spawn spawn_link self',
          keyword:
            'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor'
        },
        contains: [
          {
            className: 'meta',
            begin: '^[0-9]+> ',
            relevance: 10
          },
          hljs.COMMENT('%', '$'),
          {
            className: 'number',
            begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
            relevance: 0
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            begin: concat(/\?(::)?/, /([A-Z]\w*)/, /((::)[A-Z]\w*)*/)
          },
          {
            begin: '->'
          },
          {
            begin: 'ok'
          },
          {
            begin: '!'
          },
          {
            begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
            relevance: 0
          },
          {
            begin: "[A-Z][a-zA-Z0-9_']*",
            relevance: 0
          }
        ]
      };
    }
    module.exports = erlangRepl;
  }
});

// esm-build-77225339a420087e29c8c91fc1274220b485cd02-263d3a39/mod.js
var __module = __toESM(require_erlang_repl());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
