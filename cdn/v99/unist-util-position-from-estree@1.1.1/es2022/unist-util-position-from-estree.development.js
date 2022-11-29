/* esm.sh - esbuild bundle(unist-util-position-from-estree@1.1.1) es2022 development */
// esm-build-4444eaf55f716548ac394bd815b179a4d80230e3-c4099e14/node_modules/unist-util-position-from-estree/index.js
function positionFromEstree(value) {
  const node = value || {};
  const loc = node.loc || {};
  const range = node.range || [0, 0];
  const startOffset = range[0] || node.start;
  const endOffset = range[1] || node.end;
  return {
    start: {
      line: loc.start && typeof loc.start.line === 'number' && loc.start.line > -1 ? loc.start.line : void 0,
      column:
        loc.start && typeof loc.start.column === 'number' && loc.start.column > -1 ? loc.start.column + 1 : void 0,
      offset: typeof startOffset === 'number' && startOffset > -1 ? startOffset : void 0
    },
    end: {
      line: loc.end && typeof loc.end.line === 'number' && loc.end.line > -1 ? loc.end.line : void 0,
      column: loc.end && typeof loc.end.column === 'number' && loc.end.column > -1 ? loc.end.column + 1 : void 0,
      offset: typeof endOffset === 'number' && endOffset > -1 ? endOffset : void 0
    }
  };
}
export { positionFromEstree };