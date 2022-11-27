/* esm.sh - esbuild bundle(rc-util@5.24.6/es/hooks/useMergedState) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState_exports = {};
__export(useMergedState_exports, {
  default: () => useMergedState
});
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useEvent from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useEvent.development.js';
import useLayoutEffect, {
  useLayoutUpdateEffect
} from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import useState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useState.development.js';
var Source;
(function(Source2) {
  Source2[(Source2['INNER'] = 0)] = 'INNER';
  Source2[(Source2['PROP'] = 1)] = 'PROP';
})(Source || (Source = {}));
function hasValue(value) {
  return value !== void 0;
}
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;
  var _useState = useState(function() {
      var finalValue = void 0;
      var source;
      if (hasValue(value)) {
        finalValue = value;
        source = Source.PROP;
      } else if (hasValue(defaultValue)) {
        finalValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        source = Source.PROP;
      } else {
        finalValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
        source = Source.INNER;
      }
      return [finalValue, source, finalValue];
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mergedValue = _useState2[0],
    setMergedValue = _useState2[1];
  var chosenValue = hasValue(value) ? value : mergedValue[0];
  var postMergedValue = postState ? postState(chosenValue) : chosenValue;
  useLayoutUpdateEffect(
    function() {
      setMergedValue(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          prevValue = _ref3[0];
        return [value, Source.PROP, prevValue];
      });
    },
    [value]
  );
  var changeEventPrevRef = React.useRef();
  var triggerChange = useEvent(function(updater, ignoreDestroy) {
    setMergedValue(function(prev) {
      var _prev = _slicedToArray(prev, 3),
        prevValue = _prev[0],
        prevSource = _prev[1],
        prevPrevValue = _prev[2];
      var nextValue = typeof updater === 'function' ? updater(prevValue) : updater;
      if (nextValue === prevValue) {
        return prev;
      }
      var overridePrevValue =
        prevSource === Source.INNER && changeEventPrevRef.current !== prevPrevValue ? prevPrevValue : prevValue;
      return [nextValue, Source.INNER, overridePrevValue];
    }, ignoreDestroy);
  });
  var onChangeFn = useEvent(onChange);
  useLayoutEffect(
    function() {
      var _mergedValue = _slicedToArray(mergedValue, 3),
        current = _mergedValue[0],
        source = _mergedValue[1],
        prev = _mergedValue[2];
      if (current !== prev && source === Source.INNER) {
        onChangeFn(current, prev);
        changeEventPrevRef.current = prev;
      }
    },
    [mergedValue]
  );
  return [postMergedValue, triggerChange];
}

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/mod.js
var { default: __default, ...__rest } = useMergedState_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
