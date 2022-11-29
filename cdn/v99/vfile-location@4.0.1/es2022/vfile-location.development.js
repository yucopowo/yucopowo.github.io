/* esm.sh - esbuild bundle(vfile-location@4.0.1) es2022 development */
// esm-build-a655c4668b7cf7b05173a94da6ea852c94d1504f-a7da45e3/node_modules/vfile-location/index.js
function location(file) {
  var value = String(file);
  var indices = [];
  var search = /\r?\n|\r/g;
  while (search.test(value)) {
    indices.push(search.lastIndex);
  }
  indices.push(value.length + 1);
  return {
    toPoint,
    toOffset
  };
  function toPoint(offset) {
    var index = -1;
    if (offset > -1 && offset < indices[indices.length - 1]) {
      while (++index < indices.length) {
        if (indices[index] > offset) {
          return {
            line: index + 1,
            column: offset - (indices[index - 1] || 0) + 1,
            offset
          };
        }
      }
    }
    return {
      line: void 0,
      column: void 0,
      offset: void 0
    };
  }
  function toOffset(point) {
    var line = point && point.line;
    var column = point && point.column;
    var offset;
    if (
      typeof line === 'number' &&
      typeof column === 'number' &&
      !Number.isNaN(line) &&
      !Number.isNaN(column) &&
      line - 1 in indices
    ) {
      offset = (indices[line - 2] || 0) + column - 1 || 0;
    }
    return offset > -1 && offset < indices[indices.length - 1] ? offset : -1;
  }
}
export { location };
