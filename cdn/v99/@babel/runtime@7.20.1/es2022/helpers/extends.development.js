/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/extends) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-f69632a2098069d10ce6ec0a3d739cfb3c976c1c-4148da89/node_modules/@babel/runtime/helpers/esm/extends.js
var extends_exports = {};
__export(extends_exports, {
  default: () => _extends
});
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}

// esm-build-f69632a2098069d10ce6ec0a3d739cfb3c976c1c-4148da89/mod.js
var { default: __default, ...__rest } = extends_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };