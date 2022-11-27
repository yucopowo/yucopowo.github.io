/* esm.sh - esbuild bundle(rc-tree@5.7.1/es/utils/treeUtil) es2022 development */
// esm-build-d307eca056d046a687266974bde00830d5e9a446-9ed8b58b/node_modules/rc-tree/es/utils/treeUtil.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import omit from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import { getPosition, isTreeNode } from '/cdn/v99/rc-tree@5.7.1/es2022/es/util.development.js';
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
export {
  convertDataToEntities,
  convertNodePropsToEventData,
  convertTreeToData,
  fillFieldNames,
  flattenTreeData,
  getKey,
  getTreeNodeProps,
  traverseDataNodes,
  warningWithoutKey
};
