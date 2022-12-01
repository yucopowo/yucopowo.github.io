/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/qml) es2022 development */
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

// esm-build-665a295f79dc561bd7427d091090dece7ee6a557-2c260d8e/node_modules/highlight.js/lib/languages/qml.js
var require_qml = __commonJS({
  'esm-build-665a295f79dc561bd7427d091090dece7ee6a557-2c260d8e/node_modules/highlight.js/lib/languages/qml.js'(
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
    function qml(hljs) {
      const KEYWORDS = {
        keyword:
          'in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import',
        literal: 'true false null undefined NaN Infinity',
        built_in:
          'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise'
      };
      const QML_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9\\._]*';
      const PROPERTY = {
        className: 'keyword',
        begin: '\\bproperty\\b',
        starts: {
          className: 'string',
          end: '(:|=|;|,|//|/\\*|$)',
          returnEnd: true
        }
      };
      const SIGNAL = {
        className: 'keyword',
        begin: '\\bsignal\\b',
        starts: {
          className: 'string',
          end: '(\\(|:|=|;|,|//|/\\*|$)',
          returnEnd: true
        }
      };
      const ID_ID = {
        className: 'attribute',
        begin: '\\bid\\s*:',
        starts: {
          className: 'string',
          end: QML_IDENT_RE,
          returnEnd: false
        }
      };
      const QML_ATTRIBUTE = {
        begin: QML_IDENT_RE + '\\s*:',
        returnBegin: true,
        contains: [
          {
            className: 'attribute',
            begin: QML_IDENT_RE,
            end: '\\s*:',
            excludeEnd: true,
            relevance: 0
          }
        ],
        relevance: 0
      };
      const QML_OBJECT = {
        begin: concat(QML_IDENT_RE, /\s*\{/),
        end: /\{/,
        returnBegin: true,
        relevance: 0,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: QML_IDENT_RE
          })
        ]
      };
      return {
        name: 'QML',
        aliases: ['qt'],
        case_insensitive: false,
        keywords: KEYWORDS,
        contains: [
          {
            className: 'meta',
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [
              hljs.BACKSLASH_ESCAPE,
              {
                className: 'subst',
                begin: '\\$\\{',
                end: '\\}'
              }
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'number',
            variants: [
              {
                begin: '\\b(0[bB][01]+)'
              },
              {
                begin: '\\b(0[oO][0-7]+)'
              },
              {
                begin: hljs.C_NUMBER_RE
              }
            ],
            relevance: 0
          },
          {
            begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.REGEXP_MODE,
              {
                begin: /</,
                end: />\s*[);\]]/,
                relevance: 0,
                subLanguage: 'xml'
              }
            ],
            relevance: 0
          },
          SIGNAL,
          PROPERTY,
          {
            className: 'function',
            beginKeywords: 'function',
            end: /\{/,
            excludeEnd: true,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: /[A-Za-z$_][0-9A-Za-z$_]*/
              }),
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
              }
            ],
            illegal: /\[|%/
          },
          {
            begin: '\\.' + hljs.IDENT_RE,
            relevance: 0
          },
          ID_ID,
          QML_ATTRIBUTE,
          QML_OBJECT
        ],
        illegal: /#/
      };
    }
    module.exports = qml;
  }
});

// esm-build-665a295f79dc561bd7427d091090dece7ee6a557-2c260d8e/mod.js
var __module = __toESM(require_qml());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
