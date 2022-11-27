/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Body) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Body/index.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import ExpandedRow from '/cdn/v99/rc-table@7.26.0/es2022/es/Body/ExpandedRow.development.js';
import BodyContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/BodyContext.development.js';
import { getColumnsKey } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/valueUtil.development.js';
import ResizeContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/ResizeContext.development.js';
import BodyRow from '/cdn/v99/rc-table@7.26.0/es2022/es/Body/BodyRow.development.js';
import useFlattenRecords from '/cdn/v99/rc-table@7.26.0/es2022/es/hooks/useFlattenRecords.development.js';
import HoverContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/HoverContext.development.js';
import PerfContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/PerfContext.development.js';
import MeasureRow from '/cdn/v99/rc-table@7.26.0/es2022/es/Body/MeasureRow.development.js';
function Body(_ref) {
  var data = _ref.data,
    getRowKey = _ref.getRowKey,
    measureColumnWidth = _ref.measureColumnWidth,
    expandedKeys = _ref.expandedKeys,
    onRow = _ref.onRow,
    rowExpandable = _ref.rowExpandable,
    emptyNode = _ref.emptyNode,
    childrenColumnName = _ref.childrenColumnName;
  var _React$useContext = React.useContext(ResizeContext),
    onColumnResize = _React$useContext.onColumnResize;
  var _React$useContext2 = React.useContext(TableContext),
    prefixCls = _React$useContext2.prefixCls,
    getComponent = _React$useContext2.getComponent;
  var _React$useContext3 = React.useContext(BodyContext),
    flattenColumns = _React$useContext3.flattenColumns;
  var flattenData = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey);
  var perfRef = React.useRef({
    renderWithProps: false
  });
  var _React$useState = React.useState(-1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    startRow = _React$useState2[0],
    setStartRow = _React$useState2[1];
  var _React$useState3 = React.useState(-1),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    endRow = _React$useState4[0],
    setEndRow = _React$useState4[1];
  var onHover = React.useCallback(function(start, end) {
    setStartRow(start);
    setEndRow(end);
  }, []);
  var bodyNode = React.useMemo(
    function() {
      var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
      var trComponent = getComponent(['body', 'row'], 'tr');
      var tdComponent = getComponent(['body', 'cell'], 'td');
      var rows;
      if (data.length) {
        rows = flattenData.map(function(item, idx) {
          var record = item.record,
            indent = item.indent,
            renderIndex = item.index;
          var key = getRowKey(record, idx);
          return /* @__PURE__ */ React.createElement(BodyRow, {
            key,
            rowKey: key,
            record,
            recordKey: key,
            index: idx,
            renderIndex,
            rowComponent: trComponent,
            cellComponent: tdComponent,
            expandedKeys,
            onRow,
            getRowKey,
            rowExpandable,
            childrenColumnName,
            indent
          });
        });
      } else {
        rows = /* @__PURE__ */ React.createElement(
          ExpandedRow,
          {
            expanded: true,
            className: ''.concat(prefixCls, '-placeholder'),
            prefixCls,
            component: trComponent,
            cellComponent: tdComponent,
            colSpan: flattenColumns.length,
            isEmpty: true
          },
          emptyNode
        );
      }
      var columnsKey = getColumnsKey(flattenColumns);
      return /* @__PURE__ */ React.createElement(
        WrapperComponent,
        {
          className: ''.concat(prefixCls, '-tbody')
        },
        measureColumnWidth &&
          /* @__PURE__ */ React.createElement(MeasureRow, {
            prefixCls,
            columnsKey,
            onColumnResize
          }),
        rows
      );
    },
    [
      data,
      prefixCls,
      onRow,
      measureColumnWidth,
      expandedKeys,
      getRowKey,
      getComponent,
      emptyNode,
      flattenColumns,
      childrenColumnName,
      onColumnResize,
      rowExpandable,
      flattenData
    ]
  );
  return /* @__PURE__ */ React.createElement(
    PerfContext.Provider,
    {
      value: perfRef.current
    },
    /* @__PURE__ */ React.createElement(
      HoverContext.Provider,
      {
        value: {
          startRow,
          endRow,
          onHover
        }
      },
      bodyNode
    )
  );
}
var MemoBody = /* @__PURE__ */ React.memo(Body);
MemoBody.displayName = 'Body';
var Body_default = MemoBody;
export { Body_default as default };
