/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/lisp) es2022 development */
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

// esm-build-2ccb2d98a352f8b12cf5184a7668e8d678b1cea3-ba136134/node_modules/highlight.js/lib/languages/lisp.js
var require_lisp = __commonJS({
  'esm-build-2ccb2d98a352f8b12cf5184a7668e8d678b1cea3-ba136134/node_modules/highlight.js/lib/languages/lisp.js'(
    exports,
    module
  ) {
    function lisp(hljs) {
      var LISP_IDENT_RE = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*';
      var MEC_RE = '\\|[^]*?\\|';
      var LISP_SIMPLE_NUMBER_RE = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?';
      var LITERAL = {
        className: 'literal',
        begin: '\\b(t{1}|nil)\\b'
      };
      var NUMBER = {
        className: 'number',
        variants: [
          {
            begin: LISP_SIMPLE_NUMBER_RE,
            relevance: 0
          },
          {
            begin: '#(b|B)[0-1]+(/[0-1]+)?'
          },
          {
            begin: '#(o|O)[0-7]+(/[0-7]+)?'
          },
          {
            begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'
          },
          {
            begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE,
            end: '\\)'
          }
        ]
      };
      var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      });
      var COMMENT = hljs.COMMENT(';', '$', {
        relevance: 0
      });
      var VARIABLE = {
        begin: '\\*',
        end: '\\*'
      };
      var KEYWORD = {
        className: 'symbol',
        begin: '[:&]' + LISP_IDENT_RE
      };
      var IDENT = {
        begin: LISP_IDENT_RE,
        relevance: 0
      };
      var MEC = {
        begin: MEC_RE
      };
      var QUOTED_LIST = {
        begin: '\\(',
        end: '\\)',
        contains: ['self', LITERAL, STRING, NUMBER, IDENT]
      };
      var QUOTED = {
        contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
        variants: [
          {
            begin: "['`]\\(",
            end: '\\)'
          },
          {
            begin: '\\(quote ',
            end: '\\)',
            keywords: {
              name: 'quote'
            }
          },
          {
            begin: "'" + MEC_RE
          }
        ]
      };
      var QUOTED_ATOM = {
        variants: [
          {
            begin: "'" + LISP_IDENT_RE
          },
          {
            begin: "#'" + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*'
          }
        ]
      };
      var LIST = {
        begin: '\\(\\s*',
        end: '\\)'
      };
      var BODY = {
        endsWithParent: true,
        relevance: 0
      };
      LIST.contains = [
        {
          className: 'name',
          variants: [
            {
              begin: LISP_IDENT_RE,
              relevance: 0
            },
            {
              begin: MEC_RE
            }
          ]
        },
        BODY
      ];
      BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];
      return {
        name: 'Lisp',
        illegal: /\S/,
        contains: [NUMBER, hljs.SHEBANG(), LITERAL, STRING, COMMENT, QUOTED, QUOTED_ATOM, LIST, IDENT]
      };
    }
    module.exports = lisp;
  }
});

// esm-build-2ccb2d98a352f8b12cf5184a7668e8d678b1cea3-ba136134/mod.js
var __module = __toESM(require_lisp());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
