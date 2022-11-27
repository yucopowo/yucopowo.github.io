/* esm.sh - esbuild bundle(rc-tree@5.7.1/es/TreeNode) es2022 development */
// esm-build-d307eca056d046a687266974bde00830d5e9a446-9ed8b58b/node_modules/rc-tree/es/TreeNode.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
import { TreeContext } from '/cdn/v99/rc-tree@5.7.1/es2022/es/contextTypes.development.js';
import Indent from '/cdn/v99/rc-tree@5.7.1/es2022/es/Indent.development.js';
import { convertNodePropsToEventData } from '/cdn/v99/rc-tree@5.7.1/es2022/es/utils/treeUtil.development.js';
var _excluded = [
  'eventKey',
  'className',
  'style',
  'dragOver',
  'dragOverGapTop',
  'dragOverGapBottom',
  'isLeaf',
  'isStart',
  'isEnd',
  'expanded',
  'selected',
  'checked',
  'halfChecked',
  'loading',
  'domRef',
  'active',
  'data',
  'onMouseMove',
  'selectable'
];
var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var InternalTreeNode = /* @__PURE__ */ (function(_React$Component) {
  _inherits(InternalTreeNode2, _React$Component);
  var _super = _createSuper(InternalTreeNode2);
  function InternalTreeNode2() {
    var _this;
    _classCallCheck(this, InternalTreeNode2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dragNodeHighlight: false
    };
    _this.selectHandle = void 0;
    _this.onSelectorClick = function(e) {
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, convertNodePropsToEventData(_this.props));
      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };
    _this.onSelectorDoubleClick = function(e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, convertNodePropsToEventData(_this.props));
    };
    _this.onSelect = function(e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, convertNodePropsToEventData(_this.props));
    };
    _this.onCheck = function(e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
        disableCheckbox = _this$props.disableCheckbox,
        checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, convertNodePropsToEventData(_this.props), targetChecked);
    };
    _this.onMouseEnter = function(e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, convertNodePropsToEventData(_this.props));
    };
    _this.onMouseLeave = function(e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, convertNodePropsToEventData(_this.props));
    };
    _this.onContextMenu = function(e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, convertNodePropsToEventData(_this.props));
    };
    _this.onDragStart = function(e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: true
      });
      onNodeDragStart(e, _assertThisInitialized(_this));
      try {
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {}
    };
    _this.onDragEnter = function(e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, _assertThisInitialized(_this));
    };
    _this.onDragOver = function(e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, _assertThisInitialized(_this));
    };
    _this.onDragLeave = function(e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, _assertThisInitialized(_this));
    };
    _this.onDragEnd = function(e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDragEnd(e, _assertThisInitialized(_this));
    };
    _this.onDrop = function(e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDrop(e, _assertThisInitialized(_this));
    };
    _this.onExpand = function(e) {
      var _this$props2 = _this.props,
        loading = _this$props2.loading,
        onNodeExpand = _this$props2.context.onNodeExpand;
      if (loading) return;
      onNodeExpand(e, convertNodePropsToEventData(_this.props));
    };
    _this.setSelectHandle = function(node) {
      _this.selectHandle = node;
    };
    _this.getNodeState = function() {
      var expanded = _this.props.expanded;
      if (_this.isLeaf()) {
        return null;
      }
      return expanded ? ICON_OPEN : ICON_CLOSE;
    };
    _this.hasChildren = function() {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;
      var _ref = keyEntities[eventKey] || {},
        children = _ref.children;
      return !!(children || []).length;
    };
    _this.isLeaf = function() {
      var _this$props3 = _this.props,
        isLeaf = _this$props3.isLeaf,
        loaded = _this$props3.loaded;
      var loadData = _this.props.context.loadData;
      var hasChildren = _this.hasChildren();
      if (isLeaf === false) {
        return false;
      }
      return isLeaf || (!loadData && !hasChildren) || (loadData && loaded && !hasChildren);
    };
    _this.isDisabled = function() {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };
    _this.isCheckable = function() {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable;
      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    };
    _this.syncLoadData = function(props) {
      var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
      var _this$props$context = _this.props.context,
        loadData = _this$props$context.loadData,
        onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) {
        return;
      }
      if (loadData && expanded && !_this.isLeaf()) {
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad(convertNodePropsToEventData(_this.props));
        }
      }
    };
    _this.isDraggable = function() {
      var _this$props4 = _this.props,
        data = _this$props4.data,
        draggable = _this$props4.context.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    };
    _this.renderDragHandler = function() {
      var _this$props$context2 = _this.props.context,
        draggable = _this$props$context2.draggable,
        prefixCls = _this$props$context2.prefixCls;
      return (draggable === null || draggable === void 0
      ? void 0
      : draggable.icon)
        ? /* @__PURE__ */ React.createElement(
            'span',
            {
              className: ''.concat(prefixCls, '-draggable-icon')
            },
            draggable.icon
          )
        : null;
    };
    _this.renderSwitcherIconDom = function(isLeaf) {
      var switcherIconFromProps = _this.props.switcherIcon;
      var switcherIconFromCtx = _this.props.context.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      if (typeof switcherIcon === 'function') {
        return switcherIcon(
          _objectSpread(
            _objectSpread({}, _this.props),
            {},
            {
              isLeaf
            }
          )
        );
      }
      return switcherIcon;
    };
    _this.renderSwitcher = function() {
      var expanded = _this.props.expanded;
      var prefixCls = _this.props.context.prefixCls;
      if (_this.isLeaf()) {
        var _switcherIconDom = _this.renderSwitcherIconDom(true);
        return _switcherIconDom !== false
          ? /* @__PURE__ */ React.createElement(
              'span',
              {
                className: classNames(''.concat(prefixCls, '-switcher'), ''.concat(prefixCls, '-switcher-noop'))
              },
              _switcherIconDom
            )
          : null;
      }
      var switcherCls = classNames(
        ''.concat(prefixCls, '-switcher'),
        ''.concat(prefixCls, '-switcher_').concat(expanded ? ICON_OPEN : ICON_CLOSE)
      );
      var switcherIconDom = _this.renderSwitcherIconDom(false);
      return switcherIconDom !== false
        ? /* @__PURE__ */ React.createElement(
            'span',
            {
              onClick: _this.onExpand,
              className: switcherCls
            },
            switcherIconDom
          )
        : null;
    };
    _this.renderCheckbox = function() {
      var _this$props5 = _this.props,
        checked = _this$props5.checked,
        halfChecked = _this$props5.halfChecked,
        disableCheckbox = _this$props5.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;
      var disabled = _this.isDisabled();
      var checkable = _this.isCheckable();
      if (!checkable) return null;
      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return /* @__PURE__ */ React.createElement(
        'span',
        {
          className: classNames(
            ''.concat(prefixCls, '-checkbox'),
            checked && ''.concat(prefixCls, '-checkbox-checked'),
            !checked && halfChecked && ''.concat(prefixCls, '-checkbox-indeterminate'),
            (disabled || disableCheckbox) && ''.concat(prefixCls, '-checkbox-disabled')
          ),
          onClick: _this.onCheck
        },
        $custom
      );
    };
    _this.renderIcon = function() {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /* @__PURE__ */ React.createElement('span', {
        className: classNames(
          ''.concat(prefixCls, '-iconEle'),
          ''.concat(prefixCls, '-icon__').concat(_this.getNodeState() || 'docu'),
          loading && ''.concat(prefixCls, '-icon_loading')
        )
      });
    };
    _this.renderSelector = function() {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props6 = _this.props,
        title = _this$props6.title,
        selected = _this$props6.selected,
        icon = _this$props6.icon,
        loading = _this$props6.loading,
        data = _this$props6.data;
      var _this$props$context3 = _this.props.context,
        prefixCls = _this$props$context3.prefixCls,
        showIcon = _this$props$context3.showIcon,
        treeIcon = _this$props$context3.icon,
        loadData = _this$props$context3.loadData,
        titleRender = _this$props$context3.titleRender;
      var disabled = _this.isDisabled();
      var wrapClass = ''.concat(prefixCls, '-node-content-wrapper');
      var $icon;
      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon
          ? /* @__PURE__ */ React.createElement(
              'span',
              {
                className: classNames(''.concat(prefixCls, '-iconEle'), ''.concat(prefixCls, '-icon__customize'))
              },
              typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon
            )
          : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      }
      var titleNode;
      if (typeof title === 'function') {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }
      var $title = /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-title')
        },
        titleNode
      );
      return /* @__PURE__ */ React.createElement(
        'span',
        {
          ref: _this.setSelectHandle,
          title: typeof title === 'string' ? title : '',
          className: classNames(
            ''.concat(wrapClass),
            ''.concat(wrapClass, '-').concat(_this.getNodeState() || 'normal'),
            !disabled && (selected || dragNodeHighlight) && ''.concat(prefixCls, '-node-selected')
          ),
          onMouseEnter: _this.onMouseEnter,
          onMouseLeave: _this.onMouseLeave,
          onContextMenu: _this.onContextMenu,
          onClick: _this.onSelectorClick,
          onDoubleClick: _this.onSelectorDoubleClick
        },
        $icon,
        $title,
        _this.renderDropIndicator()
      );
    };
    _this.renderDropIndicator = function() {
      var _this$props7 = _this.props,
        disabled = _this$props7.disabled,
        eventKey = _this$props7.eventKey;
      var _this$props$context4 = _this.props.context,
        draggable = _this$props$context4.draggable,
        dropLevelOffset = _this$props$context4.dropLevelOffset,
        dropPosition = _this$props$context4.dropPosition,
        prefixCls = _this$props$context4.prefixCls,
        indent = _this$props$context4.indent,
        dropIndicatorRender = _this$props$context4.dropIndicatorRender,
        dragOverNodeKey = _this$props$context4.dragOverNodeKey,
        direction = _this$props$context4.direction;
      var rootDraggable = !!draggable;
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
      return showIndicator
        ? dropIndicatorRender({
            dropPosition,
            dropLevelOffset,
            indent,
            prefixCls,
            direction
          })
        : null;
    };
    return _this;
  }
  _createClass(InternalTreeNode2, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.syncLoadData(this.props);
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.syncLoadData(this.props);
      }
    },
    {
      key: 'isSelectable',
      value: function isSelectable() {
        var selectable = this.props.selectable;
        var treeSelectable = this.props.context.selectable;
        if (typeof selectable === 'boolean') {
          return selectable;
        }
        return treeSelectable;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _classNames;
        var _this$props8 = this.props,
          eventKey = _this$props8.eventKey,
          className = _this$props8.className,
          style = _this$props8.style,
          dragOver = _this$props8.dragOver,
          dragOverGapTop = _this$props8.dragOverGapTop,
          dragOverGapBottom = _this$props8.dragOverGapBottom,
          isLeaf = _this$props8.isLeaf,
          isStart = _this$props8.isStart,
          isEnd = _this$props8.isEnd,
          expanded = _this$props8.expanded,
          selected = _this$props8.selected,
          checked = _this$props8.checked,
          halfChecked = _this$props8.halfChecked,
          loading = _this$props8.loading,
          domRef = _this$props8.domRef,
          active = _this$props8.active,
          data = _this$props8.data,
          onMouseMove = _this$props8.onMouseMove,
          selectable = _this$props8.selectable,
          otherProps = _objectWithoutProperties(_this$props8, _excluded);
        var _this$props$context5 = this.props.context,
          prefixCls = _this$props$context5.prefixCls,
          filterTreeNode = _this$props$context5.filterTreeNode,
          keyEntities = _this$props$context5.keyEntities,
          dropContainerKey = _this$props$context5.dropContainerKey,
          dropTargetKey = _this$props$context5.dropTargetKey,
          draggingNodeKey = _this$props$context5.draggingNodeKey;
        var disabled = this.isDisabled();
        var dataOrAriaAttributeProps = pickAttrs(otherProps, {
          aria: true,
          data: true
        });
        var _ref2 = keyEntities[eventKey] || {},
          level = _ref2.level;
        var isEndNode = isEnd[isEnd.length - 1];
        var mergedDraggable = this.isDraggable();
        var draggableWithoutDisabled = !disabled && mergedDraggable;
        var dragging = draggingNodeKey === eventKey;
        var ariaSelected =
          selectable !== void 0
            ? {
                'aria-selected': !!selectable
              }
            : void 0;
        return /* @__PURE__ */ React.createElement(
          'div',
          _extends(
            {
              ref: domRef,
              className: classNames(
                className,
                ''.concat(prefixCls, '-treenode'),
                ((_classNames = {}),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-disabled'), disabled),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-treenode-switcher-').concat(expanded ? 'open' : 'close'),
                  !isLeaf
                ),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-checkbox-checked'), checked),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-checkbox-indeterminate'), halfChecked),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-selected'), selected),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-loading'), loading),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-active'), active),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-leaf-last'), isEndNode),
                _defineProperty(_classNames, ''.concat(prefixCls, '-treenode-draggable'), mergedDraggable),
                _defineProperty(_classNames, 'dragging', dragging),
                _defineProperty(_classNames, 'drop-target', dropTargetKey === eventKey),
                _defineProperty(_classNames, 'drop-container', dropContainerKey === eventKey),
                _defineProperty(_classNames, 'drag-over', !disabled && dragOver),
                _defineProperty(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop),
                _defineProperty(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom),
                _defineProperty(
                  _classNames,
                  'filter-node',
                  filterTreeNode && filterTreeNode(convertNodePropsToEventData(this.props))
                ),
                _classNames)
              ),
              style,
              draggable: draggableWithoutDisabled,
              'aria-grabbed': dragging,
              onDragStart: draggableWithoutDisabled ? this.onDragStart : void 0,
              onDragEnter: mergedDraggable ? this.onDragEnter : void 0,
              onDragOver: mergedDraggable ? this.onDragOver : void 0,
              onDragLeave: mergedDraggable ? this.onDragLeave : void 0,
              onDrop: mergedDraggable ? this.onDrop : void 0,
              onDragEnd: mergedDraggable ? this.onDragEnd : void 0,
              onMouseMove
            },
            ariaSelected,
            dataOrAriaAttributeProps
          ),
          /* @__PURE__ */ React.createElement(Indent, {
            prefixCls,
            level,
            isStart,
            isEnd
          }),
          this.renderDragHandler(),
          this.renderSwitcher(),
          this.renderCheckbox(),
          this.renderSelector()
        );
      }
    }
  ]);
  return InternalTreeNode2;
})(React.Component);
var ContextTreeNode = function ContextTreeNode2(props) {
  return /* @__PURE__ */ React.createElement(TreeContext.Consumer, null, function(context) {
    return /* @__PURE__ */ React.createElement(
      InternalTreeNode,
      _extends({}, props, {
        context
      })
    );
  });
};
ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.defaultProps = {
  title: defaultTitle
};
ContextTreeNode.isTreeNode = 1;
var TreeNode_default = ContextTreeNode;
export { InternalTreeNode, TreeNode_default as default };
