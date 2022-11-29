/* esm.sh - esbuild bundle(@styled-system/variant@5.1.5) es2022 development */
// esm-build-0490e8560494122088acafc9ecb1f3c04cf87388-84afcfaa/node_modules/@styled-system/variant/dist/index.esm.js
import { get, createParser } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
import css from '/cdn/v99/@styled-system/css@5.1.5/es2022/css.development.js';
var variant = function variant2(_ref) {
  var _config;
  var scale = _ref.scale,
    _ref$prop = _ref.prop,
    prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
    _ref$variants = _ref.variants,
    variants = _ref$variants === void 0 ? {} : _ref$variants,
    key = _ref.key;
  var sx;
  if (Object.keys(variants).length) {
    sx = function sx2(value, scale2, props) {
      return css(get(scale2, value, null))(props.theme);
    };
  } else {
    sx = function sx2(value, scale2) {
      return get(scale2, value, null);
    };
  }
  sx.scale = scale || key;
  sx.defaults = variants;
  var config = ((_config = {}), (_config[prop] = sx), _config);
  var parser = createParser(config);
  return parser;
};
var index_esm_default = variant;
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});
export { buttonStyle, colorStyle, index_esm_default as default, textStyle, variant };
