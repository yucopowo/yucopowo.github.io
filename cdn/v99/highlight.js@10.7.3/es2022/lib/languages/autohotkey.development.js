/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/autohotkey) es2022 development */
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

// esm-build-8d03519c86604f7b02729cb0a91e25386e7278ad-8831c5a6/node_modules/highlight.js/lib/languages/autohotkey.js
var require_autohotkey = __commonJS({
  'esm-build-8d03519c86604f7b02729cb0a91e25386e7278ad-8831c5a6/node_modules/highlight.js/lib/languages/autohotkey.js'(
    exports,
    module
  ) {
    function autohotkey(hljs) {
      const BACKTICK_ESCAPE = {
        begin: '`[\\s\\S]'
      };
      return {
        name: 'AutoHotkey',
        case_insensitive: true,
        aliases: ['ahk'],
        keywords: {
          keyword:
            'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
          literal: 'true false NOT AND OR',
          built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'
        },
        contains: [
          BACKTICK_ESCAPE,
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            contains: [BACKTICK_ESCAPE]
          }),
          hljs.COMMENT(';', '$', {
            relevance: 0
          }),
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'number',
            begin: hljs.NUMBER_RE,
            relevance: 0
          },
          {
            className: 'variable',
            begin: '%[a-zA-Z0-9#_$@]+%'
          },
          {
            className: 'built_in',
            begin: '^\\s*\\w+\\s*(,|%)'
          },
          {
            className: 'title',
            variants: [
              {
                begin: '^[^\\n";]+::(?!=)'
              },
              {
                begin: '^[^\\n";]+:(?!=)',
                relevance: 0
              }
            ]
          },
          {
            className: 'meta',
            begin: '^\\s*#\\w+',
            end: '$',
            relevance: 0
          },
          {
            className: 'built_in',
            begin: 'A_[a-zA-Z0-9]+'
          },
          {
            begin: ',\\s*,'
          }
        ]
      };
    }
    module.exports = autohotkey;
  }
});

// esm-build-8d03519c86604f7b02729cb0a91e25386e7278ad-8831c5a6/mod.js
var __module = __toESM(require_autohotkey());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
