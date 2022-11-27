/* esm.sh - esbuild bundle(rc-cascader@3.7.0) es2022 development */
// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/Cascader.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _toConsumableArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import { BaseSelect } from '/cdn/v99/rc-select@14.1.14/es2022/rc-select.development.js';
import useId from '/cdn/v99/rc-select@14.1.14/es2022/es/hooks/useId.development.js';
import { conductCheck } from '/cdn/v99/rc-tree@5.7.1/es2022/es/utils/conductUtil.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import * as React13 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/context.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var CascaderContext = /* @__PURE__ */ React.createContext(null);
var context_default = CascaderContext;

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useDisplayValues.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/utils/commonUtil.js
var VALUE_SPLIT = '__RC_CASCADER_SPLIT__';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';
function toPathKey(value) {
  return value.join(VALUE_SPLIT);
}
function toPathKeys(value) {
  return value.map(toPathKey);
}
function toPathValueStr(pathKey) {
  return pathKey.split(VALUE_SPLIT);
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    children = _ref.children;
  var val = value || 'value';
  return {
    label: label || 'label',
    value: val,
    key: val,
    children: children || 'children'
  };
}
function isLeaf(option, fieldNames) {
  var _option$isLeaf, _option$fieldNames$ch;
  return (_option$isLeaf = option.isLeaf) !== null && _option$isLeaf !== void 0
    ? _option$isLeaf
    : !((_option$fieldNames$ch = option[fieldNames.children]) === null || _option$fieldNames$ch === void 0
        ? void 0
        : _option$fieldNames$ch.length);
}
function scrollIntoParentView(element) {
  var parent = element.parentElement;
  if (!parent) {
    return;
  }
  var elementToParent = element.offsetTop - parent.offsetTop;
  if (elementToParent - parent.scrollTop < 0) {
    parent.scrollTo({
      top: elementToParent
    });
  } else if (elementToParent + element.offsetHeight - parent.scrollTop > parent.offsetHeight) {
    parent.scrollTo({
      top: elementToParent + element.offsetHeight - parent.offsetHeight
    });
  }
}

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/utils/treeUtil.js
function formatStrategyValues(pathKeys, getKeyPathEntities, showCheckedStrategy) {
  var valueSet = new Set(pathKeys);
  var keyPathEntities = getKeyPathEntities();
  return pathKeys.filter(function(key) {
    var entity = keyPathEntities[key];
    var parent = entity ? entity.parent : null;
    var children = entity ? entity.children : null;
    return showCheckedStrategy === SHOW_CHILD
      ? !(
          children &&
          children.some(function(child) {
            return child.key && valueSet.has(child.key);
          })
        )
      : !(parent && !parent.node.disabled && valueSet.has(parent.key));
  });
}
function toPathOptions(valueCells, options, fieldNames) {
  var stringMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var currentList = options;
  var valueOptions = [];
  var _loop = function _loop2(i2) {
    var _currentList, _currentList2, _foundOption$fieldNam;
    var valueCell = valueCells[i2];
    var foundIndex =
      (_currentList = currentList) === null || _currentList === void 0
        ? void 0
        : _currentList.findIndex(function(option) {
            var val = option[fieldNames.value];
            return stringMode ? String(val) === String(valueCell) : val === valueCell;
          });
    var foundOption =
      foundIndex !== -1
        ? (_currentList2 = currentList) === null || _currentList2 === void 0
          ? void 0
          : _currentList2[foundIndex]
        : null;
    valueOptions.push({
      value:
        (_foundOption$fieldNam =
          foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.value]) !== null &&
        _foundOption$fieldNam !== void 0
          ? _foundOption$fieldNam
          : valueCell,
      index: foundIndex,
      option: foundOption
    });
    currentList = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.children];
  };
  for (var i = 0; i < valueCells.length; i += 1) {
    _loop(i);
  }
  return valueOptions;
}

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useDisplayValues.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useDisplayValues_default = function(rawValues, options, fieldNames, multiple, displayRender) {
  return React2.useMemo(
    function() {
      var mergedDisplayRender =
        displayRender ||
        function(labels) {
          var mergedLabels = multiple ? labels.slice(-1) : labels;
          var SPLIT = ' / ';
          if (
            mergedLabels.every(function(label) {
              return ['string', 'number'].includes(_typeof(label));
            })
          ) {
            return mergedLabels.join(SPLIT);
          }
          return mergedLabels.reduce(function(list, label, index) {
            var keyedLabel = /* @__PURE__ */ React2.isValidElement(label)
              ? /* @__PURE__ */ React2.cloneElement(label, {
                  key: index
                })
              : label;
            if (index === 0) {
              return [keyedLabel];
            }
            return [].concat(_toConsumableArray(list), [SPLIT, keyedLabel]);
          }, []);
        };
      return rawValues.map(function(valueCells) {
        var _valueOptions, _valueOptions$option;
        var valueOptions = toPathOptions(valueCells, options, fieldNames);
        var label = mergedDisplayRender(
          valueOptions.map(function(_ref) {
            var _option$fieldNames$la;
            var option = _ref.option,
              value2 = _ref.value;
            return (_option$fieldNames$la =
              option === null || option === void 0 ? void 0 : option[fieldNames.label]) !== null &&
              _option$fieldNames$la !== void 0
              ? _option$fieldNames$la
              : value2;
          }),
          valueOptions.map(function(_ref2) {
            var option = _ref2.option;
            return option;
          })
        );
        var value = toPathKey(valueCells);
        return {
          label,
          value,
          key: value,
          valueCells,
          disabled:
            (_valueOptions = valueOptions[valueOptions.length - 1]) === null || _valueOptions === void 0
              ? void 0
              : (_valueOptions$option = _valueOptions.option) === null || _valueOptions$option === void 0
              ? void 0
              : _valueOptions$option.disabled
        };
      });
    },
    [rawValues, options, fieldNames, displayRender, multiple]
  );
};

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useEntities.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { convertDataToEntities } from '/cdn/v99/rc-tree@5.7.1/es2022/es/utils/treeUtil.development.js';
var useEntities_default = function(options, fieldNames) {
  var cacheRef = React3.useRef({
    options: null,
    info: null
  });
  var getEntities = React3.useCallback(
    function() {
      if (cacheRef.current.options !== options) {
        cacheRef.current.options = options;
        cacheRef.current.info = convertDataToEntities(options, {
          fieldNames,
          initWrapper: function initWrapper(wrapper) {
            return _objectSpread(
              _objectSpread({}, wrapper),
              {},
              {
                pathKeyEntities: {}
              }
            );
          },
          processEntity: function processEntity(entity, wrapper) {
            var pathKey = entity.nodes
              .map(function(node) {
                return node[fieldNames.value];
              })
              .join(VALUE_SPLIT);
            wrapper.pathKeyEntities[pathKey] = entity;
            entity.key = pathKey;
          }
        });
      }
      return cacheRef.current.info.pathKeyEntities;
    },
    [fieldNames, options]
  );
  return getEntities;
};

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useMissingValues.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useMissingValues_default = function(options, fieldNames) {
  return React4.useCallback(
    function(rawValues) {
      var missingValues = [];
      var existsValues = [];
      rawValues.forEach(function(valueCell) {
        var pathOptions = toPathOptions(valueCell, options, fieldNames);
        if (
          pathOptions.every(function(opt) {
            return opt.option;
          })
        ) {
          existsValues.push(valueCell);
        } else {
          missingValues.push(valueCell);
        }
      });
      return [existsValues, missingValues];
    },
    [options, fieldNames]
  );
};

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useRefFunc.js
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRefFunc(callback) {
  var funcRef = React5.useRef();
  funcRef.current = callback;
  var cacheFn = React5.useCallback(function() {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useSearchConfig.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function useSearchConfig(showSearch) {
  return React6.useMemo(
    function() {
      if (!showSearch) {
        return [false, {}];
      }
      var searchConfig = {
        matchInputWidth: true,
        limit: 50
      };
      if (showSearch && _typeof2(showSearch) === 'object') {
        searchConfig = _objectSpread2(_objectSpread2({}, searchConfig), showSearch);
      }
      if (searchConfig.limit <= 0) {
        delete searchConfig.limit;
        if (true) {
          warning(false, "'limit' of showSearch should be positive number or false.");
        }
      }
      return [true, searchConfig];
    },
    [showSearch]
  );
}

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/hooks/useSearchOptions.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var SEARCH_MARK = '__rc_cascader_search_mark__';
var defaultFilter = function defaultFilter2(search, options, _ref) {
  var label = _ref.label;
  return options.some(function(opt) {
    return String(opt[label])
      .toLowerCase()
      .includes(search.toLowerCase());
  });
};
var defaultRender = function defaultRender2(inputValue, path, prefixCls, fieldNames) {
  return path
    .map(function(opt) {
      return opt[fieldNames.label];
    })
    .join(' / ');
};
var useSearchOptions_default = function(search, options, fieldNames, prefixCls, config, changeOnSelect) {
  var _config$filter = config.filter,
    filter = _config$filter === void 0 ? defaultFilter : _config$filter,
    _config$render = config.render,
    render = _config$render === void 0 ? defaultRender : _config$render,
    _config$limit = config.limit,
    limit = _config$limit === void 0 ? 50 : _config$limit,
    sort = config.sort;
  return React7.useMemo(
    function() {
      var filteredOptions = [];
      if (!search) {
        return [];
      }
      function dig(list, pathOptions) {
        list.forEach(function(option) {
          if (!sort && limit > 0 && filteredOptions.length >= limit) {
            return;
          }
          var connectedPathOptions = [].concat(_toConsumableArray2(pathOptions), [option]);
          var children = option[fieldNames.children];
          if (!children || children.length === 0 || changeOnSelect) {
            if (
              filter(search, connectedPathOptions, {
                label: fieldNames.label
              })
            ) {
              var _objectSpread22;
              filteredOptions.push(
                _objectSpread3(
                  _objectSpread3({}, option),
                  {},
                  ((_objectSpread22 = {}),
                  _defineProperty(
                    _objectSpread22,
                    fieldNames.label,
                    render(search, connectedPathOptions, prefixCls, fieldNames)
                  ),
                  _defineProperty(_objectSpread22, SEARCH_MARK, connectedPathOptions),
                  _objectSpread22)
                )
              );
            }
          }
          if (children) {
            dig(option[fieldNames.children], connectedPathOptions);
          }
        });
      }
      dig(options, []);
      if (sort) {
        filteredOptions.sort(function(a, b) {
          return sort(a[SEARCH_MARK], b[SEARCH_MARK], search, fieldNames);
        });
      }
      return limit > 0 ? filteredOptions.slice(0, limit) : filteredOptions;
    },
    [search, options, fieldNames, prefixCls, render, changeOnSelect, filter, sort, limit]
  );
};

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { useBaseProps as useBaseProps3 } from '/cdn/v99/rc-select@14.1.14/es2022/rc-select.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/Column.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/Checkbox.js
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function Checkbox(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    checked = _ref.checked,
    halfChecked = _ref.halfChecked,
    disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _React$useContext = React8.useContext(context_default),
    checkable = _React$useContext.checkable;
  var customCheckbox = typeof checkable !== 'boolean' ? checkable : null;
  return /* @__PURE__ */ React8.createElement(
    'span',
    {
      className: classNames(
        ''.concat(prefixCls),
        ((_classNames = {}),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-checked'), checked),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-indeterminate'), !checked && halfChecked),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
        _classNames)
      ),
      onClick
    },
    customCheckbox
  );
}

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/Column.js
var FIX_LABEL = '__cascader_fix_label__';
function Column(_ref) {
  var prefixCls = _ref.prefixCls,
    multiple = _ref.multiple,
    options = _ref.options,
    activeValue = _ref.activeValue,
    prevValuePath = _ref.prevValuePath,
    onToggleOpen = _ref.onToggleOpen,
    onSelect = _ref.onSelect,
    onActive = _ref.onActive,
    checkedSet = _ref.checkedSet,
    halfCheckedSet = _ref.halfCheckedSet,
    loadingKeys = _ref.loadingKeys,
    isSelectable = _ref.isSelectable;
  var menuPrefixCls = ''.concat(prefixCls, '-menu');
  var menuItemPrefixCls = ''.concat(prefixCls, '-menu-item');
  var _React$useContext = React9.useContext(context_default),
    fieldNames = _React$useContext.fieldNames,
    changeOnSelect = _React$useContext.changeOnSelect,
    expandTrigger = _React$useContext.expandTrigger,
    expandIcon = _React$useContext.expandIcon,
    loadingIcon = _React$useContext.loadingIcon,
    dropdownMenuColumnStyle = _React$useContext.dropdownMenuColumnStyle;
  var hoverOpen = expandTrigger === 'hover';
  var optionInfoList = React9.useMemo(
    function() {
      return options.map(function(option) {
        var _option$FIX_LABEL;
        var disabled = option.disabled;
        var searchOptions = option[SEARCH_MARK];
        var label =
          (_option$FIX_LABEL = option[FIX_LABEL]) !== null && _option$FIX_LABEL !== void 0
            ? _option$FIX_LABEL
            : option[fieldNames.label];
        var value = option[fieldNames.value];
        var isMergedLeaf = isLeaf(option, fieldNames);
        var fullPath = searchOptions
          ? searchOptions.map(function(opt) {
              return opt[fieldNames.value];
            })
          : [].concat(_toConsumableArray3(prevValuePath), [value]);
        var fullPathKey = toPathKey(fullPath);
        var isLoading = loadingKeys.includes(fullPathKey);
        var checked = checkedSet.has(fullPathKey);
        var halfChecked = halfCheckedSet.has(fullPathKey);
        return {
          disabled,
          label,
          value,
          isLeaf: isMergedLeaf,
          isLoading,
          checked,
          halfChecked,
          option,
          fullPath,
          fullPathKey
        };
      });
    },
    [options, checkedSet, fieldNames, halfCheckedSet, loadingKeys, prevValuePath]
  );
  return /* @__PURE__ */ React9.createElement(
    'ul',
    {
      className: menuPrefixCls,
      role: 'menu'
    },
    optionInfoList.map(function(_ref2) {
      var _classNames;
      var disabled = _ref2.disabled,
        label = _ref2.label,
        value = _ref2.value,
        isMergedLeaf = _ref2.isLeaf,
        isLoading = _ref2.isLoading,
        checked = _ref2.checked,
        halfChecked = _ref2.halfChecked,
        option = _ref2.option,
        fullPath = _ref2.fullPath,
        fullPathKey = _ref2.fullPathKey;
      var triggerOpenPath = function triggerOpenPath2() {
        if (!disabled && (!hoverOpen || !isMergedLeaf)) {
          onActive(fullPath);
        }
      };
      var triggerSelect = function triggerSelect2() {
        if (isSelectable(option)) {
          onSelect(fullPath, isMergedLeaf);
        }
      };
      var title;
      if (typeof option.title === 'string') {
        title = option.title;
      } else if (typeof label === 'string') {
        title = label;
      }
      return /* @__PURE__ */ React9.createElement(
        'li',
        {
          key: fullPathKey,
          className: classNames2(
            menuItemPrefixCls,
            ((_classNames = {}),
            _defineProperty3(_classNames, ''.concat(menuItemPrefixCls, '-expand'), !isMergedLeaf),
            _defineProperty3(_classNames, ''.concat(menuItemPrefixCls, '-active'), activeValue === value),
            _defineProperty3(_classNames, ''.concat(menuItemPrefixCls, '-disabled'), disabled),
            _defineProperty3(_classNames, ''.concat(menuItemPrefixCls, '-loading'), isLoading),
            _classNames)
          ),
          style: dropdownMenuColumnStyle,
          role: 'menuitemcheckbox',
          title,
          'aria-checked': checked,
          'data-path-key': fullPathKey,
          onClick: function onClick() {
            triggerOpenPath();
            if (!multiple || isMergedLeaf) {
              triggerSelect();
            }
          },
          onDoubleClick: function onDoubleClick() {
            if (changeOnSelect) {
              onToggleOpen(false);
            }
          },
          onMouseEnter: function onMouseEnter() {
            if (hoverOpen) {
              triggerOpenPath();
            }
          },
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
          }
        },
        multiple &&
          /* @__PURE__ */ React9.createElement(Checkbox, {
            prefixCls: ''.concat(prefixCls, '-checkbox'),
            checked,
            halfChecked,
            disabled,
            onClick: function onClick(e) {
              e.stopPropagation();
              triggerSelect();
            }
          }),
        /* @__PURE__ */ React9.createElement(
          'div',
          {
            className: ''.concat(menuItemPrefixCls, '-content')
          },
          label
        ),
        !isLoading &&
          expandIcon &&
          !isMergedLeaf &&
          /* @__PURE__ */ React9.createElement(
            'div',
            {
              className: ''.concat(menuItemPrefixCls, '-expand-icon')
            },
            expandIcon
          ),
        isLoading &&
          loadingIcon &&
          /* @__PURE__ */ React9.createElement(
            'div',
            {
              className: ''.concat(menuItemPrefixCls, '-loading-icon')
            },
            loadingIcon
          )
      );
    })
  );
}

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/useActive.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useBaseProps } from '/cdn/v99/rc-select@14.1.14/es2022/rc-select.development.js';
var useActive_default = function() {
  var _useBaseProps = useBaseProps(),
    multiple = _useBaseProps.multiple,
    open = _useBaseProps.open;
  var _React$useContext = React10.useContext(context_default),
    values = _React$useContext.values;
  var _React$useState = React10.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeValueCells = _React$useState2[0],
    setActiveValueCells = _React$useState2[1];
  React10.useEffect(
    function() {
      if (open && !multiple) {
        var firstValueCells = values[0];
        setActiveValueCells(firstValueCells || []);
      }
    },
    [open]
  );
  return [activeValueCells, setActiveValueCells];
};

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/useKeyboard.js
import _toConsumableArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useBaseProps as useBaseProps2 } from '/cdn/v99/rc-select@14.1.14/es2022/rc-select.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
var useKeyboard_default = function(ref, options, fieldNames, activeValueCells, setActiveValueCells, onKeyBoardSelect) {
  var _useBaseProps = useBaseProps2(),
    direction = _useBaseProps.direction,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    open = _useBaseProps.open;
  var rtl = direction === 'rtl';
  var _React$useMemo = React11.useMemo(
      function() {
        var activeIndex = -1;
        var currentOptions = options;
        var mergedActiveIndexes = [];
        var mergedActiveValueCells = [];
        var len = activeValueCells.length;
        var _loop = function _loop2(i2) {
          var nextActiveIndex = currentOptions.findIndex(function(option) {
            return option[fieldNames.value] === activeValueCells[i2];
          });
          if (nextActiveIndex === -1) {
            return 'break';
          }
          activeIndex = nextActiveIndex;
          mergedActiveIndexes.push(activeIndex);
          mergedActiveValueCells.push(activeValueCells[i2]);
          currentOptions = currentOptions[activeIndex][fieldNames.children];
        };
        for (var i = 0; i < len && currentOptions; i += 1) {
          var _ret = _loop(i);
          if (_ret === 'break') break;
        }
        var activeOptions = options;
        for (var _i = 0; _i < mergedActiveIndexes.length - 1; _i += 1) {
          activeOptions = activeOptions[mergedActiveIndexes[_i]][fieldNames.children];
        }
        return [mergedActiveValueCells, activeIndex, activeOptions];
      },
      [activeValueCells, fieldNames, options]
    ),
    _React$useMemo2 = _slicedToArray2(_React$useMemo, 3),
    validActiveValueCells = _React$useMemo2[0],
    lastActiveIndex = _React$useMemo2[1],
    lastActiveOptions = _React$useMemo2[2];
  var internalSetActiveValueCells = function internalSetActiveValueCells2(next) {
    setActiveValueCells(next);
  };
  var offsetActiveOption = function offsetActiveOption2(offset) {
    var len = lastActiveOptions.length;
    var currentIndex = lastActiveIndex;
    if (currentIndex === -1 && offset < 0) {
      currentIndex = len;
    }
    for (var i = 0; i < len; i += 1) {
      currentIndex = (currentIndex + offset + len) % len;
      var option = lastActiveOptions[currentIndex];
      if (option && !option.disabled) {
        var value = option[fieldNames.value];
        var nextActiveCells = validActiveValueCells.slice(0, -1).concat(value);
        internalSetActiveValueCells(nextActiveCells);
        return;
      }
    }
  };
  var prevColumn = function prevColumn2() {
    if (validActiveValueCells.length > 1) {
      var nextActiveCells = validActiveValueCells.slice(0, -1);
      internalSetActiveValueCells(nextActiveCells);
    } else {
      toggleOpen(false);
    }
  };
  var nextColumn = function nextColumn2() {
    var _lastActiveOptions$la;
    var nextOptions =
      ((_lastActiveOptions$la = lastActiveOptions[lastActiveIndex]) === null || _lastActiveOptions$la === void 0
        ? void 0
        : _lastActiveOptions$la[fieldNames.children]) || [];
    var nextOption = nextOptions.find(function(option) {
      return !option.disabled;
    });
    if (nextOption) {
      var nextActiveCells = [].concat(_toConsumableArray4(validActiveValueCells), [nextOption[fieldNames.value]]);
      internalSetActiveValueCells(nextActiveCells);
    }
  };
  React11.useImperativeHandle(ref, function() {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which;
        switch (which) {
          case KeyCode.UP:
          case KeyCode.DOWN: {
            var offset = 0;
            if (which === KeyCode.UP) {
              offset = -1;
            } else if (which === KeyCode.DOWN) {
              offset = 1;
            }
            if (offset !== 0) {
              offsetActiveOption(offset);
            }
            break;
          }
          case KeyCode.LEFT: {
            if (rtl) {
              nextColumn();
            } else {
              prevColumn();
            }
            break;
          }
          case KeyCode.RIGHT: {
            if (rtl) {
              prevColumn();
            } else {
              nextColumn();
            }
            break;
          }
          case KeyCode.BACKSPACE: {
            if (!searchValue) {
              prevColumn();
            }
            break;
          }
          case KeyCode.ENTER: {
            if (validActiveValueCells.length) {
              var option = lastActiveOptions[lastActiveIndex];
              var originOptions = (option === null || option === void 0 ? void 0 : option[SEARCH_MARK]) || [];
              if (originOptions.length) {
                onKeyBoardSelect(
                  originOptions.map(function(opt) {
                    return opt[fieldNames.value];
                  }),
                  originOptions[originOptions.length - 1]
                );
              } else {
                onKeyBoardSelect(validActiveValueCells, lastActiveOptions[lastActiveIndex]);
              }
            }
            break;
          }
          case KeyCode.ESC: {
            toggleOpen(false);
            if (open) {
              event.stopPropagation();
            }
          }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  });
};

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/OptionList/index.js
var RefOptionList = /* @__PURE__ */ React12.forwardRef(function(props, ref) {
  var _optionColumns$, _optionColumns$$optio, _ref3, _classNames;
  var _useBaseProps = useBaseProps3(),
    prefixCls = _useBaseProps.prefixCls,
    multiple = _useBaseProps.multiple,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    direction = _useBaseProps.direction;
  var containerRef = React12.useRef();
  var rtl = direction === 'rtl';
  var _React$useContext = React12.useContext(context_default),
    options = _React$useContext.options,
    values = _React$useContext.values,
    halfValues = _React$useContext.halfValues,
    fieldNames = _React$useContext.fieldNames,
    changeOnSelect = _React$useContext.changeOnSelect,
    onSelect = _React$useContext.onSelect,
    searchOptions = _React$useContext.searchOptions,
    dropdownPrefixCls = _React$useContext.dropdownPrefixCls,
    loadData = _React$useContext.loadData,
    expandTrigger = _React$useContext.expandTrigger;
  var mergedPrefixCls = dropdownPrefixCls || prefixCls;
  var _React$useState = React12.useState([]),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    loadingKeys = _React$useState2[0],
    setLoadingKeys = _React$useState2[1];
  var internalLoadData = function internalLoadData2(valueCells) {
    if (!loadData || searchValue) {
      return;
    }
    var optionList = toPathOptions(valueCells, options, fieldNames);
    var rawOptions = optionList.map(function(_ref) {
      var option = _ref.option;
      return option;
    });
    var lastOption = rawOptions[rawOptions.length - 1];
    if (lastOption && !isLeaf(lastOption, fieldNames)) {
      var pathKey = toPathKey(valueCells);
      setLoadingKeys(function(keys) {
        return [].concat(_toConsumableArray5(keys), [pathKey]);
      });
      loadData(rawOptions);
    }
  };
  React12.useEffect(
    function() {
      if (loadingKeys.length) {
        loadingKeys.forEach(function(loadingKey) {
          var valueStrCells = toPathValueStr(loadingKey);
          var optionList = toPathOptions(valueStrCells, options, fieldNames, true).map(function(_ref2) {
            var option = _ref2.option;
            return option;
          });
          var lastOption = optionList[optionList.length - 1];
          if (!lastOption || lastOption[fieldNames.children] || isLeaf(lastOption, fieldNames)) {
            setLoadingKeys(function(keys) {
              return keys.filter(function(key) {
                return key !== loadingKey;
              });
            });
          }
        });
      }
    },
    [options, loadingKeys, fieldNames]
  );
  var checkedSet = React12.useMemo(
    function() {
      return new Set(toPathKeys(values));
    },
    [values]
  );
  var halfCheckedSet = React12.useMemo(
    function() {
      return new Set(toPathKeys(halfValues));
    },
    [halfValues]
  );
  var _useActive = useActive_default(),
    _useActive2 = _slicedToArray3(_useActive, 2),
    activeValueCells = _useActive2[0],
    setActiveValueCells = _useActive2[1];
  var onPathOpen = function onPathOpen2(nextValueCells) {
    setActiveValueCells(nextValueCells);
    internalLoadData(nextValueCells);
  };
  var isSelectable = function isSelectable2(option) {
    var disabled = option.disabled;
    var isMergedLeaf = isLeaf(option, fieldNames);
    return !disabled && (isMergedLeaf || changeOnSelect || multiple);
  };
  var onPathSelect = function onPathSelect2(valuePath, leaf) {
    var fromKeyboard = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    onSelect(valuePath);
    if (!multiple && (leaf || (changeOnSelect && (expandTrigger === 'hover' || fromKeyboard)))) {
      toggleOpen(false);
    }
  };
  var mergedOptions = React12.useMemo(
    function() {
      if (searchValue) {
        return searchOptions;
      }
      return options;
    },
    [searchValue, searchOptions, options]
  );
  var optionColumns = React12.useMemo(
    function() {
      var optionList = [
        {
          options: mergedOptions
        }
      ];
      var currentList = mergedOptions;
      var _loop = function _loop2(i2) {
        var activeValueCell = activeValueCells[i2];
        var currentOption = currentList.find(function(option) {
          return option[fieldNames.value] === activeValueCell;
        });
        var subOptions =
          currentOption === null || currentOption === void 0 ? void 0 : currentOption[fieldNames.children];
        if (!(subOptions === null || subOptions === void 0 ? void 0 : subOptions.length)) {
          return 'break';
        }
        currentList = subOptions;
        optionList.push({
          options: subOptions
        });
      };
      for (var i = 0; i < activeValueCells.length; i += 1) {
        var _ret = _loop(i);
        if (_ret === 'break') break;
      }
      return optionList;
    },
    [mergedOptions, activeValueCells, fieldNames]
  );
  var onKeyboardSelect = function onKeyboardSelect2(selectValueCells, option) {
    if (isSelectable(option)) {
      onPathSelect(selectValueCells, isLeaf(option, fieldNames), true);
    }
  };
  useKeyboard_default(ref, mergedOptions, fieldNames, activeValueCells, onPathOpen, onKeyboardSelect);
  React12.useEffect(
    function() {
      for (var i = 0; i < activeValueCells.length; i += 1) {
        var _containerRef$current;
        var cellPath = activeValueCells.slice(0, i + 1);
        var cellKeyPath = toPathKey(cellPath);
        var ele =
          (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0
            ? void 0
            : _containerRef$current.querySelector(
                'li[data-path-key="'.concat(cellKeyPath.replace(/\\{0,2}"/g, '\\"'), '"]')
              );
        if (ele) {
          scrollIntoParentView(ele);
        }
      }
    },
    [activeValueCells]
  );
  var isEmpty = !((_optionColumns$ = optionColumns[0]) === null || _optionColumns$ === void 0
    ? void 0
    : (_optionColumns$$optio = _optionColumns$.options) === null || _optionColumns$$optio === void 0
    ? void 0
    : _optionColumns$$optio.length);
  var emptyList = [
    ((_ref3 = {}),
    _defineProperty4(_ref3, fieldNames.value, '__EMPTY__'),
    _defineProperty4(_ref3, FIX_LABEL, notFoundContent),
    _defineProperty4(_ref3, 'disabled', true),
    _ref3)
  ];
  var columnProps = _objectSpread4(
    _objectSpread4({}, props),
    {},
    {
      multiple: !isEmpty && multiple,
      onSelect: onPathSelect,
      onActive: onPathOpen,
      onToggleOpen: toggleOpen,
      checkedSet,
      halfCheckedSet,
      loadingKeys,
      isSelectable
    }
  );
  var mergedOptionColumns = isEmpty
    ? [
        {
          options: emptyList
        }
      ]
    : optionColumns;
  var columnNodes = mergedOptionColumns.map(function(col, index) {
    var prevValuePath = activeValueCells.slice(0, index);
    var activeValue = activeValueCells[index];
    return /* @__PURE__ */ React12.createElement(
      Column,
      _extends(
        {
          key: index
        },
        columnProps,
        {
          prefixCls: mergedPrefixCls,
          options: col.options,
          prevValuePath,
          activeValue
        }
      )
    );
  });
  return /* @__PURE__ */ React12.createElement(
    'div',
    {
      className: classNames3(
        ''.concat(mergedPrefixCls, '-menus'),
        ((_classNames = {}),
        _defineProperty4(_classNames, ''.concat(mergedPrefixCls, '-menu-empty'), isEmpty),
        _defineProperty4(_classNames, ''.concat(mergedPrefixCls, '-rtl'), rtl),
        _classNames)
      ),
      ref: containerRef
    },
    columnNodes
  );
});
var OptionList_default = RefOptionList;

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/utils/warningPropsUtil.js
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function warningProps(props) {
  var onPopupVisibleChange = props.onPopupVisibleChange,
    popupVisible = props.popupVisible,
    popupClassName = props.popupClassName,
    popupPlacement = props.popupPlacement;
  warning2(
    !onPopupVisibleChange,
    '`onPopupVisibleChange` is deprecated. Please use `onDropdownVisibleChange` instead.'
  );
  warning2(popupVisible === void 0, '`popupVisible` is deprecated. Please use `open` instead.');
  warning2(popupClassName === void 0, '`popupClassName` is deprecated. Please use `dropdownClassName` instead.');
  warning2(popupPlacement === void 0, '`popupPlacement` is deprecated. Please use `placement` instead.');
}
function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions2(optionsList) {
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];
        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warning2(false, '`value` in Cascader options should not be `null`.');
          return true;
        }
        if (
          Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children]) &&
          recursiveOptions2(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children])
        ) {
          return true;
        }
      }
    };
    recursiveOptions(options);
  }
}
var warningPropsUtil_default = warningProps;

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/Cascader.js
var _excluded = [
  'id',
  'prefixCls',
  'fieldNames',
  'defaultValue',
  'value',
  'changeOnSelect',
  'onChange',
  'displayRender',
  'checkable',
  'searchValue',
  'onSearch',
  'showSearch',
  'expandTrigger',
  'options',
  'dropdownPrefixCls',
  'loadData',
  'popupVisible',
  'open',
  'popupClassName',
  'dropdownClassName',
  'dropdownMenuColumnStyle',
  'popupPlacement',
  'placement',
  'onDropdownVisibleChange',
  'onPopupVisibleChange',
  'expandIcon',
  'loadingIcon',
  'children',
  'dropdownMatchSelectWidth',
  'showCheckedStrategy'
];
function isMultipleValue(value) {
  return Array.isArray(value) && Array.isArray(value[0]);
}
function toRawValues(value) {
  if (!value) {
    return [];
  }
  if (isMultipleValue(value)) {
    return value;
  }
  return (value.length === 0 ? [] : [value]).map(function(val) {
    return Array.isArray(val) ? val : [val];
  });
}
var Cascader = /* @__PURE__ */ React13.forwardRef(function(props, ref) {
  var id = props.id,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-cascader' : _props$prefixCls,
    fieldNames = props.fieldNames,
    defaultValue = props.defaultValue,
    value = props.value,
    changeOnSelect = props.changeOnSelect,
    onChange = props.onChange,
    displayRender = props.displayRender,
    checkable = props.checkable,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    showSearch = props.showSearch,
    expandTrigger = props.expandTrigger,
    options = props.options,
    dropdownPrefixCls = props.dropdownPrefixCls,
    loadData = props.loadData,
    popupVisible = props.popupVisible,
    open = props.open,
    popupClassName = props.popupClassName,
    dropdownClassName = props.dropdownClassName,
    dropdownMenuColumnStyle = props.dropdownMenuColumnStyle,
    popupPlacement = props.popupPlacement,
    placement = props.placement,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    onPopupVisibleChange = props.onPopupVisibleChange,
    _props$expandIcon = props.expandIcon,
    expandIcon = _props$expandIcon === void 0 ? '>' : _props$expandIcon,
    loadingIcon = props.loadingIcon,
    children = props.children,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? false : _props$dropdownMatchS,
    _props$showCheckedStr = props.showCheckedStrategy,
    showCheckedStrategy = _props$showCheckedStr === void 0 ? SHOW_PARENT : _props$showCheckedStr,
    restProps = _objectWithoutProperties(props, _excluded);
  var mergedId = useId(id);
  var multiple = !!checkable;
  var _useMergedState = useMergedState(defaultValue, {
      value,
      postState: toRawValues
    }),
    _useMergedState2 = _slicedToArray4(_useMergedState, 2),
    rawValues = _useMergedState2[0],
    setRawValues = _useMergedState2[1];
  var mergedFieldNames = React13.useMemo(
    function() {
      return fillFieldNames(fieldNames);
    },
    [JSON.stringify(fieldNames)]
  );
  var mergedOptions = React13.useMemo(
    function() {
      return options || [];
    },
    [options]
  );
  var getPathKeyEntities = useEntities_default(mergedOptions, mergedFieldNames);
  var getValueByKeyPath = React13.useCallback(
    function(pathKeys) {
      var keyPathEntities = getPathKeyEntities();
      return pathKeys.map(function(pathKey) {
        var nodes = keyPathEntities[pathKey].nodes;
        return nodes.map(function(node) {
          return node[mergedFieldNames.value];
        });
      });
    },
    [getPathKeyEntities, mergedFieldNames]
  );
  var _useMergedState3 = useMergedState('', {
      value: searchValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState4 = _slicedToArray4(_useMergedState3, 2),
    mergedSearchValue = _useMergedState4[0],
    setSearchValue = _useMergedState4[1];
  var onInternalSearch = function onInternalSearch2(searchText, info) {
    setSearchValue(searchText);
    if (info.source !== 'blur' && onSearch) {
      onSearch(searchText);
    }
  };
  var _useSearchConfig = useSearchConfig(showSearch),
    _useSearchConfig2 = _slicedToArray4(_useSearchConfig, 2),
    mergedShowSearch = _useSearchConfig2[0],
    searchConfig = _useSearchConfig2[1];
  var searchOptions = useSearchOptions_default(
    mergedSearchValue,
    mergedOptions,
    mergedFieldNames,
    dropdownPrefixCls || prefixCls,
    searchConfig,
    changeOnSelect
  );
  var getMissingValues = useMissingValues_default(mergedOptions, mergedFieldNames);
  var _React$useMemo = React13.useMemo(
      function() {
        var _getMissingValues = getMissingValues(rawValues),
          _getMissingValues2 = _slicedToArray4(_getMissingValues, 2),
          existValues = _getMissingValues2[0],
          missingValues = _getMissingValues2[1];
        if (!multiple || !rawValues.length) {
          return [existValues, [], missingValues];
        }
        var keyPathValues = toPathKeys(existValues);
        var keyPathEntities = getPathKeyEntities();
        var _conductCheck = conductCheck(keyPathValues, true, keyPathEntities),
          checkedKeys = _conductCheck.checkedKeys,
          halfCheckedKeys = _conductCheck.halfCheckedKeys;
        return [getValueByKeyPath(checkedKeys), getValueByKeyPath(halfCheckedKeys), missingValues];
      },
      [multiple, rawValues, getPathKeyEntities, getValueByKeyPath, getMissingValues]
    ),
    _React$useMemo2 = _slicedToArray4(_React$useMemo, 3),
    checkedValues = _React$useMemo2[0],
    halfCheckedValues = _React$useMemo2[1],
    missingCheckedValues = _React$useMemo2[2];
  var deDuplicatedValues = React13.useMemo(
    function() {
      var checkedKeys = toPathKeys(checkedValues);
      var deduplicateKeys = formatStrategyValues(checkedKeys, getPathKeyEntities, showCheckedStrategy);
      return [].concat(
        _toConsumableArray6(missingCheckedValues),
        _toConsumableArray6(getValueByKeyPath(deduplicateKeys))
      );
    },
    [checkedValues, getPathKeyEntities, getValueByKeyPath, missingCheckedValues, showCheckedStrategy]
  );
  var displayValues = useDisplayValues_default(
    deDuplicatedValues,
    mergedOptions,
    mergedFieldNames,
    multiple,
    displayRender
  );
  var triggerChange = useRefFunc(function(nextValues) {
    setRawValues(nextValues);
    if (onChange) {
      var nextRawValues = toRawValues(nextValues);
      var valueOptions = nextRawValues.map(function(valueCells) {
        return toPathOptions(valueCells, mergedOptions, mergedFieldNames).map(function(valueOpt) {
          return valueOpt.option;
        });
      });
      var triggerValues = multiple ? nextRawValues : nextRawValues[0];
      var triggerOptions = multiple ? valueOptions : valueOptions[0];
      onChange(triggerValues, triggerOptions);
    }
  });
  var onInternalSelect = useRefFunc(function(valuePath) {
    setSearchValue('');
    if (!multiple) {
      triggerChange(valuePath);
    } else {
      var pathKey = toPathKey(valuePath);
      var checkedPathKeys = toPathKeys(checkedValues);
      var halfCheckedPathKeys = toPathKeys(halfCheckedValues);
      var existInChecked = checkedPathKeys.includes(pathKey);
      var existInMissing = missingCheckedValues.some(function(valueCells) {
        return toPathKey(valueCells) === pathKey;
      });
      var nextCheckedValues = checkedValues;
      var nextMissingValues = missingCheckedValues;
      if (existInMissing && !existInChecked) {
        nextMissingValues = missingCheckedValues.filter(function(valueCells) {
          return toPathKey(valueCells) !== pathKey;
        });
      } else {
        var nextRawCheckedKeys = existInChecked
          ? checkedPathKeys.filter(function(key) {
              return key !== pathKey;
            })
          : [].concat(_toConsumableArray6(checkedPathKeys), [pathKey]);
        var pathKeyEntities = getPathKeyEntities();
        var checkedKeys;
        if (existInChecked) {
          var _conductCheck2 = conductCheck(
            nextRawCheckedKeys,
            {
              checked: false,
              halfCheckedKeys: halfCheckedPathKeys
            },
            pathKeyEntities
          );
          checkedKeys = _conductCheck2.checkedKeys;
        } else {
          var _conductCheck3 = conductCheck(nextRawCheckedKeys, true, pathKeyEntities);
          checkedKeys = _conductCheck3.checkedKeys;
        }
        var deDuplicatedKeys = formatStrategyValues(checkedKeys, getPathKeyEntities, showCheckedStrategy);
        nextCheckedValues = getValueByKeyPath(deDuplicatedKeys);
      }
      triggerChange([].concat(_toConsumableArray6(nextMissingValues), _toConsumableArray6(nextCheckedValues)));
    }
  });
  var onDisplayValuesChange = function onDisplayValuesChange2(_, info) {
    if (info.type === 'clear') {
      triggerChange([]);
      return;
    }
    var valueCells = info.values[0].valueCells;
    onInternalSelect(valueCells);
  };
  var mergedOpen = open !== void 0 ? open : popupVisible;
  var mergedDropdownClassName = dropdownClassName || popupClassName;
  var mergedPlacement = placement || popupPlacement;
  var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange2(nextVisible) {
    onDropdownVisibleChange === null || onDropdownVisibleChange === void 0
      ? void 0
      : onDropdownVisibleChange(nextVisible);
    onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextVisible);
  };
  if (true) {
    warningPropsUtil_default(props);
    warningNullOptions(mergedOptions, mergedFieldNames);
  }
  var cascaderContext = React13.useMemo(
    function() {
      return {
        options: mergedOptions,
        fieldNames: mergedFieldNames,
        values: checkedValues,
        halfValues: halfCheckedValues,
        changeOnSelect,
        onSelect: onInternalSelect,
        checkable,
        searchOptions,
        dropdownPrefixCls,
        loadData,
        expandTrigger,
        expandIcon,
        loadingIcon,
        dropdownMenuColumnStyle
      };
    },
    [
      mergedOptions,
      mergedFieldNames,
      checkedValues,
      halfCheckedValues,
      changeOnSelect,
      onInternalSelect,
      checkable,
      searchOptions,
      dropdownPrefixCls,
      loadData,
      expandTrigger,
      expandIcon,
      loadingIcon,
      dropdownMenuColumnStyle
    ]
  );
  var emptyOptions = !(mergedSearchValue ? searchOptions : mergedOptions).length;
  var dropdownStyle =
    (mergedSearchValue && searchConfig.matchInputWidth) || emptyOptions
      ? {}
      : {
          minWidth: 'auto'
        };
  return /* @__PURE__ */ React13.createElement(
    context_default.Provider,
    {
      value: cascaderContext
    },
    /* @__PURE__ */ React13.createElement(
      BaseSelect,
      _extends2({}, restProps, {
        ref,
        id: mergedId,
        prefixCls,
        dropdownMatchSelectWidth,
        dropdownStyle,
        displayValues,
        onDisplayValuesChange,
        mode: multiple ? 'multiple' : void 0,
        searchValue: mergedSearchValue,
        onSearch: onInternalSearch,
        showSearch: mergedShowSearch,
        OptionList: OptionList_default,
        emptyOptions,
        open: mergedOpen,
        dropdownClassName: mergedDropdownClassName,
        placement: mergedPlacement,
        onDropdownVisibleChange: onInternalDropdownVisibleChange,
        getRawInputElement: function getRawInputElement() {
          return children;
        }
      })
    )
  );
});
if (true) {
  Cascader.displayName = 'Cascader';
}
Cascader.SHOW_PARENT = SHOW_PARENT;
Cascader.SHOW_CHILD = SHOW_CHILD;
var Cascader_default = Cascader;

// esm-build-5fe17d94e318cf026bb63b7b5efda3e3d6edfb00-3061ebe6/node_modules/rc-cascader/es/index.js
var es_default = Cascader_default;
export { es_default as default };
