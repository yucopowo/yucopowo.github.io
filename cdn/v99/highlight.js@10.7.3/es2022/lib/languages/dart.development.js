/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/dart) es2022 development */
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

// esm-build-0b5d065d039932cca84855f6df39fd9cc65253b2-2e9d0697/node_modules/highlight.js/lib/languages/dart.js
var require_dart = __commonJS({
  'esm-build-0b5d065d039932cca84855f6df39fd9cc65253b2-2e9d0697/node_modules/highlight.js/lib/languages/dart.js'(
    exports,
    module
  ) {
    function dart(hljs) {
      const SUBST = {
        className: 'subst',
        variants: [
          {
            begin: '\\$[A-Za-z0-9_]+'
          }
        ]
      };
      const BRACED_SUBST = {
        className: 'subst',
        variants: [
          {
            begin: /\$\{/,
            end: /\}/
          }
        ],
        keywords: 'true false null this is new super'
      };
      const STRING = {
        className: 'string',
        variants: [
          {
            begin: "r'''",
            end: "'''"
          },
          {
            begin: 'r"""',
            end: '"""'
          },
          {
            begin: "r'",
            end: "'",
            illegal: '\\n'
          },
          {
            begin: 'r"',
            end: '"',
            illegal: '\\n'
          },
          {
            begin: "'''",
            end: "'''",
            contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
          },
          {
            begin: '"""',
            end: '"""',
            contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
          },
          {
            begin: "'",
            end: "'",
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
          },
          {
            begin: '"',
            end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
          }
        ]
      };
      BRACED_SUBST.contains = [hljs.C_NUMBER_MODE, STRING];
      const BUILT_IN_TYPES = [
        'Comparable',
        'DateTime',
        'Duration',
        'Function',
        'Iterable',
        'Iterator',
        'List',
        'Map',
        'Match',
        'Object',
        'Pattern',
        'RegExp',
        'Set',
        'Stopwatch',
        'String',
        'StringBuffer',
        'StringSink',
        'Symbol',
        'Type',
        'Uri',
        'bool',
        'double',
        'int',
        'num',
        'Element',
        'ElementList'
      ];
      const NULLABLE_BUILT_IN_TYPES = BUILT_IN_TYPES.map(e => `${e}?`);
      const KEYWORDS = {
        keyword:
          'abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield',
        built_in: BUILT_IN_TYPES.concat(NULLABLE_BUILT_IN_TYPES).concat([
          'Never',
          'Null',
          'dynamic',
          'print',
          'document',
          'querySelector',
          'querySelectorAll',
          'window'
        ]),
        $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
      };
      return {
        name: 'Dart',
        keywords: KEYWORDS,
        contains: [
          STRING,
          hljs.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
            subLanguage: 'markdown',
            relevance: 0
          }),
          hljs.COMMENT(/\/{3,} ?/, /$/, {
            contains: [
              {
                subLanguage: 'markdown',
                begin: '.',
                end: '$',
                relevance: 0
              }
            ]
          }),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /\{/,
            excludeEnd: true,
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '@[A-Za-z]+'
          },
          {
            begin: '=>'
          }
        ]
      };
    }
    module.exports = dart;
  }
});

// esm-build-0b5d065d039932cca84855f6df39fd9cc65253b2-2e9d0697/mod.js
var __module = __toESM(require_dart());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
