/* esm.sh - esbuild bundle(markdown-table@3.0.2) es2022 development */
// esm-build-f0a86ae98eebd163b77feb7affea0d904fcd4c44-c82dee32/node_modules/markdown-table/index.js
function markdownTable(table, options = {}) {
  const align = (options.align || []).concat();
  const stringLength = options.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length;
    }
    while (++columnIndex2 < table[rowIndex].length) {
      const cell = serialize(table[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code = alignments[columnIndex];
    let before = '';
    let after = '';
    if (code === 99) {
      before = ':';
      after = ':';
    } else if (code === 108) {
      before = ':';
    } else if (code === 114) {
      after = ':';
    }
    let size =
      options.alignDelimiters === false
        ? 1
        : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
    const cell = before + '-'.repeat(size) + after;
    if (options.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || '';
      let before = '';
      let after = '';
      if (options.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code = alignments[columnIndex];
        if (code === 114) {
          before = ' '.repeat(size);
        } else if (code === 99) {
          if (size % 2) {
            before = ' '.repeat(size / 2 + 0.5);
            after = ' '.repeat(size / 2 - 0.5);
          } else {
            before = ' '.repeat(size / 2);
            after = before;
          }
        } else {
          after = ' '.repeat(size);
        }
      }
      if (options.delimiterStart !== false && !columnIndex) {
        line.push('|');
      }
      if (
        options.padding !== false &&
        !(options.alignDelimiters === false && cell === '') &&
        (options.delimiterStart !== false || columnIndex)
      ) {
        line.push(' ');
      }
      if (options.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (options.alignDelimiters !== false) {
        line.push(after);
      }
      if (options.padding !== false) {
        line.push(' ');
      }
      if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push('|');
      }
    }
    lines.push(options.delimiterEnd === false ? line.join('').replace(/ +$/, '') : line.join(''));
  }
  return lines.join('\n');
}
function serialize(value) {
  return value === null || value === void 0 ? '' : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  const code = typeof value === 'string' ? value.codePointAt(0) : 0;
  return code === 67 || code === 99 ? 99 : code === 76 || code === 108 ? 108 : code === 82 || code === 114 ? 114 : 0;
}
export { markdownTable };
