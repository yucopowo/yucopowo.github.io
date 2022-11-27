/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Header/HeaderRow) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Header/HeaderRow.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Cell from '/cdn/v99/rc-table@7.26.0/es2022/es/Cell.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import { getCellFixedInfo } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/fixUtil.development.js';
import { getColumnsKey } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/valueUtil.development.js';
function HeaderRow(_ref) {
  var cells = _ref.cells,
    stickyOffsets = _ref.stickyOffsets,
    flattenColumns = _ref.flattenColumns,
    RowComponent = _ref.rowComponent,
    CellComponent = _ref.cellComponent,
    onHeaderRow = _ref.onHeaderRow,
    index = _ref.index;
  var _React$useContext = React.useContext(TableContext),
    prefixCls = _React$useContext.prefixCls,
    direction = _React$useContext.direction;
  var rowProps;
  if (onHeaderRow) {
    rowProps = onHeaderRow(
      cells.map(function(cell) {
        return cell.column;
      }),
      index
    );
  }
  var columnsKey = getColumnsKey(
    cells.map(function(cell) {
      return cell.column;
    })
  );
  return /* @__PURE__ */ React.createElement(
    RowComponent,
    rowProps,
    cells.map(function(cell, cellIndex) {
      var column = cell.column;
      var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
      var additionalProps;
      if (column && column.onHeaderCell) {
        additionalProps = cell.column.onHeaderCell(column);
      }
      return /* @__PURE__ */ React.createElement(
        Cell,
        _extends(
          {},
          cell,
          {
            ellipsis: column.ellipsis,
            align: column.align,
            component: CellComponent,
            prefixCls,
            key: columnsKey[cellIndex]
          },
          fixedInfo,
          {
            additionalProps,
            rowType: 'header'
          }
        )
      );
    })
  );
}
HeaderRow.displayName = 'HeaderRow';
var HeaderRow_default = HeaderRow;
export { HeaderRow_default as default };
