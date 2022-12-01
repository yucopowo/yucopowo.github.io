/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/fsharp) es2022 development */
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

// esm-build-47f41c687be287e0e2407fd17c3f902fa4670376-b80cd5d3/node_modules/highlight.js/lib/languages/fsharp.js
var require_fsharp = __commonJS({
  'esm-build-47f41c687be287e0e2407fd17c3f902fa4670376-b80cd5d3/node_modules/highlight.js/lib/languages/fsharp.js'(
    exports,
    module
  ) {
    function fsharp(hljs) {
      const TYPEPARAM = {
        begin: '<',
        end: '>',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: /'[a-zA-Z0-9_]+/
          })
        ]
      };
      return {
        name: 'F#',
        aliases: ['fs'],
        keywords:
          'abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield',
        illegal: /\/\*/,
        contains: [
          {
            className: 'keyword',
            begin: /\b(yield|return|let|do)!/
          },
          {
            className: 'string',
            begin: '@"',
            end: '"',
            contains: [
              {
                begin: '""'
              }
            ]
          },
          {
            className: 'string',
            begin: '"""',
            end: '"""'
          },
          hljs.COMMENT('\\(\\*(\\s)', '\\*\\)', {
            contains: ['self']
          }),
          {
            className: 'class',
            beginKeywords: 'type',
            end: '\\(|=|$',
            excludeEnd: true,
            contains: [hljs.UNDERSCORE_TITLE_MODE, TYPEPARAM]
          },
          {
            className: 'meta',
            begin: '\\[<',
            end: '>\\]',
            relevance: 10
          },
          {
            className: 'symbol',
            begin: "\\B('[A-Za-z])\\b",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          }),
          hljs.C_NUMBER_MODE
        ]
      };
    }
    module.exports = fsharp;
  }
});

// esm-build-47f41c687be287e0e2407fd17c3f902fa4670376-b80cd5d3/mod.js
var __module = __toESM(require_fsharp());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
