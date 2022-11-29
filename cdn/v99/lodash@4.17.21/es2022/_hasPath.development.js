/* esm.sh - esbuild bundle(lodash@4.17.21/_hasPath) es2022 development */
import __lodash__castPath$ from '/cdn/v99/lodash@4.17.21/es2022/_castPath.development.js';
import __lodash__toKey$ from '/cdn/v99/lodash@4.17.21/es2022/_toKey.development.js';
import __lodash_isLength$ from '/cdn/v99/lodash@4.17.21/es2022/isLength.development.js';
import __lodash__isIndex$ from '/cdn/v99/lodash@4.17.21/es2022/_isIndex.development.js';
import __lodash_isArray$ from '/cdn/v99/lodash@4.17.21/es2022/isArray.development.js';
import __lodash_isArguments$ from '/cdn/v99/lodash@4.17.21/es2022/isArguments.development.js';
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

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  'esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_hasPath.js'(exports, module) {
    var castPath = __lodash__castPath$;
    var isArguments = __lodash_isArguments$;
    var isArray = __lodash_isArray$;
    var isIndex = __lodash__isIndex$;
    var isLength = __lodash_isLength$;
    var toKey = __lodash__toKey$;
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1,
        length = path.length,
        result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/mod.js
var __module = __toESM(require_hasPath());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
