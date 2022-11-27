/* esm.sh - esbuild bundle(rc-table@7.26.0/es/utils/legacyUtil) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/utils/legacyUtil.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var _excluded = ['expandable'];
var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
function getExpandableProps(props) {
  var expandable = props.expandable,
    legacyExpandableConfig = _objectWithoutProperties(props, _excluded);
  var config;
  if ('expandable' in props) {
    config = _objectSpread(_objectSpread({}, legacyExpandableConfig), expandable);
  } else {
    if (
      [
        'indentSize',
        'expandedRowKeys',
        'defaultExpandedRowKeys',
        'defaultExpandAllRows',
        'expandedRowRender',
        'expandRowByClick',
        'expandIcon',
        'onExpand',
        'onExpandedRowsChange',
        'expandedRowClassName',
        'expandIconColumnIndex',
        'showExpandColumn'
      ].some(function(prop) {
        return prop in props;
      })
    ) {
      warning(false, 'expanded related props have been moved into `expandable`.');
    }
    config = legacyExpandableConfig;
  }
  if (config.showExpandColumn === false) {
    config.expandIconColumnIndex = -1;
  }
  return config;
}
export { INTERNAL_COL_DEFINE, getExpandableProps };
