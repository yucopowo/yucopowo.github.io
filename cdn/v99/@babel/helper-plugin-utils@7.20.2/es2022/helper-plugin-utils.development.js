/* esm.sh - esbuild bundle(@babel/helper-plugin-utils@7.20.2) es2022 development */
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

// esm-build-2e040e7eb5cc10983ad5e94c5f5984165ac16d02-159bf52c/node_modules/@babel/helper-plugin-utils/lib/index.js
var require_lib = __commonJS({
  'esm-build-2e040e7eb5cc10983ad5e94c5f5984165ac16d02-159bf52c/node_modules/@babel/helper-plugin-utils/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.declare = declare2;
    exports.declarePreset = void 0;
    var apiPolyfills = {
      assertVersion: api => range => {
        throwVersionError(range, api.version);
      },
      targets: () => () => {
        return {};
      },
      assumption: () => () => {
        return void 0;
      }
    };
    function declare2(builder) {
      return (api, options, dirname) => {
        var _clonedApi2;
        let clonedApi;
        for (const name of Object.keys(apiPolyfills)) {
          var _clonedApi;
          if (api[name]) continue;
          clonedApi = (_clonedApi = clonedApi) != null ? _clonedApi : copyApiObject(api);
          clonedApi[name] = apiPolyfills[name](clonedApi);
        }
        return builder((_clonedApi2 = clonedApi) != null ? _clonedApi2 : api, options || {}, dirname);
      };
    }
    var declarePreset2 = declare2;
    exports.declarePreset = declarePreset2;
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

// esm-build-2e040e7eb5cc10983ad5e94c5f5984165ac16d02-159bf52c/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { declare, declarePreset } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, declare, declarePreset, mod_default as default };
