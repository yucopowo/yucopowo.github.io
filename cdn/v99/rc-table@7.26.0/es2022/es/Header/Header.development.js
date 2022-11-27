/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Header/Header) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Header/Header.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import HeaderRow from '/cdn/v99/rc-table@7.26.0/es2022/es/Header/HeaderRow.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
function parseHeaderRows(rootColumns) {
  var rows = [];
  function fillRowCells(columns, colIndex) {
    var rowIndex2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    rows[rowIndex2] = rows[rowIndex2] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function(column) {
      var cell = {
        key: column.key,
        className: column.className || '',
        children: column.title,
        column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;
      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex2 + 1).reduce(function(total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }
      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }
      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }
      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex2].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  }
  fillRowCells(rootColumns, 0);
  var rowCount = rows.length;
  var _loop = function _loop2(rowIndex2) {
    rows[rowIndex2].forEach(function(cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        cell.rowSpan = rowCount - rowIndex2;
      }
    });
  };
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }
  return rows;
}
function Header(_ref) {
  var stickyOffsets = _ref.stickyOffsets,
    columns = _ref.columns,
    flattenColumns = _ref.flattenColumns,
    onHeaderRow = _ref.onHeaderRow;
  var _React$useContext = React.useContext(TableContext),
    prefixCls = _React$useContext.prefixCls,
    getComponent = _React$useContext.getComponent;
  var rows = React.useMemo(
    function() {
      return parseHeaderRows(columns);
    },
    [columns]
  );
  var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
  var trComponent = getComponent(['header', 'row'], 'tr');
  var thComponent = getComponent(['header', 'cell'], 'th');
  return /* @__PURE__ */ React.createElement(
    WrapperComponent,
    {
      className: ''.concat(prefixCls, '-thead')
    },
    rows.map(function(row, rowIndex) {
      var rowNode = /* @__PURE__ */ React.createElement(HeaderRow, {
        key: rowIndex,
        flattenColumns,
        cells: row,
        stickyOffsets,
        rowComponent: trComponent,
        cellComponent: thComponent,
        onHeaderRow,
        index: rowIndex
      });
      return rowNode;
    })
  );
}
var Header_default = Header;
export { Header_default as default };
