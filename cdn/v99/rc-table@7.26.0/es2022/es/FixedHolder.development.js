/* esm.sh - esbuild bundle(rc-table@7.26.0/es/FixedHolder) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/FixedHolder/index.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useMemo as useMemo2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { fillRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import ColGroup from '/cdn/v99/rc-table@7.26.0/es2022/es/ColGroup.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
var _excluded = [
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
  return useMemo2(
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
var FixedHolder = /* @__PURE__ */ React.forwardRef(function(_ref, ref) {
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
    props = _objectWithoutProperties(_ref, _excluded);
  var _React$useContext = React.useContext(TableContext),
    prefixCls = _React$useContext.prefixCls,
    scrollbarSize = _React$useContext.scrollbarSize,
    isSticky = _React$useContext.isSticky;
  var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize;
  var scrollRef = React.useRef(null);
  var setScrollRef = React.useCallback(function(element) {
    fillRef(ref, element);
    fillRef(scrollRef, element);
  }, []);
  React.useEffect(function() {
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
  var allFlattenColumnsWithWidth = React.useMemo(
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
  var columnsWithScrollbar = useMemo2(
    function() {
      return combinationScrollBarSize ? [].concat(_toConsumableArray(columns), [ScrollBarColumn]) : columns;
    },
    [combinationScrollBarSize, columns]
  );
  var flattenColumnsWithScrollbar = useMemo2(
    function() {
      return combinationScrollBarSize
        ? [].concat(_toConsumableArray(flattenColumns), [ScrollBarColumn])
        : flattenColumns;
    },
    [combinationScrollBarSize, flattenColumns]
  );
  var headerStickyOffsets = useMemo2(
    function() {
      var right = stickyOffsets.right,
        left = stickyOffsets.left;
      return _objectSpread(
        _objectSpread({}, stickyOffsets),
        {},
        {
          left:
            direction === 'rtl'
              ? [].concat(
                  _toConsumableArray(
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
                  _toConsumableArray(
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
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      style: _objectSpread(
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
      className: classNames(className, _defineProperty({}, stickyClassName, !!stickyClassName))
    },
    /* @__PURE__ */ React.createElement(
      'table',
      {
        style: {
          tableLayout: 'fixed',
          visibility: noData || mergedColumnWidth ? null : 'hidden'
        }
      },
      (!noData || !maxContentScroll || allFlattenColumnsWithWidth) &&
        /* @__PURE__ */ React.createElement(ColGroup, {
          colWidths: mergedColumnWidth
            ? [].concat(_toConsumableArray(mergedColumnWidth), [combinationScrollBarSize])
            : [],
          columCount: columCount + 1,
          columns: flattenColumnsWithScrollbar
        }),
      children(
        _objectSpread(
          _objectSpread({}, props),
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
export { FixedHolder_default as default };
