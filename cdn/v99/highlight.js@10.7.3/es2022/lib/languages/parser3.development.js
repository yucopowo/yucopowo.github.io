/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/parser3) es2022 development */
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

// esm-build-46a204da2d8d6194ef93ffaee0b115afb39156a9-642d75c5/node_modules/highlight.js/lib/languages/parser3.js
var require_parser3 = __commonJS({
  'esm-build-46a204da2d8d6194ef93ffaee0b115afb39156a9-642d75c5/node_modules/highlight.js/lib/languages/parser3.js'(
    exports,
    module
  ) {
    function parser3(hljs) {
      const CURLY_SUBCOMMENT = hljs.COMMENT(/\{/, /\}/, {
        contains: ['self']
      });
      return {
        name: 'Parser3',
        subLanguage: 'xml',
        relevance: 0,
        contains: [
          hljs.COMMENT('^#', '$'),
          hljs.COMMENT(/\^rem\{/, /\}/, {
            relevance: 10,
            contains: [CURLY_SUBCOMMENT]
          }),
          {
            className: 'meta',
            begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
            relevance: 10
          },
          {
            className: 'title',
            begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
          },
          {
            className: 'variable',
            begin: /\$\{?[\w\-.:]+\}?/
          },
          {
            className: 'keyword',
            begin: /\^[\w\-.:]+/
          },
          {
            className: 'number',
            begin: '\\^#[0-9a-fA-F]+'
          },
          hljs.C_NUMBER_MODE
        ]
      };
    }
    module.exports = parser3;
  }
});

// esm-build-46a204da2d8d6194ef93ffaee0b115afb39156a9-642d75c5/mod.js
var __module = __toESM(require_parser3());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
