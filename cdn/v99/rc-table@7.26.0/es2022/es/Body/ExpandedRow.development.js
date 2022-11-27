/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Body/ExpandedRow) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Body/ExpandedRow.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Cell from '/cdn/v99/rc-table@7.26.0/es2022/es/Cell.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import ExpandedRowContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/ExpandedRowContext.development.js';
function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
    children = _ref.children,
    Component = _ref.component,
    cellComponent = _ref.cellComponent,
    className = _ref.className,
    expanded = _ref.expanded,
    colSpan = _ref.colSpan,
    isEmpty = _ref.isEmpty;
  var _React$useContext = React.useContext(TableContext),
    scrollbarSize = _React$useContext.scrollbarSize;
  var _React$useContext2 = React.useContext(ExpandedRowContext),
    fixHeader = _React$useContext2.fixHeader,
    fixColumn = _React$useContext2.fixColumn,
    componentWidth = _React$useContext2.componentWidth,
    horizonScroll = _React$useContext2.horizonScroll;
  return React.useMemo(
    function() {
      var contentNode = children;
      if (isEmpty ? horizonScroll : fixColumn) {
        contentNode = /* @__PURE__ */ React.createElement(
          'div',
          {
            style: {
              width: componentWidth - (fixHeader ? scrollbarSize : 0),
              position: 'sticky',
              left: 0,
              overflow: 'hidden'
            },
            className: ''.concat(prefixCls, '-expanded-row-fixed')
          },
          componentWidth !== 0 && contentNode
        );
      }
      return /* @__PURE__ */ React.createElement(
        Component,
        {
          className,
          style: {
            display: expanded ? null : 'none'
          }
        },
        /* @__PURE__ */ React.createElement(
          Cell,
          {
            component: cellComponent,
            prefixCls,
            colSpan
          },
          contentNode
        )
      );
    },
    [
      children,
      Component,
      className,
      expanded,
      colSpan,
      isEmpty,
      scrollbarSize,
      componentWidth,
      fixColumn,
      fixHeader,
      horizonScroll
    ]
  );
}
var ExpandedRow_default = ExpandedRow;
export { ExpandedRow_default as default };
