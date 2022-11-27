/* esm.sh - esbuild bundle(rc-util@5.24.6/es/ref) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-8dce9cf3b9acf490de66c5496bbf13fb60a77d4d-e1eb30d8/node_modules/rc-util/es/ref.js
var ref_exports = {};
__export(ref_exports, {
  composeRef: () => composeRef,
  fillRef: () => fillRef,
  supportRef: () => supportRef,
  useComposeRef: () => useComposeRef
});
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import { isMemo } from '/cdn/v99/react-is@16.13.1/es2022/react-is.development.js';
import useMemo from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMemo.development.js';
export function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
export function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function(ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function(node) {
    refs.forEach(function(ref) {
      fillRef(ref, node);
    });
  };
}
export function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(
    function() {
      return composeRef.apply(void 0, refs);
    },
    refs,
    function(prev, next) {
      return (
        prev.length === next.length &&
        prev.every(function(ref, i) {
          return ref === next[i];
        })
      );
    }
  );
}
export function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (
    typeof type === 'function' &&
    !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)
  ) {
    return false;
  }
  if (
    typeof nodeOrComponent === 'function' &&
    !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0
      ? void 0
      : _nodeOrComponent$prot.render)
  ) {
    return false;
  }
  return true;
}

// esm-build-8dce9cf3b9acf490de66c5496bbf13fb60a77d4d-e1eb30d8/mod.js
var { default: __default, ...__rest } = ref_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
