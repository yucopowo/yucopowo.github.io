/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/findDOMNode) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-9b2082e5577a14815da985b28ba242e0b1cdb3e3-99bacb95/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode_exports = {};
__export(findDOMNode_exports, {
  default: () => findDOMNode
});
import ReactDOM from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }
  return ReactDOM.findDOMNode(node);
}

// esm-build-9b2082e5577a14815da985b28ba242e0b1cdb3e3-99bacb95/mod.js
var { default: __default, ...__rest } = findDOMNode_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
