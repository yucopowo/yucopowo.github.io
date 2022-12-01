/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/roboconf) es2022 development */
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

// esm-build-fa46b594373f41989d575d8d9150b79cacaab263-93eeea14/node_modules/highlight.js/lib/languages/roboconf.js
var require_roboconf = __commonJS({
  'esm-build-fa46b594373f41989d575d8d9150b79cacaab263-93eeea14/node_modules/highlight.js/lib/languages/roboconf.js'(
    exports,
    module
  ) {
    function roboconf(hljs) {
      const IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';
      const PROPERTY = {
        className: 'attribute',
        begin: /[a-zA-Z-_]+/,
        end: /\s*:/,
        excludeEnd: true,
        starts: {
          end: ';',
          relevance: 0,
          contains: [
            {
              className: 'variable',
              begin: /\.[a-zA-Z-_]+/
            },
            {
              className: 'keyword',
              begin: /\(optional\)/
            }
          ]
        }
      };
      return {
        name: 'Roboconf',
        aliases: ['graph', 'instances'],
        case_insensitive: true,
        keywords: 'import',
        contains: [
          {
            begin: '^facet ' + IDENTIFIER,
            end: /\}/,
            keywords: 'facet',
            contains: [PROPERTY, hljs.HASH_COMMENT_MODE]
          },
          {
            begin: '^\\s*instance of ' + IDENTIFIER,
            end: /\}/,
            keywords: 'name count channels instance-data instance-state instance of',
            illegal: /\S/,
            contains: ['self', PROPERTY, hljs.HASH_COMMENT_MODE]
          },
          {
            begin: '^' + IDENTIFIER,
            end: /\}/,
            contains: [PROPERTY, hljs.HASH_COMMENT_MODE]
          },
          hljs.HASH_COMMENT_MODE
        ]
      };
    }
    module.exports = roboconf;
  }
});

// esm-build-fa46b594373f41989d575d8d9150b79cacaab263-93eeea14/mod.js
var __module = __toESM(require_roboconf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
