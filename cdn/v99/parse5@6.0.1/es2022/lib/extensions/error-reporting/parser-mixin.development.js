/* esm.sh - esbuild bundle(parse5@6.0.1/lib/extensions/error-reporting/parser-mixin) es2022 development */
import __parse5_lib_extensions_location_info_tokenizer_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/location-info/tokenizer-mixin.development.js';
import __parse5_lib_extensions_error_reporting_tokenizer_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/error-reporting/tokenizer-mixin.development.js';
import __parse5_lib_extensions_error_reporting_mixin_base$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/error-reporting/mixin-base.development.js';
import __parse5_lib_utils_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/utils/mixin.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js
var require_parser_mixin = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js'(
    exports,
    module
  ) {
    'use strict';

    var ErrorReportingMixinBase = __parse5_lib_extensions_error_reporting_mixin_base$;
    var ErrorReportingTokenizerMixin = __parse5_lib_extensions_error_reporting_tokenizer_mixin$;
    var LocationInfoTokenizerMixin = __parse5_lib_extensions_location_info_tokenizer_mixin$;
    var Mixin = __parse5_lib_utils_mixin$;
    var ErrorReportingParserMixin = class extends ErrorReportingMixinBase {
      constructor(parser, opts) {
        super(parser, opts);
        this.opts = opts;
        this.ctLoc = null;
        this.locBeforeToken = false;
      }
      _setErrorLocation(err) {
        if (this.ctLoc) {
          err.startLine = this.ctLoc.startLine;
          err.startCol = this.ctLoc.startCol;
          err.startOffset = this.ctLoc.startOffset;
          err.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
          err.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
          err.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
        }
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          _bootstrap(document, fragmentContext) {
            orig._bootstrap.call(this, document, fragmentContext);
            Mixin.install(this.tokenizer, ErrorReportingTokenizerMixin, mxn.opts);
            Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
          },
          _processInputToken(token) {
            mxn.ctLoc = token.location;
            orig._processInputToken.call(this, token);
          },
          _err(code, options) {
            mxn.locBeforeToken = options && options.beforeToken;
            mxn._reportError(code);
          }
        };
      }
    };
    module.exports = ErrorReportingParserMixin;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_parser_mixin());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
