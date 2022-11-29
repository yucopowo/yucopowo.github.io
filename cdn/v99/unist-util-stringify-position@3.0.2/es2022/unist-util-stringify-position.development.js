/* esm.sh - esbuild bundle(unist-util-stringify-position@3.0.2) es2022 development */
// esm-build-ed80a277ae4dbea8e48afc1b6a111aa4e564cd75-16245ae6/node_modules/unist-util-stringify-position/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== 'object') {
    return '';
  }
  if ('position' in value || 'type' in value) {
    return position(value.position);
  }
  if ('start' in value || 'end' in value) {
    return position(value);
  }
  if ('line' in value || 'column' in value) {
    return point(value);
  }
  return '';
}
function point(point2) {
  return index(point2 && point2.line) + ':' + index(point2 && point2.column);
}
function position(pos) {
  return point(pos && pos.start) + '-' + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === 'number' ? value : 1;
}
export { stringifyPosition };
