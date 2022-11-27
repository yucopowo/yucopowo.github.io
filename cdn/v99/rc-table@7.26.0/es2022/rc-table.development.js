/* esm.sh - esbuild bundle(rc-table@7.26.0) es2022 development */
// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Table.js
import _defineProperty6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _extends6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React28 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import isVisible from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/isVisible.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
import { isStyleSupport } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/styleChecker.development.js';
import classNames6 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import shallowEqual3 from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import ResizeObserver3 from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
import { getTargetScrollBarSize } from '/cdn/v99/rc-util@5.24.6/es2022/es/getScrollBarSize.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/sugar/ColumnGroup.js
function ColumnGroup(_) {
  return null;
}
var ColumnGroup_default = ColumnGroup;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/sugar/Column.js
function Column(_) {
  return null;
}
var Column_default = Column;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Header/Header.js
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Header/HeaderRow.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Cell/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import shallowEqual2 from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import { supportRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/utils/valueUtil.js
var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';
function toArray(arr) {
  if (arr === void 0 || arr === null) {
    return [];
  }
  return Array.isArray(arr) ? arr : [arr];
}
function getPathValue(record, path) {
  if (!path && typeof path !== 'number') {
    return record;
  }
  var pathList = toArray(path);
  var current = record;
  for (var i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null;
    }
    var prop = pathList[i];
    current = current[prop];
  }
  return current;
}
function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function(column) {
    var _ref = column || {},
      key = _ref.key,
      dataIndex = _ref.dataIndex;
    var mergedKey = key || toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;
    while (keys[mergedKey]) {
      mergedKey = ''.concat(mergedKey, '_next');
    }
    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function validateValue(val) {
  return val !== null && val !== void 0;
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/StickyContext.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var StickyContext = /* @__PURE__ */ React.createContext(false);
var StickyContext_default = StickyContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/ContextSelector/index.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import useEvent from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useEvent.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
function createContext3() {
  var Context = /* @__PURE__ */ React2.createContext(null);
  var Provider = function Provider2(_ref) {
    var value = _ref.value,
      children = _ref.children;
    var valueRef = React2.useRef(value);
    valueRef.current = value;
    var _React$useState = React2.useState(function() {
        return {
          getValue: function getValue() {
            return valueRef.current;
          },
          listeners: /* @__PURE__ */ new Set()
        };
      }),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      context = _React$useState2[0];
    useLayoutEffect(
      function() {
        context.listeners.forEach(function(listener) {
          listener(value);
        });
      },
      [value]
    );
    return /* @__PURE__ */ React2.createElement(
      Context.Provider,
      {
        value: context
      },
      children
    );
  };
  return {
    Context,
    Provider
  };
}
function useContextSelector(holder, selector) {
  var eventSelector = useEvent(selector);
  var context = React2.useContext(holder === null || holder === void 0 ? void 0 : holder.Context);
  var _ref2 = context || {},
    listeners = _ref2.listeners,
    getValue = _ref2.getValue;
  var _React$useState3 = React2.useState(function() {
      return eventSelector(context ? getValue() : null);
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value = _React$useState4[0],
    setValue = _React$useState4[1];
  useLayoutEffect(
    function() {
      if (!context) {
        return;
      }
      function trigger(nextValue) {
        setValue(function(prev) {
          var selectedValue = eventSelector(nextValue);
          return shallowEqual(prev, selectedValue) ? prev : selectedValue;
        });
      }
      listeners.add(trigger);
      return function() {
        listeners.delete(trigger);
      };
    },
    [context]
  );
  return value;
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/HoverContext.js
var HoverContext = createContext3();
var HoverContext_default = HoverContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/BodyContext.js
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var BodyContext = /* @__PURE__ */ React3.createContext(null);
var BodyContext_default = BodyContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Cell/index.js
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/PerfContext.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var PerfContext = /* @__PURE__ */ React4.createContext({
  renderWithProps: false
});
var PerfContext_default = PerfContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Cell/index.js
var _excluded = ['colSpan', 'rowSpan', 'style', 'className'];
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}
function isRenderCell(data) {
  return data && _typeof(data) === 'object' && !Array.isArray(data) && !(/* @__PURE__ */ React5.isValidElement(data));
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
    } else if (/* @__PURE__ */ React5.isValidElement(children) && typeof children.props.children === 'string') {
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
  var perfRecord = React5.useContext(PerfContext_default);
  var supportSticky = React5.useContext(StickyContext_default);
  var _React$useContext = React5.useContext(BodyContext_default),
    allColumnsFixedLeft = _React$useContext.allColumnsFixedLeft;
  var _React$useMemo = React5.useMemo(
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
    _React$useMemo2 = _slicedToArray2(_React$useMemo, 2),
    childNode = _React$useMemo2[0],
    legacyCellProps = _React$useMemo2[1];
  var mergedChildNode = childNode;
  if (
    _typeof(mergedChildNode) === 'object' &&
    !Array.isArray(mergedChildNode) &&
    !(/* @__PURE__ */ React5.isValidElement(mergedChildNode))
  ) {
    mergedChildNode = null;
  }
  if (ellipsis && (lastFixLeft || firstFixRight)) {
    mergedChildNode = /* @__PURE__ */ React5.createElement(
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
  return /* @__PURE__ */ React5.createElement(Component, componentProps, appendNode, mergedChildNode);
}
var RefCell = /* @__PURE__ */ React5.forwardRef(Cell);
RefCell.displayName = 'Cell';
var comparePropList = ['expanded', 'className', 'hovering'];
var MemoCell = /* @__PURE__ */ React5.memo(RefCell, function(prev, next) {
  if (next.shouldCellUpdate) {
    return (
      comparePropList.every(function(propName) {
        return prev[propName] === next[propName];
      }) && !next.shouldCellUpdate(next.record, prev.record)
    );
  }
  return shallowEqual2(prev, next);
});
var WrappedCell = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  var index = props.index,
    _props$additionalProp = props.additionalProps,
    additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
    colSpan = props.colSpan,
    rowSpan = props.rowSpan;
  var cellColSpan = additionalProps.colSpan,
    cellRowSpan = additionalProps.rowSpan;
  var mergedColSpan = colSpan !== null && colSpan !== void 0 ? colSpan : cellColSpan;
  var mergedRowSpan = rowSpan !== null && rowSpan !== void 0 ? rowSpan : cellRowSpan;
  var _useContextSelector = useContextSelector(HoverContext_default, function(cxt) {
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
  return /* @__PURE__ */ React5.createElement(
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

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/TableContext.js
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var TableContext = /* @__PURE__ */ React6.createContext(null);
var TableContext_default = TableContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/utils/fixUtil.js
function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;
  if (startColumn.fixed === 'left') {
    fixLeft = stickyOffsets.left[colStart];
  } else if (endColumn.fixed === 'right') {
    fixRight = stickyOffsets.right[colEnd];
  }
  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1];
  if (direction === 'rtl') {
    if (fixLeft !== void 0) {
      var prevFixLeft = prevColumn && prevColumn.fixed === 'left';
      firstFixLeft = !prevFixLeft;
    } else if (fixRight !== void 0) {
      var nextFixRight = nextColumn && nextColumn.fixed === 'right';
      lastFixRight = !nextFixRight;
    }
  } else if (fixLeft !== void 0) {
    var nextFixLeft = nextColumn && nextColumn.fixed === 'left';
    lastFixLeft = !nextFixLeft;
  } else if (fixRight !== void 0) {
    var prevFixRight = prevColumn && prevColumn.fixed === 'right';
    firstFixRight = !prevFixRight;
  }
  return {
    fixLeft,
    fixRight,
    lastFixLeft,
    firstFixRight,
    lastFixRight,
    firstFixLeft,
    isSticky: stickyOffsets.isSticky
  };
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Header/HeaderRow.js
function HeaderRow(_ref) {
  var cells = _ref.cells,
    stickyOffsets = _ref.stickyOffsets,
    flattenColumns = _ref.flattenColumns,
    RowComponent = _ref.rowComponent,
    CellComponent = _ref.cellComponent,
    onHeaderRow = _ref.onHeaderRow,
    index = _ref.index;
  var _React$useContext = React7.useContext(TableContext_default),
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
  return /* @__PURE__ */ React7.createElement(
    RowComponent,
    rowProps,
    cells.map(function(cell, cellIndex) {
      var column = cell.column;
      var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
      var additionalProps;
      if (column && column.onHeaderCell) {
        additionalProps = cell.column.onHeaderCell(column);
      }
      return /* @__PURE__ */ React7.createElement(
        Cell_default,
        _extends2(
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

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Header/Header.js
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
  var _React$useContext = React8.useContext(TableContext_default),
    prefixCls = _React$useContext.prefixCls,
    getComponent = _React$useContext.getComponent;
  var rows = React8.useMemo(
    function() {
      return parseHeaderRows(columns);
    },
    [columns]
  );
  var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
  var trComponent = getComponent(['header', 'row'], 'tr');
  var thComponent = getComponent(['header', 'cell'], 'th');
  return /* @__PURE__ */ React8.createElement(
    WrapperComponent,
    {
      className: ''.concat(prefixCls, '-thead')
    },
    rows.map(function(row, rowIndex) {
      var rowNode = /* @__PURE__ */ React8.createElement(HeaderRow_default, {
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

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/index.js
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React16 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/ExpandedRow.js
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/ExpandedRowContext.js
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var ExpandedRowContext = /* @__PURE__ */ React9.createContext(null);
var ExpandedRowContext_default = ExpandedRowContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/ExpandedRow.js
function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
    children = _ref.children,
    Component = _ref.component,
    cellComponent = _ref.cellComponent,
    className = _ref.className,
    expanded = _ref.expanded,
    colSpan = _ref.colSpan,
    isEmpty = _ref.isEmpty;
  var _React$useContext = React10.useContext(TableContext_default),
    scrollbarSize = _React$useContext.scrollbarSize;
  var _React$useContext2 = React10.useContext(ExpandedRowContext_default),
    fixHeader = _React$useContext2.fixHeader,
    fixColumn = _React$useContext2.fixColumn,
    componentWidth = _React$useContext2.componentWidth,
    horizonScroll = _React$useContext2.horizonScroll;
  return React10.useMemo(
    function() {
      var contentNode = children;
      if (isEmpty ? horizonScroll : fixColumn) {
        contentNode = /* @__PURE__ */ React10.createElement(
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
      return /* @__PURE__ */ React10.createElement(
        Component,
        {
          className,
          style: {
            display: expanded ? null : 'none'
          }
        },
        /* @__PURE__ */ React10.createElement(
          Cell_default,
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

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/context/ResizeContext.js
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var ResizeContext = /* @__PURE__ */ React11.createContext(null);
var ResizeContext_default = ResizeContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/BodyRow.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
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
  var _React$useContext = React12.useContext(TableContext_default),
    prefixCls = _React$useContext.prefixCls,
    fixedInfoList = _React$useContext.fixedInfoList;
  var _React$useContext2 = React12.useContext(BodyContext_default),
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
  var _React$useState = React12.useState(false),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    expandRended = _React$useState2[0],
    setExpandRended = _React$useState2[1];
  var expanded = expandedKeys && expandedKeys.has(props.recordKey);
  React12.useEffect(
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
  var onExpandRef = React12.useRef(onTriggerExpand);
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
  var baseRowNode = /* @__PURE__ */ React12.createElement(
    RowComponent,
    _extends3({}, additionalProps, {
      'data-row-key': rowKey,
      className: classNames2(
        className,
        ''.concat(prefixCls, '-row'),
        ''.concat(prefixCls, '-row-level-').concat(indent),
        computeRowClassName,
        additionalProps && additionalProps.className
      ),
      style: _objectSpread2(_objectSpread2({}, style), additionalProps ? additionalProps.style : null),
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
        appendCellNode = /* @__PURE__ */ React12.createElement(
          React12.Fragment,
          null,
          /* @__PURE__ */ React12.createElement('span', {
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
      return /* @__PURE__ */ React12.createElement(
        Cell_default,
        _extends3(
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
    expandRowNode = /* @__PURE__ */ React12.createElement(
      ExpandedRow_default,
      {
        expanded,
        className: classNames2(
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
  return /* @__PURE__ */ React12.createElement(React12.Fragment, null, baseRowNode, expandRowNode);
}
BodyRow.displayName = 'BodyRow';
var BodyRow_default = BodyRow;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/hooks/useFlattenRecords.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React13 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function flatRecord(record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
  var arr = [];
  arr.push({
    record,
    indent,
    index
  });
  var key = getRowKey(record);
  var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);
  if (record && Array.isArray(record[childrenColumnName]) && expanded) {
    for (var i = 0; i < record[childrenColumnName].length; i += 1) {
      var tempArr = flatRecord(
        record[childrenColumnName][i],
        indent + 1,
        childrenColumnName,
        expandedKeys,
        getRowKey,
        i
      );
      arr.push.apply(arr, _toConsumableArray(tempArr));
    }
  }
  return arr;
}
function useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey) {
  var arr = React13.useMemo(
    function() {
      if (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.size) {
        var temp = [];
        for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
          var record = data[i];
          temp.push.apply(
            temp,
            _toConsumableArray(flatRecord(record, 0, childrenColumnName, expandedKeys, getRowKey, i))
          );
        }
        return temp;
      }
      return data === null || data === void 0
        ? void 0
        : data.map(function(item, index) {
            return {
              record: item,
              indent: 0,
              index
            };
          });
    },
    [data, childrenColumnName, expandedKeys, getRowKey]
  );
  return arr;
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/MeasureRow.js
import * as React15 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ResizeObserver2 from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/MeasureCell.js
import * as React14 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
function MeasureCell(_ref) {
  var columnKey = _ref.columnKey,
    onColumnResize = _ref.onColumnResize;
  var cellRef = React14.useRef();
  React14.useEffect(function() {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return /* @__PURE__ */ React14.createElement(
    ResizeObserver,
    {
      data: columnKey
    },
    /* @__PURE__ */ React14.createElement(
      'td',
      {
        ref: cellRef,
        style: {
          padding: 0,
          border: 0,
          height: 0
        }
      },
      /* @__PURE__ */ React14.createElement(
        'div',
        {
          style: {
            height: 0,
            overflow: 'hidden'
          }
        },
        '\xA0'
      )
    )
  );
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/MeasureRow.js
function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls,
    columnsKey = _ref.columnsKey,
    onColumnResize = _ref.onColumnResize;
  return /* @__PURE__ */ React15.createElement(
    'tr',
    {
      'aria-hidden': 'true',
      className: ''.concat(prefixCls, '-measure-row'),
      style: {
        height: 0,
        fontSize: 0
      }
    },
    /* @__PURE__ */ React15.createElement(
      ResizeObserver2.Collection,
      {
        onBatchResize: function onBatchResize(infoList) {
          infoList.forEach(function(_ref2) {
            var columnKey = _ref2.data,
              size = _ref2.size;
            onColumnResize(columnKey, size.offsetWidth);
          });
        }
      },
      columnsKey.map(function(columnKey) {
        return /* @__PURE__ */ React15.createElement(MeasureCell, {
          key: columnKey,
          columnKey,
          onColumnResize
        });
      })
    )
  );
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Body/index.js
function Body(_ref) {
  var data = _ref.data,
    getRowKey = _ref.getRowKey,
    measureColumnWidth = _ref.measureColumnWidth,
    expandedKeys = _ref.expandedKeys,
    onRow = _ref.onRow,
    rowExpandable = _ref.rowExpandable,
    emptyNode = _ref.emptyNode,
    childrenColumnName = _ref.childrenColumnName;
  var _React$useContext = React16.useContext(ResizeContext_default),
    onColumnResize = _React$useContext.onColumnResize;
  var _React$useContext2 = React16.useContext(TableContext_default),
    prefixCls = _React$useContext2.prefixCls,
    getComponent = _React$useContext2.getComponent;
  var _React$useContext3 = React16.useContext(BodyContext_default),
    flattenColumns = _React$useContext3.flattenColumns;
  var flattenData = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey);
  var perfRef = React16.useRef({
    renderWithProps: false
  });
  var _React$useState = React16.useState(-1),
    _React$useState2 = _slicedToArray4(_React$useState, 2),
    startRow = _React$useState2[0],
    setStartRow = _React$useState2[1];
  var _React$useState3 = React16.useState(-1),
    _React$useState4 = _slicedToArray4(_React$useState3, 2),
    endRow = _React$useState4[0],
    setEndRow = _React$useState4[1];
  var onHover = React16.useCallback(function(start, end) {
    setStartRow(start);
    setEndRow(end);
  }, []);
  var bodyNode = React16.useMemo(
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
          return /* @__PURE__ */ React16.createElement(BodyRow_default, {
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
        rows = /* @__PURE__ */ React16.createElement(
          ExpandedRow_default,
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
      return /* @__PURE__ */ React16.createElement(
        WrapperComponent,
        {
          className: ''.concat(prefixCls, '-tbody')
        },
        measureColumnWidth &&
          /* @__PURE__ */ React16.createElement(MeasureRow, {
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
  return /* @__PURE__ */ React16.createElement(
    PerfContext_default.Provider,
    {
      value: perfRef.current
    },
    /* @__PURE__ */ React16.createElement(
      HoverContext_default.Provider,
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
var MemoBody = /* @__PURE__ */ React16.memo(Body);
MemoBody.displayName = 'Body';
var Body_default = MemoBody;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/hooks/useColumns.js
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React17 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning3 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import toArray2 from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/utils/legacyUtil.js
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var _excluded2 = ['expandable'];
var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
function getExpandableProps(props) {
  var expandable = props.expandable,
    legacyExpandableConfig = _objectWithoutProperties2(props, _excluded2);
  var config;
  if ('expandable' in props) {
    config = _objectSpread3(_objectSpread3({}, legacyExpandableConfig), expandable);
  } else {
    if (
      [
        'indentSize',
        'expandedRowKeys',
        'defaultExpandedRowKeys',
        'defaultExpandAllRows',
        'expandedRowRender',
        'expandRowByClick',
        'expandIcon',
        'onExpand',
        'onExpandedRowsChange',
        'expandedRowClassName',
        'expandIconColumnIndex',
        'showExpandColumn'
      ].some(function(prop) {
        return prop in props;
      })
    ) {
      warning2(false, 'expanded related props have been moved into `expandable`.');
    }
    config = legacyExpandableConfig;
  }
  if (config.showExpandColumn === false) {
    config.expandIconColumnIndex = -1;
  }
  return config;
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/constant.js
var EXPAND_COLUMN = {};

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/hooks/useColumns.js
var _excluded3 = ['children'];
var _excluded22 = ['fixed'];
function convertChildrenToColumns(children) {
  return toArray2(children)
    .filter(function(node) {
      return /* @__PURE__ */ React17.isValidElement(node);
    })
    .map(function(_ref) {
      var key = _ref.key,
        props = _ref.props;
      var nodeChildren = props.children,
        restProps = _objectWithoutProperties3(props, _excluded3);
      var column = _objectSpread4(
        {
          key
        },
        restProps
      );
      if (nodeChildren) {
        column.children = convertChildrenToColumns(nodeChildren);
      }
      return column;
    });
}
function flatColumns(columns) {
  return columns.reduce(function(list, column) {
    var fixed = column.fixed;
    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;
    if (subColumns && subColumns.length > 0) {
      return [].concat(
        _toConsumableArray2(list),
        _toConsumableArray2(
          flatColumns(subColumns).map(function(subColum) {
            return _objectSpread4(
              {
                fixed: parsedFixed
              },
              subColum
            );
          })
        )
      );
    }
    return [].concat(_toConsumableArray2(list), [
      _objectSpread4(
        _objectSpread4({}, column),
        {},
        {
          fixed: parsedFixed
        }
      )
    ]);
  }, []);
}
function warningFixed(flattenColumns) {
  var allFixLeft = true;
  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];
    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      warning3(false, 'Index '.concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }
  var allFixRight = true;
  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];
    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      warning3(false, 'Index '.concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}
function revertForRtl(columns) {
  return columns.map(function(column) {
    var fixed = column.fixed,
      restProps = _objectWithoutProperties3(column, _excluded22);
    var parsedFixed = fixed;
    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }
    return _objectSpread4(
      {
        fixed: parsedFixed
      },
      restProps
    );
  });
}
function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls,
    columns = _ref2.columns,
    children = _ref2.children,
    expandable = _ref2.expandable,
    expandedKeys = _ref2.expandedKeys,
    columnTitle = _ref2.columnTitle,
    getRowKey = _ref2.getRowKey,
    onTriggerExpand = _ref2.onTriggerExpand,
    expandIcon = _ref2.expandIcon,
    rowExpandable = _ref2.rowExpandable,
    expandIconColumnIndex = _ref2.expandIconColumnIndex,
    direction = _ref2.direction,
    expandRowByClick = _ref2.expandRowByClick,
    columnWidth = _ref2.columnWidth,
    fixed = _ref2.fixed;
  var baseColumns = React17.useMemo(
    function() {
      return columns || convertChildrenToColumns(children);
    },
    [columns, children]
  );
  var withExpandColumns = React17.useMemo(
    function() {
      if (expandable) {
        var _expandColumn;
        var cloneColumns = baseColumns.slice();
        if (expandIconColumnIndex >= 0) {
          warning3(
            false,
            '`expandIconColumnIndex` is deprecated. Please use `Table.EXPAND_COLUMN` in `columns` instead.'
          );
        }
        if (!cloneColumns.includes(EXPAND_COLUMN)) {
          var expandColIndex = expandIconColumnIndex || 0;
          if (expandColIndex >= 0) {
            cloneColumns.splice(expandColIndex, 0, EXPAND_COLUMN);
          }
        }
        if (
          cloneColumns.filter(function(c) {
            return c === EXPAND_COLUMN;
          }).length > 1
        ) {
          warning3(false, 'There exist more than one `EXPAND_COLUMN` in `columns`.');
        }
        var expandColumnIndex = cloneColumns.indexOf(EXPAND_COLUMN);
        cloneColumns = cloneColumns.filter(function(column, index) {
          return column !== EXPAND_COLUMN || index === expandColumnIndex;
        });
        var prevColumn = baseColumns[expandColumnIndex];
        var fixedColumn;
        if ((fixed === 'left' || fixed) && !expandIconColumnIndex) {
          fixedColumn = 'left';
        } else if ((fixed === 'right' || fixed) && expandIconColumnIndex === baseColumns.length) {
          fixedColumn = 'right';
        } else {
          fixedColumn = prevColumn ? prevColumn.fixed : null;
        }
        var expandColumn =
          ((_expandColumn = {}),
          _defineProperty2(_expandColumn, INTERNAL_COL_DEFINE, {
            className: ''.concat(prefixCls, '-expand-icon-col'),
            columnType: 'EXPAND_COLUMN'
          }),
          _defineProperty2(_expandColumn, 'title', columnTitle),
          _defineProperty2(_expandColumn, 'fixed', fixedColumn),
          _defineProperty2(_expandColumn, 'className', ''.concat(prefixCls, '-row-expand-icon-cell')),
          _defineProperty2(_expandColumn, 'width', columnWidth),
          _defineProperty2(_expandColumn, 'render', function render(_, record, index) {
            var rowKey = getRowKey(record, index);
            var expanded = expandedKeys.has(rowKey);
            var recordExpandable = rowExpandable ? rowExpandable(record) : true;
            var icon = expandIcon({
              prefixCls,
              expanded,
              expandable: recordExpandable,
              record,
              onExpand: onTriggerExpand
            });
            if (expandRowByClick) {
              return /* @__PURE__ */ React17.createElement(
                'span',
                {
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  }
                },
                icon
              );
            }
            return icon;
          }),
          _expandColumn);
        return cloneColumns.map(function(col) {
          return col === EXPAND_COLUMN ? expandColumn : col;
        });
      }
      if (baseColumns.includes(EXPAND_COLUMN)) {
        warning3(false, '`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`.');
      }
      return baseColumns.filter(function(col) {
        return col !== EXPAND_COLUMN;
      });
    },
    [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]
  );
  var mergedColumns = React17.useMemo(
    function() {
      var finalColumns = withExpandColumns;
      if (transformColumns) {
        finalColumns = transformColumns(finalColumns);
      }
      if (!finalColumns.length) {
        finalColumns = [
          {
            render: function render() {
              return null;
            }
          }
        ];
      }
      return finalColumns;
    },
    [transformColumns, withExpandColumns, direction]
  );
  var flattenColumns = React17.useMemo(
    function() {
      if (direction === 'rtl') {
        return revertForRtl(flatColumns(mergedColumns));
      }
      return flatColumns(mergedColumns);
    },
    [mergedColumns, direction]
  );
  if (true) {
    warningFixed(direction === 'rtl' ? flattenColumns.slice().reverse() : flattenColumns);
  }
  return [mergedColumns, flattenColumns];
}
var useColumns_default = useColumns;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/hooks/useFrame.js
import _slicedToArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import {
  useRef as useRef5,
  useState as useState4,
  useEffect as useEffect3
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useLayoutState(defaultState) {
  var stateRef = useRef5(defaultState);
  var _useState = useState4({}),
    _useState2 = _slicedToArray5(_useState, 2),
    forceUpdate = _useState2[1];
  var lastPromiseRef = useRef5(null);
  var updateBatchRef = useRef5([]);
  function setFrameState(updater) {
    updateBatchRef.current.push(updater);
    var promise = Promise.resolve();
    lastPromiseRef.current = promise;
    promise.then(function() {
      if (lastPromiseRef.current === promise) {
        var prevBatch = updateBatchRef.current;
        var prevState = stateRef.current;
        updateBatchRef.current = [];
        prevBatch.forEach(function(batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        lastPromiseRef.current = null;
        if (prevState !== stateRef.current) {
          forceUpdate({});
        }
      }
    });
  }
  useEffect3(function() {
    return function() {
      lastPromiseRef.current = null;
    };
  }, []);
  return [stateRef.current, setFrameState];
}
function useTimeoutLock(defaultState) {
  var frameRef = useRef5(defaultState || null);
  var timeoutRef = useRef5();
  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }
  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function() {
      frameRef.current = null;
      timeoutRef.current = void 0;
    }, 100);
  }
  function getState() {
    return frameRef.current;
  }
  useEffect3(function() {
    return cleanUp;
  }, []);
  return [setState, getState];
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/hooks/useStickyOffsets.js
import { useMemo as useMemo7 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useStickyOffsets(colWidths, columnCount, direction) {
  var stickyOffsets = useMemo7(
    function() {
      var leftOffsets = [];
      var rightOffsets = [];
      var left = 0;
      var right = 0;
      for (var start = 0; start < columnCount; start += 1) {
        if (direction === 'rtl') {
          rightOffsets[start] = right;
          right += colWidths[start] || 0;
          var end = columnCount - start - 1;
          leftOffsets[end] = left;
          left += colWidths[end] || 0;
        } else {
          leftOffsets[start] = left;
          left += colWidths[start] || 0;
          var _end = columnCount - start - 1;
          rightOffsets[_end] = right;
          right += colWidths[_end] || 0;
        }
      }
      return {
        left: leftOffsets,
        right: rightOffsets
      };
    },
    [colWidths, columnCount, direction]
  );
  return stickyOffsets;
}
var useStickyOffsets_default = useStickyOffsets;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/ColGroup.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React18 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var _excluded4 = ['columnType'];
function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
    columns = _ref.columns,
    columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length;
  var mustInsert = false;
  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[INTERNAL_COL_DEFINE];
    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {},
        columnType = _ref2.columnType,
        restAdditionalProps = _objectWithoutProperties4(_ref2, _excluded4);
      cols.unshift(
        /* @__PURE__ */ React18.createElement(
          'col',
          _extends4(
            {
              key: i,
              style: {
                width
              }
            },
            restAdditionalProps
          )
        )
      );
      mustInsert = true;
    }
  }
  return /* @__PURE__ */ React18.createElement('colgroup', null, cols);
}
var ColGroup_default = ColGroup;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Panel/index.js
import * as React19 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function Panel(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return /* @__PURE__ */ React19.createElement(
    'div',
    {
      className
    },
    children
  );
}
var Panel_default = Panel;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/index.js
import * as React23 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/Cell.js
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React21 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/SummaryContext.js
import * as React20 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var SummaryContext = /* @__PURE__ */ React20.createContext({});
var SummaryContext_default = SummaryContext;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/Cell.js
function SummaryCell(_ref) {
  var className = _ref.className,
    index = _ref.index,
    children = _ref.children,
    _ref$colSpan = _ref.colSpan,
    colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
    rowSpan = _ref.rowSpan,
    align = _ref.align;
  var _React$useContext = React21.useContext(TableContext_default),
    prefixCls = _React$useContext.prefixCls,
    direction = _React$useContext.direction;
  var _React$useContext2 = React21.useContext(SummaryContext_default),
    scrollColumnIndex = _React$useContext2.scrollColumnIndex,
    stickyOffsets = _React$useContext2.stickyOffsets,
    flattenColumns = _React$useContext2.flattenColumns;
  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = getCellFixedInfo(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
  return /* @__PURE__ */ React21.createElement(
    Cell_default,
    _extends5(
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

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/Row.js
import _objectWithoutProperties5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React22 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var _excluded5 = ['children'];
function FooterRow(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties5(_ref, _excluded5);
  return /* @__PURE__ */ React22.createElement('tr', props, children);
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/Summary.js
function Summary(_ref) {
  var children = _ref.children;
  return children;
}
Summary.Row = FooterRow;
Summary.Cell = SummaryCell;
var Summary_default = Summary;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Footer/index.js
function Footer(_ref) {
  var children = _ref.children,
    stickyOffsets = _ref.stickyOffsets,
    flattenColumns = _ref.flattenColumns;
  var tableContext = React23.useContext(TableContext_default);
  var prefixCls = tableContext.prefixCls;
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = React23.useMemo(
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
  return /* @__PURE__ */ React23.createElement(
    SummaryContext_default.Provider,
    {
      value: summaryContext
    },
    /* @__PURE__ */ React23.createElement(
      'tfoot',
      {
        className: ''.concat(prefixCls, '-summary')
      },
      children
    )
  );
}
var Footer_default = Footer;
var FooterComponents = Summary_default;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/utils/expandUtil.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React24 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function renderExpandIcon(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    record = _ref.record,
    onExpand = _ref.onExpand,
    expanded = _ref.expanded,
    expandable = _ref.expandable;
  var expandClassName = ''.concat(prefixCls, '-row-expand-icon');
  if (!expandable) {
    return /* @__PURE__ */ React24.createElement('span', {
      className: classNames3(expandClassName, ''.concat(prefixCls, '-row-spaced'))
    });
  }
  var onClick = function onClick2(event) {
    onExpand(record, event);
    event.stopPropagation();
  };
  return /* @__PURE__ */ React24.createElement('span', {
    className: classNames3(
      expandClassName,
      ((_classNames = {}),
      _defineProperty3(_classNames, ''.concat(prefixCls, '-row-expanded'), expanded),
      _defineProperty3(_classNames, ''.concat(prefixCls, '-row-collapsed'), !expanded),
      _classNames)
    ),
    onClick
  });
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];
  function dig(list) {
    (list || []).forEach(function(item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }
  dig(data);
  return keys;
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/stickyScrollBar.js
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React25 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import addEventListener from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/addEventListener.development.js';
import getScrollBarSize from '/cdn/v99/rc-util@5.24.6/es2022/es/getScrollBarSize.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { getOffset } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/css.development.js';
var StickyScrollBar = function StickyScrollBar2(_ref, ref) {
  var _scrollBodyRef$curren, _scrollBodyRef$curren2;
  var scrollBodyRef = _ref.scrollBodyRef,
    onScroll = _ref.onScroll,
    offsetScroll = _ref.offsetScroll,
    container = _ref.container;
  var _React$useContext = React25.useContext(TableContext_default),
    prefixCls = _React$useContext.prefixCls;
  var bodyScrollWidth =
    ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0
      ? void 0
      : _scrollBodyRef$curren.scrollWidth) || 0;
  var bodyWidth =
    ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0
      ? void 0
      : _scrollBodyRef$curren2.clientWidth) || 0;
  var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
  var scrollBarRef = React25.useRef();
  var _useLayoutState = useLayoutState({
      scrollLeft: 0,
      isHiddenScrollBar: false
    }),
    _useLayoutState2 = _slicedToArray6(_useLayoutState, 2),
    scrollState = _useLayoutState2[0],
    setScrollState = _useLayoutState2[1];
  var refState = React25.useRef({
    delta: 0,
    x: 0
  });
  var _React$useState = React25.useState(false),
    _React$useState2 = _slicedToArray6(_React$useState, 2),
    isActive = _React$useState2[0],
    setActive = _React$useState2[1];
  var onMouseUp = function onMouseUp2() {
    setActive(false);
  };
  var onMouseDown = function onMouseDown2(event) {
    event.persist();
    refState.current.delta = event.pageX - scrollState.scrollLeft;
    refState.current.x = 0;
    setActive(true);
    event.preventDefault();
  };
  var onMouseMove = function onMouseMove2(event) {
    var _window;
    var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
      buttons = _ref2.buttons;
    if (!isActive || buttons === 0) {
      if (isActive) {
        setActive(false);
      }
      return;
    }
    var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;
    if (left <= 0) {
      left = 0;
    }
    if (left + scrollBarWidth >= bodyWidth) {
      left = bodyWidth - scrollBarWidth;
    }
    onScroll({
      scrollLeft: (left / bodyWidth) * (bodyScrollWidth + 2)
    });
    refState.current.x = event.pageX;
  };
  var onContainerScroll = function onContainerScroll2() {
    if (!scrollBodyRef.current) {
      return;
    }
    var tableOffsetTop = getOffset(scrollBodyRef.current).top;
    var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
    var currentClientOffset =
      container === window
        ? document.documentElement.scrollTop + window.innerHeight
        : getOffset(container).top + container.clientHeight;
    if (
      tableBottomOffset - getScrollBarSize() <= currentClientOffset ||
      tableOffsetTop >= currentClientOffset - offsetScroll
    ) {
      setScrollState(function(state) {
        return _objectSpread5(
          _objectSpread5({}, state),
          {},
          {
            isHiddenScrollBar: true
          }
        );
      });
    } else {
      setScrollState(function(state) {
        return _objectSpread5(
          _objectSpread5({}, state),
          {},
          {
            isHiddenScrollBar: false
          }
        );
      });
    }
  };
  var setScrollLeft = function setScrollLeft2(left) {
    setScrollState(function(state) {
      return _objectSpread5(
        _objectSpread5({}, state),
        {},
        {
          scrollLeft: (left / bodyScrollWidth) * bodyWidth || 0
        }
      );
    });
  };
  React25.useImperativeHandle(ref, function() {
    return {
      setScrollLeft
    };
  });
  React25.useEffect(
    function() {
      var onMouseUpListener = addEventListener(document.body, 'mouseup', onMouseUp, false);
      var onMouseMoveListener = addEventListener(document.body, 'mousemove', onMouseMove, false);
      onContainerScroll();
      return function() {
        onMouseUpListener.remove();
        onMouseMoveListener.remove();
      };
    },
    [scrollBarWidth, isActive]
  );
  React25.useEffect(
    function() {
      var onScrollListener = addEventListener(container, 'scroll', onContainerScroll, false);
      var onResizeListener = addEventListener(window, 'resize', onContainerScroll, false);
      return function() {
        onScrollListener.remove();
        onResizeListener.remove();
      };
    },
    [container]
  );
  React25.useEffect(
    function() {
      if (!scrollState.isHiddenScrollBar) {
        setScrollState(function(state) {
          var bodyNode = scrollBodyRef.current;
          if (!bodyNode) {
            return state;
          }
          return _objectSpread5(
            _objectSpread5({}, state),
            {},
            {
              scrollLeft: (bodyNode.scrollLeft / bodyNode.scrollWidth) * bodyNode.clientWidth
            }
          );
        });
      }
    },
    [scrollState.isHiddenScrollBar]
  );
  if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
    return null;
  }
  return /* @__PURE__ */ React25.createElement(
    'div',
    {
      style: {
        height: getScrollBarSize(),
        width: bodyWidth,
        bottom: offsetScroll
      },
      className: ''.concat(prefixCls, '-sticky-scroll')
    },
    /* @__PURE__ */ React25.createElement('div', {
      onMouseDown,
      ref: scrollBarRef,
      className: classNames4(
        ''.concat(prefixCls, '-sticky-scroll-bar'),
        _defineProperty4({}, ''.concat(prefixCls, '-sticky-scroll-bar-active'), isActive)
      ),
      style: {
        width: ''.concat(scrollBarWidth, 'px'),
        transform: 'translate3d('.concat(scrollState.scrollLeft, 'px, 0, 0)')
      }
    })
  );
};
var stickyScrollBar_default = /* @__PURE__ */ React25.forwardRef(StickyScrollBar);

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/hooks/useSticky.js
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React26 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var defaultContainer = canUseDom() ? window : null;
function useSticky(sticky, prefixCls) {
  var _ref = _typeof2(sticky) === 'object' ? sticky : {},
    _ref$offsetHeader = _ref.offsetHeader,
    offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader,
    _ref$offsetSummary = _ref.offsetSummary,
    offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary,
    _ref$offsetScroll = _ref.offsetScroll,
    offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll,
    _ref$getContainer = _ref.getContainer,
    getContainer =
      _ref$getContainer === void 0
        ? function() {
            return defaultContainer;
          }
        : _ref$getContainer;
  var container = getContainer() || defaultContainer;
  return React26.useMemo(
    function() {
      var isSticky = !!sticky;
      return {
        isSticky,
        stickyClassName: isSticky ? ''.concat(prefixCls, '-sticky-holder') : '',
        offsetHeader,
        offsetSummary,
        offsetScroll,
        container
      };
    },
    [offsetScroll, offsetHeader, offsetSummary, prefixCls, container]
  );
}

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/FixedHolder/index.js
import _defineProperty5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectWithoutProperties6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React27 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useMemo as useMemo11 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames5 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { fillRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
var _excluded6 = [
  'className',
  'noData',
  'columns',
  'flattenColumns',
  'colWidths',
  'columCount',
  'stickyOffsets',
  'direction',
  'fixHeader',
  'stickyTopOffset',
  'stickyBottomOffset',
  'stickyClassName',
  'onScroll',
  'maxContentScroll',
  'children'
];
function useColumnWidth(colWidths, columCount) {
  return useMemo11(
    function() {
      var cloneColumns = [];
      for (var i = 0; i < columCount; i += 1) {
        var val = colWidths[i];
        if (val !== void 0) {
          cloneColumns[i] = val;
        } else {
          return null;
        }
      }
      return cloneColumns;
    },
    [colWidths.join('_'), columCount]
  );
}
var FixedHolder = /* @__PURE__ */ React27.forwardRef(function(_ref, ref) {
  var className = _ref.className,
    noData = _ref.noData,
    columns = _ref.columns,
    flattenColumns = _ref.flattenColumns,
    colWidths = _ref.colWidths,
    columCount = _ref.columCount,
    stickyOffsets = _ref.stickyOffsets,
    direction = _ref.direction,
    fixHeader = _ref.fixHeader,
    stickyTopOffset = _ref.stickyTopOffset,
    stickyBottomOffset = _ref.stickyBottomOffset,
    stickyClassName = _ref.stickyClassName,
    onScroll = _ref.onScroll,
    maxContentScroll = _ref.maxContentScroll,
    children = _ref.children,
    props = _objectWithoutProperties6(_ref, _excluded6);
  var _React$useContext = React27.useContext(TableContext_default),
    prefixCls = _React$useContext.prefixCls,
    scrollbarSize = _React$useContext.scrollbarSize,
    isSticky = _React$useContext.isSticky;
  var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize;
  var scrollRef = React27.useRef(null);
  var setScrollRef = React27.useCallback(function(element) {
    fillRef(ref, element);
    fillRef(scrollRef, element);
  }, []);
  React27.useEffect(function() {
    var _scrollRef$current;
    function onWheel(e) {
      var currentTarget = e.currentTarget,
        deltaX = e.deltaX;
      if (deltaX) {
        onScroll({
          currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    }
    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0
      ? void 0
      : _scrollRef$current.addEventListener('wheel', onWheel);
    return function() {
      var _scrollRef$current2;
      (_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0
        ? void 0
        : _scrollRef$current2.removeEventListener('wheel', onWheel);
    };
  }, []);
  var allFlattenColumnsWithWidth = React27.useMemo(
    function() {
      return flattenColumns.every(function(column) {
        return column.width >= 0;
      });
    },
    [flattenColumns]
  );
  var lastColumn = flattenColumns[flattenColumns.length - 1];
  var ScrollBarColumn = {
    fixed: lastColumn ? lastColumn.fixed : null,
    scrollbar: true,
    onHeaderCell: function onHeaderCell() {
      return {
        className: ''.concat(prefixCls, '-cell-scrollbar')
      };
    }
  };
  var columnsWithScrollbar = useMemo11(
    function() {
      return combinationScrollBarSize ? [].concat(_toConsumableArray3(columns), [ScrollBarColumn]) : columns;
    },
    [combinationScrollBarSize, columns]
  );
  var flattenColumnsWithScrollbar = useMemo11(
    function() {
      return combinationScrollBarSize
        ? [].concat(_toConsumableArray3(flattenColumns), [ScrollBarColumn])
        : flattenColumns;
    },
    [combinationScrollBarSize, flattenColumns]
  );
  var headerStickyOffsets = useMemo11(
    function() {
      var right = stickyOffsets.right,
        left = stickyOffsets.left;
      return _objectSpread6(
        _objectSpread6({}, stickyOffsets),
        {},
        {
          left:
            direction === 'rtl'
              ? [].concat(
                  _toConsumableArray3(
                    left.map(function(width) {
                      return width + combinationScrollBarSize;
                    })
                  ),
                  [0]
                )
              : left,
          right:
            direction === 'rtl'
              ? right
              : [].concat(
                  _toConsumableArray3(
                    right.map(function(width) {
                      return width + combinationScrollBarSize;
                    })
                  ),
                  [0]
                ),
          isSticky
        }
      );
    },
    [combinationScrollBarSize, stickyOffsets, isSticky]
  );
  var mergedColumnWidth = useColumnWidth(colWidths, columCount);
  return /* @__PURE__ */ React27.createElement(
    'div',
    {
      style: _objectSpread6(
        {
          overflow: 'hidden'
        },
        isSticky
          ? {
              top: stickyTopOffset,
              bottom: stickyBottomOffset
            }
          : {}
      ),
      ref: setScrollRef,
      className: classNames5(className, _defineProperty5({}, stickyClassName, !!stickyClassName))
    },
    /* @__PURE__ */ React27.createElement(
      'table',
      {
        style: {
          tableLayout: 'fixed',
          visibility: noData || mergedColumnWidth ? null : 'hidden'
        }
      },
      (!noData || !maxContentScroll || allFlattenColumnsWithWidth) &&
        /* @__PURE__ */ React27.createElement(ColGroup_default, {
          colWidths: mergedColumnWidth
            ? [].concat(_toConsumableArray3(mergedColumnWidth), [combinationScrollBarSize])
            : [],
          columCount: columCount + 1,
          columns: flattenColumnsWithScrollbar
        }),
      children(
        _objectSpread6(
          _objectSpread6({}, props),
          {},
          {
            stickyOffsets: headerStickyOffsets,
            columns: columnsWithScrollbar,
            flattenColumns: flattenColumnsWithScrollbar
          }
        )
      )
    )
  );
});
FixedHolder.displayName = 'FixedHolder';
var FixedHolder_default = FixedHolder;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/Table.js
var EMPTY_DATA = [];
var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';
var MemoTableContent = /* @__PURE__ */ React28.memo(
  function(_ref) {
    var children = _ref.children;
    return children;
  },
  function(prev, next) {
    if (!shallowEqual3(prev.props, next.props)) {
      return false;
    }
    return prev.pingLeft !== next.pingLeft || prev.pingRight !== next.pingRight;
  }
);
function Table(props) {
  var _classNames;
  var prefixCls = props.prefixCls,
    className = props.className,
    rowClassName = props.rowClassName,
    style = props.style,
    data = props.data,
    rowKey = props.rowKey,
    scroll = props.scroll,
    tableLayout = props.tableLayout,
    direction = props.direction,
    title = props.title,
    footer = props.footer,
    summary = props.summary,
    id = props.id,
    showHeader = props.showHeader,
    components = props.components,
    emptyText2 = props.emptyText,
    onRow = props.onRow,
    onHeaderRow = props.onHeaderRow,
    internalHooks = props.internalHooks,
    transformColumns = props.transformColumns,
    internalRefs = props.internalRefs,
    sticky = props.sticky;
  var mergedData = data || EMPTY_DATA;
  var hasData = !!mergedData.length;
  if (true) {
    ['onRowClick', 'onRowDoubleClick', 'onRowContextMenu', 'onRowMouseEnter', 'onRowMouseLeave'].forEach(function(
      name
    ) {
      warning4(props[name] === void 0, '`'.concat(name, '` is removed, please use `onRow` instead.'));
    });
    warning4(!('getBodyWrapper' in props), '`getBodyWrapper` is deprecated, please use custom `components` instead.');
  }
  var getComponent = React28.useCallback(
    function(path, defaultComponent) {
      return getPathValue(components || {}, path) || defaultComponent;
    },
    [components]
  );
  var getRowKey = React28.useMemo(
    function() {
      if (typeof rowKey === 'function') {
        return rowKey;
      }
      return function(record) {
        var key = record && record[rowKey];
        if (true) {
          warning4(
            key !== void 0,
            'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key.'
          );
        }
        return key;
      };
    },
    [rowKey]
  );
  var expandableConfig = getExpandableProps(props);
  var expandIcon = expandableConfig.expandIcon,
    expandedRowKeys = expandableConfig.expandedRowKeys,
    defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys,
    defaultExpandAllRows = expandableConfig.defaultExpandAllRows,
    expandedRowRender = expandableConfig.expandedRowRender,
    columnTitle = expandableConfig.columnTitle,
    onExpand = expandableConfig.onExpand,
    onExpandedRowsChange = expandableConfig.onExpandedRowsChange,
    expandRowByClick = expandableConfig.expandRowByClick,
    rowExpandable = expandableConfig.rowExpandable,
    expandIconColumnIndex = expandableConfig.expandIconColumnIndex,
    expandedRowClassName = expandableConfig.expandedRowClassName,
    childrenColumnName = expandableConfig.childrenColumnName,
    indentSize = expandableConfig.indentSize;
  var mergedExpandIcon = expandIcon || renderExpandIcon;
  var mergedChildrenColumnName = childrenColumnName || 'children';
  var expandableType = React28.useMemo(
    function() {
      if (expandedRowRender) {
        return 'row';
      }
      if (
        (props.expandable && internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__) ||
        mergedData.some(function(record) {
          return record && _typeof3(record) === 'object' && record[mergedChildrenColumnName];
        })
      ) {
        return 'nest';
      }
      return false;
    },
    [!!expandedRowRender, mergedData]
  );
  var _React$useState = React28.useState(function() {
      if (defaultExpandedRowKeys) {
        return defaultExpandedRowKeys;
      }
      if (defaultExpandAllRows) {
        return findAllChildrenKeys(mergedData, getRowKey, mergedChildrenColumnName);
      }
      return [];
    }),
    _React$useState2 = _slicedToArray7(_React$useState, 2),
    innerExpandedKeys = _React$useState2[0],
    setInnerExpandedKeys = _React$useState2[1];
  var mergedExpandedKeys = React28.useMemo(
    function() {
      return new Set(expandedRowKeys || innerExpandedKeys || []);
    },
    [expandedRowKeys, innerExpandedKeys]
  );
  var onTriggerExpand = React28.useCallback(
    function(record) {
      var key = getRowKey(record, mergedData.indexOf(record));
      var newExpandedKeys;
      var hasKey = mergedExpandedKeys.has(key);
      if (hasKey) {
        mergedExpandedKeys.delete(key);
        newExpandedKeys = _toConsumableArray4(mergedExpandedKeys);
      } else {
        newExpandedKeys = [].concat(_toConsumableArray4(mergedExpandedKeys), [key]);
      }
      setInnerExpandedKeys(newExpandedKeys);
      if (onExpand) {
        onExpand(!hasKey, record);
      }
      if (onExpandedRowsChange) {
        onExpandedRowsChange(newExpandedKeys);
      }
    },
    [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]
  );
  if (
    expandedRowRender &&
    mergedData.some(function(record) {
      return Array.isArray(record === null || record === void 0 ? void 0 : record[mergedChildrenColumnName]);
    })
  ) {
    warning4(false, '`expandedRowRender` should not use with nested Table');
  }
  var _React$useState3 = React28.useState(0),
    _React$useState4 = _slicedToArray7(_React$useState3, 2),
    componentWidth = _React$useState4[0],
    setComponentWidth = _React$useState4[1];
  var _useColumns = useColumns_default(
      _objectSpread7(
        _objectSpread7(_objectSpread7({}, props), expandableConfig),
        {},
        {
          expandable: !!expandedRowRender,
          columnTitle,
          expandedKeys: mergedExpandedKeys,
          getRowKey,
          onTriggerExpand,
          expandIcon: mergedExpandIcon,
          expandIconColumnIndex,
          direction
        }
      ),
      internalHooks === INTERNAL_HOOKS ? transformColumns : null
    ),
    _useColumns2 = _slicedToArray7(_useColumns, 2),
    columns = _useColumns2[0],
    flattenColumns = _useColumns2[1];
  var columnContext = React28.useMemo(
    function() {
      return {
        columns,
        flattenColumns
      };
    },
    [columns, flattenColumns]
  );
  var fullTableRef = React28.useRef();
  var scrollHeaderRef = React28.useRef();
  var scrollBodyRef = React28.useRef();
  var scrollBodyContainerRef = React28.useRef();
  var scrollSummaryRef = React28.useRef();
  var _React$useState5 = React28.useState(false),
    _React$useState6 = _slicedToArray7(_React$useState5, 2),
    pingedLeft = _React$useState6[0],
    setPingedLeft = _React$useState6[1];
  var _React$useState7 = React28.useState(false),
    _React$useState8 = _slicedToArray7(_React$useState7, 2),
    pingedRight = _React$useState8[0],
    setPingedRight = _React$useState8[1];
  var _useLayoutState = useLayoutState(/* @__PURE__ */ new Map()),
    _useLayoutState2 = _slicedToArray7(_useLayoutState, 2),
    colsWidths = _useLayoutState2[0],
    updateColsWidths = _useLayoutState2[1];
  var colsKeys = getColumnsKey(flattenColumns);
  var pureColWidths = colsKeys.map(function(columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = React28.useMemo(
    function() {
      return pureColWidths;
    },
    [pureColWidths.join('_')]
  );
  var stickyOffsets = useStickyOffsets_default(colWidths, flattenColumns.length, direction);
  var fixHeader = scroll && validateValue(scroll.y);
  var horizonScroll = (scroll && validateValue(scroll.x)) || Boolean(expandableConfig.fixed);
  var fixColumn =
    horizonScroll &&
    flattenColumns.some(function(_ref2) {
      var fixed = _ref2.fixed;
      return fixed;
    });
  var stickyRef = React28.useRef();
  var _useSticky = useSticky(sticky, prefixCls),
    isSticky = _useSticky.isSticky,
    offsetHeader = _useSticky.offsetHeader,
    offsetSummary = _useSticky.offsetSummary,
    offsetScroll = _useSticky.offsetScroll,
    stickyClassName = _useSticky.stickyClassName,
    container = _useSticky.container;
  var summaryNode = summary === null || summary === void 0 ? void 0 : summary(mergedData);
  var fixFooter =
    (fixHeader || isSticky) &&
    /* @__PURE__ */ React28.isValidElement(summaryNode) &&
    summaryNode.type === Summary_default &&
    summaryNode.props.fixed;
  var scrollXStyle;
  var scrollYStyle;
  var scrollTableStyle;
  if (fixHeader) {
    scrollYStyle = {
      overflowY: 'scroll',
      maxHeight: scroll.y
    };
  }
  if (horizonScroll) {
    scrollXStyle = {
      overflowX: 'auto'
    };
    if (!fixHeader) {
      scrollYStyle = {
        overflowY: 'hidden'
      };
    }
    scrollTableStyle = {
      width:
        (scroll === null || scroll === void 0 ? void 0 : scroll.x) === true
          ? 'auto'
          : scroll === null || scroll === void 0
          ? void 0
          : scroll.x,
      minWidth: '100%'
    };
  }
  var onColumnResize = React28.useCallback(function(columnKey, width) {
    if (isVisible(fullTableRef.current)) {
      updateColsWidths(function(widths) {
        if (widths.get(columnKey) !== width) {
          var newWidths = new Map(widths);
          newWidths.set(columnKey, width);
          return newWidths;
        }
        return widths;
      });
    }
  }, []);
  var _useTimeoutLock = useTimeoutLock(null),
    _useTimeoutLock2 = _slicedToArray7(_useTimeoutLock, 2),
    setScrollTarget = _useTimeoutLock2[0],
    getScrollTarget = _useTimeoutLock2[1];
  function forceScroll(scrollLeft, target) {
    if (!target) {
      return;
    }
    if (typeof target === 'function') {
      target(scrollLeft);
    } else if (target.scrollLeft !== scrollLeft) {
      target.scrollLeft = scrollLeft;
    }
  }
  var onScroll = function onScroll2(_ref3) {
    var currentTarget = _ref3.currentTarget,
      scrollLeft = _ref3.scrollLeft;
    var isRTL = direction === 'rtl';
    var mergedScrollLeft = typeof scrollLeft === 'number' ? scrollLeft : currentTarget.scrollLeft;
    var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;
    if (!getScrollTarget() || getScrollTarget() === compareTarget) {
      var _stickyRef$current;
      setScrollTarget(compareTarget);
      forceScroll(mergedScrollLeft, scrollHeaderRef.current);
      forceScroll(mergedScrollLeft, scrollBodyRef.current);
      forceScroll(mergedScrollLeft, scrollSummaryRef.current);
      forceScroll(
        mergedScrollLeft,
        (_stickyRef$current = stickyRef.current) === null || _stickyRef$current === void 0
          ? void 0
          : _stickyRef$current.setScrollLeft
      );
    }
    if (currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
        clientWidth = currentTarget.clientWidth;
      if (scrollWidth === clientWidth) {
        setPingedLeft(false);
        setPingedRight(false);
        return;
      }
      if (isRTL) {
        setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
        setPingedRight(-mergedScrollLeft > 0);
      } else {
        setPingedLeft(mergedScrollLeft > 0);
        setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
      }
    }
  };
  var triggerOnScroll = function triggerOnScroll2() {
    if (horizonScroll && scrollBodyRef.current) {
      onScroll({
        currentTarget: scrollBodyRef.current
      });
    } else {
      setPingedLeft(false);
      setPingedRight(false);
    }
  };
  var onFullTableResize = function onFullTableResize2(_ref4) {
    var width = _ref4.width;
    if (width !== componentWidth) {
      triggerOnScroll();
      setComponentWidth(fullTableRef.current ? fullTableRef.current.offsetWidth : width);
    }
  };
  var mounted = React28.useRef(false);
  React28.useEffect(
    function() {
      if (mounted.current) {
        triggerOnScroll();
      }
    },
    [horizonScroll, data, columns.length]
  );
  React28.useEffect(function() {
    mounted.current = true;
  }, []);
  var _React$useState9 = React28.useState(0),
    _React$useState10 = _slicedToArray7(_React$useState9, 2),
    scrollbarSize = _React$useState10[0],
    setScrollbarSize = _React$useState10[1];
  var _React$useState11 = React28.useState(true),
    _React$useState12 = _slicedToArray7(_React$useState11, 2),
    supportSticky = _React$useState12[0],
    setSupportSticky = _React$useState12[1];
  React28.useEffect(function() {
    if (scrollBodyRef.current instanceof Element) {
      setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.current).width);
    } else {
      setScrollbarSize(getTargetScrollBarSize(scrollBodyContainerRef.current).width);
    }
    setSupportSticky(isStyleSupport('position', 'sticky'));
  }, []);
  React28.useEffect(function() {
    if (internalHooks === INTERNAL_HOOKS && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  });
  var TableComponent = getComponent(['table'], 'table');
  var mergedTableLayout = React28.useMemo(
    function() {
      if (tableLayout) {
        return tableLayout;
      }
      if (fixColumn) {
        return (scroll === null || scroll === void 0 ? void 0 : scroll.x) === 'max-content' ? 'auto' : 'fixed';
      }
      if (
        fixHeader ||
        isSticky ||
        flattenColumns.some(function(_ref5) {
          var ellipsis = _ref5.ellipsis;
          return ellipsis;
        })
      ) {
        return 'fixed';
      }
      return 'auto';
    },
    [fixHeader, fixColumn, flattenColumns, tableLayout, isSticky]
  );
  var groupTableNode;
  var headerProps = {
    colWidths,
    columCount: flattenColumns.length,
    stickyOffsets,
    onHeaderRow,
    fixHeader,
    scroll
  };
  var emptyNode = React28.useMemo(
    function() {
      if (hasData) {
        return null;
      }
      if (typeof emptyText2 === 'function') {
        return emptyText2();
      }
      return emptyText2;
    },
    [hasData, emptyText2]
  );
  var bodyTable = /* @__PURE__ */ React28.createElement(Body_default, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll || isSticky,
    expandedKeys: mergedExpandedKeys,
    rowExpandable,
    getRowKey,
    onRow,
    emptyNode,
    childrenColumnName: mergedChildrenColumnName
  });
  var bodyColGroup = /* @__PURE__ */ React28.createElement(ColGroup_default, {
    colWidths: flattenColumns.map(function(_ref6) {
      var width = _ref6.width;
      return width;
    }),
    columns: flattenColumns
  });
  var customizeScrollBody = getComponent(['body']);
  if (typeof customizeScrollBody === 'function' && hasData && !fixHeader) {
    warning4(false, '`components.body` with render props is only work on `scroll.y`.');
  }
  if (fixHeader || isSticky) {
    var bodyContent;
    if (typeof customizeScrollBody === 'function') {
      bodyContent = customizeScrollBody(mergedData, {
        scrollbarSize,
        ref: scrollBodyRef,
        onScroll
      });
      headerProps.colWidths = flattenColumns.map(function(_ref7, index) {
        var width = _ref7.width;
        var colWidth = index === columns.length - 1 ? width - scrollbarSize : width;
        if (typeof colWidth === 'number' && !Number.isNaN(colWidth)) {
          return colWidth;
        }
        warning4(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
        return 0;
      });
    } else {
      bodyContent = /* @__PURE__ */ React28.createElement(
        'div',
        {
          style: _objectSpread7(_objectSpread7({}, scrollXStyle), scrollYStyle),
          onScroll,
          ref: scrollBodyRef,
          className: classNames6(''.concat(prefixCls, '-body'))
        },
        /* @__PURE__ */ React28.createElement(
          TableComponent,
          {
            style: _objectSpread7(
              _objectSpread7({}, scrollTableStyle),
              {},
              {
                tableLayout: mergedTableLayout
              }
            )
          },
          bodyColGroup,
          bodyTable,
          !fixFooter &&
            summaryNode &&
            /* @__PURE__ */ React28.createElement(
              Footer_default,
              {
                stickyOffsets,
                flattenColumns
              },
              summaryNode
            )
        )
      );
    }
    var fixedHolderProps = _objectSpread7(
      _objectSpread7(
        _objectSpread7(
          {
            noData: !mergedData.length,
            maxContentScroll: horizonScroll && scroll.x === 'max-content'
          },
          headerProps
        ),
        columnContext
      ),
      {},
      {
        direction,
        stickyClassName,
        onScroll
      }
    );
    groupTableNode = /* @__PURE__ */ React28.createElement(
      React28.Fragment,
      null,
      showHeader !== false &&
        /* @__PURE__ */ React28.createElement(
          FixedHolder_default,
          _extends6({}, fixedHolderProps, {
            stickyTopOffset: offsetHeader,
            className: ''.concat(prefixCls, '-header'),
            ref: scrollHeaderRef
          }),
          function(fixedHolderPassProps) {
            return /* @__PURE__ */ React28.createElement(
              React28.Fragment,
              null,
              /* @__PURE__ */ React28.createElement(Header_default, fixedHolderPassProps),
              fixFooter === 'top' &&
                /* @__PURE__ */ React28.createElement(Footer_default, fixedHolderPassProps, summaryNode)
            );
          }
        ),
      bodyContent,
      fixFooter &&
        fixFooter !== 'top' &&
        /* @__PURE__ */ React28.createElement(
          FixedHolder_default,
          _extends6({}, fixedHolderProps, {
            stickyBottomOffset: offsetSummary,
            className: ''.concat(prefixCls, '-summary'),
            ref: scrollSummaryRef
          }),
          function(fixedHolderPassProps) {
            return /* @__PURE__ */ React28.createElement(Footer_default, fixedHolderPassProps, summaryNode);
          }
        ),
      isSticky &&
        /* @__PURE__ */ React28.createElement(stickyScrollBar_default, {
          ref: stickyRef,
          offsetScroll,
          scrollBodyRef,
          onScroll,
          container
        })
    );
  } else {
    groupTableNode = /* @__PURE__ */ React28.createElement(
      'div',
      {
        style: _objectSpread7(_objectSpread7({}, scrollXStyle), scrollYStyle),
        className: classNames6(''.concat(prefixCls, '-content')),
        onScroll,
        ref: scrollBodyRef
      },
      /* @__PURE__ */ React28.createElement(
        TableComponent,
        {
          style: _objectSpread7(
            _objectSpread7({}, scrollTableStyle),
            {},
            {
              tableLayout: mergedTableLayout
            }
          )
        },
        bodyColGroup,
        showHeader !== false &&
          /* @__PURE__ */ React28.createElement(Header_default, _extends6({}, headerProps, columnContext)),
        bodyTable,
        summaryNode &&
          /* @__PURE__ */ React28.createElement(
            Footer_default,
            {
              stickyOffsets,
              flattenColumns
            },
            summaryNode
          )
      )
    );
  }
  var ariaProps = pickAttrs(props, {
    aria: true,
    data: true
  });
  var fullTable = /* @__PURE__ */ React28.createElement(
    'div',
    _extends6(
      {
        className: classNames6(
          prefixCls,
          className,
          ((_classNames = {}),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-rtl'), direction === 'rtl'),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-ping-left'), pingedLeft),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-ping-right'), pingedRight),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-layout-fixed'), tableLayout === 'fixed'),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-fixed-header'), fixHeader),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-fixed-column'), fixColumn),
          _defineProperty6(_classNames, ''.concat(prefixCls, '-scroll-horizontal'), horizonScroll),
          _defineProperty6(
            _classNames,
            ''.concat(prefixCls, '-has-fix-left'),
            flattenColumns[0] && flattenColumns[0].fixed
          ),
          _defineProperty6(
            _classNames,
            ''.concat(prefixCls, '-has-fix-right'),
            flattenColumns[flattenColumns.length - 1] && flattenColumns[flattenColumns.length - 1].fixed === 'right'
          ),
          _classNames)
        ),
        style,
        id,
        ref: fullTableRef
      },
      ariaProps
    ),
    /* @__PURE__ */ React28.createElement(
      MemoTableContent,
      {
        pingLeft: pingedLeft,
        pingRight: pingedRight,
        props: _objectSpread7(
          _objectSpread7({}, props),
          {},
          {
            stickyOffsets,
            mergedExpandedKeys
          }
        )
      },
      title &&
        /* @__PURE__ */ React28.createElement(
          Panel_default,
          {
            className: ''.concat(prefixCls, '-title')
          },
          title(mergedData)
        ),
      /* @__PURE__ */ React28.createElement(
        'div',
        {
          ref: scrollBodyContainerRef,
          className: ''.concat(prefixCls, '-container')
        },
        groupTableNode
      ),
      footer &&
        /* @__PURE__ */ React28.createElement(
          Panel_default,
          {
            className: ''.concat(prefixCls, '-footer')
          },
          footer(mergedData)
        )
    )
  );
  if (horizonScroll) {
    fullTable = /* @__PURE__ */ React28.createElement(
      ResizeObserver3,
      {
        onResize: onFullTableResize
      },
      fullTable
    );
  }
  var TableContextValue = React28.useMemo(
    function() {
      return {
        prefixCls,
        getComponent,
        scrollbarSize,
        direction,
        fixedInfoList: flattenColumns.map(function(_, colIndex) {
          return getCellFixedInfo(colIndex, colIndex, flattenColumns, stickyOffsets, direction);
        }),
        isSticky
      };
    },
    [prefixCls, getComponent, scrollbarSize, direction, flattenColumns, stickyOffsets, isSticky]
  );
  var BodyContextValue = React28.useMemo(
    function() {
      return _objectSpread7(
        _objectSpread7({}, columnContext),
        {},
        {
          tableLayout: mergedTableLayout,
          rowClassName,
          expandedRowClassName,
          expandIcon: mergedExpandIcon,
          expandableType,
          expandRowByClick,
          expandedRowRender,
          onTriggerExpand,
          expandIconColumnIndex,
          indentSize,
          allColumnsFixedLeft: columnContext.flattenColumns.every(function(col) {
            return col.fixed === 'left';
          })
        }
      );
    },
    [
      columnContext,
      mergedTableLayout,
      rowClassName,
      expandedRowClassName,
      mergedExpandIcon,
      expandableType,
      expandRowByClick,
      expandedRowRender,
      onTriggerExpand,
      expandIconColumnIndex,
      indentSize
    ]
  );
  var ExpandedRowContextValue = React28.useMemo(
    function() {
      return {
        componentWidth,
        fixHeader,
        fixColumn,
        horizonScroll
      };
    },
    [componentWidth, fixHeader, fixColumn, horizonScroll]
  );
  var ResizeContextValue = React28.useMemo(
    function() {
      return {
        onColumnResize
      };
    },
    [onColumnResize]
  );
  return /* @__PURE__ */ React28.createElement(
    StickyContext_default.Provider,
    {
      value: supportSticky
    },
    /* @__PURE__ */ React28.createElement(
      TableContext_default.Provider,
      {
        value: TableContextValue
      },
      /* @__PURE__ */ React28.createElement(
        BodyContext_default.Provider,
        {
          value: BodyContextValue
        },
        /* @__PURE__ */ React28.createElement(
          ExpandedRowContext_default.Provider,
          {
            value: ExpandedRowContextValue
          },
          /* @__PURE__ */ React28.createElement(
            ResizeContext_default.Provider,
            {
              value: ResizeContextValue
            },
            fullTable
          )
        )
      )
    )
  );
}
Table.EXPAND_COLUMN = EXPAND_COLUMN;
Table.Column = Column_default;
Table.ColumnGroup = ColumnGroup_default;
Table.Summary = FooterComponents;
Table.defaultProps = {
  rowKey: 'key',
  prefixCls: 'rc-table',
  emptyText: function emptyText() {
    return 'No Data';
  }
};
var Table_default = Table;

// esm-build-44a5abce9f1a85b19269afeb9e32b7f8932eb92d-38490588/node_modules/rc-table/es/index.js
var es_default = Table_default;
export {
  Column_default as Column,
  ColumnGroup_default as ColumnGroup,
  INTERNAL_COL_DEFINE,
  FooterComponents as Summary,
  es_default as default
};
