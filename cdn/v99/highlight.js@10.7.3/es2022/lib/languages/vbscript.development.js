/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/vbscript) es2022 development */
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

// esm-build-9fdc135e12cd71e2eb83d15a5aac4aa8da4ba1a3-f5f36340/node_modules/highlight.js/lib/languages/vbscript.js
var require_vbscript = __commonJS({
  'esm-build-9fdc135e12cd71e2eb83d15a5aac4aa8da4ba1a3-f5f36340/node_modules/highlight.js/lib/languages/vbscript.js'(
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
    function vbscript(hljs) {
      const BUILT_IN_FUNCTIONS = 'lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err'.split(
        ' '
      );
      const BUILT_IN_OBJECTS = [
        'server',
        'response',
        'request',
        'scriptengine',
        'scriptenginebuildversion',
        'scriptengineminorversion',
        'scriptenginemajorversion'
      ];
      const BUILT_IN_CALL = {
        begin: concat(either(...BUILT_IN_FUNCTIONS), '\\s*\\('),
        relevance: 0,
        keywords: {
          built_in: BUILT_IN_FUNCTIONS
        }
      };
      return {
        name: 'VBScript',
        aliases: ['vbs'],
        case_insensitive: true,
        keywords: {
          keyword:
            'call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto',
          built_in: BUILT_IN_OBJECTS,
          literal: 'true false null nothing empty'
        },
        illegal: '//',
        contains: [
          BUILT_IN_CALL,
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            contains: [
              {
                begin: '""'
              }
            ]
          }),
          hljs.COMMENT(/'/, /$/, {
            relevance: 0
          }),
          hljs.C_NUMBER_MODE
        ]
      };
    }
    module.exports = vbscript;
  }
});

// esm-build-9fdc135e12cd71e2eb83d15a5aac4aa8da4ba1a3-f5f36340/mod.js
var __module = __toESM(require_vbscript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
