/* esm.sh - esbuild bundle(markdown-extensions@1.1.1) es2022 development */
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

// esm-build-54a6ba891c74810e750da42dba50317f6ae79343-95e049e7/node_modules/markdown-extensions/markdown-extensions.json
var require_markdown_extensions = __commonJS({
  'esm-build-54a6ba891c74810e750da42dba50317f6ae79343-95e049e7/node_modules/markdown-extensions/markdown-extensions.json'(
    exports,
    module
  ) {
    module.exports = ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdwn', 'mkdown', 'ron'];
  }
});

// esm-build-54a6ba891c74810e750da42dba50317f6ae79343-95e049e7/node_modules/markdown-extensions/index.js
var require_markdown_extensions2 = __commonJS({
  'esm-build-54a6ba891c74810e750da42dba50317f6ae79343-95e049e7/node_modules/markdown-extensions/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = require_markdown_extensions();
  }
});

// esm-build-54a6ba891c74810e750da42dba50317f6ae79343-95e049e7/mod.js
var __module = __toESM(require_markdown_extensions2());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
