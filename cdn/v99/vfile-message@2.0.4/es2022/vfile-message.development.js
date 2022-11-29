/* esm.sh - esbuild bundle(vfile-message@2.0.4) es2022 development */
import __unist_util_stringify_position$ from '/cdn/v99/unist-util-stringify-position@2.0.3/es2022/unist-util-stringify-position.development.js';
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

// esm-build-083884260b92c79a8b883e3e2570dcb3bc71a768-ae000c61/node_modules/vfile-message/index.js
var require_vfile_message = __commonJS({
  'esm-build-083884260b92c79a8b883e3e2570dcb3bc71a768-ae000c61/node_modules/vfile-message/index.js'(exports, module) {
    'use strict';

    var stringify = __unist_util_stringify_position$;
    module.exports = VMessage;
    function VMessagePrototype() {}
    VMessagePrototype.prototype = Error.prototype;
    VMessage.prototype = new VMessagePrototype();
    var proto = VMessage.prototype;
    proto.file = '';
    proto.name = '';
    proto.reason = '';
    proto.message = '';
    proto.stack = '';
    proto.fatal = null;
    proto.column = null;
    proto.line = null;
    function VMessage(reason, position, origin) {
      var parts;
      var range;
      var location;
      if (typeof position === 'string') {
        origin = position;
        position = null;
      }
      parts = parseOrigin(origin);
      range = stringify(position) || '1:1';
      location = {
        start: {
          line: null,
          column: null
        },
        end: {
          line: null,
          column: null
        }
      };
      if (position && position.position) {
        position = position.position;
      }
      if (position) {
        if (position.start) {
          location = position;
          position = position.start;
        } else {
          location.start = position;
        }
      }
      if (reason.stack) {
        this.stack = reason.stack;
        reason = reason.message;
      }
      this.message = reason;
      this.name = range;
      this.reason = reason;
      this.line = position ? position.line : null;
      this.column = position ? position.column : null;
      this.location = location;
      this.source = parts[0];
      this.ruleId = parts[1];
    }
    function parseOrigin(origin) {
      var result = [null, null];
      var index;
      if (typeof origin === 'string') {
        index = origin.indexOf(':');
        if (index === -1) {
          result[1] = origin;
        } else {
          result[0] = origin.slice(0, index);
          result[1] = origin.slice(index + 1);
        }
      }
      return result;
    }
  }
});

// esm-build-083884260b92c79a8b883e3e2570dcb3bc71a768-ae000c61/mod.js
var __module = __toESM(require_vfile_message());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
