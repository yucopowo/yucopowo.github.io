/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Cell) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Cell/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import { supportRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import { getPathValue, validateValue } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/valueUtil.development.js';
import StickyContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/StickyContext.development.js';
import HoverContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/HoverContext.development.js';
import BodyContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/BodyContext.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import PerfContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/PerfContext.development.js';
import { useContextSelector } from '/cdn/v99/rc-table@7.26.0/es2022/es/ContextSelector.development.js';
var _excluded = ['colSpan', 'rowSpan', 'style', 'className'];
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}
function isRenderCell(data) {
  return data && _typeof(data) === 'object' && !Array.isArray(data) && !(/* @__PURE__ */ React.isValidElement(data));
}
function isRefComponent(component) {
  if (typeof component === 'string') {
    return true;
  }
  return supportRef(component);
}
var getTitleFromCellRenderChildren = function getTitleFromCellRenderChildren2(_ref) {
  var ellipsis = _ref.ellipsis,
    rowType = _ref.rowType,
    children = _ref.children;
  var title;
  var ellipsisConfig =
    ellipsis === true
      ? {
          showTitle: true
        }
      : ellipsis;
  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof children === 'string' || typeof children === 'number') {
      title = children.toString();
    } else if (/* @__PURE__ */ React.isValidElement(children) && typeof children.props.children === 'string') {
      title = children.props.children;
    }
  }
  return title;
};
function Cell(_ref2, ref) {
  var _ref4, _ref5, _classNames;
  var prefixCls = _ref2.prefixCls,
    className = _ref2.className,
    record = _ref2.record,
    index = _ref2.index,
    renderIndex = _ref2.renderIndex,
    dataIndex = _ref2.dataIndex,
    render = _ref2.render,
    children = _ref2.children,
    _ref2$component = _ref2.component,
    Component = _ref2$component === void 0 ? 'td' : _ref2$component,
    colSpan = _ref2.colSpan,
    rowSpan = _ref2.rowSpan,
    fixLeft = _ref2.fixLeft,
    fixRight = _ref2.fixRight,
    firstFixLeft = _ref2.firstFixLeft,
    lastFixLeft = _ref2.lastFixLeft,
    firstFixRight = _ref2.firstFixRight,
    lastFixRight = _ref2.lastFixRight,
    appendNode = _ref2.appendNode,
    _ref2$additionalProps = _ref2.additionalProps,
    additionalProps = _ref2$additionalProps === void 0 ? {} : _ref2$additionalProps,
    ellipsis = _ref2.ellipsis,
    align = _ref2.align,
    rowType = _ref2.rowType,
    isSticky = _ref2.isSticky,
    hovering = _ref2.hovering,
    onHover = _ref2.onHover;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var perfRecord = React.useContext(PerfContext);
  var supportSticky = React.useContext(StickyContext);
  var _React$useContext = React.useContext(BodyContext),
    allColumnsFixedLeft = _React$useContext.allColumnsFixedLeft;
  var _React$useMemo = React.useMemo(
      function() {
        if (validateValue(children)) {
          return [children];
        }
        var value = getPathValue(record, dataIndex);
        var returnChildNode = value;
        var returnCellProps = void 0;
        if (render) {
          var renderData = render(value, record, renderIndex);
          if (isRenderCell(renderData)) {
            if (true) {
              warning(
                false,
                '`columns.render` return cell props is deprecated with perf issue, please use `onCell` instead.'
              );
            }
            returnChildNode = renderData.children;
            returnCellProps = renderData.props;
            perfRecord.renderWithProps = true;
          } else {
            returnChildNode = renderData;
          }
        }
        return [returnChildNode, returnCellProps];
      },
      [perfRecord.renderWithProps ? Math.random() : 0, children, dataIndex, perfRecord, record, render, renderIndex]
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    childNode = _React$useMemo2[0],
    legacyCellProps = _React$useMemo2[1];
  var mergedChildNode = childNode;
  if (
    _typeof(mergedChildNode) === 'object' &&
    !Array.isArray(mergedChildNode) &&
    !(/* @__PURE__ */ React.isValidElement(mergedChildNode))
  ) {
    mergedChildNode = null;
  }
  if (ellipsis && (lastFixLeft || firstFixRight)) {
    mergedChildNode = /* @__PURE__ */ React.createElement(
      'span',
      {
        className: ''.concat(cellPrefixCls, '-content')
      },
      mergedChildNode
    );
  }
  var _ref3 = legacyCellProps || {},
    cellColSpan = _ref3.colSpan,
    cellRowSpan = _ref3.rowSpan,
    cellStyle = _ref3.style,
    cellClassName = _ref3.className,
    restCellProps = _objectWithoutProperties(_ref3, _excluded);
  var mergedColSpan = (_ref4 = cellColSpan !== void 0 ? cellColSpan : colSpan) !== null && _ref4 !== void 0 ? _ref4 : 1;
  var mergedRowSpan = (_ref5 = cellRowSpan !== void 0 ? cellRowSpan : rowSpan) !== null && _ref5 !== void 0 ? _ref5 : 1;
  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  }
  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number' && supportSticky;
  var isFixRight = typeof fixRight === 'number' && supportSticky;
  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }
  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  }
  var alignStyle = {};
  if (align) {
    alignStyle.textAlign = align;
  }
  var onMouseEnter = function onMouseEnter2(event) {
    var _additionalProps$onMo;
    if (record) {
      onHover(index, index + mergedRowSpan - 1);
    }
    additionalProps === null || additionalProps === void 0
      ? void 0
      : (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0
      ? void 0
      : _additionalProps$onMo.call(additionalProps, event);
  };
  var onMouseLeave = function onMouseLeave2(event) {
    var _additionalProps$onMo2;
    if (record) {
      onHover(-1, -1);
    }
    additionalProps === null || additionalProps === void 0
      ? void 0
      : (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0
      ? void 0
      : _additionalProps$onMo2.call(additionalProps, event);
  };
  var title = getTitleFromCellRenderChildren({
    rowType,
    ellipsis,
    children: childNode
  });
  var componentProps = _objectSpread(
    _objectSpread(
      _objectSpread(
        {
          title
        },
        restCellProps
      ),
      additionalProps
    ),
    {},
    {
      colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
      rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
      className: classNames(
        cellPrefixCls,
        className,
        ((_classNames = {}),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-fix-left'), isFixLeft && supportSticky),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-fix-left-first'), firstFixLeft && supportSticky),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-fix-left-last'), lastFixLeft && supportSticky),
        _defineProperty(
          _classNames,
          ''.concat(cellPrefixCls, '-fix-left-all'),
          lastFixLeft && allColumnsFixedLeft && supportSticky
        ),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-fix-right'), isFixRight && supportSticky),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-fix-right-first'), firstFixRight && supportSticky),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-fix-right-last'), lastFixRight && supportSticky),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-ellipsis'), ellipsis),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-with-append'), appendNode),
        _defineProperty(
          _classNames,
          ''.concat(cellPrefixCls, '-fix-sticky'),
          (isFixLeft || isFixRight) && isSticky && supportSticky
        ),
        _defineProperty(_classNames, ''.concat(cellPrefixCls, '-row-hover'), !legacyCellProps && hovering),
        _classNames),
        additionalProps.className,
        cellClassName
      ),
      style: _objectSpread(
        _objectSpread(_objectSpread(_objectSpread({}, additionalProps.style), alignStyle), fixedStyle),
        cellStyle
      ),
      onMouseEnter,
      onMouseLeave,
      ref: isRefComponent(Component) ? ref : null
    }
  );
  return /* @__PURE__ */ React.createElement(Component, componentProps, appendNode, mergedChildNode);
}
var RefCell = /* @__PURE__ */ React.forwardRef(Cell);
RefCell.displayName = 'Cell';
var comparePropList = ['expanded', 'className', 'hovering'];
var MemoCell = /* @__PURE__ */ React.memo(RefCell, function(prev, next) {
  if (next.shouldCellUpdate) {
    return (
      comparePropList.every(function(propName) {
        return prev[propName] === next[propName];
      }) && !next.shouldCellUpdate(next.record, prev.record)
    );
  }
  return shallowEqual(prev, next);
});
var WrappedCell = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var index = props.index,
    _props$additionalProp = props.additionalProps,
    additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
    colSpan = props.colSpan,
    rowSpan = props.rowSpan;
  var cellColSpan = additionalProps.colSpan,
    cellRowSpan = additionalProps.rowSpan;
  var mergedColSpan = colSpan !== null && colSpan !== void 0 ? colSpan : cellColSpan;
  var mergedRowSpan = rowSpan !== null && rowSpan !== void 0 ? rowSpan : cellRowSpan;
  var _useContextSelector = useContextSelector(HoverContext, function(cxt) {
      var isHovering = inHoverRange(
        index,
        mergedRowSpan || 1,
        cxt === null || cxt === void 0 ? void 0 : cxt.startRow,
        cxt === null || cxt === void 0 ? void 0 : cxt.endRow
      );
      return {
        onHover: cxt === null || cxt === void 0 ? void 0 : cxt.onHover,
        hovering: isHovering
      };
    }),
    onHover = _useContextSelector.onHover,
    hovering = _useContextSelector.hovering;
  return /* @__PURE__ */ React.createElement(
    MemoCell,
    _extends({}, props, {
      colSpan: mergedColSpan,
      rowSpan: mergedRowSpan,
      hovering,
      ref,
      onHover
    })
  );
});
WrappedCell.displayName = 'WrappedCell';
var Cell_default = WrappedCell;
export { Cell_default as default };
