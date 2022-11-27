/* esm.sh - esbuild bundle(rc-table@7.26.0/es/utils/expandUtil) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/utils/expandUtil.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function renderExpandIcon(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    record = _ref.record,
    onExpand = _ref.onExpand,
    expanded = _ref.expanded,
    expandable = _ref.expandable;
  var expandClassName = ''.concat(prefixCls, '-row-expand-icon');
  if (!expandable) {
    return /* @__PURE__ */ React.createElement('span', {
      className: classNames(expandClassName, ''.concat(prefixCls, '-row-spaced'))
    });
  }
  var onClick = function onClick2(event) {
    onExpand(record, event);
    event.stopPropagation();
  };
  return /* @__PURE__ */ React.createElement('span', {
    className: classNames(
      expandClassName,
      ((_classNames = {}),
      _defineProperty(_classNames, ''.concat(prefixCls, '-row-expanded'), expanded),
      _defineProperty(_classNames, ''.concat(prefixCls, '-row-collapsed'), !expanded),
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
export { findAllChildrenKeys, renderExpandIcon };
