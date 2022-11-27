/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Table) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Table.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import isVisible from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/isVisible.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
import { isStyleSupport } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/styleChecker.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
import { getTargetScrollBarSize } from '/cdn/v99/rc-util@5.24.6/es2022/es/getScrollBarSize.development.js';
import ColumnGroup from '/cdn/v99/rc-table@7.26.0/es2022/es/sugar/ColumnGroup.development.js';
import Column from '/cdn/v99/rc-table@7.26.0/es2022/es/sugar/Column.development.js';
import Header from '/cdn/v99/rc-table@7.26.0/es2022/es/Header/Header.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import BodyContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/BodyContext.development.js';
import Body from '/cdn/v99/rc-table@7.26.0/es2022/es/Body.development.js';
import useColumns from '/cdn/v99/rc-table@7.26.0/es2022/es/hooks/useColumns.development.js';
import { useLayoutState, useTimeoutLock } from '/cdn/v99/rc-table@7.26.0/es2022/es/hooks/useFrame.development.js';
import {
  getPathValue,
  validateValue,
  getColumnsKey
} from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/valueUtil.development.js';
import ResizeContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/ResizeContext.development.js';
import useStickyOffsets from '/cdn/v99/rc-table@7.26.0/es2022/es/hooks/useStickyOffsets.development.js';
import ColGroup from '/cdn/v99/rc-table@7.26.0/es2022/es/ColGroup.development.js';
import { getExpandableProps } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/legacyUtil.development.js';
import Panel from '/cdn/v99/rc-table@7.26.0/es2022/es/Panel.development.js';
import Footer, { FooterComponents } from '/cdn/v99/rc-table@7.26.0/es2022/es/Footer.development.js';
import {
  findAllChildrenKeys,
  renderExpandIcon
} from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/expandUtil.development.js';
import { getCellFixedInfo } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/fixUtil.development.js';
import StickyScrollBar from '/cdn/v99/rc-table@7.26.0/es2022/es/stickyScrollBar.development.js';
import useSticky from '/cdn/v99/rc-table@7.26.0/es2022/es/hooks/useSticky.development.js';
import FixedHolder from '/cdn/v99/rc-table@7.26.0/es2022/es/FixedHolder.development.js';
import Summary from '/cdn/v99/rc-table@7.26.0/es2022/es/Footer/Summary.development.js';
import StickyContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/StickyContext.development.js';
import ExpandedRowContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/ExpandedRowContext.development.js';
import { EXPAND_COLUMN } from '/cdn/v99/rc-table@7.26.0/es2022/es/constant.development.js';
var EMPTY_DATA = [];
var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';
var MemoTableContent = /* @__PURE__ */ React.memo(
  function(_ref) {
    var children = _ref.children;
    return children;
  },
  function(prev, next) {
    if (!shallowEqual(prev.props, next.props)) {
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
      warning(props[name] === void 0, '`'.concat(name, '` is removed, please use `onRow` instead.'));
    });
    warning(!('getBodyWrapper' in props), '`getBodyWrapper` is deprecated, please use custom `components` instead.');
  }
  var getComponent = React.useCallback(
    function(path, defaultComponent) {
      return getPathValue(components || {}, path) || defaultComponent;
    },
    [components]
  );
  var getRowKey = React.useMemo(
    function() {
      if (typeof rowKey === 'function') {
        return rowKey;
      }
      return function(record) {
        var key = record && record[rowKey];
        if (true) {
          warning(
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
  var expandableType = React.useMemo(
    function() {
      if (expandedRowRender) {
        return 'row';
      }
      if (
        (props.expandable && internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__) ||
        mergedData.some(function(record) {
          return record && _typeof(record) === 'object' && record[mergedChildrenColumnName];
        })
      ) {
        return 'nest';
      }
      return false;
    },
    [!!expandedRowRender, mergedData]
  );
  var _React$useState = React.useState(function() {
      if (defaultExpandedRowKeys) {
        return defaultExpandedRowKeys;
      }
      if (defaultExpandAllRows) {
        return findAllChildrenKeys(mergedData, getRowKey, mergedChildrenColumnName);
      }
      return [];
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerExpandedKeys = _React$useState2[0],
    setInnerExpandedKeys = _React$useState2[1];
  var mergedExpandedKeys = React.useMemo(
    function() {
      return new Set(expandedRowKeys || innerExpandedKeys || []);
    },
    [expandedRowKeys, innerExpandedKeys]
  );
  var onTriggerExpand = React.useCallback(
    function(record) {
      var key = getRowKey(record, mergedData.indexOf(record));
      var newExpandedKeys;
      var hasKey = mergedExpandedKeys.has(key);
      if (hasKey) {
        mergedExpandedKeys.delete(key);
        newExpandedKeys = _toConsumableArray(mergedExpandedKeys);
      } else {
        newExpandedKeys = [].concat(_toConsumableArray(mergedExpandedKeys), [key]);
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
    warning(false, '`expandedRowRender` should not use with nested Table');
  }
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentWidth = _React$useState4[0],
    setComponentWidth = _React$useState4[1];
  var _useColumns = useColumns(
      _objectSpread(
        _objectSpread(_objectSpread({}, props), expandableConfig),
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
    _useColumns2 = _slicedToArray(_useColumns, 2),
    columns = _useColumns2[0],
    flattenColumns = _useColumns2[1];
  var columnContext = React.useMemo(
    function() {
      return {
        columns,
        flattenColumns
      };
    },
    [columns, flattenColumns]
  );
  var fullTableRef = React.useRef();
  var scrollHeaderRef = React.useRef();
  var scrollBodyRef = React.useRef();
  var scrollBodyContainerRef = React.useRef();
  var scrollSummaryRef = React.useRef();
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pingedLeft = _React$useState6[0],
    setPingedLeft = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    pingedRight = _React$useState8[0],
    setPingedRight = _React$useState8[1];
  var _useLayoutState = useLayoutState(/* @__PURE__ */ new Map()),
    _useLayoutState2 = _slicedToArray(_useLayoutState, 2),
    colsWidths = _useLayoutState2[0],
    updateColsWidths = _useLayoutState2[1];
  var colsKeys = getColumnsKey(flattenColumns);
  var pureColWidths = colsKeys.map(function(columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = React.useMemo(
    function() {
      return pureColWidths;
    },
    [pureColWidths.join('_')]
  );
  var stickyOffsets = useStickyOffsets(colWidths, flattenColumns.length, direction);
  var fixHeader = scroll && validateValue(scroll.y);
  var horizonScroll = (scroll && validateValue(scroll.x)) || Boolean(expandableConfig.fixed);
  var fixColumn =
    horizonScroll &&
    flattenColumns.some(function(_ref2) {
      var fixed = _ref2.fixed;
      return fixed;
    });
  var stickyRef = React.useRef();
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
    /* @__PURE__ */ React.isValidElement(summaryNode) &&
    summaryNode.type === Summary &&
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
  var onColumnResize = React.useCallback(function(columnKey, width) {
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
    _useTimeoutLock2 = _slicedToArray(_useTimeoutLock, 2),
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
  var mounted = React.useRef(false);
  React.useEffect(
    function() {
      if (mounted.current) {
        triggerOnScroll();
      }
    },
    [horizonScroll, data, columns.length]
  );
  React.useEffect(function() {
    mounted.current = true;
  }, []);
  var _React$useState9 = React.useState(0),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    scrollbarSize = _React$useState10[0],
    setScrollbarSize = _React$useState10[1];
  var _React$useState11 = React.useState(true),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    supportSticky = _React$useState12[0],
    setSupportSticky = _React$useState12[1];
  React.useEffect(function() {
    if (scrollBodyRef.current instanceof Element) {
      setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.current).width);
    } else {
      setScrollbarSize(getTargetScrollBarSize(scrollBodyContainerRef.current).width);
    }
    setSupportSticky(isStyleSupport('position', 'sticky'));
  }, []);
  React.useEffect(function() {
    if (internalHooks === INTERNAL_HOOKS && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  });
  var TableComponent = getComponent(['table'], 'table');
  var mergedTableLayout = React.useMemo(
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
  var emptyNode = React.useMemo(
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
  var bodyTable = /* @__PURE__ */ React.createElement(Body, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll || isSticky,
    expandedKeys: mergedExpandedKeys,
    rowExpandable,
    getRowKey,
    onRow,
    emptyNode,
    childrenColumnName: mergedChildrenColumnName
  });
  var bodyColGroup = /* @__PURE__ */ React.createElement(ColGroup, {
    colWidths: flattenColumns.map(function(_ref6) {
      var width = _ref6.width;
      return width;
    }),
    columns: flattenColumns
  });
  var customizeScrollBody = getComponent(['body']);
  if (typeof customizeScrollBody === 'function' && hasData && !fixHeader) {
    warning(false, '`components.body` with render props is only work on `scroll.y`.');
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
        warning(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
        return 0;
      });
    } else {
      bodyContent = /* @__PURE__ */ React.createElement(
        'div',
        {
          style: _objectSpread(_objectSpread({}, scrollXStyle), scrollYStyle),
          onScroll,
          ref: scrollBodyRef,
          className: classNames(''.concat(prefixCls, '-body'))
        },
        /* @__PURE__ */ React.createElement(
          TableComponent,
          {
            style: _objectSpread(
              _objectSpread({}, scrollTableStyle),
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
            /* @__PURE__ */ React.createElement(
              Footer,
              {
                stickyOffsets,
                flattenColumns
              },
              summaryNode
            )
        )
      );
    }
    var fixedHolderProps = _objectSpread(
      _objectSpread(
        _objectSpread(
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
    groupTableNode = /* @__PURE__ */ React.createElement(
      React.Fragment,
      null,
      showHeader !== false &&
        /* @__PURE__ */ React.createElement(
          FixedHolder,
          _extends({}, fixedHolderProps, {
            stickyTopOffset: offsetHeader,
            className: ''.concat(prefixCls, '-header'),
            ref: scrollHeaderRef
          }),
          function(fixedHolderPassProps) {
            return /* @__PURE__ */ React.createElement(
              React.Fragment,
              null,
              /* @__PURE__ */ React.createElement(Header, fixedHolderPassProps),
              fixFooter === 'top' && /* @__PURE__ */ React.createElement(Footer, fixedHolderPassProps, summaryNode)
            );
          }
        ),
      bodyContent,
      fixFooter &&
        fixFooter !== 'top' &&
        /* @__PURE__ */ React.createElement(
          FixedHolder,
          _extends({}, fixedHolderProps, {
            stickyBottomOffset: offsetSummary,
            className: ''.concat(prefixCls, '-summary'),
            ref: scrollSummaryRef
          }),
          function(fixedHolderPassProps) {
            return /* @__PURE__ */ React.createElement(Footer, fixedHolderPassProps, summaryNode);
          }
        ),
      isSticky &&
        /* @__PURE__ */ React.createElement(StickyScrollBar, {
          ref: stickyRef,
          offsetScroll,
          scrollBodyRef,
          onScroll,
          container
        })
    );
  } else {
    groupTableNode = /* @__PURE__ */ React.createElement(
      'div',
      {
        style: _objectSpread(_objectSpread({}, scrollXStyle), scrollYStyle),
        className: classNames(''.concat(prefixCls, '-content')),
        onScroll,
        ref: scrollBodyRef
      },
      /* @__PURE__ */ React.createElement(
        TableComponent,
        {
          style: _objectSpread(
            _objectSpread({}, scrollTableStyle),
            {},
            {
              tableLayout: mergedTableLayout
            }
          )
        },
        bodyColGroup,
        showHeader !== false && /* @__PURE__ */ React.createElement(Header, _extends({}, headerProps, columnContext)),
        bodyTable,
        summaryNode &&
          /* @__PURE__ */ React.createElement(
            Footer,
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
  var fullTable = /* @__PURE__ */ React.createElement(
    'div',
    _extends(
      {
        className: classNames(
          prefixCls,
          className,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(prefixCls, '-rtl'), direction === 'rtl'),
          _defineProperty(_classNames, ''.concat(prefixCls, '-ping-left'), pingedLeft),
          _defineProperty(_classNames, ''.concat(prefixCls, '-ping-right'), pingedRight),
          _defineProperty(_classNames, ''.concat(prefixCls, '-layout-fixed'), tableLayout === 'fixed'),
          _defineProperty(_classNames, ''.concat(prefixCls, '-fixed-header'), fixHeader),
          _defineProperty(_classNames, ''.concat(prefixCls, '-fixed-column'), fixColumn),
          _defineProperty(_classNames, ''.concat(prefixCls, '-scroll-horizontal'), horizonScroll),
          _defineProperty(
            _classNames,
            ''.concat(prefixCls, '-has-fix-left'),
            flattenColumns[0] && flattenColumns[0].fixed
          ),
          _defineProperty(
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
    /* @__PURE__ */ React.createElement(
      MemoTableContent,
      {
        pingLeft: pingedLeft,
        pingRight: pingedRight,
        props: _objectSpread(
          _objectSpread({}, props),
          {},
          {
            stickyOffsets,
            mergedExpandedKeys
          }
        )
      },
      title &&
        /* @__PURE__ */ React.createElement(
          Panel,
          {
            className: ''.concat(prefixCls, '-title')
          },
          title(mergedData)
        ),
      /* @__PURE__ */ React.createElement(
        'div',
        {
          ref: scrollBodyContainerRef,
          className: ''.concat(prefixCls, '-container')
        },
        groupTableNode
      ),
      footer &&
        /* @__PURE__ */ React.createElement(
          Panel,
          {
            className: ''.concat(prefixCls, '-footer')
          },
          footer(mergedData)
        )
    )
  );
  if (horizonScroll) {
    fullTable = /* @__PURE__ */ React.createElement(
      ResizeObserver,
      {
        onResize: onFullTableResize
      },
      fullTable
    );
  }
  var TableContextValue = React.useMemo(
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
  var BodyContextValue = React.useMemo(
    function() {
      return _objectSpread(
        _objectSpread({}, columnContext),
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
  var ExpandedRowContextValue = React.useMemo(
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
  var ResizeContextValue = React.useMemo(
    function() {
      return {
        onColumnResize
      };
    },
    [onColumnResize]
  );
  return /* @__PURE__ */ React.createElement(
    StickyContext.Provider,
    {
      value: supportSticky
    },
    /* @__PURE__ */ React.createElement(
      TableContext.Provider,
      {
        value: TableContextValue
      },
      /* @__PURE__ */ React.createElement(
        BodyContext.Provider,
        {
          value: BodyContextValue
        },
        /* @__PURE__ */ React.createElement(
          ExpandedRowContext.Provider,
          {
            value: ExpandedRowContextValue
          },
          /* @__PURE__ */ React.createElement(
            ResizeContext.Provider,
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
Table.Column = Column;
Table.ColumnGroup = ColumnGroup;
Table.Summary = FooterComponents;
Table.defaultProps = {
  rowKey: 'key',
  prefixCls: 'rc-table',
  emptyText: function emptyText() {
    return 'No Data';
  }
};
var Table_default = Table;
export { INTERNAL_HOOKS, Table_default as default };
