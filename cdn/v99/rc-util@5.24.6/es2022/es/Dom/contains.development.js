/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/contains) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-6d5de7e03b3501522cc1608935c7582fdfd90cdb-c7209be5/node_modules/rc-util/es/Dom/contains.js
var contains_exports = {};
__export(contains_exports, {
  default: () => contains
});
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// esm-build-6d5de7e03b3501522cc1608935c7582fdfd90cdb-c7209be5/mod.js
var { default: __default, ...__rest } = contains_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
