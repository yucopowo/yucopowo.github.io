/* esm.sh - esbuild bundle(rc-table@7.26.0/es/hooks/useFrame) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/hooks/useFrame.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import { useRef, useState, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useLayoutState(defaultState) {
  var stateRef = useRef(defaultState);
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  var lastPromiseRef = useRef(null);
  var updateBatchRef = useRef([]);
  function setFrameState(updater) {
    updateBatchRef.current.push(updater);
    var promise = Promise.resolve();
    lastPromiseRef.current = promise;
    promise.then(function() {
      if (lastPromiseRef.current === promise) {
        var prevBatch = updateBatchRef.current;
        var prevState = stateRef.current;
        updateBatchRef.current = [];
        prevBatch.forEach(function(batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        lastPromiseRef.current = null;
        if (prevState !== stateRef.current) {
          forceUpdate({});
        }
      }
    });
  }
  useEffect(function() {
    return function() {
      lastPromiseRef.current = null;
    };
  }, []);
  return [stateRef.current, setFrameState];
}
function useTimeoutLock(defaultState) {
  var frameRef = useRef(defaultState || null);
  var timeoutRef = useRef();
  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }
  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function() {
      frameRef.current = null;
      timeoutRef.current = void 0;
    }, 100);
  }
  function getState() {
    return frameRef.current;
  }
  useEffect(function() {
    return cleanUp;
  }, []);
  return [setState, getState];
}
export { useLayoutState, useTimeoutLock };
