/* esm.sh - esbuild bundle(rc-table@7.26.0/es/hooks/useStickyOffsets) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/hooks/useStickyOffsets.js
import { useMemo } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useStickyOffsets(colWidths, columnCount, direction) {
  var stickyOffsets = useMemo(
    function() {
      var leftOffsets = [];
      var rightOffsets = [];
      var left = 0;
      var right = 0;
      for (var start = 0; start < columnCount; start += 1) {
        if (direction === 'rtl') {
          rightOffsets[start] = right;
          right += colWidths[start] || 0;
          var end = columnCount - start - 1;
          leftOffsets[end] = left;
          left += colWidths[end] || 0;
        } else {
          leftOffsets[start] = left;
          left += colWidths[start] || 0;
          var _end = columnCount - start - 1;
          rightOffsets[_end] = right;
          right += colWidths[_end] || 0;
        }
      }
      return {
        left: leftOffsets,
        right: rightOffsets
      };
    },
    [colWidths, columnCount, direction]
  );
  return stickyOffsets;
}
var useStickyOffsets_default = useStickyOffsets;
export { useStickyOffsets_default as default };
