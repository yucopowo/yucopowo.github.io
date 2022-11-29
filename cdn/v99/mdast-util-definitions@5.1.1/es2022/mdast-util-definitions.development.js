/* esm.sh - esbuild bundle(mdast-util-definitions@5.1.1) es2022 development */
// esm-build-d4bdf96c51d1f3bc4f6994d830664d37a6a27feb-3df9b8e9/node_modules/mdast-util-definitions/index.js
import { visit } from '/cdn/v99/unist-util-visit@4.1.1/es2022/unist-util-visit.development.js';
var own = {}.hasOwnProperty;
function definitions(node) {
  const cache = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node');
  }
  visit(node, 'definition', definition2 => {
    const id = clean(definition2.identifier);
    if (id && !own.call(cache, id)) {
      cache[id] = definition2;
    }
  });
  return definition;
  function definition(identifier) {
    const id = clean(identifier);
    return id && own.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || '').toUpperCase();
}
export { definitions };
