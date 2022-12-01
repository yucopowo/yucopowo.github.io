/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/delphi) es2022 development */
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

// esm-build-36c09a08c544ebaa588d9c4c78e0c5324a2229bf-f9eadc28/node_modules/highlight.js/lib/languages/delphi.js
var require_delphi = __commonJS({
  'esm-build-36c09a08c544ebaa588d9c4c78e0c5324a2229bf-f9eadc28/node_modules/highlight.js/lib/languages/delphi.js'(
    exports,
    module
  ) {
    function delphi(hljs) {
      const KEYWORDS =
        'exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ';
      const COMMENT_MODES = [
        hljs.C_LINE_COMMENT_MODE,
        hljs.COMMENT(/\{/, /\}/, {
          relevance: 0
        }),
        hljs.COMMENT(/\(\*/, /\*\)/, {
          relevance: 10
        })
      ];
      const DIRECTIVE = {
        className: 'meta',
        variants: [
          {
            begin: /\{\$/,
            end: /\}/
          },
          {
            begin: /\(\*\$/,
            end: /\*\)/
          }
        ]
      };
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
      const NUMBER = {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: '\\$[0-9A-Fa-f]+'
          },
          {
            begin: '&[0-7]+'
          },
          {
            begin: '%[01]+'
          }
        ]
      };
      const CHAR_STRING = {
        className: 'string',
        begin: /(#\d+)+/
      };
      const CLASS = {
        begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(',
        returnBegin: true,
        contains: [hljs.TITLE_MODE]
      };
      const FUNCTION = {
        className: 'function',
        beginKeywords: 'function constructor destructor procedure',
        end: /[:;]/,
        keywords: 'function constructor|10 destructor|10 procedure|10',
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)
          },
          DIRECTIVE
        ].concat(COMMENT_MODES)
      };
      return {
        name: 'Delphi',
        aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
        case_insensitive: true,
        keywords: KEYWORDS,
        illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
        contains: [STRING, CHAR_STRING, hljs.NUMBER_MODE, NUMBER, CLASS, FUNCTION, DIRECTIVE].concat(COMMENT_MODES)
      };
    }
    module.exports = delphi;
  }
});

// esm-build-36c09a08c544ebaa588d9c4c78e0c5324a2229bf-f9eadc28/mod.js
var __module = __toESM(require_delphi());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
