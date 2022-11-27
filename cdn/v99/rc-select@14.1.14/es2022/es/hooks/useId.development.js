/* esm.sh - esbuild bundle(rc-select@14.1.14/es/hooks/useId) es2022 development */
// esm-build-7a1a8fa1740e3c7b6d5a80a273f537e21d9d6730-016c4ebc/node_modules/rc-select/es/hooks/useId.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var uuid = 0;
var isBrowserClient = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
function useId(id) {
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  React.useEffect(function() {
    setInnerId('rc_select_'.concat(getUUID()));
  }, []);
  return id || innerId;
}
export { useId as default, getUUID, isBrowserClient };
