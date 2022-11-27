/* esm.sh - esbuild bundle(@ant-design/icons@4.8.0/es/utils) es2022 development */
// esm-build-ac405f2bf4af5c373f3949ad13b834a8038a4ea3-453cbe11/node_modules/@ant-design/icons/es/utils.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import { generate as generateColor } from '/cdn/v99/@ant-design/colors@6.0.0/es2022/colors.development.js';
import React, { useContext, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warn from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import { updateCSS } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/dynamicCSS.development.js';
import IconContext from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/components/Context.development.js';
function warning(valid, message) {
  warn(valid, '[@ant-design/icons] '.concat(message));
}
function isIconDefinition(target) {
  return (
    _typeof(target) === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (_typeof(target.icon) === 'object' || typeof target.icon === 'function')
  );
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ React.createElement(
      node.tag,
      _objectSpread(
        {
          key
        },
        normalizeAttrs(node.attrs)
      ),
      (node.children || []).map(function(child, index) {
        return generate(
          child,
          ''
            .concat(key, '-')
            .concat(node.tag, '-')
            .concat(index)
        );
      })
    );
  }
  return /* @__PURE__ */ React.createElement(
    node.tag,
    _objectSpread(
      _objectSpread(
        {
          key
        },
        normalizeAttrs(node.attrs)
      ),
      rootProps
    ),
    (node.children || []).map(function(child, index) {
      return generate(
        child,
        ''
          .concat(key, '-')
          .concat(node.tag, '-')
          .concat(index)
      );
    })
  );
}
function getSecondaryColor(primaryColor) {
  return generateColor(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles =
  '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n';
var useInsertStyles = function useInsertStyles2() {
  var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
  var _useContext = useContext(IconContext),
    csp = _useContext.csp;
  useEffect(function() {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp
    });
  }, []);
};
export {
  generate,
  getSecondaryColor,
  iconStyles,
  isIconDefinition,
  normalizeAttrs,
  normalizeTwoToneColors,
  svgBaseProps,
  useInsertStyles,
  warning
};
