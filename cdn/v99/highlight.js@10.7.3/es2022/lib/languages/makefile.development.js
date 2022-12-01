/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/makefile) es2022 development */
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

// esm-build-8ca0f64535f7626e99370300d23fe0ddd849e843-c1c527ae/node_modules/highlight.js/lib/languages/makefile.js
var require_makefile = __commonJS({
  'esm-build-8ca0f64535f7626e99370300d23fe0ddd849e843-c1c527ae/node_modules/highlight.js/lib/languages/makefile.js'(
    exports,
    module
  ) {
    function makefile(hljs) {
      const VARIABLE = {
        className: 'variable',
        variants: [
          {
            begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: /\$[@%<?\^\+\*]/
          }
        ]
      };
      const QUOTE_STRING = {
        className: 'string',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, VARIABLE]
      };
      const FUNC = {
        className: 'variable',
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in:
            'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
        },
        contains: [VARIABLE]
      };
      const ASSIGNMENT = {
        begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)'
      };
      const META = {
        className: 'meta',
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: {
          $pattern: /[\.\w]+/,
          'meta-keyword': '.PHONY'
        }
      };
      const TARGET = {
        className: 'section',
        begin: /^[^\s]+:/,
        end: /$/,
        contains: [VARIABLE]
      };
      return {
        name: 'Makefile',
        aliases: ['mk', 'mak', 'make'],
        keywords: {
          $pattern: /[\w-]+/,
          keyword:
            'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath'
        },
        contains: [hljs.HASH_COMMENT_MODE, VARIABLE, QUOTE_STRING, FUNC, ASSIGNMENT, META, TARGET]
      };
    }
    module.exports = makefile;
  }
});

// esm-build-8ca0f64535f7626e99370300d23fe0ddd849e843-c1c527ae/mod.js
var __module = __toESM(require_makefile());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
