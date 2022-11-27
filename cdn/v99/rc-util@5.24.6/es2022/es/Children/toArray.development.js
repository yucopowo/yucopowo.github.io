/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Children/toArray) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-b3fe1257518eea7519cd5e7942ae228813e11a98-433b42d1/node_modules/rc-util/es/Children/toArray.js
var toArray_exports = {};
__export(toArray_exports, {
  default: () => toArray
});
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { isFragment } from '/cdn/v99/react-is@16.13.1/es2022/react-is.development.js';
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = [];
  React.Children.forEach(children, function(child) {
    if ((child === void 0 || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

// esm-build-b3fe1257518eea7519cd5e7942ae228813e11a98-433b42d1/mod.js
var { default: __default, ...__rest } = toArray_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
