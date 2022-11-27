/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Footer) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Footer/index.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import Summary from '/cdn/v99/rc-table@7.26.0/es2022/es/Footer/Summary.development.js';
import SummaryContext from '/cdn/v99/rc-table@7.26.0/es2022/es/Footer/SummaryContext.development.js';
function Footer(_ref) {
  var children = _ref.children,
    stickyOffsets = _ref.stickyOffsets,
    flattenColumns = _ref.flattenColumns;
  var tableContext = React.useContext(TableContext);
  var prefixCls = tableContext.prefixCls;
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = React.useMemo(
    function() {
      return {
        stickyOffsets,
        flattenColumns,
        scrollColumnIndex: (scrollColumn === null || scrollColumn === void 0
        ? void 0
        : scrollColumn.scrollbar)
          ? lastColumnIndex
          : null
      };
    },
    [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets]
  );
  return /* @__PURE__ */ React.createElement(
    SummaryContext.Provider,
    {
      value: summaryContext
    },
    /* @__PURE__ */ React.createElement(
      'tfoot',
      {
        className: ''.concat(prefixCls, '-summary')
      },
      children
    )
  );
}
var Footer_default = Footer;
var FooterComponents = Summary;
export { FooterComponents, Footer_default as default };
