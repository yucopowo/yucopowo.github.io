/* esm.sh - esbuild bundle(unist-util-visit@4.1.1) es2022 development */
// esm-build-c2b118d0b15dfb975985a5f7e43cdf49ac42f104-f7d1a5f4/node_modules/unist-util-visit/index.js
import { visitParents } from '/cdn/v99/unist-util-visit-parents@5.1.1/es2022/unist-util-visit-parents.development.js';
import {
  CONTINUE,
  EXIT,
  SKIP
} from '/cdn/v99/unist-util-visit-parents@5.1.1/es2022/unist-util-visit-parents.development.js';
var visit = function(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
export { CONTINUE, EXIT, SKIP, visit };
