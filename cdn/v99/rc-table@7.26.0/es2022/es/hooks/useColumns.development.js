/* esm.sh - esbuild bundle(rc-table@7.26.0/es/hooks/useColumns) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/hooks/useColumns.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import { INTERNAL_COL_DEFINE } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/legacyUtil.development.js';
import { EXPAND_COLUMN } from '/cdn/v99/rc-table@7.26.0/es2022/es/constant.development.js';
var _excluded = ['children'];
var _excluded2 = ['fixed'];
function convertChildrenToColumns(children) {
  return toArray(children)
    .filter(function(node) {
      return /* @__PURE__ */ React.isValidElement(node);
    })
    .map(function(_ref) {
      var key = _ref.key,
        props = _ref.props;
      var nodeChildren = props.children,
        restProps = _objectWithoutProperties(props, _excluded);
      var column = _objectSpread(
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
        _toConsumableArray(list),
        _toConsumableArray(
          flatColumns(subColumns).map(function(subColum) {
            return _objectSpread(
              {
                fixed: parsedFixed
              },
              subColum
            );
          })
        )
      );
    }
    return [].concat(_toConsumableArray(list), [
      _objectSpread(
        _objectSpread({}, column),
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
      warning(false, 'Index '.concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }
  var allFixRight = true;
  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];
    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      warning(false, 'Index '.concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}
function revertForRtl(columns) {
  return columns.map(function(column) {
    var fixed = column.fixed,
      restProps = _objectWithoutProperties(column, _excluded2);
    var parsedFixed = fixed;
    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }
    return _objectSpread(
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
  var baseColumns = React.useMemo(
    function() {
      return columns || convertChildrenToColumns(children);
    },
    [columns, children]
  );
  var withExpandColumns = React.useMemo(
    function() {
      if (expandable) {
        var _expandColumn;
        var cloneColumns = baseColumns.slice();
        if (expandIconColumnIndex >= 0) {
          warning(
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
          warning(false, 'There exist more than one `EXPAND_COLUMN` in `columns`.');
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
          _defineProperty(_expandColumn, INTERNAL_COL_DEFINE, {
            className: ''.concat(prefixCls, '-expand-icon-col'),
            columnType: 'EXPAND_COLUMN'
          }),
          _defineProperty(_expandColumn, 'title', columnTitle),
          _defineProperty(_expandColumn, 'fixed', fixedColumn),
          _defineProperty(_expandColumn, 'className', ''.concat(prefixCls, '-row-expand-icon-cell')),
          _defineProperty(_expandColumn, 'width', columnWidth),
          _defineProperty(_expandColumn, 'render', function render(_, record, index) {
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
              return /* @__PURE__ */ React.createElement(
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
        warning(false, '`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`.');
      }
      return baseColumns.filter(function(col) {
        return col !== EXPAND_COLUMN;
      });
    },
    [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]
  );
  var mergedColumns = React.useMemo(
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
  var flattenColumns = React.useMemo(
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
export { convertChildrenToColumns, useColumns_default as default };
