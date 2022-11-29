/* esm.sh - esbuild bundle(unist-util-generated@2.0.0) es2022 development */
// esm-build-210b6477e99e15617b7ebf168093d92bb1846492-738b5aa2/node_modules/unist-util-generated/index.js
function generated(node) {
  return (
    !node ||
    !node.position ||
    !node.position.start ||
    !node.position.start.line ||
    !node.position.start.column ||
    !node.position.end ||
    !node.position.end.line ||
    !node.position.end.column
  );
}
export { generated };
