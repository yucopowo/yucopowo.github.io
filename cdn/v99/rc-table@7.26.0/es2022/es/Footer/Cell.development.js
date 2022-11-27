/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Footer/Cell) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Footer/Cell.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import SummaryContext from '/cdn/v99/rc-table@7.26.0/es2022/es/Footer/SummaryContext.development.js';
import Cell from '/cdn/v99/rc-table@7.26.0/es2022/es/Cell.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import { getCellFixedInfo } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/fixUtil.development.js';
function SummaryCell(_ref) {
  var className = _ref.className,
    index = _ref.index,
    children = _ref.children,
    _ref$colSpan = _ref.colSpan,
    colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
    rowSpan = _ref.rowSpan,
    align = _ref.align;
  var _React$useContext = React.useContext(TableContext),
    prefixCls = _React$useContext.prefixCls,
    direction = _React$useContext.direction;
  var _React$useContext2 = React.useContext(SummaryContext),
    scrollColumnIndex = _React$useContext2.scrollColumnIndex,
    stickyOffsets = _React$useContext2.stickyOffsets,
    flattenColumns = _React$useContext2.flattenColumns;
  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = getCellFixedInfo(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
  return /* @__PURE__ */ React.createElement(
    Cell,
    _extends(
      {
        className,
        index,
        component: 'td',
        prefixCls,
        record: null,
        dataIndex: null,
        align,
        colSpan: mergedColSpan,
        rowSpan,
        render: function render() {
          return children;
        }
      },
      fixedInfo
    )
  );
}
export { SummaryCell as default };
