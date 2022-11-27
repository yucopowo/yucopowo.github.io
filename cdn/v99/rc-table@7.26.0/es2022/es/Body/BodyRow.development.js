/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Body/BodyRow) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Body/BodyRow.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import Cell from '/cdn/v99/rc-table@7.26.0/es2022/es/Cell.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import BodyContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/BodyContext.development.js';
import { getColumnsKey } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/valueUtil.development.js';
import ExpandedRow from '/cdn/v99/rc-table@7.26.0/es2022/es/Body/ExpandedRow.development.js';
function BodyRow(props) {
  var className = props.className,
    style = props.style,
    record = props.record,
    index = props.index,
    renderIndex = props.renderIndex,
    rowKey = props.rowKey,
    rowExpandable = props.rowExpandable,
    expandedKeys = props.expandedKeys,
    onRow = props.onRow,
    _props$indent = props.indent,
    indent = _props$indent === void 0 ? 0 : _props$indent,
    RowComponent = props.rowComponent,
    cellComponent = props.cellComponent,
    childrenColumnName = props.childrenColumnName;
  var _React$useContext = React.useContext(TableContext),
    prefixCls = _React$useContext.prefixCls,
    fixedInfoList = _React$useContext.fixedInfoList;
  var _React$useContext2 = React.useContext(BodyContext),
    flattenColumns = _React$useContext2.flattenColumns,
    expandableType = _React$useContext2.expandableType,
    expandRowByClick = _React$useContext2.expandRowByClick,
    onTriggerExpand = _React$useContext2.onTriggerExpand,
    rowClassName = _React$useContext2.rowClassName,
    expandedRowClassName = _React$useContext2.expandedRowClassName,
    indentSize = _React$useContext2.indentSize,
    expandIcon = _React$useContext2.expandIcon,
    expandedRowRender = _React$useContext2.expandedRowRender,
    expandIconColumnIndex = _React$useContext2.expandIconColumnIndex;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expandRended = _React$useState2[0],
    setExpandRended = _React$useState2[1];
  var expanded = expandedKeys && expandedKeys.has(props.recordKey);
  React.useEffect(
    function() {
      if (expanded) {
        setExpandRended(true);
      }
    },
    [expanded]
  );
  var rowSupportExpand = expandableType === 'row' && (!rowExpandable || rowExpandable(record));
  var nestExpandable = expandableType === 'nest';
  var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
  var mergedExpandable = rowSupportExpand || nestExpandable;
  var onExpandRef = React.useRef(onTriggerExpand);
  onExpandRef.current = onTriggerExpand;
  var onInternalTriggerExpand = function onInternalTriggerExpand2() {
    onExpandRef.current.apply(onExpandRef, arguments);
  };
  var additionalProps = onRow === null || onRow === void 0 ? void 0 : onRow(record, index);
  var onClick = function onClick2(event) {
    var _additionalProps$onCl;
    if (expandRowByClick && mergedExpandable) {
      onInternalTriggerExpand(record, event);
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    additionalProps === null || additionalProps === void 0
      ? void 0
      : (_additionalProps$onCl = additionalProps.onClick) === null || _additionalProps$onCl === void 0
      ? void 0
      : _additionalProps$onCl.call.apply(_additionalProps$onCl, [additionalProps, event].concat(args));
  };
  var computeRowClassName;
  if (typeof rowClassName === 'string') {
    computeRowClassName = rowClassName;
  } else if (typeof rowClassName === 'function') {
    computeRowClassName = rowClassName(record, index, indent);
  }
  var columnsKey = getColumnsKey(flattenColumns);
  var baseRowNode = /* @__PURE__ */ React.createElement(
    RowComponent,
    _extends({}, additionalProps, {
      'data-row-key': rowKey,
      className: classNames(
        className,
        ''.concat(prefixCls, '-row'),
        ''.concat(prefixCls, '-row-level-').concat(indent),
        computeRowClassName,
        additionalProps && additionalProps.className
      ),
      style: _objectSpread(_objectSpread({}, style), additionalProps ? additionalProps.style : null),
      onClick
    }),
    flattenColumns.map(function(column, colIndex) {
      var render = column.render,
        dataIndex = column.dataIndex,
        columnClassName = column.className;
      var key = columnsKey[colIndex];
      var fixedInfo = fixedInfoList[colIndex];
      var appendCellNode;
      if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
        appendCellNode = /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement('span', {
            style: {
              paddingLeft: ''.concat(indentSize * indent, 'px')
            },
            className: ''.concat(prefixCls, '-row-indent indent-level-').concat(indent)
          }),
          expandIcon({
            prefixCls,
            expanded,
            expandable: hasNestChildren,
            record,
            onExpand: onInternalTriggerExpand
          })
        );
      }
      var additionalCellProps;
      if (column.onCell) {
        additionalCellProps = column.onCell(record, index);
      }
      return /* @__PURE__ */ React.createElement(
        Cell,
        _extends(
          {
            className: columnClassName,
            ellipsis: column.ellipsis,
            align: column.align,
            component: cellComponent,
            prefixCls,
            key,
            record,
            index,
            renderIndex,
            dataIndex,
            render,
            shouldCellUpdate: column.shouldCellUpdate,
            expanded: appendCellNode && expanded
          },
          fixedInfo,
          {
            appendNode: appendCellNode,
            additionalProps: additionalCellProps
          }
        )
      );
    })
  );
  var expandRowNode;
  if (rowSupportExpand && (expandRended || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
    expandRowNode = /* @__PURE__ */ React.createElement(
      ExpandedRow,
      {
        expanded,
        className: classNames(
          ''.concat(prefixCls, '-expanded-row'),
          ''.concat(prefixCls, '-expanded-row-level-').concat(indent + 1),
          computedExpandedRowClassName
        ),
        prefixCls,
        component: RowComponent,
        cellComponent,
        colSpan: flattenColumns.length,
        isEmpty: false
      },
      expandContent
    );
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, baseRowNode, expandRowNode);
}
BodyRow.displayName = 'BodyRow';
var BodyRow_default = BodyRow;
export { BodyRow_default as default };
