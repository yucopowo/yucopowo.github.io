/* esm.sh - esbuild bundle(@styled-system/color@5.1.2) es2022 development */
// esm-build-c0093b8a96b27eb7ae811343c5f9a95416f4db53-1ea10865/node_modules/@styled-system/color/dist/index.esm.js
import { system } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = system(config);
var index_esm_default = color;
export { color, index_esm_default as default };
