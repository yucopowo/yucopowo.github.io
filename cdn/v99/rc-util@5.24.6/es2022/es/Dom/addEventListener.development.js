/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/addEventListener) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-d487b63337deed3aec6c5cead1230c2fa5973c22-b7acf555/node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener_exports = {};
__export(addEventListener_exports, {
  default: () => addEventListenerWrap
});
import ReactDOM from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
function addEventListenerWrap(target, eventType, cb, option) {
  var callback = ReactDOM.unstable_batchedUpdates
    ? function run(e) {
        ReactDOM.unstable_batchedUpdates(cb, e);
      }
    : cb;
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}

// esm-build-d487b63337deed3aec6c5cead1230c2fa5973c22-b7acf555/mod.js
var { default: __default, ...__rest } = addEventListener_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
