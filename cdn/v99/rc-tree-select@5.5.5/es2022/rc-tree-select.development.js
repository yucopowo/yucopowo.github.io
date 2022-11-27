/* esm.sh - esbuild bundle(rc-tree-select@5.5.5) es2022 development */
// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/TreeSelect.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { BaseSelect } from '/cdn/v99/rc-select@14.1.14/es2022/rc-select.development.js';
import { conductCheck as conductCheck2 } from '/cdn/v99/rc-tree@5.7.1/es2022/es/utils/conductUtil.development.js';
import useId from '/cdn/v99/rc-select@14.1.14/es2022/es/hooks/useId.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/OptionList.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import useMemo2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMemo.development.js';
import { useBaseProps } from '/cdn/v99/rc-select@14.1.14/es2022/rc-select.development.js';
import Tree from '/cdn/v99/rc-tree@5.7.1/es2022/rc-tree.development.js';

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/LegacyContext.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var LegacySelectContext = /* @__PURE__ */ React.createContext(null);
var LegacyContext_default = LegacySelectContext;

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/TreeSelectContext.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var TreeSelectContext = /* @__PURE__ */ React2.createContext(null);
var TreeSelectContext_default = TreeSelectContext;

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/utils/valueUtil.js
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    children = _ref.children;
  var mergedValue = value || 'value';
  return {
    _title: label ? [label] : ['title', 'label'],
    value: mergedValue,
    key: mergedValue,
    children: children || 'children'
  };
}
function isCheckDisabled(node) {
  return !node || node.disabled || node.disableCheckbox || node.checkable === false;
}
function getAllKeys(treeData, fieldNames) {
  var keys = [];
  function dig(list) {
    list.forEach(function(item) {
      var children = item[fieldNames.children];
      if (children) {
        keys.push(item[fieldNames.value]);
        dig(children);
      }
    });
  }
  dig(treeData);
  return keys;
}
function isNil(val) {
  return val === null || val === void 0;
}

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/OptionList.js
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
var OptionList = function OptionList2(_, ref) {
  var _useBaseProps = useBaseProps(),
    prefixCls = _useBaseProps.prefixCls,
    multiple = _useBaseProps.multiple,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    open = _useBaseProps.open,
    notFoundContent = _useBaseProps.notFoundContent;
  var _React$useContext = React3.useContext(TreeSelectContext_default),
    virtual = _React$useContext.virtual,
    listHeight = _React$useContext.listHeight,
    listItemHeight = _React$useContext.listItemHeight,
    treeData = _React$useContext.treeData,
    fieldNames = _React$useContext.fieldNames,
    onSelect = _React$useContext.onSelect,
    dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth,
    treeExpandAction = _React$useContext.treeExpandAction;
  var _React$useContext2 = React3.useContext(LegacyContext_default),
    checkable = _React$useContext2.checkable,
    checkedKeys = _React$useContext2.checkedKeys,
    halfCheckedKeys = _React$useContext2.halfCheckedKeys,
    treeExpandedKeys = _React$useContext2.treeExpandedKeys,
    treeDefaultExpandAll = _React$useContext2.treeDefaultExpandAll,
    treeDefaultExpandedKeys = _React$useContext2.treeDefaultExpandedKeys,
    onTreeExpand = _React$useContext2.onTreeExpand,
    treeIcon = _React$useContext2.treeIcon,
    showTreeIcon = _React$useContext2.showTreeIcon,
    switcherIcon = _React$useContext2.switcherIcon,
    treeLine = _React$useContext2.treeLine,
    treeNodeFilterProp = _React$useContext2.treeNodeFilterProp,
    loadData = _React$useContext2.loadData,
    treeLoadedKeys = _React$useContext2.treeLoadedKeys,
    treeMotion = _React$useContext2.treeMotion,
    onTreeLoad = _React$useContext2.onTreeLoad,
    keyEntities = _React$useContext2.keyEntities;
  var treeRef = React3.useRef();
  var memoTreeData = useMemo2(
    function() {
      return treeData;
    },
    [open, treeData],
    function(prev, next) {
      return next[0] && prev[1] !== next[1];
    }
  );
  var mergedCheckedKeys = React3.useMemo(
    function() {
      if (!checkable) {
        return null;
      }
      return {
        checked: checkedKeys,
        halfChecked: halfCheckedKeys
      };
    },
    [checkable, checkedKeys, halfCheckedKeys]
  );
  React3.useEffect(
    function() {
      if (open && !multiple && checkedKeys.length) {
        var _treeRef$current;
        (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0
          ? void 0
          : _treeRef$current.scrollTo({
              key: checkedKeys[0]
            });
      }
    },
    [open]
  );
  var lowerSearchValue = String(searchValue).toLowerCase();
  var filterTreeNode = function filterTreeNode2(treeNode) {
    if (!lowerSearchValue) {
      return false;
    }
    return String(treeNode[treeNodeFilterProp])
      .toLowerCase()
      .includes(lowerSearchValue);
  };
  var _React$useState = React3.useState(treeDefaultExpandedKeys),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expandedKeys = _React$useState2[0],
    setExpandedKeys = _React$useState2[1];
  var _React$useState3 = React3.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    searchExpandedKeys = _React$useState4[0],
    setSearchExpandedKeys = _React$useState4[1];
  var mergedExpandedKeys = React3.useMemo(
    function() {
      if (treeExpandedKeys) {
        return _toConsumableArray(treeExpandedKeys);
      }
      return searchValue ? searchExpandedKeys : expandedKeys;
    },
    [expandedKeys, searchExpandedKeys, treeExpandedKeys, searchValue]
  );
  React3.useEffect(
    function() {
      if (searchValue) {
        setSearchExpandedKeys(getAllKeys(treeData, fieldNames));
      }
    },
    [searchValue]
  );
  var onInternalExpand = function onInternalExpand2(keys) {
    setExpandedKeys(keys);
    setSearchExpandedKeys(keys);
    if (onTreeExpand) {
      onTreeExpand(keys);
    }
  };
  var onListMouseDown = function onListMouseDown2(event) {
    event.preventDefault();
  };
  var onInternalSelect = function onInternalSelect2(__, info) {
    var node = info.node;
    if (checkable && isCheckDisabled(node)) {
      return;
    }
    onSelect(node.key, {
      selected: !checkedKeys.includes(node.key)
    });
    if (!multiple) {
      toggleOpen(false);
    }
  };
  var _React$useState5 = React3.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    activeKey = _React$useState6[0],
    setActiveKey = _React$useState6[1];
  var activeEntity = keyEntities[activeKey];
  React3.useImperativeHandle(ref, function() {
    var _treeRef$current2;
    return {
      scrollTo:
        (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0
          ? void 0
          : _treeRef$current2.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var _treeRef$current3;
        var which = event.which;
        switch (which) {
          case KeyCode.UP:
          case KeyCode.DOWN:
          case KeyCode.LEFT:
          case KeyCode.RIGHT:
            (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0
              ? void 0
              : _treeRef$current3.onKeyDown(event);
            break;
          case KeyCode.ENTER: {
            if (activeEntity) {
              var _ref = (activeEntity === null || activeEntity === void 0 ? void 0 : activeEntity.node) || {},
                selectable = _ref.selectable,
                value = _ref.value;
              if (selectable !== false) {
                onInternalSelect(null, {
                  node: {
                    key: activeKey
                  },
                  selected: !checkedKeys.includes(value)
                });
              }
            }
            break;
          }
          case KeyCode.ESC: {
            toggleOpen(false);
          }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  });
  if (memoTreeData.length === 0) {
    return /* @__PURE__ */ React3.createElement(
      'div',
      {
        role: 'listbox',
        className: ''.concat(prefixCls, '-empty'),
        onMouseDown: onListMouseDown
      },
      notFoundContent
    );
  }
  var treeProps = {
    fieldNames
  };
  if (treeLoadedKeys) {
    treeProps.loadedKeys = treeLoadedKeys;
  }
  if (mergedExpandedKeys) {
    treeProps.expandedKeys = mergedExpandedKeys;
  }
  return /* @__PURE__ */ React3.createElement(
    'div',
    {
      onMouseDown: onListMouseDown
    },
    activeEntity &&
      open &&
      /* @__PURE__ */ React3.createElement(
        'span',
        {
          style: HIDDEN_STYLE,
          'aria-live': 'assertive'
        },
        activeEntity.node.value
      ),
    /* @__PURE__ */ React3.createElement(
      Tree,
      _extends(
        {
          ref: treeRef,
          focusable: false,
          prefixCls: ''.concat(prefixCls, '-tree'),
          treeData: memoTreeData,
          height: listHeight,
          itemHeight: listItemHeight,
          virtual: virtual !== false && dropdownMatchSelectWidth !== false,
          multiple,
          icon: treeIcon,
          showIcon: showTreeIcon,
          switcherIcon,
          showLine: treeLine,
          loadData: searchValue ? null : loadData,
          motion: treeMotion,
          activeKey,
          checkable,
          checkStrictly: true,
          checkedKeys: mergedCheckedKeys,
          selectedKeys: !checkable ? checkedKeys : [],
          defaultExpandAll: treeDefaultExpandAll
        },
        treeProps,
        {
          onActiveChange: setActiveKey,
          onSelect: onInternalSelect,
          onCheck: onInternalSelect,
          onExpand: onInternalExpand,
          onLoad: onTreeLoad,
          filterTreeNode,
          expandAction: treeExpandAction
        }
      )
    )
  );
};
var RefOptionList = /* @__PURE__ */ React3.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
var OptionList_default = RefOptionList;

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/TreeNode.js
var TreeNode = function TreeNode2() {
  return null;
};
var TreeNode_default = TreeNode;

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/utils/strategyUtil.js
var SHOW_ALL = 'SHOW_ALL';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';
function formatStrategyValues(values, strategy, keyEntities, fieldNames) {
  var valueSet = new Set(values);
  if (strategy === SHOW_CHILD) {
    return values.filter(function(key) {
      var entity = keyEntities[key];
      if (
        entity &&
        entity.children &&
        entity.children.some(function(_ref) {
          var node = _ref.node;
          return valueSet.has(node[fieldNames.value]);
        }) &&
        entity.children.every(function(_ref2) {
          var node = _ref2.node;
          return isCheckDisabled(node) || valueSet.has(node[fieldNames.value]);
        })
      ) {
        return false;
      }
      return true;
    });
  }
  if (strategy === SHOW_PARENT) {
    return values.filter(function(key) {
      var entity = keyEntities[key];
      var parent = entity ? entity.parent : null;
      if (parent && !isCheckDisabled(parent.node) && valueSet.has(parent.key)) {
        return false;
      }
      return true;
    });
  }
  return values;
}

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useTreeData.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/utils/legacyUtil.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import toArray2 from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var _excluded = ['children', 'value'];
function convertChildrenToData(nodes) {
  return toArray2(nodes)
    .map(function(node) {
      if (!(/* @__PURE__ */ React4.isValidElement(node)) || !node.type) {
        return null;
      }
      var _ref = node,
        key = _ref.key,
        _ref$props = _ref.props,
        children = _ref$props.children,
        value = _ref$props.value,
        restProps = _objectWithoutProperties(_ref$props, _excluded);
      var data = _objectSpread(
        {
          key,
          value
        },
        restProps
      );
      var childData = convertChildrenToData(children);
      if (childData.length) {
        data.children = childData;
      }
      return data;
    })
    .filter(function(data) {
      return data;
    });
}
function fillLegacyProps(dataNode) {
  if (!dataNode) {
    return dataNode;
  }
  var cloneNode = _objectSpread({}, dataNode);
  if (!('props' in cloneNode)) {
    Object.defineProperty(cloneNode, 'props', {
      get: function get() {
        warning(
          false,
          'New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access.'
        );
        return cloneNode;
      }
    });
  }
  return cloneNode;
}
function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
  var triggerNode = null;
  var nodeList = null;
  function generateMap() {
    function dig(list) {
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '0';
      var parentIncluded = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return list
        .map(function(option, index) {
          var pos = ''.concat(level, '-').concat(index);
          var value = option[fieldNames.value];
          var included = checkedValues.includes(value);
          var children = dig(option[fieldNames.children] || [], pos, included);
          var node = /* @__PURE__ */ React4.createElement(
            TreeNode_default,
            option,
            children.map(function(child) {
              return child.node;
            })
          );
          if (triggerValue === value) {
            triggerNode = node;
          }
          if (included) {
            var checkedNode = {
              pos,
              node,
              children
            };
            if (!parentIncluded) {
              nodeList.push(checkedNode);
            }
            return checkedNode;
          }
          return null;
        })
        .filter(function(node) {
          return node;
        });
    }
    if (!nodeList) {
      nodeList = [];
      dig(treeData);
      nodeList.sort(function(_ref2, _ref3) {
        var val1 = _ref2.node.props.value;
        var val2 = _ref3.node.props.value;
        var index1 = checkedValues.indexOf(val1);
        var index2 = checkedValues.indexOf(val2);
        return index1 - index2;
      });
    }
  }
  Object.defineProperty(extra, 'triggerNode', {
    get: function get() {
      warning(false, '`triggerNode` is deprecated. Please consider decoupling data with node.');
      generateMap();
      return triggerNode;
    }
  });
  Object.defineProperty(extra, 'allCheckedNodes', {
    get: function get() {
      warning(false, '`allCheckedNodes` is deprecated. Please consider decoupling data with node.');
      generateMap();
      if (showPosition) {
        return nodeList;
      }
      return nodeList.map(function(_ref4) {
        var node = _ref4.node;
        return node;
      });
    }
  });
}

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useTreeData.js
function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
    pId = _ref.pId,
    rootPId = _ref.rootPId;
  var keyNodes = {};
  var rootNodeList = [];
  var nodeList = treeData.map(function(node) {
    var clone = _objectSpread2({}, node);
    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  });
  nodeList.forEach(function(node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey];
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }
    if (parentKey === rootPId || (!parent && rootPId === null)) {
      rootNodeList.push(node);
    }
  });
  return rootNodeList;
}
function useTreeData(treeData, children, simpleMode) {
  return React5.useMemo(
    function() {
      if (treeData) {
        return simpleMode
          ? parseSimpleTreeData(
              treeData,
              _objectSpread2(
                {
                  id: 'id',
                  pId: 'pId',
                  rootPId: null
                },
                simpleMode !== true ? simpleMode : {}
              )
            )
          : treeData;
      }
      return convertChildrenToData(children);
    },
    [children, simpleMode, treeData]
  );
}

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useCache.js
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useCache_default = function(values) {
  var cacheRef = React6.useRef({
    valueLabels: /* @__PURE__ */ new Map()
  });
  return React6.useMemo(
    function() {
      var valueLabels = cacheRef.current.valueLabels;
      var valueLabelsCache = /* @__PURE__ */ new Map();
      var filledValues = values.map(function(item) {
        var _item$label;
        var value = item.value;
        var mergedLabel =
          (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : valueLabels.get(value);
        valueLabelsCache.set(value, mergedLabel);
        return _objectSpread3(
          _objectSpread3({}, item),
          {},
          {
            label: mergedLabel
          }
        );
      });
      cacheRef.current.valueLabels = valueLabelsCache;
      return [filledValues];
    },
    [values]
  );
};

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useRefFunc.js
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRefFunc(callback) {
  var funcRef = React7.useRef();
  funcRef.current = callback;
  var cacheFn = React7.useCallback(function() {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useDataEntities.js
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { convertDataToEntities } from '/cdn/v99/rc-tree@5.7.1/es2022/es/utils/treeUtil.development.js';
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var useDataEntities_default = function(treeData, fieldNames) {
  return React8.useMemo(
    function() {
      var collection = convertDataToEntities(treeData, {
        fieldNames,
        initWrapper: function initWrapper(wrapper) {
          return _objectSpread4(
            _objectSpread4({}, wrapper),
            {},
            {
              valueEntities: /* @__PURE__ */ new Map()
            }
          );
        },
        processEntity: function processEntity(entity, wrapper) {
          var val = entity.node[fieldNames.value];
          if (true) {
            var key = entity.node.key;
            warning2(!isNil(val), 'TreeNode `value` is invalidate: undefined');
            warning2(!wrapper.valueEntities.has(val), 'Same `value` exist in the tree: '.concat(val));
            warning2(
              !key || String(key) === String(val),
              '`key` or `value` with TreeNode must be the same or you can remove one of them. key: '
                .concat(key, ', value: ')
                .concat(val, '.')
            );
          }
          wrapper.valueEntities.set(val, entity);
        }
      });
      return collection;
    },
    [treeData, fieldNames]
  );
};

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useCheckedKeys.js
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { conductCheck } from '/cdn/v99/rc-tree@5.7.1/es2022/es/utils/conductUtil.development.js';
var useCheckedKeys_default = function(rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities) {
  return React9.useMemo(
    function() {
      var checkedKeys = rawLabeledValues.map(function(_ref) {
        var value = _ref.value;
        return value;
      });
      var halfCheckedKeys = rawHalfCheckedValues.map(function(_ref2) {
        var value = _ref2.value;
        return value;
      });
      var missingValues = checkedKeys.filter(function(key) {
        return !keyEntities[key];
      });
      if (treeConduction) {
        var _conductCheck = conductCheck(checkedKeys, true, keyEntities);
        checkedKeys = _conductCheck.checkedKeys;
        halfCheckedKeys = _conductCheck.halfCheckedKeys;
      }
      return [
        Array.from(new Set([].concat(_toConsumableArray2(missingValues), _toConsumableArray2(checkedKeys)))),
        halfCheckedKeys
      ];
    },
    [rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities]
  );
};

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/hooks/useFilterTreeData.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useFilterTreeData_default = function(treeData, searchValue, _ref) {
  var treeNodeFilterProp = _ref.treeNodeFilterProp,
    filterTreeNode = _ref.filterTreeNode,
    fieldNames = _ref.fieldNames;
  var fieldChildren = fieldNames.children;
  return React10.useMemo(
    function() {
      if (!searchValue || filterTreeNode === false) {
        return treeData;
      }
      var filterOptionFunc;
      if (typeof filterTreeNode === 'function') {
        filterOptionFunc = filterTreeNode;
      } else {
        var upperStr = searchValue.toUpperCase();
        filterOptionFunc = function filterOptionFunc2(_, dataNode) {
          var value = dataNode[treeNodeFilterProp];
          return String(value)
            .toUpperCase()
            .includes(upperStr);
        };
      }
      function dig(list) {
        var keepAll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        return list
          .map(function(dataNode) {
            var children = dataNode[fieldChildren];
            var match = keepAll || filterOptionFunc(searchValue, fillLegacyProps(dataNode));
            var childList = dig(children || [], match);
            if (match || childList.length) {
              return _objectSpread5(
                _objectSpread5({}, dataNode),
                {},
                _defineProperty(
                  {
                    isLeaf: void 0
                  },
                  fieldChildren,
                  childList
                )
              );
            }
            return null;
          })
          .filter(function(node) {
            return node;
          });
      }
      return dig(treeData);
    },
    [treeData, searchValue, fieldChildren, treeNodeFilterProp, filterTreeNode]
  );
};

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/utils/warningPropsUtil.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import warning3 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function warningProps(props) {
  var searchPlaceholder = props.searchPlaceholder,
    treeCheckStrictly = props.treeCheckStrictly,
    treeCheckable = props.treeCheckable,
    labelInValue = props.labelInValue,
    value = props.value,
    multiple = props.multiple;
  warning3(!searchPlaceholder, '`searchPlaceholder` has been removed.');
  if (treeCheckStrictly && labelInValue === false) {
    warning3(false, '`treeCheckStrictly` will force set `labelInValue` to `true`.');
  }
  if (labelInValue || treeCheckStrictly) {
    warning3(
      toArray(value).every(function(val) {
        return val && _typeof(val) === 'object' && 'value' in val;
      }),
      'Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.'
    );
  }
  if (treeCheckStrictly || multiple || treeCheckable) {
    warning3(!value || Array.isArray(value), '`value` should be an array when `TreeSelect` is checkable or multiple.');
  } else {
    warning3(!Array.isArray(value), '`value` should not be array when `TreeSelect` is single mode.');
  }
}
var warningPropsUtil_default = warningProps;

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/TreeSelect.js
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var _excluded2 = [
  'id',
  'prefixCls',
  'value',
  'defaultValue',
  'onChange',
  'onSelect',
  'onDeselect',
  'searchValue',
  'inputValue',
  'onSearch',
  'autoClearSearchValue',
  'filterTreeNode',
  'treeNodeFilterProp',
  'showCheckedStrategy',
  'treeNodeLabelProp',
  'multiple',
  'treeCheckable',
  'treeCheckStrictly',
  'labelInValue',
  'fieldNames',
  'treeDataSimpleMode',
  'treeData',
  'children',
  'loadData',
  'treeLoadedKeys',
  'onTreeLoad',
  'treeDefaultExpandAll',
  'treeExpandedKeys',
  'treeDefaultExpandedKeys',
  'onTreeExpand',
  'treeExpandAction',
  'virtual',
  'listHeight',
  'listItemHeight',
  'onDropdownVisibleChange',
  'dropdownMatchSelectWidth',
  'treeLine',
  'treeIcon',
  'showTreeIcon',
  'switcherIcon',
  'treeMotion'
];
function isRawValue(value) {
  return !value || _typeof2(value) !== 'object';
}
var TreeSelect = /* @__PURE__ */ React11.forwardRef(function(props, ref) {
  var id = props.id,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tree-select' : _props$prefixCls,
    value = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    searchValue = props.searchValue,
    inputValue = props.inputValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    filterTreeNode = props.filterTreeNode,
    _props$treeNodeFilter = props.treeNodeFilterProp,
    treeNodeFilterProp = _props$treeNodeFilter === void 0 ? 'value' : _props$treeNodeFilter,
    _props$showCheckedStr = props.showCheckedStrategy,
    showCheckedStrategy = _props$showCheckedStr === void 0 ? SHOW_CHILD : _props$showCheckedStr,
    treeNodeLabelProp = props.treeNodeLabelProp,
    multiple = props.multiple,
    treeCheckable = props.treeCheckable,
    treeCheckStrictly = props.treeCheckStrictly,
    labelInValue = props.labelInValue,
    fieldNames = props.fieldNames,
    treeDataSimpleMode = props.treeDataSimpleMode,
    treeData = props.treeData,
    children = props.children,
    loadData = props.loadData,
    treeLoadedKeys = props.treeLoadedKeys,
    onTreeLoad = props.onTreeLoad,
    treeDefaultExpandAll = props.treeDefaultExpandAll,
    treeExpandedKeys = props.treeExpandedKeys,
    treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
    onTreeExpand = props.onTreeExpand,
    treeExpandAction = props.treeExpandAction,
    virtual = props.virtual,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    treeLine = props.treeLine,
    treeIcon = props.treeIcon,
    showTreeIcon = props.showTreeIcon,
    switcherIcon = props.switcherIcon,
    treeMotion = props.treeMotion,
    restProps = _objectWithoutProperties2(props, _excluded2);
  var mergedId = useId(id);
  var treeConduction = treeCheckable && !treeCheckStrictly;
  var mergedCheckable = treeCheckable || treeCheckStrictly;
  var mergedLabelInValue = treeCheckStrictly || labelInValue;
  var mergedMultiple = mergedCheckable || multiple;
  var _useMergedState = useMergedState(defaultValue, {
      value
    }),
    _useMergedState2 = _slicedToArray2(_useMergedState, 2),
    internalValue = _useMergedState2[0],
    setInternalValue = _useMergedState2[1];
  if (true) {
    warningPropsUtil_default(props);
  }
  var mergedFieldNames = React11.useMemo(
    function() {
      return fillFieldNames(fieldNames);
    },
    [JSON.stringify(fieldNames)]
  );
  var _useMergedState3 = useMergedState('', {
      value: searchValue !== void 0 ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState4 = _slicedToArray2(_useMergedState3, 2),
    mergedSearchValue = _useMergedState4[0],
    setSearchValue = _useMergedState4[1];
  var onInternalSearch = function onInternalSearch2(searchText) {
    setSearchValue(searchText);
    onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
  };
  var mergedTreeData = useTreeData(treeData, children, treeDataSimpleMode);
  var _useDataEntities = useDataEntities_default(mergedTreeData, mergedFieldNames),
    keyEntities = _useDataEntities.keyEntities,
    valueEntities = _useDataEntities.valueEntities;
  var splitRawValues = React11.useCallback(
    function(newRawValues) {
      var missingRawValues = [];
      var existRawValues = [];
      newRawValues.forEach(function(val) {
        if (valueEntities.has(val)) {
          existRawValues.push(val);
        } else {
          missingRawValues.push(val);
        }
      });
      return {
        missingRawValues,
        existRawValues
      };
    },
    [valueEntities]
  );
  var filteredTreeData = useFilterTreeData_default(mergedTreeData, mergedSearchValue, {
    fieldNames: mergedFieldNames,
    treeNodeFilterProp,
    filterTreeNode
  });
  var getLabel = React11.useCallback(
    function(item) {
      if (item) {
        if (treeNodeLabelProp) {
          return item[treeNodeLabelProp];
        }
        var titleList = mergedFieldNames._title;
        for (var i = 0; i < titleList.length; i += 1) {
          var title = item[titleList[i]];
          if (title !== void 0) {
            return title;
          }
        }
      }
    },
    [mergedFieldNames, treeNodeLabelProp]
  );
  var toLabeledValues = React11.useCallback(function(draftValues) {
    var values = toArray(draftValues);
    return values.map(function(val) {
      if (isRawValue(val)) {
        return {
          value: val
        };
      }
      return val;
    });
  }, []);
  var convert2LabelValues = React11.useCallback(
    function(draftValues) {
      var values = toLabeledValues(draftValues);
      return values.map(function(item) {
        var rawLabel = item.label;
        var rawValue = item.value,
          rawHalfChecked = item.halfChecked;
        var rawDisabled;
        var entity = valueEntities.get(rawValue);
        if (entity) {
          var _rawLabel;
          rawLabel = (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node);
          rawDisabled = entity.node.disabled;
        } else if (rawLabel === void 0) {
          var labelInValueItem = toLabeledValues(internalValue).find(function(labeledItem) {
            return labeledItem.value === rawValue;
          });
          rawLabel = labelInValueItem.label;
        }
        return {
          label: rawLabel,
          value: rawValue,
          halfChecked: rawHalfChecked,
          disabled: rawDisabled
        };
      });
    },
    [valueEntities, getLabel, toLabeledValues, internalValue]
  );
  var rawMixedLabeledValues = React11.useMemo(
    function() {
      return toLabeledValues(internalValue);
    },
    [toLabeledValues, internalValue]
  );
  var _React$useMemo = React11.useMemo(
      function() {
        var fullCheckValues = [];
        var halfCheckValues = [];
        rawMixedLabeledValues.forEach(function(item) {
          if (item.halfChecked) {
            halfCheckValues.push(item);
          } else {
            fullCheckValues.push(item);
          }
        });
        return [fullCheckValues, halfCheckValues];
      },
      [rawMixedLabeledValues]
    ),
    _React$useMemo2 = _slicedToArray2(_React$useMemo, 2),
    rawLabeledValues = _React$useMemo2[0],
    rawHalfLabeledValues = _React$useMemo2[1];
  var rawValues = React11.useMemo(
    function() {
      return rawLabeledValues.map(function(item) {
        return item.value;
      });
    },
    [rawLabeledValues]
  );
  var _useCheckedKeys = useCheckedKeys_default(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities),
    _useCheckedKeys2 = _slicedToArray2(_useCheckedKeys, 2),
    rawCheckedValues = _useCheckedKeys2[0],
    rawHalfCheckedValues = _useCheckedKeys2[1];
  var displayValues = React11.useMemo(
    function() {
      var displayKeys = formatStrategyValues(rawCheckedValues, showCheckedStrategy, keyEntities, mergedFieldNames);
      var values = displayKeys.map(function(key) {
        var _keyEntities$key$node, _keyEntities$key, _keyEntities$key$node2;
        return (_keyEntities$key$node =
          (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0
            ? void 0
            : (_keyEntities$key$node2 = _keyEntities$key.node) === null || _keyEntities$key$node2 === void 0
            ? void 0
            : _keyEntities$key$node2[mergedFieldNames.value]) !== null && _keyEntities$key$node !== void 0
          ? _keyEntities$key$node
          : key;
      });
      var labeledValues = values.map(function(val) {
        var targetItem = rawLabeledValues.find(function(item) {
          return item.value === val;
        });
        return {
          value: val,
          label: targetItem === null || targetItem === void 0 ? void 0 : targetItem.label
        };
      });
      var rawDisplayValues = convert2LabelValues(labeledValues);
      var firstVal = rawDisplayValues[0];
      if (!mergedMultiple && firstVal && isNil(firstVal.value) && isNil(firstVal.label)) {
        return [];
      }
      return rawDisplayValues.map(function(item) {
        var _item$label;
        return _objectSpread6(
          _objectSpread6({}, item),
          {},
          {
            label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
          }
        );
      });
    },
    [
      mergedFieldNames,
      mergedMultiple,
      rawCheckedValues,
      rawLabeledValues,
      convert2LabelValues,
      showCheckedStrategy,
      keyEntities
    ]
  );
  var _useCache = useCache_default(displayValues),
    _useCache2 = _slicedToArray2(_useCache, 1),
    cachedDisplayValues = _useCache2[0];
  var triggerChange = useRefFunc(function(newRawValues, extra, source) {
    var labeledValues = convert2LabelValues(newRawValues);
    setInternalValue(labeledValues);
    if (autoClearSearchValue) {
      setSearchValue('');
    }
    if (onChange) {
      var eventValues = newRawValues;
      if (treeConduction) {
        var formattedKeyList = formatStrategyValues(newRawValues, showCheckedStrategy, keyEntities, mergedFieldNames);
        eventValues = formattedKeyList.map(function(key) {
          var entity = valueEntities.get(key);
          return entity ? entity.node[mergedFieldNames.value] : key;
        });
      }
      var _ref = extra || {
          triggerValue: void 0,
          selected: void 0
        },
        triggerValue = _ref.triggerValue,
        selected = _ref.selected;
      var returnRawValues = eventValues;
      if (treeCheckStrictly) {
        var halfValues = rawHalfLabeledValues.filter(function(item) {
          return !eventValues.includes(item.value);
        });
        returnRawValues = [].concat(_toConsumableArray3(returnRawValues), _toConsumableArray3(halfValues));
      }
      var returnLabeledValues = convert2LabelValues(returnRawValues);
      var additionalInfo = {
        preValue: rawLabeledValues,
        triggerValue
      };
      var showPosition = true;
      if (treeCheckStrictly || (source === 'selection' && !selected)) {
        showPosition = false;
      }
      fillAdditionalInfo(additionalInfo, triggerValue, newRawValues, mergedTreeData, showPosition, mergedFieldNames);
      if (mergedCheckable) {
        additionalInfo.checked = selected;
      } else {
        additionalInfo.selected = selected;
      }
      var returnValues = mergedLabelInValue
        ? returnLabeledValues
        : returnLabeledValues.map(function(item) {
            return item.value;
          });
      onChange(
        mergedMultiple ? returnValues : returnValues[0],
        mergedLabelInValue
          ? null
          : returnLabeledValues.map(function(item) {
              return item.label;
            }),
        additionalInfo
      );
    }
  });
  var onOptionSelect = React11.useCallback(
    function(selectedKey, _ref2) {
      var _node$mergedFieldName;
      var selected = _ref2.selected,
        source = _ref2.source;
      var entity = keyEntities[selectedKey];
      var node = entity === null || entity === void 0 ? void 0 : entity.node;
      var selectedValue =
        (_node$mergedFieldName = node === null || node === void 0 ? void 0 : node[mergedFieldNames.value]) !== null &&
        _node$mergedFieldName !== void 0
          ? _node$mergedFieldName
          : selectedKey;
      if (!mergedMultiple) {
        triggerChange(
          [selectedValue],
          {
            selected: true,
            triggerValue: selectedValue
          },
          'option'
        );
      } else {
        var newRawValues = selected
          ? [].concat(_toConsumableArray3(rawValues), [selectedValue])
          : rawCheckedValues.filter(function(v) {
              return v !== selectedValue;
            });
        if (treeConduction) {
          var _splitRawValues = splitRawValues(newRawValues),
            missingRawValues = _splitRawValues.missingRawValues,
            existRawValues = _splitRawValues.existRawValues;
          var keyList = existRawValues.map(function(val) {
            return valueEntities.get(val).key;
          });
          var checkedKeys;
          if (selected) {
            var _conductCheck = conductCheck2(keyList, true, keyEntities);
            checkedKeys = _conductCheck.checkedKeys;
          } else {
            var _conductCheck2 = conductCheck2(
              keyList,
              {
                checked: false,
                halfCheckedKeys: rawHalfCheckedValues
              },
              keyEntities
            );
            checkedKeys = _conductCheck2.checkedKeys;
          }
          newRawValues = [].concat(
            _toConsumableArray3(missingRawValues),
            _toConsumableArray3(
              checkedKeys.map(function(key) {
                return keyEntities[key].node[mergedFieldNames.value];
              })
            )
          );
        }
        triggerChange(
          newRawValues,
          {
            selected,
            triggerValue: selectedValue
          },
          source || 'option'
        );
      }
      if (selected || !mergedMultiple) {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectedValue, fillLegacyProps(node));
      } else {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectedValue, fillLegacyProps(node));
      }
    },
    [
      splitRawValues,
      valueEntities,
      keyEntities,
      mergedFieldNames,
      mergedMultiple,
      rawValues,
      triggerChange,
      treeConduction,
      onSelect,
      onDeselect,
      rawCheckedValues,
      rawHalfCheckedValues
    ]
  );
  var onInternalDropdownVisibleChange = React11.useCallback(
    function(open) {
      if (onDropdownVisibleChange) {
        var legacyParam = {};
        Object.defineProperty(legacyParam, 'documentClickClose', {
          get: function get() {
            warning4(false, 'Second param of `onDropdownVisibleChange` has been removed.');
            return false;
          }
        });
        onDropdownVisibleChange(open, legacyParam);
      }
    },
    [onDropdownVisibleChange]
  );
  var onDisplayValuesChange = useRefFunc(function(newValues, info) {
    var newRawValues = newValues.map(function(item) {
      return item.value;
    });
    if (info.type === 'clear') {
      triggerChange(newRawValues, {}, 'selection');
      return;
    }
    if (info.values.length) {
      onOptionSelect(info.values[0].value, {
        selected: false,
        source: 'selection'
      });
    }
  });
  var treeSelectContext = React11.useMemo(
    function() {
      return {
        virtual,
        dropdownMatchSelectWidth,
        listHeight,
        listItemHeight,
        treeData: filteredTreeData,
        fieldNames: mergedFieldNames,
        onSelect: onOptionSelect,
        treeExpandAction
      };
    },
    [
      virtual,
      dropdownMatchSelectWidth,
      listHeight,
      listItemHeight,
      filteredTreeData,
      mergedFieldNames,
      onOptionSelect,
      treeExpandAction
    ]
  );
  var legacyContext = React11.useMemo(
    function() {
      return {
        checkable: mergedCheckable,
        loadData,
        treeLoadedKeys,
        onTreeLoad,
        checkedKeys: rawCheckedValues,
        halfCheckedKeys: rawHalfCheckedValues,
        treeDefaultExpandAll,
        treeExpandedKeys,
        treeDefaultExpandedKeys,
        onTreeExpand,
        treeIcon,
        treeMotion,
        showTreeIcon,
        switcherIcon,
        treeLine,
        treeNodeFilterProp,
        keyEntities
      };
    },
    [
      mergedCheckable,
      loadData,
      treeLoadedKeys,
      onTreeLoad,
      rawCheckedValues,
      rawHalfCheckedValues,
      treeDefaultExpandAll,
      treeExpandedKeys,
      treeDefaultExpandedKeys,
      onTreeExpand,
      treeIcon,
      treeMotion,
      showTreeIcon,
      switcherIcon,
      treeLine,
      treeNodeFilterProp,
      keyEntities
    ]
  );
  return /* @__PURE__ */ React11.createElement(
    TreeSelectContext_default.Provider,
    {
      value: treeSelectContext
    },
    /* @__PURE__ */ React11.createElement(
      LegacyContext_default.Provider,
      {
        value: legacyContext
      },
      /* @__PURE__ */ React11.createElement(
        BaseSelect,
        _extends2(
          {
            ref
          },
          restProps,
          {
            id: mergedId,
            prefixCls,
            mode: mergedMultiple ? 'multiple' : void 0,
            displayValues: cachedDisplayValues,
            onDisplayValuesChange,
            searchValue: mergedSearchValue,
            onSearch: onInternalSearch,
            OptionList: OptionList_default,
            emptyOptions: !mergedTreeData.length,
            onDropdownVisibleChange: onInternalDropdownVisibleChange,
            dropdownMatchSelectWidth
          }
        )
      )
    )
  );
});
if (true) {
  TreeSelect.displayName = 'TreeSelect';
}
var GenericTreeSelect = TreeSelect;
GenericTreeSelect.TreeNode = TreeNode_default;
GenericTreeSelect.SHOW_ALL = SHOW_ALL;
GenericTreeSelect.SHOW_PARENT = SHOW_PARENT;
GenericTreeSelect.SHOW_CHILD = SHOW_CHILD;
var TreeSelect_default = GenericTreeSelect;

// esm-build-95ecbebd1cd48b530594a801b90bf6a123ea6de8-febb6523/node_modules/rc-tree-select/es/index.js
var es_default = TreeSelect_default;
export { SHOW_ALL, SHOW_CHILD, SHOW_PARENT, TreeNode_default as TreeNode, es_default as default };
