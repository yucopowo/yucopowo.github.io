/* esm.sh - esbuild bundle(json2mq@0.2.0) es2022 development */
import __string_convert_camel2hyphen$ from '/cdn/v99/string-convert@0.2.1/es2022/camel2hyphen.development.js';
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

// esm-build-67dadea5dedf050dd95337764d7f19a2a89483d9-e7be035f/node_modules/json2mq/index.js
var require_json2mq = __commonJS({
  'esm-build-67dadea5dedf050dd95337764d7f19a2a89483d9-e7be035f/node_modules/json2mq/index.js'(exports, module) {
    var camel2hyphen = __string_convert_camel2hyphen$;
    var isDimension = function(feature) {
      var re = /[height|width]$/;
      return re.test(feature);
    };
    var obj2mq = function(obj) {
      var mq = '';
      var features = Object.keys(obj);
      features.forEach(function(feature, index) {
        var value = obj[feature];
        feature = camel2hyphen(feature);
        if (isDimension(feature) && typeof value === 'number') {
          value = value + 'px';
        }
        if (value === true) {
          mq += feature;
        } else if (value === false) {
          mq += 'not ' + feature;
        } else {
          mq += '(' + feature + ': ' + value + ')';
        }
        if (index < features.length - 1) {
          mq += ' and ';
        }
      });
      return mq;
    };
    var json2mq = function(query) {
      var mq = '';
      if (typeof query === 'string') {
        return query;
      }
      if (query instanceof Array) {
        query.forEach(function(q, index) {
          mq += obj2mq(q);
          if (index < query.length - 1) {
            mq += ', ';
          }
        });
        return mq;
      }
      return obj2mq(query);
    };
    module.exports = json2mq;
  }
});

// esm-build-67dadea5dedf050dd95337764d7f19a2a89483d9-e7be035f/mod.js
var __module = __toESM(require_json2mq());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
