/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Body/MeasureRow) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Body/MeasureRow.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
import MeasureCell from '/cdn/v99/rc-table@7.26.0/es2022/es/Body/MeasureCell.development.js';
function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls,
    columnsKey = _ref.columnsKey,
    onColumnResize = _ref.onColumnResize;
  return /* @__PURE__ */ React.createElement(
    'tr',
    {
      'aria-hidden': 'true',
      className: ''.concat(prefixCls, '-measure-row'),
      style: {
        height: 0,
        fontSize: 0
      }
    },
    /* @__PURE__ */ React.createElement(
      ResizeObserver.Collection,
      {
        onBatchResize: function onBatchResize(infoList) {
          infoList.forEach(function(_ref2) {
            var columnKey = _ref2.data,
              size = _ref2.size;
            onColumnResize(columnKey, size.offsetWidth);
          });
        }
      },
      columnsKey.map(function(columnKey) {
        return /* @__PURE__ */ React.createElement(MeasureCell, {
          key: columnKey,
          columnKey,
          onColumnResize
        });
      })
    )
  );
}
export { MeasureRow as default };
