/* esm.sh - esbuild bundle(babel-plugin-extract-import-names@1.6.22) es2022 development */
import ___babel_helper_plugin_utils$ from '/cdn/v99/@babel/helper-plugin-utils@7.10.4/es2022/helper-plugin-utils.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-88a3fbd4f57ff0d2da7883b9a1cd1c3a78706e10-e70a8510/node_modules/babel-plugin-extract-import-names/index.js
var require_babel_plugin_extract_import_names = __commonJS({
  'esm-build-88a3fbd4f57ff0d2da7883b9a1cd1c3a78706e10-e70a8510/node_modules/babel-plugin-extract-import-names/index.js'(
    exports,
    module
  ) {
    var { declare } = ___babel_helper_plugin_utils$;
    var BabelPluginExtractImportNames = class {
      constructor() {
        const names = [];
        this.state = {
          names
        };
        this.plugin = declare(api => {
          api.assertVersion(7);
          return {
            visitor: {
              ImportDeclaration(path) {
                path.traverse({
                  Identifier(path2) {
                    if (path2.key === 'local') {
                      names.push(path2.node.name);
                    }
                  }
                });
              }
            }
          };
        });
      }
    };
    module.exports = BabelPluginExtractImportNames;
  }
});

// esm-build-88a3fbd4f57ff0d2da7883b9a1cd1c3a78706e10-e70a8510/mod.js
var __module = __toESM(require_babel_plugin_extract_import_names());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
