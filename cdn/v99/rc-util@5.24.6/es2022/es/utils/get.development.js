/* esm.sh - esbuild bundle(rc-util@5.24.6/es/utils/get) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-448800c9276523a8ca553901550cea0560bcb608-354ce41d/node_modules/rc-util/es/utils/get.js
var get_exports = {};
__export(get_exports, {
  default: () => get
});
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}

// esm-build-448800c9276523a8ca553901550cea0560bcb608-354ce41d/mod.js
var { default: __default, ...__rest } = get_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
