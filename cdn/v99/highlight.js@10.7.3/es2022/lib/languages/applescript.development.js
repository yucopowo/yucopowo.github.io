/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/applescript) es2022 development */
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

// esm-build-677ec1be43aed2a4894b399af28a73d514fd1b8b-7206b08c/node_modules/highlight.js/lib/languages/applescript.js
var require_applescript = __commonJS({
  'esm-build-677ec1be43aed2a4894b399af28a73d514fd1b8b-7206b08c/node_modules/highlight.js/lib/languages/applescript.js'(
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
    function applescript(hljs) {
      const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      });
      const PARAMS = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        contains: ['self', hljs.C_NUMBER_MODE, STRING]
      };
      const COMMENT_MODE_1 = hljs.COMMENT(/--/, /$/);
      const COMMENT_MODE_2 = hljs.COMMENT(/\(\*/, /\*\)/, {
        contains: ['self', COMMENT_MODE_1]
      });
      const COMMENTS = [COMMENT_MODE_1, COMMENT_MODE_2, hljs.HASH_COMMENT_MODE];
      const KEYWORD_PATTERNS = [
        /apart from/,
        /aside from/,
        /instead of/,
        /out of/,
        /greater than/,
        /isn't|(doesn't|does not) (equal|come before|come after|contain)/,
        /(greater|less) than( or equal)?/,
        /(starts?|ends|begins?) with/,
        /contained by/,
        /comes (before|after)/,
        /a (ref|reference)/,
        /POSIX (file|path)/,
        /(date|time) string/,
        /quoted form/
      ];
      const BUILT_IN_PATTERNS = [
        /clipboard info/,
        /the clipboard/,
        /info for/,
        /list (disks|folder)/,
        /mount volume/,
        /path to/,
        /(close|open for) access/,
        /(get|set) eof/,
        /current date/,
        /do shell script/,
        /get volume settings/,
        /random number/,
        /set volume/,
        /system attribute/,
        /system info/,
        /time to GMT/,
        /(load|run|store) script/,
        /scripting components/,
        /ASCII (character|number)/,
        /localized string/,
        /choose (application|color|file|file name|folder|from list|remote application|URL)/,
        /display (alert|dialog)/
      ];
      return {
        name: 'AppleScript',
        aliases: ['osascript'],
        keywords: {
          keyword:
            'about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without',
          literal: 'AppleScript false linefeed return pi quote result space tab true',
          built_in:
            'alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year'
        },
        contains: [
          STRING,
          hljs.C_NUMBER_MODE,
          {
            className: 'built_in',
            begin: concat(/\b/, either(...BUILT_IN_PATTERNS), /\b/)
          },
          {
            className: 'built_in',
            begin: /^\s*return\b/
          },
          {
            className: 'literal',
            begin: /\b(text item delimiters|current application|missing value)\b/
          },
          {
            className: 'keyword',
            begin: concat(/\b/, either(...KEYWORD_PATTERNS), /\b/)
          },
          {
            beginKeywords: 'on',
            illegal: /[${=;\n]/,
            contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
          },
          ...COMMENTS
        ],
        illegal: /\/\/|->|=>|\[\[/
      };
    }
    module.exports = applescript;
  }
});

// esm-build-677ec1be43aed2a4894b399af28a73d514fd1b8b-7206b08c/mod.js
var __module = __toESM(require_applescript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };