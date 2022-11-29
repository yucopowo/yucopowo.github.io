/* esm.sh - esbuild bundle(prop-types@15.8.1/checkPropTypes) es2022 development */
import __prop_types_lib_has$ from '/cdn/v99/prop-types@15.8.1/es2022/lib/has.development.js';
import __prop_types_lib_ReactPropTypesSecret$ from '/cdn/v99/prop-types@15.8.1/es2022/lib/ReactPropTypesSecret.development.js';
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

// esm-build-178f020ba14930bd19cdf81d20931a102d909efc-4ea6da3b/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  'esm-build-178f020ba14930bd19cdf81d20931a102d909efc-4ea6da3b/node_modules/prop-types/checkPropTypes.js'(
    exports,
    module
  ) {
    'use strict';

    var printWarning = function() {};
    if (true) {
      ReactPropTypesSecret = __prop_types_lib_ReactPropTypesSecret$;
      loggedTypeFailures = {};
      has = __prop_types_lib_has$;
      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') +
                    ': ' +
                    location +
                    ' type `' +
                    typeSpecName +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof typeSpecs[typeSpecName] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](
                values,
                typeSpecName,
                componentName,
                location,
                null,
                ReactPropTypesSecret
              );
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') +
                  ': type specification of ' +
                  location +
                  ' `' +
                  typeSpecName +
                  '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                  typeof error +
                  '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// esm-build-178f020ba14930bd19cdf81d20931a102d909efc-4ea6da3b/mod.js
var __module = __toESM(require_checkPropTypes());
var { resetWarningCache } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, resetWarningCache };
