/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/ceylon) es2022 development */
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

// esm-build-e5a66637f7e7ff9423a2758b35fd7c6e581c783f-f9e946c0/node_modules/highlight.js/lib/languages/ceylon.js
var require_ceylon = __commonJS({
  'esm-build-e5a66637f7e7ff9423a2758b35fd7c6e581c783f-f9e946c0/node_modules/highlight.js/lib/languages/ceylon.js'(
    exports,
    module
  ) {
    function ceylon(hljs) {
      const KEYWORDS =
        'assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty';
      const DECLARATION_MODIFIERS =
        'shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small';
      const DOCUMENTATION = 'doc by license see throws tagged';
      const SUBST = {
        className: 'subst',
        excludeBegin: true,
        excludeEnd: true,
        begin: /``/,
        end: /``/,
        keywords: KEYWORDS,
        relevance: 10
      };
      const EXPRESSIONS = [
        {
          className: 'string',
          begin: '"""',
          end: '"""',
          relevance: 10
        },
        {
          className: 'string',
          begin: '"',
          end: '"',
          contains: [SUBST]
        },
        {
          className: 'string',
          begin: "'",
          end: "'"
        },
        {
          className: 'number',
          begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
          relevance: 0
        }
      ];
      SUBST.contains = EXPRESSIONS;
      return {
        name: 'Ceylon',
        keywords: {
          keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
          meta: DOCUMENTATION
        },
        illegal: '\\$[^01]|#[^0-9a-fA-F]',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.COMMENT('/\\*', '\\*/', {
            contains: ['self']
          }),
          {
            className: 'meta',
            begin: '@[a-z]\\w*(?::"[^"]*")?'
          }
        ].concat(EXPRESSIONS)
      };
    }
    module.exports = ceylon;
  }
});

// esm-build-e5a66637f7e7ff9423a2758b35fd7c6e581c783f-f9e946c0/mod.js
var __module = __toESM(require_ceylon());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
