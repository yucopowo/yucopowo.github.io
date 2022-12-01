/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/scala) es2022 development */
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

// esm-build-8f7c4eef54dc673c3c13b0a19721ecd016c10c98-88ade074/node_modules/highlight.js/lib/languages/scala.js
var require_scala = __commonJS({
  'esm-build-8f7c4eef54dc673c3c13b0a19721ecd016c10c98-88ade074/node_modules/highlight.js/lib/languages/scala.js'(
    exports,
    module
  ) {
    function scala(hljs) {
      const ANNOTATION = {
        className: 'meta',
        begin: '@[A-Za-z]+'
      };
      const SUBST = {
        className: 'subst',
        variants: [
          {
            begin: '\\$[A-Za-z0-9_]+'
          },
          {
            begin: /\$\{/,
            end: /\}/
          }
        ]
      };
      const STRING = {
        className: 'string',
        variants: [
          {
            begin: '"""',
            end: '"""'
          },
          {
            begin: '"',
            end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: '[a-z]+"',
            end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE, SUBST]
          },
          {
            className: 'string',
            begin: '[a-z]+"""',
            end: '"""',
            contains: [SUBST],
            relevance: 10
          }
        ]
      };
      const SYMBOL = {
        className: 'symbol',
        begin: "'\\w[\\w\\d_]*(?!')"
      };
      const TYPE = {
        className: 'type',
        begin: '\\b[A-Z][A-Za-z0-9_]*',
        relevance: 0
      };
      const NAME = {
        className: 'title',
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        relevance: 0
      };
      const CLASS = {
        className: 'class',
        beginKeywords: 'class object trait type',
        end: /[:={\[\n;]/,
        excludeEnd: true,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            beginKeywords: 'extends with',
            relevance: 10
          },
          {
            begin: /\[/,
            end: /\]/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0,
            contains: [TYPE]
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0,
            contains: [TYPE]
          },
          NAME
        ]
      };
      const METHOD = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
      };
      return {
        name: 'Scala',
        keywords: {
          literal: 'true false null',
          keyword:
            'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRING,
          SYMBOL,
          TYPE,
          METHOD,
          CLASS,
          hljs.C_NUMBER_MODE,
          ANNOTATION
        ]
      };
    }
    module.exports = scala;
  }
});

// esm-build-8f7c4eef54dc673c3c13b0a19721ecd016c10c98-88ade074/mod.js
var __module = __toESM(require_scala());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
