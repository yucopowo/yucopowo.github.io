/* esm.sh - esbuild bundle(rc-table@7.26.0/es/ColGroup) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/ColGroup.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { INTERNAL_COL_DEFINE } from '/cdn/v99/rc-table@7.26.0/es2022/es/utils/legacyUtil.development.js';
var _excluded = ['columnType'];
function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
    columns = _ref.columns,
    columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length;
  var mustInsert = false;
  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[INTERNAL_COL_DEFINE];
    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {},
        columnType = _ref2.columnType,
        restAdditionalProps = _objectWithoutProperties(_ref2, _excluded);
      cols.unshift(
        /* @__PURE__ */ React.createElement(
          'col',
          _extends(
            {
              key: i,
              style: {
                width
              }
            },
            restAdditionalProps
          )
        )
      );
      mustInsert = true;
    }
  }
  return /* @__PURE__ */ React.createElement('colgroup', null, cols);
}
var ColGroup_default = ColGroup;
export { ColGroup_default as default };
