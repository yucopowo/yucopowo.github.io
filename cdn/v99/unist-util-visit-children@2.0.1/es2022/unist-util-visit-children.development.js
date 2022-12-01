/* esm.sh - esbuild bundle(unist-util-visit-children@2.0.1) es2022 development */
// esm-build-34cde1ef81f6e9a87fb039934bab24338ceeee5e-b387b260/node_modules/unist-util-visit-children/index.js
function visitChildren(visitor) {
  return visit;
  function visit(parent) {
    const children = parent && parent.children;
    let index = -1;
    if (!children) {
      throw new Error('Missing children in `parent` for `visit`');
    }
    while (++index in children) {
      visitor(children[index], index, parent);
    }
  }
}
export { visitChildren };
