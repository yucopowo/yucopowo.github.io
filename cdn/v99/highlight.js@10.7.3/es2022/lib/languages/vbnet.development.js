/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/vbnet) es2022 development */
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

// esm-build-2794237609919595fc760affda9a5e48c4a105dd-5841205b/node_modules/highlight.js/lib/languages/vbnet.js
var require_vbnet = __commonJS({
  'esm-build-2794237609919595fc760affda9a5e48c4a105dd-5841205b/node_modules/highlight.js/lib/languages/vbnet.js'(
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
    function either(...args) {
      const joined = '(' + args.map(x => source(x)).join('|') + ')';
      return joined;
    }
    function vbnet(hljs) {
      const CHARACTER = {
        className: 'string',
        begin: /"(""|[^/n])"C\b/
      };
      const STRING = {
        className: 'string',
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [
          {
            begin: /""/
          }
        ]
      };
      const MM_DD_YYYY = /\d{1,2}\/\d{1,2}\/\d{4}/;
      const YYYY_MM_DD = /\d{4}-\d{1,2}-\d{1,2}/;
      const TIME_12H = /(\d|1[012])(:\d+){0,2} *(AM|PM)/;
      const TIME_24H = /\d{1,2}(:\d{1,2}){1,2}/;
      const DATE = {
        className: 'literal',
        variants: [
          {
            begin: concat(/# */, either(YYYY_MM_DD, MM_DD_YYYY), / *#/)
          },
          {
            begin: concat(/# */, TIME_24H, / *#/)
          },
          {
            begin: concat(/# */, TIME_12H, / *#/)
          },
          {
            begin: concat(/# */, either(YYYY_MM_DD, MM_DD_YYYY), / +/, either(TIME_12H, TIME_24H), / *#/)
          }
        ]
      };
      const NUMBER = {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
          },
          {
            begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
          },
          {
            begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
          },
          {
            begin: /&O[0-7_]+((U?[SIL])|[%&])?/
          },
          {
            begin: /&B[01_]+((U?[SIL])|[%&])?/
          }
        ]
      };
      const LABEL = {
        className: 'label',
        begin: /^\w+:/
      };
      const DOC_COMMENT = hljs.COMMENT(/'''/, /$/, {
        contains: [
          {
            className: 'doctag',
            begin: /<\/?/,
            end: />/
          }
        ]
      });
      const COMMENT = hljs.COMMENT(null, /$/, {
        variants: [
          {
            begin: /'/
          },
          {
            begin: /([\t ]|^)REM(?=\s)/
          }
        ]
      });
      const DIRECTIVES = {
        className: 'meta',
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: {
          'meta-keyword': 'const disable else elseif enable end externalsource if region then'
        },
        contains: [COMMENT]
      };
      return {
        name: 'Visual Basic .NET',
        aliases: ['vb'],
        case_insensitive: true,
        classNameAliases: {
          label: 'symbol'
        },
        keywords: {
          keyword:
            'addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield',
          built_in:
            'addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort',
          type:
            'boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort',
          literal: 'true false nothing'
        },
        illegal: '//|\\{|\\}|endif|gosub|variant|wend|^\\$ ',
        contains: [CHARACTER, STRING, DATE, NUMBER, LABEL, DOC_COMMENT, COMMENT, DIRECTIVES]
      };
    }
    module.exports = vbnet;
  }
});

// esm-build-2794237609919595fc760affda9a5e48c4a105dd-5841205b/mod.js
var __module = __toESM(require_vbnet());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
