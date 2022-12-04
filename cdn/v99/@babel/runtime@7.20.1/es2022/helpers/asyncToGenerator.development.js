/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/asyncToGenerator) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-9dba30c2005182723c3c5d063de52c38b6ae8fb7-9fa4954c/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator_exports = {};
__export(asyncToGenerator_exports, {
  default: () => _asyncToGenerator
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(void 0);
    });
  };
}

// esm-build-9dba30c2005182723c3c5d063de52c38b6ae8fb7-9fa4954c/mod.js
var { default: __default, ...__rest } = asyncToGenerator_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };