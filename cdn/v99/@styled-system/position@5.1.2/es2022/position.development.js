/* esm.sh - esbuild bundle(@styled-system/position@5.1.2) es2022 development */
// esm-build-b80d36865b13b570ab6a59de99720253099a7cf4-b5764a77/node_modules/@styled-system/position/dist/index.esm.js
import { system } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = system(config);
var index_esm_default = position;
export { index_esm_default as default, position };
