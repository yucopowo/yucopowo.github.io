/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/oxygene) es2022 development */
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

// esm-build-1fe6330ade6f8891ff8cdd88f72c7cb8f8d44a08-02c666ca/node_modules/highlight.js/lib/languages/oxygene.js
var require_oxygene = __commonJS({
  'esm-build-1fe6330ade6f8891ff8cdd88f72c7cb8f8d44a08-02c666ca/node_modules/highlight.js/lib/languages/oxygene.js'(
    exports,
    module
  ) {
    function oxygene(hljs) {
      const OXYGENE_KEYWORDS = {
        $pattern: /\.?\w+/,
        keyword:
          'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained'
      };
      const CURLY_COMMENT = hljs.COMMENT(/\{/, /\}/, {
        relevance: 0
      });
      const PAREN_COMMENT = hljs.COMMENT('\\(\\*', '\\*\\)', {
        relevance: 10
      });
      const STRING = {
        className: 'string',
        begin: "'",
        end: "'",
        contains: [
          {
            begin: "''"
          }
        ]
      };
      const CHAR_STRING = {
        className: 'string',
        begin: '(#\\d+)+'
      };
      const FUNCTION = {
        className: 'function',
        beginKeywords: 'function constructor destructor procedure method',
        end: '[:;]',
        keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: '\\(',
            end: '\\)',
            keywords: OXYGENE_KEYWORDS,
            contains: [STRING, CHAR_STRING]
          },
          CURLY_COMMENT,
          PAREN_COMMENT
        ]
      };
      return {
        name: 'Oxygene',
        case_insensitive: true,
        keywords: OXYGENE_KEYWORDS,
        illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
        contains: [
          CURLY_COMMENT,
          PAREN_COMMENT,
          hljs.C_LINE_COMMENT_MODE,
          STRING,
          CHAR_STRING,
          hljs.NUMBER_MODE,
          FUNCTION,
          {
            className: 'class',
            begin: '=\\bclass\\b',
            end: 'end;',
            keywords: OXYGENE_KEYWORDS,
            contains: [STRING, CHAR_STRING, CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE, FUNCTION]
          }
        ]
      };
    }
    module.exports = oxygene;
  }
});

// esm-build-1fe6330ade6f8891ff8cdd88f72c7cb8f8d44a08-02c666ca/mod.js
var __module = __toESM(require_oxygene());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
