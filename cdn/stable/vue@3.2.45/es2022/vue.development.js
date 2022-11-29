/* esm.sh - esbuild bundle(vue@3.2.45) es2022 development */
// esm-build-7f4b71ee6acd9f6d405c32722b5bb83701b67add-47e0a2ff/node_modules/vue/dist/vue.runtime.esm-bundler.js
import { initCustomFormatter, warn } from '/cdn/v99/@vue/runtime-dom@3.2.45/es2022/runtime-dom.development.js';
export * from '/cdn/v99/@vue/runtime-dom@3.2.45/es2022/runtime-dom.development.js';
function initDev() {
  {
    initCustomFormatter();
  }
}
if (true) {
  initDev();
}
var compile = () => {
  if (true) {
    warn(
      `Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
    );
  }
};
export { compile };
