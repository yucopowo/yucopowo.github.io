/* esm.sh - esbuild bundle(unist-util-visit-parents@5.1.1) es2022 development */
// esm-build-d6feb2a046cef3d13e1451e6cc33b3c984abb176-2012df7b/node_modules/unist-util-visit-parents/index.js
import { convert } from '/cdn/v99/unist-util-is@5.1.1/es2022/unist-util-is.development.js';

// esm-build-d6feb2a046cef3d13e1451e6cc33b3c984abb176-2012df7b/node_modules/unist-util-visit-parents/color.browser.js
function color(d) {
  return d;
}

// esm-build-d6feb2a046cef3d13e1451e6cc33b3c984abb176-2012df7b/node_modules/unist-util-visit-parents/index.js
var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;
var visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert(test);
  const step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index, parents) {
    const value = typeof node === 'object' && node !== null ? node : {};
    let name;
    if (typeof value.type === 'string') {
      name = typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : void 0;
      Object.defineProperty(visit, 'name', {
        value: 'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }
    return visit;
    function visit() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'number') {
    return [CONTINUE, value];
  }
  return [value];
}
export { CONTINUE, EXIT, SKIP, visitParents };
