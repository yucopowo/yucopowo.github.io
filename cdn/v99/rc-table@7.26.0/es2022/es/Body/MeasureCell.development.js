/* esm.sh - esbuild bundle(rc-table@7.26.0/es/Body/MeasureCell) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/Body/MeasureCell.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
function MeasureCell(_ref) {
  var columnKey = _ref.columnKey,
    onColumnResize = _ref.onColumnResize;
  var cellRef = React.useRef();
  React.useEffect(function() {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(
    ResizeObserver,
    {
      data: columnKey
    },
    /* @__PURE__ */ React.createElement(
      'td',
      {
        ref: cellRef,
        style: {
          padding: 0,
          border: 0,
          height: 0
        }
      },
      /* @__PURE__ */ React.createElement(
        'div',
        {
          style: {
            height: 0,
            overflow: 'hidden'
          }
        },
        '\xA0'
      )
    )
  );
}
export { MeasureCell as default };
