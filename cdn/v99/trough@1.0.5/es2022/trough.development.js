/* esm.sh - esbuild bundle(trough@1.0.5) es2022 development */
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

// esm-build-6ac8fd6d9e03f8549068ed81489a62ed2cae3aeb-88fb50be/node_modules/trough/wrap.js
var require_wrap = __commonJS({
  'esm-build-6ac8fd6d9e03f8549068ed81489a62ed2cae3aeb-88fb50be/node_modules/trough/wrap.js'(exports, module) {
    'use strict';

    var slice = [].slice;
    module.exports = wrap;
    function wrap(fn, callback) {
      var invoked;
      return wrapped;
      function wrapped() {
        var params = slice.call(arguments, 0);
        var callback2 = fn.length > params.length;
        var result;
        if (callback2) {
          params.push(done);
        }
        try {
          result = fn.apply(null, params);
        } catch (error) {
          if (callback2 && invoked) {
            throw error;
          }
          return done(error);
        }
        if (!callback2) {
          if (result && typeof result.then === 'function') {
            result.then(then, done);
          } else if (result instanceof Error) {
            done(result);
          } else {
            then(result);
          }
        }
      }
      function done() {
        if (!invoked) {
          invoked = true;
          callback.apply(null, arguments);
        }
      }
      function then(value) {
        done(null, value);
      }
    }
  }
});

// esm-build-6ac8fd6d9e03f8549068ed81489a62ed2cae3aeb-88fb50be/node_modules/trough/index.js
var require_trough = __commonJS({
  'esm-build-6ac8fd6d9e03f8549068ed81489a62ed2cae3aeb-88fb50be/node_modules/trough/index.js'(exports, module) {
    'use strict';

    var wrap = require_wrap();
    module.exports = trough;
    trough.wrap = wrap;
    var slice = [].slice;
    function trough() {
      var fns = [];
      var middleware = {};
      middleware.run = run;
      middleware.use = use;
      return middleware;
      function run() {
        var index = -1;
        var input = slice.call(arguments, 0, -1);
        var done = arguments[arguments.length - 1];
        if (typeof done !== 'function') {
          throw new Error('Expected function as last argument, not ' + done);
        }
        next.apply(null, [null].concat(input));
        function next(err) {
          var fn = fns[++index];
          var params = slice.call(arguments, 0);
          var values = params.slice(1);
          var length = input.length;
          var pos = -1;
          if (err) {
            done(err);
            return;
          }
          while (++pos < length) {
            if (values[pos] === null || values[pos] === void 0) {
              values[pos] = input[pos];
            }
          }
          input = values;
          if (fn) {
            wrap(fn, next).apply(null, input);
          } else {
            done.apply(null, [null].concat(input));
          }
        }
      }
      function use(fn) {
        if (typeof fn !== 'function') {
          throw new Error('Expected `fn` to be a function, not ' + fn);
        }
        fns.push(fn);
        return middleware;
      }
    }
  }
});

// esm-build-6ac8fd6d9e03f8549068ed81489a62ed2cae3aeb-88fb50be/mod.js
var __module = __toESM(require_trough());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
