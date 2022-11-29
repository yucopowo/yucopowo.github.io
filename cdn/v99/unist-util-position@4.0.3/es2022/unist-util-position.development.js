/* esm.sh - esbuild bundle(unist-util-position@4.0.3) es2022 development */
// esm-build-9d49894c973aaf09f975a3d041c55000c12c2d37-01d7b3ca/node_modules/unist-util-position/index.js
var pointStart = point('start');
var pointEnd = point('end');
function position(node) {
  return {
    start: pointStart(node),
    end: pointEnd(node)
  };
}
function point(type) {
  return point2;
  function point2(node) {
    const point3 = (node && node.position && node.position[type]) || {};
    return {
      line: point3.line || null,
      column: point3.column || null,
      offset: point3.offset > -1 ? point3.offset : null
    };
  }
}
export { pointEnd, pointStart, position };