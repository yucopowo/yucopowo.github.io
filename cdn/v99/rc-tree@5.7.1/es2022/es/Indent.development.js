/* esm.sh - esbuild bundle(rc-tree@5.7.1/es/Indent) es2022 development */
// esm-build-d307eca056d046a687266974bde00830d5e9a446-9ed8b58b/node_modules/rc-tree/es/Indent.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var Indent = function Indent2(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = ''.concat(prefixCls, '-indent-unit');
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _classNames;
    list.push(
      /* @__PURE__ */ React.createElement('span', {
        key: i,
        className: classNames(
          baseClassName,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(baseClassName, '-start'), isStart[i]),
          _defineProperty(_classNames, ''.concat(baseClassName, '-end'), isEnd[i]),
          _classNames)
        )
      })
    );
  }
  return /* @__PURE__ */ React.createElement(
    'span',
    {
      'aria-hidden': 'true',
      className: ''.concat(prefixCls, '-indent')
    },
    list
  );
};
var Indent_default = /* @__PURE__ */ React.memo(Indent);
export { Indent_default as default };
