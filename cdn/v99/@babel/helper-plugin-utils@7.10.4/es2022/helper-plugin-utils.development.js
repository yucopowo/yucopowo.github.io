/* esm.sh - esbuild bundle(@babel/helper-plugin-utils@7.10.4) es2022 development */
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

// esm-build-3c1eb4602417bd13e4363f4fbcc6d95c58b01872-7d5d468e/node_modules/@babel/helper-plugin-utils/lib/index.js
var require_lib = __commonJS({
  'esm-build-3c1eb4602417bd13e4363f4fbcc6d95c58b01872-7d5d468e/node_modules/@babel/helper-plugin-utils/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.declare = declare2;
    function declare2(builder) {
      return (api, options, dirname) => {
        if (!api.assertVersion) {
          api = Object.assign(copyApiObject(api), {
            assertVersion(range) {
              throwVersionError(range, api.version);
            }
          });
        }
        return builder(api, options || {}, dirname);
      };
    }
    function copyApiObject(api) {
      let proto = null;
      if (typeof api.version === 'string' && /^7\./.test(api.version)) {
        proto = Object.getPrototypeOf(api);
        if (
          proto &&
          (!has(proto, 'version') || !has(proto, 'transform') || !has(proto, 'template') || !has(proto, 'types'))
        ) {
          proto = null;
        }
      }
      return Object.assign({}, proto, api);
    }
    function has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function throwVersionError(range, version) {
      if (typeof range === 'number') {
        if (!Number.isInteger(range)) {
          throw new Error('Expected string or integer value.');
        }
        range = `^${range}.0.0-0`;
      }
      if (typeof range !== 'string') {
        throw new Error('Expected string or integer value.');
      }
      const limit = Error.stackTraceLimit;
      if (typeof limit === 'number' && limit < 25) {
        Error.stackTraceLimit = 25;
      }
      let err;
      if (version.slice(0, 2) === '7.') {
        err = new Error(
          `Requires Babel "^7.0.0-beta.41", but was loaded with "${version}". You'll need to update your @babel/core version.`
        );
      } else {
        err = new Error(
          `Requires Babel "${range}", but was loaded with "${version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`
        );
      }
      if (typeof limit === 'number') {
        Error.stackTraceLimit = limit;
      }
      throw Object.assign(err, {
        code: 'BABEL_VERSION_UNSUPPORTED',
        version,
        range
      });
    }
  }
});

// esm-build-3c1eb4602417bd13e4363f4fbcc6d95c58b01872-7d5d468e/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { declare } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, declare, mod_default as default };
