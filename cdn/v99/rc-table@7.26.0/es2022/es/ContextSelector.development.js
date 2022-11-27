/* esm.sh - esbuild bundle(rc-table@7.26.0/es/ContextSelector) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/ContextSelector/index.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import useEvent from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useEvent.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
function createContext2() {
  var Context = /* @__PURE__ */ React.createContext(null);
  var Provider = function Provider2(_ref) {
    var value = _ref.value,
      children = _ref.children;
    var valueRef = React.useRef(value);
    valueRef.current = value;
    var _React$useState = React.useState(function() {
        return {
          getValue: function getValue() {
            return valueRef.current;
          },
          listeners: /* @__PURE__ */ new Set()
        };
      }),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      context = _React$useState2[0];
    useLayoutEffect(
      function() {
        context.listeners.forEach(function(listener) {
          listener(value);
        });
      },
      [value]
    );
    return /* @__PURE__ */ React.createElement(
      Context.Provider,
      {
        value: context
      },
      children
    );
  };
  return {
    Context,
    Provider
  };
}
function useContextSelector(holder, selector) {
  var eventSelector = useEvent(selector);
  var context = React.useContext(holder === null || holder === void 0 ? void 0 : holder.Context);
  var _ref2 = context || {},
    listeners = _ref2.listeners,
    getValue = _ref2.getValue;
  var _React$useState3 = React.useState(function() {
      return eventSelector(context ? getValue() : null);
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value = _React$useState4[0],
    setValue = _React$useState4[1];
  useLayoutEffect(
    function() {
      if (!context) {
        return;
      }
      function trigger(nextValue) {
        setValue(function(prev) {
          var selectedValue = eventSelector(nextValue);
          return shallowEqual(prev, selectedValue) ? prev : selectedValue;
        });
      }
      listeners.add(trigger);
      return function() {
        listeners.delete(trigger);
      };
    },
    [context]
  );
  return value;
}
export { createContext2 as createContext, useContextSelector };
