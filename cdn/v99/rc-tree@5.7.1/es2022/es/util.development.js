/* esm.sh - esbuild bundle(rc-tree@5.7.1/es/util) es2022 development */
// esm-build-d307eca056d046a687266974bde00830d5e9a446-9ed8b58b/node_modules/rc-tree/es/util.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import TreeNode from '/cdn/v99/rc-tree@5.7.1/es2022/es/TreeNode.development.js';
var _excluded = ['children'];
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
  allowDrop,
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
    allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: -1
    }) &&
    abstractDropNodeEntity.key === targetNode.props.eventKey
  ) {
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
    if (
      allowDrop({
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
        allowDrop({
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
        allowDrop({
          dragNode: abstractDragDataNode,
          dropNode: abstractDropDataNode,
          dropPosition: 0
        })
      ) {
        dropPosition = 0;
      } else if (
        allowDrop({
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
      allowDrop({
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
var internalProcessProps = function internalProcessProps2(props) {
  return props;
};
function convertDataToTree(treeData, processor) {
  if (!treeData) return [];
  var _ref2 = processor || {},
    _ref2$processProps = _ref2.processProps,
    processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;
  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function(_ref3) {
    var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded);
    var childrenNodes = convertDataToTree(children, processor);
    return /* @__PURE__ */ React.createElement(
      TreeNode,
      _extends(
        {
          key: props.key
        },
        processProps(props)
      ),
      childrenNodes
    );
  });
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
  } else if (_typeof(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || void 0,
      halfCheckedKeys: keys.halfChecked || void 0
    };
  } else {
    warning(false, '`checkedKeys` is not an array or an object');
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
  return _toConsumableArray(expandedKeys);
}
export {
  arrAdd,
  arrDel,
  calcDropPosition,
  calcSelectedKeys,
  conductExpandParent,
  convertDataToTree,
  getDragChildrenKeys,
  getPosition,
  isFirstChild,
  isLastChild,
  isTreeNode,
  parseCheckedKeys,
  posToArr
};
