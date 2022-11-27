/* esm.sh - esbuild bundle(rc-tree@5.7.1) es2022 development */
// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/Tree.js
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import pickAttrs2 from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/contextTypes.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var TreeContext = /* @__PURE__ */ React.createContext(null);

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/util.js
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/TreeNode.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/Indent.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var Indent = function Indent2(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = ''.concat(prefixCls, '-indent-unit');
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _classNames;
    list.push(
      /* @__PURE__ */ React2.createElement('span', {
        key: i,
        className: classNames(
          baseClassName,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(baseClassName, '-start'), isStart[i]),
          _defineProperty(_classNames, ''.concat(baseClassName, '-end'), isEnd[i]),
          _classNames)
        )
      })
    );
  }
  return /* @__PURE__ */ React2.createElement(
    'span',
    {
      'aria-hidden': 'true',
      className: ''.concat(prefixCls, '-indent')
    },
    list
  );
};
var Indent_default = /* @__PURE__ */ React2.memo(Indent);

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/utils/treeUtil.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import omit from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var _excluded = ['children'];
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    title = _ref.title,
    _title = _ref._title,
    key = _ref.key,
    children = _ref.children;
  var mergedTitle = title || 'title';
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || 'key',
    children: children || 'children'
  };
}
function warningWithoutKey(treeData, fieldNames) {
  var keys = /* @__PURE__ */ new Map();
  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    (list || []).forEach(function(treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      warning(key !== null && key !== void 0, 'Tree node must have a certain key: ['.concat(path).concat(key, ']'));
      var recordKey = String(key);
      warning(
        !keys.has(recordKey) || key === null || key === void 0,
        "Same 'key' exist in the Tree: ".concat(recordKey)
      );
      keys.set(recordKey, true);
      dig(children, ''.concat(path).concat(recordKey, ' > '));
    });
  }
  dig(treeData);
}
function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = toArray(node);
    return treeNodes
      .map(function(treeNode) {
        if (!isTreeNode(treeNode)) {
          warning(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
          return null;
        }
        var key = treeNode.key;
        var _treeNode$props = treeNode.props,
          children = _treeNode$props.children,
          rest = _objectWithoutProperties(_treeNode$props, _excluded);
        var dataNode = _objectSpread(
          {
            key
          },
          rest
        );
        var parsedChildren = dig(children);
        if (parsedChildren.length) {
          dataNode.children = parsedChildren;
        }
        return dataNode;
      })
      .filter(function(dataNode) {
        return dataNode;
      });
  }
  return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames),
    fieldTitles = _fillFieldNames._title,
    fieldKey = _fillFieldNames.key,
    fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return list.map(function(treeNode, index) {
      var pos = getPosition(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== void 0) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      var flattenNode = _objectSpread(
        _objectSpread({}, omit(treeNode, [].concat(_toConsumableArray(fieldTitles), [fieldKey, fieldChildren]))),
        {},
        {
          title: mergedTitle,
          key: mergedKey,
          parent,
          pos,
          children: null,
          data: treeNode,
          isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
          isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
        }
      );
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
function traverseDataNodes(dataNodes, callback, config) {
  var mergedConfig = {};
  if (_typeof(config) === 'object') {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  var _mergedConfig = mergedConfig,
    childrenPropName = _mergedConfig.childrenPropName,
    externalGetKey = _mergedConfig.externalGetKey,
    fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames),
    fieldKey = _fillFieldNames2.key,
    fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey2(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey2(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey2(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : '0';
    var connectNodes = node ? [].concat(_toConsumableArray(pathNodes), [node]) : [];
    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node,
        index,
        pos,
        key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data);
    }
    if (children) {
      children.forEach(function(subNode, subIndex) {
        processNode(
          subNode,
          subIndex,
          {
            node,
            pos,
            level: parent ? parent.level + 1 : -1
          },
          connectNodes
        );
      });
    }
  }
  processNode(null);
}
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    initWrapper = _ref2.initWrapper,
    processEntity = _ref2.processEntity,
    onProcessFinished = _ref2.onProcessFinished,
    externalGetKey = _ref2.externalGetKey,
    childrenPropName = _ref2.childrenPropName,
    fieldNames = _ref2.fieldNames;
  var legacyExternalGetKey = arguments.length > 2 ? arguments[2] : void 0;
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities,
    keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(
    dataNodes,
    function(item) {
      var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos,
        level = item.level,
        nodes = item.nodes;
      var entity = {
        node,
        nodes,
        index,
        key,
        pos,
        level
      };
      var mergedKey = getKey(key, pos);
      posEntities[pos] = entity;
      keyEntities[mergedKey] = entity;
      entity.parent = posEntities[parentPos];
      if (entity.parent) {
        entity.parent.children = entity.parent.children || [];
        entity.parent.children.push(entity);
      }
      if (processEntity) {
        processEntity(entity, wrapper);
      }
    },
    {
      externalGetKey: mergedExternalGetKey,
      childrenPropName,
      fieldNames
    }
  );
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys,
    selectedKeys = _ref3.selectedKeys,
    loadedKeys = _ref3.loadedKeys,
    loadingKeys = _ref3.loadingKeys,
    checkedKeys = _ref3.checkedKeys,
    halfCheckedKeys = _ref3.halfCheckedKeys,
    dragOverNodeKey = _ref3.dragOverNodeKey,
    dropPosition = _ref3.dropPosition,
    keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
    expanded = props.expanded,
    selected = props.selected,
    checked = props.checked,
    loaded = props.loaded,
    loading = props.loading,
    halfChecked = props.halfChecked,
    dragOver = props.dragOver,
    dragOverGapTop = props.dragOverGapTop,
    dragOverGapBottom = props.dragOverGapBottom,
    pos = props.pos,
    active = props.active,
    eventKey = props.eventKey;
  var eventData = _objectSpread(
    _objectSpread({}, data),
    {},
    {
      expanded,
      selected,
      checked,
      loaded,
      loading,
      halfChecked,
      dragOver,
      dragOverGapTop,
      dragOverGapBottom,
      pos,
      active,
      key: eventKey
    }
  );
  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        warning(
          false,
          'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.'
        );
        return props;
      }
    });
  }
  return eventData;
}

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/TreeNode.js
var _excluded2 = [
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
        ? /* @__PURE__ */ React3.createElement(
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
          _objectSpread2(
            _objectSpread2({}, _this.props),
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
          ? /* @__PURE__ */ React3.createElement(
              'span',
              {
                className: classNames2(''.concat(prefixCls, '-switcher'), ''.concat(prefixCls, '-switcher-noop'))
              },
              _switcherIconDom
            )
          : null;
      }
      var switcherCls = classNames2(
        ''.concat(prefixCls, '-switcher'),
        ''.concat(prefixCls, '-switcher_').concat(expanded ? ICON_OPEN : ICON_CLOSE)
      );
      var switcherIconDom = _this.renderSwitcherIconDom(false);
      return switcherIconDom !== false
        ? /* @__PURE__ */ React3.createElement(
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
      return /* @__PURE__ */ React3.createElement(
        'span',
        {
          className: classNames2(
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
      return /* @__PURE__ */ React3.createElement('span', {
        className: classNames2(
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
          ? /* @__PURE__ */ React3.createElement(
              'span',
              {
                className: classNames2(''.concat(prefixCls, '-iconEle'), ''.concat(prefixCls, '-icon__customize'))
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
      var $title = /* @__PURE__ */ React3.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-title')
        },
        titleNode
      );
      return /* @__PURE__ */ React3.createElement(
        'span',
        {
          ref: _this.setSelectHandle,
          title: typeof title === 'string' ? title : '',
          className: classNames2(
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
          otherProps = _objectWithoutProperties2(_this$props8, _excluded2);
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
        return /* @__PURE__ */ React3.createElement(
          'div',
          _extends(
            {
              ref: domRef,
              className: classNames2(
                className,
                ''.concat(prefixCls, '-treenode'),
                ((_classNames = {}),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-disabled'), disabled),
                _defineProperty2(
                  _classNames,
                  ''.concat(prefixCls, '-treenode-switcher-').concat(expanded ? 'open' : 'close'),
                  !isLeaf
                ),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-checkbox-checked'), checked),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-checkbox-indeterminate'), halfChecked),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-selected'), selected),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-loading'), loading),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-active'), active),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-leaf-last'), isEndNode),
                _defineProperty2(_classNames, ''.concat(prefixCls, '-treenode-draggable'), mergedDraggable),
                _defineProperty2(_classNames, 'dragging', dragging),
                _defineProperty2(_classNames, 'drop-target', dropTargetKey === eventKey),
                _defineProperty2(_classNames, 'drop-container', dropContainerKey === eventKey),
                _defineProperty2(_classNames, 'drag-over', !disabled && dragOver),
                _defineProperty2(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop),
                _defineProperty2(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom),
                _defineProperty2(
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
          /* @__PURE__ */ React3.createElement(Indent_default, {
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
})(React3.Component);
var ContextTreeNode = function ContextTreeNode2(props) {
  return /* @__PURE__ */ React3.createElement(TreeContext.Consumer, null, function(context) {
    return /* @__PURE__ */ React3.createElement(
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

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/util.js
function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getPosition(level, index) {
  return ''.concat(level, '-').concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    list.forEach(function(_ref) {
      var key = _ref.key,
        children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(
  event,
  dragNode,
  targetNode,
  indent,
  startMousePosition,
  allowDrop2,
  flattenedNodes,
  keyEntities,
  expandKeys,
  direction
) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX,
    clientY = event.clientY;
  var _event$target$getBoun = event.target.getBoundingClientRect(),
    top = _event$target$getBoun.top,
    height = _event$target$getBoun.height;
  var horizontalMouseOffset =
    (direction === 'rtl' ? -1 : 1) *
    (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  var abstractDropNodeEntity = keyEntities[targetNode.props.eventKey];
  if (clientY < top + height / 2) {
    var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  if (!expandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNode.props.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (
    isFirstChild(abstractDropNodeEntity) &&
    abstractDropNodeEntity.level === 0 &&
    clientY < top + height / 2 &&
    allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: -1
    }) &&
    abstractDropNodeEntity.key === targetNode.props.eventKey
  ) {
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
    if (
      allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })
    ) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      if (
        allowDrop2({
          dragNode: abstractDragDataNode,
          dropNode: abstractDropDataNode,
          dropPosition: 1
        })
      ) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      if (
        allowDrop2({
          dragNode: abstractDragDataNode,
          dropNode: abstractDropDataNode,
          dropPosition: 0
        })
      ) {
        dropPosition = 0;
      } else if (
        allowDrop2({
          dragNode: abstractDragDataNode,
          dropNode: abstractDropDataNode,
          dropPosition: 1
        })
      ) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    if (
      allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })
    ) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition,
    dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey,
    dropContainerKey:
      dropPosition === 0
        ? null
        : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0
            ? void 0
            : _abstractDropNodeEnti.key) || null,
    dropAllowed
  };
}
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return void 0;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }
  var keyProps;
  if (Array.isArray(keys)) {
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: void 0
    };
  } else if (_typeof2(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || void 0,
      halfCheckedKeys: keys.halfChecked || void 0
    };
  } else {
    warning2(false, '`checkedKeys` is not an array or an object');
    return null;
  }
  return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = /* @__PURE__ */ new Set();
  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
      node = entity.node;
    if (node.disabled) return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function(key) {
    conductUp(key);
  });
  return _toConsumableArray2(expandedKeys);
}

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/NodeList.js
import _objectDestructuringEmpty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectDestructuringEmpty.development.js';
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import VirtualList from '/cdn/v99/rc-virtual-list@3.4.11/es2022/rc-virtual-list.development.js';

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/MotionTreeNode.js
import _objectDestructuringEmpty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectDestructuringEmpty.development.js';
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
var _excluded3 = [
  'className',
  'style',
  'motion',
  'motionNodes',
  'motionType',
  'onMotionStart',
  'onMotionEnd',
  'active',
  'treeNodeRequiredProps'
];
var MotionTreeNode = function MotionTreeNode2(_ref, ref) {
  var className = _ref.className,
    style = _ref.style,
    motion = _ref.motion,
    motionNodes = _ref.motionNodes,
    motionType = _ref.motionType,
    onOriginMotionStart = _ref.onMotionStart,
    onOriginMotionEnd = _ref.onMotionEnd,
    active = _ref.active,
    treeNodeRequiredProps = _ref.treeNodeRequiredProps,
    props = _objectWithoutProperties4(_ref, _excluded3);
  var _React$useState = React5.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var _React$useContext = React5.useContext(TreeContext),
    prefixCls = _React$useContext.prefixCls;
  var motionedRef = React5.useRef(false);
  var onMotionEnd = function onMotionEnd2() {
    if (!motionedRef.current) {
      onOriginMotionEnd();
    }
    motionedRef.current = true;
  };
  useEffect(
    function() {
      if (motionNodes && motionType === 'hide' && visible) {
        setVisible(false);
      }
    },
    [motionNodes]
  );
  useEffect(function() {
    if (motionNodes) {
      onOriginMotionStart();
    }
    return function() {
      if (motionNodes) {
        onMotionEnd();
      }
    };
  }, []);
  if (motionNodes) {
    return /* @__PURE__ */ React5.createElement(
      CSSMotion,
      _extends3(
        {
          ref,
          visible
        },
        motion,
        {
          motionAppear: motionType === 'show',
          onAppearEnd: onMotionEnd,
          onLeaveEnd: onMotionEnd
        }
      ),
      function(_ref2, motionRef) {
        var motionClassName = _ref2.className,
          motionStyle = _ref2.style;
        return /* @__PURE__ */ React5.createElement(
          'div',
          {
            ref: motionRef,
            className: classNames3(''.concat(prefixCls, '-treenode-motion'), motionClassName),
            style: motionStyle
          },
          motionNodes.map(function(treeNode) {
            var restProps = _extends3({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
              title = treeNode.title,
              key = treeNode.key,
              isStart = treeNode.isStart,
              isEnd = treeNode.isEnd;
            delete restProps.children;
            var treeNodeProps = getTreeNodeProps(key, treeNodeRequiredProps);
            return /* @__PURE__ */ React5.createElement(
              TreeNode_default,
              _extends3({}, restProps, treeNodeProps, {
                title,
                active,
                data: treeNode.data,
                key,
                isStart,
                isEnd
              })
            );
          })
        );
      }
    );
  }
  return /* @__PURE__ */ React5.createElement(
    TreeNode_default,
    _extends3(
      {
        domRef: ref,
        className,
        style
      },
      props,
      {
        active
      }
    )
  );
};
MotionTreeNode.displayName = 'MotionTreeNode';
var RefMotionTreeNode = /* @__PURE__ */ React5.forwardRef(MotionTreeNode);
var MotionTreeNode_default = RefMotionTreeNode;

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/utils/diffUtil.js
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = /* @__PURE__ */ new Map();
    shorter.forEach(function(key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function(key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function(data) {
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function(data) {
    return data.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function(data) {
      return data.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/NodeList.js
var _excluded4 = [
  'prefixCls',
  'data',
  'selectable',
  'checkable',
  'expandedKeys',
  'selectedKeys',
  'checkedKeys',
  'loadedKeys',
  'loadingKeys',
  'halfCheckedKeys',
  'keyEntities',
  'disabled',
  'dragging',
  'dragOverNodeKey',
  'dropPosition',
  'motion',
  'height',
  'itemHeight',
  'virtual',
  'focusable',
  'activeItem',
  'focused',
  'tabIndex',
  'onKeyDown',
  'onFocus',
  'onBlur',
  'onActiveChange',
  'onListChangeStart',
  'onListChangeEnd'
];
var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop2() {};
var MOTION_KEY = 'RC_TREE_MOTION_'.concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  isStart: [],
  isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key,
    pos = item.pos;
  return getKey(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = ''.concat(current.data.key, ' > ').concat(path);
  }
  return path;
}
var NodeList = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    data = props.data,
    selectable = props.selectable,
    checkable = props.checkable,
    expandedKeys = props.expandedKeys,
    selectedKeys = props.selectedKeys,
    checkedKeys = props.checkedKeys,
    loadedKeys = props.loadedKeys,
    loadingKeys = props.loadingKeys,
    halfCheckedKeys = props.halfCheckedKeys,
    keyEntities = props.keyEntities,
    disabled = props.disabled,
    dragging = props.dragging,
    dragOverNodeKey = props.dragOverNodeKey,
    dropPosition = props.dropPosition,
    motion = props.motion,
    height = props.height,
    itemHeight = props.itemHeight,
    virtual = props.virtual,
    focusable = props.focusable,
    activeItem = props.activeItem,
    focused = props.focused,
    tabIndex = props.tabIndex,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onActiveChange = props.onActiveChange,
    onListChangeStart = props.onListChangeStart,
    onListChangeEnd = props.onListChangeEnd,
    domProps = _objectWithoutProperties5(props, _excluded4);
  var listRef = React6.useRef(null);
  var indentMeasurerRef = React6.useRef(null);
  React6.useImperativeHandle(ref, function() {
    return {
      scrollTo: function scrollTo(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  });
  var _React$useState = React6.useState(expandedKeys),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    prevExpandedKeys = _React$useState2[0],
    setPrevExpandedKeys = _React$useState2[1];
  var _React$useState3 = React6.useState(data),
    _React$useState4 = _slicedToArray2(_React$useState3, 2),
    prevData = _React$useState4[0],
    setPrevData = _React$useState4[1];
  var _React$useState5 = React6.useState(data),
    _React$useState6 = _slicedToArray2(_React$useState5, 2),
    transitionData = _React$useState6[0],
    setTransitionData = _React$useState6[1];
  var _React$useState7 = React6.useState([]),
    _React$useState8 = _slicedToArray2(_React$useState7, 2),
    transitionRange = _React$useState8[0],
    setTransitionRange = _React$useState8[1];
  var _React$useState9 = React6.useState(null),
    _React$useState10 = _slicedToArray2(_React$useState9, 2),
    motionType = _React$useState10[0],
    setMotionType = _React$useState10[1];
  var dataRef = React6.useRef(data);
  dataRef.current = data;
  function onMotionEnd() {
    var latestData = dataRef.current;
    setPrevData(latestData);
    setTransitionData(latestData);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  }
  React6.useEffect(
    function() {
      setPrevExpandedKeys(expandedKeys);
      var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
      if (diffExpanded.key !== null) {
        if (diffExpanded.add) {
          var keyIndex = prevData.findIndex(function(_ref) {
            var key = _ref.key;
            return key === diffExpanded.key;
          });
          var rangeNodes = getMinimumRangeTransitionRange(
            getExpandRange(prevData, data, diffExpanded.key),
            virtual,
            height,
            itemHeight
          );
          var newTransitionData = prevData.slice();
          newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
          setTransitionData(newTransitionData);
          setTransitionRange(rangeNodes);
          setMotionType('show');
        } else {
          var _keyIndex = data.findIndex(function(_ref2) {
            var key = _ref2.key;
            return key === diffExpanded.key;
          });
          var _rangeNodes = getMinimumRangeTransitionRange(
            getExpandRange(data, prevData, diffExpanded.key),
            virtual,
            height,
            itemHeight
          );
          var _newTransitionData = data.slice();
          _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
          setTransitionData(_newTransitionData);
          setTransitionRange(_rangeNodes);
          setMotionType('hide');
        }
      } else if (prevData !== data) {
        setPrevData(data);
        setTransitionData(data);
      }
    },
    [expandedKeys, data]
  );
  React6.useEffect(
    function() {
      if (!dragging) {
        onMotionEnd();
      }
    },
    [dragging]
  );
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys,
    selectedKeys,
    loadedKeys,
    loadingKeys,
    checkedKeys,
    halfCheckedKeys,
    dragOverNodeKey,
    dropPosition,
    keyEntities
  };
  return /* @__PURE__ */ React6.createElement(
    React6.Fragment,
    null,
    focused &&
      activeItem &&
      /* @__PURE__ */ React6.createElement(
        'span',
        {
          style: HIDDEN_STYLE,
          'aria-live': 'assertive'
        },
        getAccessibilityPath(activeItem)
      ),
    /* @__PURE__ */ React6.createElement(
      'div',
      null,
      /* @__PURE__ */ React6.createElement('input', {
        style: HIDDEN_STYLE,
        disabled: focusable === false || disabled,
        tabIndex: focusable !== false ? tabIndex : null,
        onKeyDown,
        onFocus,
        onBlur,
        value: '',
        onChange: noop,
        'aria-label': 'for screen reader'
      })
    ),
    /* @__PURE__ */ React6.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-treenode'),
        'aria-hidden': true,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden'
        }
      },
      /* @__PURE__ */ React6.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-indent')
        },
        /* @__PURE__ */ React6.createElement('div', {
          ref: indentMeasurerRef,
          className: ''.concat(prefixCls, '-indent-unit')
        })
      )
    ),
    /* @__PURE__ */ React6.createElement(
      VirtualList,
      _extends4({}, domProps, {
        data: mergedData,
        itemKey,
        height,
        fullHeight: false,
        virtual,
        itemHeight,
        prefixCls: ''.concat(prefixCls, '-list'),
        ref: listRef,
        onVisibleChange: function onVisibleChange(originList, fullList) {
          var originSet = new Set(originList);
          var restList = fullList.filter(function(item) {
            return !originSet.has(item);
          });
          if (
            restList.some(function(item) {
              return itemKey(item) === MOTION_KEY;
            })
          ) {
            onMotionEnd();
          }
        }
      }),
      function(treeNode) {
        var pos = treeNode.pos,
          restProps = _extends4({}, (_objectDestructuringEmpty2(treeNode.data), treeNode.data)),
          title = treeNode.title,
          key = treeNode.key,
          isStart = treeNode.isStart,
          isEnd = treeNode.isEnd;
        var mergedKey = getKey(key, pos);
        delete restProps.key;
        delete restProps.children;
        var treeNodeProps = getTreeNodeProps(mergedKey, treeNodeRequiredProps);
        return /* @__PURE__ */ React6.createElement(
          MotionTreeNode_default,
          _extends4({}, restProps, treeNodeProps, {
            title,
            active: !!activeItem && key === activeItem.key,
            pos,
            data: treeNode.data,
            isStart,
            isEnd,
            motion,
            motionNodes: key === MOTION_KEY ? transitionRange : null,
            motionType,
            onMotionStart: onListChangeStart,
            onMotionEnd,
            treeNodeRequiredProps,
            onMouseMove: function onMouseMove() {
              onActiveChange(null);
            }
          })
        );
      }
    )
  );
});
NodeList.displayName = 'NodeList';
var NodeList_default = NodeList;

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/utils/conductUtil.js
import warning3 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = /* @__PURE__ */ new Set();
  halfCheckedKeys.forEach(function(key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {},
    disabled = _ref.disabled,
    disableCheckbox = _ref.disableCheckbox,
    checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = /* @__PURE__ */ new Set();
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children = entity.children,
        children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children
          .filter(function(childEntity) {
            return !syntheticGetCheckDisabled(childEntity.node);
          })
          .forEach(function(childEntity) {
            checkedKeys.add(childEntity.key);
          });
      }
    });
  }
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || /* @__PURE__ */ new Set();
    _entities.forEach(function(entity) {
      var parent = entity.parent,
        node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || [])
        .filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        })
        .forEach(function(_ref2) {
          var key = _ref2.key;
          var checked = checkedKeys.has(key);
          if (allChecked && !checked) {
            allChecked = false;
          }
          if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
            partialChecked = true;
          }
        });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children2 = entity.children,
        children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children
          .filter(function(childEntity) {
            return !syntheticGetCheckDisabled(childEntity.node);
          })
          .forEach(function(childEntity) {
            checkedKeys.delete(childEntity.key);
          });
      }
    });
  }
  halfCheckedKeys = /* @__PURE__ */ new Set();
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || /* @__PURE__ */ new Set();
    _entities2.forEach(function(entity) {
      var parent = entity.parent,
        node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || [])
        .filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        })
        .forEach(function(_ref3) {
          var key = _ref3.key;
          var checked = checkedKeys.has(key);
          if (allChecked && !checked) {
            allChecked = false;
          }
          if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
            partialChecked = true;
          }
        });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }
  var keys = new Set(
    keyList.filter(function(key) {
      var hasEntity = !!keyEntities[key];
      if (!hasEntity) {
        warningMissKeys.push(key);
      }
      return hasEntity;
    })
  );
  var levelEntities = /* @__PURE__ */ new Map();
  var maxLevel = 0;
  Object.keys(keyEntities).forEach(function(key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);
    if (!levelSet) {
      levelSet = /* @__PURE__ */ new Set();
      levelEntities.set(level, levelSet);
    }
    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  warning3(
    !warningMissKeys.length,
    'Tree missing follow keys: '.concat(
      warningMissKeys
        .slice(0, 100)
        .map(function(key) {
          return "'".concat(key, "'");
        })
        .join(', ')
    )
  );
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/DropIndicator.js
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition,
    dropLevelOffset = _ref.dropLevelOffset,
    indent = _ref.indent;
  var style = {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    height: 2
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 1:
      style.bottom = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 0:
      style.bottom = 0;
      style.left = indent;
      break;
  }
  return /* @__PURE__ */ React7.createElement('div', {
    style
  });
}

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/Tree.js
var MAX_RETRY_TIMES = 10;
var Tree = /* @__PURE__ */ (function(_React$Component) {
  _inherits2(Tree2, _React$Component);
  var _super = _createSuper2(Tree2);
  function Tree2() {
    var _this;
    _classCallCheck2(this, Tree2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _this.destroyed = false;
    _this.delayedDragEnterLogic = void 0;
    _this.loadingRetryTimes = {};
    _this.state = {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: fillFieldNames()
    };
    _this.dragStartMousePosition = null;
    _this.dragNode = void 0;
    _this.currentMouseOverDroppableNodeKey = null;
    _this.listRef = /* @__PURE__ */ React8.createRef();
    _this.onNodeDragStart = function(event, node) {
      var _this$state = _this.state,
        expandedKeys = _this$state.expandedKeys,
        keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = node.props.eventKey;
      _this.dragNode = node;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys, eventKey);
      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: getDragChildrenKeys(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });
      _this.setExpandedKeys(newExpandedKeys);
      window.addEventListener('dragend', _this.onWindowDragEnd);
      onDragStart === null || onDragStart === void 0
        ? void 0
        : onDragStart({
            event,
            node: convertNodePropsToEventData(node.props)
          });
    };
    _this.onNodeDragEnter = function(event, node) {
      var _this$state2 = _this.state,
        expandedKeys = _this$state2.expandedKeys,
        keyEntities = _this$state2.keyEntities,
        dragChildrenKeys = _this$state2.dragChildrenKeys,
        flattenNodes = _this$state2.flattenNodes,
        indent = _this$state2.indent;
      var _this$props = _this.props,
        onDragEnter = _this$props.onDragEnter,
        onExpand = _this$props.onExpand,
        allowDrop2 = _this$props.allowDrop,
        direction = _this$props.direction;
      var _node$props = node.props,
        pos = _node$props.pos,
        eventKey = _node$props.eventKey;
      var _assertThisInitialize = _assertThisInitialized2(_this),
        dragNode = _assertThisInitialize.dragNode;
      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        _this.resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(
          event,
          dragNode,
          node,
          indent,
          _this.dragStartMousePosition,
          allowDrop2,
          flattenNodes,
          keyEntities,
          expandedKeys,
          direction
        ),
        dropPosition = _calcDropPosition.dropPosition,
        dropLevelOffset = _calcDropPosition.dropLevelOffset,
        dropTargetKey = _calcDropPosition.dropTargetKey,
        dropContainerKey = _calcDropPosition.dropContainerKey,
        dropTargetPos = _calcDropPosition.dropTargetPos,
        dropAllowed = _calcDropPosition.dropAllowed,
        dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        _this.resetDragState();
        return;
      }
      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }
      Object.keys(_this.delayedDragEnterLogic).forEach(function(key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });
      if (dragNode.props.eventKey !== node.props.eventKey) {
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function() {
          if (_this.state.draggingNodeKey === null) return;
          var newExpandedKeys = _toConsumableArray3(expandedKeys);
          var entity = keyEntities[node.props.eventKey];
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys, node.props.eventKey);
          }
          if (!('expandedKeys' in _this.props)) {
            _this.setExpandedKeys(newExpandedKeys);
          }
          onExpand === null || onExpand === void 0
            ? void 0
            : onExpand(newExpandedKeys, {
                node: convertNodePropsToEventData(node.props),
                expanded: true,
                nativeEvent: event.nativeEvent
              });
        }, 800);
      }
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();
        return;
      }
      _this.setState({
        dragOverNodeKey,
        dropPosition,
        dropLevelOffset,
        dropTargetKey,
        dropContainerKey,
        dropTargetPos,
        dropAllowed
      });
      onDragEnter === null || onDragEnter === void 0
        ? void 0
        : onDragEnter({
            event,
            node: convertNodePropsToEventData(node.props),
            expandedKeys
          });
    };
    _this.onNodeDragOver = function(event, node) {
      var _this$state3 = _this.state,
        dragChildrenKeys = _this$state3.dragChildrenKeys,
        flattenNodes = _this$state3.flattenNodes,
        keyEntities = _this$state3.keyEntities,
        expandedKeys = _this$state3.expandedKeys,
        indent = _this$state3.indent;
      var _this$props2 = _this.props,
        onDragOver = _this$props2.onDragOver,
        allowDrop2 = _this$props2.allowDrop,
        direction = _this$props2.direction;
      var _assertThisInitialize2 = _assertThisInitialized2(_this),
        dragNode = _assertThisInitialize2.dragNode;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(
          event,
          dragNode,
          node,
          indent,
          _this.dragStartMousePosition,
          allowDrop2,
          flattenNodes,
          keyEntities,
          expandedKeys,
          direction
        ),
        dropPosition = _calcDropPosition2.dropPosition,
        dropLevelOffset = _calcDropPosition2.dropLevelOffset,
        dropTargetKey = _calcDropPosition2.dropTargetKey,
        dropContainerKey = _calcDropPosition2.dropContainerKey,
        dropAllowed = _calcDropPosition2.dropAllowed,
        dropTargetPos = _calcDropPosition2.dropTargetPos,
        dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        return;
      }
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (
          !(
            _this.state.dropPosition === null &&
            _this.state.dropLevelOffset === null &&
            _this.state.dropTargetKey === null &&
            _this.state.dropContainerKey === null &&
            _this.state.dropTargetPos === null &&
            _this.state.dropAllowed === false &&
            _this.state.dragOverNodeKey === null
          )
        ) {
          _this.resetDragState();
        }
      } else if (
        !(
          dropPosition === _this.state.dropPosition &&
          dropLevelOffset === _this.state.dropLevelOffset &&
          dropTargetKey === _this.state.dropTargetKey &&
          dropContainerKey === _this.state.dropContainerKey &&
          dropTargetPos === _this.state.dropTargetPos &&
          dropAllowed === _this.state.dropAllowed &&
          dragOverNodeKey === _this.state.dragOverNodeKey
        )
      ) {
        _this.setState({
          dropPosition,
          dropLevelOffset,
          dropTargetKey,
          dropContainerKey,
          dropTargetPos,
          dropAllowed,
          dragOverNodeKey
        });
      }
      onDragOver === null || onDragOver === void 0
        ? void 0
        : onDragOver({
            event,
            node: convertNodePropsToEventData(node.props)
          });
    };
    _this.onNodeDragLeave = function(event, node) {
      if (
        _this.currentMouseOverDroppableNodeKey === node.props.eventKey &&
        !event.currentTarget.contains(event.relatedTarget)
      ) {
        _this.resetDragState();
        _this.currentMouseOverDroppableNodeKey = null;
      }
      var onDragLeave = _this.props.onDragLeave;
      onDragLeave === null || onDragLeave === void 0
        ? void 0
        : onDragLeave({
            event,
            node: convertNodePropsToEventData(node.props)
          });
    };
    _this.onWindowDragEnd = function(event) {
      _this.onNodeDragEnd(event, null, true);
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };
    _this.onNodeDragEnd = function(event, node) {
      var onDragEnd = _this.props.onDragEnd;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      onDragEnd === null || onDragEnd === void 0
        ? void 0
        : onDragEnd({
            event,
            node: convertNodePropsToEventData(node.props)
          });
      _this.dragNode = null;
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };
    _this.onNodeDrop = function(event, node) {
      var _this$getActiveItem;
      var outsideTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var _this$state4 = _this.state,
        dragChildrenKeys = _this$state4.dragChildrenKeys,
        dropPosition = _this$state4.dropPosition,
        dropTargetKey = _this$state4.dropTargetKey,
        dropTargetPos = _this$state4.dropTargetPos,
        dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) return;
      var onDrop = _this.props.onDrop;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = _objectSpread3(
        _objectSpread3({}, getTreeNodeProps(dropTargetKey, _this.getTreeNodeRequiredProps())),
        {},
        {
          active:
            ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0
              ? void 0
              : _this$getActiveItem.key) === dropTargetKey,
          data: _this.state.keyEntities[dropTargetKey].node
        }
      );
      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      warning4(
        !dropToChild,
        "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue."
      );
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: _this.dragNode ? convertNodePropsToEventData(_this.dragNode.props) : null,
        dragNodesKeys: [_this.dragNode.props.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(dropResult);
      }
      _this.dragNode = null;
    };
    _this.cleanDragState = function() {
      var draggingNodeKey = _this.state.draggingNodeKey;
      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    };
    _this.triggerExpandActionExpand = function(e, treeNode) {
      var _this$state5 = _this.state,
        expandedKeys = _this$state5.expandedKeys,
        flattenNodes = _this$state5.flattenNodes;
      var expanded = treeNode.expanded,
        key = treeNode.key,
        isLeaf = treeNode.isLeaf;
      if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
        return;
      }
      var node = flattenNodes.filter(function(nodeItem) {
        return nodeItem.key === key;
      })[0];
      var eventNode = convertNodePropsToEventData(
        _objectSpread3(
          _objectSpread3({}, getTreeNodeProps(key, _this.getTreeNodeRequiredProps())),
          {},
          {
            data: node.data
          }
        )
      );
      _this.setExpandedKeys(expanded ? arrDel(expandedKeys, key) : arrAdd(expandedKeys, key));
      _this.onNodeExpand(e, eventNode);
    };
    _this.onNodeClick = function(e, treeNode) {
      var _this$props3 = _this.props,
        onClick = _this$props3.onClick,
        expandAction = _this$props3.expandAction;
      if (expandAction === 'click') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e, treeNode);
    };
    _this.onNodeDoubleClick = function(e, treeNode) {
      var _this$props4 = _this.props,
        onDoubleClick = _this$props4.onDoubleClick,
        expandAction = _this$props4.expandAction;
      if (expandAction === 'doubleClick') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onDoubleClick === null || onDoubleClick === void 0 ? void 0 : onDoubleClick(e, treeNode);
    };
    _this.onNodeSelect = function(e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state6 = _this.state,
        keyEntities = _this$state6.keyEntities,
        fieldNames = _this$state6.fieldNames;
      var _this$props5 = _this.props,
        onSelect = _this$props5.onSelect,
        multiple = _this$props5.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected;
      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = arrAdd(selectedKeys, key);
      }
      var selectedNodes = selectedKeys
        .map(function(selectedKey) {
          var entity = keyEntities[selectedKey];
          if (!entity) return null;
          return entity.node;
        })
        .filter(function(node) {
          return node;
        });
      _this.setUncontrolledState({
        selectedKeys
      });
      onSelect === null || onSelect === void 0
        ? void 0
        : onSelect(selectedKeys, {
            event: 'select',
            selected: targetSelected,
            node: treeNode,
            selectedNodes,
            nativeEvent: e.nativeEvent
          });
    };
    _this.onNodeCheck = function(e, treeNode, checked) {
      var _this$state7 = _this.state,
        keyEntities = _this$state7.keyEntities,
        oriCheckedKeys = _this$state7.checkedKeys,
        oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
      var _this$props6 = _this.props,
        checkStrictly = _this$props6.checkStrictly,
        onCheck = _this$props6.onCheck;
      var key = treeNode.key;
      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked,
        nativeEvent: e.nativeEvent
      };
      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, key) : arrDel(oriCheckedKeys, key);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys
          .map(function(checkedKey) {
            return keyEntities[checkedKey];
          })
          .filter(function(entity) {
            return entity;
          })
          .map(function(entity) {
            return entity.node;
          });
        _this.setUncontrolledState({
          checkedKeys
        });
      } else {
        var _conductCheck = conductCheck([].concat(_toConsumableArray3(oriCheckedKeys), [key]), true, keyEntities),
          _checkedKeys = _conductCheck.checkedKeys,
          _halfCheckedKeys = _conductCheck.halfCheckedKeys;
        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(
            Array.from(keySet),
            {
              checked: false,
              halfCheckedKeys: _halfCheckedKeys
            },
            keyEntities
          );
          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _checkedKeys;
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;
        _checkedKeys.forEach(function(checkedKey) {
          var entity = keyEntities[checkedKey];
          if (!entity) return;
          var node = entity.node,
            pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node,
            pos
          });
        });
        _this.setUncontrolledState(
          {
            checkedKeys: _checkedKeys
          },
          false,
          {
            halfCheckedKeys: _halfCheckedKeys
          }
        );
      }
      onCheck === null || onCheck === void 0 ? void 0 : onCheck(checkedObj, eventObj);
    };
    _this.onNodeLoad = function(treeNode) {
      var key = treeNode.key;
      var loadPromise = new Promise(function(resolve, reject) {
        _this.setState(function(_ref) {
          var _ref$loadedKeys = _ref.loadedKeys,
            loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys,
            _ref$loadingKeys = _ref.loadingKeys,
            loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props7 = _this.props,
            loadData = _this$props7.loadData,
            onLoad = _this$props7.onLoad;
          if (!loadData || loadedKeys.indexOf(key) !== -1 || loadingKeys.indexOf(key) !== -1) {
            return null;
          }
          var promise = loadData(treeNode);
          promise
            .then(function() {
              var currentLoadedKeys = _this.state.loadedKeys;
              var newLoadedKeys = arrAdd(currentLoadedKeys, key);
              onLoad === null || onLoad === void 0
                ? void 0
                : onLoad(newLoadedKeys, {
                    event: 'load',
                    node: treeNode
                  });
              _this.setUncontrolledState({
                loadedKeys: newLoadedKeys
              });
              _this.setState(function(prevState) {
                return {
                  loadingKeys: arrDel(prevState.loadingKeys, key)
                };
              });
              resolve();
            })
            .catch(function(e) {
              _this.setState(function(prevState) {
                return {
                  loadingKeys: arrDel(prevState.loadingKeys, key)
                };
              });
              _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
              if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
                var currentLoadedKeys = _this.state.loadedKeys;
                warning4(false, 'Retry for `loadData` many times but still failed. No more retry.');
                _this.setUncontrolledState({
                  loadedKeys: arrAdd(currentLoadedKeys, key)
                });
                resolve();
              }
              reject(e);
            });
          return {
            loadingKeys: arrAdd(loadingKeys, key)
          };
        });
      });
      loadPromise.catch(function() {});
      return loadPromise;
    };
    _this.onNodeMouseEnter = function(event, node) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter === null || onMouseEnter === void 0
        ? void 0
        : onMouseEnter({
            event,
            node
          });
    };
    _this.onNodeMouseLeave = function(event, node) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave === null || onMouseLeave === void 0
        ? void 0
        : onMouseLeave({
            event,
            node
          });
    };
    _this.onNodeContextMenu = function(event, node) {
      var onRightClick = _this.props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event,
          node
        });
      }
    };
    _this.onFocus = function() {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      onFocus === null || onFocus === void 0 ? void 0 : onFocus.apply(void 0, args);
    };
    _this.onBlur = function() {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      _this.onActiveChange(null);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      onBlur === null || onBlur === void 0 ? void 0 : onBlur.apply(void 0, args);
    };
    _this.getTreeNodeRequiredProps = function() {
      var _this$state8 = _this.state,
        expandedKeys = _this$state8.expandedKeys,
        selectedKeys = _this$state8.selectedKeys,
        loadedKeys = _this$state8.loadedKeys,
        loadingKeys = _this$state8.loadingKeys,
        checkedKeys = _this$state8.checkedKeys,
        halfCheckedKeys = _this$state8.halfCheckedKeys,
        dragOverNodeKey = _this$state8.dragOverNodeKey,
        dropPosition = _this$state8.dropPosition,
        keyEntities = _this$state8.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey,
        dropPosition,
        keyEntities
      };
    };
    _this.setExpandedKeys = function(expandedKeys) {
      var _this$state9 = _this.state,
        treeData = _this$state9.treeData,
        fieldNames = _this$state9.fieldNames;
      var flattenNodes = flattenTreeData(treeData, expandedKeys, fieldNames);
      _this.setUncontrolledState(
        {
          expandedKeys,
          flattenNodes
        },
        true
      );
    };
    _this.onNodeExpand = function(e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state10 = _this.state,
        listChanging = _this$state10.listChanging,
        fieldNames = _this$state10.fieldNames;
      var _this$props8 = _this.props,
        onExpand = _this$props8.onExpand,
        loadData = _this$props8.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key];
      if (listChanging) {
        return;
      }
      var index = expandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      warning4((expanded && index !== -1) || (!expanded && index === -1), 'Expand state not sync with index check');
      if (targetExpanded) {
        expandedKeys = arrAdd(expandedKeys, key);
      } else {
        expandedKeys = arrDel(expandedKeys, key);
      }
      _this.setExpandedKeys(expandedKeys);
      onExpand === null || onExpand === void 0
        ? void 0
        : onExpand(expandedKeys, {
            node: treeNode,
            expanded: targetExpanded,
            nativeEvent: e.nativeEvent
          });
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise
            .then(function() {
              var newFlattenTreeData = flattenTreeData(_this.state.treeData, expandedKeys, fieldNames);
              _this.setUncontrolledState({
                flattenNodes: newFlattenTreeData
              });
            })
            .catch(function() {
              var currentExpandedKeys = _this.state.expandedKeys;
              var expandedKeysToRestore = arrDel(currentExpandedKeys, key);
              _this.setExpandedKeys(expandedKeysToRestore);
            });
        }
      }
    };
    _this.onListChangeStart = function() {
      _this.setUncontrolledState({
        listChanging: true
      });
    };
    _this.onListChangeEnd = function() {
      setTimeout(function() {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    };
    _this.onActiveChange = function(newActiveKey) {
      var activeKey = _this.state.activeKey;
      var onActiveChange = _this.props.onActiveChange;
      if (activeKey === newActiveKey) {
        return;
      }
      _this.setState({
        activeKey: newActiveKey
      });
      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey
        });
      }
      onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(newActiveKey);
    };
    _this.getActiveItem = function() {
      var _this$state11 = _this.state,
        activeKey = _this$state11.activeKey,
        flattenNodes = _this$state11.flattenNodes;
      if (activeKey === null) {
        return null;
      }
      return (
        flattenNodes.find(function(_ref2) {
          var key = _ref2.key;
          return key === activeKey;
        }) || null
      );
    };
    _this.offsetActiveKey = function(offset) {
      var _this$state12 = _this.state,
        flattenNodes = _this$state12.flattenNodes,
        activeKey = _this$state12.activeKey;
      var index = flattenNodes.findIndex(function(_ref3) {
        var key2 = _ref3.key;
        return key2 === activeKey;
      });
      if (index === -1 && offset < 0) {
        index = flattenNodes.length;
      }
      index = (index + offset + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index];
      if (item) {
        var key = item.key;
        _this.onActiveChange(key);
      } else {
        _this.onActiveChange(null);
      }
    };
    _this.onKeyDown = function(event) {
      var _this$state13 = _this.state,
        activeKey = _this$state13.activeKey,
        expandedKeys = _this$state13.expandedKeys,
        checkedKeys = _this$state13.checkedKeys,
        fieldNames = _this$state13.fieldNames;
      var _this$props9 = _this.props,
        onKeyDown = _this$props9.onKeyDown,
        checkable = _this$props9.checkable,
        selectable = _this$props9.selectable;
      switch (event.which) {
        case KeyCode.UP: {
          _this.offsetActiveKey(-1);
          event.preventDefault();
          break;
        }
        case KeyCode.DOWN: {
          _this.offsetActiveKey(1);
          event.preventDefault();
          break;
        }
      }
      var activeItem = _this.getActiveItem();
      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
        var eventNode = convertNodePropsToEventData(
          _objectSpread3(
            _objectSpread3({}, getTreeNodeProps(activeKey, treeNodeRequiredProps)),
            {},
            {
              data: activeItem.data,
              active: true
            }
          )
        );
        switch (event.which) {
          case KeyCode.LEFT: {
            if (expandable && expandedKeys.includes(activeKey)) {
              _this.onNodeExpand({}, eventNode);
            } else if (activeItem.parent) {
              _this.onActiveChange(activeItem.parent.key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode.RIGHT: {
            if (expandable && !expandedKeys.includes(activeKey)) {
              _this.onNodeExpand({}, eventNode);
            } else if (activeItem.children && activeItem.children.length) {
              _this.onActiveChange(activeItem.children[0].key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode.ENTER:
          case KeyCode.SPACE: {
            if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
              _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
            } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
              _this.onNodeSelect({}, eventNode);
            }
            break;
          }
        }
      }
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    };
    _this.setUncontrolledState = function(state) {
      var atomic = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function(name) {
          if (name in _this.props) {
            allPassed = false;
            return;
          }
          needSync = true;
          newState[name] = state[name];
        });
        if (needSync && (!atomic || allPassed)) {
          _this.setState(_objectSpread3(_objectSpread3({}, newState), forceState));
        }
      }
    };
    _this.scrollTo = function(scroll) {
      _this.listRef.current.scrollTo(scroll);
    };
    return _this;
  }
  _createClass2(
    Tree2,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.destroyed = false;
          this.onUpdated();
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.onUpdated();
        }
      },
      {
        key: 'onUpdated',
        value: function onUpdated() {
          var activeKey = this.props.activeKey;
          if (activeKey !== void 0 && activeKey !== this.state.activeKey) {
            this.setState({
              activeKey
            });
            if (activeKey !== null) {
              this.scrollTo({
                key: activeKey
              });
            }
          }
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('dragend', this.onWindowDragEnd);
          this.destroyed = true;
        }
      },
      {
        key: 'resetDragState',
        value: function resetDragState() {
          this.setState({
            dragOverNodeKey: null,
            dropPosition: null,
            dropLevelOffset: null,
            dropTargetKey: null,
            dropContainerKey: null,
            dropTargetPos: null,
            dropAllowed: false
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          var _classNames;
          var _this$state14 = this.state,
            focused = _this$state14.focused,
            flattenNodes = _this$state14.flattenNodes,
            keyEntities = _this$state14.keyEntities,
            draggingNodeKey = _this$state14.draggingNodeKey,
            activeKey = _this$state14.activeKey,
            dropLevelOffset = _this$state14.dropLevelOffset,
            dropContainerKey = _this$state14.dropContainerKey,
            dropTargetKey = _this$state14.dropTargetKey,
            dropPosition = _this$state14.dropPosition,
            dragOverNodeKey = _this$state14.dragOverNodeKey,
            indent = _this$state14.indent;
          var _this$props10 = this.props,
            prefixCls = _this$props10.prefixCls,
            className = _this$props10.className,
            style = _this$props10.style,
            showLine = _this$props10.showLine,
            focusable = _this$props10.focusable,
            _this$props10$tabInde = _this$props10.tabIndex,
            tabIndex = _this$props10$tabInde === void 0 ? 0 : _this$props10$tabInde,
            selectable = _this$props10.selectable,
            showIcon = _this$props10.showIcon,
            icon = _this$props10.icon,
            switcherIcon = _this$props10.switcherIcon,
            draggable = _this$props10.draggable,
            checkable = _this$props10.checkable,
            checkStrictly = _this$props10.checkStrictly,
            disabled = _this$props10.disabled,
            motion = _this$props10.motion,
            loadData = _this$props10.loadData,
            filterTreeNode = _this$props10.filterTreeNode,
            height = _this$props10.height,
            itemHeight = _this$props10.itemHeight,
            virtual = _this$props10.virtual,
            titleRender = _this$props10.titleRender,
            dropIndicatorRender = _this$props10.dropIndicatorRender,
            onContextMenu = _this$props10.onContextMenu,
            onScroll = _this$props10.onScroll,
            direction = _this$props10.direction,
            rootClassName = _this$props10.rootClassName,
            rootStyle = _this$props10.rootStyle;
          var domProps = pickAttrs2(this.props, {
            aria: true,
            data: true
          });
          var draggableConfig;
          if (draggable) {
            if (_typeof3(draggable) === 'object') {
              draggableConfig = draggable;
            } else if (typeof draggable === 'function') {
              draggableConfig = {
                nodeDraggable: draggable
              };
            } else {
              draggableConfig = {};
            }
          }
          return /* @__PURE__ */ React8.createElement(
            TreeContext.Provider,
            {
              value: {
                prefixCls,
                selectable,
                showIcon,
                icon,
                switcherIcon,
                draggable: draggableConfig,
                draggingNodeKey,
                checkable,
                checkStrictly,
                disabled,
                keyEntities,
                dropLevelOffset,
                dropContainerKey,
                dropTargetKey,
                dropPosition,
                dragOverNodeKey,
                indent,
                direction,
                dropIndicatorRender,
                loadData,
                filterTreeNode,
                titleRender,
                onNodeClick: this.onNodeClick,
                onNodeDoubleClick: this.onNodeDoubleClick,
                onNodeExpand: this.onNodeExpand,
                onNodeSelect: this.onNodeSelect,
                onNodeCheck: this.onNodeCheck,
                onNodeLoad: this.onNodeLoad,
                onNodeMouseEnter: this.onNodeMouseEnter,
                onNodeMouseLeave: this.onNodeMouseLeave,
                onNodeContextMenu: this.onNodeContextMenu,
                onNodeDragStart: this.onNodeDragStart,
                onNodeDragEnter: this.onNodeDragEnter,
                onNodeDragOver: this.onNodeDragOver,
                onNodeDragLeave: this.onNodeDragLeave,
                onNodeDragEnd: this.onNodeDragEnd,
                onNodeDrop: this.onNodeDrop
              }
            },
            /* @__PURE__ */ React8.createElement(
              'div',
              {
                role: 'tree',
                className: classNames4(
                  prefixCls,
                  className,
                  rootClassName,
                  ((_classNames = {}),
                  _defineProperty3(_classNames, ''.concat(prefixCls, '-show-line'), showLine),
                  _defineProperty3(_classNames, ''.concat(prefixCls, '-focused'), focused),
                  _defineProperty3(_classNames, ''.concat(prefixCls, '-active-focused'), activeKey !== null),
                  _classNames)
                ),
                style: rootStyle
              },
              /* @__PURE__ */ React8.createElement(
                NodeList_default,
                _extends5(
                  {
                    ref: this.listRef,
                    prefixCls,
                    style,
                    data: flattenNodes,
                    disabled,
                    selectable,
                    checkable: !!checkable,
                    motion,
                    dragging: draggingNodeKey !== null,
                    height,
                    itemHeight,
                    virtual,
                    focusable,
                    focused,
                    tabIndex,
                    activeItem: this.getActiveItem(),
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyDown: this.onKeyDown,
                    onActiveChange: this.onActiveChange,
                    onListChangeStart: this.onListChangeStart,
                    onListChangeEnd: this.onListChangeEnd,
                    onContextMenu,
                    onScroll
                  },
                  this.getTreeNodeRequiredProps(),
                  domProps
                )
              )
            )
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, prevState) {
          var prevProps = prevState.prevProps;
          var newState = {
            prevProps: props
          };
          function needSync(name) {
            return (!prevProps && name in props) || (prevProps && prevProps[name] !== props[name]);
          }
          var treeData;
          var fieldNames = prevState.fieldNames;
          if (needSync('fieldNames')) {
            fieldNames = fillFieldNames(props.fieldNames);
            newState.fieldNames = fieldNames;
          }
          if (needSync('treeData')) {
            treeData = props.treeData;
          } else if (needSync('children')) {
            warning4(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
            treeData = convertTreeToData(props.children);
          }
          if (treeData) {
            newState.treeData = treeData;
            var entitiesMap = convertDataToEntities(treeData, {
              fieldNames
            });
            newState.keyEntities = _objectSpread3(
              _defineProperty3({}, MOTION_KEY, MotionEntity),
              entitiesMap.keyEntities
            );
            if (true) {
              warningWithoutKey(treeData, fieldNames);
            }
          }
          var keyEntities = newState.keyEntities || prevState.keyEntities;
          if (needSync('expandedKeys') || (prevProps && needSync('autoExpandParent'))) {
            newState.expandedKeys =
              props.autoExpandParent || (!prevProps && props.defaultExpandParent)
                ? conductExpandParent(props.expandedKeys, keyEntities)
                : props.expandedKeys;
          } else if (!prevProps && props.defaultExpandAll) {
            var cloneKeyEntities = _objectSpread3({}, keyEntities);
            delete cloneKeyEntities[MOTION_KEY];
            newState.expandedKeys = Object.keys(cloneKeyEntities).map(function(key) {
              return cloneKeyEntities[key].key;
            });
          } else if (!prevProps && props.defaultExpandedKeys) {
            newState.expandedKeys =
              props.autoExpandParent || props.defaultExpandParent
                ? conductExpandParent(props.defaultExpandedKeys, keyEntities)
                : props.defaultExpandedKeys;
          }
          if (!newState.expandedKeys) {
            delete newState.expandedKeys;
          }
          if (treeData || newState.expandedKeys) {
            var flattenNodes = flattenTreeData(
              treeData || prevState.treeData,
              newState.expandedKeys || prevState.expandedKeys,
              fieldNames
            );
            newState.flattenNodes = flattenNodes;
          }
          if (props.selectable) {
            if (needSync('selectedKeys')) {
              newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
            } else if (!prevProps && props.defaultSelectedKeys) {
              newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
            }
          }
          if (props.checkable) {
            var checkedKeyEntity;
            if (needSync('checkedKeys')) {
              checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
            } else if (!prevProps && props.defaultCheckedKeys) {
              checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
            } else if (treeData) {
              checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
                checkedKeys: prevState.checkedKeys,
                halfCheckedKeys: prevState.halfCheckedKeys
              };
            }
            if (checkedKeyEntity) {
              var _checkedKeyEntity = checkedKeyEntity,
                _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
                checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
                _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
                halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
              if (!props.checkStrictly) {
                var conductKeys = conductCheck(checkedKeys, true, keyEntities);
                checkedKeys = conductKeys.checkedKeys;
                halfCheckedKeys = conductKeys.halfCheckedKeys;
              }
              newState.checkedKeys = checkedKeys;
              newState.halfCheckedKeys = halfCheckedKeys;
            }
          }
          if (needSync('loadedKeys')) {
            newState.loadedKeys = props.loadedKeys;
          }
          return newState;
        }
      }
    ]
  );
  return Tree2;
})(React8.Component);
Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: DropIndicator,
  allowDrop: function allowDrop() {
    return true;
  },
  expandAction: false
};
Tree.TreeNode = TreeNode_default;
var Tree_default = Tree;

// esm-build-bbd0cb2ede2126d8353a5b19dbc4d5180b26af20-4ea112e4/node_modules/rc-tree/es/index.js
var es_default = Tree_default;
export { TreeNode_default as TreeNode, es_default as default };
