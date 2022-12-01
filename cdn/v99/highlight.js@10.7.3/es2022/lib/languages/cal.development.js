/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/cal) es2022 development */
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

// esm-build-ed2c51475ad9cb721414018af4f5b7231f1a5ac8-7d946979/node_modules/highlight.js/lib/languages/cal.js
var require_cal = __commonJS({
  'esm-build-ed2c51475ad9cb721414018af4f5b7231f1a5ac8-7d946979/node_modules/highlight.js/lib/languages/cal.js'(
    exports,
    module
  ) {
    function cal(hljs) {
      const KEYWORDS =
        'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var';
      const LITERALS = 'false true';
      const COMMENT_MODES = [
        hljs.C_LINE_COMMENT_MODE,
        hljs.COMMENT(/\{/, /\}/, {
          relevance: 0
        }),
        hljs.COMMENT(/\(\*/, /\*\)/, {
          relevance: 10
        })
      ];
      const STRING = {
        className: 'string',
        begin: /'/,
        end: /'/,
        contains: [
          {
            begin: /''/
          }
        ]
      };
      const CHAR_STRING = {
        className: 'string',
        begin: /(#\d+)+/
      };
      const DATE = {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
        relevance: 0
      };
      const DBL_QUOTED_VARIABLE = {
        className: 'string',
        begin: '"',
        end: '"'
      };
      const PROCEDURE = {
        className: 'function',
        beginKeywords: 'procedure',
        end: /[:;]/,
        keywords: 'procedure|10',
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: [STRING, CHAR_STRING]
          }
        ].concat(COMMENT_MODES)
      };
      const OBJECT = {
        className: 'class',
        begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
        returnBegin: true,
        contains: [hljs.TITLE_MODE, PROCEDURE]
      };
      return {
        name: 'C/AL',
        case_insensitive: true,
        keywords: {
          keyword: KEYWORDS,
          literal: LITERALS
        },
        illegal: /\/\*/,
        contains: [STRING, CHAR_STRING, DATE, DBL_QUOTED_VARIABLE, hljs.NUMBER_MODE, OBJECT, PROCEDURE]
      };
    }
    module.exports = cal;
  }
});

// esm-build-ed2c51475ad9cb721414018af4f5b7231f1a5ac8-7d946979/mod.js
var __module = __toESM(require_cal());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
