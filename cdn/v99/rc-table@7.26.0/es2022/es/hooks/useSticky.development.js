/* esm.sh - esbuild bundle(rc-table@7.26.0/es/hooks/useSticky) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/hooks/useSticky.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var defaultContainer = canUseDom() ? window : null;
function useSticky(sticky, prefixCls) {
  var _ref = _typeof(sticky) === 'object' ? sticky : {},
    _ref$offsetHeader = _ref.offsetHeader,
    offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader,
    _ref$offsetSummary = _ref.offsetSummary,
    offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary,
    _ref$offsetScroll = _ref.offsetScroll,
    offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll,
    _ref$getContainer = _ref.getContainer,
    getContainer =
      _ref$getContainer === void 0
        ? function() {
            return defaultContainer;
          }
        : _ref$getContainer;
  var container = getContainer() || defaultContainer;
  return React.useMemo(
    function() {
      var isSticky = !!sticky;
      return {
        isSticky,
        stickyClassName: isSticky ? ''.concat(prefixCls, '-sticky-holder') : '',
        offsetHeader,
        offsetSummary,
        offsetScroll,
        container
      };
    },
    [offsetScroll, offsetHeader, offsetSummary, prefixCls, container]
  );
}
export { useSticky as default };
