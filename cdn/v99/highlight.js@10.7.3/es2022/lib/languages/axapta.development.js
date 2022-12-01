/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/axapta) es2022 development */
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

// esm-build-6599f0d5a01277fbe4fccaf2590467006a7a7f10-73f7f6c0/node_modules/highlight.js/lib/languages/axapta.js
var require_axapta = __commonJS({
  'esm-build-6599f0d5a01277fbe4fccaf2590467006a7a7f10-73f7f6c0/node_modules/highlight.js/lib/languages/axapta.js'(
    exports,
    module
  ) {
    function axapta(hljs) {
      const BUILT_IN_KEYWORDS = [
        'anytype',
        'boolean',
        'byte',
        'char',
        'container',
        'date',
        'double',
        'enum',
        'guid',
        'int',
        'int64',
        'long',
        'real',
        'short',
        'str',
        'utcdatetime',
        'var'
      ];
      const LITERAL_KEYWORDS = ['default', 'false', 'null', 'true'];
      const NORMAL_KEYWORDS = [
        'abstract',
        'as',
        'asc',
        'avg',
        'break',
        'breakpoint',
        'by',
        'byref',
        'case',
        'catch',
        'changecompany',
        'class',
        'client',
        'client',
        'common',
        'const',
        'continue',
        'count',
        'crosscompany',
        'delegate',
        'delete_from',
        'desc',
        'display',
        'div',
        'do',
        'edit',
        'else',
        'eventhandler',
        'exists',
        'extends',
        'final',
        'finally',
        'firstfast',
        'firstonly',
        'firstonly1',
        'firstonly10',
        'firstonly100',
        'firstonly1000',
        'flush',
        'for',
        'forceliterals',
        'forcenestedloop',
        'forceplaceholders',
        'forceselectorder',
        'forupdate',
        'from',
        'generateonly',
        'group',
        'hint',
        'if',
        'implements',
        'in',
        'index',
        'insert_recordset',
        'interface',
        'internal',
        'is',
        'join',
        'like',
        'maxof',
        'minof',
        'mod',
        'namespace',
        'new',
        'next',
        'nofetch',
        'notexists',
        'optimisticlock',
        'order',
        'outer',
        'pessimisticlock',
        'print',
        'private',
        'protected',
        'public',
        'readonly',
        'repeatableread',
        'retry',
        'return',
        'reverse',
        'select',
        'server',
        'setting',
        'static',
        'sum',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'ttsabort',
        'ttsbegin',
        'ttscommit',
        'unchecked',
        'update_recordset',
        'using',
        'validtimestate',
        'void',
        'where',
        'while'
      ];
      const KEYWORDS = {
        keyword: NORMAL_KEYWORDS,
        built_in: BUILT_IN_KEYWORDS,
        literal: LITERAL_KEYWORDS
      };
      return {
        name: 'X++',
        aliases: ['x++'],
        keywords: KEYWORDS,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '#',
            end: '$'
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /\{/,
            excludeEnd: true,
            illegal: ':',
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          }
        ]
      };
    }
    module.exports = axapta;
  }
});

// esm-build-6599f0d5a01277fbe4fccaf2590467006a7a7f10-73f7f6c0/mod.js
var __module = __toESM(require_axapta());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
