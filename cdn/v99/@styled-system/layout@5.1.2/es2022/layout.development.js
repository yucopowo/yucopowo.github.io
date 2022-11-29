/* esm.sh - esbuild bundle(@styled-system/layout@5.1.2) es2022 development */
// esm-build-52dcc02cf5ba91553b39f9108736707215b4095a-ce6c8eca/node_modules/@styled-system/layout/dist/index.esm.js
import { system, get } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
var isNumber = function isNumber2(n) {
  return typeof n === 'number' && !isNaN(n);
};
var getWidth = function getWidth2(n, scale) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};
var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);
var index_esm_default = layout;
export { index_esm_default as default, layout };
