/* esm.sh - esbuild bundle(unist-builder@3.0.0) es2022 development */
// esm-build-4e20805e2b41711a067f509488248e16fa1f1960-9a97ba8a/node_modules/unist-builder/index.js
var u = function(type, props, value) {
  var node = {
    type: String(type)
  };
  if ((value === void 0 || value === null) && (typeof props === 'string' || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
};
export { u };
